interface SiteConfig {
  name: string;
  site: string;
  description: string;
  keywords: string[];
  author: {
    name: string;
    twitter: string;
  };
  ogImage: string;
  mainNav: Array<{
    title: string;
    href: string;
  }>;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Zhive249",
  site: import.meta.env.SITE_URL ?? "https://zhive249.com",
  description:
    "Expert digital marketing services including branding, web development, and content creation. Transform your online presence with our data-driven strategies.",
  keywords: [
    "Digital Marketing",
    "Web Development",
    "Branding",
    "Content Creation",
    "SEO",
    "Social Media Marketing",
    "Analytics",
  ],
  author: {
    name: "Zhive249 Team",
    twitter: "@zhive249",
  },
  ogImage: "/images/social-preview.png",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "About",
      href: "/about",
    },
    // Temporarily commented out Articles
    /*
    {
      title: "Articles",
      href: "/articles",
    },
    */
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  social: {
    twitter: "https://twitter.com/zhive249",
    github: "https://github.com/zhive249",
    linkedin: "https://linkedin.com/company/zhive249",
  },
};
