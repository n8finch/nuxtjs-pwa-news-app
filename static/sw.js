importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.af24e5020f7897a5041b.js",
    "revision": "d876714068d0b3333631ad7ca6d84395"
  },
  {
    "url": "/_nuxt/layouts/default.54be7684cc801c0690b4.js",
    "revision": "1eb806f9d7f98e75f59872fcc516f283"
  },
  {
    "url": "/_nuxt/manifest.afd4bc1dadf83a1d885d.js",
    "revision": "16a02e77449c8803ce287dc715850c4f"
  },
  {
    "url": "/_nuxt/pages/index.f4463fccd2a7b93bffb9.js",
    "revision": "95c5230c0739a838848050bce2a02c03"
  },
  {
    "url": "/_nuxt/vendor.23f6940a7db476a94a22.js",
    "revision": "5305694936c14bca5d365f18bce3a157"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

