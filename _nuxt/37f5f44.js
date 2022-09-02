(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,9],{289:function(t,e,n){"use strict";n.r(e);var r={props:{select:{type:String,default:"projects"},selectOptions:{type:Array,default:function(){return["Trifold Brochure","Brochure","Card","Flyer"]}}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{staticClass:"\n    font-general-medium\n    px-4\n    py-2\n    border-1 border-gray-200\n    dark:border-secondary-dark\n    rounded-lg\n    text-sm\n    sm:text-md\n    bg-secondary-light\n    dark:bg-ternary-dark\n    text-primary-dark\n    dark:text-ternary-light\n  ",attrs:{name:t.select,id:t.select},on:{change:function(e){return t.$emit("change",e.target.value)}}},[n("option",{staticClass:"text-sm sm:text-md",attrs:{value:""}},[t._v("All Projects")]),t._v(" "),t._l(t.selectOptions,(function(option){return n("option",{key:option,staticClass:"sm:text-md",domProps:{value:option}},[t._v("\n    "+t._s(option)+"\n  ")])}))],2)}),[],!1,null,"16e76d65",null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);n(30),n(25),n(37),n(26),n(38);var r=n(15),o=(n(29),n(12),n(61),n(62),n(63),n(181),n(20),n(101),n(182),n(36),n(27)),c=n(31),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{selectedProject:"",searchProject:""}},computed:v(v({},Object(o.b)(["projectsHeading","projectsDescription","projects"])),{},{filteredProjects:function(){return this.selectedProject?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}}),methods:{filterProjectsByCategory:function(){var t=this;return this.projects.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(t.selectedProject)}))},filterProjectsBySearch:function(){var t=new RegExp(this.searchProject,"i");return this.projects.filter((function(e){return e.title.match(t)}))}},mounted:function(){l.a.replace()}},h=n(9),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-10 sm:pt-20 md:pt-24"},[n("div",{staticClass:"text-center",attrs:{id:"projectsHeadingTitle"}},[n("p",{staticClass:"\n        font-general-semibold\n        text-2xl\n        sm:text-5xl\n        font-semibold\n        mb-2\n        text-ternary-dark\n        dark:text-ternary-light\n      "},[t._v("\n      "+t._s(t.projectsHeading)+"\n    ")])]),t._v(" "),n("div",{staticClass:"mt-8 sm:mt-10"},[n("h3",{staticClass:"\n        font-general-regular\n        text-center text-secondary-dark\n        dark:text-ternary-light\n        text-md\n        sm:text-xl\n        font-normal\n        mb-4\n      "},[t._v("\n      Search projects by title or filter by category\n    ")]),t._v(" "),n("div",{staticClass:"\n        flex\n        justify-between\n        border-b border-primary-light\n        dark:border-secondary-dark\n        pb-3\n        gap-2\n      "},[n("div",{staticClass:"flex justify-between gap-2"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchProject,expression:"searchProject"}],staticClass:"\n            font-general-medium\n            pl-3\n            pr-1\n            sm:px-4\n            py-2\n            border-1 border-gray-200\n            dark:border-secondary-dark\n            rounded-lg\n            text-sm\n            sm:text-md\n            bg-secondary-light\n            dark:bg-ternary-dark\n            text-primary-dark\n            dark:text-ternary-light\n          ",attrs:{id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},domProps:{value:t.searchProject},on:{input:function(e){e.target.composing||(t.searchProject=e.target.value)}}})]),t._v(" "),n("ProjectsFilter",{on:{change:function(e){t.selectedProject=e}}})],1)]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},t._l(t.filteredProjects,(function(e){return n("div",{key:e.id,staticClass:"\n        rounded-xl\n        shadow-lg\n        hover:shadow-xl\n        cursor-pointer\n        mb-10\n        sm:mb-0\n        bg-secondary-light\n        dark:bg-ternary-dark\n      ",attrs:{"aria-label":"Single Project"}},[n("NuxtLink",{attrs:{to:"/projects/"+e.id}},[n("div",[n("img",{staticClass:"rounded-t-xl border-none",attrs:{src:e.img,alt:e.title}})]),t._v(" "),n("div",{staticClass:"text-center px-4 py-6"},[n("p",{staticClass:"\n              font-general-semibold\n              text-xl text-ternary-dark\n              dark:text-ternary-light\n              font-semibold\n              mb-2\n            "},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("span",{staticClass:"\n              font-general-medium\n              text-lg text-ternary-dark\n              dark:text-ternary-light\n            "},[t._v(t._s(e.category))])])])],1)})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"\n            hidden\n            sm:block\n            bg-primary-light\n            dark:bg-ternary-dark\n            p-2.5\n            shadow-sm\n            rounded-xl\n            cursor-pointer\n          "},[e("i",{staticClass:"text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"search"}})])}],!1,null,"4d206292",null);e.default=component.exports;installComponents(component,{ProjectsFilter:n(289).default})},303:function(t,e,n){"use strict";n.r(e);var r=n(3);!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7], .footer-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0.3); height: 50px; z-index: 9999; display: flex; align-items: center; } .header-v-img[data-v-5928e1c7] { justify-content: space-between; } .footer-v-img[data-v-5928e1c7] { bottom: 0; justify-content: center; height: 70px; /* scrolling thumbnails on mobile */ overflow-x: auto; } .footer-v-img img[data-v-5928e1c7] { width: 60px; height: 60px; cursor: pointer; -webkit-transition: transform 0.2s ease-out; transition: transform 0.2s ease-out; object-fit: cover; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .footer-v-img img.is-selected[data-v-5928e1c7] { transform: scale(1.1); } .footer-v-img img[data-v-5928e1c7]:not(:last-child) { margin-right: 7px; } .title-v-img[data-v-5928e1c7] { font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-5928e1c7], .buttons-v-img[data-v-5928e1c7] { width: 80px; font-family: 'Avenir', Helvetica, Arial, sans-serif; } .count-v-img[data-v-5928e1c7] { font-size: 15px; color: white; margin-left: 10px; } .buttons-v-img[data-v-5928e1c7] { margin-right: 10px; text-align: right; } .buttons-v-img span path[data-v-5928e1c7] { fill: #e5e6eb; -webkit-transition: fill 0.4s ease-in-out; transition: fill 0.4s ease-in-out; } .buttons-v-img span[data-v-5928e1c7] { cursor: pointer; color: #e5e6eb; font-size: 30px; -webkit-transition: color 0.4s ease-in-out; transition: color 0.4s ease-in-out; text-decoration: none; text-align: center; } .buttons-v-img span[data-v-5928e1c7]:not(:last-child) { margin-right: 8px; } .buttons-v-img span svg[data-v-5928e1c7] { height: 20px; width: 15px; } .buttons-v-img span:hover svg path[data-v-5928e1c7] { fill: white; } .buttons-v-img span[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: 'Avenir', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, 0.3); z-index: 1000; opacity: 0.3; -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.closed?t._e():n("div",{staticClass:"fullscreen-v-img",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.close(e)}}},[n("div",{staticClass:"header-v-img"},[n("span",{staticClass:"count-v-img"},[t.images.length>1?n("span",[t._v(t._s(t.currentImageIndex+1)+"/"+t._s(t.images.length)+" ")]):t._e()]),n("span",{staticClass:"title-v-img"},[t._v(t._s(t.titles[t.currentImageIndex]))]),n("div",{staticClass:"buttons-v-img"},[t.sourceButtons[t.currentImageIndex]?n("span",[n("a",{attrs:{href:t.images[t.currentImageIndex],target:"_blank"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 475.078 475.077"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 475.078 475.077","xml:space":"preserve"}},[n("path",{attrs:{d:"M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",fill:"#FFFFFF"}}),n("path",{attrs:{d:"M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",fill:"#FFFFFF"}})])])]):t._e(),n("span",{on:{click:t.close}},[t._v("×")])])]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.visibleUI&&1!==t.images.length?n("span",{staticClass:"prev-v-img",on:{click:t.prev}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"}})])]):t._e()]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.visibleUI&&1!==t.images.length?n("span",{staticClass:"next-v-img",on:{click:t.next}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"}})])]):t._e()]),t.thumbnails&&t.images.length>1?n("div",{staticClass:"footer-v-img"},t._l(t.images,(function(e,i){return n("img",{key:i,class:{"is-selected":t.currentImageIndex==i},attrs:{src:e},on:{click:function(e){t.select(i)}}})}))):t._e(),n("div",{staticClass:"content-v-img"},[n("img",{attrs:{src:t.images[t.currentImageIndex]},on:{click:t.next}})])],1)])},staticRenderFns:[],_scopeId:"data-v-5928e1c7",data:function(){return{images:[],titles:[],sourceButtons:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null,handlers:{},thumbnails:!1}},watch:{closed:function(t){t&&this.handlers.closed&&this.handlers.closed(),!t&&this.handlers.opened&&this.handlers.opened()}},methods:{fireChangeEvent:function(){this.handlers.changed&&this.handlers.changed(this.currentImageIndex)},close:function(){this.closed||(document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0)},next:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0,this.fireChangeEvent())},select:function(t){this.currentImageIndex=t},prev:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex>0?this.currentImageIndex--:this.currentImageIndex=this.images.length-1,this.fireChangeEvent())},showUI:function(){var t=this;this.closed||(clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout((function(){t.visibleUI=!1}),3500))}},created:function(){var t=this;window.addEventListener("keyup",(function(e){27!==e.keyCode&&81!==e.keyCode||t.close(),39!==e.keyCode&&76!==e.keyCode||t.next(),37!==e.keyCode&&72!==e.keyCode||t.prev()})),window.addEventListener("scroll",(function(){t.close()})),window.addEventListener("mousemove",(function(){t.showUI()}))}},c=(function(){function t(t){this.value=t}function e(e){function n(a,s){try{var r=e[a](s),o=r.value;o instanceof t?Promise.resolve(o.value).then((function(t){n("next",t)}),(function(t){n("throw",t)})):i(r.done?"return":"normal",r.value)}catch(t){i("throw",t)}}function i(t,e){switch(t){case"return":a.resolve({value:e,done:!0});break;case"throw":a.reject(e);break;default:a.resolve({value:e,done:!1})}(a=a.next)?n(a.key,a.arg):s=null}var a,s;this._invoke=function(t,e){return new Promise((function(i,r){var o={key:t,arg:e,resolve:i,reject:r,next:null};s?s=s.next=o:(a=s=o,n(t,e))}))},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}),l=function(t,e,n){var i="pointer",a=e.arg||null,s=void 0,r=void 0,o=t.src,c=void 0,l=void 0,u={};return n.altAsTitle&&(c=t.alt),s=n.openOn,r=n.sourceButton,l=n.thumbnails,void 0!==e.value&&(i=e.value.cursor||i,a=e.value.group||a,s=e.value.openOn||s,o=e.value.src||o,c=e.value.title||c,u.opened=e.value.opened,u.closed=e.value.closed,u.changed=e.value.changed,void 0!==e.value.sourceButton&&(r=e.value.sourceButton),void 0!==e.value.thumbnails&&(l=e.value.thumbnails)),t.setAttribute("data-vue-img-src",o),a&&t.setAttribute("data-vue-img-group",a),c&&t.setAttribute("data-vue-img-title",c),r&&t.setAttribute("data-vue-img-source-button",r),l&&t.setAttribute("data-vue-img-thumbnails",l),o||console.error("v-img element missing src parameter."),t.style.cursor=i,{cursor:i,src:o,group:a,title:c,events:u,sourceButton:r,openOn:s,thumbnails:l}},d=function(t,e){var n=t.extend(o);e=c({altAsTitle:!1,sourceButton:!1,thumbnails:!1,openOn:"click"},e),t.directive("img",{update:function(t,n,i,a){var s=void 0,r=void 0;a.data.attrs&&i.data.attrs&&(r=a.data.attrs.src!==i.data.attrs.src,e.altAsTitle&&(s=a.data.attrs.alt!==i.data.attrs.alt));var o=n.oldValue!==n.value;(r||s||o)&&l(t,n,e)},bind:function(i,a){var s=l(i,a,e),r=window.vueImg;if(!r){var o=document.createElement("div");o.setAttribute("id","imageScreen"),document.querySelector("body").appendChild(o),r=window.vueImg=(new n).$mount("#imageScreen")}i.addEventListener(s.openOn,(function(){var e=void 0;e=i.dataset.vueImgGroup?[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(document.querySelectorAll('img[data-vue-img-group="'+i.dataset.vueImgGroup+'"]'))):[i],t.set(r,"images",e.map((function(t){return t.dataset.vueImgSrc}))),t.set(r,"titles",e.map((function(t){return t.dataset.vueImgTitle}))),t.set(r,"sourceButtons",e.map((function(t){return"true"===t.dataset.vueImgSourceButton}))),t.set(r,"thumbnails","true"===i.dataset.vueImgThumbnails),t.set(r,"currentImageIndex",e.indexOf(i)),t.set(r,"handlers",s.events),t.set(r,"closed",!1)}))}})};"undefined"!=typeof window&&window.Vue&&window.Vue.use(d);var v=d;r.a.use(v);var m={scrollToTop:!0,data:function(){return{}},computed:{},mounted:function(){}},h=n(9),component=Object(h.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("ProjectsGrid")],1)}),[],!1,null,"07488752",null);e.default=component.exports;installComponents(component,{ProjectsGrid:n(292).default})}}]);