/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("jaznpxa4",["exports","./chunk2.js"],function(t,e){var n=window.Ionic.h,o=function(){function t(){this.loaded=!1,this.init=!1,this.active=!1,this.badgeStyle="default",this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}return t.prototype.selectedChanged=function(t){t&&this.ionSelect.emit()},t.prototype.componentWillLoad=function(){},t.prototype.getTabId=function(){return this.name?this.name:"string"==typeof this.component?this.component:null},t.prototype.setActive=function(){var t=this;return this.prepareLazyLoaded().then(function(){t.active=!0})},t.prototype.prepareLazyLoaded=function(){return!this.loaded&&this.component?(this.loaded=!0,t=this.el,e=this.component,(n=document.createElement(e)).classList.add("ion-page"),t.appendChild(n),n.componentOnReady?n.componentOnReady():Promise.resolve(n)):Promise.resolve();var t,e,n},t.prototype.hostData=function(){return{"aria-labelledby":this.btnId,role:"tabpanel",hidden:!this.active,class:{"ion-page":!this.component}}},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge"},badgeStyle:{type:String,attr:"badge-style"},btnId:{type:String,attr:"btn-id"},component:{type:"Any",attr:"component"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},init:{state:!0},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",mutable:!0,watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show"},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-tab{left:0;top:0;position:absolute;width:100%;height:100%}"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){this.keyFocus=!1,this.selected=!1}return t.prototype.componentDidLoad=function(){this.ionTabButtonDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionTabButtonDidUnload.emit()},t.prototype.onClick=function(t){this.tab.disabled||this.ionTabbarClick.emit(this.tab),t.stopPropagation(),t.preventDefault()},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1},t.prototype.hostData=function(){var t=this.selected,e=this.tab,n=!!e.title,o=!!e.icon,i=n&&!o,a=o&&!n,r=!!e.badge;return{role:"tab",id:e.btnId,"aria-selected":t,hidden:!e.show,class:{"tab-selected":t,"has-title":n,"has-icon":o,"has-title-only":i,"has-icon-only":a,"has-badge":r,"tab-btn-disabled":e.disabled,focused:this.keyFocus}}},t.prototype.render=function(){var t=this.tab,e=t.href||"#";return[n("a",{href:e,class:"tab-cover",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},t.icon&&n("ion-icon",{class:"tab-button-icon",name:t.icon}),t.title&&n("span",{class:"tab-button-text"},t.title),t.badge&&n("ion-badge",{class:"tab-badge",color:t.badgeStyle},t.badge),"md"===this.mode&&n("ion-ripple-effect",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-tab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},keyFocus:{state:!0},selected:{type:Boolean,attr:"selected"},tab:{type:"Any",attr:"tab"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidLoad",method:"ionTabButtonDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidUnload",method:"ionTabButtonDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-tab-button{margin:0;text-align:center;border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:0;display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;border:0;text-decoration:none;background:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-tab-button a{text-decoration:none}.tab-cover{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border:0;color:inherit;background:0 0;cursor:pointer}.tab-cover:active,.tab-cover:focus{outline:0}.tab-btn-disabled{pointer-events:none}.tab-btn-disabled>.tab-cover{opacity:.4}.tab-button-icon,.tab-button-text{display:none;overflow:hidden;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.has-icon .tab-button-icon,.has-title .tab-button-text{display:block}.has-title-only .tab-button-text{white-space:normal}.layout-icon-start .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.layout-icon-end .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom .tab-button{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end .tab-button,.layout-icon-hide .tab-button,.layout-icon-start .tab-button,.layout-title-hide .tab-button{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide .tab-button-icon,.layout-title-hide .tab-button-text{display:none}.tab-badge{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon .tab-badge{right:calc(50% - 30px)}.layout-icon-bottom .tab-badge,.layout-icon-end .tab-badge,.layout-icon-start .tab-badge{right:calc(50% - 50px)}.tab-button-ios{max-width:240px;font-size:10px;color:var(--ion-tabbar-ios-text-color,var(--ion-tabbar-text-color,#8c8c8c));fill:var(--ion-tabbar-ios-text-color,var(--ion-tabbar-text-color,#8c8c8c))}.tab-button-ios.focused{background:var(--ion-tabbar-ios-background-color-focused,var(--ion-tabbar-background-color-focused,#dadada))}.tab-button-ios .tab-cover{padding:0 2px}.enable-hover .tab-button-ios:hover,.tab-button-ios.tab-selected{color:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)));fill:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)))}.tab-button-ios .tab-button-text{margin-top:0;margin-bottom:1px;min-height:11px}.tab-button-ios.has-title-only .tab-button-text{font-size:12px}.tab-button-ios .tab-button-icon{margin-top:4px;font-size:30px}.tabbar-ios .tab-button-icon::before{vertical-align:top}.layout-icon-end .tab-button-ios .tab-button-text,.layout-icon-hide .tab-button-ios .tab-button-text,.layout-icon-start .tab-button-ios .tab-button-text,.tab-button-ios.has-title-only .tab-button-text{margin:2px 0;font-size:14px;line-height:1.1}.layout-icon-end .tab-button-ios ion-icon,.layout-icon-start .tab-button-ios ion-icon{margin-top:2px;margin-bottom:1px;min-width:24px;height:26px;font-size:24px}.layout-title-hide .tab-button-ios ion-icon{margin:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this.canScrollLeft=!1,this.canScrollRight=!1,this.hidden=!1,this.placement="bottom",this.layout="icon-top",this.highlight=!1,this.translucent=!1}return t.prototype.selectedTabChanged=function(){this.scrollable&&this.scrollToSelectedButton(),this.highlight&&this.updateHighlight()},t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.hidden=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.placement&&(this.hidden=!0)},t.prototype.onResize=function(){this.highlight&&this.updateHighlight()},t.prototype.onTabButtonLoad=function(){this.scrollable&&this.updateBoundaries(),this.highlight&&this.updateHighlight()},t.prototype.analyzeTabs=function(){var t,e,n=Array.from(document.querySelectorAll("ion-tab-button")),o=this.scrollEl.scrollLeft,i=this.scrollEl.clientWidth;return n.forEach(function(n){var a=n.offsetLeft,r=a+n.offsetWidth;a<o&&(t={tab:n,amount:a}),!e&&r>i+o&&(e={tab:n,amount:r-i})}),{previous:t,next:e}},t.prototype.getSelectedButton=function(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(function(t){return t.selected})},t.prototype.scrollToSelectedButton=function(){var t=this;this.dom.read(function(){var e=t.getSelectedButton();if(e){var n=t.scrollEl.scrollLeft,o=t.scrollEl.clientWidth,i=e.offsetLeft,a=i+e.offsetWidth,r=void 0;a>o+n?r=a-o:i<n&&(r=i),void 0!==r&&t.scrollEl.scrollToPoint(r,0,250).then(function(){t.updateBoundaries()})}})},t.prototype.scrollByTab=function(t){var e=this;this.dom.read(function(){var n=e.analyzeTabs(),o=n.previous,i=n.next,a="right"===t?i:o,r=a&&a.amount;a&&e.scrollEl.scrollToPoint(r,0,250).then(function(){e.updateBoundaries()})})},t.prototype.updateBoundaries=function(){this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth},t.prototype.updateHighlight=function(){var t=this;this.highlight&&this.dom.read(function(){var e=t.getSelectedButton(),n=t.el.querySelector("div.tabbar-highlight");e&&n&&(n.style.transform="translate3d("+e.offsetLeft+"px,0,0) scaleX("+e.offsetWidth+")")})},t.prototype.hostData=function(){var t,n=this.translucent?e.createThemedClasses(this.mode,this.color,"tabbar-translucent"):{};return{role:"tablist",class:Object.assign({},n,(t={},t["layout-"+this.layout]=!0,t["placement-"+this.placement]=!0,t["tabbar-hidden"]=this.hidden,t.scrollable=this.scrollable,t))}},t.prototype.render=function(){var t=this,o=this.selectedTab,i=this.highlight?n("div",{class:"animated tabbar-highlight"}):null,a=e.createThemedClasses(this.mode,this.color,"tab-button"),r=this.tabs.map(function(t){return n("ion-tab-button",{class:a,tab:t,selected:o===t})});return this.scrollable?[n("ion-button",{onClick:function(){return t.scrollByTab("left")},fill:"clear",class:{inactive:!this.canScrollLeft}},n("ion-icon",{name:"arrow-dropleft"})),n("ion-scroll",{forceOverscroll:!1,ref:function(e){return t.scrollEl=e}},r,i),n("ion-button",{onClick:function(){return t.scrollByTab("right")},fill:"clear",class:{inactive:!this.canScrollRight}},n("ion-icon",{name:"arrow-dropright"}))]:r.concat([i])},Object.defineProperty(t,"is",{get:function(){return"ion-tabbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"tabbar"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},dom:{context:"dom"},el:{elementRef:!0},hidden:{state:!0},highlight:{type:Boolean,attr:"highlight"},layout:{type:String,attr:"layout"},placement:{type:String,attr:"placement"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-tabbar{position:relative;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;width:100%}ion-tabbar.tabbar-hidden{display:none}ion-tabbar.placement-top{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.tabbar-highlight{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;position:absolute;display:block;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0)}.tabbar-highlight.animated{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top .tabbar-highlight{bottom:0}.placement-bottom .tabbar-highlight{top:0}ion-tabbar.scrollable ion-scroll{overflow:hidden}ion-tabbar.scrollable .scroll-inner{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}ion-tabbar.scrollable ion-button.inactive{visibility:hidden}.tabbar-ios{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;border-top:.55px solid var(--ion-tabbar-ios-border-color,rgba(0,0,0,var(--ion-alpha-ios-border-medium,var(--ion-alpha-border-medium,.2))));background-color:var(--ion-tabbar-ios-background-color,var(--ion-tabbar-background-color,#f8f8f8));contain:strict}.tabbar-ios.placement-top{border-top:0;border-bottom:.55px solid var(--ion-tabbar-ios-border-color,rgba(0,0,0,var(--ion-alpha-ios-border-medium,var(--ion-alpha-border-medium,.2))))}.tabbar-ios .tabbar-highlight{background:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)))}.tabbar-translucent-ios{background-color:var(--ion-tabbar-ios-translucent-background-color,rgba(248,248,248,var(--ion-alpha-ios-high,var(--ion-alpha-high,.8))));-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}.tabbar-ios-primary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));fill:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-ios-primary .tab-button{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-ios-primary .tab-button.focused{background:var(--ion-color-ios-primary-shade,var(--ion-color-primary-shade,#3171e0))}.tabbar-ios-primary .tab-button:hover:not(.disable-hover),.tabbar-ios-primary .tab-selected{font-weight:700;color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));fill:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-translucent-ios-primary{background-color:rgba(var(--ion-color-ios-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-secondary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));fill:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-ios-secondary .tab-button{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-ios-secondary .tab-button.focused{background:var(--ion-color-ios-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.tabbar-ios-secondary .tab-button:hover:not(.disable-hover),.tabbar-ios-secondary .tab-selected{font-weight:700;color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));fill:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-translucent-ios-secondary{background-color:rgba(var(--ion-color-ios-secondary-rgb,var(--ion-color-secondary-rgb,12,209,232)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-tertiary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff));fill:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-ios-tertiary .tab-button{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-ios-tertiary .tab-button.focused{background:var(--ion-color-ios-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.tabbar-ios-tertiary .tab-button:hover:not(.disable-hover),.tabbar-ios-tertiary .tab-selected{font-weight:700;color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));fill:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-translucent-ios-tertiary{background-color:rgba(var(--ion-color-ios-tertiary-rgb,var(--ion-color-tertiary-rgb,112,68,255)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-success{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));fill:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-ios-success .tab-button{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-ios-success .tab-button.focused{background:var(--ion-color-ios-success-shade,var(--ion-color-success-shade,#0ec254))}.tabbar-ios-success .tab-button:hover:not(.disable-hover),.tabbar-ios-success .tab-selected{font-weight:700;color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));fill:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-translucent-ios-success{background-color:rgba(var(--ion-color-ios-success-rgb,var(--ion-color-success-rgb,16,220,96)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-warning{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));fill:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-ios-warning .tab-button{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-ios-warning .tab-button.focused{background:var(--ion-color-ios-warning-shade,var(--ion-color-warning-shade,#e0b500))}.tabbar-ios-warning .tab-button:hover:not(.disable-hover),.tabbar-ios-warning .tab-selected{font-weight:700;color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));fill:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-translucent-ios-warning{background-color:rgba(var(--ion-color-ios-warning-rgb,var(--ion-color-warning-rgb,255,206,0)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-danger{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141));fill:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-ios-danger .tab-button{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-ios-danger .tab-button.focused{background:var(--ion-color-ios-danger-shade,var(--ion-color-danger-shade,#d33939))}.tabbar-ios-danger .tab-button:hover:not(.disable-hover),.tabbar-ios-danger .tab-selected{font-weight:700;color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));fill:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-translucent-ios-danger{background-color:rgba(var(--ion-color-ios-danger-rgb,var(--ion-color-danger-rgb,240,65,65)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-light{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));fill:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-ios-light .tab-button{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-ios-light .tab-button.focused{background:var(--ion-color-ios-light-shade,var(--ion-color-light-shade,#d7d8da))}.tabbar-ios-light .tab-button:hover:not(.disable-hover),.tabbar-ios-light .tab-selected{font-weight:700;color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));fill:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-translucent-ios-light{background-color:rgba(var(--ion-color-ios-light-rgb,var(--ion-color-light-rgb,244,245,248)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-medium{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));fill:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-ios-medium .tab-button{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-ios-medium .tab-button.focused{background:var(--ion-color-ios-medium-shade,var(--ion-color-medium-shade,#86888f))}.tabbar-ios-medium .tab-button:hover:not(.disable-hover),.tabbar-ios-medium .tab-selected{font-weight:700;color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));fill:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-translucent-ios-medium{background-color:rgba(var(--ion-color-ios-medium-rgb,var(--ion-color-medium-rgb,152,154,162)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-dark{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));fill:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-ios-dark .tab-button{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-ios-dark .tab-button.focused{background:var(--ion-color-ios-dark-shade,var(--ion-color-dark-shade,#1e2023))}.tabbar-ios-dark .tab-button:hover:not(.disable-hover),.tabbar-ios-dark .tab-selected{font-weight:700;color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));fill:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-translucent-ios-dark{background-color:rgba(var(--ion-color-ios-dark-rgb,var(--ion-color-dark-rgb,34,36,40)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),r=function(){function t(){this.ids=-1,this.transitioning=!1,this.tabsId=++l,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1}return t.prototype.componentWillLoad=function(){this.loadConfig("tabsPlacement","bottom"),this.loadConfig("tabsLayout","icon-top"),this.loadConfig("tabsHighlight",!0)},t.prototype.componentDidLoad=function(){var t=this;return this.initTabs().then(function(){return t.initSelect()})},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.tabChange=function(t){var e=t.detail;this.select(e)},t.prototype.select=function(t){var e=this,n=this.getTab(t);return this.shouldSwitch(n)?this.setActive(n).then(function(){return e.notifyRouter()}).then(function(){return e.tabSwitch()}):Promise.resolve(!1)},t.prototype.setRouteId=function(t){var e=this,n=this.getTab(t);return this.shouldSwitch(n)?this.setActive(n).then(function(){return{changed:!0,markVisible:function(){e.tabSwitch()}}}):Promise.resolve({changed:!1})},t.prototype.getTab=function(t){return"string"==typeof t?this.tabs.find(function(e){return e.getTabId()===t}):"number"==typeof t?this.tabs[t]:t},t.prototype.getSelected=function(){return this.selectedTab},t.prototype.getRouteId=function(){var t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t}:null},t.prototype.getContainerEl=function(){return this.selectedTab},t.prototype.initTabs=function(){var t=this,e=(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).map(function(e){var n="t-"+t.tabsId+"-"+ ++t.ids;return e.btnId="tab-"+n,e.id="tabpanel-"+n,e.componentOnReady()});return Promise.all(e)},t.prototype.initSelect=function(){var t=this;if(document.querySelector("ion-router"))return Promise.resolve();for(var e=this.tabs.find(function(t){return t.selected})||this.tabs.find(function(t){return t.show&&!t.disabled}),n=0,o=this.tabs;n<o.length;n++){var i=o[n];i!==e&&(i.selected=!1)}return(e?e.setActive():Promise.resolve(null)).then(function(){t.selectedTab=e,e&&(e.selected=!0,e.active=!0)})},t.prototype.loadConfig=function(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))},t.prototype.setActive=function(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(var e=0,n=this.tabs;e<n.length;e++){var o=n[e];t!==o&&(o.selected=!1)}return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,t.setActive()},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;return this.leavingTab=void 0,this.transitioning=!1,!!t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit(t),this.ionNavChanged.emit({isPop:!1}),!0))},t.prototype.notifyRouter=function(){var t=document.querySelector("ion-router");return t?t.navChanged(!1):Promise.resolve()},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return t&&t!==e&&!this.transitioning},t.prototype.render=function(){var t=[n("div",{class:"tabs-inner"},n("slot",null))];return this.tabbarHidden||t.push(n("ion-tabbar",{tabs:this.tabs,color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),t},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},getContainerEl:{method:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavChanged",method:"ionNavChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-tabs{top:0;position:absolute;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;contain:layout size style}"},enumerable:!0,configurable:!0}),t}(),l=-1;t.IonTab=o,t.IonTabButton=i,t.IonTabbar=a,t.IonTabs=r,Object.defineProperty(t,"__esModule",{value:!0})});