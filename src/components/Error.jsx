import React from 'react';
import {CgDanger} from "react-icons/cg"
function Error(props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <CgDanger className='w-[130px] h-[130px] text-yellow-400'/>
            <h1 className='text-white text-[3rem] font-semibold text-center'>Oops! Something went wrong</h1>
            <p className='text-white'>Check your internet connection and reload the page.</p>
        </div>
    );
}

export default Error;