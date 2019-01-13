/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("jmrsak12",["exports","./chunk1.js","./chunk2.js","./chunk3.js"],function(t,e,o,n){var i=window.Ionic.h;function s(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","-100%","10px");break;case"middle":var r=Math.floor(e.clientHeight/2-s.clientHeight/2);s.style.top=r+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","-10px")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function r(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","10px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","-10px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function a(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":var r=Math.floor(e.clientHeight/2-s.clientHeight/2);s.style.top=r+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function l(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}var c=function(){function t(){this.presented=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.present=function(){var t=this;if(this.presented)return Promise.reject("overlay already presented");this.presented=!0,this.ionToastWillPresent.emit();var e=this.enterAnimation||this.config.get("toastEnter","ios"===this.mode?s:a);return this.playAnimation(e).then(function(){t.ionToastDidPresent.emit(),t.duration&&setTimeout(function(){return t.dismiss()},t.duration)})},t.prototype.dismiss=function(t,o){var n=this;if(!this.presented)return Promise.reject("overlay is not presented");this.presented=!1,this.ionToastWillDismiss.emit({data:t,role:o});var i=this.leaveAnimation||this.config.get("toastLeave","ios"===this.mode?r:l);return this.playAnimation(i).then(function(){return n.ionToastDidDismiss.emit({data:t,role:o}),e.domControllerAsync(n.dom.write,function(){n.el.parentNode.removeChild(n.el)})})},t.prototype.playAnimation=function(t){return n.overlayAnimation(this,t,this.willAnimate,this.el,this.position)},t.prototype.wrapperClass=function(){var t;return(t={"toast-wrapper":!0})["toast-"+(this.position?this.position:"bottom")]=!0,t},t.prototype.hostData=function(){var t=this.translucent?o.createThemedClasses(this.mode,this.color,"toast-translucent"):{};return{class:Object.assign({},t,o.getClassMap(this.cssClass))}},t.prototype.render=function(){var t=this;return i("div",{class:this.wrapperClass()},i("div",{class:"toast-container"},this.message?i("div",{class:"toast-message"},this.message):null,this.showCloseButton?i("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:function(){return t.dismiss()}},this.closeButtonText||"Close"):null))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"toast"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dismissOnPageChange:{type:Boolean,attr:"dismiss-on-page-change"},dom:{context:"dom"},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"ionToastDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"ionToastWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"ionToastWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"ionToastDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.toast-ios{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;position:absolute;z-index:10;display:block;max-width:700px;background:var(--ion-background-ios-color-step-50,var(--ion-background-color-step-50,#f2f2f2))}.toast-translucent-ios .toast-wrapper{background:rgba(255,255,255,var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)));backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-ios .toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px;font-size:14px;color:var(--ion-text-ios-color-step-150,var(--ion-text-color-step-150,#262626))}.toast-ios .toast-button{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(){this.toasts=new Map}return t.prototype.toastWillPresent=function(t){this.toasts.set(t.target.overlayId,t.target)},t.prototype.toastWillDismiss=function(t){this.toasts.delete(t.target.overlayId)},t.prototype.escapeKeyUp=function(){n.removeLastOverlay(this.toasts)},t.prototype.create=function(t){return n.createOverlay(document.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return void 0===o&&(o=-1),n.dismissOverlay(t,e,this.toasts,o)},t.prototype.getTop=function(){return n.getTopOverlay(this.toasts)},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();t.IonToast=c,t.IonToastController=d,Object.defineProperty(t,"__esModule",{value:!0})});