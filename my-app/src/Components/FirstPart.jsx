import React from 'react';

const FirstPart = () => {
    return (
        <div className="flex ">
            {/* First Part */}
            <div className="flex-1 p-4 max-w-lg">
                <div className="rounded-lg p-4">
                    {/* Heading */}
                    <h1 className="text-6xl font-bold mb-4">
                        Discovering the<br />
                        <span className="inline-block align-middle">Undiscovered</span><br />
                        <span className="inline-block align-bottom">Charms</span>.
                    </h1>

                    {/* Text Content */}
                    <p className=" pt-5 mb-4 text-gray-600">
                        Provider in Yogyakarta with a sustainable tourism concept,
                        <span className="lg:flex">delivering a meaningful journey through cycling tours.</span>
                    </p>

                    {/* Input Field */}
                    <div className="mt-10 max-w-sm relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Search Icon */}
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m5.21-6.79A10 10 0 1113 3a10 10 0 018.21 13.21z"></path>
                            </svg>
                        </span>
                        <input type="text" className="rounded-full py-2 pl-10 pr-8 border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full" placeholder="Enter text..." />
                        <button className="absolute inset-y-0 right-0 flex items-center justify-center px-2 bg-blue-500 text-white rounded-full">
                            {/* Button Icon */}
                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.707 4.707a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 7.414V16a1 1 0 11-2 0V7.414L4.707 12.12a1 1 0 01-1.414-1.414l6-6z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Images */}
                    <div className=" mt-10 flex mt-3">
                        <img className="mr-3 h-40 w-50 rounded-2xl" src="https://media.istockphoto.com/id/678558908/photo/cyclist-with-mountain-bike-on-the-hill-under-blue-sky.jpg?s=612x612&w=is&k=20&c=6ylFHh3o6pQrz3pBBgCoB4sN6CVmPH3C7qr_OvDIMrY=" alt="Image 1" />
                        <img className="mr-3 h-40 w-50 rounded-2xl" src="https://media.istockphoto.com/id/678558908/photo/cyclist-with-mountain-bike-on-the-hill-under-blue-sky.jpg?s=612x612&w=is&k=20&c=6ylFHh3o6pQrz3pBBgCoB4sN6CVmPH3C7qr_OvDIMrY=" alt="Image 1" />

                    </div>
                </div>
            </div>

            {/* Second Part */}
            <div className="ml-10 rounded-2xl m-5 h-400 w-1/4 bg-gray-100 m">
                <img src="https://res.cloudinary.com/dvu6xxiqx/image/upload/v1713369205/Colins-Knolly-Fugitive-29er-41-removebg-preview_badm2o.png" alt="Image 3" className="max-h-screen w-full" />
            </div>

            {/* Third Part */}
            <div className=" p-4 h-100 w-400">
                <div className="bg-gray-200 rounded-lg p-4">
                    <img src="image4.jpg" alt="Image 4" className="w-full rounded-lg mb-4" />
                    <p>Some text below the image.</p>
                </div>
            </div>
        </div>
    );
};

export default FirstPart;
