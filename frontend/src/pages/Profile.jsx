import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div className="bg-surface text-on-background font-body min-h-screen flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative">
        <Header title="Profile" />
        <div className="pt-8 pb-12 px-12 max-w-7xl mx-auto space-y-12">
          <section className="flex flex-col md:flex-row items-end gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img alt="Alexander Pierce" className="relative w-48 h-48 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMA6L0l2ZKdaDcCU70N3qxRV0sfZHhDx_3v52Db-JmjguuXAiTWh4Y7kNTQ9-4BHBXv24HoEC_TDpJKnZ9aTftXOt1dkyFt_EObNbRZtHW-jIcD2sUTeg5m3VBDsPD3QW_o-cog3GaucYS3X15WoZMKRwPNjeSKxa1u-Pxkeiw8H6sT74CWQywnVTF8-7Q7WmjQgEbfojF0nvx0jV0Ll9oOjAVIIbSlVN4kA23Qv5vMEexcbhMexaAPtUAr_3kSEZuLFAza9mAlE"/>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Lead Technical Contributor</span>
                <div className="h-[1px] flex-1 bg-outline-variant/15"></div>
              </div>
              <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface">Alexander Pierce</h1>
              <div className="flex flex-wrap gap-6 text-on-surface-variant font-body font-medium">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">alternate_email</span>
                  <span>a.pierce@blueprint.lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">fingerprint</span>
                  <span>REG-2024-8842</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => alert('Editing Profile...')} className="bg-surface-container-high px-6 py-3 rounded-md font-headline text-xs font-bold uppercase tracking-widest text-on-secondary-container hover:bg-surface-container-highest transition-colors active:scale-95">
                  Edit Profile
              </button>
              <button onClick={() => alert('Opening Account Settings...')} className="bg-blueprint-gradient px-6 py-3 rounded-md font-headline text-xs font-bold uppercase tracking-widest text-white shadow-lg active:scale-95 flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">settings</span>
                  Account Settings
              </button>
            </div>
          </section>
          
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[120px]">verified</span>
              </div>
              <div className="space-y-1 relative z-10">
                <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 font-bold">Reputation System</span>
                <h3 className="font-headline text-2xl font-bold">Contribution Score</h3>
              </div>
              <div className="py-8 relative z-10">
                <span className="font-headline text-7xl font-bold text-primary tracking-tighter">4,892</span>
                <span className="font-headline text-xl text-secondary ml-2">pts</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded shadow-sm border border-outline-variant/10 relative z-10">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">Verified Mentor</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Structural Dynamics Expert</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 font-bold">Domain Expertise</span>
                  <h3 className="font-headline text-2xl font-bold">Interests & Topics</h3>
                </div>
                <button className="text-primary hover:underline font-label text-xs font-bold uppercase">Browse Topics</button>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">precision_manufacturing</span>
                  <span className="font-body text-sm font-semibold">Aerospace Dynamics</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">architecture</span>
                  <span className="font-body text-sm font-semibold">Civil Engineering</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">bolt</span>
                  <span className="font-body text-sm font-semibold">Renewable Systems</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">memory</span>
                  <span className="font-body text-sm font-semibold">Neural Architectures</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">science</span>
                  <span className="font-body text-sm font-semibold">Material Science</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">tsunami</span>
                  <span className="font-body text-sm font-semibold">Fluid Mechanics</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-primary/40 transition-colors group cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-primary">robot_2</span>
                  <span className="font-body text-sm font-semibold">Mechatronics</span>
                </div>
              </div>
              <div className="bg-surface-container-high/50 p-6 rounded-lg flex items-center justify-between border border-dashed border-outline-variant/40">
                <div className="flex items-center gap-4">
                  <div className="bg-surface p-3 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary">add</span>
                  </div>
                  <p className="font-body text-sm font-medium text-on-surface-variant">Add more specific research fields to improve recommendations.</p>
                </div>
                <button className="font-headline text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-container">Add Tags</button>
              </div>
            </div>
          </div>
          
          <section className="space-y-8">
            <div className="flex items-baseline gap-4">
              <h3 className="font-headline text-3xl font-bold tracking-tight">Recent Activity</h3>
              <div className="h-[2px] w-12 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Library Column */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-500 font-bold">Saved Materials</span>
                  <button className="text-primary text-xs font-bold">View Library</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex gap-5 group">
                    <div className="w-24 h-24 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                      <img alt="Technical Drawing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_PJAFg_pOVDx_zimlxsvh_01wEWfEF3ls5kDfYI29J_HpqZjRTyEfdyWvy0dxuUrtmRpheiaQDq_J-0ipqtnBOFCrZECnoWpF7w8377wIfrKhL3nJoEiPYC13kV-Bzywqj7GkL3BO9qqH_jMocAwBrRapyAE9CrrQz0BzlD7ZcLtbJzuZXs28eL7XD458PrJ6FigYuGlP0ahVEJU0GhkHaWwJaLsCRdG0P-ul-oRVDAtms6U92VH8OSefko7ZTT8e4BLF2i46jew"/>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors">Advanced Stress Analysis v2.4</h4>
                      <p className="font-body text-xs text-on-surface-variant mt-1">Uploaded by Dr. Aris Thorne • Dec 12, 2023</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="font-label text-[9px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-bold">PDF</span>
                        <span className="font-label text-[9px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-bold">4.2 MB</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex gap-5 group">
                    <div className="w-24 h-24 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                      <img alt="Robot Arm" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5wpeQIU8m1wlxj5QSw4WuOtL1EiM6XSg9y_9MFW0luusg3C-KaQdQMOqiJ8Ht0Lq8fmkYQ7DVuzf_oJ57ijhkiPYNilKOKSrj1thf9CspMcAqphoffdMHSqFyHjCxmQlYJsB9mZQbjPvttI6I3_Uk8m8H8fzTgpTSEF3bBiK5VHd3xt2lZddpOyNbj8SX8s6CjrKfCKUH28GU6KTezlDc4NK-fBS3ulNGBV7soaWK4U3zcCf7sxgALy9AZzMqA_hx4jboazO4Qk"/>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors">Kinematic Control Systems</h4>
                      <p className="font-body text-xs text-on-surface-variant mt-1">Seminar Series • Nov 28, 2023</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="font-label text-[9px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-bold">MP4</span>
                        <span className="font-label text-[9px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-bold">12:45 MIN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-500 font-bold">Recent Contributions</span>
                  <button className="text-primary text-xs font-bold">History</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-6 rounded-xl relative group overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-label text-[10px] text-primary font-extrabold tracking-widest uppercase">Community Answer</span>
                      <span className="text-[10px] text-slate-400 font-body">2 days ago</span>
                    </div>
                    <h4 className="font-headline text-base font-bold mb-2">Resolving Euler-Bernoulli Beam Deviations</h4>
                    <p className="font-body text-sm text-on-surface-variant line-clamp-2">"The primary issue in the provided schematic relates to the assumption of rigid boundary conditions when the actual support..."</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
                        <span className="text-xs font-bold text-secondary">124</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base text-secondary">comment</span>
                        <span className="text-xs font-bold text-secondary">12</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl relative group overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-label text-[10px] text-primary font-extrabold tracking-widest uppercase">Module Upload</span>
                      <span className="text-[10px] text-slate-400 font-body">1 week ago</span>
                    </div>
                    <h4 className="font-headline text-base font-bold mb-2">Python Script for Thermal Distribution Analysis</h4>
                    <p className="font-body text-sm text-on-surface-variant line-clamp-2">A comprehensive library for mapping 3D heat dissipation in non-uniform semiconductor materials.</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base text-secondary">download</span>
                        <span className="text-xs font-bold text-secondary">512</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold text-secondary">89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
