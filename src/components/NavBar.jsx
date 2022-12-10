import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar({ sidebarOn, setSideBarOn }) {
	return (
		<div className="bg-primary custom-container relative flex py-8 justify-between">
			<img src="./logo.svg" className="w-8 " alt="logo" />

				<GiHamburgerMenu
					onClick={() => {
						setSideBarOn((prev) => !prev);
					}}
					className="text-2xl cursor-pointer hover:text-secondary  transition-all duration-75 md:hidden"
				/>

			<ul className="md:flex hidden gap-10  justify-end">
				<li>
					<NavLink to="#contact">
						{" "}
						<span className="sec-font">H</span>ome
					</NavLink>
				</li>
				<li>
					<NavLink to="#contact">
						<span className="sec-font">W</span>ork
					</NavLink>
				</li>
				<li>
					<NavLink to="#contact">
						<span className="sec-font">A</span>bout me
					</NavLink>
				</li>
				<li>
					<NavLink to="#contact">
						<span className="sec-font">C</span>ontact
					</NavLink>
				</li>
				<li>
					<a href="" className="outline-button">
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
