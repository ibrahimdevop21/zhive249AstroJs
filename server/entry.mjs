import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DXymFsYP.mjs';
import { manifest } from './manifest_CmVCQA66.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/legal/privacy.astro.mjs');
const _page5 = () => import('./pages/legal/terms.astro.mjs');
const _page6 = () => import('./pages/offline.astro.mjs');
const _page7 = () => import('./pages/services/analytics-optimization.astro.mjs');
const _page8 = () => import('./pages/services/content-creation.astro.mjs');
const _page9 = () => import('./pages/services/creative-branding.astro.mjs');
const _page10 = () => import('./pages/services/digital-marketing.astro.mjs');
const _page11 = () => import('./pages/services/market-research.astro.mjs');
const _page12 = () => import('./pages/services/web-development.astro.mjs');
const _page13 = () => import('./pages/services.astro.mjs');
const _page14 = () => import('./pages/team.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/legal/privacy.astro", _page4],
    ["src/pages/legal/terms.astro", _page5],
    ["src/pages/offline.astro", _page6],
    ["src/pages/services/analytics-optimization.astro", _page7],
    ["src/pages/services/content-creation.astro", _page8],
    ["src/pages/services/creative-branding.astro", _page9],
    ["src/pages/services/digital-marketing.astro", _page10],
    ["src/pages/services/market-research.astro", _page11],
    ["src/pages/services/web-development.astro", _page12],
    ["src/pages/services/index.astro", _page13],
    ["src/pages/team.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/runner/work/zhive249AstroJs/zhive249AstroJs/dist/client/",
    "server": "file:///home/runner/work/zhive249AstroJs/zhive249AstroJs/dist/server/",
    "host": "0.0.0.0",
    "port": 3000,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
