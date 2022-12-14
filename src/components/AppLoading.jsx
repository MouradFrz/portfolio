import React from 'react';
import logo from '../../public/logo.svg'
import {motion} from 'framer-motion'
function AppLoading(props) {
    return (
        <div className='h-[100vh] w-full bg-primary flex justify-center items-center'>
            <motion.img src={logo} alt="Logo" initial={{ opacity:1  }} animate={{ opacity:0 }} transition={{ duration:0.5,delay:3.5 }} />

        </div>
    );
}

export default AppLoading;