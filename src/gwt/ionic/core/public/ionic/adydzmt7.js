/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{DomFrameworkDelegate as t}from"./chunk5.js";import{domControllerAsync as o}from"./chunk1.js";import{createThemedClasses as i}from"./chunk2.js";import{BACKDROP as s,overlayAnimation as a,createOverlay as n,dismissOverlay as r,getTopOverlay as l,removeLastOverlay as d}from"./chunk3.js";function m(e,t){const o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".modal-wrapper")),s.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),i.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(i).add(s))}function c(e,t){const o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));const s=new e,a=t.querySelector(".modal-wrapper");s.addElement(a);const n=a.getBoundingClientRect();return s.beforeStyles({opacity:1}).fromTo("translateY","0%",`${window.innerHeight-n.top}px`),i.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("ease-out").duration(250).add(i).add(s))}function p(e,t){const o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".modal-wrapper")),s.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),i.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(i).add(s))}function h(e,t){const o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));const s=new e,a=t.querySelector(".modal-wrapper");return s.addElement(a),s.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),i.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(i).add(s))}class u{constructor(){this.presented=!1,this.data={},this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.willAnimate=!0}componentDidLoad(){this.ionModalDidLoad.emit()}componentDidUnload(){this.ionModalDidUnload.emit()}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(null,s).catch()}present(){if(this.presented)return Promise.reject("overlay already presented");this.presented=!0,this.ionModalWillPresent.emit(),this.el.style.zIndex=`${2e4+this.overlayId}`;const e=this.enterAnimation||this.config.get("modalEnter","ios"===this.mode?m:p),o=this.el.querySelector(`.${y}`);this.delegate||(this.delegate=new t);const i=[];return this.cssClass&&this.cssClass.length&&i.push(this.cssClass),this.data=this.data||{},this.data.modal=this.el,this.delegate.attachViewToDom(o,this.component,this.data,i).then(e=>{e.element.classList.add("ion-page"),this.usersComponentElement=e.element}).then(()=>this.playAnimation(e)).then(()=>{this.ionModalDidPresent.emit()})}dismiss(e,i){if(!this.presented)return Promise.reject("overlay is not presented");this.presented=!1,this.ionModalWillDismiss.emit({data:e,role:i}),this.delegate||(this.delegate=new t);const s=this.leaveAnimation||this.config.get("modalLeave","ios"===this.mode?c:h);return this.playAnimation(s).then(()=>(this.ionModalDidDismiss.emit({data:e,role:i}),o(this.dom.write,()=>{const e=this.el.querySelector(`.${y}`);this.delegate.removeViewFromDom(e,this.usersComponentElement),this.el.parentNode.removeChild(this.el)})))}playAnimation(e){return a(this,e,this.willAnimate,this.el,void 0)}getUserComponentContainer(){return this.el.querySelector(`.${y}`)}render(){const t=i(this.mode,this.color,"modal-wrapper");return[e("ion-backdrop",{visible:this.showBackdrop,tappable:this.enableBackdropDismiss}),e("div",{role:"dialog",class:t})]}static get is(){return"ion-modal"}static get host(){return{theme:"modal"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:"Any",attr:"component"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},data:{type:"Any",attr:"data"},delegate:{type:"Any",attr:"delegate",mutable:!0},dismiss:{method:!0},dom:{context:"dom"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},getUserComponentContainer:{method:!0},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:"Any",attr:"mode"},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionModalDidLoad",method:"ionModalDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidPresent",method:"ionModalDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"ionModalWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"ionModalWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"ionModalDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidUnload",method:"ionModalDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-modal{left:0;top:0;position:absolute;display:block;width:100%;height:100%;contain:strict}ion-modal-controller{display:none}\@media not all and (min-width:768px) and (min-height:600px){ion-modal ion-backdrop{display:none}}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}:root{--ion-alpha-activated:0.1;--ion-alpha-border-low:0.1;--ion-alpha-border-medium:0.2;--ion-alpha-border-high:0.3;--ion-alpha-disabled:0.5;--ion-alpha-focused:0.25;--ion-alpha-hover:0.1;--ion-alpha-lowest:0.1;--ion-alpha-low:0.25;--ion-alpha-medium:0.5;--ion-alpha-high:0.8;--ion-alpha-highest:0.9;--ion-background-color:#fff;--ion-text-color:#000;--ion-placeholder-text-color:#999;--ion-background-color-rgb:255,255,255;--ion-text-color-rgb:0,0,0;--ion-background-color-step-50:#f2f2f2;--ion-background-color-step-100:#e6e6e6;--ion-background-color-step-150:#d9d9d9;--ion-background-color-step-200:#cccccc;--ion-background-color-step-250:#bfbfbf;--ion-background-color-step-300:#b3b3b3;--ion-background-color-step-350:#a6a6a6;--ion-background-color-step-400:#999999;--ion-background-color-step-450:#8c8c8c;--ion-background-color-step-500:gray;--ion-background-color-step-550:#737373;--ion-background-color-step-600:#666666;--ion-background-color-step-650:#595959;--ion-background-color-step-700:#4d4d4d;--ion-background-color-step-750:#404040;--ion-background-color-step-800:#333333;--ion-background-color-step-850:#262626;--ion-background-color-step-900:#1a1a1a;--ion-background-color-step-950:#0d0d0d;--ion-background-color-step-1000:black;--ion-text-color-step-50:#0d0d0d;--ion-text-color-step-100:#1a1a1a;--ion-text-color-step-150:#262626;--ion-text-color-step-200:#333333;--ion-text-color-step-250:#404040;--ion-text-color-step-300:#4d4d4d;--ion-text-color-step-350:#595959;--ion-text-color-step-400:#666666;--ion-text-color-step-450:#737373;--ion-text-color-step-500:gray;--ion-text-color-step-550:#8c8c8c;--ion-text-color-step-600:#999999;--ion-text-color-step-650:#a6a6a6;--ion-text-color-step-700:#b3b3b3;--ion-text-color-step-750:#bfbfbf;--ion-text-color-step-800:#cccccc;--ion-text-color-step-850:#d9d9d9;--ion-text-color-step-900:#e6e6e6;--ion-text-color-step-950:#f2f2f2;--ion-text-color-step-1000:white;--ion-backdrop-color:#000;--ion-border-color:#b2b2b2;--ion-box-shadow-color:#000;--ion-overlay-background-color:#fafafa;--ion-tabbar-background-color:#f8f8f8;--ion-tabbar-background-color-focused:#dadada;--ion-tabbar-border-color:var(--ion-border-color, #b2b2b2);--ion-tabbar-text-color-active:#488aff;--ion-tabbar-text-color:#8c8c8c;--ion-toolbar-background-color:#f8f8f8;--ion-toolbar-border-color:var(--ion-border-color, #b2b2b2);--ion-toolbar-color-active:#4a4a4a;--ion-toolbar-color-inactive:#8c8c8c;--ion-toolbar-text-color:var(--ion-text-color, #000);--ion-item-background-color:var(--ion-background-color, #fff);--ion-item-background-color-active:var(--ion-background-color, #fff);--ion-item-border-color:#c8c7cc;--ion-item-text-color:var(--ion-text-color, #000);--ion-alpha-md-activated:var(--ion-alpha-activated, 0.1);--ion-alpha-md-border-low:0.07;--ion-alpha-md-border-medium:var(--ion-alpha-border-medium, 0.2);--ion-alpha-md-border-high:var(--ion-alpha-border-high, 0.3);--ion-alpha-md-disabled:var(--ion-alpha-disabled, 0.5);--ion-alpha-md-focused:0.1;--ion-alpha-md-hover:var(--ion-alpha-hover, 0.1);--ion-alpha-md-lowest:var(--ion-alpha-lowest, 0.1);--ion-alpha-md-low:var(--ion-alpha-low, 0.25);--ion-alpha-md-medium:var(--ion-alpha-medium, 0.5);--ion-alpha-md-high:var(--ion-alpha-high, 0.8);--ion-alpha-md-highest:var(--ion-alpha-highest, 0.9);--ion-background-md-color:#fff;--ion-text-md-color:#000;--ion-placeholder-text-md-color:var(--ion-placeholder-text-color, #999);--ion-background-md-color-step-50:#f2f2f2;--ion-background-md-color-step-100:#e6e6e6;--ion-background-md-color-step-150:#d9d9d9;--ion-background-md-color-step-200:#cccccc;--ion-background-md-color-step-250:#bfbfbf;--ion-background-md-color-step-300:#b3b3b3;--ion-background-md-color-step-350:#a6a6a6;--ion-background-md-color-step-400:#999999;--ion-background-md-color-step-450:#8c8c8c;--ion-background-md-color-step-500:gray;--ion-background-md-color-step-550:#737373;--ion-background-md-color-step-600:#666666;--ion-background-md-color-step-650:#595959;--ion-background-md-color-step-700:#4d4d4d;--ion-background-md-color-step-750:#404040;--ion-background-md-color-step-800:#333333;--ion-background-md-color-step-850:#262626;--ion-background-md-color-step-900:#1a1a1a;--ion-background-md-color-step-950:#0d0d0d;--ion-background-md-color-step-1000:black;--ion-text-md-color-step-50:#0d0d0d;--ion-text-md-color-step-100:#1a1a1a;--ion-text-md-color-step-150:#262626;--ion-text-md-color-step-200:#333333;--ion-text-md-color-step-250:#404040;--ion-text-md-color-step-300:#4d4d4d;--ion-text-md-color-step-350:#595959;--ion-text-md-color-step-400:#666666;--ion-text-md-color-step-450:#737373;--ion-text-md-color-step-500:gray;--ion-text-md-color-step-550:#8c8c8c;--ion-text-md-color-step-600:#999999;--ion-text-md-color-step-650:#a6a6a6;--ion-text-md-color-step-700:#b3b3b3;--ion-text-md-color-step-750:#bfbfbf;--ion-text-md-color-step-800:#cccccc;--ion-text-md-color-step-850:#d9d9d9;--ion-text-md-color-step-900:#e6e6e6;--ion-text-md-color-step-950:#f2f2f2;--ion-text-md-color-step-1000:white;--ion-backdrop-md-color:var(--ion-backdrop-color, #000);--ion-border-md-color:#c1c4cd;--ion-box-shadow-md-color:var(--ion-box-shadow-color, #000);--ion-overlay-md-background-color:#fafafa;--ion-tabbar-md-background-color:var(--ion-tabbar-background-color, #f8f8f8);--ion-tabbar-md-background-color-focused:var(--ion-tabbar-background-color-focused, #dadada);--ion-tabbar-md-border-color:rgba(0, 0, 0, var(--ion-alpha-md-border-low, var(--ion-alpha-border-low, 0.07)));--ion-tabbar-md-text-color:var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));--ion-tabbar-md-text-color-active:var(--ion-tabbar-text-color-active, #488aff);--ion-toolbar-md-background-color:var(--ion-toolbar-background-color, #f8f8f8);--ion-toolbar-md-border-color:var(--ion-border-md-color, var(--ion-border-color, #c1c4cd));--ion-toolbar-md-color-active:#4a4a4a;--ion-toolbar-md-color-inactive:var(--ion-toolbar-color-inactive, #8c8c8c);--ion-toolbar-md-text-color:#424242;--ion-item-md-background-color:var(--ion-item-background-color, var(--ion-background-color, #fff));--ion-item-md-background-color-active:#f1f1f1;--ion-item-md-border-color:#dedede;--ion-item-md-text-color:var(--ion-item-text-color, var(--ion-text-color, #000))}.modal-wrapper-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-md{border-radius:2px;overflow:hidden;-webkit-box-shadow:0 28px 48px rgba(0,0,0,.4);box-shadow:0 28px 48px rgba(0,0,0,.4)}}"}static get styleMode(){return"md"}}const y="modal-wrapper";class b{constructor(){this.modals=new Map}modalWillPresent(e){this.modals.set(e.target.overlayId,e.target)}modalWillDismiss(e){this.modals.delete(e.target.overlayId)}escapeKeyUp(){d(this.modals)}create(e){return n(document.createElement("ion-modal"),e)}dismiss(e,t,o=-1){return r(e,t,this.modals,o)}getTop(){return l(this.modals)}static get is(){return"ion-modal-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}export{u as IonModal,b as IonModalController};