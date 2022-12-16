import React from 'react';
import {Outlet,Link} from 'react-router-dom'
import image from '/logo.svg'
import {AiFillCaretLeft} from 'react-icons/ai'
function ProjectLayout(props) {
    return (
        <div className='max-w-[768px] m-auto w-[98%] border-x-2 flex flex-col border-secondary min-h-[100vh]'>
            <nav className='flex justify-between items-center py-10'>
                <Link to="/"><AiFillCaretLeft className='justify-self-start w-[50px] h-[50px] text-secondary'/></Link>
                <img src={image} className="w-10 h-10 " alt="Logo" />
                <div className='w-[50px]'></div>
            </nav>
            <Outlet/>
            <footer className="text-center text-white py-5 mt-auto">
					Designed and Developed by <a href="" className="font-bold text-secondary">Mourad Yaou</a>
			</footer>
        </div>
    );
}

export default ProjectLayout;