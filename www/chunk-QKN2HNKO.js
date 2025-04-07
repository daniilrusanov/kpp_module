import{A as T,B as N,C as j,D as w,H as A,I as B,J as G,K as k,L as q,M as z,N as b,O as R,P as V,Q as L,S as Y,a as y,b as D,c as a,d,e as l,f as v,g as m,h as i,i as u,j as p,k as g,l as E,m as r,n as C,o as F,p as x,q as M,w as I,x as P,y as O,z as H}from"./chunk-H2UAHRS6.js";import"./chunk-XQOGKRGN.js";import"./chunk-JLS5TK6O.js";import"./chunk-R5AJVSOO.js";import"./chunk-TQD5D2VX.js";import"./chunk-Q753KR5X.js";import"./chunk-PLJGSZMU.js";import"./chunk-RRZVV5IU.js";import"./chunk-4WFVMWDK.js";import"./chunk-VM6GQEQT.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-JHI3MBHO.js";var $=(()=>{class t{constructor(e){this.fb=e,this.formSubmit=new D,this.inputForm=this.fb.group({elements:["",I.required],length:["",I.required]})}submitData(){if(this.inputForm.valid){let e=this.inputForm.value.elements.trim(),n;e.includes(" ")?n=e.split(" "):n=e.split("");let o=+this.inputForm.value.length;console.log("Submit:",n,o),this.formSubmit.emit({elements:n,length:o})}}static{this.\u0275fac=function(n){return new(n||t)(d(j))}}static{this.\u0275cmp=l({type:t,selectors:[["app-input-form"]],outputs:{formSubmit:"formSubmit"},decls:7,vars:1,consts:[[3,"ngSubmit","formGroup"],["formControlName","elements","label","\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0430\u0431\u0456\u0440 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432","label-placement","stacked"],["formControlName","length","label","\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u0439","label-placement","stacked","type","number"],["expand","full","type","submit"]],template:function(n,o){n&1&&(i(0,"form",0),g("ngSubmit",function(){return o.submitData()}),i(1,"ion-item"),p(2,"ion-input",1),u(),i(3,"ion-item"),p(4,"ion-input",2),u(),i(5,"ion-button",3),r(6," \u0417\u0433\u0435\u043D\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "),u()()),n&2&&m("formGroup",o.inputForm)},dependencies:[b,Y,A,w,H,P,O,T,N],encapsulation:2})}}return t})();var J=(()=>{class t{constructor(){this.name="\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-my-header"]],inputs:{name:"name"},decls:9,vars:2,consts:[[3,"translucent"],["color","secondary"],["color","tertiary"]],template:function(n,o){n&1&&(i(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),r(3),u()(),i(4,"ion-toolbar",2)(5,"ion-title"),r(6," \u0412\u0438\u043A\u043E\u043D\u0430\u0432 \u0441\u0442\u0443\u0434\u0435\u043D\u0442 \u0433\u0440\u0443\u043F\u0438 \u041A\u041D-31"),u(),i(7,"ion-title"),r(8," \u0420\u0443\u0441\u0430\u043D\u043E\u0432 \u0414\u0430\u043D\u0456\u0456\u043B "),u()()()),n&2&&(m("translucent",!0),a(3),C(" ",o.name," "))},dependencies:[z,L,V],encapsulation:2})}}return t})();var K=(()=>{class t{constructor(){}getCombinations(e,n){let o=[],c=(s,h)=>{if(s.length===n){o.push(s.join(" "));return}for(let f=0;f<h.length;f++)c([...s,h[f]],h.filter((Z,Q)=>Q!==f))};return console.log("Elements (split into array):",e),c([],e),console.log("Result:",o),o}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function W(t,S){if(t&1&&(i(0,"ion-item"),r(1),u()),t&2){let e=S.$implicit;a(),C(" ",e," ")}}function X(t,S){if(t&1&&(i(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),r(4,"\u0417\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u0457:"),u()(),i(5,"ion-list"),v(6,W,2,1,"ion-item",4),u()()()),t&2){let e=E();a(6),m("ngForOf",e.combinations)}}var dt=(()=>{class t{constructor(e){this.combinationService=e,this.combinations=[]}generateCombinations(e){this.combinations=this.combinationService.getCombinations(e.elements,e.length)}static{this.\u0275fac=function(n){return new(n||t)(d(K))}}static{this.\u0275cmp=l({type:t,selectors:[["app-home"]],decls:4,vars:1,consts:[["name","\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430 \u21161"],[1,"ion-padding"],[3,"formSubmit"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,o){n&1&&(p(0,"app-my-header",0),i(1,"ion-content",1)(2,"app-input-form",2),g("formSubmit",function(s){return o.generateCombinations(s)}),u(),v(3,X,7,1,"div",3),u()),n&2&&(a(3),m("ngIf",o.combinations.length))},dependencies:[M,F,x,q,B,b,$,R,J,G,k],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]})}}return t})();export{dt as HomePage};
