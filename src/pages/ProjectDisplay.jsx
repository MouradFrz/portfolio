import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { ScrollRestoration } from "react-router-dom";
import {motion} from "framer-motion"

import parse from "html-react-parser";

import { client } from "../api/SanityConfig";
import imageUrlBuilder from "@sanity/image-url";

function ProjectDisplay(props) {
	const builder = imageUrlBuilder(client);
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);
	function urlFor(source) {
		return builder.image(source);
	}
	const { id } = useParams();
	const { data, isLoading, error } = useFetch(
		`*[_id=="${id}"]{sections,body,title,technologies,screenshots,github,live}`
	);
	if (isLoading)
		return (
			<div className="flex items-center justify-center h-[100vh]">
				<Loader />
			</div>
		);
	if (error || !data.length)
		return (
			<div className="flex items-center justify-center h-[100vh]">
				<Error />
			</div>
		);
	return (
		<div className="px-5">
			<h1 className="text-[2.4rem] text-center font-bold text-white">
				{data[0].title}
			</h1>
			<div className="flex justify-center items-center gap-4 mb-10">
				<a
					href={data[0].live && data[0].live}
					target="_blank"
					className={`${
						data[0].live ? "outline-button" : "outline-button-disabled"
					} text-white gap-2 flex items-center justify-center`}
				>
					<FiExternalLink /> Live Preview
				</a>
				<a
					href={data[0].github ? data[0].github : ""}
					target="_blank"
					className={`${
						data[0].github ? "outline-button" : "outline-button-disabled"
					} text-white gap-2 flex items-center justify-center`}
				>
					<AiOutlineGithub /> GitHub Repository
				</a>
			</div>
			<h2 className="text-[1.8rem] text-white border-b-2 w-fit border-secondary font-semibold">
				Technlogies
			</h2>
			<div className="mb-5">
				{data[0].technologies?.map((el, i) => (
					<span
						key={i}
						className="bg-secondary rounded-sm font-semibold mr-2 mt-3 px-4  inline-block"
					>
						{el}
					</span>
				))}
			</div>
			<h2 className="text-[1.8rem] text-white border-b-2 w-fit border-secondary font-semibold ">
				Description
			</h2>
			{data[0].body && parse(data[0].body[0]?.children[0]?.text)}

			{data[0].screenshots && (
				<div>
					<h2 className="text-[1.8rem] text-white border-b-2 w-fit border-secondary font-semibold ">
						Screenshots
					</h2>
					<div className="">
						{data[0].screenshots.map((el, i) => {
							return (
								<img
									src={urlFor(el.asset).url()}
									alt=""
									key={i}
									className="max-w-[100%] max-h-[700px] my-6"
								/>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default ProjectDisplay;
