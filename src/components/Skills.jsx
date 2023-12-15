import React from "react";

import { useFetch } from "../hooks/useFetch";
import Skill from "./Skill";
import { motion } from "framer-motion";
function Skills(props) {
	const container = {
		hidden: { opacity: 0.5, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
				duration: 0.2,
			},
		},
	};
	const { data, isLoading, error } = useFetch(
		`*[_type=="skill"]{title,description,"imageUrl":mainImage.asset->url}`
	);
	if (isLoading) return "Loading";
	if (error) return "Error";
	return (
		<div className="mb-10 flex flex-col items-center" id="skills">
			<h2 className="font-semibold text-[3rem] align-baseline w-full">
				Competances
			</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<p className="text-center mb-10">
				Mettez votre curseur sur une competence pour afficher une description de
				mon experience avec.
			</p>
			<motion.div
				variants={container}
				viewport={{ once: true }}
				initial="hidden"
				whileInView="show"
				className="flex gap-4 flex-wrap w-[70%] md:w-[60%] md:max-w-[500px] justify-center "
			>
				{data.map((el, i) => {
					return (
						<Skill
							title={el.title}
							description={el.description}
							key={i}
							img={el.imageUrl}
						/>
					);
				})}
			</motion.div>
		</div>
	);
}

export default Skills;
