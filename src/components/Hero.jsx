import React from "react";
import { motion } from "framer-motion";
function Hero(props) {
	const container = {
		hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
		show: {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			transition: {
				staggerChildren: 4,
			},
		},
	};

	const item = {
		hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
		show: {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			transition: { duration: 4, type: "tween" },
		},
	};
	return (
		<div className="mb-40 flex gap-5 flex-col lg:flex-row-reverse lg:mt-40">
			<div className="flex items-center lg:w-[50%]">
				<motion.div
					className="w-[100%] text-[0.7rem] my-2 lg:my-0"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<motion.pre variants={item} className="sec-font">
						{"export default function App(){"}
					</motion.pre>
					<motion.pre variants={item} className="sec-font">
						{'      const [you, setYou] = useState("Amazing")'}
					</motion.pre>
					<motion.pre variants={item} className="sec-font">
						{"      return (<>"}
					</motion.pre>
					<motion.pre variants={item} className="sec-font">
						{'              <p className="">{you}</p>'}
					</motion.pre>
					<motion.pre variants={item} className="sec-font">
						{"      </>)"}
					</motion.pre>
					<motion.pre variants={item} className="sec-font">
						{"}"}
					</motion.pre>
				</motion.div>
			</div>
			<div className="lg:w-[50%]">
				<p className="sec-font text-sm text-secondary mb-2">Hi, I am</p>
				<h2 className="text-[5.2rem] leading-[80px] font-bold tracking-wide">
					Mourad Yaou.
				</h2>
				<p className="mt-3 leading-5">
					I am a 21 years old{" "}
					<span className="text-secondary">Software Engineer,</span> from
					Algeria
					<br />
					specializing in{" "}
					<span className="text-secondary">
						Full Stack Web Developement
					</span>. <br />
					and I am the person who person who will bring your website idea to
					life!
				</p>
				<a href="" className="outline-button mt-5 w-fit block">
					Build my project!
				</a>
			</div>
		</div>
	);
}

export default Hero;
