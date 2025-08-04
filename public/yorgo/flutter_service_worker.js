'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "408da4108570a68a6887d2f4689e3e9c",
"assets/AssetManifest.bin": "d5a496f8252f3ac78f107b4c2de4b50d",
"assets/AssetManifest.bin.json": "6bc500b460479017ad7938e5e69e55a4",
"assets/AssetManifest.json": "2b9d61cc59777c146eceffd64269b666",
"assets/FontManifest.json": "a87e7301b66d559d7f969961bd570e11",
"assets/fonts/MaterialIcons-Regular.otf": "f221e54f6ff7233981aa12f25b704d46",
"assets/lib/assets/fonts/Mada/Mada-Black.ttf": "8a12323a9232c22466c316fe5cb76f6a",
"assets/lib/assets/fonts/Mada/Mada-Bold.ttf": "e6cb5c6240e7775a445f5043d9aa1ce9",
"assets/lib/assets/fonts/Mada/Mada-ExtraBold.ttf": "386556605114bcedfcf20db23d43c7fa",
"assets/lib/assets/fonts/Mada/Mada-ExtraLight.ttf": "6c28fb34677e605746b3c23e95691d85",
"assets/lib/assets/fonts/Mada/Mada-Light.ttf": "3227f63be2751a9f9785c7fff981a245",
"assets/lib/assets/fonts/Mada/Mada-Medium.ttf": "594ec29a955c1d2c7856c1d383edb8b8",
"assets/lib/assets/fonts/Mada/Mada-Regular.ttf": "1a9388968c8d901b53cf06ba89d89962",
"assets/lib/assets/fonts/Mada/Mada-SemiBold.ttf": "2707eb436c4c0153601c5ba5e9a3e5d1",
"assets/lib/assets/icons/facebook.svg": "26f4be3175dfa2b2056e8482663314a8",
"assets/lib/assets/icons/github.svg": "2e2571256140872fb7e4f246ea786669",
"assets/lib/assets/icons/google.svg": "a3154679f06668127f2de02bfd97125b",
"assets/lib/assets/icons/handshake.svg": "2ef0d444a5539aef592d4c05c3d6533a",
"assets/lib/assets/icons/instagram.svg": "11fed9ed537b697305ed9fa40a289c35",
"assets/lib/assets/icons/linkedin.svg": "ae426a16ac192187413a5f90f7cfb29a",
"assets/lib/assets/icons/logo.svg": "9de532e310fda95cfb5e470219cd2f38",
"assets/lib/assets/icons/ondulation.svg": "da15be00256e5d26b10419a27c488b66",
"assets/lib/assets/icons/reward.svg": "6089166778621d0a6902ff1a1fe22a47",
"assets/lib/assets/icons/team.svg": "a4dd77c7b03bb8784f398bdc98d01575",
"assets/lib/assets/icons/tiktok.svg": "4cd96dc03528becbc1426bcca0a658e2",
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
"assets/NOTICES": "3392e72ea33a2a91a3e7cc2e29b8a4a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "48296802ec98e4dc5f7e2961a65e66bf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3c26a4e89e85474401e414fbba247fdc",
"icons/Icon-192.png": "563d2e6f4dfe0472152dfe9d51248773",
"icons/Icon-512.png": "bd361fc825b0617d47b30618271f4801",
"icons/Icon-maskable-192.png": "dd54fff581c8bf92073c3978d3d0e0af",
"icons/Icon-maskable-512.png": "2a78b63bf6fe6a7cf2286653c4b4cfbb",
"index.html": "1d16ef73f00c731602a69048d4247c52",
"/": "1d16ef73f00c731602a69048d4247c52",
"main.dart.js": "f409b3f9f1ef63805477414725aefbb7",
"manifest.json": "409ac721bdcd48a1bfa4f46a776e1d6d",
"version.json": "9c08e9c653b77767442e2af835d028f2"};
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
