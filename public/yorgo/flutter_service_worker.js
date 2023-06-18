'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "23e007d25ca2d805042d59de42320e79",
"assets/AssetManifest.json": "fb6b5245e4a0eecf7eacbc2712d6f9b0",
"assets/FontManifest.json": "8e6ca49227e0ce52bde42229dcad2a1a",
"assets/fonts/MaterialIcons-Regular.otf": "41fdbdcd390cc6120f064a01c90770ca",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Bold.otf": "004b0e65092c105c22987f4a731ea4c0",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-DemiBold.otf": "bb87c4c202afc8907cc461c8594adc33",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-ExtraBold.otf": "0495f924ad5ef94c5b995d9f3f95e249",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-ExtraLight.otf": "b3e7fbbabaa27835da3ed3107e401534",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Heavy.otf": "187b26008e435dfa9a097c3b91e0cd4e",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Light.otf": "97ca94bd50916295086438c04bd342de",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Medium.otf": "672c7c001ac43e56cbe84f94e164d2b6",
"assets/lib/assets/fonts/VisbyRoundCF/VisbyRoundCF-Regular.otf": "15ca16e37ede38ccc34153403235ac38",
"assets/lib/assets/icons/facebook.svg": "26f4be3175dfa2b2056e8482663314a8",
"assets/lib/assets/icons/github.svg": "2e2571256140872fb7e4f246ea786669",
"assets/lib/assets/icons/google.svg": "a3154679f06668127f2de02bfd97125b",
"assets/lib/assets/icons/handshake.svg": "2ef0d444a5539aef592d4c05c3d6533a",
"assets/lib/assets/icons/instagram.svg": "11fed9ed537b697305ed9fa40a289c35",
"assets/lib/assets/icons/linkedin.svg": "ae426a16ac192187413a5f90f7cfb29a",
"assets/lib/assets/icons/logo.svg": "5d73790527738e77358522076d320cf3",
"assets/lib/assets/icons/ondulation.svg": "da15be00256e5d26b10419a27c488b66",
"assets/lib/assets/icons/reward.svg": "6089166778621d0a6902ff1a1fe22a47",
"assets/lib/assets/icons/team.svg": "a4dd77c7b03bb8784f398bdc98d01575",
"assets/lib/assets/icons/tiktok.svg": "4cd96dc03528becbc1426bcca0a658e2",
"assets/lib/assets/images/alexandre.jpg": "468abc77922570049e6be15b65ac74a1",
"assets/lib/assets/images/android-chrome-192x192.png": "a02e070eeeb693b2791273c7ce514039",
"assets/lib/assets/images/android-chrome-512x512.png": "fb2719a5721b48cb3228cc0f3c1f434b",
"assets/lib/assets/images/apple-touch-icon.png": "743f47c884ec3db903b0911d2643b6ed",
"assets/lib/assets/images/apple.png": "2b0a24c0db6baa2f4e3b1cb604d480ff",
"assets/lib/assets/images/clement.jpg": "dd502af772b2f739c84b17bf6398dc10",
"assets/lib/assets/images/coeur.png": "7556b507725f94a7c4c349b47db5d8d1",
"assets/lib/assets/images/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/lib/assets/images/favicon-32x32.png": "3961c1b2520d0a7347b3cdc0b1a86033",
"assets/lib/assets/images/gmail.png": "1d6bc622b8bbf7c4bc77f5dbbcab51fe",
"assets/lib/assets/images/graphique-croissant.png": "42fce772d4366611a316706d3587e3af",
"assets/lib/assets/images/instagram.png": "4f0a0af6e3156fcb746cc496bad33d50",
"assets/lib/assets/images/linkedin.png": "abddf59dceb93a481179d9964a2432e0",
"assets/lib/assets/images/mobile_01.png": "c73a5cc40898fcbc75bcae3865130ca8",
"assets/lib/assets/images/muscle-du-bras.png": "8adbd830fc7532bc68e8d4a76bd848fa",
"assets/lib/assets/images/phone-2.png": "671e589d07619b9f6bbb12c5cf661c9a",
"assets/lib/assets/images/phone.png": "753ddf463d3c66a42aa7d85d7feb7abd",
"assets/lib/assets/images/playstore.png": "f754ea73d7c919d9c4b7e49572dddcea",
"assets/lib/assets/images/poignee-de-main.png": "6862a7de2a9381225b7c7659a206b325",
"assets/lib/assets/images/sport-2.jpg": "0f96398707ed3a51f72e082103d193f0",
"assets/lib/assets/images/sport-3.jpg": "582b17e603b9de43862d02528a94b410",
"assets/lib/assets/images/sport-4.jpg": "ab11b07909612fc1d982186a2f009b79",
"assets/lib/assets/images/sport-5.jpg": "66310cd0006de77e014163cca425be6d",
"assets/lib/assets/images/sport-6.jpg": "c9ef999395abce1e9a3dde66cd9e53a0",
"assets/lib/assets/images/sport-7.jpg": "a87a2c27f98136d6faafe08647a90f18",
"assets/lib/assets/images/sport.jpg": "ac92f5a12bb598a8cc0ea0df50c86c45",
"assets/lib/assets/images/Subtract.svg": "0b2ac4f084a56d318475184f9c05ff21",
"assets/lib/assets/images/tape-men-cinq.png": "edc98c4b91802bebf19df606590361f4",
"assets/lib/assets/images/velo.png": "03abc60ba6ba47213410b4c2bf8f0681",
"assets/lib/assets/images/vico.jpg": "88c3c80204bf7fc848e3cf9f0f252726",
"assets/lib/assets/images/yohann.jpg": "f0790f422f31b0b7963bdb1ec0a28dc6",
"assets/lib/assets/images/YORGO_logo.png": "962d5e088031464dd6d42f6227da06e9",
"assets/NOTICES": "6da33a16f572509da02cd442ce1deaa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61a58801101c95abcf4dc21f31552e07",
"/": "61a58801101c95abcf4dc21f31552e07",
"main.dart.js": "b8690bfbe92d6fe87e46bfe86ed1ea85",
"manifest.json": "24f316c004cdf10b4918a3afa4212719",
"version.json": "5a6270750d34c4f199cb7e291ecadec7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
