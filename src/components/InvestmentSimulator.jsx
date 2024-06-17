import React from 'react';

const InvestmentSimulator = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        <span className="text-orange-500">Simulate</span> your Investment Plan with Single Click
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Input your initial and recurring investment, and simulate your plan
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5">
        <div className="bg-[#F6F9FA] p-8 rounded-lg shadow-md w-full md:w-[50%] mb-8 mr-32 md:mb-0">
          <h2 className="text-xl font-bold mb-6">Investment Simulator</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Simulate Invest in 1 Year</label>
            <select className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2">
              <option>Monthly Invest</option>
              <option>Yearly Invest</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Select Stocks</label>
            <select className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2">
              <option>BBCA</option>
              <option>AAPL</option>
              <option>GOOGL</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Amount Invest</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md bg-gray-200 text-gray-500 text-sm">$</span>
              <input type="number" className="flex-1 block w-full rounded-none rounded-r-md bg-gray-100 border border-gray-300 p-2" placeholder="3,000" />
            </div>
          </div>
          <button className="w-full bg-[#0D222D] text-white p-3 rounded-3xl hover:bg-blue-700 transition duration-300">
            Start Simulate
          </button>
        </div>

        {/* Investment Chart Section */}
        <div className="bg-[#F6F9FA] p-6 rounded-lg shadow-md w-full md:w-[70%]">
          <img src="https://via.placeholder.com/900x500" alt="Investment Chart" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentSimulator;
