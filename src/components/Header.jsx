import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg className="w-8 h-8 text-google_blue" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    <h1 className="text-xl font-medium text-gray-700 tracking-tight">Google Cloud Service Advisor</h1>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                    <img src={require('../assets/mymegam-logo.png')} alt="MyMegam" className="h-10 w-auto" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-800 leading-none tracking-tight">MyMegam</span>
                        <span className="text-sm text-gray-500 font-medium leading-none mt-1">Product Family</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
