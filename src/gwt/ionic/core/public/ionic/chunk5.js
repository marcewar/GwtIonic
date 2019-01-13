/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{isString as o}from"./chunk1.js";class t{attachViewToDom(e,t,n={},r=[]){return new Promise(s=>{const m=o(t)?document.createElement(t):t;if(Object.assign(m,n),r.length)for(const e of r)m.classList.add(e);e.appendChild(m),s({element:m,data:n,component:t})})}removeViewFromDom(e,o){return e.removeChild(o),Promise.resolve()}}export{t as DomFrameworkDelegate};