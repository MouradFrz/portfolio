import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quotes from "./quotes";
function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}
function AboutMe(props) {
	const [showMessage, setShowMessage] = useState(true);
	const [message, setMessage] = useState(randomQuote);
	useEffect(() => {
		const inter = setInterval(() => {
			setShowMessage((prev) => false);
			setTimeout(() => {
				setMessage(randomQuote);
				setShowMessage((prev) => true);
			}, 1200);
		}, 5000);
		return () => {
			clearTimeout(inter);
		};
	}, []);
	return (
		<div className="mb-10" id="about-me">
			<h2 className="font-semibold text-[3rem]">About me</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<div className="flex flex-col md:flex-row">
				<div className="flex items-center md:w-[48%] w-full mb-10 md:mb-0 min-h-[100px]">
					<AnimatePresence>
						{showMessage && (
							<motion.p
								initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
								animate={{
									clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
								}}
								exit={{ opacity:0 }}
								transition={{ duration: 1 }}
								className="text-center w-full sec-font text-2xl px-5 origin-left " 
							>
								{message}
							</motion.p>
						)}
					</AnimatePresence>
				</div>
				<div className="md:w-[50%] w-full leading-8">
					I am a 21 years old{" "}
					<span className="text-secondary">Software Engineer</span>, I got my
					Bachelor degree in June 2022, Got introduced to web developement and
					became very passionate about it.
					<br />
					I have been building websites for two years, my journey started when I
					got introduced to web developement in university. <br />I kept making
					enough efforts at university to prosper in software developement in
					general, and I decided to specialize in web developement so I explored
					the field even more on the internet, So I chose a stack{" "}
					<span className="text-secondary">(PHP-Laravel-React-MySQL)</span> and
					learned it in a project oriented manner, aiming towards being a{" "}
					<span className="text-secondary">
						complete, effecient and competent
					</span>{" "}
					Full Stack Web Developer.
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
