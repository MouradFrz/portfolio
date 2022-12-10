import React from "react";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
function SidebarMobile({ sidebarOn, setSideBarOn }) {
		return (
			<AnimatePresence>
				{sidebarOn && (
					<motion.div
                        transition={{ type:"spring",duration:"0.2" }}
						animate={{ x: 0, opacity: 1 }}
						initial={{ x: "50%", opacity: 0 }}
						exit={{ x: "-10%", opacity: 0 }}
						className={`absolute md:hidden w-[100%]  h-[100vh] z-20 bg-primary/60 backdrop-blur-sm`}
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
