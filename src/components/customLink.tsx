
export interface CustomLinkProps {
  href: string;
  className?: string;
  children: string | JSX.Element;
}

const CustomLink = ({ href, className = '', children }: CustomLinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
