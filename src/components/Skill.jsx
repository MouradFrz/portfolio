import parse from "html-react-parser";
import React from "react";
import { motion } from "framer-motion";
function Skill({ title, description, img }) {
	const item = {
		hidden: { opacity: 0,y:20 },
		show: { opacity: 1,y:0 },
	};
	return (
		<motion.div
			variants={item} className="group md:relative ">
			<div className="cursor-pointer overflow-hidden">
				<img
					src={img}
					className=" w-20  p-1 h-20 object-contain"
					alt=""
				/>
				
			</div>
			<h1 className="text-center">{title}</h1>
			<p
				className="scale-y-0 translate-x-[-50%]
                p-5 group-hover:block
                transition-all
                origin-top
                group-hover:scale-y-100 md:w-[400px] w-full z-40 mt-2 absolute left-[50%] bg-black "
			>
				{description && parse(description)}
			</p>
		</motion.div>
	);
}

export default Skill;
