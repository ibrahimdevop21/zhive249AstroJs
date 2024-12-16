/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_VuVwubc2.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from '../../chunks/ServiceLayout_riYMOvm8.mjs';
export { renderers } from '../../renderers.mjs';

const $$ContentCreation = createComponent(($$result, $$props, $$slots) => {
  const frontmatter = {
    title: "Content Creation",
    subtitle: "& Copywriting",
    description: "Engaging content and compelling copy that tells your brand story, connects with your audience, and drives action.",
    image: "/services/05.svg"
  };
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Tell Your Story</h2> <p>Great content is the foundation of successful digital marketing. Our content creation and copywriting services help you create compelling narratives that engage your audience, build trust, and drive conversions.</p> <h3>Content Creation Services</h3> <ul> <li>Blog Posts & Articles</li> <li>Website Content</li> <li>Social Media Content</li> <li>Video Scripts</li> <li>Email Newsletters</li> <li>Case Studies & White Papers</li> </ul> <h3>Copywriting Services</h3> <ul> <li>Website Copy</li> <li>Product Descriptions</li> <li>Ad Copy</li> <li>Sales Pages</li> <li>Brand Messaging</li> <li>Email Campaigns</li> </ul> <h3>Our Content Creation Process</h3> <ol> <li> <strong>Strategy:</strong> We develop a content strategy aligned with your business goals and target audience.
</li> <li> <strong>Research:</strong> Our team conducts thorough research to ensure accurate and valuable content.
</li> <li> <strong>Creation:</strong> Expert writers create engaging content that reflects your brand voice.
</li> <li> <strong>Optimization:</strong> Content is optimized for search engines and user engagement.
</li> <li> <strong>Review:</strong> Multiple rounds of editing ensure high-quality, error-free content.
</li> </ol> <h3>Benefits of Professional Content</h3> <ul> <li>Increased website traffic</li> <li>Better search engine rankings</li> <li>Improved audience engagement</li> <li>Enhanced brand authority</li> <li>Higher conversion rates</li> <li>Stronger customer relationships</li> </ul> ` })}`;
}, "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/content-creation.astro", void 0);

const $$file = "/home/ibrahim/Work/zhive249AstroJs/src/pages/services/content-creation.astro";
const $$url = "/services/content-creation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContentCreation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
