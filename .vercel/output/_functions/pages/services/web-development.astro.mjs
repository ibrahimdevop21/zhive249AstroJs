/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_VuVwubc2.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_riYMOvm8.mjs';
export { renderers } from '../../renderers.mjs';

const $$WebDevelopment = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Web Development",
    subtitle: "& Technology",
    description: "Custom web development solutions that combine cutting-edge technology with exceptional user experience to help your business thrive online.",
    image: "/services/04.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Build Your Digital Presence</h2> <p>We create modern, responsive, and user-friendly websites and web applications that help your business succeed in the digital world. Our development team combines technical expertise with creative design to deliver solutions that drive results.</p> <h3>Web Development Services</h3> <ul> <li>Custom Website Development</li> <li>E-commerce Solutions</li> <li>Web Application Development</li> <li>Content Management Systems</li> <li>Website Maintenance & Support</li> <li>Performance Optimization</li> </ul> <h3>Technology Stack</h3> <ul> <li>Frontend: React, Vue.js, Angular</li> <li>Backend: Node.js, Python, PHP</li> <li>Databases: MySQL, MongoDB, PostgreSQL</li> <li>CMS: WordPress, Drupal, Custom Solutions</li> <li>E-commerce: WooCommerce, Shopify, Magento</li> </ul> <h3>Development Process</h3> <ol> <li> <strong>Planning:</strong> We work with you to understand your requirements and create a detailed project plan.
</li> <li> <strong>Design:</strong> Our designers create wireframes and mockups for your approval.
</li> <li> <strong>Development:</strong> We build your solution using modern technologies and best practices.
</li> <li> <strong>Testing:</strong> Rigorous testing ensures your solution works flawlessly across all devices.
</li> <li> <strong>Deployment:</strong> We handle the launch and provide ongoing support.
</li> </ol> <h3>Why Choose Our Web Development Services?</h3> <ul> <li>Experienced development team</li> <li>Modern and responsive designs</li> <li>SEO-friendly development</li> <li>Security best practices</li> <li>Scalable solutions</li> <li>Ongoing support and maintenance</li> </ul> ` })}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/web-development.astro", void 0);

const $$file = "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/web-development.astro";
const $$url = "/services/web-development";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebDevelopment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
