"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[461],{12798:(ee,Q,ae)=>{ae(96935),ae(68916)},68916:()=>{class ee{constructor(){this.name="TaskTrackingZone",this.microTasks=[],this.macroTasks=[],this.eventTasks=[],this.properties={TaskTrackingZone:this}}static get(){return Zone.current.get("TaskTrackingZone")}getTasksFor(te){switch(te){case"microTask":return this.microTasks;case"macroTask":return this.macroTasks;case"eventTask":return this.eventTasks}throw new Error("Unknown task format: "+te)}onScheduleTask(te,fe,oe,U){return U.creationLocation=new Error(`Task '${U.type}' from '${U.source}'.`),this.getTasksFor(U.type).push(U),te.scheduleTask(oe,U)}onCancelTask(te,fe,oe,U){const he=this.getTasksFor(U.type);for(let de=0;de<he.length;de++)if(he[de]==U){he.splice(de,1);break}return te.cancelTask(oe,U)}onInvokeTask(te,fe,oe,U,he,de){if("eventTask"===U.type||U.data?.isPeriodic)return te.invokeTask(oe,U,he,de);const pe=this.getTasksFor(U.type);for(let ke=0;ke<pe.length;ke++)if(pe[ke]==U){pe.splice(ke,1);break}return te.invokeTask(oe,U,he,de)}clearEvents(){for(;this.eventTasks.length;)Zone.current.cancelTask(this.eventTasks[0])}}!function Q(ae){ae.TaskTrackingZoneSpec=ee}(Zone)},96935:()=>{const ee=globalThis;function Q(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const fe=Object.getOwnPropertyDescriptor,oe=Object.defineProperty,U=Object.getPrototypeOf,he=Object.create,de=Array.prototype.slice,pe="addEventListener",ke="removeEventListener",je=Q(pe),He=Q(ke),_e="true",Te="false",Re=Q("");function xe(t,r){return Zone.current.wrap(t,r)}function Fe(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=Q,Oe=typeof window<"u",ve=Oe?window:void 0,K=Oe&&ve||globalThis,dt="removeAttribute";function Ge(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=xe(t[c],r+"_"+c));return t}function Xe(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ne=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),Ve=!Ne&&!qe&&!(!Oe||!ve.HTMLElement),Ye=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!qe&&!(!Oe||!ve.HTMLElement),Ie={},$e=function(t){if(!(t=t||K.event))return;let r=Ie[t.type];r||(r=Ie[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||K,n=c[r];let i;return Ve&&c===ve&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function Ke(t,r,c){let n=fe(t,r);if(!n&&c&&fe(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const l=n.get,_=n.set,T=r.slice(2);let k=Ie[T];k||(k=Ie[T]=H("ON_PROPERTY"+T)),n.set=function(R){let E=this;!E&&t===K&&(E=K),E&&("function"==typeof E[k]&&E.removeEventListener(T,$e),_&&_.call(E,null),E[k]=R,"function"==typeof R&&E.addEventListener(T,$e,!1))},n.get=function(){let R=this;if(!R&&t===K&&(R=K),!R)return null;const E=R[k];if(E)return E;if(l){let M=l.call(this);if(M)return n.set.call(this,M),"function"==typeof R[dt]&&R.removeAttribute(r),M}return null},oe(t,r,n),t[i]=!0}function Je(t,r,c){if(r)for(let n=0;n<r.length;n++)Ke(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)Ke(t,n[i],c)}}const ie=H("originalInstance");function De(t){const r=K[t];if(!r)return;K[H(t)]=r,K[t]=function(){const i=Ge(arguments,t);switch(i.length){case 0:this[ie]=new r;break;case 1:this[ie]=new r(i[0]);break;case 2:this[ie]=new r(i[0],i[1]);break;case 3:this[ie]=new r(i[0],i[1],i[2]);break;case 4:this[ie]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ge(K[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?K[t].prototype[i]=function(){return this[ie][i].apply(this[ie],arguments)}:oe(K[t].prototype,i,{set:function(l){"function"==typeof l?(this[ie][i]=xe(l,t+"."+i),ge(this[ie][i],l)):this[ie][i]=l},get:function(){return this[ie][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(K[t][n]=r[n])}function Ee(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=U(n);!n&&t[r]&&(n=t);const i=H(r);let l=null;if(n&&(!(l=n[i])||!n.hasOwnProperty(i))&&(l=n[i]=n[r],Xe(n&&fe(n,r)))){const T=c(l,i,r);n[r]=function(){return T(this,arguments)},ge(n[r],l)}return l}function Tt(t,r,c){let n=null;function i(l){const _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(_.target,_.args),l}n=Ee(t,r,l=>function(_,T){const k=c(_,T);return k.cbIdx>=0&&"function"==typeof T[k.cbIdx]?Fe(k.name,T[k.cbIdx],k,i):l.apply(_,T)})}function ge(t,r){t[H("OriginalDelegate")]=r}let Qe=!1,Be=!1;function gt(){if(Qe)return Be;Qe=!0;try{const t=ve.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Be=!0)}catch{}return Be}let be=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){be=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{be=!1}const kt={useG:!0},se={},et={},tt=new RegExp("^"+Re+"(\\w+)(true|false)$"),nt=H("propagationStopped");function rt(t,r){const c=(r?r(t):t)+Te,n=(r?r(t):t)+_e,i=Re+c,l=Re+n;se[t]={},se[t][Te]=i,se[t][_e]=l}function pt(t,r,c,n){const i=n&&n.add||pe,l=n&&n.rm||ke,_=n&&n.listeners||"eventListeners",T=n&&n.rmAll||"removeAllListeners",k=H(i),R="."+i+":",E="prependListener",M="."+E+":",w=function(v,h,F){if(v.isRemoved)return;const z=v.callback;let Y;"object"==typeof z&&z.handleEvent&&(v.callback=g=>z.handleEvent(g),v.originalDelegate=z);try{v.invoke(v,h,[F])}catch(g){Y=g}const G=v.options;return G&&"object"==typeof G&&G.once&&h[l].call(h,F.type,v.originalDelegate?v.originalDelegate:v.callback,G),Y};function j(v,h,F){if(!(h=h||t.event))return;const z=v||h.target||t,Y=z[se[h.type][F?_e:Te]];if(Y){const G=[];if(1===Y.length){const g=w(Y[0],z,h);g&&G.push(g)}else{const g=Y.slice();for(let V=0;V<g.length&&(!h||!0!==h[nt]);V++){const L=w(g[V],z,h);L&&G.push(L)}}if(1===G.length)throw G[0];for(let g=0;g<G.length;g++){const V=G[g];r.nativeScheduleMicroTask(()=>{throw V})}}}const W=function(v){return j(this,v,!1)},x=function(v){return j(this,v,!0)};function ce(v,h){if(!v)return!1;let F=!0;h&&void 0!==h.useG&&(F=h.useG);const z=h&&h.vh;let Y=!0;h&&void 0!==h.chkDup&&(Y=h.chkDup);let G=!1;h&&void 0!==h.rt&&(G=h.rt);let g=v;for(;g&&!g.hasOwnProperty(i);)g=U(g);if(!g&&v[i]&&(g=v),!g||g[k])return!1;const V=h&&h.eventNameToString,L={},C=g[k]=g[i],y=g[H(l)]=g[l],O=g[H(_)]=g[_],ne=g[H(T)]=g[T];let X;h&&h.prepend&&(X=g[H(h.prepend)]=g[h.prepend]);const $=F?function(s){if(!L.isExisting)return C.call(L.target,L.eventName,L.capture?x:W,L.options)}:function(s){return C.call(L.target,L.eventName,s.invoke,L.options)},Z=F?function(s){if(!s.isRemoved){const a=se[s.eventName];let f;a&&(f=a[s.capture?_e:Te]);const b=f&&s.target[f];if(b)for(let D=0;D<b.length;D++)if(b[D]===s){b.splice(D,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[f]=null);break}}if(s.allRemoved)return y.call(s.target,s.eventName,s.capture?x:W,s.options)}:function(s){return y.call(s.target,s.eventName,s.invoke,s.options)},Se=h&&h.diff?h.diff:function(s,a){const f=typeof a;return"function"===f&&s.callback===a||"object"===f&&s.originalDelegate===a},me=Zone[H("UNPATCHED_EVENTS")],Ze=t[H("PASSIVE_EVENTS")],u=function(s,a,f,b,D=!1,m=!1){return function(){const P=this||t;let S=arguments[0];h&&h.transferEventName&&(S=h.transferEventName(S));let A=arguments[1];if(!A)return s.apply(this,arguments);if(Ne&&"uncaughtException"===S)return s.apply(this,arguments);let B=!1;if("function"!=typeof A){if(!A.handleEvent)return s.apply(this,arguments);B=!0}if(z&&!z(s,A,P,arguments))return;const J=be&&!!Ze&&-1!==Ze.indexOf(S),re=function I(s,a){return!be&&"object"==typeof s&&s?!!s.capture:be&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],J),we=re?.signal;if(we?.aborted)return;if(me)for(let ue=0;ue<me.length;ue++)if(S===me[ue])return J?s.call(P,S,A,re):s.apply(this,arguments);const We=!!re&&("boolean"==typeof re||re.capture),at=!(!re||"object"!=typeof re)&&re.once,It=Zone.current;let ze=se[S];ze||(rt(S,V),ze=se[S]);const lt=ze[We?_e:Te];let Ae,Ce=P[lt],ut=!1;if(Ce){if(ut=!0,Y)for(let ue=0;ue<Ce.length;ue++)if(Se(Ce[ue],A))return}else Ce=P[lt]=[];const ft=P.constructor.name,ht=et[ft];ht&&(Ae=ht[S]),Ae||(Ae=ft+a+(V?V(S):S)),L.options=re,at&&(L.options.once=!1),L.target=P,L.capture=We,L.eventName=S,L.isExisting=ut;const ye=F?kt:void 0;ye&&(ye.taskData=L),we&&(L.options.signal=void 0);const le=It.scheduleEventTask(Ae,A,ye,f,b);if(we){L.options.signal=we;const ue=()=>le.zone.cancelTask(le);s.call(we,"abort",ue,{once:!0}),ye&&(ye.removeAbortListener=()=>we.removeEventListener("abort",ue))}return L.target=null,ye&&(ye.taskData=null),at&&(re.once=!0),!be&&"boolean"==typeof le.options||(le.options=re),le.target=P,le.capture=We,le.eventName=S,B&&(le.originalDelegate=A),m?Ce.unshift(le):Ce.push(le),D?P:void 0}};return g[i]=u(C,R,$,Z,G),X&&(g[E]=u(X,M,function(s){return X.call(L.target,L.eventName,s.invoke,L.options)},Z,G,!0)),g[l]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=arguments[2],b=!!f&&("boolean"==typeof f||f.capture),D=arguments[1];if(!D)return y.apply(this,arguments);if(z&&!z(y,D,s,arguments))return;const m=se[a];let P;m&&(P=m[b?_e:Te]);const S=P&&s[P];if(S)for(let A=0;A<S.length;A++){const B=S[A];if(Se(B,D)){S.splice(A,1),B.isRemoved=!0,0!==S.length||(B.allRemoved=!0,s[P]=null,b||"string"!=typeof a)||(s[Re+"ON_PROPERTY"+a]=null);const J=B.data;return J?.removeAbortListener&&(J.removeAbortListener(),J.removeAbortListener=null),B.zone.cancelTask(B),G?s:void 0}}return y.apply(this,arguments)},g[_]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=[],b=ot(s,V?V(a):a);for(let D=0;D<b.length;D++){const m=b[D];f.push(m.originalDelegate?m.originalDelegate:m.callback)}return f},g[T]=function(){const s=this||t;let a=arguments[0];if(a){h&&h.transferEventName&&(a=h.transferEventName(a));const f=se[a];if(f){const m=s[f[Te]],P=s[f[_e]];if(m){const S=m.slice();for(let A=0;A<S.length;A++){const B=S[A];this[l].call(this,a,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(P){const S=P.slice();for(let A=0;A<S.length;A++){const B=S[A];this[l].call(this,a,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const f=Object.keys(s);for(let b=0;b<f.length;b++){const m=tt.exec(f[b]);let P=m&&m[1];P&&"removeListener"!==P&&this[T].call(this,P)}this[T].call(this,"removeListener")}if(G)return this},ge(g[i],C),ge(g[l],y),ne&&ge(g[T],ne),O&&ge(g[_],O),!0}let q=[];for(let v=0;v<c.length;v++)q[v]=ce(c[v],n);return q}function ot(t,r){if(!r){const l=[];for(let _ in t){const T=tt.exec(_);let k=T&&T[1];if(k&&(!r||k===r)){const R=t[_];if(R)for(let E=0;E<R.length;E++)l.push(R[E])}}return l}let c=se[r];c||(rt(r),c=se[r]);const n=t[c[Te]],i=t[c[_e]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function mt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,l){i[nt]=!0,n&&n.apply(i,l)})}const Le=H("zoneTask");function Pe(t,r,c,n){let i=null,l=null;c+=n;const _={};function T(R){const E=R.data;return E.args[0]=function(){return R.invoke.apply(this,arguments)},E.handleId=i.apply(t,E.args),R}function k(R){return l.call(t,R.data.handleId)}i=Ee(t,r+=n,R=>function(E,M){if("function"==typeof M[0]){const w={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?M[1]||0:void 0,args:M},j=M[0];M[0]=function(){try{return j.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete _[w.handleId]:w.handleId&&(w.handleId[Le]=null))}};const W=Fe(r,M[0],w,T,k);if(!W)return W;const x=W.data.handleId;return"number"==typeof x?_[x]=W:x&&(x[Le]=W),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(W.ref=x.ref.bind(x),W.unref=x.unref.bind(x)),"number"==typeof x||x?x:W}return R.apply(t,M)}),l=Ee(t,c,R=>function(E,M){const w=M[0];let j;"number"==typeof w?j=_[w]:(j=w&&w[Le],j||(j=w)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof w?delete _[w]:w&&(w[Le]=null),j.zone.cancelTask(j)):R.apply(t,M)})}function st(t,r,c){if(!c||0===c.length)return r;const n=c.filter(l=>l.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(l=>-1===i.indexOf(l))}function it(t,r,c,n){t&&Je(t,st(t,r,c),n)}function Ue(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function St(t,r,c,n,i){const l=Zone.__symbol__(n);if(r[l])return;const _=r[l]=r[n];r[n]=function(T,k,R){return k&&k.prototype&&i.forEach(function(E){const M=`${c}.${n}::`+E,w=k.prototype;try{if(w.hasOwnProperty(E)){const j=t.ObjectGetOwnPropertyDescriptor(w,E);j&&j.value?(j.value=t.wrapWithCurrentZone(j.value,M),t._redefineProperty(k.prototype,E,j)):w[E]&&(w[E]=t.wrapWithCurrentZone(w[E],M))}else w[E]&&(w[E]=t.wrapWithCurrentZone(w[E],M))}catch{}}),_.call(r,T,k,R)},t.attachOriginToPatched(r[n],_)}const ct=function te(){const t=globalThis,r=!0===t[Q("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function ae(){const t=ee.performance;function r(I){t&&t.mark&&t.mark(I)}function c(I,d){t&&t.measure&&t.measure(I,d)}r("Zone");let n=(()=>{class I{static#e=this.__symbol__=Q;static assertZonePatched(){if(ee.Promise!==L.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return y.zone}static get currentTask(){return O}static __load_patch(e,o,p=!1){if(L.hasOwnProperty(e)){const N=!0===ee[Q("forceDuplicateZoneCheck")];if(!p&&N)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const N="Zone:"+e;r(N),L[e]=o(ee,I,C),c(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const p=this._zoneDelegate.intercept(this,e,o),N=this;return function(){return N.runGuarded(p,this,arguments,o)}}run(e,o,p,N){y={parent:y,zone:this};try{return this._zoneDelegate.invoke(this,e,o,p,N)}finally{y=y.parent}}runGuarded(e,o=null,p,N){y={parent:y,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,p,N)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{y=y.parent}}runTask(e,o,p){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||ce).name+"; Execution: "+this.name+")");if(e.state===q&&(e.type===V||e.type===g))return;const N=e.state!=F;N&&e._transitionTo(F,h),e.runCount++;const $=O;O=e,y={parent:y,zone:this};try{e.type==g&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,p)}catch(Z){if(this._zoneDelegate.handleError(this,Z))throw Z}}finally{e.state!==q&&e.state!==Y&&(e.type==V||e.data&&e.data.isPeriodic?N&&e._transitionTo(h,F):(e.runCount=0,this._updateTaskCount(e,-1),N&&e._transitionTo(q,F,q))),y=y.parent,O=$}}scheduleTask(e){if(e.zone&&e.zone!==this){let p=this;for(;p;){if(p===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);p=p.parent}}e._transitionTo(v,q);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(p){throw e._transitionTo(Y,v,q),this._zoneDelegate.handleError(this,p),p}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,o,p,N){return this.scheduleTask(new _(G,e,o,p,N,void 0))}scheduleMacroTask(e,o,p,N,$){return this.scheduleTask(new _(g,e,o,p,N,$))}scheduleEventTask(e,o,p,N,$){return this.scheduleTask(new _(V,e,o,p,N,$))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||ce).name+"; Execution: "+this.name+")");if(e.state===h||e.state===F){e._transitionTo(z,h,F);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(Y,z),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(q,z),e.runCount=0,e}}_updateTaskCount(e,o){const p=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let N=0;N<p.length;N++)p[N]._updateTaskCount(e.type,o)}}return I})();const i={name:"",onHasTask:(I,d,e,o)=>I.hasTask(e,o),onScheduleTask:(I,d,e,o)=>I.scheduleTask(e,o),onInvokeTask:(I,d,e,o,p,N)=>I.invokeTask(e,o,p,N),onCancelTask:(I,d,e,o)=>I.cancelTask(e,o)};class l{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const p=o&&o.onHasTask;(p||e&&e._hasTaskZS)&&(this._hasTaskZS=p?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,p,N){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,p,N):e.apply(o,p)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=G)throw new Error("Task is missing scheduleFn.");W(e)}return o}invokeTask(d,e,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,p):e.callback.apply(o,p)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,p=o[d],N=o[d]=p+e;if(N<0)throw new Error("More tasks executed then were scheduled.");0!=p&&0!=N||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,p,N,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=p,this.scheduleFn=N,this.cancelFn=$,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;this.invoke=d===V&&p&&p.useG?_.invokeTask:function(){return _.invokeTask.call(ee,Z,this,arguments)}}static invokeTask(d,e,o){d||(d=this),ne++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==ne&&x(),ne--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,v)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const T=Q("setTimeout"),k=Q("Promise"),R=Q("then");let w,E=[],M=!1;function j(I){if(w||ee[k]&&(w=ee[k].resolve(0)),w){let d=w[R];d||(d=w.then),d.call(w,I)}else ee[T](I,0)}function W(I){0===ne&&0===E.length&&j(x),I&&E.push(I)}function x(){if(!M){for(M=!0;E.length;){const I=E;E=[];for(let d=0;d<I.length;d++){const e=I[d];try{e.zone.runTask(e,null,null)}catch(o){C.onUnhandledError(o)}}}C.microtaskDrainDone(),M=!1}}const ce={name:"NO ZONE"},q="notScheduled",v="scheduling",h="scheduled",F="running",z="canceling",Y="unknown",G="microTask",g="macroTask",V="eventTask",L={},C={symbol:Q,currentZoneFrame:()=>y,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:W,showUncaughtError:()=>!n[Q("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:j};let y={parent:null,zone:new n(null,null)},O=null,ne=0;function X(){}return c("Zone","Zone"),n}(),t.Zone}();(function Nt(t){(function Rt(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,T=n.symbol,k=[],R=!1!==r[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],E=T("Promise"),M=T("then"),w="__creationTrace__";n.onUnhandledError=u=>{if(n.showUncaughtError()){const s=u&&u.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(u)}},n.microtaskDrainDone=()=>{for(;k.length;){const u=k.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(s){W(s)}}};const j=T("unhandledPromiseRejectionHandler");function W(u){n.onUnhandledError(u);try{const s=c[j];"function"==typeof s&&s.call(this,u)}catch{}}function x(u){return u&&u.then}function ce(u){return u}function q(u){return Z.reject(u)}const v=T("state"),h=T("value"),F=T("finally"),z=T("parentPromiseValue"),Y=T("parentPromiseState"),G="Promise.then",g=null,V=!0,L=!1,C=0;function y(u,s){return a=>{try{I(u,s,a)}catch(f){I(u,!1,f)}}}const O=function(){let u=!1;return function(a){return function(){u||(u=!0,a.apply(null,arguments))}}},ne="Promise resolved with itself",X=T("currentTaskTrace");function I(u,s,a){const f=O();if(u===a)throw new TypeError(ne);if(u[v]===g){let b=null;try{("object"==typeof a||"function"==typeof a)&&(b=a&&a.then)}catch(D){return f(()=>{I(u,!1,D)})(),u}if(s!==L&&a instanceof Z&&a.hasOwnProperty(v)&&a.hasOwnProperty(h)&&a[v]!==g)e(a),I(u,a[v],a[h]);else if(s!==L&&"function"==typeof b)try{b.call(a,f(y(u,s)),f(y(u,!1)))}catch(D){f(()=>{I(u,!1,D)})()}else{u[v]=s;const D=u[h];if(u[h]=a,u[F]===F&&s===V&&(u[v]=u[Y],u[h]=u[z]),s===L&&a instanceof Error){const m=c.currentTask&&c.currentTask.data&&c.currentTask.data[w];m&&l(a,X,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<D.length;)o(u,D[m++],D[m++],D[m++],D[m++]);if(0==D.length&&s==L){u[v]=C;let m=a;try{throw new Error("Uncaught (in promise): "+function _(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(P){m=P}R&&(m.throwOriginal=!0),m.rejection=a,m.promise=u,m.zone=c.current,m.task=c.currentTask,k.push(m),n.scheduleMicroTask()}}}return u}const d=T("rejectionHandledHandler");function e(u){if(u[v]===C){try{const s=c[d];s&&"function"==typeof s&&s.call(this,{rejection:u[h],promise:u})}catch{}u[v]=L;for(let s=0;s<k.length;s++)u===k[s].promise&&k.splice(s,1)}}function o(u,s,a,f,b){e(u);const D=u[v],m=D?"function"==typeof f?f:ce:"function"==typeof b?b:q;s.scheduleMicroTask(G,()=>{try{const P=u[h],S=!!a&&F===a[F];S&&(a[z]=P,a[Y]=D);const A=s.run(m,void 0,S&&m!==q&&m!==ce?[]:[P]);I(a,!0,A)}catch(P){I(a,!1,P)}},a)}const N=function(){},$=r.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return s instanceof Z?s:I(new this(null),V,s)}static reject(s){return I(new this(null),L,s)}static withResolvers(){const s={};return s.promise=new Z((a,f)=>{s.resolve=a,s.reject=f}),s}static any(s){if(!s||"function"!=typeof s[Symbol.iterator])return Promise.reject(new $([],"All promises were rejected"));const a=[];let f=0;try{for(let m of s)f++,a.push(Z.resolve(m))}catch{return Promise.reject(new $([],"All promises were rejected"))}if(0===f)return Promise.reject(new $([],"All promises were rejected"));let b=!1;const D=[];return new Z((m,P)=>{for(let S=0;S<a.length;S++)a[S].then(A=>{b||(b=!0,m(A))},A=>{D.push(A),f--,0===f&&(b=!0,P(new $(D,"All promises were rejected")))})})}static race(s){let a,f,b=new this((P,S)=>{a=P,f=S});function D(P){a(P)}function m(P){f(P)}for(let P of s)x(P)||(P=this.resolve(P)),P.then(D,m);return b}static all(s){return Z.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(s,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(s,a){let f,b,D=new this((A,B)=>{f=A,b=B}),m=2,P=0;const S=[];for(let A of s){x(A)||(A=this.resolve(A));const B=P;try{A.then(J=>{S[B]=a?a.thenCallback(J):J,m--,0===m&&f(S)},J=>{a?(S[B]=a.errorCallback(J),m--,0===m&&f(S)):b(J)})}catch(J){b(J)}m++,P++}return m-=2,0===m&&f(S),D}constructor(s){const a=this;if(!(a instanceof Z))throw new Error("Must be an instanceof Promise.");a[v]=g,a[h]=[];try{const f=O();s&&s(f(y(a,V)),f(y(a,L)))}catch(f){I(a,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(s,a){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||Z);const b=new f(N),D=c.current;return this[v]==g?this[h].push(D,b,s,a):o(this,D,b,s,a),b}catch(s){return this.then(null,s)}finally(s){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=Z);const f=new a(N);f[F]=F;const b=c.current;return this[v]==g?this[h].push(b,f,s,s):o(this,b,f,s,s),f}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const Me=r[E]=r.Promise;r.Promise=Z;const Se=T("thenPatched");function me(u){const s=u.prototype,a=i(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const f=s.then;s[M]=f,u.prototype.then=function(b,D){return new Z((P,S)=>{f.call(this,P,S)}).then(b,D)},u[Se]=!0}return n.patchThen=me,Me&&(me(Me),Ee(r,"fetch",u=>function Ze(u){return function(s,a){let f=u.apply(s,a);if(f instanceof Z)return f;let b=f.constructor;return b[Se]||me(b),f}}(u))),Promise[c.__symbol__("uncaughtPromiseErrors")]=k,Z})})(t),function Dt(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),l=H("Error"),_=function(){if("function"==typeof this){const E=this[n];if(E)return"function"==typeof E?c.call(E):Object.prototype.toString.call(E);if(this===Promise){const M=r[i];if(M)return c.call(M)}if(this===Error){const M=r[l];if(M)return c.call(M)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const T=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":T.call(this)}})}(t),function Ot(t){t.__load_patch("util",(r,c,n)=>{const i=Ue(r);n.patchOnProperties=Je,n.patchMethod=Ee,n.bindArguments=Ge,n.patchMacroTask=Tt;const l=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[l]=r[_]),r[l]&&(c[l]=c[_]=r[l]),n.patchEventPrototype=mt,n.patchEventTarget=pt,n.isIEOrEdge=gt,n.ObjectDefineProperty=oe,n.ObjectGetOwnPropertyDescriptor=fe,n.ObjectCreate=he,n.ArraySlice=de,n.patchClass=De,n.wrapWithCurrentZone=xe,n.filterProperties=st,n.attachOriginToPatched=ge,n._redefineProperty=Object.defineProperty,n.patchCallbacks=St,n.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:se,eventNames:i,isBrowser:Ve,isMix:Ye,isNode:Ne,TRUE_STR:_e,FALSE_STR:Te,ZONE_SYMBOL_PREFIX:Re,ADD_EVENT_LISTENER_STR:pe,REMOVE_EVENT_LISTENER_STR:ke})})}(t)})(ct),function Ct(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";Pe(r,c,n,"Timeout"),Pe(r,c,n,"Interval"),Pe(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Pe(r,"request","cancel","AnimationFrame"),Pe(r,"mozRequest","mozCancel","AnimationFrame"),Pe(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)Ee(r,n[i],(_,T,k)=>function(R,E){return c.current.run(_,r,E,k)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function Pt(t,r){r.patchEventPrototype(t,r)})(r,n),function bt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let k=0;k<c.length;k++){const R=c[k],w=_+(R+l),j=_+(R+i);n[R]={},n[R][l]=w,n[R][i]=j}const T=t.EventTarget;T&&T.prototype&&r.patchEventTarget(t,r,[T&&T.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{De("MutationObserver"),De("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{De("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{De("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function wt(t,r){if(Ne&&!Ye||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(Ve){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function Et(){try{const t=ve.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];it(i,Ue(i),c&&c.concat(l),U(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const l=r[n[i]];l&&l.prototype&&it(l.prototype,Ue(l.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function vt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function R(E){const M=E.XMLHttpRequest;if(!M)return;const w=M.prototype;let W=w[je],x=w[He];if(!W){const C=E.XMLHttpRequestEventTarget;if(C){const y=C.prototype;W=y[je],x=y[He]}}const ce="readystatechange",q="scheduled";function v(C){const y=C.data,O=y.target;O[_]=!1,O[k]=!1;const ne=O[l];W||(W=O[je],x=O[He]),ne&&x.call(O,ce,ne);const X=O[l]=()=>{if(O.readyState===O.DONE)if(!y.aborted&&O[_]&&C.state===q){const d=O[c.__symbol__("loadfalse")];if(0!==O.status&&d&&d.length>0){const e=C.invoke;C.invoke=function(){const o=O[c.__symbol__("loadfalse")];for(let p=0;p<o.length;p++)o[p]===C&&o.splice(p,1);!y.aborted&&C.state===q&&e.call(C)},d.push(C)}else C.invoke()}else!y.aborted&&!1===O[_]&&(O[k]=!0)};return W.call(O,ce,X),O[n]||(O[n]=C),V.apply(O,y.args),O[_]=!0,C}function h(){}function F(C){const y=C.data;return y.aborted=!0,L.apply(y.target,y.args)}const z=Ee(w,"open",()=>function(C,y){return C[i]=0==y[2],C[T]=y[1],z.apply(C,y)}),G=H("fetchTaskAborting"),g=H("fetchTaskScheduling"),V=Ee(w,"send",()=>function(C,y){if(!0===c.current[g]||C[i])return V.apply(C,y);{const O={target:C,url:C[T],isPeriodic:!1,args:y,aborted:!1},ne=Fe("XMLHttpRequest.send",h,O,v,F);C&&!0===C[k]&&!O.aborted&&ne.state===q&&ne.invoke()}}),L=Ee(w,"abort",()=>function(C,y){const O=function j(C){return C[n]}(C);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===c.current[G])return L.apply(C,y)})}(r);const n=H("xhrTask"),i=H("xhrSync"),l=H("xhrListener"),_=H("xhrScheduled"),T=H("xhrURL"),k=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function _t(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],l=t[i];if(l){if(!Xe(fe(t,i)))continue;t[i]=(T=>{const k=function(){return T.apply(this,Ge(arguments,c+"."+i))};return ge(k,T),k})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(l){ot(r,i).forEach(T=>{const k=r.PromiseRejectionEvent;if(k){const R=new k(i,{promise:l.promise,reason:l.rejection});T.invoke(R)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function yt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(ct)}},ee=>{ee(ee.s=12798)}]);