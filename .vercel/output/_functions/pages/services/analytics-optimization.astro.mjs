/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_VuVwubc2.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_riYMOvm8.mjs';
import { $ as $$ContactSection } from '../../chunks/ContactSection_DrB6OFr4.mjs';
export { renderers } from '../../renderers.mjs';

const $$AnalyticsOptimization = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Analytics & Optimization",
    subtitle: "Data-Driven Success",
    description: "Transform your digital presence with our comprehensive analytics and optimization services. We help you make informed decisions and achieve measurable results.",
    image: "/services/06.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="space-y-8"> <h2 class="text-3xl font-bold text-white">Unlock Your Digital Potential</h2> <p class="text-dark-300">
Our analytics and optimization services help businesses understand their digital performance and make data-driven improvements. We combine advanced analytics tools with expert interpretation to deliver actionable insights.
</p> <!-- Services List --> <div class="space-y-6"> <h3 class="text-2xl font-bold text-white">Our Analytics Services</h3> <ul class="space-y-4"> <li class="flex items-start gap-3"> <div class="flex-shrink-0 w-6 h-6 mt-1"> <div class="w-full h-full rounded-full bg-primary-500/10 flex items-center justify-center"> <svg class="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> </div> <div> <h4 class="font-semibold text-white">Performance Analytics</h4> <p class="text-dark-300">Comprehensive tracking and analysis of your website's performance metrics, user behavior, and conversion rates.</p> </div> </li> <li class="flex items-start gap-3"> <div class="flex-shrink-0 w-6 h-6 mt-1"> <div class="w-full h-full rounded-full bg-accent-500/10 flex items-center justify-center"> <svg class="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> </div> <div> <h4 class="font-semibold text-white">Conversion Optimization</h4> <p class="text-dark-300">Strategic improvements to your digital assets to increase conversion rates and achieve better ROI.</p> </div> </li> <li class="flex items-start gap-3"> <div class="flex-shrink-0 w-6 h-6 mt-1"> <div class="w-full h-full rounded-full bg-primary-500/10 flex items-center justify-center"> <svg class="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> </div> <div> <h4 class="font-semibold text-white">Security & Performance Monitoring</h4> <p class="text-dark-300">Continuous monitoring of your website's security and performance to ensure optimal user experience.</p> </div> </li> </ul> </div> <!-- Process Section --> <div class="space-y-6 mt-12"> <h3 class="text-2xl font-bold text-white">Our Optimization Process</h3> <div class="grid md:grid-cols-2 gap-6"> <div class="p-6 bg-dark-400/30 rounded-xl border border-primary-500/10"> <h4 class="text-lg font-semibold text-white mb-3">1. Analysis & Audit</h4> <p class="text-dark-300">Comprehensive analysis of your current digital presence and performance metrics.</p> </div> <div class="p-6 bg-dark-400/30 rounded-xl border border-primary-500/10"> <h4 class="text-lg font-semibold text-white mb-3">2. Strategy Development</h4> <p class="text-dark-300">Creation of a customized optimization strategy based on data insights.</p> </div> <div class="p-6 bg-dark-400/30 rounded-xl border border-primary-500/10"> <h4 class="text-lg font-semibold text-white mb-3">3. Implementation</h4> <p class="text-dark-300">Execution of optimization strategies and continuous monitoring of results.</p> </div> <div class="p-6 bg-dark-400/30 rounded-xl border border-primary-500/10"> <h4 class="text-lg font-semibold text-white mb-3">4. Refinement</h4> <p class="text-dark-300">Ongoing adjustments and improvements based on performance data.</p> </div> </div> </div> </div> ` })} ${renderComponent($$result, "ContactSection", $$ContactSection, {})}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/analytics-optimization.astro", void 0);

const $$file = "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/analytics-optimization.astro";
const $$url = "/services/analytics-optimization";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AnalyticsOptimization,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
