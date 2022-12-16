import Layout from "../layouts/Layout";
import ProjectLayout from "../layouts/ProjectLayout";
import Home from "../pages/Home";
import ProjectDisplay from "../pages/ProjectDisplay";
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
	{
		element: <ProjectLayout />,
		children: [
			{
				path: "project/:id",
				element: <ProjectDisplay />,
			},
		],
	},
];
