
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mavish-thota/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mavish-thota"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11021, hash: '0073641faa5eabfd2d260777e9cc3a7e1d0884bf12dc0cb248416f73dc16ef37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '411a1a44cf15e1ef01dd63e70d561af70d4bb2afb477b17f4d699ade0f2654fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35544, hash: '8a15a6877a794cab6e82c5ad19d88900101a842a3d5594efaa5089fd1a746d00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BPNBRDPQ.css': {size: 311436, hash: 'I/WxWCaGJZU', text: () => import('./assets-chunks/styles-BPNBRDPQ_css.mjs').then(m => m.default)}
  },
};
