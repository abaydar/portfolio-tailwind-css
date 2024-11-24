
export interface CustomLinkProps {
  href: string;
  className?: string;
  target?: string;
  children: string | JSX.Element;
}

const CustomLink = ({ href, className = '', target = '', children }: CustomLinkProps) => {
  return (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  );
};

export default CustomLink;
