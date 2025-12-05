import React, { useState, useEffect } from 'react';

const INTERESTS = [
  'Consulting',
  'Healthcare',
  'Investment Banking',
  'Audit',
  'Delivery Driver',
  'Veterinarian',
  'Product Management',
  'Marketing',
  'Data Science',
];

interface AnimatedInterestTextProps {
  className?: string;
}

export const AnimatedInterestText: React.FC<AnimatedInterestTextProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % INTERESTS.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <span
      className="inline-block min-w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative inline-block">
        <span
          key={currentIndex}
          className={`inline-block font-semibold ${className || 'text-blue-400'}`}
          style={{
            animation: 'fade-in 0.5s ease-in-out',
          }}
        >
          {INTERESTS[currentIndex]}
        </span>
      </span>
    </span>
  );
};

