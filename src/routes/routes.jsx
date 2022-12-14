import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import SuccessPage from "../pages/SuccessPage";

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
	{
		path: "/success",
		element: <SuccessPage />,
	},
];
