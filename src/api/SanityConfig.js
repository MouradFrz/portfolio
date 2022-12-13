import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "xzsk7grh",
	dataset: "production",
	useCdn: true,
});
