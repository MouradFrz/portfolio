import React from 'react';

function Hero(props) {
    return (
        <div>
            <p className='sec-font text-sm text-secondary mb-2'>Hi, I am</p>
            <h2 className='text-[5.2rem] leading-[80px] font-bold tracking-wide'>Mourad Yaou.</h2>
            <p className='mt-3 leading-5'>I am a 21 years old <span className='text-secondary'>Software Engineer,</span> from Algeria<br />
            specializing in  <span className='text-secondary'>Full Stack Web Developement</span>. <br />
            and I am the person who person who will bring your website idea to life!
            </p>
            <a href="" className='outline-button mt-5 w-fit block'>Build my project!</a>
        </div>
    );
}

export default Hero;