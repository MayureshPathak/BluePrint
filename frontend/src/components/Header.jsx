import React from 'react';

export default function Header({ title = 'Blueprint Lab' }) {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-8 py-3 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8 flex-1">
          <span className="font-headline font-bold text-2xl tracking-tighter text-primary md:hidden">Blueprint</span>
          <span className="font-headline font-bold text-2xl tracking-tighter text-primary hidden md:block">{title}</span>
          <div className="relative max-w-xl w-full hidden sm:block ml-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 transition-all font-body" placeholder="Search technical blueprints, modules, or assets..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
            <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6RmEbia5tuUodCF1wOo8a5Enq31F-1fMpv9zBUJzw_nDNYsT9LFkUxAQ9krRkUqltyRSqn7ubf2YOCUI94O_2f2LT8SyofIB4Ui6tUneJNqpyGZ3guT4xYHG5pOL1zOSrZ0q53-BTShxntVa4NRSh7451yYYRfvAp-vP05vuIbnCk5TEnqVYqd7V-FFrmVGEGIpMm95uRZ-SQWiH8_TZqz6NIFmDka0cqrZPXGAFzr6miu_KD5ZMA_MWEeE3Jo5lZBwEjpvhU66M"/>
          </div>
        </div>
      </div>
    </header>
  );
}
