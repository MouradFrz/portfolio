import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import LeftSideBar from "../components/LeftSideBar";
import SidebarMobile from "../components/SidebarMobile";
import {motion} from "framer-motion"
function Layout(props) {
    const [sidebarOn, setSideBarOn] = useState(false)
	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration:2 }} className="bg-primary text-white">
            <SidebarMobile sidebarOn={sidebarOn} setSideBarOn={setSideBarOn}/>
			<div className="bg-primary z-10 relative">
				<NavBar sidebarOn={sidebarOn} setSideBarOn={setSideBarOn}/>
			</div>
            <LeftSideBar />
			<div className="custom-container">
				<div className="relative">
					<Outlet/>
				</div>
				<footer className="text-center mb-5">
					Designed and Developed by <a href="" className="font-bold text-secondary">Mourad Yaou</a>
				</footer>
			</div>
		</motion.div>
	);
}

export default Layout;
