import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "xzsk7grh",
	dataset: "production",
	apiVersion: '2022-12-18',
	useCdn: true,
});
