import { navigationLinks } from '../lib/data/navigationLinks';
import CustomLink from './customLink';

const Header = () => {
  return (
    <>
      <header className="sticky bg-customIndigo body-font z-10 w-screen top-0 left-0 border-b-2 border-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {navigationLinks.map((link) => 
              <CustomLink href={`#${link}`} className="mr-5 border-b-4 border-transparent text-customGreen hover:border-pink-500 active:text-pink-500">
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
