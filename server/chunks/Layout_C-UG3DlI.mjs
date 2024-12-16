import { f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderSlot, e as createAstro, i as renderComponent, l as renderScript, k as Fragment, h as addAttribute, u as unescapeHTML, n as renderHead } from './astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
/* empty css                                          */
import 'clsx';

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Container.astro", void 0);

const $$Astro$1 = createAstro("https://zhive249.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const menuItems = [
    {
      name: "Home",
      href: "/",
      isButton: false
    },
    {
      name: "Services",
      href: "/services",
      isDropdown: true,
      dropdownItems: [
        { name: "Creative Branding", href: "/services/creative-branding" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Market Research", href: "/services/market-research" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Content Creation", href: "/services/content-creation" },
        { name: "Analytics & Optimization", href: "/services/analytics-optimization" }
      ]
    },
    {
      name: "About Us",
      href: "/about",
      isButton: false
    },
    {
      name: "Contact",
      href: "/contact",
      isButton: false
    }
  ];
  const pathname = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full z-50 top-0 start-0 bg-navy-900/90 backdrop-blur-xl border-b border-navy-300/10" data-astro-cid-pux6a34n> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" data-astro-cid-pux6a34n> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-astro-cid-pux6a34n> <img src="/images/Logo.svg" class="h-8" alt="Zhive Logo" data-astro-cid-pux6a34n> <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500" data-astro-cid-pux6a34n>
