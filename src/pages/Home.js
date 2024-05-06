import React from 'react';
import QuoteGallery from '../components/QuoteGallery';

const Home = () => {
    return (
        <div className='flex flex-col'>
        <div className=''>
            <h1 className='text-4xl text-center'>Home</h1>
            <QuoteGallery />
        </div>
            
        </div>
    );
}

export default Home;
