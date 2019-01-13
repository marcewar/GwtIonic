/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{domControllerAsync as e}from"./chunk1.js";import{createThemedClasses as s,getClassMap as o}from"./chunk2.js";import{overlayAnimation as i,createOverlay as a,dismissOverlay as n,getTopOverlay as r,removeLastOverlay as l}from"./chunk3.js";function c(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","-100%","10px");break;case"middle":const t=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","-10px")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function d(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","10px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","-10px","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function m(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":const t=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function h(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}class p{constructor(){this.presented=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}componentDidLoad(){this.ionToastDidLoad.emit()}componentDidUnload(){this.ionToastDidUnload.emit()}onDismiss(t){t.stopPropagation(),t.preventDefault(),this.dismiss()}present(){if(this.presented)return Promise.reject("overlay already presented");this.presented=!0,this.ionToastWillPresent.emit();const t=this.enterAnimation||this.config.get("toastEnter","ios"===this.mode?c:m);return this.playAnimation(t).then(()=>{this.ionToastDidPresent.emit(),this.duration&&setTimeout(()=>this.dismiss(),this.duration)})}dismiss(t,s){if(!this.presented)return Promise.reject("overlay is not presented");this.presented=!1,this.ionToastWillDismiss.emit({data:t,role:s});const o=this.leaveAnimation||this.config.get("toastLeave","ios"===this.mode?d:h);return this.playAnimation(o).then(()=>(this.ionToastDidDismiss.emit({data:t,role:s}),e(this.dom.write,()=>{this.el.parentNode.removeChild(this.el)})))}playAnimation(t){return i(this,t,this.willAnimate,this.el,this.position)}wrapperClass(){return{"toast-wrapper":!0,[`toast-${this.position?this.position:"bottom"}`]:!0}}hostData(){const t=this.translucent?s(this.mode,this.color,"toast-translucent"):{};return{class:Object.assign({},t,o(this.cssClass))}}render(){return t("div",{class:this.wrapperClass()},t("div",{class:"toast-container"},this.message?t("div",{class:"toast-message"},this.message):null,this.showCloseButton?t("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:()=>this.dismiss()},this.closeButtonText||"Close"):null))}static get is(){return"ion-toast"}static get host(){return{theme:"toast"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dismissOnPageChange:{type:Boolean,attr:"dismiss-on-page-change"},dom:{context:"dom"},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"ionToastDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"ionToastWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"ionToastWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"ionToastDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.toast-ios{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;position:absolute;z-index:10;display:block;max-width:700px;background:var(--ion-background-ios-color-step-50,var(--ion-background-color-step-50,#f2f2f2))}.toast-translucent-ios .toast-wrapper{background:rgba(255,255,255,var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)));backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-ios .toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px;font-size:14px;color:var(--ion-text-ios-color-step-150,var(--ion-text-color-step-150,#262626))}.toast-ios .toast-button{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}"}static get styleMode(){return"ios"}}class u{constructor(){this.toasts=new Map}toastWillPresent(t){this.toasts.set(t.target.overlayId,t.target)}toastWillDismiss(t){this.toasts.delete(t.target.overlayId)}escapeKeyUp(){l(this.toasts)}create(t){return a(document.createElement("ion-toast"),t)}dismiss(t,e,s=-1){return n(t,e,this.toasts,s)}getTop(){return r(this.toasts)}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}export{p as IonToast,u as IonToastController};