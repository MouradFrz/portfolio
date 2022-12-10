import React from "react";
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
function LeftSideBar(props) {
	return (
		<div className="z-[-10] md:block hidden">
			<div className="fixed h-full w-[60px] flex flex-col items-center justify-end top-0">
				<a href="#" className="p-2 text-2xl relative bg-primary  hover:text-secondary transition-all"><AiOutlineLinkedin/></a>
				<a href="#" className="p-3 text-2xl relative bg-primary hover:text-secondary transition-all"><FiGithub/></a>
				<a href="#" className="p-3 text-2xl relative bg-primary hover:text-secondary transition-all"><AiOutlineInstagram/></a>
				<a href="#" className="p-3 text-2xl relative bg-primary mb-5 hover:text-secondary transition-all"><AiOutlineFacebook/></a>
				<span className="w-[1px] gradient-bg z-[-1] h-full block absolute"></span>
			</div>
		</div>
	);
}

export default LeftSideBar;
