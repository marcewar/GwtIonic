/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{createThemedClasses as e}from"./chunk2.js";class s{constructor(){this.loaded=!1,this.init=!1,this.active=!1,this.badgeStyle="default",this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}selectedChanged(t){t&&this.ionSelect.emit()}componentWillLoad(){}getTabId(){return this.name?this.name:"string"==typeof this.component?this.component:null}setActive(){return this.prepareLazyLoaded().then(()=>{this.active=!0})}prepareLazyLoaded(){return!this.loaded&&this.component?(this.loaded=!0,function(t,e){const s=document.createElement(e);return s.classList.add("ion-page"),t.appendChild(s),s.componentOnReady?s.componentOnReady():Promise.resolve(s)}(this.el,this.component)):Promise.resolve()}hostData(){return{"aria-labelledby":this.btnId,role:"tabpanel",hidden:!this.active,class:{"ion-page":!this.component}}}static get is(){return"ion-tab"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge"},badgeStyle:{type:String,attr:"badge-style"},btnId:{type:String,attr:"btn-id"},component:{type:"Any",attr:"component"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},init:{state:!0},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",mutable:!0,watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show"},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"},title:{type:String,attr:"title"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-tab{left:0;top:0;position:absolute;width:100%;height:100%}"}}class i{constructor(){this.keyFocus=!1,this.selected=!1}componentDidLoad(){this.ionTabButtonDidLoad.emit()}componentDidUnload(){this.ionTabButtonDidUnload.emit()}onClick(t){this.tab.disabled||this.ionTabbarClick.emit(this.tab),t.stopPropagation(),t.preventDefault()}onKeyUp(){this.keyFocus=!0}onBlur(){this.keyFocus=!1}hostData(){const t=this.selected,e=this.tab,s=!!e.title,i=!!e.icon,a=s&&!i,o=i&&!s,n=!!e.badge;return{role:"tab",id:e.btnId,"aria-selected":t,hidden:!e.show,class:{"tab-selected":t,"has-title":s,"has-icon":i,"has-title-only":a,"has-icon-only":o,"has-badge":n,"tab-btn-disabled":e.disabled,focused:this.keyFocus}}}render(){const e=this.tab,s=e.href||"#";return[t("a",{href:s,class:"tab-cover",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},e.icon&&t("ion-icon",{class:"tab-button-icon",name:e.icon}),e.title&&t("span",{class:"tab-button-text"},e.title),e.badge&&t("ion-badge",{class:"tab-badge",color:e.badgeStyle},e.badge),"md"===this.mode&&t("ion-ripple-effect",null))]}static get is(){return"ion-tab-button"}static get properties(){return{el:{elementRef:!0},keyFocus:{state:!0},selected:{type:Boolean,attr:"selected"},tab:{type:"Any",attr:"tab"}}}static get events(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidLoad",method:"ionTabButtonDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidUnload",method:"ionTabButtonDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-tab-button{margin:0;text-align:center;border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:0;display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;border:0;text-decoration:none;background:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-tab-button a{text-decoration:none}.tab-cover{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border:0;color:inherit;background:0 0;cursor:pointer}.tab-cover:active,.tab-cover:focus{outline:0}.tab-btn-disabled{pointer-events:none}.tab-btn-disabled>.tab-cover{opacity:.4}.tab-button-icon,.tab-button-text{display:none;overflow:hidden;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.has-icon .tab-button-icon,.has-title .tab-button-text{display:block}.has-title-only .tab-button-text{white-space:normal}.layout-icon-start .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.layout-icon-end .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom .tab-button{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end .tab-button,.layout-icon-hide .tab-button,.layout-icon-start .tab-button,.layout-title-hide .tab-button{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide .tab-button-icon,.layout-title-hide .tab-button-text{display:none}.tab-badge{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon .tab-badge{right:calc(50% - 30px)}.layout-icon-bottom .tab-badge,.layout-icon-end .tab-badge,.layout-icon-start .tab-badge{right:calc(50% - 50px)}.tab-button-ios{max-width:240px;font-size:10px;color:var(--ion-tabbar-ios-text-color,var(--ion-tabbar-text-color,#8c8c8c));fill:var(--ion-tabbar-ios-text-color,var(--ion-tabbar-text-color,#8c8c8c))}.tab-button-ios.focused{background:var(--ion-tabbar-ios-background-color-focused,var(--ion-tabbar-background-color-focused,#dadada))}.tab-button-ios .tab-cover{padding:0 2px}.enable-hover .tab-button-ios:hover,.tab-button-ios.tab-selected{color:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)));fill:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)))}.tab-button-ios .tab-button-text{margin-top:0;margin-bottom:1px;min-height:11px}.tab-button-ios.has-title-only .tab-button-text{font-size:12px}.tab-button-ios .tab-button-icon{margin-top:4px;font-size:30px}.tabbar-ios .tab-button-icon::before{vertical-align:top}.layout-icon-end .tab-button-ios .tab-button-text,.layout-icon-hide .tab-button-ios .tab-button-text,.layout-icon-start .tab-button-ios .tab-button-text,.tab-button-ios.has-title-only .tab-button-text{margin:2px 0;font-size:14px;line-height:1.1}.layout-icon-end .tab-button-ios ion-icon,.layout-icon-start .tab-button-ios ion-icon{margin-top:2px;margin-bottom:1px;min-width:24px;height:26px;font-size:24px}.layout-title-hide .tab-button-ios ion-icon{margin:0}"}static get styleMode(){return"ios"}}class a{constructor(){this.canScrollLeft=!1,this.canScrollRight=!1,this.hidden=!1,this.placement="bottom",this.layout="icon-top",this.highlight=!1,this.translucent=!1}selectedTabChanged(){this.scrollable&&this.scrollToSelectedButton(),this.highlight&&this.updateHighlight()}onKeyboardWillHide(){setTimeout(()=>this.hidden=!1,50)}onKeyboardWillShow(){"bottom"===this.placement&&(this.hidden=!0)}onResize(){this.highlight&&this.updateHighlight()}onTabButtonLoad(){this.scrollable&&this.updateBoundaries(),this.highlight&&this.updateHighlight()}analyzeTabs(){const t=Array.from(document.querySelectorAll("ion-tab-button")),e=this.scrollEl.scrollLeft,s=this.scrollEl.clientWidth;let i,a;return t.forEach(t=>{const o=t.offsetLeft,n=o+t.offsetWidth;o<e&&(i={tab:t,amount:o}),!a&&n>s+e&&(a={tab:t,amount:n-s})}),{previous:i,next:a}}getSelectedButton(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(t=>t.selected)}scrollToSelectedButton(){this.dom.read(()=>{const t=this.getSelectedButton();if(t){const e=this.scrollEl.scrollLeft,s=this.scrollEl.clientWidth,i=t.offsetLeft,a=i+t.offsetWidth;let o;a>s+e?o=a-s:i<e&&(o=i),void 0!==o&&this.scrollEl.scrollToPoint(o,0,250).then(()=>{this.updateBoundaries()})}})}scrollByTab(t){this.dom.read(()=>{const{previous:e,next:s}=this.analyzeTabs(),i="right"===t?s:e,a=i&&i.amount;i&&this.scrollEl.scrollToPoint(a,0,250).then(()=>{this.updateBoundaries()})})}updateBoundaries(){this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth}updateHighlight(){this.highlight&&this.dom.read(()=>{const t=this.getSelectedButton(),e=this.el.querySelector("div.tabbar-highlight");t&&e&&(e.style.transform=`translate3d(${t.offsetLeft}px,0,0) scaleX(${t.offsetWidth})`)})}hostData(){const t=this.translucent?e(this.mode,this.color,"tabbar-translucent"):{};return{role:"tablist",class:Object.assign({},t,{[`layout-${this.layout}`]:!0,[`placement-${this.placement}`]:!0,"tabbar-hidden":this.hidden,scrollable:this.scrollable})}}render(){const s=this.selectedTab,i=this.highlight?t("div",{class:"animated tabbar-highlight"}):null,a=e(this.mode,this.color,"tab-button"),o=this.tabs.map(e=>t("ion-tab-button",{class:a,tab:e,selected:s===e}));return this.scrollable?[t("ion-button",{onClick:()=>this.scrollByTab("left"),fill:"clear",class:{inactive:!this.canScrollLeft}},t("ion-icon",{name:"arrow-dropleft"})),t("ion-scroll",{forceOverscroll:!1,ref:t=>this.scrollEl=t},o,i),t("ion-button",{onClick:()=>this.scrollByTab("right"),fill:"clear",class:{inactive:!this.canScrollRight}},t("ion-icon",{name:"arrow-dropright"}))]:[...o,i]}static get is(){return"ion-tabbar"}static get host(){return{theme:"tabbar"}}static get properties(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},dom:{context:"dom"},el:{elementRef:!0},hidden:{state:!0},highlight:{type:Boolean,attr:"highlight"},layout:{type:String,attr:"layout"},placement:{type:String,attr:"placement"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-tabbar{position:relative;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;width:100%}ion-tabbar.tabbar-hidden{display:none}ion-tabbar.placement-top{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.tabbar-highlight{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;position:absolute;display:block;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0)}.tabbar-highlight.animated{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top .tabbar-highlight{bottom:0}.placement-bottom .tabbar-highlight{top:0}ion-tabbar.scrollable ion-scroll{overflow:hidden}ion-tabbar.scrollable .scroll-inner{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}ion-tabbar.scrollable ion-button.inactive{visibility:hidden}.tabbar-ios{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;border-top:.55px solid var(--ion-tabbar-ios-border-color,rgba(0,0,0,var(--ion-alpha-ios-border-medium,var(--ion-alpha-border-medium,.2))));background-color:var(--ion-tabbar-ios-background-color,var(--ion-tabbar-background-color,#f8f8f8));contain:strict}.tabbar-ios.placement-top{border-top:0;border-bottom:.55px solid var(--ion-tabbar-ios-border-color,rgba(0,0,0,var(--ion-alpha-ios-border-medium,var(--ion-alpha-border-medium,.2))))}.tabbar-ios .tabbar-highlight{background:var(--ion-tabbar-ios-text-color-active,var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff)))}.tabbar-translucent-ios{background-color:var(--ion-tabbar-ios-translucent-background-color,rgba(248,248,248,var(--ion-alpha-ios-high,var(--ion-alpha-high,.8))));-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}.tabbar-ios-primary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));fill:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-ios-primary .tab-button{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-ios-primary .tab-button.focused{background:var(--ion-color-ios-primary-shade,var(--ion-color-primary-shade,#3171e0))}.tabbar-ios-primary .tab-button:hover:not(.disable-hover),.tabbar-ios-primary .tab-selected{font-weight:700;color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));fill:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-translucent-ios-primary{background-color:rgba(var(--ion-color-ios-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-secondary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));fill:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-ios-secondary .tab-button{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-ios-secondary .tab-button.focused{background:var(--ion-color-ios-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.tabbar-ios-secondary .tab-button:hover:not(.disable-hover),.tabbar-ios-secondary .tab-selected{font-weight:700;color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));fill:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-translucent-ios-secondary{background-color:rgba(var(--ion-color-ios-secondary-rgb,var(--ion-color-secondary-rgb,12,209,232)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-tertiary{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff));fill:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-ios-tertiary .tab-button{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-ios-tertiary .tab-button.focused{background:var(--ion-color-ios-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.tabbar-ios-tertiary .tab-button:hover:not(.disable-hover),.tabbar-ios-tertiary .tab-selected{font-weight:700;color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));fill:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-translucent-ios-tertiary{background-color:rgba(var(--ion-color-ios-tertiary-rgb,var(--ion-color-tertiary-rgb,112,68,255)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-success{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));fill:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-ios-success .tab-button{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-ios-success .tab-button.focused{background:var(--ion-color-ios-success-shade,var(--ion-color-success-shade,#0ec254))}.tabbar-ios-success .tab-button:hover:not(.disable-hover),.tabbar-ios-success .tab-selected{font-weight:700;color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));fill:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-translucent-ios-success{background-color:rgba(var(--ion-color-ios-success-rgb,var(--ion-color-success-rgb,16,220,96)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-warning{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));fill:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-ios-warning .tab-button{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-ios-warning .tab-button.focused{background:var(--ion-color-ios-warning-shade,var(--ion-color-warning-shade,#e0b500))}.tabbar-ios-warning .tab-button:hover:not(.disable-hover),.tabbar-ios-warning .tab-selected{font-weight:700;color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));fill:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.tabbar-translucent-ios-warning{background-color:rgba(var(--ion-color-ios-warning-rgb,var(--ion-color-warning-rgb,255,206,0)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-danger{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141));fill:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-ios-danger .tab-button{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-ios-danger .tab-button.focused{background:var(--ion-color-ios-danger-shade,var(--ion-color-danger-shade,#d33939))}.tabbar-ios-danger .tab-button:hover:not(.disable-hover),.tabbar-ios-danger .tab-selected{font-weight:700;color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));fill:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-translucent-ios-danger{background-color:rgba(var(--ion-color-ios-danger-rgb,var(--ion-color-danger-rgb,240,65,65)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-light{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));fill:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-ios-light .tab-button{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-ios-light .tab-button.focused{background:var(--ion-color-ios-light-shade,var(--ion-color-light-shade,#d7d8da))}.tabbar-ios-light .tab-button:hover:not(.disable-hover),.tabbar-ios-light .tab-selected{font-weight:700;color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));fill:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-translucent-ios-light{background-color:rgba(var(--ion-color-ios-light-rgb,var(--ion-color-light-rgb,244,245,248)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-medium{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));fill:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-ios-medium .tab-button{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-ios-medium .tab-button.focused{background:var(--ion-color-ios-medium-shade,var(--ion-color-medium-shade,#86888f))}.tabbar-ios-medium .tab-button:hover:not(.disable-hover),.tabbar-ios-medium .tab-selected{font-weight:700;color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));fill:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.tabbar-translucent-ios-medium{background-color:rgba(var(--ion-color-ios-medium-rgb,var(--ion-color-medium-rgb,152,154,162)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}.tabbar-ios-dark{border-color:var(--ion-background-ios-color-step-400,var(--ion-background-color-step-400,#999));color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));fill:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-ios-dark .tab-button{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-ios-dark .tab-button.focused{background:var(--ion-color-ios-dark-shade,var(--ion-color-dark-shade,#1e2023))}.tabbar-ios-dark .tab-button:hover:not(.disable-hover),.tabbar-ios-dark .tab-selected{font-weight:700;color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));fill:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-translucent-ios-dark{background-color:rgba(var(--ion-color-ios-dark-rgb,var(--ion-color-dark-rgb,34,36,40)),var(--ion-alpha-ios-high,var(--ion-alpha-high,.8)))}"}static get styleMode(){return"ios"}}class o{constructor(){this.ids=-1,this.transitioning=!1,this.tabsId=++n,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1}componentWillLoad(){this.loadConfig("tabsPlacement","bottom"),this.loadConfig("tabsLayout","icon-top"),this.loadConfig("tabsHighlight",!0)}componentDidLoad(){return this.initTabs().then(()=>this.initSelect())}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}tabChange(t){const e=t.detail;this.select(e)}select(t){const e=this.getTab(t);return this.shouldSwitch(e)?this.setActive(e).then(()=>this.notifyRouter()).then(()=>this.tabSwitch()):Promise.resolve(!1)}setRouteId(t){const e=this.getTab(t);return this.shouldSwitch(e)?this.setActive(e).then(()=>({changed:!0,markVisible:()=>{this.tabSwitch()}})):Promise.resolve({changed:!1})}getTab(t){return"string"==typeof t?this.tabs.find(e=>e.getTabId()===t):"number"==typeof t?this.tabs[t]:t}getSelected(){return this.selectedTab}getRouteId(){const t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t}:null}getContainerEl(){return this.selectedTab}initTabs(){const t=(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).map(t=>{const e=`t-${this.tabsId}-${++this.ids}`;return t.btnId="tab-"+e,t.id="tabpanel-"+e,t.componentOnReady()});return Promise.all(t)}initSelect(){if(document.querySelector("ion-router"))return Promise.resolve();const t=this.tabs.find(t=>t.selected)||this.tabs.find(t=>t.show&&!t.disabled);for(const e of this.tabs)e!==t&&(e.selected=!1);return(t?t.setActive():Promise.resolve(null)).then(()=>{this.selectedTab=t,t&&(t.selected=!0,t.active=!0)})}loadConfig(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))}setActive(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(const e of this.tabs)t!==e&&(e.selected=!1);return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,t.setActive()}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;return this.leavingTab=void 0,this.transitioning=!1,!!t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit(t),this.ionNavChanged.emit({isPop:!1}),!0))}notifyRouter(){const t=document.querySelector("ion-router");return t?t.navChanged(!1):Promise.resolve()}shouldSwitch(t){const e=this.selectedTab;return t&&t!==e&&!this.transitioning}render(){const e=[t("div",{class:"tabs-inner"},t("slot",null))];return this.tabbarHidden||e.push(t("ion-tabbar",{tabs:this.tabs,color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),e}static get is(){return"ion-tabs"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},getContainerEl:{method:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavChanged",method:"ionNavChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-tabs{top:0;position:absolute;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;contain:layout size style}"}}let n=-1;export{s as IonTab,i as IonTabButton,a as IonTabbar,o as IonTabs};