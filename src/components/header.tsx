import { navigationLinks } from '../lib/data/navigationLinks';
import CustomLink from './customLink';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-20 w-full bg-lightBlue border-b-2 border-darkBlue">
        <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center max-w-[1280px]">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {navigationLinks.map((link) => 
              <CustomLink href={`#${link}`} className="mr-5 border-b-4 border-transparent no-underline text-darkBlue hover:border-customYellow active:text-customYellow">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </CustomLink>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
