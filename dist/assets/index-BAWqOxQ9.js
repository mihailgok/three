(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ka(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},$i=[],mn=()=>{},qh=()=>!1,Hr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wa=n=>n.startsWith("onUpdate:"),Re=Object.assign,Xa=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},jh=Object.prototype.hasOwnProperty,te=(n,t)=>jh.call(n,t),Gt=Array.isArray,Ts=n=>Vr(n)==="[object Map]",Kh=n=>Vr(n)==="[object Set]",Vt=n=>typeof n=="function",Me=n=>typeof n=="string",hs=n=>typeof n=="symbol",me=n=>n!==null&&typeof n=="object",su=n=>(me(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),$h=Object.prototype.toString,Vr=n=>$h.call(n),Zh=n=>Vr(n).slice(8,-1),Jh=n=>Vr(n)==="[object Object]",Ya=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bs=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Qh=/-(\w)/g,Qn=Gr(n=>n.replace(Qh,(t,e)=>e?e.toUpperCase():"")),tf=/\B([A-Z])/g,wi=Gr(n=>n.replace(tf,"-$1").toLowerCase()),ru=Gr(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qr=Gr(n=>n?`on${ru(n)}`:""),Kn=(n,t)=>!Object.is(n,t),xr=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},ou=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ko=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let wl;const kr=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qa(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Me(i)?rf(i):qa(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Me(n)||me(n))return n}const ef=/;(?![^(]*\))/g,nf=/:([^]+)/,sf=/\/\*[^]*?\*\//g;function rf(n){const t={};return n.replace(sf,"").split(ef).forEach(e=>{if(e){const i=e.split(nf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ja(n){let t="";if(Me(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=ja(n[e]);i&&(t+=i+" ")}else if(me(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",af=ka(of);function au(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class lf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=We;try{return We=this,t()}finally{We=e}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cf(){return We}let oe;const to=new WeakSet;class lu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,to.has(this)&&(to.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rl(this),hu(this);const t=oe,e=an;oe=this,an=!0;try{return this.fn()}finally{fu(this),oe=t,an=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Za(t);this.deps=this.depsTail=void 0,Rl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?to.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wo(this)&&this.run()}get dirty(){return Wo(this)}}let cu=0,As,ws;function uu(n,t=!1){if(n.flags|=8,t){n.next=ws,ws=n;return}n.next=As,As=n}function Ka(){cu++}function $a(){if(--cu>0)return;if(ws){let t=ws;for(ws=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;As;){let t=As;for(As=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function hu(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fu(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Za(i),uf(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Wo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(du(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function du(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ls))return;n.globalVersion=Ls;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Wo(n)){n.flags&=-3;return}const e=oe,i=an;oe=n,an=!0;try{hu(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=e,an=i,fu(n),n.flags&=-3}}function Za(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Za(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function uf(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let an=!0;const pu=[];function ni(){pu.push(an),an=!1}function ii(){const n=pu.pop();an=n===void 0?!0:n}function Rl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let Ls=0;class hf{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ja{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!oe||!an||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new hf(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,mu(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,Ls++,this.notify(t)}notify(t){Ka();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{$a()}}}function mu(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)mu(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Xo=new WeakMap,Si=Symbol(""),Yo=Symbol(""),Us=Symbol("");function be(n,t,e){if(an&&oe){let i=Xo.get(n);i||Xo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Ja),s.map=i,s.key=e),s.track()}}function Dn(n,t,e,i,s,r){const o=Xo.get(n);if(!o){Ls++;return}const a=l=>{l&&l.trigger()};if(Ka(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&Ya(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Us||!hs(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Us)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Si)),Ts(n)&&a(o.get(Yo)));break;case"delete":l||(a(o.get(Si)),Ts(n)&&a(o.get(Yo)));break;case"set":Ts(n)&&a(o.get(Si));break}}$a()}function Pi(n){const t=Qt(n);return t===n?t:(be(t,"iterate",Us),ln(n)?t:t.map(Le))}function Qa(n){return be(n=Qt(n),"iterate",Us),n}const ff={__proto__:null,[Symbol.iterator](){return eo(this,Symbol.iterator,Le)},concat(...n){return Pi(this).concat(...n.map(t=>Gt(t)?Pi(t):t))},entries(){return eo(this,"entries",n=>(n[1]=Le(n[1]),n))},every(n,t){return Sn(this,"every",n,t,void 0,arguments)},filter(n,t){return Sn(this,"filter",n,t,e=>e.map(Le),arguments)},find(n,t){return Sn(this,"find",n,t,Le,arguments)},findIndex(n,t){return Sn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Sn(this,"findLast",n,t,Le,arguments)},findLastIndex(n,t){return Sn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Sn(this,"forEach",n,t,void 0,arguments)},includes(...n){return no(this,"includes",n)},indexOf(...n){return no(this,"indexOf",n)},join(n){return Pi(this).join(n)},lastIndexOf(...n){return no(this,"lastIndexOf",n)},map(n,t){return Sn(this,"map",n,t,void 0,arguments)},pop(){return ms(this,"pop")},push(...n){return ms(this,"push",n)},reduce(n,...t){return Cl(this,"reduce",n,t)},reduceRight(n,...t){return Cl(this,"reduceRight",n,t)},shift(){return ms(this,"shift")},some(n,t){return Sn(this,"some",n,t,void 0,arguments)},splice(...n){return ms(this,"splice",n)},toReversed(){return Pi(this).toReversed()},toSorted(n){return Pi(this).toSorted(n)},toSpliced(...n){return Pi(this).toSpliced(...n)},unshift(...n){return ms(this,"unshift",n)},values(){return eo(this,"values",Le)}};function eo(n,t,e){const i=Qa(n),s=i[t]();return i!==n&&!ln(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const df=Array.prototype;function Sn(n,t,e,i,s,r){const o=Qa(n),a=o!==n&&!ln(n),l=o[t];if(l!==df[t]){const h=l.apply(n,r);return a?Le(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,Le(h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Cl(n,t,e,i){const s=Qa(n);let r=e;return s!==n&&(ln(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Le(a),l,n)}),s[t](r,...i)}function no(n,t,e){const i=Qt(n);be(i,"iterate",Us);const s=i[t](...e);return(s===-1||s===!1)&&il(e[0])?(e[0]=Qt(e[0]),i[t](...e)):s}function ms(n,t,e=[]){ni(),Ka();const i=Qt(n)[t].apply(n,e);return $a(),ii(),i}const pf=ka("__proto__,__v_isRef,__isVue"),_u=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hs));function mf(n){hs(n)||(n=String(n));const t=Qt(this);return be(t,"has",n),t.hasOwnProperty(n)}class gu{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?bf:Su:r?Mu:xu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=ff[e]))return l;if(e==="hasOwnProperty")return mf}const a=Reflect.get(t,e,Ae(t)?t:i);return(hs(e)?_u.has(e):pf(e))||(s||be(t,"get",e),r)?a:Ae(a)?o&&Ya(e)?a:a.value:me(a)?s?Eu(a):el(a):a}}class vu extends gu{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Ei(r);if(!ln(i)&&!Ei(i)&&(r=Qt(r),i=Qt(i)),!Gt(t)&&Ae(r)&&!Ae(i))return l?!1:(r.value=i,!0)}const o=Gt(t)&&Ya(e)?Number(e)<t.length:te(t,e),a=Reflect.set(t,e,i,Ae(t)?t:s);return t===Qt(s)&&(o?Kn(i,r)&&Dn(t,"set",e,i):Dn(t,"add",e,i)),a}deleteProperty(t,e){const i=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Dn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!hs(e)||!_u.has(e))&&be(t,"has",e),i}ownKeys(t){return be(t,"iterate",Gt(t)?"length":Si),Reflect.ownKeys(t)}}class _f extends gu{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const gf=new vu,vf=new _f,xf=new vu(!0);const qo=n=>n,qs=n=>Reflect.getPrototypeOf(n);function Mf(n,t,e){return function(...i){const s=this.__v_raw,r=Qt(s),o=Ts(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?qo:t?jo:Le;return!t&&be(r,"iterate",l?Yo:Si),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function js(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sf(n,t){const e={get(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);n||(Kn(s,a)&&be(o,"get",s),be(o,"get",a));const{has:l}=qs(o),c=t?qo:n?jo:Le;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&be(Qt(s),"iterate",Si),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);return n||(Kn(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Qt(a),c=t?qo:n?jo:Le;return!n&&be(l,"iterate",Si),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Re(e,n?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(s){!t&&!ln(s)&&!Ei(s)&&(s=Qt(s));const r=Qt(this);return qs(r).has.call(r,s)||(r.add(s),Dn(r,"add",s,s)),this},set(s,r){!t&&!ln(r)&&!Ei(r)&&(r=Qt(r));const o=Qt(this),{has:a,get:l}=qs(o);let c=a.call(o,s);c||(s=Qt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&Dn(o,"set",s,r):Dn(o,"add",s,r),this},delete(s){const r=Qt(this),{has:o,get:a}=qs(r);let l=o.call(r,s);l||(s=Qt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Dn(r,"delete",s,void 0),c},clear(){const s=Qt(this),r=s.size!==0,o=s.clear();return r&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Mf(s,n,t)}),e}function tl(n,t){const e=Sf(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(e,s)&&s in i?e:i,s,r)}const Ef={get:tl(!1,!1)},yf={get:tl(!1,!0)},Tf={get:tl(!0,!1)};const xu=new WeakMap,Mu=new WeakMap,Su=new WeakMap,bf=new WeakMap;function Af(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wf(n){return n.__v_skip||!Object.isExtensible(n)?0:Af(Zh(n))}function el(n){return Ei(n)?n:nl(n,!1,gf,Ef,xu)}function Rf(n){return nl(n,!1,xf,yf,Mu)}function Eu(n){return nl(n,!0,vf,Tf,Su)}function nl(n,t,e,i,s){if(!me(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=wf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Rs(n){return Ei(n)?Rs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ei(n){return!!(n&&n.__v_isReadonly)}function ln(n){return!!(n&&n.__v_isShallow)}function il(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function Cf(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&ou(n,"__v_skip",!0),n}const Le=n=>me(n)?el(n):n,jo=n=>me(n)?Eu(n):n;function Ae(n){return n?n.__v_isRef===!0:!1}function io(n){return Pf(n,!1)}function Pf(n,t){return Ae(n)?n:new Df(n,t)}class Df{constructor(t,e){this.dep=new Ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:Le(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ln(t)||Ei(t);t=i?t:Qt(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:Le(t),this.dep.trigger())}}function Lf(n){return Ae(n)?n.value:n}const Uf={get:(n,t,e)=>t==="__v_raw"?n:Lf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ae(s)&&!Ae(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function yu(n){return Rs(n)?n:new Proxy(n,Uf)}class If{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return uu(this,!0),!0}get value(){const t=this.dep.track();return du(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nf(n,t,e=!1){let i,s;return Vt(n)?i=n:(i=n.get,s=n.set),new If(i,s,e)}const Ks={},Dr=new WeakMap;let mi;function Ff(n,t=!1,e=mi){if(e){let i=Dr.get(e);i||Dr.set(e,i=[]),i.push(n)}}function Of(n,t,e=se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:ln(y)||s===!1||s===0?Ln(y,1):Ln(y);let u,h,d,p,v=!1,S=!1;if(Ae(n)?(h=()=>n.value,v=ln(n)):Rs(n)?(h=()=>c(n),v=!0):Gt(n)?(S=!0,v=n.some(y=>Rs(y)||ln(y)),h=()=>n.map(y=>{if(Ae(y))return y.value;if(Rs(y))return c(y);if(Vt(y))return l?l(y,2):y()})):Vt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){ni();try{d()}finally{ii()}}const y=mi;mi=u;try{return l?l(n,3,[p]):n(p)}finally{mi=y}}:h=mn,t&&s){const y=h,U=s===!0?1/0:s;h=()=>Ln(y(),U)}const m=cf(),f=()=>{u.stop(),m&&m.active&&Xa(m.effects,u)};if(r&&t){const y=t;t=(...U)=>{y(...U),f()}}let w=S?new Array(n.length).fill(Ks):Ks;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const U=u.run();if(s||v||(S?U.some((L,P)=>Kn(L,w[P])):Kn(U,w))){d&&d();const L=mi;mi=u;try{const P=[U,w===Ks?void 0:S&&w[0]===Ks?[]:w,p];l?l(t,3,P):t(...P),w=U}finally{mi=L}}}else u.run()};return a&&a(b),u=new lu(h),u.scheduler=o?()=>o(b,!1):b,p=y=>Ff(y,!1,u),d=u.onStop=()=>{const y=Dr.get(u);if(y){if(l)l(y,4);else for(const U of y)U();Dr.delete(u)}},t?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Ln(n,t=1/0,e){if(t<=0||!me(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Ae(n))Ln(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)Ln(n[i],t,e);else if(Kh(n)||Ts(n))n.forEach(i=>{Ln(i,t,e)});else if(Jh(n)){for(const i in n)Ln(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ln(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zs(n,t,e,i){try{return i?n(...i):n()}catch(s){Wr(s,t,e)}}function vn(n,t,e,i){if(Vt(n)){const s=zs(n,t,e,i);return s&&su(s)&&s.catch(r=>{Wr(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(vn(n[r],t,e,i));return s}}function Wr(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){ni(),zs(r,null,10,[n,l,c]),ii();return}}Bf(n,e,s,i,o)}function Bf(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ue=[];let hn=-1;const Zi=[];let Xn=null,Xi=0;const Tu=Promise.resolve();let Lr=null;function zf(n){const t=Lr||Tu;return n?t.then(this?n.bind(this):n):t}function Hf(n){let t=hn+1,e=Ue.length;for(;t<e;){const i=t+e>>>1,s=Ue[i],r=Is(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function sl(n){if(!(n.flags&1)){const t=Is(n),e=Ue[Ue.length-1];!e||!(n.flags&2)&&t>=Is(e)?Ue.push(n):Ue.splice(Hf(t),0,n),n.flags|=1,bu()}}function bu(){Lr||(Lr=Tu.then(wu))}function Vf(n){Gt(n)?Zi.push(...n):Xn&&n.id===-1?Xn.splice(Xi+1,0,n):n.flags&1||(Zi.push(n),n.flags|=1),bu()}function Pl(n,t,e=hn+1){for(;e<Ue.length;e++){const i=Ue[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ue.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Au(n){if(Zi.length){const t=[...new Set(Zi)].sort((e,i)=>Is(e)-Is(i));if(Zi.length=0,Xn){Xn.push(...t);return}for(Xn=t,Xi=0;Xi<Xn.length;Xi++){const e=Xn[Xi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Xn=null,Xi=0}}const Is=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wu(n){try{for(hn=0;hn<Ue.length;hn++){const t=Ue[hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;hn<Ue.length;hn++){const t=Ue[hn];t&&(t.flags&=-2)}hn=-1,Ue.length=0,Au(),Lr=null,(Ue.length||Zi.length)&&wu()}}let Je=null,Ru=null;function Ur(n){const t=Je;return Je=n,Ru=n&&n.type.__scopeId||null,t}function Gf(n,t=Je,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Hl(-1);const r=Ur(t);let o;try{o=n(...s)}finally{Ur(r),i._d&&Hl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dl(n,t){if(Je===null)return n;const e=jr(Je),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=se]=t[s];r&&(Vt(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ai(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ni(),vn(l,e,8,[n.el,a,n,t]),ii())}}const kf=Symbol("_vte"),Wf=n=>n.__isTeleport;function rl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,rl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Cu(n,t){return Vt(n)?Re({name:n.name},t,{setup:n}):n}function Pu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ir(n,t,e,i,s=!1){if(Gt(n)){n.forEach((v,S)=>Ir(v,t&&(Gt(t)?t[S]:t),e,i,s));return}if(Cs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?jr(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===se?a.refs={}:a.refs,h=a.setupState,d=Qt(h),p=h===se?()=>!1:v=>te(d,v);if(c!=null&&c!==l&&(Me(c)?(u[c]=null,p(c)&&(h[c]=null)):Ae(c)&&(c.value=null)),Vt(l))zs(l,a,12,[o,u]);else{const v=Me(l),S=Ae(l);if(v||S){const m=()=>{if(n.f){const f=v?p(l)?h[l]:u[l]:l.value;s?Gt(f)&&Xa(f,r):Gt(f)?f.includes(r)||f.push(r):v?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,p(l)&&(h[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,ke(m,e)):m()}}}kr().requestIdleCallback;kr().cancelIdleCallback;const Cs=n=>!!n.type.__asyncLoader,Du=n=>n.type.__isKeepAlive;function Xf(n,t){Lu(n,"a",t)}function Yf(n,t){Lu(n,"da",t)}function Lu(n,t,e=Ie){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xr(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Du(s.parent.vnode)&&qf(i,t,e,s),s=s.parent}}function qf(n,t,e,i){const s=Xr(t,n,i,!0);Iu(()=>{Xa(i[t],s)},e)}function Xr(n,t,e=Ie,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ni();const a=Hs(e),l=vn(t,e,n,o);return a(),ii(),l});return i?s.unshift(r):s.push(r),r}}const Bn=n=>(t,e=Ie)=>{(!Os||n==="sp")&&Xr(n,(...i)=>t(...i),e)},jf=Bn("bm"),Uu=Bn("m"),Kf=Bn("bu"),$f=Bn("u"),Zf=Bn("bum"),Iu=Bn("um"),Jf=Bn("sp"),Qf=Bn("rtg"),td=Bn("rtc");function ed(n,t=Ie){Xr("ec",n,t)}const nd=Symbol.for("v-ndc"),Ko=n=>n?ih(n)?jr(n):Ko(n.parent):null,Ps=Re(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ko(n.parent),$root:n=>Ko(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fu(n),$forceUpdate:n=>n.f||(n.f=()=>{sl(n.update)}),$nextTick:n=>n.n||(n.n=zf.bind(n.proxy)),$watch:n=>Td.bind(n)}),so=(n,t)=>n!==se&&!n.__isScriptSetup&&te(n,t),id={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(so(i,t))return o[t]=1,i[t];if(s!==se&&te(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&te(c,t))return o[t]=3,r[t];if(e!==se&&te(e,t))return o[t]=4,e[t];$o&&(o[t]=0)}}const u=Ps[t];let h,d;if(u)return t==="$attrs"&&be(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==se&&te(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,te(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return so(s,t)?(s[t]=e,!0):i!==se&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==se&&te(n,o)||so(t,o)||(a=r[0])&&te(a,o)||te(i,o)||te(Ps,o)||te(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ll(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let $o=!0;function sd(n){const t=Fu(n),e=n.proxy,i=n.ctx;$o=!1,t.beforeCreate&&Ul(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:f,beforeUnmount:w,destroyed:b,unmounted:y,render:U,renderTracked:L,renderTriggered:P,errorCaptured:O,serverPrefetch:T,expose:E,inheritAttrs:D,components:Q,directives:Y,filters:nt}=t;if(c&&rd(c,i,null),o)for(const J in o){const z=o[J];Vt(z)&&(i[J]=z.bind(e))}if(s){const J=s.call(e,e);me(J)&&(n.data=el(J))}if($o=!0,r)for(const J in r){const z=r[J],ht=Vt(z)?z.bind(e,e):Vt(z.get)?z.get.bind(e,e):mn,Mt=!Vt(z)&&Vt(z.set)?z.set.bind(e):mn,bt=Xd({get:ht,set:Mt});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Dt=>bt.value=Dt})}if(a)for(const J in a)Nu(a[J],i,e,J);if(l){const J=Vt(l)?l.call(e):l;Reflect.ownKeys(J).forEach(z=>{hd(z,J[z])})}u&&Ul(u,n,"c");function Z(J,z){Gt(z)?z.forEach(ht=>J(ht.bind(e))):z&&J(z.bind(e))}if(Z(jf,h),Z(Uu,d),Z(Kf,p),Z($f,v),Z(Xf,S),Z(Yf,m),Z(ed,O),Z(td,L),Z(Qf,P),Z(Zf,w),Z(Iu,y),Z(Jf,T),Gt(E))if(E.length){const J=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(J,z,{get:()=>e[z],set:ht=>e[z]=ht})})}else n.exposed||(n.exposed={});U&&n.render===mn&&(n.render=U),D!=null&&(n.inheritAttrs=D),Q&&(n.components=Q),Y&&(n.directives=Y),T&&Pu(n)}function rd(n,t,e=mn){Gt(n)&&(n=Zo(n));for(const i in n){const s=n[i];let r;me(s)?"default"in s?r=Mr(s.from||i,s.default,!0):r=Mr(s.from||i):r=Mr(s),Ae(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ul(n,t,e){vn(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Nu(n,t,e,i){let s=i.includes(".")?$u(e,i):()=>e[i];if(Me(n)){const r=t[n];Vt(r)&&Sr(s,r)}else if(Vt(n))Sr(s,n.bind(e));else if(me(n))if(Gt(n))n.forEach(r=>Nu(r,t,e,i));else{const r=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(r)&&Sr(s,r,n)}}function Fu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Nr(l,c,o,!0)),Nr(l,t,o)),me(t)&&r.set(t,l),l}function Nr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Nr(n,r,e,!0),s&&s.forEach(o=>Nr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=od[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const od={data:Il,props:Nl,emits:Nl,methods:Es,computed:Es,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Es,directives:Es,watch:ld,provide:Il,inject:ad};function Il(n,t){return t?n?function(){return Re(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function ad(n,t){return Es(Zo(n),Zo(t))}function Zo(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Pe(n,t){return n?[...new Set([].concat(n,t))]:t}function Es(n,t){return n?Re(Object.create(null),n,t):t}function Nl(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Re(Object.create(null),Ll(n),Ll(t??{})):t}function ld(n,t){if(!n)return t;if(!t)return n;const e=Re(Object.create(null),n);for(const i in t)e[i]=Pe(n[i],t[i]);return e}function Ou(){return{app:null,config:{isNativeTag:qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cd=0;function ud(n,t){return function(i,s=null){Vt(i)||(i=Re({},i)),s!=null&&!me(s)&&(s=null);const r=Ou(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:cd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Yd,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Vt(u.install)?(o.add(u),u.install(c,...h)):Vt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||$n(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,jr(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ji;Ji=c;try{return u()}finally{Ji=h}}};return c}}let Ji=null;function hd(n,t){if(Ie){let e=Ie.provides;const i=Ie.parent&&Ie.parent.provides;i===e&&(e=Ie.provides=Object.create(i)),e[n]=t}}function Mr(n,t,e=!1){const i=Ie||Je;if(i||Ji){const s=Ji?Ji._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}const Bu={},zu=()=>Object.create(Bu),Hu=n=>Object.getPrototypeOf(n)===Bu;function fd(n,t,e,i=!1){const s={},r=zu();n.propsDefaults=Object.create(null),Vu(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Rf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function dd(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Yr(n.emitsOptions,d))continue;const p=t[d];if(l)if(te(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const v=Qn(d);s[v]=Jo(l,a,v,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Vu(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!te(t,h)&&((u=wi(h))===h||!te(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Jo(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!te(t,h))&&(delete r[h],c=!0)}c&&Dn(n.attrs,"set","")}function Vu(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(bs(l))continue;const c=t[l];let u;s&&te(s,u=Qn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Yr(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qt(e),c=a||se;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Jo(s,l,h,c[h],n,!te(c,h))}}return o}function Jo(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Hs(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===wi(e))&&(i=!0))}return i}const pd=new WeakMap;function Gu(n,t,e=!1){const i=e?pd:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Vt(n)){const u=h=>{l=!0;const[d,p]=Gu(h,t,!0);Re(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return me(n)&&i.set(n,$i),$i;if(Gt(r))for(let u=0;u<r.length;u++){const h=Qn(r[u]);Fl(h)&&(o[h]=se)}else if(r)for(const u in r){const h=Qn(u);if(Fl(h)){const d=r[u],p=o[h]=Gt(d)||Vt(d)?{type:d}:Re({},d),v=p.type;let S=!1,m=!0;if(Gt(v))for(let f=0;f<v.length;++f){const w=v[f],b=Vt(w)&&w.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(m=!1)}else S=Vt(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||te(p,"default"))&&a.push(h)}}const c=[o,a];return me(n)&&i.set(n,c),c}function Fl(n){return n[0]!=="$"&&!bs(n)}const ku=n=>n[0]==="_"||n==="$stable",ol=n=>Gt(n)?n.map(fn):[fn(n)],md=(n,t,e)=>{if(t._n)return t;const i=Gf((...s)=>ol(t(...s)),e);return i._c=!1,i},Wu=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ku(s))continue;const r=n[s];if(Vt(r))t[s]=md(s,r,i);else if(r!=null){const o=ol(r);t[s]=()=>o}}},Xu=(n,t)=>{const e=ol(t);n.slots.default=()=>e},Yu=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},_d=(n,t,e)=>{const i=n.slots=zu();if(n.vnode.shapeFlag&32){const s=t._;s?(Yu(i,t,e),e&&ou(i,"_",s,!0)):Wu(t,i)}else t&&Xu(n,t)},gd=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Yu(s,t,e):(r=!t.$stable,Wu(t,s)),o=t}else t&&(Xu(n,t),o={default:1});if(r)for(const a in s)!ku(a)&&o[a]==null&&delete s[a]},ke=Dd;function vd(n){return xd(n)}function xd(n,t){const e=kr();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=mn,insertStaticContent:v}=n,S=(A,R,x,it=null,q=null,j=null,K=void 0,st=null,X=!!R.dynamicChildren)=>{if(A===R)return;A&&!_s(A,R)&&(it=pt(A),Dt(A,q,j,!0),A=null),R.patchFlag===-2&&(X=!1,R.dynamicChildren=null);const{type:g,ref:_,shapeFlag:C}=R;switch(g){case qr:m(A,R,x,it);break;case Ns:f(A,R,x,it);break;case oo:A==null&&w(R,x,it,K);break;case Cn:Q(A,R,x,it,q,j,K,st,X);break;default:C&1?U(A,R,x,it,q,j,K,st,X):C&6?Y(A,R,x,it,q,j,K,st,X):(C&64||C&128)&&g.process(A,R,x,it,q,j,K,st,X,Rt)}_!=null&&q&&Ir(_,A&&A.ref,j,R||A,!R)},m=(A,R,x,it)=>{if(A==null)i(R.el=a(R.children),x,it);else{const q=R.el=A.el;R.children!==A.children&&c(q,R.children)}},f=(A,R,x,it)=>{A==null?i(R.el=l(R.children||""),x,it):R.el=A.el},w=(A,R,x,it)=>{[A.el,A.anchor]=v(A.children,R,x,it,A.el,A.anchor)},b=({el:A,anchor:R},x,it)=>{let q;for(;A&&A!==R;)q=d(A),i(A,x,it),A=q;i(R,x,it)},y=({el:A,anchor:R})=>{let x;for(;A&&A!==R;)x=d(A),s(A),A=x;s(R)},U=(A,R,x,it,q,j,K,st,X)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),A==null?L(R,x,it,q,j,K,st,X):T(A,R,q,j,K,st,X)},L=(A,R,x,it,q,j,K,st)=>{let X,g;const{props:_,shapeFlag:C,transition:B,dirs:k}=A;if(X=A.el=o(A.type,j,_&&_.is,_),C&8?u(X,A.children):C&16&&O(A.children,X,null,it,q,ro(A,j),K,st),k&&ai(A,null,it,"created"),P(X,A,A.scopeId,K,it),_){for(const ct in _)ct!=="value"&&!bs(ct)&&r(X,ct,null,_[ct],j,it);"value"in _&&r(X,"value",null,_.value,j),(g=_.onVnodeBeforeMount)&&un(g,it,A)}k&&ai(A,null,it,"beforeMount");const V=Md(q,B);V&&B.beforeEnter(X),i(X,R,x),((g=_&&_.onVnodeMounted)||V||k)&&ke(()=>{g&&un(g,it,A),V&&B.enter(X),k&&ai(A,null,it,"mounted")},q)},P=(A,R,x,it,q)=>{if(x&&p(A,x),it)for(let j=0;j<it.length;j++)p(A,it[j]);if(q){let j=q.subTree;if(R===j||Ju(j.type)&&(j.ssContent===R||j.ssFallback===R)){const K=q.vnode;P(A,K,K.scopeId,K.slotScopeIds,q.parent)}}},O=(A,R,x,it,q,j,K,st,X=0)=>{for(let g=X;g<A.length;g++){const _=A[g]=st?Yn(A[g]):fn(A[g]);S(null,_,R,x,it,q,j,K,st)}},T=(A,R,x,it,q,j,K)=>{const st=R.el=A.el;let{patchFlag:X,dynamicChildren:g,dirs:_}=R;X|=A.patchFlag&16;const C=A.props||se,B=R.props||se;let k;if(x&&li(x,!1),(k=B.onVnodeBeforeUpdate)&&un(k,x,R,A),_&&ai(R,A,x,"beforeUpdate"),x&&li(x,!0),(C.innerHTML&&B.innerHTML==null||C.textContent&&B.textContent==null)&&u(st,""),g?E(A.dynamicChildren,g,st,x,it,ro(R,q),j):K||z(A,R,st,null,x,it,ro(R,q),j,!1),X>0){if(X&16)D(st,C,B,x,q);else if(X&2&&C.class!==B.class&&r(st,"class",null,B.class,q),X&4&&r(st,"style",C.style,B.style,q),X&8){const V=R.dynamicProps;for(let ct=0;ct<V.length;ct++){const ot=V[ct],ft=C[ot],Lt=B[ot];(Lt!==ft||ot==="value")&&r(st,ot,ft,Lt,q,x)}}X&1&&A.children!==R.children&&u(st,R.children)}else!K&&g==null&&D(st,C,B,x,q);((k=B.onVnodeUpdated)||_)&&ke(()=>{k&&un(k,x,R,A),_&&ai(R,A,x,"updated")},it)},E=(A,R,x,it,q,j,K)=>{for(let st=0;st<R.length;st++){const X=A[st],g=R[st],_=X.el&&(X.type===Cn||!_s(X,g)||X.shapeFlag&70)?h(X.el):x;S(X,g,_,null,it,q,j,K,!0)}},D=(A,R,x,it,q)=>{if(R!==x){if(R!==se)for(const j in R)!bs(j)&&!(j in x)&&r(A,j,R[j],null,q,it);for(const j in x){if(bs(j))continue;const K=x[j],st=R[j];K!==st&&j!=="value"&&r(A,j,st,K,q,it)}"value"in x&&r(A,"value",R.value,x.value,q)}},Q=(A,R,x,it,q,j,K,st,X)=>{const g=R.el=A?A.el:a(""),_=R.anchor=A?A.anchor:a("");let{patchFlag:C,dynamicChildren:B,slotScopeIds:k}=R;k&&(st=st?st.concat(k):k),A==null?(i(g,x,it),i(_,x,it),O(R.children||[],x,_,q,j,K,st,X)):C>0&&C&64&&B&&A.dynamicChildren?(E(A.dynamicChildren,B,x,q,j,K,st),(R.key!=null||q&&R===q.subTree)&&qu(A,R,!0)):z(A,R,x,_,q,j,K,st,X)},Y=(A,R,x,it,q,j,K,st,X)=>{R.slotScopeIds=st,A==null?R.shapeFlag&512?q.ctx.activate(R,x,it,K,X):nt(R,x,it,q,j,K,X):rt(A,R,X)},nt=(A,R,x,it,q,j,K)=>{const st=A.component=zd(A,it,q);if(Du(A)&&(st.ctx.renderer=Rt),Hd(st,!1,K),st.asyncDep){if(q&&q.registerDep(st,Z,K),!A.el){const X=st.subTree=$n(Ns);f(null,X,R,x)}}else Z(st,A,R,x,q,j,K)},rt=(A,R,x)=>{const it=R.component=A.component;if(Cd(A,R,x))if(it.asyncDep&&!it.asyncResolved){J(it,R,x);return}else it.next=R,it.update();else R.el=A.el,it.vnode=R},Z=(A,R,x,it,q,j,K)=>{const st=()=>{if(A.isMounted){let{next:C,bu:B,u:k,parent:V,vnode:ct}=A;{const _t=ju(A);if(_t){C&&(C.el=ct.el,J(A,C,K)),_t.asyncDep.then(()=>{A.isUnmounted||st()});return}}let ot=C,ft;li(A,!1),C?(C.el=ct.el,J(A,C,K)):C=ct,B&&xr(B),(ft=C.props&&C.props.onVnodeBeforeUpdate)&&un(ft,V,C,ct),li(A,!0);const Lt=Bl(A),at=A.subTree;A.subTree=Lt,S(at,Lt,h(at.el),pt(at),A,q,j),C.el=Lt.el,ot===null&&Pd(A,Lt.el),k&&ke(k,q),(ft=C.props&&C.props.onVnodeUpdated)&&ke(()=>un(ft,V,C,ct),q)}else{let C;const{el:B,props:k}=R,{bm:V,m:ct,parent:ot,root:ft,type:Lt}=A,at=Cs(R);li(A,!1),V&&xr(V),!at&&(C=k&&k.onVnodeBeforeMount)&&un(C,ot,R),li(A,!0);{ft.ce&&ft.ce._injectChildStyle(Lt);const _t=A.subTree=Bl(A);S(null,_t,x,it,A,q,j),R.el=_t.el}if(ct&&ke(ct,q),!at&&(C=k&&k.onVnodeMounted)){const _t=R;ke(()=>un(C,ot,_t),q)}(R.shapeFlag&256||ot&&Cs(ot.vnode)&&ot.vnode.shapeFlag&256)&&A.a&&ke(A.a,q),A.isMounted=!0,R=x=it=null}};A.scope.on();const X=A.effect=new lu(st);A.scope.off();const g=A.update=X.run.bind(X),_=A.job=X.runIfDirty.bind(X);_.i=A,_.id=A.uid,X.scheduler=()=>sl(_),li(A,!0),g()},J=(A,R,x)=>{R.component=A;const it=A.vnode.props;A.vnode=R,A.next=null,dd(A,R.props,it,x),gd(A,R.children,x),ni(),Pl(A),ii()},z=(A,R,x,it,q,j,K,st,X=!1)=>{const g=A&&A.children,_=A?A.shapeFlag:0,C=R.children,{patchFlag:B,shapeFlag:k}=R;if(B>0){if(B&128){Mt(g,C,x,it,q,j,K,st,X);return}else if(B&256){ht(g,C,x,it,q,j,K,st,X);return}}k&8?(_&16&&Et(g,q,j),C!==g&&u(x,C)):_&16?k&16?Mt(g,C,x,it,q,j,K,st,X):Et(g,q,j,!0):(_&8&&u(x,""),k&16&&O(C,x,it,q,j,K,st,X))},ht=(A,R,x,it,q,j,K,st,X)=>{A=A||$i,R=R||$i;const g=A.length,_=R.length,C=Math.min(g,_);let B;for(B=0;B<C;B++){const k=R[B]=X?Yn(R[B]):fn(R[B]);S(A[B],k,x,null,q,j,K,st,X)}g>_?Et(A,q,j,!0,!1,C):O(R,x,it,q,j,K,st,X,C)},Mt=(A,R,x,it,q,j,K,st,X)=>{let g=0;const _=R.length;let C=A.length-1,B=_-1;for(;g<=C&&g<=B;){const k=A[g],V=R[g]=X?Yn(R[g]):fn(R[g]);if(_s(k,V))S(k,V,x,null,q,j,K,st,X);else break;g++}for(;g<=C&&g<=B;){const k=A[C],V=R[B]=X?Yn(R[B]):fn(R[B]);if(_s(k,V))S(k,V,x,null,q,j,K,st,X);else break;C--,B--}if(g>C){if(g<=B){const k=B+1,V=k<_?R[k].el:it;for(;g<=B;)S(null,R[g]=X?Yn(R[g]):fn(R[g]),x,V,q,j,K,st,X),g++}}else if(g>B)for(;g<=C;)Dt(A[g],q,j,!0),g++;else{const k=g,V=g,ct=new Map;for(g=V;g<=B;g++){const dt=R[g]=X?Yn(R[g]):fn(R[g]);dt.key!=null&&ct.set(dt.key,g)}let ot,ft=0;const Lt=B-V+1;let at=!1,_t=0;const At=new Array(Lt);for(g=0;g<Lt;g++)At[g]=0;for(g=k;g<=C;g++){const dt=A[g];if(ft>=Lt){Dt(dt,q,j,!0);continue}let It;if(dt.key!=null)It=ct.get(dt.key);else for(ot=V;ot<=B;ot++)if(At[ot-V]===0&&_s(dt,R[ot])){It=ot;break}It===void 0?Dt(dt,q,j,!0):(At[It-V]=g+1,It>=_t?_t=It:at=!0,S(dt,R[It],x,null,q,j,K,st,X),ft++)}const Ut=at?Sd(At):$i;for(ot=Ut.length-1,g=Lt-1;g>=0;g--){const dt=V+g,It=R[dt],Ot=dt+1<_?R[dt+1].el:it;At[g]===0?S(null,It,x,Ot,q,j,K,st,X):at&&(ot<0||g!==Ut[ot]?bt(It,x,Ot,2):ot--)}}},bt=(A,R,x,it,q=null)=>{const{el:j,type:K,transition:st,children:X,shapeFlag:g}=A;if(g&6){bt(A.component.subTree,R,x,it);return}if(g&128){A.suspense.move(R,x,it);return}if(g&64){K.move(A,R,x,Rt);return}if(K===Cn){i(j,R,x);for(let C=0;C<X.length;C++)bt(X[C],R,x,it);i(A.anchor,R,x);return}if(K===oo){b(A,R,x);return}if(it!==2&&g&1&&st)if(it===0)st.beforeEnter(j),i(j,R,x),ke(()=>st.enter(j),q);else{const{leave:C,delayLeave:B,afterLeave:k}=st,V=()=>i(j,R,x),ct=()=>{C(j,()=>{V(),k&&k()})};B?B(j,V,ct):ct()}else i(j,R,x)},Dt=(A,R,x,it=!1,q=!1)=>{const{type:j,props:K,ref:st,children:X,dynamicChildren:g,shapeFlag:_,patchFlag:C,dirs:B,cacheIndex:k}=A;if(C===-2&&(q=!1),st!=null&&Ir(st,null,x,A,!0),k!=null&&(R.renderCache[k]=void 0),_&256){R.ctx.deactivate(A);return}const V=_&1&&B,ct=!Cs(A);let ot;if(ct&&(ot=K&&K.onVnodeBeforeUnmount)&&un(ot,R,A),_&6)ut(A.component,x,it);else{if(_&128){A.suspense.unmount(x,it);return}V&&ai(A,null,R,"beforeUnmount"),_&64?A.type.remove(A,R,x,Rt,it):g&&!g.hasOnce&&(j!==Cn||C>0&&C&64)?Et(g,R,x,!1,!0):(j===Cn&&C&384||!q&&_&16)&&Et(X,R,x),it&&$t(A)}(ct&&(ot=K&&K.onVnodeUnmounted)||V)&&ke(()=>{ot&&un(ot,R,A),V&&ai(A,null,R,"unmounted")},x)},$t=A=>{const{type:R,el:x,anchor:it,transition:q}=A;if(R===Cn){tt(x,it);return}if(R===oo){y(A);return}const j=()=>{s(x),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:K,delayLeave:st}=q,X=()=>K(x,j);st?st(A.el,j,X):X()}else j()},tt=(A,R)=>{let x;for(;A!==R;)x=d(A),s(A),A=x;s(R)},ut=(A,R,x)=>{const{bum:it,scope:q,job:j,subTree:K,um:st,m:X,a:g}=A;Ol(X),Ol(g),it&&xr(it),q.stop(),j&&(j.flags|=8,Dt(K,A,R,x)),st&&ke(st,R),ke(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Et=(A,R,x,it=!1,q=!1,j=0)=>{for(let K=j;K<A.length;K++)Dt(A[K],R,x,it,q)},pt=A=>{if(A.shapeFlag&6)return pt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=d(A.anchor||A.el),x=R&&R[kf];return x?d(x):R};let wt=!1;const Xt=(A,R,x)=>{A==null?R._vnode&&Dt(R._vnode,null,null,!0):S(R._vnode||null,A,R,null,null,null,x),R._vnode=A,wt||(wt=!0,Pl(),Au(),wt=!1)},Rt={p:S,um:Dt,m:bt,r:$t,mt:nt,mc:O,pc:z,pbc:E,n:pt,o:n};return{render:Xt,hydrate:void 0,createApp:ud(Xt)}}function ro({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function li({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Md(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function qu(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&qu(o,a)),a.type===qr&&(a.el=o.el)}}function Sd(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ju(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ju(t)}function Ol(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Ed=Symbol.for("v-scx"),yd=()=>Mr(Ed);function Sr(n,t,e){return Ku(n,t,e)}function Ku(n,t,e=se){const{immediate:i,deep:s,flush:r,once:o}=e,a=Re({},e),l=t&&i||!t&&r!=="post";let c;if(Os){if(r==="sync"){const p=yd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=mn,p.resume=mn,p.pause=mn,p}}const u=Ie;a.call=(p,v,S)=>vn(p,u,v,S);let h=!1;r==="post"?a.scheduler=p=>{ke(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,v)=>{v?p():sl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Of(n,t,a);return Os&&(c?c.push(d):l&&d()),d}function Td(n,t,e){const i=this.proxy,s=Me(n)?n.includes(".")?$u(i,n):()=>i[n]:n.bind(i,i);let r;Vt(t)?r=t:(r=t.handler,e=t);const o=Hs(this),a=Ku(s,r.bind(i),e);return o(),a}function $u(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const bd=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qn(t)}Modifiers`]||n[`${wi(t)}Modifiers`];function Ad(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let s=e;const r=t.startsWith("update:"),o=r&&bd(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Me(u)?u.trim():u)),o.number&&(s=e.map(ko)));let a,l=i[a=Qr(t)]||i[a=Qr(Qn(t))];!l&&r&&(l=i[a=Qr(wi(t))]),l&&vn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(c,n,6,s)}}function Zu(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Vt(n)){const l=c=>{const u=Zu(c,t,!0);u&&(a=!0,Re(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(me(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Re(o,r),me(n)&&i.set(n,o),o)}function Yr(n,t){return!n||!Hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,wi(t))||te(n,t))}function Bl(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:v,inheritAttrs:S}=n,m=Ur(n);let f,w;try{if(e.shapeFlag&4){const y=s||i,U=y;f=fn(c.call(U,y,u,h,p,d,v)),w=a}else{const y=t;f=fn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),w=t.props?a:wd(a)}}catch(y){Ds.length=0,Wr(y,n,1),f=$n(Ns)}let b=f;if(w&&S!==!1){const y=Object.keys(w),{shapeFlag:U}=b;y.length&&U&7&&(r&&y.some(Wa)&&(w=Rd(w,r)),b=is(b,w,!1,!0))}return e.dirs&&(b=is(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&rl(b,e.transition),f=b,Ur(m),f}const wd=n=>{let t;for(const e in n)(e==="class"||e==="style"||Hr(e))&&((t||(t={}))[e]=n[e]);return t},Rd=(n,t)=>{const e={};for(const i in n)(!Wa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Cd(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?zl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Yr(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zl(i,o,c):!0:!!o;return!1}function zl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Yr(e,r))return!0}return!1}function Pd({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Ju=n=>n.__isSuspense;function Dd(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):Vf(n)}const Cn=Symbol.for("v-fgt"),qr=Symbol.for("v-txt"),Ns=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),Ds=[];let Xe=null;function Qu(n=!1){Ds.push(Xe=n?null:[])}function Ld(){Ds.pop(),Xe=Ds[Ds.length-1]||null}let Fs=1;function Hl(n,t=!1){Fs+=n,n<0&&Xe&&t&&(Xe.hasOnce=!0)}function Ud(n){return n.dynamicChildren=Fs>0?Xe||$i:null,Ld(),Fs>0&&Xe&&Xe.push(n),n}function th(n,t,e,i,s,r){return Ud(Pn(n,t,e,i,s,r,!0))}function eh(n){return n?n.__v_isVNode===!0:!1}function _s(n,t){return n.type===t.type&&n.key===t.key}const nh=({key:n})=>n??null,Er=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||Ae(n)||Vt(n)?{i:Je,r:n,k:t,f:!!e}:n:null);function Pn(n,t=null,e=null,i=0,s=null,r=n===Cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&nh(t),ref:t&&Er(t),scopeId:Ru,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Je};return a?(al(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Me(e)?8:16),Fs>0&&!o&&Xe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xe.push(l),l}const $n=Id;function Id(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===nd)&&(n=Ns),eh(n)){const a=is(n,t,!0);return e&&al(a,e),Fs>0&&!r&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(n)]=a:Xe.push(a)),a.patchFlag=-2,a}if(Wd(n)&&(n=n.__vccOpts),t){t=Nd(t);let{class:a,style:l}=t;a&&!Me(a)&&(t.class=ja(a)),me(l)&&(il(l)&&!Gt(l)&&(l=Re({},l)),t.style=qa(l))}const o=Me(n)?1:Ju(n)?128:Wf(n)?64:me(n)?4:Vt(n)?2:0;return Pn(n,t,e,i,s,o,r,!0)}function Nd(n){return n?il(n)||Hu(n)?Re({},n):n:null}function is(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Fd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&nh(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Er(t)):[r,Er(t)]:Er(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&is(n.ssContent),ssFallback:n.ssFallback&&is(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&rl(u,l.clone(u)),u}function Qo(n=" ",t=0){return $n(qr,null,n,t)}function fn(n){return n==null||typeof n=="boolean"?$n(Ns):Gt(n)?$n(Cn,null,n.slice()):eh(n)?Yn(n):$n(qr,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:is(n)}function al(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),al(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Hu(t)?t._ctx=Je:s===3&&Je&&(Je.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:Je},e=32):(t=String(t),i&64?(e=16,t=[Qo(t)]):e=8);n.children=t,n.shapeFlag|=e}function Fd(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ja([t.class,i.class]));else if(s==="style")t.style=qa([t.style,i.style]);else if(Hr(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function un(n,t,e,i=null){vn(n,t,7,[e,i])}const Od=Ou();let Bd=0;function zd(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Od,r={uid:Bd++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gu(i,s),emitsOptions:Zu(i,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ad.bind(null,r),n.ce&&n.ce(r),r}let Ie=null,Fr,ta;{const n=kr(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Fr=t("__VUE_INSTANCE_SETTERS__",e=>Ie=e),ta=t("__VUE_SSR_SETTERS__",e=>Os=e)}const Hs=n=>{const t=Ie;return Fr(n),n.scope.on(),()=>{n.scope.off(),Fr(t)}},Vl=()=>{Ie&&Ie.scope.off(),Fr(null)};function ih(n){return n.vnode.shapeFlag&4}let Os=!1;function Hd(n,t=!1,e=!1){t&&ta(t);const{props:i,children:s}=n.vnode,r=ih(n);fd(n,i,r,t),_d(n,s,e);const o=r?Vd(n,t):void 0;return t&&ta(!1),o}function Vd(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,id);const{setup:i}=e;if(i){ni();const s=n.setupContext=i.length>1?kd(n):null,r=Hs(n),o=zs(i,n,0,[n.props,s]),a=su(o);if(ii(),r(),(a||n.sp)&&!Cs(n)&&Pu(n),a){if(o.then(Vl,Vl),t)return o.then(l=>{Gl(n,l)}).catch(l=>{Wr(l,n,0)});n.asyncDep=o}else Gl(n,o)}else sh(n)}function Gl(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:me(t)&&(n.setupState=yu(t)),sh(n)}function sh(n,t,e){const i=n.type;n.render||(n.render=i.render||mn);{const s=Hs(n);ni();try{sd(n)}finally{ii(),s()}}}const Gd={get(n,t){return be(n,"get",""),n[t]}};function kd(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Gd),slots:n.slots,emit:n.emit,expose:t}}function jr(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yu(Cf(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ps)return Ps[e](n)},has(t,e){return e in t||e in Ps}})):n.proxy}function Wd(n){return Vt(n)&&"__vccOpts"in n}const Xd=(n,t)=>Nf(n,t,Os),Yd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ea;const kl=typeof window<"u"&&window.trustedTypes;if(kl)try{ea=kl.createPolicy("vue",{createHTML:n=>n})}catch{}const rh=ea?n=>ea.createHTML(n):n=>n,qd="http://www.w3.org/2000/svg",jd="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Wl=Rn&&Rn.createElement("template"),Kd={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Rn.createElementNS(qd,n):t==="mathml"?Rn.createElementNS(jd,n):e?Rn.createElement(n,{is:e}):Rn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Rn.createTextNode(n),createComment:n=>Rn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Wl.innerHTML=rh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Wl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},$d=Symbol("_vtc");function Zd(n,t,e){const i=n[$d];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Xl=Symbol("_vod"),Jd=Symbol("_vsh"),Qd=Symbol(""),tp=/(^|;)\s*display\s*:/;function ep(n,t,e){const i=n.style,s=Me(e);let r=!1;if(e&&!s){if(t)if(Me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&yr(i,a,"")}else for(const o in t)e[o]==null&&yr(i,o,"");for(const o in e)o==="display"&&(r=!0),yr(i,o,e[o])}else if(s){if(t!==e){const o=i[Qd];o&&(e+=";"+o),i.cssText=e,r=tp.test(e)}}else t&&n.removeAttribute("style");Xl in n&&(n[Xl]=r?i.display:"",n[Jd]&&(i.display="none"))}const Yl=/\s*!important$/;function yr(n,t,e){if(Gt(e))e.forEach(i=>yr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=np(n,t);Yl.test(e)?n.setProperty(wi(i),e.replace(Yl,""),"important"):n[i]=e}}const ql=["Webkit","Moz","ms"],ao={};function np(n,t){const e=ao[t];if(e)return e;let i=Qn(t);if(i!=="filter"&&i in n)return ao[t]=i;i=ru(i);for(let s=0;s<ql.length;s++){const r=ql[s]+i;if(r in n)return ao[t]=r}return t}const jl="http://www.w3.org/1999/xlink";function Kl(n,t,e,i,s,r=af(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(jl,t.slice(6,t.length)):n.setAttributeNS(jl,t,e):e==null||r&&!au(e)?n.removeAttribute(t):n.setAttribute(t,r?"":hs(e)?String(e):e)}function $l(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?rh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=au(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Yi(n,t,e,i){n.addEventListener(t,e,i)}function ip(n,t,e,i){n.removeEventListener(t,e,i)}const Zl=Symbol("_vei");function sp(n,t,e,i,s=null){const r=n[Zl]||(n[Zl]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=rp(t);if(i){const c=r[t]=lp(i,s);Yi(n,a,c,l)}else o&&(ip(n,a,o,l),r[t]=void 0)}}const Jl=/(?:Once|Passive|Capture)$/;function rp(n){let t;if(Jl.test(n)){t={};let i;for(;i=n.match(Jl);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wi(n.slice(2)),t]}let lo=0;const op=Promise.resolve(),ap=()=>lo||(op.then(()=>lo=0),lo=Date.now());function lp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;vn(cp(i,e.value),t,5,[i])};return e.value=n,e.attached=ap(),e}function cp(n,t){if(Gt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ql=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,up=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Zd(n,i,o):t==="style"?ep(n,e,i):Hr(t)?Wa(t)||sp(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hp(n,t,i,o))?($l(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Kl(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Me(i))?$l(n,Qn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Kl(n,t,i,o))};function hp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ql(t)&&Vt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ql(t)&&Me(e)?!1:t in n}const tc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>xr(t,e):t};function fp(n){n.target.composing=!0}function ec(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const co=Symbol("_assign"),nc={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[co]=tc(s);const r=i||s.props&&s.props.type==="number";Yi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=ko(a)),n[co](a)}),e&&Yi(n,"change",()=>{n.value=n.value.trim()}),t||(Yi(n,"compositionstart",fp),Yi(n,"compositionend",ec),Yi(n,"change",ec))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[co]=tc(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ko(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},dp=Re({patchProp:up},Kd);let ic;function pp(){return ic||(ic=vd(dp))}const mp=(...n)=>{const t=pp().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=gp(i);if(!s)return;const r=t._component;!Vt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,_p(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function _p(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function gp(n){return Me(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="173",Qi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,sc=1,xp=2,oh=1,Mp=2,wn=3,ti=0,Be=1,Un=2,Zn=0,ts=1,rc=2,oc=3,ac=4,Sp=5,gi=100,Ep=101,yp=102,Tp=103,bp=104,Ap=200,wp=201,Rp=202,Cp=203,na=204,ia=205,Pp=206,Dp=207,Lp=208,Up=209,Ip=210,Np=211,Fp=212,Op=213,Bp=214,sa=0,ra=1,oa=2,ss=3,aa=4,la=5,ca=6,ua=7,ah=0,zp=1,Hp=2,Jn=0,Vp=1,Gp=2,kp=3,Wp=4,Xp=5,Yp=6,qp=7,lh=300,rs=301,os=302,ha=303,fa=304,Kr=306,da=1e3,xi=1001,pa=1002,cn=1003,jp=1004,$s=1005,pn=1006,uo=1007,Mi=1008,On=1009,ch=1010,uh=1011,Bs=1012,cl=1013,yi=1014,In=1015,Vs=1016,ul=1017,hl=1018,as=1020,hh=35902,fh=1021,dh=1022,on=1023,ph=1024,mh=1025,es=1026,ls=1027,_h=1028,fl=1029,gh=1030,dl=1031,pl=1033,Tr=33776,br=33777,Ar=33778,wr=33779,ma=35840,_a=35841,ga=35842,va=35843,xa=36196,Ma=37492,Sa=37496,Ea=37808,ya=37809,Ta=37810,ba=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,Da=37817,La=37818,Ua=37819,Ia=37820,Na=37821,Rr=36492,Fa=36494,Oa=36495,vh=36283,Ba=36284,za=36285,Ha=36286,Kp=3200,$p=3201,xh=0,Zp=1,jn="",$e="srgb",cs="srgb-linear",Or="linear",ne="srgb",Di=7680,lc=519,Jp=512,Qp=513,tm=514,Mh=515,em=516,nm=517,im=518,sm=519,cc=35044,uc="300 es",Nn=2e3,Br=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Va=180/Math.PI;function Gs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function rm(n,t){return(n%t+t)%t}function ho(n,t,e){return(1-e)*n+e*t}function gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const om={DEG2RAD:Cr};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],S=s[0],m=s[3],f=s[6],w=s[1],b=s[4],y=s[7],U=s[2],L=s[5],P=s[8];return r[0]=o*S+a*w+l*U,r[3]=o*m+a*b+l*L,r[6]=o*f+a*y+l*P,r[1]=c*S+u*w+h*U,r[4]=c*m+u*b+h*L,r[7]=c*f+u*y+h*P,r[2]=d*S+p*w+v*U,r[5]=d*m+p*b+v*L,r[8]=d*f+p*y+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,v=e*h+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=h*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=d*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=p*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new zt;function Sh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function am(){const n=zr("canvas");return n.style.display="block",n}const hc={};function qi(n){n in hc||(hc[n]=!0,console.warn(n))}function lm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function cm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function um(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hm(){const n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Or:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:t,whitePoint:i,transfer:Or,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const Kt=hm();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class fm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=zr("canvas")),Li.width=t.width,Li.height=t.height;const i=Li.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Li}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dm=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(po(s[o].image)):r.push(po(s[o]))}else r=po(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pm=0;class ze extends Ri{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=xi,s=xi,r=pn,o=Mi,a=on,l=On,c=ze.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Gs(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=lh;ze.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(p+1)/2,U=(f+1)/2,L=(u+d)/4,P=(h+S)/4,O=(v+m)/4;return b>y&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=L/i,r=P/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=L/s,r=O/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=O/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(h-S)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends Ri{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends mm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yh extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _m extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=S;return}if(h!==S||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*S,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const U=Math.sqrt(b),L=Math.atan2(U,f*w);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const y=a*w;if(l=l*m+d*y,c=c*m+p*y,u=u*m+v*y,h=h*m+S*y,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+u*h+l*p-c*d,t[e+1]=l*v+u*d+c*h-a*p,t[e+2]=c*v+u*p+a*d-l*h,t[e+3]=u*v-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new H,pc=new bi;class ks{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Js.subVectors(this.max,vs),Ui.subVectors(t.a,vs),Ii.subVectors(t.b,vs),Ni.subVectors(t.c,vs),zn.subVectors(Ii,Ui),Hn.subVectors(Ni,Ii),ci.subVectors(Ui,Ni);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ci.z,ci.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ci.z,0,-ci.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ci.y,ci.x,0];return!_o(e,Ui,Ii,Ni,Js)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,Ui,Ii,Ni,Js))?!1:(Qs.crossVectors(zn,Hn),e=[Qs.x,Qs.y,Qs.z],_o(e,Ui,Ii,Ni,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new H,new H,new H,new H,new H,new H,new H,new H],en=new H,Zs=new ks,Ui=new H,Ii=new H,Ni=new H,zn=new H,Hn=new H,ci=new H,vs=new H,Js=new H,Qs=new H,ui=new H;function _o(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ui.fromArray(n,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gm=new ks,xs=new H,go=new H;class ml{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(go)),this.expandByPoint(xs.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new H,vo=new H,tr=new H,Vn=new H,xo=new H,er=new H,Mo=new H;class Th{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vo.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(vo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=Vn.dot(this.direction),l=-Vn.dot(tr),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const S=1/u;h*=S,d*=S,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vo).addScaledVector(tr,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const i=yn.dot(this.direction),s=yn.dot(yn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,s,r){xo.subVectors(e,t),er.subVectors(i,t),Mo.crossVectors(xo,er);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(er.crossVectors(Vn,er));if(l<0)return null;const c=a*this.direction.dot(xo.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(Mo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,l,c,u,h,d,p,v,S,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,p,v,S,m)}set(t,e,i,s,r,o,a,l,c,u,h,d,p,v,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,v=a*u,S=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+v*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,v=c*u,S=c*h;e[0]=d+S*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,v=c*u,S=c*h;e[0]=d-S*a,e[4]=-o*h,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,v=a*u,S=a*h;e[0]=l*u,e[4]=v*c-p,e[8]=d*c+S,e[1]=l*h,e[5]=S*c+d,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=S-d*h,e[8]=v*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+v,e[10]=d-S*h}else if(t.order==="XZY"){const d=o*l,p=o*c,v=a*l,S=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+S,e[5]=o*u,e[9]=p*h-v,e[2]=v*h-p,e[6]=a*u,e[10]=S*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,xm)}lookAt(t,e,i){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Gn.crossVectors(i,Ve),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Gn.crossVectors(i,Ve)),Gn.normalize(),nr.crossVectors(Ve,Gn),s[0]=Gn.x,s[4]=nr.x,s[8]=Ve.x,s[1]=Gn.y,s[5]=nr.y,s[9]=Ve.y,s[2]=Gn.z,s[6]=nr.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],S=i[6],m=i[10],f=i[14],w=i[3],b=i[7],y=i[11],U=i[15],L=s[0],P=s[4],O=s[8],T=s[12],E=s[1],D=s[5],Q=s[9],Y=s[13],nt=s[2],rt=s[6],Z=s[10],J=s[14],z=s[3],ht=s[7],Mt=s[11],bt=s[15];return r[0]=o*L+a*E+l*nt+c*z,r[4]=o*P+a*D+l*rt+c*ht,r[8]=o*O+a*Q+l*Z+c*Mt,r[12]=o*T+a*Y+l*J+c*bt,r[1]=u*L+h*E+d*nt+p*z,r[5]=u*P+h*D+d*rt+p*ht,r[9]=u*O+h*Q+d*Z+p*Mt,r[13]=u*T+h*Y+d*J+p*bt,r[2]=v*L+S*E+m*nt+f*z,r[6]=v*P+S*D+m*rt+f*ht,r[10]=v*O+S*Q+m*Z+f*Mt,r[14]=v*T+S*Y+m*J+f*bt,r[3]=w*L+b*E+y*nt+U*z,r[7]=w*P+b*D+y*rt+U*ht,r[11]=w*O+b*Q+y*Z+U*Mt,r[15]=w*T+b*Y+y*J+U*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],v=t[3],S=t[7],m=t[11],f=t[15];return v*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+S*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],v=t[12],S=t[13],m=t[14],f=t[15],w=h*m*c-S*d*c+S*l*p-a*m*p-h*l*f+a*d*f,b=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,y=u*S*c-v*h*c+v*a*p-o*S*p-u*a*f+o*h*f,U=v*h*l-u*S*l-v*a*d+o*S*d+u*a*m-o*h*m,L=e*w+i*b+s*y+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=w*P,t[1]=(S*d*r-h*m*r-S*s*p+i*m*p+h*s*f-i*d*f)*P,t[2]=(a*m*r-S*l*r+S*s*c-i*m*c-a*s*f+i*l*f)*P,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*P,t[4]=b*P,t[5]=(u*m*r-v*d*r+v*s*p-e*m*p-u*s*f+e*d*f)*P,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=y*P,t[9]=(v*h*r-u*S*r-v*i*p+e*S*p+u*i*f-e*h*f)*P,t[10]=(o*S*r-v*a*r+v*i*c-e*S*c-o*i*f+e*a*f)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*P,t[12]=U*P,t[13]=(u*S*s-v*h*s+v*i*d-e*S*d-u*i*m+e*h*m)*P,t[14]=(v*a*s-o*S*s-v*i*l+e*S*l+o*i*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,v=r*h,S=o*u,m=o*h,f=a*h,w=l*c,b=l*u,y=l*h,U=i.x,L=i.y,P=i.z;return s[0]=(1-(S+f))*U,s[1]=(p+y)*U,s[2]=(v-b)*U,s[3]=0,s[4]=(p-y)*L,s[5]=(1-(d+f))*L,s[6]=(m+w)*L,s[7]=0,s[8]=(v+b)*P,s[9]=(m-w)*P,s[10]=(1-(d+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,u=1/o,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Nn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,v;if(a===Nn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Br)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Nn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,p=(i+s)*u;let v,S;if(a===Nn)v=(o+r)*h,S=-2*h;else if(a===Br)v=r*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Fi=new H,nn=new fe,vm=new H(0,0,0),xm=new H(1,1,1),Gn=new H,nr=new H,Ve=new H,mc=new fe,_c=new bi;class xn{constructor(t=0,e=0,i=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const gc=new H,Oi=new bi,Tn=new fe,ir=new H,Ms=new H,Sm=new H,Em=new bi,vc=new H(1,0,0),xc=new H(0,1,0),Mc=new H(0,0,1),Sc={type:"added"},ym={type:"removed"},Bi={type:"childadded",child:null},So={type:"childremoved",child:null};class we extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new H,e=new xn,i=new bi,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ms,ir,this.up):Tn.lookAt(ir,Ms,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ym),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}we.DEFAULT_UP=new H(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new H,bn=new H,Eo=new H,An=new H,zi=new H,Hi=new H,Ec=new H,yo=new H,To=new H,bo=new H,Ao=new he,wo=new he,Ro=new he;class rn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){sn.subVectors(s,e),bn.subVectors(i,e),Eo.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(bn),l=sn.dot(Eo),c=bn.dot(bn),u=bn.dot(Eo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ao.setScalar(0),wo.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,i),Ro.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ao,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),bn.subVectors(t,e),sn.cross(bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,i),Hi.subVectors(r,i),yo.subVectors(t,i);const l=zi.dot(yo),c=Hi.dot(yo);if(l<=0&&c<=0)return e.copy(i);To.subVectors(t,s);const u=zi.dot(To),h=Hi.dot(To);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(zi,o);bo.subVectors(t,r);const p=zi.dot(bo),v=Hi.dot(bo);if(v>=0&&p<=v)return e.copy(r);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Hi,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Ec.subVectors(r,s),a=(h-u)/(h-u+(p-v)),e.copy(s).addScaledVector(Ec,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(i).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Co(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=rm(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Co(o,r,t+1/3),this.g=Co(o,r,t),this.b=Co(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Ah[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Kt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Wt(Te.r*255,0,255))*65536+Math.round(Wt(Te.g*255,0,255))*256+Math.round(Wt(Te.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=$e){Kt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(sr);const i=ho(kn.h,sr.h,e),s=ho(kn.s,sr.s,e),r=ho(kn.l,sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=Ah;let Tm=0;class fs extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=ts,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wh extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new H,rr=new Ht;let bm=0;class _n{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Rh extends _n{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ch extends _n{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gn extends _n{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Am=0;const Ke=new fe,Po=new we,Vi=new H,Ge=new ks,Ss=new ks,xe=new H;class si extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?Ch:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ge.min,Ss.min),Ge.expandByPoint(xe),xe.addVectors(Ge.max,Ss.max),Ge.expandByPoint(xe)):(Ge.expandByPoint(Ss.min),Ge.expandByPoint(Ss.max))}Ge.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),xe.add(Vi)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new H,l[O]=new H;const c=new H,u=new H,h=new H,d=new Ht,p=new Ht,v=new Ht,S=new H,m=new H;function f(O,T,E){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,E),u.sub(c),h.sub(c),p.sub(d),v.sub(d);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[O].add(S),a[T].add(S),a[E].add(S),l[O].add(m),l[T].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,T=w.length;O<T;++O){const E=w[O],D=E.start,Q=E.count;for(let Y=D,nt=D+Q;Y<nt;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const b=new H,y=new H,U=new H,L=new H;function P(O){U.fromBufferAttribute(s,O),L.copy(U);const T=a[O];b.copy(T),b.sub(U.multiplyScalar(U.dot(T))).normalize(),y.crossVectors(L,T);const D=y.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,T=w.length;O<T;++O){const E=w[O],D=E.start,Q=E.count;for(let Y=D,nt=D+Q;Y<nt;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new _n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new si,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new fe,hi=new Th,or=new ml,Tc=new H,ar=new H,lr=new H,cr=new H,Do=new H,ur=new H,bc=new H,hr=new H;class Ye extends we{constructor(t=new si,e=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Do.fromBufferAttribute(h,t),o?ur.addScaledVector(Do,u):ur.addScaledVector(Do.sub(e),u))}e.add(ur)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(or.containsPoint(hi.origin)===!1&&(hi.intersectSphere(or,Tc)===null||hi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),hi.copy(t.ray).applyMatrix4(yc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const m=d[v],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,U=b;y<U;y+=3){const L=a.getX(y),P=a.getX(y+1),O=a.getX(y+2);s=fr(this,f,t,i,c,u,h,L,P,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,f=S;m<f;m+=3){const w=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=fr(this,o,t,i,c,u,h,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const m=d[v],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,U=b;y<U;y+=3){const L=y,P=y+1,O=y+2;s=fr(this,f,t,i,c,u,h,L,P,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,f=S;m<f;m+=3){const w=m,b=m+1,y=m+2;s=fr(this,o,t,i,c,u,h,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wm(n,t,e,i,s,r,o,a){let l;if(t.side===Be?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;hr.copy(a),hr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:n}}function fr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ar),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);const u=wm(n,t,e,i,ar,lr,cr,bc);if(u){const h=new H;rn.getBarycoord(bc,ar,lr,cr,h),s&&(u.uv=rn.getInterpolatedAttribute(s,a,l,c,h,new Ht)),r&&(u.uv1=rn.getInterpolatedAttribute(r,a,l,c,h,new Ht)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};rn.getNormal(ar,lr,cr,d.normal),u.face=d,u.barycoord=h}return u}class Ai extends si{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(h,2));function v(S,m,f,w,b,y,U,L,P,O,T){const E=y/P,D=U/O,Q=y/2,Y=U/2,nt=L/2,rt=P+1,Z=O+1;let J=0,z=0;const ht=new H;for(let Mt=0;Mt<Z;Mt++){const bt=Mt*D-Y;for(let Dt=0;Dt<rt;Dt++){const $t=Dt*E-Q;ht[S]=$t*w,ht[m]=bt*b,ht[f]=nt,c.push(ht.x,ht.y,ht.z),ht[S]=0,ht[m]=0,ht[f]=L>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Dt/P),h.push(1-Mt/O),J+=1}}for(let Mt=0;Mt<O;Mt++)for(let bt=0;bt<P;bt++){const Dt=d+bt+rt*Mt,$t=d+bt+rt*(Mt+1),tt=d+(bt+1)+rt*(Mt+1),ut=d+(bt+1)+rt*Mt;l.push(Dt,$t,ut),l.push($t,tt,ut),z+=6}a.addGroup(p,z,T),p+=z,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=us(n[e]);for(const s in i)t[s]=i[s]}return t}function Rm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ph(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Cm={clone:us,merge:De};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Dh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new H,Ac=new Ht,wc=new Ht;class Ze extends Dh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,wc),e.subVectors(wc,Ac)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,ki=1;class Lm extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Gi,ki,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Gi,ki,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Gi,ki,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Gi,ki,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Gi,ki,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Gi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Lh extends ze{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Um extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Lh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Zn});r.uniforms.tEquirect.value=e;const o=new Ye(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=pn),new Lm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class dr extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Im={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Nm extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Uo=new H,Fm=new H,Om=new zt;class qn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Uo.subVectors(i,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Uo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Om.getNormalMatrix(t),s=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new ml,pr=new H;class _l{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],v=s[9],S=s[10],m=s[11],f=s[12],w=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-p,y-f).normalize(),i[1].setComponents(l+r,d+c,m+p,y+f).normalize(),i[2].setComponents(l+o,d+u,m+v,y+w).normalize(),i[3].setComponents(l-o,d-u,m-v,y-w).normalize(),i[4].setComponents(l-a,d-h,m-S,y-b).normalize(),e===Nn)i[5].setComponents(l+a,d+h,m+S,y+b).normalize();else if(e===Br)i[5].setComponents(a,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends ze{constructor(t,e,i,s,r,o,a,l,c,u=es){if(u!==es&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=yi),i===void 0&&u===ls&&(i=as),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ws extends si{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],v=[],S=[],m=[];for(let f=0;f<u;f++){const w=f*d-o;for(let b=0;b<c;b++){const y=b*h-r;v.push(y,-w,0),S.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const b=w+c*f,y=w+c*(f+1),U=w+1+c*(f+1),L=w+1+c*f;p.push(b,y,L),p.push(y,U,L)}this.setIndex(p),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(S,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class gl extends si{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,d=new H,p=[],v=[],S=[],m=[];for(let f=0;f<=i;f++){const w=[],b=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let U=0;U<=e;U++){const L=U/e;h.x=-t*Math.cos(s+L*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+L*r)*Math.sin(o+b*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(L+y,1-b),w.push(c++)}u.push(w)}for(let f=0;f<i;f++)for(let w=0;w<e;w++){const b=u[f][w+1],y=u[f][w],U=u[f+1][w],L=u[f+1][w+1];(f!==0||o>0)&&p.push(b,y,L),(f!==i-1||l<Math.PI)&&p.push(y,U,L)}this.setIndex(p),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(S,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bm extends fs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Io extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zm extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hm extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vm extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const No=new fe,Rc=new H,Cc=new H;class Gm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ih extends Dh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class km extends Gm{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wm extends Vm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new km}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Pc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ym extends Ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Dc(n,t,e,i){const s=qm(i);switch(e){case fh:return n*t;case ph:return n*t;case mh:return n*t*2;case _h:return n*t/s.components*s.byteLength;case fl:return n*t/s.components*s.byteLength;case gh:return n*t*2/s.components*s.byteLength;case dl:return n*t*2/s.components*s.byteLength;case dh:return n*t*3/s.components*s.byteLength;case on:return n*t*4/s.components*s.byteLength;case pl:return n*t*4/s.components*s.byteLength;case Tr:case br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ar:case wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:case va:return Math.max(n,16)*Math.max(t,8)/4;case ma:case ga:return Math.max(n,8)*Math.max(t,8)/2;case xa:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Rr:case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vh:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*8;case za:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qm(n){switch(n){case On:case ch:return{byteLength:1,components:1};case Bs:case uh:case Vs:return{byteLength:2,components:1};case ul:case hl:return{byteLength:2,components:4};case yi:case cl:case In:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jm(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],S=h[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const S=h[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,v_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Km,alphahash_pars_fragment:$m,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:Qm,alphatest_pars_fragment:t_,aomap_fragment:e_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:__,color_vertex:g_,common:v_,cube_uv_reflection_fragment:x_,defaultnormal_vertex:M_,displacementmap_pars_vertex:S_,displacementmap_vertex:E_,emissivemap_fragment:y_,emissivemap_pars_fragment:T_,colorspace_fragment:b_,colorspace_pars_fragment:A_,envmap_fragment:w_,envmap_common_pars_fragment:R_,envmap_pars_fragment:C_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:L_,fog_pars_vertex:U_,fog_fragment:I_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:H_,lights_toon_fragment:G_,lights_toon_pars_fragment:k_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:Y_,lights_physical_pars_fragment:q_,lights_fragment_begin:j_,lights_fragment_maps:K_,lights_fragment_end:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:og,morphinstance_vertex:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:ug,morphtarget_vertex:hg,normal_fragment_begin:fg,normal_fragment_maps:dg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:_g,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:Eg,packing:yg,premultiplied_alpha_fragment:Tg,project_vertex:bg,dithering_fragment:Ag,dithering_pars_fragment:wg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ug,skinbase_vertex:Ig,skinning_pars_vertex:Ng,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:zg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:kg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:Yg,worldpos_vertex:qg,background_vert:jg,background_frag:Kg,backgroundCube_vert:$g,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:Qg,depth_vert:tv,depth_frag:ev,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:uv,meshlambert_frag:hv,meshmatcap_vert:fv,meshmatcap_frag:dv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:_v,meshphong_frag:gv,meshphysical_vert:vv,meshphysical_frag:xv,meshtoon_vert:Mv,meshtoon_frag:Sv,points_vert:Ev,points_frag:yv,shadow_vert:Tv,shadow_frag:bv,sprite_vert:Av,sprite_frag:wv},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},dn={basic:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:De([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:De([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:De([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:De([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:De([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:De([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:De([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:De([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};dn.physical={uniforms:De([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const mr={r:0,b:0,g:0},di=new xn,Rv=new fe;function Cv(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function S(b){let y=!1;const U=v(b);U===null?f(a,l):U&&U.isColor&&(f(U,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const U=v(y);U&&(U.isCubeTexture||U.mapping===Kr)?(u===void 0&&(u=new Ye(new Ai(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:us(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(y.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(di)),u.material.toneMapped=Kt.getTransfer(U.colorSpace)!==ne,(h!==U||d!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=U,d=U.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Ye(new Ws(2,2),new ei({name:"BackgroundMaterial",uniforms:us(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(U.colorSpace)!==ne,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||d!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=U,d=U.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,y){b.getRGB(mr,Ph(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,y,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:S,addToRenderList:m,dispose:w}}function Pv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,Q,Y,nt){let rt=!1;const Z=h(Y,Q,D);r!==Z&&(r=Z,c(r.object)),rt=p(E,Y,Q,nt),rt&&v(E,Y,Q,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,y(E,D,Q,Y),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,Q){const Y=Q.wireframe===!0;let nt=i[E.id];nt===void 0&&(nt={},i[E.id]=nt);let rt=nt[D.id];rt===void 0&&(rt={},nt[D.id]=rt);let Z=rt[Y];return Z===void 0&&(Z=d(l()),rt[Y]=Z),Z}function d(E){const D=[],Q=[],Y=[];for(let nt=0;nt<e;nt++)D[nt]=0,Q[nt]=0,Y[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:Y,object:E,attributes:{},index:null}}function p(E,D,Q,Y){const nt=r.attributes,rt=D.attributes;let Z=0;const J=Q.getAttributes();for(const z in J)if(J[z].location>=0){const Mt=nt[z];let bt=rt[z];if(bt===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),Mt===void 0||Mt.attribute!==bt||bt&&Mt.data!==bt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function v(E,D,Q,Y){const nt={},rt=D.attributes;let Z=0;const J=Q.getAttributes();for(const z in J)if(J[z].location>=0){let Mt=rt[z];Mt===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor));const bt={};bt.attribute=Mt,Mt&&Mt.data&&(bt.data=Mt.data),nt[z]=bt,Z++}r.attributes=nt,r.attributesNum=Z,r.index=Y}function S(){const E=r.newAttributes;for(let D=0,Q=E.length;D<Q;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const Q=r.newAttributes,Y=r.enabledAttributes,nt=r.attributeDivisors;Q[E]=1,Y[E]===0&&(n.enableVertexAttribArray(E),Y[E]=1),nt[E]!==D&&(n.vertexAttribDivisor(E,D),nt[E]=D)}function w(){const E=r.newAttributes,D=r.enabledAttributes;for(let Q=0,Y=D.length;Q<Y;Q++)D[Q]!==E[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function b(E,D,Q,Y,nt,rt,Z){Z===!0?n.vertexAttribIPointer(E,D,Q,nt,rt):n.vertexAttribPointer(E,D,Q,Y,nt,rt)}function y(E,D,Q,Y){S();const nt=Y.attributes,rt=Q.getAttributes(),Z=D.defaultAttributeValues;for(const J in rt){const z=rt[J];if(z.location>=0){let ht=nt[J];if(ht===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(ht=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(ht=E.instanceColor)),ht!==void 0){const Mt=ht.normalized,bt=ht.itemSize,Dt=t.get(ht);if(Dt===void 0)continue;const $t=Dt.buffer,tt=Dt.type,ut=Dt.bytesPerElement,Et=tt===n.INT||tt===n.UNSIGNED_INT||ht.gpuType===cl;if(ht.isInterleavedBufferAttribute){const pt=ht.data,wt=pt.stride,Xt=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<z.locationSize;Rt++)f(z.location+Rt,pt.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Rt=0;Rt<z.locationSize;Rt++)m(z.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Rt=0;Rt<z.locationSize;Rt++)b(z.location+Rt,bt/z.locationSize,tt,Mt,wt*ut,(Xt+bt/z.locationSize*Rt)*ut,Et)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<z.locationSize;pt++)f(z.location+pt,ht.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<z.locationSize;pt++)m(z.location+pt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let pt=0;pt<z.locationSize;pt++)b(z.location+pt,bt/z.locationSize,tt,Mt,bt*ut,bt/z.locationSize*pt*ut,Et)}}else if(Z!==void 0){const Mt=Z[J];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(z.location,Mt);break;case 3:n.vertexAttrib3fv(z.location,Mt);break;case 4:n.vertexAttrib4fv(z.location,Mt);break;default:n.vertexAttrib1fv(z.location,Mt)}}}}w()}function U(){O();for(const E in i){const D=i[E];for(const Q in D){const Y=D[Q];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete D[Q]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const Q in D){const Y=D[Q];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete D[Q]}delete i[E.id]}function P(E){for(const D in i){const Q=i[D];if(Q[E.id]===void 0)continue;const Y=Q[E.id];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete Q[E.id]}}function O(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function Dv(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let S=0;S<h;S++)v+=u[S]*d[S];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==on&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==On&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:U,maxSamples:L}}function Uv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new qn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,b=w*4;let y=f.clippingState||null;l.value=y,y=u(v,d,b,p);for(let U=0;U!==b;++U)y[U]=e[U];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const f=p+S*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==S;++b,y+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function Iv(n){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=rs:a===fa&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ha||a===fa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Um(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ki=4,Lc=[.125,.215,.35,.446,.526,.582],vi=20,Fo=new Ih,Uc=new qt;let Oo=null,Bo=0,zo=0,Ho=!1;const _i=(1+Math.sqrt(5))/2,Wi=1/_i,Ic=[new H(-_i,Wi,0),new H(_i,Wi,0),new H(-Wi,0,_i),new H(Wi,0,_i),new H(0,_i,-Wi),new H(0,_i,Wi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,zo),this._renderer.xr.enabled=Ho,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Vs,format:on,colorSpace:cs,depthBuffer:!1},s=Fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nv(r)),this._blurMaterial=Fv(r,t,e)}return s}_compileMaterial(t){const e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,i,s){const a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Jn,u.autoClear=!1;const p=new wh({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),v=new Ye(new Ai,p);let S=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,S=!0):(p.color.copy(Uc),S=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;_r(s,w*b,f>2?b:0,b,b),u.setRenderTarget(s),S&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rs||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Fo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),S=r/v,m=isFinite(r)?1+Math.floor(u*S):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const f=[];let w=0;for(let P=0;P<vi;++P){const O=P/S,T=Math.exp(-O*O/2);f.push(T),P===0?w+=T:P<m&&(w+=2*T)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const y=this._sizeLods[s],U=3*y*(s>b-Ki?s-b+Ki:0),L=4*(this._cubeSize-y);_r(e,U,L,3*y,2*y),l.setRenderTarget(e),l.render(h,Fo)}}function Nv(n){const t=[],e=[],i=[];let s=n;const r=n-Ki+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ki?l=Lc[o-n+Ki-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,S=3,m=2,f=1,w=new Float32Array(S*v*p),b=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,O=L>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(T,S*v*L),b.set(d,m*v*L);const E=[L,L,L,L,L,L];y.set(E,f*v*L)}const U=new si;U.setAttribute("position",new _n(w,S)),U.setAttribute("uv",new _n(b,m)),U.setAttribute("faceIndex",new _n(y,f)),t.push(U),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fc(n,t,e){const i=new Ti(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fv(n,t,e){const i=new Float32Array(vi),s=new H(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ov(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ha||l===fa,u=l===rs||l===os;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Nc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Nc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Bv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zv(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,v=h.attributes.position;let S=0;if(p!==null){const w=p.array;S=p.version;for(let b=0,y=w.length;b<y;b+=3){const U=w[b+0],L=w[b+1],P=w[b+2];d.push(U,L,L,P,P,U)}}else if(v!==void 0){const w=v.array;S=v.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const U=b+0,L=b+1,P=b+2;d.push(U,L,L,P,P,U)}}else return;const m=new(Sh(d)?Ch:Rh)(d,1);m.version=S;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,d*o,v),e.update(p,i,v))}function u(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function h(d,p,v,S){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],S[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,S,0,v);let f=0;for(let w=0;w<v;w++)f+=p[w]*S[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gv(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let U=a.attributes.position.count*y,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*L*4*h),O=new yh(P,U,L,h);O.type=In,O.needsUpdate=!0;const T=y*4;for(let D=0;D<h;D++){const Q=f[D],Y=w[D],nt=b[D],rt=U*L*4*D;for(let Z=0;Z<Q.count;Z++){const J=Z*T;v===!0&&(s.fromBufferAttribute(Q,Z),P[rt+J+0]=s.x,P[rt+J+1]=s.y,P[rt+J+2]=s.z,P[rt+J+3]=0),S===!0&&(s.fromBufferAttribute(Y,Z),P[rt+J+4]=s.x,P[rt+J+5]=s.y,P[rt+J+6]=s.z,P[rt+J+7]=0),m===!0&&(s.fromBufferAttribute(nt,Z),P[rt+J+8]=s.x,P[rt+J+9]=s.y,P[rt+J+10]=s.z,P[rt+J+11]=nt.itemSize===4?s.w:1)}}d={count:h,texture:O,size:new Ht(U,L)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function kv(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Fh=new ze,zc=new Uh(1,1),Oh=new yh,Bh=new _m,zh=new Lh,Hc=[],Vc=[],Gc=new Float32Array(16),kc=new Float32Array(9),Wc=new Float32Array(4);function ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $r(n,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function jv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),ve(e,i)}}function Kv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;kc.set(i),n.uniformMatrix3fv(this.addr,!1,kc),ve(e,i)}}function $v(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;Gc.set(i),n.uniformMatrix4fv(this.addr,!1,Gc),ve(e,i)}}function Zv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=Mh,r=zc):r=Fh,e.setTexture2D(t||r,s)}function ox(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bh,s)}function ax(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||zh,s)}function lx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Oh,s)}function cx(n){switch(n){case 5126:return Wv;case 35664:return Xv;case 35665:return Yv;case 35666:return qv;case 35674:return jv;case 35675:return Kv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function ux(n,t){n.uniform1fv(this.addr,t)}function hx(n,t){const e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function fx(n,t){const e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function dx(n,t){const e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function px(n,t){const e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mx(n,t){const e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _x(n,t){const e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gx(n,t){n.uniform1iv(this.addr,t)}function vx(n,t){n.uniform2iv(this.addr,t)}function xx(n,t){n.uniform3iv(this.addr,t)}function Mx(n,t){n.uniform4iv(this.addr,t)}function Sx(n,t){n.uniform1uiv(this.addr,t)}function Ex(n,t){n.uniform2uiv(this.addr,t)}function yx(n,t){n.uniform3uiv(this.addr,t)}function Tx(n,t){n.uniform4uiv(this.addr,t)}function bx(n,t,e){const i=this.cache,s=t.length,r=$r(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function Ax(n,t,e){const i=this.cache,s=t.length,r=$r(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bh,r[o])}function wx(n,t,e){const i=this.cache,s=t.length,r=$r(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function Rx(n,t,e){const i=this.cache,s=t.length,r=$r(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function Cx(n){switch(n){case 5126:return ux;case 35664:return hx;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return _x;case 5124:case 35670:return gx;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return Ex;case 36295:return yx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Px{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cx(e.type)}}class Dx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}}class Lx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Xc(n,t){n.seq.push(t),n.map[t.id]=t}function Ux(n,t,e){const i=n.name,s=i.length;for(Vo.lastIndex=0;;){const r=Vo.exec(i),o=Vo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xc(e,c===void 0?new Px(a,n,t):new Dx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Lx(a),Xc(e,h)),e=h}}}class Pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ux(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Yc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ix=37297;let Nx=0;function Fx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const qc=new zt;function Ox(n){Kt._getMatrix(qc,Kt.workingColorSpace,n);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Or:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fx(n.getShaderSource(t),o)}else return s}function Bx(n,t){const e=Ox(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zx(n,t){let e;switch(t){case Vp:e="Linear";break;case Gp:e="Reinhard";break;case kp:e="Cineon";break;case Wp:e="ACESFilmic";break;case Yp:e="AgX";break;case qp:e="Neutral";break;case Xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new H;function Hx(){Kt.getLuminanceCoefficients(gr);const n=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Gx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ys(n){return n!==""}function Kc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace(Wx,Yx)}const Xx=new Map;function Yx(n,t){let e=kt[t];if(e===void 0){const i=Xx.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(qx,jx)}function jx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function $x(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function Jx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case zp:t="ENVMAP_BLENDING_MIX";break;case Hp:t="ENVMAP_BLENDING_ADD";break}return t}function Qx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function t0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kx(e),c=$x(e),u=Zx(e),h=Jx(e),d=Qx(e),p=Vx(e),v=Gx(r),S=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Bx("linearToOutputTexel",e.outputColorSpace),Hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=Ga(o),o=Kc(o,e),o=$c(o,e),a=Ga(a),a=Kc(a,e),a=$c(a,e),o=Zc(o),a=Zc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=w+m+o,y=w+f+a,U=Yc(s,s.VERTEX_SHADER,b),L=Yc(s,s.FRAGMENT_SHADER,y);s.attachShader(S,U),s.attachShader(S,L),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(D){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(S).trim(),Y=s.getShaderInfoLog(U).trim(),nt=s.getShaderInfoLog(L).trim();let rt=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,U,L);else{const J=jc(s,U,"vertex"),z=jc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+J+`
`+z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||nt==="")&&(Z=!1);Z&&(D.diagnostics={runnable:rt,programLog:Q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:nt,prefix:f}})}s.deleteShader(U),s.deleteShader(L),O=new Pr(s,S),T=kx(s,S)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,Ix)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=L,this}let e0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new i0(t),e.set(t,i)),i}}class i0{constructor(t){this.id=e0++,this.code=t,this.usedTimes=0}}function s0(n,t,e,i,s,r,o){const a=new bh,l=new n0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,D,Q,Y){const nt=Q.fog,rt=Y.geometry,Z=T.isMeshStandardMaterial?Q.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||Z),z=J&&J.mapping===Kr?J.image.height:null,ht=v[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Mt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,bt=Mt!==void 0?Mt.length:0;let Dt=0;rt.morphAttributes.position!==void 0&&(Dt=1),rt.morphAttributes.normal!==void 0&&(Dt=2),rt.morphAttributes.color!==void 0&&(Dt=3);let $t,tt,ut,Et;if(ht){const ee=dn[ht];$t=ee.vertexShader,tt=ee.fragmentShader}else $t=T.vertexShader,tt=T.fragmentShader,l.update(T),ut=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Xt=Y.isInstancedMesh===!0,Rt=Y.isBatchedMesh===!0,le=!!T.map,A=!!T.matcap,R=!!J,x=!!T.aoMap,it=!!T.lightMap,q=!!T.bumpMap,j=!!T.normalMap,K=!!T.displacementMap,st=!!T.emissiveMap,X=!!T.metalnessMap,g=!!T.roughnessMap,_=T.anisotropy>0,C=T.clearcoat>0,B=T.dispersion>0,k=T.iridescence>0,V=T.sheen>0,ct=T.transmission>0,ot=_&&!!T.anisotropyMap,ft=C&&!!T.clearcoatMap,Lt=C&&!!T.clearcoatNormalMap,at=C&&!!T.clearcoatRoughnessMap,_t=k&&!!T.iridescenceMap,At=k&&!!T.iridescenceThicknessMap,Ut=V&&!!T.sheenColorMap,dt=V&&!!T.sheenRoughnessMap,It=!!T.specularMap,Ot=!!T.specularColorMap,re=!!T.specularIntensityMap,I=ct&&!!T.transmissionMap,gt=ct&&!!T.thicknessMap,$=!!T.gradientMap,et=!!T.alphaMap,St=T.alphaTest>0,xt=!!T.alphaHash,Bt=!!T.extensions;let ce=Jn;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Ee={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:$t,fragmentShader:tt,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&Y._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&Y.instanceColor!==null,instancingMorph:Xt&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:cs,alphaToCoverage:!!T.alphaToCoverage,map:le,matcap:A,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:z,aoMap:x,lightMap:it,bumpMap:q,normalMap:j,displacementMap:d&&K,emissiveMap:st,normalMapObjectSpace:j&&T.normalMapType===Zp,normalMapTangentSpace:j&&T.normalMapType===xh,metalnessMap:X,roughnessMap:g,anisotropy:_,anisotropyMap:ot,clearcoat:C,clearcoatMap:ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:at,dispersion:B,iridescence:k,iridescenceMap:_t,iridescenceThicknessMap:At,sheen:V,sheenColorMap:Ut,sheenRoughnessMap:dt,specularMap:It,specularColorMap:Ot,specularIntensityMap:re,transmission:ct,transmissionMap:I,thicknessMap:gt,gradientMap:$,opaque:T.transparent===!1&&T.blending===ts&&T.alphaToCoverage===!1,alphaMap:et,alphaTest:St,alphaHash:xt,combine:T.combine,mapUv:le&&S(T.map.channel),aoMapUv:x&&S(T.aoMap.channel),lightMapUv:it&&S(T.lightMap.channel),bumpMapUv:q&&S(T.bumpMap.channel),normalMapUv:j&&S(T.normalMap.channel),displacementMapUv:K&&S(T.displacementMap.channel),emissiveMapUv:st&&S(T.emissiveMap.channel),metalnessMapUv:X&&S(T.metalnessMap.channel),roughnessMapUv:g&&S(T.roughnessMap.channel),anisotropyMapUv:ot&&S(T.anisotropyMap.channel),clearcoatMapUv:ft&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&S(T.sheenRoughnessMap.channel),specularMapUv:It&&S(T.specularMap.channel),specularColorMapUv:Ot&&S(T.specularColorMap.channel),specularIntensityMapUv:re&&S(T.specularIntensityMap.channel),transmissionMapUv:I&&S(T.transmissionMap.channel),thicknessMapUv:gt&&S(T.thicknessMap.channel),alphaMapUv:et&&S(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(j||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!rt.attributes.uv&&(le||et),fog:!!nt,useFog:T.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:wt,skinning:Y.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&T.map.isVideoTexture===!0&&Kt.getTransfer(T.map.colorSpace)===ne,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(T.emissiveMap.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Un,flipSided:T.side===Be,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(w(E,T),b(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function w(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function b(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=v[T.type];let D;if(E){const Q=dn[E];D=Cm.clone(Q.uniforms)}else D=T.uniforms;return D}function U(T,E){let D;for(let Q=0,Y=u.length;Q<Y;Q++){const nt=u[Q];if(nt.cacheKey===E){D=nt,++D.usedTimes;break}}return D===void 0&&(D=new t0(n,E,T,r),u.push(D)),D}function L(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:U,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:O}}function r0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function o0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,v,S,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:S,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=S,f.group=m),t++,f}function a(h,d,p,v,S,m){const f=o(h,d,p,v,S,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,v,S,m){const f=o(h,d,p,v,S,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||o0),i.length>1&&i.sort(d||Qc),s.length>1&&s.sort(d||Qc)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function a0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new tu,n.set(i,[o])):s>=r.length?(o=new tu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function l0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function c0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let u0=0;function h0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f0(n){const t=new l0,e=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new fe,o=new fe;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,S=0,m=0,f=0,w=0,b=0,y=0,U=0,L=0,P=0;c.sort(h0);for(let T=0,E=c.length;T<E;T++){const D=c[T],Q=D.color,Y=D.intensity,nt=D.distance,rt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*Y,h+=Q.g*Y,d+=Q.b*Y;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],Y);P++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=Z,p++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(Q).multiplyScalar(Y),Z.distance=nt,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[S]=Z;const J=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,J.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[S]=J.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=rt,y++}S++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(Q).multiplyScalar(Y),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const J=D.shadow,z=e.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=rt,i.pointShadowMatrix[v]=D.shadow.matrix,b++}i.point[v]=Z,v++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(Y),Z.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==S||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==y||O.numSpotMaps!==U||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,O.directionalLength=p,O.pointLength=v,O.spotLength=S,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=y,O.numSpotMaps=U,O.numLightProbes=P,i.version=u0++)}function l(c,u){let h=0,d=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const b=c[f];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function eu(n){const t=new f0(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function d0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new eu(n),t.set(s,[a])):r>=o.length?(a=new eu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _0(n,t,e){let i=new _l;const s=new Ht,r=new Ht,o=new he,a=new zm({depthPacking:$p}),l=new Hm,c={},u=e.maxTextureSize,h={[ti]:Be,[Be]:ti,[Un]:Un},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new si;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ye(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let f=this.type;this.render=function(L,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Zn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=f!==wn&&this.type===wn,nt=f===wn&&this.type!==wn;for(let rt=0,Z=L.length;rt<Z;rt++){const J=L[rt],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ht=z.getFrameExtents();if(s.multiply(ht),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,z.mapSize.y=r.y)),z.map===null||Y===!0||nt===!0){const bt=this.type!==wn?{minFilter:cn,magFilter:cn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(s.x,s.y,bt),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Mt=z.getViewportCount();for(let bt=0;bt<Mt;bt++){const Dt=z.getViewport(bt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),Q.viewport(o),z.updateMatrices(J,bt),i=z.getFrustum(),y(P,O,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===wn&&w(z,O),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,E,D)};function w(L,P){const O=t.update(S);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ti(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,S,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,O,p,S,null)}function b(L,P,O,T){let E=null;const D=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)E=D;else if(E=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=E.uuid,Y=P.uuid;let nt=c[Q];nt===void 0&&(nt={},c[Q]=nt);let rt=nt[Y];rt===void 0&&(rt=E.clone(),nt[Y]=rt,P.addEventListener("dispose",U)),E=rt}if(E.visible=P.visible,E.wireframe=P.wireframe,T===wn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=n.properties.get(E);Q.light=O}return E}function y(L,P,O,T,E){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===wn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const Y=t.update(L),nt=L.material;if(Array.isArray(nt)){const rt=Y.groups;for(let Z=0,J=rt.length;Z<J;Z++){const z=rt[Z],ht=nt[z.materialIndex];if(ht&&ht.visible){const Mt=b(L,ht,T,E);L.onBeforeShadow(n,L,P,O,Y,Mt,z),n.renderBufferDirect(O,null,Y,Mt,L,z),L.onAfterShadow(n,L,P,O,Y,Mt,z)}}}else if(nt.visible){const rt=b(L,nt,T,E);L.onBeforeShadow(n,L,P,O,Y,rt,null),n.renderBufferDirect(O,null,Y,rt,L,null),L.onAfterShadow(n,L,P,O,Y,rt,null)}}const Q=L.children;for(let Y=0,nt=Q.length;Y<nt;Y++)y(Q[Y],P,O,T,E)}function U(L){L.target.removeEventListener("dispose",U);for(const O in c){const T=c[O],E=L.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const g0={[sa]:ra,[oa]:ca,[aa]:ua,[ss]:la,[ra]:sa,[ca]:oa,[ua]:aa,[la]:ss};function v0(n,t){function e(){let I=!1;const gt=new he;let $=null;const et=new he(0,0,0,0);return{setMask:function(St){$!==St&&!I&&(n.colorMask(St,St,St,St),$=St)},setLocked:function(St){I=St},setClear:function(St,xt,Bt,ce,Ee){Ee===!0&&(St*=ce,xt*=ce,Bt*=ce),gt.set(St,xt,Bt,ce),et.equals(gt)===!1&&(n.clearColor(St,xt,Bt,ce),et.copy(gt))},reset:function(){I=!1,$=null,et.set(-1,0,0,0)}}}function i(){let I=!1,gt=!1,$=null,et=null,St=null;return{setReversed:function(xt){if(gt!==xt){const Bt=t.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=St;St=null,this.setClear(ce)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?pt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(xt){$!==xt&&!I&&(n.depthMask(xt),$=xt)},setFunc:function(xt){if(gt&&(xt=g0[xt]),et!==xt){switch(xt){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=xt}},setLocked:function(xt){I=xt},setClear:function(xt){St!==xt&&(gt&&(xt=1-xt),n.clearDepth(xt),St=xt)},reset:function(){I=!1,$=null,et=null,St=null,gt=!1}}}function s(){let I=!1,gt=null,$=null,et=null,St=null,xt=null,Bt=null,ce=null,Ee=null;return{setTest:function(ee){I||(ee?pt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!I&&(n.stencilMask(ee),gt=ee)},setFunc:function(ee,Qe,Mn){($!==ee||et!==Qe||St!==Mn)&&(n.stencilFunc(ee,Qe,Mn),$=ee,et=Qe,St=Mn)},setOp:function(ee,Qe,Mn){(xt!==ee||Bt!==Qe||ce!==Mn)&&(n.stencilOp(ee,Qe,Mn),xt=ee,Bt=Qe,ce=Mn)},setLocked:function(ee){I=ee},setClear:function(ee){Ee!==ee&&(n.clearStencil(ee),Ee=ee)},reset:function(){I=!1,gt=null,$=null,et=null,St=null,xt=null,Bt=null,ce=null,Ee=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],v=null,S=!1,m=null,f=null,w=null,b=null,y=null,U=null,L=null,P=new qt(0,0,0),O=0,T=!1,E=null,D=null,Q=null,Y=null,nt=null;const rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),Z=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Z=J>=2);let ht=null,Mt={};const bt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),$t=new he().fromArray(bt),tt=new he().fromArray(Dt);function ut(I,gt,$,et){const St=new Uint8Array(4),xt=n.createTexture();n.bindTexture(I,xt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<$;Bt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return xt}const Et={};Et[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(ss),q(!1),j(sc),pt(n.CULL_FACE),x(Zn);function pt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function wt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Xt(I,gt){return h[I]!==gt?(n.bindFramebuffer(I,gt),h[I]=gt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Rt(I,gt){let $=p,et=!1;if(I){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));const St=I.textures;if($.length!==St.length||$[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Bt=St.length;xt<Bt;xt++)$[xt]=n.COLOR_ATTACHMENT0+xt;$.length=St.length,et=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,et=!0);et&&n.drawBuffers($)}function le(I){return v!==I?(n.useProgram(I),v=I,!0):!1}const A={[gi]:n.FUNC_ADD,[Ep]:n.FUNC_SUBTRACT,[yp]:n.FUNC_REVERSE_SUBTRACT};A[Tp]=n.MIN,A[bp]=n.MAX;const R={[Ap]:n.ZERO,[wp]:n.ONE,[Rp]:n.SRC_COLOR,[na]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[ia]:n.ONE_MINUS_SRC_ALPHA,[Up]:n.ONE_MINUS_DST_COLOR,[Dp]:n.ONE_MINUS_DST_ALPHA,[Np]:n.CONSTANT_COLOR,[Fp]:n.ONE_MINUS_CONSTANT_COLOR,[Op]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function x(I,gt,$,et,St,xt,Bt,ce,Ee,ee){if(I===Zn){S===!0&&(wt(n.BLEND),S=!1);return}if(S===!1&&(pt(n.BLEND),S=!0),I!==Sp){if(I!==m||ee!==T){if((f!==gi||y!==gi)&&(n.blendEquation(n.FUNC_ADD),f=gi,y=gi),ee)switch(I){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rc:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,U=null,L=null,P.set(0,0,0),O=0,m=I,T=ee}return}St=St||gt,xt=xt||$,Bt=Bt||et,(gt!==f||St!==y)&&(n.blendEquationSeparate(A[gt],A[St]),f=gt,y=St),($!==w||et!==b||xt!==U||Bt!==L)&&(n.blendFuncSeparate(R[$],R[et],R[xt],R[Bt]),w=$,b=et,U=xt,L=Bt),(ce.equals(P)===!1||Ee!==O)&&(n.blendColor(ce.r,ce.g,ce.b,Ee),P.copy(ce),O=Ee),m=I,T=!1}function it(I,gt){I.side===Un?wt(n.CULL_FACE):pt(n.CULL_FACE);let $=I.side===Be;gt&&($=!$),q($),I.blending===ts&&I.transparent===!1?x(Zn):x(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const et=I.stencilWrite;a.setTest(et),et&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function j(I){I!==vp?(pt(n.CULL_FACE),I!==D&&(I===sc?n.cullFace(n.BACK):I===xp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),D=I}function K(I){I!==Q&&(Z&&n.lineWidth(I),Q=I)}function st(I,gt,$){I?(pt(n.POLYGON_OFFSET_FILL),(Y!==gt||nt!==$)&&(n.polygonOffset(gt,$),Y=gt,nt=$)):wt(n.POLYGON_OFFSET_FILL)}function X(I){I?pt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function g(I){I===void 0&&(I=n.TEXTURE0+rt-1),ht!==I&&(n.activeTexture(I),ht=I)}function _(I,gt,$){$===void 0&&(ht===null?$=n.TEXTURE0+rt-1:$=ht);let et=Mt[$];et===void 0&&(et={type:void 0,texture:void 0},Mt[$]=et),(et.type!==I||et.texture!==gt)&&(ht!==$&&(n.activeTexture($),ht=$),n.bindTexture(I,gt||Et[I]),et.type=I,et.texture=gt)}function C(){const I=Mt[ht];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(I){$t.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function dt(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function It(I,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let et=$.get(I);et===void 0&&(et=n.getUniformBlockIndex(gt,I.name),$.set(I,et))}function Ot(I,gt){const et=c.get(gt).get(I);l.get(gt)!==et&&(n.uniformBlockBinding(gt,et,I.__bindingPointIndex),l.set(gt,et))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,Mt={},h={},d=new WeakMap,p=[],v=null,S=!1,m=null,f=null,w=null,b=null,y=null,U=null,L=null,P=new qt(0,0,0),O=0,T=!1,E=null,D=null,Q=null,Y=null,nt=null,$t.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:wt,bindFramebuffer:Xt,drawBuffers:Rt,useProgram:le,setBlending:x,setMaterial:it,setFlipSided:q,setCullFace:j,setLineWidth:K,setPolygonOffset:st,setScissorTest:X,activeTexture:g,bindTexture:_,unbindTexture:C,compressedTexImage2D:B,compressedTexImage3D:k,texImage2D:_t,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:at,texSubImage2D:V,texSubImage3D:ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Ut,viewport:dt,reset:re}}function x0(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(g,_){return p?new OffscreenCanvas(g,_):zr("canvas")}function S(g,_,C){let B=1;const k=X(g);if((k.width>C||k.height>C)&&(B=C/Math.max(k.width,k.height)),B<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const V=Math.floor(B*k.width),ct=Math.floor(B*k.height);h===void 0&&(h=v(V,ct));const ot=_?v(V,ct):h;return ot.width=V,ot.height=ct,ot.getContext("2d").drawImage(g,0,0,V,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+ct+")."),ot}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),g;return g}function m(g){return g.generateMipmaps}function f(g){n.generateMipmap(g)}function w(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(g,_,C,B,k=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let V=_;if(_===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),_===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),_===n.RGBA){const ct=k?Or:Kt.getTransfer(B);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=ct===ne?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(g,_){let C;return g?_===null||_===yi||_===as?C=n.DEPTH24_STENCIL8:_===In?C=n.DEPTH32F_STENCIL8:_===Bs&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===as?C=n.DEPTH_COMPONENT24:_===In?C=n.DEPTH_COMPONENT32F:_===Bs&&(C=n.DEPTH_COMPONENT16),C}function U(g,_){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==cn&&g.minFilter!==pn?Math.log2(Math.max(_.width,_.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?_.mipmaps.length:1}function L(g){const _=g.target;_.removeEventListener("dispose",L),O(_),_.isVideoTexture&&u.delete(_)}function P(g){const _=g.target;_.removeEventListener("dispose",P),E(_)}function O(g){const _=i.get(g);if(_.__webglInit===void 0)return;const C=g.source,B=d.get(C);if(B){const k=B[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(g),Object.keys(B).length===0&&d.delete(C)}i.remove(g)}function T(g){const _=i.get(g);n.deleteTexture(_.__webglTexture);const C=g.source,B=d.get(C);delete B[_.__cacheKey],o.memory.textures--}function E(g){const _=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(_.__webglFramebuffer[B]))for(let k=0;k<_.__webglFramebuffer[B].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[B][k]);else n.deleteFramebuffer(_.__webglFramebuffer[B]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[B])}else{if(Array.isArray(_.__webglFramebuffer))for(let B=0;B<_.__webglFramebuffer.length;B++)n.deleteFramebuffer(_.__webglFramebuffer[B]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let B=0;B<_.__webglColorRenderbuffer.length;B++)_.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[B]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=g.textures;for(let B=0,k=C.length;B<k;B++){const V=i.get(C[B]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(C[B])}i.remove(g)}let D=0;function Q(){D=0}function Y(){const g=D;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),D+=1,g}function nt(g){const _=[];return _.push(g.wrapS),_.push(g.wrapT),_.push(g.wrapR||0),_.push(g.magFilter),_.push(g.minFilter),_.push(g.anisotropy),_.push(g.internalFormat),_.push(g.format),_.push(g.type),_.push(g.generateMipmaps),_.push(g.premultiplyAlpha),_.push(g.flipY),_.push(g.unpackAlignment),_.push(g.colorSpace),_.join()}function rt(g,_){const C=i.get(g);if(g.isVideoTexture&&K(g),g.isRenderTargetTexture===!1&&g.version>0&&C.__version!==g.version){const B=g.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(C,g,_);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function Z(g,_){const C=i.get(g);if(g.version>0&&C.__version!==g.version){tt(C,g,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function J(g,_){const C=i.get(g);if(g.version>0&&C.__version!==g.version){tt(C,g,_);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function z(g,_){const C=i.get(g);if(g.version>0&&C.__version!==g.version){ut(C,g,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const ht={[da]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},Mt={[cn]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},bt={[Jp]:n.NEVER,[sm]:n.ALWAYS,[Qp]:n.LESS,[Mh]:n.LEQUAL,[tm]:n.EQUAL,[im]:n.GEQUAL,[em]:n.GREATER,[nm]:n.NOTEQUAL};function Dt(g,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===pn||_.magFilter===uo||_.magFilter===$s||_.magFilter===Mi||_.minFilter===pn||_.minFilter===uo||_.minFilter===$s||_.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,ht[_.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,Mt[_.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,bt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==$s&&_.minFilter!==Mi||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(g,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $t(g,_){let C=!1;g.__webglInit===void 0&&(g.__webglInit=!0,_.addEventListener("dispose",L));const B=_.source;let k=d.get(B);k===void 0&&(k={},d.set(B,k));const V=nt(_);if(V!==g.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),k[V].usedTimes++;const ct=k[g.__cacheKey];ct!==void 0&&(k[g.__cacheKey].usedTimes--,ct.usedTimes===0&&T(_)),g.__cacheKey=V,g.__webglTexture=k[V].texture}return C}function tt(g,_,C){let B=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(B=n.TEXTURE_3D);const k=$t(g,_),V=_.source;e.bindTexture(B,g.__webglTexture,n.TEXTURE0+C);const ct=i.get(V);if(V.version!==ct.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const ot=Kt.getPrimaries(Kt.workingColorSpace),ft=_.colorSpace===jn?null:Kt.getPrimaries(_.colorSpace),Lt=_.colorSpace===jn||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let at=S(_.image,!1,s.maxTextureSize);at=st(_,at);const _t=r.convert(_.format,_.colorSpace),At=r.convert(_.type);let Ut=b(_.internalFormat,_t,At,_.colorSpace,_.isVideoTexture);Dt(B,_);let dt;const It=_.mipmaps,Ot=_.isVideoTexture!==!0,re=ct.__version===void 0||k===!0,I=V.dataReady,gt=U(_,at);if(_.isDepthTexture)Ut=y(_.format===ls,_.type),re&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Ut,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ut,at.width,at.height,0,_t,At,null));else if(_.isDataTexture)if(It.length>0){Ot&&re&&e.texStorage2D(n.TEXTURE_2D,gt,Ut,It[0].width,It[0].height);for(let $=0,et=It.length;$<et;$++)dt=It[$],Ot?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,At,dt.data):e.texImage2D(n.TEXTURE_2D,$,Ut,dt.width,dt.height,0,_t,At,dt.data);_.generateMipmaps=!1}else Ot?(re&&e.texStorage2D(n.TEXTURE_2D,gt,Ut,at.width,at.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,_t,At,at.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,at.width,at.height,0,_t,At,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ut,It[0].width,It[0].height,at.depth);for(let $=0,et=It.length;$<et;$++)if(dt=It[$],_.format!==on)if(_t!==null)if(Ot){if(I)if(_.layerUpdates.size>0){const St=Dc(dt.width,dt.height,_.format,_.type);for(const xt of _.layerUpdates){const Bt=dt.data.subarray(xt*St/dt.data.BYTES_PER_ELEMENT,(xt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,xt,dt.width,dt.height,1,_t,Bt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,at.depth,_t,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ut,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,at.depth,_t,At,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Ut,dt.width,dt.height,at.depth,0,_t,At,dt.data)}else{Ot&&re&&e.texStorage2D(n.TEXTURE_2D,gt,Ut,It[0].width,It[0].height);for(let $=0,et=It.length;$<et;$++)dt=It[$],_.format!==on?_t!==null?Ot?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Ut,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,At,dt.data):e.texImage2D(n.TEXTURE_2D,$,Ut,dt.width,dt.height,0,_t,At,dt.data)}else if(_.isDataArrayTexture)if(Ot){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ut,at.width,at.height,at.depth),I)if(_.layerUpdates.size>0){const $=Dc(at.width,at.height,_.format,_.type);for(const et of _.layerUpdates){const St=at.data.subarray(et*$/at.data.BYTES_PER_ELEMENT,(et+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,_t,At,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,At,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,at.width,at.height,at.depth,0,_t,At,at.data);else if(_.isData3DTexture)Ot?(re&&e.texStorage3D(n.TEXTURE_3D,gt,Ut,at.width,at.height,at.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,At,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,at.width,at.height,at.depth,0,_t,At,at.data);else if(_.isFramebufferTexture){if(re)if(Ot)e.texStorage2D(n.TEXTURE_2D,gt,Ut,at.width,at.height);else{let $=at.width,et=at.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Ut,$,et,0,_t,At,null),$>>=1,et>>=1}}else if(It.length>0){if(Ot&&re){const $=X(It[0]);e.texStorage2D(n.TEXTURE_2D,gt,Ut,$.width,$.height)}for(let $=0,et=It.length;$<et;$++)dt=It[$],Ot?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_t,At,dt):e.texImage2D(n.TEXTURE_2D,$,Ut,_t,At,dt);_.generateMipmaps=!1}else if(Ot){if(re){const $=X(at);e.texStorage2D(n.TEXTURE_2D,gt,Ut,$.width,$.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,At,at)}else e.texImage2D(n.TEXTURE_2D,0,Ut,_t,At,at);m(_)&&f(B),ct.__version=V.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function ut(g,_,C){if(_.image.length!==6)return;const B=$t(g,_),k=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+C);const V=i.get(k);if(k.version!==V.__version||B===!0){e.activeTexture(n.TEXTURE0+C);const ct=Kt.getPrimaries(Kt.workingColorSpace),ot=_.colorSpace===jn?null:Kt.getPrimaries(_.colorSpace),ft=_.colorSpace===jn||ct===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Lt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!Lt&&!at?_t[et]=S(_.image[et],!0,s.maxCubemapSize):_t[et]=at?_.image[et].image:_.image[et],_t[et]=st(_,_t[et]);const At=_t[0],Ut=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),It=b(_.internalFormat,Ut,dt,_.colorSpace),Ot=_.isVideoTexture!==!0,re=V.__version===void 0||B===!0,I=k.dataReady;let gt=U(_,At);Dt(n.TEXTURE_CUBE_MAP,_);let $;if(Lt){Ot&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,At.width,At.height);for(let et=0;et<6;et++){$=_t[et].mipmaps;for(let St=0;St<$.length;St++){const xt=$[St];_.format!==on?Ut!==null?Ot?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,xt.width,xt.height,Ut,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,xt.width,xt.height,Ut,dt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,It,xt.width,xt.height,0,Ut,dt,xt.data)}}}else{if($=_.mipmaps,Ot&&re){$.length>0&&gt++;const et=X(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,et.width,et.height)}for(let et=0;et<6;et++)if(at){Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Ut,dt,_t[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,It,_t[et].width,_t[et].height,0,Ut,dt,_t[et].data);for(let St=0;St<$.length;St++){const Bt=$[St].image[et].image;Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Bt.width,Bt.height,Ut,dt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,It,Bt.width,Bt.height,0,Ut,dt,Bt.data)}}else{Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,dt,_t[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,It,Ut,dt,_t[et]);for(let St=0;St<$.length;St++){const xt=$[St];Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Ut,dt,xt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,It,Ut,dt,xt.image[et])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),V.__version=k.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function Et(g,_,C,B,k,V){const ct=r.convert(C.format,C.colorSpace),ot=r.convert(C.type),ft=b(C.internalFormat,ct,ot,C.colorSpace),Lt=i.get(_),at=i.get(C);if(at.__renderTarget=_,!Lt.__hasExternalTextures){const _t=Math.max(1,_.width>>V),At=Math.max(1,_.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,V,ft,_t,At,_.depth,0,ct,ot,null):e.texImage2D(k,V,ft,_t,At,0,ct,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),j(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,k,at.__webglTexture,0,q(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,k,at.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(g,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,g),_.depthBuffer){const B=_.depthTexture,k=B&&B.isDepthTexture?B.type:null,V=y(_.stencilBuffer,k),ct=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=q(_);j(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,V,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,g)}else{const B=_.textures;for(let k=0;k<B.length;k++){const V=B[k],ct=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),ft=b(V.internalFormat,ct,ot,V.colorSpace),Lt=q(_);C&&j(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ft,_.width,_.height):j(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(g,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(_.depthTexture);B.__renderTarget=_,(!B.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),rt(_.depthTexture,0);const k=B.__webglTexture,V=q(_);if(_.depthTexture.format===es)j(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===ls)j(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Xt(g){const _=i.get(g),C=g.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==g.depthTexture){const B=g.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),B){const k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,B.removeEventListener("dispose",k)};B.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=B}if(g.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");wt(_.__webglFramebuffer,g)}else if(C){_.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[B]),_.__webglDepthbuffer[B]===void 0)_.__webglDepthbuffer[B]=n.createRenderbuffer(),pt(_.__webglDepthbuffer[B],g,!1);else{const k=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),pt(_.__webglDepthbuffer,g,!1);else{const B=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(g,_,C){const B=i.get(g);_!==void 0&&Et(B.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Xt(g)}function le(g){const _=g.texture,C=i.get(g),B=i.get(_);g.addEventListener("dispose",P);const k=g.textures,V=g.isWebGLCubeRenderTarget===!0,ct=k.length>1;if(ct||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=_.version,o.memory.textures++),V){C.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)C.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else C.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)C.__webglFramebuffer[ot]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ct)for(let ot=0,ft=k.length;ot<ft;ot++){const Lt=i.get(k[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&j(g)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ot=0;ot<k.length;ot++){const ft=k[ot];C.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ot]);const Lt=r.convert(ft.format,ft.colorSpace),at=r.convert(ft.type),_t=b(ft.internalFormat,Lt,at,ft.colorSpace,g.isXRRenderTarget===!0),At=q(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,_t,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,C.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(C.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Et(C.__webglFramebuffer[ot][ft],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Et(C.__webglFramebuffer[ot],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ot=0,ft=k.length;ot<ft;ot++){const Lt=k[ot],at=i.get(Lt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Dt(n.TEXTURE_2D,Lt),Et(C.__webglFramebuffer,g,Lt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Lt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(ot=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,B.__webglTexture),Dt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Et(C.__webglFramebuffer[ft],g,_,n.COLOR_ATTACHMENT0,ot,ft);else Et(C.__webglFramebuffer,g,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}g.depthBuffer&&Xt(g)}function A(g){const _=g.textures;for(let C=0,B=_.length;C<B;C++){const k=_[C];if(m(k)){const V=w(g),ct=i.get(k).__webglTexture;e.bindTexture(V,ct),f(V),e.unbindTexture()}}}const R=[],x=[];function it(g){if(g.samples>0){if(j(g)===!1){const _=g.textures,C=g.width,B=g.height;let k=n.COLOR_BUFFER_BIT;const V=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(g),ot=_.length>1;if(ot)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Lt=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,C,B,0,0,C,B,k,n.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+ft),g.depthBuffer&&g.resolveDepthBuffer===!1&&(R.push(V),x.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Lt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const _=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function q(g){return Math.min(s.maxSamples,g.samples)}function j(g){const _=i.get(g);return g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(g){const _=o.render.frame;u.get(g)!==_&&(u.set(g,_),g.update())}function st(g,_){const C=g.colorSpace,B=g.format,k=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||C!==cs&&C!==jn&&(Kt.getTransfer(C)===ne?(B!==on||k!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function X(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Rt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=j}function M0(n,t){function e(i,s=jn){let r;const o=Kt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.BYTE;if(i===uh)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===cl)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Vs)return n.HALF_FLOAT;if(i===fh)return n.ALPHA;if(i===dh)return n.RGB;if(i===on)return n.RGBA;if(i===ph)return n.LUMINANCE;if(i===mh)return n.LUMINANCE_ALPHA;if(i===es)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===_h)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===gh)return n.RG;if(i===dl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Tr||i===br||i===Ar||i===wr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===_a||i===ga||i===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xa||i===Ma)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La||i===Ua||i===Ia||i===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ea)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===La)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rr||i===Fa||i===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Rr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===Ba||i===za||i===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:S0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new Ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends Ri{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const S=new y0,m=e.getContextAttributes();let f=null,w=null;const b=[],y=[],U=new Ht;let L=null;const P=new Ze;P.viewport=new he;const O=new Ze;O.viewport=new he;const T=[P,O],E=new Xm;let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=b[tt];return ut===void 0&&(ut=new Lo,b[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=b[tt];return ut===void 0&&(ut=new Lo,b[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=b[tt];return ut===void 0&&(ut=new Lo,b[tt]=ut),ut.getHandSpace()};function Y(tt){const ut=y.indexOf(tt.inputSource);if(ut===-1)return;const Et=b[ut];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function nt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",rt);for(let tt=0;tt<b.length;tt++){const ut=y[tt];ut!==null&&(y[tt]=null,b[tt].disconnect(ut))}D=null,Q=null,S.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,w=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,pt=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=m.stencil?ls:es,pt=m.stencil?as:yi);const Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ti(d.textureWidth,d.textureHeight,{format:on,type:On,depthTexture:new Uh(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ti(p.framebufferWidth,p.framebufferHeight,{format:on,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function rt(tt){for(let ut=0;ut<tt.removed.length;ut++){const Et=tt.removed[ut],pt=y.indexOf(Et);pt>=0&&(y[pt]=null,b[pt].disconnect(Et))}for(let ut=0;ut<tt.added.length;ut++){const Et=tt.added[ut];let pt=y.indexOf(Et);if(pt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=y.length){y.push(Et),pt=Xt;break}else if(y[Xt]===null){y[Xt]=Et,pt=Xt;break}if(pt===-1)break}const wt=b[pt];wt&&wt.connect(Et)}}const Z=new H,J=new H;function z(tt,ut,Et){Z.setFromMatrixPosition(ut.matrixWorld),J.setFromMatrixPosition(Et.matrixWorld);const pt=Z.distanceTo(J),wt=ut.projectionMatrix.elements,Xt=Et.projectionMatrix.elements,Rt=wt[14]/(wt[10]-1),le=wt[14]/(wt[10]+1),A=(wt[9]+1)/wt[5],R=(wt[9]-1)/wt[5],x=(wt[8]-1)/wt[0],it=(Xt[8]+1)/Xt[0],q=Rt*x,j=Rt*it,K=pt/(-x+it),st=K*-x;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(st),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),wt[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const X=Rt+K,g=le+K,_=q-st,C=j+(pt-st),B=A*le/g*X,k=R*le/g*X;tt.projectionMatrix.makePerspective(_,C,B,k,X,g),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ht(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ut=tt.near,Et=tt.far;S.texture!==null&&(S.depthNear>0&&(ut=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),E.near=O.near=P.near=ut,E.far=O.far=P.far=Et,(D!==E.near||Q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Q=E.far),P.layers.mask=tt.layers.mask|2,O.layers.mask=tt.layers.mask|4,E.layers.mask=P.layers.mask|O.layers.mask;const pt=tt.parent,wt=E.cameras;ht(E,pt);for(let Xt=0;Xt<wt.length;Xt++)ht(wt[Xt],pt);wt.length===2?z(E,P,O):E.projectionMatrix.copy(P.projectionMatrix),Mt(tt,E,pt)};function Mt(tt,ut,Et){Et===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Va*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let bt=null;function Dt(tt,ut){if(u=ut.getViewerPose(c||o),v=ut,u!==null){const Et=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let pt=!1;Et.length!==E.cameras.length&&(E.cameras.length=0,pt=!0);for(let Rt=0;Rt<Et.length;Rt++){const le=Et[Rt];let A=null;if(p!==null)A=p.getViewport(le);else{const x=h.getViewSubImage(d,le);A=x.viewport,Rt===0&&(t.setRenderTargetTextures(w,x.colorTexture,d.ignoreDepthValues?void 0:x.depthStencilTexture),t.setRenderTarget(w))}let R=T[Rt];R===void 0&&(R=new Ze,R.layers.enable(Rt),R.viewport=new he,T[Rt]=R),R.matrix.fromArray(le.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(le.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),Rt===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pt===!0&&E.cameras.push(R)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Rt=h.getDepthInformation(Et[0]);Rt&&Rt.isValid&&Rt.texture&&S.init(t,Rt,s.renderState)}}for(let Et=0;Et<b.length;Et++){const pt=y[Et],wt=b[Et];pt!==null&&wt!==void 0&&wt.update(pt,ut,c||o)}bt&&bt(tt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),v=null}const $t=new Nh;$t.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){bt=tt},this.dispose=function(){}}}const pi=new xn,b0=new fe;function A0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ph(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,pi.copy(y),pi.x*=-1,pi.y*=-1,pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(pi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function w0(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;i.uniformBlockBinding(w,y)}function c(w,b){let y=s[w.id];y===void 0&&(v(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));const U=b.program;i.updateUBOMapping(w,U);const L=t.render.frame;r[w.id]!==L&&(d(w),r[w.id]=L)}function u(w){const b=h();w.__bindingPointIndex=b;const y=n.createBuffer(),U=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=s[w.id],y=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,P=y.length;L<P;L++){const O=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,E=O.length;T<E;T++){const D=O[T];if(p(D,L,T,U)===!0){const Q=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let nt=0;for(let rt=0;rt<Y.length;rt++){const Z=Y[rt],J=S(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Q+nt,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,nt),nt+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,y,U){const L=w.value,P=b+"_"+y;if(U[P]===void 0)return typeof L=="number"||typeof L=="boolean"?U[P]=L:U[P]=L.clone(),!0;{const O=U[P];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return U[P]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(w){const b=w.uniforms;let y=0;const U=16;for(let P=0,O=b.length;P<O;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let E=0,D=T.length;E<D;E++){const Q=T[E],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let nt=0,rt=Y.length;nt<rt;nt++){const Z=Y[nt],J=S(Z),z=y%U,ht=z%J.boundary,Mt=z+ht;y+=ht,Mt!==0&&U-Mt<J.storage&&(y+=U-Mt),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=y,y+=J.storage}}}const L=y%U;return L>0&&(y+=U-L),w.__size=y,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class R0{constructor(t={}){const{canvas:e=am(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),S=new Int32Array(4);let m=null,f=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Jn,this.toneMappingExposure=1;const y=this;let U=!1,L=0,P=0,O=null,T=-1,E=null;const D=new he,Q=new he;let Y=null;const nt=new qt(0);let rt=0,Z=e.width,J=e.height,z=1,ht=null,Mt=null;const bt=new he(0,0,Z,J),Dt=new he(0,0,Z,J);let $t=!1;const tt=new _l;let ut=!1,Et=!1;this.transmissionResolutionScale=1;const pt=new fe,wt=new fe,Xt=new H,Rt=new he,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return O===null?z:1}let x=i;function it(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",xt,!1),x===null){const N="webgl2";if(x=it(N,M),x===null)throw it(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let q,j,K,st,X,g,_,C,B,k,V,ct,ot,ft,Lt,at,_t,At,Ut,dt,It,Ot,re,I;function gt(){q=new Bv(x),q.init(),Ot=new M0(x,q),j=new Lv(x,q,t,Ot),K=new v0(x,q),j.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),st=new Vv(x),X=new r0,g=new x0(x,q,K,X,j,Ot,st),_=new Iv(y),C=new Ov(y),B=new jm(x),re=new Pv(x,B),k=new zv(x,B,st,re),V=new kv(x,k,B,st),Ut=new Gv(x,j,g),at=new Uv(X),ct=new s0(y,_,C,q,j,re,at),ot=new A0(y,X),ft=new a0,Lt=new d0(q),At=new Cv(y,_,C,K,V,p,l),_t=new _0(y,V,j),I=new w0(x,st,j,K),dt=new Dv(x,q,st),It=new Hv(x,q,st),st.programs=ct.programs,y.capabilities=j,y.extensions=q,y.properties=X,y.renderLists=ft,y.shadowMap=_t,y.state=K,y.info=st}gt();const $=new T0(y,x);this.xr=$,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(Z,J,!1))},this.getSize=function(M){return M.set(Z,J)},this.setSize=function(M,N,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,J=N,e.width=Math.floor(M*z),e.height=Math.floor(N*z),G===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*z,J*z).floor()},this.setDrawingBufferSize=function(M,N,G){Z=M,J=N,z=G,e.width=Math.floor(M*G),e.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,N,G,W){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,N,G,W),K.viewport(D.copy(bt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,N,G,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,N,G,W),K.scissor(Q.copy(Dt).multiplyScalar(z).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(M){K.setScissorTest($t=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){Mt=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(M=!0,N=!0,G=!0){let W=0;if(M){let F=!1;if(O!==null){const lt=O.texture.format;F=lt===pl||lt===dl||lt===fl}if(F){const lt=O.texture.type,vt=lt===On||lt===yi||lt===Bs||lt===as||lt===ul||lt===hl,yt=At.getClearColor(),Tt=At.getClearAlpha(),Nt=yt.r,Ft=yt.g,Ct=yt.b;vt?(v[0]=Nt,v[1]=Ft,v[2]=Ct,v[3]=Tt,x.clearBufferuiv(x.COLOR,0,v)):(S[0]=Nt,S[1]=Ft,S[2]=Ct,S[3]=Tt,x.clearBufferiv(x.COLOR,0,S))}else W|=x.COLOR_BUFFER_BIT}N&&(W|=x.DEPTH_BUFFER_BIT),G&&(W|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),At.dispose(),ft.dispose(),Lt.dispose(),X.dispose(),_.dispose(),C.dispose(),V.dispose(),re.dispose(),I.dispose(),ct.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ml),$.removeEventListener("sessionend",Sl),ri.stop()};function et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=st.autoReset,N=_t.enabled,G=_t.autoUpdate,W=_t.needsUpdate,F=_t.type;gt(),st.autoReset=M,_t.enabled=N,_t.autoUpdate=G,_t.needsUpdate=W,_t.type=F}function xt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bt(M){const N=M.target;N.removeEventListener("dispose",Bt),ce(N)}function ce(M){Ee(M),X.remove(M)}function Ee(M){const N=X.get(M).programs;N!==void 0&&(N.forEach(function(G){ct.releaseProgram(G)}),M.isShaderMaterial&&ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,W,F,lt){N===null&&(N=le);const vt=F.isMesh&&F.matrixWorld.determinant()<0,yt=Vh(M,N,G,W,F);K.setMaterial(W,vt);let Tt=G.index,Nt=1;if(W.wireframe===!0){if(Tt=k.getWireframeAttribute(G),Tt===void 0)return;Nt=2}const Ft=G.drawRange,Ct=G.attributes.position;let Yt=Ft.start*Nt,Zt=(Ft.start+Ft.count)*Nt;lt!==null&&(Yt=Math.max(Yt,lt.start*Nt),Zt=Math.min(Zt,(lt.start+lt.count)*Nt)),Tt!==null?(Yt=Math.max(Yt,0),Zt=Math.min(Zt,Tt.count)):Ct!=null&&(Yt=Math.max(Yt,0),Zt=Math.min(Zt,Ct.count));const de=Zt-Yt;if(de<0||de===1/0)return;re.setup(F,W,yt,G,Tt);let ue,jt=dt;if(Tt!==null&&(ue=B.get(Tt),jt=It,jt.setIndex(ue)),F.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*R()),jt.setMode(x.LINES)):jt.setMode(x.TRIANGLES);else if(F.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),K.setLineWidth(Pt*R()),F.isLineSegments?jt.setMode(x.LINES):F.isLineLoop?jt.setMode(x.LINE_LOOP):jt.setMode(x.LINE_STRIP)}else F.isPoints?jt.setMode(x.POINTS):F.isSprite&&jt.setMode(x.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,Se=F._multiDrawCounts,Jt=F._multiDrawCount,tn=Tt?B.get(Tt).bytesPerElement:1,Ci=X.get(W).currentProgram.getUniforms();for(let He=0;He<Jt;He++)Ci.setValue(x,"_gl_DrawID",He),jt.render(Pt[He]/tn,Se[He])}else if(F.isInstancedMesh)jt.renderInstances(Yt,de,F.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Pt);jt.renderInstances(Yt,de,Se)}else jt.render(Yt,de)};function ee(M,N,G){M.transparent===!0&&M.side===Un&&M.forceSinglePass===!1?(M.side=Be,M.needsUpdate=!0,Ys(M,N,G),M.side=ti,M.needsUpdate=!0,Ys(M,N,G),M.side=Un):Ys(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),f=Lt.get(G),f.init(N),b.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),M!==G&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const lt=F.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){const yt=lt[vt];ee(yt,G,F),W.add(yt)}else ee(lt,G,F),W.add(lt)}),b.pop(),f=null,W},this.compileAsync=function(M,N,G=null){const W=this.compile(M,N,G);return new Promise(F=>{function lt(){if(W.forEach(function(vt){X.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){F(M);return}setTimeout(lt,10)}q.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Qe=null;function Mn(M){Qe&&Qe(M)}function Ml(){ri.stop()}function Sl(){ri.start()}const ri=new Nh;ri.setAnimationLoop(Mn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){Qe=M,$.setAnimationLoop(M),M===null?ri.stop():ri.start()},$.addEventListener("sessionstart",Ml),$.addEventListener("sessionend",Sl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,O),f=Lt.get(M,b.length),f.init(N),b.push(f),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),tt.setFromProjectionMatrix(wt),Et=this.localClippingEnabled,ut=at.init(this.clippingPlanes,Et),m=ft.get(M,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){const lt=y.xr.getDepthSensingMesh();lt!==null&&Zr(lt,N,-1/0,y.sortObjects)}Zr(M,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ht,Mt),A=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,A&&At.addToRenderList(m,M),this.info.render.frame++,ut===!0&&at.beginShadows();const G=f.state.shadowsArray;_t.render(G,M,N),ut===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const lt=N.cameras;if(F.length>0)for(let vt=0,yt=lt.length;vt<yt;vt++){const Tt=lt[vt];yl(W,F,M,Tt)}A&&At.render(M);for(let vt=0,yt=lt.length;vt<yt;vt++){const Tt=lt[vt];El(m,M,Tt,Tt.viewport)}}else F.length>0&&yl(W,F,M,N),A&&At.render(M),El(m,M,N);O!==null&&P===0&&(g.updateMultisampleRenderTarget(O),g.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(y,M,N),re.resetDefaultState(),T=-1,E=null,b.pop(),b.length>0?(f=b[b.length-1],ut===!0&&at.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Zr(M,N,G,W){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){W&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);const vt=V.update(M),yt=M.material;yt.visible&&m.push(M,vt,yt,G,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const vt=V.update(M),yt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Rt.copy(vt.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(yt)){const Tt=vt.groups;for(let Nt=0,Ft=Tt.length;Nt<Ft;Nt++){const Ct=Tt[Nt],Yt=yt[Ct.materialIndex];Yt&&Yt.visible&&m.push(M,vt,Yt,G,Rt.z,Ct)}}else yt.visible&&m.push(M,vt,yt,G,Rt.z,null)}}const lt=M.children;for(let vt=0,yt=lt.length;vt<yt;vt++)Zr(lt[vt],N,G,W)}function El(M,N,G,W){const F=M.opaque,lt=M.transmissive,vt=M.transparent;f.setupLightsView(G),ut===!0&&at.setGlobalState(y.clippingPlanes,G),W&&K.viewport(D.copy(W)),F.length>0&&Xs(F,N,G),lt.length>0&&Xs(lt,N,G),vt.length>0&&Xs(vt,N,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function yl(M,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Ti(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Vs:On,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const lt=f.state.transmissionRenderTarget[W.id],vt=W.viewport||D;lt.setSize(vt.z*y.transmissionResolutionScale,vt.w*y.transmissionResolutionScale);const yt=y.getRenderTarget();y.setRenderTarget(lt),y.getClearColor(nt),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),A&&At.render(G);const Tt=y.toneMapping;y.toneMapping=Jn;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ut===!0&&at.setGlobalState(y.clippingPlanes,W),Xs(M,G,W),g.updateMultisampleRenderTarget(lt),g.updateRenderTargetMipmap(lt),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,Yt=N.length;Ct<Yt;Ct++){const Zt=N[Ct],de=Zt.object,ue=Zt.geometry,jt=Zt.material,Pt=Zt.group;if(jt.side===Un&&de.layers.test(W.layers)){const Se=jt.side;jt.side=Be,jt.needsUpdate=!0,Tl(de,G,W,ue,jt,Pt),jt.side=Se,jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(g.updateMultisampleRenderTarget(lt),g.updateRenderTargetMipmap(lt))}y.setRenderTarget(yt),y.setClearColor(nt,rt),Nt!==void 0&&(W.viewport=Nt),y.toneMapping=Tt}function Xs(M,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=M.length;F<lt;F++){const vt=M[F],yt=vt.object,Tt=vt.geometry,Nt=W===null?vt.material:W,Ft=vt.group;yt.layers.test(G.layers)&&Tl(yt,N,G,Tt,Nt,Ft)}}function Tl(M,N,G,W,F,lt){M.onBeforeRender(y,N,G,W,F,lt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,N,G,W,M,lt),F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,y.renderBufferDirect(G,N,W,F,M,lt),F.side=ti,F.needsUpdate=!0,y.renderBufferDirect(G,N,W,F,M,lt),F.side=Un):y.renderBufferDirect(G,N,W,F,M,lt),M.onAfterRender(y,N,G,W,F,lt)}function Ys(M,N,G){N.isScene!==!0&&(N=le);const W=X.get(M),F=f.state.lights,lt=f.state.shadowsArray,vt=F.state.version,yt=ct.getParameters(M,F.state,lt,N,G),Tt=ct.getProgramCacheKey(yt);let Nt=W.programs;W.environment=M.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(M.isMeshStandardMaterial?C:_).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Bt),Nt=new Map,W.programs=Nt);let Ft=Nt.get(Tt);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===vt)return Al(M,yt),Ft}else yt.uniforms=ct.getUniforms(M),M.onBeforeCompile(yt,y),Ft=ct.acquireProgram(yt,Tt),Nt.set(Tt,Ft),W.uniforms=yt.uniforms;const Ct=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Al(M,yt),W.needsLights=kh(M),W.lightsStateVersion=vt,W.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function bl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Pr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Al(M,N){const G=X.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Vh(M,N,G,W,F){N.isScene!==!0&&(N=le),g.resetTextureUnits();const lt=N.fog,vt=W.isMeshStandardMaterial?N.environment:null,yt=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:cs,Tt=(W.isMeshStandardMaterial?C:_).get(W.envMap||vt),Nt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,Zt=!!G.morphAttributes.color;let de=Jn;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(de=y.toneMapping);const ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=ue!==void 0?ue.length:0,Pt=X.get(W),Se=f.state.lights;if(ut===!0&&(Et===!0||M!==E)){const Ce=M===E&&W.id===T;at.setState(W,M,Ce)}let Jt=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Se.state.version||Pt.outputColorSpace!==yt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Tt||W.fog===!0&&Pt.fog!==lt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Ft||Pt.morphTargets!==Ct||Pt.morphNormals!==Yt||Pt.morphColors!==Zt||Pt.toneMapping!==de||Pt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Pt.__version=W.version);let tn=Pt.currentProgram;Jt===!0&&(tn=Ys(W,N,F));let Ci=!1,He=!1,ps=!1;const ae=tn.getUniforms(),qe=Pt.uniforms;if(K.useProgram(tn.program)&&(Ci=!0,He=!0,ps=!0),W.id!==T&&(T=W.id,He=!0),Ci||E!==M){K.buffers.depth.getReversed()?(pt.copy(M.projectionMatrix),cm(pt),um(pt),ae.setValue(x,"projectionMatrix",pt)):ae.setValue(x,"projectionMatrix",M.projectionMatrix),ae.setValue(x,"viewMatrix",M.matrixWorldInverse);const Ne=ae.map.cameraPosition;Ne!==void 0&&Ne.setValue(x,Xt.setFromMatrixPosition(M.matrixWorld)),j.logarithmicDepthBuffer&&ae.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,He=!0,ps=!0)}if(F.isSkinnedMesh){ae.setOptional(x,F,"bindMatrix"),ae.setOptional(x,F,"bindMatrixInverse");const Ce=F.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ae.setValue(x,"boneTexture",Ce.boneTexture,g))}F.isBatchedMesh&&(ae.setOptional(x,F,"batchingTexture"),ae.setValue(x,"batchingTexture",F._matricesTexture,g),ae.setOptional(x,F,"batchingIdTexture"),ae.setValue(x,"batchingIdTexture",F._indirectTexture,g),ae.setOptional(x,F,"batchingColorTexture"),F._colorsTexture!==null&&ae.setValue(x,"batchingColorTexture",F._colorsTexture,g));const je=G.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&Ut.update(F,G,tn),(He||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,ae.setValue(x,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qe.envMap.value=Tt,qe.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(qe.envMapIntensity.value=N.environmentIntensity),He&&(ae.setValue(x,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&Gh(qe,ps),lt&&W.fog===!0&&ot.refreshFogUniforms(qe,lt),ot.refreshMaterialUniforms(qe,W,z,J,f.state.transmissionRenderTarget[M.id]),Pr.upload(x,bl(Pt),qe,g)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pr.upload(x,bl(Pt),qe,g),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(x,"center",F.center),ae.setValue(x,"modelViewMatrix",F.modelViewMatrix),ae.setValue(x,"normalMatrix",F.normalMatrix),ae.setValue(x,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ce=W.uniformsGroups;for(let Ne=0,Jr=Ce.length;Ne<Jr;Ne++){const oi=Ce[Ne];I.update(oi,tn),I.bind(oi,tn)}}return tn}function Gh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function kh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,N,G){X.get(M.texture).__webglTexture=N,X.get(M.depthTexture).__webglTexture=G;const W=X.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const G=X.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Wh=x.createFramebuffer();this.setRenderTarget=function(M,N=0,G=0){O=M,L=N,P=G;let W=!0,F=null,lt=!1,vt=!1;if(M){const Tt=X.get(M);if(Tt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(x.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)g.setupRenderTarget(M);else if(Tt.__hasExternalTextures)g.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ct=M.depthTexture;if(Tt.__boundDepthTexture!==Ct){if(Ct!==null&&X.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(M)}}const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Ft=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][G]:F=Ft[N],lt=!0):M.samples>0&&g.useMultisampledRTT(M)===!1?F=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[G]:F=Ft,D.copy(M.viewport),Q.copy(M.scissor),Y=M.scissorTest}else D.copy(bt).multiplyScalar(z).floor(),Q.copy(Dt).multiplyScalar(z).floor(),Y=$t;if(G!==0&&(F=Wh),K.bindFramebuffer(x.FRAMEBUFFER,F)&&W&&K.drawBuffers(M,F),K.viewport(D),K.scissor(Q),K.setScissorTest(Y),lt){const Tt=X.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,G)}else if(vt){const Tt=X.get(M.texture),Nt=N;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Tt.__webglTexture,G,Nt)}else if(M!==null&&G!==0){const Tt=X.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Tt.__webglTexture,G)}T=-1},this.readRenderTargetPixels=function(M,N,G,W,F,lt,vt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){K.bindFramebuffer(x.FRAMEBUFFER,yt);try{const Tt=M.texture,Nt=Tt.format,Ft=Tt.type;if(!j.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-W&&G>=0&&G<=M.height-F&&x.readPixels(N,G,W,F,Ot.convert(Nt),Ot.convert(Ft),lt)}finally{const Tt=O!==null?X.get(O).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,W,F,lt,vt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){const Tt=M.texture,Nt=Tt.format,Ft=Tt.type;if(!j.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-W&&G>=0&&G<=M.height-F){K.bindFramebuffer(x.FRAMEBUFFER,yt);const Ct=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.bufferData(x.PIXEL_PACK_BUFFER,lt.byteLength,x.STREAM_READ),x.readPixels(N,G,W,F,Ot.convert(Nt),Ot.convert(Ft),0);const Yt=O!==null?X.get(O).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,Yt);const Zt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await lm(x,Zt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ct),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,lt),x.deleteBuffer(Ct),x.deleteSync(Zt),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,G=0){M.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(M.image.width*W),lt=Math.floor(M.image.height*W),vt=N!==null?N.x:0,yt=N!==null?N.y:0;g.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,G,0,0,vt,yt,F,lt),K.unbindTexture()};const Xh=x.createFramebuffer(),Yh=x.createFramebuffer();this.copyTextureToTexture=function(M,N,G=null,W=null,F=0,lt=null){M.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],N=arguments[2],lt=arguments[3]||0,G=null),lt===null&&(F!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=F,F=0):lt=0);let vt,yt,Tt,Nt,Ft,Ct,Yt,Zt,de;const ue=M.isCompressedTexture?M.mipmaps[lt]:M.image;if(G!==null)vt=G.max.x-G.min.x,yt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Ft=G.min.y,Ct=G.isBox3?G.min.z:0;else{const je=Math.pow(2,-F);vt=Math.floor(ue.width*je),yt=Math.floor(ue.height*je),M.isDataArrayTexture?Tt=ue.depth:M.isData3DTexture?Tt=Math.floor(ue.depth*je):Tt=1,Nt=0,Ft=0,Ct=0}W!==null?(Yt=W.x,Zt=W.y,de=W.z):(Yt=0,Zt=0,de=0);const jt=Ot.convert(N.format),Pt=Ot.convert(N.type);let Se;N.isData3DTexture?(g.setTexture3D(N,0),Se=x.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(g.setTexture2DArray(N,0),Se=x.TEXTURE_2D_ARRAY):(g.setTexture2D(N,0),Se=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=x.getParameter(x.UNPACK_ROW_LENGTH),tn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ci=x.getParameter(x.UNPACK_SKIP_PIXELS),He=x.getParameter(x.UNPACK_SKIP_ROWS),ps=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ue.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ue.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Nt),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ft),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ct);const ae=M.isDataArrayTexture||M.isData3DTexture,qe=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const je=X.get(M),Ce=X.get(N),Ne=X.get(je.__renderTarget),Jr=X.get(Ce.__renderTarget);K.bindFramebuffer(x.READ_FRAMEBUFFER,Ne.__webglFramebuffer),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let oi=0;oi<Tt;oi++)ae&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,X.get(M).__webglTexture,F,Ct+oi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,X.get(N).__webglTexture,lt,de+oi)),x.blitFramebuffer(Nt,Ft,vt,yt,Yt,Zt,vt,yt,x.DEPTH_BUFFER_BIT,x.NEAREST);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||X.has(M)){const je=X.get(M),Ce=X.get(N);K.bindFramebuffer(x.READ_FRAMEBUFFER,Xh),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Yh);for(let Ne=0;Ne<Tt;Ne++)ae?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,je.__webglTexture,F,Ct+Ne):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,je.__webglTexture,F),qe?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ce.__webglTexture,lt,de+Ne):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ce.__webglTexture,lt),F!==0?x.blitFramebuffer(Nt,Ft,vt,yt,Yt,Zt,vt,yt,x.COLOR_BUFFER_BIT,x.NEAREST):qe?x.copyTexSubImage3D(Se,lt,Yt,Zt,de+Ne,Nt,Ft,vt,yt):x.copyTexSubImage2D(Se,lt,Yt,Zt,Nt,Ft,vt,yt);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else qe?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(Se,lt,Yt,Zt,de,vt,yt,Tt,jt,Pt,ue.data):N.isCompressedArrayTexture?x.compressedTexSubImage3D(Se,lt,Yt,Zt,de,vt,yt,Tt,jt,ue.data):x.texSubImage3D(Se,lt,Yt,Zt,de,vt,yt,Tt,jt,Pt,ue):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,lt,Yt,Zt,vt,yt,jt,Pt,ue.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,lt,Yt,Zt,ue.width,ue.height,jt,ue.data):x.texSubImage2D(x.TEXTURE_2D,lt,Yt,Zt,vt,yt,jt,Pt,ue);x.pixelStorei(x.UNPACK_ROW_LENGTH,Jt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,tn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ci),x.pixelStorei(x.UNPACK_SKIP_ROWS,He),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ps),lt===0&&N.generateMipmaps&&x.generateMipmap(Se),K.unbindTexture()},this.copyTextureToTexture3D=function(M,N,G=null,W=null,F=0){return M.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,M=arguments[2],N=arguments[3],F=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,G,W,F)},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&g.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?g.setTextureCube(M,0):M.isData3DTexture?g.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?g.setTexture2DArray(M,0):g.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){L=0,P=0,O=null,K.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const nu={type:"change"},xl={type:"start"},Hh={type:"end"},vr=new Th,iu=new qn,C0=Math.cos(70*om.DEG2RAD),_e=new H,Oe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class P0 extends Ym{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new bi,this._lastTargetPosition=new H,this._quat=new bi().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pc,this._sphericalDelta=new Pc,this._scale=1,this._panOffset=new H,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new H,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=L0.bind(this),this._onPointerDown=D0.bind(this),this._onPointerUp=U0.bind(this),this._onContextMenu=H0.bind(this),this._onMouseWheel=F0.bind(this),this._onKeyDown=O0.bind(this),this._onTouchStart=B0.bind(this),this._onTouchMove=z0.bind(this),this._onMouseDown=I0.bind(this),this._onMouseMove=N0.bind(this),this._interceptControlDown=V0.bind(this),this._interceptControlUp=G0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<C0?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function D0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function L0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function U0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function I0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case Qi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case Qi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(xl)}function N0(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function F0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hh))}function O0(n){this.enabled!==!1&&this._handleKeyDown(n)}function B0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(xl)}function z0(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function H0(n){this.enabled!==!1&&n.preventDefault()}function V0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const k0={class:"controls"},W0=Cu({__name:"ThreeScene",setup(n){const t=io(null),e=io(2),i=io(4);let s,r,o,a,l;return Uu(()=>{if(!t.value)return;s=new Nm,s.background=new qt(11184810),r=new Ze(75,t.value.clientWidth/t.value.clientHeight,.1,1e3),r.position.set(5,5,10),o=new R0({antialias:!0}),o.setSize(t.value.clientWidth,t.value.clientHeight),o.shadowMap.enabled=!0,t.value.appendChild(o.domElement);const c=new Wm(16777215,1);c.position.set(5,10,5),c.castShadow=!0,s.add(c);const u=new Ws(20,20),h=new Bm({opacity:.3}),d=new Ye(u,h);d.rotation.x=-Math.PI/2,d.receiveShadow=!0,s.add(d);const p=new Ye(new Ai(2,2,2),new Io({color:16711680}));p.position.set(-3,1,0),p.castShadow=!0,s.add(p);const v=new Ye(new gl(1,32,32),new Io({color:255}));v.position.set(3,1,0),v.castShadow=!0,s.add(v);const S=()=>{l&&s.remove(l);const f=new Ai(e.value,i.value,.2),w=new Io({color:9127187,metalness:.1,roughness:.8});l=new Ye(f,w),l.position.set(0,i.value/2,-2),l.castShadow=!0,s.add(l)};S(),a=new P0(r,o.domElement),a.enableDamping=!0;const m=()=>{requestAnimationFrame(m),a.update(),o.render(s,r)};m(),Sr([e,i],S)}),(c,u)=>(Qu(),th("div",null,[Pn("div",{ref_key:"container",ref:t,class:"three-container"},null,512),Pn("div",k0,[Pn("label",null,[u[2]||(u[2]=Qo("Ширина двери: ")),Dl(Pn("input",{type:"range","onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h),min:"1",max:"5",step:"0.1"},null,512),[[nc,e.value]])]),Pn("label",null,[u[3]||(u[3]=Qo("Высота двери: ")),Dl(Pn("input",{type:"range","onUpdate:modelValue":u[1]||(u[1]=h=>i.value=h),min:"2",max:"6",step:"0.1"},null,512),[[nc,i.value]])])])]))}}),X0=Cu({__name:"App",setup(n){return(t,e)=>(Qu(),th("div",null,[e[0]||(e[0]=Pn("h1",null,"Three.js Дверь в Vue",-1)),$n(W0)]))}});mp(X0).mount("#app");
