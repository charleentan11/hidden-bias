// https://github.com/topojson/topojson-client v3.0.1 Copyright 2019 Mike Bostock
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).topojson=e.topojson||{})}(this,function(e){"use strict";function r(e){return e}function t(e){if(null==e)return r;var t,n,o=e.scale[0],a=e.scale[1],i=e.translate[0],c=e.translate[1];return function(e,r){r||(t=n=0);var u=2,f=e.length,s=new Array(f);for(s[0]=(t+=e[0])*o+i,s[1]=(n+=e[1])*a+c;u<f;)s[u]=e[u],++u;return s}}function n(e){var r,n=t(e.transform),o=1/0,a=o,i=-o,c=-o;function u(e){(e=n(e))[0]<o&&(o=e[0]),e[0]>i&&(i=e[0]),e[1]<a&&(a=e[1]),e[1]>c&&(c=e[1])}function f(e){switch(e.type){case"GeometryCollection":e.geometries.forEach(f);break;case"Point":u(e.coordinates);break;case"MultiPoint":e.coordinates.forEach(u)}}for(r in e.arcs.forEach(function(e){for(var r,t=-1,u=e.length;++t<u;)(r=n(e[t],t))[0]<o&&(o=r[0]),r[0]>i&&(i=r[0]),r[1]<a&&(a=r[1]),r[1]>c&&(c=r[1])}),e.objects)f(e.objects[r]);return[o,a,i,c]}function o(e,r){var t=r.id,n=r.bbox,o=null==r.properties?{}:r.properties,i=a(e,r);return null==t&&null==n?{type:"Feature",properties:o,geometry:i}:null==n?{type:"Feature",id:t,properties:o,geometry:i}:{type:"Feature",id:t,bbox:n,properties:o,geometry:i}}function a(e,r){var n=t(e.transform),o=e.arcs;function a(e,r){r.length&&r.pop();for(var t=o[e<0?~e:e],a=0,i=t.length;a<i;++a)r.push(n(t[a],a));e<0&&function(e,r){for(var t,n=e.length,o=n-r;o<--n;)t=e[o],e[o++]=e[n],e[n]=t}(r,i)}function i(e){return n(e)}function c(e){for(var r=[],t=0,n=e.length;t<n;++t)a(e[t],r);return r.length<2&&r.push(r[0]),r}function u(e){for(var r=c(e);r.length<4;)r.push(r[0]);return r}function f(e){return e.map(u)}return function e(r){var t,n=r.type;switch(n){case"GeometryCollection":return{type:n,geometries:r.geometries.map(e)};case"Point":t=i(r.coordinates);break;case"MultiPoint":t=r.coordinates.map(i);break;case"LineString":t=c(r.arcs);break;case"MultiLineString":t=r.arcs.map(c);break;case"Polygon":t=f(r.arcs);break;case"MultiPolygon":t=r.arcs.map(f);break;default:return null}return{type:n,coordinates:t}}(r)}function i(e,r){var t={},n={},o={},a=[],i=-1;function c(e,r){for(var n in e){var o=e[n];delete r[o.start],delete o.start,delete o.end,o.forEach(function(e){t[e<0?~e:e]=1}),a.push(o)}}return r.forEach(function(t,n){var o,a=e.arcs[t<0?~t:t];a.length<3&&!a[1][0]&&!a[1][1]&&(o=r[++i],r[i]=t,r[n]=o)}),r.forEach(function(r){var t,a,i=function(r){var t,n=e.arcs[r<0?~r:r],o=n[0];e.transform?(t=[0,0],n.forEach(function(e){t[0]+=e[0],t[1]+=e[1]})):t=n[n.length-1];return r<0?[t,o]:[o,t]}(r),c=i[0],u=i[1];if(t=o[c])if(delete o[t.end],t.push(r),t.end=u,a=n[u]){delete n[a.start];var f=a===t?t:t.concat(a);n[f.start=t.start]=o[f.end=a.end]=f}else n[t.start]=o[t.end]=t;else if(t=n[u])if(delete n[t.start],t.unshift(r),t.start=c,a=o[c]){delete o[a.end];var s=a===t?t:a.concat(t);n[s.start=a.start]=o[s.end=t.end]=s}else n[t.start]=o[t.end]=t;else n[(t=[r]).start=c]=o[t.end=u]=t}),c(o,n),c(n,o),r.forEach(function(e){t[e<0?~e:e]||a.push([e])}),a}function c(e,r,t){var n,o,a;if(arguments.length>1)n=function(e,r,t){var n,o=[],a=[];function i(e){var r=e<0?~e:e;(a[r]||(a[r]=[])).push({i:e,g:n})}function c(e){e.forEach(i)}function u(e){e.forEach(c)}return function e(r){switch(n=r,r.type){case"GeometryCollection":r.geometries.forEach(e);break;case"LineString":c(r.arcs);break;case"MultiLineString":case"Polygon":u(r.arcs);break;case"MultiPolygon":!function(e){e.forEach(u)}(r.arcs)}}(r),a.forEach(null==t?function(e){o.push(e[0].i)}:function(e){t(e[0].g,e[e.length-1].g)&&o.push(e[0].i)}),o}(0,r,t);else for(o=0,n=new Array(a=e.arcs.length);o<a;++o)n[o]=o;return{type:"MultiLineString",arcs:i(e,n)}}function u(e,r){var t={},n=[],o=[];function c(e){e.forEach(function(r){r.forEach(function(r){(t[r=r<0?~r:r]||(t[r]=[])).push(e)})}),n.push(e)}function u(r){return function(e){for(var r,t=-1,n=e.length,o=e[n-1],a=0;++t<n;)r=o,o=e[t],a+=r[0]*o[1]-r[1]*o[0];return Math.abs(a)}(a(e,{type:"Polygon",arcs:[r]}).coordinates[0])}return r.forEach(function e(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(e);break;case"Polygon":c(r.arcs);break;case"MultiPolygon":r.arcs.forEach(c)}}),n.forEach(function(e){if(!e._){var r=[],n=[e];for(e._=1,o.push(r);e=n.pop();)r.push(e),e.forEach(function(e){e.forEach(function(e){t[e<0?~e:e].forEach(function(e){e._||(e._=1,n.push(e))})})})}}),n.forEach(function(e){delete e._}),{type:"MultiPolygon",arcs:o.map(function(r){var n,o=[];if(r.forEach(function(e){e.forEach(function(e){e.forEach(function(e){t[e<0?~e:e].length<2&&o.push(e)})})}),(n=(o=i(e,o)).length)>1)for(var a,c,f=1,s=u(o[0]);f<n;++f)(a=u(o[f]))>s&&(c=o[0],o[0]=o[f],o[f]=c,s=a);return o}).filter(function(e){return e.length>0})}}function f(e,r){for(var t=0,n=e.length;t<n;){var o=t+n>>>1;e[o]<r?t=o+1:n=o}return t}function s(e){if(null==e)return r;var t,n,o=e.scale[0],a=e.scale[1],i=e.translate[0],c=e.translate[1];return function(e,r){r||(t=n=0);var u=2,f=e.length,s=new Array(f),l=Math.round((e[0]-i)/o),h=Math.round((e[1]-c)/a);for(s[0]=l-t,t=l,s[1]=h-n,n=h;u<f;)s[u]=e[u],++u;return s}}e.bbox=n,e.feature=function(e,r){return"GeometryCollection"===r.type?{type:"FeatureCollection",features:r.geometries.map(function(r){return o(e,r)})}:o(e,r)},e.merge=function(e){return a(e,u.apply(this,arguments))},e.mergeArcs=u,e.mesh=function(e){return a(e,c.apply(this,arguments))},e.meshArcs=c,e.neighbors=function(e){var r={},t=e.map(function(){return[]});function n(e,t){e.forEach(function(e){e<0&&(e=~e);var n=r[e];n?n.push(t):r[e]=[t]})}function o(e,r){e.forEach(function(e){n(e,r)})}var a={LineString:n,MultiLineString:o,Polygon:o,MultiPolygon:function(e,r){e.forEach(function(e){o(e,r)})}};for(var i in e.forEach(function e(r,t){"GeometryCollection"===r.type?r.geometries.forEach(function(r){e(r,t)}):r.type in a&&a[r.type](r.arcs,t)}),r)for(var c=r[i],u=c.length,s=0;s<u;++s)for(var l=s+1;l<u;++l){var h,p=c[s],g=c[l];(h=t[p])[i=f(h,g)]!==g&&h.splice(i,0,g),(h=t[g])[i=f(h,p)]!==p&&h.splice(i,0,p)}return t},e.quantize=function(e,r){if(e.transform)throw new Error("already quantized");if(r&&r.scale)u=e.bbox;else{if(!((t=Math.floor(r))>=2))throw new Error("n must be ≥2");var t,o=(u=e.bbox||n(e))[0],a=u[1],i=u[2],c=u[3];r={scale:[i-o?(i-o)/(t-1):1,c-a?(c-a)/(t-1):1],translate:[o,a]}}var u,f,l=s(r),h=e.objects,p={};function g(e){return l(e)}function y(e){var r;switch(e.type){case"GeometryCollection":r={type:"GeometryCollection",geometries:e.geometries.map(y)};break;case"Point":r={type:"Point",coordinates:g(e.coordinates)};break;case"MultiPoint":r={type:"MultiPoint",coordinates:e.coordinates.map(g)};break;default:return e}return null!=e.id&&(r.id=e.id),null!=e.bbox&&(r.bbox=e.bbox),null!=e.properties&&(r.properties=e.properties),r}for(f in h)p[f]=y(h[f]);return{type:"Topology",bbox:u,transform:r,objects:p,arcs:e.arcs.map(function(e){var r,t=0,n=1,o=e.length,a=new Array(o);for(a[0]=l(e[0],0);++t<o;)((r=l(e[t],t))[0]||r[1])&&(a[n++]=r);return 1===n&&(a[n++]=[0,0]),a.length=n,a})}},e.transform=t,e.untransform=s,Object.defineProperty(e,"__esModule",{value:!0})});