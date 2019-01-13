/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{openURL as t}from"./chunk2.js";import{assert as i,isDef as n,isBlank as s,isNumber as r}from"./chunk1.js";class o{hostData(){return{class:{"show-back-button":!!this.defaultHref}}}onClick(e){const i=this.el.closest("ion-nav");i&&i.canGoBack()?(e.preventDefault(),i.pop()):this.defaultHref&&t(this.defaultHref,e,!0)}render(){const t=this.icon||this.config.get("backButtonIcon","arrow-back"),i=this.text||this.config.get("backButtonText","ios"===this.mode?"Back":"");return e("button",{class:"back-button-inner",onClick:e=>this.onClick(e)},t&&e("ion-icon",{name:t}),i&&e("span",{class:"button-text"},i),"md"===this.mode&&e("ion-ripple-effect",null))}static get is(){return"ion-back-button"}static get host(){return{theme:"back-button"}}static get properties(){return{config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:"Any",attr:"mode"},text:{type:"Any",attr:"text"}}}static get style(){return".back-button{display:none}.back-button.can-back-back,.back-button.show-back-button{display:inline-block}.back-button button{text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:inline-block;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-font-kerning:none;font-kerning:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-smoothing:antialiased;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.back-button .button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.back-button-md .back-button-inner{margin:2px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.back-button-md .back-button-inner.activated{opacity:.4}.back-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}"}static get styleMode(){return"md"}}class a{constructor(e,t){this.component=e,this.data=t,this._isHidden=!1,this._state=c,this.isOverlay=!1}init(){if(this.element)return;const e=this.component;this.element="string"==typeof e?document.createElement(e):e,this.element.classList.add("ion-page"),this.data&&Object.assign(this.element,this.data)}_setNav(e){this._nav=e}getNav(){return this._nav}getTransitionName(e){return this._nav&&this._nav.config&&this._nav.config.get("pageTransition")||"md"}setLeavingOpts(e){this._leavingOpts=e}enableBack(){return!!this._nav&&!!this._nav.getPrevious(this)}get name(){const e=this.component;return"string"==typeof e?e:e.tagName?e.tagName:this.element?this.element.tagName:"unknown"}_domShow(e){this.element&&e===this._isHidden&&(this._isHidden=!e,e?this.element.removeAttribute("hidden"):this.element.setAttribute("hidden",""))}getZIndex(){return this._zIndex}_setZIndex(e){if(e!==this._zIndex){this._zIndex=e;const t=this.element;t&&(t.style.zIndex=e+"")}}_preLoad(){this._state,this._lifecycle("PreLoad")}_willLoad(){this._state,this._lifecycle("WillLoad")}_didLoad(){this._state,this._lifecycle("DidLoad")}_willEnter(){this._state,this._detached&&(this._detached=!1),this._lifecycle("WillEnter")}_didEnter(){this._state,this._lifecycle("DidEnter")}_willLeave(e){this._lifecycle("WillLeave")}_didLeave(){this._lifecycle("DidLeave"),this._detached||(this._detached=!0)}_willUnload(){this._lifecycle("WillUnload")}_destroy(){this._state;const e=this.element;e&&e.remove(),this._nav=this._cntDir=this._leavingOpts=null,this._state=_}get index(){return this._nav?this._nav.indexOf(this):-1}_lifecycleTest(e){return Promise.resolve(!0)}_lifecycle(e){const t=new CustomEvent(`ionView${e}`,{bubbles:!1,cancelable:!1});this.element.dispatchEvent(t)}}function l(e){return!!(e&&e._didLoad&&e._willUnload)}function d(e,t){return e?l(e)?e:new a(e,t):null}function h(e){return void 0!==e&&null!==e}const c=1,u=2,m=3,_=4,g=100,v="back",p="forward";class w{constructor(e,t,i,n,s){this.animationCtrl=e,this.builder=t,this.enteringView=i,this.leavingView=n,this.opts=s}registerStart(e){this._trnsStart=e}init(){return this.animationCtrl.create(this.builder,null,this.opts).then(e=>{this.ani=e})}start(){this._trnsStart&&this._trnsStart(),this._trnsStart=null,this.parent&&this.parent.start()}destroy(){this.ani&&this.ani.destroy(),this.ani=this._trnsStart=null}}const f=500,b="cubic-bezier(0.36,0.66,0.04,1)",y="opacity",T="transform",S="translateX",k="0%",C=.8,I="can-back-back";function E(e,t,i){const s=i.isRTL,r=s?"-99.5%":"99.5%",o=s?"31%":"-31%",a=i.enteringView?i.enteringView.element:void 0,l=i.leavingView?i.leavingView.element:void 0,d=i.nav,h=new e;if(h.duration(n(i.duration)?i.duration:f),h.easing(n(i.easing)?i.easing:b),h.addElement(a),h.beforeRemoveClass("hide-page"),l&&d){const t=new e;t.addElement(d.el).duringAddClass("show-decor"),h.add(t)}const c="back"===i.direction;if(a){const t=a.querySelector(":scope > ion-content"),n=a.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),l=a.querySelector(":scope > ion-header > ion-toolbar"),d=new e;if(t||l||0!==n.length?(d.addElement(t),d.addElement(n)):d.addElement(a.querySelector(":scope > ion-page, :scope > ion-nav, :scope > ion-tabs")),h.add(d),c?d.beforeClearStyles([y]).fromTo(S,o,k,!0).fromTo(y,C,1,!0):d.beforeClearStyles([y]).fromTo(S,r,k,!0),l){const t=new e;t.addElement(l),h.add(t);const n=new e;n.addElement(l.querySelector("ion-title"));const a=new e;a.addElement(l.querySelectorAll("ion-buttons,[menuToggle]"));const d=new e;d.addElement(l.querySelector(".toolbar-background"));const u=new e;if(u.addElement(l.querySelector("ion-back-button")),t.add(n).add(a).add(d).add(u),n.fromTo(y,.01,1,!0),a.fromTo(y,.01,1,!0),c)n.fromTo(S,o,k,!0),i.enteringView.enableBack()&&u.beforeAddClass(I).fromTo(y,.01,1,!0);else if(n.fromTo(S,r,k,!0),d.beforeClearStyles([y]).fromTo(y,.01,1,!0),i.enteringView.enableBack()){u.beforeAddClass(I).fromTo(y,.01,1,!0);const i=new e;i.addElement(l.querySelector("ion-back-button .button-text")),i.fromTo(S,s?"-100px":"100px","0px"),t.add(i)}else u.beforeRemoveClass(I)}}if(l){const t=new e;t.addElement(l.querySelector(":scope > ion-content")),t.addElement(l.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),h.add(t),c?t.beforeClearStyles([y]).fromTo(S,k,s?"-100%":"100%"):t.fromTo(S,k,o,!0).fromTo(y,1,C,!0);const i=l.querySelector(":scope > ion-header > ion-toolbar");if(i){const t=new e;t.addElement(i);const n=new e;n.addElement(i.querySelector("ion-title"));const r=new e;r.addElement(i.querySelectorAll("ion-buttons,[menuToggle]"));const a=new e;a.addElement(i.querySelector(".toolbar-background"));const l=new e;if(l.addElement(i.querySelector("ion-back-button")),t.add(n).add(r).add(l).add(a),h.add(t),l.fromTo(y,.99,0,!0),n.fromTo(y,.99,0,!0),r.fromTo(y,.99,0,!0),c){n.fromTo(S,k,s?"-100%":"100%"),a.beforeClearStyles([y]).fromTo(y,1,.01,!0);const r=new e;r.addElement(i.querySelector("ion-back-button .button-text")),r.fromTo(S,k,(s?-115:115)+"px"),t.add(r)}else n.fromTo(S,k,o).afterClearStyles([T]),l.afterClearStyles([y]),n.afterClearStyles([y]),r.afterClearStyles([y])}}return Promise.resolve(h)}const V="translateY",x="40px",q="0px",B="can-back-back";function R(e,t,i){const s=i.enteringView?i.enteringView.element:void 0,r=i.leavingView?i.leavingView.element:void 0,o=A(s),a=new e;a.addElement(o),a.beforeRemoveClass("hide-page");const l="back"===i.direction;if(s){l?a.duration(n(i.duration)?i.duration:200).easing("cubic-bezier(0.47,0,0.745,0.715)"):(a.duration(n(i.duration)?i.duration:280).easing("cubic-bezier(0.36,0.66,0.04,1)"),a.fromTo(V,x,q,!0).fromTo("opacity",.01,1,!0));const t=o.querySelector("ion-toolbar");if(t){const n=new e;n.addElement(t),a.add(n);const s=new e;s.addElement(t.querySelector("ion-back-button")),a.add(s),i.enteringView.enableBack()?s.beforeAddClass(B):s.beforeRemoveClass(B)}}if(r&&l){a.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const t=new e;t.addElement(A(r)),a.add(t.fromTo(V,q,x).fromTo("opacity",1,0))}return Promise.resolve(a)}function A(e){if(e.classList.contains("ion-page"))return e;return e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}const P=new class{constructor(){this._ids=0,this._trns=new Map}getRootTrnsId(e){for(e=e.parent;e;){if(h(e._trnsId))return e._trnsId;e=e.parent}return null}nextId(){return this._ids++}register(e,t){t.trnsId=e;const i=this._trns.get(e);i?i.parent=t:this._trns.set(e,t)}destroy(e){const t=this._trns.get(e);t&&(t.destroy(),this._trns.delete(e))}};class L{constructor(){this._children=[],this._ids=-1,this._init=!1,this._queue=[],this.isTransitioning=!1,this._destroyed=!1,this._views=[],this._trnsId=null}rootChanged(){this.root&&(document.querySelector("ion-router")||this.setRoot(this.root))}componentWillLoad(){void 0===this.swipeBackEnabled&&(this.swipeBackEnabled="ios"===this.mode&&this.config.getBoolean("swipeBackEnabled",!0))}componentDidLoad(){this.id="n"+ ++N,this.rootChanged()}componentDidUnload(){this.destroy()}push(e,t,i,n){return this._queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:i},n)}insert(e,t,i,n,s){return this._queueTrns({insertStart:e,insertViews:[{page:t,params:i}],opts:n},s)}insertPages(e,t,i,n){return this._queueTrns({insertStart:e,insertViews:t,opts:i},n)}pop(e,t){return this._queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,i){const n={removeStart:-1,removeCount:-1,opts:t};return l(e)?(n.removeView=e,n.removeStart=1):r(e)&&(n.removeStart=e+1),this._queueTrns(n,i)}popToRoot(e,t){return this._queueTrns({removeStart:1,removeCount:-1,opts:e},t)}popAll(){const e=[];for(let t=this._views.length-1;t>=0;t--)e.push(this.pop(null));return Promise.all(e)}removeIndex(e,t=1,i,n){return this._queueTrns({removeStart:e,removeCount:t,opts:i},n)}removeView(e,t,i){return this._queueTrns({removeView:e,removeStart:0,removeCount:1,opts:t},i)}setRoot(e,t,i,n){return this.setPages([{page:e,params:t}],i,n)}setPages(e,t,i){return s(t)&&(t={}),!0!==t.animate&&(t.animate=!1),this._queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t={},i){const n=this.getActive();if(n&&n.component===e)return Promise.resolve({changed:!1});let s;const r=new Promise(e=>s=e),o={viewIsReady:()=>{let e;const t=new Promise(t=>e=t);return s({changed:!0,markVisible:e}),t}};return 1===i?this.push(e,t,o):-1===i?this.canGoBack()?this.pop(o):this.setRoot(e,t,Object.assign({},o,{direction:v,animate:!0})):this.setRoot(e,t,o),r}getRouteId(){const e=this.getActive();return e?{id:e.element.tagName,params:e.data}:null}getContainerEl(){const e=this.getActive();return e?e.element:null}getAllChildNavs(){return this._children.slice()}canGoBack(){const e=this.getActive();return!(!e||!e.enableBack())}getActive(){return this._views[this._views.length-1]}getByIndex(e){return this._views[e]}getPrevious(e){e||(e=this.getActive());const t=this._views,i=t.indexOf(e);return i>0?t[i-1]:null}getViews(){return this._views.slice()}getViewById(e){for(const t of this._views)if(t&&t.id===e)return t;return null}indexOf(e){return this._views.indexOf(e)}length(){return this._views.length}_queueTrns(e,t){const i=new Promise((t,i)=>{e.resolve=t,e.reject=i});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this._queue.push(e),this._nextTrns(),i}_success(e,t){if(null===this._queue)return void this._fireError("nav controller was destroyed",t);this._init=!0,this._trnsId=null,this.isTransitioning=!1,this._nextTrns();const i=document.querySelector("ion-router"),n=e.direction===v;i&&i.navChanged(n),this.ionNavChanged.emit({isPop:n}),t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringName,e.leavingName,e.direction),t.resolve(e.hasCompleted)}_failed(e,t){null!==this._queue?(this._trnsId=null,this._queue.length=0,this.isTransitioning=!1,this._nextTrns(),this._fireError(e,t)):this._fireError("nav controller was destroyed",t)}_fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this._destroyed?t.reject(e):t.resolve(!1)}_nextTrns(){if(this.isTransitioning)return!1;const e=this._queue.shift();if(!e)return!1;let t,i;return this._startTI(e).then(()=>{if(this._prepareViewControllers(e),i=this.getActive(),t=this._getEnteringView(e,i),!i&&!t)throw new Error("no views in the stack to be removed");e.requiresTransition=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&t!==i,t&&t._state===c&&this._viewInit(t)}).then(()=>this._postViewInit(t,i,e)).then(()=>this._transition(t,i,e)).then(t=>this._success(t,e)).catch(t=>this._failed(t,e)),!0}_waitUntilReady(e,t,i){const n=[];e&&n.push(O(e.element)),t&&n.push(O(t.element));const s=Promise.all(n);return i.opts.viewIsReady?s.then(i.opts.viewIsReady):s}_startTI(e){const t=this._views.length;if(h(e.removeView)){h(e.removeStart),h(e.removeCount);const t=this._views.indexOf(e.removeView);if(t<0)return Promise.reject("removeView was not found");e.removeStart+=t}return h(e.removeStart)&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t),this.isTransitioning=!0,Promise.resolve()}_prepareViewControllers(e){const t=e.insertViews;if(!t)return;t.length;const i=t.map(e=>l(e)?e:"page"in e?d(e.page,e.params):d(e,void 0)).filter(e=>null!==e);if(0===i.length)throw new Error("invalid views to insert");for(let e=0;e<i.length;e++){const t=i[e],n=t._nav;if(n&&n!==this)throw new Error("inserted view was already inserted");if(t._state===_)throw new Error("inserted view was already destroyed")}e.insertViews=i}_getEnteringView(e,t){const i=e.insertViews;if(i)return i[i.length-1];const n=e.removeStart;if(h(n)){const i=this._views,s=n+e.removeCount;for(let e=i.length-1;e>=0;e--){const r=i[e];if((e<n||e>=s)&&r!==t)return r}}return null}_postViewInit(e,t,i){i.resolve,i.reject;const n=i.opts||{},s=i.insertViews,r=i.removeStart,o=i.removeCount;let a;if(h(r)){a=[];for(let i=0;i<o;i++){const n=this._views[i+r];n&&n!==e&&n!==t&&a.push(n)}n.direction=n.direction||v}if(0===this._views.length+(s?s.length:0)-(o||0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){h(n.id)&&(e.id=n.id);for(let e=0;e<s.length;e++){const t=s[e];this._insertViewAt(t,i.insertStart+e)}i.enteringRequiresTransition&&(n.direction=n.direction||p)}if(a&&a.length>0){for(let e=0;e<a.length;e++){const t=a[e];t._willLeave(!0),t._didLeave(),t._willUnload()}for(let e=0;e<a.length;e++)this._destroyView(a[e])}i.requiresTransition&&!n.animation&&(n.animation=h(i.removeStart)?(t||e).getTransitionName(n.direction):(e||t).getTransitionName(n.direction)),i.opts=n}_viewInit(e){e._state,e._state=u,e.init(),e._preLoad()}_viewAttachToDOM(e){e._state,e._willLoad(),this.el.appendChild(e.element),e._state=m,e._didLoad()}_transition(e,t,i){if(!i.requiresTransition)return Promise.resolve({hasCompleted:!0,requiresTransition:!1});const n=i.opts;this._trnsId=P.getRootTrnsId(this),null===this._trnsId&&(this._trnsId=P.nextId());const s={animation:n.animation,direction:n.direction,duration:!1===n.animate?0:n.duration,easing:n.easing,isRTL:"rtl"===document.dir,ev:n.ev,enteringView:e,leavingView:t,nav:this},r="ios"===this.mode?E:R,o=new w(this.animationCtrl,r,e,t,s);P.register(this._trnsId,o),this._sbTrns&&this._sbTrns.destroy(),this._sbTrns=null,!o.parent&&n.progressAnimation&&(this._sbTrns=o);const a=new Promise(e=>o.registerStart(e)).then(()=>this._waitUntilReady(e,t,i)).then(()=>this._transitionInit(o,e,t,n)).then(()=>this._transitionStart(o,e,t,n));return e&&e._state===u&&this._viewAttachToDOM(e),o.start(),a}_transitionInit(e,t,i,n){return this.isTransitioning,this._trnsId=null,function(e,t,i,n){t&&((i=i||e.getPrevious(t))&&h(i._zIndex)?n===v?t._setZIndex(i._zIndex-1):t._setZIndex(i._zIndex+1):t._setZIndex(g))}(this,t,i,n.direction),t&&t._domShow(!0),i&&i._domShow(!0),e.init()}_transitionStart(e,t,i,n){this.isTransitioning;const s=!this._init&&1===this._views.length,r=!this.config.getBoolean("animate",!0);(s||r)&&(n.animate=!1),!1===n.animate&&e.ani.duration(0),e.ani.beforeAddRead(this._viewsWillLifecycles.bind(this,t,i));const o=new Promise(t=>{e.ani.onFinish(t)});return e.ani.isRoot()&&(n.progressAnimation?e.ani.progressStart():e.ani.play()),o.then(()=>this._transitionFinish(e,n))}_transitionFinish(e,t){const i=e.ani.hasCompleted,n=e.enteringView,s=e.leavingView;let r,o;return i?(n&&(r=n.name,n._didEnter()),s&&(o=s.name,s._didLeave()),this._cleanup(n)):this._cleanup(s),e.ani.isRoot()&&(P.destroy(e.trnsId),this.isTransitioning=!1),{hasCompleted:i,requiresTransition:!0,enteringName:r,leavingName:o,direction:t.direction}}_viewsWillLifecycles(e,t){if(e||t){if(t){const i=!e||t.index>e.index;t._willLeave(i)}e&&e._willEnter()}}_insertViewAt(e,t){const i=this._views.indexOf(e);i>-1?(e._nav,this._views.splice(t,0,this._views.splice(i,1)[0])):(e._nav,e._setNav(this),this._ids++,e.id||(e.id=`${this.id}-${this._ids}`),this._views.splice(t,0,e))}_removeView(e){e._state===m||e._state;const t=this._views,i=t.indexOf(e);i>=0&&t.splice(i,1)}_destroyView(e){e._destroy(),this._removeView(e)}_cleanup(e){if(!this._destroyed){const t=this._views.indexOf(e),i=this._views;let n,s,r=!1;for(s=i.length-1;s>=0;s--)n=i[s],s>t?(n._willUnload(),this._destroyView(n)):s<t&&n._domShow(!1),n._zIndex<=0&&(r=!0);if(r)for(s=0;s<i.length;s++)(n=i[s])._setZIndex(n._zIndex+g+1)}}destroy(){const e=this._views;let t;for(let i=0;i<e.length;i++)(t=e[i])._willUnload(),t._destroy();this._sbTrns&&this._sbTrns.destroy(),this._queue=this._views=this._sbTrns=null,this.parent&&this.parent.unregisterChildNav&&this.parent.unregisterChildNav(this),this._destroyed=!0}swipeBackStart(){if(this.isTransitioning||this._queue.length>0)return;const e={direction:v,progressAnimation:!0};this._queueTrns({removeStart:-1,removeCount:1,opts:e},null)}swipeBackProgress(e){if(this._sbTrns){this.isTransitioning=!0;const t=e.deltaX/window.innerWidth;this._sbTrns.ani.progressStep(t)}}swipeBackEnd(e){if(this._sbTrns){const t=e.deltaX,i=window.innerWidth,n=t/i,s=e.velocityX,r=i/2,o=s>=0&&(s>.2||e.deltaX>r),a=(o?1-n:n)*i;let l=0;if(a>5){const e=a/Math.abs(s);l=Math.min(e,300)}this._sbTrns.ani.progressEnd(o,n,l)}}canSwipeBack(){return this.swipeBackEnabled&&0===this._children.length&&!this.isTransitioning&&this.canGoBack()}render(){const t=[];return this.swipeBackEnabled&&t.push(e("ion-gesture",{canStart:this.canSwipeBack.bind(this),onStart:this.swipeBackStart.bind(this),onMove:this.swipeBackProgress.bind(this),onEnd:this.swipeBackEnd.bind(this),gestureName:"goback-swipe",gesturePriority:10,type:"pan",direction:"x",threshold:10,attachTo:"body"})),"ios"===this.mode&&t.push(e("div",{class:"nav-decor"})),t.push(e("slot",null)),t}static get is(){return"ion-nav"}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},dom:{context:"dom"},el:{elementRef:!0},getActive:{method:!0},getAllChildNavs:{method:!0},getByIndex:{method:!0},getContainerEl:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},getViewById:{method:!0},getViews:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popAll:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},removeIndex:{method:!0},removeView:{method:!0},root:{type:"Any",attr:"root",watchCallbacks:["rootChanged"]},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeBackEnabled:{type:Boolean,attr:"swipe-back-enabled",mutable:!0}}}static get events(){return[{name:"ionNavChanged",method:"ionNavChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".hide,[hidden],template{display:none!important}.sticky{position:-webkit-sticky;position:sticky;top:0}.click-block{display:none}.click-block-enabled{left:0;right:0;top:0;bottom:0;-webkit-transform:translate3d(0,-100%,0) translateY(1px);transform:translate3d(0,-100%,0) translateY(1px);position:absolute;z-index:99999;display:block;opacity:0;contain:strict}.click-block-active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}ion-nav{top:0;position:absolute;z-index:0;overflow:hidden;width:100%;height:100%;contain:layout size style}.nav-decor{display:none}.show-decor>.nav-decor{left:0;top:0;position:absolute;z-index:0;display:block;width:100%;height:100%;background:#000;pointer-events:none}"}}let N=-1;function O(e){return e?e.componentOnReady?e.componentOnReady():Promise.all(Array.from(e.children).map(O)):Promise.resolve()}export{o as IonBackButton,L as IonNav};