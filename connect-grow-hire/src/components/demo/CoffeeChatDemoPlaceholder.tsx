import React from 'react';

export const CoffeeChatDemoPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex flex-col gap-6 p-8">
      {/* LinkedIn URL Input */}
      <div className="h-14 bg-white/5 rounded-lg border border-white/10 px-6 flex items-center text-lg text-gray-300">
        linkedin.com/in/professional-profile
      </div>
      
      {/* One-pager Panel - Expanded */}
      <div className="flex-1 bg-black/20 dark:bg-black/20 bg-slate-100/60 dark:bg-black/20 rounded-xl border border-white/10 dark:border-white/10 border-slate-300/40 dark:border-white/10 p-6 space-y-6 overflow-y-auto">
        <div>
          <div className="text-sm text-gray-400 mb-2 font-medium">Background</div>
          <div className="text-base text-gray-200 leading-relaxed">
            Investment Banking Analyst at Goldman Sachs with 5+ years of experience in M&A transactions. 
            Specializes in technology and healthcare sectors, having worked on deals totaling over $2B in value.
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2 font-medium">Key Experience</div>
          <div className="text-base text-gray-200 leading-relaxed">
            • Led due diligence on 3 major acquisitions<br/>
            • Built financial models for $500M+ transactions<br/>
            • Managed client relationships with C-suite executives
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2 font-medium">Suggested Questions</div>
          <ul className="text-base text-gray-200 space-y-2 list-disc list-inside">
            <li>What drew you to investment banking, and what keeps you motivated?</li>
            <li>How do you balance the demanding hours with personal life?</li>
            <li>What advice would you give to someone starting their career in IB?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

