"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio/index.html","95b6a4b79a6eded7ac9fc2e6efee1a0a"],["/Portfolio/static/css/main.901d3585.css","30a013ba746173416ad7c74b08aa9564"],["/Portfolio/static/js/main.b0ef6edd.js","9d98fb1687c1e888c70a88284614ae25"],["/Portfolio/static/media/ander1.ca5f9e64.png","ca5f9e64f998c881957ea639e25bdc3d"],["/Portfolio/static/media/besmart1.e6ca64e9.png","e6ca64e9a966fdd63398152a8f84d7fa"],["/Portfolio/static/media/besmart2.fb947b47.png","fb947b47ec20a4146ff051b357b65128"],["/Portfolio/static/media/city_background.d56397ac.jpg","d56397ac5647c9ce43ce0b315c7ae9b4"],["/Portfolio/static/media/css3.3eba170b.png","3eba170bb6409f17a8b7d648e7ce38b3"],["/Portfolio/static/media/github.f53cb06a.png","f53cb06a5f913968fbf48e033f5be0d3"],["/Portfolio/static/media/java.29eec4d9.png","29eec4d99966ce526b3a19a46cba8ea0"],["/Portfolio/static/media/javascript_logo.a8c93dbb.png","a8c93dbbdaffdbaf779538ab21ecaf50"],["/Portfolio/static/media/myalibi1.4d4b9b8f.png","4d4b9b8fa85031f8082a38017df205e5"],["/Portfolio/static/media/myalibi2.4353aab6.png","4353aab60afb0b15543804276626559a"],["/Portfolio/static/media/profile_picture.049714ec.jpg","049714ecaa811e04823cbc6682a0ec64"],["/Portfolio/static/media/python.efacdca8.png","efacdca83b35dd5b1910d5cb71a5c3a8"],["/Portfolio/static/media/react.b8b87c46.png","b8b87c460f900872d52385a98ef410d3"],["/Portfolio/static/media/react_native.a3f503f8.png","a3f503f802565982c7163f07c1c6c840"],["/Portfolio/static/media/sql.35091c33.svg","35091c33ed0ff4b73eff9cef938d09cd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});