import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_gihVJo91.mjs';
import { manifest } from './manifest_C-DOmKF7.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page5 = () => import('./pages/services/analytics-optimization.astro.mjs');
const _page6 = () => import('./pages/services/content-creation.astro.mjs');
const _page7 = () => import('./pages/services/creative-branding.astro.mjs');
const _page8 = () => import('./pages/services/digital-marketing.astro.mjs');
const _page9 = () => import('./pages/services/market-research.astro.mjs');
const _page10 = () => import('./pages/services/web-development.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/articles/api/search.json.ts", _page2],
    ["src/pages/articles/index.astro", _page3],
    ["src/pages/articles/[...slug].astro", _page4],
    ["src/pages/services/analytics-optimization.astro", _page5],
    ["src/pages/services/content-creation.astro", _page6],
    ["src/pages/services/creative-branding.astro", _page7],
    ["src/pages/services/digital-marketing.astro", _page8],
    ["src/pages/services/market-research.astro", _page9],
    ["src/pages/services/web-development.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0902fc6a-c73b-4e39-a616-72de2357899d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
