(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7,8,9,10],{239:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("52341a22",content,!0,{sourceMap:!1})},240:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("14204d40",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("e58944ba",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(239)},245:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,".card[data-v-fcb8da76]{\n  background:#b7f7fe\n}\n.button-shadow[data-v-fcb8da76],.card[data-v-fcb8da76]{\n  box-shadow:4px 4px 4px rgba(0,0,0,.25)\n}\n.button-green[data-v-fcb8da76]{\n  background:#3bb4c1\n}",""]),r.locals={},t.exports=r},246:function(t,e,n){"use strict";n(240)},247:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,".card[data-v-51f25505]{\n  background:#b7f7fe\n}\n.button-shadow[data-v-51f25505],.card[data-v-51f25505]{\n  box-shadow:4px 4px 4px rgba(0,0,0,.25)\n}\n.button-green[data-v-51f25505]{\n  background:#3bb4c1\n}",""]),r.locals={},t.exports=r},248:function(t,e,n){"use strict";n(241)},249:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,".card[data-v-0cd468e0]{\n  background:#b7f7fe\n}\n.button-shadow[data-v-0cd468e0],.card[data-v-0cd468e0]{\n  box-shadow:4px 4px 4px rgba(0,0,0,.25)\n}\n.button-green[data-v-0cd468e0]{\n  background:#3bb4c1\n}",""]),r.locals={},t.exports=r},257:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"\n          w-32\n          h-32\n          mx-auto\n          overflow-hidden\n          border-white border-4\n          rounded-full\n        "},[e("img",{attrs:{src:n(165),alt:"profile-picture"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md bg-white"},[n("h3",{staticClass:"font-semibold text-gray-800"},[t._v("4")]),t._v(" "),n("p",{staticClass:"text-gray-600"},[t._v("Post")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n            rounded-md\n            bg-white\n            my-4\n            grid grid-flow-row grid-cols-2\n            gap-2\n            p-2\n            mx-3\n          "},[r("div",{staticClass:"rounded-md h-16 overflow-hidden bg-white"},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})]),t._v(" "),r("div",{staticClass:"rounded-md h-16 overflow-hidden bg-white"},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})]),t._v(" "),r("div",{staticClass:"rounded-md h-16 overflow-hidden bg-white"},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})]),t._v(" "),r("div",{staticClass:"rounded-md h-16 overflow-hidden bg-white"},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})])])}],o=(n(28),n(22),n(27),n(38),n(23),n(39),n(10)),l=n(12);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{}},computed:d(d({},Object(l.c)(["getUserById"])),{},{profileUrl:function(){return this.getUserById(this.status.statusId).profileUrl},initials:function(){return this.getUserById(this.status.statusId).username.charAt(0)}}),methods:{}},v=(n(244),n(21)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card rounded-xl mr-20 p-1 hidden lg:flex"},[n("div",{staticClass:"w-full py-5 flex flex-col rounded-xl border-white border-4"},[t._m(0),t._v(" "),n("div",{staticClass:"w-full flex flex-col"},[n("h1",{staticClass:"font-semibold text-xl text-gray-800"},[t._v("\n          "+t._s(t.getUserById(1).username)+"\n        ")]),t._v(" "),n("h3",{staticClass:"font-normal text-gray-600"},[t._v("\n          "+t._s(t.getUserById(1).userBio)+"\n        ")]),t._v(" "),n("button",{staticClass:"\n            px-5\n            mx-auto\n            button-green\n            rounded-full\n            button-shadow\n            font-semibold\n            text-lg text-white\n            font-sans\n          "},[t._v("\n          Edit\n        ")]),t._v(" "),n("div",{staticClass:"w-full my-4 grid grid-flow-row grid-cols-3 gap-4 px-3"},[t._m(1),t._v(" "),n("div",{staticClass:"rounded-md bg-white"},[n("h3",{staticClass:"font-semibold text-gray-800"},[t._v("\n              "+t._s(t.getUserById(1).userFollowing.length)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-gray-600"},[t._v("Following")])]),t._v(" "),n("div",{staticClass:"rounded-md bg-white"},[n("h3",{staticClass:"font-semibold text-gray-800"},[t._v("\n              "+t._s(t.getUserById(1).userFollowers.length)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-gray-600"},[t._v("Followers")])])]),t._v(" "),t._m(2)])])])])}),r,!1,null,"fcb8da76",null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex px-5 flex-row"},[r("div",{staticClass:"\n        w-24\n        h-24\n        mr-10\n        overflow-hidden\n        border-white border-4\n        rounded-full\n      "},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})]),t._v(" "),r("div",{staticClass:"flex flex-col text-left justify-center"},[r("h2",{staticClass:"font-sans font-semibold text-lg text-gray-800"},[t._v("Marlina")]),t._v(" "),r("p",{staticClass:"font-sans font-normal text-xm text-gray-600"},[t._v("\n        Telah membuat status\n      ")])])]),t._v(" "),r("div",{staticClass:"h-1 my-3 rounded-md bg-white"})])}],o={},l=(n(246),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"51f25505",null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex flex-col card rounded-xl ml-20 pb-5"},[r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex flex-row px-3 my-3 justify-evenly"},[r("div",{staticClass:"\n            w-24\n            h-24\n            mr-10\n            overflow-hidden\n            border-white border-4\n            rounded-full\n          "},[r("img",{attrs:{src:n(165),alt:"profile-picture"}})]),t._v(" "),r("div",{staticClass:"flex flex-col justify-center items-center text-center"},[r("h2",{staticClass:"font-sans font-semibold text-xl"},[t._v("Akbar")]),t._v(" "),r("button",{staticClass:"\n              button-shadow button-green\n              mx-auto\n              px-7\n              py-1\n              rounded-2xl\n              text-white\n              font-bold font-sans\n            "},[t._v("\n            Follow\n          ")])])]),t._v(" "),r("div",{staticClass:"mx-3 h-1 rounded-md bg-white"})])])])}],o={},l=(n(248),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"0cd468e0",null);e.default=component.exports},271:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("26e24d2c",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n.r(e);var r={},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full card rounded-xl p-1 my-5"},[n("div",{staticClass:"w-full h-full py-2 flex flex-col rounded-xl border-white border-4"},[n("UserNotification"),t._v(" "),n("UserNotification"),t._v(" "),n("UserNotification")],1)])}),[],!1,null,"531915ff",null);e.default=component.exports;installComponents(component,{UserNotification:n(258).default})},286:function(t,e,n){"use strict";n(271)},287:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,".canvas[data-v-3c134cd0]{\n  display:flex;\n  flex-direction:column;\n  text-align:center;\n  width:100%;\n  background-color:#f2f2f2\n}\n.card[data-v-3c134cd0]{\n  background:#b7f7fe\n}\n.button-shadow[data-v-3c134cd0],.card[data-v-3c134cd0]{\n  box-shadow:4px 4px 4px rgba(0,0,0,.25)\n}\n.button-green[data-v-3c134cd0]{\n  background:#3bb4c1\n}\n.button-signup[data-v-3c134cd0]{\n  background:#e3e3e3\n}",""]),r.locals={},t.exports=r},295:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isUser:!0}}},o=(n(286),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full px-16 pt-5 grid grid-flow-row grid-cols-1 lg:grid-cols-3"},[n("UserProfileSection"),t._v(" "),n("UserNotificationSection"),t._v(" "),n("UserSuggestionFollowersSection",{staticClass:"hidden lg:flex"})],1),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("NuxtLink",{staticClass:"mx-2",attrs:{to:"/"}},[t._v("Home page")]),t._v(" "),n("NuxtLink",{staticClass:"mx-2",attrs:{to:"/login"}},[t._v("Login page")]),t._v(" "),n("NuxtLink",{staticClass:"mx-2",attrs:{to:"/signup"}},[t._v("Sign up page")])],1)])}),[],!1,null,"3c134cd0",null);e.default=component.exports;installComponents(component,{UserProfileSection:n(257).default,UserNotificationSection:n(276).default,UserSuggestionFollowersSection:n(259).default})}}]);