import React from 'react';

const ResultView = ({ result, history, onReset }) => {
    return (
        <div className="space-y-8 animate-scale-in">
            {/* Result Card */}
            <div className="bg-white rounded-xl shadow-md border-t-4 border-t-google_blue overflow-hidden">
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-google_blue">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl text-gray-500 font-medium mb-2 uppercase tracking-wide">Recommended Service</h2>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{result.title}</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">{result.description}</p>

                    <div className="flex justify-center gap-4">
                        <a
                            href={result.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-google_blue text-white font-medium rounded shadow hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                            Read Documentation
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <button
                            onClick={onReset}
                            className="px-6 py-3 bg-white text-gray-700 font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            Start Over
                        </button>
                    </div>
                </div>
            </div>

            {/* Decision Path Visualization */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-6 border-b pb-2">Why this recommendation?</h3>

                <div className="relative pl-4 md:pl-8">
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                    <div className="space-y-8">
                        {history.map((step, index) => (
                            <div key={index} className="relative flex items-start">
                                <div className="absolute -left-[25px] md:-left-[41px] bg-white p-1">
                                    <div className="w-3 h-3 rounded-full bg-google_blue border-2 border-white ring-2 ring-blue-100"></div>
                                </div>
                                <div className="bg-gray-50 rounded p-4 w-full">
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Question {index + 1}</p>
                                    <p className="text-gray-800 font-medium mb-2">{step.questionText}</p>
                                    <div className="flex items-center gap-2 text-google_blue font-medium bg-white px-3 py-1 rounded border border-blue-100 inline-block text-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {step.selectedOptionLabel}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Node */}
                    <div className="relative flex items-start mt-8">
                        <div className="absolute -left-[25px] md:-left-[41px] bg-white p-1">
                            <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white ring-2 ring-green-100 flex items-center justify-center text-white text-[10px]">
                                ✓
                            </div>
                        </div>
                        <div className="ml-0">
                            <p className="font-bold text-gray-800 text-lg">Result: {result.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultView;