Zhive
<span class="text-primary-500" data-astro-cid-pux6a34n>249</span> </span> </a> <!-- Mobile menu button --> <button id="mobile-menu-button" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar" aria-expanded="false" data-astro-cid-pux6a34n> <span class="sr-only" data-astro-cid-pux6a34n>Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-astro-cid-pux6a34n> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-astro-cid-pux6a34n></path> </svg> </button> <!-- Desktop and Mobile menu container --> <div class="hidden w-full md:block md:w-auto" id="navbar" data-astro-cid-pux6a34n> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0" data-astro-cid-pux6a34n> ${menuItems.map((item) => renderTemplate`<li class="relative group" data-astro-cid-pux6a34n> ${item.isDropdown ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-pux6a34n": true }, { "default": ($$result3) => renderTemplate` <button class="flex items-center justify-between w-full py-2 px-3 text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto" aria-expanded="false" aria-controls="navbar-dropdown" data-astro-cid-pux6a34n> ${item.name} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-astro-cid-pux6a34n> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-astro-cid-pux6a34n></path> </svg> </button> <div id="navbar-dropdown" class="invisible absolute z-10 md:group-hover:visible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" data-astro-cid-pux6a34n> <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" data-astro-cid-pux6a34n> ${item.dropdownItems?.map((dropItem) => renderTemplate`<li data-astro-cid-pux6a34n> <a${addAttribute(dropItem.href, "href")} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-pux6a34n> ${dropItem.name} </a> </li>`)} </ul> </div> ` })}` : renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "block py-2 px-3 md:p-0",
    item.isButton ? "text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500" : "text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400",
    pathname === item.href && "text-primary-500 dark:text-primary-400"
  ], "class:list")} data-astro-cid-pux6a34n> ${item.name} </a>`} </li>`)} </ul> </div> </div> ` })} </nav> ${renderScript($$result, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    services: [
      { name: "Creative Branding", href: "/services/creative-branding" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Market Research", href: "/services/market-research" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Content Creation", href: "/services/content-creation" },
      { name: "Analytics & Optimization", href: "/services/analytics-optimization" }
    ],
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Terms", href: "/legal/terms" },
      { name: "Privacy", href: "/legal/privacy" }
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/share/1DHt4KsUro/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>`
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/zhive249/profilecard/?igsh=cGRqN2phMnd2anVo",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
      </svg>`
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/zhive/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 mt-20 bg-dark-500/5 dark:bg-dark-500/10 border-t border-primary-500/10" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-2 gap-8 md:grid-cols-4" data-astro-cid-sz7xmlte> <!-- Services --> <div class="animate-slide-up" style="animation-delay: 100ms;" data-astro-cid-sz7xmlte> <h3 class="mb-6 text-lg font-semibold text-primary-500" data-astro-cid-sz7xmlte>Services</h3> <ul class="space-y-4" data-astro-cid-sz7xmlte> ${footerLinks.services.map(({ name, href }) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" data-astro-cid-sz7xmlte> ${name} </a> </li>`)} </ul> </div> <!-- Company --> <div class="animate-slide-up" style="animation-delay: 200ms;" data-astro-cid-sz7xmlte> <h3 class="mb-6 text-lg font-semibold text-primary-500" data-astro-cid-sz7xmlte>Company</h3> <ul class="space-y-4" data-astro-cid-sz7xmlte> ${footerLinks.company.map(({ name, href }) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" data-astro-cid-sz7xmlte> ${name} </a> </li>`)} </ul> </div> <!-- Legal --> <div class="animate-slide-up" style="animation-delay: 300ms;" data-astro-cid-sz7xmlte> <h3 class="mb-6 text-lg font-semibold text-primary-500" data-astro-cid-sz7xmlte>Legal</h3> <ul class="space-y-4" data-astro-cid-sz7xmlte> ${footerLinks.legal.map(({ name, href }) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" data-astro-cid-sz7xmlte> ${name} </a> </li>`)} </ul> </div> <!-- Social --> <div class="animate-slide-up" style="animation-delay: 400ms;" data-astro-cid-sz7xmlte> <h3 class="mb-6 text-lg font-semibold text-primary-500" data-astro-cid-sz7xmlte>Follow Us</h3> <ul class="flex space-x-4" data-astro-cid-sz7xmlte> ${footerLinks.social.map(({ name, href, icon }) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer"${addAttribute(`Follow us on ${name}`, "aria-label")} data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon)}` })} </a> </li>`)} </ul> </div> </div>  <div class="mt-20 py-8 border-t border-primary-500/10 bg-gradient-to-r from-navy-900/5 via-orange-900/10 to-navy-900/5" data-astro-cid-sz7xmlte> <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0" data-astro-cid-sz7xmlte> <!-- Logo --> <a href="/" class="flex items-center space-x-2 group" data-astro-cid-sz7xmlte> <img src="/Logo.svg" alt="Zhive249 Logo" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" data-astro-cid-sz7xmlte> <span class="text-2xl font-bold text-navy-800 dark:text-white group-hover:text-primary-500 transition-colors duration-300" data-astro-cid-sz7xmlte>
Zhive<span class="text-primary-500 group-hover:text-navy-800 dark:group-hover:text-white transition-colors duration-300" data-astro-cid-sz7xmlte>249</span> </span> </a> <!-- Copyright --> <p class="text-navy-600 dark:text-navy-300" data-astro-cid-sz7xmlte>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Zhive249. All rights reserved.
</p> </div> </div> ` })} </footer> `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Footer.astro", void 0);

const siteConfig = {
  name: "Zhive249",
  site: "https://zhive249.com",
  description: "Expert digital marketing services including branding, web development, and content creation. Transform your online presence with our data-driven strategies.",
  keywords: [
    "Digital Marketing",
    "Web Development",
    "Branding",
    "Content Creation",
    "SEO",
    "Social Media Marketing",
    "Analytics"
  ],
  author: {
    name: "Zhive249 Team",
    twitter: "@zhive249"
  },
  ogImage: "/images/social-preview.png",
  mainNav: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Services",
      href: "/services"
    },
    {
      title: "About",
      href: "/about"
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
      href: "/contact"
    }
  ],
  social: {
    twitter: "https://twitter.com/zhive249",
    github: "https://github.com/zhive249",
    linkedin: "https://linkedin.com/company/zhive249"
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _b;
const $$Astro = createAstro("https://zhive249.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    article = false,
    noIndex = false,
    ogType = article ? "article" : "website",
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, siteConfig.site);
  const socialImageURL = new URL(image, siteConfig.site).toString();
  const jsonLd = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": socialImageURL,
    "author": authors?.map((author) => ({
      "@type": "Person",
      "name": author
    })) ?? [{ "@type": "Person", "name": siteConfig.author.name }],
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/Logo.svg", siteConfig.site).toString()
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime ?? publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalURL
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.site,
    "logo": new URL("/Logo.svg", siteConfig.site).toString(),
    "sameAs": [
      siteConfig.social.twitter,
      siteConfig.social.github,
      siteConfig.social.linkedin
    ]
  };
  const securityHeaders = {
    "Content-Security-Policy": [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' fonts.gstatic.com data:",
      "connect-src 'self' *.google-analytics.com",
      "frame-src 'self' *.youtube.com *.vimeo.com",
      "manifest-src 'self'",
      "worker-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests"
    ].join("; "),
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": [
      "accelerometer=self",
      "camera=self",
      "geolocation=self",
      "gyroscope=self",
      "magnetometer=self",
      "microphone=self",
      "payment=self",
      "usb=self"
    ].join(", "),
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin"
  };
  Object.entries(securityHeaders).forEach(([header, value]) => {
    Astro2.response.headers.set(header, value);
  });
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="theme-color" content="#0f172a"><!-- SEO --><link rel="canonical"', ">", "", '<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/manifest.json"><!-- Preload critical assets --><link rel="preload" href="/fonts/SpaceGrotesk.woff2" as="font" type="font/woff2" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Fonts --><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Open Graph --><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">', "", "", "", '<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- PWA --><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title"', '><!-- Generator --><meta name="generator"', "><!-- Title --><title>", " | ", '</title><!-- JSON-LD --><script type="application/ld+json">', "</script><!-- Service Worker -->", "", '</head> <body class="bg-navy-700 text-navy-100 font-SpaceGrotesk"> <!-- Skip to main content --> <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:p-4 focus:bg-primary-500 focus:text-white">\nSkip to main content\n</a> ', ' <main id="main" class="animate-fade-in min-h-screen"> ', " </main> ", " <!-- Analytics (only in production) --> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(siteConfig.keywords.join(", "), "content"), addAttribute(siteConfig.author.name, "content"), addAttribute(canonicalURL, "href"), noIndex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, !noIndex && renderTemplate`<meta name="robots" content="index,follow">`, addAttribute(siteConfig.name, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(ogType, "content"), addAttribute(socialImageURL, "content"), addAttribute(`${title} | ${siteConfig.name}`, "content"), publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, section && renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>`, tags?.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), addAttribute(siteConfig.author.twitter, "content"), addAttribute(siteConfig.author.twitter, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(siteConfig.name, "content"), addAttribute(Astro2.generator, "content"), title, siteConfig.name, unescapeHTML(JSON.stringify(jsonLd)), renderScript($$result, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), undefined);
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
