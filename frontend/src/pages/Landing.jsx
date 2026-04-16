import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col items-center p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <nav className="w-full max-w-7xl relative z-10 flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm font-bold">architecture</span>
          </div>
          <span className="font-headline font-bold text-xl uppercase tracking-tighter text-primary">BluePrint</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="font-headline text-sm font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors">Log In</Link>
          <Link to="/upload" className="font-headline text-sm font-bold uppercase tracking-widest bg-primary text-white px-5 py-2 rounded-lg shadow-lg hover:bg-primary-container transition-colors">Start Building</Link>
        </div>
      </nav>

      <main className="w-full max-w-5xl z-10 text-center flex flex-col items-center mt-12 space-y-8">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter leading-tight">
          The Social Ecosystem <br/> <span className="text-transparent bg-clip-text technical-gradient">For Engineers.</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
          Project BluePrint is an all-in-one digital library and community hub addressing the problem of fragmented and unorganized online information. A centralized repository organized strictly by Departmental Hierarchy.
        </p>
        <div className="flex gap-4 pt-6">
          <Link to="/login" className="technical-gradient text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-primary/20 transition-all active:scale-95 text-lg flex items-center gap-2">
            Join the Ecosystem
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </main>

      <section className="w-full max-w-6xl mt-32 z-10 grid md:grid-cols-2 gap-12">
        <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-outline-variant/15 flex flex-col items-start hover:shadow-lg transition-shadow">
           <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
             <span className="material-symbols-outlined text-3xl">architecture</span>
           </div>
           <h3 className="font-headline text-2xl font-bold mb-4">The Bones</h3>
           <p className="text-on-surface-variant leading-relaxed">
             A structured digital library storing diagrams and technical summaries. Eliminate the 1st and 2nd-year "bottleneck" and prevent academic knowledge from being lost between semesters in the high-workload environment.
           </p>
        </div>
        <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-outline-variant/15 flex flex-col items-start hover:shadow-lg transition-shadow">
           <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
             <span className="material-symbols-outlined text-3xl">psychology</span>
           </div>
           <h3 className="font-headline text-2xl font-bold mb-4">The Brain</h3>
           <p className="text-on-surface-variant leading-relaxed">
             A dynamic community feed where students and developers participate in real-time problem-solving. Targeting the $1.4 billion student collaboration market with interactive, intelligent discussions.
           </p>
        </div>
      </section>

      <section className="w-full max-w-6xl mt-32 z-10 text-center">
        <h2 className="font-headline text-4xl font-bold mb-12 tracking-tight">The "Beginner to Builder" Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
             <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">MP</div>
             <h4 className="font-headline font-bold text-lg">Mayuresh Pathak</h4>
             <span className="font-label text-xs uppercase tracking-widest text-primary mb-4 font-bold">The Architect</span>
             <p className="text-sm text-on-surface-variant">Backend and Supabase integration pioneer. Setup Google OAuth 2.0 identity management, secure file storage, and database schemas.</p>
          </div>
          <div className="flex flex-col items-center bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
             <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-white text-2xl font-bold mb-4">PJ</div>
             <h4 className="font-headline font-bold text-lg">Parth Jaiswal</h4>
             <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 font-bold">The Builder</span>
             <p className="text-sm text-on-surface-variant">Focuses on the Web Frontend using React.js and Tailwind CSS. Evolving the main dashboard interface into a dynamic community feed.</p>
          </div>
          <div className="flex flex-col items-center bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
             <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center text-white text-2xl font-bold mb-4">RD</div>
             <h4 className="font-headline font-bold text-lg">Rushil Dhale</h4>
             <span className="font-label text-xs uppercase tracking-widest text-tertiary mb-4 font-bold">The Mobile Lead</span>
             <p className="text-sm text-on-surface-variant">Managing native Android application using Kotlin. Optimizing the "discussing and helping" experience on small screens with high performance.</p>
          </div>
        </div>
      </section>
      
      <footer className="w-full max-w-6xl mt-32 border-t border-outline-variant/20 pt-8 pb-12 flex justify-between items-center z-10 text-sm text-outline font-medium">
        <span>© 2026 Project BluePrint. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
