import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import Card from "../components/Card";
import { motion } from "framer-motion";
function Work(props) {
	const [showedProjects, setShowedProject] = useState(5);
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				// delayChildren: 4,
				staggerChildren: 0.5,
			},
		},
	};

	const { data, isLoading, error } = useFetch(
		'*[_type=="project"]{_id,title,body,shortened,technologies}'
	);
	if (isLoading) return "loading";
	if (error) return "something went wrong";
	return (
		<div className="mb-10 flex flex-col items-center" id="work">
			<h2 className="font-semibold text-[3rem] align-baseline w-full">
				Projects
			</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<motion.div
				className="flex gap-4 flex-wrap justify-center transition-all"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{data.slice(0, showedProjects).map((el, i) => (
					<Card
						key={i}
						title={el.title}
						mainTech={el.technologies ? el.technologies[0] : ""}
						description={el.shortened ? el.shortened[0].children[0].text : ""}
						id={el._id}
					/>
				))}
			</motion.div>
			<button
				className="outline-button text-center mt-8 w-fit"
				onClick={() => {
					setShowedProject((prev) => (prev === 5 ? prev.length : 5));
				}}
			>
				See {showedProjects === 5 ? "more" : "less"} projects
			</button>
		</div>
	);
}

export default Work;
