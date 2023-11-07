'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae1305e23aa65c3d187eab1fe73729d6",
"assets/AssetManifest.json": "bbc5a718e587dbcbe2f28896eb91ac85",
"assets/assets/page-1/images/arrowfinal.png": "5ab043f3a8fdcc90dad1f7b7414b9968",
"assets/assets/page-1/images/clock.png": "0b4116ea06c72041ee4b5cec7a2856f9",
"assets/assets/page-1/images/doctor7.jpg": "9e91caf9ecaf10e63e7e6d37392d67a6",
"assets/assets/page-1/images/doctorf.jpeg": "221e8615ecbbb9267c5a41c843d710ae",
"assets/assets/page-1/images/doctorf2.png": "753648bfd4e3fb1ec6e2bcce43877cfb",
"assets/assets/page-1/images/doctor_anime.png": "f92a408714341f07cd7df19127623c19",
"assets/assets/page-1/images/doctor_anime2.png": "24f002d1b51a2a45f261c153e0ca44c6",
"assets/assets/page-1/images/ellipse-1-DUc.png": "038bf23a423f733b4a286dae96845188",
"assets/assets/page-1/images/ellipse-1.png": "a3c26f2faa0d9b8a2595e97f6bef92fb",
"assets/assets/page-1/images/fema_doctor.png": "0ed047de8bb6fe37704215f0e082d9e2",
"assets/assets/page-1/images/finalarrow.png": "b5f0c9f81dace96095fc8e96b818a0f7",
"assets/assets/page-1/images/group-2405-Ehn.png": "c956944bf51eca9b4b9427698ff4dce0",
"assets/assets/page-1/images/group-2405.png": "c956944bf51eca9b4b9427698ff4dce0",
"assets/assets/page-1/images/group-2411.png": "4b1f1d2dbe0111e24f3b45d911209ee4",
"assets/assets/page-1/images/group-3-TLC.png": "75ac0c5501a2760aaa2923d1d5d32772",
"assets/assets/page-1/images/group-3.png": "75ac0c5501a2760aaa2923d1d5d32772",
"assets/assets/page-1/images/group-KoN.png": "c8f0c8cb351eeeebadac3b4c2afb693c",
"assets/assets/page-1/images/group-yNG.png": "28f2f7999f2b2d866bd5c82de78b2c9d",
"assets/assets/page-1/images/group.png": "c05763ffd0b7d5dc02910139f68d21a4",
"assets/assets/page-1/images/image-34-Uo2.png": "43cc6259892945dfd8aeaa05f59651ab",
"assets/assets/page-1/images/image-34.png": "43cc6259892945dfd8aeaa05f59651ab",
"assets/assets/page-1/images/image-35-PKn.png": "50bcabe25702de722062bd577aec907e",
"assets/assets/page-1/images/image-35.png": "50bcabe25702de722062bd577aec907e",
"assets/assets/page-1/images/image-36-fPN.png": "68076432d66e9025d235e81e725527e8",
"assets/assets/page-1/images/image-36.png": "68076432d66e9025d235e81e725527e8",
"assets/assets/page-1/images/image-37.png": "896bd69b690f286b9f5c7f956e8e41dd",
"assets/assets/page-1/images/image-39.png": "e397e6ca4b8548f348542a051eb6c1d8",
"assets/assets/page-1/images/image-40.png": "9f20ff0bca068cb19290373f179c8b89",
"assets/assets/page-1/images/image-42.png": "882661ae710644534195596fb108562e",
"assets/assets/page-1/images/image-43.png": "6edb4b8a7bf1d99f5da6d273fadeb912",
"assets/assets/page-1/images/image-44.png": "548bb3a03b855a5115c42793226921dc",
"assets/assets/page-1/images/image-45.png": "4b5c41ad76aebfa65a73ae5f0f0801fd",
"assets/assets/page-1/images/image-46.png": "2b941c2b4351497605d73b47de2820d5",
"assets/assets/page-1/images/image-47.png": "ef3602fab1dce6db3e79717081a0fba3",
"assets/assets/page-1/images/image-48.png": "31cefcb577bd4bedb02562c335f6bad7",
"assets/assets/page-1/images/lab1.png": "8df1de6e0398935773127e3e8e4fc448",
"assets/assets/page-1/images/lab2.png": "4f15951a9a9ee52615b9fc7630d478e1",
"assets/assets/page-1/images/lady.png": "d247e2cb38aa3aed783238f3c593c1a4",
"assets/assets/page-1/images/logonew.png": "41016dd1c7339281ee1bbb1da6cba99e",
"assets/assets/page-1/images/mainhospital.png": "9500871c6ce86c3199bef84e113ae19b",
"assets/assets/page-1/images/medical.jpg": "b18a670ab6af91eede7b9eb484472df2",
"assets/assets/page-1/images/medical2.jpg": "59837204fd13ba0def756feadef733f9",
"assets/assets/page-1/images/newlike.png": "976276caa141169485c4ba732e7d6428",
"assets/assets/page-1/images/newstar.png": "38903fc09eff686e1f84e6055e7fb58b",
"assets/assets/page-1/images/newtick.png": "dc0db2b20a6a2fa508a51709e7310825",
"assets/assets/page-1/images/path-26-YC8.png": "d71b77768ea4eb8ecc6ead162877d637",
"assets/assets/page-1/images/path-26.png": "d71b77768ea4eb8ecc6ead162877d637",
"assets/assets/page-1/images/person56.png": "188fcd5265c3c38e4af0d2dc2ff52441",
"assets/assets/page-1/images/phone.png": "7aabeadf175e412879ebd0e96d6d03cb",
"assets/assets/page-1/images/prescribed.png": "03ecd07d3d697df158700d5f47b43a6d",
"assets/assets/page-1/images/privacy1.png": "2afa97e9f6c4507c86819741743ad6b1",
"assets/assets/page-1/images/privacy2.png": "3df8b8143de74879ef8baa84172f419e",
"assets/assets/page-1/images/privacy3.png": "4897f6cc812bc753da144f8d9f4a16c5",
"assets/assets/page-1/images/profilemain.png": "8354da0a332f5892b149b058fffbdcf5",
"assets/assets/page-1/images/rectangle-6-2uW.png": "0270844b732b9770f5d23fcb17710e50",
"assets/assets/page-1/images/rectangle-6.png": "0270844b732b9770f5d23fcb17710e50",
"assets/assets/page-1/images/rectangle-7-Bui.png": "efb0a9ed789e44371a67d0b4708c5083",
"assets/assets/page-1/images/rectangle-7.png": "efb0a9ed789e44371a67d0b4708c5083",
"assets/assets/page-1/images/rupee.png": "d0612813a0836bbc492b21ed4cf9b6b8",
"assets/assets/page-1/images/searchicon.png": "be3bfb9918d577fc9d93b43cbe5f4070",
"assets/assets/page-1/images/star.jpg": "2c00227439ca3cbbe02eeeac37ed175f",
"assets/assets/page-1/images/tick.jpg": "a740220fb201b54751c8b8dadc91ce0d",
"assets/assets/page-1/images/vector-1PW.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-7s6.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-C7a.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-E9W.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-GJk.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-Ho6.png": "446f40b1514353ad8ea215a69e24a9d4",
"assets/assets/page-1/images/vector-Mjn.png": "446f40b1514353ad8ea215a69e24a9d4",
"assets/assets/page-1/images/vector-qtC.png": "feb842d6b70c87265e8469f11aada318",
"assets/assets/page-1/images/vector-sqz.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-toa.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-X2g.png": "7685d3a348517f870a638ae7947645ce",
"assets/assets/page-1/images/vector-Xvp.png": "0a9740758edd4dcfba50847c3455f961",
"assets/assets/page-1/images/vector-YtQ.png": "feb842d6b70c87265e8469f11aada318",
"assets/assets/page-1/images/vector.png": "446f40b1514353ad8ea215a69e24a9d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "035c87f55578ce0dc813ec99b20d29a3",
"assets/NOTICES": "478321c19e1e100b6ca7b29124332dbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7002e5203b9f354eeb864823810246ca",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7231ea201c85a53aa88a08a57a527f4",
"/": "c7231ea201c85a53aa88a08a57a527f4",
"main.dart.js": "d85194105950c15599bdc7834d1f745d",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"};
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
