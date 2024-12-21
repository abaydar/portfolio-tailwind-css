import { useEffect, useState } from 'react';
import { navigationLinks } from '../lib/data/navigationLinks';
import CustomLink from './customLink';


const Header = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', updateHash);
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);
  return (
    <>
      <header className="sticky top-0 z-20 w-full bg-lightBlue border-b-2 border-darkBlue">
        <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center max-w-[1280px]">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigationLinks.map((link) => {
            const isHash = currentHash.includes(link) ? 'border-customYellow' : 'border-transparent';
            return (
              <CustomLink
                href={`#${link}`}
                className={`mr-5 border-b-4 ${isHash} no-underline text-darkBlue hover:border-customYellow active:text-customYellow`}
                key={link}
              >
                <div className="hover:animate-bounce">{link.charAt(0).toUpperCase() + link.slice(1)}</div>
              </CustomLink>
            );
          })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
