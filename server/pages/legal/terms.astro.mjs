/* empty css                                    */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../../chunks/Layout_C-UG3DlI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Terms of Service | Zhive249";
  const pageDescription = "Read our terms of service to understand the agreement between you and Zhive249.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-20 sm:py-32"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold tracking-tight text-white mb-8">Terms of Service</h1> <div class="prose prose-invert max-w-none"> <p class="text-lg text-navy-200 mb-8">
Last updated: December 15, 2024
</p> <h2>1. Agreement to Terms</h2> <p>
By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
</p> <h2>2. Services</h2> <p>
We provide digital marketing, web development, and branding services. The specifics of each service will be outlined in separate agreements or statements of work.
</p> <h2>3. Intellectual Property</h2> <p>
The service and its original content, features, and functionality are owned by Zhive249 and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
</p> <h2>4. User Responsibilities</h2> <p>
You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with applicable laws and regulations.
</p> <h2>5. Changes to Terms</h2> <p>
We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
</p> <h2>6. Contact Us</h2> <p>
If you have any questions about these Terms, please contact us at:
</p> <ul> <li>Email: legal@zhive249.com</li> <li>Phone: (555) 123-4567</li> <li>Address: 123 Business Street, Suite 100, City, State 12345</li> </ul> </div> </div> ` })} </main> ` })}`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/legal/terms.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/legal/terms.astro";
const $$url = "/legal/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
