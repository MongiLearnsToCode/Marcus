import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-none border border-primary-200 hover:border-accent-300 transition-colors duration-300">
      <div className="text-accent-700 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-medium text-primary-900 mb-3">{title}</h3>
      <p className="text-primary-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;