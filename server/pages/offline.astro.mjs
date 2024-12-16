/* empty css                                 */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B6M6a8VB.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_C-UG3DlI.mjs';
export { renderers } from '../renderers.mjs';

const $$Offline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Offline", "description": "You are currently offline", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[60vh] flex items-center justify-center"> <div class="text-center px-4"> <h1 class="text-4xl font-bold mb-4">You're Offline</h1> <p class="text-xl mb-8">Please check your internet connection and try again.</p> <button onclick="window.location.reload()" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition-colors">
Try Again
</button> </div> </div> ` })}`;
}, "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/offline.astro", void 0);

const $$file = "/home/runner/work/zhive249AstroJs/zhive249AstroJs/src/pages/offline.astro";
const $$url = "/offline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Offline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
