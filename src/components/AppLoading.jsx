import React from 'react';
import logo from '../../public/logo.svg'
function AppLoading(props) {
    return (
        <div className='h-[100vh] w-full bg-primary flex justify-center items-center'>
            <img src={logo} alt="Logo" />

        </div>
    );
}

export default AppLoading;