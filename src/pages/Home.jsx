import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
function Home(props) {
    return (
        <div className='flex justify-center flex-col '>
            <Hero/>
            <AboutMe/>
        </div>
    );
}

export default Home;