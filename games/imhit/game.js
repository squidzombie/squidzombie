var xu=Object.defineProperty;var vu=(i,t)=>{for(var e in t)xu(i,e,{get:t[e],enumerable:!0})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xc=0,dl=1,qc=2;var Bi=1,Yc=2,vs=3,wi=0,un=1,Zn=2,zi=0,ys=1,fl=2,pl=3,ml=4,Zc=5;var ki=100,$c=101,Jc=102,Kc=103,Qc=104,jc=200,th=201,eh=202,nh=203,gl=204,_l=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,na=0,ia=1,sa=2,cs=3,ra=4,aa=5,oa=6,la=7,xl=0,dh=1,fh=2,$n=0,vl=1,yl=2,Ml=3,ur=4,Sl=5,bl=6,wl=7;var Tl=300,Gi=301,Ms=302,Ua=303,Fa=304,ca=1e3,Vn=1001,ha=1002,Je=1003,ph=1004;var dr=1005;var cn=1006,Oa=1007;var oi=1008;var pn=1009,El=1010,Al=1011,Ss=1012,Ba=1013,Nn=1014,Rn=1015,Un=1016,za=1017,ka=1018,Vi=1020,Rl=35902,Cl=35899,Pl=1021,Il=1022,Fn=1023,ri=1026,li=1027,Ga=1028,Va=1029,Ti=1030,Ha=1031;var Wa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ja=37492,Ka=37496,Qa=37488,ja=37489,_r=37490,to=37491,eo=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,_o=36494,xo=36495,vo=36283,yo=36284,xr=36285,Mo=36286;var Bs=2300,ua=2301,ta=2302,il=2303,sl=2400,rl=2401,al=2402;var mh=3200;var So=0,gh=1,ci="",on="srgb",zs="srgb-linear",ks="linear",Ae="srgb";var ea=7680;var _h=519,xh=512,vh=513,yh=514,Ll=515,Mh=516,Sh=517,Dl=518,Nl=519,bh=35044;var Ul="300 es",En=2e3,hs=2001;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){let i=Gs("canvas");return i.style.display="block",i}var pc={},us=null;function Fl(...i){let t="THREE."+i.shift();us?us("log",t,...i):console.log(t,...i)}function Th(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=Th(i);let t="THREE."+i.shift();if(us)us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Th(i);let t="THREE."+i.shift();if(us)us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){let t=i.join(" ");t in pc||(pc[t]=!0,$t(...i))}function Eh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ah={[na]:na,[sa]:oa,[ra]:ra,[cs]:aa,[ia]:ia,[oa]:sa,[la]:la,[aa]:cs},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var No=Math.PI/180,da=180/Math.PI;function vr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Su(i,t){return(i%t+t)%t}function Uo(i,t,e){return(1-e)*i+e*t}function Rh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ol(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bu(i,t){if(t.constructor===Float32Array)return i;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function wu(i,t){if(t.constructor===Float32Array)return i;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Vl=class Vl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;var ae=Vl,vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],w=r[a+3];if(m!==w||l!==u||c!==p||h!==_){let f=l*u+c*p+h*_+m*w;f<0&&(u=-u,p=-p,_=-_,w=-w,f=-f);let d=1-o;if(f<.9995){let b=Math.acos(f),D=Math.sin(b);d=Math.sin(d*b)/D,o=Math.sin(o*b)/D,l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,m=m*d+w*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,m=m*d+w*o;let b=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=b,c*=b,h*=b,m*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*m+l*p-c*u,t[e+1]=l*_+h*u+c*m-o*p,t[e+2]=c*_+h*p+o*u-l*m,t[e+3]=h*_-o*m-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"YXZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"ZXY":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"ZYX":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"YZX":this._x=u*h*m+c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m-u*p*_;break;case"XZY":this._x=u*h*m-c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m+u*p*_;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hl=class Hl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hl.prototype.isVector3=!0;var H=Hl,Fo=new H,mc=new vn,Wl=class Wl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],p=n[5],_=n[8],w=s[0],f=s[3],d=s[6],b=s[1],D=s[4],C=s[7],I=s[2],P=s[5],g=s[8];return r[0]=a*w+o*b+l*I,r[3]=a*f+o*D+l*P,r[6]=a*d+o*C+l*g,r[1]=c*w+h*b+m*I,r[4]=c*f+h*D+m*P,r[7]=c*d+h*C+m*g,r[2]=u*w+p*b+_*I,r[5]=u*f+p*D+_*P,r[8]=u*d+p*C+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=e*m+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=m*w,t[1]=(s*c-h*n)*w,t[2]=(o*n-s*a)*w,t[3]=u*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=p*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;var jt=Wl,Oo=new jt,gc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){let i={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zs]:{primaries:t,whitePoint:n,transfer:ks,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var pe=Tu();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Gs("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eu=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var Au=0,zo=new H,hn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=cn,a=oi,o=Fn,l=pn,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=vr(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Tl;hn.DEFAULT_ANISOTROPY=1;var Xl=class Xl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],p=l[5],_=l[9],w=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-w)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+w)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,C=(p+1)/2,I=(d+1)/2,P=(h+u)/4,g=(m+w)/4,E=(_+f)/4;return D>C&&D>I?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=P/n,r=g/n):C>I?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=P/s,r=E/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=g/r,s=E/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-_)*(f-_)+(m-w)*(m-w)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(f-_)/b,this.y=(m-w)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;var ze=Xl,pa=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new hn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vs=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Na=class Na{constructor(t,e,n,s,r,a,o,l,c,h,m,u,p,_,w,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,p,_,w,f)}set(t,e,n,s,r,a,o,l,c,h,m,u,p,_,w,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=m,d[14]=u,d[3]=p,d[7]=_,d[11]=w,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*m,_=o*h,w=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=p+_*c,e[5]=u-w*c,e[9]=-o*l,e[2]=w-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*m,_=c*h,w=c*m;e[0]=u+w*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=w+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*m,_=c*h,w=c*m;e[0]=u-w*o,e[4]=-a*m,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=w-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*m,_=o*h,w=o*m;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+w,e[1]=l*m,e[5]=w*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=w-u*m,e[8]=_*m+p,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*m+_,e[10]=u-w*m}else if(t.order==="XZY"){let u=a*l,p=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+w,e[5]=a*h,e[9]=p*m-_,e[2]=_*m-p,e[6]=o*h,e[10]=w*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),di.crossVectors(n,gn),di.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),di.crossVectors(n,gn)),di.normalize(),Cr.crossVectors(gn,di),s[0]=di.x,s[4]=Cr.x,s[8]=gn.x,s[1]=di.y,s[5]=Cr.y,s[9]=gn.y,s[2]=di.z,s[6]=Cr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],p=n[13],_=n[2],w=n[6],f=n[10],d=n[14],b=n[3],D=n[7],C=n[11],I=n[15],P=s[0],g=s[4],E=s[8],k=s[12],N=s[1],G=s[5],W=s[9],Z=s[13],U=s[2],$=s[6],j=s[10],J=s[14],dt=s[3],et=s[7],st=s[11],ut=s[15];return r[0]=a*P+o*N+l*U+c*dt,r[4]=a*g+o*G+l*$+c*et,r[8]=a*E+o*W+l*j+c*st,r[12]=a*k+o*Z+l*J+c*ut,r[1]=h*P+m*N+u*U+p*dt,r[5]=h*g+m*G+u*$+p*et,r[9]=h*E+m*W+u*j+p*st,r[13]=h*k+m*Z+u*J+p*ut,r[2]=_*P+w*N+f*U+d*dt,r[6]=_*g+w*G+f*$+d*et,r[10]=_*E+w*W+f*j+d*st,r[14]=_*k+w*Z+f*J+d*ut,r[3]=b*P+D*N+C*U+I*dt,r[7]=b*g+D*G+C*$+I*et,r[11]=b*E+D*W+C*j+I*st,r[15]=b*k+D*Z+C*J+I*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],p=t[14],_=t[3],w=t[7],f=t[11],d=t[15],b=l*p-c*u,D=o*p-c*m,C=o*u-l*m,I=a*p-c*h,P=a*u-l*h,g=a*m-o*h;return e*(w*b-f*D+d*C)-n*(_*b-f*I+d*P)+s*(_*D-w*I+d*g)-r*(_*C-w*P+f*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],p=t[11],_=t[12],w=t[13],f=t[14],d=t[15],b=e*o-n*a,D=e*l-s*a,C=e*c-r*a,I=n*l-s*o,P=n*c-r*o,g=s*c-r*l,E=h*w-m*_,k=h*f-u*_,N=h*d-p*_,G=m*f-u*w,W=m*d-p*w,Z=u*d-p*f,U=b*Z-D*W+C*G+I*N-P*k+g*E;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/U;return t[0]=(o*Z-l*W+c*G)*$,t[1]=(s*W-n*Z-r*G)*$,t[2]=(w*g-f*P+d*I)*$,t[3]=(u*P-m*g-p*I)*$,t[4]=(l*N-a*Z-c*k)*$,t[5]=(e*Z-s*N+r*k)*$,t[6]=(f*C-_*g-d*D)*$,t[7]=(h*g-u*C+p*D)*$,t[8]=(a*W-o*N+c*E)*$,t[9]=(n*N-e*W-r*E)*$,t[10]=(_*P-w*C+d*b)*$,t[11]=(m*C-h*P-p*b)*$,t[12]=(o*k-a*G-l*E)*$,t[13]=(e*G-n*k+s*E)*$,t[14]=(w*D-_*I-f*b)*$,t[15]=(h*I-m*D+u*b)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,p=r*h,_=r*m,w=a*h,f=a*m,d=o*m,b=l*c,D=l*h,C=l*m,I=n.x,P=n.y,g=n.z;return s[0]=(1-(w+d))*I,s[1]=(p+C)*I,s[2]=(_-D)*I,s[3]=0,s[4]=(p-C)*P,s[5]=(1-(u+d))*P,s[6]=(f+b)*P,s[7]=0,s[8]=(_+D)*g,s[9]=(f-b)*g,s[10]=(1-(u+w))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,h=1/o,m=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=m,Cn.elements[9]*=m,Cn.elements[10]*=m,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),_,w;if(l)_=r/(a-r),w=a*r/(a-r);else if(o===En)_=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===hs)_=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),_,w;if(l)_=1/(a-r),w=a/(a-r);else if(o===En)_=-2/(a-r),w=-(a+r)/(a-r);else if(o===hs)_=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Na.prototype.isMatrix4=!0;var ye=Na,$i=new H,Cn=new ye,Ru=new H(0,0,0),Cu=new H(1,1,1),di=new H,Cr=new H,gn=new H,xc=new ye,vc=new vn,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pu=0,yc=new H,Ji=new vn,jn=new ye,Pr=new H,Ps=new H,Iu=new H,Lu=new vn,Mc=new H(1,0,0),Sc=new H(0,1,0),bc=new H(0,0,1),wc={type:"added"},Du={type:"removed"},Ki={type:"childadded",child:null},ko={type:"childremoved",child:null},Ke=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Dn,n=new vn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ps,Pr,this.up):jn.lookAt(Pr,Ps,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new H(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nu={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let f=e.getJointPose(w,n),d=this._getHandJoint(c,w);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Su(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Go(a,r,t+1/3),this.g=Go(a,r,t),this.b=Go(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return pe.workingToColorSpace(rn.copy(this),t),Math.round(me(rn.r*255,0,255))*65536+Math.round(me(rn.g*255,0,255))*256+Math.round(me(rn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=on){pe.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Ir);let n=Uo(fi.h,Ir.h,e),s=Uo(fi.s,Ir.s,e),r=Uo(fi.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new te;te.NAMES=Ch;var Hs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new H,ti=new H,Vo=new H,ei=new H,Qi=new H,ji=new H,Tc=new H,Ho=new H,Wo=new H,Xo=new H,qo=new ze,Yo=new ze,Zo=new ze,_i=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ti.subVectors(n,e),Vo.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(Vo),c=ti.dot(ti),h=ti.dot(Vo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return qo.setScalar(0),Yo.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(t,e),Yo.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ti.subVectors(t,e),Pn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ji.subVectors(r,n),Ho.subVectors(t,n);let l=Qi.dot(Ho),c=ji.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,s);let h=Qi.dot(Wo),m=ji.dot(Wo);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);Xo.subVectors(t,r);let p=Qi.dot(Xo),_=ji.dot(Xo);if(_>=0&&p<=_)return e.copy(r);let w=p*c-l*_;if(w<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ji,o);let f=h*_-p*m;if(f<=0&&m-h>=0&&p-_>=0)return Tc.subVectors(r,s),o=(m-h)/(m-h+(p-_)),e.copy(s).addScaledVector(Tc,o);let d=1/(f+w+u);return a=w*d,o=u*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Dr.subVectors(this.max,Is),ts.subVectors(t.a,Is),es.subVectors(t.b,Is),ns.subVectors(t.c,Is),pi.subVectors(es,ts),mi.subVectors(ns,es),Pi.subVectors(ts,ns);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Pi.z,Pi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Pi.z,0,-Pi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Pi.y,Pi.x,0];return!$o(e,ts,es,ns,Dr)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,ts,es,ns,Dr))?!1:(Nr.crossVectors(pi,mi),e=[Nr.x,Nr.y,Nr.z],$o(e,ts,es,ns,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new H,new H,new H,new H,new H,new H,new H,new H],In=new H,Lr=new Wn,ts=new H,es=new H,ns=new H,pi=new H,mi=new H,Pi=new H,Is=new H,Dr=new H,Nr=new H,Ii=new H;function $o(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var He=new H,Ur=new ae,Uu=0,xn=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?Ol(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):bu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):wu(t,this.array)}};var Xs=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qs=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fu=new Wn,Ls=new H,Jo=new H,Xn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Jo)),this.expandByPoint(Ls.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ou=0,Tn=new ye,Ko=new Ke,is=new H,_n=new Wn,Ds=new Wn,$e=new H,Qe=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?qs:Xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(_n.min,Ds.min),_n.expandByPoint($e),$e.addVectors(_n.max,Ds.max),_n.expandByPoint($e)):(_n.expandByPoint(Ds.min),_n.expandByPoint(Ds.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),$e.add(is)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)o[k]=new H,l[k]=new H;let h=new H,m=new H,u=new H,p=new ae,_=new ae,w=new ae,f=new H,d=new H;function b(k,N,G){c[k]=c[N]=c[G]=1,h.fromBufferAttribute(n,k),m.fromBufferAttribute(n,N),u.fromBufferAttribute(n,G),p.fromBufferAttribute(r,k),_.fromBufferAttribute(r,N),w.fromBufferAttribute(r,G),m.sub(h),u.sub(h),_.sub(p),w.sub(p);let W=1/(_.x*w.y-w.x*_.y);isFinite(W)&&(f.copy(m).multiplyScalar(w.y).addScaledVector(u,-_.y).multiplyScalar(W),d.copy(u).multiplyScalar(_.x).addScaledVector(m,-w.x).multiplyScalar(W),o[k].add(f),o[N].add(f),o[G].add(f),l[k].add(d),l[N].add(d),l[G].add(d))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let k=0,N=D.length;k<N;++k){let G=D[k],W=G.start,Z=G.count;for(let U=W,$=W+Z;U<$;U+=3)b(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let C=new H,I=new H,P=new H,g=new H;function E(k){P.fromBufferAttribute(s,k),g.copy(P);let N=o[k];C.copy(N),C.sub(P.multiplyScalar(P.dot(N))).normalize(),I.crossVectors(g,N);let W=I.dot(l[k])<0?-1:1;a.setXYZW(k,C.x,C.y,C.z,W)}for(let k=0,N=n.count;k<N;++k)c[k]&&E(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,m=new H;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),w=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let w=0,f=l.length;w<f;w++){o.isInterleavedBufferAttribute?p=l[w]*o.data.stride+o.offset:p=l[w]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new xn(u,h,m)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let p=c[m];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=new H,Bu=new H,zu=new jt,Ln=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qo.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ku=0,qn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ys,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new H,jo=new H,Fr=new H,Or=new H,Ui=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=Or.dot(this.direction),l=-Or.dot(Fr),c=Or.lengthSq(),h=Math.abs(1-a*a),m,u,p,_;if(h>0)if(m=a*l-o,u=a*o-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let w=1/h;m*=w,u*=w,p=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(jo).addScaledVector(Fr,u),p}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,p=t.z-a.z,_=e.x-a.x,w=e.y-a.y,f=e.z-a.z,d=n.x-a.x,b=n.y-a.y,D=n.z-a.z,C=Math.abs(l),I=Math.abs(c),P=Math.abs(h),g,E,k,N,G,W,Z,U,$,j,J,dt;if(C>=I&&C>=P?(k=l,W=m,$=_,dt=d,l>=0?(g=c,E=h,N=u,G=p,Z=w,U=f,j=b,J=D):(g=h,E=c,N=p,G=u,Z=f,U=w,j=D,J=b)):I>=P?(k=c,W=u,$=w,dt=b,c>=0?(g=h,E=l,N=p,G=m,Z=f,U=_,j=D,J=d):(g=l,E=h,N=m,G=p,Z=_,U=f,j=d,J=D)):(k=h,W=p,$=f,dt=D,h>=0?(g=l,E=c,N=m,G=u,Z=_,U=w,j=d,J=b):(g=c,E=l,N=u,G=m,Z=w,U=_,j=b,J=d)),k===0)return null;let et=g/k,st=E/k,ut=1/k,It=N-et*W,Jt=G-st*W,it=Z-et*$,At=U-st*$,ft=j-et*dt,Gt=J-st*dt,_t=ft*At-Gt*it,Rt=It*Gt-Jt*ft,Yt=it*Jt-At*It;if(s){if(_t<0||Rt<0||Yt<0)return null}else if((_t<0||Rt<0||Yt<0)&&(_t>0||Rt>0||Yt>0))return null;let Wt=_t+Rt+Yt;if(Wt===0)return null;let Kt=ut*(_t*W+Rt*$+Yt*dt);return(Wt>0?Kt<0:Kt>0)?null:this.at(Kt/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ec=new ye,Li=new Ui,Br=new Xn,Ac=new H,zr=new H,kr=new H,Gr=new H,tl=new H,Vr=new H,Rc=new H,Hr=new H,Ge=class extends Ke{constructor(t=new Qe,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(tl.fromBufferAttribute(m,t),a?Vr.addScaledVector(tl,h):Vr.addScaledVector(tl.sub(e),h))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Br.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Br,Ac)===null||Li.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Ec.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],b=Math.max(f.start,p.start),D=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let C=b,I=D;C<I;C+=3){let P=o.getX(C),g=o.getX(C+1),E=o.getX(C+2);s=Wr(this,d,t,n,c,h,m,P,g,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),w=Math.min(o.count,p.start+p.count);for(let f=_,d=w;f<d;f+=3){let b=o.getX(f),D=o.getX(f+1),C=o.getX(f+2);s=Wr(this,a,t,n,c,h,m,b,D,C),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],b=Math.max(f.start,p.start),D=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let C=b,I=D;C<I;C+=3){let P=C,g=C+1,E=C+2;s=Wr(this,d,t,n,c,h,m,P,g,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let f=_,d=w;f<d;f+=3){let b=f,D=f+1,C=f+2;s=Wr(this,a,t,n,c,h,m,b,D,C),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Gu(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Gr);let h=Gu(i,t,e,n,zr,kr,Gr,Rc);if(h){let m=new H;_i.getBarycoord(Rc,zr,kr,Gr,m),s&&(h.uv=_i.getInterpolatedAttribute(s,o,l,c,m,new ae)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,m,new ae)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,m,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};_i.getNormal(zr,kr,Gr,u.normal),h.face=u,h.barycoord=m}return h}var Ys=class extends hn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,h=Je,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends xn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new ye,Cc=new ye,Xr=[],Pc=new Wn,Vu=new ye,Ns=new Ge,Us=new Xn,ms=class extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Pc.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Us.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Cc.multiplyMatrices(n,ss),Ns.matrixWorld=Cc,Ns.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){let l=Xr[a];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(s*this.count),s,this.count,Ga,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new Xn,Hu=new ae(.5,.5),qr=new H,vi=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],p=r[7],_=r[8],w=r[9],f=r[10],d=r[11],b=r[12],D=r[13],C=r[14],I=r[15];if(s[0].setComponents(c-a,p-h,d-_,I-b).normalize(),s[1].setComponents(c+a,p+h,d+_,I+b).normalize(),s[2].setComponents(c+o,p+m,d+w,I+D).normalize(),s[3].setComponents(c-o,p-m,d-w,I-D).normalize(),n)s[4].setComponents(l,u,f,C).normalize(),s[5].setComponents(c-l,p-u,d-f,I-C).normalize();else if(s[4].setComponents(c-l,p-u,d-f,I-C).normalize(),e===En)s[5].setComponents(c+l,p+u,d+f,I+C).normalize();else if(e===hs)s[5].setComponents(l,u,f,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Hu.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ic=new ye,ga=class i{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ic.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new vi),n[s].setFromProjectionMatrix(Ic,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new vi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var gs=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_a=new H,xa=new H,Lc=new ye,Fs=new Ui,Yr=new Xn,el=new H,Dc=new H,$s=class extends Ke{constructor(t=new Qe,e=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(xa);t.setAttribute("lineDistance",new De(n,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Lc.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(Lc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let w=p,f=_-1;w<f;w+=c){let d=h.getX(w),b=h.getX(w+1),D=Zr(this,t,Fs,l,d,b,w);D&&e.push(D)}if(this.isLineLoop){let w=h.getX(_-1),f=h.getX(p),d=Zr(this,t,Fs,l,w,f,_-1);d&&e.push(d)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let w=p,f=_-1;w<f;w+=c){let d=Zr(this,t,Fs,l,w,w+1,w);d&&e.push(d)}if(this.isLineLoop){let w=Zr(this,t,Fs,l,_-1,p,_-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(_a,xa,el,Dc)>n)return;el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);if(!(c<t.near||c>t.far))return{distance:c,point:Dc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var _s=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nc=new ye,ol=new Ui,$r=new Xn,Jr=new H,Js=class extends Ke{constructor(t=new Qe,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Nc.copy(s).invert(),ol.copy(t.ray).applyMatrix4(Nc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,w=p;_<w;_++){let f=c.getX(_);Jr.fromBufferAttribute(m,f),Uc(Jr,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let _=u,w=p;_<w;_++)Jr.fromBufferAttribute(m,_),Uc(Jr,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uc(i,t,e,n,s,r,a){let o=ol.distanceSqToPoint(i);if(o<e){let l=new H;ol.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ks=class extends hn{constructor(t=[],e=Gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qs=class extends hn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends hn{constructor(t,e,n=Nn,s,r,a,o=Je,l=Je,c,h=ri,m=1){if(h!==ri&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},js=class extends ai{constructor(t,e=Nn,n=Gi,s,r,a=Je,o=Je,l,c=ri){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},tr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},An=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(m,2));function _(w,f,d,b,D,C,I,P,g,E,k){let N=C/g,G=I/E,W=C/2,Z=I/2,U=P/2,$=g+1,j=E+1,J=0,dt=0,et=new H;for(let st=0;st<j;st++){let ut=st*G-Z;for(let It=0;It<$;It++){let Jt=It*N-W;et[w]=Jt*b,et[f]=ut*D,et[d]=U,c.push(et.x,et.y,et.z),et[w]=0,et[f]=0,et[d]=P>0?1:-1,h.push(et.x,et.y,et.z),m.push(It/g),m.push(1-st/E),J+=1}}for(let st=0;st<E;st++)for(let ut=0;ut<g;ut++){let It=u+ut+$*st,Jt=u+ut+$*(st+1),it=u+(ut+1)+$*(st+1),At=u+(ut+1)+$*st;l.push(It,Jt,At),l.push(Jt,it,At),dt+=6}o.addGroup(p,dt,k),p+=dt,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},er=class i extends Qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,m=Math.PI/2*t,u=e,p=2*m+u,_=n*2+r,w=s+1,f=new H,d=new H;for(let b=0;b<=_;b++){let D=0,C=0,I=0,P=0;if(b<=n){let k=b/n,N=k*Math.PI/2;C=-h-t*Math.cos(N),I=t*Math.sin(N),P=-t*Math.cos(N),D=k*m}else if(b<=n+r){let k=(b-n)/r;C=-h+k*e,I=t,P=0,D=m+k*u}else{let k=(b-n-r)/n,N=k*Math.PI/2;C=h+t*Math.sin(N),I=t*Math.cos(N),P=t*Math.sin(N),D=m+u+k*m}let g=Math.max(0,Math.min(1,D/p)),E=0;b===0?E=.5/s:b===_&&(E=-.5/s);for(let k=0;k<=s;k++){let N=k/s,G=N*Math.PI*2,W=Math.sin(G),Z=Math.cos(G);d.x=-I*Z,d.y=C,d.z=I*W,o.push(d.x,d.y,d.z),f.set(-I*Z,P,I*W),f.normalize(),l.push(f.x,f.y,f.z),c.push(N+E,g)}if(b>0){let k=(b-1)*w;for(let N=0;N<s;N++){let G=k+N,W=k+N+1,Z=b*w+N,U=b*w+N+1;a.push(G,W,Z),a.push(W,U,Z)}}}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},nr=class i extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new H,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,u=3;m<=e;m++,u+=3){let p=n+m/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fi=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],p=[],_=0,w=[],f=n/2,d=0;b(),a===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(h),this.setAttribute("position",new De(m,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(p,2));function b(){let C=new H,I=new H,P=0,g=(e-t)/n;for(let E=0;E<=r;E++){let k=[],N=E/r,G=N*(e-t)+t;for(let W=0;W<=s;W++){let Z=W/s,U=Z*l+o,$=Math.sin(U),j=Math.cos(U);I.x=G*$,I.y=-N*n+f,I.z=G*j,m.push(I.x,I.y,I.z),C.set($,g,j).normalize(),u.push(C.x,C.y,C.z),p.push(Z,1-N),k.push(_++)}w.push(k)}for(let E=0;E<s;E++)for(let k=0;k<r;k++){let N=w[k][E],G=w[k+1][E],W=w[k+1][E+1],Z=w[k][E+1];(t>0||k!==0)&&(h.push(N,G,Z),P+=3),(e>0||k!==r-1)&&(h.push(G,W,Z),P+=3)}c.addGroup(d,P,0),d+=P}function D(C){let I=_,P=new ae,g=new H,E=0,k=C===!0?t:e,N=C===!0?1:-1;for(let W=1;W<=s;W++)m.push(0,f*N,0),u.push(0,N,0),p.push(.5,.5),_++;let G=_;for(let W=0;W<=s;W++){let U=W/s*l+o,$=Math.cos(U),j=Math.sin(U);g.x=k*j,g.y=f*N,g.z=k*$,m.push(g.x,g.y,g.z),u.push(0,N,0),P.x=$*.5+.5,P.y=j*.5*N+.5,p.push(P.x,P.y),_++}for(let W=0;W<s;W++){let Z=I+W,U=G+W;C===!0?h.push(U,U+1,Z):h.push(U+1,U,Z),E+=3}c.addGroup(d,E,C===!0?1:2),d+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yi=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,p=[],_=[],w=[],f=[];for(let d=0;d<h;d++){let b=d*u-a;for(let D=0;D<c;D++){let C=D*m-r;_.push(C,-b,0),w.push(0,0,1),f.push(D/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let D=b+c*d,C=b+c*(d+1),I=b+1+c*(d+1),P=b+1+c*d;p.push(D,C,P),p.push(C,I,P)}this.setIndex(p),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(w,3)),this.setAttribute("uv",new De(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ir=class i extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],m=t,u=(e-t)/s,p=new H,_=new ae;for(let w=0;w<=s;w++){for(let f=0;f<=n;f++){let d=r+f/n*a;p.x=m*Math.cos(d),p.y=m*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}m+=u}for(let w=0;w<s;w++){let f=w*(n+1);for(let d=0;d<n;d++){let b=d+f,D=b,C=b+n+1,I=b+n+2,P=b+1;o.push(D,C,P),o.push(C,I,P)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Oi=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],m=new H,u=new H,p=[],_=[],w=[],f=[];for(let d=0;d<=n;d++){let b=[],D=d/n,C=a+D*o,I=t*Math.cos(C),P=Math.sqrt(t*t-I*I),g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let E=0;E<=e;E++){let k=E/e,N=s+k*r;m.x=-P*Math.cos(N),m.y=I,m.z=P*Math.sin(N),_.push(m.x,m.y,m.z),u.copy(m).normalize(),w.push(u.x,u.y,u.z),f.push(k+g,1-D),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){let D=h[d][b+1],C=h[d][b],I=h[d+1][b],P=h[d+1][b+1];(d!==0||a>0)&&p.push(D,C,P),(d!==n-1||l<Math.PI)&&p.push(C,I,P)}this.setIndex(p),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(w,3)),this.setAttribute("uv",new De(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fc(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Ph={clone:Hi,merge:an},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},va=class extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ya=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Kr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=t,o=2*e-n;break;case al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rl:a=t,l=2*n-e;break;case al:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),w=_*_,f=w*_,d=-u*f+2*u*w-u*_,b=(1+u)*f+(-1.5-2*u)*w+(-.5+u)*_+1,D=(-1-p)*f+(1.5+p)*w+.5*_,C=p*f-p*w;for(let I=0;I!==o;++I)r[I]=d*a[h+I]+b*a[c+I]+D*a[l+I]+C*a[m+I];return r}},ba=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},wa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ta=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-e)/(s-e),w=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*w+a[l+f]*_;return r}let u=o*2,p=t-1;for(let _=0;_!==o;++_){let w=a[c+_],f=a[l+_],d=p*u+_*2,b=m[d],D=m[d+1],C=t*u+_*2,I=h[C],P=h[C+1],g=Zu(n,e,b,I,s);r[_]=Ih(g,w,D,P,f)}return r}};function Ih(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Yu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ih(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Yu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Kr(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break;case il:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Kr(this.settings)&&(Oc(this.settings.inTangents,t),Oc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Kr(this.settings)&&(Bc(this.settings.inTangents,t),Bc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,p=m+n;for(let _=0;_!==n;++_){let w=e[m+_];if(w!==e[u+_]||w!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Kr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ua;var Si=class extends Mn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Bs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="color";var Aa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Bs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let p=c[m],_=c[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lh=new Pa,Ia=class{constructor(t){this.manager=t!==void 0?t:Lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ar=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nl=new ye,zc=new H,kc=new H,La=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(zc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qr=new H,jr=new vn,Gn=new H,or=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qr,jr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qr,jr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,Gc=new ae,Vc=new ae,ln=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lr=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ll=class extends La{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new ll}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,xs=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(as,os,t,e);s.layers=this.layers,this.add(s);let r=new ln(as,os,t,e);r.layers=this.layers,this.add(r);let a=new ln(as,os,t,e);a.layers=this.layers,this.add(a);let o=new ln(as,os,t,e);o.layers=this.layers,this.add(o);let l=new ln(as,os,t,e);l.layers=this.layers,this.add(l);let c=new ln(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=w,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Da=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var zl="\\[\\]\\.:\\/",$u=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",Ju="[^"+zl.replace("\\.","")+"]",Ku=/((?:WC+[\/:])*)/.source.replace("WC",kl),Qu=/(WCOD+)?/.source.replace("WCOD",Ju),ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),ed=new RegExp("^"+Ku+Qu+ju+td+"$"),nd=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($u,"")}static parseTrackName(t){let e=ed.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=cl;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var Hc=new ye,hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ui(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Wc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(Wc),n}};function Wc(i,t){return i.distance-t.distance}function hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}var ql=class ql{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ql.prototype.isMatrix2=!0;var ul=ql;function Gl(i,t,e,n){let s=id(n);switch(e){case Pl:return i*t;case Ga:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case Il:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Wa:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ja:case Qa:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case _r:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xr:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function id(i){switch(i){case pn:case El:return{byteLength:1,components:1};case Ss:case Al:case Un:return{byteLength:2,components:1};case za:case ka:return{byteLength:2,components:4};case Nn:case Ba:case Rn:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<m.length;p++){let _=m[u],w=m[p];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++u,m[u]=w)}m.length=u+1;for(let p=0,_=m.length;p<_;p++){let w=m[p];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,yd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
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
#endif`,sf=`uniform sampler2D dfgLUT;
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
}`,rf=`
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform float backgroundBlurriness;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,Ep=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:xd,iridescence_fragment:vd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:wd,color_fragment:Td,color_pars_fragment:Ed,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Id,displacementmap_vertex:Ld,emissivemap_fragment:Dd,emissivemap_pars_fragment:Nd,colorspace_fragment:Ud,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Kd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Hd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Yd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:$d,lights_pars_begin:Jd,lights_toon_fragment:Qd,lights_toon_pars_fragment:jd,lights_phong_fragment:tf,lights_phong_pars_fragment:ef,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:rf,lights_fragment_maps:af,lights_fragment_end:of,lightprobes_pars_fragment:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphinstance_vertex:vf,morphcolor_vertex:yf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:bf,normal_fragment_begin:wf,normal_fragment_maps:Tf,normal_pars_fragment:Ef,normal_pars_vertex:Af,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:Nf,packing:Uf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:Zf,skinnormal_vertex:$f,specularmap_fragment:Jf,specularmap_pars_fragment:Kf,tonemapping_fragment:Qf,tonemapping_pars_fragment:jf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distance_vert:pp,distance_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:wp,meshmatcap_frag:Tp,meshnormal_vert:Ep,meshnormal_frag:Ap,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Pp,meshphysical_frag:Ip,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:Np,points_frag:Up,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},Pt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Kn={basic:{uniforms:an([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:an([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:an([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:an([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:an([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:an([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:an([Pt.points,Pt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:an([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:an([Pt.common,Pt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:an([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:an([Pt.sprite,Pt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:an([Pt.common,Pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:an([Pt.lights,Pt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Kn.physical={uniforms:an([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var bo={r:0,b:0,g:0},kp=new ye,eu=new jt;eu.set(-1,0,0,0,1,0,0,0,1);function Gp(i,t,e,n,s,r){let a=new te(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function p(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){let C=b.backgroundBlurriness>0;D=t.get(D,C)}return D}function _(b){let D=!1,C=p(b);C===null?f(a,o):C&&C.isColor&&(f(C,1),D=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(b,D){let C=p(D);C&&C.isCubeTexture?(c===void 0&&(c=new Ge(new An(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Hi(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=C,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eu),c.material.toneMapped=pe.getTransfer(C.colorSpace)!==Ae,(h!==C||m!==C.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,m=C.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ge(new yi(2,2),new Yn({name:"BackgroundMaterial",uniforms:Hi(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=pe.getTransfer(C.colorSpace)!==Ae,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||m!==C.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,m=C.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,D){b.getRGB(bo,Bl(i)),e.buffers.color.setClear(bo.r,bo.g,bo.b,D,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,D=1){a.set(b),o=D,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:_,addToRenderList:w,dispose:d}}function Vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,W,Z,U,$){let j=!1,J=m(G,U,Z,W);r!==J&&(r=J,c(r.object)),j=p(G,U,Z,$),j&&_(G,U,Z,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,C(G,W,Z,U),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function m(G,W,Z,U){let $=U.wireframe===!0,j=n[W.id];j===void 0&&(j={},n[W.id]=j);let J=G.isInstancedMesh===!0?G.id:0,dt=j[J];dt===void 0&&(dt={},j[J]=dt);let et=dt[Z.id];et===void 0&&(et={},dt[Z.id]=et);let st=et[$];return st===void 0&&(st=u(l()),et[$]=st),st}function u(G){let W=[],Z=[],U=[];for(let $=0;$<e;$++)W[$]=0,Z[$]=0,U[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:U,object:G,attributes:{},index:null}}function p(G,W,Z,U){let $=r.attributes,j=W.attributes,J=0,dt=Z.getAttributes();for(let et in dt)if(dt[et].location>=0){let ut=$[et],It=j[et];if(It===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(It=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(It=G.instanceColor)),ut===void 0||ut.attribute!==It||It&&ut.data!==It.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function _(G,W,Z,U){let $={},j=W.attributes,J=0,dt=Z.getAttributes();for(let et in dt)if(dt[et].location>=0){let ut=j[et];ut===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(ut=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(ut=G.instanceColor));let It={};It.attribute=ut,ut&&ut.data&&(It.data=ut.data),$[et]=It,J++}r.attributes=$,r.attributesNum=J,r.index=U}function w(){let G=r.newAttributes;for(let W=0,Z=G.length;W<Z;W++)G[W]=0}function f(G){d(G,0)}function d(G,W){let Z=r.newAttributes,U=r.enabledAttributes,$=r.attributeDivisors;Z[G]=1,U[G]===0&&(i.enableVertexAttribArray(G),U[G]=1),$[G]!==W&&(i.vertexAttribDivisor(G,W),$[G]=W)}function b(){let G=r.newAttributes,W=r.enabledAttributes;for(let Z=0,U=W.length;Z<U;Z++)W[Z]!==G[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function D(G,W,Z,U,$,j,J){J===!0?i.vertexAttribIPointer(G,W,Z,$,j):i.vertexAttribPointer(G,W,Z,U,$,j)}function C(G,W,Z,U){w();let $=U.attributes,j=Z.getAttributes(),J=W.defaultAttributeValues;for(let dt in j){let et=j[dt];if(et.location>=0){let st=$[dt];if(st===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(st=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(st=G.instanceColor)),st!==void 0){let ut=st.normalized,It=st.itemSize,Jt=t.get(st);if(Jt===void 0)continue;let it=Jt.buffer,At=Jt.type,ft=Jt.bytesPerElement,Gt=At===i.INT||At===i.UNSIGNED_INT||st.gpuType===Ba;if(st.isInterleavedBufferAttribute){let _t=st.data,Rt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Yt=st.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Wt=0;Wt<et.locationSize;Wt++)d(et.location+Wt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Wt=0;Wt<et.locationSize;Wt++)f(et.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Wt=0;Wt<et.locationSize;Wt++)D(et.location+Wt,It/et.locationSize,At,ut,Rt*ft,(Yt+It/et.locationSize*Wt)*ft,Gt)}else{if(st.isInstancedBufferAttribute){for(let _t=0;_t<et.locationSize;_t++)d(et.location+_t,st.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let _t=0;_t<et.locationSize;_t++)f(et.location+_t);i.bindBuffer(i.ARRAY_BUFFER,it);for(let _t=0;_t<et.locationSize;_t++)D(et.location+_t,It/et.locationSize,At,ut,It*ft,It/et.locationSize*_t*ft,Gt)}}else if(J!==void 0){let ut=J[dt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(et.location,ut);break;case 3:i.vertexAttrib3fv(et.location,ut);break;case 4:i.vertexAttrib4fv(et.location,ut);break;default:i.vertexAttrib1fv(et.location,ut)}}}}b()}function I(){k();for(let G in n){let W=n[G];for(let Z in W){let U=W[Z];for(let $ in U){let j=U[$];for(let J in j)h(j[J].object),delete j[J];delete U[$]}}delete n[G]}}function P(G){if(n[G.id]===void 0)return;let W=n[G.id];for(let Z in W){let U=W[Z];for(let $ in U){let j=U[$];for(let J in j)h(j[J].object),delete j[J];delete U[$]}}delete n[G.id]}function g(G){for(let W in n){let Z=n[W];for(let U in Z){let $=Z[U];if($[G.id]===void 0)continue;let j=$[G.id];for(let J in j)h(j[J].object),delete j[J];delete $[G.id]}}}function E(G){for(let W in n){let Z=n[W],U=G.isInstancedMesh===!0?G.id:0,$=Z[U];if($!==void 0){for(let j in $){let J=$[j];for(let dt in J)h(J[dt].object),delete J[dt];delete $[j]}delete Z[U],Object.keys(Z).length===0&&delete n[W]}}}function k(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:w,enableAttribute:f,disableUnusedAttributes:b}}function Hp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Fn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let E=g===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==pn&&g!==Rn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:C,maxSamples:I,samples:P}}function Xp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,p){let _=m.clippingPlanes,w=m.clipIntersection,f=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let b=r?0:n,D=b*4,C=d.clippingState||null;l.value=C,C=h(_,u,D,p);for(let I=0;I!==D;++I)C[I]=e[I];d.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,p,_){let w=m!==null?m.length:0,f=null;if(w!==0){if(f=l.value,_!==!0||f===null){let d=p+w*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let D=0,C=p;D!==w;++D,C+=4)a.copy(m[D]).applyMatrix4(b,o),a.normal.toArray(f,C),f[C+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,f}}var Sr=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:zi});r.uniforms.tEquirect.value=e;let a=new Ge(s,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=cn),new xs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Dh=256,qp=3,Yp=20,nu=256,iu=16,Zp=3,$p=new H,Jp=new te,To=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xs(1,10,null),this._boxMesh=new Ge(new An(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=$p}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(Jp));let f=new xs(n,s,h);return f.position.copy(o),f.update(l,t),l.autoClear=m,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=_,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Dh,Rh(t))}_fromTexture(t,e){t.mapping===Gi||t.mapping===Ms?this._setSize(t.image.length===0?Dh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Nh(t,!1,!1),n=Math.log2(t)-qp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Gi||t.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Kp(),this._integrationMaterial=Qp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/iu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Zp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(nu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Nh(i,t,e){return new Sr(i,{minFilter:oi,generateMipmaps:t,type:Un,colorSpace:zs,depthBuffer:e})}function br(i,t,e){return new Yn({name:i,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:un,blending:zi,depthTest:!1,depthWrite:!1})}function Kp(){return br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nu}u

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
	`)}function Qp(){return br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:iu}},`

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
	`)}function jp(){return br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yp}
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
	`)}function Uh(){return br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fh(){return br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ua||p===Fa)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let w=new Sr(_.height);return w.fromEquirectangularTexture(i,u),t.set(u,w),u.addEventListener("dispose",c),o(w.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===Ua||p===Fa,w=p===Gi||p===Ms;if(_||w){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new To(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let b=u.image;return _&&b&&b.height>0||w&&b&&l(b)?(n===null&&(n=new To(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,p){return p===Ua?u.mapping=Gi:p===Fa&&(u.mapping=Ms),u}function l(u){let p=0,_=6;for(let w=0;w<_;w++)u[w]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function em(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function nm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let w=r.get(_);w&&(t.remove(w),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function h(_){let w=_.attributes;for(let f in w)t.update(w[f],i.ARRAY_BUFFER)}function m(_){let w=_.index,f=_.attributes.position,d=0;if(f===void 0)return;let b=w!==null?w.array.length:f.array.length/3-1,D=f.count>=65535?qs:Xs,C=new D(Math.ceil(b/3)*6,1),I=C.array;if(w!==null){let g=w.array;d=w.version;for(let E=0,k=0;E<b;E+=3){let N=g[E+0],G=g[E+1],W=g[E+2];I[k++]=N,I[k++]=G,I[k++]=G,I[k++]=W,I[k++]=W,I[k++]=N}}else{d=f.version;for(let g=0,E=0;g<b;g+=3){let k=g+0,N=g+1,G=g+2;I[E++]=k,I[E++]=N,I[E++]=N,I[E++]=G,I[E++]=G,I[E++]=k}}C.version=d;let P=r.get(_);P&&t.remove(P),r.set(_,C)}function u(_){let w=r.get(_);if(w){let f=_.index;f!==null&&w.version<f.version&&m(_)}else m(_);return r.get(_)}function p(){for(let _ in s){let w=s[_].deref();w!==void 0&&l(w)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function im(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,m*a,p),e.update(u,n,p))}function h(m,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,p);let w=0;for(let f=0;f<p;f++)w+=u[f];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rm(i,t,e){let n=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let k=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],D=0;p===!0&&(D=1),_===!0&&(D=2),w===!0&&(D=3);let C=o.attributes.position.count*D,I=1;C>t.maxTextureSize&&(I=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let P=new Float32Array(C*I*4*m),g=new Vs(P,C,I,m);g.type=Rn,g.needsUpdate=!0;let E=D*4;for(let N=0;N<m;N++){let G=f[N],W=d[N],Z=b[N],U=C*I*4*N;for(let $=0;$<G.count;$++){let j=$*E;p===!0&&(s.fromBufferAttribute(G,$),P[U+j+0]=s.x,P[U+j+1]=s.y,P[U+j+2]=s.z,P[U+j+3]=0),_===!0&&(s.fromBufferAttribute(W,$),P[U+j+4]=s.x,P[U+j+5]=s.y,P[U+j+6]=s.z,P[U+j+7]=0),w===!0&&(s.fromBufferAttribute(Z,$),P[U+j+8]=s.x,P[U+j+9]=s.y,P[U+j+10]=s.z,P[U+j+11]=Z.itemSize===4?s.w:1)}}u={count:m,texture:g,size:new ae(C,I)},n.set(o,u),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let w=0;w<c.length;w++)p+=c[w];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function am(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var om={[vl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[ur]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function lm(i,t,e,n,s,r){let a=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Qe;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let m=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(h,m),p=new lr(-1,1,1,-1,0,1),_=null,w=null,f=!1,d,b=null,D=[],C=!1;this.setSize=function(I,P){a.setSize(I,P),o!==null&&o.setSize(I,P),l!==null&&l.setSize(I,P);for(let g=0;g<D.length;g++){let E=D[g];E.setSize&&E.setSize(I,P)}},this.setEffects=function(I){D=I,C=D.length>0&&D[0].isRenderPass===!0;let P=a.width,g=a.height;D.length>0&&o===null&&(o=new yn(P,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new yn(P,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&D.some(k=>k.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new ai(P,g),r===!0&&(c.format=li,c.type=Vi)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let k=0;k<D.length;k++){let N=D[k];N.setSize&&N.setSize(P,g),E&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(I,P){if(f||I.toneMapping===$n&&D.length===0)return!1;if(b=P,P!==null){let g=P.width,E=P.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return C===!1&&I.setRenderTarget(a),d=I.toneMapping,I.toneMapping=$n,!0},this.hasRenderPass=function(){return C},this.end=function(I,P){I.toneMapping=d,f=!0;let g=a,E=o;for(let k=0;k<D.length;k++){let N=D[k];N.enabled!==!1&&(N.render(I,E,g,P),N.needsSwap!==!1&&(g=E,E=E===o?l:o))}if(_!==I.outputColorSpace||w!==I.toneMapping){_=I.outputColorSpace,w=I.toneMapping,m.defines={},pe.getTransfer(_)===Ae&&(m.defines.SRGB_TRANSFER="");let k=om[w];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,I.setRenderTarget(b),I.render(u,p),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),m.dispose()}}var su=new hn,ru=new ai(1,1),au=new js(1),ou=new Vs,lu=new ma,cu=new Ks,Oh=[],Bh=[],zh=new Float32Array(16),kh=new Float32Array(9),Gh=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ao(i,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),Ze(e,n)}}function pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),Ze(e,n)}}function mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),Ze(e,n)}}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function Ro(i){return i.version===0&&(i.compareFunction=Nl,i.needsUpdate=!0),i}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ro(ru):r=su,e.setTexture2D(t||r,s)}function Tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lu,s)}function Em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ro(au):r=cu,e.setTextureCube(t||r,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ou,s)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Lm(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Hm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){let n=this.cache,s=t.length,r=Ao(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ro(ru):a=su;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xm(i,t,e){let n=this.cache,s=t.length,r=Ao(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lu,r[a])}function qm(i,t,e){let n=this.cache,s=t.length,r=Ao(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ro(au):a=cu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ym(i,t,e){let n=this.cache,s=t.length,r=Ao(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ou,r[a])}function Zm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Nm;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Gm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}var $l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}},Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function $m(i,t,e){let n=i.name,s=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),a=Yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vh(e,c===void 0?new $l(o,i,t):new Jl(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Kl(o),Vh(e,m)),e=m}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);$m(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jm=37297,Km=0;function Qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wh=new jt;function jm(i){pe._getMatrix(Wh,pe.workingColorSpace,i);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case ks:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Qm(i.getShaderSource(t),o)}else return r}function tg(i,t){let e=jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var eg={[vl]:"Linear",[yl]:"Reinhard",[Ml]:"Cineon",[ur]:"ACESFilmic",[bl]:"AgX",[wl]:"Neutral",[Sl]:"Custom"};function ng(i,t){let e=eg[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new H;function ig(){pe.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(og,lg)}function lg(i,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ql(e)}var cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(cg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ug={[Bi]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function dg(i){return ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fg={[Ms]:"ENVMAP_MODE_REFRACTION"};function pg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mg={[xl]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mg[i.combine]||"ENVMAP_BLENDING_NONE"}function _g(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=pg(e),m=gg(e),u=sg(e),p=rg(r),_=s.createProgram(),w,f,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mr).join(`
`),w.length>0&&(w+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(w=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?oe.tonemapping_pars_fragment:"",e.toneMapping!==$n?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Ql(a),a=qh(a,e),a=Yh(a,e),o=Ql(o),o=qh(o,e),o=Yh(o,e),a=Zh(a),o=Zh(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,w=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,f=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=d+w+a,D=d+f+o,C=Hh(s,s.VERTEX_SHADER,b),I=Hh(s,s.FRAGMENT_SHADER,D);s.attachShader(_,C),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(C)||"",Z=s.getShaderInfoLog(I)||"",U=G.trim(),$=W.trim(),j=Z.trim(),J=!0,dt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,I);else{let et=Xh(s,C,"vertex"),st=Xh(s,I,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+et+`
`+st)}else U!==""?$t("WebGLProgram: Program Info Log:",U):($===""||j==="")&&(dt=!1);dt&&(N.diagnostics={runnable:J,programLog:U,vertexShader:{log:$,prefix:w},fragmentShader:{log:j,prefix:f}})}s.deleteShader(C),s.deleteShader(I),g=new bs(s,_),E=ag(s,_)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(_,Jm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=I,this}var xg=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tc(t),e.set(t,n)),n}},tc=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function vg(i){return i===Ti||i===_r||i===xr}function yg(i,t,e,n,s,r){let a=new fs,o=new jl,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,E,k,N,G,W){let Z=N.fog,U=G.geometry,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,J=t.get(g.envMap||$,j),dt=u[g.type],et=n.precision;g.precision!==null&&(et=n.getMaxPrecision(g.precision),et!==g.precision&&$t("WebGLProgram.getParameters:",g.precision,"not supported, using",et,"instead."));let st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ut=st!==void 0?st.length:0,It=0;U.morphAttributes.position!==void 0&&(It=1),U.morphAttributes.normal!==void 0&&(It=2),U.morphAttributes.color!==void 0&&(It=3);let Jt,it,At,ft;if(dt){let rt=Kn[dt];Jt=rt.vertexShader,it=rt.fragmentShader}else{Jt=g.vertexShader,it=g.fragmentShader;let rt=o.getVertexShaderStage(g),wt=o.getFragmentShaderStage(g);o.update(g,rt,wt),At=rt.id,ft=wt.id}let Gt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Rt=G.isInstancedMesh===!0,Yt=G.isBatchedMesh===!0,Wt=!!g.map,Kt=!!g.matcap,xe=!!J,Ut=xe&&J.isPMREMTexture===!0,Re=!!g.aoMap,Ue=!!g.lightMap,We=!!g.bumpMap&&g.wireframe===!1,Ce=!!g.normalMap,we=!!g.displacementMap,Ne=!!g.emissiveMap,re=!!g.metalnessMap,Xe=!!g.roughnessMap,de=g.anisotropy>0,B=g.clearcoat>0,Ve=g.diffuseRoughness>0,he=g.dispersion>0,Te=g.retroreflectivity>0,bt=g.iridescence>0,ee=g.sheen>0,Ct=g.transmission>0,Vt=de&&!!g.anisotropyMap,A=B&&!!g.clearcoatMap,x=B&&!!g.clearcoatNormalMap,q=B&&!!g.clearcoatRoughnessMap,mt=Ve&&!!g.diffuseRoughnessMap,lt=bt&&!!g.iridescenceMap,Mt=bt&&!!g.iridescenceThicknessMap,Et=ee&&!!g.sheenColorMap,nt=ee&&!!g.sheenRoughnessMap,X=!!g.specularMap,vt=!!g.specularColorMap,L=!!g.specularIntensityMap,at=Ct&&!!g.transmissionMap,tt=Ct&&!!g.thicknessMap,xt=!!g.gradientMap,T=!!g.alphaMap,v=g.alphaTest>0,F=!!g.alphaHash,Y=!!g.extensions,V=$n;g.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(V=i.toneMapping);let ht=Ut?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,gt={shaderID:dt,shaderType:g.type,shaderName:g.name,vertexShader:Jt,fragmentShader:it,defines:g.defines,customVertexShaderID:At,customFragmentShaderID:ft,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:et,batching:Yt,batchingColor:Yt&&G._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&G.instanceColor!==null,instancingMorph:Rt&&G.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Wt,matcap:Kt,envMap:xe,envMapMode:xe&&J.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?ht.length-1:null,envMapSize:Ut?ht[0].width:null,aoMap:Re,lightMap:Ue,bumpMap:We,normalMap:Ce,displacementMap:we,emissiveMap:Ne,normalMapObjectSpace:Ce&&g.normalMapType===gh,normalMapTangentSpace:Ce&&g.normalMapType===So,packedNormalMap:Ce&&g.normalMapType===So&&vg(g.normalMap.format),metalnessMap:re,roughnessMap:Xe,anisotropy:de,anisotropyMap:Vt,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:q,diffuseRoughness:Ve,diffuseRoughnessMap:mt,dispersion:he,retroreflection:Te,iridescence:bt,iridescenceMap:lt,iridescenceThicknessMap:Mt,sheen:ee,sheenColorMap:Et,sheenRoughnessMap:nt,specularMap:X,specularColorMap:vt,specularIntensityMap:L,transmission:Ct,transmissionMap:at,thicknessMap:tt,gradientMap:xt,opaque:g.transparent===!1&&g.blending===ys&&g.alphaToCoverage===!1,alphaMap:T,alphaTest:v,alphaHash:F,combine:g.combine,mapUv:Wt&&p(g.map.channel),aoMapUv:Re&&p(g.aoMap.channel),lightMapUv:Ue&&p(g.lightMap.channel),bumpMapUv:We&&p(g.bumpMap.channel),normalMapUv:Ce&&p(g.normalMap.channel),displacementMapUv:we&&p(g.displacementMap.channel),emissiveMapUv:Ne&&p(g.emissiveMap.channel),metalnessMapUv:re&&p(g.metalnessMap.channel),roughnessMapUv:Xe&&p(g.roughnessMap.channel),anisotropyMapUv:Vt&&p(g.anisotropyMap.channel),clearcoatMapUv:A&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:nt&&p(g.sheenRoughnessMap.channel),specularMapUv:X&&p(g.specularMap.channel),specularColorMapUv:vt&&p(g.specularColorMap.channel),specularIntensityMapUv:L&&p(g.specularIntensityMap.channel),transmissionMapUv:at&&p(g.transmissionMap.channel),thicknessMapUv:tt&&p(g.thicknessMap.channel),alphaMapUv:T&&p(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||de),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(Wt||T),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&Ce===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_t,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.filter(rt=>rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:V,decodeVideoTexture:Wt&&g.map.isVideoTexture===!0&&pe.getTransfer(g.map.colorSpace)===Ae,decodeVideoTextureEmissive:Ne&&g.emissiveMap.isVideoTexture===!0&&pe.getTransfer(g.emissiveMap.colorSpace)===Ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zn,flipSided:g.side===un,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Y&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&g.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function w(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let k in g.defines)E.push(k),E.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(f(E,g),d(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function f(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function d(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){let E=u[g.type],k;if(E){let N=Kn[E];k=Ph.clone(N.uniforms)}else k=g.uniforms;return k}function D(g,E){let k=h.get(E);return k!==void 0?++k.usedTimes:(k=new _g(i,E,g,s),c.push(k),h.set(E,k)),k}function C(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function I(g){o.remove(g)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:w,getUniforms:b,acquireProgram:D,releaseProgram:C,releaseShaderCache:I,programs:c,dispose:P}}function Mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,w,f,d){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:w,renderOrder:u.renderOrder,z:f,group:d},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=_,b.materialVariant=a(u),b.groupOrder=w,b.renderOrder=u.renderOrder,b.z=f,b.group=d),t++,b}function l(u,p,_,w,f,d,b){b.reversedDepth===!0&&(f=-f);let D=o(u,p,_,w,f,d);_.transmission>0?n.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(u,p,_,w,f,d){let b=o(u,p,_,w,f,d);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||Sg),n.length>1&&n.sort(p||Jh),s.length>1&&s.sort(p||Jh)}function m(){for(let u=t,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Kh,i.set(n,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new te};break;case"SpotLight":e={position:new H,direction:new H,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Eg=0;function Ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rg(i){let t=new wg,e=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ye,a=new ye;function o(c){let h=0,m=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,_=0,w=0,f=0,d=0,b=0,D=0,C=0,I=0,P=0,g=0,E=0,k=0,N=0;c.sort(Ag);for(let W=0,Z=c.length;W<Z;W++){let U=c[W],$=U.color,j=U.intensity,J=U.distance,dt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ti?dt=U.shadow.map.texture:dt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=$.r*j,m+=$.g*j,u+=$.b*j;else if(U.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(U.sh.coefficients[et],j);N++}else if(U.isSunLight){let et=t.get(U);if(et.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,ut=e.get(U);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[_]=ut,n.sunShadowMap[_]=dt;let It=st.getViewportCount();for(let Jt=0;Jt<It;Jt++)n.sunShadowMatrix[w+Jt]=st.getMatrix(Jt),n.sunShadowCascade[w+Jt]=st._cascadeData[Jt];w+=It,_++}n.sun[p]=et,p++}else if(U.isDirectionalLight){let et=t.get(U);if(et.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,ut=e.get(U);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,n.directionalShadow[f]=ut,n.directionalShadowMap[f]=dt,n.directionalShadowMatrix[f]=U.shadow.matrix,I++}n.directional[f]=et,f++}else if(U.isSpotLight){let et=t.get(U);et.position.setFromMatrixPosition(U.matrixWorld),et.color.copy($).multiplyScalar(j),et.distance=J,et.coneCos=Math.cos(U.angle),et.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),et.decay=U.decay,n.spot[b]=et;let st=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,st.updateMatrices(U),U.castShadow&&k++),n.spotLightMatrix[b]=st.matrix,U.castShadow){let ut=e.get(U);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,n.spotShadow[b]=ut,n.spotShadowMap[b]=dt,g++}b++}else if(U.isRectAreaLight){let et=t.get(U);et.color.copy($).multiplyScalar(j),et.halfWidth.set(U.width*.5,0,0),et.halfHeight.set(0,U.height*.5,0),n.rectArea[D]=et,D++}else if(U.isPointLight){let et=t.get(U);if(et.color.copy(U.color).multiplyScalar(U.intensity),et.distance=U.distance,et.decay=U.decay,U.castShadow){let st=U.shadow,ut=e.get(U);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,ut.shadowCameraNear=st.camera.near,ut.shadowCameraFar=st.camera.far,n.pointShadow[d]=ut,n.pointShadowMap[d]=dt,n.pointShadowMatrix[d]=U.shadow.matrix,P++}n.point[d]=et,d++}else if(U.isHemisphereLight){let et=t.get(U);et.skyColor.copy(U.color).multiplyScalar(j),et.groundColor.copy(U.groundColor).multiplyScalar(j),n.hemi[C]=et,C++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let G=n.hash;(G.sunLength!==p||G.directionalLength!==f||G.pointLength!==d||G.spotLength!==b||G.rectAreaLength!==D||G.hemiLength!==C||G.numSunShadows!==_||G.numDirectionalShadows!==I||G.numPointShadows!==P||G.numSpotShadows!==g||G.numSpotMaps!==E||G.numLightProbes!==N)&&(n.sun.length=p,n.directional.length=f,n.spot.length=b,n.rectArea.length=D,n.point.length=d,n.hemi.length=C,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-k,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=N,G.sunLength=p,G.directionalLength=f,G.pointLength=d,G.spotLength=b,G.rectAreaLength=D,G.hemiLength=C,G.numSunShadows=_,G.numDirectionalShadows=I,G.numPointShadows=P,G.numSpotShadows=g,G.numSpotMaps=E,G.numLightProbes=N,n.version=Eg++)}function l(c,h){let m=0,u=0,p=0,_=0,w=0,f=0,d=h.matrixWorldInverse;for(let b=0,D=c.length;b<D;b++){let C=c[b];if(C.isSunLight){let I=n.sun[m];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(d),m++}else if(C.isDirectionalLight){let I=n.directional[u];I.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(d),u++}else if(C.isSpotLight){let I=n.spot[_];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(d),_++}else if(C.isRectAreaLight){let I=n.rectArea[w];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),a.identity(),r.copy(C.matrixWorld),r.premultiply(d),a.extractRotation(r),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),w++}else if(C.isPointLight){let I=n.point[p];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),p++}else if(C.isHemisphereLight){let I=n.hemi[f];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Qh(i){let t=new Rg(i),e=[],n=[],s=[];function r(m){h.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function l(){t.setup(e),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function c(m){t.setupView(e,m)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qh(i),t.set(s,[o])):r>=a.length?(o=new Qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`,Lg=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Dg=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],jh=new ye,yr=new H,Zl=new H;function Ng(i,t,e){let n=new vi,s=new ae,r=new ae,a=new ze,o=new ya,l=new Ma,c={},h=e.maxTextureSize,m={[wi]:un,[un]:wi,[Zn]:Zn},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Ge(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bi;let d=this.type;this.render=function(P,g,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;this.type===Yc&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bi);let k=i.getRenderTarget(),N=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),W=i.state;W.setBlending(zi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=d!==this.type;Z&&g.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach($=>$.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,$=P.length;U<$;U++){let j=P[U],J=j.shadow;if(J===void 0){$t("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let dt=J.getFrameExtents();s.multiply(dt),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,J.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=et,J.map===null||Z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===vs){if(j.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new yn(s.x,s.y,{format:Ti,type:Un,minFilter:cn,magFilter:cn,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new ai(s.x,s.y,Rn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=ri,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Je,J.map.depthTexture.magFilter=Je}else j.isPointLight?(J.map=new Sr(s.x),J.map.depthTexture=new js(s.x,Nn)):(J.map=new yn(s.x,s.y),J.map.depthTexture=new ai(s.x,s.y,Nn)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=ri,this.type===Bi?(J.map.depthTexture.compareFunction=et?Dl:Ll,J.map.depthTexture.minFilter=cn,J.map.depthTexture.magFilter=cn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Je,J.map.depthTexture.magFilter=Je);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let st=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,E);let ut=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:E.layers;for(let It=0;It<st;It++){let Jt=J.getCamera(It);if(j.isPointLight){let it=J.camera,At=J.matrix,ft=j.distance||it.far;ft!==it.far&&(it.far=ft,it.updateProjectionMatrix()),yr.setFromMatrixPosition(j.matrixWorld),it.position.copy(yr),Zl.copy(it.position),Zl.add(Lg[It]),it.up.copy(Dg[It]),it.lookAt(Zl),it.updateMatrixWorld(),At.makeTranslation(-yr.x,-yr.y,-yr.z),jh.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),J._frustum.setFromProjectionMatrix(jh,it.coordinateSystem,it.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,It),i.clear();else{It===0&&(i.setRenderTarget(J.map),i.clear());let it=J.getViewport(It);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),W.viewport(a)}n=J.getFrustum(It),C(g,E,Jt,j,ut,this.type)}J.isPointLightShadow!==!0&&this.type===vs&&b(J,E),J.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(k,N,G)};function b(P,g){let E=t.update(w);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null?P.mapPass=new yn(s.x,s.y,{format:Ti,type:Un}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),u.uniforms.shadow_pass.value=P.map.depthTexture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(g,null,E,u,w,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value.set(P.map.width,P.map.height),p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(g,null,E,p,w,null)}function D(P,g,E,k){let N=null,G=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)N=G;else if(N=E.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let W=N.uuid,Z=g.uuid,U=c[W];U===void 0&&(U={},c[W]=U);let $=U[Z];$===void 0&&($=N.clone(),U[Z]=$,g.addEventListener("dispose",I)),N=$}if(N.visible=g.visible,N.wireframe=g.wireframe,k===vs?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:m[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,E.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=i.properties.get(N);W.light=E}return N}function C(P,g,E,k,N,G){if(P.visible===!1)return;if(P.layers.test(N)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&G===vs)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);let U=t.update(P),$=P.material;if(Array.isArray($)){let j=U.groups;for(let J=0,dt=j.length;J<dt;J++){let et=j[J],st=$[et.materialIndex];if(st&&st.visible){let ut=D(P,st,k,G);P.onBeforeShadow(i,P,g,E,U,ut,et),i.renderBufferDirect(E,null,U,ut,P,et),P.onAfterShadow(i,P,g,E,U,ut,et)}}}else if($.visible){let j=D(P,$,k,G);P.onBeforeShadow(i,P,g,E,U,j,null),i.renderBufferDirect(E,null,U,j,P,null),P.onAfterShadow(i,P,g,E,U,j,null)}}let Z=P.children;for(let U=0,$=Z.length;U<$;U++)C(Z[U],g,E,k,N,G)}function I(P){P.target.removeEventListener("dispose",I);for(let E in c){let k=c[E],N=P.target.uuid;N in k&&(k[N].dispose(),delete k[N])}}}function Ug(i,t){function e(){let L=!1,at=new ze,tt=null,xt=new ze(0,0,0,0);return{setMask:function(T){tt!==T&&!L&&(i.colorMask(T,T,T,T),tt=T)},setLocked:function(T){L=T},setClear:function(T,v,F,Y,V){V===!0&&(T*=Y,v*=Y,F*=Y),at.set(T,v,F,Y),xt.equals(at)===!1&&(i.clearColor(T,v,F,Y),xt.copy(at))},reset:function(){L=!1,tt=null,xt.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,tt=null,xt=null,T=null;return{setReversed:function(v){if(at!==v){let F=t.get("EXT_clip_control");v?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT),at=v;let Y=T;T=null,this.setClear(Y)}},getReversed:function(){return at},setTest:function(v){v?_t(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(v){tt!==v&&!L&&(i.depthMask(v),tt=v)},setFunc:function(v){if(at&&(v=Ah[v]),xt!==v){switch(v){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=v}},setLocked:function(v){L=v},setClear:function(v){T!==v&&(T=v,at&&(v=1-v),i.clearDepth(v))},reset:function(){L=!1,tt=null,xt=null,T=null,at=!1}}}function s(){let L=!1,at=null,tt=null,xt=null,T=null,v=null,F=null,Y=null,V=null;return{setTest:function(ht){L||(ht?_t(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ht){at!==ht&&!L&&(i.stencilMask(ht),at=ht)},setFunc:function(ht,gt,rt){(tt!==ht||xt!==gt||T!==rt)&&(i.stencilFunc(ht,gt,rt),tt=ht,xt=gt,T=rt)},setOp:function(ht,gt,rt){(v!==ht||F!==gt||Y!==rt)&&(i.stencilOp(ht,gt,rt),v=ht,F=gt,Y=rt)},setLocked:function(ht){L=ht},setClear:function(ht){V!==ht&&(i.clearStencil(ht),V=ht)},reset:function(){L=!1,at=null,tt=null,xt=null,T=null,v=null,F=null,Y=null,V=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},m={},u={},p=new WeakMap,_=[],w=null,f=!1,d=null,b=null,D=null,C=null,I=null,P=null,g=null,E=new te(0,0,0),k=0,N=!1,G=null,W=null,Z=null,U=null,$=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,dt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=dt>=1):et.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=dt>=2);let st=null,ut={},It=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),it=new ze().fromArray(It),At=new ze().fromArray(Jt);function ft(L,at,tt,xt){let T=new Uint8Array(4),v=i.createTexture();i.bindTexture(L,v),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<tt;F++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,T):i.texImage2D(at+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,T);return v}let Gt={};Gt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(cs),We(!1),Ce(dl),_t(i.CULL_FACE),Re(zi);function _t(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Yt(L,at){return u[L]!==at?(i.bindFramebuffer(L,at),u[L]=at,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Wt(L,at){let tt=_,xt=!1;if(L){tt=p.get(at),tt===void 0&&(tt=[],p.set(at,tt));let T=L.textures;if(tt.length!==T.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let v=0,F=T.length;v<F;v++)tt[v]=i.COLOR_ATTACHMENT0+v;tt.length=T.length,xt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(tt)}function Kt(L){return w!==L?(i.useProgram(L),w=L,!0):!1}let xe={[ki]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Jc]:i.FUNC_REVERSE_SUBTRACT};xe[Kc]=i.MIN,xe[Qc]=i.MAX;let Ut={[jc]:i.ZERO,[th]:i.ONE,[eh]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(L,at,tt,xt,T,v,F,Y,V,ht){if(L===zi){f===!0&&(Rt(i.BLEND),f=!1);return}if(f===!1&&(_t(i.BLEND),f=!0),L!==Zc){if(L!==d||ht!==N){if((b!==ki||I!==ki)&&(i.blendEquation(i.FUNC_ADD),b=ki,I=ki),ht)switch(L){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",L);break}else switch(L){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",L);break}D=null,C=null,P=null,g=null,E.set(0,0,0),k=0,d=L,N=ht}return}T=T||at,v=v||tt,F=F||xt,(at!==b||T!==I)&&(i.blendEquationSeparate(xe[at],xe[T]),b=at,I=T),(tt!==D||xt!==C||v!==P||F!==g)&&(i.blendFuncSeparate(Ut[tt],Ut[xt],Ut[v],Ut[F]),D=tt,C=xt,P=v,g=F),(Y.equals(E)===!1||V!==k)&&(i.blendColor(Y.r,Y.g,Y.b,V),E.copy(Y),k=V),d=L,N=!1}function Ue(L,at){L.side===Zn?Rt(i.CULL_FACE):_t(i.CULL_FACE);let tt=L.side===un;at&&(tt=!tt),We(tt),L.blending===ys&&L.transparent===!1?Re(zi):Re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xt=L.stencilWrite;o.setTest(xt),xt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){G!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),G=L)}function Ce(L){L!==Xc?(_t(i.CULL_FACE),L!==W&&(L===dl?i.cullFace(i.BACK):L===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),W=L}function we(L){L!==Z&&(J&&i.lineWidth(L),Z=L)}function Ne(L,at,tt){L?(_t(i.POLYGON_OFFSET_FILL),(U!==at||$!==tt)&&(U=at,$=tt,a.getReversed()&&(at=-at,tt=-tt),i.polygonOffset(at,tt))):Rt(i.POLYGON_OFFSET_FILL)}function re(L){L?_t(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=i.TEXTURE0+j-1),st!==L&&(i.activeTexture(L),st=L)}function de(L,at,tt){tt===void 0&&(st===null?tt=i.TEXTURE0+j-1:tt=st);let xt=ut[tt];xt===void 0&&(xt={type:void 0,texture:void 0},ut[tt]=xt),(xt.type!==L||xt.texture!==at)&&(st!==tt&&(i.activeTexture(tt),st=tt),i.bindTexture(L,at||Gt[L]),xt.type=L,xt.texture=at)}function B(){let L=ut[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ve(){try{i.compressedTexImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Te(){try{i.texSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function bt(){try{i.texSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Vt(){try{i.texStorage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function x(){try{i.texImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function q(){try{i.texImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function mt(L){return m[L]!==void 0?m[L]:i.getParameter(L)}function lt(L,at){m[L]!==at&&(i.pixelStorei(L,at),m[L]=at)}function Mt(L){it.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function Et(L){At.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),At.copy(L))}function nt(L,at){let tt=c.get(at);tt===void 0&&(tt=new WeakMap,c.set(at,tt));let xt=tt.get(L);xt===void 0&&(xt=i.getUniformBlockIndex(at,L.name),i.uniformBlockBinding(at,xt,xt),tt.set(L,xt))}function X(L,at,tt){let T=c.get(at).get(L);l[T]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,T,tt),l[T]=tt)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},st=null,ut={},u={},l={},p=new WeakMap,_=[],w=null,f=!1,d=null,b=null,D=null,C=null,I=null,P=null,g=null,E=new te(0,0,0),k=0,N=!1,G=null,W=null,Z=null,U=null,$=null,it.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Rt,bindFramebuffer:Yt,drawBuffers:Wt,useProgram:Kt,setBlending:Re,setMaterial:Ue,setFlipSided:We,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Ne,setScissorTest:re,activeTexture:Xe,bindTexture:de,unbindTexture:B,compressedTexImage2D:Ve,compressedTexImage3D:he,texImage2D:x,texImage3D:q,pixelStorei:lt,getParameter:mt,updateUBOMapping:nt,uniformBlockBinding:X,texStorage2D:Vt,texStorage3D:A,texSubImage2D:Te,texSubImage3D:bt,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ct,scissor:Mt,viewport:Et,reset:vt}}function Fg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,m=new Set,u,p=new WeakMap,_=new Set,w=new FinalizationRegistry(A=>_.delete(A)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,x){return f?new OffscreenCanvas(A,x):Gs("canvas")}function b(A,x,q){let mt=1,lt=Vt(A);if((lt.width>q||lt.height>q)&&(mt=q/Math.max(lt.width,lt.height)),mt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Mt=Math.floor(mt*lt.width),Et=Math.floor(mt*lt.height);u===void 0&&(u=d(Mt,Et));let nt=x?d(Mt,Et):u;return nt.width=Mt,nt.height=Et,nt.getContext("2d").drawImage(A,0,0,Mt,Et),$t("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+Mt+"x"+Et+")."),nt}else return"data"in A&&$t("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function D(A){return A.generateMipmaps}function C(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(A,x,q,mt,lt,Mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Et;mt&&(Et=t.get("EXT_texture_norm16"),Et||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8),q===i.UNSIGNED_SHORT&&Et&&(nt=Et.R16_EXT),q===i.SHORT&&Et&&(nt=Et.R16_SNORM_EXT)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),x===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8),q===i.UNSIGNED_SHORT&&Et&&(nt=Et.RG16_EXT),q===i.SHORT&&Et&&(nt=Et.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&(q===i.UNSIGNED_SHORT&&Et&&(nt=Et.RGB16_EXT),q===i.SHORT&&Et&&(nt=Et.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),x===i.RGBA){let X=Mt?ks:pe.getTransfer(lt);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=X===Ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Et&&(nt=Et.RGBA16_EXT),q===i.SHORT&&Et&&(nt=Et.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function g(A,x){let q;return A?x===null||x===Nn||x===Vi?q=i.DEPTH24_STENCIL8:x===Rn?q=i.DEPTH32F_STENCIL8:x===Ss&&(q=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===Vi?q=i.DEPTH_COMPONENT24:x===Rn?q=i.DEPTH_COMPONENT32F:x===Ss&&(q=i.DEPTH_COMPONENT16),q}function E(A,x){return D(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function k(A){let x=new WeakRef(A);n.get(A).__ref=x,_.add(x),w.register(A,x,x)}function N(A){let x=n.get(A).__ref;x!==void 0&&(_.delete(x),w.unregister(x))}function G(A){Z(A.target)}function W(A){U(A.target)}function Z(A){A.removeEventListener("dispose",G),N(A),j(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&m.delete(A)}function U(A){A.removeEventListener("dispose",W),N(A),dt(A)}function $(){for(let A of _){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?U(x):Z(x))}_.clear(),m.clear()}function j(A){let x=n.get(A);if(x.__webglInit===void 0)return;let q=A.source,mt=p.get(q);if(mt){let lt=mt[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&J(A),Object.keys(mt).length===0&&p.delete(q)}n.remove(A)}function J(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let q=A.source,mt=p.get(q);delete mt[x.__cacheKey],a.memory.textures--}function dt(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&Z(q),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(x.__webglFramebuffer[lt]))for(let Mt=0;Mt<x.__webglFramebuffer[lt].length;Mt++)i.deleteFramebuffer(x.__webglFramebuffer[lt][Mt]);else i.deleteFramebuffer(x.__webglFramebuffer[lt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[lt])}else{if(Array.isArray(x.__webglFramebuffer))for(let lt=0;lt<x.__webglFramebuffer.length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[lt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let lt=0;lt<x.__webglColorRenderbuffer.length;lt++)x.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[lt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let mt=A.textures;for(let lt=0,Mt=mt.length;lt<Mt;lt++){let Et=n.get(mt[lt]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(mt[lt])}n.remove(A)}let et=0;function st(){et=0}function ut(){return et}function It(A){et=A}function Jt(){let A=et;return A>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,A}function it(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function At(A,x){let q=n.get(A);if(A.isVideoTexture&&ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let mt=A.image;if(mt===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(q,A,x);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function ft(A,x){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Ue(q,A,x);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function Gt(A,x){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Ue(q,A,x);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function _t(A,x){let q=n.get(A);if(A.version>0&&q.__version!==A.version){We(q,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}let Rt={[ca]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},Yt={[Je]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Wt={[xh]:i.NEVER,[Nl]:i.ALWAYS,[vh]:i.LESS,[Ll]:i.LEQUAL,[yh]:i.EQUAL,[Dl]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function Kt(A,x){if(x.type===Rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===Oa||x.magFilter===dr||x.magFilter===oi||x.minFilter===cn||x.minFilter===Oa||x.minFilter===dr||x.minFilter===oi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Rt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Rt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Rt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Yt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Yt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Je||x.minFilter!==dr&&x.minFilter!==oi||x.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function xe(A,x){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",G),k(x));let mt=x.source,lt=p.get(mt);lt===void 0&&(lt={},p.set(mt,lt));let Mt=it(x);if(Mt!==A.__cacheKey){lt[Mt]===void 0&&(lt[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),lt[Mt].usedTimes++;let Et=lt[A.__cacheKey];Et!==void 0&&(lt[A.__cacheKey].usedTimes--,Et.usedTimes===0&&J(x)),A.__cacheKey=Mt,A.__webglTexture=lt[Mt].texture}return q}function Ut(A,x,q){return Math.floor(Math.floor(A/q)/x)}function Re(A,x,q,mt){let Mt=A.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,q,mt,x.data);else{Mt.sort((L,at)=>L.start-at.start);let Et=0;for(let L=1;L<Mt.length;L++){let at=Mt[Et],tt=Mt[L],xt=at.start+at.count,T=Ut(tt.start,x.width,4),v=Ut(at.start,x.width,4);tt.start<=xt+1&&T===v&&Ut(tt.start+tt.count-1,x.width,4)===T?at.count=Math.max(at.count,tt.start+tt.count-at.start):(++Et,Mt[Et]=tt)}Mt.length=Et+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),X=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let L=0,at=Mt.length;L<at;L++){let tt=Mt[L],xt=Math.floor(tt.start/4),T=Math.ceil(tt.count/4),v=xt%x.width,F=Math.floor(xt/x.width),Y=T,V=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,v),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,v,F,Y,V,q,mt,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,X),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function Ue(A,x,q){let mt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(mt=i.TEXTURE_3D);let lt=xe(A,x),Mt=x.source;e.bindTexture(mt,A.__webglTexture,i.TEXTURE0+q);let Et=n.get(Mt);if(Mt.version!==Et.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let V=pe.getPrimaries(pe.workingColorSpace),ht=x.colorSpace===ci?null:pe.getPrimaries(x.colorSpace),gt=x.colorSpace===ci||V===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let X=b(x.image,!1,s.maxTextureSize);X=Ct(x,X);let vt=r.convert(x.format,x.colorSpace),L=r.convert(x.type),at=P(x.internalFormat,vt,L,x.normalized,x.colorSpace,x.isVideoTexture);Kt(mt,x);let tt,xt=x.mipmaps,T=x.isVideoTexture!==!0,v=Et.__version===void 0||lt===!0,F=Mt.dataReady,Y=E(x,X);if(x.isDepthTexture)at=g(x.format===li,x.type),v&&(T?e.texStorage2D(i.TEXTURE_2D,1,at,X.width,X.height):e.texImage2D(i.TEXTURE_2D,0,at,X.width,X.height,0,vt,L,null));else if(x.isDataTexture)if(xt.length>0){T&&v&&e.texStorage2D(i.TEXTURE_2D,Y,at,xt[0].width,xt[0].height);for(let V=0,ht=xt.length;V<ht;V++)tt=xt[V],T?F&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,tt.width,tt.height,vt,L,tt.data):e.texImage2D(i.TEXTURE_2D,V,at,tt.width,tt.height,0,vt,L,tt.data);x.generateMipmaps=!1}else T?(v&&e.texStorage2D(i.TEXTURE_2D,Y,at,X.width,X.height),F&&Re(x,X,vt,L)):e.texImage2D(i.TEXTURE_2D,0,at,X.width,X.height,0,vt,L,X.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){T&&v&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y,at,xt[0].width,xt[0].height,X.depth);for(let V=0,ht=xt.length;V<ht;V++)if(tt=xt[V],x.format!==Fn)if(vt!==null)if(T){if(F)if(x.layerUpdates.size>0){let gt=Gl(tt.width,tt.height,x.format,x.type);for(let rt of x.layerUpdates){let wt=tt.data.subarray(rt*gt/tt.data.BYTES_PER_ELEMENT,(rt+1)*gt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,rt,tt.width,tt.height,1,vt,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,tt.width,tt.height,X.depth,vt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,at,tt.width,tt.height,X.depth,0,tt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,tt.width,tt.height,X.depth,vt,L,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,at,tt.width,tt.height,X.depth,0,vt,L,tt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{T&&v&&e.texStorage2D(i.TEXTURE_2D,Y,at,xt[0].width,xt[0].height);for(let V=0,ht=xt.length;V<ht;V++)tt=xt[V],x.format!==Fn?vt!==null?T?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,tt.width,tt.height,vt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,at,tt.width,tt.height,0,tt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?F&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,tt.width,tt.height,vt,L,tt.data):e.texImage2D(i.TEXTURE_2D,V,at,tt.width,tt.height,0,vt,L,tt.data)}else if(x.isDataArrayTexture)if(T){if(v&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y,at,X.width,X.height,X.depth),F)if(x.layerUpdates.size>0){let V=Gl(X.width,X.height,x.format,x.type);for(let ht of x.layerUpdates){let gt=X.data.subarray(ht*V/X.data.BYTES_PER_ELEMENT,(ht+1)*V/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,X.width,X.height,1,vt,L,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,vt,L,X.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,X.width,X.height,X.depth,0,vt,L,X.data);else if(x.isData3DTexture)T?(v&&e.texStorage3D(i.TEXTURE_3D,Y,at,X.width,X.height,X.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,vt,L,X.data)):e.texImage3D(i.TEXTURE_3D,0,at,X.width,X.height,X.depth,0,vt,L,X.data);else if(x.isFramebufferTexture){if(v)if(T)e.texStorage2D(i.TEXTURE_2D,Y,at,X.width,X.height);else{let V=X.width,ht=X.height;for(let gt=0;gt<Y;gt++)e.texImage2D(i.TEXTURE_2D,gt,at,V,ht,0,vt,L,null),V>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let V=i.canvas;if(V.hasAttribute("layoutsubtree")||V.setAttribute("layoutsubtree","true"),X.parentNode!==V){V.appendChild(X),m.add(x),V.onpaint=ht=>{let gt=ht.changedElements;for(let rt of m)gt.includes(rt.image)&&(rt.needsUpdate=!0)},V.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{let gt=i.RGBA,rt=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,rt,wt,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(T&&v){let V=Vt(xt[0]);e.texStorage2D(i.TEXTURE_2D,Y,at,V.width,V.height)}for(let V=0,ht=xt.length;V<ht;V++)tt=xt[V],T?F&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,vt,L,tt):e.texImage2D(i.TEXTURE_2D,V,at,vt,L,tt);x.generateMipmaps=!1}else if(T){if(v){let V=Vt(X);e.texStorage2D(i.TEXTURE_2D,Y,at,V.width,V.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,L,X)}else e.texImage2D(i.TEXTURE_2D,0,at,vt,L,X);D(x)&&x.mipmapsAutoUpdate===!0&&C(mt),Et.__version=Mt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function We(A,x,q){if(x.image.length!==6)return;let mt=xe(A,x),lt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let Mt=n.get(lt);if(lt.version!==Mt.__version||mt===!0){e.activeTexture(i.TEXTURE0+q);let Et=pe.getPrimaries(pe.workingColorSpace),nt=x.colorSpace===ci?null:pe.getPrimaries(x.colorSpace),X=x.colorSpace===ci||Et===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let vt=x.isCompressedTexture||x.image[0].isCompressedTexture,L=x.image[0]&&x.image[0].isDataTexture,at=[];for(let rt=0;rt<6;rt++)!vt&&!L?at[rt]=b(x.image[rt],!0,s.maxCubemapSize):at[rt]=L?x.image[rt].image:x.image[rt],at[rt]=Ct(x,at[rt]);let tt=at[0],xt=r.convert(x.format,x.colorSpace),T=r.convert(x.type),v=P(x.internalFormat,xt,T,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,Y=Mt.__version===void 0||mt===!0,V=lt.dataReady,ht=E(x,tt);Kt(i.TEXTURE_CUBE_MAP,x);let gt;if(x.isDepthTexture){if(v=g(x.format===li,x.type),Y)if(F)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,v,tt.width,tt.height);else for(let rt=0;rt<6;rt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,v,tt.width,tt.height,0,xt,T,null)}else if(vt){F&&Y&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,v,tt.width,tt.height);for(let rt=0;rt<6;rt++){gt=at[rt].mipmaps;for(let wt=0;wt<gt.length;wt++){let Xt=gt[wt];x.format!==Fn?xt!==null?F?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Xt.width,Xt.height,xt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,v,Xt.width,Xt.height,0,Xt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Xt.width,Xt.height,xt,T,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,v,Xt.width,Xt.height,0,xt,T,Xt.data)}}}else{if(gt=x.mipmaps,F&&Y){gt.length>0&&ht++;let rt=Vt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,v,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(L){F?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,at[rt].width,at[rt].height,xt,T,at[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,v,at[rt].width,at[rt].height,0,xt,T,at[rt].data);for(let wt=0;wt<gt.length;wt++){let zt=gt[wt].image[rt].image;F?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,zt.width,zt.height,xt,T,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,v,zt.width,zt.height,0,xt,T,zt.data)}}else{F?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt,T,at[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,v,xt,T,at[rt]);for(let wt=0;wt<gt.length;wt++){let Xt=gt[wt];F?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,xt,T,Xt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,v,xt,T,Xt.image[rt])}}}D(x)&&x.mipmapsAutoUpdate===!0&&C(i.TEXTURE_CUBE_MAP),Mt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ce(A,x,q,mt,lt,Mt){let Et=r.convert(q.format,q.colorSpace),nt=r.convert(q.type),X=P(q.internalFormat,Et,nt,q.normalized,q.colorSpace),vt=n.get(x),L=n.get(q);if(L.__renderTarget=x,!vt.__hasExternalTextures){let at=Math.max(1,x.width>>Mt),tt=Math.max(1,x.height>>Mt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,Mt,X,at,tt,x.depth,0,Et,nt,null):e.texImage2D(lt,Mt,X,at,tt,0,Et,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,lt,L.__webglTexture,0,Te(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,lt,L.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let mt=x.depthTexture,lt=mt&&mt.isDepthTexture?mt.type:null,Mt=g(x.stencilBuffer,lt),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(x),Mt,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(x),Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{let mt=x.textures;for(let lt=0;lt<mt.length;lt++){let Mt=mt[lt],Et=r.convert(Mt.format,Mt.colorSpace),nt=r.convert(Mt.type),X=P(Mt.internalFormat,Et,nt,Mt.normalized,Mt.colorSpace);bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(x),X,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(x),X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(A,x,q){let mt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(x.depthTexture);lt.__renderTarget=x;let Mt=mt?x.depthTexture.image[0]:x.depthTexture.image;(!lt.__webglTexture||Mt.width!==x.width||Mt.height!==x.height)&&(Mt.width=x.width,Mt.height=x.height,x.depthTexture.needsUpdate=!0),mt?_t(x.depthTexture,0):At(x.depthTexture,0);let Et=lt.__webglTexture,nt=Te(x),X=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,vt=x.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ri)bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,X,Et,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,X,Et,0);else if(x.depthTexture.format===li)bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,X,Et,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,X,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(A){let x=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let mt=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),mt){let lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,mt.removeEventListener("dispose",lt)};mt.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=mt}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(q)for(let mt=0;mt<6;mt++)Ne(x.__webglFramebuffer[mt],A,mt);else A.texture.mipmaps.length>0?Ne(x.__webglFramebuffer[0],A,0):Ne(x.__webglFramebuffer,A,0);else if(q){x.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[mt]),x.__webglDepthbuffer[mt]===void 0)x.__webglDepthbuffer[mt]=i.createRenderbuffer(),we(x.__webglDepthbuffer[mt],A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=x.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Mt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(A,x,q){let mt=n.get(A);x!==void 0&&Ce(mt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&re(A)}function de(A){let x=A.texture,q=n.get(A),mt=n.get(x);A.addEventListener("dispose",W),k(A);let lt=A.textures,Mt=A.isWebGLCubeRenderTarget===!0,Et=lt.length>1;if(Et||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=x.version,a.memory.textures++),Mt){q.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps.length>0){q.__webglFramebuffer[nt]=[];for(let X=0;X<x.mipmaps.length;X++)q.__webglFramebuffer[nt][X]=i.createFramebuffer()}else q.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps.length>0){q.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)q.__webglFramebuffer[nt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Et)for(let nt=0,X=lt.length;nt<X;nt++){let vt=n.get(lt[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&bt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let nt=0;nt<lt.length;nt++){let X=lt[nt];q.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let vt=r.convert(X.format,X.colorSpace),L=r.convert(X.type),at=P(X.internalFormat,vt,L,X.normalized,X.colorSpace,A.isXRRenderTarget===!0),tt=Te(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,at,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,q.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),we(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps.length>0)for(let X=0;X<x.mipmaps.length;X++)Ce(q.__webglFramebuffer[nt][X],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,X);else Ce(q.__webglFramebuffer[nt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);D(x)?C(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let nt=0,X=lt.length;nt<X;nt++){let vt=lt[nt],L=n.get(vt),at=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,L.__webglTexture),Kt(at,vt),Ce(q.__webglFramebuffer,A,vt,i.COLOR_ATTACHMENT0+nt,at,0),D(vt)&&C(at)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,mt.__webglTexture),Kt(nt,x),x.mipmaps.length>0)for(let X=0;X<x.mipmaps.length;X++)Ce(q.__webglFramebuffer[X],A,x,i.COLOR_ATTACHMENT0,nt,X);else Ce(q.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,nt,0);D(x)?C(nt):x.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&re(A)}function B(A){let x=A.textures;for(let q=0,mt=x.length;q<mt;q++){let lt=x[q];if(D(lt)&&lt.mipmapsAutoUpdate===!0){let Mt=I(A),Et=n.get(lt).__webglTexture;e.bindTexture(Mt,Et),C(Mt),e.unbindTexture()}}}let Ve=[];function he(A){if(A.samples>0){if(bt(A)===!1){let x=A.textures,q=A.width,mt=A.height,lt=i.COLOR_BUFFER_BIT,Mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),nt=x.length>1;if(nt)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let L=n.get(x[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,q,mt,0,0,q,mt,lt,i.NEAREST),l===!0&&(Ve.length=0,Ve.push(i.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ve.push(Mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let L=n.get(x[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Te(A){return Math.min(s.maxSamples,A.samples)}function bt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ct(A,x){let q=A.colorSpace,mt=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==zs&&q!==ci&&(pe.getTransfer(q)===Ae?(mt!==Fn||lt!==pn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",q)),x}function Vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Jt,this.resetTextureUnits=st,this.getTextureUnits=ut,this.setTextureUnits=It,this.setTexture2D=At,this.setTexture2DArray=ft,this.setTexture3D=Gt,this.setTextureCube=_t,this.rebindTextures=Xe,this.setupRenderTarget=de,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=bt,this.dispose=$}function Og(i,t){function e(n,s=ci){let r,a=pe.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Al)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Il)return i.RGB;if(n===Fn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ja||n===Ka||n===Qa||n===ja||n===_r||n===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ja)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qa)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===_o||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===yo||n===xr||n===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`,ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nc=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,p=null,_=null,w=typeof XRWebGLBinding<"u",f=new ec,d={},b=e.getContextAttributes(),D=null,C=null,I=[],P=[],g=new ae,E=null,k=null,N=new ln;N.viewport=new ze;let G=new ln;G.viewport=new ze;let W=[N,G],Z=new Da,U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let At=I[it];return At===void 0&&(At=new ps,I[it]=At),At.getTargetRaySpace()},this.getControllerGrip=function(it){let At=I[it];return At===void 0&&(At=new ps,I[it]=At),At.getGripSpace()},this.getHand=function(it){let At=I[it];return At===void 0&&(At=new ps,I[it]=At),At.getHandSpace()};function j(it){let At=P.indexOf(it.inputSource);if(At===-1)return;let ft=I[At];ft!==void 0&&(ft.update(it.inputSource,it.frame,c||a),ft.dispatchEvent({type:it.type,data:it.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",dt);for(let it=0;it<I.length;it++){let At=P[it];At!==null&&(P[it]=null,I[it].disconnect(At))}U=null,$=null,f.reset();for(let it in d)delete d[it];if(t.setRenderTarget(D),p=null,u=null,m=null,s=null,C=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(g.width,g.height,!1),k!==null){let it=k.camera;it.fov=k.fov,it.zoom=k.zoom,it.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",dt),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(g),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Gt=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=b.stencil?li:ri,Gt=b.stencil?Vi:Nn);let Rt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),C=new yn(u.textureWidth,u.textureHeight,{format:Fn,type:pn,depthTexture:new ai(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ft={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new yn(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function dt(it){for(let At=0;At<it.removed.length;At++){let ft=it.removed[At],Gt=P.indexOf(ft);Gt>=0&&(P[Gt]=null,I[Gt].disconnect(ft))}for(let At=0;At<it.added.length;At++){let ft=it.added[At],Gt=P.indexOf(ft);if(Gt===-1){for(let Rt=0;Rt<I.length;Rt++)if(Rt>=P.length){P.push(ft),Gt=Rt;break}else if(P[Rt]===null){P[Rt]=ft,Gt=Rt;break}if(Gt===-1)break}let _t=I[Gt];_t&&_t.connect(ft)}}function et(it,At){At===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(At.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let At=it.near,ft=it.far;f.texture!==null&&(f.depthNear>0&&(At=f.depthNear),f.depthFar>0&&(ft=f.depthFar)),Z.near=G.near=N.near=At,Z.far=G.far=N.far=ft,(U!==Z.near||$!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),U=Z.near,$=Z.far),Z.layers.mask=it.layers.mask|6,N.layers.mask=Z.layers.mask&-5,G.layers.mask=Z.layers.mask&-3;let Gt=it.parent,_t=Z.cameras;et(Z,Gt);for(let Rt=0;Rt<_t.length;Rt++)et(_t[Rt],Gt);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),k===null&&it.isPerspectiveCamera&&(k={camera:it,fov:it.fov,zoom:it.zoom}),st(it,Z,Gt)};function st(it,At,ft){ft===null?it.matrix.copy(At.matrixWorld):(it.matrix.copy(ft.matrixWorld),it.matrix.invert(),it.matrix.multiply(At.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(At.projectionMatrix),it.projectionMatrixInverse.copy(At.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=da*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Z)},this.getCameraTexture=function(it){return d[it]};let ut=null;function It(it,At){if(h=At.getViewerPose(c||a),_=At,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let Gt=!1;ft.length!==Z.cameras.length&&(Z.cameras.length=0,Gt=!0);for(let Wt=0;Wt<ft.length;Wt++){let Kt=ft[Wt],xe=null;if(p!==null)xe=p.getViewport(Kt);else{let Re=m.getViewSubImage(u,Kt);xe=Re.viewport,Wt===0&&(t.setRenderTargetTextures(C,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(C))}let Ut=W[Wt];Ut===void 0&&(Ut=new ln,Ut.layers.enable(Wt),Ut.viewport=new ze,W[Wt]=Ut),Ut.matrix.fromArray(Kt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Kt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(xe.x,xe.y,xe.width,xe.height),Wt===0&&(Z.matrix.copy(Ut.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Gt===!0&&Z.cameras.push(Ut)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){m=n.getBinding();let Wt=m.getDepthInformation(ft[0]);Wt&&Wt.isValid&&Wt.texture&&f.init(Wt,s.renderState)}if(_t&&_t.includes("camera-access")&&w){t.state.unbindTexture(),m=n.getBinding();for(let Wt=0;Wt<ft.length;Wt++){let Kt=ft[Wt].camera;if(Kt){let xe=d[Kt];xe||(xe=new tr,d[Kt]=xe);let Ut=m.getCameraImage(Kt);xe.sourceTexture=Ut}}}}for(let ft=0;ft<I.length;ft++){let Gt=P[ft],_t=I[ft];Gt!==null&&_t!==void 0&&_t.update(Gt,At,c||a)}ut&&ut(it,At),At.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:At}),_=null}let Jt=new tu;Jt.setAnimationLoop(It),this.setAnimationLoop=function(it){ut=it},this.dispose=function(){}}},kg=new ye,hu=new jt;hu.set(-1,0,0,0,1,0,0,0,1);function Gg(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Bl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,D,C){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&p(f,d,C)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),w(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,b,D):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===un&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===un&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let b=t.get(d),D=b.envMap,C=b.envMapRotation;D&&(f.envMap.value=D,f.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(hu),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,b,D){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=D*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,b){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function w(f,d){let b=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={};function a(b,D){let C=D.program;n.uniformBlockBinding(b,C,s[b.id])}function o(b,D){let C=s[b.id];C===void 0&&(_(b),C=l(b),s[b.id]=C,b.addEventListener("dispose",f));let I=D.program;n.updateUBOMapping(b,I);let P=t.render.frame;r[b.id]!==P&&(c(b),r[b.id]=P)}function l(b){let D=i.createBuffer(),C=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,C,I),i.bindBuffer(i.UNIFORM_BUFFER,null),D}function c(b){let D=s[b.id],C=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let P=0,g=C.length;P<g;P++){let E=C[P];if(Array.isArray(E))for(let k=0,N=E.length;k<N;k++)h(E[k],P,k,I);else h(E,P,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,D,C,I){if(u(b,D,C,I)===!0){let P=b.__offset,g=b.value;if(Array.isArray(g)){let E=0;for(let k=0;k<g.length;k++){let N=g[k],G=w(N,!0);m(N,b.__data,E),E+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}function m(b,D,C){typeof b=="number"||typeof b=="boolean"?D[C]=b:b.isMatrix3?(D[C]=b.elements[0],D[C+1]=b.elements[1],D[C+2]=b.elements[2],D[C+3]=0,D[C+4]=b.elements[3],D[C+5]=b.elements[4],D[C+6]=b.elements[5],D[C+7]=0,D[C+8]=b.elements[6],D[C+9]=b.elements[7],D[C+10]=b.elements[8],D[C+11]=0):ArrayBuffer.isView(b)?D.set(b.subarray(0,D.length-C),C):b.toArray(D,C)}function u(b,D,C,I){let P=b.value,g=D+"_"+C;if(Array.isArray(P)){I[g]===void 0&&(I[g]=[]);let E=I[g],k=!1;for(let N=0;N<P.length;N++)p(P[N],E,N)===!0&&(k=!0);return k}return p(P,I,g)}function p(b,D,C){if(D[C]===void 0)return typeof b=="number"||typeof b=="boolean"?D[C]=b:ArrayBuffer.isView(b)?D[C]=b.slice():D[C]=b.clone(),!0;{let I=D[C];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return D[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function _(b){let D=b.uniforms,C=0,I=16;for(let g=0,E=D.length;g<E;g++){let k=Array.isArray(D[g])?D[g]:[D[g]];for(let N=0,G=k.length;N<G;N++){let W=k[N],Z=Array.isArray(W.value)?W.value:[W.value],U=Array.isArray(D[g])||Array.isArray(W.value),$=C;for(let J=0,dt=Z.length;J<dt;J++){let et=Z[J],st=w(et,U),ut=C%I,It=ut%st.boundary,Jt=ut+It;C+=It,Jt!==0&&I-Jt<st.storage&&(C+=I-Jt),J===0&&($=C),C+=st.storage}let j=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new j((C-$)/Float32Array.BYTES_PER_ELEMENT),W.__offset=$}}let P=C%I;return P>0&&(C+=I-P),b.__size=C,b.__cache={},this}function w(b,D){let C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=16,C.storage=48):b.isMatrix4?(C.boundary=16,C.storage=64):b.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",b),D===!0&&(C.boundary=16,C.storage=Math.ceil(C.storage/16)*16),C}function f(b){let D=b.target;D.removeEventListener("dispose",f),i.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:d}}var Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function Wg(){return Jn===null&&(Jn=new Ys(Hg,16,16,Ti,Un),Jn.name="DFG_LUT",Jn.minFilter=cn,Jn.magFilter=cn,Jn.wrapS=Vn,Jn.wrapT=Vn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Eo=class{constructor(t={}){let{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=pn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let w=p,f=new Set([Wa,Ha,Va]),d=new Set([pn,Nn,Ss,Vi,za,ka]),b=new Uint32Array(4),D=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]},I=null,P=null,g=[],E=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,G=!1,W=null,Z=null,U=null,$=null;this._outputColorSpace=on;let j=0,J=0,dt=null,et=-1,st=null,ut=new ze,It=new ze,Jt=null,it=new te(0),At=0,ft=e.width,Gt=e.height,_t=1,Rt=null,Yt=null,Wt=new ze(0,0,ft,Gt),Kt=new ze(0,0,ft,Gt),xe=!1,Ut=new vi,Re=new ga,Ue=!1,We=!1,Ce=new ye,we=new H,Ne=new ze,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function de(){return dt===null?_t:1}let B=n;function Ve(M,O){return e.getContext(M,O)}let he,Te,bt,ee,Ct,Vt,A,x,q,mt,lt,Mt,Et,nt,X,vt,L,at,tt,xt,T,v,F;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),B===null){let O="webgl2";if(B=Ve(O,M),B===null)throw Ve(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y()}catch(M){throw e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Qt("WebGLRenderer: "+M.message),M}function Y(){he=new em(B),he.init(),T=new Og(B,he),Te=new Wp(B,he,t,T),bt=new Ug(B,he),Te.reversedDepthBuffer&&u&&bt.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),U=B.createFramebuffer(),$=B.createFramebuffer(),ee=new sm(B),Ct=new Mg,Vt=new Fg(B,he,bt,Ct,Te,T,ee),A=new tm(N),x=new rd(B),v=new Vp(B,x),q=new nm(B,x,ee,v),mt=new am(B,q,x,v,ee),at=new rm(B,Te,Vt),X=new Xp(Ct),lt=new yg(N,A,he,Te,v,X),Mt=new Gg(N,Ct),Et=new bg,nt=new Cg(he),L=new Gp(N,A,bt,mt,_,l),vt=new Ng(N,mt,Te),F=new Vg(B,ee,Te,bt),tt=new Hp(B,he,ee),xt=new im(B,he,ee),ee.programs=lt.programs,N.capabilities=Te,N.extensions=he,N.properties=Ct,N.renderLists=Et,N.shadowMap=vt,N.state=bt,N.info=ee}w!==pn&&(k=new lm(w,e.width,e.height,o,s,r));let V=new nc(N,B);this.xr=V,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(M){M!==void 0&&(_t=M,this.setSize(ft,Gt,!1))},this.getSize=function(M){return M.set(ft,Gt)},this.setSize=function(M,O,y=!0){if(V.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=M,Gt=O,e.width=Math.floor(M*_t),e.height=Math.floor(O*_t),y===!0&&(e.style.width=M+"px",e.style.height=O+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(ft*_t,Gt*_t).floor()},this.setDrawingBufferSize=function(M,O,y){ft=M,Gt=O,_t=y,e.width=Math.floor(M*y),e.height=Math.floor(O*y),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(w===pn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ut)},this.getViewport=function(M){return M.copy(Wt)},this.setViewport=function(M,O,y,S){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,O,y,S),bt.viewport(ut.copy(Wt).multiplyScalar(de()).round())},this.getScissor=function(M){return M.copy(Kt)},this.setScissor=function(M,O,y,S){M.isVector4?Kt.set(M.x,M.y,M.z,M.w):Kt.set(M,O,y,S),bt.scissor(It.copy(Kt).multiplyScalar(de()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(M){bt.setScissorTest(xe=M)},this.setOpaqueSort=function(M){Rt=M},this.setTransparentSort=function(M){Yt=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,y=!0){let S=0;if(M){let R=!1;if(dt!==null){let z=dt.texture.format;R=f.has(z)}if(R){let z=dt.texture.type,K=d.has(z),Q=L.getClearColor(),pt=L.getClearAlpha(),Tt=Q.r,Dt=Q.g,Bt=Q.b;K?(b[0]=Tt,b[1]=Dt,b[2]=Bt,b[3]=pt,B.clearBufferuiv(B.COLOR,0,b)):(D[0]=Tt,D[1]=Dt,D[2]=Bt,D[3]=pt,B.clearBufferiv(B.COLOR,0,D))}else S|=B.COLOR_BUFFER_BIT}O&&(S|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),y&&(S|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S!==0&&B.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),W=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),L.dispose(),Et.dispose(),nt.dispose(),Vt.dispose(),Ct.dispose(),A.dispose(),mt.dispose(),q.dispose(),v.dispose(),F.dispose(),lt.dispose(),V.dispose(),V.removeEventListener("sessionstart",fe),V.removeEventListener("sessionend",le),ce.stop()};function ht(M){M.preventDefault(),Fl("WebGLRenderer: Context Lost."),G=!0}function gt(){Fl("WebGLRenderer: Context Restored."),G=!1;let M=ee.autoReset,O=vt.enabled,y=vt.autoUpdate,S=vt.needsUpdate,R=vt.type;Y(),ee.autoReset=M,vt.enabled=O,vt.autoUpdate=y,vt.needsUpdate=S,vt.type=R}function rt(M){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wt(M){let O=M.target;O.removeEventListener("dispose",wt),Xt(O)}function Xt(M){zt(M),Ct.remove(M)}function zt(M){let O=Ct.get(M).programs;O!==void 0&&(O.forEach(function(y){lt.releaseProgram(y)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,y,S,R,z){O===null&&(O=re);let K=R.isMesh&&R.matrixWorld.determinantAffine()<0,Q=Qn(M,O,y,S,R);bt.setMaterial(S,K);let pt=y.index,Tt=1;if(S.wireframe===!0){if(pt=q.getWireframeAttribute(y),pt===void 0)return;Tt=2}let Dt=y.drawRange,Bt=y.attributes.position,yt=Dt.start*Tt,Ot=(Dt.start+Dt.count)*Tt;z!==null&&(yt=Math.max(yt,z.start*Tt),Ot=Math.min(Ot,(z.start+z.count)*Tt)),pt!==null?(yt=Math.max(yt,0),Ot=Math.min(Ot,pt.count)):Bt!=null&&(yt=Math.max(yt,0),Ot=Math.min(Ot,Bt.count));let ue=Ot-yt;if(ue<0||ue===1/0)return;v.setup(R,S,Q,y,pt);let Ie,Ee=tt;if(pt!==null&&(Ie=x.get(pt),Ee=xt,Ee.setIndex(Ie)),R.isMesh)S.wireframe===!0?(bt.setLineWidth(S.wireframeLinewidth*de()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(R.isLine){let qe=S.linewidth;qe===void 0&&(qe=1),bt.setLineWidth(qe*de()),R.isLineSegments?Ee.setMode(B.LINES):R.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else R.isPoints?Ee.setMode(B.POINTS):R.isSprite&&Ee.setMode(B.TRIANGLES);if(R.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ee.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let qe=R._multiDrawStarts,Nt=R._multiDrawCounts,en=R._multiDrawCount,ve=pt?x.get(pt).bytesPerElement:1,kn=Ct.get(S).currentProgram.getUniforms();for(let ot=0;ot<en;ot++)kn.setValue(B,"_gl_DrawID",ot),Ee.render(qe[ot]/ve,Nt[ot])}else if(R.isInstancedMesh)Ee.renderInstances(yt,ue,R.count);else if(y.isInstancedBufferGeometry){let qe=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,Nt=Math.min(y.instanceCount,qe);Ee.renderInstances(yt,ue,Nt)}else Ee.render(yt,ue)};function Lt(M,O,y,S){W!==null&&M.isNodeMaterial&&W.setObject(S,M),Ue===!0&&X.setState(M,y,!1),M.transparent===!0&&M.side===Zn&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,tn(M,O,S),M.side=wi,M.needsUpdate=!0,tn(M,O,S),M.side=Zn):tn(M,O,S)}this.compile=function(M,O,y=null){y===null&&(y=M),W!==null&&W.renderStart(M,O,y),P=nt.get(y),P.init(O),E.push(P),y.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(P.pushLight(R),R.castShadow&&P.pushShadow(R))}),M!==y&&M.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(P.pushLight(R),R.castShadow&&P.pushShadow(R))}),P.setupLights(),W!==null&&W.updateLights(P.state.lightsArray),We=this.localClippingEnabled,Ue=X.init(this.clippingPlanes,We),Ue===!0&&X.setGlobalState(this.clippingPlanes,O),W!==null&&vt.render(P.state.shadowsArray,y,O);let S=new Set;return M.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let z=R.material;if(z)if(Array.isArray(z))for(let K=0;K<z.length;K++){let Q=z[K];Lt(Q,y,O,R),S.add(Q)}else Lt(z,y,O,R),S.add(z)}),P=E.pop(),W!==null&&W.renderEnd(),S},this.compileAsync=function(M,O,y=null){let S=this.compile(M,O,y);return new Promise(R=>{function z(){if(S.forEach(function(K){let pt=Ct.get(K).currentProgram;(pt===void 0||pt.isReady())&&S.delete(K)}),S.size===0){R(M);return}setTimeout(z,10)}he.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let ct=null;function qt(M){ct&&ct(M)}function fe(){ce.stop()}function le(){ce.start()}let ce=new tu;ce.setAnimationLoop(qt),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(M){ct=M,V.setAnimationLoop(M),M===null?ce.stop():ce.start()},V.addEventListener("sessionstart",fe),V.addEventListener("sessionend",le),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(M,O);let y=V.enabled===!0&&V.isPresenting===!0,S=k!==null&&(dt===null||y)&&k.begin(N,dt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(O),O=V.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,O,dt),P=nt.get(M,E.length),P.init(O),P.state.textureUnits=Vt.getTextureUnits(),E.push(P),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Re.setFromArrayCamera(O):Ut.setFromProjectionMatrix(Ce,En,O.reversedDepth),We=this.localClippingEnabled,Ue=X.init(this.clippingPlanes,We),I=Et.get(M,g.length),I.init(),g.push(I),this.info.render.frame++,V.enabled===!0&&V.isPresenting===!0){let K=N.xr.getDepthSensingMesh();K!==null&&Se(K,O,-1/0,N.sortObjects)}Se(M,O,0,N.sortObjects),I.finish(),W!==null&&W.updateLights(P.state.lightsArray),N.sortObjects===!0&&I.sort(Rt,Yt),Xe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xe&&L.addToRenderList(I,M),this.info.autoReset===!0&&this.info.reset(),Ue===!0&&X.beginShadows();let R=P.state.shadowsArray;if(vt.render(R,M,O),Ue===!0&&X.endShadows(),(S&&k.hasRenderPass())===!1){let K=I.opaque,Q=I.transmissive;if(P.setupLights(),O.isArrayCamera){let pt=O.cameras;if(Q.length>0)for(let Tt=0,Dt=pt.length;Tt<Dt;Tt++){let Bt=pt[Tt];Fe(K,Q,M,Bt)}Xe&&L.render(M);for(let Tt=0,Dt=pt.length;Tt<Dt;Tt++){let Bt=pt[Tt];Ft(I,M,Bt,Bt.viewport)}}else Q.length>0&&Fe(K,Q,M,O),Xe&&L.render(M),Ft(I,M,O)}dt!==null&&J===0&&(Vt.updateMultisampleRenderTarget(dt),Vt.updateRenderTargetMipmap(dt)),S&&k.end(N),M.isScene===!0&&M.onAfterRender(N,M,O),v.resetDefaultState(),et=-1,st=null,E.pop(),E.length>0?(P=E[E.length-1],Vt.setTextureUnits(P.state.textureUnits),Ue===!0&&X.setGlobalState(N.clippingPlanes,P.state.camera)):P=null,g.pop(),g.length>0?I=g[g.length-1]:I=null,W!==null&&W.renderEnd()};function Se(M,O,y,S){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){let K=O.isArrayCamera?Re:Ut;if(!M.frustumCulled||M.intersectsFrustum(K)){S&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);let Q=mt.update(M),pt=M.material;pt.visible&&I.push(M,Q,pt,y,Ne.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let K=O.isArrayCamera?Re:Ut;if(!M.frustumCulled||M.intersectsFrustum(K)){let Q=mt.update(M),pt=M.material;if(S&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Ne.copy(Q.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(pt)){let Tt=Q.groups;for(let Dt=0,Bt=Tt.length;Dt<Bt;Dt++){let yt=Tt[Dt],Ot=pt[yt.materialIndex];Ot&&Ot.visible&&I.push(M,Q,Ot,y,Ne.z,yt,O)}}else pt.visible&&I.push(M,Q,pt,y,Ne.z,null,O)}}}let z=M.children;for(let K=0,Q=z.length;K<Q;K++)Se(z[K],O,y,S)}function Ft(M,O,y,S){let{opaque:R,transmissive:z,transparent:K}=M;P.setupLightsView(y),Ue===!0&&X.setGlobalState(N.clippingPlanes,y),S&&bt.viewport(ut.copy(S)),R.length>0&&ge(R,O,y),z.length>0&&ge(z,O,y),K.length>0&&ge(K,O,y),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Fe(M,O,y,S){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[S.id]===void 0){let yt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[S.id]=new yn(1,1,{generateMipmaps:!0,type:yt?Un:pn,minFilter:oi,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let z=P.state.transmissionRenderTarget[S.id],K=S.viewport||ut;z.setSize(K.z*N.transmissionResolutionScale,K.w*N.transmissionResolutionScale);let Q=N.getRenderTarget(),pt=N.getActiveCubeFace(),Tt=N.getActiveMipmapLevel();N.setRenderTarget(z),N.getClearColor(it),At=N.getClearAlpha(),At<1&&N.setClearColor(16777215,.5),N.clear(),Xe&&L.render(y);let Dt=N.toneMapping;N.toneMapping=$n;let Bt=S.viewport;if(S.viewport!==void 0&&(S.viewport=void 0),P.setupLightsView(S),Ue===!0&&X.setGlobalState(N.clippingPlanes,S),ge(M,y,S),Vt.updateMultisampleRenderTarget(z),Vt.updateRenderTargetMipmap(z),he.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Ot=0,ue=O.length;Ot<ue;Ot++){let Ie=O[Ot],{object:Ee,geometry:qe,material:Nt,group:en}=Ie;if(Nt.side===Zn&&Ee.layers.test(S.layers)){let ve=Nt.side;Nt.side=un,Nt.needsUpdate=!0,bn(Ee,y,S,qe,Nt,en),Nt.side=ve,Nt.needsUpdate=!0,yt=!0}}yt===!0&&(Vt.updateMultisampleRenderTarget(z),Vt.updateRenderTargetMipmap(z))}N.setRenderTarget(Q,pt,Tt),N.setClearColor(it,At),Bt!==void 0&&(S.viewport=Bt),N.toneMapping=Dt}function ge(M,O,y){let S=O.isScene===!0?O.overrideMaterial:null;for(let R=0,z=M.length;R<z;R++){let K=M[R],{object:Q,geometry:pt,group:Tt}=K,Dt=K.material;Dt.allowOverride===!0&&S!==null&&(Dt=S),Q.layers.test(y.layers)&&bn(Q,O,y,pt,Dt,Tt)}}function bn(M,O,y,S,R,z){W!==null&&R.isNodeMaterial&&W.setObject(M,R),M.onBeforeRender(N,O,y,S,R,z),M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),R.onBeforeRender(N,O,y,S,M,z),R.transparent===!0&&R.side===Zn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,N.renderBufferDirect(y,O,S,R,M,z),R.side=wi,R.needsUpdate=!0,N.renderBufferDirect(y,O,S,R,M,z),R.side=Zn):N.renderBufferDirect(y,O,S,R,M,z),M.onAfterRender(N,O,y,S,R,z)}function ke(M){let O=0;for(let y of M)y.texture!==null&&O++;return O}function tn(M,O,y){O.isScene!==!0&&(O=re);let S=Ct.get(M),R=P.state.lights,z=P.state.shadowsArray,K=R.state.version,Q=lt.getParameters(M,R.state,z,O,y,P.state.lightProbeGridArray),pt=lt.getProgramCacheKey(Q),Tt=S.programs;S.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,S.fog=O.fog;let Dt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;S.envMap=A.get(M.envMap||S.environment,Dt),S.envMapRotation=S.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",wt),Tt=new Map,S.programs=Tt,S.programVariants=new Map);let Bt=Tt.get(pt);if(Bt!==void 0){if(S.currentProgram===Bt&&S.lightsStateVersion===K)return zn(M,Q),Bt}else Q.uniforms=lt.getUniforms(M),W!==null&&M.isNodeMaterial&&W.build(M,y,Q),M.onBeforeCompile(Q,N),Bt=lt.acquireProgram(Q,pt),Tt.set(pt,Bt),S.uniforms=Q.uniforms;let yt=S.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=X.uniform),zn(M,Q),S.needsLights=dn(M),S.lightsStateVersion=K,S.needsLights&&(yt.ambientLightColor.value=R.state.ambient,yt.lightProbe.value=R.state.probe,yt.sunLights.value=R.state.sun,yt.sunLightShadows.value=R.state.sunShadow,yt.directionalLights.value=R.state.directional,yt.directionalLightShadows.value=R.state.directionalShadow,yt.spotLights.value=R.state.spot,yt.spotLightShadows.value=R.state.spotShadow,yt.rectAreaLights.value=R.state.rectArea,yt.ltc_1.value=R.state.rectAreaLTC1,yt.ltc_2.value=R.state.rectAreaLTC2,yt.pointLights.value=R.state.point,yt.pointLightShadows.value=R.state.pointShadow,yt.hemisphereLights.value=R.state.hemi,yt.sunShadowMatrix.value=R.state.sunShadowMatrix,yt.sunShadowCascade.value=R.state.sunShadowCascade,yt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,yt.spotLightMatrix.value=R.state.spotLightMatrix,yt.spotLightMap.value=R.state.spotLightMap,yt.pointShadowMatrix.value=R.state.pointShadowMatrix),S.numLightProbeGrids=ke(P.state.lightProbeGridArray),S.currentProgram=Bt,S.uniformsList=null,Bt}function ui(M,O,y,S,R){let z=Ct.get(M),K=z.currentProgram.id+","+S+","+R,Q=z.programVariants.get(K);return Q===void 0?(Q=tn(M,O,y),z.programVariants.set(K,Q)):(z.currentProgram=Q,z.uniformsList=null,z.outputColorSpace=S,z.toneMapping=R),Q}function Ri(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=bs.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function zn(M,O){let y=Ct.get(M);y.outputColorSpace=O.outputColorSpace,y.batching=O.batching,y.batchingColor=O.batchingColor,y.instancing=O.instancing,y.instancingColor=O.instancingColor,y.instancingMorph=O.instancingMorph,y.skinning=O.skinning,y.morphTargets=O.morphTargets,y.morphNormals=O.morphNormals,y.morphColors=O.morphColors,y.morphTargetsCount=O.morphTargetsCount,y.numClippingPlanes=O.numClippingPlanes,y.numIntersection=O.numClipIntersection,y.vertexAlphas=O.vertexAlphas,y.vertexTangents=O.vertexTangents,y.toneMapping=O.toneMapping}function Qn(M,O,y,S,R){O.isScene!==!0&&(O=re),Vt.resetTextureUnits();let z=O.fog,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,Q=dt===null?N.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:pe.workingColorSpace,pt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Tt=A.get(S.envMap||K,pt),Dt=S.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,Bt=!!y.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),yt=!!y.morphAttributes.position,Ot=!!y.morphAttributes.normal,ue=!!y.morphAttributes.color,Ie=$n;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ie=N.toneMapping);let Ee=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,qe=Ee!==void 0?Ee.length:0,Nt=Ct.get(S),en=P.state.lights;if(Ue===!0&&(We===!0||M!==st)){let _e=M===st&&S.id===et;X.setState(S,M,_e)}let ve=!1,kn=!1;S.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==en.state.version||R.isBatchedMesh&&Nt.batching===!1||!R.isBatchedMesh&&Nt.batching===!0||R.isBatchedMesh&&Nt.batchingColor===!0&&R._colorsTexture===null||R.isBatchedMesh&&Nt.batchingColor===!1&&R._colorsTexture!==null||R.isInstancedMesh&&Nt.instancing===!1||!R.isInstancedMesh&&Nt.instancing===!0||R.isSkinnedMesh&&Nt.skinning===!1||!R.isSkinnedMesh&&Nt.skinning===!0||R.isInstancedMesh&&Nt.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Nt.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Nt.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Nt.instancingMorph===!1&&R.morphTexture!==null||Nt.envMap!==Tt||S.fog===!0&&Nt.fog!==z||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==X.numPlanes||Nt.numIntersection!==X.numIntersection)||Nt.vertexAlphas!==Dt||Nt.vertexTangents!==Bt||Nt.morphTargets!==yt||Nt.morphNormals!==Ot||Nt.morphColors!==ue||Nt.morphTargetsCount!==qe||Nt.numLightProbeGrids!==ke(P.state.lightProbeGridArray)?ve=!0:(Nt.outputColorSpace!==Q||Nt.toneMapping!==Ie)&&(kn=!0):(ve=!0,Nt.__version=S.version);let ot=Nt.currentProgram;(ve===!0||kn===!0)&&(ot=kn===!0?ui(S,O,R,Q,Ie):tn(S,O,R),W&&S.isNodeMaterial&&W.onUpdateProgram(S,ot,Nt));let ie=!1,be=!1,ne=!1,Ht=ot.getUniforms(),Zt=Nt.uniforms;if(bt.useProgram(ot.program)&&(ie=!0,be=!0,ne=!0),S.id!==et&&(et=S.id,be=!0),ie||st!==M){bt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ht.setValue(B,"projectionMatrix",M.projectionMatrix),Ht.setValue(B,"viewMatrix",M.matrixWorldInverse);let Le=Ht.map.cameraPosition;Le!==void 0&&Le.setValue(B,we.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,be=!0,ne=!0)}if(Nt.needsLights&&(en.state.sunShadowMap.length>0&&Ht.setValue(B,"sunShadowMap",en.state.sunShadowMap,Vt),en.state.directionalShadowMap.length>0&&Ht.setValue(B,"directionalShadowMap",en.state.directionalShadowMap,Vt),en.state.spotShadowMap.length>0&&Ht.setValue(B,"spotShadowMap",en.state.spotShadowMap,Vt),en.state.pointShadowMap.length>0&&Ht.setValue(B,"pointShadowMap",en.state.pointShadowMap,Vt)),R.isSkinnedMesh){Ht.setOptional(B,R,"bindMatrix"),Ht.setOptional(B,R,"bindMatrixInverse");let _e=R.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),Ht.setValue(B,"boneTexture",_e.boneTexture,Vt))}R.isBatchedMesh&&(Ht.setOptional(B,R,"batchingTexture"),Ht.setValue(B,"batchingTexture",R._matricesTexture,Vt),Ht.setOptional(B,R,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",R._indirectTexture,Vt),Ht.setOptional(B,R,"batchingColorTexture"),R._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",R._colorsTexture,Vt));let Pe=y.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0)&&at.update(R,y,ot),(be||Nt.receiveShadow!==R.receiveShadow)&&(Nt.receiveShadow=R.receiveShadow,Ht.setValue(B,"receiveShadow",R.receiveShadow)),(S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial)&&S.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=Wg()),be){if(Ht.setValue(B,"toneMappingExposure",N.toneMappingExposure),Nt.needsLights&&mn(Zt,ne),z&&S.fog===!0&&Mt.refreshFogUniforms(Zt,z),Mt.refreshMaterialUniforms(Zt,S,_t,Gt,P.state.transmissionRenderTarget[M.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let _e=C,Le=0;for(let fn of P.state.lightProbeGridArray)fn.texture!==null&&(_e.textures[Le]=fn.texture,_e.min[Le]=fn.boundingBox.min,_e.max[Le]=fn.boundingBox.max,_e.resolution[Le]=fn.resolution,Le++);for(let fn in _e)_e[fn].length=Le;Zt.probesSH.value=_e.textures,Zt.probesMin.value=_e.min,Zt.probesMax.value=_e.max,Zt.probesResolution.value=_e.resolution}bs.upload(B,Ri(Nt),Zt,Vt)}if(S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(bs.upload(B,Ri(Nt),Zt,Vt),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&Ht.setValue(B,"center",R.center),Ht.setValue(B,"modelViewMatrix",R.modelViewMatrix),Ht.setValue(B,"normalMatrix",R.normalMatrix),Ht.setValue(B,"modelMatrix",R.matrixWorld),S.uniformsGroups!==void 0){let _e=S.uniformsGroups;for(let Le=0,fn=_e.length;Le<fn;Le++){let wn=_e[Le];F.update(wn,ot),F.bind(wn,ot)}}return ot}function mn(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function dn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(M,O,y){let S=Ct.get(M);S.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,S.__autoAllocateDepthBuffer===!1&&(S.__useRenderToTexture=!1),Ct.get(M.texture).__webglTexture=O,Ct.get(M.depthTexture).__webglTexture=S.__autoAllocateDepthBuffer?void 0:y,S.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let y=Ct.get(M);y.__webglFramebuffer=O,y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,y=0){dt=M,j=O,J=y;let S=null,R=!1,z=!1;if(M){let Q=Ct.get(M);if(Q.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(B.FRAMEBUFFER,Q.__webglFramebuffer),ut.copy(M.viewport),It.copy(M.scissor),Jt=M.scissorTest,bt.viewport(ut),bt.scissor(It),bt.setScissorTest(Jt),et=-1;return}else if(Q.__webglFramebuffer===void 0)Vt.setupRenderTarget(M);else if(Q.__hasExternalTextures)Vt.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Dt=M.depthTexture;if(Q.__boundDepthTexture!==Dt){if(Dt!==null&&Ct.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(M)}}let pt=M.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(z=!0);let Tt=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?S=Tt[O][y]:S=Tt[O],R=!0):M.samples>0&&Vt.useMultisampledRTT(M)===!1?S=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?S=Tt[y]:S=Tt,ut.copy(M.viewport),It.copy(M.scissor),Jt=M.scissorTest}else ut.copy(Wt).multiplyScalar(_t).floor(),It.copy(Kt).multiplyScalar(_t).floor(),Jt=xe;if(y!==0&&(S=Z),bt.bindFramebuffer(B.FRAMEBUFFER,S)&&bt.drawBuffers(M,S),bt.viewport(ut),bt.scissor(It),bt.setScissorTest(Jt),R){let Q=Ct.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q.__webglTexture,y)}else if(z){let Q=O;for(let pt=0;pt<M.textures.length;pt++){let Tt=Ct.get(M.textures[pt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+pt,Tt.__webglTexture,y,Q)}}else if(M!==null&&y!==0){let Q=Ct.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Q.__webglTexture,y)}et=-1};function Ci(M){let O=Ct.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=Te.textureFormatReadable(M.format),O.__typeReadable=Te.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,y,S,R,z,K,Q=0){if(!(M&&M.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&K!==void 0&&(pt=pt[K],Array.isArray(pt)&&(pt=pt[0])),pt){bt.bindFramebuffer(B.FRAMEBUFFER,pt);try{let Tt=M.textures[Q],Dt=Tt.format,Bt=Tt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Q);let yt=Ci(Tt);if(yt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-S&&y>=0&&y<=M.height-R&&B.readPixels(O,y,S,R,T.convert(Dt),T.convert(Bt),z)}finally{let Tt=dt!==null?Ct.get(dt).__webglFramebuffer:null;bt.bindFramebuffer(B.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,O,y,S,R,z,K,Q=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&K!==void 0&&(pt=pt[K],Array.isArray(pt)&&(pt=pt[0])),pt)if(O>=0&&O<=M.width-S&&y>=0&&y<=M.height-R){bt.bindFramebuffer(B.FRAMEBUFFER,pt);let Tt=M.textures[Q],Dt=Tt.format,Bt=Tt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Q);let yt=Ci(Tt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.bufferData(B.PIXEL_PACK_BUFFER,z.byteLength,B.STREAM_READ),B.readPixels(O,y,S,R,T.convert(Dt),T.convert(Bt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ue=dt!==null?Ct.get(dt).__webglFramebuffer:null;bt.bindFramebuffer(B.FRAMEBUFFER,ue);let Ie=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Eh(B,Ie,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,z),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ot),B.deleteSync(Ie),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,y=0){let S=Math.pow(2,-y),R=Math.floor(M.image.width*S),z=Math.floor(M.image.height*S),K=O!==null?O.x:0,Q=O!==null?O.y:0;Vt.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,y,0,0,K,Q,R,z),bt.unbindTexture()},this.copyTextureToTexture=function(M,O,y=null,S=null,R=0,z=0){let K,Q,pt,Tt,Dt,Bt,yt,Ot,ue,Ie=M.isCompressedTexture?M.mipmaps[z]:M.image;if(y!==null)K=y.max.x-y.min.x,Q=y.max.y-y.min.y,pt=y.isBox3?y.max.z-y.min.z:1,Tt=y.min.x,Dt=y.min.y,Bt=y.isBox3?y.min.z:0;else{let Ht=Math.pow(2,-R);K=Math.floor(Ie.width*Ht),Q=Math.floor(Ie.height*Ht),M.isDataArrayTexture?pt=Ie.depth:M.isData3DTexture?pt=Math.floor(Ie.depth*Ht):pt=1,Tt=0,Dt=0,Bt=0}S!==null?(yt=S.x,Ot=S.y,ue=S.z):(yt=0,Ot=0,ue=0);let Ee=T.convert(O.format),qe=T.convert(O.type),Nt;O.isData3DTexture?(Vt.setTexture3D(O,0),Nt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Vt.setTexture2DArray(O,0),Nt=B.TEXTURE_2D_ARRAY):(Vt.setTexture2D(O,0),Nt=B.TEXTURE_2D),bt.activeTexture(B.TEXTURE0),bt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),bt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),bt.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let en=bt.getParameter(B.UNPACK_ROW_LENGTH),ve=bt.getParameter(B.UNPACK_IMAGE_HEIGHT),kn=bt.getParameter(B.UNPACK_SKIP_PIXELS),ot=bt.getParameter(B.UNPACK_SKIP_ROWS),ie=bt.getParameter(B.UNPACK_SKIP_IMAGES);bt.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),bt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),bt.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),bt.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),bt.pixelStorei(B.UNPACK_SKIP_IMAGES,Bt);let be=M.isDataArrayTexture||M.isData3DTexture,ne=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Ht=Ct.get(M),Zt=Ct.get(O),Pe=Ct.get(Ht.__renderTarget),_e=Ct.get(Zt.__renderTarget);bt.bindFramebuffer(B.READ_FRAMEBUFFER,Pe.__webglFramebuffer),bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Le=0;Le<pt;Le++)be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(M).__webglTexture,R,Bt+Le),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,z,ue+Le)),B.blitFramebuffer(Tt,Dt,Tt+K,Dt+Q,yt,Ot,yt+K,Ot+Q,B.DEPTH_BUFFER_BIT,B.NEAREST);bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(R!==0||M.isRenderTargetTexture||Ct.has(M)){let Ht=Ct.get(M),Zt=Ct.get(O);bt.bindFramebuffer(B.READ_FRAMEBUFFER,U),bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,$);for(let Pe=0;Pe<pt;Pe++)be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.__webglTexture,R,Bt+Pe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ht.__webglTexture,R),ne?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,z,ue+Pe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,z),R!==0?B.blitFramebuffer(Tt,Dt,Tt+K,Dt+Q,yt,Ot,yt+K,Ot+Q,B.COLOR_BUFFER_BIT,B.NEAREST):ne?B.copyTexSubImage3D(Nt,z,yt,Ot,ue+Pe,Tt,Dt,K,Q):B.copyTexSubImage2D(Nt,z,yt,Ot,Tt,Dt,K,Q);bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ne?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Nt,z,yt,Ot,ue,K,Q,pt,Ee,qe,Ie.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,z,yt,Ot,ue,K,Q,pt,Ee,Ie.data):B.texSubImage3D(Nt,z,yt,Ot,ue,K,Q,pt,Ee,qe,Ie):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,yt,Ot,K,Q,Ee,qe,Ie.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,yt,Ot,Ie.width,Ie.height,Ee,Ie.data):B.texSubImage2D(B.TEXTURE_2D,z,yt,Ot,K,Q,Ee,qe,Ie);bt.pixelStorei(B.UNPACK_ROW_LENGTH,en),bt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve),bt.pixelStorei(B.UNPACK_SKIP_PIXELS,kn),bt.pixelStorei(B.UNPACK_SKIP_ROWS,ot),bt.pixelStorei(B.UNPACK_SKIP_IMAGES,ie),z===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Nt),bt.unbindTexture()},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&Vt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Vt.setTextureCube(M,0):M.isData3DTexture?Vt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Vt.setTexture2DArray(M,0):Vt.setTexture2D(M,0),bt.unbindTexture()},this.resetState=function(){j=0,J=0,dt=null,bt.reset(),v.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var wr=Math.PI/180,Co=9.81,ic=0,Ts=1,pu={half:16},Me={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};Me.height=Me.steps*Me.rise;Me.length=Me.steps*Me.run;var kt={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},On={yard:{label:"Yard",blurb:"Flat ground. Nothing helps.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:.35,pitch:.24,dist:6.4}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him.",start:[-1,Me.height,Me.z],attacker:[-5.2,Me.height+1.5,Me.z],cam:{yaw:.62,pitch:.2,dist:8.6,lead:1}},window:{label:"Window",blurb:"Open window, glass roof below.",start:[-1.25,kt.floor,kt.z],attacker:[-6.2,kt.floor+1.5,kt.z],cam:{yaw:.2,pitch:.14,dist:8.4,lead:1.2}}};function Ei(i,t){if(t>kt.z-30){let e=t-kt.z;return Math.abs(e)>kt.halfWidth||i<-kt.back||i>kt.wall?0:i<0?kt.floor:Math.abs(e)<kt.open?kt.floor+kt.sill:kt.top}if(t>Me.z-30){let e=t-Me.z;return Math.abs(e)>Me.halfWidth||i<-Me.back||i>=Me.length?0:i<=0?Me.height:Math.max(0,Me.height-(Math.floor(i/Me.run)+1)*Me.rise)}return 0}var Be=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],se=Object.fromEntries(Be.map((i,t)=>[i.name,t])),Wi=.44,Es=.425,qg=-.08,uu=.1,Yg=.205,du=.915,Po={poke:{label:"Poke",kind:"blunt",impulse:32,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},Zg={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},$g={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function Xi(i,t,e,n){let s=Math.sin(n/2);return[i*s,t*s,e*s,Math.cos(n/2)]}function sc(i,t){return[i[3]*t[0]+i[0]*t[3]+i[1]*t[2]-i[2]*t[1],i[3]*t[1]-i[0]*t[2]+i[1]*t[3]+i[2]*t[0],i[3]*t[2]+i[0]*t[1]-i[1]*t[0]+i[2]*t[3],i[3]*t[3]-i[0]*t[0]-i[1]*t[1]-i[2]*t[2]]}function Tr(i,t,e){let n=i[0],s=i[1],r=i[2],a=i[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-n*t[2]),c=2*(n*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-n*c),e[2]=t[2]+a*c+(n*l-s*o),e}var fu=i=>[-i[0],-i[1],-i[2],i[3]],nn=(i,t,e)=>Math.max(t,Math.min(e,i));function Er(i,t,e){let n=Math.hypot(i,t);return n>e?[i*e/n,t*e/n]:[i,t]}function rc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function mu(i){let t=new i.JoltSettings,e=new i.ObjectLayerPairFilterTable(2);e.EnableCollision(ic,Ts),e.EnableCollision(Ts,Ts);let n=new i.BroadPhaseLayerInterfaceTable(2,2);n.MapObjectToBroadPhaseLayer(ic,new i.BroadPhaseLayer(0)),n.MapObjectToBroadPhaseLayer(Ts,new i.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=n,t.mObjectVsBroadPhaseLayerFilter=new i.ObjectVsBroadPhaseLayerFilterTable(n,2,e,2);let s=new i.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new i.Quat(0,0,0,1),l=new i.Vec3(0,0,0),c=new i.RVec3(0,0,0),h=new i.Quat(0,0,0,1),m=[];function u(T,v,F,Y,V=.85){let ht=[(F[0]+Y[0])/2,(F[1]+Y[1])/2,(F[2]+Y[2])/2],gt=[(Y[0]-F[0])/2,(Y[1]-F[1])/2,(Y[2]-F[2])/2],rt=new i.BodyCreationSettings(new i.BoxShape(new i.Vec3(gt[0],gt[1],gt[2]),Math.min(.02,gt[0]*.5,gt[1]*.5,gt[2]*.5)),new i.RVec3(ht[0],ht[1],ht[2]),o,i.EMotionType_Static,ic);rt.mFriction=V,rt.mRestitution=.03,a.AddBody(a.CreateBody(rt).GetID(),i.EActivation_DontActivate),v&&m.push({c:ht,h:gt,kind:v,level:T})}u("all",null,[-50,-1,-40],[50,0,190]);{let T=Me.z-Me.halfWidth,v=Me.z+Me.halfWidth;u("stairs","landing",[-Me.back,0,T],[0,Me.height,v]);for(let F=0;F<Me.steps-1;F++)u("stairs","step",[F*Me.run,0,T],[(F+1)*Me.run,Me.height-(F+1)*Me.rise,v],.13);u("stairs","wall",[-Me.back,0,T-.3],[Me.length+3,Me.height+2.6,T])}let p={tiles:[],panes:[],frame:[]};{let T=kt.z-kt.halfWidth,v=kt.z+kt.halfWidth,F=kt.floor;u("window","building",[-kt.back,0,T],[kt.wall,F,v]),u("window","wall",[0,F,T],[kt.wall,kt.top,kt.z-kt.open]),u("window","wall",[0,kt.lintel,kt.z-kt.open],[kt.wall,kt.top,kt.z+kt.open]),u("window","sill",[0,F,kt.z-kt.open],[kt.wall,F+kt.sill,kt.z+kt.open]);let Y=kt.glassX,V=kt.z-kt.panes*kt.pane/2,ht=kt.glassY,gt=kt.panes*kt.pane,rt=.035;for(let zt=0;zt<=kt.panes;zt++)u("window","frame",[Y+zt*kt.pane-rt,ht-.09,V-rt],[Y+zt*kt.pane+rt,ht-.012,V+gt+rt]),u("window","frame",[Y-rt,ht-.09,V+zt*kt.pane-rt],[Y+gt+rt,ht-.012,V+zt*kt.pane+rt]);for(let[zt,Lt]of[[Y,V],[Y+gt,V],[Y,V+gt],[Y+gt,V+gt]])u("window","frame",[zt-.05,0,Lt-.05],[zt+.05,ht-.09,Lt+.05]);let wt=rc(99),Xt=(zt,Lt,ct,qt,fe,le)=>{let ce=ct-zt,Se=qt-Lt;if(fe===0||ce<.3&&Se<.3){le.push([zt,Lt,ct,qt]);return}let Ft=.32+.36*wt();ce>Se?(Xt(zt,Lt,zt+ce*Ft,qt,fe-1,le),Xt(zt+ce*Ft,Lt,ct,qt,fe-1,le)):(Xt(zt,Lt,ct,Lt+Se*Ft,fe-1,le),Xt(zt,Lt+Se*Ft,ct,qt,fe-1,le))};for(let zt=0;zt<kt.panes;zt++)for(let Lt=0;Lt<kt.panes;Lt++){let qt=Y+zt*kt.pane+.04,fe=V+Lt*kt.pane+.04,le={broken:!1,min:[qt-.04,fe-.04],max:[qt+kt.pane-.04,fe+kt.pane-.04],y:ht,tiles:[]},ce=[];Xt(qt,fe,qt+kt.pane-2*.04,fe+kt.pane-2*.04,3,ce);for(let Se of ce){let Ft=[(Se[2]-Se[0])/2,.007,(Se[3]-Se[1])/2],Fe=[(Se[0]+Se[2])/2,ht,(Se[1]+Se[3])/2],ge=new i.BodyCreationSettings(new i.BoxShape(new i.Vec3(Ft[0],Ft[1],Ft[2]),.002),new i.RVec3(Fe[0],Fe[1],Fe[2]),o,i.EMotionType_Static,Ts);ge.mAllowDynamicOrKinematic=!0,ge.mFriction=.5,ge.mRestitution=.15,ge.mOverrideMassProperties=i.EOverrideMassProperties_CalculateInertia,ge.mMassPropertiesOverride.mMass=Math.max(.15,Ft[0]*Ft[2]*4*12);let bn=a.CreateBody(ge),ke=new i.BodyID(bn.GetID().GetIndexAndSequenceNumber());a.AddBody(ke,i.EActivation_DontActivate),le.tiles.push(p.tiles.length),p.tiles.push({id:ke,home:Fe,h:Ft})}p.panes.push(le)}}function _(T,v){T.broken=!0,ft.glass++;for(let F of T.tiles){let Y=p.tiles[F];a.SetMotionType(Y.id,i.EMotionType_Dynamic,i.EActivation_Activate),l.Set(v[0]*.45+(Yt()-.5)*2.2,v[1]*.5-Yt()*1.2,v[2]*.45+(Yt()-.5)*2.2);let V=new i.Vec3((Yt()-.5)*14,(Yt()-.5)*6,(Yt()-.5)*14);a.SetLinearAndAngularVelocity(Y.id,l,V),i.destroy(V)}Ut.push({type:"glass",pos:[(T.min[0]+T.max[0])/2,T.y,(T.min[1]+T.max[1])/2]})}function w(){for(let T of p.tiles)a.SetMotionType(T.id,i.EMotionType_Static,i.EActivation_DontActivate),c.Set(T.home[0],T.home[1],T.home[2]),a.SetPositionAndRotation(T.id,c,o,i.EActivation_DontActivate);for(let T of p.panes)T.broken=!1}let f=new i.Skeleton;for(let T of Be)f.AddJoint(new i.JPHString(T.name,T.name.length),T.parent);let d=new i.RagdollSettings;d.mSkeleton=f,d.mParts.resize(Be.length),Be.forEach((T,v)=>{let F=d.mParts.at(v);if(F.SetShape(new i.CapsuleShape(T.hh,T.r)),F.mPosition=new i.RVec3(T.c[0],T.c[1],T.c[2]),F.mRotation=o,F.mMotionType=i.EMotionType_Dynamic,F.mMotionQuality=i.EMotionQuality_LinearCast,F.mObjectLayer=Ts,F.mFriction=.7,F.mRestitution=.05,F.mAngularDamping=.3,F.mOverrideMassProperties=i.EOverrideMassProperties_CalculateInertia,F.mMassPropertiesOverride.mMass=T.mass,T.strength=T.mass*26,!(T.parent<0))if(T.type==="st"){let Y=new i.SwingTwistConstraintSettings;Y.mSpace=i.EConstraintSpace_WorldSpace,Y.mPosition1=Y.mPosition2=new i.RVec3(T.j[0],T.j[1],T.j[2]),Y.mTwistAxis1=Y.mTwistAxis2=new i.Vec3(T.twist[0],T.twist[1],T.twist[2]),Y.mPlaneAxis1=Y.mPlaneAxis2=new i.Vec3(1,0,0),Y.mNormalHalfConeAngle=Y.mPlaneHalfConeAngle=T.cone*wr,Y.mTwistMinAngle=-T.tw*wr,Y.mTwistMaxAngle=T.tw*wr,Y.mMaxFrictionTorque=T.mass*.4;for(let V of[Y.mSwingMotorSettings,Y.mTwistMotorSettings])V.mSpringSettings.mFrequency=8,V.mSpringSettings.mDamping=1,V.mMinTorqueLimit=-T.strength,V.mMaxTorqueLimit=T.strength;F.mToParent=Y}else{let Y=new i.HingeConstraintSettings;Y.mSpace=i.EConstraintSpace_WorldSpace,Y.mPoint1=Y.mPoint2=new i.RVec3(T.j[0],T.j[1],T.j[2]),Y.mHingeAxis1=Y.mHingeAxis2=new i.Vec3(0,0,1),Y.mNormalAxis1=Y.mNormalAxis2=new i.Vec3(1,0,0),Y.mLimitsMin=T.min*wr,Y.mLimitsMax=T.max*wr,Y.mMaxFrictionTorque=T.mass*.4,Y.mMotorSettings.mSpringSettings.mFrequency=8,Y.mMotorSettings.mSpringSettings.mDamping=1,Y.mMotorSettings.mMinTorqueLimit=-T.strength,Y.mMotorSettings.mMaxTorqueLimit=T.strength,F.mToParent=Y}});let b=0,D=Be.map(T=>(b+=T.mass,T.mass));d.DisableParentChildCollisions(),d.CalculateBodyIndexToConstraintIndex();let C=d.CreateRagdoll(0,0,r);C.AddToPhysicsSystem(i.EActivation_Activate);let I=Be.map((T,v)=>new i.BodyID(C.GetBodyID(v).GetIndexAndSequenceNumber())),P=Be.map((T,v)=>{if(T.parent<0)return null;let F=C.GetConstraint(v-1);return T.type==="st"?i.castObject(F,i.SwingTwistConstraint):i.castObject(F,i.HingeConstraint)}),g=Be.length,E=(T,v)=>{let F=a.GetPosition(I[T]);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v},k=(T,v)=>{let F=a.GetLinearVelocity(I[T]);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v},N=(T,v)=>{let F=a.GetRotation(I[T]);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v[3]=F.GetW(),v},G=(T,v)=>{let F=a.GetAngularVelocity(I[T]);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v},W=T=>E(T,[0,0,0]),Z=(T,v)=>{let F=a.GetPosition(T);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v},U=(T,v)=>{let F=a.GetRotation(T);return v[0]=F.GetX(),v[1]=F.GetY(),v[2]=F.GetZ(),v[3]=F.GetW(),v};function $(T,v,F,Y,V){l.Set(v,F,Y),V?(c.Set(V[0],V[1],V[2]),a.AddForce(I[T],l,c,i.EActivation_Activate)):a.AddForce(I[T],l,i.EActivation_Activate)}function j(T,v,F,Y,V){l.Set(v,F,Y),V?(c.Set(V[0],V[1],V[2]),a.AddImpulse(I[T],l,c)):a.AddImpulse(I[T],l)}let J=new Float32Array(g).fill(1),dt=new Float32Array(g),et=new Float32Array(g).fill(-1),st=new Float32Array(g*3),ut=new Float32Array(g);function It(T,v){h.Set(v[0],v[1],v[2],v[3]),P[T].SetTargetOrientationCS(h)}let Jt=1,it=(T,v,F,Y=0)=>sc(sc(Xi(0,1,0,T),Xi(0,0,1,v*F)),Xi(1,0,0,Y*F*Jt));function At(){for(let T=1;T<g;T++){let v=J[T]*(1-dt[T]);if(Math.abs(v-et[T])<.02&&!(v===0&&et[T]!==0))continue;et[T]=v;let F=Be[T],Y=P[T],V=v>.02?i.EMotorState_Position:i.EMotorState_Off,ht=F.strength*v,gt=2.5+5.5*v;if(F.type==="st"){for(let rt of[Y.GetSwingMotorSettings(),Y.GetTwistMotorSettings()])rt.mMinTorqueLimit=-ht,rt.mMaxTorqueLimit=ht,rt.mSpringSettings.mFrequency=gt;Y.SetSwingMotorState(V),Y.SetTwistMotorState(V)}else{let rt=Y.GetMotorSettings();rt.mMinTorqueLimit=-ht,rt.mMaxTorqueLimit=ht,rt.mSpringSettings.mFrequency=gt,Y.SetMotorState(V)}}}let ft={},Gt=[],_t=[{shin:se.lleg_l,thigh:se.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0]},{shin:se.lleg_r,thigh:se.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0]}],Rt={},Yt=rc(1),Wt=0,Kt=On.yard,xe="yard",Ut=[],Re=[];function Ue(){Be.forEach((T,v)=>{c.Set(Kt.start[0]+T.c[0],Kt.start[1]+T.c[1]-.03,Kt.start[2]+T.c[2]),a.SetPositionAndRotation(I[v],c,o,i.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(I[v],l,l)}),J.fill(1),dt.fill(0),et.fill(-1),st.fill(0),ut.fill(0),Gt.length=0,w(),Yt=rc(1234+77*Wt++),Object.assign(ft,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",fallHits:0,airHits:0,glass:0,lowest:Kt.start[1]+.93,drop:0}),Object.assign(Rt,{support:1,hT:Kt.start[1]+du,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Yt()*6.28,Yt()*6.28,Yt()*6.28,Yt()*6.28],lastCom:[Kt.start[0],Kt.start[2]],settle:0,fallT:0,legWound:0});for(let T of _t)T.swing=!1,T.hurt=0,T.planted=[Kt.start[0],Kt.start[2]+T.side*uu],T.t=0;At()}function We(T){ft.alive&&(ft.alive=!1,ft.diedAt=ft.time,ft.outcome=T,Re.push({type:"dead",cause:T,pos:W(se.head),time:ft.time}))}function Ce(){ft.ko||!ft.alive||(ft.ko=!0,Re.push({type:"out",pos:W(se.head)}))}let we=[0,0,0,1],Ne=[0,0,0],re=[0,0,0];function Xe(T,v,F,Y){if(ft.done)return null;let V=Be[T],ht=W(se.chest)[1],gt=W(se.head)[1],wt=V.zone==="chest"&&v[1]-ht>.13||V.zone==="head"&&gt-v[1]>.06?"neck":V.zone;if(ft.hits++,ft.mode==="fall"&&(ft.fallHits++,de[1]-Ei(de[0],de[2])>1.2&&ft.airHits++),Y.impulse>200)for(let[ct,qt]of[[T,.5],[se.chest,.3],[se.pelvis,.2]])j(ct,F[0]*Y.impulse*qt,F[1]*Y.impulse*qt,F[2]*Y.impulse*qt,ct===T?v:null);else j(T,F[0]*Y.impulse,F[1]*Y.impulse,F[2]*Y.impulse,v);for(let ct=0;ct<g;ct++)ut[ct]=.12;E(T,re),N(T,we);let Xt=Tr(fu(we),[v[0]-re[0],v[1]-re[1],v[2]-re[2]],[0,0,0]);if(Y.bleed>0){let ct=Y.kind==="blunt";Gt.push({part:T,zone:wt,at:Xt,arterial:!ct&&(wt==="neck"||wt==="thigh"),rate:ct?1.6:Zg[wt]*Y.bleed,left:ct?7:$g[wt]*Y.bleed})}if(ft.stun=Math.min(1.6,ft.stun+Y.stun*(wt==="head"?2.2:wt==="neck"?1.4:1)),wt==="head"&&Y.kind==="ballistic"?(We("Headshot"),J.fill(0)):wt==="head"&&ft.stun>1&&Ce(),wt==="thigh"||wt==="shin"){let ct=_t[V.side===1?0:1];ct.hurt=Math.min(1,ct.hurt+(Y.kind==="ballistic"?.7:.45)*(Y.bleed>1.5||Y.impulse>150?1.4:1)),dt[ct.thigh]=Math.max(dt[ct.thigh],ct.hurt*.5),dt[ct.shin]=Math.max(dt[ct.shin],ct.hurt*.6),Rt.legWound=Math.max(Rt.legWound,ct.hurt)}if(wt==="arm"){dt[T]=.9;let ct=Be.findIndex(qt=>qt.parent===T);ct>0&&(dt[ct]=.9)}if(Y.kind==="ballistic"){let ct=Math.hypot(F[0],F[2])||1,qt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[wt],fe=(38+34*Yt())*qt*(Y.impulse>60?.5:1),le=(Yt()-.5)*.35,ce=nn(((v[0]-re[0])*Rt.hz+(v[2]-re[2])*-Rt.hx)/.12,-1,1)*.65,Se=F[0]/ct-Rt.hz*ce-F[2]/ct*le,Ft=F[2]/ct+Rt.hx*ce+F[0]/ct*le,Fe=Math.hypot(Se,Ft)||1;Rt.reel=[Se/Fe*fe,Ft/Fe*fe],Rt.reelT=.16}ft.mode==="balance"&&(Rt.buckle=.22,Rt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[wt]||.04)*(Y.kind==="ballistic"?1:.6)),Rt.flinch=.2,Rt.clutch=wt,Rt.clutchEnd=Y.bleed>0?1e9:Math.max(Rt.clutchEnd<1e8?0:Rt.clutchEnd,ft.clock+.9+Y.stun*4);let zt=(v[0]-re[0])*Rt.hz+(v[2]-re[2])*-Rt.hx,Lt=wt==="arm"?-V.side:Be[T].side||(zt>=0?1:-1);if(dt[Lt===1?se.uarm_l:se.uarm_r]>.5&&(Lt=-Lt),Rt.clutchArm=wt==="neck"||wt==="head"?0:Lt,wt==="gut"&&Y.kind==="ballistic"&&Y.impulse<60&&(Rt.lookDown=1.1),Y.kind==="ballistic"&&Rt.fleeAt>1e8){Rt.fleeAt=ft.time+.7+Yt()*.7+Rt.lookDown;let ct=(Yt()-.5)*1.3,qt=de[0]-Kt.attacker[0],fe=de[2]-Kt.attacker[2],le=Math.hypot(qt,fe)||1,ce=qt/le,Se=fe/le;Rt.fleeDir=[ce*Math.cos(ct)-Se*Math.sin(ct),ce*Math.sin(ct)+Se*Math.cos(ct)]}return Re.push({type:"hit",zone:wt==="thigh"||wt==="shin"?"leg":wt,part:T,pos:v,tool:Y,fatal:!ft.alive}),wt}let de=[0,0,0],B=[0,0,0],Ve=[0,0,0,1],he=[0,0,0],Te=[0,0,0],bt=[0,0,0,1],ee=[0,0,0],Ct=[0,0,0],Vt=[0,0,0],A=[0,0,0],x=[0,0,0];function q(T,v,F,Y,V,ht){N(T,we),G(T,Ct);let gt=we[0],rt=we[1],wt=we[2],Xt=we[3],zt=2*(gt*rt-Xt*wt),Lt=1-2*(gt*gt+wt*wt),ct=2*(rt*wt+Xt*gt),qt=Math.hypot(Y,1,V),fe=Y/qt,le=1/qt,ce=V/qt;return l.Set(v*(Lt*ce-ct*le)-F*Ct[0],(ht||0)-F*.3*Ct[1],v*(zt*le-Lt*fe)-F*Ct[2]),a.AddTorque(I[T],l,i.EActivation_Activate),Lt}function mt(T,v){Tr(Ve,[0,qg,T.side*uu],Vt),A[0]=v[0]-(de[0]+Vt[0]),A[1]=v[1]-(de[1]+Vt[1]),A[2]=v[2]-(de[2]+Vt[2]),Tr(fu(Ve),A,x);let F=Math.hypot(x[0],x[1],x[2])||1e-6,Y=x[0]/F,V=x[1]/F,ht=x[2]/F;F=nn(F,.24,Wi+Es-.004);let gt=Math.acos(nn((Wi*Wi+F*F-Es*Es)/(2*Wi*F),-1,1)),rt=-Y,wt=-1-rt*Y,Xt=-rt*V,zt=-rt*ht,Lt=Math.hypot(wt,Xt,zt)||1;wt/=Lt,Xt/=Lt,zt/=Lt;let ct=Math.cos(gt),qt=Math.sin(gt),fe=Y*ct+wt*qt,le=V*ct+Xt*qt,ce=ht*ct+zt*qt,Se=-le,Ft=-ce,Fe=fe,ge=Math.hypot(Fe,Ft,1+Se)||1;It(T.thigh,[0,-Fe/ge,Ft/ge,(1+Se)/ge]);let bn=Math.PI-Math.acos(nn((Wi*Wi+Es*Es-F*F)/(2*Wi*Es),-1,1));P[T.shin].SetTargetAngle(bn)}let lt={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Mt(T,v){let F=Rt,Y=ft.clock,V=.03,ht=0,gt=0,rt=F.clutch?lt[F.clutch]:null;rt&&(V=rt.spine+(1-ft.strength)*.25,ht=rt.neck),F.lookDown>0&&(ht=.7,V+=.1),F.flinch>0&&(V=-.22,ht=-.3),ft.mode==="down"&&(V+=.15*Math.sin(Y*1.3+F.phase[0]),gt=.25*Math.sin(Y*.9+F.phase[1])),It(se.chest,sc(Xi(0,1,0,V),Xi(1,0,0,gt))),It(se.head,Xi(0,1,0,ht));for(let wt of[1,-1]){let Xt=wt===1?se.uarm_l:se.uarm_r,zt=wt===1?se.larm_l:se.larm_r,Lt;if(F.flinch>0)Lt=[.5,-.95,-1];else if(rt&&(F.clutchArm===0||F.clutchArm===wt))Lt=rt.arm;else if(ft.mode==="down"){let ct=Math.max(0,Math.sin(Y*.8+F.phase[2]+wt));Lt=[.4+1.5*ct*ft.strength,-.2,-.5-.6*ct]}else{let ct=nn(.12+2.6*T,0,1.45);Lt=[.1+(T>.12?Math.sin(Y*13+wt*1.7)*.45*nn(T*3,0,1):0)+.6*T,-ct,-.3-.5*nn(T*3,0,1)]}It(Xt,it(Lt[0],Lt[1],wt,Lt[3]||0)),P[zt].SetTargetAngle(Lt[2])}}function Et(T){return E(T.shin,T.p),N(T.shin,bt),Tr(bt,[0,-Yg,0],A),T.p[0]+=A[0],T.p[1]+=A[1],T.p[2]+=A[2],T.p}function nt(T,v){if(!(ft.mode==="fall"||ft.mode==="down")){ft.mode="fall",ft.fellBecause=v||"";for(let F of _t)F.swing=!1;T&&j(se.chest,T[0],0,T[1]),Re.push({type:"fall",pos:W(se.chest),onFeet:ft.onFeet})}}function X(T){let v=Rt,F=ft,Y=F.mode==="kneel",V=nn(F.strength,0,1),ht=Math.sqrt(Co/.95),gt=0,rt=0,wt=0,Xt=0;for(let ot=0;ot<g;ot++){let ie=D[ot]/b;E(ot,re),k(ot,Ne),gt+=re[0]*ie,rt+=re[2]*ie,wt+=Ne[0]*ie,Xt+=Ne[2]*ie}let zt=_t[0],Lt=_t[1];Et(zt),Et(Lt);let ct=v.hz,qt=-v.hx,fe=0,le=0,ce=F.hits>0,Se=Math.hypot(gt-Kt.start[0],rt-Kt.start[2])>8.5||F.time>v.fleeAt+16;if(!Y&&F.bleed>.2&&F.time>v.fleeAt&&V>.3&&!Se){let ot=(.2+.6*V)*(1-.45*v.legWound),ie=Math.sin(F.clock*1.1+v.phase[3])*(.25+.9*(1-V));fe=(v.fleeDir[0]*Math.cos(ie)-v.fleeDir[1]*Math.sin(ie))*ot,le=(v.fleeDir[0]*Math.sin(ie)+v.fleeDir[1]*Math.cos(ie))*ot;let be=Math.atan2(v.hz*fe-v.hx*le,v.hx*fe+v.hz*le),ne=nn(be,-2.2*T,2.2*T),Ht=Math.cos(ne),Zt=Math.sin(ne),Pe=v.hx*Ht+v.hz*Zt,_e=-v.hx*Zt+v.hz*Ht;v.hx=Pe,v.hz=_e}v.walk[0]+=(fe-v.walk[0])*Math.min(1,T*2),v.walk[1]+=(le-v.walk[1])*Math.min(1,T*2);let Ft,Fe,ge=null;zt.swing?(Ft=Lt.planted[0],Fe=Lt.planted[1],ge=Lt):Lt.swing?(Ft=zt.planted[0],Fe=zt.planted[1],ge=zt):(Ft=(zt.planted[0]+Lt.planted[0])/2,Fe=(zt.planted[1]+Lt.planted[1])/2);let bn=gt-Ft,ke=rt-Fe,tn=ge?Ei(ge.planted[0],ge.planted[1]):Math.max(Ei(zt.planted[0],zt.planted[1]),Ei(Lt.planted[0],Lt.planted[1])),ui=gt+wt/ht,Ri=rt+Xt/ht,zn=ui-Ft,Qn=Ri-Fe,mn=Math.hypot(zn,Qn),dn=Math.min(1,mn),Ci=F.bleed>.2||F.stun>.05,M=ce&&Ci?1-V+.35*Math.min(1,F.stun):0,O=F.clock,y=b*(.25+4.2*M)*(Y?.45:1),S=y*(Math.sin(O*1.7+v.phase[0])*.55+Math.sin(O*.63+v.phase[1])*.45),R=y*(Math.sin(O*1.4+v.phase[2])*.55+Math.sin(O*.51+v.phase[3])*.45);if(v.buckle-=T,ce&&!Y&&v.buckle<-.5&&Yt()<T*((Ci?.12:0)+1.5*M+(Math.hypot(v.walk[0],v.walk[1])>.1?.8*v.legWound:0))){v.buckle=.24,v.buckleDip=.1+.2*Yt()+.12*M;let ot=Yt()*6.28,ie=(18+30*Yt())*(.6+M);j(se.pelvis,Math.cos(ot)*ie,0,Math.sin(ot)*ie),Ut.push({type:"buckle",pos:[de[0],de[1],de[2]]})}let z=Y?.35:.8+.5*(ge?ge.hurt:0),K=b*ht*ht*z*bn+S,Q=b*ht*ht*z*ke+R,pt=v.walk[0]*.3,Tt=v.walk[1]*.3,Dt=(ge?50:150)*(.25+.75*V)+(Y?120:0),Bt=Er(-1500*(bn-pt)-330*(wt-v.walk[0]),-1500*(ke-Tt)-330*(Xt-v.walk[1]),Dt);K+=Bt[0],Q+=Bt[1],v.reelT>0&&(v.reelT-=T,K+=v.reel[0]/.16,Q+=v.reel[1]/.16),K*=v.support,Q*=v.support,$(se.pelvis,K*.5,0,Q*.5),$(se.chest,K*.5,0,Q*.5);let yt=tn+(Y?.5:du-.1*(1-V));v.buckle>0&&(yt-=v.buckleDip),ge&&ge.hurt>0&&(yt-=.13*ge.hurt),v.hT+=nn(yt-v.hT,-2.2*T,1.1*T);let Ot=nn(b*Co+12e3*(v.hT-de[1])-1400*B[1],0,b*Co*1.9)*v.support;$(se.pelvis,0,Ot*.55,0),$(se.chest,0,Ot*.45,0);let ue=Er(zn*.9,Qn*.9,.38);N(se.pelvis,we),Tr(we,[-1,0,0],A);let Ie=Math.atan2(A[2]*v.hx-A[0]*v.hz,A[0]*v.hx+A[2]*v.hz);G(se.pelvis,Ct),q(se.pelvis,520*v.support,46*v.support,ue[0]*.3,ue[1]*.3,(70*Ie-7*Ct[1])*v.support),q(se.chest,900*v.support*(.5+.5*V),80*v.support,ue[0],ue[1],0),v.stepCool-=T;let Ee=(ot,ie)=>{let be=mn>1e-4?1/mn:0,ne=.02+.2*(1-V),Ht=ui-ot.planted[0],Zt=Ri-ot.planted[1],Pe=Math.exp(ht*Math.sqrt(z)*ie*(.55+.45*V));return[ot.planted[0]+Ht*Pe+zn*be*.05-v.walk[0]/ht*.55+(Yt()-.5)*ne,ot.planted[1]+Zt*Pe+Qn*be*.05-v.walk[1]/ht*.55+(Yt()-.5)*ne]},qe=(ot,ie,be)=>{let ne=be[0]-ie.planted[0],Ht=be[1]-ie.planted[1],Zt=(.36+.36*V)*(1-.35*ot.hurt);[ne,Ht]=Er(ne,Ht,Zt);let Pe=(ne*ct+Ht*qt)*ot.side;Pe<.1&&(ne+=(.1-Pe)*ot.side*ct,Ht+=(.1-Pe)*ot.side*qt);let _e=ie.planted[0]+ne,Le=ie.planted[1]+Ht;return[_e,Le,Math.hypot(_e-be[0],Le-be[1])]};if(Y)for(let ot of _t){let ie=gt+v.hx*-.16+ct*ot.side*.12,be=rt+v.hz*-.16+qt*ot.side*.12,ne=Er(ie-ot.planted[0],be-ot.planted[1],.9*T);ot.planted[0]+=ne[0],ot.planted[1]+=ne[1]}else if(ge){let ot=ge===zt?Lt:zt;if(ot.t+=T/ot.T,ot.t<.65&&!ot.tidy){let ie=qe(ot,ge,Ee(ge,(1-ot.t)*ot.T));ot.to[0]+=(ie[0]-ot.to[0])*.3,ot.to[1]+=(ie[1]-ot.to[1])*.3}if(ot.t>=1||ot.t>.6&&ot.p[1]-tn<.03){if(ot.swing=!1,Ei(ot.p[0],ot.p[2])<tn-.12)return nt(null,"edge");let ie=Math.hypot(ot.to[0]-ot.p[0],ot.to[1]-ot.p[2]),be=Math.hypot(wt,Xt);if(ie>.16&&Math.abs(Ei(ot.to[0],ot.to[1])-tn)>.12){let Zt=be>.05?wt/be:-v.hx,Pe=be>.05?Xt/be:-v.hz;return j(se.pelvis,Zt*22,26,Pe*22),nt([Zt*62,Pe*62],"trip")}ot.planted=[ot.p[0],ot.p[2]],v.stepCool=.03+.12*(1-V);let ne=Math.hypot(wt,Xt),Ht=Math.min(b*ne*.38,55*V*(1-.6*ot.hurt));ne>.05&&(j(se.chest,-wt/ne*Ht*.6,0,-Xt/ne*Ht*.6),j(se.pelvis,-wt/ne*Ht*.4,0,-Xt/ne*Ht*.4)),ce&&F.steps++,Ut.push({type:"step",pos:[ot.p[0],tn,ot.p[2]],hurt:ot.hurt})}}else{let ot=Math.hypot(zt.planted[0]-Lt.planted[0],zt.planted[1]-Lt.planted[1]),ie=.115-.035*(1-V),be=mn<.06&&Math.hypot(wt,Xt)<.12&&ot>.36&&v.stepCool<-.35&&V>.45;if(v.stepCool<=0&&(mn>ie||be)){let ne,Ht;if(be)ne=v.lastFoot===0?1:0,Ht=[_t[1-ne].planted[0]+_t[ne].side*ct*.2,_t[1-ne].planted[1]+_t[ne].side*qt*.2];else{let Le=[0,1].map(wn=>{let Do=qe(_t[wn],_t[1-wn],Ee(_t[1-wn],.26));return{tgt:Do,move:Math.hypot(Do[0]-_t[wn].p[0],Do[1]-_t[wn].p[2])}}),fn=wn=>wn.tgt[2]-.25*Math.min(wn.move,.4)+(wn.move<.08?1:0);ne=Math.abs(fn(Le[0])-fn(Le[1]))<.02?v.lastFoot===0?1:0:fn(Le[0])<fn(Le[1])?0:1,Ht=[Le[ne].tgt[0],Le[ne].tgt[1]]}let Zt=_t[ne],Pe=_t[1-ne];Zt.swing=!0,Zt.t=0,Zt.from=[Zt.p[0],Zt.p[1],Zt.p[2]],Zt.to=Ht;let _e=Math.hypot(Zt.to[0]-Zt.p[0],Zt.to[1]-Zt.p[2]);Zt.T=nn(.15+.24*_e,.17,.34)*(1.3-.3*V)*(mn>.3?.75:1)*(Pe.hurt>0?1-.3*Pe.hurt:1),Zt.lift=Zt.hurt>.3?.035:.07+.09*Yt()+.05*Math.min(1,mn*2),Zt.tidy=be,v.lastFoot=ne}}for(let ot of _t){if(k(ot.shin,ee),ot.swing){let ie=nn(ot.t,0,1),be=ie*ie*(3-2*ie);ot.ik[0]=ot.from[0]+(ot.to[0]-ot.from[0])*be,ot.ik[2]=ot.from[2]+(ot.to[1]-ot.from[2])*be,ot.ik[1]=tn+ot.lift*Math.sin(Math.PI*ie)+.005;let ne=1900,Ht=170,Zt=[ne*(ot.ik[0]-ot.p[0])-Ht*ee[0],ne*(ot.ik[1]-ot.p[1])-Ht*ee[1],ne*(ot.ik[2]-ot.p[2])-Ht*ee[2]],Pe=Math.hypot(Zt[0],Zt[1],Zt[2]),_e=Pe>650?650/Pe:1;$(ot.shin,Zt[0]*_e*v.support,Zt[1]*_e*v.support,Zt[2]*_e*v.support,ot.p)}else{ot.ik[0]=ot.planted[0],ot.ik[1]=tn,ot.ik[2]=ot.planted[1];let ie=Er(1800*(ot.planted[0]-ot.p[0])-130*ee[0],1800*(ot.planted[1]-ot.p[2])-130*ee[2],480);$(ot.shin,ie[0]*v.support,-40*v.support,ie[1]*v.support,ot.p)}mt(ot,ot.ik)}Mt(dn,T),ce&&(F.onFeet+=T,F.stumbled+=Math.hypot(gt-v.lastCom[0],rt-v.lastCom[1])),v.lastCom[0]=gt,v.lastCom[1]=rt;let Nt=ot=>ot.swing?Math.hypot(gt-ot.p[0],rt-ot.p[2]):Math.hypot(gt-ot.planted[0],rt-ot.planted[1]),en=Math.min(Nt(zt),Nt(Lt));N(se.chest,we);let ve=1-2*(we[0]*we[0]+we[2]*we[2]);if(!F.alive||F.ko)return nt(null,"out");let kn=en>(Y?.5:.7)?"reach":mn>2.4?"capture":ve<.45?"tilt":de[1]-tn<(Y?.3:.52)?"height":"";if(kn)return nt(null,kn);if(Y){if(v.kneelT+=T,V<.2||v.kneelT>v.kneelMax){let ot=Yt()<.5?1:-1,ie=Yt()<.45;nt(ie?[ct*ot*28,qt*ot*28]:[v.hx*30,v.hz*30],"slump")}}else if(ce&&(V<.5||v.buckle>0&&V<.72&&v.buckleDip>.24)){F.mode="kneel",F.kneels++,v.kneelT=0,v.kneelMax=1.6+3.2*Yt();for(let ot of _t)ot.swing=!1,ot.planted=[ot.p[0],ot.p[2]];Ut.push({type:"kneel",pos:[de[0],de[1],de[2]]})}}function vt(T){let v=Rt,F=ft,Y=F.clock;v.support=Math.max(0,v.support-T/.14);let V=F.alive&&!F.ko,ht=V?.1+.32*F.strength:0;for(let gt=1;gt<g;gt++)J[gt]+=nn(ht-J[gt],-(F.alive?3:1.1)*T,2*T);if(V){for(let gt of _t){let rt=Y*(1.1+.5*F.strength)+v.phase[gt.side===1?0:1];It(gt.thigh,Xi(0,1,0,.35+.4*Math.sin(rt))),P[gt.shin].SetTargetAngle(.7+.6*Math.sin(rt+1.3))}Mt(0,T)}if(F.mode==="fall"){if(V&&v.flinch<=0&&v.settle===0)for(let rt of[1,-1])It(rt===1?se.uarm_l:se.uarm_r,it(1,-.4,rt)),P[rt===1?se.larm_l:se.larm_r].SetTargetAngle(-.5);v.fallT=(v.fallT||0)+T;let gt=de[1]-Ei(de[0],de[2])<.45||ft.restTimer>.7||v.fallT>4;v.settle=gt&&Math.hypot(B[0],B[1],B[2])<(v.fallT>4?1.2:.6)?v.settle+T:0,v.settle>.35&&(F.mode="down",F.downAt=F.time,Ut.push({type:"down",pos:[he[0],he[1],he[2]],onFeet:F.onFeet}))}}function L(T){for(Ut.length=0;Re.length;)Ut.push(Re.shift());let v=ft,F=Rt;v.clock+=T,v.hits>0&&(v.time+=T);let Y=0;if(v.alive){for(let ct of Gt){let qt=Math.min(ct.rate*T,ct.left);ct.left-=qt,v.blood-=qt,ct.left>0&&(Y+=ct.rate)}v.blood=Math.max(0,v.blood),v.blood<=0&&We("Bled out")}if(v.bleed=Y,v.stun=Math.max(0,v.stun-.2*T),v.strength=v.alive&&!v.ko?nn((v.blood-10)/70,0,1)*(1-.75*Math.min(1,v.stun)):0,F.flinch-=T,F.lookDown-=T,F.clutch&&v.clock>F.clutchEnd&&(F.clutch=null),E(se.pelvis,de),k(se.pelvis,B),N(se.pelvis,Ve),E(se.chest,he),k(se.chest,Te),v.mode==="balance"||v.mode==="kneel"){for(let ct=1;ct<g;ct++){let fe=Be[ct].zone==="thigh"||Be[ct].zone==="shin"?.95:.35+.65*v.strength;J[ct]+=nn(fe-J[ct],-3*T,3*T)}X(T)}else vt(T);At(),s.Step(T,1);let V=0;for(let ct=0;ct<g;ct++){k(ct,ee);let qt=ee[0]-st[ct*3],fe=ee[1]-st[ct*3+1]+Co*T,le=ee[2]-st[ct*3+2];st[ct*3]=ee[0],st[ct*3+1]=ee[1],st[ct*3+2]=ee[2];let ce=Math.hypot(qt,fe,le);V=Math.max(V,Math.hypot(ee[0],ee[1],ee[2])),ut[ct]-=T;let Se=v.mode==="fall"||v.mode==="down";if(v.hits>0&&Se&&ce>2.2&&ut[ct]<=0){ut[ct]=.18;let Ft=Be[ct],Fe=ce*(Ft.zone==="head"?5:Ft.zone==="chest"||Ft.zone==="gut"?1.6:.8);v.damage+=Fe,v.impacts++,Ut.push({type:"impact",part:ct,zone:Ft.zone,pos:W(ct),dv:ce,dmg:Fe}),Ft.zone==="head"&&(v.stun=Math.min(1.6,v.stun+ce*.09),v.stun>1.15&&Ce())}}if(xe==="window")for(let ct=0;ct<g;ct++){if(E(ct,re),re[1]>kt.glassY+.6||re[1]<kt.glassY-.3)continue;let qt=Math.hypot(st[ct*3],st[ct*3+1],st[ct*3+2]);if(qt<1.6)continue;let fe=Be[ct].r+Be[ct].hh+.06+qt*T*2;if(!(Math.abs(re[1]-kt.glassY)>fe))for(let le of p.panes)le.broken||re[0]<le.min[0]-.1||re[0]>le.max[0]+.1||re[2]<le.min[1]-.1||re[2]>le.max[1]+.1||_(le,[st[ct*3],st[ct*3+1],st[ct*3+2]])}if(v.hits===0)return Ut;v.lowest=Math.min(v.lowest,de[1]),v.drop=Math.max(0,Kt.start[1]+.93-v.lowest-.85);let ht=Math.max(Math.hypot(st[0],st[1],st[2]),Math.hypot(st[3],st[4],st[5])),gt=_t.some(ct=>ct.swing&&!ct.tidy),rt=_t.some(ct=>ct.swing&&ct.tidy),wt=v.mode==="balance"?!gt&&ht<(rt?.35:.2):V<.15;v.restTimer=wt?v.restTimer+T:0;let Xt=v.restTimer>1.1,zt=v.stun>.05?2.6:1.5,Lt=0;if(v.alive?v.bleed>.01?Lt=0:v.mode==="balance"?Lt=v.restTimer/zt:Lt=Math.max(v.restTimer/1.1,v.mode==="down"?(v.time-v.downAt)/3.5:0):Lt=Math.min(v.restTimer/1.1,(v.time-v.diedAt)/1.6),v.wrap=nn(Lt,0,1),!v.done){let ct="";!v.alive&&Xt&&v.time-v.diedAt>1.6?ct=v.outcome:v.alive&&v.bleed<=.01&&((v.mode==="down"||v.mode==="fall")&&Xt||v.mode==="down"&&v.time-v.downAt>3.5||v.mode==="balance"&&v.restTimer>zt||v.ko&&Xt)?ct=v.ko?"Out cold":v.mode==="balance"?"Still standing":"Down, alive":v.time>80&&(ct="Time"),ct&&(v.done=!0,v.outcome=ct,Ut.push({type:"done",outcome:ct}))}return Ut}function at(){let T=ft,v=!T.alive,F=[["Stagger steps",String(T.steps),Math.min(T.steps,40)*14],["Stumbled",T.stumbled.toFixed(1)+" m",Math.round(Math.min(T.stumbled,12)*18)],["Knee drops",String(T.kneels),T.kneels*120],["Put down",T.downAt>=0?"yes":"\u2014",T.downAt>=0?90:0],["Hard landings",String(T.impacts),Math.round(T.damage*2)],["Fell",T.drop.toFixed(1)+" m",Math.round(T.drop*65)],["Glass",T.glass+(T.glass===1?" pane":" panes"),T.glass*130],["Trick shots",String(T.fallHits),T.fallHits*150+T.airHits*250],["Out cold",T.ko?"yes":"\u2014",T.ko?150:0],[T.outcome==="Headshot"?"Headshot":"Bled out",v?T.diedAt.toFixed(1)+" s":"\u2014",v?T.diedAt>.3?260:60:0]];return{lines:F.filter((V,ht)=>V[2]>0||ht<3),total:F.reduce((V,ht)=>V+ht[2],0)}}function tt(T){On[T]&&(xe=T,Kt=On[T],Ue())}let xt=[0,0,0,1];return Ue(),{parts:Be,state:ft,wounds:Gt,feet:_t,step:L,hit:Xe,reset:Ue,payout:at,pos:W,mass:D,totalMass:b,statics:m,setLevel:tt,groundY:Ei,get level(){return Kt},get levelKey(){return xe},glass:{tiles:p.tiles,panes:p.panes,transform(T,v){let F=p.tiles[T];return Z(F.id,v),U(F.id,xt),v[3]=xt[0],v[4]=xt[1],v[5]=xt[2],v[6]=xt[3],v}},transform(T,v){E(T,v);let F=a.GetRotation(I[T]);return v[3]=F.GetX(),v[4]=F.GetY(),v[5]=F.GetZ(),v[6]=F.GetW(),v},_debug:{joints:P,tone:J,IDX:se,ctl:Rt,impulse:j,armQ:it,setTarget:It}}}var dc={};vu(dc,{GOALS:()=>Yi,LEVEL_STARS:()=>qi,SHOP:()=>hi,TOOL_ORDER:()=>_u,TOTAL_STARS:()=>Io,actionsPerTake:()=>Ar,blocked:()=>Rr,buy:()=>oc,finishTake:()=>hc,levelOpen:()=>Ai,loadSave:()=>ac,multiplier:()=>Cs,newSave:()=>As,nextBuy:()=>lc,nextGoal:()=>cc,owns:()=>Bn,stars:()=>Rs,tools:()=>Lo,unlockEverything:()=>uc});var _u=["poke","shove","bat","pistol","shotgun","ram"],hi=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2e3,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:9e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:28e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:7e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:18e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:9e4,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:4e3},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:22e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:6e4,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:6e3}],gu={"pay.1":.25,"pay.2":.3,"pay.3":.4},qi={yard:0,stairs:1,window:4},Yi={yard:[{id:"y1",text:"Make him take a step",reward:30,test:i=>i.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:i=>i.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:i=>i.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:i=>i.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:i=>i.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(i,t)=>i.drop>=3&&t===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:i=>i.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:i=>i.drop>=3&&i.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:i=>i.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:i=>i.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(i,t)=>i.drop>=2.5&&t===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:i=>i.airHits>=1}]},Io=Object.values(Yi).reduce((i,t)=>i+t.length,0);function As(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1}}function ac(i){try{let t=JSON.parse(i);if(t&&t.v===1&&Array.isArray(t.owned)&&Array.isArray(t.goals))return Object.assign(As(),t)}catch{}return As()}var Bn=(i,t)=>i.owned.includes(t),Rs=i=>i.goals.length,Ai=(i,t)=>Rs(i)>=(qi[t]||0),Lo=i=>_u.filter(t=>t==="poke"||Bn(i,"tool."+t)),Ar=i=>1+["actions.2","actions.3","actions.4"].filter(t=>Bn(i,t)).length,Cs=i=>Object.keys(gu).reduce((t,e)=>Bn(i,e)?t*(1+gu[e]):t,1);function Rr(i,t){return Bn(i,t.id)?"Owned":t.needs&&!Bn(i,t.needs)?"Needs "+hi.find(e=>e.id===t.needs).name:i.bank<t.price?"Not enough":""}function oc(i,t){let e=hi.find(n=>n.id===t);return!e||Rr(i,e)?!1:(i.bank-=e.price,i.owned.push(t),!0)}function lc(i){return hi.filter(t=>!Bn(i,t.id)&&(!t.needs||Bn(i,t.needs))).sort((t,e)=>t.price-e.price)[0]||null}function cc(i,t){return(Yi[t]||[]).find(e=>!i.goals.includes(e.id))||null}function hc(i,t,e,n){let s=Math.round(n*Cs(i)),r=(Yi[t]||[]).filter(h=>!i.goals.includes(h.id)&&h.test(e,e.hits)),a=r.reduce((h,m)=>h+m.reward,0),o=Object.keys(qi).filter(h=>Ai(i,h));for(let h of r)i.goals.push(h.id);let l=Object.keys(qi).filter(h=>Ai(i,h)&&!o.includes(h)),c=s>(i.best[t]||0);return c&&(i.best[t]=s),i.bank+=s+a,i.earned+=s+a,i.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function uc(i){for(let t of hi)Bn(i,t.id)||i.owned.push(t.id);for(let t of Object.values(Yi).flat())i.goals.includes(t.id)||i.goals.push(t.id)}var St=i=>document.getElementById(i),fc=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim(),Sn=i=>"$"+Math.round(i).toLocaleString("en-US");async function Jg(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(i){return console.warn("WASM physics unavailable, using asm.js build",i),await(await import("./vendor/jolt-physics.js")).default()}}function Kg(i){let t=mu(i),e=St("view"),n=new Eo({canvas:e,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Bi,n.toneMapping=ur,n.toneMappingExposure=1.15;let s=new Ws,r=new te(fc("--sky"));s.background=r,s.fog=new Hs(r,14,38);let a=new ln(42,1,.1,120);s.add(new ar(13623538,3814960,1.05));let o=new cr(16769725,2.6);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),o.shadow.bias=-6e-4,o.shadow.normalBias=.03,s.add(o,o.target);let l=new te(fc("--concrete")),c=new te(fc("--hazard")),h=(pu.half+10)*2,m=(()=>{let y=document.createElement("canvas");y.width=y.height=2048;let S=y.getContext("2d"),R=y.width/h,z=y.width/2;S.fillStyle="#"+l.clone().multiplyScalar(.62).getHexString(),S.fillRect(0,0,y.width,y.height),S.strokeStyle="rgba(0,0,0,0.13)",S.lineWidth=2;for(let Q=-h/2;Q<=h/2;Q+=2)S.beginPath(),S.moveTo(z+Q*R,0),S.lineTo(z+Q*R,y.height),S.moveTo(0,z+Q*R),S.lineTo(y.width,z+Q*R),S.stroke();S.strokeStyle="rgba(241,239,233,0.42)",S.fillStyle="rgba(241,239,233,0.6)",S.lineWidth=3,S.font='700 30px "Big Shoulders Display", Impact, sans-serif',S.textAlign="center";for(let Q=2;Q<=12;Q+=2)S.beginPath(),S.arc(z,z,Q*R,0,Math.PI*2),S.stroke(),S.fillText(Q+" m",z+Q*R,z+34);S.strokeStyle="#"+c.getHexString(),S.lineWidth=5,S.beginPath(),S.moveTo(z-14,z-14),S.lineTo(z+14,z+14),S.moveTo(z+14,z-14),S.lineTo(z-14,z+14),S.stroke(),S.beginPath(),S.arc(z+On.yard.attacker[0]*R,z+On.yard.attacker[2]*R,.3*R,0,Math.PI*2),S.stroke();let K=new Qs(y);return K.anisotropy=8,K.colorSpace=on,K})(),u=new Ge(new yi(h,h),new je({map:m,roughness:.96}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,s.add(u);let p=new Ge(new An(h,3.2,.4),new je({color:l.clone().multiplyScalar(.5),roughness:1}));p.position.set(0,1.6,-11),s.add(p);let _=new Ge(new yi(100,160),new je({color:l.clone().multiplyScalar(.36),roughness:1}));_.rotation.x=-Math.PI/2,_.position.set(0,-.003,105),_.receiveShadow=!0,s.add(_);let w={landing:new je({color:l,roughness:.95}),step:new je({color:l,roughness:.95}),stepAlt:new je({color:l.clone().multiplyScalar(.88),roughness:.95}),wall:new je({color:l.clone().multiplyScalar(.55),roughness:1}),building:new je({color:l.clone().multiplyScalar(.8),roughness:1}),sill:new je({color:l.clone().multiplyScalar(1.05),roughness:.9}),frame:new je({color:2237995,roughness:.5,metalness:.4})};t.statics.forEach((y,S)=>{let R=new Ge(new An(y.h[0]*2,y.h[1]*2,y.h[2]*2),y.kind==="step"&&S%2?w.stepAlt:w[y.kind]);R.position.set(y.c[0],y.c[1],y.c[2]),R.castShadow=!0,R.receiveShadow=!0,s.add(R)});let f=new Ge(new ir(.26,.32,28),new xi({color:c}));f.rotation.x=-Math.PI/2,s.add(f);let d=t.glass.tiles,b=new ms(new An(1,1,1),new je({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),d.length);b.frustumCulled=!1,s.add(b);let D=new ye,C=new vn,I=new H,P=new H,g=new Float32Array(7);function E(){for(let y=0;y<d.length;y++)t.glass.transform(y,g),D.compose(I.set(g[0],g[1],g[2]),C.set(g[3],g[4],g[5],g[6]),P.set(d[y].h[0]*2,d[y].h[1]*2,d[y].h[2]*2)),b.setMatrixAt(y,D);b.instanceMatrix.needsUpdate=!0}E();let k=new je({color:2303788,roughness:.6}),N=new je({color:15855593,roughness:.6}),G=new te(8129810),W=new te(5967890),Z=[],U=[],$=new Float32Array(Be.length);Be.forEach((y,S)=>{let R=new Ge(new er(y.r,y.hh*2,6,16),new je({color:c,roughness:.55}));R.castShadow=!0,R.receiveShadow=!0,R.userData.part=S;let z=(K,Q,pt,Tt,Dt)=>{let Bt=new Ge(K,Q);return Bt.position.set(pt,Tt,Dt),Bt.castShadow=!0,R.add(Bt),Bt};y.parent>=0&&y.name!=="head"&&z(new Oi(y.r*(y.name==="chest"?.86:1.12),14,10),k,y.j[0]-y.c[0],y.j[1]-y.c[1],y.j[2]-y.c[2]),y.name==="head"&&(z(new An(.05,.05,.15),k,-y.r+.01,.03,0),z(new Fi(.045,.05,.1,10),k,0,-y.hh-y.r-.01,0)),y.name==="chest"&&(z(new Fi(.06,.06,.012,20),N,-y.r+.004,.05,0).rotation.z=Math.PI/2,z(new Fi(.028,.028,.016,16),k,-y.r+.003,.05,0).rotation.z=Math.PI/2),y.name.startsWith("larm")&&z(new Oi(.048,12,8),k,0,-y.hh-y.r-.02,0),y.name.startsWith("lleg")&&z(new An(.24,.07,.09),k,-.06,-y.hh-y.r+.035,0),s.add(R),Z.push(R)});let j=new Float32Array(7);function J(){for(let y=0;y<Z.length;y++)t.transform(y,j),Z[y].position.set(j[0],j[1],j[2]),Z[y].quaternion.set(j[3],j[4],j[5],j[6]),Z[y].updateMatrixWorld()}function dt(y,S,R){let z=new Float32Array(y*3),K=new Float32Array(y*3),Q=new Float32Array(y),pt=new Qe;pt.setAttribute("position",new xn(z,3));let Tt=new Js(pt,new _s({color:S,size:R,transparent:!0,opacity:.95,depthWrite:!1}));Tt.frustumCulled=!1,s.add(Tt);let Dt=0;return{emit(Bt,yt,Ot){let ue=Dt;Dt=(Dt+1)%y,z.set(Bt,ue*3),K.set(yt,ue*3),Q[ue]=Ot},step(Bt,yt){for(let Ot=0;Ot<y;Ot++){if(Q[Ot]<=0){z[Ot*3+1]=-50;continue}Q[Ot]-=Bt,K[Ot*3+1]-=9.8*Bt;for(let ue=0;ue<3;ue++)z[Ot*3+ue]+=K[Ot*3+ue]*Bt;z[Ot*3+1]<=t.groundY(z[Ot*3],z[Ot*3+2])+.005&&(yt&&yt(z[Ot*3],z[Ot*3+2]),Q[Ot]=0)}pt.attributes.position.needsUpdate=!0}}}let et=dt(200,15326404,.05),st=dt(700,10096662,.06),ut=dt(260,14677759,.035);function It(y,S,R){for(let z=0;z<S;z++){let K=Math.random()*6.28,Q=R*(.3+Math.random());et.emit(y,[Math.cos(K)*Q,.5+Math.random()*Q,Math.sin(K)*Q],.4+Math.random()*.5)}}let Jt=900,it=new ms(new nr(1,14),new xi({color:G,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Jt);it.frustumCulled=!1,it.count=0,s.add(it);let At=new ye,ft=new vn().setFromEuler(new Dn(-Math.PI/2,0,0)),Gt=new H,_t=new H,Rt=0,Yt=[];function Wt(y,S,R,z){At.compose(_t.set(S,t.groundY(S,R)+.004+y%7*4e-4,R),ft,Gt.set(z,z*(.75+y%5*.08),1)),it.setMatrixAt(y,At),it.instanceMatrix.needsUpdate=!0}function Kt(y,S,R){let z=Rt;return Rt=(Rt+1)%Jt,it.count=Math.max(it.count,z+1),Wt(z,y,S,R),z}let xe=(y,S)=>Kt(y,S,.02+Math.random()*.045),Ut=new H,Re=new H,Ue=0;function We(y){let S=t.state;Ue+=y*(S.alive?2.1+(100-S.blood)*.012:0);let R=Math.pow(Math.max(0,Math.sin(Ue*Math.PI*2)),6);t.wounds.forEach((z,K)=>{let Q=z.left>0&&S.blood>0,pt=Q?z.rate:.25,Tt=Z[z.part];Ut.set(z.at[0],z.at[1],z.at[2]),Re.copy(Ut).setY(0).normalize().transformDirection(Tt.matrixWorld),Ut.applyMatrix4(Tt.matrixWorld),$[z.part]=Math.min(1,$[z.part]+y*pt*.02),U[K]&&U[K].scale.setScalar(1+$[z.part]*2.2);let Dt=z.arterial&&Q?R:0,Bt=y*pt*(z.arterial?8:5)+Dt*y*260;Bt=Math.floor(Bt)+(Math.random()<Bt%1?1:0);for(let yt=0;yt<Bt;yt++){let Ot=Dt>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;st.emit([Ut.x,Ut.y,Ut.z],[Re.x*Ot+(Math.random()-.5)*.4,Re.y*Ot+Math.random()*.5*Ot,Re.z*Ot+(Math.random()-.5)*.4],1.6)}if(S.mode==="down"&&Ut.y-t.groundY(Ut.x,Ut.z)<.4){let yt=Yt[K];(!yt||Math.hypot(yt.x-Ut.x,yt.z-Ut.z)>.25)&&(yt=Yt[K]={i:Kt(Ut.x,Ut.z,.03),x:Ut.x,z:Ut.z,r:.03}),yt.r=Math.min(.55,Math.sqrt(yt.r*yt.r+y*pt*.0022)),Wt(yt.i,yt.x,yt.z,yt.r)}});for(let z=0;z<Z.length;z++)$[z]>0&&Z[z].material.color.copy(c).lerp(W,$[z]*.85)}let Ce=new Qe().setFromPoints([new H,new H]),we=new $s(Ce,new gs({color:16773577,transparent:!0,opacity:0}));we.frustumCulled=!1,s.add(we);let Ne=[];function re(y,S,R,z=.25){let K=Ne.find(Q=>Q.life<=0);if(!K){if(Ne.length>=16)return;K={el:document.createElement("div"),life:0,pos:new H},St("app").appendChild(K.el),Ne.push(K)}K.el.className="callout"+(R?" big":""),K.el.textContent=y,K.pos.set(S[0],S[1]+z,S[2]),K.life=K.max=R?1.6:1.2}let Xe=new H;function de(y){for(let S of Ne){if(S.life<=0){S.el.style.opacity=0;continue}S.life-=y,S.pos.y+=y*.4,Xe.copy(S.pos).project(a);let R=(Xe.x*.5+.5)*e.clientWidth,z=(-Xe.y*.5+.5)*e.clientHeight;S.el.style.transform=`translate(${R.toFixed(1)}px, ${z.toFixed(1)}px) translate(-50%, -50%)`,S.el.style.opacity=Xe.z>1?0:Math.min(1,S.life/(S.max*.4))}}let B=null,Ve=null,he=!0;function Te(){if(!(B||!he))try{B=new(window.AudioContext||window.webkitAudioContext),Ve=B.createBuffer(1,B.sampleRate*.5,B.sampleRate);let y=Ve.getChannelData(0);for(let S=0;S<y.length;S++)y[S]=Math.random()*2-1}catch{B=null}}function bt(y,S,R,z="lowpass"){if(!B||!he)return;let K=B.currentTime,Q=B.createBufferSource(),pt=B.createBiquadFilter(),Tt=B.createGain();Q.buffer=Ve,pt.type=z,pt.frequency.value=S,Tt.gain.setValueAtTime(Math.min(1,y),K),Tt.gain.exponentialRampToValueAtTime(.001,K+R),Q.connect(pt).connect(Tt).connect(B.destination),Q.start(K,Math.random()*.2,R+.05)}function ee(y,S,R){if(!B||!he)return;let z=B.currentTime,K=B.createOscillator(),Q=B.createGain();K.frequency.setValueAtTime(S,z),K.frequency.exponentialRampToValueAtTime(S*.45,z+R),Q.gain.setValueAtTime(Math.min(1,y),z),Q.gain.exponentialRampToValueAtTime(.001,z+R),K.connect(Q).connect(B.destination),K.start(z),K.stop(z+R+.02)}let Ct="poke",Vt=!1,A=0,x=1,q=!1,mt=!1,lt=1,Mt=-1e9,Et=0,nt=!1,X=As();try{X=ac(localStorage.getItem("imhit.save"))}catch{}let vt=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(X))}catch{}},L=()=>X.mode==="free",at={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},tt={};function xt(){for(let S in tt)tt[S].remove(),delete tt[S];St("pick-list").innerHTML="";let y=Lo(X);y.includes(Ct)||(Ct=y.at(-1));for(let S of y)for(let[R,z]of[["tools","tool-"+S],["pick-list","pick-"+S]]){let K=document.createElement("button");K.type="button",K.className="tool",K.id=z,K.dataset.tool=S,K.innerHTML=`<b>${Po[S].label}</b><i>${at[S]}</i>`,K.addEventListener("click",()=>{Ct=S,T(),v()}),St(R).appendChild(K),R==="tools"&&(tt[S]=K)}St("pick").classList.toggle("single",y.length<2),T(),St("slow").hidden=!Bn(X,"slowmo"),St("slow").hidden&&(Vt=!1,St("slow").setAttribute("aria-pressed","false"))}function T(){for(let y in tt)tt[y].setAttribute("aria-pressed",String(y===Ct));for(let y of St("pick-list").children)y.setAttribute("aria-pressed",String(y.dataset.tool===Ct));St("pick-name").textContent=Po[Ct].label,St("pick-note").textContent=at[Ct]}function v(){St("pick-list").hidden=!0,St("pick").setAttribute("aria-expanded","false")}St("pick").addEventListener("click",()=>{if(St("pick").classList.contains("single"))return;let y=St("pick-list").hidden;St("pick-list").hidden=!y,St("pick").setAttribute("aria-expanded",String(y))}),document.addEventListener("pointerdown",y=>{!St("pick-list").hidden&&!y.target.closest(".picker")&&v()},!0);function F(){let y=Ar(X);St("pips").innerHTML=L()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:y},(S,R)=>`<span class="pip${R<lt?" on":""}"></span>`).join("")}function Y(){let y=cc(X,t.levelKey);St("hint").hidden=!1,St("hint").innerHTML=L()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(y?`<b>Goal</b> ${y.text} <span>\u2605 +${Sn(y.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(Ar(X)>=2&&!X.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function V(){St("bank").textContent=Sn(X.bank),St("stars").textContent="\u2605 "+Rs(X)+" / "+Io,St("mode-career").setAttribute("aria-pressed",String(!L())),St("mode-free").setAttribute("aria-pressed",String(L()));for(let S in ht){let R=Ai(X,S);ht[S].disabled=!R,ht[S].lastChild.textContent=R?On[S].blurb:"Opens at \u2605 "+qi[S]+". You have "+Rs(X)+"."}St("where-level").textContent=t.level.label,St("where-mode").textContent=L()?"Free play":"Career";let y=!L()&&hi.some(S=>!Rr(X,S));St("shop-open").classList.toggle("ready",y),St("shop-open").textContent=y?"Shop \u2022":"Shop"}let ht={};for(let[y,S]of Object.entries(On)){let R=document.createElement("button");R.type="button",R.className="level",R.id="level-"+y,R.innerHTML=`<b>${S.label}</b><i>${S.blurb}</i>`,R.addEventListener("click",()=>gt(y)),St("levels").appendChild(R),ht[y]=R}function gt(y,S){if(!S&&!Ai(X,y))return;t.setLevel(y),X.level=y,vt(),Lt();let R=t.level;for(let z in ht)ht[z].setAttribute("aria-pressed",String(z===y));St("menu").hidden=!0,f.position.set(R.attacker[0],t.groundY(R.attacker[0],R.attacker[2])+.006,R.attacker[2]),f.visible=y!=="yard",Ft.yaw=R.cam.yaw,Ft.pitch=R.cam.pitch,Ft.dist=R.cam.dist,mt=!1,Ft.target.set(R.start[0]+(R.cam.lead||0),R.start[1]+.95,R.start[2])}function rt(y){X.mode=y==="free"?"free":"career",vt(),Lt(),V()}St("where").addEventListener("click",()=>{St("menu").hidden=!1}),St("menu-close").addEventListener("click",()=>{St("menu").hidden=!0});for(let y of["menu","shop"])St(y).addEventListener("click",S=>{S.target===St(y)&&(St(y).hidden=!0)});St("mode-career").addEventListener("click",()=>rt("career")),St("mode-free").addEventListener("click",()=>rt("free"));function wt(){St("shop-bank").textContent=Sn(X.bank)+" banked \xB7 \u2605 "+Rs(X)+" / "+Io+(Cs(X)>1?" \xB7 pays \xD7"+Cs(X).toFixed(2):"");let y="";for(let S of[...new Set(hi.map(R=>R.group))]){y+=`<h3>${S}</h3>`;for(let R of hi.filter(z=>z.group===S)){let z=Rr(X,R);y+=`<div class="item${z==="Owned"?" owned":""}"><div><b>${R.name}</b><p>${R.does}</p></div>`+(z==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${R.id}" id="buy-${R.id.replace(".","-")}"${z?" disabled":""}>${Sn(R.price)}${z&&z!=="Not enough"?`<small>${z}</small>`:""}</button>`)+"</div>"}}y+="<h3>Goals</h3>";for(let[S,R]of Object.entries(Yi)){let z=Ai(X,S);y+=`<h4>${On[S].label}${z?"":" \xB7 opens at \u2605"+qi[S]}</h4><ul class="goals">`+R.map(K=>`<li class="${X.goals.includes(K.id)?"got":""}"><span>${X.goals.includes(K.id)?"\u2605":"\u2606"}</span>${K.text}<em>${Sn(K.reward)}</em></li>`).join("")+"</ul>"}St("shop-list").innerHTML=y}St("shop-list").addEventListener("click",y=>{let S=y.target.closest(".buy");!S||!oc(X,S.dataset.id)||(vt(),Te(),ee(.5,440,.12),S.dataset.id.startsWith("tool.")&&(Ct=S.dataset.id.slice(5)),xt(),V(),wt(),t.state.hits||Lt())});function Xt(){wt(),St("shop").hidden=!1}St("shop-open").addEventListener("click",Xt),St("result-shop").addEventListener("click",Xt),St("shop-close").addEventListener("click",()=>{St("shop").hidden=!0}),St("unlock-all").hidden=!(/[?&]dev\b/.test(location.search)||location.hash==="#dev"),St("unlock-all").addEventListener("click",()=>{uc(X),vt(),xt(),V(),wt(),Lt()});let zt=0;St("wipe").addEventListener("click",()=>{if(performance.now()-zt>3e3){zt=performance.now(),St("wipe").textContent="Tap again to erase everything";return}X=As(),vt(),zt=0,St("wipe").textContent="Erase progress",xt(),gt("yard",!0),V(),wt()}),St("slow").addEventListener("click",()=>{Vt=!Vt,St("slow").setAttribute("aria-pressed",String(Vt))}),St("sound").addEventListener("click",()=>{he=!he,St("sound").setAttribute("aria-pressed",String(he)),St("sound").textContent=he?"Sound on":"Sound off"});function Lt(){t.reset();for(let y of U)y.parent.remove(y);U.length=0,Yt.length=0,$.fill(0),it.count=0,Rt=0;for(let y of Z)y.material.color.copy(c);q=!1,A=0,nt=!1,Ft.target.set(t.level.start[0]+(t.level.cam.lead||0),t.level.start[1]+.92,t.level.start[2]),Ft.zoom=.8,lt=L()?1/0:Ar(X),E(),St("result").hidden=!0,F(),Y(),V(),qt()}St("reset").addEventListener("click",Lt),St("next").addEventListener("click",Lt),window.addEventListener("keydown",y=>{y.code==="Space"&&(Vt=!0,y.preventDefault()),y.code==="KeyR"&&Lt();let S=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(y.code),R=Lo(X);S>=0&&R[S]&&(Ct=R[S],T())}),window.addEventListener("keyup",y=>{y.code==="Space"&&(Vt=St("slow").getAttribute("aria-pressed")==="true")});function ct(){let y=t.state;return y.alive?y.ko?"Out cold":y.mode==="down"?nt?"Bleeding out \u25B8\u25B8":y.bleed>.2?"Down, bleeding out":"Down":y.mode==="fall"?"Going down":y.mode==="kneel"?"On his knees":y.hits===0?"Standing":y.bleed>.2?y.strength<.75?"Staggering, bleeding":"Hit, bleeding":y.stun>.25?"Dazed":"On his feet":y.outcome||"Dead"}function qt(){let y=t.payout(),S=t.state;return St("lines").innerHTML=y.lines.map(R=>`<tr><td>${R[0]}</td><td>${R[1]}</td><td>${Sn(R[2])}</td></tr>`).join(""),St("total").textContent=Sn(y.total),St("blood-fill").style.width=S.blood.toFixed(1)+"%",St("blood-num").textContent=Math.round(S.blood)+"%",St("condition").textContent=ct(),y}qt();let fe={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},le=new H;function ce(y,S){if(t.state.done)return;if(Te(),lt<=0){St("pips").classList.remove("nudge"),St("pips").offsetWidth,St("pips").classList.add("nudge"),ee(.25,60,.08);return}let R=Po[Ct],z=t.level.attacker,K;if(R.kind==="ballistic"){K=[S.x-z[0],S.y-z[1],S.z-z[2]];let Bt=Math.hypot(...K);K=K.map(yt=>yt/Bt)}else{let Bt=t.pos(1),yt=Bt[0]-z[0],Ot=Bt[2]-z[2],ue=Math.hypot(yt,Ot)||1;K=[yt/ue*.97,Ct==="bat"?.2:.1,Ot/ue*.97]}let Q=[S.x,S.y,S.z],pt=t.hit(y,Q,K,R);if(!pt)return;L()||(lt--,F());let Tt=new Ge(new Oi(R.kind==="ballistic"?.024:.04,10,8),new xi({color:R.bleed>0?3998984:1314828}));if(Z[y].worldToLocal(le.copy(S)),Tt.position.copy(le),Z[y].add(Tt),U.push(Tt),R.kind==="ballistic"){Ce.setFromPoints([new H(...z),S.clone()]),we.material.opacity=.9,bt(.9,1800,Ct==="shotgun"?.45:.22,"highpass"),ee(.9,Ct==="shotgun"?90:150,.18);for(let Bt=0;Bt<(Ct==="shotgun"?46:18);Bt++)st.emit(Q,[K[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,K[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else bt(.7,500,.16),ee(.8,Ct==="bat"?120:80,.2),It(Q,8,1.2);let Dt=pt==="thigh"||pt==="shin"?"leg":pt;re(fe[Dt]||Dt,Q,!0),A=1.1,L()&&(St("hint").hidden=!0)}function Se(y){for(let S of y)if(S.type==="impact"){let R=Math.min(1,S.dv/9);bt(.25+R*.6,260+S.dv*60,.12),ee(.2+R*.7,S.zone==="head"?170:75,.14),It(S.pos,Math.min(10,2+Math.round(S.dv)),.8)}else if(S.type==="step")bt(.16+(S.hurt?.1:0),320,.06),ee(.18,95,.07),t.state.hits>0&&It(S.pos,2,.35);else if(S.type==="buckle")bt(.12,700,.08);else if(S.type==="glass"){bt(.9,3200,.5,"highpass"),bt(.5,6e3,.9,"highpass");for(let R=0;R<26;R++)ut.emit([S.pos[0]+(Math.random()-.5)*.9,S.pos[1],S.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);performance.now()-Mt>700&&re("Through the glass",S.pos,!0,.5),Mt=performance.now()}else if(S.type==="fall"&&(t.state.fellBecause==="edge"||t.state.fellBecause==="trip"))re(t.state.fellBecause==="trip"?"Over the sill":"Lost his footing",S.pos,!0,.7);else if(S.type==="out")re("Out cold",S.pos,!0,.55);else if(S.type==="kneel")re("Knees",S.pos,!1,.9);else if(S.type==="down")S.onFeet>1&&re("On his feet "+S.onFeet.toFixed(1)+" s",S.pos,!1,.6);else if(S.type==="dead"&&S.cause==="Bled out")re("Bled out \xB7 "+S.time.toFixed(1)+" s",S.pos,!0,.5);else if(S.type==="done"&&!q){q=!0,Et=performance.now();let R=qt(),z=t.levelKey,K="";if(L())St("result-label").textContent="Free play",St("result-total").textContent=Sn(R.total),St("result-note").textContent=S.outcome+" \xB7 nothing is banked in free play";else{let Q=hc(X,z,t.state,R.total),pt=Cs(X);vt(),St("result-label").textContent=Q.record&&Q.pay>0?"New best take":"Take over",St("result-total").textContent=Sn(Q.pay+Q.bonus),St("result-note").textContent=S.outcome+(pt>1?" \xB7 pays \xD7"+pt.toFixed(2):"")+" \xB7 best here "+Sn(X.best[z]||0),K=Q.goals.map(Dt=>`<li><span>\u2605</span>${Dt.text}<em>+${Sn(Dt.reward)}</em></li>`).join("")+Q.opened.map(Dt=>`<li class="opened"><span>\u2192</span>New level: ${On[Dt].label}</li>`).join("");let Tt=lc(X);Tt&&(K+=`<li class="save-for"><span>$</span>${X.bank>=Tt.price?"You can afford "+Tt.name:Sn(Tt.price-X.bank)+" short of "+Tt.name}</li>`),Q.goals.length&&(ee(.5,520,.18),ee(.4,780,.25))}St("result-goals").innerHTML=K,St("result-lines").innerHTML=R.lines.filter(Q=>Q[2]>0).map(Q=>`<tr><td>${Q[0]}</td><td>${Q[1]}</td><td>${Sn(Q[2])}</td></tr>`).join(""),St("result-shop").hidden=L(),V(),Y(),St("result").hidden=!1}}let Ft={yaw:.35,pitch:.24,dist:6.4,zoom:.8,target:new H(.2,.95,0)},Fe=new H,ge=new hr,bn=new ae,ke=null;e.addEventListener("pointerdown",y=>{ke={x:y.clientX,y:y.clientY,moved:!1,id:y.pointerId},e.setPointerCapture(y.pointerId)}),e.addEventListener("pointermove",y=>{if(!ke||ke.id!==y.pointerId)return;let S=y.clientX-ke.x,R=y.clientY-ke.y;!ke.moved&&Math.hypot(S,R)<7||(ke.moved=!0,mt=!0,Ft.yaw-=S*.006,Ft.pitch=Math.max(.03,Math.min(1.3,Ft.pitch+R*.005)),ke.x=y.clientX,ke.y=y.clientY)});let tn=y=>{if(!ke||ke.id!==y.pointerId)return;let S=!ke.moved;if(ke=null,!S||y.type==="pointercancel")return;if(t.state.done){performance.now()-Et>450&&Lt();return}let R=e.getBoundingClientRect();bn.set((y.clientX-R.left)/R.width*2-1,-((y.clientY-R.top)/R.height)*2+1),ge.setFromCamera(bn,a);let z=ge.intersectObjects(Z,!1);z.length&&ce(z[0].object.userData.part,z[0].point)};e.addEventListener("pointerup",tn),e.addEventListener("pointercancel",tn),e.addEventListener("wheel",y=>{Ft.dist=Math.max(3,Math.min(16,Ft.dist*(1+Math.sign(y.deltaY)*.08))),y.preventDefault()},{passive:!1});function ui(){let y=e.clientWidth,S=e.clientHeight;!y||!S||(n.setSize(y,S,!1),a.aspect=y/S,a.updateProjectionMatrix())}new ResizeObserver(ui).observe(e),ui();function Ri(y){let S=t.pos(1),R=t.state.hits===0&&t.level.cam.lead||0;Fe.set(S[0]+R,Math.max(t.groundY(S[0],S[2])+.5,S[1]-.4),S[2]),Ft.target.lerp(Fe,1-Math.exp(-y*3)),Ft.zoom+=((t.state.hits===0?.8:1)-Ft.zoom)*Math.min(1,y*2);let z=Ft.dist*Ft.zoom/Math.pow(Math.min(1,a.aspect),.75),K=Math.cos(Ft.pitch);a.position.set(Ft.target.x+Math.sin(Ft.yaw)*K*z,Ft.target.y+Math.sin(Ft.pitch)*z,Ft.target.z+Math.cos(Ft.yaw)*K*z),a.lookAt(Ft.target),o.position.set(Ft.target.x-4,Ft.target.y+10,Ft.target.z+7),o.target.position.set(Ft.target.x,Ft.target.y-1,Ft.target.z)}let zn=performance.now(),Qn=0,mn=!1,dn={n:0,sum:0,stage:0};function Ci(y){if(dn.stage>1||(++dn.n>30&&(dn.sum+=y),dn.n<150))return;let S=dn.sum/120>.03;if(dn.n=0,dn.sum=0,!S){dn.stage=2;return}dn.stage===0?(n.setPixelRatio(1),ui()):o.castShadow=!1,dn.stage++}function M(y){mn||(Ci((y-zn)/1e3),O(Math.min(.05,(y-zn)/1e3)),zn=y,requestAnimationFrame(M))}function O(y,S=!0){A=Math.max(0,A-y);let R=t.state;nt=!L()&&R.mode==="down"&&R.alive&&R.bleed>.2&&A<=0&&(lt<=0||R.time-R.downAt>1.5);let z=nt?6:Vt?.2:A>.45?.16:A>0?.16+(1-A/.45)*.84:1;x+=(z-x)*Math.min(1,y*(nt?3:14)),!nt&&x>1&&(x=1);let K=Math.min(y*x,18/120),Q=Math.max(1,Math.ceil(K/(1/120)));for(let Dt=0;Dt<Q;Dt++)Se(t.step(K/Q));J(),We(K),et.step(K),st.step(K,xe),ut.step(K),t.levelKey==="window"&&t.state.glass>0&&E(),we.material.opacity=Math.max(0,we.material.opacity-y*5),Ri(y),de(y);let pt=t.state.wrap||0,Tt=t.state.hits>0&&!t.state.done&&pt>.2;St("wrap").hidden===Tt&&(St("wrap").hidden=!Tt),Tt&&(St("wrap-fill").style.width=(pt*100).toFixed(0)+"%"),Qn+=y,Qn>.1&&!t.state.done&&(Qn=0,qt()),S&&n.render(s,a)}St("intro").hidden=!!X.seenIntro,St("intro-start").addEventListener("click",()=>{X.seenIntro=!0,vt(),St("intro").hidden=!0,Te()}),xt(),gt(On[X.level]&&Ai(X,X.level)?X.level:"yard",!0),St("loading").hidden=!0,J(),requestAnimationFrame(M),window.__imhit={sim:t,setTool(y){Ct=y,T()},setMode:rt,career:dc,get save(){return X},get actionsLeft(){return lt},strikePart(y,S=0){let R=Be.findIndex(pt=>pt.name===y),z=Z[R],K=new H().setFromMatrixPosition(z.matrixWorld).add(new H(0,S,0)),Q=new H(...t.level.attacker).sub(K).setY(0).normalize();ce(R,K.addScaledVector(Q,Be[R].r))},reset:Lt,setLevel:y=>gt(y,!0),screen(y){let S=Be.findIndex(K=>K.name===y),R=new H().setFromMatrixPosition(Z[S].matrixWorld).project(a),z=e.getBoundingClientRect();return[z.left+(R.x*.5+.5)*z.width,z.top+(-R.y*.5+.5)*z.height]},cam:Ft,manual(){mn=!0},advance:O}}Jg().then(Kg).catch(i=>{console.error(i),St("loading").textContent="Could not start the physics engine in this browser."});
