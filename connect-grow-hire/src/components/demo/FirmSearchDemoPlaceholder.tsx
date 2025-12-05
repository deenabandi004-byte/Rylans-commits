import React from 'react';

export const FirmSearchDemoPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 from-slate-100/80 to-slate-200/60 flex flex-col gap-6 p-8">
      {/* Input */}
      <div className="h-14 bg-white/5 dark:bg-white/5 bg-slate-200/60 dark:bg-white/5 rounded-lg border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 px-6 flex items-center text-lg text-gray-300 dark:text-gray-300 text-slate-700">
        What are you interested in?
      </div>
      
      {/* Result Grid - Larger */}
      <div className="flex-1 grid grid-cols-3 gap-4">
        {[
          { name: 'McKinsey & Company', tag: 'Consulting', size: 'large' },
          { name: 'Goldman Sachs', tag: 'Investment Banking', size: 'large' },
          { name: 'Deloitte', tag: 'Audit', size: 'medium' },
          { name: 'Bain & Company', tag: 'Consulting', size: 'medium' },
          { name: 'Morgan Stanley', tag: 'Investment Banking', size: 'medium' },
          { name: 'PwC', tag: 'Audit', size: 'small' },
        ].map((firm, i) => (
          <div key={i} className="bg-black/20 dark:bg-black/20 bg-slate-100/60 dark:bg-black/20 rounded-xl border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 p-4 flex flex-col gap-3 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/30 transition-colors">
            <div className="text-base font-semibold text-white dark:text-white text-slate-800 dark:text-white">{firm.name}</div>
            <div className="text-sm text-emerald-400 dark:text-emerald-400 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 bg-emerald-100/80 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg w-fit">{firm.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

