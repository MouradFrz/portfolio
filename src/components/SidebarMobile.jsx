import React from "react";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
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
								<a
									href="#home"
									className="block p-4 text-center text-2xl"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									<span className="sec-font">A</span>cceuil
								</a>
							</li>
							<li>
								<a
									href="#work"
									className="block p-4 text-center text-2xl"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									<span className="sec-font">P</span>rojets
								</a>
							</li>
							<li>
								<a
									href="#skills"
									className="block p-4 text-center text-2xl"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									<span className="sec-font">C</span>ompetances
								</a>
							</li>
							<li>
								<a
									href="#about-me"
									className="block p-4 text-center text-2xl"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									<span className="sec-font">A</span> propos de moi
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="block p-4 text-center text-2xl"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									<span className="sec-font">C</span>ontact
								</a>
							</li>
							<li className="mt-5 text-center">
								<a
									href="https://docs.google.com/document/d/1wXq5UI7RljpJ1a99ORfmOhOB_lbyPDvxGhNdZl-LJug/edit?usp=sharing"
									className="outline-button"
									onClick={() => {
										setSideBarOn(false);
									}}
								>
									Resumé
								</a>
							</li>
							<li className=" h-[60px] mt-28">
								<div className="relative w-full h-full flex justify-center items-center">
									<a
										href="https://www.linkedin.com/in/mourad-yaou/"
										target="_blank"
										className=""
									>
										<AiOutlineLinkedin className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
									</a>
									<a
										href="https://github.com/MouradFrz"
										target="_blank"
										className=""
									>
										<FiGithub className="p-2 text-[3rem] relative bg-accent z-10  hover:text-secondary transition-all" />
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
						className="text-[2.5rem] p-1 cursor-pointer hover:text-secondary absolute top-6 right-4 transition-all duration-75 md:hidden"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default SidebarMobile;
