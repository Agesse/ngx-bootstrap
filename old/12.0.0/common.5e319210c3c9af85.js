"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[592],{377:(u,d,t)=>{t.d(d,{Y:()=>i});var n=t(85678),o=t(86825);const e="400ms cubic-bezier(0.4,0.0,0.2,1)",p=[(0,o.oB)({height:0,visibility:"hidden"}),(0,o.jt)(e,(0,o.oB)({height:"*",visibility:"visible"}))],_=[(0,o.oB)({height:"*",visibility:"visible"}),(0,o.jt)(e,(0,o.oB)({height:0,visibility:"hidden"}))];let i=(()=>{class l{set display(a){this._display=a,"none"!==a?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(a){this.collapseNewValue=a,(!this._player||this._isAnimationDone)&&(this.isExpanded=a,this.toggle())}get collapse(){return this.isExpanded}constructor(a,h,r){this._el=a,this._renderer=h,this.collapsed=new n.vpe,this.collapses=new n.vpe,this.expanded=new n.vpe,this.expands=new n.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=r.build(_),this._factoryExpandAnimation=r.build(p)}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(a,h){if(!a||!this._stylesLoaded)return s=>s();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const r=h===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=r.create(this._el.nativeElement),this._player.play(),s=>this._player?.onDone(s)}static#t=this.\u0275fac=function(h){return new(h||l)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(o._j))};static#e=this.\u0275dir=n.lG2({type:l,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(h,r){2&h&&(n.uIk("aria-hidden",r.isCollapsed),n.ekj("collapse",r.isCollapse)("in",r.isExpanded)("show",r.isExpanded)("collapsing",r.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]})}return l})()},53865:(u,d,t)=>{t.d(d,{f:()=>e}),t(377);var o=t(85678);let e=(()=>{class p{static forRoot(){return{ngModule:p,providers:[]}}static#t=this.\u0275fac=function(l){return new(l||p)};static#e=this.\u0275mod=o.oAB({type:p});static#i=this.\u0275inj=o.cJS({})}return p})()},88575:(u,d,t)=>{t.d(d,{dl:()=>e.d,UU:()=>o.U}),t(27657);var o=t(71858),e=t(2716);t(28445)},28445:(u,d,t)=>{t.d(d,{K:()=>v});var n=t(72322),o=t(46692),e=t(85678),p=t(2716),_=t(96814);function i(a,h){if(1&a&&(e.TgZ(0,"h3",3),e._uU(1),e.qZA()),2&a){const r=e.oxw();e.xp6(1),e.Oqu(r.title)}}const l=["*"];let v=(()=>{class a{set placement(r){this._placement=this._bsVersions.isBs5?o.Bz[r]:r}get _bsVersions(){return(0,n.Wl)()}constructor(r){this._placement="top",Object.assign(this,r)}checkMarginNecessity(){return(0,o.lx)(this._placement)}static#t=this.\u0275fac=function(s){return new(s||a)(e.Y36(p.d))};static#e=this.\u0275cmp=e.Xpm({type:a,selectors:[["popover-container"]],hostAttrs:["role","tooltip",2,"display","block","position","absolute"],hostVars:7,hostBindings:function(s,c){2&s&&(e.uIk("id",c.popoverId),e.Tol("popover in popover-"+c._placement+" bs-popover-"+c._placement+" "+c._placement+" "+c.containerClass+" "+c.checkMarginNecessity()),e.ekj("show",!c._bsVersions.isBs3)("bs3",c._bsVersions.isBs3))},inputs:{placement:"placement",title:"title"},ngContentSelectors:l,decls:4,vars:1,consts:[[1,"popover-arrow","arrow"],["class","popover-title popover-header",4,"ngIf"],[1,"popover-content","popover-body"],[1,"popover-title","popover-header"]],template:function(s,c){1&s&&(e.F$t(),e._UZ(0,"div",0),e.YNc(1,i,2,1,"h3",1),e.TgZ(2,"div",2),e.Hsn(3),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",c.title))},dependencies:[_.O5],styles:[".popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}[_nghost-%COMP%]   .popover-arrow[_ngcontent-%COMP%]{position:absolute}"],changeDetection:0})}return a})()},2716:(u,d,t)=>{t.d(d,{d:()=>o});var n=t(85678);let o=(()=>{class e{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="click",this.outsideClick=!1,this.delay=0}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},27657:(u,d,t)=>{t.d(d,{k:()=>a});var n=t(2716),o=t(77533),e=t(28445),p=t(46692),_=t(74825),i=t(72322),l=t(85678);let v=0,a=(()=>{class h{get isOpen(){return this._popover.isShown}set isOpen(s){s?this.show():this.hide()}constructor(s,c,m,g,E,f){this._elementRef=c,this._renderer=m,this._positionService=f,this.popoverId=v++,this.adaptivePosition=!0,this.placement="top",this.outsideClick=!1,this.triggers="click",this.containerClass="",this.delay=0,this._isInited=!1,this._popover=E.createLoader(c,g,m).provide({provide:n.d,useValue:s}),Object.assign(this,s),this.onShown=this._popover.onShown,this.onHidden=this._popover.onHidden,typeof window<"u"&&c.nativeElement.addEventListener("click",function(){try{c.nativeElement.focus()}catch{return}})}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`ngx-popover-${this.popoverId}`:void 0,this._ariaDescribedby?(this._popover.instance&&(this._popover.instance.popoverId=this._ariaDescribedby),this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby)):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}show(){if(this._popover.isShown||!this.popover||this._delayTimeoutId)return;this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}});const s=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._popover.attach(e.K).to(this.container).position({attachment:this.placement}).show({content:this.popover,context:this.popoverContext,placement:this.placement,title:this.popoverTitle,containerClass:this.containerClass}),!this.adaptivePosition&&this._popover._componentRef&&(this._positionService.calcPosition(),this._positionService.deletePositionElement(this._popover._componentRef.location)),this.isOpen=!0,this.setAriaDescribedBy()},c=()=>{this._popoverCancelShowFn&&this._popoverCancelShowFn()};if(this.delay){const m=(0,_.H)(this.delay).subscribe(()=>{s(),c()});this.triggers&&(0,i.AL)(this.triggers).forEach(g=>{g.close&&(this._popoverCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,g.close,()=>{m.unsubscribe(),c()}))})}else s()}hide(){this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this.isOpen&&(this._popover.hide(),this.setAriaDescribedBy(),this.isOpen=!1)}toggle(){if(this.isOpen)return this.hide();this.show()}ngOnInit(){this._isInited||(this._isInited=!0,this._popover.listen({triggers:this.triggers,outsideClick:this.outsideClick,show:()=>this.show(),hide:()=>this.hide()}))}ngOnDestroy(){this._popover.dispose()}static#t=this.\u0275fac=function(c){return new(c||h)(l.Y36(n.d),l.Y36(l.SBq),l.Y36(l.Qsj),l.Y36(l.s_b),l.Y36(o.oj),l.Y36(p.sA))};static#e=this.\u0275dir=l.lG2({type:h,selectors:[["","popover",""]],inputs:{adaptivePosition:"adaptivePosition",boundariesElement:"boundariesElement",popover:"popover",popoverContext:"popoverContext",popoverTitle:"popoverTitle",placement:"placement",outsideClick:"outsideClick",triggers:"triggers",container:"container",containerClass:"containerClass",isOpen:"isOpen",delay:"delay"},outputs:{onShown:"onShown",onHidden:"onHidden"},exportAs:["bs-popover"]})}return h})()},71858:(u,d,t)=>{t.d(d,{U:()=>_});var n=t(96814),o=t(77533),e=t(46692),p=t(85678);let _=(()=>{class i{static forRoot(){return{ngModule:i,providers:[o.oj,e.sA]}}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=p.oAB({type:i});static#i=this.\u0275inj=p.cJS({imports:[n.ez]})}return i})()},9277:(u,d,t)=>{t.d(d,{DS:()=>p.D,z8:()=>e.z}),t(63750),t(5730);var e=t(27628),p=t(70705)},63750:(u,d,t)=>{t.d(d,{X:()=>i});var n=t(72322),o=t(46692),e=t(85678),p=t(70705);const _=["*"];let i=(()=>{class l{get _bsVersions(){return(0,n.Wl)()}constructor(a){Object.assign(this,a)}ngAfterViewInit(){this.classMap={in:!1,fade:!1},this.placement&&(this._bsVersions.isBs5&&(this.placement=o.Bz[this.placement]),this.classMap[this.placement]=!0),this.classMap[`tooltip-${this.placement}`]=!0,this.classMap.in=!0,this.animation&&(this.classMap.fade=!0),this.containerClass&&(this.classMap[this.containerClass]=!0)}static#t=this.\u0275fac=function(h){return new(h||l)(e.Y36(p.D))};static#e=this.\u0275cmp=e.Xpm({type:l,selectors:[["bs-tooltip-container"]],hostAttrs:["role","tooltip"],hostVars:3,hostBindings:function(h,r){2&h&&(e.uIk("id",r.id),e.Tol("show tooltip in tooltip-"+r.placement+" bs-tooltip-"+r.placement+" "+r.placement+" "+r.containerClass))},ngContentSelectors:_,decls:3,vars:0,consts:[[1,"tooltip-arrow","arrow"],[1,"tooltip-inner"]],template:function(h,r){1&h&&(e.F$t(),e._UZ(0,"div",0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA())},styles:[".tooltip[_nghost-%COMP%]{display:block;pointer-events:none;position:absolute}.tooltip[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{position:absolute}"],changeDetection:0})}return l})()},70705:(u,d,t)=>{t.d(d,{D:()=>o});var n=t(85678);let o=(()=>{class e{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="hover focus",this.delay=0}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},5730:(u,d,t)=>{t.d(d,{i:()=>h});var n=t(97582),o=t(85678),e=t(63750),p=t(70705),_=t(77533),i=t(72322),l=t(46692),v=t(74825);let a=0;class h{get isOpen(){return this._tooltip.isShown}set isOpen(s){s?this.show():this.hide()}set htmlContent(s){(0,i.O4)("tooltipHtml was deprecated, please use `tooltip` instead"),this.tooltip=s}set _placement(s){(0,i.O4)("tooltipPlacement was deprecated, please use `placement` instead"),this.placement=s}set _isOpen(s){(0,i.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen=s}get _isOpen(){return(0,i.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen}set _enable(s){(0,i.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled=!s}get _enable(){return(0,i.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled}set _appendToBody(s){(0,i.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),this.container=s?"body":this.container}get _appendToBody(){return(0,i.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),"body"===this.container}set _popupClass(s){(0,i.O4)("tooltipClass deprecated")}set _tooltipContext(s){(0,i.O4)("tooltipContext deprecated")}set _tooltipPopupDelay(s){(0,i.O4)("tooltipPopupDelay is deprecated, use `delay` instead"),this.delay=s}get _tooltipTrigger(){return(0,i.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers}set _tooltipTrigger(s){(0,i.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers=(s||"").toString()}constructor(s,c,m,g,E,f){this._elementRef=g,this._renderer=E,this._positionService=f,this.tooltipId=a++,this.adaptivePosition=!0,this.tooltipChange=new o.vpe,this.placement="top",this.triggers="hover focus",this.containerClass="",this.isDisabled=!1,this.delay=0,this.tooltipAnimation=!0,this.tooltipFadeDuration=150,this.tooltipStateChanged=new o.vpe,this._tooltip=c.createLoader(this._elementRef,s,this._renderer).provide({provide:p.D,useValue:m}),Object.assign(this,m),this.onShown=this._tooltip.onShown,this.onHidden=this._tooltip.onHidden}ngOnInit(){this._tooltip.listen({triggers:this.triggers,show:()=>this.show()}),this.tooltipChange.subscribe(s=>{s||this._tooltip.hide()}),this.onShown.subscribe(()=>{this.setAriaDescribedBy()}),this.onHidden.subscribe(()=>{this.setAriaDescribedBy()})}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`tooltip-${this.tooltipId}`:void 0,this._ariaDescribedby?this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}toggle(){if(this.isOpen)return this.hide();this.show()}show(){if(this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}}),this.isOpen||this.isDisabled||this._delayTimeoutId||!this.tooltip)return;const s=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._tooltip.attach(e.X).to(this.container).position({attachment:this.placement}).show({content:this.tooltip,placement:this.placement,containerClass:this.containerClass,id:`tooltip-${this.tooltipId}`})},c=()=>{this._tooltipCancelShowFn&&this._tooltipCancelShowFn()};this.delay?(this._delaySubscription&&this._delaySubscription.unsubscribe(),this._delaySubscription=(0,v.H)(this.delay).subscribe(()=>{s(),c()}),this.triggers&&(0,i.AL)(this.triggers).forEach(m=>{m.close&&(this._tooltipCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,m.close,()=>{this._delaySubscription?.unsubscribe(),c()}))})):s()}hide(){this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this._tooltip.isShown&&(this._tooltip.instance?.classMap&&(this._tooltip.instance.classMap.in=!1),setTimeout(()=>{this._tooltip.hide()},this.tooltipFadeDuration))}ngOnDestroy(){this._tooltip.dispose(),this.tooltipChange.unsubscribe(),this._delaySubscription&&this._delaySubscription.unsubscribe(),this.onShown.unsubscribe(),this.onHidden.unsubscribe()}static#t=this.\u0275fac=function(c){return new(c||h)(o.Y36(o.s_b),o.Y36(_.oj),o.Y36(p.D),o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(l.sA))};static#e=this.\u0275dir=o.lG2({type:h,selectors:[["","tooltip",""],["","tooltipHtml",""]],inputs:{adaptivePosition:"adaptivePosition",tooltip:"tooltip",placement:"placement",triggers:"triggers",container:"container",containerClass:"containerClass",boundariesElement:"boundariesElement",isOpen:"isOpen",isDisabled:"isDisabled",delay:"delay",htmlContent:["tooltipHtml","htmlContent"],_placement:["tooltipPlacement","_placement"],_isOpen:["tooltipIsOpen","_isOpen"],_enable:["tooltipEnable","_enable"],_appendToBody:["tooltipAppendToBody","_appendToBody"],tooltipAnimation:"tooltipAnimation",_popupClass:["tooltipClass","_popupClass"],_tooltipContext:["tooltipContext","_tooltipContext"],_tooltipPopupDelay:["tooltipPopupDelay","_tooltipPopupDelay"],tooltipFadeDuration:"tooltipFadeDuration",_tooltipTrigger:["tooltipTrigger","_tooltipTrigger"]},outputs:{tooltipChange:"tooltipChange",onShown:"onShown",onHidden:"onHidden",tooltipStateChanged:"tooltipStateChanged"},exportAs:["bs-tooltip"]})}(0,n.gn)([(0,i.GU)(),(0,n.w6)("design:type",Object)],h.prototype,"tooltip",void 0)},27628:(u,d,t)=>{t.d(d,{z:()=>_});var n=t(96814),o=t(77533),e=t(46692),p=t(85678);let _=(()=>{class i{static forRoot(){return{ngModule:i,providers:[o.oj,e.sA]}}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=p.oAB({type:i});static#i=this.\u0275inj=p.cJS({imports:[n.ez]})}return i})()},74825:(u,d,t)=>{t.d(d,{H:()=>_});var n=t(65592),o=t(16321),e=t(50671);function _(i=0,l,v=o.P){let a=-1;return null!=l&&((0,e.K)(l)?v=l:a=l),new n.y(h=>{let r=function p(i){return i instanceof Date&&!isNaN(i)}(i)?+i-v.now():i;r<0&&(r=0);let s=0;return v.schedule(function(){h.closed||(h.next(s++),0<=a?this.schedule(void 0,a):h.complete())},r)})}},16321:(u,d,t)=>{t.d(d,{P:()=>p,z:()=>e});var n=t(41954);const e=new(t(49931).v)(n.o),p=e}}]);