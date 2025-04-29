export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "ConstFit",
	// Your website's title and description (meta fields)
	title: "ConstFit - Blog de fitness y nutrición",
	description:
		"Donde el fitness y la nutrición se unen para transformar tu rutina . Con planes basados en ciencia y el apoyo de expertos, convierte tus objetivos en resultados. ¡Sube de nivel y descubre tu potencial máximo!",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "consfit",
		email: "constfit@gamil.com",
		twitter: "consfit",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Consfit logo",
	},
};

export default siteData;
