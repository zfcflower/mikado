import Mikado,{apply_proxy}from"./mikado.js";import{tick}from"./profiler.js";const proto=Array.prototype,proxy=window.Proxy;let skip=!1;function debug(a){if(!a)throw new Error("The observable array was not assigned to a Mikado instance. You need to pass in the observable array when initiating a Mikado instance.")}export default function Observer(a){if(a instanceof Observer)return a;if(!(this instanceof Observer))return new Observer(a);!1,this.mikado=null;const b=a?a.length:0;if(proxy){if(b)for(let c=0;c<b;c++)this[c]=a[c];return this.length=b,this.proto={splice:proto.splice.bind(this),pop:proto.pop.bind(this),shift:proto.shift.bind(this),unshift:proto.unshift.bind(this),push:proto.push.bind(this)},new Proxy(this,handler)}this.proto=a||[];for(let c=0;c<=b;c++)this.define(c);this.define("length")}Observer.prototype.mount=function(a){return!1,this.mikado!==a&&(this.mikado&&a.mount(this.mikado.root),this.mikado=a),this},Observer.prototype.define=function(a){return!1,Object.defineProperty(this,a,{get:function(){return this.proto[a]},set:function(b){"number"==typeof a&&(a===this.length&&this.define(a+1),handler.set(this,a,b))}}),this};const handler={set:function(a,b,c){let d;if("number"==typeof b)d=!0;else{const a=parseInt(b,10);b===""+a&&(d=!0)}const e=a.mikado;if(!skip){if(skip=!0,e){const f=a.length;if(d){b=b,!1;const d=e.length;f!==d&&(a.length=d);let g;b>=d?(e.add(c),a.length++):b<d&&(g=e.dom[b],e.recycle||e.key&&g._mkk===c[e.key]?e.update(g,c,null,b):e.replace(g,c,null,b))}else"length"===b&&(c=c,c<f&&e.remove(c,f-c))}skip=!1}return d&&e.proxy&&(!e.recycle||!c._mkx)&&(b=b,c=c,c=apply_proxy(e,e.dom[b],c)),(proxy?a:a.proto)[b]=c,!0}};!1,Observer.prototype.swap=function(c,a){const b=this[a];return this[a]=this[c],this[c]=b,this},Observer.prototype.set=function(a){return!1,this.splice(),this.concat(a)},Observer.prototype.splice=function(a,b,c){!1,!1,skip=!0,a||(a=0),"undefined"==typeof b&&(b=this.length-a,0>b&&(b=0)),b&&this.mikado.remove(a,b);const d=c?this.proto.splice(a,b,c):this.proto.splice(a,b);return c&&this.mikado.add(c,a),skip=!1,d},Observer.prototype.push=function(a){!1,!1,skip=!0,this.mikado.add(a),this[this.length]=a,proxy&&this.length++,skip=!1},Observer.prototype.unshift=function(a){!1,!1,skip=!0,this.mikado.add(a,0),this.proto.unshift(a),skip=!1},Observer.prototype.pop=function(){!1,!1,skip=!0,this.mikado.remove(this.length-1);const a=this.proto.pop();return skip=!1,a},Observer.prototype.shift=function(){!1,!1,skip=!0,this.mikado.remove(0);const a=this.proto.shift();return skip=!1,a},Observer.prototype.concat=function(a){const b=a.length;for(let c=0;c<b;c++)this.push(a[c]);return this},Observer.prototype.sort=proto.sort,Observer.prototype.reverse=proto.reverse,Observer.prototype.slice=proto.slice,Observer.prototype.map=function(a,b){!1,b&&(a=a.bind(this));for(let c=0,d=this.length;c<d;c++)this[c]=a(this[c]);return this},Observer.prototype.filter=function(a,b){!1,b&&(a=a.bind(this));let c,d;for(let e=0,f=this.length;e<f;e++)a(this[e])?d&&(this.splice(c,d),f-=d,e-=d,d=0):d?d++:(c=e,d=1);return d&&this.splice(c,d),this},Observer.prototype.indexOf=function(a){for(let b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},Observer.prototype.lastIndexOf=function(a){for(let b=this.length-1;0<=b;b--)if(this[b]===a)return b;return-1},Observer.prototype.includes=proto.includes,Observer.prototype.forEach=function(a){for(let b=0,c=this.length;b<c;b++)a(this[b]);return this},Observer.prototype.transaction=function(a){return!1,!1,skip=!0,a(),this.mikado.async?this.mikado.render(this).then(function(){skip=!1}):(this.mikado.render(this),skip=!1),this};