import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg shadow-black text-darkBlue bg-lightBlue px-12 py-8">
      <div className="font-bold text-xl mb-2">{title}</div>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="py-4">
        <p className="text-base">{description}</p>
      </div>
      <button
        className="bg-customYellow text-xl font-bold rounded-full px-8 clickable-button"
        onClick={() => window.open(projectUrl, '_blank', 'noopener,noreferrer')}
      >
          View Project
        </button>
    </div>
  );
};

export default PortfolioCard;