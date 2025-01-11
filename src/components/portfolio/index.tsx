import React from 'react';
import PortfolioCard from './portfolioCard';
import { portfolioCards } from '../../lib/data/portfolioCards';

const Portfolio: React.FC = () => {
  return (
    <div className='content-layout'>
      <h2 className="text-3xl text-left font-bold mb-8">Portfolio:</h2>
      <div className="flex flex-col justify-between items-center lg:flex-row lg:space-y-0 space-y-4 mb-40 lg:mb-24">
        {portfolioCards.map(card => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;