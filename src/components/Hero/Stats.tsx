import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
  isReliable?: boolean;
  isDark?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, isReliable, isDark }) => {
  return (
    <div className={`px-8 py-6 rounded-lg ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="flex items-center gap-2">
        <span className="text-4xl font-bold">{number}</span>
        {isReliable && (
          <span className="text-xs uppercase bg-white/10 px-2 py-1 rounded">Featured</span>
        )}
      </div>
      <p className="text-sm mt-1 opacity-60 uppercase tracking-wider">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <StatItem number="15+" label="Years Experience" />
      <StatItem number="50+" label="Productions" isReliable />
      <StatItem number="12" label="Industry Awards" isDark />
    </div>
  );
};

export default Stats;