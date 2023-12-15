import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
function LeftSideBar(props) {
	return (
		<div className="z-[-10] md:block hidden">
			<div className="fixed h-full w-[60px] flex flex-col items-center justify-end top-0">
				<a
					href="https://www.linkedin.com/in/mourad-yaou/"
					target="_blank"
					className="p-2 text-2xl relative bg-primary  hover:text-secondary transition-all"
				>
					<AiOutlineLinkedin />
				</a>
				<a
					href="https://github.com/MouradFrz"
					target="_blank"
					className="p-3 text-2xl relative bg-primary mb-5 hover:text-secondary transition-all"
				>
					<FiGithub />
				</a>

				<span className="w-[2px] gradient-bg z-[-1] h-full block absolute"></span>
			</div>
		</div>
	);
}

export default LeftSideBar;
