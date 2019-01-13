/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("ua7xaoot",["exports","./chunk1.js","./chunk6.js","./chunk4.js"],function(e,t,r,o){var n=window.Ionic.h,i=function(){function e(){this.custom=!0}return e.prototype.componentWillLoad=function(){this.custom=this.el.childElementCount>0},e.prototype.hostData=function(){return{class:{"reorder-custom":this.custom}}},e.prototype.render=function(){return this.custom?n("slot",null):n("ion-icon",{class:"reorder-icon",name:"reorder"})},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder[slot]{display:none;line-height:0}.reorder-enabled .reorder{display:block;cursor:grab;cursor:-webkit-grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected .reorder{cursor:grabbing;cursor:-webkit-grabbing}.reorder-selected{position:relative;z-index:100;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;-webkit-transition:none!important;transition:none!important}.reorder-icon{-webkit-transform:translate3d(160%,0,0);transform:translate3d(160%,0,0);display:block;font-size:1.3em;-webkit-transition:-webkit-transform 140ms ease-in;transition:-webkit-transform 140ms ease-in;transition:transform 140ms ease-in;transition:transform 140ms ease-in,-webkit-transform 140ms ease-in}.reorder-icon svg{min-width:1em}.reorder[slot=start] .reorder-icon{-webkit-transform:translate3d(-160%,0,0);transform:translate3d(-160%,0,0)}.reorder-visible .reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.item .reorder[slot]{margin-top:0;margin-bottom:0}:root{--ion-alpha-activated:0.1;--ion-alpha-border-low:0.1;--ion-alpha-border-medium:0.2;--ion-alpha-border-high:0.3;--ion-alpha-disabled:0.5;--ion-alpha-focused:0.25;--ion-alpha-hover:0.1;--ion-alpha-lowest:0.1;--ion-alpha-low:0.25;--ion-alpha-medium:0.5;--ion-alpha-high:0.8;--ion-alpha-highest:0.9;--ion-background-color:#fff;--ion-text-color:#000;--ion-placeholder-text-color:#999;--ion-background-color-rgb:255,255,255;--ion-text-color-rgb:0,0,0;--ion-background-color-step-50:#f2f2f2;--ion-background-color-step-100:#e6e6e6;--ion-background-color-step-150:#d9d9d9;--ion-background-color-step-200:#cccccc;--ion-background-color-step-250:#bfbfbf;--ion-background-color-step-300:#b3b3b3;--ion-background-color-step-350:#a6a6a6;--ion-background-color-step-400:#999999;--ion-background-color-step-450:#8c8c8c;--ion-background-color-step-500:gray;--ion-background-color-step-550:#737373;--ion-background-color-step-600:#666666;--ion-background-color-step-650:#595959;--ion-background-color-step-700:#4d4d4d;--ion-background-color-step-750:#404040;--ion-background-color-step-800:#333333;--ion-background-color-step-850:#262626;--ion-background-color-step-900:#1a1a1a;--ion-background-color-step-950:#0d0d0d;--ion-background-color-step-1000:black;--ion-text-color-step-50:#0d0d0d;--ion-text-color-step-100:#1a1a1a;--ion-text-color-step-150:#262626;--ion-text-color-step-200:#333333;--ion-text-color-step-250:#404040;--ion-text-color-step-300:#4d4d4d;--ion-text-color-step-350:#595959;--ion-text-color-step-400:#666666;--ion-text-color-step-450:#737373;--ion-text-color-step-500:gray;--ion-text-color-step-550:#8c8c8c;--ion-text-color-step-600:#999999;--ion-text-color-step-650:#a6a6a6;--ion-text-color-step-700:#b3b3b3;--ion-text-color-step-750:#bfbfbf;--ion-text-color-step-800:#cccccc;--ion-text-color-step-850:#d9d9d9;--ion-text-color-step-900:#e6e6e6;--ion-text-color-step-950:#f2f2f2;--ion-text-color-step-1000:white;--ion-backdrop-color:#000;--ion-border-color:#b2b2b2;--ion-box-shadow-color:#000;--ion-overlay-background-color:#fafafa;--ion-tabbar-background-color:#f8f8f8;--ion-tabbar-background-color-focused:#dadada;--ion-tabbar-border-color:var(--ion-border-color, #b2b2b2);--ion-tabbar-text-color-active:#488aff;--ion-tabbar-text-color:#8c8c8c;--ion-toolbar-background-color:#f8f8f8;--ion-toolbar-border-color:var(--ion-border-color, #b2b2b2);--ion-toolbar-color-active:#4a4a4a;--ion-toolbar-color-inactive:#8c8c8c;--ion-toolbar-text-color:var(--ion-text-color, #000);--ion-item-background-color:var(--ion-background-color, #fff);--ion-item-background-color-active:var(--ion-background-color, #fff);--ion-item-border-color:#c8c7cc;--ion-item-text-color:var(--ion-text-color, #000);--ion-alpha-md-activated:var(--ion-alpha-activated, 0.1);--ion-alpha-md-border-low:0.07;--ion-alpha-md-border-medium:var(--ion-alpha-border-medium, 0.2);--ion-alpha-md-border-high:var(--ion-alpha-border-high, 0.3);--ion-alpha-md-disabled:var(--ion-alpha-disabled, 0.5);--ion-alpha-md-focused:0.1;--ion-alpha-md-hover:var(--ion-alpha-hover, 0.1);--ion-alpha-md-lowest:var(--ion-alpha-lowest, 0.1);--ion-alpha-md-low:var(--ion-alpha-low, 0.25);--ion-alpha-md-medium:var(--ion-alpha-medium, 0.5);--ion-alpha-md-high:var(--ion-alpha-high, 0.8);--ion-alpha-md-highest:var(--ion-alpha-highest, 0.9);--ion-background-md-color:#fff;--ion-text-md-color:#000;--ion-placeholder-text-md-color:var(--ion-placeholder-text-color, #999);--ion-background-md-color-step-50:#f2f2f2;--ion-background-md-color-step-100:#e6e6e6;--ion-background-md-color-step-150:#d9d9d9;--ion-background-md-color-step-200:#cccccc;--ion-background-md-color-step-250:#bfbfbf;--ion-background-md-color-step-300:#b3b3b3;--ion-background-md-color-step-350:#a6a6a6;--ion-background-md-color-step-400:#999999;--ion-background-md-color-step-450:#8c8c8c;--ion-background-md-color-step-500:gray;--ion-background-md-color-step-550:#737373;--ion-background-md-color-step-600:#666666;--ion-background-md-color-step-650:#595959;--ion-background-md-color-step-700:#4d4d4d;--ion-background-md-color-step-750:#404040;--ion-background-md-color-step-800:#333333;--ion-background-md-color-step-850:#262626;--ion-background-md-color-step-900:#1a1a1a;--ion-background-md-color-step-950:#0d0d0d;--ion-background-md-color-step-1000:black;--ion-text-md-color-step-50:#0d0d0d;--ion-text-md-color-step-100:#1a1a1a;--ion-text-md-color-step-150:#262626;--ion-text-md-color-step-200:#333333;--ion-text-md-color-step-250:#404040;--ion-text-md-color-step-300:#4d4d4d;--ion-text-md-color-step-350:#595959;--ion-text-md-color-step-400:#666666;--ion-text-md-color-step-450:#737373;--ion-text-md-color-step-500:gray;--ion-text-md-color-step-550:#8c8c8c;--ion-text-md-color-step-600:#999999;--ion-text-md-color-step-650:#a6a6a6;--ion-text-md-color-step-700:#b3b3b3;--ion-text-md-color-step-750:#bfbfbf;--ion-text-md-color-step-800:#cccccc;--ion-text-md-color-step-850:#d9d9d9;--ion-text-md-color-step-900:#e6e6e6;--ion-text-md-color-step-950:#f2f2f2;--ion-text-md-color-step-1000:white;--ion-backdrop-md-color:var(--ion-backdrop-color, #000);--ion-border-md-color:#c1c4cd;--ion-box-shadow-md-color:var(--ion-box-shadow-color, #000);--ion-overlay-md-background-color:#fafafa;--ion-tabbar-md-background-color:var(--ion-tabbar-background-color, #f8f8f8);--ion-tabbar-md-background-color-focused:var(--ion-tabbar-background-color-focused, #dadada);--ion-tabbar-md-border-color:rgba(0, 0, 0, var(--ion-alpha-md-border-low, var(--ion-alpha-border-low, 0.07)));--ion-tabbar-md-text-color:var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));--ion-tabbar-md-text-color-active:var(--ion-tabbar-text-color-active, #488aff);--ion-toolbar-md-background-color:var(--ion-toolbar-background-color, #f8f8f8);--ion-toolbar-md-border-color:var(--ion-border-md-color, var(--ion-border-color, #c1c4cd));--ion-toolbar-md-color-active:#4a4a4a;--ion-toolbar-md-color-inactive:var(--ion-toolbar-color-inactive, #8c8c8c);--ion-toolbar-md-text-color:#424242;--ion-item-md-background-color:var(--ion-item-background-color, var(--ion-background-color, #fff));--ion-item-md-background-color-active:#f1f1f1;--ion-item-md-border-color:#dedede;--ion-item-md-text-color:var(--ion-item-text-color, var(--ion-text-color, #000))}.reorder-md .reorder-icon{font-size:1.8em;opacity:.3}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.selectedItemEl=null,this.cachedHeights=[],this.enabled=!1,this.iconVisible=!1,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(e){var t=this;e?(this.iconVisible=!1,setTimeout(function(){return t.enabled=!1},400)):(this.enabled=!0,this.dom.raf(function(){t.iconVisible=!0}))},e.prototype.componentDidLoad=function(){this.containerEl=this.el.querySelector("ion-gesture"),this.scrollEl=this.el.closest("ion-scroll"),this.disabled||this.disabledChanged(!1)},e.prototype.componentDidUnload=function(){this.onDragEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=function(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}return null}(t,this.containerEl);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onDragStart=function(e){var t=this.selectedItemEl=e.data,o=this.cachedHeights;o.length=0;var n=this.containerEl.children;if(n&&0!==n.length){for(var i=0,l=0;l<n.length;l++){var a=n[l];i+=a.offsetHeight,o.push(i),a.$ionIndex=l}var c=this.containerEl.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){var d=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=d.top+60,this.scrollElBottom=d.bottom-60}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=s(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add("reorder-selected"),r.hapticSelectionStart()}},e.prototype.onDragMove=function(e){var n=this.selectedItemEl;if(n){var i=this.autoscroll(e.currentY),l=this.containerTop-i,a=this.containerBottom-i,c=t.clamp(l,e.currentY,a),d=i+c-e.startY,h=c-l,u=this.itemIndexForTop(h);if(void 0!==u&&u!==this.lastToIndex){var p=s(n);this.lastToIndex=u,r.hapticSelectionChanged(),this.reorderMove(p,u)}n.style[o.CSS_PROP.transformProp]="translateY("+d+"px)"}},e.prototype.onDragEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var n=this.containerEl.children,i=this.lastToIndex,l=s(t),a=l<i?n[i+1]:n[i];this.containerEl.insertBefore(t,a);for(var c=n.length,d=o.CSS_PROP.transformProp,h=0;h<c;h++)n[h].style[d]="";var u=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove("reorder-selected"),e.selectedItemEl=null)};i===l?(t.style.transition="transform 200ms ease-in-out",setTimeout(u,200)):u(),r.hapticSelectionEnd()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,n=this.containerEl.children,i=o.CSS_PROP.transformProp,l=0;l<n.length;l++){var s=n[l].style,a="";l>e&&l<=t?a="translateY("+-r+"px)":l<e&&l>=t&&(a="translateY("+r+"px)"),s[i]=a}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-10:e>this.scrollElBottom&&(t=10),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":this.enabled,"reorder-list-active":this.activated,"reorder-visible":this.iconVisible}}},e.prototype.render=function(){return n("ion-gesture",Object.assign({},{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:this.disabled,disableScroll:!0,gestureName:"reorder",gesturePriority:30,type:"pan",direction:"y",threshold:0,attachTo:"window"}),n("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder-group"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dom:{context:"dom"},el:{elementRef:!0},enabled:{state:!0},iconVisible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-group>ion-gesture{display:block}.reorder-list-active ion-gesture>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}"},enumerable:!0,configurable:!0}),e}();function s(e){return e.$ionIndex}e.IonReorder=i,e.IonReorderGroup=l,Object.defineProperty(e,"__esModule",{value:!0})});