import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, f as renderScript, F as Fragment, d as addAttribute, b as createAstro, k as renderHead } from './astro/server_VuVwubc2.mjs';
import 'kleur/colors';
/* empty css                                          */
import 'clsx';

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Container.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
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
      submenu: [
        { name: "Creative Branding", href: "/services/creative-branding" },
        { name: "Market Research", href: "/services/market-research" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Content Creation", href: "/services/content-creation" },
        { name: "Analytics & Optimization", href: "/services/analytics-optimization" }
      ]
    },
    {
      name: "Blog",
      href: "/articles",
      isButton: false
    },
    {
      name: "About",
      href: "/about",
      isButton: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 left-0 z-50 transition-all duration-300 animate-slide-down" id="header"> <nav class="relative bg-navy-700 border-b border-navy-400/10"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between h-20"> <!-- Logo --> <a href="/" class="flex items-center space-x-2 group"> <span class="text-2xl font-bold text-navy-100 group-hover:text-primary-400 transition-colors duration-300">
Zhive<span class="text-primary-500 group-hover:text-navy-100 transition-colors duration-300">249</span> </span> </a> <!-- Desktop Navigation --> <div class="hidden md:flex md:items-center md:space-x-8"> ${menuItems.map((item) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.isDropdown ? renderTemplate`<div class="relative group"> <button class="flex items-center space-x-1 text-navy-100 hover:text-primary-500 transition-colors duration-300"> <span>${item.name}</span> <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="absolute left-0 hidden pt-2 group-hover:block"> <div class="bg-navy-600 rounded-lg shadow-lg border border-navy-400/10"> <div class="py-2"> ${item.submenu.map((subitem) => renderTemplate`<a${addAttribute(subitem.href, "href")} class="block px-4 py-2 text-navy-100 hover:bg-navy-500 transition-colors duration-300"> ${subitem.name} </a>`)} </div> </div> </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-navy-100 hover:text-primary-500 transition-colors duration-300"> ${item.name} </a>`}` })}`)} </div> <!-- Mobile Menu Button --> <div class="flex items-center md:hidden"> <button type="button" id="mobile-menu-button" class="p-2 rounded-lg text-navy-100 hover:bg-navy-600 transition-colors duration-300" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div>  <div class="hidden md:hidden" id="mobile-menu"> <div class="px-4 py-6 space-y-4 bg-navy-600 rounded-b-lg border-t border-navy-400/10"> ${menuItems.map((item) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.isDropdown ? renderTemplate`<div class="space-y-4"> <span class="block text-navy-100 font-medium">${item.name}</span> <div class="pl-4 space-y-2"> ${item.submenu.map((subitem) => renderTemplate`<a${addAttribute(subitem.href, "href")} class="block text-navy-100 hover:text-primary-500 transition-colors duration-300"> ${subitem.name} </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="block text-navy-100 hover:text-primary-500 transition-colors duration-300"> ${item.name} </a>`}` })}`)} </div> </div> ` })} </nav> </header> ${renderScript($$result, "/home/ibrahim/Work/zhive249AstroJs/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    services: [
      { name: "Creative Branding", href: "/services/creative-branding" },
      { name: "Market Research", href: "/services/market-research" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Content Creation", href: "/services/content-creation" },
      { name: "Analytics & Optimization", href: "/services/analytics-optimization" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    legal: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Contact", href: "#" }
    ],
    social: [
      { name: "Twitter", href: "#", icon: "fab fa-twitter" },
      { name: "Facebook", href: "#", icon: "fab fa-facebook" },
      { name: "Instagram", href: "#", icon: "fab fa-instagram" },
      { name: "LinkedIn", href: "#", icon: "fab fa-linkedin" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 mt-20 bg-dark-500/5 dark:bg-dark-500/10 border-t border-primary-500/10"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-2 gap-8 md:grid-cols-4"> <!-- Services --> <div class="animate-slide-up" style="animation-delay: 100ms;"> <h3 class="mb-6 text-lg font-semibold text-primary-500">Services</h3> <ul class="space-y-4"> ${footerLinks.services.map(({ name, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"> ${name} </a> </li>`)} </ul> </div> <!-- Company --> <div class="animate-slide-up" style="animation-delay: 200ms;"> <h3 class="mb-6 text-lg font-semibold text-primary-500">Company</h3> <ul class="space-y-4"> ${footerLinks.company.map(({ name, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"> ${name} </a> </li>`)} </ul> </div> <!-- Legal --> <div class="animate-slide-up" style="animation-delay: 300ms;"> <h3 class="mb-6 text-lg font-semibold text-primary-500">Legal</h3> <ul class="space-y-4"> ${footerLinks.legal.map(({ name, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"> ${name} </a> </li>`)} </ul> </div> <!-- Social --> <div class="animate-slide-up" style="animation-delay: 400ms;"> <h3 class="mb-6 text-lg font-semibold text-primary-500">Follow Us</h3> <ul class="space-y-4"> ${footerLinks.social.map(({ name, href, icon }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="flex items-center space-x-2 text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"> <i${addAttribute(`${icon} w-5`, "class")}></i> <span>${name}</span> </a> </li>`)} </ul> </div> </div>  <div class="pt-8 mt-8 border-t border-primary-500/10"> <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"> <!-- Logo --> <a href="/" class="flex items-center space-x-2 group"> <span class="text-2xl font-bold text-dark-500 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
Zhive<span class="text-primary-500 group-hover:text-dark-500 dark:group-hover:text-white transition-colors duration-300">249</span> </span> </a> <!-- Copyright --> <p class="text-dark-400 dark:text-dark-300">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Zhive249. All rights reserved.
</p> </div> </div> ` })} </footer>`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/ibrahim/Work/zhive249AstroJs/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ibrahim/Work/zhive249AstroJs/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth dark" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="A clean and modern landing page design for digital marketing agencies, built with Astro and TailwindCSS. Perfect for showcasing services and case studies to potential clients."><!-- Favicon --><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/favicon.png"><!-- Font Awesome (latest version) --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- Fonts --><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- SEO and Social --><meta property="og:title" content="Zhive249 - Digital Marketing Landing Page"><meta property="og:description" content="Showcase your agency's services and case studies with this modern and functional landing page built using Astro and TailwindCSS."><meta property="og:image" content="/images/social-preview.png"><meta property="og:url" content="https://zhive249.example.com"><meta name="twitter:card" content="summary_large_image"><!-- Generator --><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Title --><title>Zhive249 | Digital Marketing Agency</title><!-- Client Router -->${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-navy-700 text-navy-100 font-SpaceGrotesk" data-astro-cid-sckkx6r4> <!-- Navigation --> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-sckkx6r4": true })} <!-- Main Content --> <main class="animate-fade-in" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Container as a };
