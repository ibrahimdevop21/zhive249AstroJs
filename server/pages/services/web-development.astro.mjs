/* empty css                                    */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_C9-UfyFp.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$WebDevelopment = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Web Development",
    subtitle: "& Technology",
    description: "We build modern, responsive, and scalable web solutions that drive your business forward and provide exceptional user experiences.",
    image: "/services/02.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter, "data-astro-cid-andzumiu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-gradient" data-astro-cid-andzumiu>Transform Your Digital Presence</h2> <p class="text-dark-300" data-astro-cid-andzumiu>At Zhive249, we specialize in creating cutting-edge web solutions that combine stunning design with powerful functionality. Our development team crafts websites and applications that not only look great but also deliver exceptional performance and user experience.</p> <h3 class="text-gradient" data-astro-cid-andzumiu>Our Web Development Services Include:</h3> <ul class="feature-list" data-astro-cid-andzumiu> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>💻</span> <span class="feature-text" data-astro-cid-andzumiu>Custom Website Development</span> </li> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>📱</span> <span class="feature-text" data-astro-cid-andzumiu>Responsive Web Design</span> </li> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>🛒</span> <span class="feature-text" data-astro-cid-andzumiu>E-commerce Solutions</span> </li> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>⚡</span> <span class="feature-text" data-astro-cid-andzumiu>Web Application Development</span> </li> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>🔧</span> <span class="feature-text" data-astro-cid-andzumiu>CMS Integration</span> </li> <li class="feature-item" data-astro-cid-andzumiu> <span class="feature-icon" data-astro-cid-andzumiu>🚀</span> <span class="feature-text" data-astro-cid-andzumiu>Performance Optimization</span> </li> </ul> <h3 class="text-gradient" data-astro-cid-andzumiu>Our Development Process</h3> <div class="process-steps" data-astro-cid-andzumiu> <div class="process-step" data-astro-cid-andzumiu> <div class="step-number" data-astro-cid-andzumiu>1</div> <h4 class="text-white" data-astro-cid-andzumiu>Planning</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-andzumiu>We start with thorough requirements gathering and create a detailed project roadmap to ensure success.</p> </div> <div class="process-step" data-astro-cid-andzumiu> <div class="step-number" data-astro-cid-andzumiu>2</div> <h4 class="text-white" data-astro-cid-andzumiu>Design</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-andzumiu>Our designers create intuitive interfaces and user experiences that align with your brand and goals.</p> </div> <div class="process-step" data-astro-cid-andzumiu> <div class="step-number" data-astro-cid-andzumiu>3</div> <h4 class="text-white" data-astro-cid-andzumiu>Development</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-andzumiu>We build your solution using modern technologies and best practices to ensure scalability and performance.</p> </div> <div class="process-step" data-astro-cid-andzumiu> <div class="step-number" data-astro-cid-andzumiu>4</div> <h4 class="text-white" data-astro-cid-andzumiu>Launch & Support</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-andzumiu>We ensure a smooth deployment and provide ongoing support to keep your web presence running optimally.</p> </div> </div> <h3 class="text-gradient" data-astro-cid-andzumiu>Why Professional Web Development Matters</h3> <div class="benefits-grid" data-astro-cid-andzumiu> ${[
    "Improved user experience and engagement",
    "Better search engine rankings and visibility",
    "Increased conversion rates and sales",
    "Enhanced security and performance",
    "Scalable solutions for business growth"
  ].map((benefit) => renderTemplate`<div class="benefit-item" data-astro-cid-andzumiu> <svg class="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-andzumiu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-andzumiu></path> </svg> <span class="text-navy-300 dark:text-navy-300" data-astro-cid-andzumiu>${benefit}</span> </div>`)} </div> ` })} `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/web-development.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/web-development.astro";
const $$url = "/services/web-development";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebDevelopment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
