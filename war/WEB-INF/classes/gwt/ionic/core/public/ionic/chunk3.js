/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;import{playAnimationAsync as t}from"./chunk1.js";let o=1;function e(n,t){return n.overlayId=o++,Object.assign(n,t),(document.querySelector("ion-app")||document.body).appendChild(n),n.componentOnReady()}function i(n,t,o,e){e=e>=0?e:a(o);const i=o.get(e);return i?i.dismiss(n,t):Promise.reject("overlay does not exist")}function r(n){return n.get(a(n))}function a(n){let t=-1;return n.forEach((n,o)=>{o>t&&(t=o)}),t}function c(n){const t=r(n);return t?t.dismiss():Promise.resolve()}function s(n,o,e,i,r){return n.animation&&(n.animation.destroy(),n.animation=void 0),n.animationCtrl.create(o,i,r).then(o=>(n.animation=o,e||o.duration(0),t(o))).then(t=>{t.destroy(),n.animation=void 0})}const d="backdrop";export{d as BACKDROP,s as overlayAnimation,e as createOverlay,i as dismissOverlay,r as getTopOverlay,c as removeLastOverlay};