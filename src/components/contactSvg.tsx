import React from 'react';
import CustomLink from './customLink';

interface ContactSvgProps {
  href: string;
  src: string;
  alt: string;
}
const ContactSvg: React.FC<ContactSvgProps> = ({ href, src, alt }) => {
  return (
    <div className="clickable-button">
      <CustomLink href={href} target="_blank">
        <img src={src} alt={alt} className="w-8 h-8"/>
      </CustomLink>
    </div>
  );
};

export default ContactSvg;