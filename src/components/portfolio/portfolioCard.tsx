import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-darkBlue bg-lightBlue">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button
        className="bg-customYellow text-xl font-bold rounded-full px-16 clickable-button"
        onClick={() => window.open(projectUrl, '_blank', 'noopener,noreferrer')}
      >
          View Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;