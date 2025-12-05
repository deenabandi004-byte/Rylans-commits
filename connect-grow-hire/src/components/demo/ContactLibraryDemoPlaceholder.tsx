import React from 'react';

export const ContactLibraryDemoPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex flex-col gap-6 p-8">
      {/* Column Headers */}
      <div className="grid grid-cols-4 gap-4 text-sm text-gray-400 border-b border-white/10 pb-4 font-semibold">
        <div>New</div>
        <div>Emailed</div>
        <div>Scheduled</div>
        <div>In Progress</div>
      </div>
      
      {/* Contact Cards - Larger */}
      <div className="flex-1 grid grid-cols-4 gap-4">
        {['New', 'Emailed', 'Scheduled', 'In Progress'].map((stage, i) => (
          <div key={i} className="space-y-3">
            {[1, 2, 3].map((j) => (
              <div key={j} className="bg-black/20 dark:bg-black/20 bg-slate-100/60 dark:bg-black/20 rounded-xl border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 p-4 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-colors">
                <div className="text-base font-semibold text-white mb-1">John Doe {j}</div>
                <div className="text-sm text-gray-400 mb-2">Investment Banking Analyst</div>
                <div className="text-xs text-gray-500">Goldman Sachs</div>
                {stage === 'Emailed' && (
                  <div className="text-sm text-cyan-400 mt-3 flex items-center gap-1">
                    <span>✓</span> Replied
                  </div>
                )}
                {stage === 'Scheduled' && (
                  <div className="text-sm text-emerald-400 mt-3">📅 Tomorrow 2pm</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

