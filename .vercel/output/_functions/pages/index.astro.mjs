/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, b as createAstro, f as renderScript } from '../chunks/astro/server_VuVwubc2.mjs';
import 'kleur/colors';
import { a as $$Container, $ as $$Layout } from '../chunks/Layout_DK81VKpk.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$ContactSection } from '../chunks/ContactSection_DrB6OFr4.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <!-- Left Section: Text Content --> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <!-- Title --> <h1 class="text-4xl font-bold md:text-5xl text-center md:text-left text-dark-500"> <span class="text-primary-500 font-extrabold">Zhive</span> <span class="text-accent-500 text-5xl font-extrabold inline-block">249</span> <span class="block mt-2 text-lg md:text-2xl text-dark-400 font-medium">Fueling Your Growth with Smart Digital Strategies</span> </h1> <!-- Subtitle --> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12 text-center md:text-left text-dark-300">
At zhive249, we combine innovative design, powerful marketing strategies, and the latest web technologies to craft unique, high-impact brands that captivate audiences and drive success in the digital world.
</p> <!-- Call-to-Action Button --> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="#contact-form" target="_blank" class="lg:mt-8 px-8 py-5 bg-primary-500 hover:bg-primary-600 rounded-2xl text-center text-white border border-primary-600 text-xl font-normal leading-7 transition-all duration-300">
Book a consultation
</a> </div> </div> </div> <!-- Right Section: Image --> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" class="rounded-3xl lg:p-5" width="100%" alt="Hero"> </div> </div>  <div class="flex-row items-center mt-12"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6"> <!-- Client Logo 1 --> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo"> </div> <!-- Client Logo 2 --> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo"> </div> <!-- Client Logo 3 --> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo"> </div> <!-- Client Logo 4 --> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo"> </div> <!-- Client Logo 5 --> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/05.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo"> </div> <!-- Client Logo 6 --> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo"> </div> </div> </div> ` })}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$ServiceToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceToggle;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(service.background, "class")}> <div class="space-y-6 max-w-md"> <h3 class="text-3xl font-bold"> ${service.name1} <br> ${service.name2} </h3> <p class="text-lg">${service.description}</p> <a${addAttribute(service.link, "href")} class="inline-flex items-center text-lg font-medium hover:opacity-75 transition-opacity">
Learn more
<img${addAttribute(service.arrow, "src")} alt="" class="ml-2 w-6 h-6" aria-hidden="true"> </a> </div> <img${addAttribute(service.image, "src")}${addAttribute(`${service.name1} ${service.name2} illustration`, "alt")} class="w-64 h-64 object-contain"> </div>`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/ServiceToggle.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Creative Branding",
		name2: "& Design",
		background: "h-[310px] p-12 bg-dark-500/95 rounded-[45px] shadow-card border border-primary-500/10 justify-between items-center flex text-white hover:bg-dark-500/90 transition-all duration-300 group animate-fade-in",
		arrow: "./services/ag.svg",
		link: "/services/creative-branding",
		image: "./services/01.svg",
		description: "We specialize in creative branding and design that tells your brand's story and resonates with your audience."
	},
	{
		id: 2,
		name1: "Market Research",
		name2: "& Strategy",
		background: "h-[310px] p-12 bg-primary-500/90 rounded-[45px] shadow-card border border-primary-600 justify-between items-center flex text-white hover:bg-primary-500/85 transition-all duration-300 group animate-fade-in",
		arrow: "./services/ag.svg",
		link: "/services/market-research",
		image: "./services/02.svg",
		description: "Our market research services provide valuable insights to inform your business strategy and drive growth."
	},
	{
		id: 3,
		name1: "Digital Marketing",
		name2: "& Advertising",
		background: "h-[310px] p-12 bg-dark-500 rounded-[45px] shadow-card border border-primary-500/20 justify-between items-center flex text-white hover:bg-dark-500/95 transition-all duration-300 group animate-fade-in",
		arrow: "./services/aw.svg",
		link: "/services/digital-marketing",
		image: "./services/03.svg",
		description: "We offer comprehensive digital marketing and advertising strategies to boost your online presence and reach."
	},
	{
		id: 4,
		name1: "Web Development",
		name2: "& Technology",
		background: "h-[310px] p-12 bg-primary-500/90 rounded-[45px] shadow-card border border-primary-600 justify-between items-center flex text-white hover:bg-primary-500/85 transition-all duration-300 group animate-fade-in",
		arrow: "./services/ag.svg",
		link: "/services/web-development",
		image: "./services/04.svg",
		description: "From websites to web applications, we create innovative and responsive web solutions tailored to your needs."
	},
	{
		id: 5,
		name1: "Content Creation",
		name2: "& Copywriting",
		background: "h-[310px] p-12 bg-dark-500/95 rounded-[45px] shadow-card border border-primary-500/10 justify-between items-center flex text-white hover:bg-dark-500/90 transition-all duration-300 group animate-fade-in",
		arrow: "./services/ag.svg",
		link: "/services/content-creation",
		image: "./services/05.svg",
		description: "Our team creates high-quality content and copywriting that engages your audience and drives results."
	},
	{
		id: 6,
		name1: "Analytics &",
		name2: "Optimization",
		background: "h-[310px] p-12 bg-primary-500/90 rounded-[45px] shadow-card border border-primary-600 justify-between items-center flex text-white hover:bg-primary-500/85 transition-all duration-300 group animate-fade-in",
		arrow: "./services/ag.svg",
		link: "/services/analytics-optimization",
		image: "./services/06.svg",
		description: "Data-driven insights and optimization strategies to maximize your digital performance and ROI."
	}
];

