/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function t(n,t,e){return e.split(" ").reduce((e,r)=>(e[r]=!0,n&&(e[`${r}-${n}`]=!0,t&&(e[`${r}-${t}`]=!0,e[`${r}-${n}-${t}`]=!0)),e),{})}function e(n){const t={};for(let e=0;e<n.length;e++)t[n[e]]=!0;return t}function r(n,t){return n?{[n]:!0,[`${n}-${t}`]:!0}:{}}function o(n){const t={};return n&&n.split(" ").filter(n=>""!==n.trim()).forEach(n=>t[n]=!0),t}function u(n,t,e=!1){if(n&&"#"!==n[0]&&-1===n.indexOf("://")){const r=document.querySelector("ion-router");if(r)return t&&t.preventDefault(),r.componentOnReady().then(()=>r.push(n,e))}return Promise.resolve()}export{t as createThemedClasses,o as getClassMap,u as openURL,r as getButtonClassMap,e as getElementClassMap};