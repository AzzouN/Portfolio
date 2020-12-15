/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-d312407f5276e86f5724.js"
  },
  {
    "url": "1bfc9850-d312407f5276e86f5724.js.map",
    "revision": "3cbe9b9830ccc20359196f5dd4ab936c"
  },
  {
    "url": "252f366e-2b598d94f67c9fc40496.js"
  },
  {
    "url": "252f366e-2b598d94f67c9fc40496.js.map",
    "revision": "9460f2ad957fc2be1cbe5c77eb37bede"
  },
  {
    "url": "404.html",
    "revision": "0c8b1bfcbb187e02669b9751dee7bc6a"
  },
  {
    "url": "404/index.html",
    "revision": "ace119ccd1d95e74d3697049a99ee9f4"
  },
  {
    "url": "95b64a6e-abd8a9240e56f65321a0.js"
  },
  {
    "url": "95b64a6e-abd8a9240e56f65321a0.js.map",
    "revision": "e258ba330b084011982b95f17dbab557"
  },
  {
    "url": "app-9b4a13d7ce28a90b3178.js"
  },
  {
    "url": "app-9b4a13d7ce28a90b3178.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-9b4a13d7ce28a90b3178.js.map",
    "revision": "98cd95ad362fecff375132127918eb54"
  },
  {
    "url": "app-d0631c3d5de6047b1e3c.js"
  },
  {
    "url": "app-d0631c3d5de6047b1e3c.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-d0631c3d5de6047b1e3c.js.map",
    "revision": "cb59cfc9110a7c9eb7a849bfbb6dab53"
  },
  {
    "url": "chunk-map.json",
    "revision": "bf57a2435ae7144d1665ee6ba4e72a8b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js.map",
    "revision": "e0d91a69f4259a63d8fe8814bfd0c1e9"
  },
  {
    "url": "component---src-pages-404-js-28778909a0a47c527b37.js"
  },
  {
    "url": "component---src-pages-404-js-28778909a0a47c527b37.js.map",
    "revision": "a3ac0914eb2f07c934438a429c87482b"
  },
  {
    "url": "component---src-pages-index-js-19a2deb87b06af3bdcee.js"
  },
  {
    "url": "component---src-pages-index-js-19a2deb87b06af3bdcee.js.LICENSE.txt",
    "revision": "f335b0ba0ac0704fa836055695995533"
  },
  {
    "url": "component---src-pages-index-js-19a2deb87b06af3bdcee.js.map",
    "revision": "2dd02b0db28decd230c9434229f61e44"
  },
  {
    "url": "component---src-pages-index-js-7f8a227f266b6a160b07.js"
  },
  {
    "url": "component---src-pages-index-js-7f8a227f266b6a160b07.js.LICENSE.txt",
    "revision": "f335b0ba0ac0704fa836055695995533"
  },
  {
    "url": "component---src-pages-index-js-7f8a227f266b6a160b07.js.map",
    "revision": "e862671462e7180f188512fe34f71819"
  },
  {
    "url": "component---src-pages-index-js-c4d1670ef2dbbd026bf5.js"
  },
  {
    "url": "component---src-pages-index-js-c4d1670ef2dbbd026bf5.js.LICENSE.txt",
    "revision": "f335b0ba0ac0704fa836055695995533"
  },
  {
    "url": "component---src-pages-index-js-c4d1670ef2dbbd026bf5.js.map",
    "revision": "4b3128a44c1fb16282a70ec30c592cf5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "8538deb2308b110c16e99d747853dd01"
  },
  {
    "url": "framework-de237a875aa45b276a9d.js"
  },
  {
    "url": "framework-de237a875aa45b276a9d.js.LICENSE.txt",
    "revision": "c7c771c7a9ea0b2f7e6b82ef94cc9f76"
  },
  {
    "url": "framework-de237a875aa45b276a9d.js.map",
    "revision": "c342d494b2b4023c967c7debf45bb79c"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "5d3dd313dbf725883ce8317443d315d1"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "676a2fbb644adc476714bac22fd65c24"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "a227350126ba8ac73e39a0fa2ffbf285"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b068dd06caa080f7e7e9c66f5e2c24d0"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "c2da6ad8154ad331e4a31663ae621c06"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "794060297b95fc7f947d0ccbabf6f714"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e49e923073e86dd72992188704e99751"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "78d75f9e49a6da8ecfb0cdb1cdc3ee34"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "aa4b796a35005396479e1c9fce370de8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "221bd59924bc7e3420b987105961e9f9"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a849a59d91409eb3c33f83916093e18d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "432cb57b2827319e3295650a89a0deb4"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1c35e7e8d2ffde3df194777aaa6a590b"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1092668639.json",
    "revision": "af8c5be98cf4ea934fc4f622557bc10d"
  },
  {
    "url": "page-data/sq/d/1200720306.json",
    "revision": "cb23cacb7312024bb11f40929f0cc17a"
  },
  {
    "url": "page-data/sq/d/1222469640.json",
    "revision": "2360e6e15d6382bd233e1ce3449dfe50"
  },
  {
    "url": "page-data/sq/d/1231508858.json",
    "revision": "ac71dfd04ab7de64f38c629bdfc27767"
  },
  {
    "url": "page-data/sq/d/1409895069.json",
    "revision": "1dbd98d5e07dbcb13e3f7c34786e9967"
  },
  {
    "url": "page-data/sq/d/1709894009.json",
    "revision": "4526ebd5d7193d04aae262f38f596ded"
  },
  {
    "url": "page-data/sq/d/1728136154.json",
    "revision": "f390e7a44a7a9abd674b0c1e0182741b"
  },
  {
    "url": "page-data/sq/d/2201648158.json",
    "revision": "1f778a5309d7d6cdd6b00ba15923d22c"
  },
  {
    "url": "page-data/sq/d/2255141545.json",
    "revision": "3a286c4255703cce1339a8922836ff1c"
  },
  {
    "url": "page-data/sq/d/2396307195.json",
    "revision": "ffd34f0f2a9a1ab9688378a95234fafe"
  },
  {
    "url": "page-data/sq/d/2857241952.json",
    "revision": "3f1835638cb71eb1ffa7018a17ac136b"
  },
  {
    "url": "page-data/sq/d/2864300244.json",
    "revision": "43083f8b9ada3694fab6815c84e930a3"
  },
  {
    "url": "page-data/sq/d/3313315525.json",
    "revision": "2a84643c8b3258a4dc60f463d1df7d2e"
  },
  {
    "url": "page-data/sq/d/3506755355.json",
    "revision": "30a98ebdfdf41868d5f51ac5529e882e"
  },
  {
    "url": "page-data/sq/d/3839990767.json",
    "revision": "59aa32773d71d60faf21cf1e75d1c214"
  },
  {
    "url": "page-data/sq/d/3961674297.json",
    "revision": "ea4104fb62592cf4253863ffa3815d64"
  },
  {
    "url": "page-data/sq/d/4056429656.json",
    "revision": "5c1fe0a90f6a8390b49e7a4ce75f9487"
  },
  {
    "url": "page-data/sq/d/4271188622.json",
    "revision": "50bf8fa55a56622ea7d7ffb798b8868e"
  },
  {
    "url": "page-data/sq/d/695964893.json",
    "revision": "2c65c60c8e72e454f065bfb4c78f7cde"
  },
  {
    "url": "page-data/sq/d/752792606.json",
    "revision": "9d1e8ee61e102a1a78dee7e7ebb31da3"
  },
  {
    "url": "page-data/sq/d/883961150.json",
    "revision": "7cee2a5616d099da2a2a9e3d5cec7c1c"
  },
  {
    "url": "polyfill-f1ea87304f8d1ce6befc.js"
  },
  {
    "url": "polyfill-f1ea87304f8d1ce6befc.js.map",
    "revision": "b38045f6defc857ba458a2299c54cf0a"
  },
  {
    "url": "robots.txt",
    "revision": "333a29b9f933cb5f49dd8bc60ef85a9e"
  },
  {
    "url": "sitemap.xml",
    "revision": "cf86211ce0c9047d179eb65c8ad97b3a"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/0aa94/ionic.webp"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/4c427/ionic.png"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/91664/ionic.png"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/c05ea/ionic.webp"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/e711a/ionic.webp"
  },
  {
    "url": "static/049a4f4085f7cf65e2ec5de599c937e0/ff4be/ionic.png"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/0aa94/networking.webp"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/4c427/networking.png"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/91664/networking.png"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/c05ea/networking.webp"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/e711a/networking.webp"
  },
  {
    "url": "static/09e00eaa6f2b8e8c206827ca7c2ee9ab/ff4be/networking.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/0aa94/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/4c427/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/91664/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/c05ea/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/e711a/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/ff4be/sketch.png"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/0aa94/desktop.webp"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/4c427/desktop.png"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/91664/desktop.png"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/c05ea/desktop.webp"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/e711a/desktop.webp"
  },
  {
    "url": "static/0cb874598f768d1d1e6ed5cf9aedfe3d/ff4be/desktop.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/0aa94/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/4c427/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/91664/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/c05ea/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/e711a/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/ff4be/fcpx.png"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/10d63/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/4e333/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/54d25/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/578e8/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/61be4/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/8dbf3/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/9104c/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/991d2/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/c01e2/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/e75b5/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/e90a5/100910950_171504770971834_8154796589301438425_n.webp"
  },
  {
    "url": "static/17c6be239316651d481ce916fe410569/f422e/100910950_171504770971834_8154796589301438425_n.jpg"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/559c9/grabhouse.png"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/767bb/grabhouse.png"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/804d1/grabhouse.webp"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/8a409/grabhouse.png"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/e8cf1/grabhouse.webp"
  },
  {
    "url": "static/1a7dbca284b01540ef160b1475e7492d/fa51b/grabhouse.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/10d63/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/4e333/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/54d25/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/578e8/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/61be4/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/8dbf3/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/9104c/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/991d2/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/c01e2/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/e75b5/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/e90a5/75644816_1483759665113237_7048872897368576186_n.webp"
  },
  {
    "url": "static/1e9e08246d4c433bc0c395248d60bf87/f422e/75644816_1483759665113237_7048872897368576186_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/2aa8d/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/4e333/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/578e8/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/61be4/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/7d509/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/8dbf3/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/9104c/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/991d2/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/c01e2/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/e75b5/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/e90a5/79303191_626694224536665_3244206536001930483_n.webp"
  },
  {
    "url": "static/20b5ddeb7a8e09378dcceed5db923d3b/f422e/79303191_626694224536665_3244206536001930483_n.jpg"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/0aa94/linux.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/0aa94/linux2.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/4c427/linux.png"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/4c427/linux2.png"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/91664/linux.png"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/91664/linux2.png"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/c05ea/linux.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/c05ea/linux2.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/e711a/linux.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/e711a/linux2.webp"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/ff4be/linux.png"
  },
  {
    "url": "static/210bdcb542a9b5d2e5ed8c6b20ade706/ff4be/linux2.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/1f5c5/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/210c1/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/2a4de/web_scraping_telegram.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/497c6/web_scraping_telegram.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/58556/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/61e93/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/65e33/web_scraping_telegram.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/69585/web_scraping_telegram.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/ad85c/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/d1f52/web_scraping_telegram.webp"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/db955/web_scraping_telegram.png"
  },
  {
    "url": "static/236353a30c6c958d8348bf6789746fd8/ee604/web_scraping_telegram.png"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/10d63/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/4e333/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/54d25/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/578e8/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/61be4/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/8dbf3/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/9104c/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/991d2/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/c01e2/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/e75b5/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/e90a5/103075077_1508569099320377_1443846508279465430_n.webp"
  },
  {
    "url": "static/25d1ba9dabfc5f7e5e3210c452395490/f422e/103075077_1508569099320377_1443846508279465430_n.jpg"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/1f5c5/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/2a4de/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/31987/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/497c6/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/58556/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/61e93/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/65e33/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/69585/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/ad85c/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/d1f52/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/e30b5/xxisbwur9e0iejtfrja5.webp"
  },
  {
    "url": "static/27a4bc38ea0007b2598edc57f42f0aab/ee604/xxisbwur9e0iejtfrja5.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/2a4de/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/403a4/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/58556/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/630fb/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/6d161/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ad85c/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/e7487/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ee604/preview.png"
  },
  {
    "url": "static/2cb1230b601a9f4c34eb90be300e9a54/aff39/sams.png"
  },
  {
    "url": "static/2cb1230b601a9f4c34eb90be300e9a54/c1598/sams.png"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/1f5c5/inventory_app.webp"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/2a4de/inventory_app.png"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/497c6/inventory_app.png"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/58556/inventory_app.webp"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/61e93/inventory_app.webp"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/65e33/inventory_app.png"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/69585/inventory_app.png"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/ad85c/inventory_app.webp"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/d1f52/inventory_app.webp"
  },
  {
    "url": "static/2ec82b35460c408980c8d27618ec0fee/ee604/inventory_app.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/0aa94/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/4c427/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/91664/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/c05ea/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/e711a/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/ff4be/angular.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/1f5c5/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/2a4de/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/497c6/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/58556/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/61e93/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/65e33/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/685a2/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/69585/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ad85c/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/bbee5/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/d1f52/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ee604/mutual-fund-calculator.png"
  },
  {
    "url": "static/3231db075fb1b7840081b34d9f14b0fa/aff39/sorbonne.png"
  },
  {
    "url": "static/3231db075fb1b7840081b34d9f14b0fa/c1598/sorbonne.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/0aa94/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/4c427/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/91664/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/c05ea/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/e711a/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/ff4be/web.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/0aa94/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/4c427/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/91664/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/c05ea/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/e711a/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/ff4be/seo.png"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/1f5c5/e-commerce_app.webp"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/2a4de/e-commerce_app.png"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/497c6/e-commerce_app.png"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/58556/e-commerce_app.webp"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/61e93/e-commerce_app.webp"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/65e33/e-commerce_app.png"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/69585/e-commerce_app.png"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/ad85c/e-commerce_app.webp"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/d1f52/e-commerce_app.webp"
  },
  {
    "url": "static/35eb49a328934d93b6f616c2a1d4ca99/ee604/e-commerce_app.png"
  },
  {
    "url": "static/36157329b2c85ff4893c2198fe6019a0/aff39/usthb.png"
  },
  {
    "url": "static/36157329b2c85ff4893c2198fe6019a0/c1598/usthb.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/0aa94/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/4c427/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/91664/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/c05ea/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/e711a/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/ff4be/nodejs.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/0aa94/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/4c427/python.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/91664/python.png"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/c05ea/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/e711a/python.webp"
  },
  {
    "url": "static/3afb5a499062c7582791a16f967c51cc/ff4be/python.png"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/0aa94/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/4c427/tensorflow.png"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/91664/tensorflow.png"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/c05ea/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/e711a/tensorflow.webp"
  },
  {
    "url": "static/3d1319a937789deb7589e73bef70fe8a/ff4be/tensorflow.png"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/0aa94/linux.webp"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/4c427/linux.png"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/91664/linux.png"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/c05ea/linux.webp"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/e711a/linux.webp"
  },
  {
    "url": "static/416479d28b7da924dc67a108f9cd44cf/ff4be/linux.png"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/2a4de/photo.png"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/34b62/photo.webp"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/61fd6/photo.png"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/62915/photo.png"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/a3e81/photo.webp"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/ad85c/photo.webp"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/bc59e/photo.png"
  },
  {
    "url": "static/499d632f767081891758647dd9625437/cde37/photo.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/10d63/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/4e333/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/54d25/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/578e8/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/61be4/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/8dbf3/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/9104c/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/991d2/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/c01e2/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/e75b5/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/e90a5/101007309_568607494067450_1762949232574125543_n.webp"
  },
  {
    "url": "static/552e6e2af9f5ba4a808051fe98be7573/f422e/101007309_568607494067450_1762949232574125543_n.jpg"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/0756a/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/2cd0c/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/34b62/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/61fd6/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/62915/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/7f8e9/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/a3e81/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/bc59e/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/cbc07/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/cde37/selfie-boy.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/130c1/logo.png"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/26717/logo.png"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/2b4de/logo.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/307ba/logo.png"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/35e2f/logo.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/a5ab3/logo.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/be3cd/logo.png"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/d0fb6/logo.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/d3cb6/logo.webp"
  },
  {
    "url": "static/5f27822e1f002aaefcd7458f1600f2ba/e0c5e/logo.png"
  },
  {
    "url": "static/62e4b00bcb211c7de86ae7ace9bcae62/share.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/130c1/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/20ef8/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/26717/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/2a0d1/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/2b4de/logo.webp"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/307ba/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/58b30/logo.webp"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/a5ab3/logo.webp"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/bda67/logo.webp"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/be3cd/logo.png"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/d0fb6/logo.webp"
  },
  {
    "url": "static/65f36a66470d23bc0561a7f5cc11a2ac/d3cb6/logo.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/1f5c5/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/2a4de/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/497c6/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/58556/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/61e93/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/65e33/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/69585/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/9cf1d/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ad85c/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d1f52/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d8298/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ee604/reactive-resume.png"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/4e333/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/578e8/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/61be4/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/8ab3b/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/8dbf3/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/9104c/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/991d2/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/c01e2/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/e14fc/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/e75b5/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/e90a5/79389895_594923027985917_1867332509218205960_n.webp"
  },
  {
    "url": "static/6f4b65e0dae44f4bf6884068282f6988/f422e/79389895_594923027985917_1867332509218205960_n.jpg"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/0aa94/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/4c427/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/91664/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/c05ea/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/e711a/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/ff4be/database.png"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/559c9/cognitive-clouds.png"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/767bb/cognitive-clouds.png"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/804d1/cognitive-clouds.webp"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/8a409/cognitive-clouds.png"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/e8cf1/cognitive-clouds.webp"
  },
  {
    "url": "static/768eb74b2fda74fa134c77730e090e98/fa51b/cognitive-clouds.webp"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/0aa94/linux.webp"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/4c427/linux.png"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/91664/linux.png"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/c05ea/linux.webp"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/e711a/linux.webp"
  },
  {
    "url": "static/7921ffe07305e5b27bbf6c8e75866e83/ff4be/linux.png"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/559c9/betsol.png"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/767bb/betsol.png"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/804d1/betsol.webp"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/8a409/betsol.png"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/e8cf1/betsol.webp"
  },
  {
    "url": "static/7b747e00fe610f134734ddf262028a8e/fa51b/betsol.webp"
  },
  {
    "url": "static/819e14216ca166ee64e69b916eb9a57c/aff39/jvvp.png"
  },
  {
    "url": "static/819e14216ca166ee64e69b916eb9a57c/c1598/jvvp.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/130c1/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/20ef8/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/26717/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/2a0d1/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/2b4de/logo.webp"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/307ba/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/58b30/logo.webp"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/a5ab3/logo.webp"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/bda67/logo.webp"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/be3cd/logo.png"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/d0fb6/logo.webp"
  },
  {
    "url": "static/8c1c38da620d862d89bea4bb712a44a4/d3cb6/logo.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/09af0/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/1f5c5/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/2a4de/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/497c6/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/58556/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/61e93/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/65e33/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/69585/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ad85c/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/bbdb3/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/d1f52/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ee604/be-thrifty-today.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/0aa94/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/4c427/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/91664/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/c05ea/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/e711a/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/ff4be/android.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/1f5c5/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/2a4de/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/497c6/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/58556/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/61e93/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/65e33/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/69585/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ad85c/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/d1f52/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e0dbb/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e1b47/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ee604/madrasi-bride.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/0aa94/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/4c427/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/91664/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/c05ea/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/e711a/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/ff4be/photography.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/05ac5/343887.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/1f5c5/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/2a4de/343887.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/497c6/343887.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/58556/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/61e93/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/65e33/343887.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/69585/343887.png"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/ad85c/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/c7bac/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/d1f52/343887.webp"
  },
  {
    "url": "static/9c7b291b7b4b252b131c5c96e4d8041b/ee604/343887.png"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/10d63/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/4e333/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/54d25/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/578e8/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/61be4/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/8dbf3/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/9104c/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/991d2/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/c01e2/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/e75b5/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/e90a5/79034573_298692111071609_1473920722899056893_n.webp"
  },
  {
    "url": "static/9c84a26191c351b3153144d90f37ae89/f422e/79034573_298692111071609_1473920722899056893_n.jpg"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/559c9/postman.png"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/767bb/postman.png"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/804d1/postman.webp"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/8a409/postman.png"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/e8cf1/postman.webp"
  },
  {
    "url": "static/9fa394aa7556ea62071bf79475e562f9/fa51b/postman.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/10d63/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/4e333/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/54d25/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/578e8/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/61be4/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/8dbf3/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/9104c/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/991d2/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/c01e2/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/e75b5/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/e90a5/76962306_105017734269721_4161760763779387468_n.webp"
  },
  {
    "url": "static/a18dc3a96f2516b1946749283f4b5567/f422e/76962306_105017734269721_4161760763779387468_n.jpg"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/0aa94/admin.webp"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/4c427/admin.png"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/91664/admin.png"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/c05ea/admin.webp"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/e711a/admin.webp"
  },
  {
    "url": "static/a22e6642d24fc4901180d0e25279ade5/ff4be/admin.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/130c1/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/20ef8/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/26717/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/2a0d1/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/2b4de/logo.webp"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/307ba/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/58b30/logo.webp"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/a5ab3/logo.webp"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/bda67/logo.webp"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/be3cd/logo.png"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/d0fb6/logo.webp"
  },
  {
    "url": "static/a3e59bab94ae12aba70a25730a8da413/d3cb6/logo.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/1f5c5/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/2a4de/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/31987/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/497c6/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/58556/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/61e93/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/65e33/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/69585/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/ad85c/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/d1f52/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/e30b5/b8vqzo9npmv9wstwq4bj.webp"
  },
  {
    "url": "static/a511b00f6549e46d9235d4acf28ef31f/ee604/b8vqzo9npmv9wstwq4bj.png"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/559c9/dhiyo.png"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/767bb/dhiyo.png"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/804d1/dhiyo.webp"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/8a409/dhiyo.png"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/e8cf1/dhiyo.webp"
  },
  {
    "url": "static/a9b94a0a62819d1140dba891adb384f0/fa51b/dhiyo.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/05ac5/343887.png"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/1f5c5/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/2a4de/343887.png"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/497c6/343887.png"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/58556/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/61e93/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/65e33/343887.png"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/69585/343887.png"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/ad85c/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/c7bac/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/d1f52/343887.webp"
  },
  {
    "url": "static/b0d8992f1f77309bbf9962841c8c1737/ee604/343887.png"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/0aa94/linux.webp"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/0cce2/linux.jpg"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/58a4b/linux.jpg"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/c05ea/linux.webp"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/c8a1d/linux.jpg"
  },
  {
    "url": "static/b1de1080d972c7745ddb5d0c2e6cefdc/e711a/linux.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/1f5c5/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/2a4de/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/31987/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/497c6/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/58556/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/61e93/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/65e33/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/69585/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/ad85c/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/d1f52/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/e30b5/5tmsr2fyo0o8rmjujy84.webp"
  },
  {
    "url": "static/b595e7b0315d8f23e3966c6cedf5bd6a/ee604/5tmsr2fyo0o8rmjujy84.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/0b7e8/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/62cc5/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/adbdf/icon.webp"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/aff39/icon.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/c1598/icon.png"
  },
  {
    "url": "static/b5980d7112cf4032238666acf591577f/ea22a/icon.png"
  },
  {
    "url": "static/b8269ca27d66cfe3aa08594cb1a70c32/0b7e8/icon.webp"
  },
  {
    "url": "static/b8269ca27d66cfe3aa08594cb1a70c32/62cc5/icon.webp"
  },
  {
    "url": "static/b8269ca27d66cfe3aa08594cb1a70c32/aff39/icon.png"
  },
  {
    "url": "static/b8269ca27d66cfe3aa08594cb1a70c32/c1598/icon.png"
  },
  {
    "url": "static/b88537f13d286035e56c6c4abe46245a/c1598/sorbonne.png"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/0aa94/linux.webp"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/4c427/linux.png"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/91664/linux.png"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/c05ea/linux.webp"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/e711a/linux.webp"
  },
  {
    "url": "static/b8ff85eaab1da21882ba797d2296eaa1/ff4be/linux.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/1f5c5/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/210c1/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/2a4de/picture.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/497c6/picture.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/58556/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/61e93/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/65e33/picture.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/69585/picture.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/ad85c/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/d1f52/picture.webp"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/db955/picture.png"
  },
  {
    "url": "static/c1917a60072d734609403b208f806ded/ee604/picture.png"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/10d63/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/4e333/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/54d25/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/578e8/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/61be4/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/8dbf3/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/9104c/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/991d2/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/c01e2/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/e75b5/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/e90a5/79124031_1485339484975927_7119298222847502476_n.webp"
  },
  {
    "url": "static/cc3ca60f0c6176f73d99184c0c58a38f/f422e/79124031_1485339484975927_7119298222847502476_n.jpg"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/0aa94/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/4c427/flutter.png"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/91664/flutter.png"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/c05ea/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/e711a/flutter.webp"
  },
  {
    "url": "static/d6b809d0a522236b5aaae57f8545858c/ff4be/flutter.png"
  },
  {
    "url": "static/d7fa1bcaea460b58f468d740eed7990a/aff39/dsi.png"
  },
  {
    "url": "static/d7fa1bcaea460b58f468d740eed7990a/c1598/dsi.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/1f5c5/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/2a4de/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/31987/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/497c6/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/58556/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/61e93/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/65e33/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/69585/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/ad85c/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/d1f52/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/e30b5/bl83qhh6lciy3lkt0l1w.webp"
  },
  {
    "url": "static/e73a26d8c06bbbcb4fb103fd6b73fad0/ee604/bl83qhh6lciy3lkt0l1w.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/1f5c5/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/2a4de/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/497c6/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/58556/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/605f8/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/61e93/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/65e33/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/69585/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/81149/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ad85c/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/d1f52/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ee604/words-i-know.png"
  },
  {
    "url": "static/f090c6242aac7771b781b1786501c4ce/aff39/sorbonne.png"
  },
  {
    "url": "static/f090c6242aac7771b781b1786501c4ce/c1598/sorbonne.png"
  },
  {
    "url": "static/f090c6242aac7771b781b1786501c4ce/ea22a/sorbonne.png"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/2aa8d/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/4e333/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/578e8/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/61be4/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/7d509/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/8dbf3/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/9104c/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/991d2/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/c01e2/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/e75b5/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/e90a5/80396975_120228352819454_3765699876965607137_n.webp"
  },
  {
    "url": "static/f26b496827f3ce952b6f43d564fa3f74/f422e/80396975_120228352819454_3765699876965607137_n.jpg"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/0756a/photo.png"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/34b62/photo.webp"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/61fd6/photo.png"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/62915/photo.png"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/7f8e9/photo.webp"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/a3e81/photo.webp"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/a8378/photo.png"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/bc59e/photo.png"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/cc834/photo.webp"
  },
  {
    "url": "static/f5a9604ea81e7f3e0cb5811488c4045a/cde37/photo.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/1f5c5/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/2a4de/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/31987/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/497c6/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/58556/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/61e93/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/65e33/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/69585/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/ad85c/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/d1f52/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/e30b5/82wgrzbqyr957c28nqup.webp"
  },
  {
    "url": "static/fb298320dde7d096f0fd4a9d803ecb73/ee604/82wgrzbqyr957c28nqup.png"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js.map",
    "revision": "c5efe2c790546eb72253e52cf8b2489c"
  },
  {
    "url": "styles.a5c6660f2b3f2e982f4f.css"
  },
  {
    "url": "webpack-runtime-19029e9623b806bcfcf4.js"
  },
  {
    "url": "webpack-runtime-19029e9623b806bcfcf4.js.map",
    "revision": "f18ed8ebfcbe26f464de84ee52b1bc64"
  },
  {
    "url": "webpack-runtime-3b08622382b1dcd0df79.js"
  },
  {
    "url": "webpack-runtime-3b08622382b1dcd0df79.js.map",
    "revision": "dde3c8257f1d2c8df2cd0660f8f5588e"
  },
  {
    "url": "webpack-runtime-7c1ac7f0af00ad952e0c.js"
  },
  {
    "url": "webpack-runtime-7c1ac7f0af00ad952e0c.js.map",
    "revision": "aa36d2713e905f18238e635e939a36bd"
  },
  {
    "url": "webpack-runtime-eadc3bf1817cb07fe98f.js"
  },
  {
    "url": "webpack-runtime-eadc3bf1817cb07fe98f.js.map",
    "revision": "eeb9917664c0d386dfe74b091cbf36a7"
  },
  {
    "url": "webpack.stats.json",
    "revision": "63683dfa16c4d642f4fc8b038edfc1ab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-d0631c3d5de6047b1e3c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
