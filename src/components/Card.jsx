import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card({ title, description, id, mainTech }) {
	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<motion.div
			variants={item}
			className="flex flex-col hover:scale-[1.02] transition-all  p-4 md:min-w-[328px] duration-75 md:w-[328px] w-full  bg-gradient-to-br from-accent to-secondary/5 rounded-sm"
		>
			<h2 className="text-[2rem] font-bold">{title}</h2>
			{description && <p>{parse(description)}</p>}
			<p>
				Technologie principale:{" "}
				<span className="font-semibold text-secondary">{mainTech}</span>
			</p>
			<Link
				to={`/project/${id}`}
				className="border-b-2 mt-auto  w-fit flex transition-all hover:border-secondary duration-75 justify-center items-center gap-2 font-semibold p-2"
			>
				<BsFillEyeFill className="text-secondary" /> Voir plus
			</Link>
		</motion.div>
	);
}

export default Card;
