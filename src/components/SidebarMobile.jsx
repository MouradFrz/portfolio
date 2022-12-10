import React from "react";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
function SidebarMobile({ sidebarOn, setSideBarOn }) {
	return (
		<AnimatePresence>
			{sidebarOn && (
				<motion.div
					transition={{ type: "spring", duration: "0.5" }}
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: "50%", opacity: 0 }}
					exit={{ x: "-10%", opacity: 0 }}
					className={`fixed md:hidden w-[100%]  h-[100vh] z-20 bg-primary/60 backdrop-blur-sm`}
				>
					<div className="bg-accent w-3/4 h-full absolute right-0">
						<ul className="mt-24">
							<li>
								<a href="#contact" className="block p-4 text-center text-2xl">
									<span className="sec-font">H</span>ome
								</a>
							</li>
							<li>
								<a href="#contact" className="block p-4 text-center text-2xl">
									<span className="sec-font">W</span>ork
								</a>
							</li>
							<li>
								<a href="#contact" className="block p-4 text-center text-2xl">
									<span className="sec-font">A</span>bout me
								</a>
							</li>
							<li>
								<a href="#contact" className="block p-4 text-center text-2xl">
									<span className="sec-font">C</span>ontacts
								</a>
							</li>
							<li className="mt-5 text-center"><a href="#" className="outline-button">Resume</a></li>
							<li className=" h-[60px] mt-28">
								<div className="relative w-full h-full flex justify-center items-center">
									<a href="#" className="">
										<AiOutlineLinkedin className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
									</a>
									<a href="#" className="">
										<FiGithub className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
									</a>
									<a href="#" className="">
										<AiOutlineInstagram className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
									</a>
									<a href="#" className="">
										<AiOutlineFacebook className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
									</a>
									<span className="w-full absolute top-[50%] h-[1px] bg-secondary"></span>
								</div>
							</li>
							
						</ul>
					</div>
					<CgClose
						onClick={() => {
							setSideBarOn((prev) => !prev);
						}}
						className="text-2xl cursor-pointer hover:text-secondary absolute top-8 right-9 transition-all duration-75 md:hidden"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default SidebarMobile;
