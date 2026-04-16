import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-screen w-64 bg-surface dark:bg-slate-900 border-r border-outline-variant/20 flex flex-col p-4 space-y-6 shrink-0 sticky top-0">
      <div className="flex flex-col space-y-1 mb-4 px-2">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
             <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
           </div>
           <div>
             <h2 className="text-primary font-bold font-headline leading-tight">The Blueprint</h2>
             <p className="font-headline uppercase text-[10px] tracking-widest font-bold text-slate-500">Technical Precision</p>
           </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2">
        <p className="font-headline uppercase text-[10px] tracking-widest font-bold text-slate-400 px-2 pb-2">Main Navigation</p>
        <Link to="/upload" className={`flex items-center space-x-3 p-3 transition-transform duration-200 hover:translate-x-1 rounded-md ${isActive('/upload') ? 'bg-surface-container-lowest text-primary shadow-sm scale-[1.02]' : 'text-on-surface-variant opacity-70'}`}>
          <span className="material-symbols-outlined">architecture</span>
          <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Library</span>
        </Link>
        <button onClick={() => alert('Community Feed coming soon!')} className={`w-full flex items-center space-x-3 p-3 transition-transform duration-200 hover:translate-x-1 rounded-md text-on-surface-variant opacity-70`}>
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Community</span>
        </button>
        <Link to="/profile" className={`flex items-center space-x-3 p-3 transition-transform duration-200 hover:translate-x-1 rounded-md ${isActive('/profile') ? 'bg-surface-container-lowest text-primary shadow-sm scale-[1.02]' : 'text-on-surface-variant opacity-70'}`}>
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-headline uppercase text-[10px] tracking-widest font-bold">Profile</span>
        </Link>
      </nav>
      
      <div className="pt-4 border-t border-outline-variant/20">
        <Link to="/upload">
          <button className="w-full py-3 bg-blueprint-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 duration-200">
            <span className="material-symbols-outlined text-lg">cloud_upload</span>
            Upload Module
          </button>
        </Link>
      </div>
      
      <div className="space-y-1">
        <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 opacity-70 text-sm hover:translate-x-1 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined text-lg">menu_book</span>
          <span>Documentation</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 opacity-70 text-sm hover:translate-x-1 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined text-lg">contact_support</span>
          <span>Support</span>
        </a>
      </div>
    </aside>
  );
}
