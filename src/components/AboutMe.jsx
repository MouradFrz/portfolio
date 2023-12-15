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
			<h2 className="font-semibold text-[3rem]">A propos de moi</h2>
			<span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
			<div
				initial={{ opacity: 0 }}
				whileinview={{ opacity: 1 }}
				className="flex flex-col md:flex-row"
			>
				<div className="flex items-center md:w-[48%] w-full mb-10 md:mb-0 min-h-[100px]">
					<AnimatePresence>
						{showMessage && (
							<motion.p
								initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
								animate={{
									clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
								}}
								exit={{ opacity: 0 }}
								transition={{ duration: 1 }}
								className="text-center w-full sec-font text-2xl px-5 origin-left "
							>
								{message}
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="md:w-[50%] w-full leading-8"
				>
					Je suis un <span className="text-secondary">ingénieur logiciel</span>{" "}
					de 21 ans, ayant obtenu mon diplôme de licence en juin 2022. J'ai
					découvert le développement web à l'université et suis rapidement
					devenu passionné par ce domaine. Pendant deux ans, j'ai travaillé sur
					la création de sites web. Mon parcours a débuté lorsque j'ai été
					initié au développement web à l'université. J'ai déployé suffisamment
					d'efforts pour exceller dans le développement logiciel en général,
					puis j'ai décidé de me spécialiser dans le développement web. J'ai
					exploré davantage ce domaine sur Internet, choisi une pile
					technologique{" "}
					<span className="text-secondary">(PHP-Laravel-React-MySQL)</span> et
					appris de manière orientée projet, dans le but de devenir un
					développeur web Full Stack{" "}
					<span className="text-secondary">
						complet, efficace et compétent.
					</span>
				</motion.div>
			</div>
		</div>
	);
}

export default AboutMe;
