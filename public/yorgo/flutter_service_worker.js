'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "abb7cd08ff541419ff5ef8b00fe524f5",
"assets/AssetManifest.bin.json": "5baff1115c4acef3a704275aa466a32c",
"assets/AssetManifest.json": "29972d5a8eaf3523dfee8fef22df9ff9",
"assets/FontManifest.json": "8e6ca49227e0ce52bde42229dcad2a1a",
"assets/fonts/MaterialIcons-Regular.otf": "f221e54f6ff7233981aa12f25b704d46",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Bold.otf": "004b0e65092c105c22987f4a731ea4c0",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-DemiBold.otf": "bb87c4c202afc8907cc461c8594adc33",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-ExtraBold.otf": "0495f924ad5ef94c5b995d9f3f95e249",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-ExtraLight.otf": "b3e7fbbabaa27835da3ed3107e401534",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Heavy.otf": "187b26008e435dfa9a097c3b91e0cd4e",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Light.otf": "97ca94bd50916295086438c04bd342de",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Medium.otf": "672c7c001ac43e56cbe84f94e164d2b6",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Regular.otf": "15ca16e37ede38ccc34153403235ac38",
"assets/lib/assets/icons/facebook.svg": "961c3d43c40a62d7ff59f45b9c424bfb",
"assets/lib/assets/icons/github.svg": "4ffd4fe7945af123788bf5888296c696",
"assets/lib/assets/icons/google.svg": "0bc86561ab39f374a8a28adc98356452",
"assets/lib/assets/icons/handshake.svg": "45f6f5e1b661f880134341993f8b024a",
"assets/lib/assets/icons/instagram.svg": "a7b2f63f926d5703f1e012b6198fff29",
"assets/lib/assets/icons/linkedin.svg": "ad51bdff814c3457e9d9b10734c3e8ca",
"assets/lib/assets/icons/logo.svg": "e9dbabc42751d2792d15fe5da1b082d8",
"assets/lib/assets/icons/ondulation.svg": "213de4bf91660a0ba074cc5f5ce0580a",
"assets/lib/assets/icons/reward.svg": "5dc684f49cb8c5bda3252a8cddd5b7b4",
"assets/lib/assets/icons/team.svg": "a4dd77c7b03bb8784f398bdc98d01575",
"assets/lib/assets/icons/tiktok.svg": "cd8aa64198a3f5b86e0e4c5e9413efbf",
"assets/lib/assets/images/alexandre.jpg": "468abc77922570049e6be15b65ac74a1",
"assets/lib/assets/images/android-chrome-192x192.png": "cb23349a12a94fb2398483e204912ec2",
"assets/lib/assets/images/android-chrome-512x512.png": "d08c72a2726d0e4326949e4ad141bb30",
"assets/lib/assets/images/apple-touch-icon.png": "715d25396d1504e492373fd05142c8c2",
"assets/lib/assets/images/apple.png": "65bbc24528cc614c62de5320c8bf313c",
"assets/lib/assets/images/chloe.jpg": "2dd3d78fd9e42ad5f86d53ea1a0da05f",
"assets/lib/assets/images/clement.jpg": "dd502af772b2f739c84b17bf6398dc10",
"assets/lib/assets/images/coeur.png": "7556b507725f94a7c4c349b47db5d8d1",
"assets/lib/assets/images/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/lib/assets/images/favicon-32x32.png": "a75ca411bdf11c3ec58daa8a9d250264",
"assets/lib/assets/images/gmail.png": "1d6bc622b8bbf7c4bc77f5dbbcab51fe",
"assets/lib/assets/images/graphique-croissant.png": "42fce772d4366611a316706d3587e3af",
"assets/lib/assets/images/instagram.png": "4f0a0af6e3156fcb746cc496bad33d50",
"assets/lib/assets/images/linkedin.png": "abddf59dceb93a481179d9964a2432e0",
"assets/lib/assets/images/mobile_01.png": "3eb1d5470455b84908c0220043a7b8f5",
"assets/lib/assets/images/muscle-du-bras.png": "8adbd830fc7532bc68e8d4a76bd848fa",
"assets/lib/assets/images/phone-2.png": "671e589d07619b9f6bbb12c5cf661c9a",
"assets/lib/assets/images/phone.png": "753ddf463d3c66a42aa7d85d7feb7abd",
"assets/lib/assets/images/playstore.png": "dd89fde25cc63e240b4338a6956e14dd",
"assets/lib/assets/images/poignee-de-main.png": "6862a7de2a9381225b7c7659a206b325",
"assets/lib/assets/images/sport-2.jpg": "0f96398707ed3a51f72e082103d193f0",
"assets/lib/assets/images/sport-3.jpg": "582b17e603b9de43862d02528a94b410",
"assets/lib/assets/images/sport-4.jpg": "ab11b07909612fc1d982186a2f009b79",
"assets/lib/assets/images/sport-5.jpg": "66310cd0006de77e014163cca425be6d",
"assets/lib/assets/images/sport-6.jpg": "c9ef999395abce1e9a3dde66cd9e53a0",
"assets/lib/assets/images/sport-7.jpg": "a87a2c27f98136d6faafe08647a90f18",
"assets/lib/assets/images/sport.jpg": "ac92f5a12bb598a8cc0ea0df50c86c45",
"assets/lib/assets/images/tape-men-cinq.png": "edc98c4b91802bebf19df606590361f4",
"assets/lib/assets/images/velo.png": "03abc60ba6ba47213410b4c2bf8f0681",
"assets/lib/assets/images/vico.jpg": "88c3c80204bf7fc848e3cf9f0f252726",
"assets/lib/assets/images/yoann.jpg": "f0790f422f31b0b7963bdb1ec0a28dc6",
"assets/NOTICES": "414034d861092eb375807b5314c6a433",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "48296802ec98e4dc5f7e2961a65e66bf",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fef1a1fe65f6f1bae9ea6b8046a90c62",
"icons/Icon-192.png": "563d2e6f4dfe0472152dfe9d51248773",
"icons/Icon-512.png": "bd361fc825b0617d47b30618271f4801",
"icons/Icon-maskable-192.png": "dd54fff581c8bf92073c3978d3d0e0af",
"icons/Icon-maskable-512.png": "2a78b63bf6fe6a7cf2286653c4b4cfbb",
"index.html": "acee7289c40c741469c4761fd51d3c12",
"/": "acee7289c40c741469c4761fd51d3c12",
"main.dart.js": "7ea2e0d13e522ed7fd3a6ed9f37212eb",
"manifest.json": "409ac721bdcd48a1bfa4f46a776e1d6d",
"version.json": "e30852120dab4e08c37c5df4c2a3b96d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
