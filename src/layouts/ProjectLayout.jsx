import React from "react";
import { Outlet, Link } from "react-router-dom";
import image from "/logo.svg";
import { AiFillCaretLeft } from "react-icons/ai";
import {motion} from 'framer-motion'
function ProjectLayout(props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
            transition={{ duration:2 }}
			className='max-w-[768px] m-auto w-[98%] border-x-2 flex flex-col
			border-secondary min-h-[100vh]'>
			<nav className="flex justify-between items-center py-10">
				<Link to="/">
					<AiFillCaretLeft className="justify-self-start w-[50px] h-[50px] text-secondary" />
				</Link>
				<img src={image} className="w-10 h-10 " alt="Logo" />
				<div className="w-[50px]"></div>
			</nav>
			<Outlet />
			<footer className="text-center text-white py-5 mt-auto">
				Designed and Developed by{" "}
				<a href="" className="font-bold text-secondary">
					Mourad Yaou
				</a>
			</footer>
		</motion.div>
	);
}

export default ProjectLayout;
