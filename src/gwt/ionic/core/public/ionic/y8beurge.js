/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{deferEvent as t}from"./chunk1.js";class i{constructor(){this.checked=!1,this.disabled=!1,this.value="on"}componentWillLoad(){this.inputId=`ion-cb-${c++}`,void 0===this.name&&(this.name=this.inputId),this.emitStyle()}componentDidLoad(){this.ionStyle=t(this.ionStyle),this.didLoad=!0;const e=this.nativeInput.closest("ion-item");if(e){const t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}}checkedChanged(e){this.didLoad&&this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-disabled":this.disabled,"checkbox-checked":this.checked})}onChange(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:{"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus}}}render(){const t={"checkbox-icon":!0,"checkbox-checked":this.checked};return[e("div",{class:t},e("div",{class:"checkbox-inner"})),e("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:e=>this.nativeInput=e})]}static get is(){return"ion-checkbox"}static get host(){return{theme:"checkbox"}}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:"Any",attr:"mode"},name:{type:String,attr:"name",mutable:!0},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-checkbox{position:relative;display:inline-block}ion-checkbox input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:root{--ion-alpha-activated:0.1;--ion-alpha-border-low:0.1;--ion-alpha-border-medium:0.2;--ion-alpha-border-high:0.3;--ion-alpha-disabled:0.5;--ion-alpha-focused:0.25;--ion-alpha-hover:0.1;--ion-alpha-lowest:0.1;--ion-alpha-low:0.25;--ion-alpha-medium:0.5;--ion-alpha-high:0.8;--ion-alpha-highest:0.9;--ion-background-color:#fff;--ion-text-color:#000;--ion-placeholder-text-color:#999;--ion-background-color-rgb:255,255,255;--ion-text-color-rgb:0,0,0;--ion-background-color-step-50:#f2f2f2;--ion-background-color-step-100:#e6e6e6;--ion-background-color-step-150:#d9d9d9;--ion-background-color-step-200:#cccccc;--ion-background-color-step-250:#bfbfbf;--ion-background-color-step-300:#b3b3b3;--ion-background-color-step-350:#a6a6a6;--ion-background-color-step-400:#999999;--ion-background-color-step-450:#8c8c8c;--ion-background-color-step-500:gray;--ion-background-color-step-550:#737373;--ion-background-color-step-600:#666666;--ion-background-color-step-650:#595959;--ion-background-color-step-700:#4d4d4d;--ion-background-color-step-750:#404040;--ion-background-color-step-800:#333333;--ion-background-color-step-850:#262626;--ion-background-color-step-900:#1a1a1a;--ion-background-color-step-950:#0d0d0d;--ion-background-color-step-1000:black;--ion-text-color-step-50:#0d0d0d;--ion-text-color-step-100:#1a1a1a;--ion-text-color-step-150:#262626;--ion-text-color-step-200:#333333;--ion-text-color-step-250:#404040;--ion-text-color-step-300:#4d4d4d;--ion-text-color-step-350:#595959;--ion-text-color-step-400:#666666;--ion-text-color-step-450:#737373;--ion-text-color-step-500:gray;--ion-text-color-step-550:#8c8c8c;--ion-text-color-step-600:#999999;--ion-text-color-step-650:#a6a6a6;--ion-text-color-step-700:#b3b3b3;--ion-text-color-step-750:#bfbfbf;--ion-text-color-step-800:#cccccc;--ion-text-color-step-850:#d9d9d9;--ion-text-color-step-900:#e6e6e6;--ion-text-color-step-950:#f2f2f2;--ion-text-color-step-1000:white;--ion-backdrop-color:#000;--ion-border-color:#b2b2b2;--ion-box-shadow-color:#000;--ion-overlay-background-color:#fafafa;--ion-tabbar-background-color:#f8f8f8;--ion-tabbar-background-color-focused:#dadada;--ion-tabbar-border-color:var(--ion-border-color, #b2b2b2);--ion-tabbar-text-color-active:#488aff;--ion-tabbar-text-color:#8c8c8c;--ion-toolbar-background-color:#f8f8f8;--ion-toolbar-border-color:var(--ion-border-color, #b2b2b2);--ion-toolbar-color-active:#4a4a4a;--ion-toolbar-color-inactive:#8c8c8c;--ion-toolbar-text-color:var(--ion-text-color, #000);--ion-item-background-color:var(--ion-background-color, #fff);--ion-item-background-color-active:var(--ion-background-color, #fff);--ion-item-border-color:#c8c7cc;--ion-item-text-color:var(--ion-text-color, #000);--ion-alpha-md-activated:var(--ion-alpha-activated, 0.1);--ion-alpha-md-border-low:0.07;--ion-alpha-md-border-medium:var(--ion-alpha-border-medium, 0.2);--ion-alpha-md-border-high:var(--ion-alpha-border-high, 0.3);--ion-alpha-md-disabled:var(--ion-alpha-disabled, 0.5);--ion-alpha-md-focused:0.1;--ion-alpha-md-hover:var(--ion-alpha-hover, 0.1);--ion-alpha-md-lowest:var(--ion-alpha-lowest, 0.1);--ion-alpha-md-low:var(--ion-alpha-low, 0.25);--ion-alpha-md-medium:var(--ion-alpha-medium, 0.5);--ion-alpha-md-high:var(--ion-alpha-high, 0.8);--ion-alpha-md-highest:var(--ion-alpha-highest, 0.9);--ion-background-md-color:#fff;--ion-text-md-color:#000;--ion-placeholder-text-md-color:var(--ion-placeholder-text-color, #999);--ion-background-md-color-step-50:#f2f2f2;--ion-background-md-color-step-100:#e6e6e6;--ion-background-md-color-step-150:#d9d9d9;--ion-background-md-color-step-200:#cccccc;--ion-background-md-color-step-250:#bfbfbf;--ion-background-md-color-step-300:#b3b3b3;--ion-background-md-color-step-350:#a6a6a6;--ion-background-md-color-step-400:#999999;--ion-background-md-color-step-450:#8c8c8c;--ion-background-md-color-step-500:gray;--ion-background-md-color-step-550:#737373;--ion-background-md-color-step-600:#666666;--ion-background-md-color-step-650:#595959;--ion-background-md-color-step-700:#4d4d4d;--ion-background-md-color-step-750:#404040;--ion-background-md-color-step-800:#333333;--ion-background-md-color-step-850:#262626;--ion-background-md-color-step-900:#1a1a1a;--ion-background-md-color-step-950:#0d0d0d;--ion-background-md-color-step-1000:black;--ion-text-md-color-step-50:#0d0d0d;--ion-text-md-color-step-100:#1a1a1a;--ion-text-md-color-step-150:#262626;--ion-text-md-color-step-200:#333333;--ion-text-md-color-step-250:#404040;--ion-text-md-color-step-300:#4d4d4d;--ion-text-md-color-step-350:#595959;--ion-text-md-color-step-400:#666666;--ion-text-md-color-step-450:#737373;--ion-text-md-color-step-500:gray;--ion-text-md-color-step-550:#8c8c8c;--ion-text-md-color-step-600:#999999;--ion-text-md-color-step-650:#a6a6a6;--ion-text-md-color-step-700:#b3b3b3;--ion-text-md-color-step-750:#bfbfbf;--ion-text-md-color-step-800:#cccccc;--ion-text-md-color-step-850:#d9d9d9;--ion-text-md-color-step-900:#e6e6e6;--ion-text-md-color-step-950:#f2f2f2;--ion-text-md-color-step-1000:white;--ion-backdrop-md-color:var(--ion-backdrop-color, #000);--ion-border-md-color:#c1c4cd;--ion-box-shadow-md-color:var(--ion-box-shadow-color, #000);--ion-overlay-md-background-color:#fafafa;--ion-tabbar-md-background-color:var(--ion-tabbar-background-color, #f8f8f8);--ion-tabbar-md-background-color-focused:var(--ion-tabbar-background-color-focused, #dadada);--ion-tabbar-md-border-color:rgba(0, 0, 0, var(--ion-alpha-md-border-low, var(--ion-alpha-border-low, 0.07)));--ion-tabbar-md-text-color:var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));--ion-tabbar-md-text-color-active:var(--ion-tabbar-text-color-active, #488aff);--ion-toolbar-md-background-color:var(--ion-toolbar-background-color, #f8f8f8);--ion-toolbar-md-border-color:var(--ion-border-md-color, var(--ion-border-color, #c1c4cd));--ion-toolbar-md-color-active:#4a4a4a;--ion-toolbar-md-color-inactive:var(--ion-toolbar-color-inactive, #8c8c8c);--ion-toolbar-md-text-color:#424242;--ion-item-md-background-color:var(--ion-item-background-color, var(--ion-background-color, #fff));--ion-item-md-background-color-active:#f1f1f1;--ion-item-md-border-color:#dedede;--ion-item-md-text-color:var(--ion-item-text-color, var(--ion-text-color, #000))}.checkbox-md .checkbox-icon{border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-border-md-color,var(--ion-border-color,#c1c4cd));background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)));-webkit-transition-duration:280ms;transition-duration:280ms;-webkit-transition-property:background;transition-property:background;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);contain:strict}.checkbox-md .checkbox-checked{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.checkbox-md .checkbox-checked .checkbox-inner{left:4px;top:0;position:absolute;width:5px;height:10px;border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkbox-md.checkbox-disabled,.item-md.item-checkbox-disabled ion-label{opacity:.3;pointer-events:none}.checkbox-key .checkbox-icon::after{border-radius:50%;left:-12px;top:-12px;position:absolute;display:block;width:36px;height:36px;background:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff));content:\"\";opacity:.2}.item.item-md .checkbox-md{margin:9px 36px 9px 4px;position:static;display:block}.item.item-md .checkbox-md[slot=end]{margin:11px 10px 10px 0}.checkbox-md+.item-inner ion-label{margin-left:0}.checkbox-md-primary .checkbox-checked{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.checkbox-md-primary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.checkbox-md-secondary .checkbox-checked{border-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.checkbox-md-secondary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.checkbox-md-tertiary .checkbox-checked{border-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.checkbox-md-tertiary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.checkbox-md-success .checkbox-checked{border-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.checkbox-md-success .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.checkbox-md-warning .checkbox-checked{border-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.checkbox-md-warning .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000))}.checkbox-md-danger .checkbox-checked{border-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.checkbox-md-danger .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.checkbox-md-light .checkbox-checked{border-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.checkbox-md-light .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.checkbox-md-medium .checkbox-checked{border-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.checkbox-md-medium .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000))}.checkbox-md-dark .checkbox-checked{border-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.checkbox-md-dark .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}"}static get styleMode(){return"md"}}let c=0;export{i as IonCheckbox};