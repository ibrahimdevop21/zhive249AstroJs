/* empty css                                    */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_C9-UfyFp.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$MarketResearch = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Market Research",
    subtitle: "& Strategy",
    description: "Data-driven market research and strategic planning to help you understand your market, competitors, and customers better.",
    image: "/services/03.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter, "data-astro-cid-eesw3gks": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-gradient" data-astro-cid-eesw3gks>Transform Your Market Understanding</h2> <p class="text-dark-300" data-astro-cid-eesw3gks>At Zhive249, we help businesses make informed decisions through comprehensive market research and strategic analysis. Our data-driven approach ensures you understand your market, competitors, and customers to drive sustainable growth.</p> <h3 class="text-gradient" data-astro-cid-eesw3gks>Our Market Research Services Include:</h3> <ul class="feature-list" data-astro-cid-eesw3gks> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>📊</span> <span class="feature-text" data-astro-cid-eesw3gks>Market Analysis & Trends</span> </li> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>🎯</span> <span class="feature-text" data-astro-cid-eesw3gks>Competitor Research</span> </li> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>👥</span> <span class="feature-text" data-astro-cid-eesw3gks>Consumer Behavior Studies</span> </li> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>📈</span> <span class="feature-text" data-astro-cid-eesw3gks>Data Analytics</span> </li> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>🎨</span> <span class="feature-text" data-astro-cid-eesw3gks>Brand Positioning</span> </li> <li class="feature-item" data-astro-cid-eesw3gks> <span class="feature-icon" data-astro-cid-eesw3gks>📋</span> <span class="feature-text" data-astro-cid-eesw3gks>Strategic Planning</span> </li> </ul> <h3 class="text-gradient" data-astro-cid-eesw3gks>Our Research Process</h3> <div class="process-steps" data-astro-cid-eesw3gks> <div class="process-step" data-astro-cid-eesw3gks> <div class="step-number" data-astro-cid-eesw3gks>1</div> <h4 class="text-white" data-astro-cid-eesw3gks>Data Collection</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-eesw3gks>We gather comprehensive data through various research methods and reliable sources.</p> </div> <div class="process-step" data-astro-cid-eesw3gks> <div class="step-number" data-astro-cid-eesw3gks>2</div> <h4 class="text-white" data-astro-cid-eesw3gks>Analysis</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-eesw3gks>Our experts analyze the data to identify patterns, trends, and opportunities.</p> </div> <div class="process-step" data-astro-cid-eesw3gks> <div class="step-number" data-astro-cid-eesw3gks>3</div> <h4 class="text-white" data-astro-cid-eesw3gks>Strategy</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-eesw3gks>We develop actionable strategies based on research insights and business objectives.</p> </div> <div class="process-step" data-astro-cid-eesw3gks> <div class="step-number" data-astro-cid-eesw3gks>4</div> <h4 class="text-white" data-astro-cid-eesw3gks>Implementation</h4> <p class="text-navy-300 dark:text-navy-300 mt-2" data-astro-cid-eesw3gks>We help you implement the strategies and monitor results for continuous improvement.</p> </div> </div> <h3 class="text-gradient" data-astro-cid-eesw3gks>Why Market Research Matters</h3> <div class="benefits-grid" data-astro-cid-eesw3gks> ${[
    "Make data-driven business decisions",
    "Identify market opportunities and threats",
    "Understand customer needs and preferences",
    "Stay ahead of market trends",
    "Optimize marketing strategies"
  ].map((benefit) => renderTemplate`<div class="benefit-item" data-astro-cid-eesw3gks> <svg class="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-eesw3gks> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-eesw3gks></path> </svg> <span class="text-navy-300 dark:text-navy-300" data-astro-cid-eesw3gks>${benefit}</span> </div>`)} </div> ` })} `;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/market-research.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/services/market-research.astro";
const $$url = "/services/market-research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MarketResearch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
