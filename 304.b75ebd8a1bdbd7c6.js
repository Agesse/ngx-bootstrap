"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[304],{97304:(a,e,o)=>{o.r(e),o.d(e,{DemoPopoverModule:()=>k,PopoverSectionComponent:()=>G});var p=o(60177),u=o(84341),K=o(8681),g=o(98130),m=o(37472),t=o(54438),r=o(64458);let f=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-adaptive-position"]],decls:4,vars:4,consts:[["type","button","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary",3,"popover","adaptivePosition"],["type","button","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary",3,"popover","adaptivePosition"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Popover on top\n"),t.k0s(),t.j41(2,"button",1),t.EFF(3," Popover on right\n"),t.k0s()),2&s&&(t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("adaptivePosition",!1),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("adaptivePosition",!1))},dependencies:[r.H],encapsulation:2})}return n})(),h=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-basic"]],decls:2,vars:1,consts:[["type","button",1,"btn","btn-primary",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Live demo\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},dependencies:[r.H],encapsulation:2})}return n})(),y=(()=>{class n{constructor(){this.isOpen=!1}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-trigger-by-isopen"]],decls:5,vars:2,consts:[["triggers","",3,"popover","isOpen"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(s,i){1&s&&(t.j41(0,"p")(1,"span",0),t.EFF(2," This text has attached popover "),t.k0s()(),t.j41(3,"button",1),t.bIt("click",function(){return i.isOpen=!i.isOpen}),t.EFF(4," Toggle\n"),t.k0s()),2&s&&(t.R7$(),t.Y8G("popover","Hello there! I was triggered by changing isOpen property")("isOpen",i.isOpen))},dependencies:[r.H],encapsulation:2})}return n})(),P=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-class"]],decls:2,vars:1,consts:[["type","button","containerClass","customClass",1,"btn","btn-primary",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Custom class demo\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},dependencies:[r.H],encapsulation:2})}return n})();function S(){return Object.assign(new g.as,{placement:"right",container:"body",triggers:"focus",delay:500})}let C=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-config"]],features:[t.Jv_([{provide:g.as,useFactory:S}])],decls:2,vars:1,consts:[["type","button",1,"btn","btn-primary",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Preconfigured popover\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},dependencies:[r.H],encapsulation:2})}return n})(),T=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-container"]],decls:6,vars:2,consts:[[1,"row","panel",2,"position","relative","overflow","hidden"],[1,"card-block","panel-body"],["type","button",1,"btn","btn-danger",3,"popover"],["type","button","container","body",1,"btn","btn-success",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"div",0)(1,"div",1)(2,"button",2),t.EFF(3," Default popover "),t.k0s(),t.j41(4,"button",3),t.EFF(5," Popover appended to body "),t.k0s()()()),2&s&&(t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."))},dependencies:[r.H],encapsulation:2})}return n})();function X(n,d){1&n&&t.EFF(0),2&n&&t.JRh(d.message)}let E=(()=>{class n{constructor(){this.context={message:"Hello there!"}}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-context"]],decls:4,vars:2,consts:[["popTemplate",""],["type","button",1,"btn","btn-primary",3,"popover","popoverContext"]],template:function(s,i){if(1&s&&(t.DNE(0,X,1,1,"ng-template",null,0,t.C5r),t.j41(2,"button",1),t.EFF(3," Open popover with custom context\n"),t.k0s()),2&s){const c=t.sdS(1);t.R7$(2),t.Y8G("popover",c)("popoverContext",i.context)}},dependencies:[r.H],encapsulation:2})}return n})();function Y(n,d){if(1&n&&t.EFF(0),2&n){const l=t.XpG();t.SpI("Just another: ",l.content,"")}}let D=(()=>{class n{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-custom-content"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Template ref content inside",1,"btn","btn-warning",3,"popover"]],template:function(s,i){if(1&s&&(t.DNE(0,Y,1,1,"ng-template",null,0,t.C5r),t.j41(2,"button",1),t.EFF(3," TemplateRef binding\n"),t.k0s()),2&s){const c=t.sdS(1);t.R7$(2),t.Y8G("popover",c)}},dependencies:[r.H],encapsulation:2})}return n})(),F=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-delay"]],decls:2,vars:2,consts:[["type","button",1,"btn","btn-primary",3,"popover","delay"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Popover with 0.5sec delay\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("delay",500)},dependencies:[r.H],encapsulation:2})}return n})(),A=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-dismiss"]],decls:2,vars:1,consts:[["type","button","popoverTitle","Dismissible popover","triggers","focus",1,"btn","btn-success",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Dismissible popover\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},dependencies:[r.H],encapsulation:2})}return n})(),O=(()=>{class n{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-dynamic"]],decls:2,vars:2,consts:[["type","button",1,"btn","btn-info",3,"popover","popoverTitle"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Simple binding\n"),t.k0s()),2&s&&t.Y8G("popover",i.content)("popoverTitle",i.title)},dependencies:[r.H],encapsulation:2})}return n})();function M(n,d){if(1&n&&(t.EFF(0,"Here we go: "),t.nrm(1,"div",2)),2&n){const l=t.XpG();t.R7$(),t.Y8G("innerHtml",l.html,t.npT)}}let U=(()=>{class n{constructor(){this.html='<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>'}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-dynamic-html"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Dynamic html inside",1,"btn","btn-success",3,"popover"],[3,"innerHtml"]],template:function(s,i){if(1&s&&(t.DNE(0,M,2,1,"ng-template",null,0,t.C5r),t.j41(2,"button",1),t.EFF(3," Show me popover with html\n"),t.k0s()),2&s){const c=t.sdS(1);t.R7$(2),t.Y8G("popover",c)}},dependencies:[r.H],encapsulation:2})}return n})(),B=(()=>{class n{onShown(){this.message="shown"}onHidden(){this.message="hidden"}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-events"]],decls:6,vars:2,consts:[["type","button",1,"btn","btn-primary",3,"onShown","onHidden","popover"],[1,"card","card-block","card-header","mb-3"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.bIt("onShown",function(){return i.onShown()})("onHidden",function(){return i.onHidden()}),t.EFF(1," Live demo\n"),t.k0s(),t.nrm(2,"br")(3,"br"),t.j41(4,"pre",1),t.EFF(5),t.k0s()),2&s&&(t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(5),t.SpI("Event: ",i.message,""))},dependencies:[r.H],encapsulation:2})}return n})(),R=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-outside-click"]],decls:2,vars:2,consts:[["type","button",1,"btn","btn-primary",3,"popover","outsideClick"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Live demo\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("outsideClick",!0)},dependencies:[r.H],encapsulation:2})}return n})(),x=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-placement"]],decls:10,vars:5,consts:[["type","button","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary",3,"popover"],["type","button","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary",3,"popover"],["type","button","popoverTitle","Popover auto","placement","auto",1,"btn","btn-default","btn-secondary",3,"popover"],["type","button","popoverTitle","Popover on left","placement","left",1,"btn","btn-default","btn-secondary",3,"popover"],["type","button","popoverTitle","Popover on bottom","placement","bottom",1,"btn","btn-default","btn-secondary",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," Popover on top\n"),t.k0s(),t.j41(2,"button",1),t.EFF(3," Popover on right\n"),t.k0s(),t.j41(4,"button",2),t.EFF(5," Popover auto\n"),t.k0s(),t.j41(6,"button",3),t.EFF(7," Popover on left\n"),t.k0s(),t.j41(8,"button",4),t.EFF(9," Popover on bottom\n"),t.k0s()),2&s&&(t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."))},dependencies:[r.H],encapsulation:2})}return n})(),V=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-styling-local"]],decls:2,vars:1,consts:[["type","button",1,"btn","btn-info",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.EFF(1," I have component level styling\n"),t.k0s()),2&s&&t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},dependencies:[r.H],styles:["[_nghost-%COMP%]   .popover[_ngcontent-%COMP%]{background-color:#009688;color:#fff}[_nghost-%COMP%]   .popover[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%]:after{border-top-color:#009688}"]})}return n})(),H=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-triggers-custom"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-md-2"],["type","button","triggers","mouseenter:mouseleave",1,"btn","btn-info",3,"popover"],["type","button","triggers","dblclick",1,"btn","btn-info",3,"popover"],[1,"col-md-3"],["type","text","placeholder","Show popover on input change","triggers","keypress:focusout",1,"form-control",3,"popover"]],template:function(s,i){1&s&&(t.j41(0,"div",0)(1,"div",1)(2,"button",2),t.EFF(3," Hover over me! "),t.k0s()(),t.j41(4,"div",1)(5,"button",3),t.EFF(6," Double click me! "),t.k0s()(),t.j41(7,"div",4),t.nrm(8,"input",5),t.k0s()()),2&s&&(t.R7$(2),t.Y8G("popover","I will hide on blur"),t.R7$(3),t.Y8G("popover","Double click one more time"),t.R7$(3),t.Y8G("popover","I will hide on blur"))},dependencies:[r.H],encapsulation:2})}return n})(),L=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-triggers-manual"]],decls:10,vars:1,consts:[["pop","bs-popover"],["triggers","",3,"popover"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(s,i){if(1&s){const c=t.RV6();t.j41(0,"p")(1,"span",1,0),t.EFF(3," This text has attached popover "),t.k0s()(),t.j41(4,"button",2),t.bIt("click",function(){t.eBV(c);const b=t.sdS(2);return t.Njj(b.show())}),t.EFF(5," Show\n"),t.k0s(),t.j41(6,"button",3),t.bIt("click",function(){t.eBV(c);const b=t.sdS(2);return t.Njj(b.hide())}),t.EFF(7," Hide\n"),t.k0s(),t.j41(8,"button",4),t.bIt("click",function(){t.eBV(c);const b=t.sdS(2);return t.Njj(b.toggle())}),t.EFF(9," Toggle\n"),t.k0s()}2&s&&(t.R7$(),t.Y8G("popover","Hello there! I was triggered manually"))},dependencies:[r.H],encapsulation:2})}return n})();function w(n,d){if(1&n&&(t.j41(0,"option",3),t.EFF(1),t.k0s()),2&n){const l=d.$implicit;t.Y8G("value",l),t.R7$(),t.SpI(" ",l," ")}}let j=(()=>{class n{constructor(){this.placements=["top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top"],this.placement="top left"}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-corner-placement"]],decls:5,vars:6,consts:[[1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-default","btn-secondary",3,"popover","popoverTitle","placement"],[3,"value"]],template:function(s,i){1&s&&(t.j41(0,"p")(1,"select",0),t.mxI("ngModelChange",function(v){return t.DH7(i.placement,v)||(i.placement=v),v}),t.DNE(2,w,2,2,"option",1),t.k0s()(),t.j41(3,"button",2),t.EFF(4),t.k0s()),2&s&&(t.R7$(),t.R50("ngModel",i.placement),t.R7$(),t.Y8G("ngForOf",i.placements),t.R7$(),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("popoverTitle","Popover on "+i.placement)("placement",i.placement),t.R7$(),t.SpI(" ","Popover on "+i.placement,"\n"))},dependencies:[p.Sq,u.xH,u.y7,u.wz,u.BC,u.vS,r.H],encapsulation:2})}return n})(),W=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["demo-popover-adaptive-position-overflow-boundary"]],decls:6,vars:4,consts:[[1,"container"],[1,"btn-padding"],["type","button","popoverTitle","Popover on top","container","body","boundariesElement","viewport","placement","top",1,"btn","btn-default","btn-secondary",3,"popover","adaptivePosition"],["type","button","popoverTitle","Popover on bottom","container","body","boundariesElement","viewport","placement","bottom",1,"btn","btn-default","btn-secondary",3,"popover","adaptivePosition"]],template:function(s,i){1&s&&(t.j41(0,"div",0)(1,"div",1)(2,"button",2),t.EFF(3," Popover on top "),t.k0s(),t.j41(4,"button",3),t.EFF(5," Popover on bottom "),t.k0s()()()),2&s&&(t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("adaptivePosition",!0),t.R7$(2),t.Y8G("popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")("adaptivePosition",!0))},dependencies:[r.H],styles:[".container[_ngcontent-%COMP%]{height:100px;overflow:auto}.btn-padding[_ngcontent-%COMP%]{padding:15px}"]})}return n})();const I=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:m.xK,content:[{title:"Basic",anchor:"basic",component:o(54503),html:o(76639),outlet:h},{title:"Placement",anchor:"placement",component:o(92307),html:o(81003),description:"<p>Four base positioning options are available: <code>top</code>, <code>right</code>,\n        <code>bottom</code>, and <code>left</code>.\n        Besides that, <code>auto</code> option may be used to detect a position that fits the component on screen.</p>",outlet:x},{title:"Corner placement",anchor:"corner-placement",description:'\n          <p>Placement property of a popover can contain "corner placement" specifier following the base positioning.\n          Thus, in addition to the four base positioning options, namely <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>, eight more positioning options are available: <code>top left</code>, <code>top right</code>,\n          <code>right top</code>, <code>right bottom</code>, <code>bottom right</code>, <code>bottom left</code>, <code>left bottom</code>, and <code>left top</code>.',component:o(28587),html:o(96083),outlet:j},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:o(81231),html:o(52759),outlet:f},{title:"Adaptive position with overflow boundary",anchor:"adaptive-position-overflow-boundary",description:"\n          <p>You can control the popover boundaries via <code>boundariesElement</code> input or config option.   <code>boundariesElement</code> property of a popover can contain boundaries namely <code>viewport, scrollParent, window</code>.</p>\n        ",component:o(1867),html:o(24755),outlet:W},{title:"Dismiss on next click",anchor:"popover-dismiss",component:o(25547),html:o(87507),description:"<p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the\n      user makes.</p>",outlet:A},{title:"Dynamic content",anchor:"dynamic-content",component:o(58803),html:o(40843),description:"<p>Pass a string as popover content.</p>",outlet:O},{title:"Custom content template",anchor:"custom-content-template",component:o(70843),html:o(89795),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[popover]="myId"</code> as popover content.</p>',outlet:D},{title:"Dynamic Html",anchor:"dynamic-html",component:o(9875),html:o(98795),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you can display any dynamic html</p>",outlet:U},{title:"Append to body",anchor:"container-body",component:o(50051),html:o(35675),description:'<p>When you have any styles on a parent element that interfere with a popover,\n        you\u2019ll want to specify a <code>container="body"</code> so that the popover\u2019s HTML will be\n        appended to body. This will help to avoid rendering problems in more complex components\n        (like input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:T},{title:"Visibility events",anchor:"events",component:o(33763),html:o(47067),outlet:B},{title:"Configuring defaults",anchor:"config-defaults",component:o(95169),html:o(13765),outlet:C},{title:"Outside click",anchor:"outside-click",component:o(20319),html:o(11527),outlet:R},{title:"Custom triggers",anchor:"triggers-custom",component:o(40803),html:o(84731),outlet:H},{title:"Manual triggering",anchor:"triggers-manual",component:o(30839),html:o(47823),description:"<p>This demo shows manipulating popover by <code>show</code>,\n        <code>hide</code> and <code>toggle</code> methods</p>",outlet:L},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property",component:o(66627),html:o(85915),description:"<p>You can show/hide popover by switching <code>isOpen</code> property</p>",outlet:y},{title:"Component level styling",anchor:"styling-local",component:o(63391),html:o(28167),outlet:V},{title:"Custom class",anchor:"popover-custom-class",component:o(70259),html:o(63563),outlet:P},{title:"Popover context",anchor:"popover-context",component:o(82403),html:o(56571),outlet:E},{title:"Popover with delay",anchor:"popover-delay",component:o(475),html:o(18883),description:"<p>Click on the button to see popover delayed for 0,5 second </p>",outlet:F}]},{name:"Installation",anchor:"api-reference",tabName:"api",usage:o(65804),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">popover</span>',outlet:m.Mg,content:[{title:"PopoverDirective",anchor:"popover-directive",outlet:m.r2},{title:"PopoverConfig",anchor:"popover-config",outlet:m.TJ}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:m.xK,content:[{title:"Basic",anchor:"basic-ex",outlet:h},{title:"Placement",anchor:"placement-ex",outlet:x},{title:"Corner placement",anchor:"corner-placement-ex",outlet:j},{title:"Disable adaptive position",anchor:"adaptive-position-ex",outlet:f},{title:"Adaptive position with overflow boundary",anchor:"adaptive-position-overflow-boundary-ex",outlet:W},{title:"Dismiss on next click",anchor:"popover-dismiss-ex",outlet:A},{title:"Dynamic content",anchor:"dynamic-content-ex",outlet:O},{title:"Custom content template",anchor:"custom-content-template-ex",outlet:D},{title:"Dynamic Html",anchor:"dynamic-html-ex",outlet:U},{title:"Append to body",anchor:"container-body-ex",outlet:T},{title:"Visibility events",anchor:"events-ex",outlet:B},{title:"Configuring defaults",anchor:"config-defaults-ex",outlet:C},{title:"Outside click",anchor:"outside-click-ex",outlet:R},{title:"Custom triggers",anchor:"triggers-custom-ex",outlet:H},{title:"Manual triggering",anchor:"triggers-manual-ex",outlet:L},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property-ex",outlet:y},{title:"Component level styling",anchor:"styling-local-ex",outlet:V},{title:"Custom class",anchor:"popover-custom-class-ex",outlet:P},{title:"Popover context",anchor:"popover-context-ex",outlet:E},{title:"Popover with delay",anchor:"popover-delay-ex",outlet:F}]}];var $=o(86223),N=o(52439);let G=(()=>{class n{constructor(){this.name="Popover",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover",this.componentContent=I}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["tooltip-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(s,i){1&s&&(t.j41(0,"demo-section",0)(1,"p"),t.EFF(2,"Add small overlay content, like those found in iOS, to any element for housing secondary information."),t.k0s(),t.j41(3,"p"),t.EFF(4,"The easiest way to add the popover component to your app (will be added to the root module)"),t.k0s(),t.nrm(5,"docs-section",1),t.k0s()),2&s&&(t.Y8G("name",i.name)("src",i.src)("componentContent",i.componentContent),t.R7$(5),t.Y8G("content",i.componentContent))},dependencies:[$.q,N.C],encapsulation:2,changeDetection:0})}return n})();const J=[{path:"",component:G}];o(40979);let k=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[p.MD,u.YN,m.ky,g.k0.forRoot(),K.iI.forChild(J)]})}return n})()},24755:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<div class="container">\n\n    <div class="btn-padding">\n        <button type="button" class="btn btn-default btn-secondary"\n            [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'" popoverTitle="Popover on top"\n            [adaptivePosition]="true" container="body" boundariesElement="viewport" placement="top">\n            Popover on top\n        </button>\n\n        <button type="button" class="btn btn-default btn-secondary"\n            [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'" popoverTitle="Popover on bottom"\n            [adaptivePosition]="true" container="body" boundariesElement="viewport" placement="bottom">\n            Popover on bottom\n        </button>\n    </div>\n\n</div>\n'},1867:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n  \n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-adaptive-position-overflow-boundary',\n  templateUrl: './adaptive-position-overflow-boundary.html',\n  styleUrls: ['./adaptive-position-overflow-boundary.css']\n\n})\nexport class DemoAdaptivePositionOverflowBoundaryComponent {}\n"},52759:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on top"\n        [adaptivePosition]="false"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on right"\n        [adaptivePosition]="false"\n        placement="right">\n  Popover on right\n</button>\n'},81231:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoPopoverAdaptivePositionComponent {}\n"},76639:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'">\n  Live demo\n</button>\n\n'},54503:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoPopoverBasicComponent {}\n"},63563:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'" containerClass="customClass">\n  Custom class demo\n</button>\n\n'},70259:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-class',\n  templateUrl: './class.html'\n})\nexport class DemoPopoverClassComponent {}\n"},13765:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'">\n  Preconfigured popover\n</button>\n'},95169:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\nimport { PopoverConfig } from 'ngx-bootstrap/popover';\n\n// such override allows to keep some initial values\n\nexport function getPopoverConfig(): PopoverConfig {\n  return Object.assign(new PopoverConfig(), {\n    placement: 'right',\n    container: 'body',\n    triggers: 'focus',\n    delay: 500\n  });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-config',\n  templateUrl: './config.html',\n  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]\n})\nexport class DemoPopoverConfigComponent {}\n"},35675:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<div class="row panel" style="position: relative; overflow: hidden;">\n  <div class="card-block panel-body">\n    <button type="button" class="btn btn-danger"\n            [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'">\n      Default popover\n    </button>\n    <button type="button" class="btn btn-success"\n            [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n            container="body">\n      Popover appended to body\n    </button>\n  </div>\n</div>\n'},50051:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-container',\n  templateUrl: './container.html'\n})\nexport class DemoPopoverContainerComponent {}\n"},96083:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<p>\n  <select [(ngModel)]="placement" class="form-control">\n    <option *ngFor="let placement of placements"\n      [value]="placement">\n      {{ placement }}\n    </option>\n  </select>\n</p>\n<button type="button" class="btn btn-default btn-secondary"\n  [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n  [popoverTitle]="\'Popover on \' + placement"\n  [placement]="placement">\n  {{ \'Popover on \' + placement }}\n</button>\n'},28587:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='import { Component } from \'@angular/core\';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: \'demo-popover-corner-placement\',\n  templateUrl: \'./corner-placement.html\'\n})\nexport class DemoPopoverCornerPlacementComponent {\n  placements = [\n    \'top left\',\n    \'top right\',\n    \'right top\',\n    \'right bottom\',\n    \'bottom right\',\n    \'bottom left\',\n    \'left bottom\',\n    \'left top\'\n  ];\n  placement: "top" | "bottom" | "left" | "right" | "auto" | "top left" | "top right" | "right top" | "right bottom" | "bottom right" | "bottom left" | "left bottom" | "left top" = \'top left\';\n}\n'},89795:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<ng-template #popTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning"\n        [popover]="popTemplate" popoverTitle="Template ref content inside">\n  TemplateRef binding\n</button>\n'},70843:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoPopoverCustomContentComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},18883:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'" [delay]="500">\n  Popover with 0.5sec delay\n</button>\n\n'},475:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-delay',\n  templateUrl: './delay.html'\n})\nexport class DemoPopoverDelayComponent {}\n"},87507:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-success"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Dismissible popover"\n        triggers="focus">\n  Dismissible popover\n</button>\n\n'},25547:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoPopoverDismissComponent {}\n"},98795:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [popover]="popTemplate" popoverTitle="Dynamic html inside">\n  Show me popover with html\n</button>\n'},9875:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoPopoverDynamicHtmlComponent {\n  html = `<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>`;\n}\n"},40843:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-info"\n        [popover]="content" [popoverTitle]="title">\n  Simple binding\n</button>\n'},58803:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoPopoverDynamicComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},47067:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        (onShown)="onShown()" (onHidden)="onHidden()"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'">\n  Live demo\n</button>\n<br>\n<br>\n<pre class="card card-block card-header mb-3">Event: {{message}}</pre>\n'},33763:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-events',\n  templateUrl: './events.html'\n})\nexport class DemoPopoverEventsComponent {\n  message?: string;\n\n  onShown(): void {\n    this.message = 'shown';\n  }\n\n  onHidden(): void {\n    this.message = 'hidden';\n  }\n}\n"},11527:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-primary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        [outsideClick]="true">\n  Live demo\n</button>\n\n'},20319:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-outside-click',\n  templateUrl: './outside-click.html'\n})\nexport class DemoPopoverOutsideClickComponent {}\n"},81003:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on top"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on right"\n        placement="right">\n  Popover on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover auto"\n        placement="auto">\n  Popover auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on left"\n        placement="left">\n  Popover on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'"\n        popoverTitle="Popover on bottom"\n        placement="bottom">\n  Popover on bottom\n</button>\n'},92307:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoPopoverPlacementComponent {}\n"},56571:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<ng-template #popTemplate let-message="message">{{ message }}</ng-template>\n<button type="button" class="btn btn-primary"\n        [popover]="popTemplate" [popoverContext]="context">\n  Open popover with custom context\n</button>\n'},82403:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-context',\n  templateUrl: './popover-context.html'\n})\nexport class DemoPopoverContextComponent {\n  context = {\n    message: 'Hello there!'\n  };\n}\n"},28167:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<button type="button" class="btn btn-info"\n        [popover]="\'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\'">\n  I have component level styling\n</button>\n'},63391:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-styling-local',\n  templateUrl: './styling-local.html',\n  styles: [\n    `\n:host .popover {\n  background-color: #009688;\n  color: #fff;\n}\n:host .popover>.arrow:after {\n  border-top-color: #009688;\n}\n  `\n  ]\n})\nexport class DemoPopoverStylingLocalComponent {}\n"},85915:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<p>\n  <span [popover]="\'Hello there! I was triggered by changing isOpen property\'"\n        triggers=""  [isOpen]="isOpen">\n  This text has attached popover\n  </span>\n</p>\n<button type="button" class="btn btn-primary"\n        (click)="isOpen = !isOpen">\n  Toggle\n</button>\n'},66627:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-trigger-by-isopen',\n  templateUrl: './trigger-by-isopen-property.html'\n})\nexport class DemoPopoverByIsOpenPropComponent {\n  isOpen = false;\n}\n"},84731:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<div class="row">\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            [popover]="\'I will hide on blur\'"\n            triggers="mouseenter:mouseleave">\n      Hover over me!\n    </button>\n  </div>\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            [popover]="\'Double click one more time\'"\n            triggers="dblclick">\n      Double click me!\n    </button>\n  </div>\n  <div class="col-md-3">\n    <input type="text"\n           class="form-control"\n           placeholder="Show popover on input change"\n           [popover]="\'I will hide on blur\'"\n           triggers="keypress:focusout">\n  </div>\n</div>\n'},40803:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoPopoverTriggersCustomComponent {}\n"},47823:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p='<p>\n  <span [popover]="\'Hello there! I was triggered manually\'"\n        triggers="" #pop="bs-popover">\n  This text has attached popover\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n'},30839:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoPopoverTriggersManualComponent {}\n"},65804:(a,e,o)=>{o.r(e),o.d(e,{default:()=>p});const p="import { PopoverModule } from 'ngx-bootstrap/popover';\n\n@NgModule({\n  imports: [PopoverModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);