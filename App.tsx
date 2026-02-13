import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Plus, 
  Settings, 
  Share, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import EmailSeqTile from './EmailSeqTile';

// Defining colors in JS to match the HTML config for inline usage if needed,
// though mostly using Tailwind classes.
const COLORS = {
  primary: "#f97415",
  backgroundDark: "#0f172a",
};

export default function App() {
  return (
    <div className="bg-[#f8f7f5] dark:bg-[#0f172a] font-sans min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-orange-500/30">
      
      {/* Background Wash Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(249,116,21,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative flex flex-col min-h-screen w-full z-10">
        
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-white/10 px-6 py-4 md:px-10 bg-[#231810]/40 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-[#f97415] rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <LayoutDashboard size={20} />
              </div>
              <h2 className="text-white text-xl font-bold leading-tight tracking-tight">SequenceFlow</h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Campaigns</a>
              <a className="text-white text-sm font-medium border-b-2 border-[#f97415] pb-1" href="#">Automations</a>
              <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Analytics</a>
            </nav>
          </div>
          
          <div className="flex flex-1 justify-end gap-6 items-center">
            <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64 relative group">
              <div className="flex w-full flex-1 items-center rounded-full h-full bg-white/5 border border-white/10 px-4 focus-within:bg-white/10 focus-within:border-white/20 transition-all">
                <div className="text-white/40 flex items-center justify-center mr-2">
                  <Search size={18} />
                </div>
                <input 
                  className="w-full min-w-0 bg-transparent border-none outline-none text-white placeholder:text-white/30 text-sm focus:ring-0" 
                  placeholder="Search campaign..." 
                />
              </div>
            </label>
            
            <button className="flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-[#f97415] text-white text-sm font-bold hover:bg-[#f97415]/90 transition-all shadow-lg shadow-orange-500/20 active:scale-95">
              <Plus size={16} strokeWidth={3} />
              <span>New Sequence</span>
            </button>
            
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-white/20 shadow-lg cursor-pointer hover:border-white/40 transition-colors" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8ToQFeTpRr8s76iP3bJn_NajCywpBa2y7yx-jEdJ-0PMvGozHcfE7p1RA2qACUX02s9LATlWEH6oFw4zAimBGEsmvdsU-7XzEF47yqRfMdIpAAK6XBbj3U8dfiugi8l_S16eM8Mwls-8hXhzadTmN9fEPAXDg_IQWd5UM2l4-IEtTy6hwggxC6rZxMOzqmOXv5fRycEHXxl4i63STEdF3t3twnKrVZhN692_T0jp7Ldh2DGzSriPx4dTjSUvJdeOA3TsJGyA-smEr")' }}
            />
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center py-10 px-4">
          <div className="max-w-[1000px] w-full flex flex-col gap-8">
            
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-end gap-4 bg-[#231810]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-tight">Sequence Ladder</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-white/60 text-base font-medium">Live Tracking: Autumn Outreach v2.4</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white text-sm font-bold border border-white/10 hover:bg-white/10 transition-all">
                  <Settings size={16} /> Settings
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f97415] text-white text-sm font-bold shadow-lg shadow-[#f97415]/20 hover:scale-105 transition-all">
                  <Share size={16} /> Export Report
                </button>
              </div>
            </div>

            {/* Main Sequence Ladder Container (Replaced with React Component) */}
            <div className="bg-[#231810]/40 backdrop-blur-3xl border border-white/10 p-4 md:p-10 rounded-[2rem] relative overflow-hidden shadow-2xl">
              {/* Abstract glow effect inside container */}
              <div className="absolute -top-20 -right-20 size-64 bg-[#f97415]/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              {/* THE ISOLATED COMPONENT */}
              <EmailSeqTile />
              
            </div>

            {/* Footer Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#231810]/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-2 border-l-4 border-l-[#f97415] shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
                <p className="text-white/60 text-sm font-medium">Daily Engagement</p>
                <p className="text-white text-3xl font-bold tracking-tight">4,290</p>
                <p className="text-green-400 text-xs font-bold flex items-center gap-1">
                  <TrendingUp size={14} /> 12% vs yesterday
                </p>
              </div>
              
              <div className="bg-[#231810]/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-2 border-l-4 border-l-blue-500 shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
                <p className="text-white/60 text-sm font-medium">Avg. Time to Open</p>
                <p className="text-white text-3xl font-bold tracking-tight">2.4 hrs</p>
                <p className="text-white/40 text-xs font-bold flex items-center gap-1">
                  <Clock size={14} /> Industry Avg: 3.1h
                </p>
              </div>
              
              <div className="bg-[#231810]/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-2 border-l-4 border-l-emerald-500 shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
                <p className="text-white/60 text-sm font-medium">Bounce Rate</p>
                <p className="text-white text-3xl font-bold tracking-tight">0.8%</p>
                <p className="text-green-400 text-xs font-bold flex items-center gap-1">
                  <ShieldCheck size={14} /> Exceptional
                </p>
              </div>
            </div>

            {/* Analytics Section Header */}
            <div className="flex items-center justify-between px-4 pb-4">
              <h2 className="text-white text-2xl font-bold">Conversion Funnel</h2>
              <button className="text-[#f97415] text-sm font-bold flex items-center gap-1 hover:underline group">
                Detailed Analytics <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Funnel Preview (Static Card) */}
            <div className="bg-[#231810]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-1 overflow-hidden h-64 relative group shadow-2xl">
              <div 
                className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn0Es1r1PvkkGMPoAVC7C5vRrGH945HVXDfXFcd-ciJDBHmy5_gaKrHHAzTIq4OdfCBB-0XW6NlIbcQhbKJ601mpf--iBgFhFpdkXiQ03v830AkAfB-69OfjKhBJ9ucsZY2-73JdHOPfIc3sHkRs1pzQKwWl65M9r2GeWVQfvKrP6pLDrZgecK5fn2KKDuCuGl6ZtLA8E6D19_436kA4mJK-B2VISJ6XWXDYG8IjyM8koGdmwSAdrQ1FKod2HjthLnSlU1UFNgz9nz')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-xl font-bold">Historical Performance</h3>
                    <p className="text-white/60 text-sm">Comparing current sequence to last 30 days benchmark</p>
                  </div>
                  <div className="flex gap-2 items-end h-32">
                    <div className="w-8 h-[50%] bg-[#f97415]/20 rounded-t-md hover:h-[60%] transition-all duration-300"></div>
                    <div className="w-8 h-[75%] bg-[#f97415]/40 rounded-t-md hover:h-[85%] transition-all duration-300"></div>
                    <div className="w-8 h-[60%] bg-[#f97415]/30 rounded-t-md hover:h-[70%] transition-all duration-300"></div>
                    <div className="w-8 h-[100%] bg-[#f97415] rounded-t-md hover:h-[105%] transition-all duration-300 shadow-lg shadow-orange-500/20"></div>
                    <div className="w-8 h-[85%] bg-[#f97415]/60 rounded-t-md hover:h-[95%] transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
        
        <footer className="py-10"></footer>
      </div>
    </div>
  );
}