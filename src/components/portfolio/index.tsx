import React from 'react';
import PortfolioCard from './portfolioCard';
import { portfolioCards } from '../../lib/data/portfolioCards';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      {portfolioCards.map(card => (
        <PortfolioCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Portfolio;