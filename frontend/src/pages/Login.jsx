import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        credential: credentialResponse.credential,
        role: role
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/profile');
    } catch (err) {
      console.error('Google login failed, mocking offline mode', err);
      // MOCK FALLBACK
      localStorage.setItem('token', 'mock_offline_token');
      localStorage.setItem('user', JSON.stringify({ name: 'Alexander Pierce', email: 'a.pierce@blueprint.lab', role: role }));
      navigate('/profile');
    }
  };

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/guest', { role });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/profile');
    } catch (err) {
      console.error('Guest login failed, mocking offline mode', err);
      // MOCK FALLBACK
      localStorage.setItem('token', 'mock_guest_token');
      localStorage.setItem('user', JSON.stringify({ name: 'Guest User', email: 'guest@blueprint.lab', role: role }));
      navigate('/profile');
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden bg-surface">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Brand Identity Header */}
      <div className="mb-12 text-center relative z-10">
        <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-on-surface uppercase mb-2">Project BluePrint</h1>
        <div className="h-1 w-12 bg-primary mx-auto"></div>
      </div>
      
      {/* Auth Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-outline-variant/15">
          <div className="mb-10 text-center">
            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight leading-tight">Join the Social Ecosystem for Engineers</h2>
            <p className="text-on-surface-variant text-sm mt-3 font-medium">Select your role to personalize your journey.</p>
          </div>
          
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <label className="group cursor-pointer">
              <input checked={role === 'student'} onChange={() => setRole('student')} className="peer sr-only" name="role" type="radio" value="student"/>
              <div className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300 group-hover:scale-[1.02]">
                <span className="material-symbols-outlined text-primary mb-2">school</span>
                <span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant peer-checked:text-primary">Student</span>
              </div>
            </label>
            <label className="group cursor-pointer">
              <input checked={role === 'expert'} onChange={() => setRole('expert')} className="peer sr-only" name="role" type="radio" value="expert"/>
              <div className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300 group-hover:scale-[1.02]">
                <span className="material-symbols-outlined text-primary mb-2">psychology</span>
                <span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant peer-checked:text-primary">Expert/Mentor</span>
              </div>
            </label>
          </div>
          
          {/* Social Logins */}
          <div className="space-y-3 mb-8 w-full flex flex-col items-center">
             <div className="w-full flex justify-center py-2">
               <GoogleLogin 
                 onSuccess={handleGoogleSuccess}
                 onError={() => console.error('Login Failed')}
                 useOneTap
                 theme="filled_blue"
                 shape="pill"
                 width="100%"
               />
             </div>
            <button className="w-full flex items-center justify-center gap-3 py-3.5 bg-surface-container-lowest border border-outline-variant/30 rounded-full hover:bg-surface-container-low transition-colors duration-200">
              <span className="material-symbols-outlined text-[#24292e]">terminal</span>
              <span className="font-body font-semibold text-on-surface text-sm">Continue with GitHub</span>
            </button>
          </div>
          
          <div className="relative flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-outline-variant/20"></div>
            <span className="flex-shrink mx-4 text-xs font-label uppercase tracking-widest text-outline">or</span>
            <div className="flex-grow border-t border-outline-variant/20"></div>
          </div>
          
          <div className="text-center">
            <button onClick={handleGuestLogin} className="inline-block text-primary font-body font-bold text-sm hover:underline decoration-2 underline-offset-4">
               Continue as Guest
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer Callouts */}
      <div className="mt-20 w-full max-w-5xl grid md:grid-cols-2 gap-12 relative z-10">
        <div className="group">
          <div className="mb-4 flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-headline font-bold text-lg tracking-tight">The Bones</h3>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Access our Curriculum-Based Library. A precision-engineered repository organized by <span className="text-primary font-semibold">Departmental Hierarchy</span>, providing structural foundations.
          </p>
        </div>
        <div className="group">
          <div className="mb-4 flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="font-headline font-bold text-lg tracking-tight">The Brain</h3>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            Engage with the Real-Time Community Hub. A neural network for <span className="text-primary font-semibold">collaborative problem-solving</span>, where experts sync to solve challenges.
          </p>
        </div>
      </div>
    </main>
  );
}
