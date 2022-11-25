(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function se(){}const it=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function qe(){return Object.create(null)}function ee(t){t.forEach(rt)}function Ae(t){return typeof t=="function"}function Ye(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function $t(t,e,n,r){if(t){const s=lt(t,e,n,r);return t[0](s)}}function lt(t,e,n,r){return t[1]&&r?pt(n.ctx.slice(),t[1](r(e))):n.ctx}function vt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)i[l]=e.dirty[l]|s[l];return i}return e.dirty|s}return e.dirty}function gt(t,e,n,r,s,i){if(s){const o=lt(e,n,r,i);t.p(o,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const ot=typeof window<"u";let bt=ot?()=>window.performance.now():()=>Date.now(),je=ot?t=>requestAnimationFrame(t):se;const fe=new Set;function ut(t){fe.forEach(e=>{e.c(t)||(fe.delete(e),e.f())}),fe.size!==0&&je(ut)}function wt(t){let e;return fe.size===0&&je(ut),{promise:new Promise(n=>{fe.add(e={c:t,f:n})}),abort(){fe.delete(e)}}}function v(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=M("style");return Mt(at(t),e),e.sheet}function Mt(t,e){return v(t.head||t,e),e.sheet}function j(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function E(){return X(" ")}function St(){return X("")}function K(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return t===""?null:+t}function Dt(t){return Array.from(t.childNodes)}function We(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function ae(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ce(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Re(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const Oe=new Map;let Te=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:kt(e),rules:{}};return Oe.set(t,n),n}function Be(t,e,n,r,s,i,o,l=0){const f=16.666/r;let c=`{
`;for(let S=0;S<=1;S+=f){const D=e+(n-e)*i(S);c+=S*100+`%{${o(D,1-D)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Tt(h)}_${l}`,a=at(t),{stylesheet:k,rules:d}=Oe.get(a)||Nt(a,t);d[u]||(d[u]=!0,k.insertRule(`@keyframes ${u} ${h}`,k.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${r}ms linear ${s}ms 1 both`,Te+=1,u}function Yt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),Te-=s,Te||zt())}function zt(){je(()=>{Te||(Oe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),Oe.clear())})}let be;function ve(t){be=t}function Ct(){if(!be)throw new Error("Function called outside component initialization");return be}function Je(t){Ct().$$.on_mount.push(t)}const _e=[],Ze=[],Me=[],Qe=[],Ht=Promise.resolve();let Ie=!1;function Lt(){Ie||(Ie=!0,Ht.then(ft))}function F(t){Me.push(t)}const He=new Set;let ke=0;function ft(){const t=be;do{for(;ke<_e.length;){const e=_e[ke];ke++,ve(e),It(e.$$)}for(ve(null),_e.length=0,ke=0;Ze.length;)Ze.pop()();for(let e=0;e<Me.length;e+=1){const n=Me[e];He.has(n)||(He.add(n),n())}Me.length=0}while(_e.length);for(;Qe.length;)Qe.pop()();Ie=!1,He.clear(),ve(t)}function It(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let pe;function At(){return pe||(pe=Promise.resolve(),pe.then(()=>{pe=null})),pe}function Le(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const Se=new Set;let ne;function ge(){ne={r:0,c:[],p:ne}}function ye(){ne.r||ee(ne.c),ne=ne.p}function P(t,e){t&&t.i&&(Se.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(Se.has(t))return;Se.add(t),ne.c.push(()=>{Se.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const jt={duration:0};function G(t,e,n,r){let s=e(t,n),i=r?0:1,o=null,l=null,f=null;function c(){f&&Yt(t,f)}function h(a,k){const d=a.b-i;return k*=Math.abs(d),{a:i,b:a.b,d,duration:k,start:a.start,end:a.start+k,group:a.group}}function u(a){const{delay:k=0,duration:d=300,easing:g=it,tick:S=se,css:D}=s||jt,p={start:bt()+k,b:a};a||(p.group=ne,ne.r+=1),o||l?l=p:(D&&(c(),f=Be(t,i,a,d,k,g,D)),a&&S(0,1),o=h(p,d),F(()=>Le(t,a,"start")),wt(H=>{if(l&&H>l.start&&(o=h(l,d),l=null,Le(t,o.b,"start"),D&&(c(),f=Be(t,i,o.b,o.duration,0,g,s.css))),o){if(H>=o.end)S(i=o.b,1-i),Le(t,o.b,"end"),l||(o.b?c():--o.group.r||ee(o.group.c)),o=null;else if(H>=o.start){const J=H-o.start;i=o.a+o.d*g(J/o.duration),S(i,1-i)}}return!!(o||l)}))}return{run(a){Ae(s)?At().then(()=>{s=s(),u(a)}):u(a)},end(){c(),o=l=null}}}function ce(t){t&&t.c()}function le(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||F(()=>{const o=t.$$.on_mount.map(rt).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...o):ee(o),t.$$.on_mount=[]}),i.forEach(F)}function oe(t,e){const n=t.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(_e.push(t),Lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,r,s,i,o,l=[-1]){const f=be;ve(t);const c=t.$$={fragment:null,ctx:[],props:i,update:se,not_equal:s,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:qe(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(u,a,...k)=>{const d=k.length?k[0]:a;return c.ctx&&s(c.ctx[u],c.ctx[u]=d)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](d),h&&Et(t,u)),a}):[],c.update(),h=!0,ee(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const u=Dt(e.target);c.fragment&&c.fragment.l(u),u.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),ft()}ve(f)}class Ue{$destroy(){oe(this,1),this.$destroy=se}$on(e,n){if(!Ae(n))return se;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ut(t){const e=t-1;return e*e*e+1}function x(t,{delay:e=0,duration:n=400,easing:r=it}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}function Ve(t,{delay:e=0,duration:n=400,easing:r=Ut,x:s=0,y:i=0,opacity:o=0}={}){const l=getComputedStyle(t),f=+l.opacity,c=l.transform==="none"?"":l.transform,h=f*(1-o);return{delay:e,duration:n,easing:r,css:(u,a)=>`
			transform: ${c} translate(${(1-u)*s}px, ${(1-u)*i}px);
			opacity: ${f-h*a}`}}var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Pe,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",o="second",l="minute",f="hour",c="day",h="week",u="month",a="quarter",k="year",d="date",g="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(T){var y=["th","st","nd","rd"],_=T%100;return"["+T+(y[(_-20)%10]||y[_]||y[0])+"]"}},H=function(T,y,_){var N=String(T);return!N||N.length>=y?T:""+Array(y+1-N.length).join(_)+T},J={s:H,z:function(T){var y=-T.utcOffset(),_=Math.abs(y),N=Math.floor(_/60),$=_%60;return(y<=0?"+":"-")+H(N,2,"0")+":"+H($,2,"0")},m:function T(y,_){if(y.date()<_.date())return-T(_,y);var N=12*(_.year()-y.year())+(_.month()-y.month()),$=y.clone().add(N,u),C=_-$<0,Y=y.clone().add(N+(C?-1:1),u);return+(-(N+(_-$)/(C?$-Y:Y-$))||0)},a:function(T){return T<0?Math.ceil(T)||0:Math.floor(T)},p:function(T){return{M:u,y:k,w:h,d:c,D:d,h:f,m:l,s:o,ms:i,Q:a}[T]||String(T||"").toLowerCase().replace(/s$/,"")},u:function(T){return T===void 0}},L="en",m={};m[L]=p;var b=function(T){return T instanceof W},I=function T(y,_,N){var $;if(!y)return L;if(typeof y=="string"){var C=y.toLowerCase();m[C]&&($=C),_&&(m[C]=_,$=C);var Y=y.split("-");if(!$&&Y.length>1)return T(Y[0])}else{var U=y.name;m[U]=y,$=U}return!N&&$&&(L=$),$||!N&&L},z=function(T,y){if(b(T))return T.clone();var _=typeof y=="object"?y:{};return _.date=T,_.args=arguments,new W(_)},O=J;O.l=I,O.i=b,O.w=function(T,y){return z(T,{locale:y.$L,utc:y.$u,x:y.$x,$offset:y.$offset})};var W=function(){function T(_){this.$L=I(_.locale,null,!0),this.parse(_)}var y=T.prototype;return y.parse=function(_){this.$d=function(N){var $=N.date,C=N.utc;if($===null)return new Date(NaN);if(O.u($))return new Date;if($ instanceof Date)return new Date($);if(typeof $=="string"&&!/Z$/i.test($)){var Y=$.match(S);if(Y){var U=Y[2]-1||0,B=(Y[7]||"0").substring(0,3);return C?new Date(Date.UTC(Y[1],U,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,B)):new Date(Y[1],U,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,B)}}return new Date($)}(_),this.$x=_.x||{},this.init()},y.init=function(){var _=this.$d;this.$y=_.getFullYear(),this.$M=_.getMonth(),this.$D=_.getDate(),this.$W=_.getDay(),this.$H=_.getHours(),this.$m=_.getMinutes(),this.$s=_.getSeconds(),this.$ms=_.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return this.$d.toString()!==g},y.isSame=function(_,N){var $=z(_);return this.startOf(N)<=$&&$<=this.endOf(N)},y.isAfter=function(_,N){return z(_)<this.startOf(N)},y.isBefore=function(_,N){return this.endOf(N)<z(_)},y.$g=function(_,N,$){return O.u(_)?this[N]:this.set($,_)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(_,N){var $=this,C=!!O.u(N)||N,Y=O.p(_),U=function(ue,V){var re=O.w($.$u?Date.UTC($.$y,V,ue):new Date($.$y,V,ue),$);return C?re:re.endOf(c)},B=function(ue,V){return O.w($.toDate()[ue].apply($.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(V)),$)},q=this.$W,Q=this.$M,ie=this.$D,te="set"+(this.$u?"UTC":"");switch(Y){case k:return C?U(1,0):U(31,11);case u:return C?U(1,Q):U(0,Q+1);case h:var he=this.$locale().weekStart||0,me=(q<he?q+7:q)-he;return U(C?ie-me:ie+(6-me),Q);case c:case d:return B(te+"Hours",0);case f:return B(te+"Minutes",1);case l:return B(te+"Seconds",2);case o:return B(te+"Milliseconds",3);default:return this.clone()}},y.endOf=function(_){return this.startOf(_,!1)},y.$set=function(_,N){var $,C=O.p(_),Y="set"+(this.$u?"UTC":""),U=($={},$[c]=Y+"Date",$[d]=Y+"Date",$[u]=Y+"Month",$[k]=Y+"FullYear",$[f]=Y+"Hours",$[l]=Y+"Minutes",$[o]=Y+"Seconds",$[i]=Y+"Milliseconds",$)[C],B=C===c?this.$D+(N-this.$W):N;if(C===u||C===k){var q=this.clone().set(d,1);q.$d[U](B),q.init(),this.$d=q.set(d,Math.min(this.$D,q.daysInMonth())).$d}else U&&this.$d[U](B);return this.init(),this},y.set=function(_,N){return this.clone().$set(_,N)},y.get=function(_){return this[O.p(_)]()},y.add=function(_,N){var $,C=this;_=Number(_);var Y=O.p(N),U=function(Q){var ie=z(C);return O.w(ie.date(ie.date()+Math.round(Q*_)),C)};if(Y===u)return this.set(u,this.$M+_);if(Y===k)return this.set(k,this.$y+_);if(Y===c)return U(1);if(Y===h)return U(7);var B=($={},$[l]=r,$[f]=s,$[o]=n,$)[Y]||1,q=this.$d.getTime()+_*B;return O.w(q,this)},y.subtract=function(_,N){return this.add(-1*_,N)},y.format=function(_){var N=this,$=this.$locale();if(!this.isValid())return $.invalidDate||g;var C=_||"YYYY-MM-DDTHH:mm:ssZ",Y=O.z(this),U=this.$H,B=this.$m,q=this.$M,Q=$.weekdays,ie=$.months,te=function(V,re,ze,we){return V&&(V[re]||V(N,C))||ze[re].slice(0,we)},he=function(V){return O.s(U%12||12,V,"0")},me=$.meridiem||function(V,re,ze){var we=V<12?"AM":"PM";return ze?we.toLowerCase():we},ue={YY:String(this.$y).slice(-2),YYYY:this.$y,M:q+1,MM:O.s(q+1,2,"0"),MMM:te($.monthsShort,q,ie,3),MMMM:te(ie,q),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:te($.weekdaysMin,this.$W,Q,2),ddd:te($.weekdaysShort,this.$W,Q,3),dddd:Q[this.$W],H:String(U),HH:O.s(U,2,"0"),h:he(1),hh:he(2),a:me(U,B,!0),A:me(U,B,!1),m:String(B),mm:O.s(B,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:Y};return C.replace(D,function(V,re){return re||ue[V]||Y.replace(":","")})},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(_,N,$){var C,Y=O.p(N),U=z(_),B=(U.utcOffset()-this.utcOffset())*r,q=this-U,Q=O.m(this,U);return Q=(C={},C[k]=Q/12,C[u]=Q,C[a]=Q/3,C[h]=(q-B)/6048e5,C[c]=(q-B)/864e5,C[f]=q/s,C[l]=q/r,C[o]=q/n,C)[Y]||q,$?Q:O.a(Q)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return m[this.$L]},y.locale=function(_,N){if(!_)return this.$L;var $=this.clone(),C=I(_,N,!0);return C&&($.$L=C),$},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},T}(),R=W.prototype;return z.prototype=R,[["$ms",i],["$s",o],["$m",l],["$H",f],["$W",c],["$M",u],["$y",k],["$D",d]].forEach(function(T){R[T[1]]=function(y){return this.$g(y,T[0],T[1])}}),z.extend=function(T,y){return T.$i||(T(y,W,z),T.$i=!0),z},z.locale=I,z.isDayjs=b,z.unix=function(T){return z(1e3*T)},z.en=m[L],z.Ls=m,z.p={},z})})(dt);const Ne=dt.exports;var ht={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Pe,function(){var n,r,s=1e3,i=6e4,o=36e5,l=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,h=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,a={years:c,months:h,days:l,hours:o,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},k=function(L){return L instanceof J},d=function(L,m,b){return new J(L,b,m.$l)},g=function(L){return r.p(L)+"s"},S=function(L){return L<0},D=function(L){return S(L)?Math.ceil(L):Math.floor(L)},p=function(L){return Math.abs(L)},H=function(L,m){return L?S(L)?{negative:!0,format:""+p(L)+m}:{negative:!1,format:""+L+m}:{negative:!1,format:""}},J=function(){function L(b,I,z){var O=this;if(this.$d={},this.$l=z,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return d(b*a[g(I)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(T){O.$d[g(T)]=b[T]}),this.calMilliseconds(),this;if(typeof b=="string"){var W=b.match(u);if(W){var R=W.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=R[0],this.$d.months=R[1],this.$d.weeks=R[2],this.$d.days=R[3],this.$d.hours=R[4],this.$d.minutes=R[5],this.$d.seconds=R[6],this.calMilliseconds(),this}}return this}var m=L.prototype;return m.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(I,z){return I+(b.$d[z]||0)*a[z]},0)},m.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/c),b%=c,this.$d.months=D(b/h),b%=h,this.$d.days=D(b/l),b%=l,this.$d.hours=D(b/o),b%=o,this.$d.minutes=D(b/i),b%=i,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},m.toISOString=function(){var b=H(this.$d.years,"Y"),I=H(this.$d.months,"M"),z=+this.$d.days||0;this.$d.weeks&&(z+=7*this.$d.weeks);var O=H(z,"D"),W=H(this.$d.hours,"H"),R=H(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3);var y=H(T,"S"),_=b.negative||I.negative||O.negative||W.negative||R.negative||y.negative,N=W.format||R.format||y.format?"T":"",$=(_?"-":"")+"P"+b.format+I.format+O.format+N+W.format+R.format+y.format;return $==="P"||$==="-P"?"P0D":$},m.toJSON=function(){return this.toISOString()},m.format=function(b){var I=b||"YYYY-MM-DDTHH:mm:ss",z={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return I.replace(f,function(O,W){return W||String(z[O])})},m.as=function(b){return this.$ms/a[g(b)]},m.get=function(b){var I=this.$ms,z=g(b);return z==="milliseconds"?I%=1e3:I=z==="weeks"?D(I/a[z]):this.$d[z],I===0?0:I},m.add=function(b,I,z){var O;return O=I?b*a[g(I)]:k(b)?b.$ms:d(b,this).$ms,d(this.$ms+O*(z?-1:1),this)},m.subtract=function(b,I){return this.add(b,I,!0)},m.locale=function(b){var I=this.clone();return I.$l=b,I},m.clone=function(){return d(this.$ms,this)},m.humanize=function(b){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},L}();return function(L,m,b){n=b,r=b().$utils(),b.duration=function(O,W){var R=b.locale();return d(O,{$l:R},W)},b.isDuration=k;var I=m.prototype.add,z=m.prototype.subtract;m.prototype.add=function(O,W){return k(O)&&(O=O.asMilliseconds()),I.bind(this)(O,W)},m.prototype.subtract=function(O,W){return k(O)&&(O=O.asMilliseconds()),z.bind(this)(O,W)}}})})(ht);const Pt=ht.exports;var mt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Pe,function(){return function(n,r,s){n=n||{};var i=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function l(c,h,u,a){return i.fromToBase(c,h,u,a)}s.en.relativeTime=o,i.fromToBase=function(c,h,u,a,k){for(var d,g,S,D=u.$locale().relativeTime||o,p=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],H=p.length,J=0;J<H;J+=1){var L=p[J];L.d&&(d=a?s(c).diff(u,L.d,!0):u.diff(c,L.d,!0));var m=(n.rounding||Math.round)(Math.abs(d));if(S=d>0,m<=L.r||!L.r){m<=1&&J>0&&(L=p[J-1]);var b=D[L.l];k&&(m=k(""+m)),g=typeof b=="string"?b.replace("%d",m):b(m,h,L.l,S);break}}if(h)return g;var I=S?D.future:D.past;return typeof I=="function"?I(g):I.replace("%s",g)},i.to=function(c,h){return l(c,h,this,!0)},i.from=function(c,h){return l(c,h,this)};var f=function(c){return c.$u?s.utc():s()};i.toNow=function(c){return this.to(f(this),c)},i.fromNow=function(c){return this.from(f(this),c)}}})})(mt);const qt=mt.exports;function Wt(t){let e,n,r,s;const i=t[1].default,o=$t(i,t,t[0],null);return{c(){e=M("div"),o&&o.c(),n=E(),r=M("div"),w(e,"class","content"),w(r,"class","divider")},m(l,f){j(l,e,f),o&&o.m(e,null),j(l,n,f),j(l,r,f),s=!0},p(l,[f]){o&&o.p&&(!s||f&1)&&gt(o,i,l,l[0],s?vt(i,l[0],f,null):yt(l[0]),null)},i(l){s||(P(o,l),s=!0)},o(l){Z(o,l),s=!1},d(l){l&&A(e),o&&o.d(l),l&&A(n),l&&A(r)}}}function Rt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class $e extends Ue{constructor(e){super(),Ee(this,e,Rt,Wt,Ye,{})}}function Bt(t,e,n){const r=t.slice();return r[19]=e[n],r}function Jt(t,e,n){const r=t.slice();return r[19]=e[n],r}function Fe(t){let e,n,r,s,i,o,l,f,c;e=new $e({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}});let h=t[0].need===!1&&Ge(t);return s=new $e({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),o=new $e({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),f=new $e({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment),n=E(),h&&h.c(),r=E(),ce(s.$$.fragment),i=E(),ce(o.$$.fragment),l=E(),ce(f.$$.fragment)},m(u,a){le(e,u,a),j(u,n,a),h&&h.m(u,a),j(u,r,a),le(s,u,a),j(u,i,a),le(o,u,a),j(u,l,a),le(f,u,a),c=!0},p(u,a){const k={};a&16777217&&(k.$$scope={dirty:a,ctx:u}),e.$set(k),u[0].need===!1?h?(h.p(u,a),a&1&&P(h,1)):(h=Ge(u),h.c(),P(h,1),h.m(r.parentNode,r)):h&&(ge(),Z(h,1,1,()=>{h=null}),ye());const d={};a&16777219&&(d.$$scope={dirty:a,ctx:u}),s.$set(d);const g={};a&16777217&&(g.$$scope={dirty:a,ctx:u}),o.$set(g);const S={};a&16777219&&(S.$$scope={dirty:a,ctx:u}),f.$set(S)},i(u){c||(P(e.$$.fragment,u),P(h),P(s.$$.fragment,u),P(o.$$.fragment,u),P(f.$$.fragment,u),c=!0)},o(u){Z(e.$$.fragment,u),Z(h),Z(s.$$.fragment,u),Z(o.$$.fragment,u),Z(f.$$.fragment,u),c=!1},d(u){oe(e,u),u&&A(n),h&&h.d(u),u&&A(r),oe(s,u),u&&A(i),oe(o,u),u&&A(l),oe(f,u)}}}function Zt(t){let e,n,r,s,i,o,l,f,c,h,u,a,k,d,g,S,D;return{c(){e=M("div"),n=M("label"),n.innerHTML='<span class="label-text">Do you need it?</span>',r=E(),s=M("label"),i=M("input"),o=E(),l=M("span"),l.textContent="Yes",c=E(),h=M("div"),u=M("label"),a=M("input"),k=E(),d=M("span"),d.textContent="No",w(n,"class","label svelte-1ezkcxs"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500 svelte-1ezkcxs"),i.__value=!0,i.value=i.__value,t[7][0].push(i),w(l,"class","label-text svelte-1ezkcxs"),w(s,"class","label cursor-pointer svelte-1ezkcxs"),w(e,"class","form-control"),w(a,"type","radio"),w(a,"class","radio checked:bg-red-500 svelte-1ezkcxs"),a.__value=!1,a.value=a.__value,t[7][0].push(a),w(d,"class","label-text svelte-1ezkcxs"),w(u,"class","label cursor-pointer svelte-1ezkcxs"),w(h,"class","form-control")},m(p,H){j(p,e,H),v(e,n),v(e,r),v(e,s),v(s,i),i.checked=i.__value===t[0].need,v(s,o),v(s,l),j(p,c,H),j(p,h,H),v(h,u),v(u,a),a.checked=a.__value===t[0].need,v(u,k),v(u,d),g=!0,S||(D=[K(i,"change",t[6]),K(a,"change",t[8])],S=!0)},p(p,H){H&1&&(i.checked=i.__value===p[0].need),H&1&&(a.checked=a.__value===p[0].need)},i(p){g||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),g=!0)},o(p){f||(f=G(e,x,{},!1)),f.run(0),g=!1},d(p){p&&A(e),t[7][0].splice(t[7][0].indexOf(i),1),p&&f&&f.end(),p&&A(c),p&&A(h),t[7][0].splice(t[7][0].indexOf(a),1),S=!1,ee(D)}}}function Ge(t){let e,n;return e=new $e({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment)},m(r,s){le(e,r,s),n=!0},p(r,s){const i={};s&16777217&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){Z(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function Qt(t){let e,n,r,s,i,o,l,f,c,h,u;return{c(){e=M("div"),n=M("label"),n.innerHTML='<span class="label-text">But do you want it?</span>',r=E(),s=M("label"),i=M("input"),o=E(),l=M("span"),l.textContent="Yes",w(n,"class","label svelte-1ezkcxs"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500 svelte-1ezkcxs"),i.__value=!0,i.value=i.__value,t[7][1].push(i),w(l,"class","label-text svelte-1ezkcxs"),w(s,"class","label cursor-pointer svelte-1ezkcxs"),w(e,"class","form-control")},m(a,k){j(a,e,k),v(e,n),v(e,r),v(e,s),v(s,i),i.checked=i.__value===t[0].want,v(s,o),v(s,l),c=!0,h||(u=K(i,"change",t[9]),h=!0)},p(a,k){k&1&&(i.checked=i.__value===a[0].want)},i(a){c||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),c=!0)},o(a){f||(f=G(e,x,{},!1)),f.run(0),c=!1},d(a){a&&A(e),t[7][1].splice(t[7][1].indexOf(i),1),a&&f&&f.end(),h=!1,u()}}}function Vt(t){let e,n;return{c(){e=M("option"),n=X(t[19]),e.__value=t[19],e.value=e.__value},m(r,s){j(r,e,s),v(e,n)},p:se,d(r){r&&A(e)}}}function Ft(t){let e,n,r,s,i,o,l,f,c,h,u,a=["$","\u20AC","\xA3","\xA5"],k=[];for(let d=0;d<4;d+=1)k[d]=Vt(Jt(t,a,d));return{c(){e=M("div"),n=M("label"),n.innerHTML='<span class="label-text">How much is it?</span>',r=E(),s=M("div"),i=M("select");for(let d=0;d<4;d+=1)k[d].c();o=E(),l=M("input"),w(n,"class","label svelte-1ezkcxs"),w(i,"class","select select-bordered"),t[1].currencyUnit===void 0&&F(()=>t[10].call(i)),w(l,"type","number"),w(l,"min","0"),w(l,"placeholder","Price"),w(l,"class","input input-bordered w-full max-w-xs"),w(s,"class","input-group"),w(e,"class","form-control")},m(d,g){j(d,e,g),v(e,n),v(e,r),v(e,s),v(s,i);for(let S=0;S<4;S+=1)k[S].m(i,null);ae(i,t[1].currencyUnit),v(s,o),v(s,l),de(l,t[0].price),c=!0,h||(u=[K(i,"change",t[10]),K(l,"input",t[11])],h=!0)},p(d,g){g&2&&ae(i,d[1].currencyUnit),g&1&&De(l.value)!==d[0].price&&de(l,d[0].price)},i(d){c||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),c=!0)},o(d){f||(f=G(e,x,{},!1)),f.run(0),c=!1},d(d){d&&A(e),ct(k,d),d&&f&&f.end(),h=!1,ee(u)}}}function Gt(t){let e,n,r,s,i,o,l,f,c,h,u,a,k,d,g,S,D;return{c(){e=M("div"),n=M("label"),n.innerHTML='<span class="label-text">Is it on sale?</span>',r=E(),s=M("label"),i=M("input"),o=E(),l=M("span"),l.textContent="Yes",c=E(),h=M("div"),u=M("label"),a=M("input"),k=E(),d=M("span"),d.textContent="No",w(n,"class","label svelte-1ezkcxs"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500 svelte-1ezkcxs"),i.__value=!0,i.value=i.__value,t[7][2].push(i),w(l,"class","label-text svelte-1ezkcxs"),w(s,"class","label cursor-pointer svelte-1ezkcxs"),w(e,"class","form-control"),w(a,"type","radio"),w(a,"class","radio checked:bg-red-500 svelte-1ezkcxs"),a.__value=!1,a.value=a.__value,t[7][2].push(a),w(d,"class","label-text svelte-1ezkcxs"),w(u,"class","label cursor-pointer svelte-1ezkcxs"),w(h,"class","form-control")},m(p,H){j(p,e,H),v(e,n),v(e,r),v(e,s),v(s,i),i.checked=i.__value===t[0].sale,v(s,o),v(s,l),j(p,c,H),j(p,h,H),v(h,u),v(u,a),a.checked=a.__value===t[0].sale,v(u,k),v(u,d),g=!0,S||(D=[K(i,"change",t[12]),K(a,"change",t[13])],S=!0)},p(p,H){H&1&&(i.checked=i.__value===p[0].sale),H&1&&(a.checked=a.__value===p[0].sale)},i(p){g||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),g=!0)},o(p){f||(f=G(e,x,{},!1)),f.run(0),g=!1},d(p){p&&A(e),t[7][2].splice(t[7][2].indexOf(i),1),p&&f&&f.end(),p&&A(c),p&&A(h),t[7][2].splice(t[7][2].indexOf(a),1),S=!1,ee(D)}}}function Kt(t){let e,n;return{c(){e=M("option"),n=X(t[19]),e.__value=t[19],e.value=e.__value},m(r,s){j(r,e,s),v(e,n)},p:se,d(r){r&&A(e)}}}function Xt(t){let e,n,r,s,i,o,l,f,c,h,u,a,k,d,g,S=["$","\u20AC","\xA3","\xA5"],D=[];for(let p=0;p<4;p+=1)D[p]=Kt(Bt(t,S,p));return{c(){e=M("div"),n=M("label"),n.innerHTML='<span class="label-text">What&#39;s your income?</span>',r=E(),s=M("div"),i=M("select");for(let p=0;p<4;p+=1)D[p].c();o=E(),l=M("input"),f=E(),c=M("select"),h=M("option"),h.textContent="per hour",u=M("option"),u.textContent="per year",w(n,"class","label svelte-1ezkcxs"),w(i,"class","select select-bordered"),t[1].currencyUnit===void 0&&F(()=>t[14].call(i)),w(l,"type","number"),w(l,"min","0"),w(l,"placeholder","Income"),w(l,"class","input input-bordered w-full max-w-xs"),h.__value="hr",h.value=h.__value,u.__value="yr",u.value=u.__value,w(c,"class","select select-bordered"),t[0].income.unit===void 0&&F(()=>t[16].call(c)),w(s,"class","input-group"),w(e,"class","form-control")},m(p,H){j(p,e,H),v(e,n),v(e,r),v(e,s),v(s,i);for(let J=0;J<4;J+=1)D[J].m(i,null);ae(i,t[1].currencyUnit),v(s,o),v(s,l),de(l,t[0].income.value),v(s,f),v(s,c),v(c,h),v(c,u),ae(c,t[0].income.unit),k=!0,d||(g=[K(i,"change",t[14]),K(l,"input",t[15]),K(c,"change",t[16])],d=!0)},p(p,H){H&2&&ae(i,p[1].currencyUnit),H&1&&De(l.value)!==p[0].income.value&&de(l,p[0].income.value),H&1&&ae(c,p[0].income.unit)},i(p){k||(F(()=>{a||(a=G(e,x,{},!0)),a.run(1)}),k=!0)},o(p){a||(a=G(e,x,{},!1)),a.run(0),k=!1},d(p){p&&A(e),ct(D,p),p&&a&&a.end(),d=!1,ee(g)}}}function Ke(t){let e,n,r,s=(t[1].isCalculating||t[1].showOptions!==!1)&&Xe(t),i=t[1].showOptions===null&&et(t);return{c(){e=M("div"),s&&s.c(),n=E(),i&&i.c(),w(e,"class","controlButtons svelte-1ezkcxs")},m(o,l){j(o,e,l),s&&s.m(e,null),v(e,n),i&&i.m(e,null),r=!0},p(o,l){o[1].isCalculating||o[1].showOptions!==!1?s?(s.p(o,l),l&2&&P(s,1)):(s=Xe(o),s.c(),P(s,1),s.m(e,n)):s&&(ge(),Z(s,1,1,()=>{s=null}),ye()),o[1].showOptions===null?i?i.p(o,l):(i=et(o),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(o){r||(P(s),r=!0)},o(o){Z(s),r=!1},d(o){o&&A(e),s&&s.d(),i&&i.d()}}}function Xe(t){let e,n,r,s,i,o,l=!t[1].isCalculating&&xe();return{c(){e=M("span"),n=M("button"),l&&l.c(),w(n,"class","btn btn-lg"),Re(n,"loading",t[1].isCalculating),w(e,"class","svelte-1ezkcxs")},m(f,c){j(f,e,c),v(e,n),l&&l.m(n,null),s=!0,i||(o=K(n,"click",t[3]),i=!0)},p(f,c){f[1].isCalculating?l&&(l.d(1),l=null):l||(l=xe(),l.c(),l.m(n,null)),(!s||c&2)&&Re(n,"loading",f[1].isCalculating)},i(f){s||(F(()=>{r||(r=G(n,x,{},!0)),r.run(1)}),s=!0)},o(f){r||(r=G(n,x,{},!1)),r.run(0),s=!1},d(f){f&&A(e),l&&l.d(),f&&r&&r.end(),i=!1,o()}}}function xe(t){let e;return{c(){e=X("Should I buy it")},m(n,r){j(n,e,r)},d(n){n&&A(e)}}}function et(t){let e,n,r,s;return{c(){e=M("span"),n=M("button"),n.textContent="Refine AI",w(n,"class","btn btn-outline btn-sm md:btn-md lg:btn-lg"),w(e,"class","svelte-1ezkcxs")},m(i,o){j(i,e,o),v(e,n),r||(s=K(n,"click",t[17]),r=!0)},p:se,d(i){i&&A(e),r=!1,s()}}}function tt(t){let e,n,r,s,i,o=t[1].elapsedTime,l,f,c=st(t);return{c(){e=M("div"),n=M("h1"),n.textContent="Yes.",r=E(),s=M("p"),s.textContent=`${t[4]()}`,i=E(),c.c(),w(e,"class","mt-8")},m(h,u){j(h,e,u),v(e,n),v(e,r),v(e,s),v(e,i),c.m(e,null),f=!0},p(h,u){u&2&&Ye(o,o=h[1].elapsedTime)?(c.d(1),c=st(h),c.c(),c.m(e,null)):c.p(h,u)},i(h){f||(F(()=>{l||(l=G(e,Ve,{delay:800,y:300},!0)),l.run(1)}),f=!0)},o(h){l||(l=G(e,Ve,{delay:800,y:300},!1)),l.run(0),f=!1},d(h){h&&A(e),c.d(h),h&&l&&l.end()}}}function nt(t){let e,n,r=Ne.duration(t[1].elapsedTime,"s").humanize()+"",s,i,o,l,f,c=t[1].currencyUnit+"",h,u=t[2]()+"",a,k;return{c(){e=M("p"),n=X("This tool just took "),s=X(r),i=X(" of your life away."),o=E(),l=M("p"),f=X("That's roughly "),h=X(c),a=X(u),k=X(` you could have
            earned to put towards this purchase`)},m(d,g){j(d,e,g),v(e,n),v(e,s),v(e,i),j(d,o,g),j(d,l,g),v(l,f),v(l,h),v(l,a),v(l,k)},p(d,g){g&2&&r!==(r=Ne.duration(d[1].elapsedTime,"s").humanize()+"")&&We(s,r),g&2&&c!==(c=d[1].currencyUnit+"")&&We(h,c)},d(d){d&&A(e),d&&A(o),d&&A(l)}}}function st(t){let e,n=t[1].elapsedTime&&t[0].income.value&&nt(t);return{c(){n&&n.c(),e=St()},m(r,s){n&&n.m(r,s),j(r,e,s)},p(r,s){r[1].elapsedTime&&r[0].income.value?n?n.p(r,s):(n=nt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){n&&n.d(r),r&&A(e)}}}function xt(t){let e,n,r,s,i,o,l,f,c,h,u,a,k,d=t[0].itemName&&t[1].showOptions&&Fe(t),g=t[0].itemName&&Ke(t),S=t[1].showResult&&tt(t);return{c(){e=M("div"),n=M("div"),r=M("h1"),s=M("span"),s.textContent="Should I buy a",i=E(),o=M("input"),f=E(),d&&d.c(),c=E(),g&&g.c(),h=E(),S&&S.c(),w(o,"class","minimalUnderline svelte-1ezkcxs"),w(o,"type","text"),w(o,"placeholder","enter the item name"),o.disabled=l=t[1].showResult||t[1].isCalculating,w(n,"class","pb-8 mt-4"),w(e,"class","client svelte-1ezkcxs")},m(D,p){j(D,e,p),v(e,n),v(n,r),v(r,s),v(r,i),v(r,o),de(o,t[0].itemName),v(e,f),d&&d.m(e,null),v(e,c),g&&g.m(e,null),v(e,h),S&&S.m(e,null),u=!0,a||(k=K(o,"input",t[5]),a=!0)},p(D,[p]){(!u||p&2&&l!==(l=D[1].showResult||D[1].isCalculating))&&(o.disabled=l),p&1&&o.value!==D[0].itemName&&de(o,D[0].itemName),D[0].itemName&&D[1].showOptions?d?(d.p(D,p),p&3&&P(d,1)):(d=Fe(D),d.c(),P(d,1),d.m(e,c)):d&&(ge(),Z(d,1,1,()=>{d=null}),ye()),D[0].itemName?g?(g.p(D,p),p&1&&P(g,1)):(g=Ke(D),g.c(),P(g,1),g.m(e,h)):g&&(ge(),Z(g,1,1,()=>{g=null}),ye()),D[1].showResult?S?(S.p(D,p),p&2&&P(S,1)):(S=tt(D),S.c(),P(S,1),S.m(e,null)):S&&(ge(),Z(S,1,1,()=>{S=null}),ye())},i(D){u||(P(d),P(g),P(S),u=!0)},o(D){Z(d),Z(g),Z(S),u=!1},d(D){D&&A(e),d&&d.d(),g&&g.d(),S&&S.d(),a=!1,k()}}}function en(t,e,n){var r;(function(m){m[m.itemName=0]="itemName",m[m.income=1]="income",m[m.sale=2]="sale",m[m.need=3]="need",m[m.want=4]="want",m[m.price=5]="price"})(r||(r={}));let s={itemName:"",income:{value:"",unit:"hr"}};Je(()=>{var m;location.search&&n(0,s={...s,itemName:(m=new URLSearchParams(location.search).get("n"))!=null?m:""})});let i={isCalculating:!1,showOptions:null,elapsedTime:0,currencyUnit:"$",showResult:!1};function o(){const{value:m,unit:b}=s.income,I=i.elapsedTime;if(!i.elapsedTime||!m)return 0;const z=60*60,O=38*52,W=z*O;let R;switch(b){case"hr":R=I/z*m;case"yr":R=I/W*m}return R}function l(){i.isCalculating||(n(1,i.showOptions=!1,i),n(1,i.isCalculating=!0,i),setTimeout(()=>{n(1,i.showResult=!0,i),n(1,i.isCalculating=!1,i)},1e3+Math.random()*2e3))}function f(){if(s.price&&Math.random()<.05)return`It's only ${i.currencyUnit}${s.price}!!!`;if(s.price<=6)return"It's only about the price of a cup of coffee";if(s.price<=20)return"It's only the price of a meal or two, you can starve for a bit";if(s.sale)return"It's on sale, after all";if(s.want)return"You might not need it, but treat yourself.";let m=s.itemName.trim(),b=["Well who else is going to get you a "+m,"Do it",m+"."];return b[Math.floor(Math.random()*b.length)]}Je(()=>{setInterval(()=>{s.itemName?n(1,i.elapsedTime++,i):n(1,i.elapsedTime=0,i)},1e3)}),Ne.extend(Pt),Ne.extend(qt);const c=[[],[],[]];function h(){s.itemName=this.value,n(0,s)}function u(){s.need=this.__value,n(0,s)}function a(){s.need=this.__value,n(0,s)}function k(){s.want=this.__value,n(0,s)}function d(){i.currencyUnit=Ce(this),n(1,i)}function g(){s.price=De(this.value),n(0,s)}function S(){s.sale=this.__value,n(0,s)}function D(){s.sale=this.__value,n(0,s)}function p(){i.currencyUnit=Ce(this),n(1,i)}function H(){s.income.value=De(this.value),n(0,s)}function J(){s.income.unit=Ce(this),n(0,s)}return[s,i,o,l,f,h,u,c,a,k,d,g,S,D,p,H,J,()=>n(1,i.showOptions=!0,i)]}class tn extends Ue{constructor(e){super(),Ee(this,e,en,xt,Ye,{})}}function nn(t){let e,n,r,s,i,o;return r=new tn({}),{c(){e=M("section"),n=M("main"),ce(r.$$.fragment),s=E(),i=M("footer"),i.innerHTML=`<div class="items-center grid-flow-col"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
      <p>Yet another fantastic tool by <a href="https://featherbear.cc">featherbear</a><br/>We do not claim any responsibility for your financial
        irresponsibility. That&#39;s on you.</p></div> 
    <div class="md:place-self-center md:justify-self-end"><a href="https://github.com/featherbear/shouldibuyit/blob/master/src/lib/TopSecretFinancialAdvice.ts" target="_blank">More about our AI</a></div>`,w(n,"class","pb-8 svelte-klt5kl"),w(i,"class","footer px-5 py-4 border-t bg-base-200 text-base-content border-base-300"),w(e,"class","svelte-klt5kl")},m(l,f){j(l,e,f),v(e,n),le(r,n,null),v(e,s),v(e,i),o=!0},p:se,i(l){o||(P(r.$$.fragment,l),o=!0)},o(l){Z(r.$$.fragment,l),o=!1},d(l){l&&A(e),oe(r)}}}class sn extends Ue{constructor(e){super(),Ee(this,e,null,nn,Ye,{})}}new sn({target:document.getElementById("app")});
