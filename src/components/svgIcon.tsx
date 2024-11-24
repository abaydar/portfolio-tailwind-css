import { ComponentProps, FC, useEffect, useRef, useState } from 'react';

interface SvgIconProps extends ComponentProps<'svg'> {
  name: string;
  alt?: string;
}

const useSvgIconImport = (name: string) => {
  const importRef = useRef<FC<ComponentProps<'svg'>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importRef.current = (
          await import(`../assets/icons/${name}.svg?react`)
        ).default;
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};

export const SvgIcon = ({ name, alt, ...props }: SvgIconProps) => {
  const { loading, error, Svg } = useSvgIconImport(name);

  if (error) {
    return '';
  }

  if (loading) {
    return 'Loading...';
  }

  if (!Svg) {
    return null;
  }

  return (
    <span role="img" aria-label={alt}>
      <Svg {...props} aria-hidden="true" />
    </span>
  );
};