const $$Astro$1 = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-4 py-1 font-medium bg-primary-500/10 text-primary-500 rounded-xl border border-primary-500/20"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3 text-dark-300"> ${description} </p> </div> <!-- todo: blog -->`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Topic.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-g5jplrhu": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services" data-astro-cid-g5jplrhu> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Our Services", "description": "Our digital marketing agency helps businesses grow and succeed online through a range of services, including SEO, PPC, social media marketing, and content creation.", "data-astro-cid-g5jplrhu": true })} </div>  <div class="flex-row items-center py-5" data-astro-cid-g5jplrhu> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-g5jplrhu> ${servicesData.map((service) => renderTemplate`${renderComponent($$result2, "ServiceToggle", $$ServiceToggle, { "service": service, "data-astro-cid-g5jplrhu": true })}`)} </div> </div>  <div class="flex-row items-center my-12 p-14 bg-dark-500/50 backdrop-blur-sm border border-dark-400 rounded-3xl" data-astro-cid-g5jplrhu> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-g5jplrhu> <div class="space-y-6" data-astro-cid-g5jplrhu> <h2 class="text-3xl font-bold text-white" data-astro-cid-g5jplrhu>Let's make things happen</h2> <p class="text-lg text-dark-300" data-astro-cid-g5jplrhu>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p> <a href="#contact" class="group px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl inline-flex items-center gap-2 transition duration-300" data-astro-cid-g5jplrhu>
Get your free proposal
<svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-g5jplrhu></path> </svg> </a> </div> <!-- Illustration --> <div class="hidden md:block" data-astro-cid-g5jplrhu> <img src="/services/Illustration.svg" alt="Illustration of digital collaboration" class="w-2/3 mx-auto animate-float" data-astro-cid-g5jplrhu> </div> </div> </div> ` })} `;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Services.astro", void 0);

const team = [{"title":"CEO and Founder","name":"John Smith","description":"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy","profile":"/team/c1.png","link":"/"},{"title":"Director of Operations","name":"Jane Doe","description":"7+ years of experience in project management and team leadership. Strong organizational and communication skills","profile":"/team/c2.png","link":"/"},{"title":"Senior SEO Specialist","name":"Michael Brown","description":"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization","profile":"/team/c3.png","link":"/"}];
const process = [{"index":1,"label":"Consultation","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},{"index":2,"label":"Research","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},{"index":3,"label":"Implementation","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},{"index":4,"label":"Optimization","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},{"index":5,"label":"Reporting","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},{"index":6,"label":"Improvement","content":"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."}];
const teamData = {
  team,
  process,
};

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-dark-400/30 overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-primary-500/10 shadow-[0px_5px_0px_rgba(34,197,94,0.1)] text-white"> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")}> <div class="flex items-center gap-[25px]"> <span class="hidden sm:block sm:text-6xl text-primary-500/50">0${index}</span> <span class="text-xl font-medium">${title}</span> </div> <div class="bg-dark-500/50 w-[58px] h-[58px] flex justify-center items-center rounded-full border border-primary-500/20 group-hover:bg-primary-500/10 transition-colors duration-300"> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true"></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]"> <div class="w-full h-[2px] bg-primary-500/20"></div> <p class="prose text-dark-300 mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]"> ${description} </p> </div> </div> ${renderScript($$result, "/home/ibrahim/Work/zhive249AstroJs/src/components/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Accordion.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Process", "description": "Step-by-Step Guide to Achieving Your Business Goals" })} </div> <div class="my-6"> <div class="space-y-10"> ${teamData.process.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Accordion", $$Accordion, { "index": item.index, "title": item.label, "description": item.content })}`;
  })} </div> </div> <div class="relative flex flex-col items-center md:flex-row pt-6"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Team", "description": "Meet the skilled and experienced team behind our successful digital marketing strategies" })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"> ${teamData.team.map(({ title, description, name, link, profile }) => renderTemplate`<div class="h-[331px] px-[35px] py-10 bg-dark-400/30 rounded-[45px] shadow-card border border-primary-500/10 flex-col justify-start items-start gap-2.5 inline-flex text-white hover:bg-dark-400/50 transition-all duration-300"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")} class="rounded-full border-2 border-primary-500/20"> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal text-dark-300">${title}</div> <div class="text-xl font-medium text-white">${name}</div> </div> </div> <a class="top-0 right-0 hover:opacity-75 transition-opacity"${addAttribute(link, "href")}> <img src="/team/lng.svg" alt="vector"> </a> </div> <p class="text-dark-300 text-base leading-relaxed">${description}</p> </div> </div>`)} </div> </div> <div class="w-full justify-center md:justify-end items-center inline-flex"> <button class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">See all team
