/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, k as Fragment, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_C-UG3DlI.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zhive249.com");
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-4 py-1 font-medium bg-primary-500/10 text-primary-500 rounded-xl border border-primary-500/20"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3 text-dark-300"> ${description} </p> </div> <!-- todo: blog -->`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Topic.astro", void 0);

const servicesData = [
	{
		id: 1,
		title: "Creative Branding & Design",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' /></svg>",
		image: "/services/01.svg",
		description: "We specialize in creative branding and design that tells your brand's story and resonates with your audience.",
		link: "/services/creative-branding",
		features: [
			"Brand Identity Development",
			"Logo Design & Visual Systems",
			"Brand Guidelines",
			"Marketing Collateral",
			"UI/UX Design"
		]
	},
	{
		id: 2,
		title: "Web Development & Technology",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' /></svg>",
		image: "/services/02.svg",
		description: "From websites to web applications, we create innovative and responsive web solutions tailored to your needs.",
		link: "/services/web-development",
		features: [
			"Custom Website Development",
			"Web Applications",
			"E-commerce Solutions",
			"CMS Integration",
			"Performance Optimization"
		]
	},
	{
		id: 3,
		title: "Market Research & Strategy",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' /></svg>",
		image: "/services/03.svg",
		description: "Our market research services provide valuable insights to inform your business strategy and drive growth.",
		link: "/services/market-research",
		features: [
			"Competitor Analysis",
			"Market Trend Analysis",
			"Consumer Behavior Studies",
			"Data-Driven Insights",
			"Strategic Planning"
		]
	},
	{
		id: 4,
		title: "Digital Marketing & Advertising",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' /></svg>",
		image: "/services/04.svg",
		description: "We help you reach and engage your target audience through effective digital marketing strategies.",
		link: "/services/digital-marketing",
		features: [
			"Social Media Marketing",
			"Search Engine Optimization",
			"Content Marketing",
			"Email Marketing",
			"PPC Advertising"
		]
	},
	{
		id: 5,
		title: "Content Creation & Management",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z' /></svg>",
		image: "/services/05.svg",
		description: "Engaging content that tells your story and connects with your audience across all platforms.",
		link: "/services/content-creation",
		features: [
			"Copywriting",
			"Blog Content",
			"Social Media Content",
			"Video Production",
			"Content Strategy"
		]
	},
	{
		id: 6,
		title: "Analytics & Optimization",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' /></svg>",
		image: "/services/06.svg",
		description: "Data-driven insights and optimization strategies to improve your digital performance.",
		link: "/services/analytics-optimization",
		features: [
			"Performance Analytics",
			"Conversion Optimization",
			"A/B Testing",
			"User Behavior Analysis",
			"ROI Tracking"
		]
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Our Services | Zhive249";
  const pageDescription = "Explore our comprehensive range of digital services including branding, marketing, web development, and more.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> <!-- Hero Section --> <section class="relative py-20 sm:py-32 bg-navy-900"> <!-- Background Pattern --> <div class="absolute inset-0 bg-grid-navy-700/20 bg-[size:20px_20px]"></div> <!-- Gradient Overlays --> <div class="absolute inset-0"> <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-300/20 to-transparent"></div> </div> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> ${renderComponent($$result3, "Topic", $$Topic, {}, { "default": ($$result4) => renderTemplate`Our Services` })} <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
Comprehensive Digital Solutions
</h1> <p class="mt-6 text-xl leading-8 text-navy-200">
From branding to development, we offer a full suite of services to help your business thrive in the digital landscape.
</p> </div> ` })} </section> <!-- Services Grid --> <section class="relative py-24 bg-navy-800/50"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"> <!-- Decorative Elements --> <div class="absolute -left-4 -top-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div> <div class="absolute -right-4 -bottom-4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div> ${servicesData.map((service) => renderTemplate`<div class="relative group"> <!-- Card Background with Gradient Border --> <div class="absolute -inset-px bg-gradient-to-r from-primary-500/50 to-accent-500/50 rounded-2xl blur transition duration-300 group-hover:opacity-100 opacity-75"></div> <div class="relative h-full p-px bg-navy-700/50 rounded-2xl overflow-hidden"> <div class="relative h-full bg-navy-800/90 rounded-2xl p-8"> <!-- Service Icon --> <div class="w-12 h-12 mb-6 text-primary-500"> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(service.icon)}` })} </div> <!-- Service Content --> <h3 class="text-xl font-semibold text-white mb-4"> ${service.title} </h3> <p class="text-navy-200 mb-6"> ${service.description} </p> <!-- Features List --> <ul class="space-y-3 text-sm text-navy-200"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center gap-3"> <svg class="w-5 h-5 text-primary-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> <span>${feature}</span> </li>`)} </ul> <!-- Learn More Link --> <div class="mt-8 pt-6 border-t border-navy-700"> <a${addAttribute(service.link, "href")} class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 group">
Learn more
<svg class="w-4 h-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </div>`)} </div> ` })} </section> </main> ` })}`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/index.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
