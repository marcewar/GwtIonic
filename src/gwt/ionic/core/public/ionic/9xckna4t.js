/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:r}=window.Ionic;import{openURL as t}from"./chunk2.js";class e{render(){return r("a",{href:this.href,onClick:r=>t(this.href,r)},r("slot",null))}static get is(){return"ion-anchor"}static get properties(){return{href:{type:String,attr:"href"}}}}export{e as IonAnchor};