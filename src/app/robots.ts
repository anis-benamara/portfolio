import { baseURl } from "./sitemap";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
            },
        ],
        sitemap: `${baseURl}/sitemap.xml`,
    };
}