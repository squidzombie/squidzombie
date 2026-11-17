var Wd=Object.defineProperty;var Xd=(i,e)=>{for(var t in e)Wd(i,t,{get:e[t],enumerable:!0})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var cu=0,pc=1,hu=2;var cs=1,uu=2,qs=3,Ji=0,In=1,Kn=2,hs=0,Ys=1,mc=2,gc=3,_c=4,du=5;var us=100,fu=101,pu=102,mu=103,gu=104,_u=200,xu=201,yu=202,vu=203,xc=204,yc=205,Mu=206,Su=207,bu=208,wu=209,Tu=210,Eu=211,Au=212,Ru=213,Cu=214,Xa=0,qa=1,Ya=2,Ds=3,Za=4,$a=5,Ka=6,Ja=7,vc=0,Pu=1,Iu=2,xi=0,Mc=1,Sc=2,bc=3,Jr=4,wc=5,Tc=6,Ec=7;var Ac=300,ds=301,Zs=302,Io=303,Lo=304,ja=1e3,di=1001,Qa=1002,xn=1003,Lu=1004;var jr=1005;var Cn=1006,Do=1007;var Li=1008;var Fn=1009,Rc=1010,Cc=1011,$s=1012,No=1013,ai=1014,Jn=1015,oi=1016,Uo=1017,Fo=1018,fs=1020,Pc=35902,Ic=35899,Lc=1021,Dc=1022,li=1023,Pi=1026,Di=1027,Oo=1028,Bo=1029,ji=1030,ko=1031;var zo=1033,Qr=33776,ea=33777,ta=33778,na=33779,Go=35840,Ho=35841,Vo=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,$o=37489,ia=37490,Ko=37491,Jo=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,sa=36285,gl=36286;var gr=2300,eo=2301,Va=2302,nc=2303,ic=2400,sc=2401,rc=2402;var Du=3200;var _l=0,Nu=1,Ni="",An="srgb",_r="srgb-linear",xr="linear",Xt="srgb";var Wa=7680;var Uu=519,Fu=512,Ou=513,Bu=514,Nc=515,ku=516,zu=517,Uc=518,Fc=519,Gu=35044;var Oc="300 es",Zn=2e3,Ns=2001;function qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){let i=yr("canvas");return i.style.display="block",i}var Th={},Us=null;function Bc(...i){let e="THREE."+i.shift();Us?Us("log",e,...i):console.log(e,...i)}function Vu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=Vu(i);let e="THREE."+i.shift();if(Us)Us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=Vu(i);let e="THREE."+i.shift();if(Us)Us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fr(...i){let e=i.join(" ");e in Th||(Th[e]=!0,ut(...i))}function Wu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xu={[Xa]:Xa,[Ya]:Ka,[Za]:Za,[Ds]:$a,[qa]:qa,[Ka]:Ya,[Ja]:Ja,[$a]:Ds},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pl=Math.PI/180,to=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Zd(i,e){return(i%e+e)%e}function Il(i,e,t){return(1-t)*i+t*e}function qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $d(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Kd(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Xc=class Xc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xc.prototype.isVector2=!0;var Ze=Xc,Gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*M;m<0&&(u=-u,d=-d,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+M*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var O=qc,Ll=new O,Eh=new Gn,Yc=class Yc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],A=s[4],b=s[7],P=s[2],R=s[5],x=s[8];return r[0]=a*M+o*S+l*P,r[3]=a*m+o*A+l*R,r[6]=a*p+o*b+l*x,r[1]=c*M+h*S+f*P,r[4]=c*m+h*A+f*R,r[7]=c*p+h*b+f*x,r[2]=u*M+d*S+g*P,r[5]=u*m+d*A+g*R,r[8]=u*p+d*b+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=f*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yc.prototype.isMatrix3=!0;var vt=Yc,Dl=new vt,Ah=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){let i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:e,whitePoint:n,transfer:xr,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Xt,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var Ft=Jd();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,no=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=yr("canvas")),_s.width=e.width,_s.height=e.height;let s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jd=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nl(s[a].image)):r.push(Nl(s[a]))}else r=Nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Qd=0,Ul=new O,Pn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=Cn,a=Li,o=li,l=Fn,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ks(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Ac;Pn.DEFAULT_ANISOTROPY=1;var Zc=class Zc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,b=(d+1)/2,P=(p+1)/2,R=(h+u)/4,x=(f+M)/4,w=(g+m)/4;return A>b&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=R/n,r=x/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=w/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=x/r,s=w/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zc.prototype.isVector4=!0;var rn=Zc,io=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Po=class Po{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,M,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,M,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,M=c*f;t[0]=u+M*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,M=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-M*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ki.crossVectors(n,Bn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ki.crossVectors(n,Bn)),ki.normalize(),ga.crossVectors(Bn,ki),s[0]=ki.x,s[4]=ga.x,s[8]=Bn.x,s[1]=ki.y,s[5]=ga.y,s[9]=Bn.y,s[2]=ki.z,s[6]=ga.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],A=n[7],b=n[11],P=n[15],R=s[0],x=s[4],w=s[8],B=s[12],D=s[1],z=s[5],H=s[9],Q=s[13],F=s[2],Y=s[6],ee=s[10],$=s[14],ue=s[3],ne=s[7],re=s[11],_e=s[15];return r[0]=a*R+o*D+l*F+c*ue,r[4]=a*x+o*z+l*Y+c*ne,r[8]=a*w+o*H+l*ee+c*re,r[12]=a*B+o*Q+l*$+c*_e,r[1]=h*R+f*D+u*F+d*ue,r[5]=h*x+f*z+u*Y+d*ne,r[9]=h*w+f*H+u*ee+d*re,r[13]=h*B+f*Q+u*$+d*_e,r[2]=g*R+M*D+m*F+p*ue,r[6]=g*x+M*z+m*Y+p*ne,r[10]=g*w+M*H+m*ee+p*re,r[14]=g*B+M*Q+m*$+p*_e,r[3]=S*R+A*D+b*F+P*ue,r[7]=S*x+A*z+b*Y+P*ne,r[11]=S*w+A*H+b*ee+P*re,r[15]=S*B+A*Q+b*$+P*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],M=e[7],m=e[11],p=e[15],S=l*d-c*u,A=o*d-c*f,b=o*u-l*f,P=a*d-c*h,R=a*u-l*h,x=a*f-o*h;return t*(M*S-m*A+p*b)-n*(g*S-m*P+p*R)+s*(g*A-M*P+p*x)-r*(g*b-M*R+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],M=e[13],m=e[14],p=e[15],S=t*o-n*a,A=t*l-s*a,b=t*c-r*a,P=n*l-s*o,R=n*c-r*o,x=s*c-r*l,w=h*M-f*g,B=h*m-u*g,D=h*p-d*g,z=f*m-u*M,H=f*p-d*M,Q=u*p-d*m,F=S*Q-A*H+b*z+P*D-R*B+x*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/F;return e[0]=(o*Q-l*H+c*z)*Y,e[1]=(s*H-n*Q-r*z)*Y,e[2]=(M*x-m*R+p*P)*Y,e[3]=(u*R-f*x-d*P)*Y,e[4]=(l*D-a*Q-c*B)*Y,e[5]=(t*Q-s*D+r*B)*Y,e[6]=(m*b-g*x-p*A)*Y,e[7]=(h*x-u*b+d*A)*Y,e[8]=(a*H-o*D+c*w)*Y,e[9]=(n*D-t*H-r*w)*Y,e[10]=(g*R-M*b+p*S)*Y,e[11]=(f*b-h*R-d*S)*Y,e[12]=(o*B-a*z-l*w)*Y,e[13]=(t*z-n*B+s*w)*Y,e[14]=(M*A-g*P-m*S)*Y,e[15]=(h*P-f*A+u*S)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,M=a*h,m=a*f,p=o*f,S=l*c,A=l*h,b=l*f,P=n.x,R=n.y,x=n.z;return s[0]=(1-(M+p))*P,s[1]=(d+b)*P,s[2]=(g-A)*P,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(u+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+A)*x,s[9]=(m-S)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);let c=1/a,h=1/o,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Zn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Zn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var kt=Po,xs=new O,ti=new kt,ef=new O(0,0,0),tf=new O(1,1,1),ki=new O,ga=new O,Bn=new O,Ch=new kt,Ph=new Gn,ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nf=0,Ih=new O,ys=new Gn,wi=new kt,_a=new O,rr=new O,sf=new O,rf=new Gn,Lh=new O(1,0,0),Dh=new O(0,1,0),Nh=new O(0,0,1),Uh={type:"added"},af={type:"removed"},vs={type:"childadded",child:null},Fl={type:"childremoved",child:null},yn=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ri,n=new Gn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new vt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(rr,_a,this.up):wi.lookAt(_a,rr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(wi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),vs.child=e,this.dispatchEvent(vs),vs.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new O(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ss=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},of={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ft.workingColorSpace){if(e=Zd(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ol(a,r,e+1/3),this.g=Ol(a,r,e),this.b=Ol(a,r,e-1/3)}return Ft.colorSpaceToWorking(this,s),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ft.workingToColorSpace(Tn.copy(this),e),Math.round(Nt(Tn.r*255,0,255))*65536+Math.round(Nt(Tn.g*255,0,255))*256+Math.round(Nt(Tn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=An){Ft.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(xa);let n=Il(zi.h,xa.h,t),s=Il(zi.s,xa.s,t),r=Il(zi.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Mt;Mt.NAMES=Yu;var Mr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new O,Ti=new O,Bl=new O,Ei=new O,Ms=new O,Ss=new O,Fh=new O,kl=new O,zl=new O,Gl=new O,Hl=new rn,Vl=new rn,Wl=new rn,Wi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Ti.subVectors(n,t),Bl.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(Ti),l=ni.dot(Bl),c=Ti.dot(Ti),h=Ti.dot(Bl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hl.setScalar(0),Vl.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hl,r.x),a.addScaledVector(Vl,r.y),a.addScaledVector(Wl,r.z),a}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Ti.subVectors(e,t),ni.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ni.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),kl.subVectors(e,n);let l=Ms.dot(kl),c=Ss.dot(kl);if(l<=0&&c<=0)return t.copy(n);zl.subVectors(e,s);let h=Ms.dot(zl),f=Ss.dot(zl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);Gl.subVectors(e,r);let d=Ms.dot(Gl),g=Ss.dot(Gl);if(g>=0&&d<=g)return t.copy(r);let M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Fh.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Fh,o);let p=1/(m+M+u);return a=M*p,o=u*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),va.subVectors(this.max,ar),bs.subVectors(e.a,ar),ws.subVectors(e.b,ar),Ts.subVectors(e.c,ar),Gi.subVectors(ws,bs),Hi.subVectors(Ts,ws),es.subVectors(bs,Ts);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-es.z,es.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,es.z,0,-es.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-es.y,es.x,0];return!Xl(t,bs,ws,Ts,va)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,bs,ws,Ts,va))?!1:(Ma.crossVectors(Gi,Hi),t=[Ma.x,Ma.y,Ma.z],Xl(t,bs,ws,Ts,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new O,new O,new O,new O,new O,new O,new O,new O],ii=new O,ya=new pi,bs=new O,ws=new O,Ts=new O,Gi=new O,Hi=new O,es=new O,ar=new O,va=new O,Ma=new O,ts=new O;function Xl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);let o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dn=new O,Sa=new Ze,lf=0,zn=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$d(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kd(e,this.array)}};var br=class extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wr=class extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $t=class extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}},cf=new pi,or=new O,ql=new O,mi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(ql)),this.expandByPoint(or.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hf=0,Yn=new kt,Yl=new yn,Es=new O,kn=new pi,lr=new pi,_n=new O,vn=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?wr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(kn.min,lr.min),kn.expandByPoint(_n),_n.addVectors(kn.max,lr.max),kn.expandByPoint(_n)):(kn.expandByPoint(lr.min),kn.expandByPoint(lr.max))}kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),_n.add(Es)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new O,l[B]=new O;let h=new O,f=new O,u=new O,d=new Ze,g=new Ze,M=new Ze,m=new O,p=new O;function S(B,D,z){c[B]=c[D]=c[z]=1,h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,D),u.fromBufferAttribute(n,z),d.fromBufferAttribute(r,B),g.fromBufferAttribute(r,D),M.fromBufferAttribute(r,z),f.sub(h),u.sub(h),g.sub(d),M.sub(d);let H=1/(g.x*M.y-M.x*g.y);isFinite(H)&&(m.copy(f).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(H),p.copy(u).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(H),o[B].add(m),o[D].add(m),o[z].add(m),l[B].add(p),l[D].add(p),l[z].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,D=A.length;B<D;++B){let z=A[B],H=z.start,Q=z.count;for(let F=H,Y=H+Q;F<Y;F+=3)S(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new O,P=new O,R=new O,x=new O;function w(B){R.fromBufferAttribute(s,B),x.copy(R);let D=o[B];b.copy(D),b.sub(R.multiplyScalar(R.dot(D))).normalize(),P.crossVectors(x,D);let H=P.dot(l[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,H)}for(let B=0,D=n.count;B<D;++B)c[B]&&w(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new zn(u,h,f)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zl=new O,uf=new O,df=new vt,si=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zl.subVectors(n,t).cross(uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||df.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ff=0,gi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Ys,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new O,$l=new O,ba=new O,wa=new O,rs=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$l.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),wa.copy(this.origin).sub($l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=wa.dot(this.direction),l=-wa.dot(ba),c=wa.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($l).addScaledVector(ba,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,b=Math.abs(l),P=Math.abs(c),R=Math.abs(h),x,w,B,D,z,H,Q,F,Y,ee,$,ue;if(b>=P&&b>=R?(B=l,H=f,Y=g,ue=p,l>=0?(x=c,w=h,D=u,z=d,Q=M,F=m,ee=S,$=A):(x=h,w=c,D=d,z=u,Q=m,F=M,ee=A,$=S)):P>=R?(B=c,H=u,Y=M,ue=S,c>=0?(x=h,w=l,D=d,z=f,Q=m,F=g,ee=A,$=p):(x=l,w=h,D=f,z=d,Q=g,F=m,ee=p,$=A)):(B=h,H=d,Y=m,ue=A,h>=0?(x=l,w=c,D=f,z=u,Q=g,F=M,ee=p,$=S):(x=c,w=l,D=u,z=f,Q=M,F=g,ee=S,$=p)),B===0)return null;let ne=x/B,re=w/B,_e=1/B,Ve=D-ne*H,dt=z-re*H,le=Q-ne*Y,ke=F-re*Y,ce=ee-ne*ue,et=$-re*ue,he=ce*ke-et*le,Oe=Ve*et-dt*ce,lt=le*dt-ke*Ve;if(s){if(he<0||Oe<0||lt<0)return null}else if((he<0||Oe<0||lt<0)&&(he>0||Oe>0||lt>0))return null;let at=he+Oe+lt;if(at===0)return null;let pt=_e*(he*H+Oe*Y+lt*ue);return(at>0?pt<0:pt>0)?null:this.at(pt/at,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oh=new kt,ns=new rs,Ta=new mi,Bh=new O,Ea=new O,Aa=new O,Ra=new O,Kl=new O,Ca=new O,kh=new O,Pa=new O,hn=class extends yn{constructor(e=new vn,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Kl.fromBufferAttribute(f,e),a?Ca.addScaledVector(Kl,h):Ca.addScaledVector(Kl.sub(t),h))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Ta.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ta,Bh)===null||ns.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,P=A;b<P;b+=3){let R=o.getX(b),x=o.getX(b+1),w=o.getX(b+2);s=Ia(this,p,e,n,c,h,f,R,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let S=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=Ia(this,a,e,n,c,h,f,S,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,P=A;b<P;b+=3){let R=b,x=b+1,w=b+2;s=Ia(this,p,e,n,c,h,f,R,x,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let S=m,A=m+1,b=m+2;s=Ia(this,a,e,n,c,h,f,S,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pf(i,e,t,n,s,r,a,o){let l;if(e.side===In?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ji,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:i}}function Ia(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ea),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ra);let h=pf(i,e,t,n,Ea,Aa,Ra,kh);if(h){let f=new O;Wi.getBarycoord(kh,Ea,Aa,Ra,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,f,new Ze)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,f,new Ze)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Wi.getNormal(Ea,Aa,Ra,u.normal),h.face=u,h.barycoord=f}return h}var Tr=class extends Pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=xn,h=xn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends zn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new kt,zh=new kt,La=[],Gh=new pi,mf=new kt,cr=new hn,hr=new mi,ks=class extends hn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Gh.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Gh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),hr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),zh.multiplyMatrices(n,As),cr.matrixWorld=zh,cr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Oo,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new mi,gf=new Ze(.5,.5),Da=new O,qi=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],A=r[13],b=r[14],P=r[15];if(s[0].setComponents(c-a,d-h,p-g,P-S).normalize(),s[1].setComponents(c+a,d+h,p+g,P+S).normalize(),s[2].setComponents(c+o,d+f,p+M,P+A).normalize(),s[3].setComponents(c-o,d-f,p-M,P-A).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,d-u,p-m,P-b).normalize();else if(s[4].setComponents(c-l,d-u,p-m,P-b).normalize(),t===Zn)s[5].setComponents(c+l,d+u,p+m,P+b).normalize();else if(t===Ns)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=gf.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hh=new kt,ro=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Hh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new qi),n[s].setFromProjectionMatrix(Hh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zs=class extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ao=new O,oo=new O,Vh=new kt,ur=new rs,Na=new mi,Jl=new O,Wh=new O,Ar=class extends yn{constructor(e=new vn,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ao.fromBufferAttribute(t,s-1),oo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ao.distanceTo(oo);e.setAttribute("lineDistance",new $t(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Vh.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=d,m=g-1;M<m;M+=c){let p=h.getX(M),S=h.getX(M+1),A=Ua(this,e,ur,l,p,S,M);A&&t.push(A)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(d),p=Ua(this,e,ur,l,M,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=d,m=g-1;M<m;M+=c){let p=Ua(this,e,ur,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){let M=Ua(this,e,ur,l,g-1,d,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ua(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ao.fromBufferAttribute(o,s),oo.fromBufferAttribute(o,r),t.distanceSqToSegment(ao,oo,Jl,Wh)>n)return;Jl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Gs=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xh=new kt,ac=new rs,Fa=new mi,Oa=new O,Rr=class extends yn{constructor(e=new vn,t=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Xh.copy(s).invert(),ac.copy(e.ray).applyMatrix4(Xh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,M=d;g<M;g++){let m=c.getX(g);Oa.fromBufferAttribute(f,m),qh(Oa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,M=d;g<M;g++)Oa.fromBufferAttribute(f,g),qh(Oa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qh(i,e,t,n,s,r,a){let o=ac.distanceSqToPoint(i);if(o<t){let l=new O;ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Cr=class extends Pn{constructor(e=[],t=ds,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pr=class extends Pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Pn{constructor(e,t,n=ai,s,r,a,o=xn,l=xn,c,h=Pi,f=1){if(h!==Pi&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ir=class extends Ii{constructor(e,t=ai,n=ds,s,r,a=xn,o=xn,l,c=Pi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$n=class i extends vn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2));function g(M,m,p,S,A,b,P,R,x,w,B){let D=b/x,z=P/w,H=b/2,Q=P/2,F=R/2,Y=x+1,ee=w+1,$=0,ue=0,ne=new O;for(let re=0;re<ee;re++){let _e=re*z-Q;for(let Ve=0;Ve<Y;Ve++){let dt=Ve*D-H;ne[M]=dt*S,ne[m]=_e*A,ne[p]=F,c.push(ne.x,ne.y,ne.z),ne[M]=0,ne[m]=0,ne[p]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(Ve/x),f.push(1-re/w),$+=1}}for(let re=0;re<w;re++)for(let _e=0;_e<x;_e++){let Ve=u+_e+Y*re,dt=u+_e+Y*(re+1),le=u+(_e+1)+Y*(re+1),ke=u+(_e+1)+Y*re;l.push(Ve,dt,ke),l.push(dt,le,ke),ue+=6}o.addGroup(d,ue,B),d+=ue,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Dr=class i extends vn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,g=n*2+r,M=s+1,m=new O,p=new O;for(let S=0;S<=g;S++){let A=0,b=0,P=0,R=0;if(S<=n){let B=S/n,D=B*Math.PI/2;b=-h-e*Math.cos(D),P=e*Math.sin(D),R=-e*Math.cos(D),A=B*f}else if(S<=n+r){let B=(S-n)/r;b=-h+B*t,P=e,R=0,A=f+B*u}else{let B=(S-n-r)/n,D=B*Math.PI/2;b=h+e*Math.sin(D),P=e*Math.cos(D),R=e*Math.sin(D),A=f+u+B*f}let x=Math.max(0,Math.min(1,A/d)),w=0;S===0?w=.5/s:S===g&&(w=-.5/s);for(let B=0;B<=s;B++){let D=B/s,z=D*Math.PI*2,H=Math.sin(z),Q=Math.cos(z);p.x=-P*Q,p.y=b,p.z=P*H,o.push(p.x,p.y,p.z),m.set(-P*Q,R,P*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+w,x)}if(S>0){let B=(S-1)*M;for(let D=0;D<s;D++){let z=B+D,H=B+D+1,Q=S*M+D,F=S*M+D+1;a.push(z,H,Q),a.push(H,F,Q)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Nr=class i extends vn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new Ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},as=class i extends vn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,M=[],m=n/2,p=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function S(){let b=new O,P=new O,R=0,x=(t-e)/n;for(let w=0;w<=r;w++){let B=[],D=w/r,z=D*(t-e)+e;for(let H=0;H<=s;H++){let Q=H/s,F=Q*l+o,Y=Math.sin(F),ee=Math.cos(F);P.x=z*Y,P.y=-D*n+m,P.z=z*ee,f.push(P.x,P.y,P.z),b.set(Y,x,ee).normalize(),u.push(b.x,b.y,b.z),d.push(Q,1-D),B.push(g++)}M.push(B)}for(let w=0;w<s;w++)for(let B=0;B<r;B++){let D=M[B][w],z=M[B+1][w],H=M[B+1][w+1],Q=M[B][w+1];(e>0||B!==0)&&(h.push(D,z,Q),R+=3),(t>0||B!==r-1)&&(h.push(z,H,Q),R+=3)}c.addGroup(p,R,0),p+=R}function A(b){let P=g,R=new Ze,x=new O,w=0,B=b===!0?e:t,D=b===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*D,0),u.push(0,D,0),d.push(.5,.5),g++;let z=g;for(let H=0;H<=s;H++){let F=H/s*l+o,Y=Math.cos(F),ee=Math.sin(F);x.x=B*ee,x.y=m*D,x.z=B*Y,f.push(x.x,x.y,x.z),u.push(0,D,0),R.x=Y*.5+.5,R.y=ee*.5*D+.5,d.push(R.x,R.y),g++}for(let H=0;H<s;H++){let Q=P+H,F=z+H;b===!0?h.push(F,F+1,Q):h.push(F+1,F,Q),w+=3}c.addGroup(p,w,b===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ze:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new kt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Hs=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ze){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends Hs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Yh=new O,Zh=new O,jl=new zc,Ql=new zc,ec=new zc,co=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Zh.subVectors(s[0],s[1]).add(s[0]),c=Zh);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),jl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,M,m),Ql.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,M,m),ec.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ql.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ec.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(jl.calc(l),Ql.calc(l),ec.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $h(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function _f(i,e){let t=1-i;return t*t*e}function xf(i,e){return 2*(1-i)*i*e}function yf(i,e){return i*i*e}function pr(i,e,t,n){return _f(i,e)+xf(i,t)+yf(i,n)}function vf(i,e){let t=1-i;return t*t*t*e}function Mf(i,e){let t=1-i;return 3*t*t*i*e}function Sf(i,e){return 3*(1-i)*i*i*e}function bf(i,e){return i*i*i*e}function mr(i,e,t,n,s){return vf(i,e)+Mf(i,t)+Sf(i,n)+bf(i,s)}var Ur=class extends Vn{constructor(e=new Ze,t=new Ze,n=new Ze,s=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ze){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends Vn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y),mr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fr=class extends Vn{constructor(e=new Ze,t=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ze){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Vn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends Vn{constructor(e=new Ze,t=new Ze,n=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ze){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Vn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y),pr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ze){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set($h(o,l.x,c.x,h.x,f.x),$h(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ze().fromArray(s))}return this}},Kh=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:co,CubicBezierCurve:Ur,CubicBezierCurve3:ho,EllipseCurve:Hs,LineCurve:Fr,LineCurve3:uo,QuadraticBezierCurve:Or,QuadraticBezierCurve3:fo,SplineCurve:Br}),po=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Kh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},kr=class extends po{constructor(e){super(),this.type="Path",this.currentPoint=new Ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fr(this.currentPoint.clone(),new Ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Or(this.currentPoint.clone(),new Ze(e,t),new Ze(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ur(this.currentPoint.clone(),new Ze(e,t),new Ze(n,s),new Ze(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Br(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Hs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vs=class extends kr{constructor(e){super(e),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new kr().fromJSON(s))}return this}};function wf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Cf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return zr(r,a,t,o,l,c,0),a}function Zu(i,e,t,n,s){let r;if(s===zf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jh(a/n|0,i[a],i[a+1],r);return r&&Ws(r,r.next)&&(Hr(r),r=r.next),r}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||on(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Nf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ef(i,n,s,r):Tf(i)){e.push(l.i,i.i,c.i),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Af(os(i),e),zr(i,e,t,n,s,r,2)):a===2&&Rf(i,e,t,n,s,r):zr(os(i),e,t,n,s,r,1);break}}}function Tf(i){let e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&dr(s,o,r,l,a,c,g.x,g.y)&&on(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ef(i,e,t,n){let s=i.prev,r=i,a=i.next;if(on(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),M=Math.max(o,l,c),m=Math.max(h,f,u),p=oc(d,g,e,t,n),S=oc(M,m,e,t,n),A=i.prevZ,b=i.nextZ;for(;A&&A.z>=p&&b&&b.z<=S;){if(A.x>=d&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&dr(o,h,l,f,c,u,A.x,A.y)&&on(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=d&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&dr(o,h,l,f,c,u,b.x,b.y)&&on(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&dr(o,h,l,f,c,u,A.x,A.y)&&on(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&dr(o,h,l,f,c,u,b.x,b.y)&&on(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Af(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ws(n,s)&&Ku(n,t,t.next,s)&&Gr(n,s)&&Gr(s,n)&&(e.push(n.i,t.i,s.i),Hr(t),Hr(t.next),t=i=s),t=t.next}while(t!==i);return os(t)}function Rf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Of(a,o)){let l=Ju(a,o);a=os(a,a.next),l=os(l,l.next),zr(a,e,t,n,s,r,0),zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Cf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Zu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ff(c))}s.sort(Pf);for(let r=0;r<s.length;r++)t=If(s[r],t);return t}function Pf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function If(i,e){let t=Lf(i,e);if(!t)return e;let n=Ju(t,i);return os(n,n.next),os(t,t.next)}function Lf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ws(i,t))return t;do{if(Ws(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$u(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Gr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Df(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Df(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function Nf(i,e,t,n){let s=i;do s.z===0&&(s.z=oc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Uf(s)}function Uf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function oc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ff(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $u(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&$u(i,e,t,n,s,r,a,o)}function Of(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bf(i,e)&&(Gr(i,e)&&Gr(e,i)&&kf(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||Ws(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ws(i,e){return i.x===e.x&&i.y===e.y}function Ku(i,e,t,n){let s=ka(on(i,e,t)),r=ka(on(i,e,n)),a=ka(on(t,n,i)),o=ka(on(t,n,e));return!!(s!==r&&a!==o||s===0&&Ba(i,t,e)||r===0&&Ba(i,n,e)||a===0&&Ba(t,i,n)||o===0&&Ba(t,e,n))}function Ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ka(i){return i>0?1:i<0?-1:0}function Bf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ku(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Gr(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function kf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ju(i,e){let t=lc(i.i,i.x,i.y),n=lc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jh(i,e,t,n){let s=lc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cc=class{static triangulate(e,t,n=2){return wf(e,t,n)}},Ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];jh(e),Qh(n,e);let a=e.length;t.forEach(jh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Qh(n,t[l]);let o=cc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function jh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yi=class i extends vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let A=0;A<c;A++){let b=A*f-r;g.push(b,-S,0),M.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let A=S+c*p,b=S+c*(p+1),P=S+1+c*(p+1),R=S+1+c*p;d.push(A,b,R),d.push(b,P,R)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vr=class i extends vn{constructor(e=new Vs([new Ze(0,.5),new Ze(-.5,-.5),new Ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,g=u.holes;Ls.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Ls.isClockWise(S)===!0&&(g[m]=S.reverse())}let M=Ls.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){let S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=M.length;m<p;m++){let S=M[m],A=S[0]+f,b=S[1]+f,P=S[2]+f;n.push(A,b,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Gf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Gf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ls=class i extends vn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new O,u=new O,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,b=a+A*o,P=e*Math.cos(b),R=Math.sqrt(e*e-P*P),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let B=w/t,D=s+B*r;f.x=-R*Math.cos(D),f.y=P,f.z=R*Math.sin(D),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(B+x,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let A=h[p][S+1],b=h[p][S],P=h[p+1][S],R=h[p+1][S+1];(p!==0||a>0)&&d.push(A,b,R),(p!==n-1||l<Math.PI)&&d.push(b,P,R)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(eu(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(eu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let s in n)e[s]=n[s]}return e}function eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}var ju={clone:ps,merge:En},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mn=class extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var go=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function za(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=e,o=2*t-n;break;case rc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=e,l=2*n-t;break;case rc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,A=(-1-d)*m+(1.5+d)*M+.5*g,b=d*m-d*M;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+S*a[c+P]+A*a[l+P]+b*a[f+P];return r}},yo=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},vo=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends Zi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=d*u+g*2,S=f[p],A=f[p+1],b=e*u+g*2,P=h[b],R=h[b+1],x=qf(n,t,S,P,s);r[g]=Qu(x,M,A,R,m)}return r}};function Qu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Xf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function qf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Qu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),za(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case eo:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case nc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;za(this.settings)&&(tu(this.settings.inTangents,e),tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;za(this.settings)&&(nu(this.settings.inTangents,e),nu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){mt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Yd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let M=t[f+g];if(M!==t[u+g]||M!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function nu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=eo;var $i=class extends Wn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=gr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var wo=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wr=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Wn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=gr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};To.prototype.ValueTypeName="vector";var Eo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new Eo,Ao=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qr=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tc=new kt,iu=new O,su=new O,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new O,Ha=new Gn,ui=new O,Yr=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Ha,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ga,Ha,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new O,ru=new Ze,au=new Ze,Rn=class extends Yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,ru,au),t.subVectors(au,ru)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zr=class extends Yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hc=class extends Ro{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Ps=1,Xs=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Cs,Ps,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let a=new Rn(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let o=new Rn(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let l=new Rn(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let c=new Rn(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Hc="\\[\\]\\.:\\/",Yf=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",Zf="[^"+Hc.replace("\\.","")+"]",$f=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Kf=/(WCOD+)?/.source.replace("WCOD",Zf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),jf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Qf=new RegExp("^"+$f+Kf+Jf+jf+"$"),ep=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(e){let t=Qf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=uc;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var ou=new kt,Kr=class{constructor(e,t,n=0,s=1/0){this.ray=new rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,n=[]){return dc(e,this,n,t),n.sort(lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)dc(e[s],this,n,t);return n.sort(lu),n}};function lu(i,e){return i.distance-e.distance}function dc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)dc(r[a],e,t,!0)}}var $c=class $c{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};$c.prototype.isMatrix2=!0;var fc=$c;function Wc(i,e,t,n){let s=tp(n);switch(t){case Lc:return i*e;case Oo:return i*e/s.components*s.byteLength;case Bo:return i*e/s.components*s.byteLength;case ji:return i*e*2/s.components*s.byteLength;case ko:return i*e*2/s.components*s.byteLength;case Dc:return i*e*3/s.components*s.byteLength;case li:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Vo:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case ia:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tp(i){switch(i){case Fn:case Rc:return{byteLength:1,components:1};case $s:case Cc:case oi:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case ai:case No:case Jn:return{byteLength:4,components:1};case Pc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ip(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,b0=`#define NORMAL
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
}`,w0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
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
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,A0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,C0=`#define TOON
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
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,I0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,U0=`uniform float rotation;
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
}`,F0=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ep,common:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Pp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Np,envmap_fragment:Up,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:$p,envmap_vertex:kp,fog_vertex:zp,fog_pars_vertex:Gp,fog_fragment:Hp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Jp,lights_phong_fragment:jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,lightprobes_pars_fragment:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:vm,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:bm,normal_pars_vertex:wm,normal_vertex:Tm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Im,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Nm,dithering_fragment:Um,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:zm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Hm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Km,transmission_fragment:Jm,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distance_vert:u0,distance_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:_0,meshbasic_frag:x0,meshlambert_vert:y0,meshlambert_frag:v0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:b0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:E0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:P0,points_vert:I0,points_frag:L0,shadow_vert:D0,shadow_frag:N0,sprite_vert:U0,sprite_frag:F0},He={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},vi={basic:{uniforms:En([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:En([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:En([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:En([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:En([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:En([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:En([He.points,He.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:En([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:En([He.common,He.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:En([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:En([He.sprite,He.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:En([He.common,He.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:En([He.lights,He.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};vi.physical={uniforms:En([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var xl={r:0,b:0,g:0},O0=new kt,bd=new vt;bd.set(-1,0,0,0,1,0,0,0,1);function B0(i,e,t,n,s,r){let a=new Mt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(S){let A=!1,b=d(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,A){let b=d(A);b&&b.isCubeTexture?(c===void 0&&(c=new hn(new $n(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ps(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bd),c.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Xt,(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new hn(new Yi(2,2),new _i({name:"BackgroundMaterial",uniforms:ps(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(xl,Gc(i)),t.buffers.color.setClear(xl.r,xl.g,xl.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function k0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(z,H,Q,F,Y){let ee=!1,$=f(z,F,Q,H);r!==$&&(r=$,c(r.object)),ee=d(z,F,Q,Y),ee&&g(z,F,Q,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,b(z,H,Q,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function f(z,H,Q,F){let Y=F.wireframe===!0,ee=n[H.id];ee===void 0&&(ee={},n[H.id]=ee);let $=z.isInstancedMesh===!0?z.id:0,ue=ee[$];ue===void 0&&(ue={},ee[$]=ue);let ne=ue[Q.id];ne===void 0&&(ne={},ue[Q.id]=ne);let re=ne[Y];return re===void 0&&(re=u(l()),ne[Y]=re),re}function u(z){let H=[],Q=[],F=[];for(let Y=0;Y<t;Y++)H[Y]=0,Q[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:F,object:z,attributes:{},index:null}}function d(z,H,Q,F){let Y=r.attributes,ee=H.attributes,$=0,ue=Q.getAttributes();for(let ne in ue)if(ue[ne].location>=0){let _e=Y[ne],Ve=ee[ne];if(Ve===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(Ve=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(Ve=z.instanceColor)),_e===void 0||_e.attribute!==Ve||Ve&&_e.data!==Ve.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(z,H,Q,F){let Y={},ee=H.attributes,$=0,ue=Q.getAttributes();for(let ne in ue)if(ue[ne].location>=0){let _e=ee[ne];_e===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(_e=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(_e=z.instanceColor));let Ve={};Ve.attribute=_e,_e&&_e.data&&(Ve.data=_e.data),Y[ne]=Ve,$++}r.attributes=Y,r.attributesNum=$,r.index=F}function M(){let z=r.newAttributes;for(let H=0,Q=z.length;H<Q;H++)z[H]=0}function m(z){p(z,0)}function p(z,H){let Q=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;Q[z]=1,F[z]===0&&(i.enableVertexAttribArray(z),F[z]=1),Y[z]!==H&&(i.vertexAttribDivisor(z,H),Y[z]=H)}function S(){let z=r.newAttributes,H=r.enabledAttributes;for(let Q=0,F=H.length;Q<F;Q++)H[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),H[Q]=0)}function A(z,H,Q,F,Y,ee,$){$===!0?i.vertexAttribIPointer(z,H,Q,Y,ee):i.vertexAttribPointer(z,H,Q,F,Y,ee)}function b(z,H,Q,F){M();let Y=F.attributes,ee=Q.getAttributes(),$=H.defaultAttributeValues;for(let ue in ee){let ne=ee[ue];if(ne.location>=0){let re=Y[ue];if(re===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),re!==void 0){let _e=re.normalized,Ve=re.itemSize,dt=e.get(re);if(dt===void 0)continue;let le=dt.buffer,ke=dt.type,ce=dt.bytesPerElement,et=ke===i.INT||ke===i.UNSIGNED_INT||re.gpuType===No;if(re.isInterleavedBufferAttribute){let he=re.data,Oe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,lt=re.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let at=0;at<ne.locationSize;at++)p(ne.location+at,he.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let at=0;at<ne.locationSize;at++)m(ne.location+at);i.bindBuffer(i.ARRAY_BUFFER,le);for(let at=0;at<ne.locationSize;at++)A(ne.location+at,Ve/ne.locationSize,ke,_e,Oe*ce,(lt+Ve/ne.locationSize*at)*ce,et)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<ne.locationSize;he++)p(ne.location+he,re.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<ne.locationSize;he++)m(ne.location+he);i.bindBuffer(i.ARRAY_BUFFER,le);for(let he=0;he<ne.locationSize;he++)A(ne.location+he,Ve/ne.locationSize,ke,_e,Ve*ce,Ve/ne.locationSize*he*ce,et)}}else if($!==void 0){let _e=$[ue];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ne.location,_e);break;case 3:i.vertexAttrib3fv(ne.location,_e);break;case 4:i.vertexAttrib4fv(ne.location,_e);break;default:i.vertexAttrib1fv(ne.location,_e)}}}}S()}function P(){B();for(let z in n){let H=n[z];for(let Q in H){let F=H[Q];for(let Y in F){let ee=F[Y];for(let $ in ee)h(ee[$].object),delete ee[$];delete F[Y]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;let H=n[z.id];for(let Q in H){let F=H[Q];for(let Y in F){let ee=F[Y];for(let $ in ee)h(ee[$].object),delete ee[$];delete F[Y]}}delete n[z.id]}function x(z){for(let H in n){let Q=n[H];for(let F in Q){let Y=Q[F];if(Y[z.id]===void 0)continue;let ee=Y[z.id];for(let $ in ee)h(ee[$].object),delete ee[$];delete Y[z.id]}}}function w(z){for(let H in n){let Q=n[H],F=z.isInstancedMesh===!0?z.id:0,Y=Q[F];if(Y!==void 0){for(let ee in Y){let $=Y[ee];for(let ue in $)h($[ue].object),delete $[ue];delete Y[ee]}delete Q[F],Object.keys(Q).length===0&&delete n[H]}}}function B(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function z0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function G0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==li&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Fn&&x!==Jn&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:P,samples:R}}function H0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new si,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,b=p.clippingState||null;l.value=b,b=h(g,u,A,d);for(let P=0;P!==A;++P)b[P]=t[P];p.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=d+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=d;A!==M;++A,b+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var oa=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:hs});r.uniforms.tEquirect.value=t;let a=new hn(s,r),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=Cn),new Xs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},td=256,V0=3,W0=20,wd=256,Td=16,X0=3,q0=new O,Y0=new Mt,vl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new hn(new $n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=q0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Y0));let m=new Xs(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(td,qu(e))}_fromTexture(e,t){e.mapping===ds||e.mapping===Zs?this._setSize(e.image.length===0?td:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nd(e,!1,!1),n=Math.log2(e)-V0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ds||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=id()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Z0(),this._integrationMaterial=$0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Td);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-X0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(wd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=K0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function nd(i,e,t){return new oa(i,{minFilter:Li,generateMipmaps:e,type:oi,colorSpace:_r,depthBuffer:t})}function la(i,e,t){return new _i({name:i,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:In,blending:hs,depthTest:!1,depthWrite:!1})}function Z0(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Td}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function K0(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${W0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function id(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sd(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function J0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Io||d===Lo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new oa(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===Io||d===Lo,M=d===ds||d===Zs;if(g||M){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new vl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new vl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Io?u.mapping=ds:d===Lo&&(u.mapping=Zs),u}function l(u){let d=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function j0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fr("WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(e.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(g){let M=g.attributes;for(let m in M)e.update(M[m],i.ARRAY_BUFFER)}function f(g){let M=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let S=M!==null?M.array.length:m.array.length/3-1,A=m.count>=65535?wr:br,b=new A(Math.ceil(S/3)*6,1),P=b.array;if(M!==null){let x=M.array;p=M.version;for(let w=0,B=0;w<S;w+=3){let D=x[w+0],z=x[w+1],H=x[w+2];P[B++]=D,P[B++]=z,P[B++]=z,P[B++]=H,P[B++]=H,P[B++]=D}}else{p=m.version;for(let x=0,w=0;x<S;x+=3){let B=x+0,D=x+1,z=x+2;P[w++]=B,P[w++]=D,P[w++]=D,P[w++]=z,P[w++]=z,P[w++]=B}}b.version=p;let R=r.get(g);R&&e.remove(R),r.set(g,b)}function u(g){let M=r.get(g);if(M){let m=g.index;m!==null&&M.version<m.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function eg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,e,t){let n=new WeakMap,s=new rn;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let B=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let b=o.attributes.position.count*A,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*P*4*f),x=new vr(R,b,P,f);x.type=Jn,x.needsUpdate=!0;let w=A*4;for(let D=0;D<f;D++){let z=m[D],H=p[D],Q=S[D],F=b*P*4*D;for(let Y=0;Y<z.count;Y++){let ee=Y*w;d===!0&&(s.fromBufferAttribute(z,Y),R[F+ee+0]=s.x,R[F+ee+1]=s.y,R[F+ee+2]=s.z,R[F+ee+3]=0),g===!0&&(s.fromBufferAttribute(H,Y),R[F+ee+4]=s.x,R[F+ee+5]=s.y,R[F+ee+6]=s.z,R[F+ee+7]=0),M===!0&&(s.fromBufferAttribute(Q,Y),R[F+ee+8]=s.x,R[F+ee+9]=s.y,R[F+ee+10]=s.z,R[F+ee+11]=Q.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Ze(b,P)},n.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ig(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var sg={[Mc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Tc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[wc]:"CUSTOM_TONE_MAPPING"};function rg(i,e,t,n,s,r){let a=new Hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new vn;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let f=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new hn(h,f),d=new Zr(-1,1,1,-1,0,1),g=null,M=null,m=!1,p,S=null,A=[],b=!1;this.setSize=function(P,R){a.setSize(P,R),o!==null&&o.setSize(P,R),l!==null&&l.setSize(P,R);for(let x=0;x<A.length;x++){let w=A[x];w.setSize&&w.setSize(P,R)}},this.setEffects=function(P){A=P,b=A.length>0&&A[0].isRenderPass===!0;let R=a.width,x=a.height;A.length>0&&o===null&&(o=new Hn(R,x,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(R,x,{type:oi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(B=>B.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ii(R,x),r===!0&&(c.format=Di,c.type=fs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let B=0;B<A.length;B++){let D=A[B];D.setSize&&D.setSize(R,x),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(P,R){if(m||P.toneMapping===xi&&A.length===0)return!1;if(S=R,R!==null){let x=R.width,w=R.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return b===!1&&P.setRenderTarget(a),p=P.toneMapping,P.toneMapping=xi,!0},this.hasRenderPass=function(){return b},this.end=function(P,R){P.toneMapping=p,m=!0;let x=a,w=o;for(let B=0;B<A.length;B++){let D=A[B];D.enabled!==!1&&(D.render(P,w,x,R),D.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(g!==P.outputColorSpace||M!==P.toneMapping){g=P.outputColorSpace,M=P.toneMapping,f.defines={},Ft.getTransfer(g)===Xt&&(f.defines.SRGB_TRANSFER="");let B=sg[M];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,P.setRenderTarget(S),P.render(u,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Ed=new Pn,Ad=new Ii(1,1),Rd=new Ir(1),Cd=new vr,Pd=new so,Id=new Cr,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sl(i,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),pn(t,n)}}function ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;ld.set(n),i.uniformMatrix3fv(this.addr,!1,ld),pn(t,n)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),pn(t,n)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function _g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function bl(i){return i.version===0&&(i.compareFunction=Fc,i.needsUpdate=!0),i}function Mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bl(Ad):r=Ed,t.setTexture2D(e||r,s)}function Sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bl(Rd):r=Id,t.setTextureCube(e||r,s)}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}function Eg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function Rg(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function Cg(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lg(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dg(i,e){i.uniform1iv(this.addr,e)}function Ng(i,e){i.uniform2iv(this.addr,e)}function Ug(i,e){i.uniform3iv(this.addr,e)}function Fg(i,e){i.uniform4iv(this.addr,e)}function Og(i,e){i.uniform1uiv(this.addr,e)}function Bg(i,e){i.uniform2uiv(this.addr,e)}function kg(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function Gg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bl(Ad):a=Ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pd,r[a])}function Vg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bl(Rd):a=Id;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Wg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function Xg(i){switch(i){case 5126:return Eg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}var jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function hd(i,e){i.seq.push(e),i.map[e.id]=e}function qg(i,e,t){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hd(t,c===void 0?new jc(o,i,e):new Qc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new eh(o),hd(t,f)),t=f}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yg=37297,Zg=0;function $g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dd=new vt;function Kg(i){Ft._getMatrix(dd,Ft.workingColorSpace,i);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(e),o)}else return r}function Jg(i,e){let t=Kg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jg={[Mc]:"Linear",[Sc]:"Reinhard",[bc]:"Cineon",[Jr]:"ACESFilmic",[Tc]:"AgX",[Ec]:"Neutral",[wc]:"Custom"};function Qg(i,e){let t=jg[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yl=new O;function e_(){Ft.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function n_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function aa(i){return i!==""}function pd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(s_,r_)}function r_(i,e){let t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return th(t)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(a_,o_)}function o_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var l_={[cs]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function c_(i){return l_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var h_={[Zs]:"ENVMAP_MODE_REFRACTION"};function u_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[vc]:"ENVMAP_BLENDING_MULTIPLY",[Pu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function f_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function p_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=c_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=u_(t),f=f_(t),u=t_(t),d=n_(r),g=s.createProgram(),M,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(aa).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(aa).join(`
`),m.length>0&&(m+=`
`)):(M=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ct.tonemapping_pars_fragment:"",t.toneMapping!==xi?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=th(a),a=pd(a,t),a=md(a,t),o=th(o),o=pd(o,t),o=md(o,t),a=gd(a),o=gd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=p+M+a,A=p+m+o,b=ud(s,s.VERTEX_SHADER,S),P=ud(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(b)||"",Q=s.getShaderInfoLog(P)||"",F=z.trim(),Y=H.trim(),ee=Q.trim(),$=!0,ue=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,P);else{let ne=fd(s,b,"vertex"),re=fd(s,P,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ne+`
`+re)}else F!==""?ut("WebGLProgram: Program Info Log:",F):(Y===""||ee==="")&&(ue=!1);ue&&(D.diagnostics={runnable:$,programLog:F,vertexShader:{log:Y,prefix:M},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(b),s.deleteShader(P),x=new Js(s,g),w=i_(s,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,Yg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=P,this}var m_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function g_(i){return i===ji||i===ia||i===sa}function __(i,e,t,n,s,r){let a=new Os,o=new nh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,w,B,D,z,H){let Q=D.fog,F=z.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,ee=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||Y,ee),ue=u[x.type],ne=n.precision;x.precision!==null&&(ne=n.getMaxPrecision(x.precision),ne!==x.precision&&ut("WebGLProgram.getParameters:",x.precision,"not supported, using",ne,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=re!==void 0?re.length:0,Ve=0;F.morphAttributes.position!==void 0&&(Ve=1),F.morphAttributes.normal!==void 0&&(Ve=2),F.morphAttributes.color!==void 0&&(Ve=3);let dt,le,ke,ce;if(ue){let Fe=vi[ue];dt=Fe.vertexShader,le=Fe.fragmentShader}else{dt=x.vertexShader,le=x.fragmentShader;let Fe=o.getVertexShaderStage(x),T=o.getFragmentShaderStage(x);o.update(x,Fe,T),ke=Fe.id,ce=T.id}let et=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,lt=z.isBatchedMesh===!0,at=!!x.map,pt=!!x.matcap,Ot=!!$,ot=Ot&&$.isPMREMTexture===!0,Kt=!!x.aoMap,bt=!!x.lightMap,nn=!!x.bumpMap&&x.wireframe===!1,Vt=!!x.normalMap,mn=!!x.displacementMap,sn=!!x.emissiveMap,ln=!!x.metalnessMap,gn=!!x.roughnessMap,It=x.anisotropy>0,k=x.clearcoat>0,xt=x.diffuseRoughness>0,Ut=x.dispersion>0,Ue=x.retroreflectivity>0,we=x.iridescence>0,$e=x.sheen>0,Ke=x.transmission>0,ht=It&&!!x.anisotropyMap,E=k&&!!x.clearcoatMap,y=k&&!!x.clearcoatNormalMap,X=k&&!!x.clearcoatRoughnessMap,ge=xt&&!!x.diffuseRoughnessMap,j=we&&!!x.iridescenceMap,ye=we&&!!x.iridescenceThicknessMap,Te=$e&&!!x.sheenColorMap,ie=$e&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Ee=!!x.specularColorMap,N=!!x.specularIntensityMap,ae=Ke&&!!x.transmissionMap,G=Ke&&!!x.thicknessMap,Me=!!x.gradientMap,fe=!!x.alphaMap,Ae=x.alphaTest>0,qe=!!x.alphaHash,gt=!!x.extensions,ve=xi;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ve=i.toneMapping);let it=ot?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,yt={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:dt,fragmentShader:le,defines:x.defines,customVertexShaderID:ke,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ne,batching:lt,batchingColor:lt&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:at,matcap:pt,envMap:Ot,envMapMode:Ot&&$.mapping,envMapPMREM:ot,envMapMaxLod:ot?it.length-1:null,envMapSize:ot?it[0].width:null,aoMap:Kt,lightMap:bt,bumpMap:nn,normalMap:Vt,displacementMap:mn,emissiveMap:sn,normalMapObjectSpace:Vt&&x.normalMapType===Nu,normalMapTangentSpace:Vt&&x.normalMapType===_l,packedNormalMap:Vt&&x.normalMapType===_l&&g_(x.normalMap.format),metalnessMap:ln,roughnessMap:gn,anisotropy:It,anisotropyMap:ht,clearcoat:k,clearcoatMap:E,clearcoatNormalMap:y,clearcoatRoughnessMap:X,diffuseRoughness:xt,diffuseRoughnessMap:ge,dispersion:Ut,retroreflection:Ue,iridescence:we,iridescenceMap:j,iridescenceThicknessMap:ye,sheen:$e,sheenColorMap:Te,sheenRoughnessMap:ie,specularMap:oe,specularColorMap:Ee,specularIntensityMap:N,transmission:Ke,transmissionMap:ae,thicknessMap:G,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:qe,combine:x.combine,mapUv:at&&d(x.map.channel),aoMapUv:Kt&&d(x.aoMap.channel),lightMapUv:bt&&d(x.lightMap.channel),bumpMapUv:nn&&d(x.bumpMap.channel),normalMapUv:Vt&&d(x.normalMap.channel),displacementMapUv:mn&&d(x.displacementMap.channel),emissiveMapUv:sn&&d(x.emissiveMap.channel),metalnessMapUv:ln&&d(x.metalnessMap.channel),roughnessMapUv:gn&&d(x.roughnessMap.channel),anisotropyMapUv:ht&&d(x.anisotropyMap.channel),clearcoatMapUv:E&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(x.sheenRoughnessMap.channel),specularMapUv:oe&&d(x.specularMap.channel),specularColorMapUv:Ee&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:ae&&d(x.transmissionMap.channel),thicknessMapUv:G&&d(x.thicknessMap.channel),alphaMapUv:fe&&d(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Vt||It),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(at||fe),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:at&&x.map.isVideoTexture===!0&&Ft.getTransfer(x.map.colorSpace)===Xt,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(x.emissiveMap.colorSpace)===Xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kn,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function M(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(m(w,x),p(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function p(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let w=u[x.type],B;if(w){let D=vi[w];B=ju.clone(D.uniforms)}else B=x.uniforms;return B}function A(x,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new p_(i,w,x,s),c.push(B),h.set(w,B)),B}function b(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function P(x){o.remove(x)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:R}}function x_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,M,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,d,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);let A=o(u,d,g,M,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(u,d,g,M,m,p){let S=o(u,d,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||y_),n.length>1&&n.sort(d||xd),s.length>1&&s.sort(d||xd)}function f(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function v_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yd,i.set(n,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Mt};break;case"SpotLight":t={position:new O,direction:new O,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function S_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var b_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T_(i){let e=new M_,t=S_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new kt,a=new kt;function o(c){let h=0,f=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,A=0,b=0,P=0,R=0,x=0,w=0,B=0,D=0;c.sort(w_);for(let H=0,Q=c.length;H<Q;H++){let F=c[H],Y=F.color,ee=F.intensity,$=F.distance,ue=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ji?ue=F.shadow.map.texture:ue=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=Y.r*ee,f+=Y.g*ee,u+=Y.b*ee;else if(F.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(F.sh.coefficients[ne],ee);D++}else if(F.isSunLight){let ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,_e=t.get(F);_e.shadowIntensity=re.intensity,_e.shadowBias=re.bias,_e.shadowNormalBias=re.normalBias,_e.shadowRadius=re.radius,_e.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=_e,n.sunShadowMap[g]=ue;let Ve=re.getViewportCount();for(let dt=0;dt<Ve;dt++)n.sunShadowMatrix[M+dt]=re.getMatrix(dt),n.sunShadowCascade[M+dt]=re._cascadeData[dt];M+=Ve,g++}n.sun[d]=ne,d++}else if(F.isDirectionalLight){let ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,_e=t.get(F);_e.shadowIntensity=re.intensity,_e.shadowBias=re.bias,_e.shadowNormalBias=re.normalBias,_e.shadowRadius=re.radius,_e.shadowMapSize=re.mapSize,n.directionalShadow[m]=_e,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=F.shadow.matrix,P++}n.directional[m]=ne,m++}else if(F.isSpotLight){let ne=e.get(F);ne.position.setFromMatrixPosition(F.matrixWorld),ne.color.copy(Y).multiplyScalar(ee),ne.distance=$,ne.coneCos=Math.cos(F.angle),ne.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ne.decay=F.decay,n.spot[S]=ne;let re=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,re.updateMatrices(F),F.castShadow&&B++),n.spotLightMatrix[S]=re.matrix,F.castShadow){let _e=t.get(F);_e.shadowIntensity=re.intensity,_e.shadowBias=re.bias,_e.shadowNormalBias=re.normalBias,_e.shadowRadius=re.radius,_e.shadowMapSize=re.mapSize,n.spotShadow[S]=_e,n.spotShadowMap[S]=ue,x++}S++}else if(F.isRectAreaLight){let ne=e.get(F);ne.color.copy(Y).multiplyScalar(ee),ne.halfWidth.set(F.width*.5,0,0),ne.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=ne,A++}else if(F.isPointLight){let ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),ne.distance=F.distance,ne.decay=F.decay,F.castShadow){let re=F.shadow,_e=t.get(F);_e.shadowIntensity=re.intensity,_e.shadowBias=re.bias,_e.shadowNormalBias=re.normalBias,_e.shadowRadius=re.radius,_e.shadowMapSize=re.mapSize,_e.shadowCameraNear=re.camera.near,_e.shadowCameraFar=re.camera.far,n.pointShadow[p]=_e,n.pointShadowMap[p]=ue,n.pointShadowMatrix[p]=F.shadow.matrix,R++}n.point[p]=ne,p++}else if(F.isHemisphereLight){let ne=e.get(F);ne.skyColor.copy(F.color).multiplyScalar(ee),ne.groundColor.copy(F.groundColor).multiplyScalar(ee),n.hemi[b]=ne,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==d||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==S||z.rectAreaLength!==A||z.hemiLength!==b||z.numSunShadows!==g||z.numDirectionalShadows!==P||z.numPointShadows!==R||z.numSpotShadows!==x||z.numSpotMaps!==w||z.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-B,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=D,z.sunLength=d,z.directionalLength=m,z.pointLength=p,z.spotLength=S,z.rectAreaLength=A,z.hemiLength=b,z.numSunShadows=g,z.numDirectionalShadows=P,z.numPointShadows=R,z.numSpotShadows=x,z.numSpotMaps=w,z.numLightProbes=D,n.version=b_++)}function l(c,h){let f=0,u=0,d=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let b=c[S];if(b.isSunLight){let P=n.sun[f];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let P=n.directional[u];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),u++}else if(b.isSpotLight){let P=n.spot[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let P=n.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let P=n.point[d];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let P=n.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function vd(i){let e=new T_(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vd(i),e.set(s,[o])):r>=a.length?(o=new vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],P_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Md=new kt,ra=new O,Jc=new O;function I_(i,e,t){let n=new qi,s=new Ze,r=new Ze,a=new rn,o=new go,l=new _o,c={},h=t.maxTextureSize,f={[Ji]:In,[In]:Ji,[Kn]:Kn},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new hn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let p=this.type;this.render=function(R,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===uu&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);let B=i.getRenderTarget(),D=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),H=i.state;H.setBlending(hs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Q=p!==this.type;Q&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Y=>Y.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Y=R.length;F<Y;F++){let ee=R[F],$=ee.shadow;if($===void 0){ut("WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ue=$.getFrameExtents();s.multiply(ue),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,$.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=ne,$.map===null||Q===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===qs){if(ee.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Hn(s.x,s.y,{format:ji,type:oi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),$.map.texture.name=ee.name+".shadowMap",$.map.depthTexture=new Ii(s.x,s.y,Jn),$.map.depthTexture.name=ee.name+".shadowMapDepth",$.map.depthTexture.format=Pi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xn,$.map.depthTexture.magFilter=xn}else ee.isPointLight?($.map=new oa(s.x),$.map.depthTexture=new Ir(s.x,ai)):($.map=new Hn(s.x,s.y),$.map.depthTexture=new Ii(s.x,s.y,ai)),$.map.depthTexture.name=ee.name+".shadowMap",$.map.depthTexture.format=Pi,this.type===cs?($.map.depthTexture.compareFunction=ne?Uc:Nc,$.map.depthTexture.minFilter=Cn,$.map.depthTexture.magFilter=Cn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xn,$.map.depthTexture.magFilter=xn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let re=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ee.isPointLight!==!0&&$.updateMatrices(ee,w);let _e=($.camera.layers.mask&4294967294)!==0?$.camera.layers:w.layers;for(let Ve=0;Ve<re;Ve++){let dt=$.getCamera(Ve);if(ee.isPointLight){let le=$.camera,ke=$.matrix,ce=ee.distance||le.far;ce!==le.far&&(le.far=ce,le.updateProjectionMatrix()),ra.setFromMatrixPosition(ee.matrixWorld),le.position.copy(ra),Jc.copy(le.position),Jc.add(C_[Ve]),le.up.copy(P_[Ve]),le.lookAt(Jc),le.updateMatrixWorld(),ke.makeTranslation(-ra.x,-ra.y,-ra.z),Md.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Md,le.coordinateSystem,le.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,Ve),i.clear();else{Ve===0&&(i.setRenderTarget($.map),i.clear());let le=$.getViewport(Ve);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),H.viewport(a)}n=$.getFrustum(Ve),b(x,w,dt,ee,_e,this.type)}$.isPointLightShadow!==!0&&this.type===qs&&S($,w),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(B,D,z)};function S(R,x){let w=e.update(M);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new Hn(s.x,s.y,{format:ji,type:oi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,w,u,M,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,w,d,M,null)}function A(R,x,w,B){let D=null,z=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)D=z;else if(D=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=D.uuid,Q=x.uuid,F=c[H];F===void 0&&(F={},c[H]=F);let Y=F[Q];Y===void 0&&(Y=D.clone(),F[Q]=Y,x.addEventListener("dispose",P)),D=Y}if(D.visible=x.visible,D.wireframe=x.wireframe,B===qs?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:f[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let H=i.properties.get(D);H.light=w}return D}function b(R,x,w,B,D,z){if(R.visible===!1)return;if(R.layers.test(D)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===qs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);let F=e.update(R),Y=R.material;if(Array.isArray(Y)){let ee=F.groups;for(let $=0,ue=ee.length;$<ue;$++){let ne=ee[$],re=Y[ne.materialIndex];if(re&&re.visible){let _e=A(R,re,B,z);R.onBeforeShadow(i,R,x,w,F,_e,ne),i.renderBufferDirect(w,null,F,_e,R,ne),R.onAfterShadow(i,R,x,w,F,_e,ne)}}}else if(Y.visible){let ee=A(R,Y,B,z);R.onBeforeShadow(i,R,x,w,F,ee,null),i.renderBufferDirect(w,null,F,ee,R,null),R.onAfterShadow(i,R,x,w,F,ee,null)}}let Q=R.children;for(let F=0,Y=Q.length;F<Y;F++)b(Q[F],x,w,B,D,z)}function P(R){R.target.removeEventListener("dispose",P);for(let w in c){let B=c[w],D=R.target.uuid;D in B&&(B[D].dispose(),delete B[D])}}}function L_(i,e){function t(){let N=!1,ae=new rn,G=null,Me=new rn(0,0,0,0);return{setMask:function(fe){G!==fe&&!N&&(i.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){N=fe},setClear:function(fe,Ae,qe,gt,ve){ve===!0&&(fe*=gt,Ae*=gt,qe*=gt),ae.set(fe,Ae,qe,gt),Me.equals(ae)===!1&&(i.clearColor(fe,Ae,qe,gt),Me.copy(ae))},reset:function(){N=!1,G=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,G=null,Me=null,fe=null;return{setReversed:function(Ae){if(ae!==Ae){let qe=e.get("EXT_clip_control");Ae?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ae=Ae;let gt=fe;fe=null,this.setClear(gt)}},getReversed:function(){return ae},setTest:function(Ae){Ae?he(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(Ae){G!==Ae&&!N&&(i.depthMask(Ae),G=Ae)},setFunc:function(Ae){if(ae&&(Ae=Xu[Ae]),Me!==Ae){switch(Ae){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Ae}},setLocked:function(Ae){N=Ae},setClear:function(Ae){fe!==Ae&&(fe=Ae,ae&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){N=!1,G=null,Me=null,fe=null,ae=!1}}}function s(){let N=!1,ae=null,G=null,Me=null,fe=null,Ae=null,qe=null,gt=null,ve=null;return{setTest:function(it){N||(it?he(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(it){ae!==it&&!N&&(i.stencilMask(it),ae=it)},setFunc:function(it,yt,Fe){(G!==it||Me!==yt||fe!==Fe)&&(i.stencilFunc(it,yt,Fe),G=it,Me=yt,fe=Fe)},setOp:function(it,yt,Fe){(Ae!==it||qe!==yt||gt!==Fe)&&(i.stencilOp(it,yt,Fe),Ae=it,qe=yt,gt=Fe)},setLocked:function(it){N=it},setClear:function(it){ve!==it&&(i.clearStencil(it),ve=it)},reset:function(){N=!1,ae=null,G=null,Me=null,fe=null,Ae=null,qe=null,gt=null,ve=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,b=null,P=null,R=null,x=null,w=new Mt(0,0,0),B=0,D=!1,z=null,H=null,Q=null,F=null,Y=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ue=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ne)[1]),$=ue>=1):ne.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),$=ue>=2);let re=null,_e={},Ve=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),le=new rn().fromArray(Ve),ke=new rn().fromArray(dt);function ce(N,ae,G,Me){let fe=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(N,Ae),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<G;qe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ae+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Ae}let et={};et[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Ds),nn(!1),Vt(pc),he(i.CULL_FACE),Kt(hs);function he(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Oe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function lt(N,ae){return u[N]!==ae?(i.bindFramebuffer(N,ae),u[N]=ae,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function at(N,ae){let G=g,Me=!1;if(N){G=d.get(ae),G===void 0&&(G=[],d.set(ae,G));let fe=N.textures;if(G.length!==fe.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,qe=fe.length;Ae<qe;Ae++)G[Ae]=i.COLOR_ATTACHMENT0+Ae;G.length=fe.length,Me=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Me=!0);Me&&i.drawBuffers(G)}function pt(N){return M!==N?(i.useProgram(N),M=N,!0):!1}let Ot={[us]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Ot[mu]=i.MIN,Ot[gu]=i.MAX;let ot={[_u]:i.ZERO,[xu]:i.ONE,[yu]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,ae,G,Me,fe,Ae,qe,gt,ve,it){if(N===hs){m===!0&&(Oe(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),N!==du){if(N!==p||it!==D){if((S!==us||P!==us)&&(i.blendEquation(i.FUNC_ADD),S=us,P=us),it)switch(N){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",N);break}A=null,b=null,R=null,x=null,w.set(0,0,0),B=0,p=N,D=it}return}fe=fe||ae,Ae=Ae||G,qe=qe||Me,(ae!==S||fe!==P)&&(i.blendEquationSeparate(Ot[ae],Ot[fe]),S=ae,P=fe),(G!==A||Me!==b||Ae!==R||qe!==x)&&(i.blendFuncSeparate(ot[G],ot[Me],ot[Ae],ot[qe]),A=G,b=Me,R=Ae,x=qe),(gt.equals(w)===!1||ve!==B)&&(i.blendColor(gt.r,gt.g,gt.b,ve),w.copy(gt),B=ve),p=N,D=!1}function bt(N,ae){N.side===Kn?Oe(i.CULL_FACE):he(i.CULL_FACE);let G=N.side===In;ae&&(G=!G),nn(G),N.blending===Ys&&N.transparent===!1?Kt(hs):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;o.setTest(Me),Me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),sn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function nn(N){z!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),z=N)}function Vt(N){N!==cu?(he(i.CULL_FACE),N!==H&&(N===pc?i.cullFace(i.BACK):N===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),H=N}function mn(N){N!==Q&&($&&i.lineWidth(N),Q=N)}function sn(N,ae,G){N?(he(i.POLYGON_OFFSET_FILL),(F!==ae||Y!==G)&&(F=ae,Y=G,a.getReversed()&&(ae=-ae,G=-G),i.polygonOffset(ae,G))):Oe(i.POLYGON_OFFSET_FILL)}function ln(N){N?he(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function gn(N){N===void 0&&(N=i.TEXTURE0+ee-1),re!==N&&(i.activeTexture(N),re=N)}function It(N,ae,G){G===void 0&&(re===null?G=i.TEXTURE0+ee-1:G=re);let Me=_e[G];Me===void 0&&(Me={type:void 0,texture:void 0},_e[G]=Me),(Me.type!==N||Me.texture!==ae)&&(re!==G&&(i.activeTexture(G),re=G),i.bindTexture(N,ae||et[N]),Me.type=N,Me.texture=ae)}function k(){let N=_e[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function Ut(){try{i.compressedTexImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function Ue(){try{i.texSubImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function we(){try{i.texSubImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function $e(){try{i.compressedTexSubImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function ht(){try{i.texStorage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function E(){try{i.texStorage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function y(){try{i.texImage2D(...arguments)}catch(N){mt("WebGLState:",N)}}function X(){try{i.texImage3D(...arguments)}catch(N){mt("WebGLState:",N)}}function ge(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function j(N,ae){f[N]!==ae&&(i.pixelStorei(N,ae),f[N]=ae)}function ye(N){le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Te(N){ke.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function ie(N,ae){let G=c.get(ae);G===void 0&&(G=new WeakMap,c.set(ae,G));let Me=G.get(N);Me===void 0&&(Me=i.getUniformBlockIndex(ae,N.name),i.uniformBlockBinding(ae,Me,Me),G.set(N,Me))}function oe(N,ae,G){let fe=c.get(ae).get(N);l[fe]!==G&&(i.bindBufferBase(i.UNIFORM_BUFFER,fe,G),l[fe]=G)}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},re=null,_e={},u={},l={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,b=null,P=null,R=null,x=null,w=new Mt(0,0,0),B=0,D=!1,z=null,H=null,Q=null,F=null,Y=null,le.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Oe,bindFramebuffer:lt,drawBuffers:at,useProgram:pt,setBlending:Kt,setMaterial:bt,setFlipSided:nn,setCullFace:Vt,setLineWidth:mn,setPolygonOffset:sn,setScissorTest:ln,activeTexture:gn,bindTexture:It,unbindTexture:k,compressedTexImage2D:xt,compressedTexImage3D:Ut,texImage2D:y,texImage3D:X,pixelStorei:j,getParameter:ge,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:ht,texStorage3D:E,texSubImage2D:Ue,texSubImage3D:we,compressedTexSubImage2D:$e,compressedTexSubImage3D:Ke,scissor:ye,viewport:Te,reset:Ee}}function D_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,M=new FinalizationRegistry(E=>g.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,y){return m?new OffscreenCanvas(E,y):yr("canvas")}function S(E,y,X){let ge=1,j=ht(E);if((j.width>X||j.height>X)&&(ge=X/Math.max(j.width,j.height)),ge<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ye=Math.floor(ge*j.width),Te=Math.floor(ge*j.height);u===void 0&&(u=p(ye,Te));let ie=y?p(ye,Te):u;return ie.width=ye,ie.height=Te,ie.getContext("2d").drawImage(E,0,0,ye,Te),ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ye+"x"+Te+")."),ie}else return"data"in E&&ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function A(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(E,y,X,ge,j,ye=!1){if(E!==null){if(i[E]!==void 0)return i[E];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Te;ge&&(Te=e.get("EXT_texture_norm16"),Te||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===i.RED&&(X===i.FLOAT&&(ie=i.R32F),X===i.HALF_FLOAT&&(ie=i.R16F),X===i.UNSIGNED_BYTE&&(ie=i.R8),X===i.UNSIGNED_SHORT&&Te&&(ie=Te.R16_EXT),X===i.SHORT&&Te&&(ie=Te.R16_SNORM_EXT)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.R8UI),X===i.UNSIGNED_SHORT&&(ie=i.R16UI),X===i.UNSIGNED_INT&&(ie=i.R32UI),X===i.BYTE&&(ie=i.R8I),X===i.SHORT&&(ie=i.R16I),X===i.INT&&(ie=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ie=i.RG32F),X===i.HALF_FLOAT&&(ie=i.RG16F),X===i.UNSIGNED_BYTE&&(ie=i.RG8),X===i.UNSIGNED_SHORT&&Te&&(ie=Te.RG16_EXT),X===i.SHORT&&Te&&(ie=Te.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RG8UI),X===i.UNSIGNED_SHORT&&(ie=i.RG16UI),X===i.UNSIGNED_INT&&(ie=i.RG32UI),X===i.BYTE&&(ie=i.RG8I),X===i.SHORT&&(ie=i.RG16I),X===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),X===i.UNSIGNED_INT&&(ie=i.RGB32UI),X===i.BYTE&&(ie=i.RGB8I),X===i.SHORT&&(ie=i.RGB16I),X===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),X===i.UNSIGNED_INT&&(ie=i.RGBA32UI),X===i.BYTE&&(ie=i.RGBA8I),X===i.SHORT&&(ie=i.RGBA16I),X===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGB16_EXT),X===i.SHORT&&Te&&(ie=Te.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),y===i.RGBA){let oe=ye?xr:Ft.getTransfer(j);X===i.FLOAT&&(ie=i.RGBA32F),X===i.HALF_FLOAT&&(ie=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ie=oe===Xt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGBA16_EXT),X===i.SHORT&&Te&&(ie=Te.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(E,y){let X;return E?y===null||y===ai||y===fs?X=i.DEPTH24_STENCIL8:y===Jn?X=i.DEPTH32F_STENCIL8:y===$s&&(X=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===fs?X=i.DEPTH_COMPONENT24:y===Jn?X=i.DEPTH_COMPONENT32F:y===$s&&(X=i.DEPTH_COMPONENT16),X}function w(E,y){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==xn&&E.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function B(E){let y=new WeakRef(E);n.get(E).__ref=y,g.add(y),M.register(E,y,y)}function D(E){let y=n.get(E).__ref;y!==void 0&&(g.delete(y),M.unregister(y))}function z(E){Q(E.target)}function H(E){F(E.target)}function Q(E){E.removeEventListener("dispose",z),D(E),ee(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function F(E){E.removeEventListener("dispose",H),D(E),ue(E)}function Y(){for(let E of g){let y=E.deref();y!==void 0&&(y.isRenderTarget===!0?F(y):Q(y))}g.clear(),f.clear()}function ee(E){let y=n.get(E);if(y.__webglInit===void 0)return;let X=E.source,ge=d.get(X);if(ge){let j=ge[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&$(E),Object.keys(ge).length===0&&d.delete(X)}n.remove(E)}function $(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let X=E.source,ge=d.get(X);delete ge[y.__cacheKey],a.memory.textures--}function ue(E){let y=n.get(E);y.__depthDisposeCallback&&y.__depthDisposeCallback();let X=E.depthTexture;if(X&&X.renderTarget===E&&Q(X),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ye=0;ye<y.__webglFramebuffer[j].length;ye++)i.deleteFramebuffer(y.__webglFramebuffer[j][ye]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ge=E.textures;for(let j=0,ye=ge.length;j<ye;j++){let Te=n.get(ge[j]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ge[j])}n.remove(E)}let ne=0;function re(){ne=0}function _e(){return ne}function Ve(E){ne=E}function dt(){let E=ne;return E>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),ne+=1,E}function le(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.mipmapsAutoUpdate),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ke(E,y){let X=n.get(E);if(E.isVideoTexture&&$e(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&X.__version!==E.version){let ge=E.image;if(ge===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(X,E,y);return}}else E.isExternalTexture&&(X.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ce(E,y){let X=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){bt(X,E,y);return}else E.isExternalTexture&&(X.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function et(E,y){let X=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){bt(X,E,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function he(E,y){let X=n.get(E);if(E.version>0&&X.__version!==E.version){nn(X,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Oe={[ja]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},lt={[xn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},at={[Fu]:i.NEVER,[Fc]:i.ALWAYS,[Ou]:i.LESS,[Nc]:i.LEQUAL,[Bu]:i.EQUAL,[Uc]:i.GEQUAL,[ku]:i.GREATER,[zu]:i.NOTEQUAL};function pt(E,y){if(y.type===Jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===Do||y.magFilter===jr||y.magFilter===Li||y.minFilter===Cn||y.minFilter===Do||y.minFilter===jr||y.minFilter===Li)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Oe[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Oe[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Oe[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==jr&&y.minFilter!==Li||y.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ot(E,y){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",z),B(y));let ge=y.source,j=d.get(ge);j===void 0&&(j={},d.set(ge,j));let ye=le(y);if(ye!==E.__cacheKey){j[ye]===void 0&&(j[ye]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[ye].usedTimes++;let Te=j[E.__cacheKey];Te!==void 0&&(j[E.__cacheKey].usedTimes--,Te.usedTimes===0&&$(y)),E.__cacheKey=ye,E.__webglTexture=j[ye].texture}return X}function ot(E,y,X){return Math.floor(Math.floor(E/X)/y)}function Kt(E,y,X,ge){let ye=E.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,ge,y.data);else{ye.sort((N,ae)=>N.start-ae.start);let Te=0;for(let N=1;N<ye.length;N++){let ae=ye[Te],G=ye[N],Me=ae.start+ae.count,fe=ot(G.start,y.width,4),Ae=ot(ae.start,y.width,4);G.start<=Me+1&&fe===Ae&&ot(G.start+G.count-1,y.width,4)===fe?ae.count=Math.max(ae.count,G.start+G.count-ae.start):(++Te,ye[Te]=G)}ye.length=Te+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let N=0,ae=ye.length;N<ae;N++){let G=ye[N],Me=Math.floor(G.start/4),fe=Math.ceil(G.count/4),Ae=Me%y.width,qe=Math.floor(Me/y.width),gt=fe,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(i.TEXTURE_2D,0,Ae,qe,gt,ve,X,ge,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function bt(E,y,X){let ge=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ge=i.TEXTURE_3D);let j=Ot(E,y),ye=y.source;t.bindTexture(ge,E.__webglTexture,i.TEXTURE0+X);let Te=n.get(ye);if(ye.version!==Te.__version||j===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ve=Ft.getPrimaries(Ft.workingColorSpace),it=y.colorSpace===Ni?null:Ft.getPrimaries(y.colorSpace),yt=y.colorSpace===Ni||ve===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=S(y.image,!1,s.maxTextureSize);oe=Ke(y,oe);let Ee=r.convert(y.format,y.colorSpace),N=r.convert(y.type),ae=R(y.internalFormat,Ee,N,y.normalized,y.colorSpace,y.isVideoTexture);pt(ge,y);let G,Me=y.mipmaps,fe=y.isVideoTexture!==!0,Ae=Te.__version===void 0||j===!0,qe=ye.dataReady,gt=w(y,oe);if(y.isDepthTexture)ae=x(y.format===Di,y.type),Ae&&(fe?t.texStorage2D(i.TEXTURE_2D,1,ae,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ee,N,null));else if(y.isDataTexture)if(Me.length>0){fe&&Ae&&t.texStorage2D(i.TEXTURE_2D,gt,ae,Me[0].width,Me[0].height);for(let ve=0,it=Me.length;ve<it;ve++)G=Me[ve],fe?qe&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,G.width,G.height,Ee,N,G.data):t.texImage2D(i.TEXTURE_2D,ve,ae,G.width,G.height,0,Ee,N,G.data);y.generateMipmaps=!1}else fe?(Ae&&t.texStorage2D(i.TEXTURE_2D,gt,ae,oe.width,oe.height),qe&&Kt(y,oe,Ee,N)):t.texImage2D(i.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ee,N,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){fe&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ae,Me[0].width,Me[0].height,oe.depth);for(let ve=0,it=Me.length;ve<it;ve++)if(G=Me[ve],y.format!==li)if(Ee!==null)if(fe){if(qe)if(y.layerUpdates.size>0){let yt=Wc(G.width,G.height,y.format,y.type);for(let Fe of y.layerUpdates){let T=G.data.subarray(Fe*yt/G.data.BYTES_PER_ELEMENT,(Fe+1)*yt/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Fe,G.width,G.height,1,Ee,T)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,G.width,G.height,oe.depth,Ee,G.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,ae,G.width,G.height,oe.depth,0,G.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,G.width,G.height,oe.depth,Ee,N,G.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,ae,G.width,G.height,oe.depth,0,Ee,N,G.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{fe&&Ae&&t.texStorage2D(i.TEXTURE_2D,gt,ae,Me[0].width,Me[0].height);for(let ve=0,it=Me.length;ve<it;ve++)G=Me[ve],y.format!==li?Ee!==null?fe?qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,G.width,G.height,Ee,G.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,ae,G.width,G.height,0,G.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?qe&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,G.width,G.height,Ee,N,G.data):t.texImage2D(i.TEXTURE_2D,ve,ae,G.width,G.height,0,Ee,N,G.data)}else if(y.isDataArrayTexture)if(fe){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ae,oe.width,oe.height,oe.depth),qe)if(y.layerUpdates.size>0){let ve=Wc(oe.width,oe.height,y.format,y.type);for(let it of y.layerUpdates){let yt=oe.data.subarray(it*ve/oe.data.BYTES_PER_ELEMENT,(it+1)*ve/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,oe.width,oe.height,1,Ee,N,yt)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,N,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,oe.width,oe.height,oe.depth,0,Ee,N,oe.data);else if(y.isData3DTexture)fe?(Ae&&t.texStorage3D(i.TEXTURE_3D,gt,ae,oe.width,oe.height,oe.depth),qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,N,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ae,oe.width,oe.height,oe.depth,0,Ee,N,oe.data);else if(y.isFramebufferTexture){if(Ae)if(fe)t.texStorage2D(i.TEXTURE_2D,gt,ae,oe.width,oe.height);else{let ve=oe.width,it=oe.height;for(let yt=0;yt<gt;yt++)t.texImage2D(i.TEXTURE_2D,yt,ae,ve,it,0,Ee,N,null),ve>>=1,it>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),oe.parentNode!==ve){ve.appendChild(oe),f.add(y),ve.onpaint=it=>{let yt=it.changedElements;for(let Fe of f)yt.includes(Fe.image)&&(Fe.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let yt=i.RGBA,Fe=i.RGBA,T=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,Fe,T,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(fe&&Ae){let ve=ht(Me[0]);t.texStorage2D(i.TEXTURE_2D,gt,ae,ve.width,ve.height)}for(let ve=0,it=Me.length;ve<it;ve++)G=Me[ve],fe?qe&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ee,N,G):t.texImage2D(i.TEXTURE_2D,ve,ae,Ee,N,G);y.generateMipmaps=!1}else if(fe){if(Ae){let ve=ht(oe);t.texStorage2D(i.TEXTURE_2D,gt,ae,ve.width,ve.height)}qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,N,oe)}else t.texImage2D(i.TEXTURE_2D,0,ae,Ee,N,oe);A(y)&&y.mipmapsAutoUpdate===!0&&b(ge),Te.__version=ye.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function nn(E,y,X){if(y.image.length!==6)return;let ge=Ot(E,y),j=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+X);let ye=n.get(j);if(j.version!==ye.__version||ge===!0){t.activeTexture(i.TEXTURE0+X);let Te=Ft.getPrimaries(Ft.workingColorSpace),ie=y.colorSpace===Ni?null:Ft.getPrimaries(y.colorSpace),oe=y.colorSpace===Ni||Te===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let Fe=0;Fe<6;Fe++)!Ee&&!N?ae[Fe]=S(y.image[Fe],!0,s.maxCubemapSize):ae[Fe]=N?y.image[Fe].image:y.image[Fe],ae[Fe]=Ke(y,ae[Fe]);let G=ae[0],Me=r.convert(y.format,y.colorSpace),fe=r.convert(y.type),Ae=R(y.internalFormat,Me,fe,y.normalized,y.colorSpace),qe=y.isVideoTexture!==!0,gt=ye.__version===void 0||ge===!0,ve=j.dataReady,it=w(y,G);pt(i.TEXTURE_CUBE_MAP,y);let yt;if(y.isDepthTexture){if(Ae=x(y.format===Di,y.type),gt)if(qe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ae,G.width,G.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,G.width,G.height,0,Me,fe,null)}else if(Ee){qe&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ae,G.width,G.height);for(let Fe=0;Fe<6;Fe++){yt=ae[Fe].mipmaps;for(let T=0;T<yt.length;T++){let _=yt[T];y.format!==li?Me!==null?qe?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T,0,0,_.width,_.height,Me,_.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T,Ae,_.width,_.height,0,_.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T,0,0,_.width,_.height,Me,fe,_.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T,Ae,_.width,_.height,0,Me,fe,_.data)}}}else{if(yt=y.mipmaps,qe&&gt){yt.length>0&&it++;let Fe=ht(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ae,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(N){qe?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ae[Fe].width,ae[Fe].height,Me,fe,ae[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,ae[Fe].width,ae[Fe].height,0,Me,fe,ae[Fe].data);for(let T=0;T<yt.length;T++){let L=yt[T].image[Fe].image;qe?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T+1,0,0,L.width,L.height,Me,fe,L.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T+1,Ae,L.width,L.height,0,Me,fe,L.data)}}else{qe?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Me,fe,ae[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,Me,fe,ae[Fe]);for(let T=0;T<yt.length;T++){let _=yt[T];qe?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T+1,0,0,Me,fe,_.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,T+1,Ae,Me,fe,_.image[Fe])}}}A(y)&&y.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Vt(E,y,X,ge,j,ye){let Te=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),oe=R(X.internalFormat,Te,ie,X.normalized,X.colorSpace),Ee=n.get(y),N=n.get(X);if(N.__renderTarget=y,!Ee.__hasExternalTextures){let ae=Math.max(1,y.width>>ye),G=Math.max(1,y.height>>ye);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ye,oe,ae,G,y.depth,0,Te,ie,null):t.texImage2D(j,ye,oe,ae,G,0,Te,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,j,N.__webglTexture,0,Ue(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,j,N.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function mn(E,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let ge=y.depthTexture,j=ge&&ge.isDepthTexture?ge.type:null,ye=x(y.stencilBuffer,j),Te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(y),ye,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(y),ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,E)}else{let ge=y.textures;for(let j=0;j<ge.length;j++){let ye=ge[j],Te=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),oe=R(ye.internalFormat,Te,ie,ye.normalized,ye.colorSpace);we(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(y),oe,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(y),oe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,oe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function sn(E,y,X){let ge=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);j.__renderTarget=y;let ye=ge?y.depthTexture.image[0]:y.depthTexture.image;(!j.__webglTexture||ye.width!==y.width||ye.height!==y.height)&&(ye.width=y.width,ye.height=y.height,y.depthTexture.needsUpdate=!0),ge?he(y.depthTexture,0):ke(y.depthTexture,0);let Te=j.__webglTexture,ie=Ue(y),oe=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Ee=y.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pi)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Te,0);else if(y.depthTexture.format===Di)we(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(E){let y=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let ge=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ge){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ge.removeEventListener("dispose",j)};ge.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=ge}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let ge=0;ge<6;ge++)sn(y.__webglFramebuffer[ge],E,ge);else E.texture.mipmaps.length>0?sn(y.__webglFramebuffer[0],E,0):sn(y.__webglFramebuffer,E,0);else if(X){y.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ge]),y.__webglDepthbuffer[ge]===void 0)y.__webglDepthbuffer[ge]=i.createRenderbuffer(),mn(y.__webglDepthbuffer[ge],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ye)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),mn(y.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gn(E,y,X){let ge=n.get(E);y!==void 0&&Vt(ge.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ln(E)}function It(E){let y=E.texture,X=n.get(E),ge=n.get(y);E.addEventListener("dispose",H),B(E);let j=E.textures,ye=E.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=y.version,a.memory.textures++),ye){X.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0){X.__webglFramebuffer[ie]=[];for(let oe=0;oe<y.mipmaps.length;oe++)X.__webglFramebuffer[ie][oe]=i.createFramebuffer()}else X.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)X.__webglFramebuffer[ie]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ie=0,oe=j.length;ie<oe;ie++){let Ee=n.get(j[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&we(E)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){let oe=j[ie];X.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ie]);let Ee=r.convert(oe.format,oe.colorSpace),N=r.convert(oe.type),ae=R(oe.internalFormat,Ee,N,oe.normalized,oe.colorSpace,E.isXRRenderTarget===!0),G=Ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,G,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,X.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),mn(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),pt(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Vt(X.__webglFramebuffer[ie][oe],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else Vt(X.__webglFramebuffer[ie],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);A(y)?b(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ie=0,oe=j.length;ie<oe;ie++){let Ee=j[ie],N=n.get(Ee),ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,N.__webglTexture),pt(ae,Ee),Vt(X.__webglFramebuffer,E,Ee,i.COLOR_ATTACHMENT0+ie,ae,0),A(Ee)&&b(ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,ge.__webglTexture),pt(ie,y),y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Vt(X.__webglFramebuffer[oe],E,y,i.COLOR_ATTACHMENT0,ie,oe);else Vt(X.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ie,0);A(y)?b(ie):y.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&ln(E)}function k(E){let y=E.textures;for(let X=0,ge=y.length;X<ge;X++){let j=y[X];if(A(j)&&j.mipmapsAutoUpdate===!0){let ye=P(E),Te=n.get(j).__webglTexture;t.bindTexture(ye,Te),b(ye),t.unbindTexture()}}}let xt=[];function Ut(E){if(E.samples>0){if(we(E)===!1){let y=E.textures,X=E.width,ge=E.height,j=i.COLOR_BUFFER_BIT,ye=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(E),ie=y.length>1;if(ie)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let N=n.get(y[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,X,ge,0,0,X,ge,j,i.NEAREST),l===!0&&(xt.length=0,xt.push(i.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&xt.push(ye),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let N=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ue(E){return Math.min(s.maxSamples,E.samples)}function we(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ke(E,y){let X=E.colorSpace,ge=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||X!==_r&&X!==Ni&&(Ft.getTransfer(X)===Xt?(ge!==li||j!==Fn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",X)),y}function ht(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=dt,this.resetTextureUnits=re,this.getTextureUnits=_e,this.setTextureUnits=Ve,this.setTexture2D=ke,this.setTexture2DArray=ce,this.setTexture3D=et,this.setTextureCube=he,this.rebindTextures=gn,this.setupRenderTarget=It,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=we,this.dispose=Y}function N_(i,e){function t(n,s=Ni){let r,a=Ft.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rc)return i.BYTE;if(n===Cc)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===li)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Qr||n===ea||n===ta||n===na)if(a===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Ho||n===Vo||n===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===ia||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jo||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===sa||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _i({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,M=typeof XRWebGLBinding<"u",m=new sh,p={},S=t.getContextAttributes(),A=null,b=null,P=[],R=[],x=new Ze,w=null,B=null,D=new Rn;D.viewport=new rn;let z=new Rn;z.viewport=new rn;let H=[D,z],Q=new Co,F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ke=P[le];return ke===void 0&&(ke=new Bs,P[le]=ke),ke.getTargetRaySpace()},this.getControllerGrip=function(le){let ke=P[le];return ke===void 0&&(ke=new Bs,P[le]=ke),ke.getGripSpace()},this.getHand=function(le){let ke=P[le];return ke===void 0&&(ke=new Bs,P[le]=ke),ke.getHandSpace()};function ee(le){let ke=R.indexOf(le.inputSource);if(ke===-1)return;let ce=P[ke];ce!==void 0&&(ce.update(le.inputSource,le.frame,c||a),ce.dispatchEvent({type:le.type,data:le.inputSource}))}function $(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ue);for(let le=0;le<P.length;le++){let ke=R[le];ke!==null&&(R[le]=null,P[le].disconnect(ke))}F=null,Y=null,m.reset();for(let le in p)delete p[le];if(e.setRenderTarget(A),d=null,u=null,f=null,s=null,b=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),B!==null){let le=B.camera;le.fov=B.fov,le.zoom=B.zoom,le.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ue),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,et=null,he=null;S.depth&&(he=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Di:Pi,et=S.stencil?fs:ai);let Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Hn(u.textureWidth,u.textureHeight,{format:li,type:Fn,depthTexture:new Ii(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Hn(d.framebufferWidth,d.framebufferHeight,{format:li,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(le){for(let ke=0;ke<le.removed.length;ke++){let ce=le.removed[ke],et=R.indexOf(ce);et>=0&&(R[et]=null,P[et].disconnect(ce))}for(let ke=0;ke<le.added.length;ke++){let ce=le.added[ke],et=R.indexOf(ce);if(et===-1){for(let Oe=0;Oe<P.length;Oe++)if(Oe>=R.length){R.push(ce),et=Oe;break}else if(R[Oe]===null){R[Oe]=ce,et=Oe;break}if(et===-1)break}let he=P[et];he&&he.connect(ce)}}function ne(le,ke){ke===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ke.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ke=le.near,ce=le.far;m.texture!==null&&(m.depthNear>0&&(ke=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),Q.near=z.near=D.near=ke,Q.far=z.far=D.far=ce,(F!==Q.near||Y!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),F=Q.near,Y=Q.far),Q.layers.mask=le.layers.mask|6,D.layers.mask=Q.layers.mask&-5,z.layers.mask=Q.layers.mask&-3;let et=le.parent,he=Q.cameras;ne(Q,et);for(let Oe=0;Oe<he.length;Oe++)ne(he[Oe],et);Q.projectionMatrix.copy(D.projectionMatrix),Q.projectionMatrixInverse.copy(D.projectionMatrixInverse),B===null&&le.isPerspectiveCamera&&(B={camera:le,fov:le.fov,zoom:le.zoom}),re(le,Q,et)};function re(le,ke,ce){ce===null?le.matrix.copy(ke.matrixWorld):(le.matrix.copy(ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(ke.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ke.projectionMatrix),le.projectionMatrixInverse.copy(ke.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=to*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(le){l=le,u!==null&&(u.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(le){return p[le]};let _e=null;function Ve(le,ke){if(h=ke.getViewerPose(c||a),g=ke,h!==null){let ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let et=!1;ce.length!==Q.cameras.length&&(Q.cameras.length=0,et=!0);for(let at=0;at<ce.length;at++){let pt=ce[at],Ot=null;if(d!==null)Ot=d.getViewport(pt);else{let Kt=f.getViewSubImage(u,pt);Ot=Kt.viewport,at===0&&(e.setRenderTargetTextures(b,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(b))}let ot=H[at];ot===void 0&&(ot=new Rn,ot.layers.enable(at),ot.viewport=new rn,H[at]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),at===0&&(Q.matrix.copy(ot.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),et===!0&&Q.cameras.push(ot)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let at=f.getDepthInformation(ce[0]);at&&at.isValid&&at.texture&&m.init(at,s.renderState)}if(he&&he.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let at=0;at<ce.length;at++){let pt=ce[at].camera;if(pt){let Ot=p[pt];Ot||(Ot=new Lr,p[pt]=Ot);let ot=f.getCameraImage(pt);Ot.sourceTexture=ot}}}}for(let ce=0;ce<P.length;ce++){let et=R[ce],he=P[ce];et!==null&&he!==void 0&&he.update(et,ke,c||a)}_e&&_e(le,ke),ke.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ke}),g=null}let dt=new Sd;dt.setAnimationLoop(Ve),this.setAnimationLoop=function(le){_e=le},this.dispose=function(){}}},O_=new kt,Ld=new vt;Ld.set(-1,0,0,0,1,0,0,0,1);function B_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),A=S.envMap,b=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ld),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,e,t,n){let s={},r={};function a(S,A){let b=A.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,A){let b=s[S.id];b===void 0&&(g(S),b=l(S),s[S.id]=b,S.addEventListener("dispose",m));let P=A.program;n.updateUBOMapping(S,P);let R=e.render.frame;r[S.id]!==R&&(c(S),r[S.id]=R)}function l(S){let A=i.createBuffer(),b=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,P),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],b=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let R=0,x=b.length;R<x;R++){let w=b[R];if(Array.isArray(w))for(let B=0,D=w.length;B<D;B++)h(w[B],R,B,P);else h(w,R,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,A,b,P){if(u(S,A,b,P)===!0){let R=S.__offset,x=S.value;if(Array.isArray(x)){let w=0;for(let B=0;B<x.length;B++){let D=x[B],z=M(D,!0);f(D,S.__data,w),w+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,S.__data)}}function f(S,A,b){typeof S=="number"||typeof S=="boolean"?A[b]=S:S.isMatrix3?(A[b]=S.elements[0],A[b+1]=S.elements[1],A[b+2]=S.elements[2],A[b+3]=0,A[b+4]=S.elements[3],A[b+5]=S.elements[4],A[b+6]=S.elements[5],A[b+7]=0,A[b+8]=S.elements[6],A[b+9]=S.elements[7],A[b+10]=S.elements[8],A[b+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-b),b):S.toArray(A,b)}function u(S,A,b,P){let R=S.value,x=A+"_"+b;if(Array.isArray(R)){P[x]===void 0&&(P[x]=[]);let w=P[x],B=!1;for(let D=0;D<R.length;D++)d(R[D],w,D)===!0&&(B=!0);return B}return d(R,P,x)}function d(S,A,b){if(A[b]===void 0)return typeof S=="number"||typeof S=="boolean"?A[b]=S:ArrayBuffer.isView(S)?A[b]=S.slice():A[b]=S.clone(),!0;{let P=A[b];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return A[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function g(S){let A=S.uniforms,b=0,P=16;for(let x=0,w=A.length;x<w;x++){let B=Array.isArray(A[x])?A[x]:[A[x]];for(let D=0,z=B.length;D<z;D++){let H=B[D],Q=Array.isArray(H.value)?H.value:[H.value],F=Array.isArray(A[x])||Array.isArray(H.value),Y=b;for(let $=0,ue=Q.length;$<ue;$++){let ne=Q[$],re=M(ne,F),_e=b%P,Ve=_e%re.boundary,dt=_e+Ve;b+=Ve,dt!==0&&P-dt<re.storage&&(b+=P-dt),$===0&&(Y=b),b+=re.storage}let ee=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new ee((b-Y)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Y}}let R=b%P;return R>0&&(b+=P-R),S.__size=b,S.__cache={},this}function M(S,A){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(S){let A=S.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}var z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function G_(){return yi===null&&(yi=new Tr(z_,16,16,ji,oi),yi.name="DFG_LUT",yi.minFilter=Cn,yi.magFilter=Cn,yi.wrapS=di,yi.wrapT=di,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Ml=class{constructor(e={}){let{canvas:t=Hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=d,m=new Set([zo,ko,Bo]),p=new Set([Fn,ai,$s,fs,Uo,Fo]),S=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},P=null,R=null,x=[],w=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,z=!1,H=null,Q=null,F=null,Y=null;this._outputColorSpace=An;let ee=0,$=0,ue=null,ne=-1,re=null,_e=new rn,Ve=new rn,dt=null,le=new Mt(0),ke=0,ce=t.width,et=t.height,he=1,Oe=null,lt=null,at=new rn(0,0,ce,et),pt=new rn(0,0,ce,et),Ot=!1,ot=new qi,Kt=new ro,bt=!1,nn=!1,Vt=new kt,mn=new O,sn=new rn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gn=!1;function It(){return ue===null?he:1}let k=n;function xt(v,U){return t.getContext(v,U)}let Ut,Ue,we,$e,Ke,ht,E,y,X,ge,j,ye,Te,ie,oe,Ee,N,ae,G,Me,fe,Ae,qe;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),k===null){let U="webgl2";if(k=xt(U,v),k===null)throw xt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(v){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),mt("WebGLRenderer: "+v.message),v}function gt(){Ut=new j0(k),Ut.init(),fe=new N_(k,Ut),Ue=new G0(k,Ut,e,fe),we=new L_(k,Ut),Ue.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),Q=k.createFramebuffer(),F=k.createFramebuffer(),Y=k.createFramebuffer(),$e=new tg(k),Ke=new x_,ht=new D_(k,Ut,we,Ke,Ue,fe,$e),E=new J0(D),y=new ip(k),Ae=new k0(k,y),X=new Q0(k,y,$e,Ae),ge=new ig(k,X,y,Ae,$e),ae=new ng(k,Ue,ht),oe=new H0(Ke),j=new __(D,E,Ut,Ue,Ae,oe),ye=new B_(D,Ke),Te=new v_,ie=new E_(Ut),N=new B0(D,E,we,ge,g,l),Ee=new I_(D,ge,Ue),qe=new k_(k,$e,Ue,we),G=new z0(k,Ut,$e),Me=new eg(k,Ut,$e),$e.programs=j.programs,D.capabilities=Ue,D.extensions=Ut,D.properties=Ke,D.renderLists=Te,D.shadowMap=Ee,D.state=we,D.info=$e}M!==Fn&&(B=new rg(M,t.width,t.height,o,s,r));let ve=new rh(D,k);this.xr=ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let v=Ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(v){v!==void 0&&(he=v,this.setSize(ce,et,!1))},this.getSize=function(v){return v.set(ce,et)},this.setSize=function(v,U,J=!0){if(ve.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=v,et=U,t.width=Math.floor(v*he),t.height=Math.floor(U*he),J===!0&&(t.style.width=v+"px",t.style.height=U+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(ce*he,et*he).floor()},this.setDrawingBufferSize=function(v,U,J){ce=v,et=U,he=J,t.width=Math.floor(v*J),t.height=Math.floor(U*J),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===Fn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(_e)},this.getViewport=function(v){return v.copy(at)},this.setViewport=function(v,U,J,W){v.isVector4?at.set(v.x,v.y,v.z,v.w):at.set(v,U,J,W),we.viewport(_e.copy(at).multiplyScalar(It()).round())},this.getScissor=function(v){return v.copy(pt)},this.setScissor=function(v,U,J,W){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,U,J,W),we.scissor(Ve.copy(pt).multiplyScalar(It()).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(v){we.setScissorTest(Ot=v)},this.setOpaqueSort=function(v){Oe=v},this.setTransparentSort=function(v){lt=v},this.getClearColor=function(v){return v.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,J=!0){let W=0;if(v){let q=!1;if(ue!==null){let Re=ue.texture.format;q=m.has(Re)}if(q){let Re=ue.texture.type,We=p.has(Re),Ce=N.getClearColor(),be=N.getClearAlpha(),Je=Ce.r,je=Ce.g,wt=Ce.b;We?(S[0]=Je,S[1]=je,S[2]=wt,S[3]=be,k.clearBufferuiv(k.COLOR,0,S)):(A[0]=Je,A[1]=je,A[2]=wt,A[3]=be,k.clearBufferiv(k.COLOR,0,A))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),N.dispose(),Te.dispose(),ie.dispose(),ht.dispose(),Ke.dispose(),E.dispose(),ge.dispose(),X.dispose(),Ae.dispose(),qe.dispose(),j.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ne),ve.removeEventListener("sessionend",Ge),Le.stop()};function it(v){v.preventDefault(),Bc("WebGLRenderer: Context Lost."),z=!0}function yt(){Bc("WebGLRenderer: Context Restored."),z=!1;let v=$e.autoReset,U=Ee.enabled,J=Ee.autoUpdate,W=Ee.needsUpdate,q=Ee.type;gt(),$e.autoReset=v,Ee.enabled=U,Ee.autoUpdate=J,Ee.needsUpdate=W,Ee.type=q}function Fe(v){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function T(v){let U=v.target;U.removeEventListener("dispose",T),_(U)}function _(v){L(v),Ke.remove(v)}function L(v){let U=Ke.get(v).programs;U!==void 0&&(U.forEach(function(J){j.releaseProgram(J)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,J,W,q,Re){U===null&&(U=ln);let We=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ce=un(v,U,J,W,q);we.setMaterial(W,We);let be=J.index,Je=1;if(W.wireframe===!0){if(be=X.getWireframeAttribute(J),be===void 0)return;Je=2}let je=J.drawRange,wt=J.attributes.position,Xe=je.start*Je,Et=(je.start+je.count)*Je;Re!==null&&(Xe=Math.max(Xe,Re.start*Je),Et=Math.min(Et,(Re.start+Re.count)*Je)),be!==null?(Xe=Math.max(Xe,0),Et=Math.min(Et,be.count)):wt!=null&&(Xe=Math.max(Xe,0),Et=Math.min(Et,wt.count));let C=Et-Xe;if(C<0||C===1/0)return;Ae.setup(q,W,Ce,J,be);let I,V=G;if(be!==null&&(I=y.get(be),V=Me,V.setIndex(I)),q.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*It()),V.setMode(k.LINES)):V.setMode(k.TRIANGLES);else if(q.isLine){let se=W.linewidth;se===void 0&&(se=1),we.setLineWidth(se*It()),q.isLineSegments?V.setMode(k.LINES):q.isLineLoop?V.setMode(k.LINE_LOOP):V.setMode(k.LINE_STRIP)}else q.isPoints?V.setMode(k.POINTS):q.isSprite&&V.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))V.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let se=q._multiDrawStarts,te=q._multiDrawCounts,Se=q._multiDrawCount,De=be?y.get(be).bytesPerElement:1,Dt=Ke.get(W).currentProgram.getUniforms();for(let At=0;At<Se;At++)Dt.setValue(k,"_gl_DrawID",At),V.render(se[At]/De,te[At])}else if(q.isInstancedMesh)V.renderInstances(Xe,C,q.count);else if(J.isInstancedBufferGeometry){let se=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,te=Math.min(J.instanceCount,se);V.renderInstances(Xe,C,te)}else V.render(Xe,C)};function K(v,U,J,W){H!==null&&v.isNodeMaterial&&H.setObject(W,v),bt===!0&&oe.setState(v,J,!1),v.transparent===!0&&v.side===Kn&&v.forceSinglePass===!1?(v.side=In,v.needsUpdate=!0,st(v,U,W),v.side=Ji,v.needsUpdate=!0,st(v,U,W),v.side=Kn):st(v,U,W)}this.compile=function(v,U,J=null){J===null&&(J=v),H!==null&&H.renderStart(v,U,J),R=ie.get(J),R.init(U),w.push(R),J.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),v!==J&&v.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),H!==null&&H.updateLights(R.state.lightsArray),nn=this.localClippingEnabled,bt=oe.init(this.clippingPlanes,nn),bt===!0&&oe.setGlobalState(this.clippingPlanes,U),H!==null&&Ee.render(R.state.shadowsArray,J,U);let W=new Set;return v.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Re=q.material;if(Re)if(Array.isArray(Re))for(let We=0;We<Re.length;We++){let Ce=Re[We];K(Ce,J,U,q),W.add(Ce)}else K(Re,J,U,q),W.add(Re)}),R=w.pop(),H!==null&&H.renderEnd(),W},this.compileAsync=function(v,U,J=null){let W=this.compile(v,U,J);return new Promise(q=>{function Re(){if(W.forEach(function(We){let be=Ke.get(We).currentProgram;(be===void 0||be.isReady())&&W.delete(We)}),W.size===0){q(v);return}setTimeout(Re,10)}Ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let de=null;function ze(v){de&&de(v)}function Ne(){Le.stop()}function Ge(){Le.start()}let Le=new Sd;Le.setAnimationLoop(ze),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(v){de=v,ve.setAnimationLoop(v),v===null?Le.stop():Le.start()},ve.addEventListener("sessionstart",Ne),ve.addEventListener("sessionend",Ge),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;H!==null&&H.renderStart(v,U);let J=ve.enabled===!0&&ve.isPresenting===!0,W=B!==null&&(ue===null||J)&&B.begin(D,ue);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,U,ue),R=ie.get(v,w.length),R.init(U),R.state.textureUnits=ht.getTextureUnits(),w.push(R),Vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Kt.setFromArrayCamera(U):ot.setFromProjectionMatrix(Vt,Zn,U.reversedDepth),nn=this.localClippingEnabled,bt=oe.init(this.clippingPlanes,nn),P=Te.get(v,x.length),P.init(),x.push(P),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){let We=D.xr.getDepthSensingMesh();We!==null&&Qe(We,U,-1/0,D.sortObjects)}Qe(v,U,0,D.sortObjects),P.finish(),H!==null&&H.updateLights(R.state.lightsArray),D.sortObjects===!0&&P.sort(Oe,lt),gn=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,gn&&N.addToRenderList(P,v),this.info.autoReset===!0&&this.info.reset(),bt===!0&&oe.beginShadows();let q=R.state.shadowsArray;if(Ee.render(q,v,U),bt===!0&&oe.endShadows(),(W&&B.hasRenderPass())===!1){let We=P.opaque,Ce=P.transmissive;if(R.setupLights(),U.isArrayCamera){let be=U.cameras;if(Ce.length>0)for(let Je=0,je=be.length;Je<je;Je++){let wt=be[Je];Pe(We,Ce,v,wt)}gn&&N.render(v);for(let Je=0,je=be.length;Je<je;Je++){let wt=be[Je];Ye(P,v,wt,wt.viewport)}}else Ce.length>0&&Pe(We,Ce,v,U),gn&&N.render(v),Ye(P,v,U)}ue!==null&&$===0&&(ht.updateMultisampleRenderTarget(ue),ht.updateRenderTargetMipmap(ue)),W&&B.end(D),v.isScene===!0&&v.onAfterRender(D,v,U),Ae.resetDefaultState(),ne=-1,re=null,w.pop(),w.length>0?(R=w[w.length-1],ht.setTextureUnits(R.state.textureUnits),bt===!0&&oe.setGlobalState(D.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?P=x[x.length-1]:P=null,H!==null&&H.renderEnd()};function Qe(v,U,J,W){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)J=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){let We=U.isArrayCamera?Kt:ot;if(!v.frustumCulled||v.intersectsFrustum(We)){W&&sn.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Vt);let Ce=ge.update(v),be=v.material;be.visible&&P.push(v,Ce,be,J,sn.z,null,U)}}else if(v.isMesh||v.isLine||v.isPoints){let We=U.isArrayCamera?Kt:ot;if(!v.frustumCulled||v.intersectsFrustum(We)){let Ce=ge.update(v),be=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),sn.copy(v.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),sn.copy(Ce.boundingSphere.center)),sn.applyMatrix4(v.matrixWorld).applyMatrix4(Vt)),Array.isArray(be)){let Je=Ce.groups;for(let je=0,wt=Je.length;je<wt;je++){let Xe=Je[je],Et=be[Xe.materialIndex];Et&&Et.visible&&P.push(v,Ce,Et,J,sn.z,Xe,U)}}else be.visible&&P.push(v,Ce,be,J,sn.z,null,U)}}}let Re=v.children;for(let We=0,Ce=Re.length;We<Ce;We++)Qe(Re[We],U,J,W)}function Ye(v,U,J,W){let{opaque:q,transmissive:Re,transparent:We}=v;R.setupLightsView(J),bt===!0&&oe.setGlobalState(D.clippingPlanes,J),W&&we.viewport(_e.copy(W)),q.length>0&&pe(q,U,J),Re.length>0&&pe(Re,U,J),We.length>0&&pe(We,U,J),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Pe(v,U,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){let Xe=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new Hn(1,1,{generateMipmaps:!0,type:Xe?oi:Fn,minFilter:Li,samples:Math.max(4,Ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let Re=R.state.transmissionRenderTarget[W.id],We=W.viewport||_e;Re.setSize(We.z*D.transmissionResolutionScale,We.w*D.transmissionResolutionScale);let Ce=D.getRenderTarget(),be=D.getActiveCubeFace(),Je=D.getActiveMipmapLevel();D.setRenderTarget(Re),D.getClearColor(le),ke=D.getClearAlpha(),ke<1&&D.setClearColor(16777215,.5),D.clear(),gn&&N.render(J);let je=D.toneMapping;D.toneMapping=xi;let wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),bt===!0&&oe.setGlobalState(D.clippingPlanes,W),pe(v,J,W),ht.updateMultisampleRenderTarget(Re),ht.updateRenderTargetMipmap(Re),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Et=0,C=U.length;Et<C;Et++){let I=U[Et],{object:V,geometry:se,material:te,group:Se}=I;if(te.side===Kn&&V.layers.test(W.layers)){let De=te.side;te.side=In,te.needsUpdate=!0,me(V,J,W,se,te,Se),te.side=De,te.needsUpdate=!0,Xe=!0}}Xe===!0&&(ht.updateMultisampleRenderTarget(Re),ht.updateRenderTargetMipmap(Re))}D.setRenderTarget(Ce,be,Je),D.setClearColor(le,ke),wt!==void 0&&(W.viewport=wt),D.toneMapping=je}function pe(v,U,J){let W=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Re=v.length;q<Re;q++){let We=v[q],{object:Ce,geometry:be,group:Je}=We,je=We.material;je.allowOverride===!0&&W!==null&&(je=W),Ce.layers.test(J.layers)&&me(Ce,U,J,be,je,Je)}}function me(v,U,J,W,q,Re){H!==null&&q.isNodeMaterial&&H.setObject(v,q),v.onBeforeRender(D,U,J,W,q,Re),v.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),q.onBeforeRender(D,U,J,W,v,Re),q.transparent===!0&&q.side===Kn&&q.forceSinglePass===!1?(q.side=In,q.needsUpdate=!0,D.renderBufferDirect(J,U,W,q,v,Re),q.side=Ji,q.needsUpdate=!0,D.renderBufferDirect(J,U,W,q,v,Re),q.side=Kn):D.renderBufferDirect(J,U,W,q,v,Re),v.onAfterRender(D,U,J,W,q,Re)}function ct(v){let U=0;for(let J of v)J.texture!==null&&U++;return U}function st(v,U,J){U.isScene!==!0&&(U=ln);let W=Ke.get(v),q=R.state.lights,Re=R.state.shadowsArray,We=q.state.version,Ce=j.getParameters(v,q.state,Re,U,J,R.state.lightProbeGridArray),be=j.getProgramCacheKey(Ce),Je=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let je=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=E.get(v.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Je===void 0&&(v.addEventListener("dispose",T),Je=new Map,W.programs=Je,W.programVariants=new Map);let wt=Je.get(be);if(wt!==void 0){if(W.currentProgram===wt&&W.lightsStateVersion===We)return Pt(v,Ce),wt}else Ce.uniforms=j.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,J,Ce),v.onBeforeCompile(Ce,D),wt=j.acquireProgram(Ce,be),Je.set(be,wt),W.uniforms=Ce.uniforms;let Xe=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Xe.clippingPlanes=oe.uniform),Pt(v,Ce),W.needsLights=Nn(v),W.lightsStateVersion=We,W.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.sunLights.value=q.state.sun,Xe.sunLightShadows.value=q.state.sunShadow,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.sunShadowMatrix.value=q.state.sunShadowMatrix,Xe.sunShadowCascade.value=q.state.sunShadowCascade,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=ct(R.state.lightProbeGridArray),W.currentProgram=wt,W.uniformsList=null,wt}function _t(v,U,J,W,q){let Re=Ke.get(v),We=Re.currentProgram.id+","+W+","+q,Ce=Re.programVariants.get(We);return Ce===void 0?(Ce=st(v,U,J),Re.programVariants.set(We,Ce)):(Re.currentProgram=Ce,Re.uniformsList=null,Re.outputColorSpace=W,Re.toneMapping=q),Ce}function Tt(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Js.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Pt(v,U){let J=Ke.get(v);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function un(v,U,J,W,q){U.isScene!==!0&&(U=ln),ht.resetTextureUnits();let Re=U.fog,We=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Ce=ue===null?D.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ft.workingColorSpace,be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Je=E.get(W.envMap||We,be),je=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,wt=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,C=!!J.morphAttributes.color,I=xi;W.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(I=D.toneMapping);let V=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=V!==void 0?V.length:0,te=Ke.get(W),Se=R.state.lights;if(bt===!0&&(nn===!0||v!==re)){let Qt=v===re&&W.id===ne;oe.setState(W,v,Qt)}let De=!1,Dt=!1;W.version===te.__version?te.needsLights&&te.lightsStateVersion!==Se.state.version||q.isBatchedMesh&&te.batching===!1||!q.isBatchedMesh&&te.batching===!0||q.isBatchedMesh&&te.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&te.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&te.instancing===!1||!q.isInstancedMesh&&te.instancing===!0||q.isSkinnedMesh&&te.skinning===!1||!q.isSkinnedMesh&&te.skinning===!0||q.isInstancedMesh&&te.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&te.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&te.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&te.instancingMorph===!1&&q.morphTexture!==null||te.envMap!==Je||W.fog===!0&&te.fog!==Re||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==oe.numPlanes||te.numIntersection!==oe.numIntersection)||te.vertexAlphas!==je||te.vertexTangents!==wt||te.morphTargets!==Xe||te.morphNormals!==Et||te.morphColors!==C||te.morphTargetsCount!==se||te.numLightProbeGrids!==ct(R.state.lightProbeGridArray)?De=!0:(te.outputColorSpace!==Ce||te.toneMapping!==I)&&(Dt=!0):(De=!0,te.__version=W.version);let At=te.currentProgram;(De===!0||Dt===!0)&&(At=Dt===!0?_t(W,U,q,Ce,I):st(W,U,q),H&&W.isNodeMaterial&&H.onUpdateProgram(W,At,te));let Lt=!1,jt=!1,Bt=!1,rt=At.getUniforms(),en=te.uniforms;if(we.useProgram(At.program)&&(Lt=!0,jt=!0,Bt=!0),W.id!==ne&&(ne=W.id,jt=!0),Lt||re!==v){we.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),rt.setValue(k,"projectionMatrix",v.projectionMatrix),rt.setValue(k,"viewMatrix",v.matrixWorldInverse);let cn=rt.map.cameraPosition;cn!==void 0&&cn.setValue(k,mn.setFromMatrixPosition(v.matrixWorld)),Ue.logarithmicDepthBuffer&&rt.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),re!==v&&(re=v,jt=!0,Bt=!0)}if(te.needsLights&&(Se.state.sunShadowMap.length>0&&rt.setValue(k,"sunShadowMap",Se.state.sunShadowMap,ht),Se.state.directionalShadowMap.length>0&&rt.setValue(k,"directionalShadowMap",Se.state.directionalShadowMap,ht),Se.state.spotShadowMap.length>0&&rt.setValue(k,"spotShadowMap",Se.state.spotShadowMap,ht),Se.state.pointShadowMap.length>0&&rt.setValue(k,"pointShadowMap",Se.state.pointShadowMap,ht)),q.isSkinnedMesh){rt.setOptional(k,q,"bindMatrix"),rt.setOptional(k,q,"bindMatrixInverse");let Qt=q.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),rt.setValue(k,"boneTexture",Qt.boneTexture,ht))}q.isBatchedMesh&&(rt.setOptional(k,q,"batchingTexture"),rt.setValue(k,"batchingTexture",q._matricesTexture,ht),rt.setOptional(k,q,"batchingIdTexture"),rt.setValue(k,"batchingIdTexture",q._indirectTexture,ht),rt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&rt.setValue(k,"batchingColorTexture",q._colorsTexture,ht));let Un=J.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ae.update(q,J,At),(jt||te.receiveShadow!==q.receiveShadow)&&(te.receiveShadow=q.receiveShadow,rt.setValue(k,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=G_()),jt){if(rt.setValue(k,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&Be(en,Bt),Re&&W.fog===!0&&ye.refreshFogUniforms(en,Re),ye.refreshMaterialUniforms(en,W,he,et,R.state.transmissionRenderTarget[v.id]),te.needsLights&&te.numLightProbeGrids>0){let Qt=b,cn=0;for(let qn of R.state.lightProbeGridArray)qn.texture!==null&&(Qt.textures[cn]=qn.texture,Qt.min[cn]=qn.boundingBox.min,Qt.max[cn]=qn.boundingBox.max,Qt.resolution[cn]=qn.resolution,cn++);for(let qn in Qt)Qt[qn].length=cn;en.probesSH.value=Qt.textures,en.probesMin.value=Qt.min,en.probesMax.value=Qt.max,en.probesResolution.value=Qt.resolution}Js.upload(k,Tt(te),en,ht)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Js.upload(k,Tt(te),en,ht),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(k,"center",q.center),rt.setValue(k,"modelViewMatrix",q.modelViewMatrix),rt.setValue(k,"normalMatrix",q.normalMatrix),rt.setValue(k,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let Qt=W.uniformsGroups;for(let cn=0,qn=Qt.length;cn<qn;cn++){let sr=Qt[cn];qe.update(sr,At),qe.bind(sr,At)}}return At}function Be(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Nn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(v,U,J){let W=Ke.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ke.get(v.texture).__webglTexture=U,Ke.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let J=Ke.get(v);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,J=0){ue=v,ee=U,$=J;let W=null,q=!1,Re=!1;if(v){let Ce=Ke.get(v);if(Ce.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(k.FRAMEBUFFER,Ce.__webglFramebuffer),_e.copy(v.viewport),Ve.copy(v.scissor),dt=v.scissorTest,we.viewport(_e),we.scissor(Ve),we.setScissorTest(dt),ne=-1;return}else if(Ce.__webglFramebuffer===void 0)ht.setupRenderTarget(v);else if(Ce.__hasExternalTextures)ht.rebindTextures(v,Ke.get(v.texture).__webglTexture,Ke.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let je=v.depthTexture;if(Ce.__boundDepthTexture!==je){if(je!==null&&Ke.has(je)&&(v.width!==je.image.width||v.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(v)}}let be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Re=!0);let Je=Ke.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Je[U])?W=Je[U][J]:W=Je[U],q=!0):v.samples>0&&ht.useMultisampledRTT(v)===!1?W=Ke.get(v).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[J]:W=Je,_e.copy(v.viewport),Ve.copy(v.scissor),dt=v.scissorTest}else _e.copy(at).multiplyScalar(he).floor(),Ve.copy(pt).multiplyScalar(he).floor(),dt=Ot;if(J!==0&&(W=Q),we.bindFramebuffer(k.FRAMEBUFFER,W)&&we.drawBuffers(v,W),we.viewport(_e),we.scissor(Ve),we.setScissorTest(dt),q){let Ce=Ke.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,J)}else if(Re){let Ce=U;for(let be=0;be<v.textures.length;be++){let Je=Ke.get(v.textures[be]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+be,Je.__webglTexture,J,Ce)}}else if(v!==null&&J!==0){let Ce=Ke.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ce.__webglTexture,J)}ne=-1};function bn(v){let U=Ke.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=Ue.textureFormatReadable(v.format),U.__typeReadable=Ue.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,J,W,q,Re,We,Ce=0){if(!(v&&v.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ke.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&We!==void 0&&(be=be[We],Array.isArray(be)&&(be=be[0])),be){we.bindFramebuffer(k.FRAMEBUFFER,be);try{let Je=v.textures[Ce],je=Je.format,wt=Je.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ce);let Xe=bn(Je);if(Xe.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-W&&J>=0&&J<=v.height-q&&k.readPixels(U,J,W,q,fe.convert(je),fe.convert(wt),Re)}finally{let Je=ue!==null?Ke.get(ue).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(v,U,J,W,q,Re,We,Ce=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ke.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&We!==void 0&&(be=be[We],Array.isArray(be)&&(be=be[0])),be)if(U>=0&&U<=v.width-W&&J>=0&&J<=v.height-q){we.bindFramebuffer(k.FRAMEBUFFER,be);let Je=v.textures[Ce],je=Je.format,wt=Je.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ce);let Xe=bn(Je);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Et),k.bufferData(k.PIXEL_PACK_BUFFER,Re.byteLength,k.STREAM_READ),k.readPixels(U,J,W,q,fe.convert(je),fe.convert(wt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let C=ue!==null?Ke.get(ue).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,C);let I=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wu(k,I,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Et),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Re),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Et),k.deleteSync(I),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,J=0){let W=Math.pow(2,-J),q=Math.floor(v.image.width*W),Re=Math.floor(v.image.height*W),We=U!==null?U.x:0,Ce=U!==null?U.y:0;ht.setTexture2D(v,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,We,Ce,q,Re),we.unbindTexture()},this.copyTextureToTexture=function(v,U,J=null,W=null,q=0,Re=0){let We,Ce,be,Je,je,wt,Xe,Et,C,I=v.isCompressedTexture?v.mipmaps[Re]:v.image;if(J!==null)We=J.max.x-J.min.x,Ce=J.max.y-J.min.y,be=J.isBox3?J.max.z-J.min.z:1,Je=J.min.x,je=J.min.y,wt=J.isBox3?J.min.z:0;else{let rt=Math.pow(2,-q);We=Math.floor(I.width*rt),Ce=Math.floor(I.height*rt),v.isDataArrayTexture?be=I.depth:v.isData3DTexture?be=Math.floor(I.depth*rt):be=1,Je=0,je=0,wt=0}W!==null?(Xe=W.x,Et=W.y,C=W.z):(Xe=0,Et=0,C=0);let V=fe.convert(U.format),se=fe.convert(U.type),te;U.isData3DTexture?(ht.setTexture3D(U,0),te=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ht.setTexture2DArray(U,0),te=k.TEXTURE_2D_ARRAY):(ht.setTexture2D(U,0),te=k.TEXTURE_2D),we.activeTexture(k.TEXTURE0),we.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),we.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),we.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let Se=we.getParameter(k.UNPACK_ROW_LENGTH),De=we.getParameter(k.UNPACK_IMAGE_HEIGHT),Dt=we.getParameter(k.UNPACK_SKIP_PIXELS),At=we.getParameter(k.UNPACK_SKIP_ROWS),Lt=we.getParameter(k.UNPACK_SKIP_IMAGES);we.pixelStorei(k.UNPACK_ROW_LENGTH,I.width),we.pixelStorei(k.UNPACK_IMAGE_HEIGHT,I.height),we.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),we.pixelStorei(k.UNPACK_SKIP_ROWS,je),we.pixelStorei(k.UNPACK_SKIP_IMAGES,wt);let jt=v.isDataArrayTexture||v.isData3DTexture,Bt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let rt=Ke.get(v),en=Ke.get(U),Un=Ke.get(rt.__renderTarget),Qt=Ke.get(en.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,Un.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let cn=0;cn<be;cn++)jt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.get(v).__webglTexture,q,wt+cn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.get(U).__webglTexture,Re,C+cn)),k.blitFramebuffer(Je,je,Je+We,je+Ce,Xe,Et,Xe+We,Et+Ce,k.DEPTH_BUFFER_BIT,k.NEAREST);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||v.isRenderTargetTexture||Ke.has(v)){let rt=Ke.get(v),en=Ke.get(U);we.bindFramebuffer(k.READ_FRAMEBUFFER,F),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Y);for(let Un=0;Un<be;Un++)jt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rt.__webglTexture,q,wt+Un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rt.__webglTexture,q),Bt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,Re,C+Un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,Re),q!==0?k.blitFramebuffer(Je,je,Je+We,je+Ce,Xe,Et,Xe+We,Et+Ce,k.COLOR_BUFFER_BIT,k.NEAREST):Bt?k.copyTexSubImage3D(te,Re,Xe,Et,C+Un,Je,je,We,Ce):k.copyTexSubImage2D(te,Re,Xe,Et,Je,je,We,Ce);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Bt?v.isDataTexture||v.isData3DTexture?k.texSubImage3D(te,Re,Xe,Et,C,We,Ce,be,V,se,I.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(te,Re,Xe,Et,C,We,Ce,be,V,I.data):k.texSubImage3D(te,Re,Xe,Et,C,We,Ce,be,V,se,I):v.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Re,Xe,Et,We,Ce,V,se,I.data):v.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Re,Xe,Et,I.width,I.height,V,I.data):k.texSubImage2D(k.TEXTURE_2D,Re,Xe,Et,We,Ce,V,se,I);we.pixelStorei(k.UNPACK_ROW_LENGTH,Se),we.pixelStorei(k.UNPACK_IMAGE_HEIGHT,De),we.pixelStorei(k.UNPACK_SKIP_PIXELS,Dt),we.pixelStorei(k.UNPACK_SKIP_ROWS,At),we.pixelStorei(k.UNPACK_SKIP_IMAGES,Lt),Re===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(te),we.unbindTexture()},this.initRenderTarget=function(v){Ke.get(v).__webglFramebuffer===void 0&&ht.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ht.setTextureCube(v,0):v.isData3DTexture?ht.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ht.setTexture2DArray(v,0):ht.setTexture2D(v,0),we.unbindTexture()},this.resetState=function(){ee=0,$=0,ue=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}};var ca=Math.PI/180,Qi=9.81,ah=0,Qs=1,Ud={half:16},Gt={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};Gt.height=Gt.steps*Gt.rise;Gt.length=Gt.steps*Gt.run;var nt={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},Qn={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,Gt.height,Gt.z],attacker:[-5.2,Gt.height+1.5,Gt.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,nt.floor,nt.z],attacker:[-6.2,nt.floor+1.5,nt.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};function Ln(i,e){if(e>nt.z-30){let t=e-nt.z;return Math.abs(t)>nt.halfWidth||i<-nt.back||i>nt.wall?0:i<0?nt.floor:Math.abs(t)<nt.open?nt.floor+nt.sill:nt.top}if(e>Gt.z-30){let t=e-Gt.z;return Math.abs(t)>Gt.halfWidth||i<-Gt.back||i>=Gt.length?0:i<=0?Gt.height:Math.max(0,Gt.height-(Math.floor(i/Gt.run)+1)*Gt.rise)}return 0}var qt=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],tt=Object.fromEntries(qt.map((i,e)=>[i.name,e])),ms=.44,er=.425,oh=-.08,lh=.1,V_=.205,Dd=.85,W_=.35,ch=.915,wl={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},Nd={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},X_=1.2,dh=[0,5,30,80],q_=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),Y_={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},Z_={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function Ui(i,e,t,n){let s=Math.sin(n/2);return[i*s,e*s,t*s,Math.cos(n/2)]}function hh(i,e){return[i[3]*e[0]+i[0]*e[3]+i[1]*e[2]-i[2]*e[1],i[3]*e[1]-i[0]*e[2]+i[1]*e[3]+i[2]*e[0],i[3]*e[2]+i[0]*e[1]-i[1]*e[0]+i[2]*e[3],i[3]*e[3]-i[0]*e[0]-i[1]*e[1]-i[2]*e[2]]}function jn(i,e,t){let n=i[0],s=i[1],r=i[2],a=i[3],o=2*(s*e[2]-r*e[1]),l=2*(r*e[0]-n*e[2]),c=2*(n*e[1]-s*e[0]);return t[0]=e[0]+a*o+(s*c-r*l),t[1]=e[1]+a*l+(r*o-n*c),t[2]=e[2]+a*c+(n*l-s*o),t}var ha=i=>[-i[0],-i[1],-i[2],i[3]],Wt=(i,e,t)=>Math.max(e,Math.min(t,i));function ua(i,e,t){let n=Math.hypot(i,e);return n>t?[i*t/n,e*t/n]:[i,e]}function uh(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Fd(i){let e=new i.JoltSettings,t=new i.ObjectLayerPairFilterTable(2);t.EnableCollision(ah,Qs),t.EnableCollision(Qs,Qs);let n=new i.BroadPhaseLayerInterfaceTable(2,2);n.MapObjectToBroadPhaseLayer(ah,new i.BroadPhaseLayer(0)),n.MapObjectToBroadPhaseLayer(Qs,new i.BroadPhaseLayer(1)),e.mObjectLayerPairFilter=t,e.mBroadPhaseLayerInterface=n,e.mObjectVsBroadPhaseLayerFilter=new i.ObjectVsBroadPhaseLayerFilterTable(n,2,t,2);let s=new i.JoltInterface(e),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new i.Quat(0,0,0,1),l=new i.Vec3(0,0,0),c=new i.RVec3(0,0,0),h=new i.Quat(0,0,0,1),f=[];function u(T,_,L,K,de=.85){let ze=[(L[0]+K[0])/2,(L[1]+K[1])/2,(L[2]+K[2])/2],Ne=[(K[0]-L[0])/2,(K[1]-L[1])/2,(K[2]-L[2])/2],Ge=new i.BodyCreationSettings(new i.BoxShape(new i.Vec3(Ne[0],Ne[1],Ne[2]),Math.min(.02,Ne[0]*.5,Ne[1]*.5,Ne[2]*.5)),new i.RVec3(ze[0],ze[1],ze[2]),o,i.EMotionType_Static,ah);Ge.mFriction=de,Ge.mRestitution=.03,a.AddBody(a.CreateBody(Ge).GetID(),i.EActivation_DontActivate),_&&f.push({c:ze,h:Ne,kind:_,level:T})}u("all",null,[-50,-1,-40],[50,0,190]);{let T=Gt.z-Gt.halfWidth,_=Gt.z+Gt.halfWidth;u("stairs","landing",[-Gt.back,0,T],[0,Gt.height,_]);for(let L=0;L<Gt.steps-1;L++)u("stairs","step",[L*Gt.run,0,T],[(L+1)*Gt.run,Gt.height-(L+1)*Gt.rise,_],.13);u("stairs","wall",[-Gt.back,0,T-.3],[Gt.length+3,Gt.height+2.6,T])}let d={tiles:[],panes:[],frame:[]};{let T=nt.z-nt.halfWidth,_=nt.z+nt.halfWidth,L=nt.floor;u("window","building",[-nt.back,0,T],[nt.wall,L,_]),u("window","wall",[0,L,T],[nt.wall,nt.top,nt.z-nt.open]),u("window","wall",[0,nt.lintel,nt.z-nt.open],[nt.wall,nt.top,nt.z+nt.open]),u("window","sill",[0,L,nt.z-nt.open],[nt.wall,L+nt.sill,nt.z+nt.open]);let K=nt.glassX,de=nt.z-nt.panes*nt.pane/2,ze=nt.glassY,Ne=nt.panes*nt.pane,Ge=.035;for(let Ye=0;Ye<=nt.panes;Ye++)u("window","frame",[K+Ye*nt.pane-Ge,ze-.09,de-Ge],[K+Ye*nt.pane+Ge,ze-.012,de+Ne+Ge]),u("window","frame",[K-Ge,ze-.09,de+Ye*nt.pane-Ge],[K+Ne+Ge,ze-.012,de+Ye*nt.pane+Ge]);for(let[Ye,Pe]of[[K,de],[K+Ne,de],[K,de+Ne],[K+Ne,de+Ne]])u("window","frame",[Ye-.05,0,Pe-.05],[Ye+.05,ze-.09,Pe+.05]);let Le=uh(99),Qe=(Ye,Pe,pe,me,ct,st)=>{let _t=pe-Ye,Tt=me-Pe;if(ct===0||_t<.3&&Tt<.3){st.push([Ye,Pe,pe,me]);return}let Pt=.32+.36*Le();_t>Tt?(Qe(Ye,Pe,Ye+_t*Pt,me,ct-1,st),Qe(Ye+_t*Pt,Pe,pe,me,ct-1,st)):(Qe(Ye,Pe,pe,Pe+Tt*Pt,ct-1,st),Qe(Ye,Pe+Tt*Pt,pe,me,ct-1,st))};for(let Ye=0;Ye<nt.panes;Ye++)for(let Pe=0;Pe<nt.panes;Pe++){let me=K+Ye*nt.pane+.04,ct=de+Pe*nt.pane+.04,st={broken:!1,min:[me-.04,ct-.04],max:[me+nt.pane-.04,ct+nt.pane-.04],y:ze,tiles:[]},_t=[];Qe(me,ct,me+nt.pane-2*.04,ct+nt.pane-2*.04,3,_t);for(let Tt of _t){let Pt=[(Tt[2]-Tt[0])/2,.007,(Tt[3]-Tt[1])/2],un=[(Tt[0]+Tt[2])/2,ze,(Tt[1]+Tt[3])/2],Be=new i.BodyCreationSettings(new i.BoxShape(new i.Vec3(Pt[0],Pt[1],Pt[2]),.002),new i.RVec3(un[0],un[1],un[2]),o,i.EMotionType_Static,Qs);Be.mAllowDynamicOrKinematic=!0,Be.mFriction=.5,Be.mRestitution=.15,Be.mOverrideMassProperties=i.EOverrideMassProperties_CalculateInertia,Be.mMassPropertiesOverride.mMass=Math.max(.15,Pt[0]*Pt[2]*4*12);let Nn=a.CreateBody(Be),bn=new i.BodyID(Nn.GetID().GetIndexAndSequenceNumber());a.AddBody(bn,i.EActivation_DontActivate),st.tiles.push(d.tiles.length),d.tiles.push({id:bn,home:un,h:Pt})}d.panes.push(st)}}function g(T,_){T.broken=!0,ce.glass++;for(let L of T.tiles){let K=d.tiles[L];a.SetMotionType(K.id,i.EMotionType_Dynamic,i.EActivation_Activate),l.Set(_[0]*.45+(lt()-.5)*2.2,_[1]*.5-lt()*1.2,_[2]*.45+(lt()-.5)*2.2);let de=new i.Vec3((lt()-.5)*14,(lt()-.5)*6,(lt()-.5)*14);a.SetLinearAndAngularVelocity(K.id,l,de),i.destroy(de)}ot.push({type:"glass",pos:[(T.min[0]+T.max[0])/2,T.y,(T.min[1]+T.max[1])/2]})}function M(){for(let T of d.tiles)a.SetMotionType(T.id,i.EMotionType_Static,i.EActivation_DontActivate),c.Set(T.home[0],T.home[1],T.home[2]),a.SetPositionAndRotation(T.id,c,o,i.EActivation_DontActivate);for(let T of d.panes)T.broken=!1}let m=new i.Skeleton;for(let T of qt)m.AddJoint(new i.JPHString(T.name,T.name.length),T.parent);let p=new i.RagdollSettings;p.mSkeleton=m,p.mParts.resize(qt.length),qt.forEach((T,_)=>{let L=p.mParts.at(_);if(L.SetShape(new i.CapsuleShape(T.hh,T.r)),L.mPosition=new i.RVec3(T.c[0],T.c[1],T.c[2]),L.mRotation=o,L.mMotionType=i.EMotionType_Dynamic,L.mMotionQuality=i.EMotionQuality_LinearCast,L.mObjectLayer=Qs,L.mFriction=.7,L.mRestitution=.05,L.mAngularDamping=.3,L.mOverrideMassProperties=i.EOverrideMassProperties_CalculateInertia,L.mMassPropertiesOverride.mMass=T.mass,T.strength=T.mass*26,!(T.parent<0))if(T.type==="st"){let K=new i.SwingTwistConstraintSettings;K.mSpace=i.EConstraintSpace_WorldSpace,K.mPosition1=K.mPosition2=new i.RVec3(T.j[0],T.j[1],T.j[2]),K.mTwistAxis1=K.mTwistAxis2=new i.Vec3(T.twist[0],T.twist[1],T.twist[2]),K.mPlaneAxis1=K.mPlaneAxis2=new i.Vec3(1,0,0),K.mNormalHalfConeAngle=K.mPlaneHalfConeAngle=T.cone*ca,K.mTwistMinAngle=-T.tw*ca,K.mTwistMaxAngle=T.tw*ca,K.mMaxFrictionTorque=T.mass*.4;for(let de of[K.mSwingMotorSettings,K.mTwistMotorSettings])de.mSpringSettings.mFrequency=8,de.mSpringSettings.mDamping=1,de.mMinTorqueLimit=-T.strength,de.mMaxTorqueLimit=T.strength;L.mToParent=K}else{let K=new i.HingeConstraintSettings;K.mSpace=i.EConstraintSpace_WorldSpace,K.mPoint1=K.mPoint2=new i.RVec3(T.j[0],T.j[1],T.j[2]),K.mHingeAxis1=K.mHingeAxis2=new i.Vec3(0,0,1),K.mNormalAxis1=K.mNormalAxis2=new i.Vec3(1,0,0),K.mLimitsMin=T.min*ca,K.mLimitsMax=T.max*ca,K.mMaxFrictionTorque=T.mass*.4,K.mMotorSettings.mSpringSettings.mFrequency=8,K.mMotorSettings.mSpringSettings.mDamping=1,K.mMotorSettings.mMinTorqueLimit=-T.strength,K.mMotorSettings.mMaxTorqueLimit=T.strength,L.mToParent=K}});let S=0,A=qt.map(T=>(S+=T.mass,T.mass));p.DisableParentChildCollisions(),p.CalculateBodyIndexToConstraintIndex();let b=p.CreateRagdoll(0,0,r);b.AddToPhysicsSystem(i.EActivation_Activate);let P=qt.map((T,_)=>new i.BodyID(b.GetBodyID(_).GetIndexAndSequenceNumber())),R=qt.map((T,_)=>{if(T.parent<0)return null;let L=b.GetConstraint(_-1);return T.type==="st"?i.castObject(L,i.SwingTwistConstraint):i.castObject(L,i.HingeConstraint)}),x=qt.length,w=(T,_)=>{let L=a.GetPosition(P[T]);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_},B=(T,_)=>{let L=a.GetLinearVelocity(P[T]);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_},D=(T,_)=>{let L=a.GetRotation(P[T]);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_[3]=L.GetW(),_},z=(T,_)=>{let L=a.GetAngularVelocity(P[T]);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_},H=T=>w(T,[0,0,0]),Q=(T,_)=>{let L=a.GetPosition(T);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_},F=(T,_)=>{let L=a.GetRotation(T);return _[0]=L.GetX(),_[1]=L.GetY(),_[2]=L.GetZ(),_[3]=L.GetW(),_};function Y(T,_,L,K,de){l.Set(_,L,K),de?(c.Set(de[0],de[1],de[2]),a.AddForce(P[T],l,c,i.EActivation_Activate)):a.AddForce(P[T],l,i.EActivation_Activate)}function ee(T,_,L,K,de){l.Set(_,L,K),de?(c.Set(de[0],de[1],de[2]),a.AddImpulse(P[T],l,c)):a.AddImpulse(P[T],l)}let $=new Float32Array(x).fill(1),ue=new Float32Array(x),ne=new Float32Array(x).fill(-1),re=new Float32Array(x*3),_e=new Float32Array(x);function Ve(T,_){h.Set(_[0],_[1],_[2],_[3]),R[T].SetTargetOrientationCS(h)}let dt=1,le=(T,_,L,K=0)=>hh(hh(Ui(0,1,0,T),Ui(0,0,1,_*L)),Ui(1,0,0,K*L*dt));function ke(){for(let T=1;T<x;T++){let _=$[T]*(1-ue[T]);if(Math.abs(_-ne[T])<.02&&!(_===0&&ne[T]!==0))continue;ne[T]=_;let L=qt[T],K=R[T],de=_>.02?i.EMotorState_Position:i.EMotorState_Off,ze=L.strength*_,Ne=2.5+5.5*_;if(L.type==="st"){for(let Ge of[K.GetSwingMotorSettings(),K.GetTwistMotorSettings()])Ge.mMinTorqueLimit=-ze,Ge.mMaxTorqueLimit=ze,Ge.mSpringSettings.mFrequency=Ne;K.SetSwingMotorState(de),K.SetTwistMotorState(de)}else{let Ge=K.GetMotorSettings();Ge.mMinTorqueLimit=-ze,Ge.mMaxTorqueLimit=ze,Ge.mSpringSettings.mFrequency=Ne,K.SetMotorState(de)}}}let ce={},et=[],he=[{shin:tt.lleg_l,thigh:tt.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0},{shin:tt.lleg_r,thigh:tt.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0}],Oe={},lt=uh(1),at=0,pt=Qn.yard,Ot="yard",ot=[],Kt=[];function bt(){qt.forEach((T,_)=>{c.Set(pt.start[0]+T.c[0],pt.start[1]+T.c[1]-.03,pt.start[2]+T.c[2]),a.SetPositionAndRotation(P[_],c,o,i.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(P[_],l,l)}),$.fill(1),ue.fill(0),ne.fill(-1),re.fill(0),_e.fill(0),et.length=0,M(),lt=uh(1234+77*at++),Object.assign(ce,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:pt.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Oe,{support:1,hT:pt.start[1]+ch,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[lt()*6.28,lt()*6.28,lt()*6.28,lt()*6.28],lastCom:[pt.start[0],pt.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let T of he)T.swing=!1,T.hurt=0,T.broken=0,T.kneeDown=!1,T.planted=[pt.start[0],pt.start[2]+T.side*lh],T.t=0;ke()}function nn(T){ce.alive&&(ce.alive=!1,ce.diedAt=ce.time,ce.outcome=T,Kt.push({type:"dead",cause:T,pos:H(tt.head),time:ce.time}))}function Vt(){ce.ko||!ce.alive||(ce.ko=!0,Kt.push({type:"out",pos:H(tt.head)}))}function mn(T,_){let L=qt[T].zone,K=qt[T].side===1?"_l":"_r";if(L==="head")return _[0]<-.45?_[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:_[1]<-.55?[["jaw",1]]:[["skull",1]];if(T===tt.chest){let de=_[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(_[2])>.55||_[1]>.5)&&de.push(["collarbone"+(_[2]>=0?"_l":"_r"),.9]),de}return T===tt.pelvis?_[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:L==="arm"?qt[qt[T].parent].zone==="arm"?_[1]<-.35?[["wrist"+K,1]]:[["forearm"+K,1]]:_[1]>.5?[["humerus"+K,.8],["collarbone"+K,.8]]:[["humerus"+K,1]]:L==="thigh"?[["femur"+K,1]]:_[1]>.35?[["kneecap"+K,1]]:_[1]<-.5?[["ankle"+K,1]]:[["tibia"+K,1]]}function sn(T,_,L,K){let de=T.split("_")[0],ze=Nd[de];for(;_>0&&!ze[_-1];)_--;let Ne=ce.bones[T]||0;if(_<=Ne)return 0;ce.bones[T]=_;let Ge=T.endsWith("_l")?1:T.endsWith("_r")?-1:0;Kt.push({type:"injury",bone:T,base:de,side:Ge,level:_,was:Ne,pos:[L[0],L[1],L[2]],cause:K});let Le=Ge===1?tt.uarm_l:tt.uarm_r,Qe=Ge===1?tt.larm_l:tt.larm_r,Ye=Pe=>{ce.stun=Math.min(1.6,ce.stun+Pe)};if(de==="femur"||de==="tibia"||de==="kneecap"||de==="ankle"){let Pe=he[Ge===1?0:1];Pe.hurt=Math.min(1,Math.max(Pe.hurt+.15,_===2?.8:_===3?1:0)),Pe.broken=Math.max(Pe.broken,_),ue[Pe.thigh]=Math.max(ue[Pe.thigh],Pe.hurt*.5),ue[Pe.shin]=Math.max(ue[Pe.shin],Pe.hurt*.6),Oe.legWound=Math.max(Oe.legWound,Pe.hurt),_>=2&&ce.mode==="balance"&&(Oe.buckle=.24,Oe.buckleDip=.3)}else if(de==="humerus")_>=2&&(ue[Le]=.9,ue[Qe]=Math.max(ue[Qe],.6));else if(de==="forearm"||de==="wrist")_>=2&&(ue[Qe]=.9);else if(de==="collarbone")_>=2&&(ue[Le]=Math.max(ue[Le],.7));else if(de==="ribs")Ye([0,.08,.22,.4][_]),_===3&&et.push({part:tt.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(de==="nose")Ye(.1),_>=2&&et.push({part:tt.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(de==="jaw")Ye(.12*_);else if(de==="skull")_===3?nn("Skull shattered"):_===2&&(Ye(.5),Vt());else if(de==="neck")_>=2?nn("Broken neck"):Ye(.3);else if(de==="spine"){if(_>=2){ce.paralysed=!0;for(let Pe of he)Pe.hurt=1,ue[Pe.thigh]=1,ue[Pe.shin]=1}}else if(de==="pelvis"&&_>=2){ce.cantRise=!0;for(let Pe of he)Pe.hurt=Math.max(Pe.hurt,.5)}return _}function ln(T,_,L,K){let de=Nd[T.split("_")[0]];ce.bones[T]&&(_*=1.15),_*=.85+.3*lt();let ze=de[2]&&_>=de[2]?3:_>=de[1]?2:_>=de[0]?1:0;return ze?sn(T,ze,L,K):0}let gn=()=>!ce.paralysed&&!ce.cantRise&&!(he[0].broken>=3||he[1].broken>=3)&&!(he[0].broken>=2&&he[1].broken>=2),It=[0,0,0,1],k=[0,0,0],xt=[0,0,0];function Ut(T,_,L,K){if(ce.done)return null;let de=qt[T],ze=H(tt.chest)[1],Ne=H(tt.head)[1],Le=de.zone==="chest"&&_[1]-ze>.13||de.zone==="head"&&Ne-_[1]>.06?"neck":de.zone;if(ce.hits++,ce.mode==="fall"&&(ce.fallHits++,Ue[1]-Ln(Ue[0],Ue[2])>1.2&&ce.airHits++),K.impulse>200)for(let[me,ct]of[[T,.5],[tt.chest,.3],[tt.pelvis,.2]])ee(me,L[0]*K.impulse*ct,L[1]*K.impulse*ct,L[2]*K.impulse*ct,me===T?_:null);else ee(T,L[0]*K.impulse,L[1]*K.impulse,L[2]*K.impulse,_);for(let me=0;me<x;me++)_e[me]=.12;w(T,xt),D(T,It);let Qe=jn(ha(It),[_[0]-xt[0],_[1]-xt[1],_[2]-xt[2]],[0,0,0]);if(K.bleed>0){let me=K.kind==="blunt";et.push({part:T,zone:Le,at:Qe,arterial:!me&&(Le==="neck"||Le==="thigh"),rate:me?1.6:Y_[Le]*K.bleed,left:me?7:Z_[Le]*K.bleed})}ce.stun=Math.min(1.6,ce.stun+K.stun*(Le==="head"?2.2:Le==="neck"?1.4:1)),Le==="head"&&K.kind==="ballistic"?(nn("Headshot"),$.fill(0)):Le==="head"&&ce.stun>1&&Vt();let Ye=[Qe[0]/de.r,Qe[1]/(de.hh+de.r),Qe[2]/de.r];if(K.kind==="ballistic"){let me=K.impulse>60,ct=Le==="neck"?"neck":Le==="head"?"skull":mn(T,Ye)[0][0],st=ct.split("_")[0],[_t,Tt]=st==="skull"?[0,1]:st==="neck"?[me?.8:.9,0]:st==="spine"?[me?.5:.65,0]:q_.has(st)?me?[.1,.6]:[.25,.25]:st==="pelvis"?me?[.45,.2]:[.75,.05]:me?[.2,.3]:[.45,.1],Pt=lt();Pt>=_t&&sn(ct,Pt>1-Tt?3:2,_,"shot")}else{let me=(K.impulse-45)/19;if(Le==="neck")ln("neck",me*.6,_,"blow");else for(let[ct,st]of mn(T,Ye))ln(ct,me*st,_,"blow")}if(Le==="thigh"||Le==="shin"){let me=he[de.side===1?0:1];me.hurt=Math.min(1,me.hurt+(K.kind==="ballistic"?.7:.45)*(K.bleed>1.5||K.impulse>150?1.4:1)),ue[me.thigh]=Math.max(ue[me.thigh],me.hurt*.5),ue[me.shin]=Math.max(ue[me.shin],me.hurt*.6),Oe.legWound=Math.max(Oe.legWound,me.hurt)}if(Le==="arm"){ue[T]=.9;let me=qt.findIndex(ct=>ct.parent===T);me>0&&(ue[me]=.9)}if(K.kind==="ballistic"){let me=Math.hypot(L[0],L[2])||1,ct={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[Le],st=(38+34*lt())*ct*(K.impulse>60?.5:1),_t=(lt()-.5)*.35,Tt=Wt(((_[0]-xt[0])*Oe.hz+(_[2]-xt[2])*-Oe.hx)/.12,-1,1)*.65,Pt=L[0]/me-Oe.hz*Tt-L[2]/me*_t,un=L[2]/me+Oe.hx*Tt+L[0]/me*_t,Be=Math.hypot(Pt,un)||1;Oe.reel=[Pt/Be*st,un/Be*st],Oe.reelT=.16}ce.mode==="balance"&&(Oe.buckle=.22,Oe.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[Le]||.04)*(K.kind==="ballistic"?1:.6)),Oe.flinch=.2,Oe.clutch=Le,Oe.clutchEnd=K.bleed>0?1e9:Math.max(Oe.clutchEnd<1e8?0:Oe.clutchEnd,ce.clock+.9+K.stun*4);let Pe=(_[0]-xt[0])*Oe.hz+(_[2]-xt[2])*-Oe.hx,pe=Le==="arm"?-de.side:qt[T].side||(Pe>=0?1:-1);if(ue[pe===1?tt.uarm_l:tt.uarm_r]>.5&&(pe=-pe),Oe.clutchArm=Le==="neck"||Le==="head"?0:pe,Le==="gut"&&K.kind==="ballistic"&&K.impulse<60&&(Oe.lookDown=1.1),K.kind==="ballistic"&&Oe.fleeAt>1e8){Oe.fleeAt=ce.time+.7+lt()*.7+Oe.lookDown;let me=(lt()-.5)*1.3,ct=Math.hypot(L[0],L[2])||1,st=L[0]/ct,_t=L[2]/ct;Oe.fleeDir=[st*Math.cos(me)-_t*Math.sin(me),st*Math.sin(me)+_t*Math.cos(me)]}return Kt.push({type:"hit",zone:Le==="thigh"||Le==="shin"?"leg":Le,part:T,pos:_,tool:K,fatal:!ce.alive}),Le}let Ue=[0,0,0],we=[0,0,0],$e=[0,0,0,1],Ke=[0,0,0],ht=[0,0,0],E=[0,0,0,1],y=[0,0,0],X=[0,0,0],ge=[0,0,0],j=[0,0,0],ye=[0,0,0];function Te(T,_,L,K,de,ze){D(T,It),z(T,X);let Ne=It[0],Ge=It[1],Le=It[2],Qe=It[3],Ye=2*(Ne*Ge-Qe*Le),Pe=1-2*(Ne*Ne+Le*Le),pe=2*(Ge*Le+Qe*Ne),me=Math.hypot(K,1,de),ct=K/me,st=1/me,_t=de/me;return l.Set(_*(Pe*_t-pe*st)-L*X[0],(ze||0)-L*.3*X[1],_*(Ye*st-Pe*ct)-L*X[2]),a.AddTorque(P[T],l,i.EActivation_Activate),Pe}function ie(T,_){jn($e,[0,oh,T.side*lh],ge),j[0]=_[0]-(Ue[0]+ge[0]),j[1]=_[1]-(Ue[1]+ge[1]),j[2]=_[2]-(Ue[2]+ge[2]),jn(ha($e),j,ye);let L=Math.hypot(ye[0],ye[1],ye[2])||1e-6,K=ye[0]/L,de=ye[1]/L,ze=ye[2]/L;L=Wt(L,.24,ms+er-.004);let Ne=Math.acos(Wt((ms*ms+L*L-er*er)/(2*ms*L),-1,1)),Ge=-K,Le=-1-Ge*K,Qe=-Ge*de,Ye=-Ge*ze,Pe=Math.hypot(Le,Qe,Ye)||1;Le/=Pe,Qe/=Pe,Ye/=Pe;let pe=Math.cos(Ne),me=Math.sin(Ne),ct=K*pe+Le*me,st=de*pe+Qe*me,_t=ze*pe+Ye*me;Me(T,ct,st,_t);let Tt=Math.PI-Math.acos(Wt((ms*ms+er*er-L*L)/(2*ms*er),-1,1));R[T.shin].SetTargetAngle(Tt)}let oe={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Ee(T,_){let L=Oe,K=ce.clock,de=.03,ze=0,Ne=0,Ge=L.clutch?oe[L.clutch]:null;Ge&&(de=Ge.spine+(1-ce.strength)*.25,ze=Ge.neck),L.lookDown>0&&(ze=.7,de+=.1),L.flinch>0&&(de=-.22,ze=-.3),ce.mode==="down"&&(de+=.15*Math.sin(K*1.3+L.phase[0]),Ne=.25*Math.sin(K*.9+L.phase[1])),Ve(tt.chest,hh(Ui(0,1,0,de),Ui(1,0,0,Ne))),Ve(tt.head,Ui(0,1,0,ze));for(let Le of[1,-1]){let Qe=Le===1?tt.uarm_l:tt.uarm_r,Ye=Le===1?tt.larm_l:tt.larm_r,Pe;if(ce.mode==="rise"&&L.riseT<1.5)Pe=[.75,-.25,-.15];else if(L.flinch>0)Pe=[.5,-.95,-1];else if(Ge&&(L.clutchArm===0||L.clutchArm===Le))Pe=Ge.arm;else if(ce.mode==="down"){let pe=Math.max(0,Math.sin(K*.8+L.phase[2]+Le));Pe=[.4+1.5*pe*ce.strength,-.2,-.5-.6*pe]}else{let pe=Wt(.12+2.6*T,0,1.45);Pe=[.1+(T>.12?Math.sin(K*13+Le*1.7)*.45*Wt(T*3,0,1):0)+.6*T,-pe,-.3-.5*Wt(T*3,0,1)]}Ve(Qe,le(Pe[0],Pe[1],Le,Pe[3]||0)),R[Ye].SetTargetAngle(Pe[2])}}function N(T){return w(T.shin,T.p),D(T.shin,E),jn(E,[0,-V_,0],j),T.p[0]+=j[0],T.p[1]+=j[1],T.p[2]+=j[2],T.p}let ae=[0,1,0];function G(T){w(T.shin,xt),D(T.shin,E),jn(E,ae,j);let _=j[0],L=j[1],K=j[2];T.gap=xt[1]-.15*L-.055-Ln(xt[0]-.15*_,xt[2]-.15*K),T.k[0]=xt[0]+.22*_,T.k[1]=xt[1]+.22*L,T.k[2]=xt[2]+.22*K,D(T.thigh,It),jn(It,ae,j),T.kgap=Math.min(xt[1]+.15*L-.055,T.k[1]+.07*j[1]-.07)-Ln(T.k[0],T.k[2])}function Me(T,_,L,K){let de=-L,ze=-K,Ne=_,Ge=Math.hypot(Ne,ze,1+de)||1;Ve(T.thigh,[0,-Ne/Ge,ze/Ge,(1+de)/Ge])}function fe(T,_){if(ce.mode==="fall"||ce.mode==="down")return;ce.mode="fall",ce.fellBecause=_||"";for(let Ne of he)Ne.swing=!1;T&&ee(tt.chest,T[0],0,T[1]);let L=Oe;L.fight=ce.alive&&!ce.ko?Wt(.2+.95*ce.strength,0,1):0,L.fallT=0,L.settle=0;let K=(we[0]+ht[0])*.5+(T?T[0]/40:0),de=(we[2]+ht[2])*.5+(T?T[1]/40:0);Math.hypot(K,de)<.3&&(K+=(Ke[0]-Ue[0])*4,de+=(Ke[2]-Ue[2])*4),Math.hypot(K,de)<.1&&(K=L.hx,de=L.hz);let ze=Math.hypot(K,de);L.fallDir[0]=K/ze,L.fallDir[1]=de/ze,N(he[0]),N(he[1]),L.lead=he[0].p[0]*L.fallDir[0]+he[0].p[2]*L.fallDir[1]<he[1].p[0]*L.fallDir[0]+he[1].p[2]*L.fallDir[1]?0:1,Kt.push({type:"fall",pos:H(tt.chest),onFeet:ce.onFeet})}function Ae(T){let _=Oe,L=ce,K=L.mode==="rise";K&&(_.riseT+=T,_.support=Math.min(1,_.riseT/.8));let de=L.mode==="kneel",ze=de||K&&_.riseT<1.9,Ne=Wt(L.strength,0,1),Ge=Math.sqrt(Qi/.95),Le=0,Qe=0,Ye=0,Pe=0;for(let Z=0;Z<x;Z++){let St=A[Z]/S;w(Z,xt),B(Z,k),Le+=xt[0]*St,Qe+=xt[2]*St,Ye+=k[0]*St,Pe+=k[2]*St}let pe=he[0],me=he[1];N(pe),N(me),G(pe),G(me);let ct=_.hz,st=-_.hx;if(de)for(let Z of he)Z.planted[0]=Z.k[0]+(Z.p[0]-Z.k[0])*.33,Z.planted[1]=Z.k[2]+(Z.p[2]-Z.k[2])*.33,!Z.kneeDown&&Z.kgap<.012&&(Z.kneeDown=!0,ln("kneecap"+(Z.side===1?"_l":"_r"),-we[1]*1.3,Z.k,"fall"));let _t=9;for(let Z of he)Z.swing||(_t=Math.min(_t,Z.gap)),ze&&(_t=Math.min(_t,Z.kgap));_.grip+=Wt((_t<.028?1:0)-_.grip,-T/.09,T/.05),_.airT=_.grip<.5?_.airT+T:0;let Tt=0,Pt=0,un=L.hits>0,Be=Math.hypot(Le-pt.start[0],Qe-pt.start[2])>8.5||L.time>_.fleeAt+16;if(!ze&&L.bleed>.2&&L.time>_.fleeAt&&Ne>.3&&!Be){let Z=(.2+.6*Ne)*(1-.45*_.legWound),St=Math.sin(L.clock*1.1+_.phase[3])*(.25+.9*(1-Ne));Tt=(_.fleeDir[0]*Math.cos(St)-_.fleeDir[1]*Math.sin(St))*Z,Pt=(_.fleeDir[0]*Math.sin(St)+_.fleeDir[1]*Math.cos(St))*Z;let zt=Math.atan2(_.hz*Tt-_.hx*Pt,_.hx*Tt+_.hz*Pt),Rt=Wt(zt,-2.2*T,2.2*T),an=Math.cos(Rt),Ht=Math.sin(Rt),Sn=_.hx*an+_.hz*Ht,hi=-_.hx*Ht+_.hz*an;_.hx=Sn,_.hz=hi}_.walk[0]+=(Tt-_.walk[0])*Math.min(1,T*2),_.walk[1]+=(Pt-_.walk[1])*Math.min(1,T*2);let Nn,bn,v=null;pe.swing?(Nn=me.planted[0],bn=me.planted[1],v=me):me.swing?(Nn=pe.planted[0],bn=pe.planted[1],v=pe):(Nn=(pe.planted[0]+me.planted[0])/2,bn=(pe.planted[1]+me.planted[1])/2);let U=Le-Nn,J=Qe-bn,W=v?Ln(v.planted[0],v.planted[1]):Math.max(Ln(pe.planted[0],pe.planted[1]),Ln(me.planted[0],me.planted[1])),q=Le+Ye/Ge,Re=Qe+Pe/Ge,We=q-Nn,Ce=Re-bn,be=Math.hypot(We,Ce),Je=Math.min(1,be),je=L.bleed>.2||L.stun>.05,wt=un&&je?1-Ne+.35*Math.min(1,L.stun):0,Xe=L.clock,Et=S*(.25+4.2*wt)*(ze?.45:1),C=Et*(Math.sin(Xe*1.7+_.phase[0])*.55+Math.sin(Xe*.63+_.phase[1])*.45),I=Et*(Math.sin(Xe*1.4+_.phase[2])*.55+Math.sin(Xe*.51+_.phase[3])*.45);if(_.buckle-=T,un&&!ze&&_.buckle<-.5&&lt()<T*((je?.12:0)+1.5*wt+(Math.hypot(_.walk[0],_.walk[1])>.1?.8*_.legWound:0))){_.buckle=.24,_.buckleDip=.1+.2*lt()+.12*wt;let Z=lt()*6.28,St=(18+30*lt())*(.6+wt);ee(tt.pelvis,Math.cos(Z)*St,0,Math.sin(Z)*St),ot.push({type:"buckle",pos:[Ue[0],Ue[1],Ue[2]]})}let V=de?0:ze?.35:.8+.5*(v?v.hurt:0),se=S*Ge*Ge*V*U+C,te=S*Ge*Ge*V*J+I,Se=_.walk[0]*.3,De=_.walk[1]*.3,Dt=(v?50:150)*(.25+.75*Ne)+(ze?120:0),At=ua(-1500*(U-Se)-330*(Ye-_.walk[0]),-1500*(J-De)-330*(Pe-_.walk[1]),Dt);se+=At[0],te+=At[1],_.reelT>0&&(_.reelT-=T,se+=_.reel[0]/.16,te+=_.reel[1]/.16),se*=_.support*_.grip,te*=_.support*_.grip,Y(tt.pelvis,se*.5,0,te*.5),Y(tt.chest,se*.5,0,te*.5);let Lt=W+(ze?.5:ch-.1*(1-Ne));if(K&&_.riseT<1&&(Lt=W+_.riseFrom+(.5-_.riseFrom)*(_.riseT/1)),_.buckle>0&&(Lt-=_.buckleDip),v&&v.hurt>0&&(Lt-=.13*v.hurt),!ze)for(let Z of he){let St=Z.swing?Wt((Z.t-.4)/.4,0,1):1;if(St<=0)continue;jn($e,[0,oh,Z.side*lh],ge);let zt=Math.min(.62,Math.hypot((Z.swing?Z.to[0]:Z.planted[0])-Ue[0]-ge[0],(Z.swing?Z.to[1]:Z.planted[1])-Ue[2]-ge[2])),Rt=W-oh+Math.sqrt(Dd*Dd-zt*zt);Rt<Lt&&(Lt+=(Rt-Lt)*St)}_.hT+=Wt(Lt-_.hT,-2.2*T,1.1*T);let jt=Wt(S*Qi+12e3*(_.hT-Ue[1])-1400*we[1],0,S*Qi*1.9)*_.support*_.grip;de&&(_.hT=Ue[1],jt=Wt(S*Qi*W_-500*we[1],0,S*Qi*.8)*_.support*_.grip),Y(tt.pelvis,0,jt*.55,0),Y(tt.chest,0,jt*.45,0);let Bt=ua(We*.9,Ce*.9,.38);D(tt.pelvis,It),jn(It,[-1,0,0],j);let rt=Math.atan2(j[2]*_.hx-j[0]*_.hz,j[0]*_.hx+j[2]*_.hz);z(tt.pelvis,X),Te(tt.pelvis,520*_.support,46*_.support,Bt[0]*.3,Bt[1]*.3,(70*rt-7*X[1])*_.support),Te(tt.chest,900*_.support*(.5+.5*Ne),80*_.support,Bt[0],Bt[1],0),_.stepCool-=T;let en=(Z,St)=>{let zt=be>1e-4?1/be:0,Rt=.02+.2*(1-Ne),an=q-Z.planted[0],Ht=Re-Z.planted[1],Sn=Math.exp(Ge*Math.sqrt(V)*St*(.55+.45*Ne));return[Z.planted[0]+an*Sn+We*zt*.05-_.walk[0]/Ge*.55+(lt()-.5)*Rt,Z.planted[1]+Ht*Sn+Ce*zt*.05-_.walk[1]/Ge*.55+(lt()-.5)*Rt]},Un=(Z,St,zt)=>{let Rt=zt[0]-St.planted[0],an=zt[1]-St.planted[1],Ht=(.36+.36*Ne)*(1-.35*Z.hurt);[Rt,an]=ua(Rt,an,Ht);let Sn=(Rt*ct+an*st)*Z.side;Sn<.1&&(Rt+=(.1-Sn)*Z.side*ct,an+=(.1-Sn)*Z.side*st);let hi=St.planted[0]+Rt,Si=St.planted[1]+an;return[hi,Si,Math.hypot(hi-zt[0],Si-zt[1])]};if(ze){if(!de)for(let Z of he){let St=Le+_.hx*-.16+ct*Z.side*.12,zt=Qe+_.hz*-.16+st*Z.side*.12,Rt=ua(St-Z.planted[0],zt-Z.planted[1],.9*T);Z.planted[0]+=Rt[0],Z.planted[1]+=Rt[1]}}else if(v){let Z=v===pe?me:pe;if(Z.t+=T/Z.T,Z.t<.65&&!Z.tidy){let St=Un(Z,v,en(v,(1-Z.t)*Z.T));Z.to[0]+=(St[0]-Z.to[0])*.3,Z.to[1]+=(St[1]-Z.to[1])*.3}if(Z.t>.55&&Z.gap<.012||Z.t>=1.4||Z.t>=1&&Ln(Z.p[0],Z.p[2])<W-.12){if(Z.swing=!1,Ln(Z.p[0],Z.p[2])<W-.12)return fe(null,"edge");let St=Math.hypot(Z.to[0]-Z.p[0],Z.to[1]-Z.p[2]),zt=Math.hypot(Ye,Pe);if(St>.16&&Math.abs(Ln(Z.to[0],Z.to[1])-W)>.12){let Ht=zt>.05?Ye/zt:-_.hx,Sn=zt>.05?Pe/zt:-_.hz;return ee(tt.pelvis,Ht*22,26,Sn*22),fe([Ht*62,Sn*62],"trip")}Z.planted=[Z.p[0],Z.p[2]],_.stepCool=.03+.12*(1-Ne);let Rt=Math.hypot(Ye,Pe),an=Math.min(S*Rt*.38,55*Ne*(1-.6*Z.hurt));Rt>.05&&(ee(tt.chest,-Ye/Rt*an*.6,0,-Pe/Rt*an*.6),ee(tt.pelvis,-Ye/Rt*an*.4,0,-Pe/Rt*an*.4)),un&&!Z.tidy&&L.steps++,ot.push({type:"step",pos:[Z.p[0],W,Z.p[2]],hurt:Z.hurt})}}else{let Z=Math.hypot(pe.planted[0]-me.planted[0],pe.planted[1]-me.planted[1]),St=.115-.035*(1-Ne),zt=be<.06&&Math.hypot(Ye,Pe)<.12&&Z>.36&&_.stepCool<-.35&&Ne>.45;if(_.stepCool<=0&&(be>St||zt)){let Rt,an;if(zt)Rt=_.lastFoot===0?1:0,an=[he[1-Rt].planted[0]+he[Rt].side*ct*.2,he[1-Rt].planted[1]+he[Rt].side*st*.2];else{let Si=[0,1].map(bi=>{let Cl=Un(he[bi],he[1-bi],en(he[1-bi],.26));return{tgt:Cl,move:Math.hypot(Cl[0]-he[bi].p[0],Cl[1]-he[bi].p[2])}}),ma=bi=>bi.tgt[2]-.25*Math.min(bi.move,.4)+(bi.move<.08?1:0);Rt=Math.abs(ma(Si[0])-ma(Si[1]))<.02?_.lastFoot===0?1:0:ma(Si[0])<ma(Si[1])?0:1,an=[Si[Rt].tgt[0],Si[Rt].tgt[1]]}let Ht=he[Rt],Sn=he[1-Rt];Ht.swing=!0,Ht.t=0,Ht.from=[Ht.p[0],Ht.p[1],Ht.p[2]],Ht.to=an;let hi=Math.hypot(Ht.to[0]-Ht.p[0],Ht.to[1]-Ht.p[2]);Ht.T=Wt(.15+.24*hi,.17,.34)*(1.3-.3*Ne)*(be>.3?.75:1)*(Sn.hurt>0?1-.3*Sn.hurt:1),Ht.lift=Ht.hurt>.3?.035:.07+.09*lt()+.05*Math.min(1,be*2),Ht.tidy=zt,_.lastFoot=Rt}}for(let Z of he){if(B(Z.shin,y),de){let zt=.36+.42*(Wt(_.kneelT/_.kneelMax,0,1)*(1-.6*Ne))+.08*Math.sin(L.clock*.9+_.phase[Z.side===1?0:1])*(1-Ne);Me(Z,-Math.sin(zt),-Math.cos(zt),Z.side*.1),R[Z.shin].SetTargetAngle(zt+Math.PI/2);continue}if(Z.swing){let St=Wt(Z.t,0,1),zt=St*St*(3-2*St);Z.ik[0]=Z.from[0]+(Z.to[0]-Z.from[0])*zt,Z.ik[2]=Z.from[2]+(Z.to[1]-Z.from[2])*zt,Z.ik[1]=W+Z.lift*Math.sin(Math.PI*St)-(St>.5?.09*(St-.5):0);let Rt=1900,an=170,Ht=[Rt*(Z.ik[0]-Z.p[0])-an*y[0],Rt*(Z.ik[1]-Z.p[1])-an*y[1],Rt*(Z.ik[2]-Z.p[2])-an*y[2]],Sn=Math.hypot(Ht[0],Ht[1],Ht[2]),hi=Sn>650?650/Sn:1;Y(Z.shin,Ht[0]*hi*_.support,(Ht[1]*hi-(Z.t>1?160:0))*_.support,Ht[2]*hi*_.support,Z.p)}else{Z.ik[0]=Z.planted[0],Z.ik[1]=W,Z.ik[2]=Z.planted[1];let St=ua(1800*(Z.planted[0]-Z.p[0])-130*y[0],1800*(Z.planted[1]-Z.p[2])-130*y[2],480),zt=Wt(40+7e3*Z.gap,40,280)*_.support;Y(Z.shin,St[0]*_.support,-zt,St[1]*_.support,Z.p),Y(tt.pelvis,0,zt-40*_.support,0)}ie(Z,Z.ik)}Ee(Je,T),un&&(L.onFeet+=T,L.stumbled+=Math.hypot(Le-_.lastCom[0],Qe-_.lastCom[1])),_.lastCom[0]=Le,_.lastCom[1]=Qe;let Qt=Z=>Z.swing?Math.hypot(Le-Z.p[0],Qe-Z.p[2]):Math.hypot(Le-Z.planted[0],Qe-Z.planted[1]),cn=Math.min(Qt(pe),Qt(me));D(tt.chest,It);let qn=1-2*(It[0]*It[0]+It[2]*It[2]);if(!L.alive||L.ko)return fe(null,"out");if(K){if(_.riseT>_.riseFail||Ne<.3)return ot.push({type:"gaveout",pos:[Ue[0],Ue[1],Ue[2]]}),fe(null,"gave out");if(_.riseT>2.7&&Ue[1]-W>ch-.16){L.mode="balance",L.getups++,_.offT=0,_.stepCool=.2;for(let Z of he)Z.swing=!1,Z.planted=[Z.p[0],Z.p[2]];ot.push({type:"up",pos:[Ue[0],Ue[1],Ue[2]]})}else if(_.riseT>5)return fe(null,"gave out");return}_.offT=!ze&&(cn>.46||qn<.8)?_.offT+T:Math.max(0,_.offT-2*T);let sr=cn>(ze?.5:.7)?"reach":_.offT>.3?"lean":be>2.4?"capture":qn<.45?"tilt":Ue[1]-W<(ze?.3:.52)?"height":"";if(sr)return fe(null,sr);if(_.airT>.3)return fe(null,"air");if(L.paralysed)return fe(null,"spine");if(_.legT=!ze&&(pe.broken>=3||me.broken>=3)?_.legT+T:0,_.legT>.35)return fe(null,"leg");let wh=Math.hypot(Ye,Pe);if(de&&wh>1.4)return fe(null,"thrown");if(ze){if(_.kneelT+=T,de&&_.kneelT>Math.min(_.kneelMax,1.4)&&Ne>.52&&L.bleed<.5&&_.grip>.9&&gn()){L.mode="rise",_.riseT=1.9,_.riseFail=9,_.support=1,_.hT=Ue[1],_.offT=0,_.buckle=-1.5;for(let Z of he)Z.swing=!1,Z.planted=[Z.p[0],Z.p[2]];ot.push({type:"rise",pos:[Ue[0],Ue[1],Ue[2]],fromKnees:!0})}else if(Ne<.2||_.kneelT>_.kneelMax){let Z=lt()<.5?1:-1,St=lt()<.45;fe(St?[ct*Z*28,st*Z*28]:[_.hx*30,_.hz*30],"slump")}}else if(un&&wh<.9&&(Ne<.5||_.buckle>0&&Ne<.72&&_.buckleDip>.24)){L.mode="kneel",L.kneels++,_.kneelT=0,_.kneelMax=1.6+3.2*lt();for(let Z of he)Z.swing=!1,Z.kneeDown=!1,Z.planted=[Z.p[0],Z.p[2]];ot.push({type:"kneel",pos:[Ue[0],Ue[1],Ue[2]]})}}function qe(T,_){let L=Oe,K=ce;G(he[0]),G(he[1]);let de=Math.min(he[0].gap,he[0].kgap,he[1].gap,he[1].kgap);L.grip+=Wt((de<.03?1:0)-L.grip,-_/.09,_/.05);let ze=T*Wt(1-L.fallT/(.45+.6*T),0,1)*L.grip;if(ze>0){let me=Wt(S*Qi*.6-450*we[1],0,S*Qi*.85)*ze;Y(tt.pelvis,0,me*.55,0),Y(tt.chest,0,me*.45,0),Te(tt.chest,420*ze,60*ze,L.fallDir[0]*.6,L.fallDir[1]*.6,0),Te(tt.pelvis,260*ze,30*ze,0,0,0)}jn(ha($e),[L.fallDir[0],0,L.fallDir[1]],ye);let Ne=ye[0],Ge=ye[2],Le=Math.max(0,Ne),Qe=Wt((.42-(Ue[1]-Ln(Ue[0],Ue[2])))/.2,0,1);he.forEach((me,ct)=>{let st,_t,Tt;ct===L.lead?(st=Ne*.95,_t=Ge*.95+me.side*.08,Tt=.95-.65*Le):(st=Ne*.15-.3*(1-Le),_t=me.side*.1,Tt=1.65),st*=1-Qe,Tt*=1-.75*Qe;let Pt=Math.hypot(st,1,_t);Me(me,st/Pt,-1/Pt,_t/Pt),R[me.shin].SetTargetAngle(Tt)}),D(tt.chest,It),jn(ha(It),[L.fallDir[0],0,L.fallDir[1]],ye);let Ye=ye[0],Pe=ye[2],pe=L.grip<.3&&L.fallT>.35?1:0;if(Ve(tt.chest,Ui(0,1,0,.12+.4*Math.max(0,Ye))),Ve(tt.head,Ui(0,1,0,.5*Ye)),!(L.flinch>0))for(let me of[1,-1]){let ct=Wt(Pe*me,-1,1),st=pe*.55*Math.sin(K.clock*11+me*1.7),_t=Wt(-Ye*1.25,-.8,1.3)+.15+st,Tt=-.25-.9*Math.max(0,ct)+.3*Math.max(0,-ct);Ve(me===1?tt.uarm_l:tt.uarm_r,le(_t,Tt,me)),R[me===1?tt.larm_l:tt.larm_r].SetTargetAngle(-.35-.3*pe)}}function gt(T){let _=Oe,L=ce,K=L.clock;_.support=Math.max(0,_.support-T/.14);let de=L.alive&&!L.ko;de||(_.fight=0);let ze=L.mode==="fall"?_.fight*Wt(1-(_.fallT-1.3)/1.2,0,1)*(_.settle>.1?.5:1):0,Ne=de?.1+.32*L.strength:0;for(let Ge=1;Ge<x;Ge++){let Le=qt[Ge].zone,Qe=Math.max(Ne,ze*(Le==="arm"?.85:Le==="thigh"||Le==="shin"?.75:.7));$[Ge]+=Wt(Qe-$[Ge],-(L.alive?3:1.1)*T,2*T)}if(ze>.12)qe(ze,T);else if(de){for(let Ge of he){let Le=K*(1.1+.5*L.strength)+_.phase[Ge.side===1?0:1];Ve(Ge.thigh,Ui(0,1,0,.35+.4*Math.sin(Le))),R[Ge.shin].SetTargetAngle(.7+.6*Math.sin(Le+1.3))}Ee(0,T)}if(L.mode==="fall"){_.fallT=(_.fallT||0)+T;let Ge=Ue[1]-Ln(Ue[0],Ue[2])<.45||ce.restTimer>.7||_.fallT>4;if(_.settle=Ge&&Math.hypot(we[0],we[1],we[2])<(_.fallT>4?1.2:.6)?_.settle+T:0,_.settle>.35){L.mode="down",L.downAt=L.time,_.settle=0,_.fallT=0,ot.push({type:"down",pos:[Ke[0],Ke[1],Ke[2]],onFeet:L.onFeet});let Le=Ln(Ue[0],Ue[2]),Qe=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([Ye,Pe])=>Math.abs(Ln(Ue[0]+Ye,Ue[2]+Pe)-Le)<.05)&&Ue[1]-Le<.5;de&&L.strength>.42&&_.riseTries<2&&Qe&&gn()?_.riseAt=L.time+.9+1.6*lt():(_.riseAt=0,L.spent=!0)}}else if(L.mode==="down"&&_.riseAt>0&&L.time>_.riseAt){if(_.riseAt=0,!de||L.strength<.36||!gn()){L.spent=!0;return}D(tt.chest,It);let Ge=jn(It,[-1,0,0],j)[1]>0,Le=w(tt.head,xt),Qe=Le[0]-Ue[0],Ye=Le[2]-Ue[2],Pe=Math.hypot(Qe,Ye)||1,pe=Ge?-1:1;_.hx=pe*Qe/Pe,_.hz=pe*Ye/Pe,L.mode="rise",_.riseT=0,_.riseTries++,_.support=0,_.offT=0,_.buckle=0,_.kneelT=0,_.riseFrom=Math.max(.12,Ue[1]-Ln(Ue[0],Ue[2])),_.hT=Ue[1],_.riseFail=lt()<Wt((.75-L.strength)*1.6+.35*_.legWound,0,.9)?.9+lt()*1.2:9;for(let me of he)N(me),me.swing=!1,me.planted=[me.p[0],me.p[2]];_.lastCom[0]=Ue[0],_.lastCom[1]=Ue[2],ot.push({type:"rise",pos:[Ue[0],Ue[1],Ue[2]]})}}function ve(T){for(ot.length=0;Kt.length;)ot.push(Kt.shift());let _=ce,L=Oe;_.clock+=T,_.hits>0&&(_.time+=T);let K=0;if(_.alive){for(let pe of et){let me=Math.min(pe.rate*T,pe.left);pe.left-=me,_.blood-=me,pe.left>0&&(K+=pe.rate)}_.blood=Math.max(0,_.blood),_.blood<=0&&nn("Bled out")}if(_.bleed=K,_.stun=Math.max(0,_.stun-.2*T),(!_.alive||_.ko)&&(_.spent=!0),_.strength=_.alive&&!_.ko?Wt((_.blood-10)/70,0,1)*(1-.75*Math.min(1,_.stun)):0,L.flinch-=T,L.lookDown-=T,L.clutch&&_.clock>L.clutchEnd&&(L.clutch=null),w(tt.pelvis,Ue),B(tt.pelvis,we),D(tt.pelvis,$e),w(tt.chest,Ke),B(tt.chest,ht),_.mode==="balance"||_.mode==="kneel"||_.mode==="rise"){for(let pe=1;pe<x;pe++){let ct=qt[pe].zone==="thigh"||qt[pe].zone==="shin"?.95:.35+.65*_.strength;$[pe]+=Wt(ct-$[pe],-3*T,3*T)}Ae(T)}else gt(T);ke(),s.Step(T,1);let de=0;for(let pe=0;pe<x;pe++){B(pe,y);let me=y[0]-re[pe*3],ct=y[1]-re[pe*3+1]+Qi*T,st=y[2]-re[pe*3+2];re[pe*3]=y[0],re[pe*3+1]=y[1],re[pe*3+2]=y[2];let _t=Math.hypot(me,ct,st);de=Math.max(de,Math.hypot(y[0],y[1],y[2])),_e[pe]-=T;let Tt=_.mode==="fall"||_.mode==="down";if(_.hits>0&&Tt&&_t>2.2&&_e[pe]<=0){_e[pe]=.18;let Pt=qt[pe],un=_t*(Pt.zone==="head"?5:Pt.zone==="chest"||Pt.zone==="gut"?1.6:.8);_.damage+=un,_.impacts++;let Be=H(pe);ot.push({type:"impact",part:pe,zone:Pt.zone,pos:Be,dv:_t,dmg:un}),D(pe,It),jn(ha(It),[-me/_t,-ct/_t,-st/_t],j);for(let[Nn,bn]of mn(pe,j))ln(Nn,_t*bn,Be,"fall");Pt.zone==="head"&&ln("neck",_t*.9,Be,"fall"),Pt.zone==="head"&&(_.stun=Math.min(1.6,_.stun+_t*.09),_.stun>1.15&&Vt())}}if(Ot==="window")for(let pe=0;pe<x;pe++){if(w(pe,xt),xt[1]>nt.glassY+.6||xt[1]<nt.glassY-.3)continue;let me=Math.hypot(re[pe*3],re[pe*3+1],re[pe*3+2]);if(me<1.6)continue;let ct=qt[pe].r+qt[pe].hh+.06+me*T*2;if(!(Math.abs(xt[1]-nt.glassY)>ct))for(let st of d.panes)st.broken||xt[0]<st.min[0]-.1||xt[0]>st.max[0]+.1||xt[2]<st.min[1]-.1||xt[2]>st.max[1]+.1||g(st,[re[pe*3],re[pe*3+1],re[pe*3+2]])}if(_.hits===0)return ot;_.lowest=Math.min(_.lowest,Ue[1]),_.drop=Math.max(0,pt.start[1]+.93-_.lowest-.85);let ze=Math.max(Math.hypot(re[0],re[1],re[2]),Math.hypot(re[3],re[4],re[5])),Ne=he.some(pe=>pe.swing&&!pe.tidy),Ge=he.some(pe=>pe.swing&&pe.tidy),Le=_.mode==="balance"?!Ne&&ze<(Ge?.35:.2):de<.15;_.restTimer=Le?_.restTimer+T:0;let Qe=_.restTimer>1.1,Ye=_.stun>.05?2.6:1.5,Pe=0;if(_.alive?_.bleed>.01?Pe=0:_.mode==="balance"?Pe=_.restTimer/Ye:_.mode==="rise"||_.mode==="down"&&!_.spent?Pe=0:Pe=Math.max(_.restTimer/1.1,_.mode==="down"?(_.time-_.downAt)/3.5:0):Pe=Math.min(_.restTimer/1.1,(_.time-_.diedAt)/1.6),_.wrap=Wt(Pe,0,1),!_.done){let pe="";!_.alive&&Qe&&_.time-_.diedAt>1.6?pe=_.outcome:_.alive&&_.bleed<=.01&&(_.mode==="fall"&&Qe||_.mode==="down"&&_.spent&&(Qe||_.time-_.downAt>3.5)||_.mode==="balance"&&_.restTimer>Ye||_.ko&&Qe)?pe=_.ko?"Out cold":_.mode==="balance"?"Still standing":"Down, alive":_.time>80&&(pe="Time"),pe&&(_.done=!0,_.outcome=pe,ot.push({type:"done",outcome:pe}))}return ot}function it(){let T=ce,_=!T.alive,L=Object.values(T.bones),K=[["Stagger steps",String(T.steps),Math.min(T.steps,40)*14],["Stumbled",T.stumbled.toFixed(1)+" m",Math.round(Math.min(T.stumbled,12)*18)],["Knee drops",String(T.kneels),T.kneels*120],["Put down",T.downAt>=0?"yes":"\u2014",T.downAt>=0?90:0],["Got back up",String(T.getups),T.getups*140],["Hard landings",String(T.impacts),Math.round(T.damage*X_)],["Bones",String(L.length),L.reduce((ze,Ne)=>ze+dh[Ne],0)],["Fell",T.drop.toFixed(1)+" m",Math.round(T.drop*65)],["Glass",T.glass+(T.glass===1?" pane":" panes"),T.glass*130],["Trick shots",String(T.fallHits),T.fallHits*150+T.airHits*250],["Out cold",T.ko?"yes":"\u2014",T.ko?150:0],[_?T.outcome:"Bled out",_?T.diedAt.toFixed(1)+" s":"\u2014",_?T.diedAt>.3?260:60:0]];return{lines:K.filter((ze,Ne)=>ze[2]>0||Ne<3),total:K.reduce((ze,Ne)=>ze+Ne[2],0)}}function yt(T){Qn[T]&&(Ot=T,pt=Qn[T],bt())}let Fe=[0,0,0,1];return bt(),{parts:qt,state:ce,wounds:et,feet:he,step:ve,hit:Ut,reset:bt,payout:it,pos:H,mass:A,totalMass:S,statics:f,setLevel:yt,groundY:Ln,get level(){return pt},get levelKey(){return Ot},glass:{tiles:d.tiles,panes:d.panes,transform(T,_){let L=d.tiles[T];return Q(L.id,_),F(L.id,Fe),_[3]=Fe[0],_[4]=Fe[1],_[5]=Fe[2],_[6]=Fe[3],_}},transform(T,_){w(T,_);let L=a.GetRotation(P[T]);return _[3]=L.GetX(),_[4]=L.GetY(),_[5]=L.GetZ(),_[6]=L.GetW(),_},_debug:{joints:R,tone:$,IDX:tt,ctl:Oe,impulse:ee,armQ:le,setTarget:Ve}}}var yh={};Xd(yh,{GOALS:()=>Bi,LEVEL_STARS:()=>gs,SHOP:()=>Oi,TOOL_ORDER:()=>Bd,TOTAL_STARS:()=>Tl,actionsPerTake:()=>da,blocked:()=>fa,buy:()=>ph,finishTake:()=>_h,levelOpen:()=>Fi,loadSave:()=>fh,multiplier:()=>ir,newSave:()=>tr,nextBuy:()=>mh,nextGoal:()=>gh,owns:()=>ci,stars:()=>nr,tools:()=>El,unlockEverything:()=>xh});var Bd=["poke","shove","bat","pistol","shotgun","ram"],Oi=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2e3,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:9e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:28e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:7e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:18e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:9e4,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:4e3},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:22e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:6e4,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:6e3}],Od={"pay.1":.25,"pay.2":.3,"pay.3":.4},gs={yard:0,stairs:1,window:4},Bi={yard:[{id:"y1",text:"Make him take a step",reward:30,test:i=>i.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:i=>i.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:i=>i.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:i=>i.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:i=>i.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(i,e)=>i.drop>=3&&e===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:i=>i.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:i=>i.drop>=3&&i.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:i=>i.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:i=>i.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(i,e)=>i.drop>=2.5&&e===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:i=>i.airHits>=1}]},Tl=Object.values(Bi).reduce((i,e)=>i+e.length,0);function tr(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1,muted:!1}}function fh(i){try{let e=JSON.parse(i);if(e&&e.v===1&&Array.isArray(e.owned)&&Array.isArray(e.goals))return Object.assign(tr(),e)}catch{}return tr()}var ci=(i,e)=>i.owned.includes(e),nr=i=>i.goals.length,Fi=(i,e)=>nr(i)>=(gs[e]||0),El=i=>Bd.filter(e=>e==="poke"||ci(i,"tool."+e)),da=i=>1+["actions.2","actions.3","actions.4"].filter(e=>ci(i,e)).length,ir=i=>Object.keys(Od).reduce((e,t)=>ci(i,t)?e*(1+Od[t]):e,1);function fa(i,e){return ci(i,e.id)?"Owned":e.needs&&!ci(i,e.needs)?"Needs "+Oi.find(t=>t.id===e.needs).name:i.bank<e.price?"Not enough":""}function ph(i,e){let t=Oi.find(n=>n.id===e);return!t||fa(i,t)?!1:(i.bank-=t.price,i.owned.push(e),!0)}function mh(i){return Oi.filter(e=>!ci(i,e.id)&&(!e.needs||ci(i,e.needs))).sort((e,t)=>e.price-t.price)[0]||null}function gh(i,e){return(Bi[e]||[]).find(t=>!i.goals.includes(t.id))||null}function _h(i,e,t,n){let s=Math.round(n*ir(i)),r=(Bi[e]||[]).filter(h=>!i.goals.includes(h.id)&&h.test(t,t.hits)),a=r.reduce((h,f)=>h+f.reward,0),o=Object.keys(gs).filter(h=>Fi(i,h));for(let h of r)i.goals.push(h.id);let l=Object.keys(gs).filter(h=>Fi(i,h)&&!o.includes(h)),c=s>(i.best[e]||0);return c&&(i.best[e]=s),i.bank+=s+a,i.earned+=s+a,i.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function xh(i){for(let e of Oi)ci(i,e.id)||i.owned.push(e.id);for(let e of Object.values(Bi).flat())i.goals.includes(e.id)||i.goals.push(e.id)}var $_={id:"full",fluid:{particle:10096662,ground:8129810,groundOpacity:.9,soak:5967890,soakAmount:.85,mark:3998984,gauge:"#b3151c"},words:{},shop:{},injury:{levels:["","bruised","broken","shattered"],parts:{skull:"Skull",nose:"Nose",jaw:"Jaw",neck:"Neck",collarbone:"Collarbone",ribs:"Ribs",spine:"Spine",pelvis:"Pelvis",humerus:"Humerus",forearm:"Forearm",wrist:"Wrist",femur:"Femur",kneecap:"Kneecap",tibia:"Tibia",ankle:"Ankle"},special:{"neck.1":"Neck wrenched","skull.2":"Skull fractured","ribs.2":"Ribs cracked"},none:"Nothing broken"},sounds:{wound:"woundBlood",squirt:"squirtBlood",snap:"snapBone"},contentNote:"Contains blood and violence against a test dummy.",haptics:!1,ads:!1},K_={id:"sand",fluid:{particle:14861965,ground:13479276,groundOpacity:.96,soak:9666666,soakAmount:.45,mark:2826777,gauge:"#dcbb78"},words:{Blood:"Sand","Bled out":"Ran empty","Bleeding out \u25B8\u25B8":"Running empty \u25B8\u25B8","Down, bleeding out":"Down, running empty","Staggering, bleeding":"Staggering, leaking","Hit, bleeding":"Hit, leaking","shot \xB7 bleeds":"shot \xB7 leaks","shot \xB7 bleeds fast":"shot \xB7 leaks fast",Bones:"Seams","Broken neck":"Neck seam burst","Skull shattered":"Head burst"},shop:{"tool.pistol":"He springs a leak: the stagger, the hobble, the knees.","tool.shotgun":"Leaks fast, and hits hard enough to send him over an edge."},injury:{levels:["","scuffed","split","burst"],parts:{skull:"Head",nose:"Face",jaw:"Chin",neck:"Neck seam",collarbone:"Shoulder seam",ribs:"Chest panel",spine:"Back seam",pelvis:"Hip seam",humerus:"Upper arm",forearm:"Forearm",wrist:"Wrist seam",femur:"Thigh",kneecap:"Knee seam",tibia:"Shin",ankle:"Ankle seam"},special:{"neck.1":"Neck seam strained"},none:"Nothing split"},sounds:{wound:"woundSand",squirt:"squirtSand",snap:"snapSeam"},contentNote:"Slapstick violence against a sand-filled test dummy.",haptics:!0,ads:!1};function kd(){return typeof location>"u"?new Set:new Set((location.hash.slice(1)+"&"+location.search.slice(1)).toLowerCase().split(/[-&=]/).filter(Boolean))}function J_(i=kd()){return i.has("sand")?K_:$_}var vh=kd(),Dn=J_(vh),Xn=i=>Dn.words[i]??i;function Mh(i,e,t){let n=Dn.injury,r=n.special[i+"."+t]||n.parts[i]+" "+n.levels[t];return e?(e===1?"Left ":"Right ")+r.charAt(0).toLowerCase()+r.slice(1):r}var Al=Math.PI*2,Mi=44100;function Gd(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var pa=i=>Math.max(1,Math.round(i*Mi));function ei(i,e,t,n=.707){let s=Al*Math.min(t,Mi*.45)/Mi,r=Math.cos(s),a=Math.sin(s)/(2*n),o,l,c;e==="lp"?(o=(1-r)/2,l=1-r,c=o):e==="hp"?(o=(1+r)/2,l=-(1+r),c=o):(o=a,l=0,c=-a);let h=1+a,f=-2*r,u=1-a,d=new Float32Array(i.length),g=0,M=0,m=0,p=0;for(let S=0;S<i.length;S++){let A=(o*i[S]+l*g+c*M-f*m-u*p)/h;M=g,g=i[S],p=m,m=A,d[S]=A}return d}function ft(i,e,{attack:t=.001,decay:n=.05,lp:s,hp:r,bp:a,q:o}={}){let l=new Float32Array(pa(e));for(let c=0;c<l.length;c++)l[c]=i()*2-1;return r&&(l=ei(l,"hp",r,o)),s&&(l=ei(l,"lp",s,o)),a&&(l=ei(l,"bp",a,o||1)),Hd(l,t,n)}function Yt(i,e,{f1:t=e,glide:n=.05,attack:s=.001,decay:r=.08,wave:a="sine"}={}){let o=new Float32Array(pa(i)),l=0;for(let c=0;c<o.length;c++){let h=t+(e-t)*Math.exp(-(c/Mi)/n);l+=h/Mi;let f=l%1;o[c]=a==="saw"?2*f-1:a==="tri"?1-4*Math.abs(f-.5):Math.sin(Al*f)}return Hd(o,s,r)}function Hd(i,e,t){let n=Math.max(1,e*Mi);for(let s=0;s<i.length;s++)i[s]*=Math.min(1,s/n)*Math.exp(-Math.max(0,s-n)/(t*Mi));return i}function Ie(i,e,t=0,n=1){let s=pa(t)-1;for(let r=0;r<e.length&&s+r<i.length;r++)i[s+r]+=e[r]*n;return i}function Jt(i,{drive:e=1,peak:t=.9,fade:n=.02,presence:s=2}={}){if(s){let o=ei(i,"hp",250);for(let l=0;l<i.length;l++)i[l]+=s*o[l]}let r=0;for(let o=0;o<i.length;o++)e!==1&&(i[o]=Math.tanh(i[o]*e)),r=Math.max(r,Math.abs(i[o]));let a=pa(n);for(let o=0;o<i.length;o++)i[o]*=t/(r||1)*Math.min(1,(i.length-o)/a);return i}var Zt=i=>new Float32Array(pa(i));function zd(i,e=1){let t=Zt(.5),n=.9+i()*.2;return Ie(t,Yt(.45,100*n,{f1:46*n,glide:.05,decay:.09*e}),0,1),Ie(t,Yt(.2,210*n,{f1:90,glide:.03,decay:.04}),0,.6),Ie(t,ft(i,.25,{lp:620,decay:.045}),0,.6),Ie(t,ft(i,.2,{bp:480*n,q:.9,decay:.05}),0,.8),Ie(t,ft(i,.4,{lp:170,decay:.12*e}),0,.4),t}var Rl={thud:[3,i=>Jt(zd(i),{drive:1.4,presence:6})],limb:[3,i=>{let e=Zt(.26),t=.85+i()*.3;return Ie(e,Yt(.2,155*t,{f1:70,glide:.03,decay:.05}),0,.7),Ie(e,ft(i,.12,{bp:1200*t,q:.8,decay:.025}),0,.7),Ie(e,ft(i,.2,{lp:500,decay:.05}),0,.4),Jt(e,{drive:1.2})}],knock:[3,i=>{let e=Zt(.26),t=.9+i()*.2;return Ie(e,Yt(.2,320*t,{f1:240*t,glide:.02,decay:.035}),0,.8),Ie(e,Yt(.1,640*t,{decay:.02}),0,.3),Ie(e,ft(i,.06,{bp:1800,q:1.2,decay:.012}),0,.5),Ie(e,Yt(.22,110,{f1:60,glide:.04,decay:.06}),0,.5),Jt(e,{drive:1.3})}],step:[4,i=>{let e=Zt(.14),t=.85+i()*.3;return Ie(e,ft(i,.1,{lp:900*t,decay:.018}),0,.8),Ie(e,ft(i,.1,{bp:700*t,q:1,decay:.02}),0,.7),Ie(e,Yt(.12,120*t,{f1:70,glide:.02,decay:.03}),0,.5),Jt(e)}],scuff:[3,i=>{let e=Zt(.32);return Ie(e,ft(i,.3,{bp:1300+i()*500,q:.6,attack:.03,decay:.07}),0,1),Ie(e,ft(i,.3,{lp:400,attack:.02,decay:.06}),0,.4),Jt(e)}],knees:[2,i=>{let e=Zt(.5);return Ie(e,Rl.limb[1](i),0,1),Ie(e,Rl.limb[1](i),.07+i()*.03,.8),Ie(e,ft(i,.3,{bp:1500,q:.6,attack:.02,decay:.08}),.05,.25),Jt(e,{drive:1.2})}],poke:[2,i=>{let e=Zt(.1),t=.9+i()*.2;return Ie(e,Yt(.09,270*t,{f1:180,glide:.02,decay:.02}),0,.7),Ie(e,ft(i,.03,{hp:2500,decay:.004}),0,.3),Jt(e)}],shove:[2,i=>{let e=Zt(.42);return Ie(e,ft(i,.35,{lp:520,attack:.012,decay:.07}),0,.9),Ie(e,Yt(.4,78,{f1:50,glide:.06,attack:.005,decay:.09}),0,.7),Ie(e,ft(i,.3,{bp:620,q:.8,attack:.008,decay:.06}),0,.7),Ie(e,ft(i,.25,{bp:3500,q:.7,attack:.01,decay:.05}),0,.12),Jt(e,{drive:1.3,presence:5})}],bat:[2,i=>{let e=Zt(.55),t=.93+i()*.14;return Ie(e,ft(i,.05,{bp:2400*t,q:2,attack:3e-4,decay:.006}),0,1),Ie(e,Yt(.12,880*t,{f1:820*t,decay:.018}),0,.6),Ie(e,Yt(.06,1900*t,{decay:.01}),0,.3),Ie(e,zd(i,1.1),.008,.9),Jt(e,{drive:1.6,presence:4})}],ram:[1,i=>{let e=Zt(1.1);return Ie(e,Yt(1,115,{f1:36,glide:.08,decay:.28}),0,1),Ie(e,ft(i,.9,{lp:250,decay:.3}),0,.7),Ie(e,ft(i,.2,{lp:1500,decay:.03}),0,.6),Ie(e,Yt(.5,230,{f1:70,glide:.05,decay:.12}),0,.6),Ie(e,ft(i,.5,{bp:520,q:.7,decay:.14}),0,.7),Jt(e,{drive:2.2,fade:.1,presence:8})}],pistol:[2,i=>{let e=Zt(1.15),t=()=>{let n=Zt(.3);return Ie(n,ft(i,.25,{hp:900,bp:2200,q:.7,attack:2e-4,decay:.022}),0,1),Ie(n,Yt(.3,175,{f1:55,glide:.02,decay:.06}),0,.9),Ie(n,ft(i,.3,{lp:1200,decay:.18}),.01,.25),n};Ie(e,t(),0,1);for(let[n,s]of[[.09,.22],[.17,.12],[.31,.07]])Ie(e,ei(t(),"lp",1400),n,s);return Ie(e,ft(i,1,{lp:700,attack:.02,decay:.45}),.02,.08),Jt(e,{drive:2.5,fade:.15,presence:3.5})}],shotgun:[2,i=>{let e=Zt(1.7),t=()=>{let n=Zt(.6);return Ie(n,ft(i,.5,{bp:1100,q:.6,attack:3e-4,decay:.05}),0,1),Ie(n,ft(i,.1,{hp:2500,decay:.012}),0,.6),Ie(n,Yt(.6,115,{f1:38,glide:.03,decay:.12}),0,1),Ie(n,ft(i,.6,{lp:800,decay:.3}),.01,.35),n};Ie(e,t(),0,1);for(let[n,s]of[[.11,.25],[.23,.14],[.4,.08]])Ie(e,ei(t(),"lp",1e3),n,s);return Ie(e,ft(i,1.5,{lp:500,attack:.03,decay:.7}),.03,.1),Jt(e,{drive:3,fade:.2,presence:5})}],woundBlood:[3,i=>{let e=Zt(.3);Ie(e,ft(i,.03,{hp:3e3,decay:.006}),0,.5),Ie(e,ft(i,.25,{lp:900,attack:.003,decay:.05}),0,.8),Ie(e,Yt(.2,145,{f1:90,glide:.03,decay:.04}),0,.4);for(let t=0;t<3;t++)Ie(e,ft(i,.05,{bp:1500+i()*900,q:3,decay:.01}),.03+i()*.07,.25);return Jt(e,{drive:1.3})}],woundSand:[3,i=>{let e=Zt(.36);return Ie(e,ft(i,.3,{bp:4300+i()*600,q:.8,attack:.002,decay:.09}),0,.8),Ie(e,ft(i,.15,{lp:500,decay:.03}),0,.5),Jt(e)}],squirtBlood:[3,i=>{let e=Zt(.3),t=.85+i()*.3;Ie(e,ft(i,.2,{bp:1100*t,q:1.6,attack:.012,decay:.045}),0,.9),Ie(e,ft(i,.14,{bp:2600*t,q:2.2,attack:.02,decay:.03}),.01,.4),Ie(e,Yt(.12,240*t,{f1:130,glide:.04,attack:.008,decay:.03}),0,.3);for(let n=0;n<2;n++)Ie(e,ft(i,.04,{lp:1800,decay:.008}),.13+i()*.09,.25);return Jt(e,{drive:1.2})}],squirtSand:[3,i=>{let e=Zt(.32);return Ie(e,ft(i,.28,{bp:4800+i()*800,q:.9,attack:.02,decay:.07}),0,.8),Ie(e,ft(i,.2,{hp:7e3,attack:.03,decay:.06}),.02,.3),Jt(e)}],snapBone:[3,i=>{let e=Zt(.2),t=.85+i()*.3;return Ie(e,ft(i,.03,{bp:2400*t,q:1.6,decay:.006}),0,1),Ie(e,Yt(.05,900*t,{f1:260,glide:.012,decay:.012}),0,.7),Ie(e,ft(i,.03,{bp:3300*t,q:1.4,decay:.005}),.028+i()*.02,.6),Ie(e,Yt(.12,150,{f1:80,glide:.03,decay:.03}),0,.35),Jt(e,{drive:1.5})}],snapSeam:[3,i=>{let e=Zt(.3),t=.85+i()*.3;for(let n=0;n<7;n++)Ie(e,ft(i,.02,{bp:(1500+i()*900)*t,q:1.1,decay:.006}),n*.016+i()*.006,.5+i()*.5);return Ie(e,ft(i,.16,{lp:700,decay:.05}),0,.3),Jt(e,{drive:1.2})}],glass:[2,i=>{let e=Zt(1.9);Ie(e,ft(i,.3,{hp:2500,attack:5e-4,decay:.05}),0,1),Ie(e,ft(i,.5,{bp:5e3,q:1,decay:.15}),0,.5);for(let t=0;t<28;t++)Ie(e,Yt(.5,1800+i()*7200,{decay:.02+i()*.14}),i()*.12,.05+i()*.2);for(let t=0;t<36;t++)Ie(e,Yt(.1,2500+i()*7500,{decay:.008+i()*.022}),.15+Math.pow(i(),1.6)*1.4,.03+i()*.09);return Jt(e,{drive:1.2,fade:.1})}],whoosh:[1,i=>{let e=Zt(.6);return Ie(e,ft(i,.5,{lp:900,attack:.08,decay:.12}),0,.5),Ie(e,ft(i,.6,{lp:260,attack:.15,decay:.2}),0,.8),Jt(e,{peak:.6,fade:.1})}],grunt:[4,i=>{let e=Zt(.4),t=.85+i()*.35,n=Yt(.3,128*t,{f1:84*t,glide:.12,attack:.012,decay:.07,wave:"saw"});return Ie(e,ei(n,"bp",520*t,4),0,1),Ie(e,ei(n,"bp",980*t,5),0,.5),Ie(e,ft(i,.3,{bp:1700,q:1,attack:.02,decay:.08}),0,.14),Jt(ei(e,"lp",2600),{drive:1.5})}],groan:[3,i=>{let e=Zt(.9),t=.85+i()*.3,n=Yt(.8,112*t,{f1:62*t,glide:.35,attack:.05,decay:.3,wave:"saw"});return Ie(e,ei(n,"bp",480*t,4),0,1),Ie(e,ei(n,"bp",860*t,5),0,.4),Ie(e,ft(i,.8,{bp:1500,q:.8,attack:.08,decay:.3}),0,.2),Jt(ei(e,"lp",2200),{drive:1.4,fade:.1})}],click:[1,i=>{let e=Zt(.04);return Ie(e,Yt(.03,1200,{decay:.006}),0,.7),Ie(e,ft(i,.01,{hp:4e3,decay:.002}),0,.4),Jt(e,{peak:.5,fade:.005})}],deny:[1,()=>{let i=Zt(.16);return Ie(i,Yt(.15,300,{f1:220,glide:.05,decay:.05,wave:"tri"}),0,1),Jt(i,{peak:.6})}],buy:[1,i=>{let e=Zt(.45);return Ie(e,Yt(.2,880,{decay:.07,wave:"tri"}),0,.7),Ie(e,Yt(.35,1320,{decay:.1,wave:"tri"}),.07,.8),Ie(e,ft(i,.2,{bp:7e3,q:2,decay:.05}),.07,.25),Jt(e,{peak:.6})}],goal:[1,()=>{let i=Zt(.8);return[660,880,1320].forEach((e,t)=>Ie(i,Yt(.5,e,{decay:.16,wave:"tri"}),t*.09,.7)),Jt(i,{peak:.6,fade:.1})}],stamp:[1,i=>{let e=Zt(.3);return Ie(e,ft(i,.1,{lp:1500,decay:.02}),0,.8),Ie(e,Yt(.25,140,{f1:80,glide:.03,decay:.06}),0,.9),Ie(e,Yt(.2,420,{f1:300,glide:.03,decay:.04}),0,.5),Jt(e,{peak:.7})}]},Sh=Object.keys(Rl);function j_(){let i={};return Sh.forEach((e,t)=>{let[n,s]=Rl[e],r=Gd(1e3+t*77);i[e]=Array.from({length:n},()=>s(r))}),i}function Vd(){let i=j_(),e={},t={},n=null,s,r,a,o={},l=!1,c=1,h=null,f=null,u=null;function d(){if(n){n.state==="suspended"&&n.resume();return}try{n=new(window.AudioContext||window.webkitAudioContext)}catch{n=null;return}s=n.createGain(),r=n.createBiquadFilter(),r.type="lowpass",r.frequency.value=2e4;let M=n.createDynamicsCompressor();M.threshold.value=-14,M.ratio.value=6,M.attack.value=.003,M.release.value=.2,a=n.createGain(),a.gain.value=l?0:.9,s.connect(r).connect(M).connect(a).connect(n.destination);for(let b of Sh)o[b]=i[b].map(P=>{let R=n.createBuffer(1,P.length,Mi);return R.getChannelData(0).set(P),R});let m=Mi*4,p=n.createBuffer(1,m,Mi),S=p.getChannelData(0),A=Gd(5);for(let b=0;b<m;b++)S[b]=(A()*2-1)*(.6+.4*Math.sin(Al*b/m)*Math.sin(Al*3*b/m));for(let b=0;b<2e3;b++){let P=b/2e3;S[b]=S[b]*P+S[m-2e3+b]*(1-P)}h=n.createBufferSource(),h.buffer=p,h.loop=!0,u=n.createBiquadFilter(),u.type="lowpass",u.frequency.value=400,f=n.createGain(),f.gain.value=.035,h.connect(u).connect(f).connect(s),h.start()}function g(M,{vol:m=1,rate:p=1,pan:S=0,delay:A=0,ui:b=!1}={}){if(!n||l||!o[M]||m<=.003)return;let P=o[M];e[M]=((e[M]||0)+1)%P.length,t[M]=(t[M]||0)+1;let R=n.createBufferSource();R.buffer=P[e[M]],R.playbackRate.value=p*(b?1:.55+.45*Math.sqrt(c))*(.97+Math.random()*.06);let x=n.createGain();x.gain.value=Math.min(1,m);let w=R.connect(x);if(S&&n.createStereoPanner){let B=n.createStereoPanner();B.pan.value=Math.max(-1,Math.min(1,S)),w=w.connect(B)}w.connect(b?a:s),R.start(n.currentTime+A)}return{unlock:d,play:g,played:t,names:Sh,get ready(){return!!n},get muted(){return l},setMuted(M){l=!!M,a&&a.gain.setTargetAtTime(l?0:.9,n.currentTime,.02)},setSlow(M){Math.abs(M-c)<.02||(c=Math.max(.05,Math.min(1,M)),n&&(r.frequency.setTargetAtTime(c>.9?2e4:1400+9e3*c,n.currentTime,.06),h.playbackRate.setTargetAtTime(.5+.5*c,n.currentTime,.1)))},setPlace(M){n&&u.frequency.setTargetAtTime({yard:420,stairs:190,window:750}[M]||400,n.currentTime,.3)}}}var xe=i=>document.getElementById(i),bh=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim(),On=i=>"$"+Math.round(i).toLocaleString("en-US");async function Q_(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(i){return console.warn("WASM physics unavailable, using asm.js build",i),await(await import("./vendor/jolt-physics.js")).default()}}function ex(i){let e=Fd(i),t=xe("view"),n=new Ml({canvas:t,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=cs,n.toneMapping=Jr,n.toneMappingExposure=1.15;let s=new Sr,r=new Mt(bh("--sky"));s.background=r,s.fog=new Mr(r,14,38);let a=new Rn(42,1,.1,120);s.add(new qr(13623538,3814960,1.05));let o=new $r(16769725,2.6);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),o.shadow.bias=-6e-4,o.shadow.normalBias=.03,s.add(o,o.target);let l=new Mt(bh("--concrete")),c=new Mt(bh("--hazard")),h=(Ud.half+10)*2,f=(()=>{let C=document.createElement("canvas");C.width=C.height=2048;let I=C.getContext("2d"),V=C.width/h,se=C.width/2;I.fillStyle="#"+l.clone().multiplyScalar(.62).getHexString(),I.fillRect(0,0,C.width,C.height),I.strokeStyle="rgba(0,0,0,0.13)",I.lineWidth=2;for(let Se=-h/2;Se<=h/2;Se+=2)I.beginPath(),I.moveTo(se+Se*V,0),I.lineTo(se+Se*V,C.height),I.moveTo(0,se+Se*V),I.lineTo(C.width,se+Se*V),I.stroke();I.strokeStyle="rgba(241,239,233,0.42)",I.fillStyle="rgba(241,239,233,0.6)",I.lineWidth=3,I.font='700 30px "Big Shoulders Display", Impact, sans-serif',I.textAlign="center";for(let Se=2;Se<=12;Se+=2)I.beginPath(),I.arc(se,se,Se*V,0,Math.PI*2),I.stroke(),I.fillText(Se+" m",se+Se*V,se+34);I.strokeStyle="#"+c.getHexString(),I.lineWidth=5,I.beginPath(),I.moveTo(se-14,se-14),I.lineTo(se+14,se+14),I.moveTo(se+14,se-14),I.lineTo(se-14,se+14),I.stroke();let te=new Pr(C);return te.anisotropy=8,te.colorSpace=An,te})(),u=new hn(new Yi(h,h),new Mn({map:f,roughness:.96}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,s.add(u);let d=new hn(new $n(h,3.2,.4),new Mn({color:l.clone().multiplyScalar(.5),roughness:1}));d.position.set(0,1.6,-11),s.add(d);let g=new hn(new Yi(100,160),new Mn({color:l.clone().multiplyScalar(.36),roughness:1}));g.rotation.x=-Math.PI/2,g.position.set(0,-.003,105),g.receiveShadow=!0,s.add(g);let M={landing:new Mn({color:l,roughness:.95}),step:new Mn({color:l,roughness:.95}),stepAlt:new Mn({color:l.clone().multiplyScalar(.88),roughness:.95}),wall:new Mn({color:l.clone().multiplyScalar(.55),roughness:1}),building:new Mn({color:l.clone().multiplyScalar(.8),roughness:1}),sill:new Mn({color:l.clone().multiplyScalar(1.05),roughness:.9}),frame:new Mn({color:2237995,roughness:.5,metalness:.4})};e.statics.forEach((C,I)=>{let V=new hn(new $n(C.h[0]*2,C.h[1]*2,C.h[2]*2),C.kind==="step"&&I%2?M.stepAlt:M[C.kind]);V.position.set(C.c[0],C.c[1],C.c[2]),V.castShadow=!0,V.receiveShadow=!0,s.add(V)});let m=[0,1,2].map(C=>{let I=-(.7+.3*C),V=new Vs;return V.moveTo(-.2,I),V.lineTo(0,I+.16),V.lineTo(.2,I),V.lineTo(.2,I-.07),V.lineTo(0,I+.09),V.lineTo(-.2,I-.07),V.closePath(),V}),p=new hn(new Vr(m),new Xi({color:c,transparent:!0,opacity:.6,depthWrite:!1,side:Kn}));p.geometry.rotateX(-Math.PI/2),s.add(p);let S=e.glass.tiles,A=new ks(new $n(1,1,1),new Mn({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),S.length);A.frustumCulled=!1,s.add(A);let b=new kt,P=new Gn,R=new O,x=new O,w=new Float32Array(7);function B(){for(let C=0;C<S.length;C++)e.glass.transform(C,w),b.compose(R.set(w[0],w[1],w[2]),P.set(w[3],w[4],w[5],w[6]),x.set(S[C].h[0]*2,S[C].h[1]*2,S[C].h[2]*2)),A.setMatrixAt(C,b);A.instanceMatrix.needsUpdate=!0}B();let D=new Mn({color:2303788,roughness:.6}),z=new Mn({color:15855593,roughness:.6}),H=Dn.fluid,Q=new Mt(H.ground),F=new Mt(H.soak);document.documentElement.dataset.edition=Dn.id,document.documentElement.style.setProperty("--blood",H.gauge),xe("gauge-label").textContent=Xn("Blood"),xe("intro-note").textContent=Dn.contentNote;let Y=[],ee=[],$=new Float32Array(qt.length);qt.forEach((C,I)=>{let V=new hn(new Dr(C.r,C.hh*2,6,16),new Mn({color:c,roughness:.55}));V.castShadow=!0,V.receiveShadow=!0,V.userData.part=I;let se=(te,Se,De,Dt,At)=>{let Lt=new hn(te,Se);return Lt.position.set(De,Dt,At),Lt.castShadow=!0,V.add(Lt),Lt};C.parent>=0&&C.name!=="head"&&se(new ls(C.r*(C.name==="chest"?.86:1.12),14,10),D,C.j[0]-C.c[0],C.j[1]-C.c[1],C.j[2]-C.c[2]),C.name==="head"&&(se(new $n(.05,.05,.15),D,-C.r+.01,.03,0),se(new as(.045,.05,.1,10),D,0,-C.hh-C.r-.01,0)),C.name==="chest"&&(se(new as(.06,.06,.012,20),z,-C.r+.004,.05,0).rotation.z=Math.PI/2,se(new as(.028,.028,.016,16),D,-C.r+.003,.05,0).rotation.z=Math.PI/2),C.name.startsWith("larm")&&se(new ls(.048,12,8),D,0,-C.hh-C.r-.02,0),C.name.startsWith("lleg")&&se(new $n(.24,.07,.09),D,-.06,-C.hh-C.r+.035,0),s.add(V),Y.push(V)});let ue=new Float32Array(7);function ne(){for(let C=0;C<Y.length;C++)e.transform(C,ue),Y[C].position.set(ue[0],ue[1],ue[2]),Y[C].quaternion.set(ue[3],ue[4],ue[5],ue[6]),Y[C].updateMatrixWorld()}function re(C,I,V){let se=new Float32Array(C*3),te=new Float32Array(C*3),Se=new Float32Array(C),De=new vn;De.setAttribute("position",new zn(se,3));let Dt=new Rr(De,new Gs({color:I,size:V,transparent:!0,opacity:.95,depthWrite:!1}));Dt.frustumCulled=!1,s.add(Dt);let At=0;return{emit(Lt,jt,Bt){let rt=At;At=(At+1)%C,se.set(Lt,rt*3),te.set(jt,rt*3),Se[rt]=Bt},step(Lt,jt){for(let Bt=0;Bt<C;Bt++){if(Se[Bt]<=0){se[Bt*3+1]=-50;continue}Se[Bt]-=Lt,te[Bt*3+1]-=9.8*Lt;for(let rt=0;rt<3;rt++)se[Bt*3+rt]+=te[Bt*3+rt]*Lt;se[Bt*3+1]<=e.groundY(se[Bt*3],se[Bt*3+2])+.005&&(jt&&jt(se[Bt*3],se[Bt*3+2]),Se[Bt]=0)}De.attributes.position.needsUpdate=!0}}}let _e=re(200,15326404,.05),Ve=re(700,H.particle,.06),dt=re(260,14677759,.035);function le(C,I,V){for(let se=0;se<I;se++){let te=Math.random()*6.28,Se=V*(.3+Math.random());_e.emit(C,[Math.cos(te)*Se,.5+Math.random()*Se,Math.sin(te)*Se],.4+Math.random()*.5)}}let ke=900,ce=new ks(new Nr(1,14),new Xi({color:Q,transparent:!0,opacity:H.groundOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),ke);ce.frustumCulled=!1,ce.count=0,s.add(ce);let et=new kt,he=new Gn().setFromEuler(new ri(-Math.PI/2,0,0)),Oe=new O,lt=new O,at=0,pt=[];function Ot(C,I,V,se){et.compose(lt.set(I,e.groundY(I,V)+.004+C%7*4e-4,V),he,Oe.set(se,se*(.75+C%5*.08),1)),ce.setMatrixAt(C,et),ce.instanceMatrix.needsUpdate=!0}function ot(C,I,V){let se=at;return at=(at+1)%ke,ce.count=Math.max(ce.count,se+1),Ot(se,C,I,V),se}let Kt=(C,I)=>ot(C,I,.02+Math.random()*.045),bt=new O,nn=new O,Vt=0,mn=0,sn=0,ln=0;function gn(C){let I=e.state;Vt+=C*(I.alive?1.15+(100-I.blood)*.008:0);let V=Math.pow(Math.max(0,Math.sin(Vt*Math.PI*2)),6),se=Vt%1,te=(mn<.12||mn>se)&&se>=.12;if(mn=se,te&&I.blood>0){sn++;let Se=null;for(let Dt of e.wounds)Dt.left>0&&(!Se||(Dt.arterial?10:0)+Dt.rate>(Se.arterial?10:0)+Se.rate)&&(Se=Dt);let De=performance.now();Se&&(Se.arterial||sn%2===0)&&De-ln>300&&(ln=De,Y[Se.part].getWorldPosition(bt),$e.play(Dn.sounds.squirt,{vol:Se.arterial?.34:.1+Math.min(.1,Se.rate*.02),rate:Se.arterial?1:.85,pan:E([bt.x,bt.y,bt.z])}))}e.wounds.forEach((Se,De)=>{let Dt=Se.left>0&&I.blood>0,At=Dt?Se.rate:.25,Lt=Y[Se.part];bt.set(Se.at[0],Se.at[1],Se.at[2]),nn.copy(bt).setY(0).normalize().transformDirection(Lt.matrixWorld),bt.applyMatrix4(Lt.matrixWorld),$[Se.part]=Math.min(1,$[Se.part]+C*At*.02),ee[De]&&ee[De].scale.setScalar(1+$[Se.part]*2.2);let jt=Se.arterial&&Dt?V:0,Bt=C*At*(Se.arterial?8:5)+jt*C*260;Bt=Math.floor(Bt)+(Math.random()<Bt%1?1:0);for(let rt=0;rt<Bt;rt++){let en=jt>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;Ve.emit([bt.x,bt.y,bt.z],[nn.x*en+(Math.random()-.5)*.4,nn.y*en+Math.random()*.5*en,nn.z*en+(Math.random()-.5)*.4],1.6)}if(I.mode==="down"&&bt.y-e.groundY(bt.x,bt.z)<.4){let rt=pt[De];(!rt||Math.hypot(rt.x-bt.x,rt.z-bt.z)>.25)&&(rt=pt[De]={i:ot(bt.x,bt.z,.03),x:bt.x,z:bt.z,r:.03}),rt.r=Math.min(.55,Math.sqrt(rt.r*rt.r+C*At*.0022)),Ot(rt.i,rt.x,rt.z,rt.r)}});for(let Se=0;Se<Y.length;Se++)$[Se]>0&&Y[Se].material.color.copy(c).lerp(F,$[Se]*H.soakAmount)}let It=new vn().setFromPoints([new O,new O]),k=new Ar(It,new zs({color:16773577,transparent:!0,opacity:0}));k.frustumCulled=!1,s.add(k);let xt=[];function Ut(C,I,V,se=.25){let te=xt.find(Se=>Se.life<=0);if(!te){if(xt.length>=16)return;te={el:document.createElement("div"),life:0,pos:new O},xe("app").appendChild(te.el),xt.push(te)}te.el.className="callout"+(V?" big":""),te.el.textContent=C,te.pos.set(I[0],I[1]+se,I[2]),te.life=te.max=V?1.6:1.2}let Ue=new O;function we(C){for(let I of xt){if(I.life<=0){I.el.style.opacity=0;continue}I.life-=C,I.pos.y+=C*.4,Ue.copy(I.pos).project(a);let V=(Ue.x*.5+.5)*t.clientWidth,se=(-Ue.y*.5+.5)*t.clientHeight;I.el.style.transform=`translate(${V.toFixed(1)}px, ${se.toFixed(1)}px) translate(-50%, -50%)`,I.el.style.opacity=Ue.z>1?0:Math.min(1,I.life/(I.max*.4))}}let $e=Vd();function Ke(){let C=!$e.ready;$e.unlock(),C&&$e.ready&&$e.setPlace(e.levelKey)}let ht=new O,E=C=>C?Math.max(-1,Math.min(1,ht.set(C[0],C[1],C[2]).project(a).x))*.7:0,y="poke",X=!1,ge=0,j=1,ye=!1,Te=!1,ie=1,oe=-1e9,Ee=0,N=!1,ae=!1,G=tr();try{G=fh(localStorage.getItem("imhit.save"))}catch{}let Me=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(G))}catch{}},fe=()=>G.mode==="free",Ae={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},qe={};function gt(){for(let I in qe)qe[I].remove(),delete qe[I];xe("pick-list").innerHTML="";let C=El(G);C.includes(y)||(y=C.at(-1));for(let I of C)for(let[V,se]of[["tools","tool-"+I],["pick-list","pick-"+I]]){let te=document.createElement("button");te.type="button",te.className="tool",te.id=se,te.dataset.tool=I,te.innerHTML=`<b>${wl[I].label}</b><i>${Xn(Ae[I])}</i>`,te.addEventListener("click",()=>{y=I,ve(),it(),Ke(),$e.play("click",{ui:!0,vol:.5})}),xe(V).appendChild(te),V==="tools"&&(qe[I]=te)}xe("pick").classList.toggle("single",C.length<2),ve(),xe("slow").hidden=!ci(G,"slowmo"),xe("slow").hidden&&(X=!1,xe("slow").setAttribute("aria-pressed","false"))}function ve(){for(let C in qe)qe[C].setAttribute("aria-pressed",String(C===y));for(let C of xe("pick-list").children)C.setAttribute("aria-pressed",String(C.dataset.tool===y));xe("pick-name").textContent=wl[y].label,xe("pick-note").textContent=Xn(Ae[y])}function it(){xe("pick-list").hidden=!0,xe("pick").setAttribute("aria-expanded","false")}xe("pick").addEventListener("click",()=>{if(xe("pick").classList.contains("single"))return;let C=xe("pick-list").hidden;xe("pick-list").hidden=!C,xe("pick").setAttribute("aria-expanded",String(C))}),document.addEventListener("pointerdown",C=>{!xe("pick-list").hidden&&!C.target.closest(".picker")&&it()},!0);function yt(){let C=da(G);xe("pips").innerHTML=fe()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:C},(I,V)=>`<span class="pip${V<ie?" on":""}"></span>`).join("")}function Fe(){let C=gh(G,e.levelKey);xe("hint").hidden=!1,xe("hint").innerHTML=fe()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(C?`<b>Goal</b> ${C.text} <span>\u2605 +${On(C.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(da(G)>=2&&!G.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function T(){xe("bank").textContent=On(G.bank),xe("stars").textContent="\u2605 "+nr(G)+" / "+Tl,xe("mode-career").setAttribute("aria-pressed",String(!fe())),xe("mode-free").setAttribute("aria-pressed",String(fe()));for(let I in _){let V=Fi(G,I);_[I].disabled=!V;let se=Bi[I].filter(te=>G.goals.includes(te.id)).length;_[I].lastChild.textContent=V?Qn[I].blurb+" \u2605 "+se+"/"+Bi[I].length:"Opens at \u2605 "+gs[I]+". You have "+nr(G)+"."}xe("where-level").textContent=e.level.label,xe("where-mode").textContent=fe()?"Free play":"Career";let C=!fe()&&Oi.some(I=>!fa(G,I));xe("shop-open").classList.toggle("ready",C),xe("shop-open").textContent=C?"Shop \u2022":"Shop"}let _={};for(let[C,I]of Object.entries(Qn)){let V=document.createElement("button");V.type="button",V.className="level",V.id="level-"+C,V.innerHTML=`<b>${Object.keys(Qn).indexOf(C)+1} \xB7 ${I.label}</b><i>${I.blurb}</i>`,V.addEventListener("click",()=>L(C)),xe("levels").appendChild(V),_[C]=V}function L(C,I){if(!I&&!Fi(G,C))return;e.setLevel(C),G.level=C,Me(),Be.aim={yaw:e.level.cam.yaw,pitch:e.level.cam.pitch,dist:e.level.cam.dist},Qe();let V=e.level;for(let se in _)_[se].setAttribute("aria-pressed",String(se===C));xe("menu").hidden=!0,$e.setPlace(C),Be.aim={yaw:V.cam.yaw,pitch:V.cam.pitch,dist:V.cam.dist},Be.swing=0,Te=!1,Be.yaw=V.cam.yaw,Be.pitch=V.cam.pitch,Be.dist=V.cam.dist,Be.target.set(V.start[0],V.start[1]+.92,V.start[2])}function K(C){G.mode=C==="free"?"free":"career",Me(),Qe(),T()}xe("where").addEventListener("click",()=>{xe("menu").hidden=!1}),xe("menu-close").addEventListener("click",()=>{xe("menu").hidden=!0});for(let C of["menu","shop"])xe(C).addEventListener("click",I=>{I.target===xe(C)&&(xe(C).hidden=!0)});xe("mode-career").addEventListener("click",()=>K("career")),xe("mode-free").addEventListener("click",()=>K("free"));function de(){xe("shop-bank").textContent=On(G.bank)+" banked \xB7 \u2605 "+nr(G)+" / "+Tl+(ir(G)>1?" \xB7 pays \xD7"+ir(G).toFixed(2):"");let C="";for(let I of[...new Set(Oi.map(V=>V.group))]){C+=`<h3>${I}</h3>`;for(let V of Oi.filter(se=>se.group===I)){let se=fa(G,V);C+=`<div class="item${se==="Owned"?" owned":""}"><div><b>${V.name}</b><p>${Dn.shop[V.id]||V.does}</p></div>`+(se==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${V.id}" id="buy-${V.id.replace(".","-")}"${se?" disabled":""}>${On(V.price)}${se&&se!=="Not enough"?`<small>${se}</small>`:""}</button>`)+"</div>"}}C+="<h3>Goals</h3>";for(let[I,V]of Object.entries(Bi)){let se=Fi(G,I);C+=`<h4>${Qn[I].label}${se?"":" \xB7 opens at \u2605"+gs[I]}</h4><ul class="goals">`+V.map(te=>`<li class="${G.goals.includes(te.id)?"got":""}"><span>${G.goals.includes(te.id)?"\u2605":"\u2606"}</span>${te.text}<em>${On(te.reward)}</em></li>`).join("")+"</ul>"}xe("shop-list").innerHTML=C}xe("shop-list").addEventListener("click",C=>{let I=C.target.closest(".buy");!I||!ph(G,I.dataset.id)||(Me(),Ke(),$e.play("buy",{ui:!0,vol:.55}),I.dataset.id.startsWith("tool.")&&(y=I.dataset.id.slice(5)),gt(),T(),de(),e.state.hits||Qe())});function ze(){de(),xe("shop").hidden=!1}xe("shop-open").addEventListener("click",ze),xe("result-shop").addEventListener("click",ze),xe("shop-close").addEventListener("click",()=>{xe("shop").hidden=!0});let Ne=vh.has("dev");xe("unlock-all").hidden=!Ne,xe("unlock-all").addEventListener("click",()=>{xh(G),Me(),gt(),T(),de(),Qe()});let Ge=0;xe("wipe").addEventListener("click",()=>{if(performance.now()-Ge>3e3){Ge=performance.now(),xe("wipe").textContent="Tap again to erase everything";return}G=tr(),Me(),Ge=0,xe("wipe").textContent="Erase progress",gt(),L("yard",!0),T(),de()}),xe("slow").addEventListener("click",()=>{X=!X,xe("slow").setAttribute("aria-pressed",String(X))});function Le(){xe("sound").setAttribute("aria-pressed",String(!$e.muted)),xe("sound").textContent=$e.muted?"Sound off":"Sound on"}xe("sound").addEventListener("click",()=>{Ke(),$e.setMuted(!$e.muted),G.muted=$e.muted,Me(),Le(),$e.muted||$e.play("click",{ui:!0,vol:.5})});function Qe(){e.reset();for(let C of ee)C.parent.remove(C);ee.length=0,pt.length=0,$.fill(0),ce.count=0,at=0;for(let C of Y)C.material.color.copy(c);ye=!1,ge=0,N=!1,oe=-1e9,pe.length=0,me(),Be.target.set(e.level.start[0],e.level.start[1]+.92,e.level.start[2]),Be.zoom=.8,Be.swing=0,Te=!1,Be.yaw=Be.aim.yaw,Be.pitch=Be.aim.pitch,Be.dist=Be.aim.dist,ie=fe()?1/0:da(G),B(),xe("result").hidden=!0,yt(),Fe(),T(),Pe()}xe("reset").addEventListener("click",Qe);for(let C of["pointerdown","pointerup","pointercancel","pointerleave"])xe("ff").addEventListener(C,I=>{ae=C==="pointerdown",xe("ff").setAttribute("aria-pressed",String(ae)),ae&&I.preventDefault()});xe("ff").addEventListener("contextmenu",C=>C.preventDefault()),xe("next").addEventListener("click",Qe),xe("result-go").addEventListener("click",()=>L(xe("result-go").dataset.level)),window.addEventListener("keydown",C=>{C.code==="Space"&&(X=!0,C.preventDefault()),C.code==="KeyR"&&Qe(),C.code==="KeyF"&&(ae=!0);let I=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(C.code),V=El(G);I>=0&&V[I]&&(y=V[I],ve())}),window.addEventListener("keyup",C=>{C.code==="KeyF"&&(ae=!1),C.code==="Space"&&(X=xe("slow").getAttribute("aria-pressed")==="true")});function Ye(){let C=e.state;return C.alive?C.ko?"Out cold":C.mode==="down"?Xn(N?"Bleeding out \u25B8\u25B8":C.bleed>.2?"Down, bleeding out":"Down"):C.mode==="fall"?"Going down":C.mode==="rise"?"Getting up":C.mode==="kneel"?"On his knees":C.hits===0?"Standing":Xn(C.bleed>.2?C.strength<.75?"Staggering, bleeding":"Hit, bleeding":C.stun>.25?"Dazed":"On his feet"):Xn(C.outcome)||"Dead"}function Pe(){let C=e.payout(),I=e.state;return xe("lines").innerHTML=C.lines.map(V=>`<tr><td>${Xn(V[0])}</td><td>${V[1]}</td><td>${On(V[2])}</td></tr>`).join(""),xe("total").textContent=On(C.total),xe("blood-fill").style.width=I.blood.toFixed(1)+"%",xe("blood-num").textContent=Math.round(I.blood)+"%",xe("condition").textContent=Ye(),C}Pe();let pe=[];function me(C){let I=innerWidth<=560?4:6;xe("feed").innerHTML=pe.slice(0,I).map((V,se)=>`<li class="l${V.level}${V.fatal?" fatal":""}${se===0&&C?" new":""}${se>=2?" old":""}">${Mh(V.base,V.side,V.level)}<em>+${On(dh[V.level])}</em></li>`).join("")+(pe.length>I?`<li class="more">and ${pe.length-I} more</li>`:"")}function ct(){let C=pe.slice().sort((te,Se)=>Se.level-te.level),I=C.filter(te=>te.level>=2),V=C.length-I.length,se=I.slice(0,5).map(te=>(te.level===3?"<b>":"")+Mh(te.base,te.side,te.level)+(te.level===3?"</b>":""));return I.length>5&&se.push(I.length-5+" more "+Dn.injury.levels[2]),V&&se.push(V+" "+Dn.injury.levels[1]),se.join(" \xB7 ")}let st={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},_t=new O,Tt=C=>{if(Dn.haptics&&navigator.vibrate)try{navigator.vibrate(C)}catch{}};function Pt(C,I){if(e.state.done)return;if(Ke(),ie<=0){xe("pips").classList.remove("nudge"),xe("pips").offsetWidth,xe("pips").classList.add("nudge"),$e.play("deny",{ui:!0,vol:.4});return}let V=wl[y],se=new O().subVectors(I,a.position).normalize(),te=Math.hypot(se.x,se.z)||1,Se=V.kind==="ballistic"?[se.x,se.y,se.z]:[se.x/te*.97,y==="bat"?.2:.1,se.z/te*.97],De=[I.x,I.y,I.z],Dt=e.hit(C,De,Se,V);if(!Dt)return;fe()||(ie--,yt()),Tt(V.impulse>100?35:18);let At=new hn(new ls(V.kind==="ballistic"?.024:.04,10,8),new Xi({color:V.bleed>0?H.mark:1314828}));if(Y[C].worldToLocal(_t.copy(I)),At.position.copy(_t),Y[C].add(At),ee.push(At),V.kind==="ballistic"){It.setFromPoints([a.position.clone().add(new O(.22,-.3,0).applyQuaternion(a.quaternion)),I.clone()]),k.material.opacity=.9,$e.play(y==="shotgun"?"shotgun":"pistol",{vol:.95}),$e.play(Dn.sounds.wound,{vol:y==="shotgun"?.75:.55,pan:E(De),delay:.03});for(let jt=0;jt<(y==="shotgun"?46:18);jt++)Ve.emit(De,[Se[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,Se[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else $e.play(y,{vol:y==="poke"?.6:.9,pan:E(De)}),le(De,8,1.2);let Lt=Dt==="thigh"||Dt==="shin"?"leg":Dt;Ut(st[Lt]||Lt,De,!0),e.state.alive&&!e.state.ko&&(V.bleed>0||V.stun>.3)&&$e.play("grunt",{vol:.4,pan:E(De),delay:.12}),$e.play("whoosh",{vol:.45,delay:.04,ui:!0}),ge=1.1,fe()&&(xe("hint").hidden=!0)}function un(C){for(let I of C)if(I.type==="fall"&&e.state.alive&&!e.state.ko&&$e.play("grunt",{vol:.3,pan:E(I.pos),rate:1.15}),I.type==="impact"){let V=Math.min(1,I.dv/9);I.dv>5&&Tt(12),$e.play(I.zone==="head"?"knock":I.zone==="chest"||I.zone==="gut"?"thud":"limb",{vol:.12+V*.8,rate:1.12-V*.22,pan:E(I.pos)}),le(I.pos,Math.min(10,2+Math.round(I.dv)),.8)}else if(I.type==="injury"){let V=pe.findIndex(te=>te.bone===I.bone);V>=0&&pe.splice(V,1);let se=I.base==="neck"&&I.level>=2||I.base==="skull"&&I.level===3;pe.unshift({bone:I.bone,base:I.base,side:I.side,level:I.level,fatal:se}),me(!0),I.level>=2&&($e.play(Dn.sounds.snap,{vol:I.level===3?.75:.5,rate:I.level===3?.85:1.05,pan:E(I.pos),delay:I.cause==="shot"?.05:0}),Tt(I.level===3?28:14)),se&&I.cause!=="shot"&&Ut(Xn(I.base==="neck"?"Broken neck":"Skull shattered"),I.pos,!0,.5)}else if(I.type==="step")$e.play(I.hurt>.3?"scuff":"step",{vol:I.hurt>.3?.3:.22,pan:E(I.pos)}),e.state.hits>0&&le(I.pos,2,.35);else if(I.type==="buckle")$e.play("scuff",{vol:.2,pan:E(I.pos)});else if(I.type==="glass"){$e.play("glass",{vol:e.state.clock-oe>.7?.9:.4,pan:E(I.pos),rate:.9+Math.random()*.25}),Tt(30);for(let V=0;V<26;V++)dt.emit([I.pos[0]+(Math.random()-.5)*.9,I.pos[1],I.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);e.state.clock-oe>.7&&Ut("Through the glass",I.pos,!0,.5),oe=e.state.clock}else if(I.type==="fall"&&(e.state.fellBecause==="edge"||e.state.fellBecause==="trip"))Ut(e.state.fellBecause==="trip"?"Over the sill":"Lost his footing",I.pos,!0,.7);else if(I.type==="out")Ut("Out cold",I.pos,!0,.55);else if(I.type==="rise")$e.play("grunt",{vol:.3,pan:E(I.pos),rate:.9}),$e.play("scuff",{vol:.3,pan:E(I.pos)});else if(I.type==="up")Ut("Back on his feet",I.pos,!0,.9);else if(I.type==="gaveout")$e.play("groan",{vol:.35,pan:E(I.pos)});else if(I.type==="kneel")$e.play("knees",{vol:.6,pan:E(I.pos)}),$e.play("groan",{vol:.32,pan:E(I.pos),delay:.1}),Ut("Knees",I.pos,!1,.9);else if(I.type==="down")I.onFeet>1&&Ut("On his feet "+I.onFeet.toFixed(1)+" s",I.pos,!1,.6);else if(I.type==="dead"&&I.cause==="Bled out")Ut(Xn("Bled out")+" \xB7 "+I.time.toFixed(1)+" s",I.pos,!0,.5);else if(I.type==="done"&&!ye){ye=!0,Ee=performance.now();let V=Pe(),se=e.levelKey,te="";if(fe())xe("result-label").textContent="Free play",xe("result-total").textContent=On(V.total),xe("result-note").textContent=Xn(I.outcome)+" \xB7 nothing is banked in free play";else{let De=_h(G,se,e.state,V.total),Dt=ir(G);Me(),xe("result-label").textContent=De.record&&De.pay>0?"New best take":"Take over",xe("result-total").textContent=On(De.pay+De.bonus),xe("result-note").textContent=Xn(I.outcome)+(Dt>1?" \xB7 pays \xD7"+Dt.toFixed(2):"")+" \xB7 best here "+On(G.best[se]||0),te=De.goals.map(Lt=>`<li><span>\u2605</span>${Lt.text}<em>+${On(Lt.reward)}</em></li>`).join("")+De.opened.map(Lt=>`<li class="opened"><span>\u2192</span>New level: ${Qn[Lt].label}</li>`).join("");let At=mh(G);At&&(te+=`<li class="save-for"><span>$</span>${G.bank>=At.price?"You can afford "+At.name:On(At.price-G.bank)+" short of "+At.name}</li>`),De.goals.length&&$e.play("goal",{ui:!0,vol:.5,delay:.25})}$e.play("stamp",{ui:!0,vol:.45}),xe("result-goals").innerHTML=te,xe("result-injuries").innerHTML=ct(),xe("result-lines").innerHTML=V.lines.filter(De=>De[2]>0).map(De=>`<tr><td>${Xn(De[0])}</td><td>${De[1]}</td><td>${On(De[2])}</td></tr>`).join(""),xe("result-shop").hidden=fe();let Se=!fe()&&te.includes("New level")?Object.keys(Qn).filter(De=>Fi(G,De)).at(-1):"";xe("result-go").hidden=!Se,xe("result-go").dataset.level=Se,Se&&(xe("result-go").textContent="Go to "+Qn[Se].label),T(),Fe(),xe("result").hidden=!1}}let Be={yaw:-1.12,pitch:.22,dist:6.2,zoom:.8,target:new O(0,.95,0),aim:{yaw:-1.12,pitch:.22,dist:6.2},swing:0},Nn=new O,bn=new Kr,v=new Ze,U=null;t.addEventListener("pointerdown",C=>{U={x:C.clientX,y:C.clientY,moved:!1,id:C.pointerId},t.setPointerCapture(C.pointerId)}),t.addEventListener("pointermove",C=>{if(!U||U.id!==C.pointerId)return;let I=C.clientX-U.x,V=C.clientY-U.y;!U.moved&&Math.hypot(I,V)<7||(U.moved=!0,Te=!0,Be.yaw-=I*.006,Be.pitch=Math.max(.03,Math.min(1.3,Be.pitch+V*.005)),Be.swing===0&&(Be.aim.yaw=Be.yaw,Be.aim.pitch=Be.pitch),U.x=C.clientX,U.y=C.clientY)});let J=C=>{if(!U||U.id!==C.pointerId)return;let I=!U.moved;if(U=null,!I||C.type==="pointercancel")return;if(e.state.done){performance.now()-Ee>450&&Qe();return}let V=t.getBoundingClientRect();v.set((C.clientX-V.left)/V.width*2-1,-((C.clientY-V.top)/V.height)*2+1),bn.setFromCamera(v,a);let se=bn.intersectObjects(Y,!1);se.length&&Pt(se[0].object.userData.part,se[0].point)};t.addEventListener("pointerup",J),t.addEventListener("pointercancel",J),t.addEventListener("wheel",C=>{Be.dist=Math.max(3,Math.min(16,Be.dist*(1+Math.sign(C.deltaY)*.08))),Be.swing===0&&(Be.aim.dist=Be.dist),C.preventDefault()},{passive:!1});function W(){let C=t.clientWidth,I=t.clientHeight;!C||!I||(n.setSize(C,I,!1),a.aspect=C/I,a.updateProjectionMatrix())}new ResizeObserver(W).observe(t),W();function q(C){let I=e.pos(1),V=e.state,se=e.level.cam.fall;if(Nn.set(I[0],Math.max(e.groundY(I[0],I[2])+.5,I[1]-.4),I[2]),Be.target.lerp(Nn,1-Math.exp(-C*3)),Be.zoom+=((V.hits===0?.8:1)-Be.zoom)*Math.min(1,C*2),se&&!Te&&V.drop>.35){Be.swing=Math.min(1,Be.swing+C/.9);let De=Be.swing*Be.swing*(3-2*Be.swing),Dt=se.yaw-Be.aim.yaw;Dt=Math.atan2(Math.sin(Dt),Math.cos(Dt)),Be.yaw=Be.aim.yaw+Dt*De,Be.pitch=Be.aim.pitch+(se.pitch-Be.aim.pitch)*De,Be.dist=Be.aim.dist+(se.dist-Be.aim.dist)*De}let te=Be.dist*Be.zoom/Math.pow(Math.min(1,a.aspect),.75),Se=Math.cos(Be.pitch);if(a.position.set(Be.target.x+Math.sin(Be.yaw)*Se*te,Be.target.y+Math.sin(Be.pitch)*te,Be.target.z+Math.cos(Be.yaw)*Se*te),a.lookAt(Be.target),o.position.set(Be.target.x-4,Be.target.y+10,Be.target.z+7),o.target.position.set(Be.target.x,Be.target.y-1,Be.target.z),p.visible=V.mode==="balance"&&!V.done&&(fe()||ie>0),p.visible){let De=e.pos(0);p.position.set(De[0],e.groundY(De[0],De[2])+.012,De[2]),p.rotation.y=Math.atan2(-(De[0]-a.position.x),-(De[2]-a.position.z))}}let Re=performance.now(),We=0,Ce=!1,be={n:0,sum:0,stage:0};function Je(C){if(be.stage>1||(++be.n>30&&(be.sum+=C),be.n<150))return;let I=be.sum/120>.03;if(be.n=0,be.sum=0,!I){be.stage=2;return}be.stage===0?(n.setPixelRatio(1),W()):o.castShadow=!1,be.stage++}let je={n:0,sum:0,worst:0,phys:0};function wt(C){if(je.n++,je.sum+=C,je.worst=Math.max(je.worst,C),je.sum<.5)return;let I=o.castShadow?n.getPixelRatio()<Math.min(window.devicePixelRatio||1,2)?"reduced resolution":"full quality":"no shadows";xe("fps").textContent=Math.round(je.n/je.sum)+" fps \xB7 worst frame "+Math.round(je.worst*1e3)+" ms \xB7 physics "+(je.phys/je.n).toFixed(1)+" ms \xB7 "+I+" \xB7 "+Dn.id+" edition",je.n=0,je.sum=0,je.worst=0,je.phys=0}xe("fps").hidden=!Ne;function Xe(C){Ce||(Ne&&wt((C-Re)/1e3),Je((C-Re)/1e3),Et(Math.max(0,Math.min(.05,(C-Re)/1e3))),Re=C,requestAnimationFrame(Xe))}function Et(C,I=!0){ge=Math.max(0,ge-C);let V=e.state;N=!fe()&&V.mode==="down"&&V.spent&&V.alive&&V.bleed>.2&&ge<=0&&(ie<=0||V.time-V.downAt>1.5);let se=ae&&V.hits>0&&!V.done;se&&(ge=0);let te=se?7:N?6:X?.2:ge>.45?.16:ge>0?.16+(1-ge/.45)*.84:1;j+=(te-j)*Math.min(1,C*(N?3:se?8:14)),!N&&!se&&j>1&&(j=1);let Se=Math.min(C*j,18/120);$e.setSlow(Math.min(1,j));let De=Math.max(1,Math.ceil(Se/(1/120))),Dt=Ne?performance.now():0;if(Se>1e-5)for(let jt=0;jt<De;jt++)un(e.step(Se/De));Ne&&(je.phys+=performance.now()-Dt),ne(),gn(Se),_e.step(Se),Ve.step(Se,Kt),dt.step(Se),e.levelKey==="window"&&e.state.glass>0&&B(),k.material.opacity=Math.max(0,k.material.opacity-C*5),q(C),we(C);let At=e.state.wrap||0,Lt=e.state.hits>0&&!e.state.done&&At>.2;xe("wrap").hidden===Lt&&(xe("wrap").hidden=!Lt),Lt&&(xe("wrap-fill").style.width=(At*100).toFixed(0)+"%"),We+=C,We>.1&&!e.state.done&&(We=0,Pe()),I&&n.render(s,a)}if($e.setMuted(!!G.muted),Le(),Ne){xe("soundboard").hidden=!1;for(let C of $e.names){let I=document.createElement("button");I.type="button",I.className="util",I.textContent=C,I.addEventListener("click",()=>{Ke(),$e.play(C,{vol:.9,ui:!0})}),xe("soundboard-list").appendChild(I)}}xe("intro").hidden=!!G.seenIntro,xe("intro-start").addEventListener("click",()=>{G.seenIntro=!0,Me(),xe("intro").hidden=!0,Ke()}),gt(),L(Qn[G.level]&&Fi(G,G.level)?G.level:"yard",!0),xe("loading").hidden=!0,ne(),requestAnimationFrame(Xe),window.__imhit={sim:e,setTool(C){y=C,ve()},setMode:K,career:yh,arrow:p,edition:Dn,sfx:$e,get save(){return G},get actionsLeft(){return ie},strikePart(C,I=0){let V=qt.findIndex(De=>De.name===C),se=Y[V],te=new O().setFromMatrixPosition(se.matrixWorld).add(new O(0,I,0)),Se=a.position.clone().sub(te).setY(0).normalize();Pt(V,te.addScaledVector(Se,qt[V].r))},reset:Qe,setLevel:C=>L(C,!0),screen(C){let I=qt.findIndex(te=>te.name===C),V=new O().setFromMatrixPosition(Y[I].matrixWorld).project(a),se=t.getBoundingClientRect();return[se.left+(V.x*.5+.5)*se.width,se.top+(-V.y*.5+.5)*se.height]},cam:Be,manual(){Ce=!0},advance:Et}}Q_().then(ex).catch(i=>{console.error(i),xe("loading").textContent="Could not start the physics engine in this browser."});
