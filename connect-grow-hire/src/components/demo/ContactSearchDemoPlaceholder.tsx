import React from 'react';

export const ContactSearchDemoPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 from-slate-100/80 to-slate-200/60 flex flex-col gap-4 p-8">
      {/* Input Fields */}
      <div className="flex gap-4">
        <div className="flex-1 h-12 bg-white/5 dark:bg-white/5 bg-slate-200/60 dark:bg-white/5 rounded-lg border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 px-4 flex items-center text-base text-gray-300 dark:text-gray-300 text-slate-700">
          Firm: e.g., Goldman Sachs
        </div>
        <div className="flex-1 h-12 bg-white/5 dark:bg-white/5 bg-slate-200/60 dark:bg-white/5 rounded-lg border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 px-4 flex items-center text-base text-gray-300 dark:text-gray-300 text-slate-700">
          Role: e.g., Investment Banking Analyst
        </div>
      </div>
      
      {/* Expanded Table */}
      <div className="flex-1 bg-black/20 dark:bg-black/20 bg-slate-100/60 dark:bg-black/20 rounded-lg border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4 text-sm text-gray-400 dark:text-gray-400 text-slate-600 dark:text-gray-400 border-b border-white/10 dark:border-white/10 border-slate-300/30 dark:border-white/10 font-medium">
          <div>Name</div>
          <div>Title</div>
          <div>Firm</div>
          <div>Email Draft</div>
        </div>
        <div className="p-4 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="grid grid-cols-4 gap-4 text-sm text-gray-300 dark:text-gray-300 text-slate-700 dark:text-gray-300 py-2 border-b border-white/5 dark:border-white/5 border-slate-300/20 dark:border-white/5">
              <div className="truncate font-medium">John Doe {i}</div>
              <div className="truncate">Investment Banking Analyst</div>
              <div className="truncate">Goldman Sachs</div>
              <div className="truncate text-blue-400 dark:text-blue-400 text-blue-600 dark:text-blue-400">Draft ready</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

