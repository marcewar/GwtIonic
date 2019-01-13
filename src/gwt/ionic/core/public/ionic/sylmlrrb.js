/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic,e=2;function i(t,i,s,l,h,n,r,o,a,c){const d=[],p=c+a;for(let c=a;c<p;c++){const a=t[c];if(s){const i=s(a,c,t);null!=i&&d.push({i:o++,type:1,value:i,index:c,height:h,reads:e,visible:!1})}if(d.push({i:o++,type:0,value:a,index:c,height:i?i(a,c):r,reads:i?0:e,visible:!!i}),l){const e=l(a,c,t);null!=e&&d.push({i:o++,type:2,value:e,index:c,height:n,reads:2,visible:!1})}}return d}class s{constructor(){this.range={offset:0,length:0},this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.totalHeight=0,this.heightChanged=!1,this.lastItemLen=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}itemsChanged(){this.calcCells()}componentDidLoad(){this.scrollEl=this.el.closest("ion-scroll"),this.scrollEl?this.scrollEl.componentOnReady().then(()=>{this.calcDimensions(),this.calcCells(),this.updateState()}):console.error("virtual-scroll must be used inside ion-scroll/ion-content")}componentDidUpdate(){this.updateState()}componentDidUnload(){this.scrollEl=null}onScroll(){this.updateVirtualScroll()}onResize(){this.indexDirty=0,this.calcDimensions(),this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return function(t,e,i){const s=e.find(e=>0===e.type&&e.index===t);return s?i[s.i]:-1}(t,this.cells,this.heightIndex)}markDirty(t,e=-1){if(!this.items)return;-1===e&&(e=this.items.length-t);const s=this.lastItemLen;let l=0;if(t>0&&t<s)l=function(t,e){return 0===e?0:t.findIndex(t=>t.index===e)}(this.cells,t);else if(0===t)l=0;else{if(t!==s)return void console.warn("bad values for markDirty");l=this.cells.length}const h=i(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,l,t,e);h.length,this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t}(this.cells,h,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}markDirtyTail(){const t=this.lastItemLen;this.markDirty(t,this.items.length-t)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=null),this.dom.read(this.readVS.bind(this)),this.dom.read(this.writeVS.bind(this)))}readVS(){let t=0,e=this.el;for(;e&&e!==this.scrollEl;)t+=e.offsetTop,e=e.parentElement;this.viewportOffset=t,this.scrollEl&&(this.currentScrollTop=this.scrollEl.scrollTop)}writeVS(){const t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(e),s=function(t,e,i){const s=e.top,l=e.bottom;let h=0;for(;h<t.length&&!(t[h]>s);h++);const n=Math.max(h-2-1,0);for(;h<t.length&&!(t[h]>=l);h++);return{offset:n,length:Math.min(h+2,t.length)-n}}(i,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,s)&&(this.range=s,function(t,e,i,s){for(const e of t)e.change=0,e.d=!0;const l=[],h=s.offset+s.length;for(let n=s.offset;n<h;n++){const s=i[n],h=t.find(t=>t.d&&t.cell===s);if(h){const t=e[n];t!==h.top&&(h.top=t,h.change=1),h.d=!1}else l.push(s)}const n=t.filter(t=>t.d);for(const i of l){const s=n.find(t=>t.d&&t.cell.type===i.type),l=i.index;s?(s.d=!1,s.change=2,s.cell=i,s.top=e[l]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[l]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,s),this.itemRender?function(t,e,i,s){const l=t.children,h=l.length;let n;for(let r=0;r<i.length;r++){const o=i[r],a=o.cell;2===o.change?(r<h?e(n=l[r],a,r):((n=e(null,a,r)).classList.add("virtual-item"),t.appendChild(n)),n.$ionCell=a):n=l[r],0!==o.change&&(n.style.transform=`translate3d(0,${o.top}px,0)`);const c=a.visible;o.visible!==c&&(c?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),o.visible=c),a.reads>0&&(s(a,n),a.reads--)}}(this.el,this.itemRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderer&&this.el.forceUpdate(),this.heightChanged&&(this.el.style.height=this.totalHeight+"px",this.heightChanged=!1))}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};"componentOnReady"in e?e.componentOnReady(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(t.height,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!!(this.scrollEl&&this.cells&&this.viewportHeight>1);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=i(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.cells.length,this.indexDirty=0)}getHeightIndex(t){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length);const e=function(t,e,i){let s=t[i];for(;i<t.length;i++)t[i]=s,s+=e[i].height;return s}(this.heightIndex,this.cells,t);e!==this.totalHeight&&(this.totalHeight,this.totalHeight=e,this.heightChanged=!0),this.heightIndex.length,this.indexDirty=1/0}calcDimensions(){this.scrollEl&&(this.viewportHeight=this.scrollEl.offsetHeight)}enableScrollEvents(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))}render(){const t=this.renderer;if(t)return this.virtualDom.map(e=>{const i=t(e.cell.value),s=["virtual-item"];return i.vattrs||(i.vattrs={}),i.vattrs.class+=" virtual-item",e.visible||s.push("virtual-loading"),i.vattrs.class+=" "+s.join(" "),i.vattrs.style||(i.vattrs.style={}),i.vattrs.style.transform=`translate3d(0,${e.top}px,0)`,i})}static get is(){return"ion-virtual-scroll"}static get properties(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},dom:{context:"dom"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},itemRender:{type:"Any",attr:"item-render"},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeHeight:{type:"Any",attr:"node-height"},positionForItem:{method:!0},renderer:{type:"Any",attr:"renderer"}}}static get style(){return"ion-virtual-scroll{position:relative;display:block;width:100%;contain:strict}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"}}export{s as IonVirtualScroll};