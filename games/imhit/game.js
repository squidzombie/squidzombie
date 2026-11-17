var Of=Object.defineProperty;var Bf=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var fu=(n,t)=>{for(var e in t)Of(n,e,{get:t[e],enumerable:!0})};var Nf={};fu(Nf,{BONES:()=>uu,BONE_PAY:()=>Df,LEVELS:()=>pc,PARTS:()=>wn,TOOLS:()=>Yx,YARD:()=>Wx,createSim:()=>Jx,groundY:()=>qn});function qn(n,t){if(t>we.z-30){let e=t-we.z;return Math.abs(e)>we.halfWidth||n<-we.back||n>we.wall?0:n<0?we.floor:Math.abs(e)<we.open?we.floor+we.sill:we.top}if(t>on.z-30){let e=t-on.z;return Math.abs(e)>on.halfWidth||n<-on.back||n>=on.length?0:n<=0?on.height:Math.max(0,on.height-(Math.floor(n/on.run)+1)*on.rise)}return 0}function ss(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function cu(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function di(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}function Za(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function hu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Jx(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(au,Ir),e.EnableCollision(Ir,Ir);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(au,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Ir,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(A,x,U,_,h=.85){let R=[(U[0]+_[0])/2,(U[1]+_[1])/2,(U[2]+_[2])/2],O=[(_[0]-U[0])/2,(_[1]-U[1])/2,(_[2]-U[2])/2],V=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(O[0],O[1],O[2]),Math.min(.02,O[0]*.5,O[1]*.5,O[2]*.5)),new n.RVec3(R[0],R[1],R[2]),o,n.EMotionType_Static,au);V.mFriction=h,V.mRestitution=.03,a.AddBody(a.CreateBody(V).GetID(),n.EActivation_DontActivate),x&&p.push({c:R,h:O,kind:x,level:A})}d("all",null,[-50,-1,-40],[50,0,190]);{let A=on.z-on.halfWidth,x=on.z+on.halfWidth;d("stairs","landing",[-on.back,0,A],[0,on.height,x]);for(let U=0;U<on.steps-1;U++)d("stairs","step",[U*on.run,0,A],[(U+1)*on.run,on.height-(U+1)*on.rise,x],.13);d("stairs","wall",[-on.back,0,A-.3],[on.length+3,on.height+2.6,A])}let f={tiles:[],panes:[],frame:[]};{let A=we.z-we.halfWidth,x=we.z+we.halfWidth,U=we.floor;d("window","building",[-we.back,0,A],[we.wall,U,x]),d("window","wall",[0,U,A],[we.wall,we.top,we.z-we.open]),d("window","wall",[0,we.lintel,we.z-we.open],[we.wall,we.top,we.z+we.open]),d("window","sill",[0,U,we.z-we.open],[we.wall,U+we.sill,we.z+we.open]);let _=we.glassX,h=we.z-we.panes*we.pane/2,R=we.glassY,O=we.panes*we.pane,V=.035;for(let pt=0;pt<=we.panes;pt++)d("window","frame",[_+pt*we.pane-V,R-.09,h-V],[_+pt*we.pane+V,R-.012,h+O+V]),d("window","frame",[_-V,R-.09,h+pt*we.pane-V],[_+O+V,R-.012,h+pt*we.pane+V]);for(let[pt,rt]of[[_,h],[_+O,h],[_,h+O],[_+O,h+O]])d("window","frame",[pt-.05,0,rt-.05],[pt+.05,R-.09,rt+.05]);let ct=hu(99),St=(pt,rt,ot,$,vt,et)=>{let st=ot-pt,Ht=$-rt;if(vt===0||st<.3&&Ht<.3){et.push([pt,rt,ot,$]);return}let zt=.32+.36*ct();st>Ht?(St(pt,rt,pt+st*zt,$,vt-1,et),St(pt+st*zt,rt,ot,$,vt-1,et)):(St(pt,rt,ot,rt+Ht*zt,vt-1,et),St(pt,rt+Ht*zt,ot,$,vt-1,et))};for(let pt=0;pt<we.panes;pt++)for(let rt=0;rt<we.panes;rt++){let $=_+pt*we.pane+.04,vt=h+rt*we.pane+.04,et={broken:!1,min:[$-.04,vt-.04],max:[$+we.pane-.04,vt+we.pane-.04],y:R,tiles:[]},st=[];St($,vt,$+we.pane-2*.04,vt+we.pane-2*.04,3,st);for(let Ht of st){let zt=[(Ht[2]-Ht[0])/2,.007,(Ht[3]-Ht[1])/2],ne=[(Ht[0]+Ht[2])/2,R,(Ht[1]+Ht[3])/2],ve=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(zt[0],zt[1],zt[2]),.002),new n.RVec3(ne[0],ne[1],ne[2]),o,n.EMotionType_Static,Ir);ve.mAllowDynamicOrKinematic=!0,ve.mFriction=.5,ve.mRestitution=.15,ve.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,ve.mMassPropertiesOverride.mMass=Math.max(.15,zt[0]*zt[2]*4*12);let It=a.CreateBody(ve),We=new n.BodyID(It.GetID().GetIndexAndSequenceNumber());a.AddBody(We,n.EActivation_DontActivate),et.tiles.push(f.tiles.length),f.tiles.push({id:We,home:ne,h:zt})}f.panes.push(et)}}function y(A,x){A.broken=!0,it.glass++;for(let U of A.tiles){let _=f.tiles[U];a.SetMotionType(_.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(x[0]*.45+(Qt()-.5)*2.2,x[1]*.5-Qt()*1.2,x[2]*.45+(Qt()-.5)*2.2);let h=new n.Vec3((Qt()-.5)*14,(Qt()-.5)*6,(Qt()-.5)*14);a.SetLinearAndAngularVelocity(_.id,l,h),n.destroy(h)}ue.push({type:"glass",pos:[(A.min[0]+A.max[0])/2,A.y,(A.min[1]+A.max[1])/2]})}function w(){for(let A of f.tiles)a.SetMotionType(A.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(A.home[0],A.home[1],A.home[2]),a.SetPositionAndRotation(A.id,c,o,n.EActivation_DontActivate);for(let A of f.panes)A.broken=!1}let g=new n.Skeleton;for(let A of wn)g.AddJoint(new n.JPHString(A.name,A.name.length),A.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(wn.length),wn.forEach((A,x)=>{let U=m.mParts.at(x);if(U.SetShape(new n.CapsuleShape(A.hh,A.r)),U.mPosition=new n.RVec3(A.c[0],A.c[1],A.c[2]),U.mRotation=o,U.mMotionType=n.EMotionType_Dynamic,U.mMotionQuality=n.EMotionQuality_LinearCast,U.mObjectLayer=Ir,U.mFriction=.7,U.mRestitution=.05,U.mAngularDamping=.3,U.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,U.mMassPropertiesOverride.mMass=A.mass,A.strength=A.mass*26,!(A.parent<0))if(A.type==="st"){let _=new n.SwingTwistConstraintSettings;_.mSpace=n.EConstraintSpace_WorldSpace,_.mPosition1=_.mPosition2=new n.RVec3(A.j[0],A.j[1],A.j[2]),_.mTwistAxis1=_.mTwistAxis2=new n.Vec3(A.twist[0],A.twist[1],A.twist[2]),_.mPlaneAxis1=_.mPlaneAxis2=new n.Vec3(1,0,0),_.mNormalHalfConeAngle=_.mPlaneHalfConeAngle=A.cone*Xa,_.mTwistMinAngle=-A.tw*Xa,_.mTwistMaxAngle=A.tw*Xa,_.mMaxFrictionTorque=A.mass*.4;for(let h of[_.mSwingMotorSettings,_.mTwistMotorSettings])h.mSpringSettings.mFrequency=8,h.mSpringSettings.mDamping=1,h.mMinTorqueLimit=-A.strength,h.mMaxTorqueLimit=A.strength;U.mToParent=_}else{let _=new n.HingeConstraintSettings;_.mSpace=n.EConstraintSpace_WorldSpace,_.mPoint1=_.mPoint2=new n.RVec3(A.j[0],A.j[1],A.j[2]),_.mHingeAxis1=_.mHingeAxis2=new n.Vec3(0,0,1),_.mNormalAxis1=_.mNormalAxis2=new n.Vec3(1,0,0),_.mLimitsMin=A.min*Xa,_.mLimitsMax=A.max*Xa,_.mMaxFrictionTorque=A.mass*.4,_.mMotorSettings.mSpringSettings.mFrequency=8,_.mMotorSettings.mSpringSettings.mDamping=1,_.mMotorSettings.mMinTorqueLimit=-A.strength,_.mMotorSettings.mMaxTorqueLimit=A.strength,U.mToParent=_}});let b=0,L=wn.map(A=>(b+=A.mass,A.mass));m.DisableParentChildCollisions(),m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let D=wn.map((A,x)=>new n.BodyID(T.GetBodyID(x).GetIndexAndSequenceNumber())),I=wn.map((A,x)=>{if(A.parent<0)return null;let U=T.GetConstraint(x-1);return A.type==="st"?n.castObject(U,n.SwingTwistConstraint):n.castObject(U,n.HingeConstraint)}),v=wn.length,E=(A,x)=>{let U=a.GetPosition(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},G=(A,x)=>{let U=a.GetLinearVelocity(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},F=(A,x)=>{let U=a.GetRotation(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x[3]=U.GetW(),x},Y=(A,x)=>{let U=a.GetAngularVelocity(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},J=A=>E(A,[0,0,0]),mt=(A,x)=>{let U=a.GetPosition(A);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},z=(A,x)=>{let U=a.GetRotation(A);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x[3]=U.GetW(),x};function ut(A,x,U,_,h){l.Set(x,U,_),h?(c.Set(h[0],h[1],h[2]),a.AddForce(D[A],l,c,n.EActivation_Activate)):a.AddForce(D[A],l,n.EActivation_Activate)}function ft(A,x,U,_,h){l.Set(x,U,_),h?(c.Set(h[0],h[1],h[2]),a.AddImpulse(D[A],l,c)):a.AddImpulse(D[A],l)}let ht=new Float32Array(v).fill(1),yt=new Float32Array(v),_t=new Float32Array(v).fill(-1),gt=new Float32Array(v*3),Pt=new Float32Array(v);function Jt(A,x){u.Set(x[0],x[1],x[2],x[3]),I[A].SetTargetOrientationCS(u)}let Ce=1,Et=(A,x,U,_=0)=>cu(cu(ss(0,1,0,A),ss(0,0,1,x*U)),ss(1,0,0,_*U*Ce));function jt(){for(let A=1;A<v;A++){let x=ht[A]*(1-yt[A]);if(Math.abs(x-_t[A])<.02&&!(x===0&&_t[A]!==0))continue;_t[A]=x;let U=wn[A],_=I[A],h=x>.02?n.EMotorState_Position:n.EMotorState_Off,R=U.strength*x,O=2.5+5.5*x;if(U.type==="st"){for(let V of[_.GetSwingMotorSettings(),_.GetTwistMotorSettings()])V.mMinTorqueLimit=-R,V.mMaxTorqueLimit=R,V.mSpringSettings.mFrequency=O;_.SetSwingMotorState(h),_.SetTwistMotorState(h)}else{let V=_.GetMotorSettings();V.mMinTorqueLimit=-R,V.mMaxTorqueLimit=R,V.mSpringSettings.mFrequency=O,_.SetMotorState(h)}}}let it={},le=[],j=[{shin:Ae.lleg_l,thigh:Ae.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0},{shin:Ae.lleg_r,thigh:Ae.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0}],Ct={},Qt=hu(1),Re=0,xe=pc.yard,$e="yard",ue=[],Qe=[];function fn(){wn.forEach((A,x)=>{c.Set(xe.start[0]+A.c[0],xe.start[1]+A.c[1]-.03,xe.start[2]+A.c[2]),a.SetPositionAndRotation(D[x],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(D[x],l,l)}),ht.fill(1),yt.fill(0),_t.fill(-1),gt.fill(0),Pt.fill(0),le.length=0,w(),Qt=hu(1234+77*Re++),Object.assign(it,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:xe.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Ct,{support:1,hT:xe.start[1]+lu,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Qt()*6.28,Qt()*6.28,Qt()*6.28,Qt()*6.28],lastCom:[xe.start[0],xe.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let A of j)A.swing=!1,A.hurt=0,A.broken=0,A.kneeDown=!1,A.planted=[xe.start[0],xe.start[2]+A.side*fc],A.t=0;jt()}function Ve(A){it.alive&&(it.alive=!1,it.diedAt=it.time,it.outcome=A,Qe.push({type:"dead",cause:A,pos:J(Ae.head),time:it.time}))}function tn(){it.ko||!it.alive||(it.ko=!0,Qe.push({type:"out",pos:J(Ae.head)}))}function Cn(A,x){let U=wn[A].zone,_=wn[A].side===1?"_l":"_r";if(U==="head")return x[0]<-.45?x[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:x[1]<-.55?[["jaw",1]]:[["skull",1]];if(A===Ae.chest){let h=x[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(x[2])>.55||x[1]>.5)&&h.push(["collarbone"+(x[2]>=0?"_l":"_r"),.9]),h}return A===Ae.pelvis?x[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:U==="arm"?wn[wn[A].parent].zone==="arm"?x[1]<-.35?[["wrist"+_,1]]:[["forearm"+_,1]]:x[1]>.5?[["humerus"+_,.8],["collarbone"+_,.8]]:[["humerus"+_,1]]:U==="thigh"?[["femur"+_,1]]:x[1]>.35?[["kneecap"+_,1]]:x[1]<-.5?[["ankle"+_,1]]:[["tibia"+_,1]]}function mn(A,x,U,_){let h=A.split("_")[0],R=uu[h];for(;x>0&&!R[x-1];)x--;let O=it.bones[A]||0;if(x<=O)return 0;it.bones[A]=x;let V=A.endsWith("_l")?1:A.endsWith("_r")?-1:0;Qe.push({type:"injury",bone:A,base:h,side:V,level:x,was:O,pos:[U[0],U[1],U[2]],cause:_});let ct=V===1?Ae.uarm_l:Ae.uarm_r,St=V===1?Ae.larm_l:Ae.larm_r,pt=rt=>{it.stun=Math.min(1.6,it.stun+rt)};if(h==="femur"||h==="tibia"||h==="kneecap"||h==="ankle"){let rt=j[V===1?0:1];rt.hurt=Math.min(1,Math.max(rt.hurt+.15,x===2?.8:x===3?1:0)),rt.broken=Math.max(rt.broken,x),yt[rt.thigh]=Math.max(yt[rt.thigh],rt.hurt*.5),yt[rt.shin]=Math.max(yt[rt.shin],rt.hurt*.6),Ct.legWound=Math.max(Ct.legWound,rt.hurt),x>=2&&it.mode==="balance"&&(Ct.buckle=.24,Ct.buckleDip=.3)}else if(h==="humerus")x>=2&&(yt[ct]=.9,yt[St]=Math.max(yt[St],.6));else if(h==="forearm"||h==="wrist")x>=2&&(yt[St]=.9);else if(h==="collarbone")x>=2&&(yt[ct]=Math.max(yt[ct],.7));else if(h==="ribs")pt([0,.08,.22,.4][x]),x===3&&le.push({part:Ae.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(h==="nose")pt(.1),x>=2&&le.push({part:Ae.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(h==="jaw")pt(.12*x);else if(h==="skull")x===3?Ve("Skull shattered"):x===2&&(pt(.5),tn());else if(h==="neck")x>=2?Ve("Broken neck"):pt(.3);else if(h==="spine"){if(x>=2){it.paralysed=!0;for(let rt of j)rt.hurt=1,yt[rt.thigh]=1,yt[rt.shin]=1}}else if(h==="pelvis"&&x>=2){it.cantRise=!0;for(let rt of j)rt.hurt=Math.max(rt.hurt,.5)}return x}function xn(A,x,U,_){let h=uu[A.split("_")[0]];it.bones[A]&&(x*=1.15),x*=.85+.3*Qt();let R=h[2]&&x>=h[2]?3:x>=h[1]?2:x>=h[0]?1:0;return R?mn(A,R,U,_):0}let An=()=>!it.paralysed&&!it.cantRise&&!(j[0].broken>=3||j[1].broken>=3)&&!(j[0].broken>=2&&j[1].broken>=2),ge=[0,0,0,1],X=[0,0,0],ee=[0,0,0];function rn(A,x,U,_){if(it.done)return null;let h=wn[A],R=J(Ae.chest)[1],O=J(Ae.head)[1],ct=h.zone==="chest"&&x[1]-R>.13||h.zone==="head"&&O-x[1]>.06?"neck":h.zone;if(it.hits++,it.mode==="fall"&&(it.fallHits++,dt[1]-qn(dt[0],dt[2])>1.2&&it.airHits++),_.impulse>200)for(let[$,vt]of[[A,.5],[Ae.chest,.3],[Ae.pelvis,.2]])ft($,U[0]*_.impulse*vt,U[1]*_.impulse*vt,U[2]*_.impulse*vt,$===A?x:null);else ft(A,U[0]*_.impulse,U[1]*_.impulse,U[2]*_.impulse,x);for(let $=0;$<v;$++)Pt[$]=.12;E(A,ee),F(A,ge);let St=di(Ya(ge),[x[0]-ee[0],x[1]-ee[1],x[2]-ee[2]],[0,0,0]);if(_.bleed>0){let $=_.kind==="blunt";le.push({part:A,zone:ct,at:St,arterial:!$&&(ct==="neck"||ct==="thigh"),rate:$?1.6:Kx[ct]*_.bleed,left:$?7:jx[ct]*_.bleed})}it.stun=Math.min(1.6,it.stun+_.stun*(ct==="head"?2.2:ct==="neck"?1.4:1)),ct==="head"&&_.kind==="ballistic"?(Ve("Headshot"),ht.fill(0)):ct==="head"&&it.stun>1&&tn();let pt=[St[0]/h.r,St[1]/(h.hh+h.r),St[2]/h.r];if(_.kind==="ballistic"){let $=_.impulse>60,vt=ct==="neck"?"neck":ct==="head"?"skull":Cn(A,pt)[0][0],et=vt.split("_")[0],[st,Ht]=et==="skull"?[0,1]:et==="neck"?[$?.8:.9,0]:et==="spine"?[$?.5:.65,0]:$x.has(et)?$?[.1,.6]:[.25,.25]:et==="pelvis"?$?[.45,.2]:[.75,.05]:$?[.2,.3]:[.45,.1],zt=Qt();zt>=st&&mn(vt,zt>1-Ht?3:2,x,"shot")}else{let $=(_.impulse-45)/19;if(ct==="neck")xn("neck",$*.6,x,"blow");else for(let[vt,et]of Cn(A,pt))xn(vt,$*et,x,"blow")}if(ct==="thigh"||ct==="shin"){let $=j[h.side===1?0:1];$.hurt=Math.min(1,$.hurt+(_.kind==="ballistic"?.7:.45)*(_.bleed>1.5||_.impulse>150?1.4:1)),yt[$.thigh]=Math.max(yt[$.thigh],$.hurt*.5),yt[$.shin]=Math.max(yt[$.shin],$.hurt*.6),Ct.legWound=Math.max(Ct.legWound,$.hurt)}if(ct==="arm"){yt[A]=.9;let $=wn.findIndex(vt=>vt.parent===A);$>0&&(yt[$]=.9)}if(_.kind==="ballistic"){let $=Math.hypot(U[0],U[2])||1,vt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[ct],et=(38+34*Qt())*vt*(_.impulse>60?.5:1),st=(Qt()-.5)*.35,Ht=cn(((x[0]-ee[0])*Ct.hz+(x[2]-ee[2])*-Ct.hx)/.12,-1,1)*.65,zt=U[0]/$-Ct.hz*Ht-U[2]/$*st,ne=U[2]/$+Ct.hx*Ht+U[0]/$*st,ve=Math.hypot(zt,ne)||1;Ct.reel=[zt/ve*et,ne/ve*et],Ct.reelT=.16}it.mode==="balance"&&(Ct.buckle=.22,Ct.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[ct]||.04)*(_.kind==="ballistic"?1:.6)),Ct.flinch=.2,Ct.clutch=ct,Ct.clutchEnd=_.bleed>0?1e9:Math.max(Ct.clutchEnd<1e8?0:Ct.clutchEnd,it.clock+.9+_.stun*4);let rt=(x[0]-ee[0])*Ct.hz+(x[2]-ee[2])*-Ct.hx,ot=ct==="arm"?-h.side:wn[A].side||(rt>=0?1:-1);if(yt[ot===1?Ae.uarm_l:Ae.uarm_r]>.5&&(ot=-ot),Ct.clutchArm=ct==="neck"||ct==="head"?0:ot,ct==="gut"&&_.kind==="ballistic"&&_.impulse<60&&(Ct.lookDown=1.1),_.kind==="ballistic"&&Ct.fleeAt>1e8){Ct.fleeAt=it.time+.7+Qt()*.7+Ct.lookDown;let $=(Qt()-.5)*1.3,vt=Math.hypot(U[0],U[2])||1,et=U[0]/vt,st=U[2]/vt;Ct.fleeDir=[et*Math.cos($)-st*Math.sin($),et*Math.sin($)+st*Math.cos($)]}return Qe.push({type:"hit",zone:ct==="thigh"||ct==="shin"?"leg":ct,part:A,pos:x,tool:_,fatal:!it.alive}),ct}let dt=[0,0,0],Dt=[0,0,0],en=[0,0,0,1],Ot=[0,0,0],Te=[0,0,0],C=[0,0,0,1],M=[0,0,0],Z=[0,0,0],At=[0,0,0],tt=[0,0,0],Rt=[0,0,0];function qt(A,x,U,_,h,R){F(A,ge),Y(A,Z);let O=ge[0],V=ge[1],ct=ge[2],St=ge[3],pt=2*(O*V-St*ct),rt=1-2*(O*O+ct*ct),ot=2*(V*ct+St*O),$=Math.hypot(_,1,h),vt=_/$,et=1/$,st=h/$;return l.Set(x*(rt*st-ot*et)-U*Z[0],(R||0)-U*.3*Z[1],x*(pt*et-rt*vt)-U*Z[2]),a.AddTorque(D[A],l,n.EActivation_Activate),rt}function wt(A,x){di(en,[0,qa,A.side*fc],At),tt[0]=x[0]-(dt[0]+At[0]),tt[1]=x[1]-(dt[1]+At[1]),tt[2]=x[2]-(dt[2]+At[2]),di(Ya(en),tt,Rt);let U=Math.hypot(Rt[0],Rt[1],Rt[2])||1e-6,_=Rt[0]/U,h=Rt[1]/U,R=Rt[2]/U;U=cn(U,.24,vs+Lr-.004);let O=Math.acos(cn((vs*vs+U*U-Lr*Lr)/(2*vs*U),-1,1)),V=-_,ct=-1-V*_,St=-V*h,pt=-V*R,rt=Math.hypot(ct,St,pt)||1;ct/=rt,St/=rt,pt/=rt;let ot=Math.cos(O),$=Math.sin(O),vt=_*ot+ct*$,et=h*ot+St*$,st=R*ot+pt*$;Mt(A,vt,et,st);let Ht=Math.PI-Math.acos(cn((vs*vs+Lr*Lr-U*U)/(2*vs*Lr),-1,1));I[A.shin].SetTargetAngle(Ht)}let bt={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Vt(A,x){let U=Ct,_=it.clock,h=.03,R=0,O=0,V=U.clutch?bt[U.clutch]:null;V&&(h=V.spine+(1-it.strength)*.25,R=V.neck),U.lookDown>0&&(R=.7,h+=.1),U.flinch>0&&(h=-.22,R=-.3),it.mode==="down"&&(h+=.15*Math.sin(_*1.3+U.phase[0]),O=.25*Math.sin(_*.9+U.phase[1])),Jt(Ae.chest,cu(ss(0,1,0,h),ss(1,0,0,O))),Jt(Ae.head,ss(0,1,0,R));for(let ct of[1,-1]){let St=ct===1?Ae.uarm_l:Ae.uarm_r,pt=ct===1?Ae.larm_l:Ae.larm_r,rt;if(it.mode==="rise"&&U.riseT<1.5)rt=[.75,-.25,-.15];else if(U.flinch>0)rt=[.5,-.95,-1];else if(V&&(U.clutchArm===0||U.clutchArm===ct))rt=V.arm;else if(it.mode==="down"){let ot=Math.max(0,Math.sin(_*.8+U.phase[2]+ct));rt=[.4+1.5*ot*it.strength,-.2,-.5-.6*ot]}else{let ot=cn(.12+2.6*A,0,1.45);rt=[.1+(A>.12?Math.sin(_*13+ct*1.7)*.45*cn(A*3,0,1):0)+.6*A,-ot,-.3-.5*cn(A*3,0,1)]}Jt(St,Et(rt[0],rt[1],ct,rt[3]||0)),I[pt].SetTargetAngle(rt[2])}}function B(A){return E(A.shin,A.p),F(A.shin,C),di(C,[0,-Xx,0],tt),A.p[0]+=tt[0],A.p[1]+=tt[1],A.p[2]+=tt[2],A.p}let Tt=[0,1,0];function xt(A){E(A.shin,ee),F(A.shin,C),di(C,Tt,tt);let x=tt[0],U=tt[1],_=tt[2];A.gap=ee[1]-.15*U-.055-qn(ee[0]-.15*x,ee[2]-.15*_),A.k[0]=ee[0]+.22*x,A.k[1]=ee[1]+.22*U,A.k[2]=ee[2]+.22*_,F(A.thigh,ge),di(ge,Tt,tt),A.kgap=Math.min(ee[1]+.15*U-.055,A.k[1]+.07*tt[1]-.07)-qn(A.k[0],A.k[2])}function Mt(A,x,U,_){let h=-U,R=-_,O=x,V=Math.hypot(O,R,1+h)||1;Jt(A.thigh,[0,-O/V,R/V,(1+h)/V])}function Nt(A,x){if(it.mode==="fall"||it.mode==="down")return;it.mode="fall",it.fellBecause=x||"";for(let O of j)O.swing=!1;A&&ft(Ae.chest,A[0],0,A[1]);let U=Ct;U.fight=it.alive&&!it.ko?cn(.2+.95*it.strength,0,1):0,U.fallT=0,U.settle=0;let _=(Dt[0]+Te[0])*.5+(A?A[0]/40:0),h=(Dt[2]+Te[2])*.5+(A?A[1]/40:0);Math.hypot(_,h)<.3&&(_+=(Ot[0]-dt[0])*4,h+=(Ot[2]-dt[2])*4),Math.hypot(_,h)<.1&&(_=U.hx,h=U.hz);let R=Math.hypot(_,h);U.fallDir[0]=_/R,U.fallDir[1]=h/R,B(j[0]),B(j[1]),U.lead=j[0].p[0]*U.fallDir[0]+j[0].p[2]*U.fallDir[1]<j[1].p[0]*U.fallDir[0]+j[1].p[2]*U.fallDir[1]?0:1,Qe.push({type:"fall",pos:J(Ae.chest),onFeet:it.onFeet})}function Ut(A){let x=Ct,U=it,_=U.mode==="rise";_&&(x.riseT+=A,x.support=Math.min(1,x.riseT/.8));let h=U.mode==="kneel",R=h||_&&x.riseT<1.9,O=cn(U.strength,0,1),V=Math.sqrt(ys/.95),ct=0,St=0,pt=0,rt=0;for(let H=0;H<v;H++){let Kt=L[H]/b;E(H,ee),G(H,X),ct+=ee[0]*Kt,St+=ee[2]*Kt,pt+=X[0]*Kt,rt+=X[2]*Kt}let ot=j[0],$=j[1];B(ot),B($),xt(ot),xt($);let vt=x.hz,et=-x.hx;if(h)for(let H of j)H.planted[0]=H.k[0]+(H.p[0]-H.k[0])*.33,H.planted[1]=H.k[2]+(H.p[2]-H.k[2])*.33,!H.kneeDown&&H.kgap<.012&&(H.kneeDown=!0,xn("kneecap"+(H.side===1?"_l":"_r"),-Dt[1]*1.3,H.k,"fall"));let st=9;for(let H of j)H.swing||(st=Math.min(st,H.gap)),R&&(st=Math.min(st,H.kgap));x.grip+=cn((st<.028?1:0)-x.grip,-A/.09,A/.05),x.airT=x.grip<.5?x.airT+A:0;let Ht=0,zt=0,ne=U.hits>0,ve=Math.hypot(ct-xe.start[0],St-xe.start[2])>8.5||U.time>x.fleeAt+16;if(!R&&U.bleed>.2&&U.time>x.fleeAt&&O>.3&&!ve){let H=(.2+.6*O)*(1-.45*x.legWound),Kt=Math.sin(U.clock*1.1+x.phase[3])*(.25+.9*(1-O));Ht=(x.fleeDir[0]*Math.cos(Kt)-x.fleeDir[1]*Math.sin(Kt))*H,zt=(x.fleeDir[0]*Math.sin(Kt)+x.fleeDir[1]*Math.cos(Kt))*H;let $t=Math.atan2(x.hz*Ht-x.hx*zt,x.hx*Ht+x.hz*zt),ie=cn($t,-2.2*A,2.2*A),ae=Math.cos(ie),fe=Math.sin(ie),Xe=x.hx*ae+x.hz*fe,Ye=-x.hx*fe+x.hz*ae;x.hx=Xe,x.hz=Ye}x.walk[0]+=(Ht-x.walk[0])*Math.min(1,A*2),x.walk[1]+=(zt-x.walk[1])*Math.min(1,A*2);let It,We,S=null;ot.swing?(It=$.planted[0],We=$.planted[1],S=$):$.swing?(It=ot.planted[0],We=ot.planted[1],S=ot):(It=(ot.planted[0]+$.planted[0])/2,We=(ot.planted[1]+$.planted[1])/2);let k=ct-It,lt=St-We,K=S?qn(S.planted[0],S.planted[1]):Math.max(qn(ot.planted[0],ot.planted[1]),qn($.planted[0],$.planted[1])),at=ct+pt/V,Bt=St+rt/V,se=at-It,Wt=Bt-We,Gt=Math.hypot(se,Wt),re=Math.min(1,Gt),Pe=U.bleed>.2||U.stun>.05,Se=ne&&Pe?1-O+.35*Math.min(1,U.stun):0,ce=U.clock,Ie=b*(.25+4.2*Se)*(R?.45:1),yn=Ie*(Math.sin(ce*1.7+x.phase[0])*.55+Math.sin(ce*.63+x.phase[1])*.45),P=Ie*(Math.sin(ce*1.4+x.phase[2])*.55+Math.sin(ce*.51+x.phase[3])*.45);if(x.buckle-=A,ne&&!R&&x.buckle<-.5&&Qt()<A*((Pe?.12:0)+1.5*Se+(Math.hypot(x.walk[0],x.walk[1])>.1?.8*x.legWound:0))){x.buckle=.24,x.buckleDip=.1+.2*Qt()+.12*Se;let H=Qt()*6.28,Kt=(18+30*Qt())*(.6+Se);ft(Ae.pelvis,Math.cos(H)*Kt,0,Math.sin(H)*Kt),ue.push({type:"buckle",pos:[dt[0],dt[1],dt[2]]})}let N=h?0:R?.35:.8+.5*(S?S.hurt:0),Q=b*V*V*N*k+yn,q=b*V*V*N*lt+P,Xt=x.walk[0]*.3,Lt=x.walk[1]*.3,_e=(S?50:150)*(.25+.75*O)+(R?120:0),Ne=Za(-1500*(k-Xt)-330*(pt-x.walk[0]),-1500*(lt-Lt)-330*(rt-x.walk[1]),_e);Q+=Ne[0],q+=Ne[1],x.reelT>0&&(x.reelT-=A,Q+=x.reel[0]/.16,q+=x.reel[1]/.16),Q*=x.support*x.grip,q*=x.support*x.grip,ut(Ae.pelvis,Q*.5,0,q*.5),ut(Ae.chest,Q*.5,0,q*.5);let ke=K+(R?.5:lu-.1*(1-O)),qe=0,vn=!1;if(_&&x.riseT<1&&(ke=K+x.riseFrom+(.5-x.riseFrom)*(x.riseT/1)),x.buckle>0&&(ke-=x.buckleDip),S&&S.hurt>0&&(ke-=.13*S.hurt),!R){let H=0,Kt=9,$t=0;for(let ie of j){di(en,[0,qa,ie.side*fc],At);let ae=Math.hypot((ie.swing?ie.to[0]:ie.planted[0])-dt[0]-At[0],(ie.swing?ie.to[1]:ie.planted[1])-dt[2]-At[2]),fe=K-qa+Math.sqrt(Math.max(0,ou*ou-ae*ae));ie.swing?(Kt=fe,$t=cn((ie.t-.4)/.4,0,1)):fe>H&&(H=fe,qe=ae)}H<ke&&(ke=H,vn=!0),$t>0&&Kt<ke&&(ke+=(Math.max(Kt,K+.6)-ke)*$t)}let Ee=x.hT;x.hT+=cn(ke-x.hT,-(vn?3.2:2.2)*A,1.1*A);let De=vn?Math.min(0,(x.hT-Ee)/A):0,Pn=Math.max(.05,dt[1]+qa-K),gn=R?1:Pn/Math.hypot(Pn,qe),Tn=(1.05+.75*O)*(S?1-.5*S.hurt:1-.25*(ot.hurt+$.hurt)),zn=cn(b*ys+12e3*(x.hT-dt[1])-1400*(Dt[1]-De),0,b*ys*Math.max(.3,Tn*gn))*x.support*x.grip;h&&(x.hT=dt[1],zn=cn(b*ys*qx-500*Dt[1],0,b*ys*.8)*x.support*x.grip),ut(Ae.pelvis,0,zn*.55,0),ut(Ae.chest,0,zn*.45,0);let Mi=Za(se*.9,Wt*.9,.38);F(Ae.pelvis,ge),di(ge,[-1,0,0],tt);let Ka=Math.atan2(tt[2]*x.hx-tt[0]*x.hz,tt[0]*x.hx+tt[2]*x.hz);Y(Ae.pelvis,Z),qt(Ae.pelvis,520*x.support,46*x.support,Mi[0]*.3,Mi[1]*.3,(70*Ka-7*Z[1])*x.support),qt(Ae.chest,900*x.support*(.5+.5*O),80*x.support,Mi[0],Mi[1],0),x.stepCool-=A;let Dr=(H,Kt)=>{let $t=Gt>1e-4?1/Gt:0,ie=.02+.2*(1-O),ae=at-H.planted[0],fe=Bt-H.planted[1],Xe=Math.exp(V*Math.sqrt(N)*Kt*(.55+.45*O));return[H.planted[0]+ae*Xe+se*$t*.05-x.walk[0]/V*.55+(Qt()-.5)*ie,H.planted[1]+fe*Xe+Wt*$t*.05-x.walk[1]/V*.55+(Qt()-.5)*ie]},Nr=(H,Kt,$t)=>{let ie=$t[0]-Kt.planted[0],ae=$t[1]-Kt.planted[1],fe=(.36+.36*O)*(1-.35*H.hurt);[ie,ae]=Za(ie,ae,fe);let Xe=(ie*vt+ae*et)*H.side;Xe<.1&&(ie+=(.1-Xe)*H.side*vt,ae+=(.1-Xe)*H.side*et);let Ye=Kt.planted[0]+ie,te=Kt.planted[1]+ae;return[Ye,te,Math.hypot(Ye-$t[0],te-$t[1])]};if(R){if(!h)for(let H of j){let Kt=ct+x.hx*-.16+vt*H.side*.12,$t=St+x.hz*-.16+et*H.side*.12,ie=Za(Kt-H.planted[0],$t-H.planted[1],.9*A);H.planted[0]+=ie[0],H.planted[1]+=ie[1]}}else if(S){let H=S===ot?$:ot;if(H.t+=A/H.T,H.t<.65&&!H.tidy){let Kt=Nr(H,S,Dr(S,(1-H.t)*H.T));H.to[0]+=(Kt[0]-H.to[0])*.3,H.to[1]+=(Kt[1]-H.to[1])*.3}if(H.t>.55&&H.gap<.012||H.t>=1.4||H.t>=1&&qn(H.p[0],H.p[2])<K-.12){if(H.swing=!1,qn(H.p[0],H.p[2])<K-.12)return Nt(null,"edge");let Kt=Math.hypot(H.to[0]-H.p[0],H.to[1]-H.p[2]),$t=Math.hypot(pt,rt);if(Kt>.16&&Math.abs(qn(H.to[0],H.to[1])-K)>.12){let fe=$t>.05?pt/$t:-x.hx,Xe=$t>.05?rt/$t:-x.hz;return ft(Ae.pelvis,fe*22,26,Xe*22),Nt([fe*62,Xe*62],"trip")}H.planted=[H.p[0],H.p[2]],x.stepCool=.03+.12*(1-O);let ie=Math.hypot(pt,rt),ae=Math.min(b*ie*.38,55*O*(1-.6*H.hurt));ie>.05&&(ft(Ae.chest,-pt/ie*ae*.6,0,-rt/ie*ae*.6),ft(Ae.pelvis,-pt/ie*ae*.4,0,-rt/ie*ae*.4)),ne&&!H.tidy&&U.steps++,ue.push({type:"step",pos:[H.p[0],K,H.p[2]],hurt:H.hurt})}}else{let H=Math.hypot(ot.planted[0]-$.planted[0],ot.planted[1]-$.planted[1]),Kt=.115-.035*(1-O),$t=Gt<.06&&Math.hypot(pt,rt)<.12&&H>.36&&x.stepCool<-.35&&O>.45;if(x.stepCool<=0&&(Gt>Kt||$t)){let ie,ae;if($t)ie=x.lastFoot===0?1:0,ae=[j[1-ie].planted[0]+j[ie].side*vt*.2,j[1-ie].planted[1]+j[ie].side*et*.2];else{let te=[0,1].map(ze=>{let de=Nr(j[ze],j[1-ze],Dr(j[1-ze],.26));return{tgt:de,move:Math.hypot(de[0]-j[ze].p[0],de[1]-j[ze].p[2])}}),Fe=ze=>ze.tgt[2]-.25*Math.min(ze.move,.4)+(ze.move<.08?1:0);ie=Math.abs(Fe(te[0])-Fe(te[1]))<.02?x.lastFoot===0?1:0:Fe(te[0])<Fe(te[1])?0:1,ae=[te[ie].tgt[0],te[ie].tgt[1]]}let fe=j[ie],Xe=j[1-ie];fe.swing=!0,fe.t=0,fe.from=[fe.p[0],fe.p[1],fe.p[2]],fe.to=ae;let Ye=Math.hypot(fe.to[0]-fe.p[0],fe.to[1]-fe.p[2]);fe.T=cn(.15+.24*Ye,.17,.34)*(1.3-.3*O)*(Gt>.3?.75:1)*(Xe.hurt>0?1-.3*Xe.hurt:1),fe.lift=fe.hurt>.3?.035:.07+.09*Qt()+.05*Math.min(1,Gt*2),fe.tidy=$t,x.lastFoot=ie}}for(let H of j){if(G(H.shin,M),h){let $t=.36+.42*(cn(x.kneelT/x.kneelMax,0,1)*(1-.6*O))+.08*Math.sin(U.clock*.9+x.phase[H.side===1?0:1])*(1-O);Mt(H,-Math.sin($t),-Math.cos($t),H.side*.1),I[H.shin].SetTargetAngle($t+Math.PI/2);continue}if(H.swing){let Kt=cn(H.t,0,1),$t=Kt*Kt*(3-2*Kt);H.ik[0]=H.from[0]+(H.to[0]-H.from[0])*$t,H.ik[2]=H.from[2]+(H.to[1]-H.from[2])*$t,H.ik[1]=K+H.lift*Math.sin(Math.PI*Kt)-(Kt>.5?.09*(Kt-.5):0);let ie=1900,ae=170,fe=[ie*(H.ik[0]-H.p[0])-ae*M[0],ie*(H.ik[1]-H.p[1])-ae*M[1],ie*(H.ik[2]-H.p[2])-ae*M[2]],Xe=Math.hypot(fe[0],fe[1],fe[2]),Ye=Xe>650?650/Xe:1;ut(H.shin,fe[0]*Ye*x.support,(fe[1]*Ye-(H.t>1?160:0))*x.support,fe[2]*Ye*x.support,H.p)}else{H.ik[0]=H.planted[0],H.ik[1]=K,H.ik[2]=H.planted[1];let Kt=Za(1800*(H.planted[0]-H.p[0])-130*M[0],1800*(H.planted[1]-H.p[2])-130*M[2],480),$t=cn(40+7e3*H.gap,40,280)*x.support;ut(H.shin,Kt[0]*x.support,-$t,Kt[1]*x.support,H.p),ut(Ae.pelvis,0,$t-40*x.support,0)}wt(H,H.ik)}Vt(re,A),ne&&(U.onFeet+=A,U.stumbled+=Math.hypot(ct-x.lastCom[0],St-x.lastCom[1])),x.lastCom[0]=ct,x.lastCom[1]=St;let Gs=H=>H.swing?Math.hypot(ct-H.p[0],St-H.p[2]):Math.hypot(ct-H.planted[0],St-H.planted[1]),Ms=Math.min(Gs(ot),Gs($));F(Ae.chest,ge);let Ss=1-2*(ge[0]*ge[0]+ge[2]*ge[2]);if(!U.alive||U.ko)return Nt(null,"out");if(_){if(x.riseT>x.riseFail||O<.3)return ue.push({type:"gaveout",pos:[dt[0],dt[1],dt[2]]}),Nt(null,"gave out");if(x.riseT>2.7&&dt[1]-K>lu-.16){U.mode="balance",U.getups++,x.offT=0,x.stepCool=.2;for(let H of j)H.swing=!1,H.planted=[H.p[0],H.p[2]];ue.push({type:"up",pos:[dt[0],dt[1],dt[2]]})}else if(x.riseT>5)return Nt(null,"gave out");return}x.offT=!R&&(Ms>.46||Ss<.8)?x.offT+A:Math.max(0,x.offT-2*A);let Hs=Ms>(R?.5:.7)?"reach":x.offT>.3?"lean":Gt>2.4?"capture":Ss<.45?"tilt":dt[1]-K<(R?.3:.52)?"height":"",Fr=()=>{U.mode="kneel",U.kneels++,x.kneelT=0,x.kneelMax=1.6+3.2*Qt();for(let H of j)H.swing=!1,H.kneeDown=!1,H.planted=[H.p[0],H.p[2]];ue.push({type:"kneel",pos:[dt[0],dt[1],dt[2]]})};if(Hs==="height"&&!R&&ne&&Ms<.45&&Math.hypot(pt,rt)<1.4&&Ss>.75)return Fr();if(Hs)return Nt(null,Hs);if(x.airT>.3)return Nt(null,"air");if(U.paralysed)return Nt(null,"spine");if(x.legT=!R&&(ot.broken>=3||$.broken>=3)?x.legT+A:0,x.legT>.35)return Nt(null,"leg");let nt=Math.hypot(pt,rt);if(h&&nt>2)return Nt(null,"thrown");if(R){if(x.kneelT+=A,h&&x.kneelT>Math.min(x.kneelMax,1.4)&&O>.52&&U.bleed<.5&&x.grip>.9&&An()){U.mode="rise",x.riseT=1.9,x.riseFail=9,x.support=1,x.hT=dt[1],x.offT=0,x.buckle=-1.5;for(let H of j)H.swing=!1,H.planted=[H.p[0],H.p[2]];ue.push({type:"rise",pos:[dt[0],dt[1],dt[2]],fromKnees:!0})}else if(O<.2||x.kneelT>x.kneelMax){let H=Qt()<.5?1:-1,Kt=Qt()<.45;Nt(Kt?[vt*H*28,et*H*28]:[x.hx*30,x.hz*30],"slump")}}else ne&&nt<1.5&&(O<.5||x.buckle>0&&O<.72&&x.buckleDip>.24)&&Fr()}function pe(A,x){let U=Ct,_=it;xt(j[0]),xt(j[1]);let h=Math.min(j[0].gap,j[0].kgap,j[1].gap,j[1].kgap);U.grip+=cn((h<.03?1:0)-U.grip,-x/.09,x/.05);let R=A*cn(1-U.fallT/(.45+.6*A),0,1);if(R>0)for(let $ of j){let vt=$.kgap<.03,et=$.gap<.03;if(!vt&&!et)continue;B($);let st=vt?$.k:$.p,Ht=vt?vs+.1:ou+.08;di(en,[0,qa,$.side*fc],At);let zt=dt[0]+At[0]-st[0],ne=dt[1]+At[1]-st[1],ve=dt[2]+At[2]-st[2],It=Math.hypot(zt,ne,ve)||1;if(It>Ht||ne/It<.25)continue;let We=(Dt[0]*zt+Dt[1]*ne+Dt[2]*ve)/It,S=cn(b*ys*.3-240*We,0,b*ys*.45)*R*(1-.7*$.hurt);ut(Ae.pelvis,S*zt/It,S*ne/It,S*ve/It)}di(Ya(en),[U.fallDir[0],0,U.fallDir[1]],Rt);let O=Rt[0],V=Rt[2],ct=Math.max(0,O),St=cn((.42-(dt[1]-qn(dt[0],dt[2])))/.2,0,1);j.forEach(($,vt)=>{let et,st,Ht;vt===U.lead?(et=O*.95,st=V*.95+$.side*.08,Ht=.95-.65*ct):(et=O*.15-.3*(1-ct),st=$.side*.1,Ht=1.65),et*=1-St,Ht*=1-.75*St;let zt=Math.hypot(et,1,st);Mt($,et/zt,-1/zt,st/zt),I[$.shin].SetTargetAngle(Ht)}),F(Ae.chest,ge),di(Ya(ge),[U.fallDir[0],0,U.fallDir[1]],Rt);let pt=Rt[0],rt=Rt[2],ot=U.grip<.3&&U.fallT>.35?1:0;if(Jt(Ae.chest,ss(0,1,0,.12+.4*Math.max(0,pt))),Jt(Ae.head,ss(0,1,0,.5*pt)),!(U.flinch>0))for(let $ of[1,-1]){let vt=cn(rt*$,-1,1),et=ot*.55*Math.sin(_.clock*11+$*1.7),st=cn(-pt*1.25,-.8,1.3)+.15+et,Ht=-.25-.9*Math.max(0,vt)+.3*Math.max(0,-vt);Jt($===1?Ae.uarm_l:Ae.uarm_r,Et(st,Ht,$)),I[$===1?Ae.larm_l:Ae.larm_r].SetTargetAngle(-.35-.3*ot)}}function Me(A){let x=Ct,U=it,_=U.clock;x.support=Math.max(0,x.support-A/.14);let h=U.alive&&!U.ko;h||(x.fight=0);let R=U.mode==="fall"?x.fight*cn(1-(x.fallT-1.3)/1.2,0,1)*(x.settle>.1?.5:1):0,O=h?.1+.32*U.strength:0;for(let V=1;V<v;V++){let ct=wn[V].zone,St=Math.max(O,R*(ct==="arm"?.85:ct==="thigh"||ct==="shin"?.75:.7));ht[V]+=cn(St-ht[V],-(U.alive?3:1.1)*A,2*A)}if(R>.12)pe(R,A);else if(h){for(let V of j){let ct=_*(1.1+.5*U.strength)+x.phase[V.side===1?0:1];Jt(V.thigh,ss(0,1,0,.35+.4*Math.sin(ct))),I[V.shin].SetTargetAngle(.7+.6*Math.sin(ct+1.3))}Vt(0,A)}if(U.mode==="fall"){x.fallT=(x.fallT||0)+A;let V=dt[1]-qn(dt[0],dt[2])<.45||it.restTimer>.7||x.fallT>4;if(x.settle=V&&Math.hypot(Dt[0],Dt[1],Dt[2])<(x.fallT>4?1.2:.6)?x.settle+A:0,x.settle>.35){U.mode="down",U.downAt=U.time,x.settle=0,x.fallT=0,ue.push({type:"down",pos:[Ot[0],Ot[1],Ot[2]],onFeet:U.onFeet});let ct=qn(dt[0],dt[2]),St=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([rt,ot])=>Math.abs(qn(dt[0]+rt,dt[2]+ot)-ct)<.05)&&dt[1]-ct<.5,pt=cn((U.blood-10)/70,0,1)*(1-.3*Math.min(1,U.stun));h&&pt>.42&&x.riseTries<2&&St&&An()?x.riseAt=U.time+.9+1.6*Qt()+2.5*Math.max(0,U.stun-.25):(x.riseAt=0,U.spent=!0)}}else if(U.mode==="down"&&x.riseAt>0&&U.time>x.riseAt){if(x.riseAt=0,!h||U.strength<.36||!An()){U.spent=!0;return}F(Ae.chest,ge);let V=di(ge,[-1,0,0],tt)[1]>0,ct=E(Ae.head,ee),St=ct[0]-dt[0],pt=ct[2]-dt[2],rt=Math.hypot(St,pt)||1,ot=V?-1:1;x.hx=ot*St/rt,x.hz=ot*pt/rt,U.mode="rise",x.riseT=0,x.riseTries++,x.support=0,x.offT=0,x.buckle=0,x.kneelT=0,x.riseFrom=Math.max(.12,dt[1]-qn(dt[0],dt[2])),x.hT=dt[1],x.riseFail=Qt()<cn((.75-U.strength)*1.6+.35*x.legWound,0,.9)?.9+Qt()*1.2:9;for(let $ of j)B($),$.swing=!1,$.planted=[$.p[0],$.p[2]];x.lastCom[0]=dt[0],x.lastCom[1]=dt[2],ue.push({type:"rise",pos:[dt[0],dt[1],dt[2]]})}}function kt(A){for(ue.length=0;Qe.length;)ue.push(Qe.shift());let x=it,U=Ct;x.clock+=A,x.hits>0&&(x.time+=A);let _=0;if(x.alive){for(let ot of le){let $=Math.min(ot.rate*A,ot.left);ot.left-=$,x.blood-=$,ot.left>0&&(_+=ot.rate)}x.blood=Math.max(0,x.blood),x.blood<=0&&Ve("Bled out")}if(x.bleed=_,x.stun=Math.max(0,x.stun-.2*A),(!x.alive||x.ko)&&(x.spent=!0),x.strength=x.alive&&!x.ko?cn((x.blood-10)/70,0,1)*(1-.75*Math.min(1,x.stun)):0,U.flinch-=A,U.lookDown-=A,U.clutch&&x.clock>U.clutchEnd&&(U.clutch=null),E(Ae.pelvis,dt),G(Ae.pelvis,Dt),F(Ae.pelvis,en),E(Ae.chest,Ot),G(Ae.chest,Te),x.mode==="balance"||x.mode==="kneel"||x.mode==="rise"){for(let ot=1;ot<v;ot++){let vt=wn[ot].zone==="thigh"||wn[ot].zone==="shin"?.95:.35+.65*x.strength;ht[ot]+=cn(vt-ht[ot],-3*A,3*A)}Ut(A)}else Me(A);jt(),s.Step(A,1);let h=0;for(let ot=0;ot<v;ot++){G(ot,M);let $=M[0]-gt[ot*3],vt=M[1]-gt[ot*3+1]+ys*A,et=M[2]-gt[ot*3+2];gt[ot*3]=M[0],gt[ot*3+1]=M[1],gt[ot*3+2]=M[2];let st=Math.hypot($,vt,et);h=Math.max(h,Math.hypot(M[0],M[1],M[2])),Pt[ot]-=A;let Ht=x.mode==="fall"||x.mode==="down";if(x.hits>0&&Ht&&st>2.2&&Pt[ot]<=0){Pt[ot]=.18;let zt=wn[ot],ne=st*(zt.zone==="head"?5:zt.zone==="chest"||zt.zone==="gut"?1.6:.8);x.damage+=ne,x.impacts++;let ve=J(ot);ue.push({type:"impact",part:ot,zone:zt.zone,pos:ve,dv:st,dmg:ne}),F(ot,ge),di(Ya(ge),[-$/st,-vt/st,-et/st],tt);for(let[It,We]of Cn(ot,tt))xn(It,st*We,ve,"fall");zt.zone==="head"&&xn("neck",st*.9,ve,"fall"),zt.zone==="head"&&(x.stun=Math.min(1.6,x.stun+st*.09),x.stun>1.15&&tn())}}if($e==="window")for(let ot=0;ot<v;ot++){if(E(ot,ee),ee[1]>we.glassY+.6||ee[1]<we.glassY-.3)continue;let $=Math.hypot(gt[ot*3],gt[ot*3+1],gt[ot*3+2]);if($<1.6)continue;let vt=wn[ot].r+wn[ot].hh+.06+$*A*2;if(!(Math.abs(ee[1]-we.glassY)>vt))for(let et of f.panes)et.broken||ee[0]<et.min[0]-.1||ee[0]>et.max[0]+.1||ee[2]<et.min[1]-.1||ee[2]>et.max[1]+.1||y(et,[gt[ot*3],gt[ot*3+1],gt[ot*3+2]])}if(x.hits===0)return ue;x.lowest=Math.min(x.lowest,dt[1]),x.drop=Math.max(0,xe.start[1]+.93-x.lowest-.85);let R=Math.max(Math.hypot(gt[0],gt[1],gt[2]),Math.hypot(gt[3],gt[4],gt[5])),O=j.some(ot=>ot.swing&&!ot.tidy),V=j.some(ot=>ot.swing&&ot.tidy),ct=x.mode==="balance"?!O&&R<(V?.35:.2):h<.15;x.restTimer=ct?x.restTimer+A:0;let St=x.restTimer>1.1,pt=x.stun>.05?2.6:1.5,rt=0;if(x.alive?x.bleed>.01?rt=0:x.mode==="balance"?rt=x.restTimer/pt:x.mode==="rise"||x.mode==="down"&&!x.spent?rt=0:rt=Math.max(x.restTimer/1.1,x.mode==="down"?(x.time-x.downAt)/3.5:0):rt=Math.min(x.restTimer/1.1,(x.time-x.diedAt)/1.6),x.wrap=cn(rt,0,1),!x.done){let ot="";!x.alive&&St&&x.time-x.diedAt>1.6?ot=x.outcome:x.alive&&x.bleed<=.01&&(x.mode==="fall"&&St||x.mode==="down"&&x.spent&&(St||x.time-x.downAt>3.5)||x.mode==="balance"&&x.restTimer>pt||x.ko&&St)?ot=x.ko?"Out cold":x.mode==="balance"?"Still standing":"Down, alive":x.time>80&&(ot="Time"),ot&&(x.done=!0,x.outcome=ot,ue.push({type:"done",outcome:ot}))}return ue}function ye(){let A=it,x=!A.alive,U=Object.values(A.bones),_=[["Stagger steps",String(A.steps),Math.min(A.steps,40)*14],["Stumbled",A.stumbled.toFixed(1)+" m",Math.round(Math.min(A.stumbled,12)*18)],["Knee drops",String(A.kneels),A.kneels*120],["Put down",A.downAt>=0?"yes":"\u2014",A.downAt>=0?90:0],["Got back up",String(A.getups),A.getups*140],["Hard landings",String(A.impacts),Math.round(A.damage*Zx)],["Bones",String(U.length),U.reduce((R,O)=>R+Df[O],0)],["Fell",A.drop.toFixed(1)+" m",Math.round(A.drop*65)],["Glass",A.glass+(A.glass===1?" pane":" panes"),A.glass*130],["Trick shots",String(A.fallHits),A.fallHits*150+A.airHits*250],["Out cold",A.ko?"yes":"\u2014",A.ko?150:0],[x?A.outcome:"Bled out",x?A.diedAt.toFixed(1)+" s":"\u2014",x?A.diedAt>.3?260:60:0]];return{lines:_.filter((R,O)=>R[2]>0||O<3),total:_.reduce((R,O)=>R+O[2],0)}}function Oe(A){pc[A]&&($e=A,xe=pc[A],fn())}let Zt=[0,0,0,1];return fn(),{parts:wn,state:it,wounds:le,feet:j,step:kt,hit:rn,reset:fn,payout:ye,pos:J,mass:L,totalMass:b,statics:p,setLevel:Oe,groundY:qn,get level(){return xe},get levelKey(){return $e},glass:{tiles:f.tiles,panes:f.panes,transform(A,x){let U=f.tiles[A];return mt(U.id,x),z(U.id,Zt),x[3]=Zt[0],x[4]=Zt[1],x[5]=Zt[2],x[6]=Zt[3],x}},transform(A,x){E(A,x);let U=a.GetRotation(D[A]);return x[3]=U.GetX(),x[4]=U.GetY(),x[5]=U.GetZ(),x[6]=U.GetW(),x},_debug:{joints:I,tone:ht,IDX:Ae,ctl:Ct,impulse:ft,armQ:Et,setTarget:Jt}}}var Xa,ys,au,Ir,Wx,on,we,pc,wn,Ae,vs,Lr,qa,fc,Xx,ou,qx,lu,Yx,uu,Zx,Df,$x,Kx,jx,Ya,cn,Ff=Bf(()=>{Xa=Math.PI/180,ys=9.81,au=0,Ir=1,Wx={half:16},on={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};on.height=on.steps*on.rise;on.length=on.steps*on.run;we={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},pc={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,on.height,on.z],attacker:[-5.2,on.height+1.5,on.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,we.floor,we.z],attacker:[-6.2,we.floor+1.5,we.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};wn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],Ae=Object.fromEntries(wn.map((n,t)=>[n.name,t])),vs=.44,Lr=.425,qa=-.08,fc=.1,Xx=.205,ou=.85,qx=.35,lu=.915,Yx={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},uu={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},Zx=1.2,Df=[0,5,30,80],$x=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),Kx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},jx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};Ya=n=>[-n[0],-n[1],-n[2],n[3]],cn=(n,t,e)=>Math.max(t,Math.min(e,n))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ju=0,Qc=1,Qu=2;var Ds=1,td=2,xr=3,_s=0,Jn=1,_i=2,Ns=0,yr=1,th=2,eh=3,nh=4,ed=5;var Fs=100,nd=101,id=102,sd=103,rd=104,ad=200,od=201,ld=202,cd=203,ih=204,sh=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,_d=213,xd=214,Ro=0,Co=1,Po=2,rr=3,Io=4,Lo=5,Do=6,No=7,rh=0,yd=1,vd=2,Bi=0,ah=1,oh=2,lh=3,Ra=4,ch=5,hh=6,uh=7;var dh=300,Us=301,vr=302,fl=303,pl=304,Fo=1e3,Li=1001,Uo=1002,Un=1003,Md=1004;var Ca=1005;var Kn=1006,ml=1007;var Ki=1008;var ti=1009,fh=1010,ph=1011,Mr=1012,gl=1013,Ai=1014,xi=1015,Ri=1016,_l=1017,xl=1018,Os=1020,mh=35902,gh=35899,_h=1021,xh=1022,Ci=1023,Zi=1026,ji=1027,yl=1028,vl=1029,xs=1030,Ml=1031;var Sl=1033,Pa=33776,Ia=33777,La=33778,Da=33779,bl=35840,wl=35841,Tl=35842,El=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Il=37489,Na=37490,Ll=37491,Dl=37808,Nl=37809,Fl=37810,Ul=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Gl=37816,Hl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,$l=36495,Kl=36283,jl=36284,Fa=36285,Jl=36286;var Yr=2300,Oo=2301,Eo=2302,Gc=2303,Hc=2400,Vc=2401,Wc=2402;var Sd=3200;var Ql=0,bd=1,Ji="",Zn="srgb",Zr="srgb-linear",$r="linear",un="srgb";var Ao=7680;var wd=519,Td=512,Ed=513,Ad=514,yh=515,Rd=516,Cd=517,vh=518,Mh=519,Pd=35044;var Sh="300 es",mi=2e3,ar=2001;function kf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Id(){let n=Kr("canvas");return n.style.display="block",n}var pu={},or=null;function bh(...n){let t="THREE."+n.shift();or?or("log",t,...n):console.log(t,...n)}function Ld(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Ld(n);let t="THREE."+n.shift();if(or)or("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Be(...n){n=Ld(n);let t="THREE."+n.shift();if(or)or("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Wr(...n){let t=n.join(" ");t in pu||(pu[t]=!0,Le(...n))}function Dd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Nd={[Ro]:Ro,[Po]:Do,[Io]:Io,[rr]:Lo,[Co]:Co,[Do]:Po,[No]:No,[Lo]:rr},Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mc=Math.PI/180,Bo=180/Math.PI;function Sr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function Gf(n,t){return(n%t+t)%t}function gc(n,t,e){return(1-e)*n+e*t}function Fd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hf(n,t){if(t.constructor===Float32Array)return n;let e=wh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Vf(n,t){if(t.constructor===Float32Array)return n;let e=wh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var me=Ph,oi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],d=r[a+0],f=r[a+1],y=r[a+2],w=r[a+3];if(p!==w||l!==d||c!==f||u!==y){let g=l*d+c*f+u*y+p*w;g<0&&(d=-d,f=-f,y=-y,w=-w,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),L=Math.sin(b);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L,l=l*m+d*o,c=c*m+f*o,u=u*m+y*o,p=p*m+w*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+y*o,p=p*m+w*o;let b=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=b,c*=b,u*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[a],d=r[a+1],f=r[a+2],y=r[a+3];return t[e]=o*y+u*p+l*f-c*d,t[e+1]=l*y+u*d+c*p-o*f,t[e+2]=c*y+u*f+o*d-l*p,t[e+3]=u*y-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),p=o(r/2),d=l(i/2),f=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*y,this._y=c*f*p-d*u*y,this._z=c*u*y+d*f*p,this._w=c*u*p-d*f*y;break;case"YXZ":this._x=d*u*p+c*f*y,this._y=c*f*p-d*u*y,this._z=c*u*y-d*f*p,this._w=c*u*p+d*f*y;break;case"ZXY":this._x=d*u*p-c*f*y,this._y=c*f*p+d*u*y,this._z=c*u*y+d*f*p,this._w=c*u*p-d*f*y;break;case"ZYX":this._x=d*u*p-c*f*y,this._y=c*f*p+d*u*y,this._z=c*u*y-d*f*p,this._w=c*u*p+d*f*y;break;case"YZX":this._x=d*u*p+c*f*y,this._y=c*f*p+d*u*y,this._z=c*u*y-d*f*p,this._w=c*u*p-d*f*y;break;case"XZY":this._x=d*u*p-c*f*y,this._y=c*f*p-d*u*y,this._z=c*u*y+d*f*p,this._w=c*u*p+d*f*y;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=i+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*u,this.y=i+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var W=Ih,_c=new W,mu=new oi,Lh=class Lh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],f=i[5],y=i[8],w=s[0],g=s[3],m=s[6],b=s[1],L=s[4],T=s[7],D=s[2],I=s[5],v=s[8];return r[0]=a*w+o*b+l*D,r[3]=a*g+o*L+l*I,r[6]=a*m+o*T+l*v,r[1]=c*w+u*b+p*D,r[4]=c*g+u*L+p*I,r[7]=c*m+u*T+p*v,r[2]=d*w+f*b+y*D,r[5]=d*g+f*L+y*I,r[8]=d*m+f*T+y*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,y=e*p+i*d+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=p*w,t[1]=(s*c-u*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(u*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=f*w,t[7]=(i*l-c*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(t,e)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-t)),this}translate(t,e){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;var Ge=Lh,xc=new Ge,gu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){let n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===un&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===un&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:t,whitePoint:i,transfer:$r,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:i,transfer:un,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),n}var nn=Wf();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vs,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vs===void 0&&(Vs=Kr("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Vs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yi(e[i]/255)*255):e[i]=Yi(e[i]);return{data:e,width:t.width,height:t.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yc(s[a].image)):r.push(yc(s[a]))}else r=yc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var qf=0,vc=new W,jn=class n extends Di{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Li,s=Li,r=Kn,a=Ki,o=Ci,l=ti,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Sr(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Le(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Le(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=dh;jn.DEFAULT_ANISOTROPY=1;var Dh=class Dh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],y=l[9],w=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+w)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,T=(f+1)/2,D=(m+1)/2,I=(u+d)/4,v=(p+w)/4,E=(y+g)/4;return L>T&&L>D?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=I/i,r=v/i):T>D?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=I/s,r=E/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=v/r,s=E/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-y)*(g-y)+(p-w)*(p-w)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-y)/b,this.y=(p-w)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=je(this.x,t.x,e.x),this.y=je(this.y,t.y,e.y),this.z=je(this.z,t.z,e.z),this.w=je(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=je(this.x,t,e),this.y=je(this.y,t,e),this.z=je(this.z,t,e),this.w=je(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;var En=Dh,zo=class extends Di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new En(0,0,t,e),this.scissorTest=!1,this.viewport=new En(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new jn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends zo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jr=class extends jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,i,s,r,a,o,l,c,u,p,d,f,y,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,p,d,f,y,w,g)}set(t,e,i,s,r,a,o,l,c,u,p,d,f,y,w,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=f,m[7]=y,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),a=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,y=o*u,w=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+y*c,e[5]=d-w*c,e[9]=-o*l,e[2]=w-d*c,e[6]=y+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,y=c*u,w=c*p;e[0]=d+w*o,e[4]=y*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-y,e[6]=w+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,y=c*u,w=c*p;e[0]=d-w*o,e[4]=-a*p,e[8]=y+f*o,e[1]=f+y*o,e[5]=a*u,e[9]=w-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,y=o*u,w=o*p;e[0]=l*u,e[4]=y*c-f,e[8]=d*c+w,e[1]=l*p,e[5]=w*c+d,e[9]=f*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,y=o*l,w=o*c;e[0]=l*u,e[4]=w-d*p,e[8]=y*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+y,e[10]=d-w*p}else if(t.order==="XZY"){let d=a*l,f=a*c,y=o*l,w=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+w,e[5]=a*u,e[9]=f*p-y,e[2]=y*p-f,e[6]=o*u,e[10]=w*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,Zf)}lookAt(t,e,i){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),rs.crossVectors(i,si),rs.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rs.crossVectors(i,si)),rs.normalize(),Ja.crossVectors(si,rs),s[0]=rs.x,s[4]=Ja.x,s[8]=si.x,s[1]=rs.y,s[5]=Ja.y,s[9]=si.y,s[2]=rs.z,s[6]=Ja.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],f=i[13],y=i[2],w=i[6],g=i[10],m=i[14],b=i[3],L=i[7],T=i[11],D=i[15],I=s[0],v=s[4],E=s[8],G=s[12],F=s[1],Y=s[5],J=s[9],mt=s[13],z=s[2],ut=s[6],ft=s[10],ht=s[14],yt=s[3],_t=s[7],gt=s[11],Pt=s[15];return r[0]=a*I+o*F+l*z+c*yt,r[4]=a*v+o*Y+l*ut+c*_t,r[8]=a*E+o*J+l*ft+c*gt,r[12]=a*G+o*mt+l*ht+c*Pt,r[1]=u*I+p*F+d*z+f*yt,r[5]=u*v+p*Y+d*ut+f*_t,r[9]=u*E+p*J+d*ft+f*gt,r[13]=u*G+p*mt+d*ht+f*Pt,r[2]=y*I+w*F+g*z+m*yt,r[6]=y*v+w*Y+g*ut+m*_t,r[10]=y*E+w*J+g*ft+m*gt,r[14]=y*G+w*mt+g*ht+m*Pt,r[3]=b*I+L*F+T*z+D*yt,r[7]=b*v+L*Y+T*ut+D*_t,r[11]=b*E+L*J+T*ft+D*gt,r[15]=b*G+L*mt+T*ht+D*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],y=t[3],w=t[7],g=t[11],m=t[15],b=l*f-c*d,L=o*f-c*p,T=o*d-l*p,D=a*f-c*u,I=a*d-l*u,v=a*p-o*u;return e*(w*b-g*L+m*T)-i*(y*b-g*D+m*I)+s*(y*L-w*D+m*v)-r*(y*T-w*I+g*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],y=t[12],w=t[13],g=t[14],m=t[15],b=e*o-i*a,L=e*l-s*a,T=e*c-r*a,D=i*l-s*o,I=i*c-r*o,v=s*c-r*l,E=u*w-p*y,G=u*g-d*y,F=u*m-f*y,Y=p*g-d*w,J=p*m-f*w,mt=d*m-f*g,z=b*mt-L*J+T*Y+D*F-I*G+v*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ut=1/z;return t[0]=(o*mt-l*J+c*Y)*ut,t[1]=(s*J-i*mt-r*Y)*ut,t[2]=(w*v-g*I+m*D)*ut,t[3]=(d*I-p*v-f*D)*ut,t[4]=(l*F-a*mt-c*G)*ut,t[5]=(e*mt-s*F+r*G)*ut,t[6]=(g*T-y*v-m*L)*ut,t[7]=(u*v-d*T+f*L)*ut,t[8]=(a*J-o*F+c*E)*ut,t[9]=(i*F-e*J-r*E)*ut,t[10]=(y*I-w*T+m*b)*ut,t[11]=(p*T-u*I-f*b)*ut,t[12]=(o*G-a*Y-l*E)*ut,t[13]=(e*Y-i*G+s*E)*ut,t[14]=(w*L-y*D-g*b)*ut,t[15]=(u*D-p*L+d*b)*ut,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,y=r*p,w=a*u,g=a*p,m=o*p,b=l*c,L=l*u,T=l*p,D=i.x,I=i.y,v=i.z;return s[0]=(1-(w+m))*D,s[1]=(f+T)*D,s[2]=(y-L)*D,s[3]=0,s[4]=(f-T)*I,s[5]=(1-(d+m))*I,s[6]=(g+b)*I,s[7]=0,s[8]=(y+L)*v,s[9]=(g-b)*v,s[10]=(1-(d+w))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Si.copy(this);let c=1/a,u=1/o,p=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=p,Si.elements[9]*=p,Si.elements[10]*=p,e.setFromRotationMatrix(Si),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=mi,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),y,w;if(l)y=r/(a-r),w=a*r/(a-r);else if(o===mi)y=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===ar)y=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=mi,l=!1){let c=this.elements,u=2/(e-t),p=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),y,w;if(l)y=1/(a-r),w=a/(a-r);else if(o===mi)y=-2/(a-r),w=-(a+r)/(a-r);else if(o===ar)y=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};dl.prototype.isMatrix4=!0;var sn=dl,Ws=new W,Si=new sn,Yf=new W(0,0,0),Zf=new W(1,1,1),rs=new W,Ja=new W,si=new W,xu=new sn,yu=new oi,Ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$f=0,vu=new W,Xs=new oi,Hi=new sn,Qa=new W,Ur=new W,Kf=new W,jf=new oi,Mu=new W(1,0,0),Su=new W(0,1,0),bu=new W(0,0,1),wu={type:"added"},Jf={type:"removed"},qs={type:"childadded",child:null},Mc={type:"childremoved",child:null},On=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,e=new Ei,i=new oi,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new Ge}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qa.copy(t):Qa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Ur,Qa,this.up):Hi.lookAt(Qa,Ur,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),qs.child=t,this.dispatchEvent(qs),qs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),y=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new W(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rs=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,i),m=this._getHandJoint(c,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,y=.005;c.inputState.pinching&&d>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},to={h:0,s:0,l:0};function Sc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var He=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nn.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=nn.workingColorSpace){return this.r=t,this.g=e,this.b=i,nn.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=nn.workingColorSpace){if(t=Gf(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Sc(a,r,t+1/3),this.g=Sc(a,r,t),this.b=Sc(a,r,t-1/3)}return nn.colorSpaceToWorking(this,s),this}setStyle(t,e=Zn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Le("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){let i=Ud[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return nn.workingToColorSpace(Vn.copy(this),t),Math.round(je(Vn.r*255,0,255))*65536+Math.round(je(Vn.g*255,0,255))*256+Math.round(je(Vn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nn.workingColorSpace){nn.workingToColorSpace(Vn.copy(this),e);let i=Vn.r,s=Vn.g,r=Vn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=nn.workingColorSpace){return nn.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Zn){nn.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,i=Vn.g,s=Vn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(to);let i=gc(as.h,to.h,e),s=gc(as.s,to.s,e),r=gc(as.l,to.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new He;He.NAMES=Ud;var Jr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bi=new W,Vi=new W,bc=new W,Wi=new W,Ys=new W,Zs=new W,Tu=new W,wc=new W,Tc=new W,Ec=new W,Ac=new En,Rc=new En,Cc=new En,hs=class n{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bi.subVectors(t,e),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bi.subVectors(s,e),Vi.subVectors(i,e),bc.subVectors(t,e);let a=bi.dot(bi),o=bi.dot(Vi),l=bi.dot(bc),c=Vi.dot(Vi),u=Vi.dot(bc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,y=(a*u-o*l)*d;return r.set(1-f-y,y,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ac,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Cc,r.z),a}static isFrontFacing(t,e,i,s){return bi.subVectors(i,e),Vi.subVectors(t,e),bi.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),bi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,i),Zs.subVectors(r,i),wc.subVectors(t,i);let l=Ys.dot(wc),c=Zs.dot(wc);if(l<=0&&c<=0)return e.copy(i);Tc.subVectors(t,s);let u=Ys.dot(Tc),p=Zs.dot(Tc);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(Ys,a);Ec.subVectors(t,r);let f=Ys.dot(Ec),y=Zs.dot(Ec);if(y>=0&&f<=y)return e.copy(r);let w=f*c-l*y;if(w<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(i).addScaledVector(Zs,o);let g=u*y-f*p;if(g<=0&&p-u>=0&&f-y>=0)return Tu.subVectors(r,s),o=(p-u)/(p-u+(f-y)),e.copy(s).addScaledVector(Tu,o);let m=1/(g+w+d);return a=w*m,o=d*m,e.copy(i).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ni=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),no.subVectors(this.max,Or),$s.subVectors(t.a,Or),Ks.subVectors(t.b,Or),js.subVectors(t.c,Or),os.subVectors(Ks,$s),ls.subVectors(js,Ks),ws.subVectors($s,js);let e=[0,-os.z,os.y,0,-ls.z,ls.y,0,-ws.z,ws.y,os.z,0,-os.x,ls.z,0,-ls.x,ws.z,0,-ws.x,-os.y,os.x,0,-ls.y,ls.x,0,-ws.y,ws.x,0];return!Pc(e,$s,Ks,js,no)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,$s,Ks,js,no))?!1:(io.crossVectors(os,ls),e=[io.x,io.y,io.z],Pc(e,$s,Ks,js,no))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xi=[new W,new W,new W,new W,new W,new W,new W,new W],wi=new W,eo=new Ni,$s=new W,Ks=new W,js=new W,os=new W,ls=new W,ws=new W,Or=new W,no=new W,io=new W,Ts=new W;function Pc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ts.fromArray(n,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ln=new W,so=new me,tp=0,ai=class extends Di{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pd,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=t!==void 0?wh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix3(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix4(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyNormalMatrix(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.transformDirection(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Vf(t,this.array)}};var ta=class extends ai{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ea=class extends ai{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _n=class extends ai{constructor(t,e,i){super(new Float32Array(t),e,i)}},ep=new Ni,Br=new W,Ic=new W,Fi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ep.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Ic)),this.expandByPoint(Br.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},np=0,pi=new sn,Lc=new On,Js=new W,ri=new Ni,kr=new Ni,Fn=new W,Bn=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kf(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,i){return pi.makeTranslation(t,e,i),this.applyMatrix4(pi),this}scale(t,e,i){return pi.makeScale(t,e,i),this.applyMatrix4(pi),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(ri.min,kr.min),ri.expandByPoint(Fn),Fn.addVectors(ri.max,kr.max),ri.expandByPoint(Fn)):(ri.expandByPoint(kr.min),ri.expandByPoint(kr.max))}ri.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Fn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(t,c),Fn.add(Js)),s=Math.max(s,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let G=0;G<i.count;G++)o[G]=new W,l[G]=new W;let u=new W,p=new W,d=new W,f=new me,y=new me,w=new me,g=new W,m=new W;function b(G,F,Y){c[G]=c[F]=c[Y]=1,u.fromBufferAttribute(i,G),p.fromBufferAttribute(i,F),d.fromBufferAttribute(i,Y),f.fromBufferAttribute(r,G),y.fromBufferAttribute(r,F),w.fromBufferAttribute(r,Y),p.sub(u),d.sub(u),y.sub(f),w.sub(f);let J=1/(y.x*w.y-w.x*y.y);isFinite(J)&&(g.copy(p).multiplyScalar(w.y).addScaledVector(d,-y.y).multiplyScalar(J),m.copy(d).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(J),o[G].add(g),o[F].add(g),o[Y].add(g),l[G].add(m),l[F].add(m),l[Y].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,F=L.length;G<F;++G){let Y=L[G],J=Y.start,mt=Y.count;for(let z=J,ut=J+mt;z<ut;z+=3)b(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new W,D=new W,I=new W,v=new W;function E(G){I.fromBufferAttribute(s,G),v.copy(I);let F=o[G];T.copy(F),T.sub(I.multiplyScalar(I.dot(F))).normalize(),D.crossVectors(v,F);let J=D.dot(l[G])<0?-1:1;a.setXYZW(G,T.x,T.y,T.z,J)}for(let G=0,F=i.count;G<F;++G)c[G]&&E(G);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,p=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){let y=t.getX(d+0),w=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fn.fromBufferAttribute(t,e),Fn.normalize(),t.setXYZ(e,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,y=0;for(let w=0,g=l.length;w<g;w++){o.isInterleavedBufferAttribute?f=l[w]*o.data.stride+o.offset:f=l[w]*u;for(let m=0;m<u;m++)d[y++]=c[f++]}return new ai(d,u,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dc=new W,ip=new W,sp=new Ge,Ti=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dc.subVectors(i,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||sp.getNormalMatrix(t),s=this.coplanarPoint(Dc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rp=0,Ui=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=yr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Le(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Le(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new He().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ti().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new me().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qi=new W,Nc=new W,ro=new W,ao=new W,Cs=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Nc.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(Nc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),l=-ao.dot(ro),c=ao.lengthSq(),u=Math.abs(1-a*a),p,d,f,y;if(u>0)if(p=a*l-o,d=a*o-l,y=r*u,p>=0)if(d>=-y)if(d<=y){let w=1/u;p*=w,d*=w,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-y?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=y?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Nc).addScaledVector(ro,d),f}intersectSphere(t,e){if(t.radius<0)return null;qi.subVectors(t.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,y=e.x-a.x,w=e.y-a.y,g=e.z-a.z,m=i.x-a.x,b=i.y-a.y,L=i.z-a.z,T=Math.abs(l),D=Math.abs(c),I=Math.abs(u),v,E,G,F,Y,J,mt,z,ut,ft,ht,yt;if(T>=D&&T>=I?(G=l,J=p,ut=y,yt=m,l>=0?(v=c,E=u,F=d,Y=f,mt=w,z=g,ft=b,ht=L):(v=u,E=c,F=f,Y=d,mt=g,z=w,ft=L,ht=b)):D>=I?(G=c,J=d,ut=w,yt=b,c>=0?(v=u,E=l,F=f,Y=p,mt=g,z=y,ft=L,ht=m):(v=l,E=u,F=p,Y=f,mt=y,z=g,ft=m,ht=L)):(G=u,J=f,ut=g,yt=L,u>=0?(v=l,E=c,F=p,Y=d,mt=y,z=w,ft=m,ht=b):(v=c,E=l,F=d,Y=p,mt=w,z=y,ft=b,ht=m)),G===0)return null;let _t=v/G,gt=E/G,Pt=1/G,Jt=F-_t*J,Ce=Y-gt*J,Et=mt-_t*ut,jt=z-gt*ut,it=ft-_t*yt,le=ht-gt*yt,j=it*jt-le*Et,Ct=Jt*le-Ce*it,Qt=Et*Ce-jt*Jt;if(s){if(j<0||Ct<0||Qt<0)return null}else if((j<0||Ct<0||Qt<0)&&(j>0||Ct>0||Qt>0))return null;let Re=j+Ct+Qt;if(Re===0)return null;let xe=Pt*(j*J+Ct*ut+Qt*yt);return(Re>0?xe<0:xe>0)?null:this.at(xe/Re,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},us=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eu=new sn,Es=new Cs,oo=new Fi,Au=new W,lo=new W,co=new W,ho=new W,Fc=new W,uo=new W,Ru=new W,fo=new W,In=class extends On{constructor(t=new Bn,e=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Fc.fromBufferAttribute(p,t),a?uo.addScaledVector(Fc,u):uo.addScaledVector(Fc.sub(e),u))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(oo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(oo,Au)===null||Es.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),Es.copy(t.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,w=d.length;y<w;y++){let g=d[y],m=a[g.materialIndex],b=Math.max(g.start,f.start),L=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,D=L;T<D;T+=3){let I=o.getX(T),v=o.getX(T+1),E=o.getX(T+2);s=po(this,m,t,i,c,u,p,I,v,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),w=Math.min(o.count,f.start+f.count);for(let g=y,m=w;g<m;g+=3){let b=o.getX(g),L=o.getX(g+1),T=o.getX(g+2);s=po(this,a,t,i,c,u,p,b,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,w=d.length;y<w;y++){let g=d[y],m=a[g.materialIndex],b=Math.max(g.start,f.start),L=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,D=L;T<D;T+=3){let I=T,v=T+1,E=T+2;s=po(this,m,t,i,c,u,p,I,v,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),w=Math.min(l.count,f.start+f.count);for(let g=y,m=w;g<m;g+=3){let b=g,L=g+1,T=g+2;s=po(this,a,t,i,c,u,p,b,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ap(n,t,e,i,s,r,a,o){let l;if(t.side===Jn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===_s,o),l===null)return null;fo.copy(o),fo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:n}}function po(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,lo),n.getVertexPosition(l,co),n.getVertexPosition(c,ho);let u=ap(n,t,e,i,lo,co,ho,Ru);if(u){let p=new W;hs.getBarycoord(Ru,lo,co,ho,p),s&&(u.uv=hs.getInterpolatedAttribute(s,o,l,c,p,new me)),r&&(u.uv1=hs.getInterpolatedAttribute(r,o,l,c,p,new me)),a&&(u.normal=hs.getInterpolatedAttribute(a,o,l,c,p,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new W,materialIndex:0};hs.getNormal(lo,co,ho,d.normal),u.face=d,u.barycoord=p}return u}var na=class extends jn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Un,u=Un,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends ai{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new sn,Cu=new sn,mo=[],Pu=new Ni,op=new sn,zr=new In,Gr=new Fi,ur=class extends In{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qs),Pu.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qs),Gr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Cu.multiplyMatrices(i,Qs),zr.matrixWorld=Cu,zr.raycast(t,mo);for(let a=0,o=mo.length;a<o;a++){let l=mo[a];l.instanceId=r,l.object=this,e.push(l)}mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(s*this.count),s,this.count,yl,xi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Fi,lp=new me(.5,.5),go=new W,ds=class{constructor(t=new Ti,e=new Ti,i=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],y=r[8],w=r[9],g=r[10],m=r[11],b=r[12],L=r[13],T=r[14],D=r[15];if(s[0].setComponents(c-a,f-u,m-y,D-b).normalize(),s[1].setComponents(c+a,f+u,m+y,D+b).normalize(),s[2].setComponents(c+o,f+p,m+w,D+L).normalize(),s[3].setComponents(c-o,f-p,m-w,D-L).normalize(),i)s[4].setComponents(l,d,g,T).normalize(),s[5].setComponents(c-l,f-d,m-g,D-T).normalize();else if(s[4].setComponents(c-l,f-d,m-g,D-T).normalize(),e===mi)s[5].setComponents(c+l,f+d,m+g,D+T).normalize();else if(e===ar)s[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=lp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Iu=new sn,Ho=class n{constructor(){this.coordinateSystem=mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ds),i[s].setFromProjectionMatrix(Iu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ds),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var dr=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new W,Wo=new W,Lu=new sn,Hr=new Cs,_o=new Fi,Uc=new W,Du=new W,sa=class extends On{constructor(t=new Bn,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Wo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Vo.distanceTo(Wo);t.setAttribute("lineDistance",new _n(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Lu.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(Lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),y=Math.min(u.count,a.start+a.count);for(let w=f,g=y-1;w<g;w+=c){let m=u.getX(w),b=u.getX(w+1),L=xo(this,t,Hr,l,m,b,w);L&&e.push(L)}if(this.isLineLoop){let w=u.getX(y-1),g=u.getX(f),m=xo(this,t,Hr,l,w,g,y-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let w=f,g=y-1;w<g;w+=c){let m=xo(this,t,Hr,l,w,w+1,w);m&&e.push(m)}if(this.isLineLoop){let w=xo(this,t,Hr,l,y-1,f,y-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Wo.fromBufferAttribute(o,r),e.distanceSqToSegment(Vo,Wo,Uc,Du)>i)return;Uc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uc);if(!(c<t.near||c>t.far))return{distance:c,point:Du.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var fr=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nu=new sn,Xc=new Cs,yo=new Fi,vo=new W,ra=class extends On{constructor(t=new Bn,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;Nu.copy(s).invert(),Xc.copy(t.ray).applyMatrix4(Nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let y=d,w=f;y<w;y++){let g=c.getX(y);vo.fromBufferAttribute(p,g),Fu(vo,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let y=d,w=f;y<w;y++)vo.fromBufferAttribute(p,y),Fu(vo,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(n,t,e,i,s,r,a){let o=Xc.distanceSqToPoint(n);if(o<e){let l=new W;Xc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var aa=class extends jn{constructor(t=[],e=Us,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oa=class extends jn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends jn{constructor(t,e,i=Ai,s,r,a,o=Un,l=Un,c,u=Zi,p=1){if(u!==Zi&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends $i{constructor(t,e=Ai,i=Us,s,r,a=Un,o=Un,l,c=Zi){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},gi=class n extends Bn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;y("z","y","x",-1,-1,i,e,t,a,r,0),y("z","y","x",1,-1,i,e,-t,a,r,1),y("x","z","y",1,1,t,i,e,s,a,2),y("x","z","y",1,-1,t,i,-e,s,a,3),y("x","y","z",1,-1,t,e,i,s,r,4),y("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(p,2));function y(w,g,m,b,L,T,D,I,v,E,G){let F=T/v,Y=D/E,J=T/2,mt=D/2,z=I/2,ut=v+1,ft=E+1,ht=0,yt=0,_t=new W;for(let gt=0;gt<ft;gt++){let Pt=gt*Y-mt;for(let Jt=0;Jt<ut;Jt++){let Ce=Jt*F-J;_t[w]=Ce*b,_t[g]=Pt*L,_t[m]=z,c.push(_t.x,_t.y,_t.z),_t[w]=0,_t[g]=0,_t[m]=I>0?1:-1,u.push(_t.x,_t.y,_t.z),p.push(Jt/v),p.push(1-gt/E),ht+=1}}for(let gt=0;gt<E;gt++)for(let Pt=0;Pt<v;Pt++){let Jt=d+Pt+ut*gt,Ce=d+Pt+ut*(gt+1),Et=d+(Pt+1)+ut*(gt+1),jt=d+(Pt+1)+ut*gt;l.push(Jt,Ce,jt),l.push(Ce,Et,jt),yt+=6}o.addGroup(f,yt,G),f+=yt,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ha=class n extends Bn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,p=Math.PI/2*t,d=e,f=2*p+d,y=i*2+r,w=s+1,g=new W,m=new W;for(let b=0;b<=y;b++){let L=0,T=0,D=0,I=0;if(b<=i){let G=b/i,F=G*Math.PI/2;T=-u-t*Math.cos(F),D=t*Math.sin(F),I=-t*Math.cos(F),L=G*p}else if(b<=i+r){let G=(b-i)/r;T=-u+G*e,D=t,I=0,L=p+G*d}else{let G=(b-i-r)/i,F=G*Math.PI/2;T=u+t*Math.sin(F),D=t*Math.cos(F),I=t*Math.sin(F),L=p+d+G*p}let v=Math.max(0,Math.min(1,L/f)),E=0;b===0?E=.5/s:b===y&&(E=-.5/s);for(let G=0;G<=s;G++){let F=G/s,Y=F*Math.PI*2,J=Math.sin(Y),mt=Math.cos(Y);m.x=-D*mt,m.y=T,m.z=D*J,o.push(m.x,m.y,m.z),g.set(-D*mt,I,D*J),g.normalize(),l.push(g.x,g.y,g.z),c.push(F+E,v)}if(b>0){let G=(b-1)*w;for(let F=0;F<s;F++){let Y=G+F,J=G+F+1,mt=b*w+F,z=b*w+F+1;a.push(Y,J,mt),a.push(J,z,mt)}}}this.setIndex(a),this.setAttribute("position",new _n(o,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ua=class n extends Bn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new W,u=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=i+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new _n(a,3)),this.setAttribute("normal",new _n(o,3)),this.setAttribute("uv",new _n(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ps=class n extends Bn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],y=0,w=[],g=i/2,m=0;b(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(f,2));function b(){let T=new W,D=new W,I=0,v=(e-t)/i;for(let E=0;E<=r;E++){let G=[],F=E/r,Y=F*(e-t)+t;for(let J=0;J<=s;J++){let mt=J/s,z=mt*l+o,ut=Math.sin(z),ft=Math.cos(z);D.x=Y*ut,D.y=-F*i+g,D.z=Y*ft,p.push(D.x,D.y,D.z),T.set(ut,v,ft).normalize(),d.push(T.x,T.y,T.z),f.push(mt,1-F),G.push(y++)}w.push(G)}for(let E=0;E<s;E++)for(let G=0;G<r;G++){let F=w[G][E],Y=w[G+1][E],J=w[G+1][E+1],mt=w[G][E+1];(t>0||G!==0)&&(u.push(F,Y,mt),I+=3),(e>0||G!==r-1)&&(u.push(Y,J,mt),I+=3)}c.addGroup(m,I,0),m+=I}function L(T){let D=y,I=new me,v=new W,E=0,G=T===!0?t:e,F=T===!0?1:-1;for(let J=1;J<=s;J++)p.push(0,g*F,0),d.push(0,F,0),f.push(.5,.5),y++;let Y=y;for(let J=0;J<=s;J++){let z=J/s*l+o,ut=Math.cos(z),ft=Math.sin(z);v.x=G*ft,v.y=g*F,v.z=G*ut,p.push(v.x,v.y,v.z),d.push(0,F,0),I.x=ut*.5+.5,I.y=ft*.5*F+.5,f.push(I.x,I.y),y++}for(let J=0;J<s;J++){let mt=D+J,z=Y+J;T===!0?u.push(z,z+1,mt):u.push(z+1,z,mt),E+=3}c.addGroup(m,E,T===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new me:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new W,s=[],r=[],a=[],o=new W,l=new sn;for(let f=0;f<=t;f++){let y=f/t;s[f]=this.getTangentAt(y,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,y))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],f*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},pr=class extends ci{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new me){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xo=class extends pr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Uu=new W,Ou=new W,Oc=new Th,Bc=new Th,kc=new Th,qo=class extends ci{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new W){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ou.subVectors(s[0],s[1]).add(s[0]),c=Ou);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(p),f),w=Math.pow(p.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);w<1e-4&&(w=1),y<1e-4&&(y=w),g<1e-4&&(g=w),Oc.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,y,w,g),Bc.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,y,w,g),kc.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,y,w,g)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Bc.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),kc.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return i.set(Oc.calc(l),Bc.calc(l),kc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function cp(n,t){let e=1-n;return e*e*t}function hp(n,t){return 2*(1-n)*n*t}function up(n,t){return n*n*t}function Xr(n,t,e,i){return cp(n,t)+hp(n,e)+up(n,i)}function dp(n,t){let e=1-n;return e*e*e*t}function fp(n,t){let e=1-n;return 3*e*e*n*t}function pp(n,t){return 3*(1-n)*n*n*t}function mp(n,t){return n*n*n*t}function qr(n,t,e,i,s){return dp(n,t)+fp(n,e)+pp(n,i)+mp(n,s)}var da=class extends ci{constructor(t=new me,e=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new me){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends ci{constructor(t=new W,e=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y),qr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends ci{constructor(t=new me,e=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new me){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new me){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends ci{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends ci{constructor(t=new me,e=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new me){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(t,s.x,r.x,a.x),Xr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends ci{constructor(t=new W,e=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(t,s.x,r.x,a.x),Xr(t,s.y,r.y,a.y),Xr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new me){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Bu(o,l.x,c.x,u.x,p.x),Bu(o,l.y,c.y,u.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new me().fromArray(s))}return this}},ku=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:qo,CubicBezierCurve:da,CubicBezierCurve3:Yo,EllipseCurve:pr,LineCurve:fa,LineCurve3:Zo,QuadraticBezierCurve:pa,QuadraticBezierCurve3:$o,SplineCurve:ma}),Ko=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ku[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ga=class extends Ko{constructor(t){super(),this.type="Path",this.currentPoint=new me,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fa(this.currentPoint.clone(),new me(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new pa(this.currentPoint.clone(),new me(t,e),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new da(this.currentPoint.clone(),new me(t,e),new me(i,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ma(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new pr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mr=class extends ga{constructor(t){super(t),this.uuid=Sr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ga().fromJSON(s))}return this}};function gp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Od(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Mp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=n[d],y=n[d+1];f<o&&(o=f),y<l&&(l=y),f>u&&(u=f),y>p&&(p=y)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return _a(r,a,e,o,l,c,0),a}function Od(n,t,e,i,s){let r;if(s===Lp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=zu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=zu(a/i|0,n[a],n[a+1],r);return r&&gr(r,r.next)&&(ya(r),r=r.next),r}function Is(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(gr(e,e.next)||Rn(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _a(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Ep(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?xp(n,i,s,r):_p(n)){t.push(l.i,n.i,c.i),ya(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=yp(Is(n),t),_a(n,t,e,i,s,r,2)):a===2&&vp(n,t,e,i,s,r):_a(Is(n),t,e,i,s,r,1);break}}}function _p(n){let t=n.prev,e=n,i=n.next;if(Rn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),y=i.next;for(;y!==t;){if(y.x>=u&&y.x<=d&&y.y>=p&&y.y<=f&&Vr(s,o,r,l,a,c,y.x,y.y)&&Rn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function xp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Rn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),y=Math.min(u,p,d),w=Math.max(o,l,c),g=Math.max(u,p,d),m=qc(f,y,t,e,i),b=qc(w,g,t,e,i),L=n.prevZ,T=n.nextZ;for(;L&&L.z>=m&&T&&T.z<=b;){if(L.x>=f&&L.x<=w&&L.y>=y&&L.y<=g&&L!==s&&L!==a&&Vr(o,u,l,p,c,d,L.x,L.y)&&Rn(L.prev,L,L.next)>=0||(L=L.prevZ,T.x>=f&&T.x<=w&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vr(o,u,l,p,c,d,T.x,T.y)&&Rn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;L&&L.z>=m;){if(L.x>=f&&L.x<=w&&L.y>=y&&L.y<=g&&L!==s&&L!==a&&Vr(o,u,l,p,c,d,L.x,L.y)&&Rn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;T&&T.z<=b;){if(T.x>=f&&T.x<=w&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vr(o,u,l,p,c,d,T.x,T.y)&&Rn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function yp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!gr(i,s)&&kd(i,e,e.next,s)&&xa(i,s)&&xa(s,i)&&(t.push(i.i,e.i,s.i),ya(e),ya(e.next),e=n=s),e=e.next}while(e!==n);return Is(e)}function vp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cp(a,o)){let l=zd(a,o);a=Is(a,a.next),l=Is(l,l.next),_a(a,t,e,i,s,r,0),_a(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Mp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Od(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Rp(c))}s.sort(Sp);for(let r=0;r<s.length;r++)e=bp(s[r],e);return e}function Sp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function bp(n,t){let e=wp(n,t);if(!e)return t;let i=zd(e,n);return Is(i,i.next),Is(e,e.next)}function wp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(gr(n,e))return e;do{if(gr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Bd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let p=Math.abs(s-e.y)/(i-e.x);xa(e,n)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&Tp(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function Tp(n,t){return Rn(n.prev,n,t.prev)<0&&Rn(t.next,n,n.next)<0}function Ep(n,t,e,i){let s=n;do s.z===0&&(s.z=qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ap(s)}function Ap(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Rp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Vr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Bd(n,t,e,i,s,r,a,o)}function Cp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Pp(n,t)&&(xa(n,t)&&xa(t,n)&&Ip(n,t)&&(Rn(n.prev,n,t.prev)||Rn(n,t.prev,t))||gr(n,t)&&Rn(n.prev,n,n.next)>0&&Rn(t.prev,t,t.next)>0)}function Rn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function gr(n,t){return n.x===t.x&&n.y===t.y}function kd(n,t,e,i){let s=So(Rn(n,t,e)),r=So(Rn(n,t,i)),a=So(Rn(e,i,n)),o=So(Rn(e,i,t));return!!(s!==r&&a!==o||s===0&&Mo(n,e,t)||r===0&&Mo(n,i,t)||a===0&&Mo(e,n,i)||o===0&&Mo(e,t,i))}function Mo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function So(n){return n>0?1:n<0?-1:0}function Pp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xa(n,t){return Rn(n.prev,n,n.next)<0?Rn(n,t,n.next)>=0&&Rn(n,n.prev,t)>=0:Rn(n,t,n.prev)<0||Rn(n,n.next,t)<0}function Ip(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zd(n,t){let e=Yc(n.i,n.x,n.y),i=Yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zu(n,t,e,i){let s=Yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ya(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Zc=class{static triangulate(t,e,i=2){return gp(t,e,i)}},sr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Gu(t),Hu(i,t);let a=t.length;e.forEach(Gu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hu(i,e[l]);let o=Zc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Gu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var fs=class n extends Bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],y=[],w=[],g=[];for(let m=0;m<u;m++){let b=m*d-a;for(let L=0;L<c;L++){let T=L*p-r;y.push(T,-b,0),w.push(0,0,1),g.push(L/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let L=b+c*m,T=b+c*(m+1),D=b+1+c*(m+1),I=b+1+c*m;f.push(L,T,I),f.push(T,D,I)}this.setIndex(f),this.setAttribute("position",new _n(y,3)),this.setAttribute("normal",new _n(w,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var va=class n extends Bn{constructor(t=new mr([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(r,3)),this.setAttribute("uv",new _n(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,y=d.holes;sr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=y.length;g<m;g++){let b=y[g];sr.isClockWise(b)===!0&&(y[g]=b.reverse())}let w=sr.triangulateShape(f,y);for(let g=0,m=y.length;g<m;g++){let b=y[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=w.length;g<m;g++){let b=w[g],L=b[0]+p,T=b[1]+p,D=b[2]+p;i.push(L,T,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Dp(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Dp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ls=class n extends Bn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new W,d=new W,f=[],y=[],w=[],g=[];for(let m=0;m<=i;m++){let b=[],L=m/i,T=a+L*o,D=t*Math.cos(T),I=Math.sqrt(t*t-D*D),v=0;m===0&&a===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let G=E/e,F=s+G*r;p.x=-I*Math.cos(F),p.y=D,p.z=I*Math.sin(F),y.push(p.x,p.y,p.z),d.copy(p).normalize(),w.push(d.x,d.y,d.z),g.push(G+v,1-L),b.push(c++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let L=u[m][b+1],T=u[m][b],D=u[m+1][b],I=u[m+1][b+1];(m!==0||a>0)&&f.push(L,T,I),(m!==i-1||l<Math.PI)&&f.push(T,D,I)}this.setIndex(f),this.setAttribute("position",new _n(y,3)),this.setAttribute("normal",new _n(w,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Vu(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Vu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Wn(n){let t={};for(let e=0;e<n.length;e++){let i=Bs(n[e]);for(let s in i)t[s]=i[s]}return t}function Vu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Np(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nn.workingColorSpace}var Gd={clone:Bs,merge:Wn},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oi=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(s.value);break;case"v2":this.uniforms[i].value=new me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new En().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jo=class extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jo=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function bo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ps=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ps{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,o=2*e-i;break;case Wc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*i-e;break;case Wc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,y=(i-e)/(s-e),w=y*y,g=w*y,m=-d*g+2*d*w-d*y,b=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*y+1,L=(-1-f)*g+(1.5+f)*w+.5*y,T=f*g-f*w;for(let D=0;D!==o;++D)r[D]=m*a[u+D]+b*a[c+D]+L*a[l+D]+T*a[p+D];return r}},el=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},nl=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends ps{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let y=(i-e)/(s-e),w=1-y;for(let g=0;g!==o;++g)r[g]=a[c+g]*w+a[l+g]*y;return r}let d=o*2,f=t-1;for(let y=0;y!==o;++y){let w=a[c+y],g=a[l+y],m=f*d+y*2,b=p[m],L=p[m+1],T=t*d+y*2,D=u[T],I=u[T+1],v=Bp(i,e,b,D,s);r[y]=Hd(v,w,L,I,g)}return r}};function Hd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Op(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Bp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Hd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Op(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),bo(t.settings)&&(i.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Oo:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break;case Gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return Eo;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;bo(this.settings)&&(Wu(this.settings.inTangents,t),Wu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;bo(this.settings)&&(Xu(this.settings.inTangents,t),Xu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&zf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,d=p-i,f=p+i;for(let y=0;y!==i;++y){let w=e[p+y];if(w!==e[d+y]||w!==e[f+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,bo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Xu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Oo;var ms=class extends hi{constructor(t,e,i){super(t,e,i)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Yr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="number";var al=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ma=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends hi{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Yr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],y=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vd=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends On{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new He(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ba=class extends Sa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},zc=new sn,qu=new W,Yu=new W,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(zc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ar||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wo=new W,To=new oi,Ii=new W,wa=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wo,To,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(wo,To,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new W,Zu=new me,$u=new me,$n=class extends wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,$u),e.subVectors($u,Zu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ta=class extends wa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$c=class extends hl{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new $c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var er=-90,nr=1,_r=class extends On{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $n(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new $n(er,nr,t,e);r.layers=this.layers,this.add(r);let a=new $n(er,nr,t,e);a.layers=this.layers,this.add(a);let o=new $n(er,nr,t,e);o.layers=this.layers,this.add(o);let l=new $n(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new $n(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},ul=class extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ah="\\[\\]\\.:\\/",kp=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",zp="[^"+Ah.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",Rh),Hp=/(WCOD+)?/.source.replace("WCOD",zp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),Wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Xp=new RegExp("^"+Gp+Hp+Vp+Wp+"$"),qp=["material","materials","bones","map"],Kc=class{constructor(t,e,i){let s=i||bn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},bn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kp,"")}static parseTrackName(t){let e=Xp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=Kc;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var Ku=new sn,Aa=class{constructor(t,e,i=0,s=1/0){this.ray=new Cs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,i=[]){return jc(t,this,i,e),i.sort(ju),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)jc(t[s],this,i,e);return i.sort(ju),i}};function ju(n,t){return n.distance-t.distance}function jc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)jc(r[a],t,e,!0)}}var Nh=class Nh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Nh.prototype.isMatrix2=!0;var Jc=Nh;function Ch(n,t,e,i){let s=Yp(i);switch(e){case _h:return n*t;case yl:return n*t/s.components*s.byteLength;case vl:return n*t/s.components*s.byteLength;case xs:return n*t*2/s.components*s.byteLength;case Ml:return n*t*2/s.components*s.byteLength;case xh:return n*t*3/s.components*s.byteLength;case Ci:return n*t*4/s.components*s.byteLength;case Sl:return n*t*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:case El:return Math.max(n,16)*Math.max(t,8)/4;case bl:case Tl:return Math.max(n,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Na:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Zl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fa:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yp(n){switch(n){case ti:case fh:return{byteLength:1,components:1};case Mr:case ph:case Ri:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Ai:case gl:case xi:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function df(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $p(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let u=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,u);else{p.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<p.length;f++){let y=p[d],w=p[f];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++d,p[d]=w)}p.length=d+1;for(let f=0,y=p.length;f<y;f++){let w=p[f];n.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`uniform sampler2D dfgLUT;
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
}`,Zm=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
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
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform float backgroundBlurriness;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:ym,defaultnormal_vertex:vm,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:wm,colorspace_fragment:Tm,colorspace_pars_fragment:Em,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Km,lightprobes_pars_fragment:jm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:S0,opaque_fragment:b0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:E0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:U0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:z0,tonemapping_fragment:G0,tonemapping_pars_fragment:H0,transmission_fragment:V0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:$0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:J0,cube_vert:Q0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distance_vert:ig,distance_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:vg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:bg,points_frag:wg,shadow_vert:Tg,shadow_frag:Eg,sprite_vert:Ag,sprite_frag:Rg},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},zi={basic:{uniforms:Wn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wn([oe.points,oe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wn([oe.common,oe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wn([oe.sprite,oe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Wn([oe.common,oe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Wn([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};zi.physical={uniforms:Wn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var tc={r:0,b:0,g:0},Cg=new sn,ff=new Ge;ff.set(-1,0,0,0,1,0,0,0,1);function Pg(n,t,e,i,s,r){let a=new He(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){let T=b.backgroundBlurriness>0;L=t.get(L,T)}return L}function y(b){let L=!1,T=f(b);T===null?g(a,o):T&&T.isColor&&(g(T,1),L=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,L){let T=f(L);T&&T.isCubeTexture?(c===void 0&&(c=new In(new gi(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Bs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ff),c.material.toneMapped=nn.getTransfer(T.colorSpace)!==un,(u!==T||p!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new In(new fs(2,2),new Oi({name:"BackgroundMaterial",uniforms:Bs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=nn.getTransfer(T.colorSpace)!==un,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,p=T.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,L){b.getRGB(tc,Eh(n)),e.buffers.color.setClear(tc.r,tc.g,tc.b,L,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,L=1){a.set(b),o=L,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:y,addToRenderList:w,dispose:m}}function Ig(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(Y,J,mt,z,ut){let ft=!1,ht=p(Y,z,mt,J);r!==ht&&(r=ht,c(r.object)),ft=f(Y,z,mt,ut),ft&&y(Y,z,mt,ut),ut!==null&&t.update(ut,n.ELEMENT_ARRAY_BUFFER),(ft||a)&&(a=!1,T(Y,J,mt,z),ut!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function l(){return n.createVertexArray()}function c(Y){return n.bindVertexArray(Y)}function u(Y){return n.deleteVertexArray(Y)}function p(Y,J,mt,z){let ut=z.wireframe===!0,ft=i[J.id];ft===void 0&&(ft={},i[J.id]=ft);let ht=Y.isInstancedMesh===!0?Y.id:0,yt=ft[ht];yt===void 0&&(yt={},ft[ht]=yt);let _t=yt[mt.id];_t===void 0&&(_t={},yt[mt.id]=_t);let gt=_t[ut];return gt===void 0&&(gt=d(l()),_t[ut]=gt),gt}function d(Y){let J=[],mt=[],z=[];for(let ut=0;ut<e;ut++)J[ut]=0,mt[ut]=0,z[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:mt,attributeDivisors:z,object:Y,attributes:{},index:null}}function f(Y,J,mt,z){let ut=r.attributes,ft=J.attributes,ht=0,yt=mt.getAttributes();for(let _t in yt)if(yt[_t].location>=0){let Pt=ut[_t],Jt=ft[_t];if(Jt===void 0&&(_t==="instanceMatrix"&&Y.instanceMatrix&&(Jt=Y.instanceMatrix),_t==="instanceColor"&&Y.instanceColor&&(Jt=Y.instanceColor)),Pt===void 0||Pt.attribute!==Jt||Jt&&Pt.data!==Jt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==z}function y(Y,J,mt,z){let ut={},ft=J.attributes,ht=0,yt=mt.getAttributes();for(let _t in yt)if(yt[_t].location>=0){let Pt=ft[_t];Pt===void 0&&(_t==="instanceMatrix"&&Y.instanceMatrix&&(Pt=Y.instanceMatrix),_t==="instanceColor"&&Y.instanceColor&&(Pt=Y.instanceColor));let Jt={};Jt.attribute=Pt,Pt&&Pt.data&&(Jt.data=Pt.data),ut[_t]=Jt,ht++}r.attributes=ut,r.attributesNum=ht,r.index=z}function w(){let Y=r.newAttributes;for(let J=0,mt=Y.length;J<mt;J++)Y[J]=0}function g(Y){m(Y,0)}function m(Y,J){let mt=r.newAttributes,z=r.enabledAttributes,ut=r.attributeDivisors;mt[Y]=1,z[Y]===0&&(n.enableVertexAttribArray(Y),z[Y]=1),ut[Y]!==J&&(n.vertexAttribDivisor(Y,J),ut[Y]=J)}function b(){let Y=r.newAttributes,J=r.enabledAttributes;for(let mt=0,z=J.length;mt<z;mt++)J[mt]!==Y[mt]&&(n.disableVertexAttribArray(mt),J[mt]=0)}function L(Y,J,mt,z,ut,ft,ht){ht===!0?n.vertexAttribIPointer(Y,J,mt,ut,ft):n.vertexAttribPointer(Y,J,mt,z,ut,ft)}function T(Y,J,mt,z){w();let ut=z.attributes,ft=mt.getAttributes(),ht=J.defaultAttributeValues;for(let yt in ft){let _t=ft[yt];if(_t.location>=0){let gt=ut[yt];if(gt===void 0&&(yt==="instanceMatrix"&&Y.instanceMatrix&&(gt=Y.instanceMatrix),yt==="instanceColor"&&Y.instanceColor&&(gt=Y.instanceColor)),gt!==void 0){let Pt=gt.normalized,Jt=gt.itemSize,Ce=t.get(gt);if(Ce===void 0)continue;let Et=Ce.buffer,jt=Ce.type,it=Ce.bytesPerElement,le=jt===n.INT||jt===n.UNSIGNED_INT||gt.gpuType===gl;if(gt.isInterleavedBufferAttribute){let j=gt.data,Ct=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Qt=gt.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let Re=0;Re<_t.locationSize;Re++)m(_t.location+Re,j.meshPerAttribute);Y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Re=0;Re<_t.locationSize;Re++)g(_t.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Re=0;Re<_t.locationSize;Re++)L(_t.location+Re,Jt/_t.locationSize,jt,Pt,Ct*it,(Qt+Jt/_t.locationSize*Re)*it,le)}else{if(gt.isInstancedBufferAttribute){for(let j=0;j<_t.locationSize;j++)m(_t.location+j,gt.meshPerAttribute);Y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let j=0;j<_t.locationSize;j++)g(_t.location+j);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let j=0;j<_t.locationSize;j++)L(_t.location+j,Jt/_t.locationSize,jt,Pt,Jt*it,Jt/_t.locationSize*j*it,le)}}else if(ht!==void 0){let Pt=ht[yt];if(Pt!==void 0)switch(Pt.length){case 2:n.vertexAttrib2fv(_t.location,Pt);break;case 3:n.vertexAttrib3fv(_t.location,Pt);break;case 4:n.vertexAttrib4fv(_t.location,Pt);break;default:n.vertexAttrib1fv(_t.location,Pt)}}}}b()}function D(){G();for(let Y in i){let J=i[Y];for(let mt in J){let z=J[mt];for(let ut in z){let ft=z[ut];for(let ht in ft)u(ft[ht].object),delete ft[ht];delete z[ut]}}delete i[Y]}}function I(Y){if(i[Y.id]===void 0)return;let J=i[Y.id];for(let mt in J){let z=J[mt];for(let ut in z){let ft=z[ut];for(let ht in ft)u(ft[ht].object),delete ft[ht];delete z[ut]}}delete i[Y.id]}function v(Y){for(let J in i){let mt=i[J];for(let z in mt){let ut=mt[z];if(ut[Y.id]===void 0)continue;let ft=ut[Y.id];for(let ht in ft)u(ft[ht].object),delete ft[ht];delete ut[Y.id]}}}function E(Y){for(let J in i){let mt=i[J],z=Y.isInstancedMesh===!0?Y.id:0,ut=mt[z];if(ut!==void 0){for(let ft in ut){let ht=ut[ft];for(let yt in ht)u(ht[yt].object),delete ht[yt];delete ut[ft]}delete mt[z],Object.keys(mt).length===0&&delete i[J]}}}function G(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:G,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:w,enableAttribute:g,disableUnusedAttributes:b}}function Lg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Ci&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let E=v===Ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==ti&&v!==xi&&!E&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:T,maxSamples:D,samples:I}}function Ng(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ti,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||i!==0||s;return s=d,i=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let y=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,L=b*4,T=m.clippingState||null;l.value=T,T=u(y,d,L,f);for(let D=0;D!==L;++D)T[D]=e[D];m.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(p,d,f,y){let w=p!==null?p.length:0,g=null;if(w!==0){if(g=l.value,y!==!0||g===null){let m=f+w*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let L=0,T=f;L!==w;++L,T+=4)a.copy(p[L]).applyMatrix4(b,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Ba=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Ns});r.uniforms.tEquirect.value=e;let a=new In(s,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Kn),new _r(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Wd=256,Fg=3,Ug=20,pf=256,mf=16,Og=3,Bg=new W,kg=new He,nc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _r(1,10,null),this._boxMesh=new In(new gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Bg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,y=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(kg));let g=new _r(i,s,u);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=y,t.background=w,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wd,Fd(t))}_fromTexture(t,e){t.mapping===Us||t.mapping===vr?this._setSize(t.image.length===0?Wd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Xd(t,!1,!1),i=Math.log2(t)-Fg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Us||t.mapping===vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=zg(),this._integrationMaterial=Gg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/mf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Og)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(pf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Hg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Xd(n,t,e){return new Ba(n,{minFilter:Ki,generateMipmaps:t,type:Ri,colorSpace:Zr,depthBuffer:e})}function ka(n,t,e){return new Oi({name:n,uniforms:t,vertexShader:Ze.cube_vert,fragmentShader:e,side:Jn,blending:Ns,depthTest:!1,depthWrite:!1})}function zg(){return ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pf}u

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
	`)}function Gg(){return ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mf}},`

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
	`)}function Hg(){return ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ug}
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
	`)}function qd(){return ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yd(){return ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===fl||f===pl)if(t.has(d)){let y=t.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let w=new Ba(y.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",c),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,y=f===fl||f===pl,w=f===Us||f===vr;if(y||w){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new nc(n)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return y&&b&&b.height>0||w&&b&&l(b)?(i===null&&(i=new nc(n)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===fl?d.mapping=Us:f===pl&&(d.mapping=vr),d}function l(d){let f=0,y=6;for(let w=0;w<y;w++)d[w]!==void 0&&f++;return f===y}function c(d){let f=d.target;f.removeEventListener("dispose",c);let y=t.get(f);y!==void 0&&(t.delete(f),y.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Wg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Wr("WebGLRenderer: "+i+" extension not supported."),s}}}function Xg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){l(y.target)}function l(y){y.index!==null&&t.remove(y.index);for(let g in y.attributes)t.remove(y.attributes[g]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let w=r.get(y);w&&(t.remove(w),r.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function c(y,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function u(y){let w=y.attributes;for(let g in w)t.update(w[g],n.ARRAY_BUFFER)}function p(y){let w=y.index,g=y.attributes.position,m=0;if(g===void 0)return;let b=w!==null?w.array.length:g.array.length/3-1,L=g.count>=65535?ea:ta,T=new L(Math.ceil(b/3)*6,1),D=T.array;if(w!==null){let v=w.array;m=w.version;for(let E=0,G=0;E<b;E+=3){let F=v[E+0],Y=v[E+1],J=v[E+2];D[G++]=F,D[G++]=Y,D[G++]=Y,D[G++]=J,D[G++]=J,D[G++]=F}}else{m=g.version;for(let v=0,E=0;v<b;v+=3){let G=v+0,F=v+1,Y=v+2;D[E++]=G,D[E++]=F,D[E++]=F,D[E++]=Y,D[E++]=Y,D[E++]=G}}T.version=m;let I=r.get(y);I&&t.remove(I),r.set(y,T)}function d(y){let w=r.get(y);if(w){let g=y.index;g!==null&&w.version<g.version&&p(y)}else p(y);return r.get(y)}function f(){for(let y in s){let w=s[y].deref();w!==void 0&&l(w)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function qg(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function c(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,p*a,f),e.update(d,i,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,f);let w=0;for(let g=0;g<f;g++)w+=d[g];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Yg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zg(n,t,e){let i=new WeakMap,s=new En;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==p){let G=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",G)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],L=0;f===!0&&(L=1),y===!0&&(L=2),w===!0&&(L=3);let T=o.attributes.position.count*L,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let I=new Float32Array(T*D*4*p),v=new jr(I,T,D,p);v.type=xi,v.needsUpdate=!0;let E=L*4;for(let F=0;F<p;F++){let Y=g[F],J=m[F],mt=b[F],z=T*D*4*F;for(let ut=0;ut<Y.count;ut++){let ft=ut*E;f===!0&&(s.fromBufferAttribute(Y,ut),I[z+ft+0]=s.x,I[z+ft+1]=s.y,I[z+ft+2]=s.z,I[z+ft+3]=0),y===!0&&(s.fromBufferAttribute(J,ut),I[z+ft+4]=s.x,I[z+ft+5]=s.y,I[z+ft+6]=s.z,I[z+ft+7]=0),w===!0&&(s.fromBufferAttribute(mt,ut),I[z+ft+8]=s.x,I[z+ft+9]=s.y,I[z+ft+10]=s.z,I[z+ft+11]=mt.itemSize===4?s.w:1)}}d={count:p,texture:v,size:new me(T,D)},i.set(o,d),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let w=0;w<c.length;w++)f+=c[w];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $g(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Kg={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function jg(n,t,e,i,s,r){let a=new li(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Bn;u.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _n([0,2,0,0,2,0],2));let p=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new In(u,p),f=new Ta(-1,1,1,-1,0,1),y=null,w=null,g=!1,m,b=null,L=[],T=!1;this.setSize=function(D,I){a.setSize(D,I),o!==null&&o.setSize(D,I),l!==null&&l.setSize(D,I);for(let v=0;v<L.length;v++){let E=L[v];E.setSize&&E.setSize(D,I)}},this.setEffects=function(D){L=D,T=L.length>0&&L[0].isRenderPass===!0;let I=a.width,v=a.height;L.length>0&&o===null&&(o=new li(I,v,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),l=new li(I,v,{type:Ri,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&L.some(G=>G.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new $i(I,v),r===!0&&(c.format=ji,c.type=Os)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let G=0;G<L.length;G++){let F=L[G];F.setSize&&F.setSize(I,v),E&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(D,I){if(g||D.toneMapping===Bi&&L.length===0)return!1;if(b=I,I!==null){let v=I.width,E=I.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return T===!1&&D.setRenderTarget(a),m=D.toneMapping,D.toneMapping=Bi,!0},this.hasRenderPass=function(){return T},this.end=function(D,I){D.toneMapping=m,g=!0;let v=a,E=o;for(let G=0;G<L.length;G++){let F=L[G];F.enabled!==!1&&(F.render(D,E,v,I),F.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(y!==D.outputColorSpace||w!==D.toneMapping){y=D.outputColorSpace,w=D.toneMapping,p.defines={},nn.getTransfer(y)===un&&(p.defines.SRGB_TRANSFER="");let G=Kg[w];G&&(p.defines[G]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,D.setRenderTarget(b),D.render(d,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var gf=new jn,_f=new $i(1,1),xf=new la(1),yf=new jr,vf=new Go,Mf=new aa,Zd=[],$d=[],Kd=new Float32Array(16),jd=new Float32Array(9),Jd=new Float32Array(4);function wr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function sc(n,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2fv(this.addr,t),Nn(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dn(e,t))return;n.uniform3fv(this.addr,t),Nn(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4fv(this.addr,t),Nn(e,t)}}function n_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),Nn(e,i)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),Nn(e,i)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Nn(e,t)}else{if(Dn(e,i))return;Kd.set(i),n.uniformMatrix4fv(this.addr,!1,Kd),Nn(e,i)}}function r_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2iv(this.addr,t),Nn(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3iv(this.addr,t),Nn(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4iv(this.addr,t),Nn(e,t)}}function c_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;n.uniform2uiv(this.addr,t),Nn(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;n.uniform3uiv(this.addr,t),Nn(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;n.uniform4uiv(this.addr,t),Nn(e,t)}}function rc(n){return n.version===0&&(n.compareFunction=Mh,n.needsUpdate=!0),n}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=rc(_f):r=gf,e.setTexture2D(t||r,s)}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vf,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=rc(xf):r=Mf,e.setTextureCube(t||r,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yf,s)}function __(n){switch(n){case 5126:return Jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(n,t){n.uniform1fv(this.addr,t)}function y_(n,t){let e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function v_(n,t){let e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function M_(n,t){let e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function S_(n,t){let e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b_(n,t){let e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w_(n,t){let e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function T_(n,t){n.uniform1iv(this.addr,t)}function E_(n,t){n.uniform2iv(this.addr,t)}function A_(n,t){n.uniform3iv(this.addr,t)}function R_(n,t){n.uniform4iv(this.addr,t)}function C_(n,t){n.uniform1uiv(this.addr,t)}function P_(n,t){n.uniform2uiv(this.addr,t)}function I_(n,t){n.uniform3uiv(this.addr,t)}function L_(n,t){n.uniform4uiv(this.addr,t)}function D_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=rc(_f):a=gf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vf,r[a])}function F_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=rc(xf):a=Mf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function U_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);Dn(i,r)||(n.uniform1iv(this.addr,r),Nn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yf,r[a])}function O_(n){switch(n){case 5126:return x_;case 35664:return y_;case 35665:return v_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return U_}}var Oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=__(e.type)}},Bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Qd(n,t){n.seq.push(t),n.map[t.id]=t}function B_(n,t,e){let i=n.name,s=i.length;for(Fh.lastIndex=0;;){let r=Fh.exec(i),a=Fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qd(e,c===void 0?new Oh(o,n,t):new Bh(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new kh(o),Qd(e,p)),e=p}}}var br=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);B_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function tf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var k_=37297,z_=0;function G_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var ef=new Ge;function H_(n){nn._getMatrix(ef,nn.workingColorSpace,n);let t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(nn.getTransfer(n)){case $r:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+G_(n.getShaderSource(t),o)}else return r}function V_(n,t){let e=H_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[Ra]:"ACESFilmic",[hh]:"AgX",[uh]:"Neutral",[ch]:"Custom"};function X_(n,t){let e=W_[t];return e===void 0?(Le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new W;function q_(){nn.getLuminanceCoefficients(ec);let n=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function Z_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Oa(n){return n!==""}function sf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function rf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(K_,j_)}function j_(n,t){let e=Ze[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zh(e)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(n){return n.replace(J_,Q_)}function Q_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var tx={[Ds]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function ex(n){return tx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[vr]:"ENVMAP_MODE_REFRACTION"};function ix(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[rh]:"ENVMAP_BLENDING_MULTIPLY",[yd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function rx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sx[n.combine]||"ENVMAP_BLENDING_NONE"}function ax(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ex(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ix(e),p=rx(e),d=Y_(e),f=Z_(r),y=s.createProgram(),w,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Oa).join(`
`),w.length>0&&(w+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Oa).join(`
`),g.length>0&&(g+=`
`)):(w=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),g=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Ze.tonemapping_pars_fragment:"",e.toneMapping!==Bi?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oa).join(`
`)),a=zh(a),a=sf(a,e),a=rf(a,e),o=zh(o),o=sf(o,e),o=rf(o,e),a=af(a),o=af(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,g=["#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=m+w+a,L=m+g+o,T=tf(s,s.VERTEX_SHADER,b),D=tf(s,s.FRAGMENT_SHADER,L);s.attachShader(y,T),s.attachShader(y,D),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(F){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(y)||"",J=s.getShaderInfoLog(T)||"",mt=s.getShaderInfoLog(D)||"",z=Y.trim(),ut=J.trim(),ft=mt.trim(),ht=!0,yt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,D);else{let _t=nf(s,T,"vertex"),gt=nf(s,D,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+_t+`
`+gt)}else z!==""?Le("WebGLProgram: Program Info Log:",z):(ut===""||ft==="")&&(yt=!1);yt&&(F.diagnostics={runnable:ht,programLog:z,vertexShader:{log:ut,prefix:w},fragmentShader:{log:ft,prefix:g}})}s.deleteShader(T),s.deleteShader(D),v=new br(s,y),E=$_(s,y)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(y,k_)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=D,this}var ox=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Hh(t),e.set(t,i)),i}},Hh=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function lx(n){return n===xs||n===Na||n===Fa}function cx(n,t,e,i,s,r){let a=new cr,o=new Gh,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,E,G,F,Y,J){let mt=F.fog,z=Y.geometry,ut=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ht=t.get(v.envMap||ut,ft),yt=d[v.type],_t=i.precision;v.precision!==null&&(_t=i.getMaxPrecision(v.precision),_t!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",_t,"instead."));let gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=gt!==void 0?gt.length:0,Jt=0;z.morphAttributes.position!==void 0&&(Jt=1),z.morphAttributes.normal!==void 0&&(Jt=2),z.morphAttributes.color!==void 0&&(Jt=3);let Ce,Et,jt,it;if(yt){let Zt=zi[yt];Ce=Zt.vertexShader,Et=Zt.fragmentShader}else{Ce=v.vertexShader,Et=v.fragmentShader;let Zt=o.getVertexShaderStage(v),A=o.getFragmentShaderStage(v);o.update(v,Zt,A),jt=Zt.id,it=A.id}let le=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),Ct=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,Re=!!v.map,xe=!!v.matcap,$e=!!ht,ue=$e&&ht.isPMREMTexture===!0,Qe=!!v.aoMap,fn=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,tn=!!v.normalMap,Cn=!!v.displacementMap,mn=!!v.emissiveMap,xn=!!v.metalnessMap,An=!!v.roughnessMap,ge=v.anisotropy>0,X=v.clearcoat>0,ee=v.diffuseRoughness>0,rn=v.dispersion>0,dt=v.retroreflectivity>0,Dt=v.iridescence>0,en=v.sheen>0,Ot=v.transmission>0,Te=ge&&!!v.anisotropyMap,C=X&&!!v.clearcoatMap,M=X&&!!v.clearcoatNormalMap,Z=X&&!!v.clearcoatRoughnessMap,At=ee&&!!v.diffuseRoughnessMap,tt=Dt&&!!v.iridescenceMap,Rt=Dt&&!!v.iridescenceThicknessMap,qt=en&&!!v.sheenColorMap,wt=en&&!!v.sheenRoughnessMap,bt=!!v.specularMap,Vt=!!v.specularColorMap,B=!!v.specularIntensityMap,Tt=Ot&&!!v.transmissionMap,xt=Ot&&!!v.thicknessMap,Mt=!!v.gradientMap,Nt=!!v.alphaMap,Ut=v.alphaTest>0,pe=!!v.alphaHash,Me=!!v.extensions,kt=Bi;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(kt=n.toneMapping);let ye=ue?ht.isCompressedCubeTexture?ht.image[0].mipmaps:ht.mipmaps:null,Oe={shaderID:yt,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:Et,defines:v.defines,customVertexShaderID:jt,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_t,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&Y.instanceColor!==null,instancingMorph:Ct&&Y.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:nn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:xe,envMap:$e,envMapMode:$e&&ht.mapping,envMapPMREM:ue,envMapMaxLod:ue?ye.length-1:null,envMapSize:ue?ye[0].width:null,aoMap:Qe,lightMap:fn,bumpMap:Ve,normalMap:tn,displacementMap:Cn,emissiveMap:mn,normalMapObjectSpace:tn&&v.normalMapType===bd,normalMapTangentSpace:tn&&v.normalMapType===Ql,packedNormalMap:tn&&v.normalMapType===Ql&&lx(v.normalMap.format),metalnessMap:xn,roughnessMap:An,anisotropy:ge,anisotropyMap:Te,clearcoat:X,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:Z,diffuseRoughness:ee,diffuseRoughnessMap:At,dispersion:rn,retroreflection:dt,iridescence:Dt,iridescenceMap:tt,iridescenceThicknessMap:Rt,sheen:en,sheenColorMap:qt,sheenRoughnessMap:wt,specularMap:bt,specularColorMap:Vt,specularIntensityMap:B,transmission:Ot,transmissionMap:Tt,thicknessMap:xt,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===yr&&v.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Ut,alphaHash:pe,combine:v.combine,mapUv:Re&&f(v.map.channel),aoMapUv:Qe&&f(v.aoMap.channel),lightMapUv:fn&&f(v.lightMap.channel),bumpMapUv:Ve&&f(v.bumpMap.channel),normalMapUv:tn&&f(v.normalMap.channel),displacementMapUv:Cn&&f(v.displacementMap.channel),emissiveMapUv:mn&&f(v.emissiveMap.channel),metalnessMapUv:xn&&f(v.metalnessMap.channel),roughnessMapUv:An&&f(v.roughnessMap.channel),anisotropyMapUv:Te&&f(v.anisotropyMap.channel),clearcoatMapUv:C&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:At&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&f(v.sheenRoughnessMap.channel),specularMapUv:bt&&f(v.specularMap.channel),specularColorMapUv:Vt&&f(v.specularColorMap.channel),specularIntensityMapUv:B&&f(v.specularIntensityMap.channel),transmissionMapUv:Tt&&f(v.transmissionMap.channel),thicknessMapUv:xt&&f(v.thicknessMap.channel),alphaMapUv:Nt&&f(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(tn||ge),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!z.attributes.uv&&(Re||Nt),fog:!!mt,useFog:v.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&tn===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:j,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Jt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:J.filter(Zt=>Zt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&nn.getTransfer(v.map.colorSpace)===un,decodeVideoTextureEmissive:mn&&v.emissiveMap.isVideoTexture===!0&&nn.getTransfer(v.emissiveMap.colorSpace)===un,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===Jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function w(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let G in v.defines)E.push(G),E.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(g(E,v),m(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function m(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let E=d[v.type],G;if(E){let F=zi[E];G=Gd.clone(F.uniforms)}else G=v.uniforms;return G}function L(v,E){let G=u.get(E);return G!==void 0?++G.usedTimes:(G=new ax(n,E,v,s),c.push(G),u.set(E,G)),G}function T(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function D(v){o.remove(v)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:w,getUniforms:b,acquireProgram:L,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:I}}function hx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ux(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,y,w,g,m){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:y,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:m},n[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=y,b.materialVariant=a(d),b.groupOrder=w,b.renderOrder=d.renderOrder,b.z=g,b.group=m),t++,b}function l(d,f,y,w,g,m,b){b.reversedDepth===!0&&(g=-g);let L=o(d,f,y,w,g,m);y.transmission>0?i.push(L):y.transparent===!0?s.push(L):e.push(L)}function c(d,f,y,w,g,m){let b=o(d,f,y,w,g,m);y.transmission>0?i.unshift(b):y.transparent===!0?s.unshift(b):e.unshift(b)}function u(d,f){e.length>1&&e.sort(d||ux),i.length>1&&i.sort(f||lf),s.length>1&&s.sort(f||lf)}function p(){for(let d=t,f=n.length;d<f;d++){let y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function dx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new cf,n.set(i,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function fx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new He};break;case"SpotLight":e={position:new W,direction:new W,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new He,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new He,groundColor:new He};break;case"RectAreaLight":e={color:new He,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function px(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _x(n){let t=new fx,e=px(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new sn,a=new sn;function o(c){let u=0,p=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let f=0,y=0,w=0,g=0,m=0,b=0,L=0,T=0,D=0,I=0,v=0,E=0,G=0,F=0;c.sort(gx);for(let J=0,mt=c.length;J<mt;J++){let z=c[J],ut=z.color,ft=z.intensity,ht=z.distance,yt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===xs?yt=z.shadow.map.texture:yt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=ut.r*ft,p+=ut.g*ft,d+=ut.b*ft;else if(z.isLightProbe){for(let _t=0;_t<9;_t++)i.probe[_t].addScaledVector(z.sh.coefficients[_t],ft);F++}else if(z.isSunLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let gt=z.shadow,Pt=e.get(z);Pt.shadowIntensity=gt.intensity,Pt.shadowBias=gt.bias,Pt.shadowNormalBias=gt.normalBias,Pt.shadowRadius=gt.radius,Pt.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),i.sunShadow[y]=Pt,i.sunShadowMap[y]=yt;let Jt=gt.getViewportCount();for(let Ce=0;Ce<Jt;Ce++)i.sunShadowMatrix[w+Ce]=gt.getMatrix(Ce),i.sunShadowCascade[w+Ce]=gt._cascadeData[Ce];w+=Jt,y++}i.sun[f]=_t,f++}else if(z.isDirectionalLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let gt=z.shadow,Pt=e.get(z);Pt.shadowIntensity=gt.intensity,Pt.shadowBias=gt.bias,Pt.shadowNormalBias=gt.normalBias,Pt.shadowRadius=gt.radius,Pt.shadowMapSize=gt.mapSize,i.directionalShadow[g]=Pt,i.directionalShadowMap[g]=yt,i.directionalShadowMatrix[g]=z.shadow.matrix,D++}i.directional[g]=_t,g++}else if(z.isSpotLight){let _t=t.get(z);_t.position.setFromMatrixPosition(z.matrixWorld),_t.color.copy(ut).multiplyScalar(ft),_t.distance=ht,_t.coneCos=Math.cos(z.angle),_t.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),_t.decay=z.decay,i.spot[b]=_t;let gt=z.shadow;if(z.map&&(i.spotLightMap[E]=z.map,E++,gt.updateMatrices(z),z.castShadow&&G++),i.spotLightMatrix[b]=gt.matrix,z.castShadow){let Pt=e.get(z);Pt.shadowIntensity=gt.intensity,Pt.shadowBias=gt.bias,Pt.shadowNormalBias=gt.normalBias,Pt.shadowRadius=gt.radius,Pt.shadowMapSize=gt.mapSize,i.spotShadow[b]=Pt,i.spotShadowMap[b]=yt,v++}b++}else if(z.isRectAreaLight){let _t=t.get(z);_t.color.copy(ut).multiplyScalar(ft),_t.halfWidth.set(z.width*.5,0,0),_t.halfHeight.set(0,z.height*.5,0),i.rectArea[L]=_t,L++}else if(z.isPointLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),_t.distance=z.distance,_t.decay=z.decay,z.castShadow){let gt=z.shadow,Pt=e.get(z);Pt.shadowIntensity=gt.intensity,Pt.shadowBias=gt.bias,Pt.shadowNormalBias=gt.normalBias,Pt.shadowRadius=gt.radius,Pt.shadowMapSize=gt.mapSize,Pt.shadowCameraNear=gt.camera.near,Pt.shadowCameraFar=gt.camera.far,i.pointShadow[m]=Pt,i.pointShadowMap[m]=yt,i.pointShadowMatrix[m]=z.shadow.matrix,I++}i.point[m]=_t,m++}else if(z.isHemisphereLight){let _t=t.get(z);_t.skyColor.copy(z.color).multiplyScalar(ft),_t.groundColor.copy(z.groundColor).multiplyScalar(ft),i.hemi[T]=_t,T++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;let Y=i.hash;(Y.sunLength!==f||Y.directionalLength!==g||Y.pointLength!==m||Y.spotLength!==b||Y.rectAreaLength!==L||Y.hemiLength!==T||Y.numSunShadows!==y||Y.numDirectionalShadows!==D||Y.numPointShadows!==I||Y.numSpotShadows!==v||Y.numSpotMaps!==E||Y.numLightProbes!==F)&&(i.sun.length=f,i.directional.length=g,i.spot.length=b,i.rectArea.length=L,i.point.length=m,i.hemi.length=T,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.directionalShadowMatrix.length=D,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+E-G,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=F,Y.sunLength=f,Y.directionalLength=g,Y.pointLength=m,Y.spotLength=b,Y.rectAreaLength=L,Y.hemiLength=T,Y.numSunShadows=y,Y.numDirectionalShadows=D,Y.numPointShadows=I,Y.numSpotShadows=v,Y.numSpotMaps=E,Y.numLightProbes=F,i.version=mx++)}function l(c,u){let p=0,d=0,f=0,y=0,w=0,g=0,m=u.matrixWorldInverse;for(let b=0,L=c.length;b<L;b++){let T=c[b];if(T.isSunLight){let D=i.sun[p];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(m),p++}else if(T.isDirectionalLight){let D=i.directional[d];D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),d++}else if(T.isSpotLight){let D=i.spot[y];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),y++}else if(T.isRectAreaLight){let D=i.rectArea[w];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){let D=i.point[f];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let D=i.hemi[g];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function hf(n){let t=new _x(n),e=[],i=[],s=[];function r(p){u.camera=p,e.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){i.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hf(n),t.set(s,[o])):r>=a.length?(o=new hf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Sx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],uf=new sn,Ua=new W,Uh=new W;function bx(n,t,e){let i=new ds,s=new me,r=new me,a=new En,o=new Jo,l=new Qo,c={},u=e.maxTextureSize,p={[_s]:Jn,[Jn]:_s,[_i]:_i},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:yx,fragmentShader:vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new Bn;y.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new In(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let m=this.type;this.render=function(I,v,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===td&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let G=n.getRenderTarget(),F=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Ns),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let mt=m!==this.type;mt&&v.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(ut=>ut.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,ut=I.length;z<ut;z++){let ft=I[z],ht=ft.shadow;if(ht===void 0){Le("WebGLShadowMap:",ft,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let yt=ht.getFrameExtents();s.multiply(yt),r.copy(ht.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,ht.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,ht.mapSize.y=r.y));let _t=n.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=_t,ht.map===null||mt===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===xr){if(ft.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new li(s.x,s.y,{format:xs,type:Ri,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),ht.map.texture.name=ft.name+".shadowMap",ht.map.depthTexture=new $i(s.x,s.y,xi),ht.map.depthTexture.name=ft.name+".shadowMapDepth",ht.map.depthTexture.format=Zi,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Un,ht.map.depthTexture.magFilter=Un}else ft.isPointLight?(ht.map=new Ba(s.x),ht.map.depthTexture=new la(s.x,Ai)):(ht.map=new li(s.x,s.y),ht.map.depthTexture=new $i(s.x,s.y,Ai)),ht.map.depthTexture.name=ft.name+".shadowMap",ht.map.depthTexture.format=Zi,this.type===Ds?(ht.map.depthTexture.compareFunction=_t?vh:yh,ht.map.depthTexture.minFilter=Kn,ht.map.depthTexture.magFilter=Kn):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Un,ht.map.depthTexture.magFilter=Un);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let gt=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();ft.isPointLight!==!0&&ht.updateMatrices(ft,E);let Pt=(ht.camera.layers.mask&4294967294)!==0?ht.camera.layers:E.layers;for(let Jt=0;Jt<gt;Jt++){let Ce=ht.getCamera(Jt);if(ft.isPointLight){let Et=ht.camera,jt=ht.matrix,it=ft.distance||Et.far;it!==Et.far&&(Et.far=it,Et.updateProjectionMatrix()),Ua.setFromMatrixPosition(ft.matrixWorld),Et.position.copy(Ua),Uh.copy(Et.position),Uh.add(Mx[Jt]),Et.up.copy(Sx[Jt]),Et.lookAt(Uh),Et.updateMatrixWorld(),jt.makeTranslation(-Ua.x,-Ua.y,-Ua.z),uf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(uf,Et.coordinateSystem,Et.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)n.setRenderTarget(ht.map,Jt),n.clear();else{Jt===0&&(n.setRenderTarget(ht.map),n.clear());let Et=ht.getViewport(Jt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),J.viewport(a)}i=ht.getFrustum(Jt),T(v,E,Ce,ft,Pt,this.type)}ht.isPointLightShadow!==!0&&this.type===xr&&b(ht,E),ht.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(G,F,Y)};function b(I,v){let E=t.update(w);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null?I.mapPass=new li(s.x,s.y,{format:xs,type:Ri}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(v,null,E,d,w,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(v,null,E,f,w,null)}function L(I,v,E,G){let F=null,Y=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)F=Y;else if(F=E.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let J=F.uuid,mt=v.uuid,z=c[J];z===void 0&&(z={},c[J]=z);let ut=z[mt];ut===void 0&&(ut=F.clone(),z[mt]=ut,v.addEventListener("dispose",D)),F=ut}if(F.visible=v.visible,F.wireframe=v.wireframe,G===xr?F.side=v.shadowSide!==null?v.shadowSide:v.side:F.side=v.shadowSide!==null?v.shadowSide:p[v.side],F.alphaMap=v.alphaMap,F.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,F.map=v.map,F.clipShadows=v.clipShadows,F.clippingPlanes=v.clippingPlanes,F.clipIntersection=v.clipIntersection,F.displacementMap=v.displacementMap,F.displacementScale=v.displacementScale,F.displacementBias=v.displacementBias,F.wireframeLinewidth=v.wireframeLinewidth,F.linewidth=v.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let J=n.properties.get(F);J.light=E}return F}function T(I,v,E,G,F,Y){if(I.visible===!1)return;if(I.layers.test(F)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Y===xr)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);let z=t.update(I),ut=I.material;if(Array.isArray(ut)){let ft=z.groups;for(let ht=0,yt=ft.length;ht<yt;ht++){let _t=ft[ht],gt=ut[_t.materialIndex];if(gt&&gt.visible){let Pt=L(I,gt,G,Y);I.onBeforeShadow(n,I,v,E,z,Pt,_t),n.renderBufferDirect(E,null,z,Pt,I,_t),I.onAfterShadow(n,I,v,E,z,Pt,_t)}}}else if(ut.visible){let ft=L(I,ut,G,Y);I.onBeforeShadow(n,I,v,E,z,ft,null),n.renderBufferDirect(E,null,z,ft,I,null),I.onAfterShadow(n,I,v,E,z,ft,null)}}let mt=I.children;for(let z=0,ut=mt.length;z<ut;z++)T(mt[z],v,E,G,F,Y)}function D(I){I.target.removeEventListener("dispose",D);for(let E in c){let G=c[E],F=I.target.uuid;F in G&&(G[F].dispose(),delete G[F])}}}function wx(n,t){function e(){let B=!1,Tt=new En,xt=null,Mt=new En(0,0,0,0);return{setMask:function(Nt){xt!==Nt&&!B&&(n.colorMask(Nt,Nt,Nt,Nt),xt=Nt)},setLocked:function(Nt){B=Nt},setClear:function(Nt,Ut,pe,Me,kt){kt===!0&&(Nt*=Me,Ut*=Me,pe*=Me),Tt.set(Nt,Ut,pe,Me),Mt.equals(Tt)===!1&&(n.clearColor(Nt,Ut,pe,Me),Mt.copy(Tt))},reset:function(){B=!1,xt=null,Mt.set(-1,0,0,0)}}}function i(){let B=!1,Tt=!1,xt=null,Mt=null,Nt=null;return{setReversed:function(Ut){if(Tt!==Ut){let pe=t.get("EXT_clip_control");Ut?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),Tt=Ut;let Me=Nt;Nt=null,this.setClear(Me)}},getReversed:function(){return Tt},setTest:function(Ut){Ut?j(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(Ut){xt!==Ut&&!B&&(n.depthMask(Ut),xt=Ut)},setFunc:function(Ut){if(Tt&&(Ut=Nd[Ut]),Mt!==Ut){switch(Ut){case Ro:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Po:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Do:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Ut}},setLocked:function(Ut){B=Ut},setClear:function(Ut){Nt!==Ut&&(Nt=Ut,Tt&&(Ut=1-Ut),n.clearDepth(Ut))},reset:function(){B=!1,xt=null,Mt=null,Nt=null,Tt=!1}}}function s(){let B=!1,Tt=null,xt=null,Mt=null,Nt=null,Ut=null,pe=null,Me=null,kt=null;return{setTest:function(ye){B||(ye?j(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ye){Tt!==ye&&!B&&(n.stencilMask(ye),Tt=ye)},setFunc:function(ye,Oe,Zt){(xt!==ye||Mt!==Oe||Nt!==Zt)&&(n.stencilFunc(ye,Oe,Zt),xt=ye,Mt=Oe,Nt=Zt)},setOp:function(ye,Oe,Zt){(Ut!==ye||pe!==Oe||Me!==Zt)&&(n.stencilOp(ye,Oe,Zt),Ut=ye,pe=Oe,Me=Zt)},setLocked:function(ye){B=ye},setClear:function(ye){kt!==ye&&(n.clearStencil(ye),kt=ye)},reset:function(){B=!1,Tt=null,xt=null,Mt=null,Nt=null,Ut=null,pe=null,Me=null,kt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,y=[],w=null,g=!1,m=null,b=null,L=null,T=null,D=null,I=null,v=null,E=new He(0,0,0),G=0,F=!1,Y=null,J=null,mt=null,z=null,ut=null,ft=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,yt=0,_t=n.getParameter(n.VERSION);_t.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(_t)[1]),ht=yt>=1):_t.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),ht=yt>=2);let gt=null,Pt={},Jt=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Et=new En().fromArray(Jt),jt=new En().fromArray(Ce);function it(B,Tt,xt,Mt){let Nt=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(B,Ut),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<xt;pe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(Tt+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return Ut}let le={};le[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(rr),Ve(!1),tn(Qc),j(n.CULL_FACE),Qe(Ns);function j(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ct(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Qt(B,Tt){return d[B]!==Tt?(n.bindFramebuffer(B,Tt),d[B]=Tt,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Re(B,Tt){let xt=y,Mt=!1;if(B){xt=f.get(Tt),xt===void 0&&(xt=[],f.set(Tt,xt));let Nt=B.textures;if(xt.length!==Nt.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,pe=Nt.length;Ut<pe;Ut++)xt[Ut]=n.COLOR_ATTACHMENT0+Ut;xt.length=Nt.length,Mt=!0}}else xt[0]!==n.BACK&&(xt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(xt)}function xe(B){return w!==B?(n.useProgram(B),w=B,!0):!1}let $e={[Fs]:n.FUNC_ADD,[nd]:n.FUNC_SUBTRACT,[id]:n.FUNC_REVERSE_SUBTRACT};$e[sd]=n.MIN,$e[rd]=n.MAX;let ue={[ad]:n.ZERO,[od]:n.ONE,[ld]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[pd]:n.SRC_ALPHA_SATURATE,[dd]:n.DST_COLOR,[hd]:n.DST_ALPHA,[cd]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[fd]:n.ONE_MINUS_DST_COLOR,[ud]:n.ONE_MINUS_DST_ALPHA,[md]:n.CONSTANT_COLOR,[gd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[xd]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(B,Tt,xt,Mt,Nt,Ut,pe,Me,kt,ye){if(B===Ns){g===!0&&(Ct(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),B!==ed){if(B!==m||ye!==F){if((b!==Fs||D!==Fs)&&(n.blendEquation(n.FUNC_ADD),b=Fs,D=Fs),ye)switch(B){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",B);break}else switch(B){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",B);break}L=null,T=null,I=null,v=null,E.set(0,0,0),G=0,m=B,F=ye}return}Nt=Nt||Tt,Ut=Ut||xt,pe=pe||Mt,(Tt!==b||Nt!==D)&&(n.blendEquationSeparate($e[Tt],$e[Nt]),b=Tt,D=Nt),(xt!==L||Mt!==T||Ut!==I||pe!==v)&&(n.blendFuncSeparate(ue[xt],ue[Mt],ue[Ut],ue[pe]),L=xt,T=Mt,I=Ut,v=pe),(Me.equals(E)===!1||kt!==G)&&(n.blendColor(Me.r,Me.g,Me.b,kt),E.copy(Me),G=kt),m=B,F=!1}function fn(B,Tt){B.side===_i?Ct(n.CULL_FACE):j(n.CULL_FACE);let xt=B.side===Jn;Tt&&(xt=!xt),Ve(xt),B.blending===yr&&B.transparent===!1?Qe(Ns):Qe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Mt=B.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(B){Y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),Y=B)}function tn(B){B!==Ju?(j(n.CULL_FACE),B!==J&&(B===Qc?n.cullFace(n.BACK):B===Qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),J=B}function Cn(B){B!==mt&&(ht&&n.lineWidth(B),mt=B)}function mn(B,Tt,xt){B?(j(n.POLYGON_OFFSET_FILL),(z!==Tt||ut!==xt)&&(z=Tt,ut=xt,a.getReversed()&&(Tt=-Tt,xt=-xt),n.polygonOffset(Tt,xt))):Ct(n.POLYGON_OFFSET_FILL)}function xn(B){B?j(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function An(B){B===void 0&&(B=n.TEXTURE0+ft-1),gt!==B&&(n.activeTexture(B),gt=B)}function ge(B,Tt,xt){xt===void 0&&(gt===null?xt=n.TEXTURE0+ft-1:xt=gt);let Mt=Pt[xt];Mt===void 0&&(Mt={type:void 0,texture:void 0},Pt[xt]=Mt),(Mt.type!==B||Mt.texture!==Tt)&&(gt!==xt&&(n.activeTexture(xt),gt=xt),n.bindTexture(B,Tt||le[B]),Mt.type=B,Mt.texture=Tt)}function X(){let B=Pt[gt];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{n.compressedTexImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function rn(){try{n.compressedTexImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function dt(){try{n.texSubImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function Dt(){try{n.texSubImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function en(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function Te(){try{n.texStorage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function C(){try{n.texStorage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function M(){try{n.texImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function Z(){try{n.texImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function At(B){return p[B]!==void 0?p[B]:n.getParameter(B)}function tt(B,Tt){p[B]!==Tt&&(n.pixelStorei(B,Tt),p[B]=Tt)}function Rt(B){Et.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Et.copy(B))}function qt(B){jt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),jt.copy(B))}function wt(B,Tt){let xt=c.get(Tt);xt===void 0&&(xt=new WeakMap,c.set(Tt,xt));let Mt=xt.get(B);Mt===void 0&&(Mt=n.getUniformBlockIndex(Tt,B.name),n.uniformBlockBinding(Tt,Mt,Mt),xt.set(B,Mt))}function bt(B,Tt,xt){let Nt=c.get(Tt).get(B);l[Nt]!==xt&&(n.bindBufferBase(n.UNIFORM_BUFFER,Nt,xt),l[Nt]=xt)}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},gt=null,Pt={},d={},l={},f=new WeakMap,y=[],w=null,g=!1,m=null,b=null,L=null,T=null,D=null,I=null,v=null,E=new He(0,0,0),G=0,F=!1,Y=null,J=null,mt=null,z=null,ut=null,Et.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:Ct,bindFramebuffer:Qt,drawBuffers:Re,useProgram:xe,setBlending:Qe,setMaterial:fn,setFlipSided:Ve,setCullFace:tn,setLineWidth:Cn,setPolygonOffset:mn,setScissorTest:xn,activeTexture:An,bindTexture:ge,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:rn,texImage2D:M,texImage3D:Z,pixelStorei:tt,getParameter:At,updateUBOMapping:wt,uniformBlockBinding:bt,texStorage2D:Te,texStorage3D:C,texSubImage2D:dt,texSubImage3D:Dt,compressedTexSubImage2D:en,compressedTexSubImage3D:Ot,scissor:Rt,viewport:qt,reset:Vt}}function Tx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,p=new Set,d,f=new WeakMap,y=new Set,w=new FinalizationRegistry(C=>y.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return g?new OffscreenCanvas(C,M):Kr("canvas")}function b(C,M,Z){let At=1,tt=Te(C);if((tt.width>Z||tt.height>Z)&&(At=Z/Math.max(tt.width,tt.height)),At<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Rt=Math.floor(At*tt.width),qt=Math.floor(At*tt.height);d===void 0&&(d=m(Rt,qt));let wt=M?m(Rt,qt):d;return wt.width=Rt,wt.height=qt,wt.getContext("2d").drawImage(C,0,0,Rt,qt),Le("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Rt+"x"+qt+")."),wt}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function L(C){return C.generateMipmaps}function T(C){n.generateMipmap(C)}function D(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(C,M,Z,At,tt,Rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let qt;At&&(qt=t.get("EXT_texture_norm16"),qt||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let wt=M;if(M===n.RED&&(Z===n.FLOAT&&(wt=n.R32F),Z===n.HALF_FLOAT&&(wt=n.R16F),Z===n.UNSIGNED_BYTE&&(wt=n.R8),Z===n.UNSIGNED_SHORT&&qt&&(wt=qt.R16_EXT),Z===n.SHORT&&qt&&(wt=qt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(wt=n.R8UI),Z===n.UNSIGNED_SHORT&&(wt=n.R16UI),Z===n.UNSIGNED_INT&&(wt=n.R32UI),Z===n.BYTE&&(wt=n.R8I),Z===n.SHORT&&(wt=n.R16I),Z===n.INT&&(wt=n.R32I)),M===n.RG&&(Z===n.FLOAT&&(wt=n.RG32F),Z===n.HALF_FLOAT&&(wt=n.RG16F),Z===n.UNSIGNED_BYTE&&(wt=n.RG8),Z===n.UNSIGNED_SHORT&&qt&&(wt=qt.RG16_EXT),Z===n.SHORT&&qt&&(wt=qt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(wt=n.RG8UI),Z===n.UNSIGNED_SHORT&&(wt=n.RG16UI),Z===n.UNSIGNED_INT&&(wt=n.RG32UI),Z===n.BYTE&&(wt=n.RG8I),Z===n.SHORT&&(wt=n.RG16I),Z===n.INT&&(wt=n.RG32I)),M===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(wt=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(wt=n.RGB16UI),Z===n.UNSIGNED_INT&&(wt=n.RGB32UI),Z===n.BYTE&&(wt=n.RGB8I),Z===n.SHORT&&(wt=n.RGB16I),Z===n.INT&&(wt=n.RGB32I)),M===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(wt=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(wt=n.RGBA16UI),Z===n.UNSIGNED_INT&&(wt=n.RGBA32UI),Z===n.BYTE&&(wt=n.RGBA8I),Z===n.SHORT&&(wt=n.RGBA16I),Z===n.INT&&(wt=n.RGBA32I)),M===n.RGB&&(Z===n.UNSIGNED_SHORT&&qt&&(wt=qt.RGB16_EXT),Z===n.SHORT&&qt&&(wt=qt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(wt=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(wt=n.R11F_G11F_B10F)),M===n.RGBA){let bt=Rt?$r:nn.getTransfer(tt);Z===n.FLOAT&&(wt=n.RGBA32F),Z===n.HALF_FLOAT&&(wt=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(wt=bt===un?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&qt&&(wt=qt.RGBA16_EXT),Z===n.SHORT&&qt&&(wt=qt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(wt=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(wt=n.RGB5_A1)}return(wt===n.R16F||wt===n.R32F||wt===n.RG16F||wt===n.RG32F||wt===n.RGBA16F||wt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function v(C,M){let Z;return C?M===null||M===Ai||M===Os?Z=n.DEPTH24_STENCIL8:M===xi?Z=n.DEPTH32F_STENCIL8:M===Mr&&(Z=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===Os?Z=n.DEPTH_COMPONENT24:M===xi?Z=n.DEPTH_COMPONENT32F:M===Mr&&(Z=n.DEPTH_COMPONENT16),Z}function E(C,M){return L(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function G(C){let M=new WeakRef(C);i.get(C).__ref=M,y.add(M),w.register(C,M,M)}function F(C){let M=i.get(C).__ref;M!==void 0&&(y.delete(M),w.unregister(M))}function Y(C){mt(C.target)}function J(C){z(C.target)}function mt(C){C.removeEventListener("dispose",Y),F(C),ft(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&p.delete(C)}function z(C){C.removeEventListener("dispose",J),F(C),yt(C)}function ut(){for(let C of y){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?z(M):mt(M))}y.clear(),p.clear()}function ft(C){let M=i.get(C);if(M.__webglInit===void 0)return;let Z=C.source,At=f.get(Z);if(At){let tt=At[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&ht(C),Object.keys(At).length===0&&f.delete(Z)}i.remove(C)}function ht(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let Z=C.source,At=f.get(Z);delete At[M.__cacheKey],a.memory.textures--}function yt(C){let M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Z=C.depthTexture;if(Z&&Z.renderTarget===C&&mt(Z),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let Rt=0;Rt<M.__webglFramebuffer[tt].length;Rt++)n.deleteFramebuffer(M.__webglFramebuffer[tt][Rt]);else n.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[tt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let At=C.textures;for(let tt=0,Rt=At.length;tt<Rt;tt++){let qt=i.get(At[tt]);qt.__webglTexture&&(n.deleteTexture(qt.__webglTexture),a.memory.textures--),i.remove(At[tt])}i.remove(C)}let _t=0;function gt(){_t=0}function Pt(){return _t}function Jt(C){_t=C}function Ce(){let C=_t;return C>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),_t+=1,C}function Et(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function jt(C,M){let Z=i.get(C);if(C.isVideoTexture&&en(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){let At=C.image;if(At===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(At.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{fn(Z,C,M);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+M)}function it(C,M){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){fn(Z,C,M);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+M)}function le(C,M){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){fn(Z,C,M);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+M)}function j(C,M){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){Ve(Z,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+M)}let Ct={[Fo]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Uo]:n.MIRRORED_REPEAT},Qt={[Un]:n.NEAREST,[Md]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},Re={[Td]:n.NEVER,[Mh]:n.ALWAYS,[Ed]:n.LESS,[yh]:n.LEQUAL,[Ad]:n.EQUAL,[vh]:n.GEQUAL,[Rd]:n.GREATER,[Cd]:n.NOTEQUAL};function xe(C,M){if(M.type===xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===ml||M.magFilter===Ca||M.magFilter===Ki||M.minFilter===Kn||M.minFilter===ml||M.minFilter===Ca||M.minFilter===Ki)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ct[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ct[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ct[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Qt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Qt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Ca&&M.minFilter!==Ki||M.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $e(C,M){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",Y),G(M));let At=M.source,tt=f.get(At);tt===void 0&&(tt={},f.set(At,tt));let Rt=Et(M);if(Rt!==C.__cacheKey){tt[Rt]===void 0&&(tt[Rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),tt[Rt].usedTimes++;let qt=tt[C.__cacheKey];qt!==void 0&&(tt[C.__cacheKey].usedTimes--,qt.usedTimes===0&&ht(M)),C.__cacheKey=Rt,C.__webglTexture=tt[Rt].texture}return Z}function ue(C,M,Z){return Math.floor(Math.floor(C/Z)/M)}function Qe(C,M,Z,At){let Rt=C.updateRanges;if(Rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Z,At,M.data);else{Rt.sort((B,Tt)=>B.start-Tt.start);let qt=0;for(let B=1;B<Rt.length;B++){let Tt=Rt[qt],xt=Rt[B],Mt=Tt.start+Tt.count,Nt=ue(xt.start,M.width,4),Ut=ue(Tt.start,M.width,4);xt.start<=Mt+1&&Nt===Ut&&ue(xt.start+xt.count-1,M.width,4)===Nt?Tt.count=Math.max(Tt.count,xt.start+xt.count-Tt.start):(++qt,Rt[qt]=xt)}Rt.length=qt+1;let wt=e.getParameter(n.UNPACK_ROW_LENGTH),bt=e.getParameter(n.UNPACK_SKIP_PIXELS),Vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let B=0,Tt=Rt.length;B<Tt;B++){let xt=Rt[B],Mt=Math.floor(xt.start/4),Nt=Math.ceil(xt.count/4),Ut=Mt%M.width,pe=Math.floor(Mt/M.width),Me=Nt,kt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,pe),e.texSubImage2D(n.TEXTURE_2D,0,Ut,pe,Me,kt,Z,At,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,wt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Vt)}}function fn(C,M,Z){let At=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(At=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(At=n.TEXTURE_3D);let tt=$e(C,M),Rt=M.source;e.bindTexture(At,C.__webglTexture,n.TEXTURE0+Z);let qt=i.get(Rt);if(Rt.version!==qt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let kt=nn.getPrimaries(nn.workingColorSpace),ye=M.colorSpace===Ji?null:nn.getPrimaries(M.colorSpace),Oe=M.colorSpace===Ji||kt===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let bt=b(M.image,!1,s.maxTextureSize);bt=Ot(M,bt);let Vt=r.convert(M.format,M.colorSpace),B=r.convert(M.type),Tt=I(M.internalFormat,Vt,B,M.normalized,M.colorSpace,M.isVideoTexture);xe(At,M);let xt,Mt=M.mipmaps,Nt=M.isVideoTexture!==!0,Ut=qt.__version===void 0||tt===!0,pe=Rt.dataReady,Me=E(M,bt);if(M.isDepthTexture)Tt=v(M.format===ji,M.type),Ut&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Tt,bt.width,bt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,bt.width,bt.height,0,Vt,B,null));else if(M.isDataTexture)if(Mt.length>0){Nt&&Ut&&e.texStorage2D(n.TEXTURE_2D,Me,Tt,Mt[0].width,Mt[0].height);for(let kt=0,ye=Mt.length;kt<ye;kt++)xt=Mt[kt],Nt?pe&&e.texSubImage2D(n.TEXTURE_2D,kt,0,0,xt.width,xt.height,Vt,B,xt.data):e.texImage2D(n.TEXTURE_2D,kt,Tt,xt.width,xt.height,0,Vt,B,xt.data);M.generateMipmaps=!1}else Nt?(Ut&&e.texStorage2D(n.TEXTURE_2D,Me,Tt,bt.width,bt.height),pe&&Qe(M,bt,Vt,B)):e.texImage2D(n.TEXTURE_2D,0,Tt,bt.width,bt.height,0,Vt,B,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Tt,Mt[0].width,Mt[0].height,bt.depth);for(let kt=0,ye=Mt.length;kt<ye;kt++)if(xt=Mt[kt],M.format!==Ci)if(Vt!==null)if(Nt){if(pe)if(M.layerUpdates.size>0){let Oe=Ch(xt.width,xt.height,M.format,M.type);for(let Zt of M.layerUpdates){let A=xt.data.subarray(Zt*Oe/xt.data.BYTES_PER_ELEMENT,(Zt+1)*Oe/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,kt,0,0,Zt,xt.width,xt.height,1,Vt,A)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,kt,0,0,0,xt.width,xt.height,bt.depth,Vt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,kt,Tt,xt.width,xt.height,bt.depth,0,xt.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?pe&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,kt,0,0,0,xt.width,xt.height,bt.depth,Vt,B,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,kt,Tt,xt.width,xt.height,bt.depth,0,Vt,B,xt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Nt&&Ut&&e.texStorage2D(n.TEXTURE_2D,Me,Tt,Mt[0].width,Mt[0].height);for(let kt=0,ye=Mt.length;kt<ye;kt++)xt=Mt[kt],M.format!==Ci?Vt!==null?Nt?pe&&e.compressedTexSubImage2D(n.TEXTURE_2D,kt,0,0,xt.width,xt.height,Vt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,kt,Tt,xt.width,xt.height,0,xt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?pe&&e.texSubImage2D(n.TEXTURE_2D,kt,0,0,xt.width,xt.height,Vt,B,xt.data):e.texImage2D(n.TEXTURE_2D,kt,Tt,xt.width,xt.height,0,Vt,B,xt.data)}else if(M.isDataArrayTexture)if(Nt){if(Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Tt,bt.width,bt.height,bt.depth),pe)if(M.layerUpdates.size>0){let kt=Ch(bt.width,bt.height,M.format,M.type);for(let ye of M.layerUpdates){let Oe=bt.data.subarray(ye*kt/bt.data.BYTES_PER_ELEMENT,(ye+1)*kt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,bt.width,bt.height,1,Vt,B,Oe)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Vt,B,bt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,bt.width,bt.height,bt.depth,0,Vt,B,bt.data);else if(M.isData3DTexture)Nt?(Ut&&e.texStorage3D(n.TEXTURE_3D,Me,Tt,bt.width,bt.height,bt.depth),pe&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Vt,B,bt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,bt.width,bt.height,bt.depth,0,Vt,B,bt.data);else if(M.isFramebufferTexture){if(Ut)if(Nt)e.texStorage2D(n.TEXTURE_2D,Me,Tt,bt.width,bt.height);else{let kt=bt.width,ye=bt.height;for(let Oe=0;Oe<Me;Oe++)e.texImage2D(n.TEXTURE_2D,Oe,Tt,kt,ye,0,Vt,B,null),kt>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let kt=n.canvas;if(kt.hasAttribute("layoutsubtree")||kt.setAttribute("layoutsubtree","true"),bt.parentNode!==kt){kt.appendChild(bt),p.add(M),kt.onpaint=ye=>{let Oe=ye.changedElements;for(let Zt of p)Oe.includes(Zt.image)&&(Zt.needsUpdate=!0)},kt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,bt);else{let Oe=n.RGBA,Zt=n.RGBA,A=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Oe,Zt,A,bt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Nt&&Ut){let kt=Te(Mt[0]);e.texStorage2D(n.TEXTURE_2D,Me,Tt,kt.width,kt.height)}for(let kt=0,ye=Mt.length;kt<ye;kt++)xt=Mt[kt],Nt?pe&&e.texSubImage2D(n.TEXTURE_2D,kt,0,0,Vt,B,xt):e.texImage2D(n.TEXTURE_2D,kt,Tt,Vt,B,xt);M.generateMipmaps=!1}else if(Nt){if(Ut){let kt=Te(bt);e.texStorage2D(n.TEXTURE_2D,Me,Tt,kt.width,kt.height)}pe&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Vt,B,bt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Vt,B,bt);L(M)&&M.mipmapsAutoUpdate===!0&&T(At),qt.__version=Rt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ve(C,M,Z){if(M.image.length!==6)return;let At=$e(C,M),tt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Z);let Rt=i.get(tt);if(tt.version!==Rt.__version||At===!0){e.activeTexture(n.TEXTURE0+Z);let qt=nn.getPrimaries(nn.workingColorSpace),wt=M.colorSpace===Ji?null:nn.getPrimaries(M.colorSpace),bt=M.colorSpace===Ji||qt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,B=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let Zt=0;Zt<6;Zt++)!Vt&&!B?Tt[Zt]=b(M.image[Zt],!0,s.maxCubemapSize):Tt[Zt]=B?M.image[Zt].image:M.image[Zt],Tt[Zt]=Ot(M,Tt[Zt]);let xt=Tt[0],Mt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),Ut=I(M.internalFormat,Mt,Nt,M.normalized,M.colorSpace),pe=M.isVideoTexture!==!0,Me=Rt.__version===void 0||At===!0,kt=tt.dataReady,ye=E(M,xt);xe(n.TEXTURE_CUBE_MAP,M);let Oe;if(M.isDepthTexture){if(Ut=v(M.format===ji,M.type),Me)if(pe)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ut,xt.width,xt.height);else for(let Zt=0;Zt<6;Zt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Ut,xt.width,xt.height,0,Mt,Nt,null)}else if(Vt){pe&&Me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ut,xt.width,xt.height);for(let Zt=0;Zt<6;Zt++){Oe=Tt[Zt].mipmaps;for(let A=0;A<Oe.length;A++){let x=Oe[A];M.format!==Ci?Mt!==null?pe?kt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A,0,0,x.width,x.height,Mt,x.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A,Ut,x.width,x.height,0,x.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?kt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A,0,0,x.width,x.height,Mt,Nt,x.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A,Ut,x.width,x.height,0,Mt,Nt,x.data)}}}else{if(Oe=M.mipmaps,pe&&Me){Oe.length>0&&ye++;let Zt=Te(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ut,Zt.width,Zt.height)}for(let Zt=0;Zt<6;Zt++)if(B){pe?kt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,0,0,Tt[Zt].width,Tt[Zt].height,Mt,Nt,Tt[Zt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Ut,Tt[Zt].width,Tt[Zt].height,0,Mt,Nt,Tt[Zt].data);for(let A=0;A<Oe.length;A++){let U=Oe[A].image[Zt].image;pe?kt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A+1,0,0,U.width,U.height,Mt,Nt,U.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A+1,Ut,U.width,U.height,0,Mt,Nt,U.data)}}else{pe?kt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,0,0,Mt,Nt,Tt[Zt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Ut,Mt,Nt,Tt[Zt]);for(let A=0;A<Oe.length;A++){let x=Oe[A];pe?kt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A+1,0,0,Mt,Nt,x.image[Zt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,A+1,Ut,Mt,Nt,x.image[Zt])}}}L(M)&&M.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),Rt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function tn(C,M,Z,At,tt,Rt){let qt=r.convert(Z.format,Z.colorSpace),wt=r.convert(Z.type),bt=I(Z.internalFormat,qt,wt,Z.normalized,Z.colorSpace),Vt=i.get(M),B=i.get(Z);if(B.__renderTarget=M,!Vt.__hasExternalTextures){let Tt=Math.max(1,M.width>>Rt),xt=Math.max(1,M.height>>Rt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Rt,bt,Tt,xt,M.depth,0,qt,wt,null):e.texImage2D(tt,Rt,bt,Tt,xt,0,qt,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Dt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,tt,B.__webglTexture,0,dt(M)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,At,tt,B.__webglTexture,Rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Cn(C,M,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let At=M.depthTexture,tt=At&&At.isDepthTexture?At.type:null,Rt=v(M.stencilBuffer,tt),qt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(M),Rt,M.width,M.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(M),Rt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,qt,n.RENDERBUFFER,C)}else{let At=M.textures;for(let tt=0;tt<At.length;tt++){let Rt=At[tt],qt=r.convert(Rt.format,Rt.colorSpace),wt=r.convert(Rt.type),bt=I(Rt.internalFormat,qt,wt,Rt.normalized,Rt.colorSpace);Dt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(M),bt,M.width,M.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(M),bt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,bt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mn(C,M,Z){let At=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(M.depthTexture);tt.__renderTarget=M;let Rt=At?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||Rt.width!==M.width||Rt.height!==M.height)&&(Rt.width=M.width,Rt.height=M.height,M.depthTexture.needsUpdate=!0),At?j(M.depthTexture,0):jt(M.depthTexture,0);let qt=tt.__webglTexture,wt=dt(M),bt=At?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Vt=M.depthTexture.format===ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)Dt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Vt,bt,qt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Vt,bt,qt,0);else if(M.depthTexture.format===ji)Dt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Vt,bt,qt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Vt,bt,qt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xn(C){let M=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let At=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),At){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,At.removeEventListener("dispose",tt)};At.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=At}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let At=0;At<6;At++)mn(M.__webglFramebuffer[At],C,At);else C.texture.mipmaps.length>0?mn(M.__webglFramebuffer[0],C,0):mn(M.__webglFramebuffer,C,0);else if(Z){M.__webglDepthbuffer=[];for(let At=0;At<6;At++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[At]),M.__webglDepthbuffer[At]===void 0)M.__webglDepthbuffer[At]=n.createRenderbuffer(),Cn(M.__webglDepthbuffer[At],C,!1);else{let tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=M.__webglDepthbuffer[At];n.bindRenderbuffer(n.RENDERBUFFER,Rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Rt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Cn(M.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function An(C,M,Z){let At=i.get(C);M!==void 0&&tn(At.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&xn(C)}function ge(C){let M=C.texture,Z=i.get(C),At=i.get(M);C.addEventListener("dispose",J),G(C);let tt=C.textures,Rt=C.isWebGLCubeRenderTarget===!0,qt=tt.length>1;if(qt||(At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture()),At.__version=M.version,a.memory.textures++),Rt){Z.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(M.mipmaps.length>0){Z.__webglFramebuffer[wt]=[];for(let bt=0;bt<M.mipmaps.length;bt++)Z.__webglFramebuffer[wt][bt]=n.createFramebuffer()}else Z.__webglFramebuffer[wt]=n.createFramebuffer()}else{if(M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let wt=0;wt<M.mipmaps.length;wt++)Z.__webglFramebuffer[wt]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(qt)for(let wt=0,bt=tt.length;wt<bt;wt++){let Vt=i.get(tt[wt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Dt(C)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let wt=0;wt<tt.length;wt++){let bt=tt[wt];Z.__webglColorRenderbuffer[wt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[wt]);let Vt=r.convert(bt.format,bt.colorSpace),B=r.convert(bt.type),Tt=I(bt.internalFormat,Vt,B,bt.normalized,bt.colorSpace,C.isXRRenderTarget===!0),xt=dt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Tt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[wt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Cn(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Rt){e.bindTexture(n.TEXTURE_CUBE_MAP,At.__webglTexture),xe(n.TEXTURE_CUBE_MAP,M);for(let wt=0;wt<6;wt++)if(M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)tn(Z.__webglFramebuffer[wt][bt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,bt);else tn(Z.__webglFramebuffer[wt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);L(M)?T(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(qt){for(let wt=0,bt=tt.length;wt<bt;wt++){let Vt=tt[wt],B=i.get(Vt),Tt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,B.__webglTexture),xe(Tt,Vt),tn(Z.__webglFramebuffer,C,Vt,n.COLOR_ATTACHMENT0+wt,Tt,0),L(Vt)&&T(Tt)}e.unbindTexture()}else{let wt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,At.__webglTexture),xe(wt,M),M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)tn(Z.__webglFramebuffer[bt],C,M,n.COLOR_ATTACHMENT0,wt,bt);else tn(Z.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,wt,0);L(M)?T(wt):M.mipmaps.length>0&&n.texParameteri(wt,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&xn(C)}function X(C){let M=C.textures;for(let Z=0,At=M.length;Z<At;Z++){let tt=M[Z];if(L(tt)&&tt.mipmapsAutoUpdate===!0){let Rt=D(C),qt=i.get(tt).__webglTexture;e.bindTexture(Rt,qt),T(Rt),e.unbindTexture()}}}let ee=[];function rn(C){if(C.samples>0){if(Dt(C)===!1){let M=C.textures,Z=C.width,At=C.height,tt=n.COLOR_BUFFER_BIT,Rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,qt=i.get(C),wt=M.length>1;if(wt)for(let Vt=0;Vt<M.length;Vt++)e.bindFramebuffer(n.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,qt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Vt=0;Vt<M.length;Vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),wt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,qt.__webglColorRenderbuffer[Vt]);let B=i.get(M[Vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,Z,At,0,0,Z,At,tt,n.NEAREST),l===!0&&(ee.length=0,ee.push(n.COLOR_ATTACHMENT0+Vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ee.push(Rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),wt)for(let Vt=0;Vt<M.length;Vt++){e.bindFramebuffer(n.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,qt.__webglColorRenderbuffer[Vt]);let B=i.get(M[Vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,qt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,B,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function dt(C){return Math.min(s.maxSamples,C.samples)}function Dt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function en(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Ot(C,M){let Z=C.colorSpace,At=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Zr&&Z!==Ji&&(nn.getTransfer(Z)===un?(At!==Ci||tt!==ti)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",Z)),M}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=gt,this.getTextureUnits=Pt,this.setTextureUnits=Jt,this.setTexture2D=jt,this.setTexture2DArray=it,this.setTexture3D=le,this.setTextureCube=j,this.rebindTextures=An,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=xn,this.setupFrameBufferTexture=tn,this.useMultisampledRTT=Dt,this.dispose=ut}function Ex(n,t){function e(i,s=Ji){let r,a=nn.getTransfer(s);if(i===ti)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fh)return n.BYTE;if(i===ph)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===_h)return n.ALPHA;if(i===xh)return n.RGB;if(i===Ci)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===Sl)return n.RGBA_INTEGER;if(i===Pa||i===Ia||i===La||i===Da)if(a===un)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===wl||i===Tl||i===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Na||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return a===un?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Fl||i===Ul||i===Ol||i===Bl||i===kl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return a===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Zl||i===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return a===un?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===jl||i===Fa||i===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Oi({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Di{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,y=null,w=typeof XRWebGLBinding<"u",g=new Vh,m={},b=e.getContextAttributes(),L=null,T=null,D=[],I=[],v=new me,E=null,G=null,F=new $n;F.viewport=new En;let Y=new $n;Y.viewport=new En;let J=[F,Y],mt=new ul,z=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Et){let jt=D[Et];return jt===void 0&&(jt=new hr,D[Et]=jt),jt.getTargetRaySpace()},this.getControllerGrip=function(Et){let jt=D[Et];return jt===void 0&&(jt=new hr,D[Et]=jt),jt.getGripSpace()},this.getHand=function(Et){let jt=D[Et];return jt===void 0&&(jt=new hr,D[Et]=jt),jt.getHandSpace()};function ft(Et){let jt=I.indexOf(Et.inputSource);if(jt===-1)return;let it=D[jt];it!==void 0&&(it.update(Et.inputSource,Et.frame,c||a),it.dispatchEvent({type:Et.type,data:Et.inputSource}))}function ht(){s.removeEventListener("select",ft),s.removeEventListener("selectstart",ft),s.removeEventListener("selectend",ft),s.removeEventListener("squeeze",ft),s.removeEventListener("squeezestart",ft),s.removeEventListener("squeezeend",ft),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",yt);for(let Et=0;Et<D.length;Et++){let jt=I[Et];jt!==null&&(I[Et]=null,D[Et].disconnect(jt))}z=null,ut=null,g.reset();for(let Et in m)delete m[Et];if(t.setRenderTarget(L),f=null,d=null,p=null,s=null,T=null,Ce.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),G!==null){let Et=G.camera;Et.fov=G.fov,Et.zoom=G.zoom,Et.updateProjectionMatrix(),G=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Et){r=Et,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Et){o=Et,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Et){c=Et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Et){if(s=Et,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ft),s.addEventListener("selectstart",ft),s.addEventListener("selectend",ft),s.addEventListener("squeeze",ft),s.addEventListener("squeezestart",ft),s.addEventListener("squeezeend",ft),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",yt),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,le=null,j=null;b.depth&&(j=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=b.stencil?ji:Zi,le=b.stencil?Os:Ai);let Ct={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new li(d.textureWidth,d.textureHeight,{format:Ci,type:ti,depthTexture:new $i(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let it={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new li(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function yt(Et){for(let jt=0;jt<Et.removed.length;jt++){let it=Et.removed[jt],le=I.indexOf(it);le>=0&&(I[le]=null,D[le].disconnect(it))}for(let jt=0;jt<Et.added.length;jt++){let it=Et.added[jt],le=I.indexOf(it);if(le===-1){for(let Ct=0;Ct<D.length;Ct++)if(Ct>=I.length){I.push(it),le=Ct;break}else if(I[Ct]===null){I[Ct]=it,le=Ct;break}if(le===-1)break}let j=D[le];j&&j.connect(it)}}function _t(Et,jt){jt===null?Et.matrixWorld.copy(Et.matrix):Et.matrixWorld.multiplyMatrices(jt.matrixWorld,Et.matrix),Et.matrixWorldInverse.copy(Et.matrixWorld).invert()}this.updateCamera=function(Et){if(s===null)return;let jt=Et.near,it=Et.far;g.texture!==null&&(g.depthNear>0&&(jt=g.depthNear),g.depthFar>0&&(it=g.depthFar)),mt.near=Y.near=F.near=jt,mt.far=Y.far=F.far=it,(z!==mt.near||ut!==mt.far)&&(s.updateRenderState({depthNear:mt.near,depthFar:mt.far}),z=mt.near,ut=mt.far),mt.layers.mask=Et.layers.mask|6,F.layers.mask=mt.layers.mask&-5,Y.layers.mask=mt.layers.mask&-3;let le=Et.parent,j=mt.cameras;_t(mt,le);for(let Ct=0;Ct<j.length;Ct++)_t(j[Ct],le);mt.projectionMatrix.copy(F.projectionMatrix),mt.projectionMatrixInverse.copy(F.projectionMatrixInverse),G===null&&Et.isPerspectiveCamera&&(G={camera:Et,fov:Et.fov,zoom:Et.zoom}),gt(Et,mt,le)};function gt(Et,jt,it){it===null?Et.matrix.copy(jt.matrixWorld):(Et.matrix.copy(it.matrixWorld),Et.matrix.invert(),Et.matrix.multiply(jt.matrixWorld)),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.updateMatrixWorld(!0),Et.projectionMatrix.copy(jt.projectionMatrix),Et.projectionMatrixInverse.copy(jt.projectionMatrixInverse),Et.isPerspectiveCamera&&(Et.fov=Bo*2*Math.atan(1/Et.projectionMatrix.elements[5]),Et.zoom=1)}this.getCamera=function(){return mt},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Et){l=Et,d!==null&&(d.fixedFoveation=Et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(mt)},this.getCameraTexture=function(Et){return m[Et]};let Pt=null;function Jt(Et,jt){if(u=jt.getViewerPose(c||a),y=jt,u!==null){let it=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let le=!1;it.length!==mt.cameras.length&&(mt.cameras.length=0,le=!0);for(let Re=0;Re<it.length;Re++){let xe=it[Re],$e=null;if(f!==null)$e=f.getViewport(xe);else{let Qe=p.getViewSubImage(d,xe);$e=Qe.viewport,Re===0&&(t.setRenderTargetTextures(T,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(T))}let ue=J[Re];ue===void 0&&(ue=new $n,ue.layers.enable(Re),ue.viewport=new En,J[Re]=ue),ue.matrix.fromArray(xe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(xe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set($e.x,$e.y,$e.width,$e.height),Re===0&&(mt.matrix.copy(ue.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale)),le===!0&&mt.cameras.push(ue)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=i.getBinding();let Re=p.getDepthInformation(it[0]);Re&&Re.isValid&&Re.texture&&g.init(Re,s.renderState)}if(j&&j.includes("camera-access")&&w){t.state.unbindTexture(),p=i.getBinding();for(let Re=0;Re<it.length;Re++){let xe=it[Re].camera;if(xe){let $e=m[xe];$e||($e=new ca,m[xe]=$e);let ue=p.getCameraImage(xe);$e.sourceTexture=ue}}}}for(let it=0;it<D.length;it++){let le=I[it],j=D[it];le!==null&&j!==void 0&&j.update(le,jt,c||a)}Pt&&Pt(Et,jt),jt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:jt}),y=null}let Ce=new df;Ce.setAnimationLoop(Jt),this.setAnimationLoop=function(Et){Pt=Et},this.dispose=function(){}}},Cx=new sn,Sf=new Ge;Sf.set(-1,0,0,0,1,0,0,0,1);function Px(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Eh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,L,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),w(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,L):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),L=b.envMap,T=b.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Sf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,L){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=L*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ix(n,t,e,i){let s={},r={};function a(b,L){let T=L.program;i.uniformBlockBinding(b,T,s[b.id])}function o(b,L){let T=s[b.id];T===void 0&&(y(b),T=l(b),s[b.id]=T,b.addEventListener("dispose",g));let D=L.program;i.updateUBOMapping(b,D);let I=t.render.frame;r[b.id]!==I&&(c(b),r[b.id]=I)}function l(b){let L=n.createBuffer(),T=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),L}function c(b){let L=s[b.id],T=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let I=0,v=T.length;I<v;I++){let E=T[I];if(Array.isArray(E))for(let G=0,F=E.length;G<F;G++)u(E[G],I,G,D);else u(E,I,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,L,T,D){if(d(b,L,T,D)===!0){let I=b.__offset,v=b.value;if(Array.isArray(v)){let E=0;for(let G=0;G<v.length;G++){let F=v[G],Y=w(F,!0);p(F,b.__data,E),E+=Y.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,b.__data)}}function p(b,L,T){typeof b=="number"||typeof b=="boolean"?L[T]=b:b.isMatrix3?(L[T]=b.elements[0],L[T+1]=b.elements[1],L[T+2]=b.elements[2],L[T+3]=0,L[T+4]=b.elements[3],L[T+5]=b.elements[4],L[T+6]=b.elements[5],L[T+7]=0,L[T+8]=b.elements[6],L[T+9]=b.elements[7],L[T+10]=b.elements[8],L[T+11]=0):ArrayBuffer.isView(b)?L.set(b.subarray(0,L.length-T),T):b.toArray(L,T)}function d(b,L,T,D){let I=b.value,v=L+"_"+T;if(Array.isArray(I)){D[v]===void 0&&(D[v]=[]);let E=D[v],G=!1;for(let F=0;F<I.length;F++)f(I[F],E,F)===!0&&(G=!0);return G}return f(I,D,v)}function f(b,L,T){if(L[T]===void 0)return typeof b=="number"||typeof b=="boolean"?L[T]=b:ArrayBuffer.isView(b)?L[T]=b.slice():L[T]=b.clone(),!0;{let D=L[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return L[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(D.equals(b)===!1)return D.copy(b),!0}}return!1}function y(b){let L=b.uniforms,T=0,D=16;for(let v=0,E=L.length;v<E;v++){let G=Array.isArray(L[v])?L[v]:[L[v]];for(let F=0,Y=G.length;F<Y;F++){let J=G[F],mt=Array.isArray(J.value)?J.value:[J.value],z=Array.isArray(L[v])||Array.isArray(J.value),ut=T;for(let ht=0,yt=mt.length;ht<yt;ht++){let _t=mt[ht],gt=w(_t,z),Pt=T%D,Jt=Pt%gt.boundary,Ce=Pt+Jt;T+=Jt,Ce!==0&&D-Ce<gt.storage&&(T+=D-Ce),ht===0&&(ut=T),T+=gt.storage}let ft=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new ft((T-ut)/Float32Array.BYTES_PER_ELEMENT),J.__offset=ut}}let I=T%D;return I>0&&(T+=D-I),b.__size=T,b.__cache={},this}function w(b,L){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=16,T.storage=48):b.isMatrix4?(T.boundary=16,T.storage=64):b.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",b),L===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function g(b){let L=b.target;L.removeEventListener("dispose",g),n.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function Dx(){return ki===null&&(ki=new na(Lx,16,16,xs,Ri),ki.name="DFG_LUT",ki.minFilter=Kn,ki.magFilter=Kn,ki.wrapS=Li,ki.wrapT=Li,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var ic=class{constructor(t={}){let{canvas:e=Id(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ti}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;let w=f,g=new Set([Sl,Ml,vl]),m=new Set([ti,Ai,Mr,Os,_l,xl]),b=new Uint32Array(4),L=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},D=null,I=null,v=[],E=[],G=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,Y=!1,J=null,mt=null,z=null,ut=null;this._outputColorSpace=Zn;let ft=0,ht=0,yt=null,_t=-1,gt=null,Pt=new En,Jt=new En,Ce=null,Et=new He(0),jt=0,it=e.width,le=e.height,j=1,Ct=null,Qt=null,Re=new En(0,0,it,le),xe=new En(0,0,it,le),$e=!1,ue=new ds,Qe=new Ho,fn=!1,Ve=!1,tn=new sn,Cn=new W,mn=new En,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},An=!1;function ge(){return yt===null?j:1}let X=i;function ee(S,k){return e.getContext(S,k)}let rn,dt,Dt,en,Ot,Te,C,M,Z,At,tt,Rt,qt,wt,bt,Vt,B,Tt,xt,Mt,Nt,Ut,pe;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",Oe,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),X===null){let k="webgl2";if(X=ee(k,S),X===null)throw ee(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(S){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),Be("WebGLRenderer: "+S.message),S}function Me(){rn=new Wg(X),rn.init(),Nt=new Ex(X,rn),dt=new Dg(X,rn,t,Nt),Dt=new wx(X,rn),dt.reversedDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),mt=X.createFramebuffer(),z=X.createFramebuffer(),ut=X.createFramebuffer(),en=new Yg(X),Ot=new hx,Te=new Tx(X,rn,Dt,Ot,dt,Nt,en),C=new Vg(F),M=new $p(X),Ut=new Ig(X,M),Z=new Xg(X,M,en,Ut),At=new $g(X,Z,M,Ut,en),Tt=new Zg(X,dt,Te),bt=new Ng(Ot),tt=new cx(F,C,rn,dt,Ut,bt),Rt=new Px(F,Ot),qt=new dx,wt=new xx(rn),B=new Pg(F,C,Dt,At,y,l),Vt=new bx(F,At,dt),pe=new Ix(X,en,dt,Dt),xt=new Lg(X,rn,en),Mt=new qg(X,rn,en),en.programs=tt.programs,F.capabilities=dt,F.extensions=rn,F.properties=Ot,F.renderLists=qt,F.shadowMap=Vt,F.state=Dt,F.info=en}w!==ti&&(G=new jg(w,e.width,e.height,o,s,r));let kt=new Wh(F,X);this.xr=kt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let S=rn.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=rn.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(it,le,!1))},this.getSize=function(S){return S.set(it,le)},this.setSize=function(S,k,lt=!0){if(kt.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}it=S,le=k,e.width=Math.floor(S*j),e.height=Math.floor(k*j),lt===!0&&(e.style.width=S+"px",e.style.height=k+"px"),G!==null&&G.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(it*j,le*j).floor()},this.setDrawingBufferSize=function(S,k,lt){it=S,le=k,j=lt,e.width=Math.floor(S*lt),e.height=Math.floor(k*lt),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(w===ti){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Pt)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,k,lt,K){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,k,lt,K),Dt.viewport(Pt.copy(Re).multiplyScalar(ge()).round())},this.getScissor=function(S){return S.copy(xe)},this.setScissor=function(S,k,lt,K){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,k,lt,K),Dt.scissor(Jt.copy(xe).multiplyScalar(ge()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){Dt.setScissorTest($e=S)},this.setOpaqueSort=function(S){Ct=S},this.setTransparentSort=function(S){Qt=S},this.getClearColor=function(S){return S.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,lt=!0){let K=0;if(S){let at=!1;if(yt!==null){let Bt=yt.texture.format;at=g.has(Bt)}if(at){let Bt=yt.texture.type,se=m.has(Bt),Wt=B.getClearColor(),Gt=B.getClearAlpha(),re=Wt.r,Pe=Wt.g,Se=Wt.b;se?(b[0]=re,b[1]=Pe,b[2]=Se,b[3]=Gt,X.clearBufferuiv(X.COLOR,0,b)):(L[0]=re,L[1]=Pe,L[2]=Se,L[3]=Gt,X.clearBufferiv(X.COLOR,0,L))}else K|=X.COLOR_BUFFER_BIT}k&&(K|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),J=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),B.dispose(),qt.dispose(),wt.dispose(),Te.dispose(),Ot.dispose(),C.dispose(),At.dispose(),Z.dispose(),Ut.dispose(),pe.dispose(),tt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",O),kt.removeEventListener("sessionend",V),ct.stop()};function ye(S){S.preventDefault(),bh("WebGLRenderer: Context Lost."),Y=!0}function Oe(){bh("WebGLRenderer: Context Restored."),Y=!1;let S=en.autoReset,k=Vt.enabled,lt=Vt.autoUpdate,K=Vt.needsUpdate,at=Vt.type;Me(),en.autoReset=S,Vt.enabled=k,Vt.autoUpdate=lt,Vt.needsUpdate=K,Vt.type=at}function Zt(S){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function A(S){let k=S.target;k.removeEventListener("dispose",A),x(k)}function x(S){U(S),Ot.remove(S)}function U(S){let k=Ot.get(S).programs;k!==void 0&&(k.forEach(function(lt){tt.releaseProgram(lt)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,lt,K,at,Bt){k===null&&(k=xn);let se=at.isMesh&&at.matrixWorld.determinantAffine()<0,Wt=ne(S,k,lt,K,at);Dt.setMaterial(K,se);let Gt=lt.index,re=1;if(K.wireframe===!0){if(Gt=Z.getWireframeAttribute(lt),Gt===void 0)return;re=2}let Pe=lt.drawRange,Se=lt.attributes.position,ce=Pe.start*re,Ie=(Pe.start+Pe.count)*re;Bt!==null&&(ce=Math.max(ce,Bt.start*re),Ie=Math.min(Ie,(Bt.start+Bt.count)*re)),Gt!==null?(ce=Math.max(ce,0),Ie=Math.min(Ie,Gt.count)):Se!=null&&(ce=Math.max(ce,0),Ie=Math.min(Ie,Se.count));let yn=Ie-ce;if(yn<0||yn===1/0)return;Ut.setup(at,K,Wt,lt,Gt);let P,N=xt;if(Gt!==null&&(P=M.get(Gt),N=Mt,N.setIndex(P)),at.isMesh)K.wireframe===!0?(Dt.setLineWidth(K.wireframeLinewidth*ge()),N.setMode(X.LINES)):N.setMode(X.TRIANGLES);else if(at.isLine){let Q=K.linewidth;Q===void 0&&(Q=1),Dt.setLineWidth(Q*ge()),at.isLineSegments?N.setMode(X.LINES):at.isLineLoop?N.setMode(X.LINE_LOOP):N.setMode(X.LINE_STRIP)}else at.isPoints?N.setMode(X.POINTS):at.isSprite&&N.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(rn.get("WEBGL_multi_draw"))N.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let Q=at._multiDrawStarts,q=at._multiDrawCounts,Xt=at._multiDrawCount,Lt=Gt?M.get(Gt).bytesPerElement:1,_e=Ot.get(K).currentProgram.getUniforms();for(let Ne=0;Ne<Xt;Ne++)_e.setValue(X,"_gl_DrawID",Ne),N.render(Q[Ne]/Lt,q[Ne])}else if(at.isInstancedMesh)N.renderInstances(ce,yn,at.count);else if(lt.isInstancedBufferGeometry){let Q=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,q=Math.min(lt.instanceCount,Q);N.renderInstances(ce,yn,q)}else N.render(ce,yn)};function _(S,k,lt,K){J!==null&&S.isNodeMaterial&&J.setObject(K,S),fn===!0&&bt.setState(S,lt,!1),S.transparent===!0&&S.side===_i&&S.forceSinglePass===!1?(S.side=Jn,S.needsUpdate=!0,et(S,k,K),S.side=_s,S.needsUpdate=!0,et(S,k,K),S.side=_i):et(S,k,K)}this.compile=function(S,k,lt=null){lt===null&&(lt=S),J!==null&&J.renderStart(S,k,lt),I=wt.get(lt),I.init(k),E.push(I),lt.traverseVisible(function(at){at.isLight&&at.layers.test(k.layers)&&(I.pushLight(at),at.castShadow&&I.pushShadow(at))}),S!==lt&&S.traverseVisible(function(at){at.isLight&&at.layers.test(k.layers)&&(I.pushLight(at),at.castShadow&&I.pushShadow(at))}),I.setupLights(),J!==null&&J.updateLights(I.state.lightsArray),Ve=this.localClippingEnabled,fn=bt.init(this.clippingPlanes,Ve),fn===!0&&bt.setGlobalState(this.clippingPlanes,k),J!==null&&Vt.render(I.state.shadowsArray,lt,k);let K=new Set;return S.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Bt=at.material;if(Bt)if(Array.isArray(Bt))for(let se=0;se<Bt.length;se++){let Wt=Bt[se];_(Wt,lt,k,at),K.add(Wt)}else _(Bt,lt,k,at),K.add(Bt)}),I=E.pop(),J!==null&&J.renderEnd(),K},this.compileAsync=function(S,k,lt=null){let K=this.compile(S,k,lt);return new Promise(at=>{function Bt(){if(K.forEach(function(se){let Gt=Ot.get(se).currentProgram;(Gt===void 0||Gt.isReady())&&K.delete(se)}),K.size===0){at(S);return}setTimeout(Bt,10)}rn.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let h=null;function R(S){h&&h(S)}function O(){ct.stop()}function V(){ct.start()}let ct=new df;ct.setAnimationLoop(R),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(S){h=S,kt.setAnimationLoop(S),S===null?ct.stop():ct.start()},kt.addEventListener("sessionstart",O),kt.addEventListener("sessionend",V),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;J!==null&&J.renderStart(S,k);let lt=kt.enabled===!0&&kt.isPresenting===!0,K=G!==null&&(yt===null||lt)&&G.begin(F,yt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(k),k=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,k,yt),I=wt.get(S,E.length),I.init(k),I.state.textureUnits=Te.getTextureUnits(),E.push(I),tn.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Qe.setFromArrayCamera(k):ue.setFromProjectionMatrix(tn,mi,k.reversedDepth),Ve=this.localClippingEnabled,fn=bt.init(this.clippingPlanes,Ve),D=qt.get(S,v.length),D.init(),v.push(D),this.info.render.frame++,kt.enabled===!0&&kt.isPresenting===!0){let se=F.xr.getDepthSensingMesh();se!==null&&St(se,k,-1/0,F.sortObjects)}St(S,k,0,F.sortObjects),D.finish(),J!==null&&J.updateLights(I.state.lightsArray),F.sortObjects===!0&&D.sort(Ct,Qt),An=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,An&&B.addToRenderList(D,S),this.info.autoReset===!0&&this.info.reset(),fn===!0&&bt.beginShadows();let at=I.state.shadowsArray;if(Vt.render(at,S,k),fn===!0&&bt.endShadows(),(K&&G.hasRenderPass())===!1){let se=D.opaque,Wt=D.transmissive;if(I.setupLights(),k.isArrayCamera){let Gt=k.cameras;if(Wt.length>0)for(let re=0,Pe=Gt.length;re<Pe;re++){let Se=Gt[re];rt(se,Wt,S,Se)}An&&B.render(S);for(let re=0,Pe=Gt.length;re<Pe;re++){let Se=Gt[re];pt(D,S,Se,Se.viewport)}}else Wt.length>0&&rt(se,Wt,S,k),An&&B.render(S),pt(D,S,k)}yt!==null&&ht===0&&(Te.updateMultisampleRenderTarget(yt),Te.updateRenderTargetMipmap(yt)),K&&G.end(F),S.isScene===!0&&S.onAfterRender(F,S,k),Ut.resetDefaultState(),_t=-1,gt=null,E.pop(),E.length>0?(I=E[E.length-1],Te.setTextureUnits(I.state.textureUnits),fn===!0&&bt.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,v.pop(),v.length>0?D=v[v.length-1]:D=null,J!==null&&J.renderEnd()};function St(S,k,lt,K){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)lt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)I.pushLight(S),S.castShadow&&I.pushShadow(S);else if(S.isSprite){let se=k.isArrayCamera?Qe:ue;if(!S.frustumCulled||S.intersectsFrustum(se)){K&&mn.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tn);let Wt=At.update(S),Gt=S.material;Gt.visible&&D.push(S,Wt,Gt,lt,mn.z,null,k)}}else if(S.isMesh||S.isLine||S.isPoints){let se=k.isArrayCamera?Qe:ue;if(!S.frustumCulled||S.intersectsFrustum(se)){let Wt=At.update(S),Gt=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),mn.copy(S.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),mn.copy(Wt.boundingSphere.center)),mn.applyMatrix4(S.matrixWorld).applyMatrix4(tn)),Array.isArray(Gt)){let re=Wt.groups;for(let Pe=0,Se=re.length;Pe<Se;Pe++){let ce=re[Pe],Ie=Gt[ce.materialIndex];Ie&&Ie.visible&&D.push(S,Wt,Ie,lt,mn.z,ce,k)}}else Gt.visible&&D.push(S,Wt,Gt,lt,mn.z,null,k)}}}let Bt=S.children;for(let se=0,Wt=Bt.length;se<Wt;se++)St(Bt[se],k,lt,K)}function pt(S,k,lt,K){let{opaque:at,transmissive:Bt,transparent:se}=S;I.setupLightsView(lt),fn===!0&&bt.setGlobalState(F.clippingPlanes,lt),K&&Dt.viewport(Pt.copy(K)),at.length>0&&ot(at,k,lt),Bt.length>0&&ot(Bt,k,lt),se.length>0&&ot(se,k,lt),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function rt(S,k,lt,K){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[K.id]===void 0){let ce=rn.has("EXT_color_buffer_half_float")||rn.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[K.id]=new li(1,1,{generateMipmaps:!0,type:ce?Ri:ti,minFilter:Ki,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nn.workingColorSpace})}let Bt=I.state.transmissionRenderTarget[K.id],se=K.viewport||Pt;Bt.setSize(se.z*F.transmissionResolutionScale,se.w*F.transmissionResolutionScale);let Wt=F.getRenderTarget(),Gt=F.getActiveCubeFace(),re=F.getActiveMipmapLevel();F.setRenderTarget(Bt),F.getClearColor(Et),jt=F.getClearAlpha(),jt<1&&F.setClearColor(16777215,.5),F.clear(),An&&B.render(lt);let Pe=F.toneMapping;F.toneMapping=Bi;let Se=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),I.setupLightsView(K),fn===!0&&bt.setGlobalState(F.clippingPlanes,K),ot(S,lt,K),Te.updateMultisampleRenderTarget(Bt),Te.updateRenderTargetMipmap(Bt),rn.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ie=0,yn=k.length;Ie<yn;Ie++){let P=k[Ie],{object:N,geometry:Q,material:q,group:Xt}=P;if(q.side===_i&&N.layers.test(K.layers)){let Lt=q.side;q.side=Jn,q.needsUpdate=!0,$(N,lt,K,Q,q,Xt),q.side=Lt,q.needsUpdate=!0,ce=!0}}ce===!0&&(Te.updateMultisampleRenderTarget(Bt),Te.updateRenderTargetMipmap(Bt))}F.setRenderTarget(Wt,Gt,re),F.setClearColor(Et,jt),Se!==void 0&&(K.viewport=Se),F.toneMapping=Pe}function ot(S,k,lt){let K=k.isScene===!0?k.overrideMaterial:null;for(let at=0,Bt=S.length;at<Bt;at++){let se=S[at],{object:Wt,geometry:Gt,group:re}=se,Pe=se.material;Pe.allowOverride===!0&&K!==null&&(Pe=K),Wt.layers.test(lt.layers)&&$(Wt,k,lt,Gt,Pe,re)}}function $(S,k,lt,K,at,Bt){J!==null&&at.isNodeMaterial&&J.setObject(S,at),S.onBeforeRender(F,k,lt,K,at,Bt),S.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),at.onBeforeRender(F,k,lt,K,S,Bt),at.transparent===!0&&at.side===_i&&at.forceSinglePass===!1?(at.side=Jn,at.needsUpdate=!0,F.renderBufferDirect(lt,k,K,at,S,Bt),at.side=_s,at.needsUpdate=!0,F.renderBufferDirect(lt,k,K,at,S,Bt),at.side=_i):F.renderBufferDirect(lt,k,K,at,S,Bt),S.onAfterRender(F,k,lt,K,at,Bt)}function vt(S){let k=0;for(let lt of S)lt.texture!==null&&k++;return k}function et(S,k,lt){k.isScene!==!0&&(k=xn);let K=Ot.get(S),at=I.state.lights,Bt=I.state.shadowsArray,se=at.state.version,Wt=tt.getParameters(S,at.state,Bt,k,lt,I.state.lightProbeGridArray),Gt=tt.getProgramCacheKey(Wt),re=K.programs;K.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let Pe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;K.envMap=C.get(S.envMap||K.environment,Pe),K.envMapRotation=K.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,re===void 0&&(S.addEventListener("dispose",A),re=new Map,K.programs=re,K.programVariants=new Map);let Se=re.get(Gt);if(Se!==void 0){if(K.currentProgram===Se&&K.lightsStateVersion===se)return zt(S,Wt),Se}else Wt.uniforms=tt.getUniforms(S),J!==null&&S.isNodeMaterial&&J.build(S,lt,Wt),S.onBeforeCompile(Wt,F),Se=tt.acquireProgram(Wt,Gt),re.set(Gt,Se),K.uniforms=Wt.uniforms;let ce=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ce.clippingPlanes=bt.uniform),zt(S,Wt),K.needsLights=It(S),K.lightsStateVersion=se,K.needsLights&&(ce.ambientLightColor.value=at.state.ambient,ce.lightProbe.value=at.state.probe,ce.sunLights.value=at.state.sun,ce.sunLightShadows.value=at.state.sunShadow,ce.directionalLights.value=at.state.directional,ce.directionalLightShadows.value=at.state.directionalShadow,ce.spotLights.value=at.state.spot,ce.spotLightShadows.value=at.state.spotShadow,ce.rectAreaLights.value=at.state.rectArea,ce.ltc_1.value=at.state.rectAreaLTC1,ce.ltc_2.value=at.state.rectAreaLTC2,ce.pointLights.value=at.state.point,ce.pointLightShadows.value=at.state.pointShadow,ce.hemisphereLights.value=at.state.hemi,ce.sunShadowMatrix.value=at.state.sunShadowMatrix,ce.sunShadowCascade.value=at.state.sunShadowCascade,ce.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ce.spotLightMatrix.value=at.state.spotLightMatrix,ce.spotLightMap.value=at.state.spotLightMap,ce.pointShadowMatrix.value=at.state.pointShadowMatrix),K.numLightProbeGrids=vt(I.state.lightProbeGridArray),K.currentProgram=Se,K.uniformsList=null,Se}function st(S,k,lt,K,at){let Bt=Ot.get(S),se=Bt.currentProgram.id+","+K+","+at,Wt=Bt.programVariants.get(se);return Wt===void 0?(Wt=et(S,k,lt),Bt.programVariants.set(se,Wt)):(Bt.currentProgram=Wt,Bt.uniformsList=null,Bt.outputColorSpace=K,Bt.toneMapping=at),Wt}function Ht(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=br.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function zt(S,k){let lt=Ot.get(S);lt.outputColorSpace=k.outputColorSpace,lt.batching=k.batching,lt.batchingColor=k.batchingColor,lt.instancing=k.instancing,lt.instancingColor=k.instancingColor,lt.instancingMorph=k.instancingMorph,lt.skinning=k.skinning,lt.morphTargets=k.morphTargets,lt.morphNormals=k.morphNormals,lt.morphColors=k.morphColors,lt.morphTargetsCount=k.morphTargetsCount,lt.numClippingPlanes=k.numClippingPlanes,lt.numIntersection=k.numClipIntersection,lt.vertexAlphas=k.vertexAlphas,lt.vertexTangents=k.vertexTangents,lt.toneMapping=k.toneMapping}function ne(S,k,lt,K,at){k.isScene!==!0&&(k=xn),Te.resetTextureUnits();let Bt=k.fog,se=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Wt=yt===null?F.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:nn.workingColorSpace,Gt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,re=C.get(K.envMap||se,Gt),Pe=K.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Se=!!lt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ce=!!lt.morphAttributes.position,Ie=!!lt.morphAttributes.normal,yn=!!lt.morphAttributes.color,P=Bi;K.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(P=F.toneMapping);let N=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Q=N!==void 0?N.length:0,q=Ot.get(K),Xt=I.state.lights;if(fn===!0&&(Ve===!0||S!==gt)){let gn=S===gt&&K.id===_t;bt.setState(K,S,gn)}let Lt=!1,_e=!1;K.version===q.__version?q.needsLights&&q.lightsStateVersion!==Xt.state.version||at.isBatchedMesh&&q.batching===!1||!at.isBatchedMesh&&q.batching===!0||at.isBatchedMesh&&q.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&q.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&q.instancing===!1||!at.isInstancedMesh&&q.instancing===!0||at.isSkinnedMesh&&q.skinning===!1||!at.isSkinnedMesh&&q.skinning===!0||at.isInstancedMesh&&q.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&q.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&q.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&q.instancingMorph===!1&&at.morphTexture!==null||q.envMap!==re||K.fog===!0&&q.fog!==Bt||q.numClippingPlanes!==void 0&&(q.numClippingPlanes!==bt.numPlanes||q.numIntersection!==bt.numIntersection)||q.vertexAlphas!==Pe||q.vertexTangents!==Se||q.morphTargets!==ce||q.morphNormals!==Ie||q.morphColors!==yn||q.morphTargetsCount!==Q||q.numLightProbeGrids!==vt(I.state.lightProbeGridArray)?Lt=!0:(q.outputColorSpace!==Wt||q.toneMapping!==P)&&(_e=!0):(Lt=!0,q.__version=K.version);let Ne=q.currentProgram;(Lt===!0||_e===!0)&&(Ne=_e===!0?st(K,k,at,Wt,P):et(K,k,at),J&&K.isNodeMaterial&&J.onUpdateProgram(K,Ne,q));let ke=!1,qe=!1,vn=!1,Ee=Ne.getUniforms(),De=q.uniforms;if(Dt.useProgram(Ne.program)&&(ke=!0,qe=!0,vn=!0),K.id!==_t&&(_t=K.id,qe=!0),ke||gt!==S){Dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ee.setValue(X,"projectionMatrix",S.projectionMatrix),Ee.setValue(X,"viewMatrix",S.matrixWorldInverse);let Tn=Ee.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,Cn.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&Ee.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ee.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),gt!==S&&(gt=S,qe=!0,vn=!0)}if(q.needsLights&&(Xt.state.sunShadowMap.length>0&&Ee.setValue(X,"sunShadowMap",Xt.state.sunShadowMap,Te),Xt.state.directionalShadowMap.length>0&&Ee.setValue(X,"directionalShadowMap",Xt.state.directionalShadowMap,Te),Xt.state.spotShadowMap.length>0&&Ee.setValue(X,"spotShadowMap",Xt.state.spotShadowMap,Te),Xt.state.pointShadowMap.length>0&&Ee.setValue(X,"pointShadowMap",Xt.state.pointShadowMap,Te)),at.isSkinnedMesh){Ee.setOptional(X,at,"bindMatrix"),Ee.setOptional(X,at,"bindMatrixInverse");let gn=at.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ee.setValue(X,"boneTexture",gn.boneTexture,Te))}at.isBatchedMesh&&(Ee.setOptional(X,at,"batchingTexture"),Ee.setValue(X,"batchingTexture",at._matricesTexture,Te),Ee.setOptional(X,at,"batchingIdTexture"),Ee.setValue(X,"batchingIdTexture",at._indirectTexture,Te),Ee.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Ee.setValue(X,"batchingColorTexture",at._colorsTexture,Te));let Pn=lt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Tt.update(at,lt,Ne),(qe||q.receiveShadow!==at.receiveShadow)&&(q.receiveShadow=at.receiveShadow,Ee.setValue(X,"receiveShadow",at.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(De.envMapIntensity.value=k.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Dx()),qe){if(Ee.setValue(X,"toneMappingExposure",F.toneMappingExposure),q.needsLights&&ve(De,vn),Bt&&K.fog===!0&&Rt.refreshFogUniforms(De,Bt),Rt.refreshMaterialUniforms(De,K,j,le,I.state.transmissionRenderTarget[S.id]),q.needsLights&&q.numLightProbeGrids>0){let gn=T,Tn=0;for(let zn of I.state.lightProbeGridArray)zn.texture!==null&&(gn.textures[Tn]=zn.texture,gn.min[Tn]=zn.boundingBox.min,gn.max[Tn]=zn.boundingBox.max,gn.resolution[Tn]=zn.resolution,Tn++);for(let zn in gn)gn[zn].length=Tn;De.probesSH.value=gn.textures,De.probesMin.value=gn.min,De.probesMax.value=gn.max,De.probesResolution.value=gn.resolution}br.upload(X,Ht(q),De,Te)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(br.upload(X,Ht(q),De,Te),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ee.setValue(X,"center",at.center),Ee.setValue(X,"modelViewMatrix",at.modelViewMatrix),Ee.setValue(X,"normalMatrix",at.normalMatrix),Ee.setValue(X,"modelMatrix",at.matrixWorld),K.uniformsGroups!==void 0){let gn=K.uniformsGroups;for(let Tn=0,zn=gn.length;Tn<zn;Tn++){let Mi=gn[Tn];pe.update(Mi,Ne),pe.bind(Mi,Ne)}}return Ne}function ve(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function It(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ft},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(S,k,lt){let K=Ot.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ot.get(S.texture).__webglTexture=k,Ot.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:lt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let lt=Ot.get(S);lt.__webglFramebuffer=k,lt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,lt=0){yt=S,ft=k,ht=lt;let K=null,at=!1,Bt=!1;if(S){let Wt=Ot.get(S);if(Wt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(X.FRAMEBUFFER,Wt.__webglFramebuffer),Pt.copy(S.viewport),Jt.copy(S.scissor),Ce=S.scissorTest,Dt.viewport(Pt),Dt.scissor(Jt),Dt.setScissorTest(Ce),_t=-1;return}else if(Wt.__webglFramebuffer===void 0)Te.setupRenderTarget(S);else if(Wt.__hasExternalTextures)Te.rebindTextures(S,Ot.get(S.texture).__webglTexture,Ot.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Pe=S.depthTexture;if(Wt.__boundDepthTexture!==Pe){if(Pe!==null&&Ot.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(S)}}let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Bt=!0);let re=Ot.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(re[k])?K=re[k][lt]:K=re[k],at=!0):S.samples>0&&Te.useMultisampledRTT(S)===!1?K=Ot.get(S).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[lt]:K=re,Pt.copy(S.viewport),Jt.copy(S.scissor),Ce=S.scissorTest}else Pt.copy(Re).multiplyScalar(j).floor(),Jt.copy(xe).multiplyScalar(j).floor(),Ce=$e;if(lt!==0&&(K=mt),Dt.bindFramebuffer(X.FRAMEBUFFER,K)&&Dt.drawBuffers(S,K),Dt.viewport(Pt),Dt.scissor(Jt),Dt.setScissorTest(Ce),at){let Wt=Ot.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+k,Wt.__webglTexture,lt)}else if(Bt){let Wt=k;for(let Gt=0;Gt<S.textures.length;Gt++){let re=Ot.get(S.textures[Gt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Gt,re.__webglTexture,lt,Wt)}}else if(S!==null&&lt!==0){let Wt=Ot.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Wt.__webglTexture,lt)}_t=-1};function We(S){let k=Ot.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=dt.textureFormatReadable(S.format),k.__typeReadable=dt.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,lt,K,at,Bt,se,Wt=0){if(!(S&&S.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&se!==void 0&&(Gt=Gt[se],Array.isArray(Gt)&&(Gt=Gt[0])),Gt){Dt.bindFramebuffer(X.FRAMEBUFFER,Gt);try{let re=S.textures[Wt],Pe=re.format,Se=re.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Wt);let ce=We(re);if(ce.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ce.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-K&&lt>=0&&lt<=S.height-at&&X.readPixels(k,lt,K,at,Nt.convert(Pe),Nt.convert(Se),Bt)}finally{let re=yt!==null?Ot.get(yt).__webglFramebuffer:null;Dt.bindFramebuffer(X.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(S,k,lt,K,at,Bt,se,Wt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&se!==void 0&&(Gt=Gt[se],Array.isArray(Gt)&&(Gt=Gt[0])),Gt)if(k>=0&&k<=S.width-K&&lt>=0&&lt<=S.height-at){Dt.bindFramebuffer(X.FRAMEBUFFER,Gt);let re=S.textures[Wt],Pe=re.format,Se=re.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Wt);let ce=We(re);if(ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ie),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(k,lt,K,at,Nt.convert(Pe),Nt.convert(Se),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let yn=yt!==null?Ot.get(yt).__webglFramebuffer:null;Dt.bindFramebuffer(X.FRAMEBUFFER,yn);let P=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Dd(X,P,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ie),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ie),X.deleteSync(P),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,lt=0){let K=Math.pow(2,-lt),at=Math.floor(S.image.width*K),Bt=Math.floor(S.image.height*K),se=k!==null?k.x:0,Wt=k!==null?k.y:0;Te.setTexture2D(S,0),X.copyTexSubImage2D(X.TEXTURE_2D,lt,0,0,se,Wt,at,Bt),Dt.unbindTexture()},this.copyTextureToTexture=function(S,k,lt=null,K=null,at=0,Bt=0){let se,Wt,Gt,re,Pe,Se,ce,Ie,yn,P=S.isCompressedTexture?S.mipmaps[Bt]:S.image;if(lt!==null)se=lt.max.x-lt.min.x,Wt=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,re=lt.min.x,Pe=lt.min.y,Se=lt.isBox3?lt.min.z:0;else{let Ee=Math.pow(2,-at);se=Math.floor(P.width*Ee),Wt=Math.floor(P.height*Ee),S.isDataArrayTexture?Gt=P.depth:S.isData3DTexture?Gt=Math.floor(P.depth*Ee):Gt=1,re=0,Pe=0,Se=0}K!==null?(ce=K.x,Ie=K.y,yn=K.z):(ce=0,Ie=0,yn=0);let N=Nt.convert(k.format),Q=Nt.convert(k.type),q;k.isData3DTexture?(Te.setTexture3D(k,0),q=X.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Te.setTexture2DArray(k,0),q=X.TEXTURE_2D_ARRAY):(Te.setTexture2D(k,0),q=X.TEXTURE_2D),Dt.activeTexture(X.TEXTURE0),Dt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,k.flipY),Dt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Dt.pixelStorei(X.UNPACK_ALIGNMENT,k.unpackAlignment);let Xt=Dt.getParameter(X.UNPACK_ROW_LENGTH),Lt=Dt.getParameter(X.UNPACK_IMAGE_HEIGHT),_e=Dt.getParameter(X.UNPACK_SKIP_PIXELS),Ne=Dt.getParameter(X.UNPACK_SKIP_ROWS),ke=Dt.getParameter(X.UNPACK_SKIP_IMAGES);Dt.pixelStorei(X.UNPACK_ROW_LENGTH,P.width),Dt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,P.height),Dt.pixelStorei(X.UNPACK_SKIP_PIXELS,re),Dt.pixelStorei(X.UNPACK_SKIP_ROWS,Pe),Dt.pixelStorei(X.UNPACK_SKIP_IMAGES,Se);let qe=S.isDataArrayTexture||S.isData3DTexture,vn=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let Ee=Ot.get(S),De=Ot.get(k),Pn=Ot.get(Ee.__renderTarget),gn=Ot.get(De.__renderTarget);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let Tn=0;Tn<Gt;Tn++)qe&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(S).__webglTexture,at,Se+Tn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(k).__webglTexture,Bt,yn+Tn)),X.blitFramebuffer(re,Pe,re+se,Pe+Wt,ce,Ie,ce+se,Ie+Wt,X.DEPTH_BUFFER_BIT,X.NEAREST);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||S.isRenderTargetTexture||Ot.has(S)){let Ee=Ot.get(S),De=Ot.get(k);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,z),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ut);for(let Pn=0;Pn<Gt;Pn++)qe?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ee.__webglTexture,at,Se+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ee.__webglTexture,at),vn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,De.__webglTexture,Bt,yn+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,De.__webglTexture,Bt),at!==0?X.blitFramebuffer(re,Pe,re+se,Pe+Wt,ce,Ie,ce+se,Ie+Wt,X.COLOR_BUFFER_BIT,X.NEAREST):vn?X.copyTexSubImage3D(q,Bt,ce,Ie,yn+Pn,re,Pe,se,Wt):X.copyTexSubImage2D(q,Bt,ce,Ie,re,Pe,se,Wt);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else vn?S.isDataTexture||S.isData3DTexture?X.texSubImage3D(q,Bt,ce,Ie,yn,se,Wt,Gt,N,Q,P.data):k.isCompressedArrayTexture?X.compressedTexSubImage3D(q,Bt,ce,Ie,yn,se,Wt,Gt,N,P.data):X.texSubImage3D(q,Bt,ce,Ie,yn,se,Wt,Gt,N,Q,P):S.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,ce,Ie,se,Wt,N,Q,P.data):S.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,ce,Ie,P.width,P.height,N,P.data):X.texSubImage2D(X.TEXTURE_2D,Bt,ce,Ie,se,Wt,N,Q,P);Dt.pixelStorei(X.UNPACK_ROW_LENGTH,Xt),Dt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt),Dt.pixelStorei(X.UNPACK_SKIP_PIXELS,_e),Dt.pixelStorei(X.UNPACK_SKIP_ROWS,Ne),Dt.pixelStorei(X.UNPACK_SKIP_IMAGES,ke),Bt===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&X.generateMipmap(q),Dt.unbindTexture()},this.initRenderTarget=function(S){Ot.get(S).__webglFramebuffer===void 0&&Te.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Te.setTextureCube(S,0):S.isData3DTexture?Te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Te.setTexture2DArray(S,0):Te.setTexture2D(S,0),Dt.unbindTexture()},this.resetState=function(){ft=0,ht=0,yt=null,Dt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=nn._getDrawingBufferColorSpace(t),e.unpackColorSpace=nn._getUnpackColorSpace()}};var za=Math.PI/180,ei=9.81,Xh=0,Tr=1,wf={half:16},an={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};an.height=an.steps*an.rise;an.length=an.steps*an.run;var be={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},yi={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-1.15,an.height,an.z],attacker:[-5.2,an.height+1.5,an.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,be.floor,be.z],attacker:[-6.2,be.floor+1.5,be.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};function Xn(n,t){if(t>be.z-30){let e=t-be.z;return Math.abs(e)>be.halfWidth||n<-be.back||n>be.wall?0:n<0?be.floor:Math.abs(e)<be.open?be.floor+be.sill:be.top}if(t>an.z-30){let e=t-an.z;return Math.abs(e)>an.halfWidth||n<-an.back||n>=an.length?0:n<=0?an.height:Math.max(0,an.height-(Math.floor(n/an.run)+1)*an.rise)}return 0}var ln=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],he=Object.fromEntries(ln.map((n,t)=>[n.name,t])),Qi=.44,Er=.425,ac=-.08,oc=.1,Fx=.205,Ke={stretch:1,over0:.05,over1:0,kv:1.5,kp:.7,foot1:.09,foot2:.13,thr:.115,tscale:.8,land:.8,swingK:3200,swingMax:900,clear:.1,bulge:.02,yawK:120,yawD:18,yawMax:35,swingHip:.3,trunkK:1400,trunkD:126,hipMax:400,aimUntil:.85,landAt:1.25,firstAim:.32,brace:0},qh=.85;var Yh=.915,lc={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:130,stun:.55,bleed:.35,blow:6.3},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},bf={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},Ux=1.2,Kh=[0,5,30,80],Ox=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),Bx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},kx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function ts(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function Zh(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function ni(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}var Ga=n=>[-n[0],-n[1],-n[2],n[3]],Je=(n,t,e)=>Math.max(t,Math.min(e,n));function Ar(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function $h(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Tf(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(Xh,Tr),e.EnableCollision(Tr,Tr);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(Xh,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Tr,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(_,h,R,O,V=.85){let ct=[(R[0]+O[0])/2,(R[1]+O[1])/2,(R[2]+O[2])/2],St=[(O[0]-R[0])/2,(O[1]-R[1])/2,(O[2]-R[2])/2],pt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(St[0],St[1],St[2]),Math.min(.02,St[0]*.5,St[1]*.5,St[2]*.5)),new n.RVec3(ct[0],ct[1],ct[2]),o,n.EMotionType_Static,Xh);pt.mFriction=V,pt.mRestitution=.03,a.AddBody(a.CreateBody(pt).GetID(),n.EActivation_DontActivate),h&&p.push({c:ct,h:St,kind:h,level:_})}d("all",null,[-50,-1,-40],[50,0,190]);{let _=an.z-an.halfWidth,h=an.z+an.halfWidth;d("stairs","landing",[-an.back,0,_],[0,an.height,h]);for(let R=0;R<an.steps-1;R++)d("stairs","step",[R*an.run,0,_],[(R+1)*an.run,an.height-(R+1)*an.rise,h],.13);d("stairs","wall",[-an.back,0,_-.3],[an.length+3,an.height+2.6,_])}let f={tiles:[],panes:[],frame:[]};{let _=be.z-be.halfWidth,h=be.z+be.halfWidth,R=be.floor;d("window","building",[-be.back,0,_],[be.wall,R,h]),d("window","wall",[0,R,_],[be.wall,be.top,be.z-be.open]),d("window","wall",[0,be.lintel,be.z-be.open],[be.wall,be.top,be.z+be.open]),d("window","sill",[0,R,be.z-be.open],[be.wall,R+be.sill,be.z+be.open]);let O=be.glassX,V=be.z-be.panes*be.pane/2,ct=be.glassY,St=be.panes*be.pane,pt=.035;for(let $=0;$<=be.panes;$++)d("window","frame",[O+$*be.pane-pt,ct-.09,V-pt],[O+$*be.pane+pt,ct-.012,V+St+pt]),d("window","frame",[O-pt,ct-.09,V+$*be.pane-pt],[O+St+pt,ct-.012,V+$*be.pane+pt]);for(let[$,vt]of[[O,V],[O+St,V],[O,V+St],[O+St,V+St]])d("window","frame",[$-.05,0,vt-.05],[$+.05,ct-.09,vt+.05]);let rt=$h(99),ot=($,vt,et,st,Ht,zt)=>{let ne=et-$,ve=st-vt;if(Ht===0||ne<.3&&ve<.3){zt.push([$,vt,et,st]);return}let It=.32+.36*rt();ne>ve?(ot($,vt,$+ne*It,st,Ht-1,zt),ot($+ne*It,vt,et,st,Ht-1,zt)):(ot($,vt,et,vt+ve*It,Ht-1,zt),ot($,vt+ve*It,et,st,Ht-1,zt))};for(let $=0;$<be.panes;$++)for(let vt=0;vt<be.panes;vt++){let st=O+$*be.pane+.04,Ht=V+vt*be.pane+.04,zt={broken:!1,min:[st-.04,Ht-.04],max:[st+be.pane-.04,Ht+be.pane-.04],y:ct,tiles:[]},ne=[];ot(st,Ht,st+be.pane-2*.04,Ht+be.pane-2*.04,3,ne);for(let ve of ne){let It=[(ve[2]-ve[0])/2,.007,(ve[3]-ve[1])/2],We=[(ve[0]+ve[2])/2,ct,(ve[1]+ve[3])/2],S=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(It[0],It[1],It[2]),.002),new n.RVec3(We[0],We[1],We[2]),o,n.EMotionType_Static,Tr);S.mAllowDynamicOrKinematic=!0,S.mFriction=.5,S.mRestitution=.15,S.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,S.mMassPropertiesOverride.mMass=Math.max(.15,It[0]*It[2]*4*12);let k=a.CreateBody(S),lt=new n.BodyID(k.GetID().GetIndexAndSequenceNumber());a.AddBody(lt,n.EActivation_DontActivate),zt.tiles.push(f.tiles.length),f.tiles.push({id:lt,home:We,h:It})}f.panes.push(zt)}}function y(_,h){_.broken=!0,it.glass++;for(let R of _.tiles){let O=f.tiles[R];a.SetMotionType(O.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(h[0]*.45+(Qt()-.5)*2.2,h[1]*.5-Qt()*1.2,h[2]*.45+(Qt()-.5)*2.2);let V=new n.Vec3((Qt()-.5)*14,(Qt()-.5)*6,(Qt()-.5)*14);a.SetLinearAndAngularVelocity(O.id,l,V),n.destroy(V)}ue.push({type:"glass",pos:[(_.min[0]+_.max[0])/2,_.y,(_.min[1]+_.max[1])/2]})}function w(){for(let _ of f.tiles)a.SetMotionType(_.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(_.home[0],_.home[1],_.home[2]),a.SetPositionAndRotation(_.id,c,o,n.EActivation_DontActivate);for(let _ of f.panes)_.broken=!1}let g=new n.Skeleton;for(let _ of ln)g.AddJoint(new n.JPHString(_.name,_.name.length),_.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(ln.length),ln.forEach((_,h)=>{let R=m.mParts.at(h);if(R.SetShape(new n.CapsuleShape(_.hh,_.r)),R.mPosition=new n.RVec3(_.c[0],_.c[1],_.c[2]),R.mRotation=o,R.mMotionType=n.EMotionType_Dynamic,R.mMotionQuality=n.EMotionQuality_LinearCast,R.mObjectLayer=Tr,R.mFriction=.7,R.mRestitution=.05,R.mAngularDamping=.3,R.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,R.mMassPropertiesOverride.mMass=_.mass,_.strength=_.mass*26,!(_.parent<0))if(_.type==="st"){let O=new n.SwingTwistConstraintSettings;O.mSpace=n.EConstraintSpace_WorldSpace,O.mPosition1=O.mPosition2=new n.RVec3(_.j[0],_.j[1],_.j[2]),O.mTwistAxis1=O.mTwistAxis2=new n.Vec3(_.twist[0],_.twist[1],_.twist[2]),O.mPlaneAxis1=O.mPlaneAxis2=new n.Vec3(1,0,0),O.mNormalHalfConeAngle=O.mPlaneHalfConeAngle=_.cone*za,O.mTwistMinAngle=-_.tw*za,O.mTwistMaxAngle=_.tw*za,O.mMaxFrictionTorque=_.mass*.4;for(let V of[O.mSwingMotorSettings,O.mTwistMotorSettings])V.mSpringSettings.mFrequency=8,V.mSpringSettings.mDamping=1,V.mMinTorqueLimit=-_.strength,V.mMaxTorqueLimit=_.strength;R.mToParent=O}else{let O=new n.HingeConstraintSettings;O.mSpace=n.EConstraintSpace_WorldSpace,O.mPoint1=O.mPoint2=new n.RVec3(_.j[0],_.j[1],_.j[2]),O.mHingeAxis1=O.mHingeAxis2=new n.Vec3(0,0,1),O.mNormalAxis1=O.mNormalAxis2=new n.Vec3(1,0,0),O.mLimitsMin=_.min*za,O.mLimitsMax=_.max*za,O.mMaxFrictionTorque=_.mass*.4,O.mMotorSettings.mSpringSettings.mFrequency=8,O.mMotorSettings.mSpringSettings.mDamping=1,O.mMotorSettings.mMinTorqueLimit=-_.strength,O.mMotorSettings.mMaxTorqueLimit=_.strength,R.mToParent=O}});let b=0,L=ln.map(_=>(b+=_.mass,_.mass));m.DisableParentChildCollisions();{let _=n.castObject(m.mParts.at(0).mCollisionGroup.GetGroupFilter(),n.GroupFilterTable);for(let h of[he.uleg_l,he.lleg_l])for(let R of[he.uleg_r,he.lleg_r])_.DisableCollision(h,R)}m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let D=ln.map((_,h)=>new n.BodyID(T.GetBodyID(h).GetIndexAndSequenceNumber())),I=ln.map((_,h)=>{if(_.parent<0)return null;let R=T.GetConstraint(h-1);return _.type==="st"?n.castObject(R,n.SwingTwistConstraint):n.castObject(R,n.HingeConstraint)}),v=ln.length,E=(_,h)=>{let R=a.GetPosition(D[_]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},G=(_,h)=>{let R=a.GetLinearVelocity(D[_]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},F=(_,h)=>{let R=a.GetRotation(D[_]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h[3]=R.GetW(),h},Y=(_,h)=>{let R=a.GetAngularVelocity(D[_]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},J=_=>E(_,[0,0,0]),mt=(_,h)=>{let R=a.GetPosition(_);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},z=(_,h)=>{let R=a.GetRotation(_);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h[3]=R.GetW(),h};function ut(_,h,R,O,V){l.Set(h,R,O),V?(c.Set(V[0],V[1],V[2]),a.AddForce(D[_],l,c,n.EActivation_Activate)):a.AddForce(D[_],l,n.EActivation_Activate)}function ft(_,h,R,O,V){l.Set(h,R,O),V?(c.Set(V[0],V[1],V[2]),a.AddImpulse(D[_],l,c)):a.AddImpulse(D[_],l)}let ht=new Float32Array(v).fill(1),yt=new Float32Array(v),_t=new Float32Array(v).fill(-1),gt=new Float32Array(v*3),Pt=new Float32Array(v);function Jt(_,h){u.Set(h[0],h[1],h[2],h[3]),I[_].SetTargetOrientationCS(u)}let Ce=1,Et=(_,h,R,O=0)=>Zh(Zh(ts(0,1,0,_),ts(0,0,1,h*R)),ts(1,0,0,O*R*Ce));function jt(){for(let _=1;_<v;_++){let h=ht[_]*(1-yt[_]);if(Math.abs(h-_t[_])<.02&&!(h===0&&_t[_]!==0))continue;_t[_]=h;let R=ln[_],O=I[_],V=h>.02?n.EMotorState_Position:n.EMotorState_Off,ct=R.strength*h,St=2.5+5.5*h;if(R.type==="st"){for(let pt of[O.GetSwingMotorSettings(),O.GetTwistMotorSettings()])pt.mMinTorqueLimit=-ct,pt.mMaxTorqueLimit=ct,pt.mSpringSettings.mFrequency=St;O.SetSwingMotorState(V),O.SetTwistMotorState(V)}else{let pt=O.GetMotorSettings();pt.mMinTorqueLimit=-ct,pt.mMaxTorqueLimit=ct,pt.mSpringSettings.mFrequency=St,O.SetMotorState(V)}}}let it={},le=[],j=[{shin:he.lleg_l,thigh:he.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0},{shin:he.lleg_r,thigh:he.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0}],Ct={},Qt=$h(1),Re=0,xe=yi.yard,$e="yard",ue=[],Qe=[];function fn(){ln.forEach((_,h)=>{c.Set(xe.start[0]+_.c[0],xe.start[1]+_.c[1]-.03,xe.start[2]+_.c[2]),a.SetPositionAndRotation(D[h],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(D[h],l,l)}),ht.fill(1),yt.fill(0),_t.fill(-1),gt.fill(0),Pt.fill(0),le.length=0,w(),Qt=$h(1234+77*Re++),Object.assign(it,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:xe.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Ct,{support:1,hT:xe.start[1]+Yh,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Qt()*6.28,Qt()*6.28,Qt()*6.28,Qt()*6.28],lastCom:[xe.start[0],xe.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,load:0,buckleLeg:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let _ of j)_.swing=!1,_.hurt=0,_.broken=0,_.kneeDown=!1,_.planted=[xe.start[0],xe.start[2]+_.side*oc],_.t=0;jt()}function Ve(_){it.alive&&(it.alive=!1,it.diedAt=it.time,it.outcome=_,Qe.push({type:"dead",cause:_,pos:J(he.head),time:it.time}))}function tn(){it.ko||!it.alive||(it.ko=!0,Qe.push({type:"out",pos:J(he.head)}))}function Cn(_,h){let R=ln[_].zone,O=ln[_].side===1?"_l":"_r";if(R==="head")return h[0]<-.45?h[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:h[1]<-.55?[["jaw",1]]:[["skull",1]];if(_===he.chest){let V=h[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(h[2])>.55||h[1]>.5)&&V.push(["collarbone"+(h[2]>=0?"_l":"_r"),.9]),V}return _===he.pelvis?h[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:R==="arm"?ln[ln[_].parent].zone==="arm"?h[1]<-.35?[["wrist"+O,1]]:[["forearm"+O,1]]:h[1]>.5?[["humerus"+O,.8],["collarbone"+O,.8]]:[["humerus"+O,1]]:R==="thigh"?[["femur"+O,1]]:h[1]>.35?[["kneecap"+O,1]]:h[1]<-.5?[["ankle"+O,1]]:[["tibia"+O,1]]}function mn(_,h,R,O){let V=_.split("_")[0],ct=bf[V];for(;h>0&&!ct[h-1];)h--;let St=it.bones[_]||0;if(h<=St)return 0;it.bones[_]=h;let pt=_.endsWith("_l")?1:_.endsWith("_r")?-1:0;Qe.push({type:"injury",bone:_,base:V,side:pt,level:h,was:St,pos:[R[0],R[1],R[2]],cause:O});let rt=pt===1?he.uarm_l:he.uarm_r,ot=pt===1?he.larm_l:he.larm_r,$=vt=>{it.stun=Math.min(1.6,it.stun+vt)};if(V==="femur"||V==="tibia"||V==="kneecap"||V==="ankle"){let vt=j[pt===1?0:1];vt.hurt=Math.min(1,Math.max(vt.hurt+.15,h===2?.8:h===3?1:0)),vt.broken=Math.max(vt.broken,h),yt[vt.thigh]=Math.max(yt[vt.thigh],vt.hurt*.5),yt[vt.shin]=Math.max(yt[vt.shin],vt.hurt*.6),Ct.legWound=Math.max(Ct.legWound,vt.hurt),h>=2&&it.mode==="balance"&&(Ct.buckle=.24,Ct.buckleDip=.3)}else if(V==="humerus")h>=2&&(yt[rt]=.9,yt[ot]=Math.max(yt[ot],.6));else if(V==="forearm"||V==="wrist")h>=2&&(yt[ot]=.9);else if(V==="collarbone")h>=2&&(yt[rt]=Math.max(yt[rt],.7));else if(V==="ribs")$([0,.08,.22,.4][h]),h===3&&le.push({part:he.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(V==="nose")$(.1),h>=2&&le.push({part:he.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(V==="jaw")$(.12*h);else if(V==="skull")h===3?Ve("Skull shattered"):h===2&&($(.5),tn());else if(V==="neck")h>=2?Ve("Broken neck"):$(.3);else if(V==="spine"){if(h>=2){it.paralysed=!0;for(let vt of j)vt.hurt=1,yt[vt.thigh]=1,yt[vt.shin]=1}}else if(V==="pelvis"&&h>=2){it.cantRise=!0;for(let vt of j)vt.hurt=Math.max(vt.hurt,.5)}return h}function xn(_,h,R,O){let V=bf[_.split("_")[0]];it.bones[_]&&(h*=1.15),h*=.85+.3*Qt();let ct=V[2]&&h>=V[2]?3:h>=V[1]?2:h>=V[0]?1:0;return ct?mn(_,ct,R,O):0}let An=()=>!it.paralysed&&!it.cantRise&&!(j[0].broken>=3||j[1].broken>=3)&&!(j[0].broken>=2&&j[1].broken>=2),ge=[0,0,0,1],X=[0,0,0],ee=[0,0,0];function rn(_,h,R,O){if(it.done)return null;let V=ln[_],ct=J(he.chest)[1],St=J(he.head)[1],rt=V.zone==="chest"&&h[1]-ct>.13||V.zone==="head"&&St-h[1]>.06?"neck":V.zone;if(it.hits++,it.mode==="fall"&&(it.fallHits++,dt[1]-Xn(dt[0],dt[2])>1.2&&it.airHits++),O.impulse>200)for(let[st,Ht]of[[_,.5],[he.chest,.3],[he.pelvis,.2]])ft(st,R[0]*O.impulse*Ht,R[1]*O.impulse*Ht,R[2]*O.impulse*Ht,st===_?h:null);else ft(_,R[0]*O.impulse,R[1]*O.impulse,R[2]*O.impulse,h);for(let st=0;st<v;st++)Pt[st]=.45;E(_,ee),F(_,ge);let ot=ni(Ga(ge),[h[0]-ee[0],h[1]-ee[1],h[2]-ee[2]],[0,0,0]);if(O.bleed>0){let st=O.kind==="blunt";le.push({part:_,zone:rt,at:ot,arterial:!st&&(rt==="neck"||rt==="thigh"),rate:st?1.6:Bx[rt]*O.bleed,left:st?7:kx[rt]*O.bleed})}it.stun=Math.min(1.6,it.stun+O.stun*(rt==="head"?2.2:rt==="neck"?1.4:1)),rt==="head"&&O.kind==="ballistic"?(Ve("Headshot"),ht.fill(0)):rt==="head"&&it.stun>1&&tn();let $=[ot[0]/V.r,ot[1]/(V.hh+V.r),ot[2]/V.r];if(O.kind==="ballistic"){let st=O.impulse>60,Ht=rt==="neck"?"neck":rt==="head"?"skull":Cn(_,$)[0][0],zt=Ht.split("_")[0],[ne,ve]=zt==="skull"?[0,1]:zt==="neck"?[st?.8:.9,0]:zt==="spine"?[st?.5:.65,0]:Ox.has(zt)?st?[.1,.6]:[.25,.25]:zt==="pelvis"?st?[.45,.2]:[.75,.05]:st?[.2,.3]:[.45,.1],It=Qt();It>=ne&&mn(Ht,It>1-ve?3:2,h,"shot")}else{let st=O.blow??(O.impulse-45)/19;if(rt==="neck")xn("neck",st*.6,h,"blow");else for(let[Ht,zt]of Cn(_,$))xn(Ht,st*zt,h,"blow")}if(rt==="thigh"||rt==="shin"){let st=j[V.side===1?0:1];st.hurt=Math.min(1,st.hurt+(O.kind==="ballistic"?.7:.45)*(O.bleed>1.5||O.impulse>150?1.4:1)),yt[st.thigh]=Math.max(yt[st.thigh],st.hurt*.5),yt[st.shin]=Math.max(yt[st.shin],st.hurt*.6),Ct.legWound=Math.max(Ct.legWound,st.hurt)}if(rt==="arm"){yt[_]=.9;let st=ln.findIndex(Ht=>Ht.parent===_);st>0&&(yt[st]=.9)}if(O.kind==="ballistic"){let st=Math.hypot(R[0],R[2])||1,Ht={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[rt],zt=(38+34*Qt())*Ht*(O.impulse>60?.5:1),ne=(Qt()-.5)*.35,ve=Je(((h[0]-ee[0])*Ct.hz+(h[2]-ee[2])*-Ct.hx)/.12,-1,1)*.65,It=R[0]/st-Ct.hz*ve-R[2]/st*ne,We=R[2]/st+Ct.hx*ve+R[0]/st*ne,S=Math.hypot(It,We)||1;Ct.reel=[It/S*zt,We/S*zt],Ct.reelT=.16}it.mode==="balance"&&(Ct.buckle=.22,Ct.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[rt]||.04)*(O.kind==="ballistic"?1:.6)),Ct.flinch=.2,Ct.clutch=rt,Ct.clutchEnd=O.bleed>0?1e9:Math.max(Ct.clutchEnd<1e8?0:Ct.clutchEnd,it.clock+.9+O.stun*4);let vt=(h[0]-ee[0])*Ct.hz+(h[2]-ee[2])*-Ct.hx,et=rt==="arm"?-V.side:ln[_].side||(vt>=0?1:-1);if(yt[et===1?he.uarm_l:he.uarm_r]>.5&&(et=-et),Ct.clutchArm=rt==="neck"||rt==="head"?0:et,rt==="gut"&&O.kind==="ballistic"&&O.impulse<60&&(Ct.lookDown=1.1),O.kind==="ballistic"&&Ct.fleeAt>1e8){Ct.fleeAt=it.time+.7+Qt()*.7+Ct.lookDown;let st=(Qt()-.5)*1.3,Ht=Math.hypot(R[0],R[2])||1,zt=R[0]/Ht,ne=R[2]/Ht;Ct.fleeDir=[zt*Math.cos(st)-ne*Math.sin(st),zt*Math.sin(st)+ne*Math.cos(st)]}return Qe.push({type:"hit",zone:rt==="thigh"||rt==="shin"?"leg":rt,part:_,pos:h,tool:O,fatal:!it.alive}),rt}let dt=[0,0,0],Dt=[0,0,0],en=[0,0,0,1],Ot=[0,0,0],Te=[0,0,0],C=[0,0,0,1],M=[0,0,0],Z=[0,0,0],At=[0,0,0],tt=[0,0,0],Rt=[0,0,0];function qt(_,h,R,O){l.Set(h,R,O),a.AddTorque(D[_],l,n.EActivation_Activate)}function wt(_,h,R,O,V,ct){F(_,ge),Y(_,Z);let St=ge[0],pt=ge[1],rt=ge[2],ot=ge[3],$=2*(St*pt-ot*rt),vt=1-2*(St*St+rt*rt),et=2*(pt*rt+ot*St),st=Math.hypot(O,1,V),Ht=O/st,zt=1/st,ne=V/st;return ct[0]=h*(vt*ne-et*zt)-R*Z[0],ct[1]=-R*.3*Z[1],ct[2]=h*($*zt-vt*Ht)-R*Z[2],ct}function bt(_,h,R,O,V,ct){ut(_,O,V,ct),ut(h,-O,-V,-ct,R)}function Vt(_,h,R,O,V,ct){F(_,ge),Y(_,Z);let St=ge[0],pt=ge[1],rt=ge[2],ot=ge[3],$=2*(St*pt-ot*rt),vt=1-2*(St*St+rt*rt),et=2*(pt*rt+ot*St),st=Math.hypot(O,1,V),Ht=O/st,zt=1/st,ne=V/st;return l.Set(h*(vt*ne-et*zt)-R*Z[0],(ct||0)-R*.3*Z[1],h*($*zt-vt*Ht)-R*Z[2]),a.AddTorque(D[_],l,n.EActivation_Activate),vt}function B(_,h){ni(en,[0,ac,_.side*oc],At),tt[0]=h[0]-(dt[0]+At[0]),tt[1]=h[1]-(dt[1]+At[1]),tt[2]=h[2]-(dt[2]+At[2]),ni(Ga(en),tt,Rt);let R=Math.hypot(Rt[0],Rt[1],Rt[2])||1e-6,O=Rt[0]/R,V=Rt[1]/R,ct=Rt[2]/R;R=Je(R,.24,Qi+Er-.004);let St=Math.acos(Je((Qi*Qi+R*R-Er*Er)/(2*Qi*R),-1,1)),pt=-O,rt=-1-pt*O,ot=-pt*V,$=-pt*ct,vt=Math.hypot(rt,ot,$)||1;rt/=vt,ot/=vt,$/=vt;let et=Math.cos(St),st=Math.sin(St),Ht=O*et+rt*st,zt=V*et+ot*st,ne=ct*et+$*st;pe(_,Ht,zt,ne);let ve=Math.PI-Math.acos(Je((Qi*Qi+Er*Er-R*R)/(2*Qi*Er),-1,1));I[_.shin].SetTargetAngle(ve)}let Tt={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function xt(_,h){let R=Ct,O=it.clock,V=.03,ct=0,St=0,pt=R.clutch?Tt[R.clutch]:null;pt&&(V=pt.spine+(1-it.strength)*.25,ct=pt.neck),R.lookDown>0&&(ct=.7,V+=.1),R.flinch>0&&(V=-.22,ct=-.3),it.mode==="down"&&(V+=.15*Math.sin(O*1.3+R.phase[0]),St=.25*Math.sin(O*.9+R.phase[1])),Jt(he.chest,Zh(ts(0,1,0,V),ts(1,0,0,St))),Jt(he.head,ts(0,1,0,ct));for(let rt of[1,-1]){let ot=rt===1?he.uarm_l:he.uarm_r,$=rt===1?he.larm_l:he.larm_r,vt;if(it.mode==="rise"&&R.riseT<1.5)vt=[.75,-.25,-.15];else if(R.flinch>0)vt=[.5,-.95,-1];else if(pt&&(R.clutchArm===0||R.clutchArm===rt))vt=pt.arm;else if(it.mode==="down"){let et=Math.max(0,Math.sin(O*.8+R.phase[2]+rt));vt=[.4+1.5*et*it.strength,-.2,-.5-.6*et]}else{let et=Je(.12+2.6*_,0,1.45);vt=[.1+(_>.12?Math.sin(O*13+rt*1.7)*.45*Je(_*3,0,1):0)+.6*_,-et,-.3-.5*Je(_*3,0,1)]}Jt(ot,Et(vt[0],vt[1],rt,vt[3]||0)),I[$].SetTargetAngle(vt[2])}}function Mt(_){return E(_.shin,_.p),F(_.shin,C),ni(C,[0,-Fx,0],tt),_.p[0]+=tt[0],_.p[1]+=tt[1],_.p[2]+=tt[2],_.p}let Nt=[0,1,0];function Ut(_){E(_.shin,ee),F(_.shin,C),ni(C,Nt,tt);let h=tt[0],R=tt[1],O=tt[2];_.c[0]=ee[0]-.15*h,_.c[1]=ee[1]-.15*R,_.c[2]=ee[2]-.15*O,_.gap=_.c[1]-.055-Xn(_.c[0],_.c[2]),_.k[0]=ee[0]+.22*h,_.k[1]=ee[1]+.22*R,_.k[2]=ee[2]+.22*O,F(_.thigh,ge),ni(ge,Nt,tt),_.kgap=Math.min(ee[1]+.15*R-.055,_.k[1]+.07*tt[1]-.07)-Xn(_.k[0],_.k[2])}function pe(_,h,R,O){let V=-R,ct=-O,St=h,pt=Math.hypot(St,ct,1+V)||1;Jt(_.thigh,[0,-St/pt,ct/pt,(1+V)/pt])}function Me(_,h){if(it.mode==="fall"||it.mode==="down")return;it.mode="fall",it.fellBecause=h||"";for(let St of j)St.swing=!1;_&&ft(he.chest,_[0],0,_[1]);let R=Ct;R.fight=it.alive&&!it.ko?Je(.2+.95*it.strength,0,1):0,R.fallT=0,R.settle=0;let O=(Dt[0]+Te[0])*.5+(_?_[0]/40:0),V=(Dt[2]+Te[2])*.5+(_?_[1]/40:0);Math.hypot(O,V)<.3&&(O+=(Ot[0]-dt[0])*4,V+=(Ot[2]-dt[2])*4),Math.hypot(O,V)<.1&&(O=R.hx,V=R.hz);let ct=Math.hypot(O,V);R.fallDir[0]=O/ct,R.fallDir[1]=V/ct,Mt(j[0]),Mt(j[1]),R.lead=j[0].p[0]*R.fallDir[0]+j[0].p[2]*R.fallDir[1]<j[1].p[0]*R.fallDir[0]+j[1].p[2]*R.fallDir[1]?0:1,Qe.push({type:"fall",pos:J(he.chest),onFeet:it.onFeet})}function kt(_){let h=Ct,R=it,O=R.mode==="rise";O&&(h.riseT+=_,h.support=Math.min(1,h.riseT/.8));let V=R.mode==="kneel",ct=V||O&&h.riseT<1.9,St=Je(R.strength,0,1),pt=Math.sqrt(ei/.95),rt=0,ot=0,$=0,vt=0;for(let nt=0;nt<v;nt++){let H=L[nt]/b;E(nt,ee),G(nt,X),rt+=ee[0]*H,ot+=ee[2]*H,$+=X[0]*H,vt+=X[2]*H}let et=j[0],st=j[1];Mt(et),Mt(st),Ut(et),Ut(st),ni(en,[0,0,1],tt);let Ht=Math.hypot(tt[0],tt[2]),zt=Ht>.5?(tt[0]*h.hz+tt[2]*-h.hx)/Ht:0,ne=zt>.8?tt[0]/Ht:h.hz,ve=zt>.8?tt[2]/Ht:-h.hx;if(V)for(let nt of j)nt.planted[0]=nt.k[0]+(nt.p[0]-nt.k[0])*.33,nt.planted[1]=nt.k[2]+(nt.p[2]-nt.k[2])*.33,!nt.kneeDown&&nt.kgap<.012&&(nt.kneeDown=!0,xn("kneecap"+(nt.side===1?"_l":"_r"),-Dt[1]*1.3,nt.k,"fall"));let It=9;for(let nt of j)nt.swing||(It=Math.min(It,nt.gap)),ct&&(It=Math.min(It,nt.kgap));h.grip+=Je((It<.028?1:0)-h.grip,-_/.09,_/.05),h.airT=h.grip<.5?h.airT+_:0;let We=0,S=0,k=R.hits>0,lt=Math.hypot(rt-xe.start[0],ot-xe.start[2])>8.5||R.time>h.fleeAt+16;if(!ct&&R.bleed>.2&&R.time>h.fleeAt&&St>.3&&!lt){let nt=(.2+.6*St)*(1-.45*h.legWound),H=Math.sin(R.clock*1.1+h.phase[3])*(.25+.9*(1-St));We=(h.fleeDir[0]*Math.cos(H)-h.fleeDir[1]*Math.sin(H))*nt,S=(h.fleeDir[0]*Math.sin(H)+h.fleeDir[1]*Math.cos(H))*nt;let Kt=Math.atan2(h.hz*We-h.hx*S,h.hx*We+h.hz*S),$t=Je(Kt,-2.2*_,2.2*_),ie=Math.cos($t),ae=Math.sin($t),fe=h.hx*ie+h.hz*ae,Xe=-h.hx*ae+h.hz*ie;h.hx=fe,h.hz=Xe}h.walk[0]+=(We-h.walk[0])*Math.min(1,_*2),h.walk[1]+=(S-h.walk[1])*Math.min(1,_*2);let K,at,Bt=null;et.swing?(K=st.planted[0],at=st.planted[1],Bt=st):st.swing?(K=et.planted[0],at=et.planted[1],Bt=et):(K=(et.planted[0]+st.planted[0])/2,at=(et.planted[1]+st.planted[1])/2);let se=rt-K,Wt=ot-at,Gt=Bt?Xn(Bt.planted[0],Bt.planted[1]):Math.max(Xn(et.planted[0],et.planted[1]),Xn(st.planted[0],st.planted[1])),re=rt+$/pt,Pe=ot+vt/pt,Se=re-K,ce=Pe-at,Ie=Math.hypot(Se,ce),yn=Math.min(1,Ie),P=R.bleed>.2||R.stun>.05,N=k&&P?1-St+.35*Math.min(1,R.stun):0,Q=R.clock,q=b*(.25+4.2*N)*(ct?.45:1),Xt=q*(Math.sin(Q*1.7+h.phase[0])*.55+Math.sin(Q*.63+h.phase[1])*.45),Lt=q*(Math.sin(Q*1.4+h.phase[2])*.55+Math.sin(Q*.51+h.phase[3])*.45);h.buckle-=_,k&&!ct&&h.buckle<-.5&&Qt()<_*((P?.12:0)+1.5*N+(Math.hypot(h.walk[0],h.walk[1])>.1?.8*h.legWound:0))&&(h.buckle=.24,h.buckleDip=.1+.2*Qt()+.12*N,h.buckleLeg=Bt?Bt.side:Qt()<.5?1:-1,ue.push({type:"buckle",pos:[dt[0],dt[1],dt[2]]}));let _e=1,Ne=V?Je(h.kneelT/h.kneelMax,0,1)*(1-.6*St):0,ke=Gt+(V?.135+Qi*Math.cos(.36+.42*Ne):ct?.5:Yh-.1*(1-St)),qe=!1;if(O&&h.riseT<1&&(ke=Gt+h.riseFrom+(.5-h.riseFrom)*(h.riseT/1)),h.buckle>0&&(ke-=h.buckleDip),Bt&&Bt.hurt>0&&(ke-=.13*Bt.hurt),!ct){let nt=0,H=9,Kt=0;for(let $t of j){ni(en,[0,ac,$t.side*oc],At);let ie=Math.hypot(($t.swing?$t.to[0]:$t.planted[0])-dt[0]-At[0],($t.swing?$t.to[1]:$t.planted[1])-dt[2]-At[2]),ae=Gt-ac+Math.sqrt(Math.max(0,qh*qh-ie*ie));$t.swing?(H=ae,Kt=Je(($t.t-.4)/.4,0,1)):ae>nt&&(nt=ae)}nt<ke&&(ke=nt,qe=!0),Kt>0&&H<ke&&(ke+=(Math.max(H,Gt+.6)-ke)*Kt)}let vn=h.hT;h.hT+=Je(ke-h.hT,-(qe?3.2:2.2)*_,1.1*_);let Ee=qe?Math.min(0,(h.hT-vn)/_):0,De=Ar(Se*.9,ce*.9,.38);F(he.pelvis,ge),ni(ge,[-1,0,0],tt);let Pn=Math.atan2(tt[2]*h.hx-tt[0]*h.hz,tt[0]*h.hx+tt[2]*h.hz);Y(he.pelvis,Z);let gn=Ke.yawK*Pn-Ke.yawD*Z[1],Tn=Math.sin(Q*1.7+h.phase[0])*.55+Math.sin(Q*.63+h.phase[1])*.45,zn=Math.sin(Q*1.4+h.phase[2])*.55+Math.sin(Q*.51+h.phase[3])*.45,Mi=O&&h.riseT<1.9;if(Mi){let nt=b*pt*pt*.35*se+Xt,H=b*pt*pt*.35*Wt+Lt,Kt=Ar(-1500*se-330*$,-1500*Wt-330*vt,150*(.25+.75*St)+120);nt=(nt+Kt[0])*h.support*h.grip,H=(H+Kt[1])*h.support*h.grip,ut(he.pelvis,nt*.5,0,H*.5),ut(he.chest,nt*.5,0,H*.5);let $t=Je(b*ei+12e3*(h.hT-dt[1])-1400*Dt[1],0,b*ei*1.9)*h.support*h.grip;ut(he.pelvis,0,$t*.55,0),ut(he.chest,0,$t*.45,0),Vt(he.pelvis,520*h.support,46*h.support,De[0]*.3,De[1]*.3,gn*h.support),Vt(he.chest,900*h.support*(.5+.5*St),80*h.support,De[0],De[1],0),h.load=$t}else{let nt=0;if(V){let ae=[];for(let de of j)for(let hn of[!0,!1]){let Sn=hn?de.k:de.c,Yn=hn?de.kgap:de.gap,Gn=dt[0]-Sn[0],fi=dt[1]-Sn[1],bs=dt[2]-Sn[2],ja=Math.hypot(Gn,fi,bs)||1;ae.push({f:de,knee:hn,from:Sn,ux:Gn/ja,uy:fi/ja,uz:bs/ja,on:Yn<.03&&fi/ja>.25,w:0,Fv:0})}let fe=et.kneeDown||st.kneeDown,Xe=.01+.1*N,Ye=rt+Ke.kv*$/pt+Tn*Xe,te=ot+Ke.kv*vt/pt+zn*Xe;for(let de of j){let hn=de.c[0]-de.k[0],Sn=de.c[2]-de.k[2],Yn=hn*hn+Sn*Sn,Gn=Yn>.0025?Je(((Ye-de.k[0])*hn+(te-de.k[2])*Sn)/Yn,.05,.95):.3;for(let fi of ae)fi.f===de&&(fi.w=(fi.knee?1-Gn:Gn)*.5)}let Fe=(fe?Je(b*ei+6e3*(h.hT-dt[1])-900*Dt[1],0,b*ei*1.3):b*ei*.3)*h.support,ze=0;for(let de of ae){let hn=Fe*de.w,Sn=b*ei*.6*(1-.5*de.f.hurt)*de.uy;if(!de.on){ze+=hn;continue}de.Fv=Math.min(hn,Sn),de.cap=Sn,ze+=hn-de.Fv}for(let de of ae)if(de.on&&ze>0){let hn=Math.min(ze,de.cap-de.Fv);de.Fv+=hn,ze-=hn}for(let de of j)de.Fv=0,de.on=!1;for(let de of ae)if(de.on){let hn=de.Fv/de.uy;bt(he.pelvis,de.f.shin,de.from,hn*de.ux,hn*de.uy,hn*de.uz),nt+=de.Fv,de.f.Fv+=de.Fv,de.knee&&(de.f.on=!0)}}else{for(let te of j){let Fe=te.c,ze=dt[0]-Fe[0],de=dt[1]-Fe[1],hn=dt[2]-Fe[2],Sn=Math.hypot(ze,de,hn)||1;te.u[0]=ze/Sn,te.u[1]=de/Sn,te.u[2]=hn/Sn,te.on=!te.swing&&te.gap<.03&&te.u[1]>.25,te.cap=b*ei*(1.05+.75*St)*(1-.5*te.hurt)*(h.buckle>0&&h.buckleLeg===te.side?.25:1),te.Fv=0}let ae=et.on?1:0,fe=st.on?1:0;if(et.on&&st.on){let te=et.c,Fe=st.c,ze=Fe[0]-te[0],de=Fe[2]-te[2],hn=ze*ze+de*de,Sn=.01+.16*N,Yn=(te[0]+Fe[0])/2,Gn=(te[2]+Fe[2])/2,fi=rt+Ke.kv*($-h.walk[0])/pt+Ke.kp*(rt-Yn)+Tn*Sn,bs=ot+Ke.kv*(vt-h.walk[1])/pt+Ke.kp*(ot-Gn)+zn*Sn;fe=hn>.0025?Je(((fi-te[0])*ze+(bs-te[2])*de)/hn,0,1):.5,ae=1-fe}let Xe=Je(b*ei+12e3*(h.hT-dt[1])-1400*(Dt[1]-Ee),0,b*ei*1.9)*h.support,Ye=0;j.forEach((te,Fe)=>{let ze=Xe*(Fe===0?ae:fe);if(!te.on){Ye+=ze;return}te.Fv=Math.min(ze,te.cap*te.u[1]),Ye+=ze-te.Fv});for(let te of j)if(te.on&&Ye>0){let Fe=Math.min(Ye,te.cap*te.u[1]-te.Fv);te.Fv+=Fe,Ye-=Fe}for(let te of j)if(te.on){let Fe=-(Dt[0]*te.u[0]+Dt[1]*te.u[1]+Dt[2]*te.u[2]),ze=Math.min(te.Fv/te.u[1]+Ke.brace*(.3+.7*St)*(1-.6*te.hurt)*Math.max(0,Fe),te.cap*1.25);bt(he.pelvis,te.shin,te.c,ze*te.u[0],ze*te.u[1],ze*te.u[2]),nt+=ze*te.u[1]}else if(!te.swing&&te.u[1]>.25){let Fe=Je(40+7e3*te.gap,40,280)*h.support;bt(he.pelvis,te.shin,te.c,Fe*te.u[0],Fe*te.u[1],Fe*te.u[2])}}h.load=nt;let H=0,Kt=0;if(nt>0){let ae=rt-K,fe=ot-at,Xe=$-h.walk[0],Ye=vt-h.walk[1];if(et.on&&st.on&&!V){let de=st.c[0]-et.c[0],hn=st.c[2]-et.c[2],Sn=Math.hypot(de,hn)||1,Yn=-hn/Sn,Gn=de/Sn,fi=(rt-et.c[0])*Yn+(ot-et.c[2])*Gn,bs=Xe*Yn+Ye*Gn;ae=fi*Yn,fe=fi*Gn,Xe=bs*Yn,Ye=bs*Gn}let te=V?.2/.5:(Bt?Ke.foot1:Ke.foot2)/.95,Fe=b*(.25+2*N),ze=Ar(-1500*(ae-h.walk[0]*.3)-330*Xe+Tn*Fe,-1500*(fe-h.walk[1]*.3)-330*Ye+zn*Fe,nt*te*(.25+.75*St));H=ze[0],Kt=ze[1]}h.reelT>0&&(h.reelT-=_,H+=h.reel[0]/.16*h.grip,Kt+=h.reel[1]/.16*h.grip),ut(he.pelvis,H*.5,0,Kt*.5),ut(he.chest,H*.5,0,Kt*.5);let $t=wt(he.chest,Ke.trunkK*(.5+.5*St)*h.support,Ke.trunkD*h.support,De[0],De[1],[0,0,0]),ie=j.filter(ae=>ae.on);if(ie.length){let ae=0;for(let Fe of ie)ae+=Ke.hipMax*(1-.5*Fe.hurt);let fe=Math.hypot($t[0],$t[2]),Xe=fe>ae?ae/fe:1,Ye=$t[0]*Xe,te=$t[2]*Xe;qt(he.chest,Ye*.6,0,te*.6),qt(he.pelvis,Ye*.4,0,te*.4);for(let Fe of ie){let ze=V?Fe.k:Fe.c,de=1/ie.length,hn=dt[0]-ze[0],Sn=dt[1]-ze[1],Yn=dt[2]-ze[2],Gn=hn*hn+Sn*Sn+Yn*Yn;bt(he.pelvis,Fe.shin,ze,Sn*te/Gn*de,(Yn*Ye-hn*te)/Gn*de,-Sn*Ye/Gn*de)}}qt(he.pelvis,0,Je(gn,-Ke.yawMax,Ke.yawMax)*Math.min(1,nt/(b*ei)),0)}h.stepCool-=_;let Ka=(nt,H)=>{let Kt=Ie>1e-4?1/Ie:0,$t=.02+.2*(1-St),ie=re-nt.planted[0],ae=Pe-nt.planted[1],fe=Math.exp(pt*Math.sqrt(_e)*H*Ke.stretch*(.55+.45*St)),Xe=Ke.over0+Ke.over1*Ie*St;return[nt.planted[0]+ie*fe+Se*Kt*Xe-h.walk[0]/pt*.55+(Qt()-.5)*$t,nt.planted[1]+ae*fe+ce*Kt*Xe-h.walk[1]/pt*.55+(Qt()-.5)*$t]},Dr=(nt,H,Kt)=>{let $t=Kt[0]-H.planted[0],ie=Kt[1]-H.planted[1],ae=(.36+.36*St)*(1-.35*nt.hurt);[$t,ie]=Ar($t,ie,ae);let fe=($t*ne+ie*ve)*nt.side;fe<Ke.clear&&($t+=(Ke.clear-fe)*nt.side*ne,ie+=(Ke.clear-fe)*nt.side*ve);let Xe=H.planted[0]+$t,Ye=H.planted[1]+ie;return[Xe,Ye,Math.hypot(Xe-Kt[0],Ye-Kt[1])]};if(ct){if(!V)for(let nt of j){let H=rt+h.hx*-.16+ne*nt.side*.12,Kt=ot+h.hz*-.16+ve*nt.side*.12,$t=Ar(H-nt.planted[0],Kt-nt.planted[1],.9*_);nt.planted[0]+=$t[0],nt.planted[1]+=$t[1]}}else if(Bt){let nt=Bt===et?st:et;if(nt.t+=_/nt.T,nt.t<Ke.aimUntil&&!nt.tidy){let H=Dr(nt,Bt,Ka(Bt,Math.max(0,Ke.landAt-nt.t)*nt.T));nt.to[0]+=(H[0]-nt.to[0])*.3,nt.to[1]+=(H[1]-nt.to[1])*.3}if(nt.t>Ke.land&&nt.gap<.012||nt.t>=1.4||nt.t>=1&&Xn(nt.p[0],nt.p[2])<Gt-.12){if(nt.swing=!1,Xn(nt.p[0],nt.p[2])<Gt-.12)return Me(null,"edge");let H=Math.hypot(nt.to[0]-nt.p[0],nt.to[1]-nt.p[2]),Kt=Math.hypot($,vt);if(H>.16&&Xn(nt.to[0],nt.to[1])-Gt>.12){let $t=Kt>.05?$/Kt:-h.hx,ie=Kt>.05?vt/Kt:-h.hz;return ft(he.pelvis,$t*22,26,ie*22),Me([$t*62,ie*62],"trip")}nt.planted=[nt.p[0],nt.p[2]],h.stepCool=.03+.12*(1-St),k&&!nt.tidy&&R.steps++,ue.push({type:"step",pos:[nt.p[0],Gt,nt.p[2]],hurt:nt.hurt})}}else{let nt=Math.hypot(et.planted[0]-st.planted[0],et.planted[1]-st.planted[1]),H=Ke.thr-.035*(1-St),Kt=Ie<.06&&Math.hypot($,vt)<.12&&nt>.36&&h.stepCool<-.35&&St>.45;if(h.stepCool<=0&&(Ie>H||Kt)){let $t,ie;if(Kt)$t=h.lastFoot===0?1:0,ie=[j[1-$t].planted[0]+j[$t].side*ne*.2,j[1-$t].planted[1]+j[$t].side*ve*.2];else{let Ye=[0,1].map(Fe=>{let ze=Dr(j[Fe],j[1-Fe],Ka(j[1-Fe],Ke.firstAim));return{tgt:ze,move:Math.hypot(ze[0]-j[Fe].p[0],ze[1]-j[Fe].p[2])}}),te=Fe=>Fe.tgt[2]-.25*Math.min(Fe.move,.4)+(Fe.move<.08?1:0);$t=Math.abs(te(Ye[0])-te(Ye[1]))<.02?h.lastFoot===0?1:0:te(Ye[0])<te(Ye[1])?0:1,ie=[Ye[$t].tgt[0],Ye[$t].tgt[1]]}let ae=j[$t],fe=j[1-$t];ae.swing=!0,ae.t=0,ae.from=[ae.p[0],ae.p[1],ae.p[2]],ae.to=ie;let Xe=Math.hypot(ae.to[0]-ae.p[0],ae.to[1]-ae.p[2]);ae.T=Ke.tscale*Je(.15+.24*Xe,.17,.34)*(1.3-.3*St)*(Ie>.3?.75:1)*(fe.hurt>0?1-.3*fe.hurt:1),ae.lift=ae.hurt>.3?.035:.07+.09*Qt()+.05*Math.min(1,Ie*2),ae.tidy=Kt,h.lastFoot=$t}}for(let nt of j){if(G(nt.shin,M),V){let Kt=.36+.42*(Je(h.kneelT/h.kneelMax,0,1)*(1-.6*St))+.08*Math.sin(R.clock*.9+h.phase[nt.side===1?0:1])*(1-St);pe(nt,-Math.sin(Kt),-Math.cos(Kt),nt.side*.1),I[nt.shin].SetTargetAngle(Kt+Math.PI/2);continue}if(nt.swing){let H=Je(nt.t,0,1),Kt=H*H*(3-2*H),$t=Ke.bulge*Math.sin(Math.PI*H)*nt.side;nt.ik[0]=nt.from[0]+(nt.to[0]-nt.from[0])*Kt+ne*$t,nt.ik[2]=nt.from[2]+(nt.to[1]-nt.from[2])*Kt+ve*$t,nt.ik[1]=Gt+Math.max(nt.lift*Math.sin(Math.PI*H),H<Ke.land?.035:0)-(H>Ke.land?.045*(H-Ke.land)/(1-Ke.land):0);let ie=Ke.swingK,ae=170*Math.sqrt(Ke.swingK/1900),fe=[ie*(nt.ik[0]-nt.p[0])-ae*M[0],ie*(nt.ik[1]-nt.p[1])-ae*M[1],ie*(nt.ik[2]-nt.p[2])-ae*M[2]],Xe=Math.hypot(fe[0],fe[1],fe[2]),Ye=Xe>Ke.swingMax?Ke.swingMax/Xe:1,te=fe[0]*Ye*h.support,Fe=(fe[1]*Ye-(nt.t>1?160:0))*h.support,ze=fe[2]*Ye*h.support;if(ut(nt.shin,te,Fe,ze,nt.p),!Mi){let de=Ke.swingHip;ut(he.pelvis,-te*de,-Fe*de,-ze*de,nt.p),ut(he.chest,-te*(1-de),-Fe*(1-de),-ze*(1-de),nt.p)}}else if(Mi){nt.ik[0]=nt.planted[0],nt.ik[1]=Gt,nt.ik[2]=nt.planted[1];let H=Ar(1800*(nt.planted[0]-nt.p[0])-130*M[0],1800*(nt.planted[1]-nt.p[2])-130*M[2],480);ut(nt.shin,H[0]*h.support,-40*h.support,H[1]*h.support,nt.p)}else nt.gap<.03&&(nt.planted[0]+=(nt.p[0]-nt.planted[0])*Math.min(1,_*30),nt.planted[1]+=(nt.p[2]-nt.planted[1])*Math.min(1,_*30)),nt.ik[0]=nt.planted[0],nt.ik[1]=Gt,nt.ik[2]=nt.planted[1];B(nt,nt.ik)}xt(yn,_),k&&(R.onFeet+=_,R.stumbled+=Math.hypot(rt-h.lastCom[0],ot-h.lastCom[1])),h.lastCom[0]=rt,h.lastCom[1]=ot;let Nr=nt=>nt.swing?Math.hypot(rt-nt.p[0],ot-nt.p[2]):Math.hypot(rt-nt.planted[0],ot-nt.planted[1]),Gs=Math.min(Nr(et),Nr(st));F(he.chest,ge);let Ms=1-2*(ge[0]*ge[0]+ge[2]*ge[2]);if(!R.alive||R.ko)return Me(null,"out");if(O){if(h.riseT>h.riseFail||St<.3)return ue.push({type:"gaveout",pos:[dt[0],dt[1],dt[2]]}),Me(null,"gave out");if(h.riseT>2.7&&dt[1]-Gt>Yh-.16){R.mode="balance",R.getups++,h.offT=0,h.stepCool=.2;for(let nt of j)nt.swing=!1,nt.planted=[nt.p[0],nt.p[2]];ue.push({type:"up",pos:[dt[0],dt[1],dt[2]]})}else if(h.riseT>5)return Me(null,"gave out");return}h.offT=!ct&&(Gs>.46||Ms<.8)?h.offT+_:Math.max(0,h.offT-2*_);let Ss=Gs>(ct?.5:.7)?"reach":h.offT>.3?"lean":Ie>2.4?"capture":Ms<.45?"tilt":dt[1]-Gt<(ct?.3:.52)?"height":"",Hs=()=>{R.mode="kneel",R.kneels++,h.kneelT=0,h.kneelMax=1.6+3.2*Qt();for(let nt of j)nt.swing=!1,nt.kneeDown=!1,nt.planted=[nt.p[0],nt.p[2]];ue.push({type:"kneel",pos:[dt[0],dt[1],dt[2]]})};if(Ss==="height"&&!ct&&k&&Gs<.45&&Math.hypot($,vt)<1.4&&Ms>.75)return Hs();if(Ss)return Me(null,Ss);if(h.airT>.3)return Me(null,"air");if(R.paralysed)return Me(null,"spine");if(h.legT=!ct&&(et.broken>=3||st.broken>=3)?h.legT+_:0,h.legT>.35)return Me(null,"leg");let Fr=Math.hypot($,vt);if(V&&Fr>2)return Me(null,"thrown");if(ct){if(h.kneelT+=_,V&&h.kneelT>Math.min(h.kneelMax,1.4)&&St>.52&&R.bleed<.5&&h.grip>.9&&An()){R.mode="rise",h.riseT=1.9,h.riseFail=9,h.support=1,h.hT=dt[1],h.offT=0,h.buckle=-1.5;for(let nt of j)nt.swing=!1,nt.planted=[nt.p[0],nt.p[2]];ue.push({type:"rise",pos:[dt[0],dt[1],dt[2]],fromKnees:!0})}else if(St<.2||h.kneelT>h.kneelMax){let nt=Qt()<.5?1:-1,H=Qt()<.45;Me(H?[ne*nt*28,ve*nt*28]:[h.hx*30,h.hz*30],"slump")}}else k&&Fr<1.5&&(St<.5||h.buckle>0&&St<.72&&h.buckleDip>.24)&&Hs()}function ye(_,h){let R=Ct,O=it;Ut(j[0]),Ut(j[1]);let V=Math.min(j[0].gap,j[0].kgap,j[1].gap,j[1].kgap);R.grip+=Je((V<.03?1:0)-R.grip,-h/.09,h/.05);let ct=_*Je(1-R.fallT/(.45+.6*_),0,1);if(ct>0)for(let st of j){let Ht=st.kgap<.03,zt=st.gap<.03;if(!Ht&&!zt)continue;Mt(st);let ne=Ht?st.k:st.p,ve=Ht?Qi+.1:qh+.08;ni(en,[0,ac,st.side*oc],At);let It=dt[0]+At[0]-ne[0],We=dt[1]+At[1]-ne[1],S=dt[2]+At[2]-ne[2],k=Math.hypot(It,We,S)||1;if(k>ve||We/k<.25)continue;let lt=(Dt[0]*It+Dt[1]*We+Dt[2]*S)/k,K=Je(b*ei*.3-240*lt,0,b*ei*.45)*ct*(1-.7*st.hurt);bt(he.pelvis,st.shin,ne,K*It/k,K*We/k,K*S/k)}ni(Ga(en),[R.fallDir[0],0,R.fallDir[1]],Rt);let St=Rt[0],pt=Rt[2],rt=Math.max(0,St),ot=Je((.42-(dt[1]-Xn(dt[0],dt[2])))/.2,0,1);j.forEach((st,Ht)=>{let zt,ne,ve;Ht===R.lead?(zt=St*.95,ne=pt*.95+st.side*.08,ve=.95-.65*rt):(zt=St*.15-.3*(1-rt),ne=st.side*.1,ve=1.65),zt*=1-ot,ve*=1-.75*ot;let It=Math.hypot(zt,1,ne);pe(st,zt/It,-1/It,ne/It),I[st.shin].SetTargetAngle(ve)}),F(he.chest,ge),ni(Ga(ge),[R.fallDir[0],0,R.fallDir[1]],Rt);let $=Rt[0],vt=Rt[2],et=R.grip<.3&&R.fallT>.35?1:0;if(Jt(he.chest,ts(0,1,0,.12+.55*Math.max(0,$))),Jt(he.head,ts(0,1,0,$>0?.7*$:.5*$)),ht[he.head]=Math.max(ht[he.head],.95),!(R.flinch>0))for(let st of[1,-1]){let Ht=Je(vt*st,-1,1),zt=et*.55*Math.sin(O.clock*11+st*1.7),ne=Je(-$*1.25,-.8,1.3)+.15+zt,ve=-.25-.9*Math.max(0,Ht)+.3*Math.max(0,-Ht);Jt(st===1?he.uarm_l:he.uarm_r,Et(ne,ve,st)),I[st===1?he.larm_l:he.larm_r].SetTargetAngle(-.35-.3*et)}}function Oe(_){let h=Ct,R=it,O=R.clock;h.support=Math.max(0,h.support-_/.14);let V=R.alive&&!R.ko;V||(h.fight=0);let ct=R.mode==="fall"?h.fight*Je(1-(h.fallT-1.3)/1.2,0,1)*(h.settle>.1?.5:1):0,St=V?.1+.32*R.strength:0;for(let pt=1;pt<v;pt++){let rt=ln[pt].zone,ot=Math.max(St,ct*(rt==="arm"?.85:rt==="thigh"||rt==="shin"?.75:.7));ht[pt]+=Je(ot-ht[pt],-(R.alive?3:1.1)*_,2*_)}if(ct>.12)ye(ct,_);else if(V){for(let pt of j){let rt=O*(1.1+.5*R.strength)+h.phase[pt.side===1?0:1];Jt(pt.thigh,ts(0,1,0,.35+.4*Math.sin(rt))),I[pt.shin].SetTargetAngle(.7+.6*Math.sin(rt+1.3))}xt(0,_)}if(R.mode==="fall"){h.fallT=(h.fallT||0)+_;let pt=dt[1]-Xn(dt[0],dt[2])<.45||it.restTimer>.7||h.fallT>4;if(h.settle=pt&&Math.hypot(Dt[0],Dt[1],Dt[2])<(h.fallT>4?1.2:.6)?h.settle+_:0,h.settle>.35){R.mode="down",R.downAt=R.time,h.settle=0,h.fallT=0,ue.push({type:"down",pos:[Ot[0],Ot[1],Ot[2]],onFeet:R.onFeet});let rt=Xn(dt[0],dt[2]),ot=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([vt,et])=>Math.abs(Xn(dt[0]+vt,dt[2]+et)-rt)<.05)&&dt[1]-rt<.5,$=Je((R.blood-10)/70,0,1)*(1-.3*Math.min(1,R.stun));V&&$>.42&&h.riseTries<2&&ot&&An()?h.riseAt=R.time+.9+1.6*Qt()+2.5*Math.max(0,R.stun-.25):(h.riseAt=0,R.spent=!0)}}else if(R.mode==="down"&&h.riseAt>0&&R.time>h.riseAt){if(h.riseAt=0,!V||R.strength<.36||!An()){R.spent=!0;return}F(he.chest,ge);let pt=ni(ge,[-1,0,0],tt)[1]>0,rt=E(he.head,ee),ot=rt[0]-dt[0],$=rt[2]-dt[2],vt=Math.hypot(ot,$)||1,et=pt?-1:1;h.hx=et*ot/vt,h.hz=et*$/vt,R.mode="rise",h.riseT=0,h.riseTries++,h.support=0,h.offT=0,h.buckle=0,h.kneelT=0,h.riseFrom=Math.max(.12,dt[1]-Xn(dt[0],dt[2])),h.hT=dt[1],h.riseFail=Qt()<Je((.75-R.strength)*1.6+.35*h.legWound,0,.9)?.9+Qt()*1.2:9;for(let st of j)Mt(st),st.swing=!1,st.planted=[st.p[0],st.p[2]];h.lastCom[0]=dt[0],h.lastCom[1]=dt[2],ue.push({type:"rise",pos:[dt[0],dt[1],dt[2]]})}}function Zt(_){for(ue.length=0;Qe.length;)ue.push(Qe.shift());let h=it,R=Ct;h.clock+=_,h.hits>0&&(h.time+=_);let O=0;if(h.alive){for(let et of le){let st=Math.min(et.rate*_,et.left);et.left-=st,h.blood-=st,et.left>0&&(O+=et.rate)}h.blood=Math.max(0,h.blood),h.blood<=0&&Ve("Bled out")}if(h.bleed=O,h.stun=Math.max(0,h.stun-.2*_),(!h.alive||h.ko)&&(h.spent=!0),h.strength=h.alive&&!h.ko?Je((h.blood-10)/70,0,1)*(1-.75*Math.min(1,h.stun)):0,R.flinch-=_,R.lookDown-=_,R.clutch&&h.clock>R.clutchEnd&&(R.clutch=null),E(he.pelvis,dt),G(he.pelvis,Dt),F(he.pelvis,en),E(he.chest,Ot),G(he.chest,Te),h.mode==="balance"||h.mode==="kneel"||h.mode==="rise"){for(let et=1;et<v;et++){let Ht=ln[et].zone==="thigh"||ln[et].zone==="shin"?.95:.35+.65*h.strength;ht[et]+=Je(Ht-ht[et],-3*_,3*_)}kt(_)}else Oe(_);jt(),s.Step(_,1);let V=0;for(let et=0;et<v;et++){G(et,M);let st=M[0]-gt[et*3],Ht=M[1]-gt[et*3+1]+ei*_,zt=M[2]-gt[et*3+2];gt[et*3]=M[0],gt[et*3+1]=M[1],gt[et*3+2]=M[2];let ne=Math.hypot(st,Ht,zt);V=Math.max(V,Math.hypot(M[0],M[1],M[2])),Pt[et]-=_;let ve=h.mode==="fall"||h.mode==="down",It=Pt[et]<=0||Pt[et]<.33&&(E(et,ee),ee[1]-Xn(ee[0],ee[2])<ln[et].r+ln[et].hh+.1);if(h.hits>0&&ve&&ne>2.2&&It){Pt[et]=.18;let We=ln[et],S=ne*(We.zone==="head"?5:We.zone==="chest"||We.zone==="gut"?1.6:.8);h.damage+=S,h.impacts++;let k=J(et);ue.push({type:"impact",part:et,zone:We.zone,pos:k,dv:ne,dmg:S}),F(et,ge),ni(Ga(ge),[-st/ne,-Ht/ne,-zt/ne],tt);for(let[lt,K]of Cn(et,tt))xn(lt,ne*K,k,"fall");We.zone==="head"&&xn("neck",ne*.9,k,"fall"),We.zone==="head"&&(h.stun=Math.min(1.6,h.stun+ne*.09),h.stun>1.15&&tn())}}if($e==="window")for(let et=0;et<v;et++){if(E(et,ee),ee[1]>be.glassY+.6||ee[1]<be.glassY-.3)continue;let st=Math.hypot(gt[et*3],gt[et*3+1],gt[et*3+2]);if(st<1.6)continue;let Ht=ln[et].r+ln[et].hh+.06+st*_*2;if(!(Math.abs(ee[1]-be.glassY)>Ht))for(let zt of f.panes)zt.broken||ee[0]<zt.min[0]-.1||ee[0]>zt.max[0]+.1||ee[2]<zt.min[1]-.1||ee[2]>zt.max[1]+.1||y(zt,[gt[et*3],gt[et*3+1],gt[et*3+2]])}if(h.hits===0)return ue;h.lowest=Math.min(h.lowest,dt[1]),h.drop=Math.max(0,xe.start[1]+.93-h.lowest-.85);let ct=Math.max(Math.hypot(gt[0],gt[1],gt[2]),Math.hypot(gt[3],gt[4],gt[5])),St=j.some(et=>et.swing&&!et.tidy),pt=j.some(et=>et.swing&&et.tidy),rt=h.mode==="balance"?!St&&ct<(pt?.35:.2):V<.15;h.restTimer=rt?h.restTimer+_:0;let ot=h.restTimer>1.1,$=h.stun>.05?2.6:1.5,vt=0;if(h.alive?h.bleed>.01?vt=0:h.mode==="balance"?vt=h.restTimer/$:h.mode==="rise"||h.mode==="down"&&!h.spent?vt=0:vt=Math.max(h.restTimer/1.1,h.mode==="down"?(h.time-h.downAt)/3.5:0):vt=Math.min(h.restTimer/1.1,(h.time-h.diedAt)/1.6),h.wrap=Je(vt,0,1),!h.done){let et="";!h.alive&&ot&&h.time-h.diedAt>1.6?et=h.outcome:h.alive&&h.bleed<=.01&&(h.mode==="fall"&&ot||h.mode==="down"&&h.spent&&(ot||h.time-h.downAt>3.5)||h.mode==="balance"&&h.restTimer>$||h.ko&&ot)?et=h.ko?"Out cold":h.mode==="balance"?"Still standing":"Down, alive":h.time>80&&(et="Time"),et&&(h.done=!0,h.outcome=et,ue.push({type:"done",outcome:et}))}return ue}function A(){let _=it,h=!_.alive,R=Object.values(_.bones),O=[["Stagger steps",String(_.steps),Math.min(_.steps,40)*14],["Stumbled",_.stumbled.toFixed(1)+" m",Math.round(Math.min(_.stumbled,12)*18)],["Knee drops",String(_.kneels),_.kneels*120],["Put down",_.downAt>=0?"yes":"\u2014",_.downAt>=0?90:0],["Got back up",String(_.getups),_.getups*140],["Hard landings",String(_.impacts),Math.round(_.damage*Ux)],["Bones",String(R.length),R.reduce((ct,St)=>ct+Kh[St],0)],["Fell",_.drop.toFixed(1)+" m",Math.round(_.drop*65)],["Glass",_.glass+(_.glass===1?" pane":" panes"),_.glass*130],["Trick shots",String(_.fallHits),_.fallHits*150+_.airHits*250],["Out cold",_.ko?"yes":"\u2014",_.ko?150:0],[h?_.outcome:"Bled out",h?_.diedAt.toFixed(1)+" s":"\u2014",h?_.diedAt>.3?260:60:0]];return{lines:O.filter((ct,St)=>ct[2]>0||St<3),total:O.reduce((ct,St)=>ct+St[2],0)}}function x(_){yi[_]&&($e=_,xe=yi[_],fn())}let U=[0,0,0,1];return fn(),{parts:ln,state:it,wounds:le,feet:j,step:Zt,hit:rn,reset:fn,payout:A,pos:J,mass:L,totalMass:b,statics:p,setLevel:x,groundY:Xn,get level(){return xe},get levelKey(){return $e},glass:{tiles:f.tiles,panes:f.panes,transform(_,h){let R=f.tiles[_];return mt(R.id,h),z(R.id,U),h[3]=U[0],h[4]=U[1],h[5]=U[2],h[6]=U[3],h}},transform(_,h){E(_,h);let R=a.GetRotation(D[_]);return h[3]=R.GetX(),h[4]=R.GetY(),h[5]=R.GetZ(),h[6]=R.GetW(),h},_debug:{tune:Ke,joints:I,tone:ht,IDX:he,ctl:Ct,impulse:ft,armQ:Et,setTarget:Jt}}}var iu={};fu(iu,{GOALS:()=>is,LEVEL_STARS:()=>ks,SHOP:()=>ns,TOOL_ORDER:()=>Af,TOTAL_STARS:()=>cc,actionsPerTake:()=>Ha,blocked:()=>Va,buy:()=>Jh,finishTake:()=>eu,levelOpen:()=>es,loadSave:()=>jh,multiplier:()=>Pr,newSave:()=>Rr,nextBuy:()=>Qh,nextGoal:()=>tu,owns:()=>Pi,stars:()=>Cr,tools:()=>hc,unlockEverything:()=>nu});var Af=["poke","shove","bat","pistol","shotgun","ram"],ns=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2600,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:12e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:36e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:9e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:23e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:115e3,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:5200},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:29e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:78e3,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:7800}],Ef={"pay.1":.25,"pay.2":.3,"pay.3":.4},ks={yard:0,stairs:1,window:6},is={yard:[{id:"y1",text:"Make him take a step",reward:30,test:n=>n.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:n=>n.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:n=>n.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:n=>n.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:n=>n.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(n,t)=>n.drop>=3&&t===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:n=>n.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:n=>n.drop>=3&&n.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:n=>n.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:n=>n.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(n,t)=>n.drop>=2.5&&t===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:n=>n.airHits>=1}]},cc=Object.values(is).reduce((n,t)=>n+t.length,0);function Rr(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1,muted:!1}}function jh(n){try{let t=JSON.parse(n);if(t&&t.v===1&&Array.isArray(t.owned)&&Array.isArray(t.goals))return Object.assign(Rr(),t)}catch{}return Rr()}var Pi=(n,t)=>n.owned.includes(t),Cr=n=>n.goals.length,es=(n,t)=>Cr(n)>=(ks[t]||0),hc=n=>Af.filter(t=>t==="poke"||Pi(n,"tool."+t)),Ha=n=>1+["actions.2","actions.3","actions.4"].filter(t=>Pi(n,t)).length,Pr=n=>Object.keys(Ef).reduce((t,e)=>Pi(n,e)?t*(1+Ef[e]):t,1);function Va(n,t){return Pi(n,t.id)?"Owned":t.needs&&!Pi(n,t.needs)?"Needs "+ns.find(e=>e.id===t.needs).name:n.bank<t.price?"Not enough":""}function Jh(n,t){let e=ns.find(i=>i.id===t);return!e||Va(n,e)?!1:(n.bank-=e.price,n.owned.push(t),!0)}function Qh(n){return ns.filter(t=>!Pi(n,t.id)&&(!t.needs||Pi(n,t.needs))).sort((t,e)=>t.price-e.price)[0]||null}function tu(n,t){return(is[t]||[]).find(e=>!n.goals.includes(e.id))||null}function eu(n,t,e,i){let s=Math.round(i*Pr(n)),r=(is[t]||[]).filter(u=>!n.goals.includes(u.id)&&u.test(e,e.hits)),a=r.reduce((u,p)=>u+p.reward,0),o=Object.keys(ks).filter(u=>es(n,u));for(let u of r)n.goals.push(u.id);let l=Object.keys(ks).filter(u=>es(n,u)&&!o.includes(u)),c=s>(n.best[t]||0);return c&&(n.best[t]=s),n.bank+=s+a,n.earned+=s+a,n.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function nu(n){for(let t of ns)Pi(n,t.id)||n.owned.push(t.id);for(let t of Object.values(is).flat())n.goals.includes(t.id)||n.goals.push(t.id)}var zx={id:"full",fluid:{particle:10096662,ground:8129810,groundOpacity:.9,soak:5967890,soakAmount:.85,mark:3998984,gauge:"#b3151c"},words:{},shop:{},injury:{levels:["","bruised","broken","shattered"],parts:{skull:"Skull",nose:"Nose",jaw:"Jaw",neck:"Neck",collarbone:"Collarbone",ribs:"Ribs",spine:"Spine",pelvis:"Pelvis",humerus:"Humerus",forearm:"Forearm",wrist:"Wrist",femur:"Femur",kneecap:"Kneecap",tibia:"Tibia",ankle:"Ankle"},special:{"neck.1":"Neck wrenched","skull.2":"Skull fractured","ribs.2":"Ribs cracked"},none:"Nothing broken"},sounds:{wound:"woundBlood",squirt:"squirtBlood",snap:"snapBone"},contentNote:"Contains blood and violence against a test dummy.",haptics:!1,ads:!1},Gx={id:"sand",fluid:{particle:14861965,ground:13479276,groundOpacity:.96,soak:9666666,soakAmount:.45,mark:2826777,gauge:"#dcbb78"},words:{Blood:"Sand","Bled out":"Ran empty","Bleeding out \u25B8\u25B8":"Running empty \u25B8\u25B8","Down, bleeding out":"Down, running empty","Staggering, bleeding":"Staggering, leaking","Hit, bleeding":"Hit, leaking","shot \xB7 bleeds":"shot \xB7 leaks","shot \xB7 bleeds fast":"shot \xB7 leaks fast",Bones:"Seams","Broken neck":"Neck seam burst","Skull shattered":"Head burst"},shop:{"tool.pistol":"He springs a leak: the stagger, the hobble, the knees.","tool.shotgun":"Leaks fast, and hits hard enough to send him over an edge."},injury:{levels:["","scuffed","split","burst"],parts:{skull:"Head",nose:"Face",jaw:"Chin",neck:"Neck seam",collarbone:"Shoulder seam",ribs:"Chest panel",spine:"Back seam",pelvis:"Hip seam",humerus:"Upper arm",forearm:"Forearm",wrist:"Wrist seam",femur:"Thigh",kneecap:"Knee seam",tibia:"Shin",ankle:"Ankle seam"},special:{"neck.1":"Neck seam strained"},none:"Nothing split"},sounds:{wound:"woundSand",squirt:"squirtSand",snap:"snapSeam"},contentNote:"Slapstick violence against a sand-filled test dummy.",haptics:!0,ads:!1};function Rf(){return typeof location>"u"?new Set:new Set((location.hash.slice(1)+"&"+location.search.slice(1)).toLowerCase().split(/[-&=]/).filter(Boolean))}function Hx(n=Rf()){return n.has("sand")?Gx:zx}var zs=Rf(),Qn=Hx(zs),ui=n=>Qn.words[n]??n;function su(n,t,e){let i=Qn.injury,r=i.special[n+"."+e]||i.parts[n]+" "+i.levels[e];return t?(t===1?"Left ":"Right ")+r.charAt(0).toLowerCase()+r.slice(1):r}var uc=Math.PI*2,Gi=44100;function Pf(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wa=n=>Math.max(1,Math.round(n*Gi));function vi(n,t,e,i=.707){let s=uc*Math.min(e,Gi*.45)/Gi,r=Math.cos(s),a=Math.sin(s)/(2*i),o,l,c;t==="lp"?(o=(1-r)/2,l=1-r,c=o):t==="hp"?(o=(1+r)/2,l=-(1+r),c=o):(o=a,l=0,c=-a);let u=1+a,p=-2*r,d=1-a,f=new Float32Array(n.length),y=0,w=0,g=0,m=0;for(let b=0;b<n.length;b++){let L=(o*n[b]+l*y+c*w-p*g-d*m)/u;w=y,y=n[b],m=g,g=L,f[b]=L}return f}function Ue(n,t,{attack:e=.001,decay:i=.05,lp:s,hp:r,bp:a,q:o}={}){let l=new Float32Array(Wa(t));for(let c=0;c<l.length;c++)l[c]=n()*2-1;return r&&(l=vi(l,"hp",r,o)),s&&(l=vi(l,"lp",s,o)),a&&(l=vi(l,"bp",a,o||1)),If(l,e,i)}function dn(n,t,{f1:e=t,glide:i=.05,attack:s=.001,decay:r=.08,wave:a="sine"}={}){let o=new Float32Array(Wa(n)),l=0;for(let c=0;c<o.length;c++){let u=e+(t-e)*Math.exp(-(c/Gi)/i);l+=u/Gi;let p=l%1;o[c]=a==="saw"?2*p-1:a==="tri"?1-4*Math.abs(p-.5):Math.sin(uc*p)}return If(o,s,r)}function If(n,t,e){let i=Math.max(1,t*Gi);for(let s=0;s<n.length;s++)n[s]*=Math.min(1,s/i)*Math.exp(-Math.max(0,s-i)/(e*Gi));return n}function Yt(n,t,e=0,i=1){let s=Wa(e)-1;for(let r=0;r<t.length&&s+r<n.length;r++)n[s+r]+=t[r]*i;return n}function Mn(n,{drive:t=1,peak:e=.9,fade:i=.02,presence:s=2}={}){if(s){let o=vi(n,"hp",250);for(let l=0;l<n.length;l++)n[l]+=s*o[l]}let r=0;for(let o=0;o<n.length;o++)t!==1&&(n[o]=Math.tanh(n[o]*t)),r=Math.max(r,Math.abs(n[o]));let a=Wa(i);for(let o=0;o<n.length;o++)n[o]*=e/(r||1)*Math.min(1,(n.length-o)/a);return n}var pn=n=>new Float32Array(Wa(n));function Cf(n,t=1){let e=pn(.5),i=.9+n()*.2;return Yt(e,dn(.45,100*i,{f1:46*i,glide:.05,decay:.09*t}),0,1),Yt(e,dn(.2,210*i,{f1:90,glide:.03,decay:.04}),0,.6),Yt(e,Ue(n,.25,{lp:620,decay:.045}),0,.6),Yt(e,Ue(n,.2,{bp:480*i,q:.9,decay:.05}),0,.8),Yt(e,Ue(n,.4,{lp:170,decay:.12*t}),0,.4),e}var dc={thud:[3,n=>Mn(Cf(n),{drive:1.4,presence:6})],limb:[3,n=>{let t=pn(.26),e=.85+n()*.3;return Yt(t,dn(.2,155*e,{f1:70,glide:.03,decay:.05}),0,.7),Yt(t,Ue(n,.12,{bp:1200*e,q:.8,decay:.025}),0,.7),Yt(t,Ue(n,.2,{lp:500,decay:.05}),0,.4),Mn(t,{drive:1.2})}],knock:[3,n=>{let t=pn(.26),e=.9+n()*.2;return Yt(t,dn(.2,320*e,{f1:240*e,glide:.02,decay:.035}),0,.8),Yt(t,dn(.1,640*e,{decay:.02}),0,.3),Yt(t,Ue(n,.06,{bp:1800,q:1.2,decay:.012}),0,.5),Yt(t,dn(.22,110,{f1:60,glide:.04,decay:.06}),0,.5),Mn(t,{drive:1.3})}],step:[4,n=>{let t=pn(.14),e=.85+n()*.3;return Yt(t,Ue(n,.1,{lp:900*e,decay:.018}),0,.8),Yt(t,Ue(n,.1,{bp:700*e,q:1,decay:.02}),0,.7),Yt(t,dn(.12,120*e,{f1:70,glide:.02,decay:.03}),0,.5),Mn(t)}],scuff:[3,n=>{let t=pn(.32);return Yt(t,Ue(n,.3,{bp:1300+n()*500,q:.6,attack:.03,decay:.07}),0,1),Yt(t,Ue(n,.3,{lp:400,attack:.02,decay:.06}),0,.4),Mn(t)}],knees:[2,n=>{let t=pn(.5);return Yt(t,dc.limb[1](n),0,1),Yt(t,dc.limb[1](n),.07+n()*.03,.8),Yt(t,Ue(n,.3,{bp:1500,q:.6,attack:.02,decay:.08}),.05,.25),Mn(t,{drive:1.2})}],poke:[2,n=>{let t=pn(.1),e=.9+n()*.2;return Yt(t,dn(.09,270*e,{f1:180,glide:.02,decay:.02}),0,.7),Yt(t,Ue(n,.03,{hp:2500,decay:.004}),0,.3),Mn(t)}],shove:[2,n=>{let t=pn(.42);return Yt(t,Ue(n,.35,{lp:520,attack:.012,decay:.07}),0,.9),Yt(t,dn(.4,78,{f1:50,glide:.06,attack:.005,decay:.09}),0,.7),Yt(t,Ue(n,.3,{bp:620,q:.8,attack:.008,decay:.06}),0,.7),Yt(t,Ue(n,.25,{bp:3500,q:.7,attack:.01,decay:.05}),0,.12),Mn(t,{drive:1.3,presence:5})}],bat:[2,n=>{let t=pn(.55),e=.93+n()*.14;return Yt(t,Ue(n,.05,{bp:2400*e,q:2,attack:3e-4,decay:.006}),0,1),Yt(t,dn(.12,880*e,{f1:820*e,decay:.018}),0,.6),Yt(t,dn(.06,1900*e,{decay:.01}),0,.3),Yt(t,Cf(n,1.1),.008,.9),Mn(t,{drive:1.6,presence:4})}],ram:[1,n=>{let t=pn(1.1);return Yt(t,dn(1,115,{f1:36,glide:.08,decay:.28}),0,1),Yt(t,Ue(n,.9,{lp:250,decay:.3}),0,.7),Yt(t,Ue(n,.2,{lp:1500,decay:.03}),0,.6),Yt(t,dn(.5,230,{f1:70,glide:.05,decay:.12}),0,.6),Yt(t,Ue(n,.5,{bp:520,q:.7,decay:.14}),0,.7),Mn(t,{drive:2.2,fade:.1,presence:8})}],pistol:[2,n=>{let t=pn(1.15),e=()=>{let i=pn(.3);return Yt(i,Ue(n,.25,{hp:900,bp:2200,q:.7,attack:2e-4,decay:.022}),0,1),Yt(i,dn(.3,175,{f1:55,glide:.02,decay:.06}),0,.9),Yt(i,Ue(n,.3,{lp:1200,decay:.18}),.01,.25),i};Yt(t,e(),0,1);for(let[i,s]of[[.09,.22],[.17,.12],[.31,.07]])Yt(t,vi(e(),"lp",1400),i,s);return Yt(t,Ue(n,1,{lp:700,attack:.02,decay:.45}),.02,.08),Mn(t,{drive:2.5,fade:.15,presence:3.5})}],shotgun:[2,n=>{let t=pn(1.7),e=()=>{let i=pn(.6);return Yt(i,Ue(n,.5,{bp:1100,q:.6,attack:3e-4,decay:.05}),0,1),Yt(i,Ue(n,.1,{hp:2500,decay:.012}),0,.6),Yt(i,dn(.6,115,{f1:38,glide:.03,decay:.12}),0,1),Yt(i,Ue(n,.6,{lp:800,decay:.3}),.01,.35),i};Yt(t,e(),0,1);for(let[i,s]of[[.11,.25],[.23,.14],[.4,.08]])Yt(t,vi(e(),"lp",1e3),i,s);return Yt(t,Ue(n,1.5,{lp:500,attack:.03,decay:.7}),.03,.1),Mn(t,{drive:3,fade:.2,presence:5})}],woundBlood:[3,n=>{let t=pn(.3);Yt(t,Ue(n,.03,{hp:3e3,decay:.006}),0,.5),Yt(t,Ue(n,.25,{lp:900,attack:.003,decay:.05}),0,.8),Yt(t,dn(.2,145,{f1:90,glide:.03,decay:.04}),0,.4);for(let e=0;e<3;e++)Yt(t,Ue(n,.05,{bp:1500+n()*900,q:3,decay:.01}),.03+n()*.07,.25);return Mn(t,{drive:1.3})}],woundSand:[3,n=>{let t=pn(.36);return Yt(t,Ue(n,.3,{bp:4300+n()*600,q:.8,attack:.002,decay:.09}),0,.8),Yt(t,Ue(n,.15,{lp:500,decay:.03}),0,.5),Mn(t)}],squirtBlood:[3,n=>{let t=pn(.3),e=.85+n()*.3;Yt(t,Ue(n,.2,{bp:1100*e,q:1.6,attack:.012,decay:.045}),0,.9),Yt(t,Ue(n,.14,{bp:2600*e,q:2.2,attack:.02,decay:.03}),.01,.4),Yt(t,dn(.12,240*e,{f1:130,glide:.04,attack:.008,decay:.03}),0,.3);for(let i=0;i<2;i++)Yt(t,Ue(n,.04,{lp:1800,decay:.008}),.13+n()*.09,.25);return Mn(t,{drive:1.2})}],squirtSand:[3,n=>{let t=pn(.32);return Yt(t,Ue(n,.28,{bp:4800+n()*800,q:.9,attack:.02,decay:.07}),0,.8),Yt(t,Ue(n,.2,{hp:7e3,attack:.03,decay:.06}),.02,.3),Mn(t)}],snapBone:[3,n=>{let t=pn(.2),e=.85+n()*.3;return Yt(t,Ue(n,.03,{bp:2400*e,q:1.6,decay:.006}),0,1),Yt(t,dn(.05,900*e,{f1:260,glide:.012,decay:.012}),0,.7),Yt(t,Ue(n,.03,{bp:3300*e,q:1.4,decay:.005}),.028+n()*.02,.6),Yt(t,dn(.12,150,{f1:80,glide:.03,decay:.03}),0,.35),Mn(t,{drive:1.5})}],snapSeam:[3,n=>{let t=pn(.3),e=.85+n()*.3;for(let i=0;i<7;i++)Yt(t,Ue(n,.02,{bp:(1500+n()*900)*e,q:1.1,decay:.006}),i*.016+n()*.006,.5+n()*.5);return Yt(t,Ue(n,.16,{lp:700,decay:.05}),0,.3),Mn(t,{drive:1.2})}],glass:[2,n=>{let t=pn(1.9);Yt(t,Ue(n,.3,{hp:2500,attack:5e-4,decay:.05}),0,1),Yt(t,Ue(n,.5,{bp:5e3,q:1,decay:.15}),0,.5);for(let e=0;e<28;e++)Yt(t,dn(.5,1800+n()*7200,{decay:.02+n()*.14}),n()*.12,.05+n()*.2);for(let e=0;e<36;e++)Yt(t,dn(.1,2500+n()*7500,{decay:.008+n()*.022}),.15+Math.pow(n(),1.6)*1.4,.03+n()*.09);return Mn(t,{drive:1.2,fade:.1})}],whoosh:[1,n=>{let t=pn(.6);return Yt(t,Ue(n,.5,{lp:900,attack:.08,decay:.12}),0,.5),Yt(t,Ue(n,.6,{lp:260,attack:.15,decay:.2}),0,.8),Mn(t,{peak:.6,fade:.1})}],grunt:[4,n=>{let t=pn(.4),e=.85+n()*.35,i=dn(.3,128*e,{f1:84*e,glide:.12,attack:.012,decay:.07,wave:"saw"});return Yt(t,vi(i,"bp",520*e,4),0,1),Yt(t,vi(i,"bp",980*e,5),0,.5),Yt(t,Ue(n,.3,{bp:1700,q:1,attack:.02,decay:.08}),0,.14),Mn(vi(t,"lp",2600),{drive:1.5})}],groan:[3,n=>{let t=pn(.9),e=.85+n()*.3,i=dn(.8,112*e,{f1:62*e,glide:.35,attack:.05,decay:.3,wave:"saw"});return Yt(t,vi(i,"bp",480*e,4),0,1),Yt(t,vi(i,"bp",860*e,5),0,.4),Yt(t,Ue(n,.8,{bp:1500,q:.8,attack:.08,decay:.3}),0,.2),Mn(vi(t,"lp",2200),{drive:1.4,fade:.1})}],click:[1,n=>{let t=pn(.04);return Yt(t,dn(.03,1200,{decay:.006}),0,.7),Yt(t,Ue(n,.01,{hp:4e3,decay:.002}),0,.4),Mn(t,{peak:.5,fade:.005})}],deny:[1,()=>{let n=pn(.16);return Yt(n,dn(.15,300,{f1:220,glide:.05,decay:.05,wave:"tri"}),0,1),Mn(n,{peak:.6})}],buy:[1,n=>{let t=pn(.45);return Yt(t,dn(.2,880,{decay:.07,wave:"tri"}),0,.7),Yt(t,dn(.35,1320,{decay:.1,wave:"tri"}),.07,.8),Yt(t,Ue(n,.2,{bp:7e3,q:2,decay:.05}),.07,.25),Mn(t,{peak:.6})}],goal:[1,()=>{let n=pn(.8);return[660,880,1320].forEach((t,e)=>Yt(n,dn(.5,t,{decay:.16,wave:"tri"}),e*.09,.7)),Mn(n,{peak:.6,fade:.1})}],stamp:[1,n=>{let t=pn(.3);return Yt(t,Ue(n,.1,{lp:1500,decay:.02}),0,.8),Yt(t,dn(.25,140,{f1:80,glide:.03,decay:.06}),0,.9),Yt(t,dn(.2,420,{f1:300,glide:.03,decay:.04}),0,.5),Mn(t,{peak:.7})}]},ru=Object.keys(dc);function Vx(){let n={};return ru.forEach((t,e)=>{let[i,s]=dc[t],r=Pf(1e3+e*77);n[t]=Array.from({length:i},()=>s(r))}),n}function Lf(){let n=Vx(),t={},e={},i=null,s,r,a,o={},l=!1,c=1,u=null,p=null,d=null;function f(){if(i){i.state==="suspended"&&i.resume();return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{i=null;return}s=i.createGain(),r=i.createBiquadFilter(),r.type="lowpass",r.frequency.value=2e4;let w=i.createDynamicsCompressor();w.threshold.value=-14,w.ratio.value=6,w.attack.value=.003,w.release.value=.2,a=i.createGain(),a.gain.value=l?0:.9,s.connect(r).connect(w).connect(a).connect(i.destination);for(let T of ru)o[T]=n[T].map(D=>{let I=i.createBuffer(1,D.length,Gi);return I.getChannelData(0).set(D),I});let g=Gi*4,m=i.createBuffer(1,g,Gi),b=m.getChannelData(0),L=Pf(5);for(let T=0;T<g;T++)b[T]=(L()*2-1)*(.6+.4*Math.sin(uc*T/g)*Math.sin(uc*3*T/g));for(let T=0;T<2e3;T++){let D=T/2e3;b[T]=b[T]*D+b[g-2e3+T]*(1-D)}u=i.createBufferSource(),u.buffer=m,u.loop=!0,d=i.createBiquadFilter(),d.type="lowpass",d.frequency.value=400,p=i.createGain(),p.gain.value=.035,u.connect(d).connect(p).connect(s),u.start()}function y(w,{vol:g=1,rate:m=1,pan:b=0,delay:L=0,ui:T=!1}={}){if(!i||l||!o[w]||g<=.003)return;let D=o[w];t[w]=((t[w]||0)+1)%D.length,e[w]=(e[w]||0)+1;let I=i.createBufferSource();I.buffer=D[t[w]],I.playbackRate.value=m*(T?1:.55+.45*Math.sqrt(c))*(.97+Math.random()*.06);let v=i.createGain();v.gain.value=Math.min(1,g);let E=I.connect(v);if(b&&i.createStereoPanner){let G=i.createStereoPanner();G.pan.value=Math.max(-1,Math.min(1,b)),E=E.connect(G)}E.connect(T?a:s),I.start(i.currentTime+L)}return{unlock:f,play:y,played:e,names:ru,get ready(){return!!i},get muted(){return l},setMuted(w){l=!!w,a&&a.gain.setTargetAtTime(l?0:.9,i.currentTime,.02)},setSlow(w){Math.abs(w-c)<.02||(c=Math.max(.05,Math.min(1,w)),i&&(r.frequency.setTargetAtTime(c>.9?2e4:1400+9e3*c,i.currentTime,.06),u.playbackRate.setTargetAtTime(.5+.5*c,i.currentTime,.1)))},setPlace(w){i&&d.frequency.setTargetAtTime({yard:420,stairs:190,window:750}[w]||400,i.currentTime,.3)}}}var Ft=n=>document.getElementById(n),du=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim(),ii=n=>"$"+Math.round(n).toLocaleString("en-US");async function Qx(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(n){return console.warn("WASM physics unavailable, using asm.js build",n),await(await import("./vendor/jolt-physics.js")).default()}}function ty(){if(zs.has("previous"))return"previous";if(zs.has("current"))return"current";try{return localStorage.getItem("imhit.physics2")==="previous"?"previous":"current"}catch{return"current"}}var $a=ty(),Uf=!0;function ey(n,t){let e=t(n),i=Ft("view"),s=new ic({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ds,s.toneMapping=Ra,s.toneMappingExposure=1.15;let r=new Qr,a=new He(du("--sky"));r.background=a,r.fog=new Jr(a,14,38);let o=new $n(42,1,.1,120);r.add(new ba(13623538,3814960,1.05));let l=new Ea(16769725,2.6);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),l.shadow.bias=-6e-4,l.shadow.normalBias=.03,r.add(l,l.target);let c=new He(du("--concrete")),u=new He(du("--hazard")),p=(wf.half+10)*2,d=(()=>{let P=document.createElement("canvas");P.width=P.height=2048;let N=P.getContext("2d"),Q=P.width/p,q=P.width/2;N.fillStyle="#"+c.clone().multiplyScalar(.62).getHexString(),N.fillRect(0,0,P.width,P.height),N.strokeStyle="rgba(0,0,0,0.13)",N.lineWidth=2;for(let Lt=-p/2;Lt<=p/2;Lt+=2)N.beginPath(),N.moveTo(q+Lt*Q,0),N.lineTo(q+Lt*Q,P.height),N.moveTo(0,q+Lt*Q),N.lineTo(P.width,q+Lt*Q),N.stroke();N.strokeStyle="rgba(241,239,233,0.42)",N.fillStyle="rgba(241,239,233,0.6)",N.lineWidth=3,N.font='700 30px "Big Shoulders Display", Impact, sans-serif',N.textAlign="center";for(let Lt=2;Lt<=12;Lt+=2)N.beginPath(),N.arc(q,q,Lt*Q,0,Math.PI*2),N.stroke(),N.fillText(Lt+" m",q+Lt*Q,q+34);N.strokeStyle="#"+u.getHexString(),N.lineWidth=5,N.beginPath(),N.moveTo(q-14,q-14),N.lineTo(q+14,q+14),N.moveTo(q+14,q-14),N.lineTo(q-14,q+14),N.stroke();let Xt=new oa(P);return Xt.anisotropy=8,Xt.colorSpace=Zn,Xt})(),f=new In(new fs(p,p),new kn({map:d,roughness:.96}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,r.add(f);let y=new In(new gi(p,3.2,.4),new kn({color:c.clone().multiplyScalar(.5),roughness:1}));y.position.set(0,1.6,-11),r.add(y);let w=new In(new fs(100,160),new kn({color:c.clone().multiplyScalar(.36),roughness:1}));w.rotation.x=-Math.PI/2,w.position.set(0,-.003,105),w.receiveShadow=!0,r.add(w);let g={landing:new kn({color:c,roughness:.95}),step:new kn({color:c,roughness:.95}),stepAlt:new kn({color:c.clone().multiplyScalar(.88),roughness:.95}),wall:new kn({color:c.clone().multiplyScalar(.55),roughness:1}),building:new kn({color:c.clone().multiplyScalar(.8),roughness:1}),sill:new kn({color:c.clone().multiplyScalar(1.05),roughness:.9}),frame:new kn({color:2237995,roughness:.5,metalness:.4})};e.statics.forEach((P,N)=>{let Q=new In(new gi(P.h[0]*2,P.h[1]*2,P.h[2]*2),P.kind==="step"&&N%2?g.stepAlt:g[P.kind]);Q.position.set(P.c[0],P.c[1],P.c[2]),Q.castShadow=!0,Q.receiveShadow=!0,r.add(Q)});let m=[0,1,2].map(P=>{let N=-(.7+.3*P),Q=new mr;return Q.moveTo(-.2,N),Q.lineTo(0,N+.16),Q.lineTo(.2,N),Q.lineTo(.2,N-.07),Q.lineTo(0,N+.09),Q.lineTo(-.2,N-.07),Q.closePath(),Q}),b=new In(new va(m),new us({color:u,transparent:!0,opacity:.6,depthWrite:!1,side:_i}));b.geometry.rotateX(-Math.PI/2),r.add(b);let L=e.glass.tiles,T=new ur(new gi(1,1,1),new kn({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),L.length);T.frustumCulled=!1,r.add(T);let D=new sn,I=new oi,v=new W,E=new W,G=new Float32Array(7);function F(){for(let P=0;P<L.length;P++)e.glass.transform(P,G),D.compose(v.set(G[0],G[1],G[2]),I.set(G[3],G[4],G[5],G[6]),E.set(L[P].h[0]*2,L[P].h[1]*2,L[P].h[2]*2)),T.setMatrixAt(P,D);T.instanceMatrix.needsUpdate=!0}F();let Y=new kn({color:2303788,roughness:.6}),J=new kn({color:15855593,roughness:.6}),mt=Qn.fluid,z=new He(mt.ground),ut=new He(mt.soak);document.documentElement.dataset.edition=Qn.id,document.documentElement.style.setProperty("--blood",mt.gauge),Ft("gauge-label").textContent=ui("Blood"),Ft("intro-note").textContent=Qn.contentNote;let ft=[],ht=[],yt=new Float32Array(ln.length);ln.forEach((P,N)=>{let Q=new In(new ha(P.r,P.hh*2,6,16),new kn({color:u,roughness:.55}));Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.part=N;let q=(Xt,Lt,_e,Ne,ke)=>{let qe=new In(Xt,Lt);return qe.position.set(_e,Ne,ke),qe.castShadow=!0,Q.add(qe),qe};P.parent>=0&&P.name!=="head"&&q(new Ls(P.r*(P.name==="chest"?.86:1.12),14,10),Y,P.j[0]-P.c[0],P.j[1]-P.c[1],P.j[2]-P.c[2]),P.name==="head"&&(q(new gi(.05,.05,.15),Y,-P.r+.01,.03,0),q(new Ps(.045,.05,.1,10),Y,0,-P.hh-P.r-.01,0)),P.name==="chest"&&(q(new Ps(.06,.06,.012,20),J,-P.r+.004,.05,0).rotation.z=Math.PI/2,q(new Ps(.028,.028,.016,16),Y,-P.r+.003,.05,0).rotation.z=Math.PI/2),P.name.startsWith("larm")&&q(new Ls(.048,12,8),Y,0,-P.hh-P.r-.02,0),P.name.startsWith("lleg")&&q(new gi(.24,.07,.09),Y,-.06,-P.hh-P.r+.035,0),r.add(Q),ft.push(Q)});let _t=new Float32Array(7);function gt(){for(let P=0;P<ft.length;P++)e.transform(P,_t),ft[P].position.set(_t[0],_t[1],_t[2]),ft[P].quaternion.set(_t[3],_t[4],_t[5],_t[6]),ft[P].updateMatrixWorld()}function Pt(P,N,Q){let q=new Float32Array(P*3),Xt=new Float32Array(P*3),Lt=new Float32Array(P),_e=new Bn;_e.setAttribute("position",new ai(q,3));let Ne=new ra(_e,new fr({color:N,size:Q,transparent:!0,opacity:.95,depthWrite:!1}));Ne.frustumCulled=!1,r.add(Ne);let ke=0;return{emit(qe,vn,Ee){let De=ke;ke=(ke+1)%P,q.set(qe,De*3),Xt.set(vn,De*3),Lt[De]=Ee},step(qe,vn){for(let Ee=0;Ee<P;Ee++){if(Lt[Ee]<=0){q[Ee*3+1]=-50;continue}Lt[Ee]-=qe,Xt[Ee*3+1]-=9.8*qe;for(let De=0;De<3;De++)q[Ee*3+De]+=Xt[Ee*3+De]*qe;q[Ee*3+1]<=e.groundY(q[Ee*3],q[Ee*3+2])+.005&&(vn&&vn(q[Ee*3],q[Ee*3+2]),Lt[Ee]=0)}_e.attributes.position.needsUpdate=!0}}}let Jt=Pt(200,15326404,.05),Ce=Pt(700,mt.particle,.06),Et=Pt(260,14677759,.035);function jt(P,N,Q){for(let q=0;q<N;q++){let Xt=Math.random()*6.28,Lt=Q*(.3+Math.random());Jt.emit(P,[Math.cos(Xt)*Lt,.5+Math.random()*Lt,Math.sin(Xt)*Lt],.4+Math.random()*.5)}}let it=900,le=new ur(new ua(1,14),new us({color:z,transparent:!0,opacity:mt.groundOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),it);le.frustumCulled=!1,le.count=0,r.add(le);let j=new sn,Ct=new oi().setFromEuler(new Ei(-Math.PI/2,0,0)),Qt=new W,Re=new W,xe=0,$e=[];function ue(P,N,Q,q){j.compose(Re.set(N,e.groundY(N,Q)+.004+P%7*4e-4,Q),Ct,Qt.set(q,q*(.75+P%5*.08),1)),le.setMatrixAt(P,j),le.instanceMatrix.needsUpdate=!0}function Qe(P,N,Q){let q=xe;return xe=(xe+1)%it,le.count=Math.max(le.count,q+1),ue(q,P,N,Q),q}let fn=(P,N)=>Qe(P,N,.02+Math.random()*.045),Ve=new W,tn=new W,Cn=0,mn=0,xn=0,An=0;function ge(P){let N=e.state;Cn+=P*(N.alive?1.15+(100-N.blood)*.008:0);let Q=Math.pow(Math.max(0,Math.sin(Cn*Math.PI*2)),6),q=Cn%1,Xt=(mn<.12||mn>q)&&q>=.12;if(mn=q,Xt&&N.blood>0){xn++;let Lt=null;for(let Ne of e.wounds)Ne.left>0&&(!Lt||(Ne.arterial?10:0)+Ne.rate>(Lt.arterial?10:0)+Lt.rate)&&(Lt=Ne);let _e=performance.now();Lt&&(Lt.arterial||xn%2===0)&&_e-An>300&&(An=_e,ft[Lt.part].getWorldPosition(Ve),Ot.play(Qn.sounds.squirt,{vol:Lt.arterial?.34:.1+Math.min(.1,Lt.rate*.02),rate:Lt.arterial?1:.85,pan:M([Ve.x,Ve.y,Ve.z])}))}e.wounds.forEach((Lt,_e)=>{let Ne=Lt.left>0&&N.blood>0,ke=Ne?Lt.rate:.25,qe=ft[Lt.part];Ve.set(Lt.at[0],Lt.at[1],Lt.at[2]),tn.copy(Ve).setY(0).normalize().transformDirection(qe.matrixWorld),Ve.applyMatrix4(qe.matrixWorld),yt[Lt.part]=Math.min(1,yt[Lt.part]+P*ke*.02),ht[_e]&&ht[_e].scale.setScalar(1+yt[Lt.part]*2.2);let vn=Lt.arterial&&Ne?Q:0,Ee=P*ke*(Lt.arterial?8:5)+vn*P*260;Ee=Math.floor(Ee)+(Math.random()<Ee%1?1:0);for(let De=0;De<Ee;De++){let Pn=vn>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;Ce.emit([Ve.x,Ve.y,Ve.z],[tn.x*Pn+(Math.random()-.5)*.4,tn.y*Pn+Math.random()*.5*Pn,tn.z*Pn+(Math.random()-.5)*.4],1.6)}if(N.mode==="down"&&Ve.y-e.groundY(Ve.x,Ve.z)<.4){let De=$e[_e];(!De||Math.hypot(De.x-Ve.x,De.z-Ve.z)>.25)&&(De=$e[_e]={i:Qe(Ve.x,Ve.z,.03),x:Ve.x,z:Ve.z,r:.03}),De.r=Math.min(.55,Math.sqrt(De.r*De.r+P*ke*.0022)),ue(De.i,De.x,De.z,De.r)}});for(let Lt=0;Lt<ft.length;Lt++)yt[Lt]>0&&ft[Lt].material.color.copy(u).lerp(ut,yt[Lt]*mt.soakAmount)}let X=new Bn().setFromPoints([new W,new W]),ee=new sa(X,new dr({color:16773577,transparent:!0,opacity:0}));ee.frustumCulled=!1,r.add(ee);let rn=[];function dt(P,N,Q,q=.25){let Xt=rn.find(Lt=>Lt.life<=0);if(!Xt){if(rn.length>=16)return;Xt={el:document.createElement("div"),life:0,pos:new W},Ft("app").appendChild(Xt.el),rn.push(Xt)}Xt.el.className="callout"+(Q?" big":""),Xt.el.textContent=P,Xt.pos.set(N[0],N[1]+q,N[2]),Xt.life=Xt.max=Q?1.6:1.2}let Dt=new W;function en(P){for(let N of rn){if(N.life<=0){N.el.style.opacity=0;continue}N.life-=P,N.pos.y+=P*.4,Dt.copy(N.pos).project(o);let Q=(Dt.x*.5+.5)*i.clientWidth,q=(-Dt.y*.5+.5)*i.clientHeight;N.el.style.transform=`translate(${Q.toFixed(1)}px, ${q.toFixed(1)}px) translate(-50%, -50%)`,N.el.style.opacity=Dt.z>1?0:Math.min(1,N.life/(N.max*.4))}}let Ot=Lf();function Te(){let P=!Ot.ready;Ot.unlock(),P&&Ot.ready&&Ot.setPlace(e.levelKey)}let C=new W,M=P=>P?Math.max(-1,Math.min(1,C.set(P[0],P[1],P[2]).project(o).x))*.7:0,Z="poke",At=!1,tt=0,Rt=1,qt=!1,wt=!1,bt=1,Vt=-1e9,B=0,Tt=!1,xt=!1,Mt=Rr();try{Mt=jh(localStorage.getItem("imhit.save"))}catch{}let Nt=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(Mt))}catch{}},Ut=()=>Mt.mode==="free",pe={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},Me={};function kt(){for(let N in Me)Me[N].remove(),delete Me[N];Ft("pick-list").innerHTML="";let P=hc(Mt);P.includes(Z)||(Z=P.at(-1));for(let N of P)for(let[Q,q]of[["tools","tool-"+N],["pick-list","pick-"+N]]){let Xt=document.createElement("button");Xt.type="button",Xt.className="tool",Xt.id=q,Xt.dataset.tool=N,Xt.innerHTML=`<b>${lc[N].label}</b><i>${ui(pe[N])}</i>`,Xt.addEventListener("click",()=>{Z=N,ye(),Oe(),Te(),Ot.play("click",{ui:!0,vol:.5})}),Ft(Q).appendChild(Xt),Q==="tools"&&(Me[N]=Xt)}Ft("pick").classList.toggle("single",P.length<2),ye(),Ft("slow").hidden=!Pi(Mt,"slowmo"),Ft("slow").hidden&&(At=!1,Ft("slow").setAttribute("aria-pressed","false"))}function ye(){for(let P in Me)Me[P].setAttribute("aria-pressed",String(P===Z));for(let P of Ft("pick-list").children)P.setAttribute("aria-pressed",String(P.dataset.tool===Z));Ft("pick-name").textContent=lc[Z].label,Ft("pick-note").textContent=ui(pe[Z])}function Oe(){Ft("pick-list").hidden=!0,Ft("pick").setAttribute("aria-expanded","false")}Ft("pick").addEventListener("click",()=>{if(Ft("pick").classList.contains("single"))return;let P=Ft("pick-list").hidden;Ft("pick-list").hidden=!P,Ft("pick").setAttribute("aria-expanded",String(P))}),document.addEventListener("pointerdown",P=>{!Ft("pick-list").hidden&&!P.target.closest(".picker")&&Oe()},!0);function Zt(){let P=Ha(Mt);Ft("pips").innerHTML=Ut()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:P},(N,Q)=>`<span class="pip${Q<bt?" on":""}"></span>`).join("")}function A(){let P=tu(Mt,e.levelKey);Ft("hint").hidden=!1,Ft("hint").innerHTML=Ut()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(P?`<b>Goal</b> ${P.text} <span>\u2605 +${ii(P.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(Ha(Mt)>=2&&!Mt.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function x(){Ft("bank").textContent=ii(Mt.bank),Ft("stars").textContent="\u2605 "+Cr(Mt)+" / "+cc,Ft("mode-career").setAttribute("aria-pressed",String(!Ut())),Ft("mode-free").setAttribute("aria-pressed",String(Ut()));for(let N in U){let Q=es(Mt,N);U[N].disabled=!Q;let q=is[N].filter(Xt=>Mt.goals.includes(Xt.id)).length;U[N].lastChild.textContent=Q?yi[N].blurb+" \u2605 "+q+"/"+is[N].length:"Opens at \u2605 "+ks[N]+". You have "+Cr(Mt)+"."}Ft("where-level").textContent=e.level.label,Ft("where-mode").textContent=(Ut()?"Free play":"Career")+($a==="previous"?" \xB7 previous physics":"");let P=!Ut()&&ns.some(N=>!Va(Mt,N));Ft("shop-open").classList.toggle("ready",P),Ft("shop-open").textContent=P?"Shop \u2022":"Shop"}let U={};for(let[P,N]of Object.entries(yi)){let Q=document.createElement("button");Q.type="button",Q.className="level",Q.id="level-"+P,Q.innerHTML=`<b>${Object.keys(yi).indexOf(P)+1} \xB7 ${N.label}</b><i>${N.blurb}</i>`,Q.addEventListener("click",()=>_(P)),Ft("levels").appendChild(Q),U[P]=Q}function _(P,N){if(!N&&!es(Mt,P))return;e.setLevel(P),Mt.level=P,Nt(),It.aim={yaw:e.level.cam.yaw,pitch:e.level.cam.pitch,dist:e.level.cam.dist},pt();let Q=e.level;for(let q in U)U[q].setAttribute("aria-pressed",String(q===P));Ft("menu").hidden=!0,Ot.setPlace(P),It.aim={yaw:Q.cam.yaw,pitch:Q.cam.pitch,dist:Q.cam.dist},It.swing=0,wt=!1,It.yaw=Q.cam.yaw,It.pitch=Q.cam.pitch,It.dist=Q.cam.dist,It.target.set(Q.start[0],Q.start[1]+.92,Q.start[2])}function h(P){Mt.mode=P==="free"?"free":"career",Nt(),pt(),x()}Ft("where").addEventListener("click",()=>{Ft("menu").hidden=!1}),Ft("menu-close").addEventListener("click",()=>{Ft("menu").hidden=!0});for(let P of["menu","shop"])Ft(P).addEventListener("click",N=>{N.target===Ft(P)&&(Ft(P).hidden=!0)});if(Ft("mode-career").addEventListener("click",()=>h("career")),Ft("mode-free").addEventListener("click",()=>h("free")),!Uf||zs.has("dev")){Ft("physics").hidden=!1;for(let P of["current","previous"]){let N=Ft("physics-"+P);N.setAttribute("aria-pressed",String($a===P)),N.addEventListener("click",()=>{if(P===$a)return;try{localStorage.setItem("imhit.physics2",P)}catch{}let Q=[...zs].filter(q=>q!=="previous"&&q!=="current");location.hash=[...Q,P].join("-"),location.reload()})}}function R(){Ft("shop-bank").textContent=ii(Mt.bank)+" banked \xB7 \u2605 "+Cr(Mt)+" / "+cc+(Pr(Mt)>1?" \xB7 pays \xD7"+Pr(Mt).toFixed(2):"");let P="";for(let N of[...new Set(ns.map(Q=>Q.group))]){P+=`<h3>${N}</h3>`;for(let Q of ns.filter(q=>q.group===N)){let q=Va(Mt,Q);P+=`<div class="item${q==="Owned"?" owned":""}"><div><b>${Q.name}</b><p>${Qn.shop[Q.id]||Q.does}</p></div>`+(q==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${Q.id}" id="buy-${Q.id.replace(".","-")}"${q?" disabled":""}>${ii(Q.price)}${q&&q!=="Not enough"?`<small>${q}</small>`:""}</button>`)+"</div>"}}P+="<h3>Goals</h3>";for(let[N,Q]of Object.entries(is)){let q=es(Mt,N);P+=`<h4>${yi[N].label}${q?"":" \xB7 opens at \u2605"+ks[N]}</h4><ul class="goals">`+Q.map(Xt=>`<li class="${Mt.goals.includes(Xt.id)?"got":""}"><span>${Mt.goals.includes(Xt.id)?"\u2605":"\u2606"}</span>${Xt.text}<em>${ii(Xt.reward)}</em></li>`).join("")+"</ul>"}Ft("shop-list").innerHTML=P}Ft("shop-list").addEventListener("click",P=>{let N=P.target.closest(".buy");!N||!Jh(Mt,N.dataset.id)||(Nt(),Te(),Ot.play("buy",{ui:!0,vol:.55}),N.dataset.id.startsWith("tool.")&&(Z=N.dataset.id.slice(5)),kt(),x(),R(),e.state.hits||pt())});function O(){R(),Ft("shop").hidden=!1}Ft("shop-open").addEventListener("click",O),Ft("result-shop").addEventListener("click",O),Ft("shop-close").addEventListener("click",()=>{Ft("shop").hidden=!0});let V=zs.has("dev");Ft("unlock-all").hidden=!V&&Uf,Ft("unlock-all").addEventListener("click",()=>{nu(Mt),Nt(),kt(),x(),R(),pt()});let ct=0;Ft("wipe").addEventListener("click",()=>{if(performance.now()-ct>3e3){ct=performance.now(),Ft("wipe").textContent="Tap again to erase everything";return}Mt=Rr(),Nt(),ct=0,Ft("wipe").textContent="Erase progress",kt(),_("yard",!0),x(),R()}),Ft("slow").addEventListener("click",()=>{At=!At,Ft("slow").setAttribute("aria-pressed",String(At))});function St(){Ft("sound").setAttribute("aria-pressed",String(!Ot.muted)),Ft("sound").textContent=Ot.muted?"Sound off":"Sound on"}Ft("sound").addEventListener("click",()=>{Te(),Ot.setMuted(!Ot.muted),Mt.muted=Ot.muted,Nt(),St(),Ot.muted||Ot.play("click",{ui:!0,vol:.5})});function pt(){e.reset();for(let P of ht)P.parent.remove(P);ht.length=0,$e.length=0,yt.fill(0),le.count=0,xe=0;for(let P of ft)P.material.color.copy(u);qt=!1,tt=0,Tt=!1,Vt=-1e9,$.length=0,vt(),It.target.set(e.level.start[0],e.level.start[1]+.92,e.level.start[2]),It.zoom=.8,It.swing=0,wt=!1,It.yaw=It.aim.yaw,It.pitch=It.aim.pitch,It.dist=It.aim.dist,bt=Ut()?1/0:Ha(Mt),F(),Ft("result").hidden=!0,Zt(),A(),x(),ot()}Ft("reset").addEventListener("click",pt);for(let P of["pointerdown","pointerup","pointercancel","pointerleave"])Ft("ff").addEventListener(P,N=>{xt=P==="pointerdown",Ft("ff").setAttribute("aria-pressed",String(xt)),xt&&N.preventDefault()});Ft("ff").addEventListener("contextmenu",P=>P.preventDefault()),Ft("next").addEventListener("click",pt),Ft("result-go").addEventListener("click",()=>_(Ft("result-go").dataset.level)),window.addEventListener("keydown",P=>{P.code==="Space"&&(At=!0,P.preventDefault()),P.code==="KeyR"&&pt(),P.code==="KeyF"&&(xt=!0);let N=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(P.code),Q=hc(Mt);N>=0&&Q[N]&&(Z=Q[N],ye())}),window.addEventListener("keyup",P=>{P.code==="KeyF"&&(xt=!1),P.code==="Space"&&(At=Ft("slow").getAttribute("aria-pressed")==="true")});function rt(){let P=e.state;return P.alive?P.ko?"Out cold":P.mode==="down"?ui(Tt?"Bleeding out \u25B8\u25B8":P.bleed>.2?"Down, bleeding out":"Down"):P.mode==="fall"?"Going down":P.mode==="rise"?"Getting up":P.mode==="kneel"?"On his knees":P.hits===0?"Standing":ui(P.bleed>.2?P.strength<.75?"Staggering, bleeding":"Hit, bleeding":P.stun>.25?"Dazed":"On his feet"):ui(P.outcome)||"Dead"}function ot(){let P=e.payout(),N=e.state;return Ft("lines").innerHTML=P.lines.map(Q=>`<tr><td>${ui(Q[0])}</td><td>${Q[1]}</td><td>${ii(Q[2])}</td></tr>`).join(""),Ft("total").textContent=ii(P.total),Ft("blood-fill").style.width=N.blood.toFixed(1)+"%",Ft("blood-num").textContent=Math.round(N.blood)+"%",Ft("condition").textContent=rt(),P}ot();let $=[];function vt(P){let N=innerWidth<=560?4:6,Q=$.slice();for(let q=Q.length-1;q>=1&&Q.length>N;q--)Q[q].level===1&&Q.splice(q,1);Q.length=Math.min(Q.length,N),Ft("feed").innerHTML=Q.map((q,Xt)=>`<li class="l${q.level}${q.fatal?" fatal":""}${q===$[0]&&P?" new":""}${Xt>=2?" old":""}">${su(q.base,q.side,q.level)}<em>+${ii(Kh[q.level])}</em></li>`).join("")+($.length>N?`<li class="more">and ${$.length-N} more</li>`:"")}function et(){let P=$.slice().sort((Xt,Lt)=>Lt.level-Xt.level),N=P.filter(Xt=>Xt.level>=2),Q=P.length-N.length,q=N.slice(0,5).map(Xt=>(Xt.level===3?"<b>":"")+su(Xt.base,Xt.side,Xt.level)+(Xt.level===3?"</b>":""));return N.length>5&&q.push(N.length-5+" more "+Qn.injury.levels[2]),Q&&q.push(Q+" "+Qn.injury.levels[1]),q.join(" \xB7 ")}let st={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},Ht=new W,zt=P=>{if(Qn.haptics&&navigator.vibrate)try{navigator.vibrate(P)}catch{}};function ne(P,N){if(e.state.done)return;if(Te(),bt<=0){Ft("pips").classList.remove("nudge"),Ft("pips").offsetWidth,Ft("pips").classList.add("nudge"),Ot.play("deny",{ui:!0,vol:.4});return}let Q=lc[Z],q=new W().subVectors(N,o.position).normalize(),Xt=Math.hypot(q.x,q.z)||1,Lt=Q.kind==="ballistic"?[q.x,q.y,q.z]:[q.x/Xt*.97,Z==="bat"?.2:.1,q.z/Xt*.97],_e=[N.x,N.y,N.z],Ne=e.hit(P,_e,Lt,Q);if(!Ne)return;Ut()||(bt--,Zt()),zt(Q.impulse>100?35:18);let ke=new In(new Ls(Q.kind==="ballistic"?.024:.04,10,8),new us({color:Q.bleed>0?mt.mark:1314828}));if(ft[P].worldToLocal(Ht.copy(N)),ke.position.copy(Ht),ft[P].add(ke),ht.push(ke),Q.kind==="ballistic"){X.setFromPoints([o.position.clone().add(new W(.22,-.3,0).applyQuaternion(o.quaternion)),N.clone()]),ee.material.opacity=.9,Ot.play(Z==="shotgun"?"shotgun":"pistol",{vol:.95}),Ot.play(Qn.sounds.wound,{vol:Z==="shotgun"?.75:.55,pan:M(_e),delay:.03});for(let vn=0;vn<(Z==="shotgun"?46:18);vn++)Ce.emit(_e,[Lt[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,Lt[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else Ot.play(Z,{vol:Z==="poke"?.6:.9,pan:M(_e)}),jt(_e,8,1.2);let qe=Ne==="thigh"||Ne==="shin"?"leg":Ne;dt(st[qe]||qe,_e,!0),e.state.alive&&!e.state.ko&&(Q.bleed>0||Q.stun>.3)&&Ot.play("grunt",{vol:.4,pan:M(_e),delay:.12}),Ot.play("whoosh",{vol:.45,delay:.04,ui:!0}),tt=1.1,Ut()&&(Ft("hint").hidden=!0)}function ve(P){for(let N of P)if(N.type==="fall"&&e.state.alive&&!e.state.ko&&Ot.play("grunt",{vol:.3,pan:M(N.pos),rate:1.15}),N.type==="impact"){let Q=Math.min(1,N.dv/9);N.dv>5&&zt(12),Ot.play(N.zone==="head"?"knock":N.zone==="chest"||N.zone==="gut"?"thud":"limb",{vol:.12+Q*.8,rate:1.12-Q*.22,pan:M(N.pos)}),jt(N.pos,Math.min(10,2+Math.round(N.dv)),.8)}else if(N.type==="injury"){let Q=$.findIndex(Xt=>Xt.bone===N.bone);Q>=0&&$.splice(Q,1);let q=N.base==="neck"&&N.level>=2||N.base==="skull"&&N.level===3;$.unshift({bone:N.bone,base:N.base,side:N.side,level:N.level,fatal:q}),vt(!0),N.level>=2&&(Ot.play(Qn.sounds.snap,{vol:N.level===3?.75:.5,rate:N.level===3?.85:1.05,pan:M(N.pos),delay:N.cause==="shot"?.05:0}),zt(N.level===3?28:14)),q&&N.cause!=="shot"&&dt(ui(N.base==="neck"?"Broken neck":"Skull shattered"),N.pos,!0,.5)}else if(N.type==="step")Ot.play(N.hurt>.3?"scuff":"step",{vol:N.hurt>.3?.3:.22,pan:M(N.pos)}),e.state.hits>0&&jt(N.pos,2,.35);else if(N.type==="buckle")Ot.play("scuff",{vol:.2,pan:M(N.pos)});else if(N.type==="glass"){Ot.play("glass",{vol:e.state.clock-Vt>.7?.9:.4,pan:M(N.pos),rate:.9+Math.random()*.25}),zt(30);for(let Q=0;Q<26;Q++)Et.emit([N.pos[0]+(Math.random()-.5)*.9,N.pos[1],N.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);e.state.clock-Vt>.7&&dt("Through the glass",N.pos,!0,.5),Vt=e.state.clock}else if(N.type==="fall"&&(e.state.fellBecause==="edge"||e.state.fellBecause==="trip"))dt(e.state.fellBecause==="trip"?"Over the sill":"Lost his footing",N.pos,!0,.7);else if(N.type==="out")dt("Out cold",N.pos,!0,.55);else if(N.type==="rise")Ot.play("grunt",{vol:.3,pan:M(N.pos),rate:.9}),Ot.play("scuff",{vol:.3,pan:M(N.pos)});else if(N.type==="up")dt("Back on his feet",N.pos,!0,.9);else if(N.type==="gaveout")Ot.play("groan",{vol:.35,pan:M(N.pos)});else if(N.type==="kneel")Ot.play("knees",{vol:.6,pan:M(N.pos)}),Ot.play("groan",{vol:.32,pan:M(N.pos),delay:.1}),dt("Knees",N.pos,!1,.9);else if(N.type==="down")N.onFeet>1&&dt("On his feet "+N.onFeet.toFixed(1)+" s",N.pos,!1,.6);else if(N.type==="dead"&&N.cause==="Bled out")dt(ui("Bled out")+" \xB7 "+N.time.toFixed(1)+" s",N.pos,!0,.5);else if(N.type==="done"&&!qt){qt=!0,B=performance.now();let Q=ot(),q=e.levelKey,Xt="";if(Ut())Ft("result-label").textContent="Free play",Ft("result-total").textContent=ii(Q.total),Ft("result-note").textContent=ui(N.outcome)+" \xB7 nothing is banked in free play";else{let _e=eu(Mt,q,e.state,Q.total),Ne=Pr(Mt);Nt(),Ft("result-label").textContent=_e.record&&_e.pay>0?"New best take":"Take over",Ft("result-total").textContent=ii(_e.pay+_e.bonus),Ft("result-note").textContent=ui(N.outcome)+(Ne>1?" \xB7 pays \xD7"+Ne.toFixed(2):"")+" \xB7 best here "+ii(Mt.best[q]||0),Xt=_e.goals.map(qe=>`<li><span>\u2605</span>${qe.text}<em>+${ii(qe.reward)}</em></li>`).join("")+_e.opened.map(qe=>`<li class="opened"><span>\u2192</span>New level: ${yi[qe].label}</li>`).join("");let ke=Qh(Mt);ke&&(Xt+=`<li class="save-for"><span>$</span>${Mt.bank>=ke.price?"You can afford "+ke.name:ii(ke.price-Mt.bank)+" short of "+ke.name}</li>`),_e.goals.length&&Ot.play("goal",{ui:!0,vol:.5,delay:.25})}Ot.play("stamp",{ui:!0,vol:.45}),Ft("result-goals").innerHTML=Xt,Ft("result-injuries").innerHTML=et(),Ft("result-lines").innerHTML=Q.lines.filter(_e=>_e[2]>0).map(_e=>`<tr><td>${ui(_e[0])}</td><td>${_e[1]}</td><td>${ii(_e[2])}</td></tr>`).join(""),Ft("result-shop").hidden=Ut();let Lt=!Ut()&&Xt.includes("New level")?Object.keys(yi).filter(_e=>es(Mt,_e)).at(-1):"";Ft("result-go").hidden=!Lt,Ft("result-go").dataset.level=Lt,Lt&&(Ft("result-go").textContent="Go to "+yi[Lt].label),x(),A(),Ft("result").hidden=!1}}let It={yaw:-1.12,pitch:.22,dist:6.2,zoom:.8,target:new W(0,.95,0),aim:{yaw:-1.12,pitch:.22,dist:6.2},swing:0},We=new W,S=new Aa,k=new me,lt=null;i.addEventListener("pointerdown",P=>{lt={x:P.clientX,y:P.clientY,moved:!1,id:P.pointerId},i.setPointerCapture(P.pointerId)}),i.addEventListener("pointermove",P=>{if(!lt||lt.id!==P.pointerId)return;let N=P.clientX-lt.x,Q=P.clientY-lt.y;!lt.moved&&Math.hypot(N,Q)<7||(lt.moved=!0,wt=!0,It.yaw-=N*.006,It.pitch=Math.max(.03,Math.min(1.3,It.pitch+Q*.005)),It.swing===0&&(It.aim.yaw=It.yaw,It.aim.pitch=It.pitch),lt.x=P.clientX,lt.y=P.clientY)});let K=P=>{if(!lt||lt.id!==P.pointerId)return;let N=!lt.moved;if(lt=null,!N||P.type==="pointercancel")return;if(e.state.done){performance.now()-B>450&&pt();return}let Q=i.getBoundingClientRect();k.set((P.clientX-Q.left)/Q.width*2-1,-((P.clientY-Q.top)/Q.height)*2+1),S.setFromCamera(k,o);let q=S.intersectObjects(ft,!1);q.length&&ne(q[0].object.userData.part,q[0].point)};i.addEventListener("pointerup",K),i.addEventListener("pointercancel",K),i.addEventListener("wheel",P=>{It.dist=Math.max(3,Math.min(16,It.dist*(1+Math.sign(P.deltaY)*.08))),It.swing===0&&(It.aim.dist=It.dist),P.preventDefault()},{passive:!1});function at(){let P=i.clientWidth,N=i.clientHeight;!P||!N||(s.setSize(P,N,!1),o.aspect=P/N,o.updateProjectionMatrix())}new ResizeObserver(at).observe(i),at();function Bt(P){let N=e.pos(1),Q=e.state,q=e.level.cam.fall;if(We.set(N[0],Math.max(e.groundY(N[0],N[2])+.5,N[1]-.4),N[2]),It.target.lerp(We,1-Math.exp(-P*3)),It.zoom+=((Q.hits===0?.8:1)-It.zoom)*Math.min(1,P*2),q&&!wt&&Q.drop>.35){It.swing=Math.min(1,It.swing+P/.9);let _e=It.swing*It.swing*(3-2*It.swing),Ne=q.yaw-It.aim.yaw;Ne=Math.atan2(Math.sin(Ne),Math.cos(Ne)),It.yaw=It.aim.yaw+Ne*_e,It.pitch=It.aim.pitch+(q.pitch-It.aim.pitch)*_e,It.dist=It.aim.dist+(q.dist-It.aim.dist)*_e}let Xt=It.dist*It.zoom/Math.pow(Math.min(1,o.aspect),.75),Lt=Math.cos(It.pitch);if(o.position.set(It.target.x+Math.sin(It.yaw)*Lt*Xt,It.target.y+Math.sin(It.pitch)*Xt,It.target.z+Math.cos(It.yaw)*Lt*Xt),o.lookAt(It.target),l.position.set(It.target.x-4,It.target.y+10,It.target.z+7),l.target.position.set(It.target.x,It.target.y-1,It.target.z),b.visible=Q.mode==="balance"&&!Q.done&&(Ut()||bt>0),b.visible){let _e=e.pos(0);b.position.set(_e[0],e.groundY(_e[0],_e[2])+.012,_e[2]),b.rotation.y=Math.atan2(-(_e[0]-o.position.x),-(_e[2]-o.position.z))}}let se=performance.now(),Wt=0,Gt=!1,re={n:0,sum:0,stage:0};function Pe(P){if(re.stage>1||(++re.n>30&&(re.sum+=P),re.n<150))return;let N=re.sum/120>.03;if(re.n=0,re.sum=0,!N){re.stage=2;return}re.stage===0?(s.setPixelRatio(1),at()):l.castShadow=!1,re.stage++}let Se={n:0,sum:0,worst:0,phys:0};function ce(P){if(Se.n++,Se.sum+=P,Se.worst=Math.max(Se.worst,P),Se.sum<.5)return;let N=l.castShadow?s.getPixelRatio()<Math.min(window.devicePixelRatio||1,2)?"reduced resolution":"full quality":"no shadows";Ft("fps").textContent=Math.round(Se.n/Se.sum)+" fps \xB7 worst frame "+Math.round(Se.worst*1e3)+" ms \xB7 physics "+(Se.phys/Se.n).toFixed(1)+" ms \xB7 "+N+" \xB7 "+Qn.id+" edition",Se.n=0,Se.sum=0,Se.worst=0,Se.phys=0}Ft("fps").hidden=!V;function Ie(P){Gt||(V&&ce((P-se)/1e3),Pe((P-se)/1e3),yn(Math.max(0,Math.min(.05,(P-se)/1e3))),se=P,requestAnimationFrame(Ie))}function yn(P,N=!0){tt=Math.max(0,tt-P);let Q=e.state;Tt=!Ut()&&Q.mode==="down"&&Q.spent&&Q.alive&&Q.bleed>.2&&tt<=0&&(bt<=0||Q.time-Q.downAt>1.5);let q=xt&&Q.hits>0&&!Q.done;q&&(tt=0);let Xt=q?7:Tt?6:At?.2:tt>.45?.16:tt>0?.16+(1-tt/.45)*.84:1;Rt+=(Xt-Rt)*Math.min(1,P*(Tt?3:q?8:14)),!Tt&&!q&&Rt>1&&(Rt=1);let Lt=Math.min(P*Rt,18/120);Ot.setSlow(Math.min(1,Rt));let _e=Math.max(1,Math.ceil(Lt/(1/120))),Ne=V?performance.now():0;if(Lt>1e-5)for(let vn=0;vn<_e;vn++)ve(e.step(Lt/_e));V&&(Se.phys+=performance.now()-Ne),gt(),ge(Lt),Jt.step(Lt),Ce.step(Lt,fn),Et.step(Lt),e.levelKey==="window"&&e.state.glass>0&&F(),ee.material.opacity=Math.max(0,ee.material.opacity-P*5),Bt(P),en(P);let ke=e.state.wrap||0,qe=e.state.hits>0&&!e.state.done&&ke>.2;Ft("wrap").hidden===qe&&(Ft("wrap").hidden=!qe),qe&&(Ft("wrap-fill").style.width=(ke*100).toFixed(0)+"%"),Wt+=P,Wt>.1&&!e.state.done&&(Wt=0,ot()),N&&s.render(r,o)}if(Ot.setMuted(!!Mt.muted),St(),V){Ft("soundboard").hidden=!1;for(let P of Ot.names){let N=document.createElement("button");N.type="button",N.className="util",N.textContent=P,N.addEventListener("click",()=>{Te(),Ot.play(P,{vol:.9,ui:!0})}),Ft("soundboard-list").appendChild(N)}}Ft("intro").hidden=!!Mt.seenIntro,Ft("intro-start").addEventListener("click",()=>{Mt.seenIntro=!0,Nt(),Ft("intro").hidden=!0,Te()}),kt(),_(yi[Mt.level]&&es(Mt,Mt.level)?Mt.level:"yard",!0),Ft("loading").hidden=!0,gt(),requestAnimationFrame(Ie),window.__imhit={sim:e,setTool(P){Z=P,ye()},setMode:h,career:iu,arrow:b,edition:Qn,sfx:Ot,get save(){return Mt},get actionsLeft(){return bt},strikePart(P,N=0){let Q=ln.findIndex(_e=>_e.name===P),q=ft[Q],Xt=new W().setFromMatrixPosition(q.matrixWorld).add(new W(0,N,0)),Lt=o.position.clone().sub(Xt).setY(0).normalize();ne(Q,Xt.addScaledVector(Lt,ln[Q].r))},reset:pt,setLevel:P=>_(P,!0),screen(P){let N=ln.findIndex(Xt=>Xt.name===P),Q=new W().setFromMatrixPosition(ft[N].matrixWorld).project(o),q=i.getBoundingClientRect();return[q.left+(Q.x*.5+.5)*q.width,q.top+(-Q.y*.5+.5)*q.height]},cam:It,physics:$a,manual(){Gt=!0},advance:yn}}Promise.all([Qx(),$a==="previous"?Promise.resolve().then(()=>(Ff(),Nf)).then(n=>n.createSim):Tf]).then(([n,t])=>ey(n,t)).catch(n=>{console.error(n),Ft("loading").textContent="Could not start the physics engine in this browser."});
