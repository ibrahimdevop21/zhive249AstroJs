/* empty css                                 */
import { f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_BNk4G0_9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-navy-800"> <!-- Background Pattern --> <div class="absolute inset-0 bg-grid-navy-700/30 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div> <!-- Gradient Overlay --> <div class="absolute inset-0"> <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-300/20 to-transparent"></div> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative pt-20 pb-16 sm:pt-32 sm:pb-24"> <!-- Hero Content --> <div class="flex flex-col-reverse gap-16 lg:flex-row lg:items-center"> <!-- Left Section: Text Content --> <div class="lg:w-1/2 lg:pr-8 space-y-8"> <div class="relative"> <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-white"> <span class="text-primary-400">Zhive</span> <span class="text-accent-400">249</span> <span class="block mt-4 text-2xl sm:text-3xl font-medium text-navy-100">
Fueling Your Growth with Smart Digital Strategies
</span> </h1> <div class="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"> <svg class="h-8 text-primary-500/30" viewBox="0 0 28 20" fill="currentColor"> <path d="M16.94 0L11.13 7.66L5.32 0H0L8.75 10.79L0 20H5.32L11.13 13.34L16.94 20H22.26L13.51 10.79L22.26 0H16.94Z"></path> </svg> </div> </div> <p class="text-lg text-navy-200 leading-relaxed">
We combine innovative design, powerful marketing strategies, and cutting-edge web technologies to craft unique, high-impact brands that captivate audiences and drive success in the digital world.
</p> <div class="flex justify-start pt-4"> <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors duration-300">
Book a consultation
<svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path> </svg> </a> </div> <!-- Stats --> <div class="grid grid-cols-3 gap-8 pt-8 border-t border-navy-700/50"> <div> <div class="text-3xl font-bold text-white">150+</div> <div class="text-sm text-navy-300 mt-1">Projects Completed</div> </div> <div> <div class="text-3xl font-bold text-white">98%</div> <div class="text-sm text-navy-300 mt-1">Client Satisfaction</div> </div> <div> <div class="text-3xl font-bold text-white">24/7</div> <div class="text-sm text-navy-300 mt-1">Support Available</div> </div> </div> </div> <!-- Right Section: Image --> <div class="lg:w-1/2 lg:pl-8"> <div class="relative"> <!-- Decorative elements --> <div class="absolute -left-4 -top-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div> <div class="absolute -right-4 -bottom-4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div> <!-- Image container with gradient border --> <div class="relative rounded-2xl bg-gradient-to-b from-navy-600/50 to-navy-700/50 p-1"> <div class="relative rounded-xl overflow-hidden"> <img src="/Hero.svg" class="w-full h-auto" alt="Digital Marketing Solutions" width="600" height="400"> </div> </div> </div> </div> </div> <!-- Client Logos Section --> <div class="mt-24 sm:mt-32 lg:mt-40"> <p class="font-medium text-center text-navy-300 mb-8">Trusted by industry leaders worldwide</p> <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center"> ${[1, 2, 3, 4, 5, 6].map((num) => renderTemplate`<div class="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"> <img${addAttribute(`/clients/0${num}.svg`, "src")} class="h-8 w-auto" loading="lazy"${addAttribute(`Client logo ${num}`, "alt")}> </div>`)} </div> </div> </div> ` })} </div>`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Hero.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      content: "Zhive249 transformed our digital presence completely. Their strategic approach and creative solutions helped us achieve remarkable growth in just months.",
      author: "Sarah Anderson",
      role: "CEO, TechVision",
      rating: 5
    },
    {
      content: "Working with Zhive249 has been a game-changer for our business. Their team's expertise in digital marketing is unmatched.",
      author: "Michael Zhang",
      role: "Marketing Director, InnovateCorp",
      rating: 5
    },
    {
      content: "The results we've seen since partnering with Zhive249 have exceeded our expectations. They truly understand the digital landscape.",
      author: "Emma Roberts",
      role: "Founder, StyleHub",
      rating: 5
    }
  ];
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150%", label: "Average ROI" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 sm:py-32 bg-navy-800" data-astro-cid-fkbbckhy> <!-- Background Pattern --> <div class="absolute inset-0 bg-grid-navy-700/20 bg-[size:20px_20px]" data-astro-cid-fkbbckhy></div> <!-- Gradient Overlays --> <div class="absolute inset-0" data-astro-cid-fkbbckhy> <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-transparent" data-astro-cid-fkbbckhy></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-300/20 to-transparent" data-astro-cid-fkbbckhy></div> </div> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-fkbbckhy": true }, { "default": ($$result2) => renderTemplate`  <div class="relative max-w-2xl mx-auto text-center mb-16" data-astro-cid-fkbbckhy> <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4" data-astro-cid-fkbbckhy>
Trusted by Businesses Worldwide
</h2> <p class="text-lg leading-8 text-navy-200" data-astro-cid-fkbbckhy>
Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
</p> </div>  <div class="relative mx-auto max-w-5xl mb-16" data-astro-cid-fkbbckhy> <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-6" data-astro-cid-fkbbckhy> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-fkbbckhy> <div class="text-4xl font-bold tracking-tight text-white" data-astro-cid-fkbbckhy> ${stat.value} </div> <div class="mt-1 text-base text-navy-300" data-astro-cid-fkbbckhy> ${stat.label} </div> </div>`)} </div> </div>  <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl" data-astro-cid-fkbbckhy> <!-- Decorative Elements --> <div class="absolute -left-4 -top-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" data-astro-cid-fkbbckhy></div> <div class="absolute -right-4 -bottom-4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" data-astro-cid-fkbbckhy></div> ${testimonials.map((testimonial, index) => renderTemplate`<div class="relative group animate-slide-up"${addAttribute(`animation-delay: ${index * 200}ms`, "style")} data-astro-cid-fkbbckhy> <!-- Card Background with Gradient Border --> <div class="absolute -inset-px bg-gradient-to-r from-primary-500/50 to-accent-500/50 rounded-2xl blur transition duration-300 group-hover:opacity-100 opacity-75" data-astro-cid-fkbbckhy></div> <div class="relative h-full p-px bg-navy-700/50 rounded-2xl overflow-hidden" data-astro-cid-fkbbckhy> <div class="relative h-full bg-navy-800/90 rounded-2xl p-8" data-astro-cid-fkbbckhy> <!-- Rating Stars --> <div class="flex gap-1 mb-6" data-astro-cid-fkbbckhy> ${Array.from({ length: testimonial.rating }).map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-fkbbckhy> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-fkbbckhy></path> </svg>`)} </div> <!-- Quote Icon --> <div class="absolute top-6 right-8" data-astro-cid-fkbbckhy> <svg class="w-8 h-8 text-primary-500/20" fill="currentColor" viewBox="0 0 32 32" data-astro-cid-fkbbckhy> <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" data-astro-cid-fkbbckhy></path> </svg> </div> <!-- Testimonial Content --> <blockquote class="text-lg text-navy-200 mb-6" data-astro-cid-fkbbckhy>
"${testimonial.content}"
</blockquote> <!-- Author Info --> <div class="mt-auto" data-astro-cid-fkbbckhy> <div class="font-semibold text-white" data-astro-cid-fkbbckhy> ${testimonial.author} </div> <div class="text-sm text-navy-300" data-astro-cid-fkbbckhy> ${testimonial.role} </div> </div> </div> </div> </div>`)} </div>  <div class="relative mt-24 text-center" data-astro-cid-fkbbckhy> <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors duration-300 group" data-astro-cid-fkbbckhy>
Start Your Success Story
<svg class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-fkbbckhy> <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" data-astro-cid-fkbbckhy></path> </svg> </a> </div> ` })} </section> `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/components/Testimonial.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Zhive249" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} </main> ` })}`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
