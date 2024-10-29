
export interface CustomLinkProps {
  href: string;
  children: string;
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <a href={href} className="mr-5 hover:text-gray-900">
      {children}
    </a>
  )
}

export default CustomLink