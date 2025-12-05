import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const DynamicGradientBackground: React.FC = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="light-gradient-bg" />
        
        {/* Animated floating blue orbs */}
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-40 float-orb-1" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }} />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 float-orb-2" style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.18) 0%, transparent 70%)',
          top: '60%',
          right: '15%',
        }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-35 float-orb-3" style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
          bottom: '20%',
          left: '50%',
        }} />
        <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 float-orb-4" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          top: '40%',
          right: '40%',
        }} />
      </div>
    );
  }

  // Dark theme - animated dark background
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated gradient background */}
      <div className="dark-gradient-bg" />
      
      {/* Animated floating colored orbs */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 float-orb-1" style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
      }} />
      <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-25 float-orb-2" style={{
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.18) 0%, transparent 70%)',
        top: '60%',
        right: '15%',
      }} />
      <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 float-orb-3" style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        bottom: '20%',
        left: '50%',
      }} />
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-15 float-orb-4" style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
        top: '40%',
        right: '40%',
      }} />
    </div>
  );
};

