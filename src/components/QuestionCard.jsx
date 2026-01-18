import React from 'react';

const QuestionCard = ({ question, onOptionSelect, onBack, canGoBack }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 animate-fade-in">
            <div className="mb-6">
                <h2 className="text-2xl font-normal text-gray-800 mb-2">{question.text}</h2>
                <p className="text-gray-500 text-sm">Select the best option that describes your requirement.</p>
            </div>

            <div className="grid gap-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onOptionSelect(option)}
                        className="text-left px-5 py-4 rounded-md border border-gray-200 hover:border-google_blue hover:bg-blue-50 transition-all duration-200 group flex items-center justify-between"
                    >
                        <span className="font-medium text-gray-700 group-hover:text-google_blue">{option.label}</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-google_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                ))}
            </div>

            {canGoBack && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to previous question
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
