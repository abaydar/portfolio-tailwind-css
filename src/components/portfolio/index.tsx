import React from 'react';
import PortfolioCard from './portfolioCard';
import { portfolioCards } from '../../lib/data/portfolioCards';

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col p-4 justify-between md:flex-row space-y-4 md:space-y-0 mb-24">
      {portfolioCards.map(card => (
        <PortfolioCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Portfolio;