import{a as p,d as y,u,_ as c,w as m}from"./base-XSzljRVo.js";import{d as f,o as r,b as t,n as o,u as s,e as d,D as l,f as h,l as v,W as n,X as i}from"./index-FcrJ0MCD.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(g){const a=u("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):l("v-if",!0),h("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):l("v-if",!0)],2))}});var w=c(C,[["__file","card.vue"]]);const N=m(w);export{N as E};
