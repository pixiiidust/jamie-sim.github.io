import React from 'react';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import Ticker from './components/Ticker';

const App: React.FC = () => {
  return (
    <div className="bg-white border-[6px] border-black w-full shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] flex flex-col relative">
      {/* Decorative corner marker */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-black clip-triangle pointer-events-none z-[101]"></div>
      
      <Ticker />
      <Header />
      <ContentGrid />
      
      {/* Bottom status bar styling to match document look */}
      <div className="border-t-4 border-black p-2 flex justify-between items-center text-xs font-bold uppercase tracking-widest bg-white">
         <span>STATUS: ONLINE</span>
         <span>SYS_VER: 2.1.0</span>
      </div>
    </div>
  );
};

export default App;