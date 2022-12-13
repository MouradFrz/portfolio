import React from "react";

import { useFetch } from "../hooks/useFetch";
import Skill from "./Skill";
function Skills(props) {
	const { data, isLoading, error } = useFetch(`*[_type=="skill"]`);
	if (isLoading) return "Loading";
	if (error) return "Error";
    console.log(data)
	return (
		<div className="mb-40 flex flex-col items-center">
			<h2 className="font-semibold text-[3rem] align-baseline w-full">
				Skills
			</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<p className="text-center mb-10">
				Click on each skill to display a brief description of my experience with
				it.
			</p>
			<div className="flex gap-4 flex-wrap w-[60%] max-w-[500px] justify-center">
                {data.map((el,i)=>{
                    return <Skill title={el.title} description={el.description} key={i} img={el.mainImage.asset.url}/>
                })}
            </div>
		</div>
	);
}

export default Skills;
