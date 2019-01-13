/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{domControllerAsync as e}from"./chunk1.js";import{createThemedClasses as s,getClassMap as o}from"./chunk2.js";import{overlayAnimation as i,createOverlay as a,dismissOverlay as n,getTopOverlay as r,removeLastOverlay as l}from"./chunk3.js";function c(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","-100%","10px");break;case"middle":const t=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","-10px")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function d(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","10px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","-10px","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function m(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":const t=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function h(t,e,s){const o=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),s){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}class p{constructor(){this.presented=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}componentDidLoad(){this.ionToastDidLoad.emit()}componentDidUnload(){this.ionToastDidUnload.emit()}onDismiss(t){t.stopPropagation(),t.preventDefault(),this.dismiss()}present(){if(this.presented)return Promise.reject("overlay already presented");this.presented=!0,this.ionToastWillPresent.emit();const t=this.enterAnimation||this.config.get("toastEnter","ios"===this.mode?c:m);return this.playAnimation(t).then(()=>{this.ionToastDidPresent.emit(),this.duration&&setTimeout(()=>this.dismiss(),this.duration)})}dismiss(t,s){if(!this.presented)return Promise.reject("overlay is not presented");this.presented=!1,this.ionToastWillDismiss.emit({data:t,role:s});const o=this.leaveAnimation||this.config.get("toastLeave","ios"===this.mode?d:h);return this.playAnimation(o).then(()=>(this.ionToastDidDismiss.emit({data:t,role:s}),e(this.dom.write,()=>{this.el.parentNode.removeChild(this.el)})))}playAnimation(t){return i(this,t,this.willAnimate,this.el,this.position)}wrapperClass(){return{"toast-wrapper":!0,[`toast-${this.position?this.position:"bottom"}`]:!0}}hostData(){const t=this.translucent?s(this.mode,this.color,"toast-translucent"):{};return{class:Object.assign({},t,o(this.cssClass))}}render(){return t("div",{class:this.wrapperClass()},t("div",{class:"toast-container"},this.message?t("div",{class:"toast-message"},this.message):null,this.showCloseButton?t("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:()=>this.dismiss()},this.closeButtonText||"Close"):null))}static get is(){return"ion-toast"}static get host(){return{theme:"toast"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dismissOnPageChange:{type:Boolean,attr:"dismiss-on-page-change"},dom:{context:"dom"},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"ionToastDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"ionToastWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"ionToastWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"ionToastDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}:root{--ion-alpha-activated:0.1;--ion-alpha-border-low:0.1;--ion-alpha-border-medium:0.2;--ion-alpha-border-high:0.3;--ion-alpha-disabled:0.5;--ion-alpha-focused:0.25;--ion-alpha-hover:0.1;--ion-alpha-lowest:0.1;--ion-alpha-low:0.25;--ion-alpha-medium:0.5;--ion-alpha-high:0.8;--ion-alpha-highest:0.9;--ion-background-color:#fff;--ion-text-color:#000;--ion-placeholder-text-color:#999;--ion-background-color-rgb:255,255,255;--ion-text-color-rgb:0,0,0;--ion-background-color-step-50:#f2f2f2;--ion-background-color-step-100:#e6e6e6;--ion-background-color-step-150:#d9d9d9;--ion-background-color-step-200:#cccccc;--ion-background-color-step-250:#bfbfbf;--ion-background-color-step-300:#b3b3b3;--ion-background-color-step-350:#a6a6a6;--ion-background-color-step-400:#999999;--ion-background-color-step-450:#8c8c8c;--ion-background-color-step-500:gray;--ion-background-color-step-550:#737373;--ion-background-color-step-600:#666666;--ion-background-color-step-650:#595959;--ion-background-color-step-700:#4d4d4d;--ion-background-color-step-750:#404040;--ion-background-color-step-800:#333333;--ion-background-color-step-850:#262626;--ion-background-color-step-900:#1a1a1a;--ion-background-color-step-950:#0d0d0d;--ion-background-color-step-1000:black;--ion-text-color-step-50:#0d0d0d;--ion-text-color-step-100:#1a1a1a;--ion-text-color-step-150:#262626;--ion-text-color-step-200:#333333;--ion-text-color-step-250:#404040;--ion-text-color-step-300:#4d4d4d;--ion-text-color-step-350:#595959;--ion-text-color-step-400:#666666;--ion-text-color-step-450:#737373;--ion-text-color-step-500:gray;--ion-text-color-step-550:#8c8c8c;--ion-text-color-step-600:#999999;--ion-text-color-step-650:#a6a6a6;--ion-text-color-step-700:#b3b3b3;--ion-text-color-step-750:#bfbfbf;--ion-text-color-step-800:#cccccc;--ion-text-color-step-850:#d9d9d9;--ion-text-color-step-900:#e6e6e6;--ion-text-color-step-950:#f2f2f2;--ion-text-color-step-1000:white;--ion-backdrop-color:#000;--ion-border-color:#b2b2b2;--ion-box-shadow-color:#000;--ion-overlay-background-color:#fafafa;--ion-tabbar-background-color:#f8f8f8;--ion-tabbar-background-color-focused:#dadada;--ion-tabbar-border-color:var(--ion-border-color, #b2b2b2);--ion-tabbar-text-color-active:#488aff;--ion-tabbar-text-color:#8c8c8c;--ion-toolbar-background-color:#f8f8f8;--ion-toolbar-border-color:var(--ion-border-color, #b2b2b2);--ion-toolbar-color-active:#4a4a4a;--ion-toolbar-color-inactive:#8c8c8c;--ion-toolbar-text-color:var(--ion-text-color, #000);--ion-item-background-color:var(--ion-background-color, #fff);--ion-item-background-color-active:var(--ion-background-color, #fff);--ion-item-border-color:#c8c7cc;--ion-item-text-color:var(--ion-text-color, #000);--ion-alpha-md-activated:var(--ion-alpha-activated, 0.1);--ion-alpha-md-border-low:0.07;--ion-alpha-md-border-medium:var(--ion-alpha-border-medium, 0.2);--ion-alpha-md-border-high:var(--ion-alpha-border-high, 0.3);--ion-alpha-md-disabled:var(--ion-alpha-disabled, 0.5);--ion-alpha-md-focused:0.1;--ion-alpha-md-hover:var(--ion-alpha-hover, 0.1);--ion-alpha-md-lowest:var(--ion-alpha-lowest, 0.1);--ion-alpha-md-low:var(--ion-alpha-low, 0.25);--ion-alpha-md-medium:var(--ion-alpha-medium, 0.5);--ion-alpha-md-high:var(--ion-alpha-high, 0.8);--ion-alpha-md-highest:var(--ion-alpha-highest, 0.9);--ion-background-md-color:#fff;--ion-text-md-color:#000;--ion-placeholder-text-md-color:var(--ion-placeholder-text-color, #999);--ion-background-md-color-step-50:#f2f2f2;--ion-background-md-color-step-100:#e6e6e6;--ion-background-md-color-step-150:#d9d9d9;--ion-background-md-color-step-200:#cccccc;--ion-background-md-color-step-250:#bfbfbf;--ion-background-md-color-step-300:#b3b3b3;--ion-background-md-color-step-350:#a6a6a6;--ion-background-md-color-step-400:#999999;--ion-background-md-color-step-450:#8c8c8c;--ion-background-md-color-step-500:gray;--ion-background-md-color-step-550:#737373;--ion-background-md-color-step-600:#666666;--ion-background-md-color-step-650:#595959;--ion-background-md-color-step-700:#4d4d4d;--ion-background-md-color-step-750:#404040;--ion-background-md-color-step-800:#333333;--ion-background-md-color-step-850:#262626;--ion-background-md-color-step-900:#1a1a1a;--ion-background-md-color-step-950:#0d0d0d;--ion-background-md-color-step-1000:black;--ion-text-md-color-step-50:#0d0d0d;--ion-text-md-color-step-100:#1a1a1a;--ion-text-md-color-step-150:#262626;--ion-text-md-color-step-200:#333333;--ion-text-md-color-step-250:#404040;--ion-text-md-color-step-300:#4d4d4d;--ion-text-md-color-step-350:#595959;--ion-text-md-color-step-400:#666666;--ion-text-md-color-step-450:#737373;--ion-text-md-color-step-500:gray;--ion-text-md-color-step-550:#8c8c8c;--ion-text-md-color-step-600:#999999;--ion-text-md-color-step-650:#a6a6a6;--ion-text-md-color-step-700:#b3b3b3;--ion-text-md-color-step-750:#bfbfbf;--ion-text-md-color-step-800:#cccccc;--ion-text-md-color-step-850:#d9d9d9;--ion-text-md-color-step-900:#e6e6e6;--ion-text-md-color-step-950:#f2f2f2;--ion-text-md-color-step-1000:white;--ion-backdrop-md-color:var(--ion-backdrop-color, #000);--ion-border-md-color:#c1c4cd;--ion-box-shadow-md-color:var(--ion-box-shadow-color, #000);--ion-overlay-md-background-color:#fafafa;--ion-tabbar-md-background-color:var(--ion-tabbar-background-color, #f8f8f8);--ion-tabbar-md-background-color-focused:var(--ion-tabbar-background-color-focused, #dadada);--ion-tabbar-md-border-color:rgba(0, 0, 0, var(--ion-alpha-md-border-low, var(--ion-alpha-border-low, 0.07)));--ion-tabbar-md-text-color:var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));--ion-tabbar-md-text-color-active:var(--ion-tabbar-text-color-active, #488aff);--ion-toolbar-md-background-color:var(--ion-toolbar-background-color, #f8f8f8);--ion-toolbar-md-border-color:var(--ion-border-md-color, var(--ion-border-color, #c1c4cd));--ion-toolbar-md-color-active:#4a4a4a;--ion-toolbar-md-color-inactive:var(--ion-toolbar-color-inactive, #8c8c8c);--ion-toolbar-md-text-color:#424242;--ion-item-md-background-color:var(--ion-item-background-color, var(--ion-background-color, #fff));--ion-item-md-background-color-active:#f1f1f1;--ion-item-md-border-color:#dedede;--ion-item-md-text-color:var(--ion-item-text-color, var(--ion-text-color, #000))}.toast-md{font-family:Roboto,\"Helvetica Neue\",sans-serif}.toast-md .toast-wrapper{left:0;right:0;margin:auto;position:absolute;z-index:10;display:block;width:100%;max-width:700px;background:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.toast-md .toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-md .toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{padding:19px 16px 17px;font-size:15px;color:var(--ion-background-md-color,var(--ion-background-color,#fff))}"}static get styleMode(){return"md"}}class u{constructor(){this.toasts=new Map}toastWillPresent(t){this.toasts.set(t.target.overlayId,t.target)}toastWillDismiss(t){this.toasts.delete(t.target.overlayId)}escapeKeyUp(){l(this.toasts)}create(t){return a(document.createElement("ion-toast"),t)}dismiss(t,e,s=-1){return n(t,e,this.toasts,s)}getTop(){return r(this.toasts)}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}export{p as IonToast,u as IonToastController};