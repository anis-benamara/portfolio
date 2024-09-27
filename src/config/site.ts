type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Anis B. Amara",
  description: "Software Engineer blog",
  url: "https://portfolio-anis-ben.vercel.app/",
  ogImage: "https://portfolio-anis-ben.vercel.app/og.png",
  links: {
    twitter: "https://x.com/anisbamara",
    github: "https://github.com/anis-benamara",
  },
};
