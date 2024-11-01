
export interface CustomLinkProps {
  href: string;
  className?: string;
  children: string;
}

const CustomLink = ({ href, className = '', children }: CustomLinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
