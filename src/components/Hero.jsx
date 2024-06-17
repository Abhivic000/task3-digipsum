import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#ffffff] flex items-center justify-center min-h-screen p-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-semibold mb-5">
            Best Plan for your <span className="text-orange-400">Investment</span> solutions
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Invezt is an application for those of you who want to discuss, stock analysis and investment in one place.
          </p>
          <div className="flex justify-center lg:justify-start items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 bg-[#ecf1f1] rounded-3xl w-3/4 shadow-md px-7"
            />
            <button className="bg-black text-gray-300 py-3 px-4 rounded-3xl hover:bg-slate-500 hover:text-black absolute ml-[23rem]">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row text-4xl font-semibold text-[#1B4A58] gap-5 mt-9">
            <div className="mt-4">24K+</div>
            <svg width="2" height="82" viewBox="0 0 2 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" d="M1 1V81" stroke="url(#paint0_linear_2_34)" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_2_34" x1="1.5" y1="1" x2="1.5" y2="81" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0D222D" stop-opacity="0.1" />
                  <stop offset="0.5" stop-color="#0D222D" />
                  <stop offset="1" stop-color="#0D222D" stop-opacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-4"> 30 Years</div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-20 ml-32">
            <svg width="720" height="736" viewBox="0 0 710 703" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200.636C0 189.677 7.42406 180.11 18.0402 177.388L710 0V529.987L29.9598 704.32C14.7778 708.212 0 696.744 0 681.071V200.636Z" fill="#D9D9D9" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
