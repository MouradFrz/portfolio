import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quotes from "./quotes";
function randomQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)]
}
function AboutMe(props) {
	const [showMessage, setShowMessage] = useState(true);
    const [message, setMessage] = useState(randomQuote);
	useEffect(() => {
		const inter = setInterval(() => {
			setShowMessage((prev) => false);
            setTimeout(()=>{
                setMessage(randomQuote)
                setShowMessage((prev) => true);
            },1200)
		}, 5000);
		return () => {
			clearTimeout(inter);
		};
	}, []);
	return (
		<div className="mb-10">
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
								className="text-center w-full sec-font text-2xl px-5"
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
					I love football and gaming and blabla. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Dicta quis nihil voluptas! <br /> Velit
					blanditiis ea nam. Error ullam cum possimus.
				</div>
			</div>
		</div>
	);
}

export default AboutMe;