</button> </div> ` })} <!-- TODO: change the layout of the team card -->`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Team.astro", void 0);

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { index: 1, name: "John Johnson", description: "Marketing dierector at XYZ" },
    { index: 2, name: "Ana Banana", description: "Marketing dierector at XYZ" },
    {
      index: 3,
      name: "Camilo Corintio",
      description: "Marketing dierector at XYZ"
    },
    { index: 4, name: "Karla Kaz", description: "Marketing dierector at XYZ" },
    { index: 5, name: "Johanna Jana", description: "Marketing dierector at XYZ" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "#B9FF66",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-g42mys5r> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-g42mys5r> ${slides.map((slide) => renderTemplate`<div class="swiper-slide text-white flex flex-col" role="group"${addAttribute(`${slide.index} / ${slides.length}`, "aria-label")} data-astro-cid-g42mys5r> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-g42mys5r> <p class="bubble" data-astro-cid-g42mys5r>
"We have been working with Zhive249 for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Zhive249 to any company looking to grow their online presence."
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-g42mys5r> <div class="text-lime text-base md:text-xl font-medium" data-astro-cid-g42mys5r>${slide.name}</div> <div data-astro-cid-g42mys5r>${slide.description}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-g42mys5r> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> <div class="swiper-pagination" data-astro-cid-g42mys5r></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> </div> </div> ${renderScript($$result, "/home/ibrahim/Work/zhive249AstroJs/src/components/SwiperSlider.astro?astro&type=script&index=0&lang.ts")}  <!-- TODO: change it to a coursole that keep swiching -->`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/SwiperSlider.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} </div> <div class="rounded-[45px] bg-black mb-[150px] text-white"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> ` })} <!-- todo: edit the content of the  testimonial -->`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/components/Testimonial.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Zhive249" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} </main> ` })}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/pages/index.astro", void 0);

const $$file = "/home/ibrahim/Work/zhive249AstroJs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
