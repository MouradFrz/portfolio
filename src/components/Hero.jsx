import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Hero(props) {
	const [animateName, setAnimateName] = useState(true);
	useEffect(() => {
		const intr = setInterval(() => {
			setAnimateName((prev) => !prev);
		}, 5000);
		return () => {
			clearInterval(intr);
		};
	}, []);
	return (
		<div
			id="home"
			className="mb-40  flex gap-5 flex-col lg:flex-row-reverse lg:mt-40"
		>
			<div className="flex items-center  lg:w-[50%]">
				<div className="w-[100%] text-[0.7rem]  my-2 lg:my-0">
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 3 }}
						className="sec-font"
					>
						{"export default function App(){"}
					</motion.pre>
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 4, delay: 2 }}
						className="sec-font"
					>
						{"      const [counter, setCounter] = useState(0)"}
					</motion.pre>
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 2, delay: 5 }}
						className="sec-font"
					>
						{"      return (<>"}
					</motion.pre>
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 4, delay: 6 }}
						className="sec-font"
					>
						{'              <p className="">Counter: {counter}</p>'}
					</motion.pre>
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 2, delay: 9 }}
						className="sec-font"
					>
						{"      </>)"}
					</motion.pre>
					<motion.pre
						initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
						animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
						transition={{ duration: 1, delay: 10 }}
						className="sec-font"
					>
						{"}"}
					</motion.pre>
				</div>
			</div>
			<div className="lg:w-[50%] mt-30 md:mt-0">
				<p className="sec-font text-sm text-secondary mb-2">
					Bonjour, moi c'est
				</p>
				<h2
					className={`text-[5.2rem] leading-[80px] font-bold tracking-wide ${
						animateName && "glitch"
					}`}
					data-text="Mourad Yaou."
				>
					Mourad Yaou.
				</h2>
				<p className="mt-3 leading-5">
					Je suis un <span className="text-secondary">Dévloppeur logiciel</span>{" "}
					basé a Paris
					<br />
					specialisé dans le{" "}
					<span className="text-secondary">
						Dévloppement web Full stack
					</span>{" "}
					depuis plus de 3 ans.
				</p>
				<a href="#contact" className="outline-button mt-5 w-fit block">
					Construire mon projet!
				</a>
			</div>
		</div>
	);
}

export default Hero;
