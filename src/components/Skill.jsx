import React from "react";

function Skill({ title, description, image }) {
	return (
		<div className="group md:relative ">
			<div className="rounded-full border overflow-hidden">
				<img
					src={image}
					className=" w-20 rounded-full p-1 h-20 object-contain"
					alt=""
				/>
			</div>
			<p
				className="scale-y-0 translate-x-[-50%]
                p-5 group-hover:block
                transition-all
                origin-top
                group-hover:scale-y-100 md:w-[400px] w-full z-40 mt-2 absolute left-[50%] bg-black "
			>
				{description}
			</p>
		</div>
	);
}

export default Skill;
