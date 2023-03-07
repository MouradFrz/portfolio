import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar({ sidebarOn, setSideBarOn }) {
	return (
		<div className="bg-primary custom-container relative flex py-8 justify-between">
			<img src="./logo.svg" className="w-8 ml-4 md:ml-0" alt="logo" />

			<GiHamburgerMenu
				onClick={() => {
					setSideBarOn((prev) => !prev);
				}}
				className="mr-4 md:mr-0 text-2xl cursor-pointer hover:text-secondary  transition-all duration-75 md:hidden"
			/>

			<ul className="md:flex hidden gap-10 justify-end">
				<li className="hover:text-secondary">
					<a href="#home">
						{" "}
						<span className="sec-font">H</span>ome
					</a>
				</li>
				<li className="hover:text-secondary">
					<a href="#work">
						<span className="sec-font">W</span>ork
					</a>
				</li>
				<li className="hover:text-secondary">
					<a href="#skills">
						<span className="sec-font">S</span>kills
					</a>
				</li>
				<li className="hover:text-secondary">
					<a href="#about-me">
						<span className="sec-font">A</span>bout me
					</a>
				</li>
				<li className="hover:text-secondary">
					<a href="#contact">
						<span className="sec-font">C</span>ontact
					</a>
				</li>
				<li>
					<a
						href="https://docs.google.com/document/d/1wXq5UI7RljpJ1a99ORfmOhOB_lbyPDvxGhNdZl-LJug/edit?usp=sharing"
						target={"_blank"}
						className="outline-button"
					>
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
