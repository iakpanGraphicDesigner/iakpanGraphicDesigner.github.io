(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{294:function(t,e,r){t.exports=r.p+"img/part1_preview.7f94adf.png"},295:function(t,e,r){t.exports=r.p+"img/part1_preview.f9caebb.png"},296:function(t,e,r){t.exports=r.p+"img/part1_preview.fddd796.png"},297:function(t,e,r){t.exports=r.p+"img/part1.0c7988c.png"},301:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:7,title:"Coffe Shop",img:r(294)},{id:6,title:"Restaurant Gourmet",img:r(295)},{id:5,title:"Private Lessons",img:r(296)},{id:10,title:"Tourist Guide of Cyprus",img:r(297)}]}}},methods:{onRelatedClick:function(t){console.log("OKKKK RELATED CLICK : ",t),this.$router.push({path:"/projects/project-00"+t})}}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    mt-10\n    pt-10\n    sm:pt-14 sm:mt-20\n    border-t-2 border-primary-light\n    dark:border-secondary-dark\n  "},[r("p",{staticClass:"\n      font-general-regular\n      text-primary-dark\n      dark:text-primary-light\n      text-3xl\n      font-bold\n      mb-10\n      sm:mb-14\n      text-left\n    "},[t._v("\n    "+t._s(t.relatedProject.relatedProjectsHeading)+"\n  ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-4 gap-10"},t._l(t.relatedProject.relatedProjects,(function(e){return r("div",{key:e.id,on:{click:function(r){return t.onRelatedClick(e.id)}}},[r("img",{staticClass:"rounded-xl cursor-pointer",attrs:{src:e.img,alt:e.title}})])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);