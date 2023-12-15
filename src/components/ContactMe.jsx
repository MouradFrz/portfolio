import React from "react";

function ContactMe(props) {
	return (
		<div className="" id="contact">
			<h2 className="font-semibold text-[3rem] align-baseline w-full">
				Contact
			</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<p className="text-center mb-10">
				Je suis actuellement à la recherche de nouvelles opportunités et ouvert
				à de nouveaux projets et postes professionnels ! <br />
				Remplissez le formulaire ci-dessous pour me faire part de ce que vous
				avez en tête !
			</p>
			<div className="mx-auto w-[98%] max-w-[800px] mb-20">
				<form
					action="https://formsubmit.co/131bcb38bf49fa4a07fc08d98a8eee3c"
					method="POST"
					className="flex flex-col items-center w-full"
				>
					<label htmlFor="" className="w-full">
						Nom et prénom <span className="text-red-400">*</span>
					</label>
					<input
						type="text"
						name="name"
						className="p-2 mb-3 w-full outline-none bg-white text-black text-xl rounded-sm"
						required
					/>
					<label htmlFor="" className="w-full">
						Email <span className="text-red-400">*</span>
					</label>
					<input
						type="email"
						className="p-2 mb-3 w-full outline-none bg-white text-black text-xl rounded-sm"
						name="email"
						required
					/>
					<label htmlFor="" className="w-full">
						Message <span className="text-red-400">*</span>
					</label>
					<textarea
						name="message"
						id=""
						cols="30"
						rows="10"
						className="p-3 w-full outline-none bg-white text-black text-xl rounded-sm"
						required
					></textarea>
					<button className="outline-button w-fit mt-4">Envoyer</button>
					<input
						type="hidden"
						name="_next"
						value="https://mourad-yaou.netlify.app/success"
					></input>
					<input type="text" name="_honey" style={{ display: "none" }}></input>
					<input type="hidden" name="_captcha" value="false"></input>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
