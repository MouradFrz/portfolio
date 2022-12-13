import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Work from '../components/Work';
import {client} from '../api/SanityConfig'
import {useFetch} from '../hooks/useFetch'
function Home(props) {

    return (
        <div className='flex justify-center flex-col '>
            <Hero/>
            <AboutMe/>
            <Work/>
        </div>
    );
}

export default Home;