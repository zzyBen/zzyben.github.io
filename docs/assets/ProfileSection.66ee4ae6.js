import{_ as n,o as s,c as a,b as t,d as c,t as i,F as _,h as r}from"./app.7350d38c.js";const d={props:["frontmatter"],computed:{data(){return this.frontmatter}}},h={class:"profile"},f={key:0,class:"image"},u=["src"],v={class:"info"},m={class:"name"},p={class:"bio"},g={class:"socials"},k=["href"],b=["src","alt","title"],y={class:"contact"},B={class:"email",title:"Contact me"},C={key:0},P=["href"],S=t("b",null,"[CV]",-1),V=[S];function x(l,D,F,w,N,e){return s(),a("div",h,[e.data.profile?(s(),a("div",f,[t("img",{src:l.$withBase(e.data.profile),alt:""},null,8,u)])):c("v-if",!0),t("div",v,[t("div",m,i(e.data.name),1),t("div",p,[t("p",null,i(e.data.bio),1)]),t("div",g,[(s(!0),a(_,null,r(e.data.socials,o=>(s(),a("div",null,[t("a",{href:o.link,target:"_blank"},[t("img",{src:o.icon,alt:o.title,title:o.title},null,8,b)],8,k)]))),256))]),t("div",y,[t("div",B,i(e.data.email),1)]),e.data.cv?(s(),a("div",C,[t("a",{target:"_blank",href:e.data.cv,title:"Download my CV in PDF"},V,8,P)])):c("v-if",!0)])])}const L=n(d,[["render",x],["__file","ProfileSection.vue"]]);export{L as default};