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
    title: 'Project One',
    description: 'This is the first project',
    imageUrl: 'https://via.placeholder.com/150',
    projectUrl: 'https://www.example.com'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the second project',
    imageUrl: 'https://via.placeholder.com/150',
    projectUrl: 'https://www.example.com'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the third project',
    imageUrl: 'https://via.placeholder.com/150',
    projectUrl: 'https://www.example.com'
  },
];