/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("1a0o2y74",["exports","./chunk1.js","./chunk6.js","./chunk4.js"],function(e,t,r,o){var n=window.Ionic.h,i=function(){function e(){this.custom=!0}return e.prototype.componentWillLoad=function(){this.custom=this.el.childElementCount>0},e.prototype.hostData=function(){return{class:{"reorder-custom":this.custom}}},e.prototype.render=function(){return this.custom?n("slot",null):n("ion-icon",{class:"reorder-icon",name:"reorder"})},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder[slot]{display:none;line-height:0}.reorder-enabled .reorder{display:block;cursor:grab;cursor:-webkit-grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected .reorder{cursor:grabbing;cursor:-webkit-grabbing}.reorder-selected{position:relative;z-index:100;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;-webkit-transition:none!important;transition:none!important}.reorder-icon{-webkit-transform:translate3d(160%,0,0);transform:translate3d(160%,0,0);display:block;font-size:1.3em;-webkit-transition:-webkit-transform 140ms ease-in;transition:-webkit-transform 140ms ease-in;transition:transform 140ms ease-in;transition:transform 140ms ease-in,-webkit-transform 140ms ease-in}.reorder-icon svg{min-width:1em}.reorder[slot=start] .reorder-icon{-webkit-transform:translate3d(-160%,0,0);transform:translate3d(-160%,0,0)}.reorder-visible .reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.item .reorder[slot]{margin-top:0;margin-bottom:0}.reorder-ios .reorder-icon{font-size:2em;opacity:2em}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.selectedItemEl=null,this.cachedHeights=[],this.enabled=!1,this.iconVisible=!1,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(e){var t=this;e?(this.iconVisible=!1,setTimeout(function(){return t.enabled=!1},400)):(this.enabled=!0,this.dom.raf(function(){t.iconVisible=!0}))},e.prototype.componentDidLoad=function(){this.containerEl=this.el.querySelector("ion-gesture"),this.scrollEl=this.el.closest("ion-scroll"),this.disabled||this.disabledChanged(!1)},e.prototype.componentDidUnload=function(){this.onDragEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=function(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}return null}(t,this.containerEl);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onDragStart=function(e){var t=this.selectedItemEl=e.data,o=this.cachedHeights;o.length=0;var n=this.containerEl.children;if(n&&0!==n.length){for(var i=0,l=0;l<n.length;l++){var a=n[l];i+=a.offsetHeight,o.push(i),a.$ionIndex=l}var c=this.containerEl.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){var d=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=d.top+60,this.scrollElBottom=d.bottom-60}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=s(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add("reorder-selected"),r.hapticSelectionStart()}},e.prototype.onDragMove=function(e){var n=this.selectedItemEl;if(n){var i=this.autoscroll(e.currentY),l=this.containerTop-i,a=this.containerBottom-i,c=t.clamp(l,e.currentY,a),d=i+c-e.startY,h=c-l,u=this.itemIndexForTop(h);if(void 0!==u&&u!==this.lastToIndex){var p=s(n);this.lastToIndex=u,r.hapticSelectionChanged(),this.reorderMove(p,u)}n.style[o.CSS_PROP.transformProp]="translateY("+d+"px)"}},e.prototype.onDragEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var n=this.containerEl.children,i=this.lastToIndex,l=s(t),a=l<i?n[i+1]:n[i];this.containerEl.insertBefore(t,a);for(var c=n.length,d=o.CSS_PROP.transformProp,h=0;h<c;h++)n[h].style[d]="";var u=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove("reorder-selected"),e.selectedItemEl=null)};i===l?(t.style.transition="transform 200ms ease-in-out",setTimeout(u,200)):u(),r.hapticSelectionEnd()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,n=this.containerEl.children,i=o.CSS_PROP.transformProp,l=0;l<n.length;l++){var s=n[l].style,a="";l>e&&l<=t?a="translateY("+-r+"px)":l<e&&l>=t&&(a="translateY("+r+"px)"),s[i]=a}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-10:e>this.scrollElBottom&&(t=10),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":this.enabled,"reorder-list-active":this.activated,"reorder-visible":this.iconVisible}}},e.prototype.render=function(){return n("ion-gesture",Object.assign({},{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:this.disabled,disableScroll:!0,gestureName:"reorder",gesturePriority:30,type:"pan",direction:"y",threshold:0,attachTo:"window"}),n("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder-group"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dom:{context:"dom"},el:{elementRef:!0},enabled:{state:!0},iconVisible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-group>ion-gesture{display:block}.reorder-list-active ion-gesture>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}"},enumerable:!0,configurable:!0}),e}();function s(e){return e.$ionIndex}e.IonReorder=i,e.IonReorderGroup=l,Object.defineProperty(e,"__esModule",{value:!0})});