import React from 'react'

const InvestPlan = () => {
    return (
        <div className="min-h-screen bg-[#ffffff] flex items-center ml-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="">
                    <svg className="-ml-12" width="602" height="678" viewBox="0 0 602 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 148.39L572.038 1.68412C587.22 -2.20961 602 9.25788 602 24.9318V504.989C602 515.947 594.577 525.514 583.962 528.237L0 678V148.39Z" fill="#D9D9D9" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold mt-3">Your Flexibility in Investment Plan for Better Future</h1>
                    <h1 className="mt-7 text-gray-500">Stock investment is not only for the upper class. Invezt is packed with professional-grade financial data and features to support everyone's investment.</h1>
                    <div>
                        <div className="flex flex-row mt-10 text-[#0D222D] font-semibold">
                            <div className="bg-[#E0ECEF] text-center h-10 w-10 rounded-[50%] content-center">1.</div>
                            <h1 className="mt-1 ml-3">Invest in any amount</h1>
                        </div>
                        <div className="flex flex-row mt-10 text-[#0D222D] font-semibold">
                            <div className="bg-[#E0ECEF] text-center h-10 w-10 rounded-[50%] content-center">2.</div>
                            <h1 className="mt-1 ml-3">No Investment Fee</h1>
                        </div>
                        <div className="flex flex-row mt-10 text-[#0D222D] font-semibold">
                            <div className="bg-[#E0ECEF] text-center h-10 w-10 rounded-[50%] content-center">3.</div>
                            <h1 className="mt-1 ml-3">Encrypted and Secured</h1>
                        </div>
                        <button className="bg-[#0D222D] hover:bg-gray-400 hover:text-black text-white rounded-3xl p-3 mt-10 px-5 ml-4">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestPlan