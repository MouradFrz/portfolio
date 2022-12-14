import React from 'react';
import {BsFillPatchCheckFill} from 'react-icons/bs'
function SuccessPage(props) {
    return (
        <div className='h-[100vh] bg-primary flex flex-col justify-center items-center w-full'>
            <BsFillPatchCheckFill className='text-secondary w-[150px] h-[150px]'/>
            <h1 className='text-white text-[2rem] md:text-[3.4rem] font-bold text-center'>Your message has been sent successfully!</h1>
            <p className='text-white'>We will get back to you as soon as we can!</p>
        </div>
    );
}

export default SuccessPage;