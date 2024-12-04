import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'; // Adicione FaGithub

const SocialIcons = () => {
  const iconClass =
    'text-pink-600 text-2xl hover:text-pink-700 transition-transform transform hover:scale-110';

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={iconClass} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={iconClass} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className={iconClass} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className={iconClass} />
      </a>
    </div>
  );
};

export default SocialIcons;
