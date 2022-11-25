(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ne(){}const nt=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Pe(){return Object.create(null)}function se(t){t.forEach(st)}function Ie(t){return typeof t=="function"}function Ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function $t(t,e,n,r){if(t){const s=it(t,e,n,r);return t[0](s)}}function it(t,e,n,r){return t[1]&&r?pt(n.ctx.slice(),t[1](r(e))):n.ctx}function vt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],l=Math.max(e.dirty.length,s.length);for(let o=0;o<l;o+=1)i[o]=e.dirty[o]|s[o];return i}return e.dirty|s}return e.dirty}function yt(t,e,n,r,s,i){if(s){const l=it(e,n,r,i);t.p(l,s)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const rt=typeof window<"u";let bt=rt?()=>window.performance.now():()=>Date.now(),je=rt?t=>requestAnimationFrame(t):ne;const ce=new Set;function lt(t){ce.forEach(e=>{e.c(t)||(ce.delete(e),e.f())}),ce.size!==0&&je(lt)}function wt(t){let e;return ce.size===0&&je(lt),{promise:new Promise(n=>{ce.add(e={c:t,f:n})}),abort(){ce.delete(e)}}}function y(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=S("style");return kt(ot(t),e),e.sheet}function kt(t,e){return y(t.head||t,e),e.sheet}function q(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function P(){return K(" ")}function at(){return K("")}function X(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function We(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Se(t,e){t.value=e==null?"":e}function ae(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ce(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Re(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const De=new Map;let Oe=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:Mt(e),rules:{}};return De.set(t,n),n}function ze(t,e,n,r,s,i,l,o=0){const f=16.666/r;let c=`{
`;for(let k=0;k<=1;k+=f){const D=e+(n-e)*i(k);c+=k*100+`%{${l(D,1-D)}}
`}const h=c+`100% {${l(n,1-n)}}
}`,u=`__svelte_${Ot(h)}_${o}`,a=ot(t),{stylesheet:b,rules:d}=De.get(a)||Tt(a,t);d[u]||(d[u]=!0,b.insertRule(`@keyframes ${u} ${h}`,b.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${u} ${r}ms linear ${s}ms 1 both`,Oe+=1,u}function Nt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),Oe-=s,Oe||Yt())}function Yt(){je(()=>{Oe||(De.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&j(e)}),De.clear())})}let ge;function $e(t){ge=t}function Ct(){if(!ge)throw new Error("Function called outside component initialization");return ge}function Ht(t){Ct().$$.on_mount.push(t)}const pe=[],Be=[],Me=[],Je=[],Lt=Promise.resolve();let Ee=!1;function Et(){Ee||(Ee=!0,Lt.then(ct))}function F(t){Me.push(t)}const He=new Set;let we=0;function ct(){const t=ge;do{for(;we<pe.length;){const e=pe[we];we++,$e(e),It(e.$$)}for($e(null),pe.length=0,we=0;Be.length;)Be.pop()();for(let e=0;e<Me.length;e+=1){const n=Me[e];He.has(n)||(He.add(n),n())}Me.length=0}while(pe.length);for(;Je.length;)Je.pop()();Ee=!1,He.clear(),$e(t)}function It(t){if(t.fragment!==null){t.update(),se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let me;function jt(){return me||(me=Promise.resolve(),me.then(()=>{me=null})),me}function Le(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const ke=new Set;let te;function ve(){te={r:0,c:[],p:te}}function ye(){te.r||se(te.c),te=te.p}function W(t,e){t&&t.i&&(ke.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(ke.has(t))return;ke.add(t),te.c.push(()=>{ke.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const At={duration:0};function G(t,e,n,r){let s=e(t,n),i=r?0:1,l=null,o=null,f=null;function c(){f&&Nt(t,f)}function h(a,b){const d=a.b-i;return b*=Math.abs(d),{a:i,b:a.b,d,duration:b,start:a.start,end:a.start+b,group:a.group}}function u(a){const{delay:b=0,duration:d=300,easing:$=nt,tick:k=ne,css:D}=s||At,m={start:bt()+b,b:a};a||(m.group=te,te.r+=1),l||o?o=m:(D&&(c(),f=ze(t,i,a,d,b,$,D)),a&&k(0,1),l=h(m,d),F(()=>Le(t,a,"start")),wt(E=>{if(o&&E>o.start&&(l=h(o,d),o=null,Le(t,l.b,"start"),D&&(c(),f=ze(t,i,l.b,l.duration,0,$,s.css))),l){if(E>=l.end)k(i=l.b,1-i),Le(t,l.b,"end"),o||(l.b?c():--l.group.r||se(l.group.c)),l=null;else if(E>=l.start){const A=E-l.start;i=l.a+l.d*$(A/l.duration),k(i,1-i)}}return!!(l||o)}))}return{run(a){Ie(s)?jt().then(()=>{s=s(),u(a)}):u(a)},end(){c(),l=o=null}}}function fe(t){t&&t.c()}function le(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||F(()=>{const l=t.$$.on_mount.map(st).filter(Ie);t.$$.on_destroy?t.$$.on_destroy.push(...l):se(l),t.$$.on_mount=[]}),i.forEach(F)}function oe(t,e){const n=t.$$;n.fragment!==null&&(se(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(pe.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,r,s,i,l,o=[-1]){const f=ge;$e(t);const c=t.$$={fragment:null,ctx:[],props:i,update:ne,not_equal:s,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Pe(),dirty:o,skip_bound:!1,root:e.target||f.$$.root};l&&l(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(u,a,...b)=>{const d=b.length?b[0]:a;return c.ctx&&s(c.ctx[u],c.ctx[u]=d)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](d),h&&qt(t,u)),a}):[],c.update(),h=!0,se(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const u=St(e.target);c.fragment&&c.fragment.l(u),u.forEach(j)}else c.fragment&&c.fragment.c();e.intro&&W(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),ct()}$e(f)}class qe{$destroy(){oe(this,1),this.$destroy=ne}$on(e,n){if(!Ie(n))return ne;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ut(t){const e=t-1;return e*e*e+1}function x(t,{delay:e=0,duration:n=400,easing:r=nt}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}function Ze(t,{delay:e=0,duration:n=400,easing:r=Ut,x:s=0,y:i=0,opacity:l=0}={}){const o=getComputedStyle(t),f=+o.opacity,c=o.transform==="none"?"":o.transform,h=f*(1-l);return{delay:e,duration:n,easing:r,css:(u,a)=>`
			transform: ${c} translate(${(1-u)*s}px, ${(1-u)*i}px);
			opacity: ${f-h*a}`}}var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ue,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",l="second",o="minute",f="hour",c="day",h="week",u="month",a="quarter",b="year",d="date",$="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(T){var v=["th","st","nd","rd"],p=T%100;return"["+T+(v[(p-20)%10]||v[p]||v[0])+"]"}},E=function(T,v,p){var N=String(T);return!N||N.length>=v?T:""+Array(v+1-N.length).join(p)+T},A={s:E,z:function(T){var v=-T.utcOffset(),p=Math.abs(v),N=Math.floor(p/60),_=p%60;return(v<=0?"+":"-")+E(N,2,"0")+":"+E(_,2,"0")},m:function T(v,p){if(v.date()<p.date())return-T(p,v);var N=12*(p.year()-v.year())+(p.month()-v.month()),_=v.clone().add(N,u),C=p-_<0,Y=v.clone().add(N+(C?-1:1),u);return+(-(N+(p-_)/(C?_-Y:Y-_))||0)},a:function(T){return T<0?Math.ceil(T)||0:Math.floor(T)},p:function(T){return{M:u,y:b,w:h,d:c,D:d,h:f,m:o,s:l,ms:i,Q:a}[T]||String(T||"").toLowerCase().replace(/s$/,"")},u:function(T){return T===void 0}},H="en",M={};M[H]=m;var g=function(T){return T instanceof B},I=function T(v,p,N){var _;if(!v)return H;if(typeof v=="string"){var C=v.toLowerCase();M[C]&&(_=C),p&&(M[C]=p,_=C);var Y=v.split("-");if(!_&&Y.length>1)return T(Y[0])}else{var U=v.name;M[U]=v,_=U}return!N&&_&&(H=_),_||!N&&H},L=function(T,v){if(g(T))return T.clone();var p=typeof v=="object"?v:{};return p.date=T,p.args=arguments,new B(p)},O=A;O.l=I,O.i=g,O.w=function(T,v){return L(T,{locale:v.$L,utc:v.$u,x:v.$x,$offset:v.$offset})};var B=function(){function T(p){this.$L=I(p.locale,null,!0),this.parse(p)}var v=T.prototype;return v.parse=function(p){this.$d=function(N){var _=N.date,C=N.utc;if(_===null)return new Date(NaN);if(O.u(_))return new Date;if(_ instanceof Date)return new Date(_);if(typeof _=="string"&&!/Z$/i.test(_)){var Y=_.match(k);if(Y){var U=Y[2]-1||0,z=(Y[7]||"0").substring(0,3);return C?new Date(Date.UTC(Y[1],U,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,z)):new Date(Y[1],U,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,z)}}return new Date(_)}(p),this.$x=p.x||{},this.init()},v.init=function(){var p=this.$d;this.$y=p.getFullYear(),this.$M=p.getMonth(),this.$D=p.getDate(),this.$W=p.getDay(),this.$H=p.getHours(),this.$m=p.getMinutes(),this.$s=p.getSeconds(),this.$ms=p.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return this.$d.toString()!==$},v.isSame=function(p,N){var _=L(p);return this.startOf(N)<=_&&_<=this.endOf(N)},v.isAfter=function(p,N){return L(p)<this.startOf(N)},v.isBefore=function(p,N){return this.endOf(N)<L(p)},v.$g=function(p,N,_){return O.u(p)?this[N]:this.set(_,p)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(p,N){var _=this,C=!!O.u(N)||N,Y=O.p(p),U=function(ue,V){var re=O.w(_.$u?Date.UTC(_.$y,V,ue):new Date(_.$y,V,ue),_);return C?re:re.endOf(c)},z=function(ue,V){return O.w(_.toDate()[ue].apply(_.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(V)),_)},R=this.$W,Q=this.$M,ie=this.$D,ee="set"+(this.$u?"UTC":"");switch(Y){case b:return C?U(1,0):U(31,11);case u:return C?U(1,Q):U(0,Q+1);case h:var de=this.$locale().weekStart||0,he=(R<de?R+7:R)-de;return U(C?ie-he:ie+(6-he),Q);case c:case d:return z(ee+"Hours",0);case f:return z(ee+"Minutes",1);case o:return z(ee+"Seconds",2);case l:return z(ee+"Milliseconds",3);default:return this.clone()}},v.endOf=function(p){return this.startOf(p,!1)},v.$set=function(p,N){var _,C=O.p(p),Y="set"+(this.$u?"UTC":""),U=(_={},_[c]=Y+"Date",_[d]=Y+"Date",_[u]=Y+"Month",_[b]=Y+"FullYear",_[f]=Y+"Hours",_[o]=Y+"Minutes",_[l]=Y+"Seconds",_[i]=Y+"Milliseconds",_)[C],z=C===c?this.$D+(N-this.$W):N;if(C===u||C===b){var R=this.clone().set(d,1);R.$d[U](z),R.init(),this.$d=R.set(d,Math.min(this.$D,R.daysInMonth())).$d}else U&&this.$d[U](z);return this.init(),this},v.set=function(p,N){return this.clone().$set(p,N)},v.get=function(p){return this[O.p(p)]()},v.add=function(p,N){var _,C=this;p=Number(p);var Y=O.p(N),U=function(Q){var ie=L(C);return O.w(ie.date(ie.date()+Math.round(Q*p)),C)};if(Y===u)return this.set(u,this.$M+p);if(Y===b)return this.set(b,this.$y+p);if(Y===c)return U(1);if(Y===h)return U(7);var z=(_={},_[o]=r,_[f]=s,_[l]=n,_)[Y]||1,R=this.$d.getTime()+p*z;return O.w(R,this)},v.subtract=function(p,N){return this.add(-1*p,N)},v.format=function(p){var N=this,_=this.$locale();if(!this.isValid())return _.invalidDate||$;var C=p||"YYYY-MM-DDTHH:mm:ssZ",Y=O.z(this),U=this.$H,z=this.$m,R=this.$M,Q=_.weekdays,ie=_.months,ee=function(V,re,Ye,be){return V&&(V[re]||V(N,C))||Ye[re].slice(0,be)},de=function(V){return O.s(U%12||12,V,"0")},he=_.meridiem||function(V,re,Ye){var be=V<12?"AM":"PM";return Ye?be.toLowerCase():be},ue={YY:String(this.$y).slice(-2),YYYY:this.$y,M:R+1,MM:O.s(R+1,2,"0"),MMM:ee(_.monthsShort,R,ie,3),MMMM:ee(ie,R),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:ee(_.weekdaysMin,this.$W,Q,2),ddd:ee(_.weekdaysShort,this.$W,Q,3),dddd:Q[this.$W],H:String(U),HH:O.s(U,2,"0"),h:de(1),hh:de(2),a:he(U,z,!0),A:he(U,z,!1),m:String(z),mm:O.s(z,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:Y};return C.replace(D,function(V,re){return re||ue[V]||Y.replace(":","")})},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(p,N,_){var C,Y=O.p(N),U=L(p),z=(U.utcOffset()-this.utcOffset())*r,R=this-U,Q=O.m(this,U);return Q=(C={},C[b]=Q/12,C[u]=Q,C[a]=Q/3,C[h]=(R-z)/6048e5,C[c]=(R-z)/864e5,C[f]=R/s,C[o]=R/r,C[l]=R/n,C)[Y]||R,_?Q:O.a(Q)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return M[this.$L]},v.locale=function(p,N){if(!p)return this.$L;var _=this.clone(),C=I(p,N,!0);return C&&(_.$L=C),_},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},T}(),Z=B.prototype;return L.prototype=Z,[["$ms",i],["$s",l],["$m",o],["$H",f],["$W",c],["$M",u],["$y",b],["$D",d]].forEach(function(T){Z[T[1]]=function(v){return this.$g(v,T[0],T[1])}}),L.extend=function(T,v){return T.$i||(T(v,B,L),T.$i=!0),L},L.locale=I,L.isDayjs=g,L.unix=function(T){return L(1e3*T)},L.en=M[H],L.Ls=M,L.p={},L})})(dt);const Te=dt.exports;var ht={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ue,function(){var n,r,s=1e3,i=6e4,l=36e5,o=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,h=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,a={years:c,months:h,days:o,hours:l,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},b=function(H){return H instanceof A},d=function(H,M,g){return new A(H,g,M.$l)},$=function(H){return r.p(H)+"s"},k=function(H){return H<0},D=function(H){return k(H)?Math.ceil(H):Math.floor(H)},m=function(H){return Math.abs(H)},E=function(H,M){return H?k(H)?{negative:!0,format:""+m(H)+M}:{negative:!1,format:""+H+M}:{negative:!1,format:""}},A=function(){function H(g,I,L){var O=this;if(this.$d={},this.$l=L,g===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return d(g*a[$(I)],this);if(typeof g=="number")return this.$ms=g,this.parseFromMilliseconds(),this;if(typeof g=="object")return Object.keys(g).forEach(function(T){O.$d[$(T)]=g[T]}),this.calMilliseconds(),this;if(typeof g=="string"){var B=g.match(u);if(B){var Z=B.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=Z[0],this.$d.months=Z[1],this.$d.weeks=Z[2],this.$d.days=Z[3],this.$d.hours=Z[4],this.$d.minutes=Z[5],this.$d.seconds=Z[6],this.calMilliseconds(),this}}return this}var M=H.prototype;return M.calMilliseconds=function(){var g=this;this.$ms=Object.keys(this.$d).reduce(function(I,L){return I+(g.$d[L]||0)*a[L]},0)},M.parseFromMilliseconds=function(){var g=this.$ms;this.$d.years=D(g/c),g%=c,this.$d.months=D(g/h),g%=h,this.$d.days=D(g/o),g%=o,this.$d.hours=D(g/l),g%=l,this.$d.minutes=D(g/i),g%=i,this.$d.seconds=D(g/s),g%=s,this.$d.milliseconds=g},M.toISOString=function(){var g=E(this.$d.years,"Y"),I=E(this.$d.months,"M"),L=+this.$d.days||0;this.$d.weeks&&(L+=7*this.$d.weeks);var O=E(L,"D"),B=E(this.$d.hours,"H"),Z=E(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3);var v=E(T,"S"),p=g.negative||I.negative||O.negative||B.negative||Z.negative||v.negative,N=B.format||Z.format||v.format?"T":"",_=(p?"-":"")+"P"+g.format+I.format+O.format+N+B.format+Z.format+v.format;return _==="P"||_==="-P"?"P0D":_},M.toJSON=function(){return this.toISOString()},M.format=function(g){var I=g||"YYYY-MM-DDTHH:mm:ss",L={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return I.replace(f,function(O,B){return B||String(L[O])})},M.as=function(g){return this.$ms/a[$(g)]},M.get=function(g){var I=this.$ms,L=$(g);return L==="milliseconds"?I%=1e3:I=L==="weeks"?D(I/a[L]):this.$d[L],I===0?0:I},M.add=function(g,I,L){var O;return O=I?g*a[$(I)]:b(g)?g.$ms:d(g,this).$ms,d(this.$ms+O*(L?-1:1),this)},M.subtract=function(g,I){return this.add(g,I,!0)},M.locale=function(g){var I=this.clone();return I.$l=g,I},M.clone=function(){return d(this.$ms,this)},M.humanize=function(g){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!g)},M.milliseconds=function(){return this.get("milliseconds")},M.asMilliseconds=function(){return this.as("milliseconds")},M.seconds=function(){return this.get("seconds")},M.asSeconds=function(){return this.as("seconds")},M.minutes=function(){return this.get("minutes")},M.asMinutes=function(){return this.as("minutes")},M.hours=function(){return this.get("hours")},M.asHours=function(){return this.as("hours")},M.days=function(){return this.get("days")},M.asDays=function(){return this.as("days")},M.weeks=function(){return this.get("weeks")},M.asWeeks=function(){return this.as("weeks")},M.months=function(){return this.get("months")},M.asMonths=function(){return this.as("months")},M.years=function(){return this.get("years")},M.asYears=function(){return this.as("years")},H}();return function(H,M,g){n=g,r=g().$utils(),g.duration=function(O,B){var Z=g.locale();return d(O,{$l:Z},B)},g.isDuration=b;var I=M.prototype.add,L=M.prototype.subtract;M.prototype.add=function(O,B){return b(O)&&(O=O.asMilliseconds()),I.bind(this)(O,B)},M.prototype.subtract=function(O,B){return b(O)&&(O=O.asMilliseconds()),L.bind(this)(O,B)}}})})(ht);const Pt=ht.exports;var mt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ue,function(){return function(n,r,s){n=n||{};var i=r.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(c,h,u,a){return i.fromToBase(c,h,u,a)}s.en.relativeTime=l,i.fromToBase=function(c,h,u,a,b){for(var d,$,k,D=u.$locale().relativeTime||l,m=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=m.length,A=0;A<E;A+=1){var H=m[A];H.d&&(d=a?s(c).diff(u,H.d,!0):u.diff(c,H.d,!0));var M=(n.rounding||Math.round)(Math.abs(d));if(k=d>0,M<=H.r||!H.r){M<=1&&A>0&&(H=m[A-1]);var g=D[H.l];b&&(M=b(""+M)),$=typeof g=="string"?g.replace("%d",M):g(M,h,H.l,k);break}}if(h)return $;var I=k?D.future:D.past;return typeof I=="function"?I($):I.replace("%s",$)},i.to=function(c,h){return o(c,h,this,!0)},i.from=function(c,h){return o(c,h,this)};var f=function(c){return c.$u?s.utc():s()};i.toNow=function(c){return this.to(f(this),c)},i.fromNow=function(c){return this.from(f(this),c)}}})})(mt);const Wt=mt.exports;function Rt(t){let e,n,r,s;const i=t[1].default,l=$t(i,t,t[0],null);return{c(){e=S("div"),l&&l.c(),n=P(),r=S("div"),w(e,"class","content"),w(r,"class","divider")},m(o,f){q(o,e,f),l&&l.m(e,null),q(o,n,f),q(o,r,f),s=!0},p(o,[f]){l&&l.p&&(!s||f&1)&&yt(l,i,o,o[0],s?vt(i,o[0],f,null):gt(o[0]),null)},i(o){s||(W(l,o),s=!0)},o(o){J(l,o),s=!1},d(o){o&&j(e),l&&l.d(o),o&&j(n),o&&j(r)}}}function zt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class _e extends qe{constructor(e){super(),Ae(this,e,zt,Rt,Ne,{})}}function Bt(t,e,n){const r=t.slice();return r[17]=e[n],r}function Jt(t,e,n){const r=t.slice();return r[17]=e[n],r}function Qe(t){let e,n,r,s,i,l,o,f,c;e=new _e({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}});let h=t[0].need===!1&&Ve(t);return s=new _e({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),l=new _e({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),f=new _e({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){fe(e.$$.fragment),n=P(),h&&h.c(),r=P(),fe(s.$$.fragment),i=P(),fe(l.$$.fragment),o=P(),fe(f.$$.fragment)},m(u,a){le(e,u,a),q(u,n,a),h&&h.m(u,a),q(u,r,a),le(s,u,a),q(u,i,a),le(l,u,a),q(u,o,a),le(f,u,a),c=!0},p(u,a){const b={};a&4194305&&(b.$$scope={dirty:a,ctx:u}),e.$set(b),u[0].need===!1?h?(h.p(u,a),a&1&&W(h,1)):(h=Ve(u),h.c(),W(h,1),h.m(r.parentNode,r)):h&&(ve(),J(h,1,1,()=>{h=null}),ye());const d={};a&4194306&&(d.$$scope={dirty:a,ctx:u}),s.$set(d);const $={};a&4194305&&($.$$scope={dirty:a,ctx:u}),l.$set($);const k={};a&4194307&&(k.$$scope={dirty:a,ctx:u}),f.$set(k)},i(u){c||(W(e.$$.fragment,u),W(h),W(s.$$.fragment,u),W(l.$$.fragment,u),W(f.$$.fragment,u),c=!0)},o(u){J(e.$$.fragment,u),J(h),J(s.$$.fragment,u),J(l.$$.fragment,u),J(f.$$.fragment,u),c=!1},d(u){oe(e,u),u&&j(n),h&&h.d(u),u&&j(r),oe(s,u),u&&j(i),oe(l,u),u&&j(o),oe(f,u)}}}function Zt(t){let e,n,r,s,i,l,o,f,c,h,u,a,b,d,$,k,D;return{c(){e=S("div"),n=S("label"),n.innerHTML='<span class="label-text">Do you need it?</span>',r=P(),s=S("label"),i=S("input"),l=P(),o=S("span"),o.textContent="Yes",c=P(),h=S("div"),u=S("label"),a=S("input"),b=P(),d=S("span"),d.textContent="No",w(n,"class","label"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500"),i.__value=!0,i.value=i.__value,t[6][0].push(i),w(o,"class","label-text"),w(s,"class","label cursor-pointer"),w(e,"class","form-control"),w(a,"type","radio"),w(a,"class","radio checked:bg-red-500"),a.__value=!1,a.value=a.__value,t[6][0].push(a),w(d,"class","label-text"),w(u,"class","label cursor-pointer"),w(h,"class","form-control")},m(m,E){q(m,e,E),y(e,n),y(e,r),y(e,s),y(s,i),i.checked=i.__value===t[0].need,y(s,l),y(s,o),q(m,c,E),q(m,h,E),y(h,u),y(u,a),a.checked=a.__value===t[0].need,y(u,b),y(u,d),$=!0,k||(D=[X(i,"change",t[5]),X(a,"change",t[7])],k=!0)},p(m,E){E&1&&(i.checked=i.__value===m[0].need),E&1&&(a.checked=a.__value===m[0].need)},i(m){$||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),$=!0)},o(m){f||(f=G(e,x,{},!1)),f.run(0),$=!1},d(m){m&&j(e),t[6][0].splice(t[6][0].indexOf(i),1),m&&f&&f.end(),m&&j(c),m&&j(h),t[6][0].splice(t[6][0].indexOf(a),1),k=!1,se(D)}}}function Ve(t){let e,n;return e=new _e({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){fe(e.$$.fragment)},m(r,s){le(e,r,s),n=!0},p(r,s){const i={};s&4194305&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){J(e.$$.fragment,r),n=!1},d(r){oe(e,r)}}}function Qt(t){let e,n,r,s,i,l,o,f,c,h,u;return{c(){e=S("div"),n=S("label"),n.innerHTML='<span class="label-text">But do you want it?</span>',r=P(),s=S("label"),i=S("input"),l=P(),o=S("span"),o.textContent="Yes",w(n,"class","label"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500"),i.__value=!0,i.value=i.__value,t[6][1].push(i),w(o,"class","label-text"),w(s,"class","label cursor-pointer"),w(e,"class","form-control")},m(a,b){q(a,e,b),y(e,n),y(e,r),y(e,s),y(s,i),i.checked=i.__value===t[0].want,y(s,l),y(s,o),c=!0,h||(u=X(i,"change",t[8]),h=!0)},p(a,b){b&1&&(i.checked=i.__value===a[0].want)},i(a){c||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),c=!0)},o(a){f||(f=G(e,x,{},!1)),f.run(0),c=!1},d(a){a&&j(e),t[6][1].splice(t[6][1].indexOf(i),1),a&&f&&f.end(),h=!1,u()}}}function Vt(t){let e,n;return{c(){e=S("option"),n=K(t[17]),e.__value=t[17],e.value=e.__value},m(r,s){q(r,e,s),y(e,n)},p:ne,d(r){r&&j(e)}}}function Ft(t){let e,n,r,s,i,l,o,f,c,h,u,a=["$","\u20AC","\xA3","\xA5"],b=[];for(let d=0;d<4;d+=1)b[d]=Vt(Jt(t,a,d));return{c(){e=S("div"),n=S("label"),n.innerHTML='<span class="label-text">How much is it?</span>',r=P(),s=S("div"),i=S("select");for(let d=0;d<4;d+=1)b[d].c();l=P(),o=S("input"),w(n,"class","label"),w(i,"class","select select-bordered"),t[1].currencyUnit===void 0&&F(()=>t[9].call(i)),w(o,"type","number"),w(o,"min","0"),w(o,"placeholder","Price"),w(o,"class","input input-bordered w-full max-w-xs"),w(s,"class","input-group"),w(e,"class","form-control")},m(d,$){q(d,e,$),y(e,n),y(e,r),y(e,s),y(s,i);for(let k=0;k<4;k+=1)b[k].m(i,null);ae(i,t[1].currencyUnit),y(s,l),y(s,o),c=!0,h||(u=X(i,"change",t[9]),h=!0)},p(d,$){$&2&&ae(i,d[1].currencyUnit)},i(d){c||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),c=!0)},o(d){f||(f=G(e,x,{},!1)),f.run(0),c=!1},d(d){d&&j(e),ut(b,d),d&&f&&f.end(),h=!1,u()}}}function Gt(t){let e,n,r,s,i,l,o,f,c,h,u,a,b,d,$,k,D;return{c(){e=S("div"),n=S("label"),n.innerHTML='<span class="label-text">Is it on sale?</span>',r=P(),s=S("label"),i=S("input"),l=P(),o=S("span"),o.textContent="Yes",c=P(),h=S("div"),u=S("label"),a=S("input"),b=P(),d=S("span"),d.textContent="No",w(n,"class","label"),w(i,"type","radio"),w(i,"class","radio checked:bg-green-500"),i.__value=!0,i.value=i.__value,t[6][2].push(i),w(o,"class","label-text"),w(s,"class","label cursor-pointer"),w(e,"class","form-control"),w(a,"type","radio"),w(a,"class","radio checked:bg-red-500"),a.__value=!1,a.value=a.__value,t[6][2].push(a),w(d,"class","label-text"),w(u,"class","label cursor-pointer"),w(h,"class","form-control")},m(m,E){q(m,e,E),y(e,n),y(e,r),y(e,s),y(s,i),i.checked=i.__value===t[0].sale,y(s,l),y(s,o),q(m,c,E),q(m,h,E),y(h,u),y(u,a),a.checked=a.__value===t[0].sale,y(u,b),y(u,d),$=!0,k||(D=[X(i,"change",t[10]),X(a,"change",t[11])],k=!0)},p(m,E){E&1&&(i.checked=i.__value===m[0].sale),E&1&&(a.checked=a.__value===m[0].sale)},i(m){$||(F(()=>{f||(f=G(e,x,{},!0)),f.run(1)}),$=!0)},o(m){f||(f=G(e,x,{},!1)),f.run(0),$=!1},d(m){m&&j(e),t[6][2].splice(t[6][2].indexOf(i),1),m&&f&&f.end(),m&&j(c),m&&j(h),t[6][2].splice(t[6][2].indexOf(a),1),k=!1,se(D)}}}function Kt(t){let e,n;return{c(){e=S("option"),n=K(t[17]),e.__value=t[17],e.value=e.__value},m(r,s){q(r,e,s),y(e,n)},p:ne,d(r){r&&j(e)}}}function Xt(t){let e,n,r,s,i,l,o,f,c,h,u,a,b,d,$,k=["$","\u20AC","\xA3","\xA5"],D=[];for(let m=0;m<4;m+=1)D[m]=Kt(Bt(t,k,m));return{c(){e=S("div"),n=S("label"),n.innerHTML='<span class="label-text">What&#39;s your income?</span>',r=P(),s=S("div"),i=S("select");for(let m=0;m<4;m+=1)D[m].c();l=P(),o=S("input"),f=P(),c=S("select"),h=S("option"),h.textContent="per hour",u=S("option"),u.textContent="per year",w(n,"class","label"),w(i,"class","select select-bordered"),t[1].currencyUnit===void 0&&F(()=>t[12].call(i)),w(o,"type","number"),w(o,"min","0"),w(o,"placeholder","Income"),w(o,"class","input input-bordered w-full max-w-xs"),h.__value="hr",h.value=h.__value,u.__value="yr",u.value=u.__value,w(c,"class","select select-bordered"),t[0].income.unit===void 0&&F(()=>t[14].call(c)),w(s,"class","input-group"),w(e,"class","form-control")},m(m,E){q(m,e,E),y(e,n),y(e,r),y(e,s),y(s,i);for(let A=0;A<4;A+=1)D[A].m(i,null);ae(i,t[1].currencyUnit),y(s,l),y(s,o),Se(o,t[0].income.value),y(s,f),y(s,c),y(c,h),y(c,u),ae(c,t[0].income.unit),b=!0,d||($=[X(i,"change",t[12]),X(o,"input",t[13]),X(c,"change",t[14])],d=!0)},p(m,E){E&2&&ae(i,m[1].currencyUnit),E&1&&ft(o.value)!==m[0].income.value&&Se(o,m[0].income.value),E&1&&ae(c,m[0].income.unit)},i(m){b||(F(()=>{a||(a=G(e,x,{},!0)),a.run(1)}),b=!0)},o(m){a||(a=G(e,x,{},!1)),a.run(0),b=!1},d(m){m&&j(e),ut(D,m),m&&a&&a.end(),d=!1,se($)}}}function Fe(t){let e,n,r,s=(t[1].isCalculating||t[1].showOptions!==!1)&&Ge(t),i=t[1].showOptions===null&&Xe(t);return{c(){s&&s.c(),e=P(),i&&i.c(),n=at()},m(l,o){s&&s.m(l,o),q(l,e,o),i&&i.m(l,o),q(l,n,o),r=!0},p(l,o){l[1].isCalculating||l[1].showOptions!==!1?s?(s.p(l,o),o&2&&W(s,1)):(s=Ge(l),s.c(),W(s,1),s.m(e.parentNode,e)):s&&(ve(),J(s,1,1,()=>{s=null}),ye()),l[1].showOptions===null?i?i.p(l,o):(i=Xe(l),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i(l){r||(W(s),r=!0)},o(l){J(s),r=!1},d(l){s&&s.d(l),l&&j(e),i&&i.d(l),l&&j(n)}}}function Ge(t){let e,n,r,s,i,l=!t[1].isCalculating&&Ke();return{c(){e=S("button"),l&&l.c(),w(e,"class","btn btn-lg"),Re(e,"loading",t[1].isCalculating)},m(o,f){q(o,e,f),l&&l.m(e,null),r=!0,s||(i=X(e,"click",t[3]),s=!0)},p(o,f){o[1].isCalculating?l&&(l.d(1),l=null):l||(l=Ke(),l.c(),l.m(e,null)),(!r||f&2)&&Re(e,"loading",o[1].isCalculating)},i(o){r||(F(()=>{n||(n=G(e,x,{},!0)),n.run(1)}),r=!0)},o(o){n||(n=G(e,x,{},!1)),n.run(0),r=!1},d(o){o&&j(e),l&&l.d(),o&&n&&n.end(),s=!1,i()}}}function Ke(t){let e;return{c(){e=K("Should I buy it")},m(n,r){q(n,e,r)},d(n){n&&j(e)}}}function Xe(t){let e,n,r;return{c(){e=S("button"),e.textContent="Refine AI",w(e,"class","btn btn-outline btn-sm md:btn-md lg:btn-lg")},m(s,i){q(s,e,i),n||(r=X(e,"click",t[15]),n=!0)},p:ne,d(s){s&&j(e),n=!1,r()}}}function xe(t){let e,n,r,s=t[1].elapsedTime,i,l,o=tt(t);return{c(){e=S("div"),n=S("h1"),n.textContent="Yes.",r=P(),o.c(),w(e,"class","mt-8")},m(f,c){q(f,e,c),y(e,n),y(e,r),o.m(e,null),l=!0},p(f,c){c&2&&Ne(s,s=f[1].elapsedTime)?(o.d(1),o=tt(f),o.c(),o.m(e,null)):o.p(f,c)},i(f){l||(F(()=>{i||(i=G(e,Ze,{delay:800,y:300},!0)),i.run(1)}),l=!0)},o(f){i||(i=G(e,Ze,{delay:800,y:300},!1)),i.run(0),l=!1},d(f){f&&j(e),o.d(f),f&&i&&i.end()}}}function et(t){let e,n,r=Te.duration(t[1].elapsedTime,"s").humanize()+"",s,i,l,o,f,c=t[1].currencyUnit+"",h,u=t[2]()+"",a,b;return{c(){e=S("p"),n=K("This tool just took "),s=K(r),i=K(" of your life away."),l=P(),o=S("p"),f=K("That's roughly "),h=K(c),a=K(u),b=K(` you could have
            earned to put towards this purchase`)},m(d,$){q(d,e,$),y(e,n),y(e,s),y(e,i),q(d,l,$),q(d,o,$),y(o,f),y(o,h),y(o,a),y(o,b)},p(d,$){$&2&&r!==(r=Te.duration(d[1].elapsedTime,"s").humanize()+"")&&We(s,r),$&2&&c!==(c=d[1].currencyUnit+"")&&We(h,c)},d(d){d&&j(e),d&&j(l),d&&j(o)}}}function tt(t){let e,n=t[1].elapsedTime&&t[0].income.value&&et(t);return{c(){n&&n.c(),e=at()},m(r,s){n&&n.m(r,s),q(r,e,s)},p(r,s){r[1].elapsedTime&&r[0].income.value?n?n.p(r,s):(n=et(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){n&&n.d(r),r&&j(e)}}}function xt(t){let e,n,r,s,i,l,o,f,c,h,u,a,b,d=t[0].itemName&&t[1].showOptions&&Qe(t),$=t[0].itemName&&Fe(t),k=t[1].showResult&&xe(t);return{c(){e=S("div"),n=S("div"),r=S("h1"),s=S("span"),s.textContent="Should I buy a",i=P(),l=S("input"),f=P(),d&&d.c(),c=P(),$&&$.c(),h=P(),k&&k.c(),w(l,"class","minimalUnderline svelte-17y96mv"),w(l,"type","text"),w(l,"placeholder","Enter the item here"),l.disabled=o=t[1].showResult||t[1].isCalculating,w(n,"class","pb-8"),w(e,"class","client svelte-17y96mv")},m(D,m){q(D,e,m),y(e,n),y(n,r),y(r,s),y(r,i),y(r,l),Se(l,t[0].itemName),y(e,f),d&&d.m(e,null),y(e,c),$&&$.m(e,null),y(e,h),k&&k.m(e,null),u=!0,a||(b=X(l,"input",t[4]),a=!0)},p(D,[m]){(!u||m&2&&o!==(o=D[1].showResult||D[1].isCalculating))&&(l.disabled=o),m&1&&l.value!==D[0].itemName&&Se(l,D[0].itemName),D[0].itemName&&D[1].showOptions?d?(d.p(D,m),m&3&&W(d,1)):(d=Qe(D),d.c(),W(d,1),d.m(e,c)):d&&(ve(),J(d,1,1,()=>{d=null}),ye()),D[0].itemName?$?($.p(D,m),m&1&&W($,1)):($=Fe(D),$.c(),W($,1),$.m(e,h)):$&&(ve(),J($,1,1,()=>{$=null}),ye()),D[1].showResult?k?(k.p(D,m),m&2&&W(k,1)):(k=xe(D),k.c(),W(k,1),k.m(e,null)):k&&(ve(),J(k,1,1,()=>{k=null}),ye())},i(D){u||(W(d),W($),W(k),u=!0)},o(D){J(d),J($),J(k),u=!1},d(D){D&&j(e),d&&d.d(),$&&$.d(),k&&k.d(),a=!1,b()}}}function en(t,e,n){var r;(function(A){A[A.itemName=0]="itemName",A[A.income=1]="income",A[A.sale=2]="sale",A[A.need=3]="need",A[A.want=4]="want"})(r||(r={}));let s={itemName:"aa",income:{value:"",unit:"hr"}},i={isCalculating:!1,showOptions:null,elapsedTime:0,currencyUnit:"$",showResult:!1};function l(){const{value:A,unit:H}=s.income,M=i.elapsedTime;if(!i.elapsedTime||!A)return 0;const g=60*60,I=38*52,L=g*I;let O;switch(H){case"hr":O=M/g*A;case"yr":O=M/L*A}return O}function o(){i.isCalculating||(n(1,i.showOptions=!1,i),n(1,i.isCalculating=!0,i),setTimeout(()=>{n(1,i.showResult=!0,i),n(1,i.isCalculating=!1,i)},1e3))}Ht(()=>{setInterval(()=>{s.itemName?n(1,i.elapsedTime++,i):n(1,i.elapsedTime=0,i)},1e3)}),Te.extend(Pt),Te.extend(Wt);const f=[[],[],[]];function c(){s.itemName=this.value,n(0,s)}function h(){s.need=this.__value,n(0,s)}function u(){s.need=this.__value,n(0,s)}function a(){s.want=this.__value,n(0,s)}function b(){i.currencyUnit=Ce(this),n(1,i)}function d(){s.sale=this.__value,n(0,s)}function $(){s.sale=this.__value,n(0,s)}function k(){i.currencyUnit=Ce(this),n(1,i)}function D(){s.income.value=ft(this.value),n(0,s)}function m(){s.income.unit=Ce(this),n(0,s)}return[s,i,l,o,c,h,f,u,a,b,d,$,k,D,m,()=>n(1,i.showOptions=!0,i)]}class tn extends qe{constructor(e){super(),Ae(this,e,en,xt,Ne,{})}}function nn(t){let e,n,r,s,i,l;return r=new tn({}),{c(){e=S("section"),n=S("main"),fe(r.$$.fragment),s=P(),i=S("footer"),i.innerHTML=`<div class="items-center grid-flow-col"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
      <p>Yet another fantastic tool by <a href="https://featherbear.cc">featherbear</a><br/>We do not claim any responsibility for your financial
        irresponsibility. That&#39;s on you.</p></div>`,w(n,"class","svelte-1pwk3qk"),w(i,"class","footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300"),w(e,"class","svelte-1pwk3qk")},m(o,f){q(o,e,f),y(e,n),le(r,n,null),y(e,s),y(e,i),l=!0},p:ne,i(o){l||(W(r.$$.fragment,o),l=!0)},o(o){J(r.$$.fragment,o),l=!1},d(o){o&&j(e),oe(r)}}}class sn extends qe{constructor(e){super(),Ae(this,e,null,nn,Ne,{})}}new sn({target:document.getElementById("app")});
