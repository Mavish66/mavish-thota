
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mavish/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mavish"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11015, hash: 'a1c044ee775864ff715b7f1d754dd17fca23da8b5c95942782aea1deee99336f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '9279c20f887f75fcd5b0ba261da08482d93c454abfa7071d68994a37bf629413', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35538, hash: '7dd3619d1747ac79431ea858a064659852ee8bb36d6184ad9f476158c7504845', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BPNBRDPQ.css': {size: 311436, hash: 'I/WxWCaGJZU', text: () => import('./assets-chunks/styles-BPNBRDPQ_css.mjs').then(m => m.default)}
  },
};
