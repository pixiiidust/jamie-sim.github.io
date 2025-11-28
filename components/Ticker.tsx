import React from 'react';
import { TICKER_TEXT } from '../constants';

const Ticker: React.FC = () => {
  return (
    <div className="sticky top-0 z-[100] bg-black text-white py-1.5 border-b-4 border-black flex justify-center items-center w-full shadow-md">
      <div className="font-pixel text-xs md:text-sm tracking-[0.2em] uppercase text-center truncate px-4">
        {TICKER_TEXT}
      </div>
    </div>
  );
};

export default Ticker;