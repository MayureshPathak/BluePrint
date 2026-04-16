import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Upload() {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Assets');

  const categories = ['All Assets', 'Mechanical', 'Electrical', 'Structural', 'Firmware'];

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface font-body">
      <Sidebar />
      <div className="flex-1 overflow-y-auto relative flex flex-col">
        <Header title="Blueprint Lab" />
        <div className="p-6 md:p-10 max-w-[1440px] mx-auto w-full space-y-12">
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                  <h1 className="text-5xl font-headline font-bold tracking-tight text-on-surface">The 'Bones' Library</h1>
                  <p className="text-on-surface-variant max-w-xl text-lg">Central hub for high-fidelity technical modules. Verified contributions and expert schemas.</p>
              </div>
              <button onClick={() => setShowModal(true)} className="flex items-center gap-3 px-8 py-4 technical-gradient text-white rounded-xl font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified Upload
              </button>
          </section>
          
          <section className="space-y-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-headline font-bold">My Contributions</h2>
                  <a className="text-primary text-sm font-semibold hover:underline" href="#">View All History</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm group hover:scale-[1.01] transition-all border-b-4 border-primary">
                      <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined">precision_manufacturing</span>
                          </div>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Live</span>
                      </div>
                      <h3 className="font-headline font-bold text-xl mb-2">Pneumatic Logic Gates</h3>
                      <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Complete assembly schema for industrial automated logic systems using low-pressure air flows.</p>
                      <div className="flex items-center gap-4 text-xs font-label text-slate-400">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 1.2k</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 450</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> 2d ago</span>
                      </div>
                  </div>
                  
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm group hover:scale-[1.01] transition-all border-b-4 border-secondary">
                      <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary">
                              <span className="material-symbols-outlined">bolt</span>
                          </div>
                          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Pending Review</span>
                      </div>
                      <h3 className="font-headline font-bold text-xl mb-2">Solid State Rectifier</h3>
                      <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Advanced cooling manifold design for high-voltage power conversion modules in renewable grids.</p>
                      <div className="flex items-center gap-4 text-xs font-label text-slate-400">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 0</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 0</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> 1h ago</span>
                      </div>
                  </div>
                  
                  <div onClick={() => setShowModal(true)} className="bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center p-6 rounded-xl opacity-60 hover:opacity-100 transition-opacity group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-outline">add</span>
                      </div>
                      <p className="font-bold text-sm">Contribute New Blueprint</p>
                  </div>
              </div>
          </section>
          
          <section className="space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-surface-container-highest pb-6">
                  <div className="flex items-center gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                      {categories.map((cat) => (
                          <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap ${activeCategory === cat ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-on-surface transition-colors'} pb-2 px-1`}
                          >
                            {cat}
                          </button>
                      ))}
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg text-sm font-semibold">
                          <span className="material-symbols-outlined text-lg">filter_list</span> Filters
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg text-sm font-semibold">
                          <span className="material-symbols-outlined text-lg">swap_vert</span> Sort
                      </button>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Asset Card 1 */}
                          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                              <div className="h-48 relative">
                                  <img alt="Technical Schema" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgxBQUw2QmAKjXKPslRHxRUWi0pnk9xnR5NtGysWA4NAisoTPCYmtaadiYcKiBVwRuA-bvHmNqavwSui3Y7aQtKDAQSJh2mTSRI22JETmweACNhU7HOkYKNkmyoOpPNJ-wuiIBSyMctJ5a_tZ2AOqT6TVhla1ejoQERf39sf0z9hanteGELnVQvD4_BIBl3lTwL8tKl5xh_kllIAxnvlhJgEY7G0lW74jepcx2ctf45I-0pkARGoo8VS2a_GmtUrqwfQE_54NYomA"/>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                  <div className="absolute bottom-4 left-4 text-white">
                                      <span className="bg-primary px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Verified Expert</span>
                                  </div>
                              </div>
                              <div className="p-5 space-y-3">
                                  <h4 className="font-bold text-lg font-headline">Turbine Fin Assembly v4.2</h4>
                                  <p className="text-sm text-on-surface-variant line-clamp-2">Optimized geometry for high-efficiency airflow in domestic wind power generators.</p>
                                  <div className="flex items-center justify-between pt-2">
                                      <div className="flex -space-x-2">
                                          <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center text-[10px] font-bold text-on-surface">JD</div>
                                          <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-300 flex items-center justify-center text-[10px] font-bold text-on-surface">AS</div>
                                      </div>
                                      <button className="text-primary font-bold text-sm flex items-center gap-1">
                                          View Spec <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          
                          {/* Asset Card 2 */}
                          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                              <div className="h-48 relative">
                                  <img alt="Circuitry Design" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ei_fYbPyHWNYpw0fPoRdZkCQJoM0-LNtw7ogvBhtjxxENGksK9feWhV6RsG0RXBi6WPIMBMdz3oXA3raYSHsgqJhDg9sgDoSm_GsCEPeBiSUUMBb3K2FF_alebh5y0blmeyPyUE3jYGme_ZtMmcG0IWEFWqkM8MKg2z8RkA9pMHlgmvdJm_ubz2mT8RVLLqSCPunOCV01bawjnctpD_itn36h9x122EzzTrIG-SX-VyM3oR0wjIPYdlDMhO8EJ9gfsVMmS16CkE"/>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                  <div className="absolute bottom-4 left-4 text-white">
                                      <span className="bg-secondary px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Community Choice</span>
                                  </div>
                              </div>
                              <div className="p-5 space-y-3">
                                  <h4 className="font-bold text-lg font-headline">Low-Noise Pre-Amp PCB</h4>
                                  <p className="text-sm text-on-surface-variant line-clamp-2">Ultra-clean signal path for analog-to-digital sensor conversion interfaces.</p>
                                  <div className="flex items-center justify-between pt-2">
                                      <div className="flex -space-x-2">
                                          <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center text-[10px] font-bold text-on-surface">RK</div>
                                      </div>
                                      <button className="text-primary font-bold text-sm flex items-center gap-1">
                                          View Spec <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="md:col-span-4 space-y-8">
                      <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
                          <div className="relative z-10 space-y-4">
                              <h3 className="font-headline font-bold text-2xl">Contribution Leaderboard</h3>
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl shadow-sm">
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center font-bold text-primary">1</div>
                                          <span className="font-semibold">Dr. Aris Thorne</span>
                                      </div>
                                      <span className="text-xs font-bold text-primary">42 Assets</span>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-surface-container-lowest/50 rounded-xl">
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-on-surface">2</div>
                                          <span className="font-semibold">Sarah Jenkins</span>
                                      </div>
                                      <span className="text-xs font-bold">28 Assets</span>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-surface-container-lowest/50 rounded-xl">
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-on-surface">3</div>
                                          <span className="font-semibold">You</span>
                                      </div>
                                      <span className="text-xs font-bold">14 Assets</span>
                                  </div>
                              </div>
                              <button className="w-full py-3 bg-on-surface text-surface rounded-xl font-bold text-sm uppercase tracking-widest transition-transform active:scale-95">
                                  Join Challenge
                              </button>
                          </div>
                          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                      </div>
                      
                      <div className="space-y-4">
                          <h3 className="font-headline font-bold text-lg">Requested Blueprints</h3>
                          <div className="p-4 bg-tertiary-fixed rounded-xl border-l-4 border-tertiary">
                              <div className="flex justify-between items-start mb-2">
                                  <span className="text-[10px] font-bold uppercase tracking-tighter text-on-tertiary-fixed-variant">Urgent Priority</span>
                                  <span className="text-xs font-bold text-on-tertiary-fixed">$250 Bounty</span>
                              </div>
                              <h4 className="font-bold text-on-tertiary-fixed">Vertical Axis Stabilizer</h4>
                              <p className="text-xs text-on-tertiary-fixed-variant mt-1">Needed for high-altitude UAV research projects. Focus on weight-to-torque ratios.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 technical-gradient p-8 text-white flex flex-col justify-between">
              <div>
                  <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <h2 className="text-3xl font-headline font-bold leading-tight">Contribute Expert Asset</h2>
                  <p className="text-white/80 mt-4 text-sm">Your technical contribution will be peer-reviewed and indexed for the global engineering community.</p>
              </div>
              <div className="hidden md:block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Verified Authority</p>
              </div>
            </div>
            <div className="flex-1 p-8">
              <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold font-headline">Technical Specs</h3>
                  <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-on-surface">
                      <span className="material-symbols-outlined">close</span>
                  </button>
              </div>
              <form className="space-y-5" onSubmit={handleUploadSubmit}>
                  <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Module Title</label>
                      <input className="w-full border-0 border-b border-outline-variant bg-transparent py-2 focus:border-primary focus:ring-0 transition-all" placeholder="e.g., Hydraulic Actuator v2.1" type="text"/>
                  </div>
                  <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Description</label>
                      <textarea className="w-full border-0 border-b border-outline-variant bg-transparent py-2 focus:border-primary focus:ring-0 transition-all resize-none" placeholder="Briefly explain the engineering application..." rows="2"></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Discipline</label>
                          <select className="w-full border-0 border-b border-outline-variant bg-transparent py-2 focus:border-primary focus:ring-0 transition-all text-sm">
                              <option>Mechanical</option>
                              <option>Electrical</option>
                              <option>Software</option>
                              <option>Systems</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">License</label>
                          <select className="w-full border-0 border-b border-outline-variant bg-transparent py-2 focus:border-primary focus:ring-0 transition-all text-sm">
                              <option>MIT Open</option>
                              <option>Attribution 4.0</option>
                              <option>Non-Commercial</option>
                          </select>
                      </div>
                  </div>
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center bg-surface-container-low group cursor-pointer hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-3xl text-slate-400 mb-2 group-hover:text-primary transition-colors">upload_file</span>
                      <p className="text-xs font-bold text-slate-500">Drag & Drop Technical Files (.cad, .sch, .pdf)</p>
                      <p className="text-[10px] text-slate-400 mt-1">Max file size: 500MB</p>
                  </div>
                  <div className="pt-4 flex gap-4">
                      <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-surface-container-high text-on-surface-variant rounded-xl font-bold text-sm active:scale-95 transition-transform" type="button">Cancel</button>
                      <button className="flex-[2] py-3 technical-gradient text-white rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform" type="submit">Publish Verified Asset</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
