/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_VuVwubc2.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_riYMOvm8.mjs';
export { renderers } from '../../renderers.mjs';

const $$DigitalMarketing = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Digital Marketing",
    subtitle: "& Advertising",
    description: "Strategic digital marketing solutions that drive traffic, engage customers, and grow your business in the digital landscape.",
    image: "/services/03.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Grow Your Digital Presence</h2> <p>In today's digital world, having a strong online presence is crucial for business success. Our digital marketing and advertising services help you reach your target audience, engage with them effectively, and convert them into loyal customers.</p> <h3>Our Digital Marketing Services</h3> <ul> <li>Search Engine Optimization (SEO)</li> <li>Pay-Per-Click Advertising (PPC)</li> <li>Social Media Marketing</li> <li>Content Marketing</li> <li>Email Marketing</li> <li>Marketing Automation</li> </ul> <h3>Digital Advertising Solutions</h3> <ul> <li>Google Ads Management</li> <li>Social Media Advertising</li> <li>Display Advertising</li> <li>Retargeting Campaigns</li> <li>Video Advertising</li> </ul> <h3>Our Digital Marketing Approach</h3> <ol> <li> <strong>Strategy Development:</strong> We create a customized digital marketing strategy aligned with your business goals.
</li> <li> <strong>Implementation:</strong> Our team executes the strategy using industry best practices and proven techniques.
</li> <li> <strong>Monitoring:</strong> We continuously monitor campaign performance and make data-driven optimizations.
</li> <li> <strong>Reporting:</strong> Regular reports keep you informed about your campaign's performance and ROI.
</li> </ol> <h3>Why Choose Our Digital Marketing Services?</h3> <ul> <li>Data-driven strategies</li> <li>Transparent reporting</li> <li>ROI-focused approach</li> <li>Continuous optimization</li> <li>Industry expertise</li> <li>Dedicated support team</li> </ul> ` })}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/digital-marketing.astro", void 0);

const $$file = "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/digital-marketing.astro";
const $$url = "/services/digital-marketing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalMarketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
