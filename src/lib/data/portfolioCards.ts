interface PortfolioCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const portfolioCards: PortfolioCard[] = [
  {
    id: 1,
    title: 'Tech Networking',
    description: 'An app to connect graduates entering the tech industry, offering a platform to share job-seeking experiences, discuss code, practice algorithms, and build connections.',
    imageUrl: '/public/images/tech-networking.jpg',
    projectUrl: 'https://wizardly-yonath-16fb12.netlify.app/'
  },
  {
    id: 2,
    title: 'Books Journey',
    description: 'An app designed for users to add their recently read books and explore what others are reading.',
    imageUrl: '/public/images/books-journey.webp',
    projectUrl: 'https://upbeat-mcclintock-08a2d1.netlify.app/'
  }
];