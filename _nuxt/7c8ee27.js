(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,5],{291:function(t,e,n){"use strict";n.r(e);var r={props:["client"],data:function(){return{}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"\n      w-64\n      py-5\n      px-10\n      border border-ternary-light\n      dark:border-ternary-dark\n      shadow-sm\n      rounded-lg\n      mb-8\n      cursor-pointer\n      dark:bg-secondary-light\n    ",attrs:{src:t.client.img,alt:t.client.title}})])}),[],!1,null,"4f5d30d8",null);e.default=component.exports},293:function(t,e,n){t.exports=n.p+"img/profile.3a5dca0.png"},298:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full sm:w-1/4 mb-7 sm:mb-0"},[e("img",{staticClass:"rounded-lg w-96",attrs:{src:n(293),alt:""}})])}],c=(n(30),n(25),n(29),n(12),n(37),n(26),n(38),n(15)),l=n(27);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["aboutMe"]))},d=f,m=n(9),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},[t._m(0),t._v(" "),n("div",{staticClass:"w-full sm:w-3/4 text-left"},t._l(t.aboutMe,(function(e){return n("p",{key:e.id,staticClass:"\n        font-general-regular\n        mb-4\n        text-ternary-dark\n        dark:text-ternary-light\n        text-lg\n      "},[t._v("\n      "+t._s(e.bio)+"\n    ")])})),0)])}),r,!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);n(30),n(25),n(29),n(12),n(37),n(26),n(38);var r=n(15),c=n(27);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var o={data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["clientsHeading","clients"]))},f=o,d=n(9),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 sm:mt-20"},[n("p",{staticClass:"\n      font-general-medium\n      text-2xl text-center\n      sm:text-3xl\n      text-primary-dark\n      dark:text-primary-light\n    "},[t._v("\n    "+t._s(t.clientsHeading)+"\n  ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"},t._l(t.clients,(function(t){return n("AboutClientSingle",{key:t.id,attrs:{client:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutClientSingle:n(291).default})},304:function(t,e,n){"use strict";n.r(e);n(20),n(36);var r=n(31),c=n.n(r),l={name:"About",scrollToTop:!0,mounted:function(){c.a.replace()},updated:function(){c.a.replace()}},o=n(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AboutMe",{staticClass:"container mx-auto"}),t._v(" "),n("AboutClients",{staticClass:"container mx-auto"})],1)}),[],!1,null,"e9023fb8",null);e.default=component.exports;installComponents(component,{AboutMe:n(298).default,AboutClients:n(299).default})}}]);