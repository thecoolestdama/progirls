import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  state: string;
  imageUrl: string;
  description: string;
  linkedinUrl: string;
  githubUrl: string;
  externalUrl: string;
}

const Card: React.FC<CardProps> = ({ name, state, imageUrl, description, linkedinUrl, githubUrl, externalUrl }) => {
  return (
    <div className="card">
      <div className="card-gradient"></div>

      <div className="card-header">
        <h2 className="card-name">{name}</h2>
        <p className="card-location">{state}</p>
      </div>

      <div className="card-image-container">
        <img src={imageUrl} alt={name} className="card-image" />
      </div>

      <div className="card-description">
        <p>{description}</p>
      </div>

      <div className="card-icons">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" alt="GitHub" />
        </a>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          <img src="/icons/external-link.png" alt="External Link" />
        </a>
      </div>
    </div>
  );
};

export default Card;
