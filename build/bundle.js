!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.inputCreator=function(e,t,n,r){var o=document.createElement("input");return o.type=e,o.value=t,o.name=n,o.placeholder=r,o},t.sanitizeField=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.isValidMail=function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)},t.isValidPhone=function(e){return/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(e)},t.isMember=function(e,t){return t.find(function(t){return t.mail===e})},t.isBanned=function(e,t){return!0===t.find(function(t){return t.mail===e}).isBanned},t.getItem=function(e){return window.localStorage.getItem(e)||!1},t.setItem=function(e,t){return window.localStorage.setItem(e,t)},t.delItem=function(e){return window.localStorage.removeItem(e)},t.getSession=function(e){return window.sessionStorage.getItem(e)};var r=t.setSession=function(e,t){return window.sessionStorage.setItem(e,t)};t.delSession=function(e){return window.sessionStorage.removeItem(e)},t.startSession=function(e){r("session",JSON.stringify(e)),window.location.reload()},t.reload=function(){return window.location.reload()},t.hasBike=function(e){return!0===e.hasOwnProperty("bike")},t.isEmptyObject=function(e){return!0==(0===Object.keys(e).length&&e.constructor===Object)},t.isPrivilegedAccount=function(e){return!0==("samya@mail.com"===e||"kdog@mail.com"===e)}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,d=0,c=[],u=n(25);function m(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=d++;n=l||(l=h(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return m(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&m(f(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,k=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initSavedMembers=[{mail:"samya@mail.com",firstName:"Samya",lastName:"Khemri",phone:"5147124991",hasBike:!1},{mail:"kdog@mail.com",firstName:"Kevin",lastName:"Massicotte",phone:"5141234567",hasBike:!1},{mail:"ban@mail.com",firstName:"Dark",lastName:"Vador",phone:"5147894561",hasBike:!1,isBanned:!0}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.initStations=[[{id:"1",color:"#9400D3"},{id:"2",color:"#4B0082"},{id:"3",color:"#0000FF"},{id:"4",color:"#00FF00"},{id:"5",color:"#FFFF00"},{id:"6",color:"#FF7F00"},{id:"7",color:"#FF0000"},{},{},{}],[{id:"8",color:"#9400D3"},{id:"9",color:"#4B0082"},{id:"10",color:"#0000FF"},{id:"11",color:"#00FF00"},{id:"12",color:"#FFFF00"},{id:"13",color:"#FF7F00"},{id:"14",color:"#FF0000"},{},{},{}],[{id:"15",color:"#9400D3"},{id:"16",color:"#4B0082"},{id:"17",color:"#0000FF"},{id:"18",color:"#00FF00"},{id:"19",color:"#FFFF00"},{id:"20",color:"#FF7F00"},{id:"21",color:"#FF0000"},{},{},{}]]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.startCountdown=function e(){document.getElementById("timer").innerHTML="08:00";var t="08:00".split(/[:]+/),n=t[0],o=r(t[1]-1);59===o&&(n-=1),n<0&&alert("You are banned!"),document.getElementById("timer").innerHTML=n+":"+o,setTimeout(e,1e3)};var r=function(e){return e<10&&e>=0&&(e="0"+e),e<0&&(e="59"),e};t.Countdown=function(){var e=document.createElement("div"),t=document.createElement("p");t.innerHTML="Time Left : ",e.appendChild(t);var n=document.createElement("span");return n.id="timer",e.appendChild(n),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bikes=t.rentBike=void 0;var r=n(5),o=n(0);t.rentBike=function(){var e=JSON.parse((0,o.getSession)("session"));e.hasBike?alert("You already have a bike!"):(e.hasBike=!0,(0,r.startCountdown)(),console.log(e.firstName+" "+e.lastName+" has rent a bike!",e),setTimeout(function(){e.hasBike=!1,console.log(e.firstName+" "+e.lastName+" has released a bike!",e)},8e3))},t.Bikes=function(){}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"body{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:Roboto,sans-serif;line-height:1.6}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{background:#f0f0f0}header{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);background-color:#4336f4;font-size:1.5rem;text-decoration:none}footer,header{padding:1em;color:#fff}footer{background-color:#4336f4}h2{font-size:1.25rem;margin-bottom:1em}.page-wrap{width:100%;max-width:1000px;background:#fff;padding:2em}",""])},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t){e.exports="<style>.status-container{display:flex;justify-content:space-between}</style> <div class=status-container> <slot></slot> </div> "},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Widget=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(9),a=(r=i)&&r.__esModule?r:{default:r};var s=t.Widget=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.attachShadow({mode:"open"}).innerHTML=a.default,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),o(t,[{key:"connectedCallback",value:function(){var e=document.createElement("span");e.innerHTML="hello hello hello",this.appendChild(e)}}]),t}();window.customElements.define("widget-test",s)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"button{margin:2em 0 0}.member{overflow:auto;clear:both}.column-title,.member div{float:left;width:14.28%;padding:1em .5em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:640px){.member div{width:100%}}.member div{border-right:1px solid #f0f0f0}.bike-color{font-weight:700}.member{border-left:1px solid #f0f0f0;border-top:1px solid #f0f0f0}.member:last-of-type{border-bottom:1px solid #f0f0f0}.member:nth-child(odd){background:#f0f0f0}@media only screen and (max-width:640px){.member div{border-bottom:1px solid #f0f0f0}.member:nth-child(odd) div{border-bottom:1px solid #fff}.member:last-of-type{border-bottom:none}}@media only screen and (min-width:640px){.member:hover{color:#fff;background:#4336f4}}.titles{overflow:auto}@media only screen and (max-width:640px){.member .no-data,.titles{display:none}}.column-title{text-align:center;font-weight:700}",""])},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SysAdmin=void 0,n(12);var r=n(0),o=function(e,t,n){var r=document.createElement("div");return r.className=e,r.style.color=n||"",r.innerHTML=t,r};t.SysAdmin=function(){var e=JSON.parse((0,r.getItem)("members")),t=document.createElement("div"),n=document.createElement("hr");t.appendChild(n);var i=document.createElement("h2");i.innerHTML="Admin area",t.appendChild(i);var a=document.createElement("div");return a.className="titles",a.appendChild(o("column-title","Name")),a.appendChild(o("column-title","Phone")),a.appendChild(o("column-title","Email")),a.appendChild(o("column-title","Status")),a.appendChild(o("column-title","Bike ID")),a.appendChild(o("column-title","Bike color")),a.appendChild(o("column-title","Rent time")),t.appendChild(a),e.map(function(e,n){var r=document.createElement("div");r.className="member",e.name=e.firstName+" "+e.lastName,r.appendChild(o("member-name",e.name)),r.appendChild(o("member-phone",e.phone)),r.appendChild(o("member-email",e.mail)),e.banned?r.appendChild(o("member-status","banned")):r.appendChild(o("member-status no-data","&#8203;")),e.bike?(r.appendChild(o("bike-id",e.bike.id)),r.appendChild(o("bike-color",e.bike.color,e.bike.color)),r.appendChild(o("bike-timer",e.bike.rentTime))):(r.appendChild(o("bike-id no-data","&#8203;")),r.appendChild(o("bike-color no-data","&#8203;")),r.appendChild(o("bike-timer no-data","&#8203;"))),t.appendChild(r)}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CityWorker=void 0;var r=n(0),o=n(4),i=n(3),a=function(){(0,r.setItem)("stations",JSON.stringify(o.initStations)),(0,r.setItem)("members",JSON.stringify(i.initSavedMembers)),(0,r.reload)()};t.CityWorker=function(){var e=document.createElement("div"),t=document.createElement("hr");e.appendChild(t);var n=document.createElement("h2");n.innerHTML="City Worker",e.appendChild(n);var r=document.createElement("button");return r.innerHTML="Clean bikes",r.addEventListener("click",a,!1),e.appendChild(r),e}},function(e,t,n){e.exports=n.p+"ed24bfbd5fb9d413a008903c4b41aad2.png"},function(e,t,n){e.exports=n.p+"17458a2c162fbc1bb4353be2f5ec9430.png"},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){var r=n(17);(e.exports=n(2)(!1)).push([e.i,".station{width:100%;margin-bottom:2em}#instructions{font-style:italic;margin-bottom:2em}.station p{margin-bottom:1em}.slot{display:inline-block;width:10%;padding:2em 1em;background-repeat:no-repeat;background-position:50%}.bike{background-image:url("+r(n(16))+")}.docks{background-image:url("+r(n(15))+");color:#000}@media only screen and (max-width:640px){.slot{width:20%}}",""])},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stations=void 0;var r=n(0);n(19);t.Stations=function(){var e=document.createElement("div");e.setAttribute("class","stations");var t=JSON.parse((0,r.getItem)("members")),n=JSON.parse((0,r.getItem)("stations")),o=JSON.parse((0,r.getSession)("session")),i=function(e){var n=[];n.push(e);var o=t.map(function(e){return n.find(function(t){return t.mail===e.mail})||e});(0,r.setItem)("members",JSON.stringify(o))},a=function(e,t){var o;clearInterval(e),alert("Your remaining time is over."),delete(o=t.bike).rentTime,n.some(function(e,t){return e.some(function(t,n){return!!(0,r.isEmptyObject)(t)&&(e[n]=o)})}),(0,r.setItem)("stations",JSON.stringify(n)),(0,r.reload)(),delete t.bike,i(t),(0,r.isPrivilegedAccount)(t.mail)||(!function(e){e.isBanned=!0,i(e)}(t),(0,r.logout)())},s=function(e){if(console.log((0,r.hasBike)(o)),(0,r.hasBike)(o)){var t=e.target.dataset.station,a=e.target.dataset.slot;n[t][a]=o.bike,delete n[t][a].rentTime,delete o.bike,i(o),(0,r.setItem)("stations",JSON.stringify(n)),(0,r.reload)()}else alert("You are not riding a bike.")},l=function e(t){if((0,r.hasBike)(o))alert("You are already riding a bike!");else{var l=t.target.dataset.bike,d=t.target.dataset.color,c=t.target.dataset.station,u=t.target.dataset.slot;t.preventDefault(),t.target.className="slot docks",t.target.style.backgroundColor="#f0f0f0",t.target.dataset.bike="",t.target.dataset.station=c,t.target.dataset.slot=u,t.target.dataset.color="",t.target.removeEventListener("click",e),t.target.addEventListener("click",s,!1),o.bike={id:l,color:d,rentTime:(new Date).getTime()},i(o),p=l,n.some(function(e,t){return e.some(function(t,n){return t.id===p&&(e[n]={})})}),(0,r.setItem)("stations",JSON.stringify(n)),m=1600,f=setInterval(function(){0===m?a(f,o):(document.getElementById("countdown").innerHTML="You have "+m/2+" hours left.",m--)},10)}var m,f,p};return e.appendChild(function(){var e=document.createElement("div"),t=document.createElement("h2");t.innerHTML="Bike Stations",e.appendChild(t);var r=document.createElement("p");return r.setAttribute("id","instructions"),r.innerHTML="You can rent a bike by clicking on it.",e.appendChild(r),n.map(function(t,n){var r=document.createElement("div");r.setAttribute("class","station");var o=document.createElement("h3");o.innerHTML="Bike Station "+(n+1),r.appendChild(o),t.map(function(e,t){var o=document.createElement("a");o.href="#",o.className=e.id?"bike slot":"parking slot",o.dataset.bike=e.id||"",o.dataset.station=n,o.dataset.slot=t,o.dataset.color=e.color||"",o.style.backgroundColor=e.color||"#f0f0f0",e.id?o.addEventListener("click",l,!1):o.addEventListener("click",s,!1),r.appendChild(o)}),e.appendChild(r)}),e}()),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=void 0;var r=n(6);window.initMap=function(){var e=new google.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:45.527641,lng:-73.596386}});[{name:"de Gaspé / Saint-Viateur",position:{lat:45.5277132,lng:-73.5975606}},{name:"Maguire / Henri-Julien",position:{lat:45.5271944,lng:-73.5934383}},{name:"Saint-Dominique / Saint-Viateur",position:{lat:45.5266255,lng:-73.598367}}].forEach(function(t){new google.maps.Marker({position:t.position,map:e,title:t.name,label:"7"}).addListener("click",function(){(0,r.rentBike)()})})};t.Map=function(){var e=document.createElement("p");return e.innerHTML="Loading Google Map",e}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logout=void 0;var r=n(0);n(23);var o=function(){(0,r.delSession)("session"),(0,r.reload)()};t.Logout=function(){var e=document.createElement("div"),t=(0,r.inputCreator)("submit","Logout","submit","");return t.addEventListener("click",o,!1),e.appendChild(t),e}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"button,input{display:block;height:30px;margin-bottom:2em;min-width:50%;font-size:100%;font-family:Roboto,sans-serif}input::placeholder{font-style:italic}input[type=text]{border-left:0;border-right:0;border-top:0;border-bottom:1px solid #dcdcdc}button,input[type=submit]{min-width:25%;background-color:#4336f4;height:40px;line-height:40px;border:none;color:#fff;border-radius:4px;cursor:pointer;-webkit-transition:background-color .3s;-moz-transition:background-color .3s;-o-transition:background-color .3s;transition:background-color .3s}input[type=submit]:focus,input[type=submit]:hover{background-color:#4336f4}@media only screen and (max-width:640px){button,input,input[type=submit]{min-width:100%}}hr{border:0;height:0;border-top:none;border-bottom:1px dotted #dcdcdc;margin:4em 0}",""])},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;var r=n(0);n(27);var o=function(e){e.preventDefault();var t=JSON.parse((0,r.getItem)("members")),n=document.forms.registerForm,o={firstName:(0,r.sanitizeField)(n.rFirstName.value),lastName:(0,r.sanitizeField)(n.rLastName.value),phone:(0,r.sanitizeField)(n.rPhone.value),mail:(0,r.sanitizeField)(n.rMail.value)},i="";i+=(0,r.isValidPhone)(o.phone)?"":"Enter a valid phone number.",(i+=(0,r.isValidMail)(o.mail)?(0,r.isMember)(o.mail,t)?"You are already registered, please login.":"":"Enter a valid email address.")?alert(i):a(o,t)},i=function(e){e.preventDefault();var t="",n=JSON.parse((0,r.getItem)("members")),o=document.forms.loginForm,i={mail:(0,r.sanitizeField)(o.lmail.value)};(t+=(0,r.isValidMail)(i.mail)?(0,r.isMember)(i.mail,n)?(0,r.isBanned)(i.mail,n)?"You are banned.":"":"You are not registered yet.":"Enter a valid email address.")?alert(t):(0,r.startSession)((0,r.isMember)(i.mail,n))},a=function(e,t){t.push(e),(0,r.setItem)("members",JSON.stringify(t)),(0,r.startSession)(e)};t.Login=function(){var e=document.createElement("div"),t=document.createElement("p");t.id="welcomeMessage",t.innerHTML="Bienvenue! Here you can log in or register to start biking.",e.appendChild(t);var n=document.createElement("form");n.name="registerForm",n.appendChild((0,r.inputCreator)("text","","rFirstName","John")),n.appendChild((0,r.inputCreator)("text","","rLastName","Doe")),n.appendChild((0,r.inputCreator)("text","","rMail","john.doe@mail.com")),n.appendChild((0,r.inputCreator)("text","","rPhone","5147124991"));var a=(0,r.inputCreator)("submit","Register","submit","");a.addEventListener("click",o,!1),n.appendChild(a),e.appendChild(n);var s=document.createElement("hr");e.appendChild(s);var l=document.createElement("form");l.name="loginForm",l.appendChild((0,r.inputCreator)("text","","lmail","john.doe@mail.com"));var d=(0,r.inputCreator)("submit","Login","submit","");return d.addEventListener("click",i,!1),l.appendChild(d),e.appendChild(l),e}},function(e,t,n){"use strict";n(28),n(24),n(21),n(6),n(5),n(20),n(14),n(13);var r=n(0),o=n(3),i=n(4),a=n(10);n(8),(0,r.getItem)("members")?(0,r.getItem)("members"):(0,r.setItem)("members",JSON.stringify(o.initSavedMembers)),(0,r.getItem)("stations")?(0,r.getItem)("stations"):(0,r.setItem)("stations",JSON.stringify(i.initStations));var s=new a.Widget;document.querySelector("#logout").appendChild(s)}]);