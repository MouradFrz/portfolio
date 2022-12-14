import React from "react";

function ContactMe(props) {
	return (
		<div className="">
			<h2 className="font-semibold text-[3rem] align-baseline w-full">
				Contact me
			</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<p className="text-center mb-10">
				I am currently looking for new opportunities and I am open for new projects and job positions! <br />
                Fill out the form below to let me know about what's on your mind!
			</p>
			<div className="mx-auto w-[98%] max-w-[800px] mb-20">
				<form action="" className="flex flex-col items-center w-full">
					<label htmlFor="" className="w-full">
						Full name  <span className="text-red-400">*</span>
					</label>
					<input
						type="text"
						className="p-2 mb-3 w-full outline-none bg-white text-black text-xl rounded-sm"
                        required
					/>
					<label htmlFor="" className="w-full">
						Email  <span className="text-red-400">*</span>
					</label>
					<input
						type="email"
						className="p-2 mb-3 w-full outline-none bg-white text-black text-xl rounded-sm"
                        required
					/>
					<label htmlFor="" className="w-full">
						Message  <span className="text-red-400">*</span>
					</label>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						className="p-3 w-full outline-none bg-white text-black text-xl rounded-sm"
                        required
					></textarea>
					<button className="outline-button w-fit mt-4">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
