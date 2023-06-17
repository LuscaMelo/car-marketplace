import React from 'react'

export const BigCard = () => {
    return (
        <div className='h-full bg-secondary rounded-3xl overflow-hidden'>
            <img className='rounded-3xl hover:scale-[1.03] duration-300' src="tesla.jpg" alt="tesla car image" />
            <div className='p-8'>
                <div>
                    <h3 className='text-3xl md:text-5xl mb-2'>Tesla Model S</h3>
                    <span className='text-2xl text-blue-300'>Electric</span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 my-8'>
                    <div className='bg-light p-4 rounded-3xl'>
                        <p className='text-lg md:text-2xl'>396 mi</p>
                        <span className='text-xs text-gray-400'>Range (EPA est.)</span>
                    </div>
                    <div className='bg-light p-4 rounded-3xl'>
                        <p className='text-lg md:text-2xl'>1.99 sec</p>
                        <span className='text-xs text-gray-400'>0 - 60 mph*</span>
                    </div>
                    <div className='bg-light p-4 rounded-3xl'>
                        <p className='text-lg md:text-2xl'>200mph</p>
                        <span className='text-xs text-gray-400'>Top Speed*</span>
                    </div>
                </div>
                <p className='text-gray-400 text-sm md:text-md'>
                    Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.<br />
                    Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.
                </p>
                <div className='flex mt-10 justify-between items-center'>
                    <div>
                        <span className='text-xl text-gray-400'>Price</span>
                        <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>$ 68 900</p>
                    </div>
                    <div>
                        <button className='bg-electric px-14 md:px-16 py-4 rounded-full text-secondary text-lg font-bold'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
