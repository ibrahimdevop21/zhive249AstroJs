/* empty css                                    */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../../chunks/Layout_BNk4G0_9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Privacy Policy | Zhive249";
  const pageDescription = "Learn about how we collect, use, and protect your personal information at Zhive249.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-20 sm:py-32"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold tracking-tight text-white mb-8">Privacy Policy</h1> <div class="prose prose-invert max-w-none"> <p class="text-lg text-navy-200 mb-8">
Last updated: December 15, 2024
</p> <h2>1. Information We Collect</h2> <p>
We collect information that you provide directly to us, including:
</p> <ul> <li>Contact information (name, email, phone number)</li> <li>Business information</li> <li>Communication preferences</li> <li>Service usage data</li> </ul> <h2>2. How We Use Your Information</h2> <p>
We use the information we collect to:
</p> <ul> <li>Provide and improve our services</li> <li>Communicate with you about our services</li> <li>Send you marketing communications (with your consent)</li> <li>Comply with legal obligations</li> </ul> <h2>3. Information Sharing</h2> <p>
We do not sell your personal information. We may share your information with:
</p> <ul> <li>Service providers who assist in our operations</li> <li>Professional advisors</li> <li>Law enforcement when required by law</li> </ul> <h2>4. Your Rights</h2> <p>
You have the right to:
</p> <ul> <li>Access your personal information</li> <li>Correct inaccurate information</li> <li>Request deletion of your information</li> <li>Opt-out of marketing communications</li> </ul> <h2>5. Contact Us</h2> <p>
If you have questions about our Privacy Policy, please contact us at:
</p> <ul> <li>Email: privacy@zhive249.com</li> <li>Phone: (555) 123-4567</li> <li>Address: 123 Business Street, Suite 100, City, State 12345</li> </ul> </div> </div> ` })} </main> ` })}`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/legal/privacy.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/legal/privacy.astro";
const $$url = "/legal/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
