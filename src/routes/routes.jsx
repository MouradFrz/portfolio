import Layout from "../layouts/Layout";
import Home from "../pages/Home";

export const routes = [
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
];
