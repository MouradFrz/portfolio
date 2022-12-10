import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import AppLoading from "./components/AppLoading";
import { motion, AnimatePresence } from "framer-motion";
function App() {
	const [showContent, setShowContent] = useState(false);
	const myRoutes = useRoutes(routes);
	useEffect(() => {
		setTimeout(() => {
			setShowContent(true);
		}, 4000);
	}, []);
	return (
		// <div>
		// 	<AnimatePresence>
		// 		{showContent && (
		// 			<motion.div
		// 				animate={{ opacity: 1 }}
		// 				initial={{ opacity: 0 }}
		// 				exit={{ opacity: 0 }}
		// 				transition={{ duration: 2 }}
		// 			>
		// 				{myRoutes}
		// 			</motion.div>
		// 		)}
		// 	</AnimatePresence>
		// 	<AnimatePresence>
		// 	{!showContent && (
		// 		<motion.div
		// 			animate={{ opacity: 1 }}
		// 			initial={{ opacity: 0 }}
		// 			exit={{ opacity: 0 }}
		// 			transition={{ duration: 2 }}
		// 		>
		// 			<AppLoading />
		// 		</motion.div>
		// 	)}
		// 	</AnimatePresence>
		// </div>
		<div>{myRoutes}</div>
	);
}

export default App;
