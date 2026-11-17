var Wf=Object.defineProperty;var Xf=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Mu=(n,t)=>{for(var e in t)Wf(n,e,{get:t[e],enumerable:!0})};var Gf={};Mu(Gf,{BONES:()=>xu,BONE_PAY:()=>zf,LEVELS:()=>yc,PARTS:()=>Rn,TOOLS:()=>ey,YARD:()=>Jx,createSim:()=>ay,groundY:()=>Jn});function Jn(n,t){if(t>Te.z-30){let e=t-Te.z;return Math.abs(e)>Te.halfWidth||n<-Te.back||n>Te.wall?0:n<0?Te.floor:Math.abs(e)<Te.open?Te.floor+Te.sill:Te.top}if(t>xn.z-30){let e=t-xn.z;return Math.abs(e)>xn.halfWidth||n<-xn.back||n>=xn.length?0:n<=0?xn.height:Math.max(0,xn.height-(Math.floor(n/xn.run)+1)*xn.rise)}return 0}function os(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function gu(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function gi(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}function to(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function _u(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ay(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(fu,Or),e.EnableCollision(Or,Or);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(fu,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Or,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(C,_,B,lt,At=.85){let se=[(B[0]+lt[0])/2,(B[1]+lt[1])/2,(B[2]+lt[2])/2],Qt=[(lt[0]-B[0])/2,(lt[1]-B[1])/2,(lt[2]-B[2])/2],ie=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(Qt[0],Qt[1],Qt[2]),Math.min(.02,Qt[0]*.5,Qt[1]*.5,Qt[2]*.5)),new n.RVec3(se[0],se[1],se[2]),o,n.EMotionType_Static,fu);ie.mFriction=At,ie.mRestitution=.03,a.AddBody(a.CreateBody(ie).GetID(),n.EActivation_DontActivate),_&&p.push({c:se,h:Qt,kind:_,level:C})}d("all",null,[-50,-1,-40],[50,0,190]);{let C=xn.z-xn.halfWidth,_=xn.z+xn.halfWidth;d("stairs","landing",[-xn.back,0,C],[0,xn.height,_]);for(let B=0;B<xn.steps-1;B++)d("stairs","step",[B*xn.run,0,C],[(B+1)*xn.run,xn.height-(B+1)*xn.rise,_],.13);d("stairs","wall",[-xn.back,0,C-.3],[xn.length+3,xn.height+2.6,C])}let f={tiles:[],panes:[],frame:[]};{let C=Te.z-Te.halfWidth,_=Te.z+Te.halfWidth,B=Te.floor;d("window","building",[-Te.back,0,C],[Te.wall,B,_]),d("window","wall",[0,B,C],[Te.wall,Te.top,Te.z-Te.open]),d("window","wall",[0,Te.lintel,Te.z-Te.open],[Te.wall,Te.top,Te.z+Te.open]),d("window","sill",[0,B,Te.z-Te.open],[Te.wall,B+Te.sill,Te.z+Te.open]);let lt=Te.glassX,At=Te.z-Te.panes*Te.pane/2,se=Te.glassY,Qt=Te.panes*Te.pane,ie=.035;for(let P=0;P<=Te.panes;P++)d("window","frame",[lt+P*Te.pane-ie,se-.09,At-ie],[lt+P*Te.pane+ie,se-.012,At+Qt+ie]),d("window","frame",[lt-ie,se-.09,At+P*Te.pane-ie],[lt+Qt+ie,se-.012,At+P*Te.pane+ie]);for(let[P,U]of[[lt,At],[lt+Qt,At],[lt,At+Qt],[lt+Qt,At+Qt]])d("window","frame",[P-.05,0,U-.05],[P+.05,se-.09,U+.05]);let S=_u(99),h=(P,U,k,V,dt,yt)=>{let gt=k-P,qt=V-U;if(dt===0||gt<.3&&qt<.3){yt.push([P,U,k,V]);return}let zt=.32+.36*S();gt>qt?(h(P,U,P+gt*zt,V,dt-1,yt),h(P+gt*zt,U,k,V,dt-1,yt)):(h(P,U,k,U+qt*zt,dt-1,yt),h(P,U+qt*zt,k,V,dt-1,yt))};for(let P=0;P<Te.panes;P++)for(let U=0;U<Te.panes;U++){let V=lt+P*Te.pane+.04,dt=At+U*Te.pane+.04,yt={broken:!1,min:[V-.04,dt-.04],max:[V+Te.pane-.04,dt+Te.pane-.04],y:se,tiles:[]},gt=[];h(V,dt,V+Te.pane-2*.04,dt+Te.pane-2*.04,3,gt);for(let qt of gt){let zt=[(qt[2]-qt[0])/2,.007,(qt[3]-qt[1])/2],It=[(qt[0]+qt[2])/2,se,(qt[1]+qt[3])/2],ut=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(zt[0],zt[1],zt[2]),.002),new n.RVec3(It[0],It[1],It[2]),o,n.EMotionType_Static,Or);ut.mAllowDynamicOrKinematic=!0,ut.mFriction=.5,ut.mRestitution=.15,ut.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,ut.mMassPropertiesOverride.mMass=Math.max(.15,zt[0]*zt[2]*4*12);let pt=a.CreateBody(ut),ce=new n.BodyID(pt.GetID().GetIndexAndSequenceNumber());a.AddBody(ce,n.EActivation_DontActivate),yt.tiles.push(f.tiles.length),f.tiles.push({id:ce,home:It,h:zt})}f.panes.push(yt)}}function x(C,_){C.broken=!0,Rt.glass++;for(let B of C.tiles){let lt=f.tiles[B];a.SetMotionType(lt.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(_[0]*.45+(jt()-.5)*2.2,_[1]*.5-jt()*1.2,_[2]*.45+(jt()-.5)*2.2);let At=new n.Vec3((jt()-.5)*14,(jt()-.5)*6,(jt()-.5)*14);a.SetLinearAndAngularVelocity(lt.id,l,At),n.destroy(At)}Ee.push({type:"glass",pos:[(C.min[0]+C.max[0])/2,C.y,(C.min[1]+C.max[1])/2]})}function T(){for(let C of f.tiles)a.SetMotionType(C.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(C.home[0],C.home[1],C.home[2]),a.SetPositionAndRotation(C.id,c,o,n.EActivation_DontActivate);for(let C of f.panes)C.broken=!1}let g=new n.Skeleton;for(let C of Rn)g.AddJoint(new n.JPHString(C.name,C.name.length),C.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(Rn.length),Rn.forEach((C,_)=>{let B=m.mParts.at(_);if(B.SetShape(new n.CapsuleShape(C.hh,C.r)),B.mPosition=new n.RVec3(C.c[0],C.c[1],C.c[2]),B.mRotation=o,B.mMotionType=n.EMotionType_Dynamic,B.mMotionQuality=n.EMotionQuality_LinearCast,B.mObjectLayer=Or,B.mFriction=.7,B.mRestitution=.05,B.mAngularDamping=.3,B.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,B.mMassPropertiesOverride.mMass=C.mass,C.strength=C.mass*26,!(C.parent<0))if(C.type==="st"){let lt=new n.SwingTwistConstraintSettings;lt.mSpace=n.EConstraintSpace_WorldSpace,lt.mPosition1=lt.mPosition2=new n.RVec3(C.j[0],C.j[1],C.j[2]),lt.mTwistAxis1=lt.mTwistAxis2=new n.Vec3(C.twist[0],C.twist[1],C.twist[2]),lt.mPlaneAxis1=lt.mPlaneAxis2=new n.Vec3(1,0,0),lt.mNormalHalfConeAngle=lt.mPlaneHalfConeAngle=C.cone*ja,lt.mTwistMinAngle=-C.tw*ja,lt.mTwistMaxAngle=C.tw*ja,lt.mMaxFrictionTorque=C.mass*.4;for(let At of[lt.mSwingMotorSettings,lt.mTwistMotorSettings])At.mSpringSettings.mFrequency=8,At.mSpringSettings.mDamping=1,At.mMinTorqueLimit=-C.strength,At.mMaxTorqueLimit=C.strength;B.mToParent=lt}else{let lt=new n.HingeConstraintSettings;lt.mSpace=n.EConstraintSpace_WorldSpace,lt.mPoint1=lt.mPoint2=new n.RVec3(C.j[0],C.j[1],C.j[2]),lt.mHingeAxis1=lt.mHingeAxis2=new n.Vec3(0,0,1),lt.mNormalAxis1=lt.mNormalAxis2=new n.Vec3(1,0,0),lt.mLimitsMin=C.min*ja,lt.mLimitsMax=C.max*ja,lt.mMaxFrictionTorque=C.mass*.4,lt.mMotorSettings.mSpringSettings.mFrequency=8,lt.mMotorSettings.mSpringSettings.mDamping=1,lt.mMotorSettings.mMinTorqueLimit=-C.strength,lt.mMotorSettings.mMaxTorqueLimit=C.strength,B.mToParent=lt}});let w=0,F=Rn.map(C=>(w+=C.mass,C.mass));m.DisableParentChildCollisions(),m.CalculateBodyIndexToConstraintIndex();let E=m.CreateRagdoll(0,0,r);E.AddToPhysicsSystem(n.EActivation_Activate);let N=Rn.map((C,_)=>new n.BodyID(E.GetBodyID(_).GetIndexAndSequenceNumber())),I=Rn.map((C,_)=>{if(C.parent<0)return null;let B=E.GetConstraint(_-1);return C.type==="st"?n.castObject(B,n.SwingTwistConstraint):n.castObject(B,n.HingeConstraint)}),y=Rn.length,A=(C,_)=>{let B=a.GetPosition(N[C]);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_},X=(C,_)=>{let B=a.GetLinearVelocity(N[C]);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_},O=(C,_)=>{let B=a.GetRotation(N[C]);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_[3]=B.GetW(),_},K=(C,_)=>{let B=a.GetAngularVelocity(N[C]);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_},tt=C=>A(C,[0,0,0]),ct=(C,_)=>{let B=a.GetPosition(C);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_},H=(C,_)=>{let B=a.GetRotation(C);return _[0]=B.GetX(),_[1]=B.GetY(),_[2]=B.GetZ(),_[3]=B.GetW(),_};function st(C,_,B,lt,At){l.Set(_,B,lt),At?(c.Set(At[0],At[1],At[2]),a.AddForce(N[C],l,c,n.EActivation_Activate)):a.AddForce(N[C],l,n.EActivation_Activate)}function rt(C,_,B,lt,At){l.Set(_,B,lt),At?(c.Set(At[0],At[1],At[2]),a.AddImpulse(N[C],l,c)):a.AddImpulse(N[C],l)}let et=new Float32Array(y).fill(1),mt=new Float32Array(y),ft=new Float32Array(y).fill(-1),ht=new Float32Array(y*3),Nt=new Float32Array(y);function oe(C,_){u.Set(_[0],_[1],_[2],_[3]),I[C].SetTargetOrientationCS(u)}let ye=1,Tt=(C,_,B,lt=0)=>gu(gu(os(0,1,0,C),os(0,0,1,_*B)),os(1,0,0,lt*B*ye));function Jt(){for(let C=1;C<y;C++){let _=et[C]*(1-mt[C]);if(Math.abs(_-ft[C])<.02&&!(_===0&&ft[C]!==0))continue;ft[C]=_;let B=Rn[C],lt=I[C],At=_>.02?n.EMotorState_Position:n.EMotorState_Off,se=B.strength*_,Qt=2.5+5.5*_;if(B.type==="st"){for(let ie of[lt.GetSwingMotorSettings(),lt.GetTwistMotorSettings()])ie.mMinTorqueLimit=-se,ie.mMaxTorqueLimit=se,ie.mSpringSettings.mFrequency=Qt;lt.SetSwingMotorState(At),lt.SetTwistMotorState(At)}else{let ie=lt.GetMotorSettings();ie.mMinTorqueLimit=-se,ie.mMaxTorqueLimit=se,ie.mSpringSettings.mFrequency=Qt,lt.SetMotorState(At)}}}let Rt={},Ct=[],bt=[{shin:Re.lleg_l,thigh:Re.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0},{shin:Re.lleg_r,thigh:Re.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0}],_t={},jt=_u(1),ne=0,Ne=yc.yard,Oe="yard",Ee=[],Ge=[];function pn(){Rn.forEach((C,_)=>{c.Set(Ne.start[0]+C.c[0],Ne.start[1]+C.c[1]-.03,Ne.start[2]+C.c[2]),a.SetPositionAndRotation(N[_],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(N[_],l,l)}),et.fill(1),mt.fill(0),ft.fill(-1),ht.fill(0),Nt.fill(0),Ct.length=0,T(),jt=_u(1234+77*ne++),Object.assign(Rt,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:Ne.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(_t,{support:1,hT:Ne.start[1]+mu,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[jt()*6.28,jt()*6.28,jt()*6.28,jt()*6.28],lastCom:[Ne.start[0],Ne.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let C of bt)C.swing=!1,C.hurt=0,C.broken=0,C.kneeDown=!1,C.planted=[Ne.start[0],Ne.start[2]+C.side*xc],C.t=0;Jt()}function Ke(C){Rt.alive&&(Rt.alive=!1,Rt.diedAt=Rt.time,Rt.outcome=C,Ge.push({type:"dead",cause:C,pos:tt(Re.head),time:Rt.time}))}function sn(){Rt.ko||!Rt.alive||(Rt.ko=!0,Ge.push({type:"out",pos:tt(Re.head)}))}function Dn(C,_){let B=Rn[C].zone,lt=Rn[C].side===1?"_l":"_r";if(B==="head")return _[0]<-.45?_[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:_[1]<-.55?[["jaw",1]]:[["skull",1]];if(C===Re.chest){let At=_[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(_[2])>.55||_[1]>.5)&&At.push(["collarbone"+(_[2]>=0?"_l":"_r"),.9]),At}return C===Re.pelvis?_[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:B==="arm"?Rn[Rn[C].parent].zone==="arm"?_[1]<-.35?[["wrist"+lt,1]]:[["forearm"+lt,1]]:_[1]>.5?[["humerus"+lt,.8],["collarbone"+lt,.8]]:[["humerus"+lt,1]]:B==="thigh"?[["femur"+lt,1]]:_[1]>.35?[["kneecap"+lt,1]]:_[1]<-.5?[["ankle"+lt,1]]:[["tibia"+lt,1]]}function Sn(C,_,B,lt){let At=C.split("_")[0],se=xu[At];for(;_>0&&!se[_-1];)_--;let Qt=Rt.bones[C]||0;if(_<=Qt)return 0;Rt.bones[C]=_;let ie=C.endsWith("_l")?1:C.endsWith("_r")?-1:0;Ge.push({type:"injury",bone:C,base:At,side:ie,level:_,was:Qt,pos:[B[0],B[1],B[2]],cause:lt});let S=ie===1?Re.uarm_l:Re.uarm_r,h=ie===1?Re.larm_l:Re.larm_r,P=U=>{Rt.stun=Math.min(1.6,Rt.stun+U)};if(At==="femur"||At==="tibia"||At==="kneecap"||At==="ankle"){let U=bt[ie===1?0:1];U.hurt=Math.min(1,Math.max(U.hurt+.15,_===2?.8:_===3?1:0)),U.broken=Math.max(U.broken,_),mt[U.thigh]=Math.max(mt[U.thigh],U.hurt*.5),mt[U.shin]=Math.max(mt[U.shin],U.hurt*.6),_t.legWound=Math.max(_t.legWound,U.hurt),_>=2&&Rt.mode==="balance"&&(_t.buckle=.24,_t.buckleDip=.3)}else if(At==="humerus")_>=2&&(mt[S]=.9,mt[h]=Math.max(mt[h],.6));else if(At==="forearm"||At==="wrist")_>=2&&(mt[h]=.9);else if(At==="collarbone")_>=2&&(mt[S]=Math.max(mt[S],.7));else if(At==="ribs")P([0,.08,.22,.4][_]),_===3&&Ct.push({part:Re.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(At==="nose")P(.1),_>=2&&Ct.push({part:Re.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(At==="jaw")P(.12*_);else if(At==="skull")_===3?Ke("Skull shattered"):_===2&&(P(.5),sn());else if(At==="neck")_>=2?Ke("Broken neck"):P(.3);else if(At==="spine"){if(_>=2){Rt.paralysed=!0;for(let U of bt)U.hurt=1,mt[U.thigh]=1,mt[U.shin]=1}}else if(At==="pelvis"&&_>=2){Rt.cantRise=!0;for(let U of bt)U.hurt=Math.max(U.hurt,.5)}return _}function Cn(C,_,B,lt){let At=xu[C.split("_")[0]];Rt.bones[C]&&(_*=1.15),_*=.85+.3*jt();let se=At[2]&&_>=At[2]?3:_>=At[1]?2:_>=At[0]?1:0;return se?Sn(C,se,B,lt):0}let En=()=>!Rt.paralysed&&!Rt.cantRise&&!(bt[0].broken>=3||bt[1].broken>=3)&&!(bt[0].broken>=2&&bt[1].broken>=2),Qe=[0,0,0,1],G=[0,0,0],Fe=[0,0,0];function fe(C,_,B,lt){if(Rt.done)return null;let At=Rn[C],se=tt(Re.chest)[1],Qt=tt(Re.head)[1],S=At.zone==="chest"&&_[1]-se>.13||At.zone==="head"&&Qt-_[1]>.06?"neck":At.zone;if(Rt.hits++,Rt.mode==="fall"&&(Rt.fallHits++,$t[1]-Jn($t[0],$t[2])>1.2&&Rt.airHits++),lt.impulse>200)for(let[V,dt]of[[C,.5],[Re.chest,.3],[Re.pelvis,.2]])rt(V,B[0]*lt.impulse*dt,B[1]*lt.impulse*dt,B[2]*lt.impulse*dt,V===C?_:null);else rt(C,B[0]*lt.impulse,B[1]*lt.impulse,B[2]*lt.impulse,_);for(let V=0;V<y;V++)Nt[V]=.12;A(C,Fe),O(C,Qe);let h=gi(Qa(Qe),[_[0]-Fe[0],_[1]-Fe[1],_[2]-Fe[2]],[0,0,0]);if(lt.bleed>0){let V=lt.kind==="blunt";Ct.push({part:C,zone:S,at:h,arterial:!V&&(S==="neck"||S==="thigh"),rate:V?1.6:sy[S]*lt.bleed,left:V?7:ry[S]*lt.bleed})}Rt.stun=Math.min(1.6,Rt.stun+lt.stun*(S==="head"?2.2:S==="neck"?1.4:1)),S==="head"&&lt.kind==="ballistic"?(Ke("Headshot"),et.fill(0)):S==="head"&&Rt.stun>1&&sn();let P=[h[0]/At.r,h[1]/(At.hh+At.r),h[2]/At.r];if(lt.kind==="ballistic"){let V=lt.impulse>60,dt=S==="neck"?"neck":S==="head"?"skull":Dn(C,P)[0][0],yt=dt.split("_")[0],[gt,qt]=yt==="skull"?[0,1]:yt==="neck"?[V?.8:.9,0]:yt==="spine"?[V?.5:.65,0]:iy.has(yt)?V?[.1,.6]:[.25,.25]:yt==="pelvis"?V?[.45,.2]:[.75,.05]:V?[.2,.3]:[.45,.1],zt=jt();zt>=gt&&Sn(dt,zt>1-qt?3:2,_,"shot")}else{let V=(lt.impulse-45)/19;if(S==="neck")Cn("neck",V*.6,_,"blow");else for(let[dt,yt]of Dn(C,P))Cn(dt,V*yt,_,"blow")}if(S==="thigh"||S==="shin"){let V=bt[At.side===1?0:1];V.hurt=Math.min(1,V.hurt+(lt.kind==="ballistic"?.7:.45)*(lt.bleed>1.5||lt.impulse>150?1.4:1)),mt[V.thigh]=Math.max(mt[V.thigh],V.hurt*.5),mt[V.shin]=Math.max(mt[V.shin],V.hurt*.6),_t.legWound=Math.max(_t.legWound,V.hurt)}if(S==="arm"){mt[C]=.9;let V=Rn.findIndex(dt=>dt.parent===C);V>0&&(mt[V]=.9)}if(lt.kind==="ballistic"){let V=Math.hypot(B[0],B[2])||1,dt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[S],yt=(38+34*jt())*dt*(lt.impulse>60?.5:1),gt=(jt()-.5)*.35,qt=yn(((_[0]-Fe[0])*_t.hz+(_[2]-Fe[2])*-_t.hx)/.12,-1,1)*.65,zt=B[0]/V-_t.hz*qt-B[2]/V*gt,It=B[2]/V+_t.hx*qt+B[0]/V*gt,ut=Math.hypot(zt,It)||1;_t.reel=[zt/ut*yt,It/ut*yt],_t.reelT=.16}Rt.mode==="balance"&&(_t.buckle=.22,_t.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[S]||.04)*(lt.kind==="ballistic"?1:.6)),_t.flinch=.2,_t.clutch=S,_t.clutchEnd=lt.bleed>0?1e9:Math.max(_t.clutchEnd<1e8?0:_t.clutchEnd,Rt.clock+.9+lt.stun*4);let U=(_[0]-Fe[0])*_t.hz+(_[2]-Fe[2])*-_t.hx,k=S==="arm"?-At.side:Rn[C].side||(U>=0?1:-1);if(mt[k===1?Re.uarm_l:Re.uarm_r]>.5&&(k=-k),_t.clutchArm=S==="neck"||S==="head"?0:k,S==="gut"&&lt.kind==="ballistic"&&lt.impulse<60&&(_t.lookDown=1.1),lt.kind==="ballistic"&&_t.fleeAt>1e8){_t.fleeAt=Rt.time+.7+jt()*.7+_t.lookDown;let V=(jt()-.5)*1.3,dt=Math.hypot(B[0],B[2])||1,yt=B[0]/dt,gt=B[2]/dt;_t.fleeDir=[yt*Math.cos(V)-gt*Math.sin(V),yt*Math.sin(V)+gt*Math.cos(V)]}return Ge.push({type:"hit",zone:S==="thigh"||S==="shin"?"leg":S,part:C,pos:_,tool:lt,fatal:!Rt.alive}),S}let $t=[0,0,0],j=[0,0,0],He=[0,0,0,1],kt=[0,0,0],de=[0,0,0],L=[0,0,0,1],M=[0,0,0],Z=[0,0,0],Et=[0,0,0],nt=[0,0,0],at=[0,0,0];function Ft(C,_,B,lt,At,se){O(C,Qe),K(C,Z);let Qt=Qe[0],ie=Qe[1],S=Qe[2],h=Qe[3],P=2*(Qt*ie-h*S),U=1-2*(Qt*Qt+S*S),k=2*(ie*S+h*Qt),V=Math.hypot(lt,1,At),dt=lt/V,yt=1/V,gt=At/V;return l.Set(_*(U*gt-k*yt)-B*Z[0],(se||0)-B*.3*Z[1],_*(P*yt-U*dt)-B*Z[2]),a.AddTorque(N[C],l,n.EActivation_Activate),U}function vt(C,_){gi(He,[0,Ja,C.side*xc],Et),nt[0]=_[0]-($t[0]+Et[0]),nt[1]=_[1]-($t[1]+Et[1]),nt[2]=_[2]-($t[2]+Et[2]),gi(Qa(He),nt,at);let B=Math.hypot(at[0],at[1],at[2])||1e-6,lt=at[0]/B,At=at[1]/B,se=at[2]/B;B=yn(B,.24,bs+kr-.004);let Qt=Math.acos(yn((bs*bs+B*B-kr*kr)/(2*bs*B),-1,1)),ie=-lt,S=-1-ie*lt,h=-ie*At,P=-ie*se,U=Math.hypot(S,h,P)||1;S/=U,h/=U,P/=U;let k=Math.cos(Qt),V=Math.sin(Qt),dt=lt*k+S*V,yt=At*k+h*V,gt=se*k+P*V;Mt(C,dt,yt,gt);let qt=Math.PI-Math.acos(yn((bs*bs+kr*kr-B*B)/(2*bs*kr),-1,1));I[C.shin].SetTargetAngle(qt)}let St={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Yt(C,_){let B=_t,lt=Rt.clock,At=.03,se=0,Qt=0,ie=B.clutch?St[B.clutch]:null;ie&&(At=ie.spine+(1-Rt.strength)*.25,se=ie.neck),B.lookDown>0&&(se=.7,At+=.1),B.flinch>0&&(At=-.22,se=-.3),Rt.mode==="down"&&(At+=.15*Math.sin(lt*1.3+B.phase[0]),Qt=.25*Math.sin(lt*.9+B.phase[1])),oe(Re.chest,gu(os(0,1,0,At),os(1,0,0,Qt))),oe(Re.head,os(0,1,0,se));for(let S of[1,-1]){let h=S===1?Re.uarm_l:Re.uarm_r,P=S===1?Re.larm_l:Re.larm_r,U;if(Rt.mode==="rise"&&B.riseT<1.5)U=[.75,-.25,-.15];else if(B.flinch>0)U=[.5,-.95,-1];else if(ie&&(B.clutchArm===0||B.clutchArm===S))U=ie.arm;else if(Rt.mode==="down"){let k=Math.max(0,Math.sin(lt*.8+B.phase[2]+S));U=[.4+1.5*k*Rt.strength,-.2,-.5-.6*k]}else{let k=yn(.12+2.6*C,0,1.45);U=[.1+(C>.12?Math.sin(lt*13+S*1.7)*.45*yn(C*3,0,1):0)+.6*C,-k,-.3-.5*yn(C*3,0,1)]}oe(h,Tt(U[0],U[1],S,U[3]||0)),I[P].SetTargetAngle(U[2])}}function z(C){return A(C.shin,C.p),O(C.shin,L),gi(L,[0,-Qx,0],nt),C.p[0]+=nt[0],C.p[1]+=nt[1],C.p[2]+=nt[2],C.p}let wt=[0,1,0];function xt(C){A(C.shin,Fe),O(C.shin,L),gi(L,wt,nt);let _=nt[0],B=nt[1],lt=nt[2];C.gap=Fe[1]-.15*B-.055-Jn(Fe[0]-.15*_,Fe[2]-.15*lt),C.k[0]=Fe[0]+.22*_,C.k[1]=Fe[1]+.22*B,C.k[2]=Fe[2]+.22*lt,O(C.thigh,Qe),gi(Qe,wt,nt),C.kgap=Math.min(Fe[1]+.15*B-.055,C.k[1]+.07*nt[1]-.07)-Jn(C.k[0],C.k[2])}function Mt(C,_,B,lt){let At=-B,se=-lt,Qt=_,ie=Math.hypot(Qt,se,1+At)||1;oe(C.thigh,[0,-Qt/ie,se/ie,(1+At)/ie])}function Lt(C,_){if(Rt.mode==="fall"||Rt.mode==="down")return;Rt.mode="fall",Rt.fellBecause=_||"";for(let Qt of bt)Qt.swing=!1;C&&rt(Re.chest,C[0],0,C[1]);let B=_t;B.fight=Rt.alive&&!Rt.ko?yn(.2+.95*Rt.strength,0,1):0,B.fallT=0,B.settle=0;let lt=(j[0]+de[0])*.5+(C?C[0]/40:0),At=(j[2]+de[2])*.5+(C?C[1]/40:0);Math.hypot(lt,At)<.3&&(lt+=(kt[0]-$t[0])*4,At+=(kt[2]-$t[2])*4),Math.hypot(lt,At)<.1&&(lt=B.hx,At=B.hz);let se=Math.hypot(lt,At);B.fallDir[0]=lt/se,B.fallDir[1]=At/se,z(bt[0]),z(bt[1]),B.lead=bt[0].p[0]*B.fallDir[0]+bt[0].p[2]*B.fallDir[1]<bt[1].p[0]*B.fallDir[0]+bt[1].p[2]*B.fallDir[1]?0:1,Ge.push({type:"fall",pos:tt(Re.chest),onFeet:Rt.onFeet})}function Ht(C){let _=_t,B=Rt,lt=B.mode==="rise";lt&&(_.riseT+=C,_.support=Math.min(1,_.riseT/.8));let At=B.mode==="kneel",se=At||lt&&_.riseT<1.9,Qt=yn(B.strength,0,1),ie=Math.sqrt(Ss/.95),S=0,h=0,P=0,U=0;for(let ot=0;ot<y;ot++){let Be=F[ot]/w;A(ot,Fe),X(ot,G),S+=Fe[0]*Be,h+=Fe[2]*Be,P+=G[0]*Be,U+=G[2]*Be}let k=bt[0],V=bt[1];z(k),z(V),xt(k),xt(V);let dt=_.hz,yt=-_.hx;if(At)for(let ot of bt)ot.planted[0]=ot.k[0]+(ot.p[0]-ot.k[0])*.33,ot.planted[1]=ot.k[2]+(ot.p[2]-ot.k[2])*.33,!ot.kneeDown&&ot.kgap<.012&&(ot.kneeDown=!0,Cn("kneecap"+(ot.side===1?"_l":"_r"),-j[1]*1.3,ot.k,"fall"));let gt=9;for(let ot of bt)ot.swing||(gt=Math.min(gt,ot.gap)),se&&(gt=Math.min(gt,ot.kgap));_.grip+=yn((gt<.028?1:0)-_.grip,-C/.09,C/.05),_.airT=_.grip<.5?_.airT+C:0;let qt=0,zt=0,It=B.hits>0,ut=Math.hypot(S-Ne.start[0],h-Ne.start[2])>8.5||B.time>_.fleeAt+16;if(!se&&B.bleed>.2&&B.time>_.fleeAt&&Qt>.3&&!ut){let ot=(.2+.6*Qt)*(1-.45*_.legWound),Be=Math.sin(B.clock*1.1+_.phase[3])*(.25+.9*(1-Qt));qt=(_.fleeDir[0]*Math.cos(Be)-_.fleeDir[1]*Math.sin(Be))*ot,zt=(_.fleeDir[0]*Math.sin(Be)+_.fleeDir[1]*Math.cos(Be))*ot;let rn=Math.atan2(_.hz*qt-_.hx*zt,_.hx*qt+_.hz*zt),Y=yn(rn,-2.2*C,2.2*C),he=Math.cos(Y),ue=Math.sin(Y),xe=_.hx*he+_.hz*ue,tn=-_.hx*ue+_.hz*he;_.hx=xe,_.hz=tn}_.walk[0]+=(qt-_.walk[0])*Math.min(1,C*2),_.walk[1]+=(zt-_.walk[1])*Math.min(1,C*2);let pt,ce,v=null;k.swing?(pt=V.planted[0],ce=V.planted[1],v=V):V.swing?(pt=k.planted[0],ce=k.planted[1],v=k):(pt=(k.planted[0]+V.planted[0])/2,ce=(k.planted[1]+V.planted[1])/2);let R=S-pt,J=h-ce,W=v?Jn(v.planted[0],v.planted[1]):Math.max(Jn(k.planted[0],k.planted[1]),Jn(V.planted[0],V.planted[1])),Q=S+P/ie,Pt=h+U/ie,Kt=Q-pt,Wt=Pt-ce,Zt=Math.hypot(Kt,Wt),ae=Math.min(1,Zt),ge=B.bleed>.2||B.stun>.05,Ve=It&&ge?1-Qt+.35*Math.min(1,B.stun):0,ee=B.clock,Ce=w*(.25+4.2*Ve)*(se?.45:1),je=Ce*(Math.sin(ee*1.7+_.phase[0])*.55+Math.sin(ee*.63+_.phase[1])*.45),ln=Ce*(Math.sin(ee*1.4+_.phase[2])*.55+Math.sin(ee*.51+_.phase[3])*.45);if(_.buckle-=C,It&&!se&&_.buckle<-.5&&jt()<C*((ge?.12:0)+1.5*Ve+(Math.hypot(_.walk[0],_.walk[1])>.1?.8*_.legWound:0))){_.buckle=.24,_.buckleDip=.1+.2*jt()+.12*Ve;let ot=jt()*6.28,Be=(18+30*jt())*(.6+Ve);rt(Re.pelvis,Math.cos(ot)*Be,0,Math.sin(ot)*Be),Ee.push({type:"buckle",pos:[$t[0],$t[1],$t[2]]})}let Je=At?0:se?.35:.8+.5*(v?v.hurt:0),Bt=w*ie*ie*Je*R+je,b=w*ie*ie*Je*J+ln,D=_.walk[0]*.3,q=_.walk[1]*.3,it=(v?50:150)*(.25+.75*Qt)+(se?120:0),Dt=to(-1500*(R-D)-330*(P-_.walk[0]),-1500*(J-q)-330*(U-_.walk[1]),it);Bt+=Dt[0],b+=Dt[1],_.reelT>0&&(_.reelT-=C,Bt+=_.reel[0]/.16,b+=_.reel[1]/.16),Bt*=_.support*_.grip,b*=_.support*_.grip,st(Re.pelvis,Bt*.5,0,b*.5),st(Re.chest,Bt*.5,0,b*.5);let Ot=W+(se?.5:mu-.1*(1-Qt)),re=0,Pe=!1;if(lt&&_.riseT<1&&(Ot=W+_.riseFrom+(.5-_.riseFrom)*(_.riseT/1)),_.buckle>0&&(Ot-=_.buckleDip),v&&v.hurt>0&&(Ot-=.13*v.hurt),!se){let ot=0,Be=9,rn=0;for(let Y of bt){gi(He,[0,Ja,Y.side*xc],Et);let he=Math.hypot((Y.swing?Y.to[0]:Y.planted[0])-$t[0]-Et[0],(Y.swing?Y.to[1]:Y.planted[1])-$t[2]-Et[2]),ue=W-Ja+Math.sqrt(Math.max(0,pu*pu-he*he));Y.swing?(Be=ue,rn=yn((Y.t-.4)/.4,0,1)):ue>ot&&(ot=ue,re=he)}ot<Ot&&(Ot=ot,Pe=!0),rn>0&&Be<Ot&&(Ot+=(Math.max(Be,W+.6)-Ot)*rn)}let _e=_.hT;_.hT+=yn(Ot-_.hT,-(Pe?3.2:2.2)*C,1.1*C);let Ie=Pe?Math.min(0,(_.hT-_e)/C):0,Ze=Math.max(.05,$t[1]+Ja-W),Me=se?1:Ze/Math.hypot(Ze,re),We=(1.05+.75*Qt)*(v?1-.5*v.hurt:1-.25*(k.hurt+V.hurt)),On=yn(w*Ss+12e3*(_.hT-$t[1])-1400*(j[1]-Ie),0,w*Ss*Math.max(.3,We*Me))*_.support*_.grip;At&&(_.hT=$t[1],On=yn(w*Ss*ty-500*j[1],0,w*Ss*.8)*_.support*_.grip),st(Re.pelvis,0,On*.55,0),st(Re.chest,0,On*.45,0);let Ni=to(Kt*.9,Wt*.9,.38);O(Re.pelvis,Qe),gi(Qe,[-1,0,0],nt);let Mc=Math.atan2(nt[2]*_.hx-nt[0]*_.hz,nt[0]*_.hx+nt[2]*_.hz);K(Re.pelvis,Z),Ft(Re.pelvis,520*_.support,46*_.support,Ni[0]*.3,Ni[1]*.3,(70*Mc-7*Z[1])*_.support),Ft(Re.chest,900*_.support*(.5+.5*Qt),80*_.support,Ni[0],Ni[1],0),_.stepCool-=C;let no=(ot,Be)=>{let rn=Zt>1e-4?1/Zt:0,Y=.02+.2*(1-Qt),he=Q-ot.planted[0],ue=Pt-ot.planted[1],xe=Math.exp(ie*Math.sqrt(Je)*Be*(.55+.45*Qt));return[ot.planted[0]+he*xe+Kt*rn*.05-_.walk[0]/ie*.55+(jt()-.5)*Y,ot.planted[1]+ue*xe+Wt*rn*.05-_.walk[1]/ie*.55+(jt()-.5)*Y]},Ws=(ot,Be,rn)=>{let Y=rn[0]-Be.planted[0],he=rn[1]-Be.planted[1],ue=(.36+.36*Qt)*(1-.35*ot.hurt);[Y,he]=to(Y,he,ue);let xe=(Y*dt+he*yt)*ot.side;xe<.1&&(Y+=(.1-xe)*ot.side*dt,he+=(.1-xe)*ot.side*yt);let tn=Be.planted[0]+Y,Ae=Be.planted[1]+he;return[tn,Ae,Math.hypot(tn-rn[0],Ae-rn[1])]};if(se){if(!At)for(let ot of bt){let Be=S+_.hx*-.16+dt*ot.side*.12,rn=h+_.hz*-.16+yt*ot.side*.12,Y=to(Be-ot.planted[0],rn-ot.planted[1],.9*C);ot.planted[0]+=Y[0],ot.planted[1]+=Y[1]}}else if(v){let ot=v===k?V:k;if(ot.t+=C/ot.T,ot.t<.65&&!ot.tidy){let Be=Ws(ot,v,no(v,(1-ot.t)*ot.T));ot.to[0]+=(Be[0]-ot.to[0])*.3,ot.to[1]+=(Be[1]-ot.to[1])*.3}if(ot.t>.55&&ot.gap<.012||ot.t>=1.4||ot.t>=1&&Jn(ot.p[0],ot.p[2])<W-.12){if(ot.swing=!1,Jn(ot.p[0],ot.p[2])<W-.12)return Lt(null,"edge");let Be=Math.hypot(ot.to[0]-ot.p[0],ot.to[1]-ot.p[2]),rn=Math.hypot(P,U);if(Be>.16&&Math.abs(Jn(ot.to[0],ot.to[1])-W)>.12){let ue=rn>.05?P/rn:-_.hx,xe=rn>.05?U/rn:-_.hz;return rt(Re.pelvis,ue*22,26,xe*22),Lt([ue*62,xe*62],"trip")}ot.planted=[ot.p[0],ot.p[2]],_.stepCool=.03+.12*(1-Qt);let Y=Math.hypot(P,U),he=Math.min(w*Y*.38,55*Qt*(1-.6*ot.hurt));Y>.05&&(rt(Re.chest,-P/Y*he*.6,0,-U/Y*he*.6),rt(Re.pelvis,-P/Y*he*.4,0,-U/Y*he*.4)),It&&!ot.tidy&&B.steps++,Ee.push({type:"step",pos:[ot.p[0],W,ot.p[2]],hurt:ot.hurt})}}else{let ot=Math.hypot(k.planted[0]-V.planted[0],k.planted[1]-V.planted[1]),Be=.115-.035*(1-Qt),rn=Zt<.06&&Math.hypot(P,U)<.12&&ot>.36&&_.stepCool<-.35&&Qt>.45;if(_.stepCool<=0&&(Zt>Be||rn)){let Y,he;if(rn)Y=_.lastFoot===0?1:0,he=[bt[1-Y].planted[0]+bt[Y].side*dt*.2,bt[1-Y].planted[1]+bt[Y].side*yt*.2];else{let Ae=[0,1].map(un=>{let dn=Ws(bt[un],bt[1-un],no(bt[1-un],.26));return{tgt:dn,move:Math.hypot(dn[0]-bt[un].p[0],dn[1]-bt[un].p[2])}}),hn=un=>un.tgt[2]-.25*Math.min(un.move,.4)+(un.move<.08?1:0);Y=Math.abs(hn(Ae[0])-hn(Ae[1]))<.02?_.lastFoot===0?1:0:hn(Ae[0])<hn(Ae[1])?0:1,he=[Ae[Y].tgt[0],Ae[Y].tgt[1]]}let ue=bt[Y],xe=bt[1-Y];ue.swing=!0,ue.t=0,ue.from=[ue.p[0],ue.p[1],ue.p[2]],ue.to=he;let tn=Math.hypot(ue.to[0]-ue.p[0],ue.to[1]-ue.p[2]);ue.T=yn(.15+.24*tn,.17,.34)*(1.3-.3*Qt)*(Zt>.3?.75:1)*(xe.hurt>0?1-.3*xe.hurt:1),ue.lift=ue.hurt>.3?.035:.07+.09*jt()+.05*Math.min(1,Zt*2),ue.tidy=rn,_.lastFoot=Y}}for(let ot of bt){if(X(ot.shin,M),At){let rn=.36+.42*(yn(_.kneelT/_.kneelMax,0,1)*(1-.6*Qt))+.08*Math.sin(B.clock*.9+_.phase[ot.side===1?0:1])*(1-Qt);Mt(ot,-Math.sin(rn),-Math.cos(rn),ot.side*.1),I[ot.shin].SetTargetAngle(rn+Math.PI/2);continue}if(ot.swing){let Be=yn(ot.t,0,1),rn=Be*Be*(3-2*Be);ot.ik[0]=ot.from[0]+(ot.to[0]-ot.from[0])*rn,ot.ik[2]=ot.from[2]+(ot.to[1]-ot.from[2])*rn,ot.ik[1]=W+ot.lift*Math.sin(Math.PI*Be)-(Be>.5?.09*(Be-.5):0);let Y=1900,he=170,ue=[Y*(ot.ik[0]-ot.p[0])-he*M[0],Y*(ot.ik[1]-ot.p[1])-he*M[1],Y*(ot.ik[2]-ot.p[2])-he*M[2]],xe=Math.hypot(ue[0],ue[1],ue[2]),tn=xe>650?650/xe:1;st(ot.shin,ue[0]*tn*_.support,(ue[1]*tn-(ot.t>1?160:0))*_.support,ue[2]*tn*_.support,ot.p)}else{ot.ik[0]=ot.planted[0],ot.ik[1]=W,ot.ik[2]=ot.planted[1];let Be=to(1800*(ot.planted[0]-ot.p[0])-130*M[0],1800*(ot.planted[1]-ot.p[2])-130*M[2],480),rn=yn(40+7e3*ot.gap,40,280)*_.support;st(ot.shin,Be[0]*_.support,-rn,Be[1]*_.support,ot.p),st(Re.pelvis,0,rn-40*_.support,0)}vt(ot,ot.ik)}Yt(ae,C),It&&(B.onFeet+=C,B.stumbled+=Math.hypot(S-_.lastCom[0],h-_.lastCom[1])),_.lastCom[0]=S,_.lastCom[1]=h;let Xs=ot=>ot.swing?Math.hypot(S-ot.p[0],h-ot.p[2]):Math.hypot(S-ot.planted[0],h-ot.planted[1]),qs=Math.min(Xs(k),Xs(V));O(Re.chest,Qe);let Ys=1-2*(Qe[0]*Qe[0]+Qe[2]*Qe[2]);if(!B.alive||B.ko)return Lt(null,"out");if(lt){if(_.riseT>_.riseFail||Qt<.3)return Ee.push({type:"gaveout",pos:[$t[0],$t[1],$t[2]]}),Lt(null,"gave out");if(_.riseT>2.7&&$t[1]-W>mu-.16){B.mode="balance",B.getups++,_.offT=0,_.stepCool=.2;for(let ot of bt)ot.swing=!1,ot.planted=[ot.p[0],ot.p[2]];Ee.push({type:"up",pos:[$t[0],$t[1],$t[2]]})}else if(_.riseT>5)return Lt(null,"gave out");return}_.offT=!se&&(qs>.46||Ys<.8)?_.offT+C:Math.max(0,_.offT-2*C);let Zs=qs>(se?.5:.7)?"reach":_.offT>.3?"lean":Zt>2.4?"capture":Ys<.45?"tilt":$t[1]-W<(se?.3:.52)?"height":"",$s=()=>{B.mode="kneel",B.kneels++,_.kneelT=0,_.kneelMax=1.6+3.2*jt();for(let ot of bt)ot.swing=!1,ot.kneeDown=!1,ot.planted=[ot.p[0],ot.p[2]];Ee.push({type:"kneel",pos:[$t[0],$t[1],$t[2]]})};if(Zs==="height"&&!se&&It&&qs<.45&&Math.hypot(P,U)<1.4&&Ys>.75)return $s();if(Zs)return Lt(null,Zs);if(_.airT>.3)return Lt(null,"air");if(B.paralysed)return Lt(null,"spine");if(_.legT=!se&&(k.broken>=3||V.broken>=3)?_.legT+C:0,_.legT>.35)return Lt(null,"leg");let ws=Math.hypot(P,U);if(At&&ws>2)return Lt(null,"thrown");if(se){if(_.kneelT+=C,At&&_.kneelT>Math.min(_.kneelMax,1.4)&&Qt>.52&&B.bleed<.5&&_.grip>.9&&En()){B.mode="rise",_.riseT=1.9,_.riseFail=9,_.support=1,_.hT=$t[1],_.offT=0,_.buckle=-1.5;for(let ot of bt)ot.swing=!1,ot.planted=[ot.p[0],ot.p[2]];Ee.push({type:"rise",pos:[$t[0],$t[1],$t[2]],fromKnees:!0})}else if(Qt<.2||_.kneelT>_.kneelMax){let ot=jt()<.5?1:-1,Be=jt()<.45;Lt(Be?[dt*ot*28,yt*ot*28]:[_.hx*30,_.hz*30],"slump")}}else It&&ws<1.5&&(Qt<.5||_.buckle>0&&Qt<.72&&_.buckleDip>.24)&&$s()}function me(C,_){let B=_t,lt=Rt;xt(bt[0]),xt(bt[1]);let At=Math.min(bt[0].gap,bt[0].kgap,bt[1].gap,bt[1].kgap);B.grip+=yn((At<.03?1:0)-B.grip,-_/.09,_/.05);let se=C*yn(1-B.fallT/(.45+.6*C),0,1);if(se>0)for(let V of bt){let dt=V.kgap<.03,yt=V.gap<.03;if(!dt&&!yt)continue;z(V);let gt=dt?V.k:V.p,qt=dt?bs+.1:pu+.08;gi(He,[0,Ja,V.side*xc],Et);let zt=$t[0]+Et[0]-gt[0],It=$t[1]+Et[1]-gt[1],ut=$t[2]+Et[2]-gt[2],pt=Math.hypot(zt,It,ut)||1;if(pt>qt||It/pt<.25)continue;let ce=(j[0]*zt+j[1]*It+j[2]*ut)/pt,v=yn(w*Ss*.3-240*ce,0,w*Ss*.45)*se*(1-.7*V.hurt);st(Re.pelvis,v*zt/pt,v*It/pt,v*ut/pt)}gi(Qa(He),[B.fallDir[0],0,B.fallDir[1]],at);let Qt=at[0],ie=at[2],S=Math.max(0,Qt),h=yn((.42-($t[1]-Jn($t[0],$t[2])))/.2,0,1);bt.forEach((V,dt)=>{let yt,gt,qt;dt===B.lead?(yt=Qt*.95,gt=ie*.95+V.side*.08,qt=.95-.65*S):(yt=Qt*.15-.3*(1-S),gt=V.side*.1,qt=1.65),yt*=1-h,qt*=1-.75*h;let zt=Math.hypot(yt,1,gt);Mt(V,yt/zt,-1/zt,gt/zt),I[V.shin].SetTargetAngle(qt)}),O(Re.chest,Qe),gi(Qa(Qe),[B.fallDir[0],0,B.fallDir[1]],at);let P=at[0],U=at[2],k=B.grip<.3&&B.fallT>.35?1:0;if(oe(Re.chest,os(0,1,0,.12+.4*Math.max(0,P))),oe(Re.head,os(0,1,0,.5*P)),!(B.flinch>0))for(let V of[1,-1]){let dt=yn(U*V,-1,1),yt=k*.55*Math.sin(lt.clock*11+V*1.7),gt=yn(-P*1.25,-.8,1.3)+.15+yt,qt=-.25-.9*Math.max(0,dt)+.3*Math.max(0,-dt);oe(V===1?Re.uarm_l:Re.uarm_r,Tt(gt,qt,V)),I[V===1?Re.larm_l:Re.larm_r].SetTargetAngle(-.35-.3*k)}}function Le(C){let _=_t,B=Rt,lt=B.clock;_.support=Math.max(0,_.support-C/.14);let At=B.alive&&!B.ko;At||(_.fight=0);let se=B.mode==="fall"?_.fight*yn(1-(_.fallT-1.3)/1.2,0,1)*(_.settle>.1?.5:1):0,Qt=At?.1+.32*B.strength:0;for(let ie=1;ie<y;ie++){let S=Rn[ie].zone,h=Math.max(Qt,se*(S==="arm"?.85:S==="thigh"||S==="shin"?.75:.7));et[ie]+=yn(h-et[ie],-(B.alive?3:1.1)*C,2*C)}if(se>.12)me(se,C);else if(At){for(let ie of bt){let S=lt*(1.1+.5*B.strength)+_.phase[ie.side===1?0:1];oe(ie.thigh,os(0,1,0,.35+.4*Math.sin(S))),I[ie.shin].SetTargetAngle(.7+.6*Math.sin(S+1.3))}Yt(0,C)}if(B.mode==="fall"){_.fallT=(_.fallT||0)+C;let ie=$t[1]-Jn($t[0],$t[2])<.45||Rt.restTimer>.7||_.fallT>4;if(_.settle=ie&&Math.hypot(j[0],j[1],j[2])<(_.fallT>4?1.2:.6)?_.settle+C:0,_.settle>.35){B.mode="down",B.downAt=B.time,_.settle=0,_.fallT=0,Ee.push({type:"down",pos:[kt[0],kt[1],kt[2]],onFeet:B.onFeet});let S=Jn($t[0],$t[2]),h=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([U,k])=>Math.abs(Jn($t[0]+U,$t[2]+k)-S)<.05)&&$t[1]-S<.5,P=yn((B.blood-10)/70,0,1)*(1-.3*Math.min(1,B.stun));At&&P>.42&&_.riseTries<2&&h&&En()?_.riseAt=B.time+.9+1.6*jt()+2.5*Math.max(0,B.stun-.25):(_.riseAt=0,B.spent=!0)}}else if(B.mode==="down"&&_.riseAt>0&&B.time>_.riseAt){if(_.riseAt=0,!At||B.strength<.36||!En()){B.spent=!0;return}O(Re.chest,Qe);let ie=gi(Qe,[-1,0,0],nt)[1]>0,S=A(Re.head,Fe),h=S[0]-$t[0],P=S[2]-$t[2],U=Math.hypot(h,P)||1,k=ie?-1:1;_.hx=k*h/U,_.hz=k*P/U,B.mode="rise",_.riseT=0,_.riseTries++,_.support=0,_.offT=0,_.buckle=0,_.kneelT=0,_.riseFrom=Math.max(.12,$t[1]-Jn($t[0],$t[2])),_.hT=$t[1],_.riseFail=jt()<yn((.75-B.strength)*1.6+.35*_.legWound,0,.9)?.9+jt()*1.2:9;for(let V of bt)z(V),V.swing=!1,V.planted=[V.p[0],V.p[2]];_.lastCom[0]=$t[0],_.lastCom[1]=$t[2],Ee.push({type:"rise",pos:[$t[0],$t[1],$t[2]]})}}function Ut(C){for(Ee.length=0;Ge.length;)Ee.push(Ge.shift());let _=Rt,B=_t;_.clock+=C,_.hits>0&&(_.time+=C);let lt=0;if(_.alive){for(let k of Ct){let V=Math.min(k.rate*C,k.left);k.left-=V,_.blood-=V,k.left>0&&(lt+=k.rate)}_.blood=Math.max(0,_.blood),_.blood<=0&&Ke("Bled out")}if(_.bleed=lt,_.stun=Math.max(0,_.stun-.2*C),(!_.alive||_.ko)&&(_.spent=!0),_.strength=_.alive&&!_.ko?yn((_.blood-10)/70,0,1)*(1-.75*Math.min(1,_.stun)):0,B.flinch-=C,B.lookDown-=C,B.clutch&&_.clock>B.clutchEnd&&(B.clutch=null),A(Re.pelvis,$t),X(Re.pelvis,j),O(Re.pelvis,He),A(Re.chest,kt),X(Re.chest,de),_.mode==="balance"||_.mode==="kneel"||_.mode==="rise"){for(let k=1;k<y;k++){let dt=Rn[k].zone==="thigh"||Rn[k].zone==="shin"?.95:.35+.65*_.strength;et[k]+=yn(dt-et[k],-3*C,3*C)}Ht(C)}else Le(C);Jt(),s.Step(C,1);let At=0;for(let k=0;k<y;k++){X(k,M);let V=M[0]-ht[k*3],dt=M[1]-ht[k*3+1]+Ss*C,yt=M[2]-ht[k*3+2];ht[k*3]=M[0],ht[k*3+1]=M[1],ht[k*3+2]=M[2];let gt=Math.hypot(V,dt,yt);At=Math.max(At,Math.hypot(M[0],M[1],M[2])),Nt[k]-=C;let qt=_.mode==="fall"||_.mode==="down";if(_.hits>0&&qt&&gt>2.2&&Nt[k]<=0){Nt[k]=.18;let zt=Rn[k],It=gt*(zt.zone==="head"?5:zt.zone==="chest"||zt.zone==="gut"?1.6:.8);_.damage+=It,_.impacts++;let ut=tt(k);Ee.push({type:"impact",part:k,zone:zt.zone,pos:ut,dv:gt,dmg:It}),O(k,Qe),gi(Qa(Qe),[-V/gt,-dt/gt,-yt/gt],nt);for(let[pt,ce]of Dn(k,nt))Cn(pt,gt*ce,ut,"fall");zt.zone==="head"&&Cn("neck",gt*.9,ut,"fall"),zt.zone==="head"&&(_.stun=Math.min(1.6,_.stun+gt*.09),_.stun>1.15&&sn())}}if(Oe==="window")for(let k=0;k<y;k++){if(A(k,Fe),Fe[1]>Te.glassY+.6||Fe[1]<Te.glassY-.3)continue;let V=Math.hypot(ht[k*3],ht[k*3+1],ht[k*3+2]);if(V<1.6)continue;let dt=Rn[k].r+Rn[k].hh+.06+V*C*2;if(!(Math.abs(Fe[1]-Te.glassY)>dt))for(let yt of f.panes)yt.broken||Fe[0]<yt.min[0]-.1||Fe[0]>yt.max[0]+.1||Fe[2]<yt.min[1]-.1||Fe[2]>yt.max[1]+.1||x(yt,[ht[k*3],ht[k*3+1],ht[k*3+2]])}if(_.hits===0)return Ee;_.lowest=Math.min(_.lowest,$t[1]),_.drop=Math.max(0,Ne.start[1]+.93-_.lowest-.85);let se=Math.max(Math.hypot(ht[0],ht[1],ht[2]),Math.hypot(ht[3],ht[4],ht[5])),Qt=bt.some(k=>k.swing&&!k.tidy),ie=bt.some(k=>k.swing&&k.tidy),S=_.mode==="balance"?!Qt&&se<(ie?.35:.2):At<.15;_.restTimer=S?_.restTimer+C:0;let h=_.restTimer>1.1,P=_.stun>.05?2.6:1.5,U=0;if(_.alive?_.bleed>.01?U=0:_.mode==="balance"?U=_.restTimer/P:_.mode==="rise"||_.mode==="down"&&!_.spent?U=0:U=Math.max(_.restTimer/1.1,_.mode==="down"?(_.time-_.downAt)/3.5:0):U=Math.min(_.restTimer/1.1,(_.time-_.diedAt)/1.6),_.wrap=yn(U,0,1),!_.done){let k="";!_.alive&&h&&_.time-_.diedAt>1.6?k=_.outcome:_.alive&&_.bleed<=.01&&(_.mode==="fall"&&h||_.mode==="down"&&_.spent&&(h||_.time-_.downAt>3.5)||_.mode==="balance"&&_.restTimer>P||_.ko&&h)?k=_.ko?"Out cold":_.mode==="balance"?"Still standing":"Down, alive":_.time>80&&(k="Time"),k&&(_.done=!0,_.outcome=k,Ee.push({type:"done",outcome:k}))}return Ee}function Se(){let C=Rt,_=!C.alive,B=Object.values(C.bones),lt=[["Stagger steps",String(C.steps),Math.min(C.steps,40)*14],["Stumbled",C.stumbled.toFixed(1)+" m",Math.round(Math.min(C.stumbled,12)*18)],["Knee drops",String(C.kneels),C.kneels*120],["Put down",C.downAt>=0?"yes":"\u2014",C.downAt>=0?90:0],["Got back up",String(C.getups),C.getups*140],["Hard landings",String(C.impacts),Math.round(C.damage*ny)],["Bones",String(B.length),B.reduce((se,Qt)=>se+zf[Qt],0)],["Fell",C.drop.toFixed(1)+" m",Math.round(C.drop*65)],["Glass",C.glass+(C.glass===1?" pane":" panes"),C.glass*130],["Trick shots",String(C.fallHits),C.fallHits*150+C.airHits*250],["Out cold",C.ko?"yes":"\u2014",C.ko?150:0],[_?C.outcome:"Bled out",_?C.diedAt.toFixed(1)+" s":"\u2014",_?C.diedAt>.3?260:60:0]];return{lines:lt.filter((se,Qt)=>se[2]>0||Qt<3),total:lt.reduce((se,Qt)=>se+Qt[2],0)}}function De(C){yc[C]&&(Oe=C,Ne=yc[C],pn())}let Xt=[0,0,0,1];return pn(),{parts:Rn,state:Rt,wounds:Ct,feet:bt,step:Ut,hit:fe,reset:pn,payout:Se,pos:tt,mass:F,totalMass:w,statics:p,setLevel:De,groundY:Jn,get level(){return Ne},get levelKey(){return Oe},glass:{tiles:f.tiles,panes:f.panes,transform(C,_){let B=f.tiles[C];return ct(B.id,_),H(B.id,Xt),_[3]=Xt[0],_[4]=Xt[1],_[5]=Xt[2],_[6]=Xt[3],_}},transform(C,_){A(C,_);let B=a.GetRotation(N[C]);return _[3]=B.GetX(),_[4]=B.GetY(),_[5]=B.GetZ(),_[6]=B.GetW(),_},_debug:{joints:I,tone:et,IDX:Re,ctl:_t,impulse:rt,armQ:Tt,setTarget:oe}}}var ja,Ss,fu,Or,Jx,xn,Te,yc,Rn,Re,bs,kr,Ja,xc,Qx,pu,ty,mu,ey,xu,ny,zf,iy,sy,ry,Qa,yn,Hf=Xf(()=>{ja=Math.PI/180,Ss=9.81,fu=0,Or=1,Jx={half:16},xn={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};xn.height=xn.steps*xn.rise;xn.length=xn.steps*xn.run;Te={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},yc={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,xn.height,xn.z],attacker:[-5.2,xn.height+1.5,xn.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,Te.floor,Te.z],attacker:[-6.2,Te.floor+1.5,Te.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};Rn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],Re=Object.fromEntries(Rn.map((n,t)=>[n.name,t])),bs=.44,kr=.425,Ja=-.08,xc=.1,Qx=.205,pu=.85,ty=.35,mu=.915,ey={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},xu={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},ny=1.2,zf=[0,5,30,80],iy=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),sy={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},ry={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};Qa=n=>[-n[0],-n[1],-n[2],n[3]],yn=(n,t,e)=>Math.max(t,Math.min(e,n))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ad=0,ah=1,od=2;var Ns=1,ld=2,Tr=3,vs=0,si=1,Mi=2,Fs=0,Er=1,oh=2,lh=3,ch=4,cd=5;var Us=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,_d=203,hh=204,uh=205,xd=206,yd=207,vd=208,Md=209,Sd=210,bd=211,wd=212,Td=213,Ed=214,No=0,Fo=1,Uo=2,dr=3,Oo=4,ko=5,Bo=6,zo=7,dh=0,Ad=1,Rd=2,Vi=0,fh=1,ph=2,mh=3,Ia=4,gh=5,_h=6,xh=7;var yh=300,Os=301,Ar=302,yl=303,vl=304,Go=1e3,Oi=1001,Ho=1002,Wn=1003,Cd=1004;var La=1005;var ni=1006,Ml=1007;var es=1008;var ri=1009,vh=1010,Mh=1011,Rr=1012,Sl=1013,Pi=1014,Si=1015,Ii=1016,bl=1017,wl=1018,ks=1020,Sh=35902,bh=35899,wh=1021,Th=1022,Li=1023,Qi=1026,ns=1027,Tl=1028,El=1029,Ms=1030,Al=1031;var Rl=1033,Da=33776,Na=33777,Fa=33778,Ua=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Fl=37496,Ul=37488,Ol=37489,Oa=37490,kl=37491,Bl=37808,zl=37809,Gl=37810,Hl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,$l=37818,Kl=37819,jl=37820,Jl=37821,Ql=36492,tc=36494,ec=36495,nc=36283,ic=36284,ka=36285,sc=36286;var Kr=2300,Vo=2301,Lo=2302,Zc=2303,$c=2400,Kc=2401,jc=2402;var Pd=3200;var rc=0,Id=1,is="",ti="srgb",jr="srgb-linear",Jr="linear",vn="srgb";var Do=7680;var Ld=519,Dd=512,Nd=513,Fd=514,Eh=515,Ud=516,Od=517,Ah=518,Rh=519,kd=35044;var Ch="300 es",yi=2e3,fr=2001;function qf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bd(){let n=Qr("canvas");return n.style.display="block",n}var Su={},pr=null;function Ph(...n){let t="THREE."+n.shift();pr?pr("log",t,...n):console.log(t,...n)}function zd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=zd(n);let t="THREE."+n.shift();if(pr)pr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ze(...n){n=zd(n);let t="THREE."+n.shift();if(pr)pr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Yr(...n){let t=n.join(" ");t in Su||(Su[t]=!0,Ue(...n))}function Gd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Hd={[No]:No,[Uo]:Bo,[Oo]:Oo,[dr]:ko,[Fo]:Fo,[Bo]:Uo,[zo]:zo,[ko]:dr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sc=Math.PI/180,Wo=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[e&63|128]+Zn[e>>8&255]+"-"+Zn[e>>16&255]+Zn[e>>24&255]+Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]).toLowerCase()}function on(n,t,e){return Math.max(t,Math.min(e,n))}function Zf(n,t){return(n%t+t)%t}function bc(n,t,e){return(1-e)*n+e*t}function Vd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ih(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $f(n,t){if(t.constructor===Float32Array)return n;let e=Ih(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Kf(n,t){if(t.constructor===Float32Array)return n;let e=Ih(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Oh=class Oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(on(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oh.prototype.isVector2=!0;var ve=Oh,ui=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],d=r[a+0],f=r[a+1],x=r[a+2],T=r[a+3];if(p!==T||l!==d||c!==f||u!==x){let g=l*d+c*f+u*x+p*T;g<0&&(d=-d,f=-f,x=-x,T=-T,g=-g);let m=1-o;if(g<.9995){let w=Math.acos(g),F=Math.sin(w);m=Math.sin(m*w)/F,o=Math.sin(o*w)/F,l=l*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+T*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+T*o;let w=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=w,c*=w,u*=w,p*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+u*p+l*f-c*d,t[e+1]=l*x+u*d+c*p-o*f,t[e+2]=c*x+u*f+o*d-l*p,t[e+3]=u*x-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),p=o(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"YXZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"ZXY":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"ZYX":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"YZX":this._x=d*u*p+c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p-d*f*x;break;case"XZY":this._x=d*u*p-c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p+d*f*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=i+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kh=class kh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*u,this.y=i+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(on(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kh.prototype.isVector3=!0;var $=kh,wc=new $,bu=new ui,Bh=class Bh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],f=i[5],x=i[8],T=s[0],g=s[3],m=s[6],w=s[1],F=s[4],E=s[7],N=s[2],I=s[5],y=s[8];return r[0]=a*T+o*w+l*N,r[3]=a*g+o*F+l*I,r[6]=a*m+o*E+l*y,r[1]=c*T+u*w+p*N,r[4]=c*g+u*F+p*I,r[7]=c*m+u*E+p*y,r[2]=d*T+f*w+x*N,r[5]=d*g+f*F+x*I,r[8]=d*m+f*E+x*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,x=e*p+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/x;return t[0]=p*T,t[1]=(s*c-u*i)*T,t[2]=(o*i-s*a)*T,t[3]=d*T,t[4]=(u*e-s*l)*T,t[5]=(s*r-o*e)*T,t[6]=f*T,t[7]=(i*l-c*e)*T,t[8]=(a*e-i*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bh.prototype.isMatrix3=!0;var Xe=Bh,Tc=new Xe,wu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){let n={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vn&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vn&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jr]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:i,transfer:vn,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}var cn=jf();function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ks===void 0&&(Ks=Qr("canvas")),Ks.width=t.width,Ks.height=t.height;let s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ks}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Qf=0,Ac=new $,ii=class n extends ki{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Oi,s=Oi,r=ni,a=es,o=Li,l=ri,c=n.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Cr(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ue(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=yh;ii.DEFAULT_ANISOTROPY=1;var zh=class zh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],x=l[9],T=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-T)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+T)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,E=(f+1)/2,N=(m+1)/2,I=(u+d)/4,y=(p+T)/4,A=(x+g)/4;return F>E&&F>N?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=I/i,r=y/i):E>N?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=I/s,r=A/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=y/r,s=A/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-x)*(g-x)+(p-T)*(p-T)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(p-T)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this.w=on(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this.w=on(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(on(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zh.prototype.isVector4=!0;var Pn=zh,qo=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pn(0,0,t,e),this.scissorTest=!1,this.viewport=new Pn(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ii({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends qo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ta=class extends ii{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends ii{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xl=class xl{constructor(t,e,i,s,r,a,o,l,c,u,p,d,f,x,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,p,d,f,x,T,g)}set(t,e,i,s,r,a,o,l,c,u,p,d,f,x,T,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=f,m[7]=x,m[11]=T,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),a=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,x=o*u,T=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+x*c,e[5]=d-T*c,e[9]=-o*l,e[2]=T-d*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,x=c*u,T=c*p;e[0]=d+T*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-x,e[6]=T+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,x=c*u,T=c*p;e[0]=d-T*o,e[4]=-a*p,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*u,e[9]=T-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,x=o*u,T=o*p;e[0]=l*u,e[4]=x*c-f,e[8]=d*c+T,e[1]=l*p,e[5]=T*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,x=o*l,T=o*c;e[0]=l*u,e[4]=T-d*p,e[8]=x*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+x,e[10]=d-T*p}else if(t.order==="XZY"){let d=a*l,f=a*c,x=o*l,T=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+T,e[5]=a*u,e[9]=f*p-x,e[2]=x*p-f,e[6]=o*u,e[10]=T*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,i){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ls.crossVectors(i,li),ls.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ls.crossVectors(i,li)),ls.normalize(),so.crossVectors(li,ls),s[0]=ls.x,s[4]=so.x,s[8]=li.x,s[1]=ls.y,s[5]=so.y,s[9]=li.y,s[2]=ls.z,s[6]=so.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],f=i[13],x=i[2],T=i[6],g=i[10],m=i[14],w=i[3],F=i[7],E=i[11],N=i[15],I=s[0],y=s[4],A=s[8],X=s[12],O=s[1],K=s[5],tt=s[9],ct=s[13],H=s[2],st=s[6],rt=s[10],et=s[14],mt=s[3],ft=s[7],ht=s[11],Nt=s[15];return r[0]=a*I+o*O+l*H+c*mt,r[4]=a*y+o*K+l*st+c*ft,r[8]=a*A+o*tt+l*rt+c*ht,r[12]=a*X+o*ct+l*et+c*Nt,r[1]=u*I+p*O+d*H+f*mt,r[5]=u*y+p*K+d*st+f*ft,r[9]=u*A+p*tt+d*rt+f*ht,r[13]=u*X+p*ct+d*et+f*Nt,r[2]=x*I+T*O+g*H+m*mt,r[6]=x*y+T*K+g*st+m*ft,r[10]=x*A+T*tt+g*rt+m*ht,r[14]=x*X+T*ct+g*et+m*Nt,r[3]=w*I+F*O+E*H+N*mt,r[7]=w*y+F*K+E*st+N*ft,r[11]=w*A+F*tt+E*rt+N*ht,r[15]=w*X+F*ct+E*et+N*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],x=t[3],T=t[7],g=t[11],m=t[15],w=l*f-c*d,F=o*f-c*p,E=o*d-l*p,N=a*f-c*u,I=a*d-l*u,y=a*p-o*u;return e*(T*w-g*F+m*E)-i*(x*w-g*N+m*I)+s*(x*F-T*N+m*y)-r*(x*E-T*I+g*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],x=t[12],T=t[13],g=t[14],m=t[15],w=e*o-i*a,F=e*l-s*a,E=e*c-r*a,N=i*l-s*o,I=i*c-r*o,y=s*c-r*l,A=u*T-p*x,X=u*g-d*x,O=u*m-f*x,K=p*g-d*T,tt=p*m-f*T,ct=d*m-f*g,H=w*ct-F*tt+E*K+N*O-I*X+y*A;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let st=1/H;return t[0]=(o*ct-l*tt+c*K)*st,t[1]=(s*tt-i*ct-r*K)*st,t[2]=(T*y-g*I+m*N)*st,t[3]=(d*I-p*y-f*N)*st,t[4]=(l*O-a*ct-c*X)*st,t[5]=(e*ct-s*O+r*X)*st,t[6]=(g*E-x*y-m*F)*st,t[7]=(u*y-d*E+f*F)*st,t[8]=(a*tt-o*O+c*A)*st,t[9]=(i*O-e*tt-r*A)*st,t[10]=(x*I-T*E+m*w)*st,t[11]=(p*E-u*I-f*w)*st,t[12]=(o*X-a*K-l*A)*st,t[13]=(e*K-i*X+s*A)*st,t[14]=(T*F-x*N-g*w)*st,t[15]=(u*N-p*F+d*w)*st,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,x=r*p,T=a*u,g=a*p,m=o*p,w=l*c,F=l*u,E=l*p,N=i.x,I=i.y,y=i.z;return s[0]=(1-(T+m))*N,s[1]=(f+E)*N,s[2]=(x-F)*N,s[3]=0,s[4]=(f-E)*I,s[5]=(1-(d+m))*I,s[6]=(g+w)*I,s[7]=0,s[8]=(x+F)*y,s[9]=(g-w)*y,s[10]=(1-(d+T))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ti.copy(this);let c=1/a,u=1/o,p=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=p,Ti.elements[9]*=p,Ti.elements[10]*=p,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=yi,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),x,T;if(l)x=r/(a-r),T=a*r/(a-r);else if(o===yi)x=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===fr)x=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=yi,l=!1){let c=this.elements,u=2/(e-t),p=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),x,T;if(l)x=1/(a-r),T=a/(a-r);else if(o===yi)x=-2/(a-r),T=-(a+r)/(a-r);else if(o===fr)x=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};xl.prototype.isMatrix4=!0;var fn=xl,js=new $,Ti=new fn,tp=new $(0,0,0),ep=new $(1,1,1),ls=new $,so=new $,li=new $,Eu=new fn,Au=new ui,Ci=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,Ru=new $,Js=new ui,Yi=new fn,ro=new $,Br=new $,ip=new $,sp=new ui,Cu=new $(1,0,0),Pu=new $(0,1,0),Iu=new $(0,0,1),Lu={type:"added"},rp={type:"removed"},Qs={type:"childadded",child:null},Rc={type:"childremoved",child:null},Xn=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new Ci,i=new ui,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new Xe}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Br,ro,this.up):Yi.lookAt(ro,Br,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Yi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xn.DEFAULT_UP=new $(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cs=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ap={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let T of t.hand.values()){let g=e.getJointPose(T,i),m=this._getHandJoint(c,T);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Cc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=cn.workingColorSpace){return this.r=t,this.g=e,this.b=i,cn.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=cn.workingColorSpace){if(t=Zf(t,1),e=on(e,0,1),i=on(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Cc(a,r,t+1/3),this.g=Cc(a,r,t),this.b=Cc(a,r,t-1/3)}return cn.colorSpaceToWorking(this,s),this}setStyle(t,e=ti){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){let i=Wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return cn.workingToColorSpace($n.copy(this),t),Math.round(on($n.r*255,0,255))*65536+Math.round(on($n.g*255,0,255))*256+Math.round(on($n.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=cn.workingColorSpace){cn.workingToColorSpace($n.copy(this),e);let i=$n.r,s=$n.g,r=$n.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=cn.workingColorSpace){return cn.workingToColorSpace($n.copy(this),e),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=ti){cn.workingToColorSpace($n.copy(this),t);let e=$n.r,i=$n.g,s=$n.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(ao);let i=bc(cs.h,ao.h,e),s=bc(cs.s,ao.s,e),r=bc(cs.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new qe;qe.NAMES=Wd;var ea=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new $,Zi=new $,Pc=new $,$i=new $,tr=new $,er=new $,Du=new $,Ic=new $,Lc=new $,Dc=new $,Nc=new Pn,Fc=new Pn,Uc=new Pn,fs=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ei.subVectors(s,e),Zi.subVectors(i,e),Pc.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(Zi),l=Ei.dot(Pc),c=Zi.dot(Zi),u=Zi.dot(Pc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,x=(a*u-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Nc.setScalar(0),Fc.setScalar(0),Uc.setScalar(0),Nc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,i),Uc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(Fc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(t,e,i,s){return Ei.subVectors(i,e),Zi.subVectors(t,e),Ei.cross(Zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;tr.subVectors(s,i),er.subVectors(r,i),Ic.subVectors(t,i);let l=tr.dot(Ic),c=er.dot(Ic);if(l<=0&&c<=0)return e.copy(i);Lc.subVectors(t,s);let u=tr.dot(Lc),p=er.dot(Lc);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(tr,a);Dc.subVectors(t,r);let f=tr.dot(Dc),x=er.dot(Dc);if(x>=0&&f<=x)return e.copy(r);let T=f*c-l*x;if(T<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(er,o);let g=u*x-f*p;if(g<=0&&p-u>=0&&f-x>=0)return Du.subVectors(r,s),o=(p-u)/(p-u+(f-x)),e.copy(s).addScaledVector(Du,o);let m=1/(g+T+d);return a=T*m,o=d*m,e.copy(i).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),lo.subVectors(this.max,zr),nr.subVectors(t.a,zr),ir.subVectors(t.b,zr),sr.subVectors(t.c,zr),hs.subVectors(ir,nr),us.subVectors(sr,ir),Ts.subVectors(nr,sr);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ts.z,Ts.y,hs.z,0,-hs.x,us.z,0,-us.x,Ts.z,0,-Ts.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ts.y,Ts.x,0];return!Oc(e,nr,ir,sr,lo)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,nr,ir,sr,lo))?!1:(co.crossVectors(hs,us),e=[co.x,co.y,co.z],Oc(e,nr,ir,sr,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new $,new $,new $,new $,new $,new $,new $,new $],Ai=new $,oo=new Bi,nr=new $,ir=new $,sr=new $,hs=new $,us=new $,Ts=new $,zr=new $,lo=new $,co=new $,Es=new $;function Oc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Es.fromArray(n,r);let o=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),u=i.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kn=new $,ho=new ve,op=0,hi=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kd,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=t!==void 0?Ih(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix3(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):$f(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Kf(t,this.array)}};var ia=class extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var sa=class extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var wn=class extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}},lp=new Bi,Gr=new $,kc=new $,zi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):lp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(kc)),this.expandByPoint(Gr.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cp=0,xi=new fn,Bc=new Xn,rr=new $,ci=new Bi,Hr=new Bi,Vn=new $,qn=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?sa:ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vn.addVectors(ci.min,Hr.min),ci.expandByPoint(Vn),Vn.addVectors(ci.max,Hr.max),ci.expandByPoint(Vn)):(ci.expandByPoint(Hr.min),ci.expandByPoint(Hr.max))}ci.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Vn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Vn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),Vn.add(rr)),s=Math.max(s,i.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let X=0;X<i.count;X++)o[X]=new $,l[X]=new $;let u=new $,p=new $,d=new $,f=new ve,x=new ve,T=new ve,g=new $,m=new $;function w(X,O,K){c[X]=c[O]=c[K]=1,u.fromBufferAttribute(i,X),p.fromBufferAttribute(i,O),d.fromBufferAttribute(i,K),f.fromBufferAttribute(r,X),x.fromBufferAttribute(r,O),T.fromBufferAttribute(r,K),p.sub(u),d.sub(u),x.sub(f),T.sub(f);let tt=1/(x.x*T.y-T.x*x.y);isFinite(tt)&&(g.copy(p).multiplyScalar(T.y).addScaledVector(d,-x.y).multiplyScalar(tt),m.copy(d).multiplyScalar(x.x).addScaledVector(p,-T.x).multiplyScalar(tt),o[X].add(g),o[O].add(g),o[K].add(g),l[X].add(m),l[O].add(m),l[K].add(m))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let X=0,O=F.length;X<O;++X){let K=F[X],tt=K.start,ct=K.count;for(let H=tt,st=tt+ct;H<st;H+=3)w(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new $,N=new $,I=new $,y=new $;function A(X){I.fromBufferAttribute(s,X),y.copy(I);let O=o[X];E.copy(O),E.sub(I.multiplyScalar(I.dot(O))).normalize(),N.crossVectors(y,O);let tt=N.dot(l[X])<0?-1:1;a.setXYZW(X,E.x,E.y,E.z,tt)}for(let X=0,O=i.count;X<O;++X)c[X]&&A(X);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new $,r=new $,a=new $,o=new $,l=new $,c=new $,u=new $,p=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),T=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Vn.fromBufferAttribute(t,e),Vn.normalize(),t.setXYZ(e,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,x=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?f=l[T]*o.data.stride+o.offset:f=l[T]*u;for(let m=0;m<u;m++)d[x++]=c[f++]}return new hi(d,u,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zc=new $,hp=new $,up=new Xe,Ri=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zc.subVectors(i,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||up.getNormalMatrix(t),s=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dp=0,Gi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Er,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ue(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new $,Gc=new $,uo=new $,fo=new $,Ps=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Gc.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(Gc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),u=Math.abs(1-a*a),p,d,f,x;if(u>0)if(p=a*l-o,d=a*o-l,x=r*u,p>=0)if(d>=-x)if(d<=x){let T=1/u;p*=T,d*=T,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Gc).addScaledVector(uo,d),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,x=e.x-a.x,T=e.y-a.y,g=e.z-a.z,m=i.x-a.x,w=i.y-a.y,F=i.z-a.z,E=Math.abs(l),N=Math.abs(c),I=Math.abs(u),y,A,X,O,K,tt,ct,H,st,rt,et,mt;if(E>=N&&E>=I?(X=l,tt=p,st=x,mt=m,l>=0?(y=c,A=u,O=d,K=f,ct=T,H=g,rt=w,et=F):(y=u,A=c,O=f,K=d,ct=g,H=T,rt=F,et=w)):N>=I?(X=c,tt=d,st=T,mt=w,c>=0?(y=u,A=l,O=f,K=p,ct=g,H=x,rt=F,et=m):(y=l,A=u,O=p,K=f,ct=x,H=g,rt=m,et=F)):(X=u,tt=f,st=g,mt=F,u>=0?(y=l,A=c,O=p,K=d,ct=x,H=T,rt=m,et=w):(y=c,A=l,O=d,K=p,ct=T,H=x,rt=w,et=m)),X===0)return null;let ft=y/X,ht=A/X,Nt=1/X,oe=O-ft*tt,ye=K-ht*tt,Tt=ct-ft*st,Jt=H-ht*st,Rt=rt-ft*mt,Ct=et-ht*mt,bt=Rt*Jt-Ct*Tt,_t=oe*Ct-ye*Rt,jt=Tt*ye-Jt*oe;if(s){if(bt<0||_t<0||jt<0)return null}else if((bt<0||_t<0||jt<0)&&(bt>0||_t>0||jt>0))return null;let ne=bt+_t+jt;if(ne===0)return null;let Ne=Nt*(bt*tt+_t*st+jt*mt);return(ne>0?Ne<0:Ne>0)?null:this.at(Ne/ne,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ps=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nu=new fn,As=new Ps,po=new zi,Fu=new $,mo=new $,go=new $,_o=new $,Hc=new $,xo=new $,Uu=new $,yo=new $,Un=class extends Xn{constructor(t=new qn,e=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Hc.fromBufferAttribute(p,t),a?xo.addScaledVector(Hc,u):xo.addScaledVector(Hc.sub(e),u))}e.add(xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(po.containsPoint(As.origin)===!1&&(As.intersectSphere(po,Fu)===null||As.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Nu.copy(r).invert(),As.copy(t.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let g=d[x],m=a[g.materialIndex],w=Math.max(g.start,f.start),F=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=w,N=F;E<N;E+=3){let I=o.getX(E),y=o.getX(E+1),A=o.getX(E+2);s=vo(this,m,t,i,c,u,p,I,y,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),T=Math.min(o.count,f.start+f.count);for(let g=x,m=T;g<m;g+=3){let w=o.getX(g),F=o.getX(g+1),E=o.getX(g+2);s=vo(this,a,t,i,c,u,p,w,F,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let g=d[x],m=a[g.materialIndex],w=Math.max(g.start,f.start),F=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=w,N=F;E<N;E+=3){let I=E,y=E+1,A=E+2;s=vo(this,m,t,i,c,u,p,I,y,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),T=Math.min(l.count,f.start+f.count);for(let g=x,m=T;g<m;g+=3){let w=g,F=g+1,E=g+2;s=vo(this,a,t,i,c,u,p,w,F,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function fp(n,t,e,i,s,r,a,o){let l;if(t.side===si?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===vs,o),l===null)return null;yo.copy(o),yo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:n}}function vo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,_o);let u=fp(n,t,e,i,mo,go,_o,Uu);if(u){let p=new $;fs.getBarycoord(Uu,mo,go,_o,p),s&&(u.uv=fs.getInterpolatedAttribute(s,o,l,c,p,new ve)),r&&(u.uv1=fs.getInterpolatedAttribute(r,o,l,c,p,new ve)),a&&(u.normal=fs.getInterpolatedAttribute(a,o,l,c,p,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new $,materialIndex:0};fs.getNormal(mo,go,_o,d.normal),u.face=d,u.barycoord=p}return u}var ra=class extends ii{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Wn,u=Wn,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var aa=class extends hi{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new fn,Ou=new fn,Mo=[],ku=new Bi,pp=new fn,Vr=new Un,Wr=new zi,xr=class extends Un{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),ku.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),Wr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Ou.multiplyMatrices(i,ar),Vr.matrixWorld=Ou,Vr.raycast(t,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(s*this.count),s,this.count,Tl,Si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new zi,mp=new ve(.5,.5),So=new $,ms=class{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],x=r[8],T=r[9],g=r[10],m=r[11],w=r[12],F=r[13],E=r[14],N=r[15];if(s[0].setComponents(c-a,f-u,m-x,N-w).normalize(),s[1].setComponents(c+a,f+u,m+x,N+w).normalize(),s[2].setComponents(c+o,f+p,m+T,N+F).normalize(),s[3].setComponents(c-o,f-p,m-T,N-F).normalize(),i)s[4].setComponents(l,d,g,E).normalize(),s[5].setComponents(c-l,f-d,m-g,N-E).normalize();else if(s[4].setComponents(c-l,f-d,m-g,N-E).normalize(),e===yi)s[5].setComponents(c+l,f+d,m+g,N+E).normalize();else if(e===fr)s[5].setComponents(l,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=mp.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bu=new fn,Zo=class n{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ms),i[s].setFromProjectionMatrix(Bu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ms),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var yr=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$o=new $,Ko=new $,zu=new fn,Xr=new Ps,bo=new zi,Vc=new $,Gu=new $,oa=class extends Xn{constructor(t=new qn,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)$o.fromBufferAttribute(e,s-1),Ko.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=$o.distanceTo(Ko);t.setAttribute("lineDistance",new wn(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;zu.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let T=f,g=x-1;T<g;T+=c){let m=u.getX(T),w=u.getX(T+1),F=wo(this,t,Xr,l,m,w,T);F&&e.push(F)}if(this.isLineLoop){let T=u.getX(x-1),g=u.getX(f),m=wo(this,t,Xr,l,T,g,x-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let T=f,g=x-1;T<g;T+=c){let m=wo(this,t,Xr,l,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){let T=wo(this,t,Xr,l,x-1,f,x-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Ko.fromBufferAttribute(o,r),e.distanceSqToSegment($o,Ko,Vc,Gu)>i)return;Vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vc);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var vr=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hu=new fn,Jc=new Ps,To=new zi,Eo=new $,la=class extends Xn{constructor(t=new qn,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Hu.copy(s).invert(),Jc.copy(t.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,T=f;x<T;x++){let g=c.getX(x);Eo.fromBufferAttribute(p,g),Vu(Eo,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=d,T=f;x<T;x++)Eo.fromBufferAttribute(p,x),Vu(Eo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(n,t,e,i,s,r,a){let o=Jc.distanceSqToPoint(n);if(o<e){let l=new $;Jc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends ii{constructor(t=[],e=Os,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ha=class extends ii{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends ii{constructor(t,e,i=Pi,s,r,a,o=Wn,l=Wn,c,u=Qi,p=1){if(u!==Qi&&u!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ua=class extends ts{constructor(t,e=Pi,i=Os,s,r,a=Wn,o=Wn,l,c=Qi){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},da=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vi=class n extends qn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(p,2));function x(T,g,m,w,F,E,N,I,y,A,X){let O=E/y,K=N/A,tt=E/2,ct=N/2,H=I/2,st=y+1,rt=A+1,et=0,mt=0,ft=new $;for(let ht=0;ht<rt;ht++){let Nt=ht*K-ct;for(let oe=0;oe<st;oe++){let ye=oe*O-tt;ft[T]=ye*w,ft[g]=Nt*F,ft[m]=H,c.push(ft.x,ft.y,ft.z),ft[T]=0,ft[g]=0,ft[m]=I>0?1:-1,u.push(ft.x,ft.y,ft.z),p.push(oe/y),p.push(1-ht/A),et+=1}}for(let ht=0;ht<A;ht++)for(let Nt=0;Nt<y;Nt++){let oe=d+Nt+st*ht,ye=d+Nt+st*(ht+1),Tt=d+(Nt+1)+st*(ht+1),Jt=d+(Nt+1)+st*ht;l.push(oe,ye,Jt),l.push(ye,Tt,Jt),mt+=6}o.addGroup(f,mt,X),f+=mt,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},fa=class n extends qn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,p=Math.PI/2*t,d=e,f=2*p+d,x=i*2+r,T=s+1,g=new $,m=new $;for(let w=0;w<=x;w++){let F=0,E=0,N=0,I=0;if(w<=i){let X=w/i,O=X*Math.PI/2;E=-u-t*Math.cos(O),N=t*Math.sin(O),I=-t*Math.cos(O),F=X*p}else if(w<=i+r){let X=(w-i)/r;E=-u+X*e,N=t,I=0,F=p+X*d}else{let X=(w-i-r)/i,O=X*Math.PI/2;E=u+t*Math.sin(O),N=t*Math.cos(O),I=t*Math.sin(O),F=p+d+X*p}let y=Math.max(0,Math.min(1,F/f)),A=0;w===0?A=.5/s:w===x&&(A=-.5/s);for(let X=0;X<=s;X++){let O=X/s,K=O*Math.PI*2,tt=Math.sin(K),ct=Math.cos(K);m.x=-N*ct,m.y=E,m.z=N*tt,o.push(m.x,m.y,m.z),g.set(-N*ct,I,N*tt),g.normalize(),l.push(g.x,g.y,g.z),c.push(O+A,y)}if(w>0){let X=(w-1)*T;for(let O=0;O<s;O++){let K=X+O,tt=X+O+1,ct=w*T+O,H=w*T+O+1;a.push(K,tt,ct),a.push(tt,H,ct)}}}this.setIndex(a),this.setAttribute("position",new wn(o,3)),this.setAttribute("normal",new wn(l,3)),this.setAttribute("uv",new wn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},pa=class n extends qn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new $,u=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=i+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new wn(a,3)),this.setAttribute("normal",new wn(o,3)),this.setAttribute("uv",new wn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Is=class n extends qn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],x=0,T=[],g=i/2,m=0;w(),a===!1&&(t>0&&F(!0),e>0&&F(!1)),this.setIndex(u),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(f,2));function w(){let E=new $,N=new $,I=0,y=(e-t)/i;for(let A=0;A<=r;A++){let X=[],O=A/r,K=O*(e-t)+t;for(let tt=0;tt<=s;tt++){let ct=tt/s,H=ct*l+o,st=Math.sin(H),rt=Math.cos(H);N.x=K*st,N.y=-O*i+g,N.z=K*rt,p.push(N.x,N.y,N.z),E.set(st,y,rt).normalize(),d.push(E.x,E.y,E.z),f.push(ct,1-O),X.push(x++)}T.push(X)}for(let A=0;A<s;A++)for(let X=0;X<r;X++){let O=T[X][A],K=T[X+1][A],tt=T[X+1][A+1],ct=T[X][A+1];(t>0||X!==0)&&(u.push(O,K,ct),I+=3),(e>0||X!==r-1)&&(u.push(K,tt,ct),I+=3)}c.addGroup(m,I,0),m+=I}function F(E){let N=x,I=new ve,y=new $,A=0,X=E===!0?t:e,O=E===!0?1:-1;for(let tt=1;tt<=s;tt++)p.push(0,g*O,0),d.push(0,O,0),f.push(.5,.5),x++;let K=x;for(let tt=0;tt<=s;tt++){let H=tt/s*l+o,st=Math.cos(H),rt=Math.sin(H);y.x=X*rt,y.y=g*O,y.z=X*st,p.push(y.x,y.y,y.z),d.push(0,O,0),I.x=st*.5+.5,I.y=rt*.5*O+.5,f.push(I.x,I.y),x++}for(let tt=0;tt<s;tt++){let ct=N+tt,H=K+tt;E===!0?u.push(H,H+1,ct):u.push(H+1,H,ct),A+=3}c.addGroup(m,A,E===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ve:new $);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new $,s=[],r=[],a=[],o=new $,l=new fn;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new $)}r[0]=new $,a[0]=new $;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(on(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(on(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends fi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ve){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends Mr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Wu=new $,Xu=new $,Wc=new Lh,Xc=new Lh,qc=new Lh,Jo=class extends fi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Xu.subVectors(s[0],s[1]).add(s[0]),c=Xu);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Wu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),T=Math.pow(p.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);T<1e-4&&(T=1),x<1e-4&&(x=T),g<1e-4&&(g=T),Wc.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,x,T,g),Xc.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,x,T,g),qc.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,x,T,g)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Xc.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),qc.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return i.set(Wc.calc(l),Xc.calc(l),qc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function gp(n,t){let e=1-n;return e*e*t}function _p(n,t){return 2*(1-n)*n*t}function xp(n,t){return n*n*t}function Zr(n,t,e,i){return gp(n,t)+_p(n,e)+xp(n,i)}function yp(n,t){let e=1-n;return e*e*e*t}function vp(n,t){let e=1-n;return 3*e*e*n*t}function Mp(n,t){return 3*(1-n)*n*n*t}function Sp(n,t){return n*n*n*t}function $r(n,t,e,i,s){return yp(n,t)+vp(n,e)+Mp(n,i)+Sp(n,s)}var ma=class extends fi{constructor(t=new ve,e=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ve){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(t,s.x,r.x,a.x,o.x),$r(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends fi{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(t,s.x,r.x,a.x,o.x),$r(t,s.y,r.y,a.y,o.y),$r(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends fi{constructor(t=new ve,e=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ve){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ve){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends fi{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends fi{constructor(t=new ve,e=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ve){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(t,s.x,r.x,a.x),Zr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends fi{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(t,s.x,r.x,a.x),Zr(t,s.y,r.y,a.y),Zr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ve){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(qu(o,l.x,c.x,u.x,p.x),qu(o,l.y,c.y,u.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ve().fromArray(s))}return this}},Yu=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Jo,CubicBezierCurve:ma,CubicBezierCurve3:Qo,EllipseCurve:Mr,LineCurve:ga,LineCurve3:tl,QuadraticBezierCurve:_a,QuadraticBezierCurve3:el,SplineCurve:xa}),nl=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ya=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new ve,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ga(this.currentPoint.clone(),new ve(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new _a(this.currentPoint.clone(),new ve(t,e),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ma(this.currentPoint.clone(),new ve(t,e),new ve(i,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new xa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Mr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sr=class extends ya{constructor(t){super(t),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ya().fromJSON(s))}return this}};function bp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Xd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Rp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=n[d],x=n[d+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>p&&(p=x)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return va(r,a,e,o,l,c,0),a}function Xd(n,t,e,i,s){let r;if(s===Bp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Zu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Zu(a/i|0,n[a],n[a+1],r);return r&&br(r,r.next)&&(Sa(r),r=r.next),r}function Ls(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(br(e,e.next)||Ln(e.prev,e,e.next)===0)){if(Sa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function va(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Dp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Tp(n,i,s,r):wp(n)){t.push(l.i,n.i,c.i),Sa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ep(Ls(n),t),va(n,t,e,i,s,r,2)):a===2&&Ap(n,t,e,i,s,r):va(Ls(n),t,e,i,s,r,1);break}}}function wp(n){let t=n.prev,e=n,i=n.next;if(Ln(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),x=i.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=p&&x.y<=f&&qr(s,o,r,l,a,c,x.x,x.y)&&Ln(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Tp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ln(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),x=Math.min(u,p,d),T=Math.max(o,l,c),g=Math.max(u,p,d),m=Qc(f,x,t,e,i),w=Qc(T,g,t,e,i),F=n.prevZ,E=n.nextZ;for(;F&&F.z>=m&&E&&E.z<=w;){if(F.x>=f&&F.x<=T&&F.y>=x&&F.y<=g&&F!==s&&F!==a&&qr(o,u,l,p,c,d,F.x,F.y)&&Ln(F.prev,F,F.next)>=0||(F=F.prevZ,E.x>=f&&E.x<=T&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&qr(o,u,l,p,c,d,E.x,E.y)&&Ln(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;F&&F.z>=m;){if(F.x>=f&&F.x<=T&&F.y>=x&&F.y<=g&&F!==s&&F!==a&&qr(o,u,l,p,c,d,F.x,F.y)&&Ln(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;E&&E.z<=w;){if(E.x>=f&&E.x<=T&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&qr(o,u,l,p,c,d,E.x,E.y)&&Ln(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ep(n,t){let e=n;do{let i=e.prev,s=e.next.next;!br(i,s)&&Yd(i,e,e.next,s)&&Ma(i,s)&&Ma(s,i)&&(t.push(i.i,e.i,s.i),Sa(e),Sa(e.next),e=n=s),e=e.next}while(e!==n);return Ls(e)}function Ap(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Up(a,o)){let l=Zd(a,o);a=Ls(a,a.next),l=Ls(l,l.next),va(a,t,e,i,s,r,0),va(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Rp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Xd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Fp(c))}s.sort(Cp);for(let r=0;r<s.length;r++)e=Pp(s[r],e);return e}function Cp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Pp(n,t){let e=Ip(n,t);if(!e)return t;let i=Zd(e,n);return Ls(i,i.next),Ls(e,e.next)}function Ip(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(br(n,e))return e;do{if(br(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&qd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let p=Math.abs(s-e.y)/(i-e.x);Ma(e,n)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&Lp(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function Lp(n,t){return Ln(n.prev,n,t.prev)<0&&Ln(t.next,n,n.next)<0}function Dp(n,t,e,i){let s=n;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Np(s)}function Np(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Fp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function qr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&qd(n,t,e,i,s,r,a,o)}function Up(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Op(n,t)&&(Ma(n,t)&&Ma(t,n)&&kp(n,t)&&(Ln(n.prev,n,t.prev)||Ln(n,t.prev,t))||br(n,t)&&Ln(n.prev,n,n.next)>0&&Ln(t.prev,t,t.next)>0)}function Ln(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function br(n,t){return n.x===t.x&&n.y===t.y}function Yd(n,t,e,i){let s=Ro(Ln(n,t,e)),r=Ro(Ln(n,t,i)),a=Ro(Ln(e,i,n)),o=Ro(Ln(e,i,t));return!!(s!==r&&a!==o||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||a===0&&Ao(e,n,i)||o===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function Op(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Yd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ma(n,t){return Ln(n.prev,n,n.next)<0?Ln(n,t,n.next)>=0&&Ln(n,n.prev,t)>=0:Ln(n,t,n.prev)<0||Ln(n,n.next,t)<0}function kp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Zd(n,t){let e=th(n.i,n.x,n.y),i=th(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Zu(n,t,e,i){let s=th(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function th(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var eh=class{static triangulate(t,e,i=2){return bp(t,e,i)}},ur=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];$u(t),Ku(i,t);let a=t.length;e.forEach($u);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ku(i,e[l]);let o=eh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $u(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ku(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var gs=class n extends qn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],x=[],T=[],g=[];for(let m=0;m<u;m++){let w=m*d-a;for(let F=0;F<c;F++){let E=F*p-r;x.push(E,-w,0),T.push(0,0,1),g.push(F/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let F=w+c*m,E=w+c*(m+1),N=w+1+c*(m+1),I=w+1+c*m;f.push(F,E,I),f.push(E,N,I)}this.setIndex(f),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(T,3)),this.setAttribute("uv",new wn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ba=class n extends qn{constructor(t=new Sr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new wn(s,3)),this.setAttribute("normal",new wn(r,3)),this.setAttribute("uv",new wn(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,x=d.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=x.length;g<m;g++){let w=x[g];ur.isClockWise(w)===!0&&(x[g]=w.reverse())}let T=ur.triangulateShape(f,x);for(let g=0,m=x.length;g<m;g++){let w=x[g];f=f.concat(w)}for(let g=0,m=f.length;g<m;g++){let w=f[g];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let g=0,m=T.length;g<m;g++){let w=T[g],F=w[0]+p,E=w[1]+p,N=w[2]+p;i.push(F,E,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return zp(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function zp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ds=class n extends qn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new $,d=new $,f=[],x=[],T=[],g=[];for(let m=0;m<=i;m++){let w=[],F=m/i,E=a+F*o,N=t*Math.cos(E),I=Math.sqrt(t*t-N*N),y=0;m===0&&a===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let X=A/e,O=s+X*r;p.x=-I*Math.cos(O),p.y=N,p.z=I*Math.sin(O),x.push(p.x,p.y,p.z),d.copy(p).normalize(),T.push(d.x,d.y,d.z),g.push(X+y,1-F),w.push(c++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let F=u[m][w+1],E=u[m][w],N=u[m+1][w],I=u[m+1][w+1];(m!==0||a>0)&&f.push(F,E,I),(m!==i-1||l<Math.PI)&&f.push(E,N,I)}this.setIndex(f),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(T,3)),this.setAttribute("uv",new wn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ju(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ju(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Kn(n){let t={};for(let e=0;e<n.length;e++){let i=Bs(n[e]);for(let s in i)t[s]=i[s]}return t}function ju(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Gp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cn.workingColorSpace}var $d={clone:Bs,merge:Kn},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Co(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _s=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends _s{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,o=2*e-i;break;case jc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,l=2*i-e;break;case jc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-e)/(s-e),T=x*x,g=T*x,m=-d*g+2*d*T-d*x,w=(1+d)*g+(-1.5-2*d)*T+(-.5+d)*x+1,F=(-1-f)*g+(1.5+f)*T+.5*x,E=f*g-f*T;for(let N=0;N!==o;++N)r[N]=m*a[u+N]+w*a[c+N]+F*a[l+N]+E*a[p+N];return r}},ol=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},ll=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends _s{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(i-e)/(s-e),T=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*T+a[l+g]*x;return r}let d=o*2,f=t-1;for(let x=0;x!==o;++x){let T=a[c+x],g=a[l+x],m=f*d+x*2,w=p[m],F=p[m+1],E=t*d+x*2,N=u[E],I=u[E+1],y=Xp(i,e,w,N,s);r[x]=Kd(y,T,F,I,g)}return r}};function Kd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Wp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Xp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Kd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Wp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Co(t.settings)&&(i.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case Zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Co(this.settings)&&(Ju(this.settings.inTangents,t),Ju(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Co(this.settings)&&(Qu(this.settings.inTangents,t),Qu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Yf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,d=p-i,f=p+i;for(let x=0;x!==i;++x){let T=e[p+x];if(T!==e[d+x]||T!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ju(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Qu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Vo;var xs=class extends pi{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Kr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="color";var ul=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};ul.prototype.ValueTypeName="number";var dl=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends pi{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Kr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends Xn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ea=class extends Ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yc=new fn,td=new $,ed=new $,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Yc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new $,Io=new ui,Ui=new $,Aa=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new $,nd=new ve,id=new ve,ei=class extends Aa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ra=class extends Aa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends gl{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lr=-90,cr=1,wr=class extends Xn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ei(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new ei(lr,cr,t,e);r.layers=this.layers,this.add(r);let a=new ei(lr,cr,t,e);a.layers=this.layers,this.add(a);let o=new ei(lr,cr,t,e);o.layers=this.layers,this.add(o);let l=new ei(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new ei(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=T,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},_l=class extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Nh="\\[\\]\\.:\\/",qp=new RegExp("["+Nh+"]","g"),Fh="[^"+Nh+"]",Yp="[^"+Nh.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Fh),$p=/(WCOD+)?/.source.replace("WCOD",Yp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Jp=new RegExp("^"+Zp+$p+Kp+jp+"$"),Qp=["material","materials","bones","map"],ih=class{constructor(t,e,i){let s=i||An.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},An=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};An.Composite=ih;An.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};An.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};An.prototype.GetterByBindingType=[An.prototype._getValue_direct,An.prototype._getValue_array,An.prototype._getValue_arrayElement,An.prototype._getValue_toArray];An.prototype.SetterByBindingTypeAndVersioning=[[An.prototype._setValue_direct,An.prototype._setValue_direct_setNeedsUpdate,An.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[An.prototype._setValue_array,An.prototype._setValue_array_setNeedsUpdate,An.prototype._setValue_array_setMatrixWorldNeedsUpdate],[An.prototype._setValue_arrayElement,An.prototype._setValue_arrayElement_setNeedsUpdate,An.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[An.prototype._setValue_fromArray,An.prototype._setValue_fromArray_setNeedsUpdate,An.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uy=new Float32Array(1);var sd=new fn,Pa=class{constructor(t,e,i=0,s=1/0){this.ray=new Ps(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ze("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sd),this}intersectObject(t,e=!0,i=[]){return sh(t,this,i,e),i.sort(rd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)sh(t[s],this,i,e);return i.sort(rd),i}};function rd(n,t){return n.distance-t.distance}function sh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)sh(r[a],t,e,!0)}}var Gh=class Gh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Gh.prototype.isMatrix2=!0;var rh=Gh;function Uh(n,t,e,i){let s=t0(i);switch(e){case wh:return n*t;case Tl:return n*t/s.components*s.byteLength;case El:return n*t/s.components*s.byteLength;case Ms:return n*t*2/s.components*s.byteLength;case Al:return n*t*2/s.components*s.byteLength;case Th:return n*t*3/s.components*s.byteLength;case Li:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Nl:case Ul:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fl:case Oa:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ql:case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ka:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(n){switch(n){case ri:case vh:return{byteLength:1,components:1};case Rr:case Mh:case Ii:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Pi:case Sl:case Si:return{byteLength:4,components:1};case Sh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function n0(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let u=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,u);else{p.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<p.length;f++){let x=p[d],T=p[f];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,p[d]=T)}p.length=d+1;for(let f=0,x=p.length;f<x;f++){let T=p[f];n.bufferSubData(c,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
}`,em=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
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
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform float backgroundBlurriness;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,en={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:w0,color_vertex:T0,common:E0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:U0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:k0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:G0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:j0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,lightprobes_pars_fragment:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:_m,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:vm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:bm,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Pm,packing:Im,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:Gm,skinbase_vertex:Hm,skinning_pars_vertex:Vm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Km,transmission_pars_fragment:jm,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Pg,points_frag:Ig,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ng,sprite_frag:Fg},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Xi={basic:{uniforms:Kn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:en.meshbasic_vert,fragmentShader:en.meshbasic_frag},lambert:{uniforms:Kn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:en.meshlambert_vert,fragmentShader:en.meshlambert_frag},phong:{uniforms:Kn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:en.meshphong_vert,fragmentShader:en.meshphong_frag},standard:{uniforms:Kn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag},toon:{uniforms:Kn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:en.meshtoon_vert,fragmentShader:en.meshtoon_frag},matcap:{uniforms:Kn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:en.meshmatcap_vert,fragmentShader:en.meshmatcap_frag},points:{uniforms:Kn([le.points,le.fog]),vertexShader:en.points_vert,fragmentShader:en.points_frag},dashed:{uniforms:Kn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:en.linedashed_vert,fragmentShader:en.linedashed_frag},depth:{uniforms:Kn([le.common,le.displacementmap]),vertexShader:en.depth_vert,fragmentShader:en.depth_frag},normal:{uniforms:Kn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:en.meshnormal_vert,fragmentShader:en.meshnormal_frag},sprite:{uniforms:Kn([le.sprite,le.fog]),vertexShader:en.sprite_vert,fragmentShader:en.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:en.background_vert,fragmentShader:en.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:en.backgroundCube_vert,fragmentShader:en.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:en.cube_vert,fragmentShader:en.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:en.equirect_vert,fragmentShader:en.equirect_frag},distance:{uniforms:Kn([le.common,le.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:en.distance_vert,fragmentShader:en.distance_frag},shadow:{uniforms:Kn([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:en.shadow_vert,fragmentShader:en.shadow_frag}};Xi.physical={uniforms:Kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag};var ac={r:0,b:0,g:0},Ug=new fn,Mf=new Xe;Mf.set(-1,0,0,0,1,0,0,0,1);function Og(n,t,e,i,s,r){let a=new qe(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(w){let F=w.isScene===!0?w.background:null;if(F&&F.isTexture){let E=w.backgroundBlurriness>0;F=t.get(F,E)}return F}function x(w){let F=!1,E=f(w);E===null?g(a,o):E&&E.isColor&&(g(E,1),F=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?e.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(w,F){let E=f(F);E&&E.isCubeTexture?(c===void 0&&(c=new Un(new vi(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Bs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,I,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(F.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mf),c.material.toneMapped=cn.getTransfer(E.colorSpace)!==vn,(u!==E||p!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Un(new gs(2,2),new Hi({name:"BackgroundMaterial",uniforms:Bs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=cn.getTransfer(E.colorSpace)!==vn,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,p=E.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,F){w.getRGB(ac,Dh(n)),e.buffers.color.setClear(ac.r,ac.g,ac.b,F,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,F=1){a.set(w),o=F,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:x,addToRenderList:T,dispose:m}}function kg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(K,tt,ct,H,st){let rt=!1,et=p(K,H,ct,tt);r!==et&&(r=et,c(r.object)),rt=f(K,H,ct,st),rt&&x(K,H,ct,st),st!==null&&t.update(st,n.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,E(K,tt,ct,H),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return n.createVertexArray()}function c(K){return n.bindVertexArray(K)}function u(K){return n.deleteVertexArray(K)}function p(K,tt,ct,H){let st=H.wireframe===!0,rt=i[tt.id];rt===void 0&&(rt={},i[tt.id]=rt);let et=K.isInstancedMesh===!0?K.id:0,mt=rt[et];mt===void 0&&(mt={},rt[et]=mt);let ft=mt[ct.id];ft===void 0&&(ft={},mt[ct.id]=ft);let ht=ft[st];return ht===void 0&&(ht=d(l()),ft[st]=ht),ht}function d(K){let tt=[],ct=[],H=[];for(let st=0;st<e;st++)tt[st]=0,ct[st]=0,H[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:ct,attributeDivisors:H,object:K,attributes:{},index:null}}function f(K,tt,ct,H){let st=r.attributes,rt=tt.attributes,et=0,mt=ct.getAttributes();for(let ft in mt)if(mt[ft].location>=0){let Nt=st[ft],oe=rt[ft];if(oe===void 0&&(ft==="instanceMatrix"&&K.instanceMatrix&&(oe=K.instanceMatrix),ft==="instanceColor"&&K.instanceColor&&(oe=K.instanceColor)),Nt===void 0||Nt.attribute!==oe||oe&&Nt.data!==oe.data)return!0;et++}return r.attributesNum!==et||r.index!==H}function x(K,tt,ct,H){let st={},rt=tt.attributes,et=0,mt=ct.getAttributes();for(let ft in mt)if(mt[ft].location>=0){let Nt=rt[ft];Nt===void 0&&(ft==="instanceMatrix"&&K.instanceMatrix&&(Nt=K.instanceMatrix),ft==="instanceColor"&&K.instanceColor&&(Nt=K.instanceColor));let oe={};oe.attribute=Nt,Nt&&Nt.data&&(oe.data=Nt.data),st[ft]=oe,et++}r.attributes=st,r.attributesNum=et,r.index=H}function T(){let K=r.newAttributes;for(let tt=0,ct=K.length;tt<ct;tt++)K[tt]=0}function g(K){m(K,0)}function m(K,tt){let ct=r.newAttributes,H=r.enabledAttributes,st=r.attributeDivisors;ct[K]=1,H[K]===0&&(n.enableVertexAttribArray(K),H[K]=1),st[K]!==tt&&(n.vertexAttribDivisor(K,tt),st[K]=tt)}function w(){let K=r.newAttributes,tt=r.enabledAttributes;for(let ct=0,H=tt.length;ct<H;ct++)tt[ct]!==K[ct]&&(n.disableVertexAttribArray(ct),tt[ct]=0)}function F(K,tt,ct,H,st,rt,et){et===!0?n.vertexAttribIPointer(K,tt,ct,st,rt):n.vertexAttribPointer(K,tt,ct,H,st,rt)}function E(K,tt,ct,H){T();let st=H.attributes,rt=ct.getAttributes(),et=tt.defaultAttributeValues;for(let mt in rt){let ft=rt[mt];if(ft.location>=0){let ht=st[mt];if(ht===void 0&&(mt==="instanceMatrix"&&K.instanceMatrix&&(ht=K.instanceMatrix),mt==="instanceColor"&&K.instanceColor&&(ht=K.instanceColor)),ht!==void 0){let Nt=ht.normalized,oe=ht.itemSize,ye=t.get(ht);if(ye===void 0)continue;let Tt=ye.buffer,Jt=ye.type,Rt=ye.bytesPerElement,Ct=Jt===n.INT||Jt===n.UNSIGNED_INT||ht.gpuType===Sl;if(ht.isInterleavedBufferAttribute){let bt=ht.data,_t=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,jt=ht.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let ne=0;ne<ft.locationSize;ne++)m(ft.location+ne,bt.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ne=0;ne<ft.locationSize;ne++)g(ft.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let ne=0;ne<ft.locationSize;ne++)F(ft.location+ne,oe/ft.locationSize,Jt,Nt,_t*Rt,(jt+oe/ft.locationSize*ne)*Rt,Ct)}else{if(ht.isInstancedBufferAttribute){for(let bt=0;bt<ft.locationSize;bt++)m(ft.location+bt,ht.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let bt=0;bt<ft.locationSize;bt++)g(ft.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let bt=0;bt<ft.locationSize;bt++)F(ft.location+bt,oe/ft.locationSize,Jt,Nt,oe*Rt,oe/ft.locationSize*bt*Rt,Ct)}}else if(et!==void 0){let Nt=et[mt];if(Nt!==void 0)switch(Nt.length){case 2:n.vertexAttrib2fv(ft.location,Nt);break;case 3:n.vertexAttrib3fv(ft.location,Nt);break;case 4:n.vertexAttrib4fv(ft.location,Nt);break;default:n.vertexAttrib1fv(ft.location,Nt)}}}}w()}function N(){X();for(let K in i){let tt=i[K];for(let ct in tt){let H=tt[ct];for(let st in H){let rt=H[st];for(let et in rt)u(rt[et].object),delete rt[et];delete H[st]}}delete i[K]}}function I(K){if(i[K.id]===void 0)return;let tt=i[K.id];for(let ct in tt){let H=tt[ct];for(let st in H){let rt=H[st];for(let et in rt)u(rt[et].object),delete rt[et];delete H[st]}}delete i[K.id]}function y(K){for(let tt in i){let ct=i[tt];for(let H in ct){let st=ct[H];if(st[K.id]===void 0)continue;let rt=st[K.id];for(let et in rt)u(rt[et].object),delete rt[et];delete st[K.id]}}}function A(K){for(let tt in i){let ct=i[tt],H=K.isInstancedMesh===!0?K.id:0,st=ct[H];if(st!==void 0){for(let rt in st){let et=st[rt];for(let mt in et)u(et[mt].object),delete et[mt];delete st[rt]}delete ct[H],Object.keys(ct).length===0&&delete i[tt]}}}function X(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:X,resetDefaultState:O,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:y,initAttributes:T,enableAttribute:g,disableUnusedAttributes:w}}function Bg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Li&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let A=y===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ri&&y!==Si&&!A&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:F,maxFragmentUniforms:E,maxSamples:N,samples:I}}function Gg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ri,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||i!==0||s;return s=d,i=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let x=p.clippingPlanes,T=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let w=r?0:i,F=w*4,E=m.clippingState||null;l.value=E,E=u(x,d,F,f);for(let N=0;N!==F;++N)E[N]=e[N];m.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(p,d,f,x){let T=p!==null?p.length:0,g=null;if(T!==0){if(g=l.value,x!==!0||g===null){let m=f+T*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let F=0,E=f;F!==T;++F,E+=4)a.copy(p[F]).applyMatrix4(w,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}var Ga=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:Fs});r.uniforms.tEquirect.value=e;let a=new Un(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=ni),new wr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Jd=256,Hg=3,Vg=20,Sf=256,bf=16,Wg=3,Xg=new $,qg=new qe,lc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new Un(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Xg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,T=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,T===null&&(t.background=l.getClearColor(qg));let g=new wr(i,s,u);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=x,t.background=T,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Jd,Vd(t))}_fromTexture(t,e){t.mapping===Os||t.mapping===Ar?this._setSize(t.image.length===0?Jd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Qd(t,!1,!1),i=Math.log2(t)-Hg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Qd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Os||t.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Yg(),this._integrationMaterial=Zg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Wg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Sf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=$g());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Qd(n,t,e){return new Ga(n,{minFilter:es,generateMipmaps:t,type:Ii,colorSpace:jr,depthBuffer:e})}function Ha(n,t,e){return new Hi({name:n,uniforms:t,vertexShader:en.cube_vert,fragmentShader:e,side:si,blending:Fs,depthTest:!1,depthWrite:!1})}function Yg(){return Ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sf}u

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
	`)}function Zg(){return Ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bf}},`

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
	`)}function $g(){return Ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vg}
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
	`)}function tf(){return Ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ef(){return Ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yl||f===vl)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let T=new Ga(x.height);return T.fromEquirectangularTexture(n,d),t.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,x=f===yl||f===vl,T=f===Os||f===Ar;if(x||T){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new lc(n)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let w=d.image;return x&&w&&w.height>0||T&&w&&l(w)?(i===null&&(i=new lc(n)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===yl?d.mapping=Os:f===vl&&(d.mapping=Ar),d}function l(d){let f=0,x=6;for(let T=0;T<x;T++)d[T]!==void 0&&f++;return f===x}function c(d){let f=d.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function jg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Yr("WebGLRenderer: "+i+" extension not supported."),s}}}function Jg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let T=r.get(x);T&&(t.remove(T),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,T){return s[T.id]!==void 0||(T.addEventListener("dispose",o),s[T.id]=new WeakRef(T),a.register(T,T.id,T),e.memory.geometries++),T}function u(x){let T=x.attributes;for(let g in T)t.update(T[g],n.ARRAY_BUFFER)}function p(x){let T=x.index,g=x.attributes.position,m=0;if(g===void 0)return;let w=T!==null?T.array.length:g.array.length/3-1,F=g.count>=65535?sa:ia,E=new F(Math.ceil(w/3)*6,1),N=E.array;if(T!==null){let y=T.array;m=T.version;for(let A=0,X=0;A<w;A+=3){let O=y[A+0],K=y[A+1],tt=y[A+2];N[X++]=O,N[X++]=K,N[X++]=K,N[X++]=tt,N[X++]=tt,N[X++]=O}}else{m=g.version;for(let y=0,A=0;y<w;y+=3){let X=y+0,O=y+1,K=y+2;N[A++]=X,N[A++]=O,N[A++]=O,N[A++]=K,N[A++]=K,N[A++]=X}}E.version=m;let I=r.get(x);I&&t.remove(I),r.set(x,E)}function d(x){let T=r.get(x);if(T){let g=x.index;g!==null&&T.version<g.version&&p(x)}else p(x);return r.get(x)}function f(){for(let x in s){let T=s[x].deref();T!==void 0&&l(T)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Qg(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function c(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,p*a,f),e.update(d,i,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,f);let T=0;for(let g=0;g<f;g++)T+=d[g];e.update(T,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function t_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function e_(n,t,e){let i=new WeakMap,s=new Pn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==p){let X=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",X)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],F=0;f===!0&&(F=1),x===!0&&(F=2),T===!0&&(F=3);let E=o.attributes.position.count*F,N=1;E>t.maxTextureSize&&(N=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let I=new Float32Array(E*N*4*p),y=new ta(I,E,N,p);y.type=Si,y.needsUpdate=!0;let A=F*4;for(let O=0;O<p;O++){let K=g[O],tt=m[O],ct=w[O],H=E*N*4*O;for(let st=0;st<K.count;st++){let rt=st*A;f===!0&&(s.fromBufferAttribute(K,st),I[H+rt+0]=s.x,I[H+rt+1]=s.y,I[H+rt+2]=s.z,I[H+rt+3]=0),x===!0&&(s.fromBufferAttribute(tt,st),I[H+rt+4]=s.x,I[H+rt+5]=s.y,I[H+rt+6]=s.z,I[H+rt+7]=0),T===!0&&(s.fromBufferAttribute(ct,st),I[H+rt+8]=s.x,I[H+rt+9]=s.y,I[H+rt+10]=s.z,I[H+rt+11]=ct.itemSize===4?s.w:1)}}d={count:p,texture:y,size:new ve(E,N)},i.set(o,d),o.addEventListener("dispose",X)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let T=0;T<c.length;T++)f+=c[T];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var i_={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[Ia]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function s_(n,t,e,i,s,r){let a=new di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new qn;u.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wn([0,2,0,0,2,0],2));let p=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Un(u,p),f=new Ra(-1,1,1,-1,0,1),x=null,T=null,g=!1,m,w=null,F=[],E=!1;this.setSize=function(N,I){a.setSize(N,I),o!==null&&o.setSize(N,I),l!==null&&l.setSize(N,I);for(let y=0;y<F.length;y++){let A=F[y];A.setSize&&A.setSize(N,I)}},this.setEffects=function(N){F=N,E=F.length>0&&F[0].isRenderPass===!0;let I=a.width,y=a.height;F.length>0&&o===null&&(o=new di(I,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new di(I,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&F.some(X=>X.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new ts(I,y),r===!0&&(c.format=ns,c.type=ks)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let X=0;X<F.length;X++){let O=F[X];O.setSize&&O.setSize(I,y),A&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(N,I){if(g||N.toneMapping===Vi&&F.length===0)return!1;if(w=I,I!==null){let y=I.width,A=I.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return E===!1&&N.setRenderTarget(a),m=N.toneMapping,N.toneMapping=Vi,!0},this.hasRenderPass=function(){return E},this.end=function(N,I){N.toneMapping=m,g=!0;let y=a,A=o;for(let X=0;X<F.length;X++){let O=F[X];O.enabled!==!1&&(O.render(N,A,y,I),O.needsSwap!==!1&&(y=A,A=A===o?l:o))}if(x!==N.outputColorSpace||T!==N.toneMapping){x=N.outputColorSpace,T=N.toneMapping,p.defines={},cn.getTransfer(x)===vn&&(p.defines.SRGB_TRANSFER="");let X=i_[T];X&&(p.defines[X]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,N.setRenderTarget(w),N.render(d,f),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var wf=new ii,Tf=new ts(1,1),Ef=new ua(1),Af=new ta,Rf=new Yo,Cf=new ca,nf=[],sf=[],rf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function Ir(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function zn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Gn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hc(n,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function r_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;n.uniform2fv(this.addr,t),Gn(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(zn(e,t))return;n.uniform3fv(this.addr,t),Gn(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;n.uniform4fv(this.addr,t),Gn(e,t)}}function c_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(zn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,i))return;of.set(i),n.uniformMatrix2fv(this.addr,!1,of),Gn(e,i)}}function h_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(zn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),Gn(e,i)}}function u_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(zn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Gn(e,t)}else{if(zn(e,i))return;rf.set(i),n.uniformMatrix4fv(this.addr,!1,rf),Gn(e,i)}}function d_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;n.uniform2iv(this.addr,t),Gn(e,t)}}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;n.uniform3iv(this.addr,t),Gn(e,t)}}function m_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;n.uniform4iv(this.addr,t),Gn(e,t)}}function g_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;n.uniform2uiv(this.addr,t),Gn(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;n.uniform3uiv(this.addr,t),Gn(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;n.uniform4uiv(this.addr,t),Gn(e,t)}}function uc(n){return n.version===0&&(n.compareFunction=Rh,n.needsUpdate=!0),n}function v_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=uc(Tf):r=wf,e.setTexture2D(t||r,s)}function M_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rf,s)}function S_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=uc(Ef):r=Cf,e.setTextureCube(t||r,s)}function b_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Af,s)}function w_(n){switch(n){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function T_(n,t){n.uniform1fv(this.addr,t)}function E_(n,t){let e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function A_(n,t){let e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function R_(n,t){let e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function C_(n,t){let e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function P_(n,t){let e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function I_(n,t){let e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function L_(n,t){n.uniform1iv(this.addr,t)}function D_(n,t){n.uniform2iv(this.addr,t)}function N_(n,t){n.uniform3iv(this.addr,t)}function F_(n,t){n.uniform4iv(this.addr,t)}function U_(n,t){n.uniform1uiv(this.addr,t)}function O_(n,t){n.uniform2uiv(this.addr,t)}function k_(n,t){n.uniform3uiv(this.addr,t)}function B_(n,t){n.uniform4uiv(this.addr,t)}function z_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);zn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=uc(Tf):a=wf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function G_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);zn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rf,r[a])}function H_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);zn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=uc(Ef):a=Cf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function V_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);zn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Af,r[a])}function W_(n){switch(n){case 5126:return T_;case 35664:return E_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return U_;case 36294:return O_;case 36295:return k_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}var Wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}},Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W_(e.type)}},qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function lf(n,t){n.seq.push(t),n.map[t.id]=t}function X_(n,t,e){let i=n.name,s=i.length;for(Hh.lastIndex=0;;){let r=Hh.exec(i),a=Hh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lf(e,c===void 0?new Wh(o,n,t):new Xh(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new qh(o),lf(e,p)),e=p}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);X_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function cf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var q_=37297,Y_=0;function Z_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var hf=new Xe;function $_(n){cn._getMatrix(hf,cn.workingColorSpace,n);let t=`mat3( ${hf.elements.map(e=>e.toFixed(4))} )`;switch(cn.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case vn:return[t,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function uf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Z_(n.getShaderSource(t),o)}else return r}function K_(n,t){let e=$_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var j_={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[Ia]:"ACESFilmic",[_h]:"AgX",[xh]:"Neutral",[gh]:"Custom"};function J_(n,t){let e=j_[t];return e===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new $;function Q_(){cn.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function ex(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function za(n){return n!==""}function df(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ff(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(n){return n.replace(ix,sx)}function sx(n,t){let e=en[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Yh(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(rx,ax)}function ax(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var ox={[Ns]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function lx(n){return ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cx={[Ar]:"ENVMAP_MODE_REFRACTION"};function hx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ux={[dh]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function dx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ux[n.combine]||"ENVMAP_BLENDING_NONE"}function fx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hx(e),p=dx(e),d=tx(e),f=ex(r),x=s.createProgram(),T,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(T=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(za).join(`
`),T.length>0&&(T+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(za).join(`
`),g.length>0&&(g+=`
`)):(T=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),g=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?en.tonemapping_pars_fragment:"",e.toneMapping!==Vi?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",en.colorspace_pars_fragment,K_("linearToOutputTexel",e.outputColorSpace),Q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(za).join(`
`)),a=Yh(a),a=df(a,e),a=ff(a,e),o=Yh(o),o=df(o,e),o=ff(o,e),a=pf(a),o=pf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,T=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,g=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=m+T+a,F=m+g+o,E=cf(s,s.VERTEX_SHADER,w),N=cf(s,s.FRAGMENT_SHADER,F);s.attachShader(x,E),s.attachShader(x,N),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(O){if(n.debug.checkShaderErrors){let K=s.getProgramInfoLog(x)||"",tt=s.getShaderInfoLog(E)||"",ct=s.getShaderInfoLog(N)||"",H=K.trim(),st=tt.trim(),rt=ct.trim(),et=!0,mt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,N);else{let ft=uf(s,E,"vertex"),ht=uf(s,N,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+ft+`
`+ht)}else H!==""?Ue("WebGLProgram: Program Info Log:",H):(st===""||rt==="")&&(mt=!1);mt&&(O.diagnostics={runnable:et,programLog:H,vertexShader:{log:st,prefix:T},fragmentShader:{log:rt,prefix:g}})}s.deleteShader(E),s.deleteShader(N),y=new Pr(s,x),A=nx(s,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(x,q_)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=N,this}var px=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $h(t),e.set(t,i)),i}},$h=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function mx(n){return n===Ms||n===Oa||n===ka}function gx(n,t,e,i,s,r){let a=new gr,o=new Zh,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,X,O,K,tt){let ct=O.fog,H=K.geometry,st=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,rt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,et=t.get(y.envMap||st,rt),mt=d[y.type],ft=i.precision;y.precision!==null&&(ft=i.getMaxPrecision(y.precision),ft!==y.precision&&Ue("WebGLProgram.getParameters:",y.precision,"not supported, using",ft,"instead."));let ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Nt=ht!==void 0?ht.length:0,oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let ye,Tt,Jt,Rt;if(mt){let Xt=Xi[mt];ye=Xt.vertexShader,Tt=Xt.fragmentShader}else{ye=y.vertexShader,Tt=y.fragmentShader;let Xt=o.getVertexShaderStage(y),C=o.getFragmentShaderStage(y);o.update(y,Xt,C),Jt=Xt.id,Rt=C.id}let Ct=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),_t=K.isInstancedMesh===!0,jt=K.isBatchedMesh===!0,ne=!!y.map,Ne=!!y.matcap,Oe=!!et,Ee=Oe&&et.isPMREMTexture===!0,Ge=!!y.aoMap,pn=!!y.lightMap,Ke=!!y.bumpMap&&y.wireframe===!1,sn=!!y.normalMap,Dn=!!y.displacementMap,Sn=!!y.emissiveMap,Cn=!!y.metalnessMap,En=!!y.roughnessMap,Qe=y.anisotropy>0,G=y.clearcoat>0,Fe=y.diffuseRoughness>0,fe=y.dispersion>0,$t=y.retroreflectivity>0,j=y.iridescence>0,He=y.sheen>0,kt=y.transmission>0,de=Qe&&!!y.anisotropyMap,L=G&&!!y.clearcoatMap,M=G&&!!y.clearcoatNormalMap,Z=G&&!!y.clearcoatRoughnessMap,Et=Fe&&!!y.diffuseRoughnessMap,nt=j&&!!y.iridescenceMap,at=j&&!!y.iridescenceThicknessMap,Ft=He&&!!y.sheenColorMap,vt=He&&!!y.sheenRoughnessMap,St=!!y.specularMap,Yt=!!y.specularColorMap,z=!!y.specularIntensityMap,wt=kt&&!!y.transmissionMap,xt=kt&&!!y.thicknessMap,Mt=!!y.gradientMap,Lt=!!y.alphaMap,Ht=y.alphaTest>0,me=!!y.alphaHash,Le=!!y.extensions,Ut=Vi;y.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Se=Ee?et.isCompressedCubeTexture?et.image[0].mipmaps:et.mipmaps:null,De={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:Tt,defines:y.defines,customVertexShaderID:Jt,customFragmentShaderID:Rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ft,batching:jt,batchingColor:jt&&K._colorsTexture!==null,instancing:_t,instancingColor:_t&&K.instanceColor!==null,instancingMorph:_t&&K.morphTexture!==null,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:cn.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ne,matcap:Ne,envMap:Oe,envMapMode:Oe&&et.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?Se.length-1:null,envMapSize:Ee?Se[0].width:null,aoMap:Ge,lightMap:pn,bumpMap:Ke,normalMap:sn,displacementMap:Dn,emissiveMap:Sn,normalMapObjectSpace:sn&&y.normalMapType===Id,normalMapTangentSpace:sn&&y.normalMapType===rc,packedNormalMap:sn&&y.normalMapType===rc&&mx(y.normalMap.format),metalnessMap:Cn,roughnessMap:En,anisotropy:Qe,anisotropyMap:de,clearcoat:G,clearcoatMap:L,clearcoatNormalMap:M,clearcoatRoughnessMap:Z,diffuseRoughness:Fe,diffuseRoughnessMap:Et,dispersion:fe,retroreflection:$t,iridescence:j,iridescenceMap:nt,iridescenceThicknessMap:at,sheen:He,sheenColorMap:Ft,sheenRoughnessMap:vt,specularMap:St,specularColorMap:Yt,specularIntensityMap:z,transmission:kt,transmissionMap:wt,thicknessMap:xt,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Er&&y.alphaToCoverage===!1,alphaMap:Lt,alphaTest:Ht,alphaHash:me,combine:y.combine,mapUv:ne&&f(y.map.channel),aoMapUv:Ge&&f(y.aoMap.channel),lightMapUv:pn&&f(y.lightMap.channel),bumpMapUv:Ke&&f(y.bumpMap.channel),normalMapUv:sn&&f(y.normalMap.channel),displacementMapUv:Dn&&f(y.displacementMap.channel),emissiveMapUv:Sn&&f(y.emissiveMap.channel),metalnessMapUv:Cn&&f(y.metalnessMap.channel),roughnessMapUv:En&&f(y.roughnessMap.channel),anisotropyMapUv:de&&f(y.anisotropyMap.channel),clearcoatMapUv:L&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Et&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&f(y.sheenRoughnessMap.channel),specularMapUv:St&&f(y.specularMap.channel),specularColorMapUv:Yt&&f(y.specularColorMap.channel),specularIntensityMapUv:z&&f(y.specularIntensityMap.channel),transmissionMapUv:wt&&f(y.transmissionMap.channel),thicknessMapUv:xt&&f(y.thicknessMap.channel),alphaMapUv:Lt&&f(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(sn||Qe),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!H.attributes.uv&&(ne||Lt),fog:!!ct,useFog:y.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&sn===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:bt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:oe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:tt.filter(Xt=>Xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ne&&y.map.isVideoTexture===!0&&cn.getTransfer(y.map.colorSpace)===vn,decodeVideoTextureEmissive:Sn&&y.emissiveMap.isVideoTexture===!0&&cn.getTransfer(y.emissiveMap.colorSpace)===vn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===si,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function T(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let X in y.defines)A.push(X),A.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(g(A,y),m(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapPMREM),y.push(A.envMapMaxLod),y.push(A.envMapSize),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.diffuseRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.numLightProbeGrids),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function m(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let A=d[y.type],X;if(A){let O=Xi[A];X=$d.clone(O.uniforms)}else X=y.uniforms;return X}function F(y,A){let X=u.get(A);return X!==void 0?++X.usedTimes:(X=new fx(n,A,y,s),c.push(X),u.set(A,X)),X}function E(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function N(y){o.remove(y)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:T,getUniforms:w,acquireProgram:F,releaseProgram:E,releaseShaderCache:N,programs:c,dispose:I}}function _x(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function gf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _f(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,T,g,m){let w=n[t];return w===void 0?(w={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:m},n[t]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=x,w.materialVariant=a(d),w.groupOrder=T,w.renderOrder=d.renderOrder,w.z=g,w.group=m),t++,w}function l(d,f,x,T,g,m,w){w.reversedDepth===!0&&(g=-g);let F=o(d,f,x,T,g,m);x.transmission>0?i.push(F):x.transparent===!0?s.push(F):e.push(F)}function c(d,f,x,T,g,m){let w=o(d,f,x,T,g,m);x.transmission>0?i.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function u(d,f){e.length>1&&e.sort(d||xx),i.length>1&&i.sort(f||gf),s.length>1&&s.sort(f||gf)}function p(){for(let d=t,f=n.length;d<f;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function yx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new _f,n.set(i,[a])):s>=r.length?(a=new _f,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new qe};break;case"SpotLight":e={position:new $,direction:new $,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new qe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":e={color:new qe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Mx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Sx=0;function bx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wx(n){let t=new vx,e=Mx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let s=new $,r=new fn,a=new fn;function o(c){let u=0,p=0,d=0;for(let tt=0;tt<9;tt++)i.probe[tt].set(0,0,0);let f=0,x=0,T=0,g=0,m=0,w=0,F=0,E=0,N=0,I=0,y=0,A=0,X=0,O=0;c.sort(bx);for(let tt=0,ct=c.length;tt<ct;tt++){let H=c[tt],st=H.color,rt=H.intensity,et=H.distance,mt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ms?mt=H.shadow.map.texture:mt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=st.r*rt,p+=st.g*rt,d+=st.b*rt;else if(H.isLightProbe){for(let ft=0;ft<9;ft++)i.probe[ft].addScaledVector(H.sh.coefficients[ft],rt);O++}else if(H.isSunLight){let ft=t.get(H);if(ft.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ht=H.shadow,Nt=e.get(H);Nt.shadowIntensity=ht.intensity,Nt.shadowBias=ht.bias,Nt.shadowNormalBias=ht.normalBias,Nt.shadowRadius=ht.radius,Nt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),i.sunShadow[x]=Nt,i.sunShadowMap[x]=mt;let oe=ht.getViewportCount();for(let ye=0;ye<oe;ye++)i.sunShadowMatrix[T+ye]=ht.getMatrix(ye),i.sunShadowCascade[T+ye]=ht._cascadeData[ye];T+=oe,x++}i.sun[f]=ft,f++}else if(H.isDirectionalLight){let ft=t.get(H);if(ft.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ht=H.shadow,Nt=e.get(H);Nt.shadowIntensity=ht.intensity,Nt.shadowBias=ht.bias,Nt.shadowNormalBias=ht.normalBias,Nt.shadowRadius=ht.radius,Nt.shadowMapSize=ht.mapSize,i.directionalShadow[g]=Nt,i.directionalShadowMap[g]=mt,i.directionalShadowMatrix[g]=H.shadow.matrix,N++}i.directional[g]=ft,g++}else if(H.isSpotLight){let ft=t.get(H);ft.position.setFromMatrixPosition(H.matrixWorld),ft.color.copy(st).multiplyScalar(rt),ft.distance=et,ft.coneCos=Math.cos(H.angle),ft.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ft.decay=H.decay,i.spot[w]=ft;let ht=H.shadow;if(H.map&&(i.spotLightMap[A]=H.map,A++,ht.updateMatrices(H),H.castShadow&&X++),i.spotLightMatrix[w]=ht.matrix,H.castShadow){let Nt=e.get(H);Nt.shadowIntensity=ht.intensity,Nt.shadowBias=ht.bias,Nt.shadowNormalBias=ht.normalBias,Nt.shadowRadius=ht.radius,Nt.shadowMapSize=ht.mapSize,i.spotShadow[w]=Nt,i.spotShadowMap[w]=mt,y++}w++}else if(H.isRectAreaLight){let ft=t.get(H);ft.color.copy(st).multiplyScalar(rt),ft.halfWidth.set(H.width*.5,0,0),ft.halfHeight.set(0,H.height*.5,0),i.rectArea[F]=ft,F++}else if(H.isPointLight){let ft=t.get(H);if(ft.color.copy(H.color).multiplyScalar(H.intensity),ft.distance=H.distance,ft.decay=H.decay,H.castShadow){let ht=H.shadow,Nt=e.get(H);Nt.shadowIntensity=ht.intensity,Nt.shadowBias=ht.bias,Nt.shadowNormalBias=ht.normalBias,Nt.shadowRadius=ht.radius,Nt.shadowMapSize=ht.mapSize,Nt.shadowCameraNear=ht.camera.near,Nt.shadowCameraFar=ht.camera.far,i.pointShadow[m]=Nt,i.pointShadowMap[m]=mt,i.pointShadowMatrix[m]=H.shadow.matrix,I++}i.point[m]=ft,m++}else if(H.isHemisphereLight){let ft=t.get(H);ft.skyColor.copy(H.color).multiplyScalar(rt),ft.groundColor.copy(H.groundColor).multiplyScalar(rt),i.hemi[E]=ft,E++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;let K=i.hash;(K.sunLength!==f||K.directionalLength!==g||K.pointLength!==m||K.spotLength!==w||K.rectAreaLength!==F||K.hemiLength!==E||K.numSunShadows!==x||K.numDirectionalShadows!==N||K.numPointShadows!==I||K.numSpotShadows!==y||K.numSpotMaps!==A||K.numLightProbes!==O)&&(i.sun.length=f,i.directional.length=g,i.spot.length=w,i.rectArea.length=F,i.point.length=m,i.hemi.length=E,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.directionalShadowMatrix.length=N,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+A-X,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=O,K.sunLength=f,K.directionalLength=g,K.pointLength=m,K.spotLength=w,K.rectAreaLength=F,K.hemiLength=E,K.numSunShadows=x,K.numDirectionalShadows=N,K.numPointShadows=I,K.numSpotShadows=y,K.numSpotMaps=A,K.numLightProbes=O,i.version=Sx++)}function l(c,u){let p=0,d=0,f=0,x=0,T=0,g=0,m=u.matrixWorldInverse;for(let w=0,F=c.length;w<F;w++){let E=c[w];if(E.isSunLight){let N=i.sun[p];N.direction.setFromMatrixPosition(E.matrixWorld),N.direction.transformDirection(m),p++}else if(E.isDirectionalLight){let N=i.directional[d];N.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),d++}else if(E.isSpotLight){let N=i.spot[x];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(m),N.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),x++}else if(E.isRectAreaLight){let N=i.rectArea[T];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){let N=i.point[f];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let N=i.hemi[g];N.direction.setFromMatrixPosition(E.matrixWorld),N.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function xf(n){let t=new wx(n),e=[],i=[],s=[];function r(p){u.camera=p,e.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){i.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xf(n),t.set(s,[o])):r>=a.length?(o=new xf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Rx=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Cx=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],yf=new fn,Ba=new $,Vh=new $;function Px(n,t,e){let i=new ms,s=new ve,r=new ve,a=new Pn,o=new sl,l=new rl,c={},u=e.maxTextureSize,p={[vs]:si,[si]:vs,[Mi]:Mi},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new qn;x.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Un(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(I,y,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===ld&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);let X=n.getRenderTarget(),O=n.getActiveCubeFace(),K=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending(Fs),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let ct=m!==this.type;ct&&y.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(st=>st.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,st=I.length;H<st;H++){let rt=I[H],et=rt.shadow;if(et===void 0){Ue("WebGLShadowMap:",rt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let mt=et.getFrameExtents();s.multiply(mt),r.copy(et.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,et.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,et.mapSize.y=r.y));let ft=n.state.buffers.depth.getReversed();if(et.camera._reversedDepth=ft,et.map===null||ct===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Tr){if(rt.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new di(s.x,s.y,{format:Ms,type:Ii,minFilter:ni,magFilter:ni,generateMipmaps:!1}),et.map.texture.name=rt.name+".shadowMap",et.map.depthTexture=new ts(s.x,s.y,Si),et.map.depthTexture.name=rt.name+".shadowMapDepth",et.map.depthTexture.format=Qi,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Wn,et.map.depthTexture.magFilter=Wn}else rt.isPointLight?(et.map=new Ga(s.x),et.map.depthTexture=new ua(s.x,Pi)):(et.map=new di(s.x,s.y),et.map.depthTexture=new ts(s.x,s.y,Pi)),et.map.depthTexture.name=rt.name+".shadowMap",et.map.depthTexture.format=Qi,this.type===Ns?(et.map.depthTexture.compareFunction=ft?Ah:Eh,et.map.depthTexture.minFilter=ni,et.map.depthTexture.magFilter=ni):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Wn,et.map.depthTexture.magFilter=Wn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ht=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();rt.isPointLight!==!0&&et.updateMatrices(rt,A);let Nt=(et.camera.layers.mask&4294967294)!==0?et.camera.layers:A.layers;for(let oe=0;oe<ht;oe++){let ye=et.getCamera(oe);if(rt.isPointLight){let Tt=et.camera,Jt=et.matrix,Rt=rt.distance||Tt.far;Rt!==Tt.far&&(Tt.far=Rt,Tt.updateProjectionMatrix()),Ba.setFromMatrixPosition(rt.matrixWorld),Tt.position.copy(Ba),Vh.copy(Tt.position),Vh.add(Rx[oe]),Tt.up.copy(Cx[oe]),Tt.lookAt(Vh),Tt.updateMatrixWorld(),Jt.makeTranslation(-Ba.x,-Ba.y,-Ba.z),yf.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(yf,Tt.coordinateSystem,Tt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)n.setRenderTarget(et.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(et.map),n.clear());let Tt=et.getViewport(oe);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),tt.viewport(a)}i=et.getFrustum(oe),E(y,A,ye,rt,Nt,this.type)}et.isPointLightShadow!==!0&&this.type===Tr&&w(et,A),et.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(X,O,K)};function w(I,y){let A=t.update(T);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null?I.mapPass=new di(s.x,s.y,{format:Ms,type:Ii}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(y,null,A,d,T,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(y,null,A,f,T,null)}function F(I,y,A,X){let O=null,K=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(K!==void 0)O=K;else if(O=A.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let tt=O.uuid,ct=y.uuid,H=c[tt];H===void 0&&(H={},c[tt]=H);let st=H[ct];st===void 0&&(st=O.clone(),H[ct]=st,y.addEventListener("dispose",N)),O=st}if(O.visible=y.visible,O.wireframe=y.wireframe,X===Tr?O.side=y.shadowSide!==null?y.shadowSide:y.side:O.side=y.shadowSide!==null?y.shadowSide:p[y.side],O.alphaMap=y.alphaMap,O.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,O.map=y.map,O.clipShadows=y.clipShadows,O.clippingPlanes=y.clippingPlanes,O.clipIntersection=y.clipIntersection,O.displacementMap=y.displacementMap,O.displacementScale=y.displacementScale,O.displacementBias=y.displacementBias,O.wireframeLinewidth=y.wireframeLinewidth,O.linewidth=y.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let tt=n.properties.get(O);tt.light=A}return O}function E(I,y,A,X,O,K){if(I.visible===!1)return;if(I.layers.test(O)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&K===Tr)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);let H=t.update(I),st=I.material;if(Array.isArray(st)){let rt=H.groups;for(let et=0,mt=rt.length;et<mt;et++){let ft=rt[et],ht=st[ft.materialIndex];if(ht&&ht.visible){let Nt=F(I,ht,X,K);I.onBeforeShadow(n,I,y,A,H,Nt,ft),n.renderBufferDirect(A,null,H,Nt,I,ft),I.onAfterShadow(n,I,y,A,H,Nt,ft)}}}else if(st.visible){let rt=F(I,st,X,K);I.onBeforeShadow(n,I,y,A,H,rt,null),n.renderBufferDirect(A,null,H,rt,I,null),I.onAfterShadow(n,I,y,A,H,rt,null)}}let ct=I.children;for(let H=0,st=ct.length;H<st;H++)E(ct[H],y,A,X,O,K)}function N(I){I.target.removeEventListener("dispose",N);for(let A in c){let X=c[A],O=I.target.uuid;O in X&&(X[O].dispose(),delete X[O])}}}function Ix(n,t){function e(){let z=!1,wt=new Pn,xt=null,Mt=new Pn(0,0,0,0);return{setMask:function(Lt){xt!==Lt&&!z&&(n.colorMask(Lt,Lt,Lt,Lt),xt=Lt)},setLocked:function(Lt){z=Lt},setClear:function(Lt,Ht,me,Le,Ut){Ut===!0&&(Lt*=Le,Ht*=Le,me*=Le),wt.set(Lt,Ht,me,Le),Mt.equals(wt)===!1&&(n.clearColor(Lt,Ht,me,Le),Mt.copy(wt))},reset:function(){z=!1,xt=null,Mt.set(-1,0,0,0)}}}function i(){let z=!1,wt=!1,xt=null,Mt=null,Lt=null;return{setReversed:function(Ht){if(wt!==Ht){let me=t.get("EXT_clip_control");Ht?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),wt=Ht;let Le=Lt;Lt=null,this.setClear(Le)}},getReversed:function(){return wt},setTest:function(Ht){Ht?bt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Ht){xt!==Ht&&!z&&(n.depthMask(Ht),xt=Ht)},setFunc:function(Ht){if(wt&&(Ht=Hd[Ht]),Mt!==Ht){switch(Ht){case No:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Ht}},setLocked:function(Ht){z=Ht},setClear:function(Ht){Lt!==Ht&&(Lt=Ht,wt&&(Ht=1-Ht),n.clearDepth(Ht))},reset:function(){z=!1,xt=null,Mt=null,Lt=null,wt=!1}}}function s(){let z=!1,wt=null,xt=null,Mt=null,Lt=null,Ht=null,me=null,Le=null,Ut=null;return{setTest:function(Se){z||(Se?bt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(Se){wt!==Se&&!z&&(n.stencilMask(Se),wt=Se)},setFunc:function(Se,De,Xt){(xt!==Se||Mt!==De||Lt!==Xt)&&(n.stencilFunc(Se,De,Xt),xt=Se,Mt=De,Lt=Xt)},setOp:function(Se,De,Xt){(Ht!==Se||me!==De||Le!==Xt)&&(n.stencilOp(Se,De,Xt),Ht=Se,me=De,Le=Xt)},setLocked:function(Se){z=Se},setClear:function(Se){Ut!==Se&&(n.clearStencil(Se),Ut=Se)},reset:function(){z=!1,wt=null,xt=null,Mt=null,Lt=null,Ht=null,me=null,Le=null,Ut=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,x=[],T=null,g=!1,m=null,w=null,F=null,E=null,N=null,I=null,y=null,A=new qe(0,0,0),X=0,O=!1,K=null,tt=null,ct=null,H=null,st=null,rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,mt=0,ft=n.getParameter(n.VERSION);ft.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(ft)[1]),et=mt>=1):ft.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),et=mt>=2);let ht=null,Nt={},oe=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Tt=new Pn().fromArray(oe),Jt=new Pn().fromArray(ye);function Rt(z,wt,xt,Mt){let Lt=new Uint8Array(4),Ht=n.createTexture();n.bindTexture(z,Ht),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<xt;me++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(wt+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Ht}let Ct={};Ct[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(n.DEPTH_TEST),a.setFunc(dr),Ke(!1),sn(ah),bt(n.CULL_FACE),Ge(Fs);function bt(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function _t(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function jt(z,wt){return d[z]!==wt?(n.bindFramebuffer(z,wt),d[z]=wt,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=wt),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function ne(z,wt){let xt=x,Mt=!1;if(z){xt=f.get(wt),xt===void 0&&(xt=[],f.set(wt,xt));let Lt=z.textures;if(xt.length!==Lt.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Ht=0,me=Lt.length;Ht<me;Ht++)xt[Ht]=n.COLOR_ATTACHMENT0+Ht;xt.length=Lt.length,Mt=!0}}else xt[0]!==n.BACK&&(xt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(xt)}function Ne(z){return T!==z?(n.useProgram(z),T=z,!0):!1}let Oe={[Us]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};Oe[dd]=n.MIN,Oe[fd]=n.MAX;let Ee={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[vd]:n.DST_COLOR,[xd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[yd]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[wd]:n.ONE_MINUS_CONSTANT_COLOR,[Td]:n.CONSTANT_ALPHA,[Ed]:n.ONE_MINUS_CONSTANT_ALPHA};function Ge(z,wt,xt,Mt,Lt,Ht,me,Le,Ut,Se){if(z===Fs){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(bt(n.BLEND),g=!0),z!==cd){if(z!==m||Se!==O){if((w!==Us||N!==Us)&&(n.blendEquation(n.FUNC_ADD),w=Us,N=Us),Se)switch(z){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",z);break}else switch(z){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",z);break}F=null,E=null,I=null,y=null,A.set(0,0,0),X=0,m=z,O=Se}return}Lt=Lt||wt,Ht=Ht||xt,me=me||Mt,(wt!==w||Lt!==N)&&(n.blendEquationSeparate(Oe[wt],Oe[Lt]),w=wt,N=Lt),(xt!==F||Mt!==E||Ht!==I||me!==y)&&(n.blendFuncSeparate(Ee[xt],Ee[Mt],Ee[Ht],Ee[me]),F=xt,E=Mt,I=Ht,y=me),(Le.equals(A)===!1||Ut!==X)&&(n.blendColor(Le.r,Le.g,Le.b,Ut),A.copy(Le),X=Ut),m=z,O=!1}function pn(z,wt){z.side===Mi?_t(n.CULL_FACE):bt(n.CULL_FACE);let xt=z.side===si;wt&&(xt=!xt),Ke(xt),z.blending===Er&&z.transparent===!1?Ge(Fs):Ge(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Mt=z.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Sn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?bt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){K!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),K=z)}function sn(z){z!==ad?(bt(n.CULL_FACE),z!==tt&&(z===ah?n.cullFace(n.BACK):z===od?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),tt=z}function Dn(z){z!==ct&&(et&&n.lineWidth(z),ct=z)}function Sn(z,wt,xt){z?(bt(n.POLYGON_OFFSET_FILL),(H!==wt||st!==xt)&&(H=wt,st=xt,a.getReversed()&&(wt=-wt,xt=-xt),n.polygonOffset(wt,xt))):_t(n.POLYGON_OFFSET_FILL)}function Cn(z){z?bt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function En(z){z===void 0&&(z=n.TEXTURE0+rt-1),ht!==z&&(n.activeTexture(z),ht=z)}function Qe(z,wt,xt){xt===void 0&&(ht===null?xt=n.TEXTURE0+rt-1:xt=ht);let Mt=Nt[xt];Mt===void 0&&(Mt={type:void 0,texture:void 0},Nt[xt]=Mt),(Mt.type!==z||Mt.texture!==wt)&&(ht!==xt&&(n.activeTexture(xt),ht=xt),n.bindTexture(z,wt||Ct[z]),Mt.type=z,Mt.texture=wt)}function G(){let z=Nt[ht];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Fe(){try{n.compressedTexImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function fe(){try{n.compressedTexImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function $t(){try{n.texSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function j(){try{n.texSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function He(){try{n.compressedTexSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function kt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function de(){try{n.texStorage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function L(){try{n.texStorage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function M(){try{n.texImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function Z(){try{n.texImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function Et(z){return p[z]!==void 0?p[z]:n.getParameter(z)}function nt(z,wt){p[z]!==wt&&(n.pixelStorei(z,wt),p[z]=wt)}function at(z){Tt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Tt.copy(z))}function Ft(z){Jt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Jt.copy(z))}function vt(z,wt){let xt=c.get(wt);xt===void 0&&(xt=new WeakMap,c.set(wt,xt));let Mt=xt.get(z);Mt===void 0&&(Mt=n.getUniformBlockIndex(wt,z.name),n.uniformBlockBinding(wt,Mt,Mt),xt.set(z,Mt))}function St(z,wt,xt){let Lt=c.get(wt).get(z);l[Lt]!==xt&&(n.bindBufferBase(n.UNIFORM_BUFFER,Lt,xt),l[Lt]=xt)}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},ht=null,Nt={},d={},l={},f=new WeakMap,x=[],T=null,g=!1,m=null,w=null,F=null,E=null,N=null,I=null,y=null,A=new qe(0,0,0),X=0,O=!1,K=null,tt=null,ct=null,H=null,st=null,Tt.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:_t,bindFramebuffer:jt,drawBuffers:ne,useProgram:Ne,setBlending:Ge,setMaterial:pn,setFlipSided:Ke,setCullFace:sn,setLineWidth:Dn,setPolygonOffset:Sn,setScissorTest:Cn,activeTexture:En,bindTexture:Qe,unbindTexture:G,compressedTexImage2D:Fe,compressedTexImage3D:fe,texImage2D:M,texImage3D:Z,pixelStorei:nt,getParameter:Et,updateUBOMapping:vt,uniformBlockBinding:St,texStorage2D:de,texStorage3D:L,texSubImage2D:$t,texSubImage3D:j,compressedTexSubImage2D:He,compressedTexSubImage3D:kt,scissor:at,viewport:Ft,reset:Yt}}function Lx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,p=new Set,d,f=new WeakMap,x=new Set,T=new FinalizationRegistry(L=>x.delete(L)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,M){return g?new OffscreenCanvas(L,M):Qr("canvas")}function w(L,M,Z){let Et=1,nt=de(L);if((nt.width>Z||nt.height>Z)&&(Et=Z/Math.max(nt.width,nt.height)),Et<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let at=Math.floor(Et*nt.width),Ft=Math.floor(Et*nt.height);d===void 0&&(d=m(at,Ft));let vt=M?m(at,Ft):d;return vt.width=at,vt.height=Ft,vt.getContext("2d").drawImage(L,0,0,at,Ft),Ue("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+at+"x"+Ft+")."),vt}else return"data"in L&&Ue("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function F(L){return L.generateMipmaps}function E(L){n.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(L,M,Z,Et,nt,at=!1){if(L!==null){if(n[L]!==void 0)return n[L];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ft;Et&&(Ft=t.get("EXT_texture_norm16"),Ft||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=M;if(M===n.RED&&(Z===n.FLOAT&&(vt=n.R32F),Z===n.HALF_FLOAT&&(vt=n.R16F),Z===n.UNSIGNED_BYTE&&(vt=n.R8),Z===n.UNSIGNED_SHORT&&Ft&&(vt=Ft.R16_EXT),Z===n.SHORT&&Ft&&(vt=Ft.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(vt=n.R8UI),Z===n.UNSIGNED_SHORT&&(vt=n.R16UI),Z===n.UNSIGNED_INT&&(vt=n.R32UI),Z===n.BYTE&&(vt=n.R8I),Z===n.SHORT&&(vt=n.R16I),Z===n.INT&&(vt=n.R32I)),M===n.RG&&(Z===n.FLOAT&&(vt=n.RG32F),Z===n.HALF_FLOAT&&(vt=n.RG16F),Z===n.UNSIGNED_BYTE&&(vt=n.RG8),Z===n.UNSIGNED_SHORT&&Ft&&(vt=Ft.RG16_EXT),Z===n.SHORT&&Ft&&(vt=Ft.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(vt=n.RG8UI),Z===n.UNSIGNED_SHORT&&(vt=n.RG16UI),Z===n.UNSIGNED_INT&&(vt=n.RG32UI),Z===n.BYTE&&(vt=n.RG8I),Z===n.SHORT&&(vt=n.RG16I),Z===n.INT&&(vt=n.RG32I)),M===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(vt=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(vt=n.RGB16UI),Z===n.UNSIGNED_INT&&(vt=n.RGB32UI),Z===n.BYTE&&(vt=n.RGB8I),Z===n.SHORT&&(vt=n.RGB16I),Z===n.INT&&(vt=n.RGB32I)),M===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(vt=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(vt=n.RGBA16UI),Z===n.UNSIGNED_INT&&(vt=n.RGBA32UI),Z===n.BYTE&&(vt=n.RGBA8I),Z===n.SHORT&&(vt=n.RGBA16I),Z===n.INT&&(vt=n.RGBA32I)),M===n.RGB&&(Z===n.UNSIGNED_SHORT&&Ft&&(vt=Ft.RGB16_EXT),Z===n.SHORT&&Ft&&(vt=Ft.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(vt=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(vt=n.R11F_G11F_B10F)),M===n.RGBA){let St=at?Jr:cn.getTransfer(nt);Z===n.FLOAT&&(vt=n.RGBA32F),Z===n.HALF_FLOAT&&(vt=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(vt=St===vn?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Ft&&(vt=Ft.RGBA16_EXT),Z===n.SHORT&&Ft&&(vt=Ft.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(vt=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(vt=n.RGB5_A1)}return(vt===n.R16F||vt===n.R32F||vt===n.RG16F||vt===n.RG32F||vt===n.RGBA16F||vt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function y(L,M){let Z;return L?M===null||M===Pi||M===ks?Z=n.DEPTH24_STENCIL8:M===Si?Z=n.DEPTH32F_STENCIL8:M===Rr&&(Z=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===ks?Z=n.DEPTH_COMPONENT24:M===Si?Z=n.DEPTH_COMPONENT32F:M===Rr&&(Z=n.DEPTH_COMPONENT16),Z}function A(L,M){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wn&&L.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function X(L){let M=new WeakRef(L);i.get(L).__ref=M,x.add(M),T.register(L,M,M)}function O(L){let M=i.get(L).__ref;M!==void 0&&(x.delete(M),T.unregister(M))}function K(L){ct(L.target)}function tt(L){H(L.target)}function ct(L){L.removeEventListener("dispose",K),O(L),rt(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&p.delete(L)}function H(L){L.removeEventListener("dispose",tt),O(L),mt(L)}function st(){for(let L of x){let M=L.deref();M!==void 0&&(M.isRenderTarget===!0?H(M):ct(M))}x.clear(),p.clear()}function rt(L){let M=i.get(L);if(M.__webglInit===void 0)return;let Z=L.source,Et=f.get(Z);if(Et){let nt=Et[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&et(L),Object.keys(Et).length===0&&f.delete(Z)}i.remove(L)}function et(L){let M=i.get(L);n.deleteTexture(M.__webglTexture);let Z=L.source,Et=f.get(Z);delete Et[M.__cacheKey],a.memory.textures--}function mt(L){let M=i.get(L);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&ct(Z),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let at=0;at<M.__webglFramebuffer[nt].length;at++)n.deleteFramebuffer(M.__webglFramebuffer[nt][at]);else n.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)n.deleteFramebuffer(M.__webglFramebuffer[nt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Et=L.textures;for(let nt=0,at=Et.length;nt<at;nt++){let Ft=i.get(Et[nt]);Ft.__webglTexture&&(n.deleteTexture(Ft.__webglTexture),a.memory.textures--),i.remove(Et[nt])}i.remove(L)}let ft=0;function ht(){ft=0}function Nt(){return ft}function oe(L){ft=L}function ye(){let L=ft;return L>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),ft+=1,L}function Tt(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.mipmapsAutoUpdate),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Jt(L,M){let Z=i.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let Et=L.image;if(Et===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{pn(Z,L,M);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+M)}function Rt(L,M){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){pn(Z,L,M);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+M)}function Ct(L,M){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){pn(Z,L,M);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+M)}function bt(L,M){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Ke(Z,L,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+M)}let _t={[Go]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},jt={[Wn]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ne={[Dd]:n.NEVER,[Rh]:n.ALWAYS,[Nd]:n.LESS,[Eh]:n.LEQUAL,[Fd]:n.EQUAL,[Ah]:n.GEQUAL,[Ud]:n.GREATER,[Od]:n.NOTEQUAL};function Ne(L,M){if(M.type===Si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===Ml||M.magFilter===La||M.magFilter===es||M.minFilter===ni||M.minFilter===Ml||M.minFilter===La||M.minFilter===es)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,_t[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,_t[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,_t[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,jt[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,jt[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==La&&M.minFilter!==es||M.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(L,M){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",K),X(M));let Et=M.source,nt=f.get(Et);nt===void 0&&(nt={},f.set(Et,nt));let at=Tt(M);if(at!==L.__cacheKey){nt[at]===void 0&&(nt[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),nt[at].usedTimes++;let Ft=nt[L.__cacheKey];Ft!==void 0&&(nt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&et(M)),L.__cacheKey=at,L.__webglTexture=nt[at].texture}return Z}function Ee(L,M,Z){return Math.floor(Math.floor(L/Z)/M)}function Ge(L,M,Z,Et){let at=L.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Z,Et,M.data);else{at.sort((z,wt)=>z.start-wt.start);let Ft=0;for(let z=1;z<at.length;z++){let wt=at[Ft],xt=at[z],Mt=wt.start+wt.count,Lt=Ee(xt.start,M.width,4),Ht=Ee(wt.start,M.width,4);xt.start<=Mt+1&&Lt===Ht&&Ee(xt.start+xt.count-1,M.width,4)===Lt?wt.count=Math.max(wt.count,xt.start+xt.count-wt.start):(++Ft,at[Ft]=xt)}at.length=Ft+1;let vt=e.getParameter(n.UNPACK_ROW_LENGTH),St=e.getParameter(n.UNPACK_SKIP_PIXELS),Yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let z=0,wt=at.length;z<wt;z++){let xt=at[z],Mt=Math.floor(xt.start/4),Lt=Math.ceil(xt.count/4),Ht=Mt%M.width,me=Math.floor(Mt/M.width),Le=Lt,Ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,me),e.texSubImage2D(n.TEXTURE_2D,0,Ht,me,Le,Ut,Z,Et,M.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,vt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,Yt)}}function pn(L,M,Z){let Et=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Et=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Et=n.TEXTURE_3D);let nt=Oe(L,M),at=M.source;e.bindTexture(Et,L.__webglTexture,n.TEXTURE0+Z);let Ft=i.get(at);if(at.version!==Ft.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Ut=cn.getPrimaries(cn.workingColorSpace),Se=M.colorSpace===is?null:cn.getPrimaries(M.colorSpace),De=M.colorSpace===is||Ut===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let St=w(M.image,!1,s.maxTextureSize);St=kt(M,St);let Yt=r.convert(M.format,M.colorSpace),z=r.convert(M.type),wt=I(M.internalFormat,Yt,z,M.normalized,M.colorSpace,M.isVideoTexture);Ne(Et,M);let xt,Mt=M.mipmaps,Lt=M.isVideoTexture!==!0,Ht=Ft.__version===void 0||nt===!0,me=at.dataReady,Le=A(M,St);if(M.isDepthTexture)wt=y(M.format===ns,M.type),Ht&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,wt,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,wt,St.width,St.height,0,Yt,z,null));else if(M.isDataTexture)if(Mt.length>0){Lt&&Ht&&e.texStorage2D(n.TEXTURE_2D,Le,wt,Mt[0].width,Mt[0].height);for(let Ut=0,Se=Mt.length;Ut<Se;Ut++)xt=Mt[Ut],Lt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,xt.width,xt.height,Yt,z,xt.data):e.texImage2D(n.TEXTURE_2D,Ut,wt,xt.width,xt.height,0,Yt,z,xt.data);M.generateMipmaps=!1}else Lt?(Ht&&e.texStorage2D(n.TEXTURE_2D,Le,wt,St.width,St.height),me&&Ge(M,St,Yt,z)):e.texImage2D(n.TEXTURE_2D,0,wt,St.width,St.height,0,Yt,z,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Lt&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Le,wt,Mt[0].width,Mt[0].height,St.depth);for(let Ut=0,Se=Mt.length;Ut<Se;Ut++)if(xt=Mt[Ut],M.format!==Li)if(Yt!==null)if(Lt){if(me)if(M.layerUpdates.size>0){let De=Uh(xt.width,xt.height,M.format,M.type);for(let Xt of M.layerUpdates){let C=xt.data.subarray(Xt*De/xt.data.BYTES_PER_ELEMENT,(Xt+1)*De/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,Xt,xt.width,xt.height,1,Yt,C)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,xt.width,xt.height,St.depth,Yt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ut,wt,xt.width,xt.height,St.depth,0,xt.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?me&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,xt.width,xt.height,St.depth,Yt,z,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ut,wt,xt.width,xt.height,St.depth,0,Yt,z,xt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Lt&&Ht&&e.texStorage2D(n.TEXTURE_2D,Le,wt,Mt[0].width,Mt[0].height);for(let Ut=0,Se=Mt.length;Ut<Se;Ut++)xt=Mt[Ut],M.format!==Li?Yt!==null?Lt?me&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ut,0,0,xt.width,xt.height,Yt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,Ut,wt,xt.width,xt.height,0,xt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,xt.width,xt.height,Yt,z,xt.data):e.texImage2D(n.TEXTURE_2D,Ut,wt,xt.width,xt.height,0,Yt,z,xt.data)}else if(M.isDataArrayTexture)if(Lt){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Le,wt,St.width,St.height,St.depth),me)if(M.layerUpdates.size>0){let Ut=Uh(St.width,St.height,M.format,M.type);for(let Se of M.layerUpdates){let De=St.data.subarray(Se*Ut/St.data.BYTES_PER_ELEMENT,(Se+1)*Ut/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,St.width,St.height,1,Yt,z,De)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Yt,z,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,St.width,St.height,St.depth,0,Yt,z,St.data);else if(M.isData3DTexture)Lt?(Ht&&e.texStorage3D(n.TEXTURE_3D,Le,wt,St.width,St.height,St.depth),me&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Yt,z,St.data)):e.texImage3D(n.TEXTURE_3D,0,wt,St.width,St.height,St.depth,0,Yt,z,St.data);else if(M.isFramebufferTexture){if(Ht)if(Lt)e.texStorage2D(n.TEXTURE_2D,Le,wt,St.width,St.height);else{let Ut=St.width,Se=St.height;for(let De=0;De<Le;De++)e.texImage2D(n.TEXTURE_2D,De,wt,Ut,Se,0,Yt,z,null),Ut>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let Ut=n.canvas;if(Ut.hasAttribute("layoutsubtree")||Ut.setAttribute("layoutsubtree","true"),St.parentNode!==Ut){Ut.appendChild(St),p.add(M),Ut.onpaint=Se=>{let De=Se.changedElements;for(let Xt of p)De.includes(Xt.image)&&(Xt.needsUpdate=!0)},Ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,St);else{let De=n.RGBA,Xt=n.RGBA,C=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,Xt,C,St)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Lt&&Ht){let Ut=de(Mt[0]);e.texStorage2D(n.TEXTURE_2D,Le,wt,Ut.width,Ut.height)}for(let Ut=0,Se=Mt.length;Ut<Se;Ut++)xt=Mt[Ut],Lt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,Yt,z,xt):e.texImage2D(n.TEXTURE_2D,Ut,wt,Yt,z,xt);M.generateMipmaps=!1}else if(Lt){if(Ht){let Ut=de(St);e.texStorage2D(n.TEXTURE_2D,Le,wt,Ut.width,Ut.height)}me&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,z,St)}else e.texImage2D(n.TEXTURE_2D,0,wt,Yt,z,St);F(M)&&M.mipmapsAutoUpdate===!0&&E(Et),Ft.__version=at.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ke(L,M,Z){if(M.image.length!==6)return;let Et=Oe(L,M),nt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);let at=i.get(nt);if(nt.version!==at.__version||Et===!0){e.activeTexture(n.TEXTURE0+Z);let Ft=cn.getPrimaries(cn.workingColorSpace),vt=M.colorSpace===is?null:cn.getPrimaries(M.colorSpace),St=M.colorSpace===is||Ft===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,z=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let Xt=0;Xt<6;Xt++)!Yt&&!z?wt[Xt]=w(M.image[Xt],!0,s.maxCubemapSize):wt[Xt]=z?M.image[Xt].image:M.image[Xt],wt[Xt]=kt(M,wt[Xt]);let xt=wt[0],Mt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Ht=I(M.internalFormat,Mt,Lt,M.normalized,M.colorSpace),me=M.isVideoTexture!==!0,Le=at.__version===void 0||Et===!0,Ut=nt.dataReady,Se=A(M,xt);Ne(n.TEXTURE_CUBE_MAP,M);let De;if(M.isDepthTexture){if(Ht=y(M.format===ns,M.type),Le)if(me)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ht,xt.width,xt.height);else for(let Xt=0;Xt<6;Xt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,xt.width,xt.height,0,Mt,Lt,null)}else if(Yt){me&&Le&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ht,xt.width,xt.height);for(let Xt=0;Xt<6;Xt++){De=wt[Xt].mipmaps;for(let C=0;C<De.length;C++){let _=De[C];M.format!==Li?Mt!==null?me?Ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C,0,0,_.width,_.height,Mt,_.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C,Ht,_.width,_.height,0,_.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C,0,0,_.width,_.height,Mt,Lt,_.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C,Ht,_.width,_.height,0,Mt,Lt,_.data)}}}else{if(De=M.mipmaps,me&&Le){De.length>0&&Se++;let Xt=de(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ht,Xt.width,Xt.height)}for(let Xt=0;Xt<6;Xt++)if(z){me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,wt[Xt].width,wt[Xt].height,Mt,Lt,wt[Xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,wt[Xt].width,wt[Xt].height,0,Mt,Lt,wt[Xt].data);for(let C=0;C<De.length;C++){let B=De[C].image[Xt].image;me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C+1,0,0,B.width,B.height,Mt,Lt,B.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C+1,Ht,B.width,B.height,0,Mt,Lt,B.data)}}else{me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,Mt,Lt,wt[Xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,Mt,Lt,wt[Xt]);for(let C=0;C<De.length;C++){let _=De[C];me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C+1,0,0,Mt,Lt,_.image[Xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,C+1,Ht,Mt,Lt,_.image[Xt])}}}F(M)&&M.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),at.__version=nt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function sn(L,M,Z,Et,nt,at){let Ft=r.convert(Z.format,Z.colorSpace),vt=r.convert(Z.type),St=I(Z.internalFormat,Ft,vt,Z.normalized,Z.colorSpace),Yt=i.get(M),z=i.get(Z);if(z.__renderTarget=M,!Yt.__hasExternalTextures){let wt=Math.max(1,M.width>>at),xt=Math.max(1,M.height>>at);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,St,wt,xt,M.depth,0,Ft,vt,null):e.texImage2D(nt,at,St,wt,xt,0,Ft,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Et,nt,z.__webglTexture,0,$t(M)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Et,nt,z.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dn(L,M,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){let Et=M.depthTexture,nt=Et&&Et.isDepthTexture?Et.type:null,at=y(M.stencilBuffer,nt),Ft=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;j(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(M),at,M.width,M.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(M),at,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,L)}else{let Et=M.textures;for(let nt=0;nt<Et.length;nt++){let at=Et[nt],Ft=r.convert(at.format,at.colorSpace),vt=r.convert(at.type),St=I(at.internalFormat,Ft,vt,at.normalized,at.colorSpace);j(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(M),St,M.width,M.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(M),St,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,St,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Sn(L,M,Z){let Et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(M.depthTexture);nt.__renderTarget=M;let at=Et?M.depthTexture.image[0]:M.depthTexture.image;(!nt.__webglTexture||at.width!==M.width||at.height!==M.height)&&(at.width=M.width,at.height=M.height,M.depthTexture.needsUpdate=!0),Et?bt(M.depthTexture,0):Jt(M.depthTexture,0);let Ft=nt.__webglTexture,vt=$t(M),St=Et?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Yt=M.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Qi)j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Yt,St,Ft,0,vt):n.framebufferTexture2D(n.FRAMEBUFFER,Yt,St,Ft,0);else if(M.depthTexture.format===ns)j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Yt,St,Ft,0,vt):n.framebufferTexture2D(n.FRAMEBUFFER,Yt,St,Ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Cn(L){let M=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let Et=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Et){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Et.removeEventListener("dispose",nt)};Et.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=Et}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let Et=0;Et<6;Et++)Sn(M.__webglFramebuffer[Et],L,Et);else L.texture.mipmaps.length>0?Sn(M.__webglFramebuffer[0],L,0):Sn(M.__webglFramebuffer,L,0);else if(Z){M.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Et]),M.__webglDepthbuffer[Et]===void 0)M.__webglDepthbuffer[Et]=n.createRenderbuffer(),Dn(M.__webglDepthbuffer[Et],L,!1);else{let nt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[Et];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,at)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Dn(M.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function En(L,M,Z){let Et=i.get(L);M!==void 0&&sn(Et.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Cn(L)}function Qe(L){let M=L.texture,Z=i.get(L),Et=i.get(M);L.addEventListener("dispose",tt),X(L);let nt=L.textures,at=L.isWebGLCubeRenderTarget===!0,Ft=nt.length>1;if(Ft||(Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture()),Et.__version=M.version,a.memory.textures++),at){Z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps.length>0){Z.__webglFramebuffer[vt]=[];for(let St=0;St<M.mipmaps.length;St++)Z.__webglFramebuffer[vt][St]=n.createFramebuffer()}else Z.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)Z.__webglFramebuffer[vt]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let vt=0,St=nt.length;vt<St;vt++){let Yt=i.get(nt[vt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&j(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let vt=0;vt<nt.length;vt++){let St=nt[vt];Z.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[vt]);let Yt=r.convert(St.format,St.colorSpace),z=r.convert(St.type),wt=I(St.internalFormat,Yt,z,St.normalized,St.colorSpace,L.isXRRenderTarget===!0),xt=$t(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,wt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Dn(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,Et.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)sn(Z.__webglFramebuffer[vt][St],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else sn(Z.__webglFramebuffer[vt],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);F(M)?E(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(Ft){for(let vt=0,St=nt.length;vt<St;vt++){let Yt=nt[vt],z=i.get(Yt),wt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,z.__webglTexture),Ne(wt,Yt),sn(Z.__webglFramebuffer,L,Yt,n.COLOR_ATTACHMENT0+vt,wt,0),F(Yt)&&E(wt)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Et.__webglTexture),Ne(vt,M),M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)sn(Z.__webglFramebuffer[St],L,M,n.COLOR_ATTACHMENT0,vt,St);else sn(Z.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,vt,0);F(M)?E(vt):M.mipmaps.length>0&&n.texParameteri(vt,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Cn(L)}function G(L){let M=L.textures;for(let Z=0,Et=M.length;Z<Et;Z++){let nt=M[Z];if(F(nt)&&nt.mipmapsAutoUpdate===!0){let at=N(L),Ft=i.get(nt).__webglTexture;e.bindTexture(at,Ft),E(at),e.unbindTexture()}}}let Fe=[];function fe(L){if(L.samples>0){if(j(L)===!1){let M=L.textures,Z=L.width,Et=L.height,nt=n.COLOR_BUFFER_BIT,at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(L),vt=M.length>1;if(vt)for(let Yt=0;Yt<M.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Yt=0;Yt<M.length;Yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);let z=i.get(M[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,Z,Et,0,0,Z,Et,nt,n.NEAREST),l===!0&&(Fe.length=0,Fe.push(n.COLOR_ATTACHMENT0+Yt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Fe.push(at),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Yt=0;Yt<M.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);let z=i.get(M[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,z,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function $t(L){return Math.min(s.maxSamples,L.samples)}function j(L){let M=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(L){let M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function kt(L,M){let Z=L.colorSpace,Et=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==jr&&Z!==is&&(cn.getTransfer(Z)===vn?(Et!==Li||nt!==ri)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",Z)),M}function de(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=ye,this.resetTextureUnits=ht,this.getTextureUnits=Nt,this.setTextureUnits=oe,this.setTexture2D=Jt,this.setTexture2DArray=Rt,this.setTexture3D=Ct,this.setTextureCube=bt,this.rebindTextures=En,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Cn,this.setupFrameBufferTexture=sn,this.useMultisampledRTT=j,this.dispose=st}function Dx(n,t){function e(i,s=is){let r,a=cn.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===Mh)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Th)return n.RGB;if(i===Li)return n.RGBA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Tl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Ms)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Da||i===Na||i===Fa||i===Ua)if(a===vn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Il||i===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Nl||i===Fl||i===Ul||i===Ol||i===Oa||i===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Nl)return a===vn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Kl||i===jl||i===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===vn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===tc||i===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===vn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===ka||i===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new da(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Hi({vertexShader:Nx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends ki{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,x=null,T=typeof XRWebGLBinding<"u",g=new Kh,m={},w=e.getContextAttributes(),F=null,E=null,N=[],I=[],y=new ve,A=null,X=null,O=new ei;O.viewport=new Pn;let K=new ei;K.viewport=new Pn;let tt=[O,K],ct=new _l,H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Tt){let Jt=N[Tt];return Jt===void 0&&(Jt=new _r,N[Tt]=Jt),Jt.getTargetRaySpace()},this.getControllerGrip=function(Tt){let Jt=N[Tt];return Jt===void 0&&(Jt=new _r,N[Tt]=Jt),Jt.getGripSpace()},this.getHand=function(Tt){let Jt=N[Tt];return Jt===void 0&&(Jt=new _r,N[Tt]=Jt),Jt.getHandSpace()};function rt(Tt){let Jt=I.indexOf(Tt.inputSource);if(Jt===-1)return;let Rt=N[Jt];Rt!==void 0&&(Rt.update(Tt.inputSource,Tt.frame,c||a),Rt.dispatchEvent({type:Tt.type,data:Tt.inputSource}))}function et(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",mt);for(let Tt=0;Tt<N.length;Tt++){let Jt=I[Tt];Jt!==null&&(I[Tt]=null,N[Tt].disconnect(Jt))}H=null,st=null,g.reset();for(let Tt in m)delete m[Tt];if(t.setRenderTarget(F),f=null,d=null,p=null,s=null,E=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(y.width,y.height,!1),X!==null){let Tt=X.camera;Tt.fov=X.fov,Tt.zoom=X.zoom,Tt.updateProjectionMatrix(),X=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Tt){r=Tt,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Tt){o=Tt,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Tt){c=Tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Tt){if(s=Tt,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",et),s.addEventListener("inputsourceschange",mt),w.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(y),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ct=null,bt=null;w.depth&&(bt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=w.stencil?ns:Qi,Ct=w.stencil?ks:Pi);let _t={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new di(d.textureWidth,d.textureHeight,{format:Li,type:ri,depthTexture:new ts(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new di(f.framebufferWidth,f.framebufferHeight,{format:Li,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function mt(Tt){for(let Jt=0;Jt<Tt.removed.length;Jt++){let Rt=Tt.removed[Jt],Ct=I.indexOf(Rt);Ct>=0&&(I[Ct]=null,N[Ct].disconnect(Rt))}for(let Jt=0;Jt<Tt.added.length;Jt++){let Rt=Tt.added[Jt],Ct=I.indexOf(Rt);if(Ct===-1){for(let _t=0;_t<N.length;_t++)if(_t>=I.length){I.push(Rt),Ct=_t;break}else if(I[_t]===null){I[_t]=Rt,Ct=_t;break}if(Ct===-1)break}let bt=N[Ct];bt&&bt.connect(Rt)}}function ft(Tt,Jt){Jt===null?Tt.matrixWorld.copy(Tt.matrix):Tt.matrixWorld.multiplyMatrices(Jt.matrixWorld,Tt.matrix),Tt.matrixWorldInverse.copy(Tt.matrixWorld).invert()}this.updateCamera=function(Tt){if(s===null)return;let Jt=Tt.near,Rt=Tt.far;g.texture!==null&&(g.depthNear>0&&(Jt=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),ct.near=K.near=O.near=Jt,ct.far=K.far=O.far=Rt,(H!==ct.near||st!==ct.far)&&(s.updateRenderState({depthNear:ct.near,depthFar:ct.far}),H=ct.near,st=ct.far),ct.layers.mask=Tt.layers.mask|6,O.layers.mask=ct.layers.mask&-5,K.layers.mask=ct.layers.mask&-3;let Ct=Tt.parent,bt=ct.cameras;ft(ct,Ct);for(let _t=0;_t<bt.length;_t++)ft(bt[_t],Ct);ct.projectionMatrix.copy(O.projectionMatrix),ct.projectionMatrixInverse.copy(O.projectionMatrixInverse),X===null&&Tt.isPerspectiveCamera&&(X={camera:Tt,fov:Tt.fov,zoom:Tt.zoom}),ht(Tt,ct,Ct)};function ht(Tt,Jt,Rt){Rt===null?Tt.matrix.copy(Jt.matrixWorld):(Tt.matrix.copy(Rt.matrixWorld),Tt.matrix.invert(),Tt.matrix.multiply(Jt.matrixWorld)),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.updateMatrixWorld(!0),Tt.projectionMatrix.copy(Jt.projectionMatrix),Tt.projectionMatrixInverse.copy(Jt.projectionMatrixInverse),Tt.isPerspectiveCamera&&(Tt.fov=Wo*2*Math.atan(1/Tt.projectionMatrix.elements[5]),Tt.zoom=1)}this.getCamera=function(){return ct},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Tt){l=Tt,d!==null&&(d.fixedFoveation=Tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ct)},this.getCameraTexture=function(Tt){return m[Tt]};let Nt=null;function oe(Tt,Jt){if(u=Jt.getViewerPose(c||a),x=Jt,u!==null){let Rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Ct=!1;Rt.length!==ct.cameras.length&&(ct.cameras.length=0,Ct=!0);for(let ne=0;ne<Rt.length;ne++){let Ne=Rt[ne],Oe=null;if(f!==null)Oe=f.getViewport(Ne);else{let Ge=p.getViewSubImage(d,Ne);Oe=Ge.viewport,ne===0&&(t.setRenderTargetTextures(E,Ge.colorTexture,Ge.depthStencilTexture),t.setRenderTarget(E))}let Ee=tt[ne];Ee===void 0&&(Ee=new ei,Ee.layers.enable(ne),Ee.viewport=new Pn,tt[ne]=Ee),Ee.matrix.fromArray(Ne.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ne.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ne===0&&(ct.matrix.copy(Ee.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale)),Ct===!0&&ct.cameras.push(Ee)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){p=i.getBinding();let ne=p.getDepthInformation(Rt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(bt&&bt.includes("camera-access")&&T){t.state.unbindTexture(),p=i.getBinding();for(let ne=0;ne<Rt.length;ne++){let Ne=Rt[ne].camera;if(Ne){let Oe=m[Ne];Oe||(Oe=new da,m[Ne]=Oe);let Ee=p.getCameraImage(Ne);Oe.sourceTexture=Ee}}}}for(let Rt=0;Rt<N.length;Rt++){let Ct=I[Rt],bt=N[Rt];Ct!==null&&bt!==void 0&&bt.update(Ct,Jt,c||a)}Nt&&Nt(Tt,Jt),Jt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Jt}),x=null}let ye=new vf;ye.setAnimationLoop(oe),this.setAnimationLoop=function(Tt){Nt=Tt},this.dispose=function(){}}},Ux=new fn,Pf=new Xe;Pf.set(-1,0,0,0,1,0,0,0,1);function Ox(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Dh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,F,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),T(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,w,F):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===si&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===si&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=t.get(m),F=w.envMap,E=w.envMapRotation;F&&(g.envMap.value=F,g.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(E)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,F){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=F*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function T(g,m){let w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kx(n,t,e,i){let s={},r={};function a(w,F){let E=F.program;i.uniformBlockBinding(w,E,s[w.id])}function o(w,F){let E=s[w.id];E===void 0&&(x(w),E=l(w),s[w.id]=E,w.addEventListener("dispose",g));let N=F.program;i.updateUBOMapping(w,N);let I=t.render.frame;r[w.id]!==I&&(c(w),r[w.id]=I)}function l(w){let F=n.createBuffer(),E=w.__size,N=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,F),n.bufferData(n.UNIFORM_BUFFER,E,N),n.bindBuffer(n.UNIFORM_BUFFER,null),F}function c(w){let F=s[w.id],E=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,F);for(let I=0,y=E.length;I<y;I++){let A=E[I];if(Array.isArray(A))for(let X=0,O=A.length;X<O;X++)u(A[X],I,X,N);else u(A,I,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(w,F,E,N){if(d(w,F,E,N)===!0){let I=w.__offset,y=w.value;if(Array.isArray(y)){let A=0;for(let X=0;X<y.length;X++){let O=y[X],K=T(O,!0);p(O,w.__data,A),A+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}function p(w,F,E){typeof w=="number"||typeof w=="boolean"?F[E]=w:w.isMatrix3?(F[E]=w.elements[0],F[E+1]=w.elements[1],F[E+2]=w.elements[2],F[E+3]=0,F[E+4]=w.elements[3],F[E+5]=w.elements[4],F[E+6]=w.elements[5],F[E+7]=0,F[E+8]=w.elements[6],F[E+9]=w.elements[7],F[E+10]=w.elements[8],F[E+11]=0):ArrayBuffer.isView(w)?F.set(w.subarray(0,F.length-E),E):w.toArray(F,E)}function d(w,F,E,N){let I=w.value,y=F+"_"+E;if(Array.isArray(I)){N[y]===void 0&&(N[y]=[]);let A=N[y],X=!1;for(let O=0;O<I.length;O++)f(I[O],A,O)===!0&&(X=!0);return X}return f(I,N,y)}function f(w,F,E){if(F[E]===void 0)return typeof w=="number"||typeof w=="boolean"?F[E]=w:ArrayBuffer.isView(w)?F[E]=w.slice():F[E]=w.clone(),!0;{let N=F[E];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return F[E]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(N.equals(w)===!1)return N.copy(w),!0}}return!1}function x(w){let F=w.uniforms,E=0,N=16;for(let y=0,A=F.length;y<A;y++){let X=Array.isArray(F[y])?F[y]:[F[y]];for(let O=0,K=X.length;O<K;O++){let tt=X[O],ct=Array.isArray(tt.value)?tt.value:[tt.value],H=Array.isArray(F[y])||Array.isArray(tt.value),st=E;for(let et=0,mt=ct.length;et<mt;et++){let ft=ct[et],ht=T(ft,H),Nt=E%N,oe=Nt%ht.boundary,ye=Nt+oe;E+=oe,ye!==0&&N-ye<ht.storage&&(E+=N-ye),et===0&&(st=E),E+=ht.storage}let rt=tt.type==="int"?Int32Array:tt.type==="uint"?Uint32Array:Float32Array;tt.__data=new rt((E-st)/Float32Array.BYTES_PER_ELEMENT),tt.__offset=st}}let I=E%N;return I>0&&(E+=N-I),w.__size=E,w.__cache={},this}function T(w,F){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=16,E.storage=48):w.isMatrix4?(E.boundary=16,E.storage=64):w.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",w),F===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function g(w){let F=w.target;F.removeEventListener("dispose",g),n.deleteBuffer(s[F.id]),delete s[F.id],delete r[F.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);s={},r={}}return{bind:a,update:o,dispose:m}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function zx(){return Wi===null&&(Wi=new ra(Bx,16,16,Ms,Ii),Wi.name="DFG_LUT",Wi.minFilter=ni,Wi.magFilter=ni,Wi.wrapS=Oi,Wi.wrapT=Oi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var cc=class{constructor(t={}){let{canvas:e=Bd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ri}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let T=f,g=new Set([Rl,Al,El]),m=new Set([ri,Pi,Rr,ks,bl,wl]),w=new Uint32Array(4),F=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},N=null,I=null,y=[],A=[],X=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,K=!1,tt=null,ct=null,H=null,st=null;this._outputColorSpace=ti;let rt=0,et=0,mt=null,ft=-1,ht=null,Nt=new Pn,oe=new Pn,ye=null,Tt=new qe(0),Jt=0,Rt=e.width,Ct=e.height,bt=1,_t=null,jt=null,ne=new Pn(0,0,Rt,Ct),Ne=new Pn(0,0,Rt,Ct),Oe=!1,Ee=new ms,Ge=new Zo,pn=!1,Ke=!1,sn=new fn,Dn=new $,Sn=new Pn,Cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},En=!1;function Qe(){return mt===null?bt:1}let G=i;function Fe(v,R){return e.getContext(v,R)}let fe,$t,j,He,kt,de,L,M,Z,Et,nt,at,Ft,vt,St,Yt,z,wt,xt,Mt,Lt,Ht,me;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),G===null){let R="webgl2";if(G=Fe(R,v),G===null)throw Fe(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(v){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),ze("WebGLRenderer: "+v.message),v}function Le(){fe=new jg(G),fe.init(),Lt=new Dx(G,fe),$t=new zg(G,fe,t,Lt),j=new Ix(G,fe),$t.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ct=G.createFramebuffer(),H=G.createFramebuffer(),st=G.createFramebuffer(),He=new t_(G),kt=new _x,de=new Lx(G,fe,j,kt,$t,Lt,He),L=new Kg(O),M=new n0(G),Ht=new kg(G,M),Z=new Jg(G,M,He,Ht),Et=new n_(G,Z,M,Ht,He),wt=new e_(G,$t,de),St=new Gg(kt),nt=new gx(O,L,fe,$t,Ht,St),at=new Ox(O,kt),Ft=new yx,vt=new Tx(fe),z=new Og(O,L,j,Et,x,l),Yt=new Px(O,Et,$t),me=new kx(G,He,$t,j),xt=new Bg(G,fe,He),Mt=new Qg(G,fe,He),He.programs=nt.programs,O.capabilities=$t,O.extensions=fe,O.properties=kt,O.renderLists=Ft,O.shadowMap=Yt,O.state=j,O.info=He}T!==ri&&(X=new s_(T,e.width,e.height,o,s,r));let Ut=new jh(O,G);this.xr=Ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let v=fe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=fe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(v){v!==void 0&&(bt=v,this.setSize(Rt,Ct,!1))},this.getSize=function(v){return v.set(Rt,Ct)},this.setSize=function(v,R,J=!0){if(Ut.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=v,Ct=R,e.width=Math.floor(v*bt),e.height=Math.floor(R*bt),J===!0&&(e.style.width=v+"px",e.style.height=R+"px"),X!==null&&X.setSize(e.width,e.height),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(Rt*bt,Ct*bt).floor()},this.setDrawingBufferSize=function(v,R,J){Rt=v,Ct=R,bt=J,e.width=Math.floor(v*J),e.height=Math.floor(R*J),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(T===ri){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Nt)},this.getViewport=function(v){return v.copy(ne)},this.setViewport=function(v,R,J,W){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,R,J,W),j.viewport(Nt.copy(ne).multiplyScalar(Qe()).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,R,J,W){v.isVector4?Ne.set(v.x,v.y,v.z,v.w):Ne.set(v,R,J,W),j.scissor(oe.copy(Ne).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(v){j.setScissorTest(Oe=v)},this.setOpaqueSort=function(v){_t=v},this.setTransparentSort=function(v){jt=v},this.getClearColor=function(v){return v.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,J=!0){let W=0;if(v){let Q=!1;if(mt!==null){let Pt=mt.texture.format;Q=g.has(Pt)}if(Q){let Pt=mt.texture.type,Kt=m.has(Pt),Wt=z.getClearColor(),Zt=z.getClearAlpha(),ae=Wt.r,ge=Wt.g,Ve=Wt.b;Kt?(w[0]=ae,w[1]=ge,w[2]=Ve,w[3]=Zt,G.clearBufferuiv(G.COLOR,0,w)):(F[0]=ae,F[1]=ge,F[2]=Ve,F[3]=Zt,G.clearBufferiv(G.COLOR,0,F))}else W|=G.COLOR_BUFFER_BIT}R&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),tt=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),z.dispose(),Ft.dispose(),vt.dispose(),de.dispose(),kt.dispose(),L.dispose(),Et.dispose(),Z.dispose(),Ht.dispose(),me.dispose(),nt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Qt),Ut.removeEventListener("sessionend",ie),S.stop()};function Se(v){v.preventDefault(),Ph("WebGLRenderer: Context Lost."),K=!0}function De(){Ph("WebGLRenderer: Context Restored."),K=!1;let v=He.autoReset,R=Yt.enabled,J=Yt.autoUpdate,W=Yt.needsUpdate,Q=Yt.type;Le(),He.autoReset=v,Yt.enabled=R,Yt.autoUpdate=J,Yt.needsUpdate=W,Yt.type=Q}function Xt(v){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function C(v){let R=v.target;R.removeEventListener("dispose",C),_(R)}function _(v){B(v),kt.remove(v)}function B(v){let R=kt.get(v).programs;R!==void 0&&(R.forEach(function(J){nt.releaseProgram(J)}),v.isShaderMaterial&&nt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,J,W,Q,Pt){R===null&&(R=Cn);let Kt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Wt=It(v,R,J,W,Q);j.setMaterial(W,Kt);let Zt=J.index,ae=1;if(W.wireframe===!0){if(Zt=Z.getWireframeAttribute(J),Zt===void 0)return;ae=2}let ge=J.drawRange,Ve=J.attributes.position,ee=ge.start*ae,Ce=(ge.start+ge.count)*ae;Pt!==null&&(ee=Math.max(ee,Pt.start*ae),Ce=Math.min(Ce,(Pt.start+Pt.count)*ae)),Zt!==null?(ee=Math.max(ee,0),Ce=Math.min(Ce,Zt.count)):Ve!=null&&(ee=Math.max(ee,0),Ce=Math.min(Ce,Ve.count));let je=Ce-ee;if(je<0||je===1/0)return;Ht.setup(Q,W,Wt,J,Zt);let ln,Je=xt;if(Zt!==null&&(ln=M.get(Zt),Je=Mt,Je.setIndex(ln)),Q.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*Qe()),Je.setMode(G.LINES)):Je.setMode(G.TRIANGLES);else if(Q.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),j.setLineWidth(Bt*Qe()),Q.isLineSegments?Je.setMode(G.LINES):Q.isLineLoop?Je.setMode(G.LINE_LOOP):Je.setMode(G.LINE_STRIP)}else Q.isPoints?Je.setMode(G.POINTS):Q.isSprite&&Je.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Je.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Bt=Q._multiDrawStarts,b=Q._multiDrawCounts,D=Q._multiDrawCount,q=Zt?M.get(Zt).bytesPerElement:1,it=kt.get(W).currentProgram.getUniforms();for(let Dt=0;Dt<D;Dt++)it.setValue(G,"_gl_DrawID",Dt),Je.render(Bt[Dt]/q,b[Dt])}else if(Q.isInstancedMesh)Je.renderInstances(ee,je,Q.count);else if(J.isInstancedBufferGeometry){let Bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,b=Math.min(J.instanceCount,Bt);Je.renderInstances(ee,je,b)}else Je.render(ee,je)};function lt(v,R,J,W){tt!==null&&v.isNodeMaterial&&tt.setObject(W,v),pn===!0&&St.setState(v,J,!1),v.transparent===!0&&v.side===Mi&&v.forceSinglePass===!1?(v.side=si,v.needsUpdate=!0,yt(v,R,W),v.side=vs,v.needsUpdate=!0,yt(v,R,W),v.side=Mi):yt(v,R,W)}this.compile=function(v,R,J=null){J===null&&(J=v),tt!==null&&tt.renderStart(v,R,J),I=vt.get(J),I.init(R),A.push(I),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(R.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),v!==J&&v.traverseVisible(function(Q){Q.isLight&&Q.layers.test(R.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights(),tt!==null&&tt.updateLights(I.state.lightsArray),Ke=this.localClippingEnabled,pn=St.init(this.clippingPlanes,Ke),pn===!0&&St.setGlobalState(this.clippingPlanes,R),tt!==null&&Yt.render(I.state.shadowsArray,J,R);let W=new Set;return v.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Pt=Q.material;if(Pt)if(Array.isArray(Pt))for(let Kt=0;Kt<Pt.length;Kt++){let Wt=Pt[Kt];lt(Wt,J,R,Q),W.add(Wt)}else lt(Pt,J,R,Q),W.add(Pt)}),I=A.pop(),tt!==null&&tt.renderEnd(),W},this.compileAsync=function(v,R,J=null){let W=this.compile(v,R,J);return new Promise(Q=>{function Pt(){if(W.forEach(function(Kt){let Zt=kt.get(Kt).currentProgram;(Zt===void 0||Zt.isReady())&&W.delete(Kt)}),W.size===0){Q(v);return}setTimeout(Pt,10)}fe.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let At=null;function se(v){At&&At(v)}function Qt(){S.stop()}function ie(){S.start()}let S=new vf;S.setAnimationLoop(se),typeof self<"u"&&S.setContext(self),this.setAnimationLoop=function(v){At=v,Ut.setAnimationLoop(v),v===null?S.stop():S.start()},Ut.addEventListener("sessionstart",Qt),Ut.addEventListener("sessionend",ie),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;tt!==null&&tt.renderStart(v,R);let J=Ut.enabled===!0&&Ut.isPresenting===!0,W=X!==null&&(mt===null||J)&&X.begin(O,mt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(R),R=Ut.getCamera()),v.isScene===!0&&v.onBeforeRender(O,v,R,mt),I=vt.get(v,A.length),I.init(R),I.state.textureUnits=de.getTextureUnits(),A.push(I),sn.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?Ge.setFromArrayCamera(R):Ee.setFromProjectionMatrix(sn,yi,R.reversedDepth),Ke=this.localClippingEnabled,pn=St.init(this.clippingPlanes,Ke),N=Ft.get(v,y.length),N.init(),y.push(N),this.info.render.frame++,Ut.enabled===!0&&Ut.isPresenting===!0){let Kt=O.xr.getDepthSensingMesh();Kt!==null&&h(Kt,R,-1/0,O.sortObjects)}h(v,R,0,O.sortObjects),N.finish(),tt!==null&&tt.updateLights(I.state.lightsArray),O.sortObjects===!0&&N.sort(_t,jt),En=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,En&&z.addToRenderList(N,v),this.info.autoReset===!0&&this.info.reset(),pn===!0&&St.beginShadows();let Q=I.state.shadowsArray;if(Yt.render(Q,v,R),pn===!0&&St.endShadows(),(W&&X.hasRenderPass())===!1){let Kt=N.opaque,Wt=N.transmissive;if(I.setupLights(),R.isArrayCamera){let Zt=R.cameras;if(Wt.length>0)for(let ae=0,ge=Zt.length;ae<ge;ae++){let Ve=Zt[ae];U(Kt,Wt,v,Ve)}En&&z.render(v);for(let ae=0,ge=Zt.length;ae<ge;ae++){let Ve=Zt[ae];P(N,v,Ve,Ve.viewport)}}else Wt.length>0&&U(Kt,Wt,v,R),En&&z.render(v),P(N,v,R)}mt!==null&&et===0&&(de.updateMultisampleRenderTarget(mt),de.updateRenderTargetMipmap(mt)),W&&X.end(O),v.isScene===!0&&v.onAfterRender(O,v,R),Ht.resetDefaultState(),ft=-1,ht=null,A.pop(),A.length>0?(I=A[A.length-1],de.setTextureUnits(I.state.textureUnits),pn===!0&&St.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,y.pop(),y.length>0?N=y[y.length-1]:N=null,tt!==null&&tt.renderEnd()};function h(v,R,J,W){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)J=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)I.pushLight(v),v.castShadow&&I.pushShadow(v);else if(v.isSprite){let Kt=R.isArrayCamera?Ge:Ee;if(!v.frustumCulled||v.intersectsFrustum(Kt)){W&&Sn.setFromMatrixPosition(v.matrixWorld).applyMatrix4(sn);let Wt=Et.update(v),Zt=v.material;Zt.visible&&N.push(v,Wt,Zt,J,Sn.z,null,R)}}else if(v.isMesh||v.isLine||v.isPoints){let Kt=R.isArrayCamera?Ge:Ee;if(!v.frustumCulled||v.intersectsFrustum(Kt)){let Wt=Et.update(v),Zt=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Sn.copy(v.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Sn.copy(Wt.boundingSphere.center)),Sn.applyMatrix4(v.matrixWorld).applyMatrix4(sn)),Array.isArray(Zt)){let ae=Wt.groups;for(let ge=0,Ve=ae.length;ge<Ve;ge++){let ee=ae[ge],Ce=Zt[ee.materialIndex];Ce&&Ce.visible&&N.push(v,Wt,Ce,J,Sn.z,ee,R)}}else Zt.visible&&N.push(v,Wt,Zt,J,Sn.z,null,R)}}}let Pt=v.children;for(let Kt=0,Wt=Pt.length;Kt<Wt;Kt++)h(Pt[Kt],R,J,W)}function P(v,R,J,W){let{opaque:Q,transmissive:Pt,transparent:Kt}=v;I.setupLightsView(J),pn===!0&&St.setGlobalState(O.clippingPlanes,J),W&&j.viewport(Nt.copy(W)),Q.length>0&&k(Q,R,J),Pt.length>0&&k(Pt,R,J),Kt.length>0&&k(Kt,R,J),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function U(v,R,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[W.id]===void 0){let ee=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:ee?Ii:ri,minFilter:es,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cn.workingColorSpace})}let Pt=I.state.transmissionRenderTarget[W.id],Kt=W.viewport||Nt;Pt.setSize(Kt.z*O.transmissionResolutionScale,Kt.w*O.transmissionResolutionScale);let Wt=O.getRenderTarget(),Zt=O.getActiveCubeFace(),ae=O.getActiveMipmapLevel();O.setRenderTarget(Pt),O.getClearColor(Tt),Jt=O.getClearAlpha(),Jt<1&&O.setClearColor(16777215,.5),O.clear(),En&&z.render(J);let ge=O.toneMapping;O.toneMapping=Vi;let Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),I.setupLightsView(W),pn===!0&&St.setGlobalState(O.clippingPlanes,W),k(v,J,W),de.updateMultisampleRenderTarget(Pt),de.updateRenderTargetMipmap(Pt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ce=0,je=R.length;Ce<je;Ce++){let ln=R[Ce],{object:Je,geometry:Bt,material:b,group:D}=ln;if(b.side===Mi&&Je.layers.test(W.layers)){let q=b.side;b.side=si,b.needsUpdate=!0,V(Je,J,W,Bt,b,D),b.side=q,b.needsUpdate=!0,ee=!0}}ee===!0&&(de.updateMultisampleRenderTarget(Pt),de.updateRenderTargetMipmap(Pt))}O.setRenderTarget(Wt,Zt,ae),O.setClearColor(Tt,Jt),Ve!==void 0&&(W.viewport=Ve),O.toneMapping=ge}function k(v,R,J){let W=R.isScene===!0?R.overrideMaterial:null;for(let Q=0,Pt=v.length;Q<Pt;Q++){let Kt=v[Q],{object:Wt,geometry:Zt,group:ae}=Kt,ge=Kt.material;ge.allowOverride===!0&&W!==null&&(ge=W),Wt.layers.test(J.layers)&&V(Wt,R,J,Zt,ge,ae)}}function V(v,R,J,W,Q,Pt){tt!==null&&Q.isNodeMaterial&&tt.setObject(v,Q),v.onBeforeRender(O,R,J,W,Q,Pt),v.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),Q.onBeforeRender(O,R,J,W,v,Pt),Q.transparent===!0&&Q.side===Mi&&Q.forceSinglePass===!1?(Q.side=si,Q.needsUpdate=!0,O.renderBufferDirect(J,R,W,Q,v,Pt),Q.side=vs,Q.needsUpdate=!0,O.renderBufferDirect(J,R,W,Q,v,Pt),Q.side=Mi):O.renderBufferDirect(J,R,W,Q,v,Pt),v.onAfterRender(O,R,J,W,Q,Pt)}function dt(v){let R=0;for(let J of v)J.texture!==null&&R++;return R}function yt(v,R,J){R.isScene!==!0&&(R=Cn);let W=kt.get(v),Q=I.state.lights,Pt=I.state.shadowsArray,Kt=Q.state.version,Wt=nt.getParameters(v,Q.state,Pt,R,J,I.state.lightProbeGridArray),Zt=nt.getProgramCacheKey(Wt),ae=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,W.fog=R.fog;let ge=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=L.get(v.envMap||W.environment,ge),W.envMapRotation=W.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,ae===void 0&&(v.addEventListener("dispose",C),ae=new Map,W.programs=ae,W.programVariants=new Map);let Ve=ae.get(Zt);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Kt)return zt(v,Wt),Ve}else Wt.uniforms=nt.getUniforms(v),tt!==null&&v.isNodeMaterial&&tt.build(v,J,Wt),v.onBeforeCompile(Wt,O),Ve=nt.acquireProgram(Wt,Zt),ae.set(Zt,Ve),W.uniforms=Wt.uniforms;let ee=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ee.clippingPlanes=St.uniform),zt(v,Wt),W.needsLights=pt(v),W.lightsStateVersion=Kt,W.needsLights&&(ee.ambientLightColor.value=Q.state.ambient,ee.lightProbe.value=Q.state.probe,ee.sunLights.value=Q.state.sun,ee.sunLightShadows.value=Q.state.sunShadow,ee.directionalLights.value=Q.state.directional,ee.directionalLightShadows.value=Q.state.directionalShadow,ee.spotLights.value=Q.state.spot,ee.spotLightShadows.value=Q.state.spotShadow,ee.rectAreaLights.value=Q.state.rectArea,ee.ltc_1.value=Q.state.rectAreaLTC1,ee.ltc_2.value=Q.state.rectAreaLTC2,ee.pointLights.value=Q.state.point,ee.pointLightShadows.value=Q.state.pointShadow,ee.hemisphereLights.value=Q.state.hemi,ee.sunShadowMatrix.value=Q.state.sunShadowMatrix,ee.sunShadowCascade.value=Q.state.sunShadowCascade,ee.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ee.spotLightMatrix.value=Q.state.spotLightMatrix,ee.spotLightMap.value=Q.state.spotLightMap,ee.pointShadowMatrix.value=Q.state.pointShadowMatrix),W.numLightProbeGrids=dt(I.state.lightProbeGridArray),W.currentProgram=Ve,W.uniformsList=null,Ve}function gt(v,R,J,W,Q){let Pt=kt.get(v),Kt=Pt.currentProgram.id+","+W+","+Q,Wt=Pt.programVariants.get(Kt);return Wt===void 0?(Wt=yt(v,R,J),Pt.programVariants.set(Kt,Wt)):(Pt.currentProgram=Wt,Pt.uniformsList=null,Pt.outputColorSpace=W,Pt.toneMapping=Q),Wt}function qt(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Pr.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function zt(v,R){let J=kt.get(v);J.outputColorSpace=R.outputColorSpace,J.batching=R.batching,J.batchingColor=R.batchingColor,J.instancing=R.instancing,J.instancingColor=R.instancingColor,J.instancingMorph=R.instancingMorph,J.skinning=R.skinning,J.morphTargets=R.morphTargets,J.morphNormals=R.morphNormals,J.morphColors=R.morphColors,J.morphTargetsCount=R.morphTargetsCount,J.numClippingPlanes=R.numClippingPlanes,J.numIntersection=R.numClipIntersection,J.vertexAlphas=R.vertexAlphas,J.vertexTangents=R.vertexTangents,J.toneMapping=R.toneMapping}function It(v,R,J,W,Q){R.isScene!==!0&&(R=Cn),de.resetTextureUnits();let Pt=R.fog,Kt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?R.environment:null,Wt=mt===null?O.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:cn.workingColorSpace,Zt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ae=L.get(W.envMap||Kt,Zt),ge=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ee=!!J.morphAttributes.position,Ce=!!J.morphAttributes.normal,je=!!J.morphAttributes.color,ln=Vi;W.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ln=O.toneMapping);let Je=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Bt=Je!==void 0?Je.length:0,b=kt.get(W),D=I.state.lights;if(pn===!0&&(Ke===!0||v!==ht)){let Me=v===ht&&W.id===ft;St.setState(W,v,Me)}let q=!1,it=!1;W.version===b.__version?b.needsLights&&b.lightsStateVersion!==D.state.version||Q.isBatchedMesh&&b.batching===!1||!Q.isBatchedMesh&&b.batching===!0||Q.isBatchedMesh&&b.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&b.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&b.instancing===!1||!Q.isInstancedMesh&&b.instancing===!0||Q.isSkinnedMesh&&b.skinning===!1||!Q.isSkinnedMesh&&b.skinning===!0||Q.isInstancedMesh&&b.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&b.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&b.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&b.instancingMorph===!1&&Q.morphTexture!==null||b.envMap!==ae||W.fog===!0&&b.fog!==Pt||b.numClippingPlanes!==void 0&&(b.numClippingPlanes!==St.numPlanes||b.numIntersection!==St.numIntersection)||b.vertexAlphas!==ge||b.vertexTangents!==Ve||b.morphTargets!==ee||b.morphNormals!==Ce||b.morphColors!==je||b.morphTargetsCount!==Bt||b.numLightProbeGrids!==dt(I.state.lightProbeGridArray)?q=!0:(b.outputColorSpace!==Wt||b.toneMapping!==ln)&&(it=!0):(q=!0,b.__version=W.version);let Dt=b.currentProgram;(q===!0||it===!0)&&(Dt=it===!0?gt(W,R,Q,Wt,ln):yt(W,R,Q),tt&&W.isNodeMaterial&&tt.onUpdateProgram(W,Dt,b));let Ot=!1,re=!1,Pe=!1,_e=Dt.getUniforms(),Ie=b.uniforms;if(j.useProgram(Dt.program)&&(Ot=!0,re=!0,Pe=!0),W.id!==ft&&(ft=W.id,re=!0),Ot||ht!==v){j.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),_e.setValue(G,"projectionMatrix",v.projectionMatrix),_e.setValue(G,"viewMatrix",v.matrixWorldInverse);let We=_e.map.cameraPosition;We!==void 0&&We.setValue(G,Dn.setFromMatrixPosition(v.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),ht!==v&&(ht=v,re=!0,Pe=!0)}if(b.needsLights&&(D.state.sunShadowMap.length>0&&_e.setValue(G,"sunShadowMap",D.state.sunShadowMap,de),D.state.directionalShadowMap.length>0&&_e.setValue(G,"directionalShadowMap",D.state.directionalShadowMap,de),D.state.spotShadowMap.length>0&&_e.setValue(G,"spotShadowMap",D.state.spotShadowMap,de),D.state.pointShadowMap.length>0&&_e.setValue(G,"pointShadowMap",D.state.pointShadowMap,de)),Q.isSkinnedMesh){_e.setOptional(G,Q,"bindMatrix"),_e.setOptional(G,Q,"bindMatrixInverse");let Me=Q.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),_e.setValue(G,"boneTexture",Me.boneTexture,de))}Q.isBatchedMesh&&(_e.setOptional(G,Q,"batchingTexture"),_e.setValue(G,"batchingTexture",Q._matricesTexture,de),_e.setOptional(G,Q,"batchingIdTexture"),_e.setValue(G,"batchingIdTexture",Q._indirectTexture,de),_e.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&_e.setValue(G,"batchingColorTexture",Q._colorsTexture,de));let Ze=J.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&wt.update(Q,J,Dt),(re||b.receiveShadow!==Q.receiveShadow)&&(b.receiveShadow=Q.receiveShadow,_e.setValue(G,"receiveShadow",Q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&R.environment!==null&&(Ie.envMapIntensity.value=R.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=zx()),re){if(_e.setValue(G,"toneMappingExposure",O.toneMappingExposure),b.needsLights&&ut(Ie,Pe),Pt&&W.fog===!0&&at.refreshFogUniforms(Ie,Pt),at.refreshMaterialUniforms(Ie,W,bt,Ct,I.state.transmissionRenderTarget[v.id]),b.needsLights&&b.numLightProbeGrids>0){let Me=E,We=0;for(let On of I.state.lightProbeGridArray)On.texture!==null&&(Me.textures[We]=On.texture,Me.min[We]=On.boundingBox.min,Me.max[We]=On.boundingBox.max,Me.resolution[We]=On.resolution,We++);for(let On in Me)Me[On].length=We;Ie.probesSH.value=Me.textures,Ie.probesMin.value=Me.min,Ie.probesMax.value=Me.max,Ie.probesResolution.value=Me.resolution}Pr.upload(G,qt(b),Ie,de)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pr.upload(G,qt(b),Ie,de),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(G,"center",Q.center),_e.setValue(G,"modelViewMatrix",Q.modelViewMatrix),_e.setValue(G,"normalMatrix",Q.normalMatrix),_e.setValue(G,"modelMatrix",Q.matrixWorld),W.uniformsGroups!==void 0){let Me=W.uniformsGroups;for(let We=0,On=Me.length;We<On;We++){let Ni=Me[We];me.update(Ni,Dt),me.bind(Ni,Dt)}}return Dt}function ut(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function pt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(v,R,J){let W=kt.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),kt.get(v.texture).__webglTexture=R,kt.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){let J=kt.get(v);J.__webglFramebuffer=R,J.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,J=0){mt=v,rt=R,et=J;let W=null,Q=!1,Pt=!1;if(v){let Wt=kt.get(v);if(Wt.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(G.FRAMEBUFFER,Wt.__webglFramebuffer),Nt.copy(v.viewport),oe.copy(v.scissor),ye=v.scissorTest,j.viewport(Nt),j.scissor(oe),j.setScissorTest(ye),ft=-1;return}else if(Wt.__webglFramebuffer===void 0)de.setupRenderTarget(v);else if(Wt.__hasExternalTextures)de.rebindTextures(v,kt.get(v.texture).__webglTexture,kt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ge=v.depthTexture;if(Wt.__boundDepthTexture!==ge){if(ge!==null&&kt.has(ge)&&(v.width!==ge.image.width||v.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(v)}}let Zt=v.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Pt=!0);let ae=kt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ae[R])?W=ae[R][J]:W=ae[R],Q=!0):v.samples>0&&de.useMultisampledRTT(v)===!1?W=kt.get(v).__webglMultisampledFramebuffer:Array.isArray(ae)?W=ae[J]:W=ae,Nt.copy(v.viewport),oe.copy(v.scissor),ye=v.scissorTest}else Nt.copy(ne).multiplyScalar(bt).floor(),oe.copy(Ne).multiplyScalar(bt).floor(),ye=Oe;if(J!==0&&(W=ct),j.bindFramebuffer(G.FRAMEBUFFER,W)&&j.drawBuffers(v,W),j.viewport(Nt),j.scissor(oe),j.setScissorTest(ye),Q){let Wt=kt.get(v.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+R,Wt.__webglTexture,J)}else if(Pt){let Wt=R;for(let Zt=0;Zt<v.textures.length;Zt++){let ae=kt.get(v.textures[Zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Zt,ae.__webglTexture,J,Wt)}}else if(v!==null&&J!==0){let Wt=kt.get(v.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,J)}ft=-1};function ce(v){let R=kt.get(v);return(R.__readFormat!==v.format||R.__readType!==v.type)&&(R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=$t.textureFormatReadable(v.format),R.__typeReadable=$t.textureTypeReadable(v.type)),R}this.readRenderTargetPixels=function(v,R,J,W,Q,Pt,Kt,Wt=0){if(!(v&&v.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Kt!==void 0&&(Zt=Zt[Kt],Array.isArray(Zt)&&(Zt=Zt[0])),Zt){j.bindFramebuffer(G.FRAMEBUFFER,Zt);try{let ae=v.textures[Wt],ge=ae.format,Ve=ae.type;v.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Wt);let ee=ce(ae);if(ee.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-W&&J>=0&&J<=v.height-Q&&G.readPixels(R,J,W,Q,Lt.convert(ge),Lt.convert(Ve),Pt)}finally{let ae=mt!==null?kt.get(mt).__webglFramebuffer:null;j.bindFramebuffer(G.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(v,R,J,W,Q,Pt,Kt,Wt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Kt!==void 0&&(Zt=Zt[Kt],Array.isArray(Zt)&&(Zt=Zt[0])),Zt)if(R>=0&&R<=v.width-W&&J>=0&&J<=v.height-Q){j.bindFramebuffer(G.FRAMEBUFFER,Zt);let ae=v.textures[Wt],ge=ae.format,Ve=ae.type;v.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Wt);let ee=ce(ae);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ce),G.bufferData(G.PIXEL_PACK_BUFFER,Pt.byteLength,G.STREAM_READ),G.readPixels(R,J,W,Q,Lt.convert(ge),Lt.convert(Ve),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let je=mt!==null?kt.get(mt).__webglFramebuffer:null;j.bindFramebuffer(G.FRAMEBUFFER,je);let ln=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gd(G,ln,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Ce),G.deleteSync(ln),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,J=0){let W=Math.pow(2,-J),Q=Math.floor(v.image.width*W),Pt=Math.floor(v.image.height*W),Kt=R!==null?R.x:0,Wt=R!==null?R.y:0;de.setTexture2D(v,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,Kt,Wt,Q,Pt),j.unbindTexture()},this.copyTextureToTexture=function(v,R,J=null,W=null,Q=0,Pt=0){let Kt,Wt,Zt,ae,ge,Ve,ee,Ce,je,ln=v.isCompressedTexture?v.mipmaps[Pt]:v.image;if(J!==null)Kt=J.max.x-J.min.x,Wt=J.max.y-J.min.y,Zt=J.isBox3?J.max.z-J.min.z:1,ae=J.min.x,ge=J.min.y,Ve=J.isBox3?J.min.z:0;else{let _e=Math.pow(2,-Q);Kt=Math.floor(ln.width*_e),Wt=Math.floor(ln.height*_e),v.isDataArrayTexture?Zt=ln.depth:v.isData3DTexture?Zt=Math.floor(ln.depth*_e):Zt=1,ae=0,ge=0,Ve=0}W!==null?(ee=W.x,Ce=W.y,je=W.z):(ee=0,Ce=0,je=0);let Je=Lt.convert(R.format),Bt=Lt.convert(R.type),b;R.isData3DTexture?(de.setTexture3D(R,0),b=G.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(de.setTexture2DArray(R,0),b=G.TEXTURE_2D_ARRAY):(de.setTexture2D(R,0),b=G.TEXTURE_2D),j.activeTexture(G.TEXTURE0),j.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,R.flipY),j.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),j.pixelStorei(G.UNPACK_ALIGNMENT,R.unpackAlignment);let D=j.getParameter(G.UNPACK_ROW_LENGTH),q=j.getParameter(G.UNPACK_IMAGE_HEIGHT),it=j.getParameter(G.UNPACK_SKIP_PIXELS),Dt=j.getParameter(G.UNPACK_SKIP_ROWS),Ot=j.getParameter(G.UNPACK_SKIP_IMAGES);j.pixelStorei(G.UNPACK_ROW_LENGTH,ln.width),j.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ln.height),j.pixelStorei(G.UNPACK_SKIP_PIXELS,ae),j.pixelStorei(G.UNPACK_SKIP_ROWS,ge),j.pixelStorei(G.UNPACK_SKIP_IMAGES,Ve);let re=v.isDataArrayTexture||v.isData3DTexture,Pe=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){let _e=kt.get(v),Ie=kt.get(R),Ze=kt.get(_e.__renderTarget),Me=kt.get(Ie.__renderTarget);j.bindFramebuffer(G.READ_FRAMEBUFFER,Ze.__webglFramebuffer),j.bindFramebuffer(G.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let We=0;We<Zt;We++)re&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(v).__webglTexture,Q,Ve+We),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,Pt,je+We)),G.blitFramebuffer(ae,ge,ae+Kt,ge+Wt,ee,Ce,ee+Kt,Ce+Wt,G.DEPTH_BUFFER_BIT,G.NEAREST);j.bindFramebuffer(G.READ_FRAMEBUFFER,null),j.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||v.isRenderTargetTexture||kt.has(v)){let _e=kt.get(v),Ie=kt.get(R);j.bindFramebuffer(G.READ_FRAMEBUFFER,H),j.bindFramebuffer(G.DRAW_FRAMEBUFFER,st);for(let Ze=0;Ze<Zt;Ze++)re?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_e.__webglTexture,Q,Ve+Ze):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_e.__webglTexture,Q),Pe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ie.__webglTexture,Pt,je+Ze):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,Pt),Q!==0?G.blitFramebuffer(ae,ge,ae+Kt,ge+Wt,ee,Ce,ee+Kt,Ce+Wt,G.COLOR_BUFFER_BIT,G.NEAREST):Pe?G.copyTexSubImage3D(b,Pt,ee,Ce,je+Ze,ae,ge,Kt,Wt):G.copyTexSubImage2D(b,Pt,ee,Ce,ae,ge,Kt,Wt);j.bindFramebuffer(G.READ_FRAMEBUFFER,null),j.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pe?v.isDataTexture||v.isData3DTexture?G.texSubImage3D(b,Pt,ee,Ce,je,Kt,Wt,Zt,Je,Bt,ln.data):R.isCompressedArrayTexture?G.compressedTexSubImage3D(b,Pt,ee,Ce,je,Kt,Wt,Zt,Je,ln.data):G.texSubImage3D(b,Pt,ee,Ce,je,Kt,Wt,Zt,Je,Bt,ln):v.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pt,ee,Ce,Kt,Wt,Je,Bt,ln.data):v.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pt,ee,Ce,ln.width,ln.height,Je,ln.data):G.texSubImage2D(G.TEXTURE_2D,Pt,ee,Ce,Kt,Wt,Je,Bt,ln);j.pixelStorei(G.UNPACK_ROW_LENGTH,D),j.pixelStorei(G.UNPACK_IMAGE_HEIGHT,q),j.pixelStorei(G.UNPACK_SKIP_PIXELS,it),j.pixelStorei(G.UNPACK_SKIP_ROWS,Dt),j.pixelStorei(G.UNPACK_SKIP_IMAGES,Ot),Pt===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&G.generateMipmap(b),j.unbindTexture()},this.initRenderTarget=function(v){kt.get(v).__webglFramebuffer===void 0&&de.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?de.setTextureCube(v,0):v.isData3DTexture?de.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?de.setTexture2DArray(v,0):de.setTexture2D(v,0),j.unbindTexture()},this.resetState=function(){rt=0,et=0,mt=null,j.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(t),e.unpackColorSpace=cn._getUnpackColorSpace()}};var Va=Math.PI/180,Bn=9.81,Jh=0,Lr=1,Lf={half:16},_n={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};_n.height=_n.steps*_n.rise;_n.length=_n.steps*_n.run;var we={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},bi={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-1.15,_n.height,_n.z],attacker:[-5.2,_n.height+1.5,_n.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,we.floor,we.z],attacker:[-6.2,we.floor+1.5,we.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};function Hn(n,t){if(t>we.z-30){let e=t-we.z;return Math.abs(e)>we.halfWidth||n<-we.back||n>we.wall?0:n<0?we.floor:Math.abs(e)<we.open?we.floor+we.sill:we.top}if(t>_n.z-30){let e=t-_n.z;return Math.abs(e)>_n.halfWidth||n<-_n.back||n>=_n.length?0:n<=0?_n.height:Math.max(0,_n.height-(Math.floor(n/_n.run)+1)*_n.rise)}return 0}var gn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],Gt=Object.fromEntries(gn.map((n,t)=>[n.name,t])),ss=.44,Dr=.425,Wa=-.08,Xa=.1,Hx=.205,nn={stretch:1,over0:.05,over1:0,kv:1.5,kp:.7,foot1:.09,foot2:.13,thr:.115,tscale:.8,land:.8,swingK:3200,swingMax:900,clear:.1,bulge:.02,yawK:120,yawD:18,yawMax:35,swingHip:.3,trunkK:1400,trunkD:126,hipMax:400,aimUntil:.85,landAt:1.25,firstAim:.32,brace:0},qa=30*Math.PI/180,Vx=-1,Qh=.85;var tu=.915,fc={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:130,stun:.55,bleed:.35,blow:6.3},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},If={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},Wx=1.2,nu=[0,5,30,80],Xx=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),qx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},Yx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function ai(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function Ya(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function In(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}var zs=n=>[-n[0],-n[1],-n[2],n[3]],Ye=(n,t,e)=>Math.max(t,Math.min(e,n));function dc(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function eu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Df(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(Jh,Lr),e.EnableCollision(Lr,Lr);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(Jh,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Lr,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(S,h,P,U,k=.85){let V=[(P[0]+U[0])/2,(P[1]+U[1])/2,(P[2]+U[2])/2],dt=[(U[0]-P[0])/2,(U[1]-P[1])/2,(U[2]-P[2])/2],yt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(dt[0],dt[1],dt[2]),Math.min(.02,dt[0]*.5,dt[1]*.5,dt[2]*.5)),new n.RVec3(V[0],V[1],V[2]),o,n.EMotionType_Static,Jh);yt.mFriction=k,yt.mRestitution=.03,a.AddBody(a.CreateBody(yt).GetID(),n.EActivation_DontActivate),h&&p.push({c:V,h:dt,kind:h,level:S})}d("all",null,[-50,-1,-40],[50,0,190]);{let S=_n.z-_n.halfWidth,h=_n.z+_n.halfWidth;d("stairs","landing",[-_n.back,0,S],[0,_n.height,h]);for(let P=0;P<_n.steps-1;P++)d("stairs","step",[P*_n.run,0,S],[(P+1)*_n.run,_n.height-(P+1)*_n.rise,h],.13);d("stairs","wall",[-_n.back,0,S-.3],[_n.length+3,_n.height+2.6,S])}let f={tiles:[],panes:[],frame:[]};{let S=we.z-we.halfWidth,h=we.z+we.halfWidth,P=we.floor;d("window","building",[-we.back,0,S],[we.wall,P,h]),d("window","wall",[0,P,S],[we.wall,we.top,we.z-we.open]),d("window","wall",[0,we.lintel,we.z-we.open],[we.wall,we.top,we.z+we.open]),d("window","sill",[0,P,we.z-we.open],[we.wall,P+we.sill,we.z+we.open]);let U=we.glassX,k=we.z-we.panes*we.pane/2,V=we.glassY,dt=we.panes*we.pane,yt=.035;for(let zt=0;zt<=we.panes;zt++)d("window","frame",[U+zt*we.pane-yt,V-.09,k-yt],[U+zt*we.pane+yt,V-.012,k+dt+yt]),d("window","frame",[U-yt,V-.09,k+zt*we.pane-yt],[U+dt+yt,V-.012,k+zt*we.pane+yt]);for(let[zt,It]of[[U,k],[U+dt,k],[U,k+dt],[U+dt,k+dt]])d("window","frame",[zt-.05,0,It-.05],[zt+.05,V-.09,It+.05]);let gt=eu(99),qt=(zt,It,ut,pt,ce,v)=>{let R=ut-zt,J=pt-It;if(ce===0||R<.3&&J<.3){v.push([zt,It,ut,pt]);return}let W=.32+.36*gt();R>J?(qt(zt,It,zt+R*W,pt,ce-1,v),qt(zt+R*W,It,ut,pt,ce-1,v)):(qt(zt,It,ut,It+J*W,ce-1,v),qt(zt,It+J*W,ut,pt,ce-1,v))};for(let zt=0;zt<we.panes;zt++)for(let It=0;It<we.panes;It++){let pt=U+zt*we.pane+.04,ce=k+It*we.pane+.04,v={broken:!1,min:[pt-.04,ce-.04],max:[pt+we.pane-.04,ce+we.pane-.04],y:V,tiles:[]},R=[];qt(pt,ce,pt+we.pane-2*.04,ce+we.pane-2*.04,3,R);for(let J of R){let W=[(J[2]-J[0])/2,.007,(J[3]-J[1])/2],Q=[(J[0]+J[2])/2,V,(J[1]+J[3])/2],Pt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(W[0],W[1],W[2]),.002),new n.RVec3(Q[0],Q[1],Q[2]),o,n.EMotionType_Static,Lr);Pt.mAllowDynamicOrKinematic=!0,Pt.mFriction=.5,Pt.mRestitution=.15,Pt.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,Pt.mMassPropertiesOverride.mMass=Math.max(.15,W[0]*W[2]*4*12);let Kt=a.CreateBody(Pt),Wt=new n.BodyID(Kt.GetID().GetIndexAndSequenceNumber());a.AddBody(Wt,n.EActivation_DontActivate),v.tiles.push(f.tiles.length),f.tiles.push({id:Wt,home:Q,h:W})}f.panes.push(v)}}function x(S,h){S.broken=!0,Ct.glass++;for(let P of S.tiles){let U=f.tiles[P];a.SetMotionType(U.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(h[0]*.45+(ne()-.5)*2.2,h[1]*.5-ne()*1.2,h[2]*.45+(ne()-.5)*2.2);let k=new n.Vec3((ne()-.5)*14,(ne()-.5)*6,(ne()-.5)*14);a.SetLinearAndAngularVelocity(U.id,l,k),n.destroy(k)}Ge.push({type:"glass",pos:[(S.min[0]+S.max[0])/2,S.y,(S.min[1]+S.max[1])/2]})}function T(){for(let S of f.tiles)a.SetMotionType(S.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(S.home[0],S.home[1],S.home[2]),a.SetPositionAndRotation(S.id,c,o,n.EActivation_DontActivate);for(let S of f.panes)S.broken=!1}let g=new n.Skeleton;for(let S of gn)g.AddJoint(new n.JPHString(S.name,S.name.length),S.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(gn.length),gn.forEach((S,h)=>{let P=m.mParts.at(h);if(P.SetShape(new n.CapsuleShape(S.hh,S.r)),P.mPosition=new n.RVec3(S.c[0],S.c[1],S.c[2]),P.mRotation=o,P.mMotionType=n.EMotionType_Dynamic,P.mMotionQuality=n.EMotionQuality_LinearCast,P.mObjectLayer=Lr,P.mFriction=.7,P.mRestitution=.05,P.mAngularDamping=.3,P.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,P.mMassPropertiesOverride.mMass=S.mass,S.strength=S.mass*26,!(S.parent<0))if(S.type==="st"){let U=new n.SwingTwistConstraintSettings;U.mSpace=n.EConstraintSpace_WorldSpace,U.mPosition1=U.mPosition2=new n.RVec3(S.j[0],S.j[1],S.j[2]),U.mTwistAxis1=U.mTwistAxis2=new n.Vec3(S.twist[0],S.twist[1],S.twist[2]),U.mPlaneAxis1=U.mPlaneAxis2=new n.Vec3(1,0,0),S.zone==="thigh"&&(U.mTwistAxis1=new n.Vec3(-Math.sin(qa),-Math.cos(qa),0),U.mPlaneAxis1=new n.Vec3(Math.cos(qa),-Math.sin(qa),0)),U.mNormalHalfConeAngle=U.mPlaneHalfConeAngle=S.cone*Va,U.mTwistMinAngle=-S.tw*Va,U.mTwistMaxAngle=S.tw*Va,U.mMaxFrictionTorque=S.mass*.4;for(let k of[U.mSwingMotorSettings,U.mTwistMotorSettings])k.mSpringSettings.mFrequency=8,k.mSpringSettings.mDamping=1,k.mMinTorqueLimit=-S.strength,k.mMaxTorqueLimit=S.strength;P.mToParent=U}else{let U=new n.HingeConstraintSettings;U.mSpace=n.EConstraintSpace_WorldSpace,U.mPoint1=U.mPoint2=new n.RVec3(S.j[0],S.j[1],S.j[2]),U.mHingeAxis1=U.mHingeAxis2=new n.Vec3(0,0,1),U.mNormalAxis1=U.mNormalAxis2=new n.Vec3(1,0,0),U.mLimitsMin=S.min*Va,U.mLimitsMax=S.max*Va,U.mMaxFrictionTorque=S.mass*.4,U.mMotorSettings.mSpringSettings.mFrequency=8,U.mMotorSettings.mSpringSettings.mDamping=1,U.mMotorSettings.mMinTorqueLimit=-S.strength,U.mMotorSettings.mMaxTorqueLimit=S.strength,P.mToParent=U}});let w=0,F=gn.map(S=>(w+=S.mass,S.mass));m.DisableParentChildCollisions();{let S=n.castObject(m.mParts.at(0).mCollisionGroup.GetGroupFilter(),n.GroupFilterTable);for(let h of[Gt.uleg_l,Gt.lleg_l])for(let P of[Gt.uleg_r,Gt.lleg_r])S.DisableCollision(h,P)}m.CalculateBodyIndexToConstraintIndex();let E=m.CreateRagdoll(0,0,r);E.AddToPhysicsSystem(n.EActivation_Activate);let N=gn.map((S,h)=>new n.BodyID(E.GetBodyID(h).GetIndexAndSequenceNumber())),I=gn.map((S,h)=>{if(S.parent<0)return null;let P=E.GetConstraint(h-1);return S.type==="st"?n.castObject(P,n.SwingTwistConstraint):n.castObject(P,n.HingeConstraint)}),y=gn.length,A=(S,h)=>{let P=a.GetPosition(N[S]);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h},X=(S,h)=>{let P=a.GetLinearVelocity(N[S]);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h},O=(S,h)=>{let P=a.GetRotation(N[S]);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h[3]=P.GetW(),h},K=(S,h)=>{let P=a.GetAngularVelocity(N[S]);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h},tt=S=>A(S,[0,0,0]),ct=(S,h)=>{let P=a.GetPosition(S);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h},H=(S,h)=>{let P=a.GetRotation(S);return h[0]=P.GetX(),h[1]=P.GetY(),h[2]=P.GetZ(),h[3]=P.GetW(),h};function st(S,h,P,U,k){l.Set(h,P,U),k?(c.Set(k[0],k[1],k[2]),a.AddForce(N[S],l,c,n.EActivation_Activate)):a.AddForce(N[S],l,n.EActivation_Activate)}function rt(S,h,P,U,k){l.Set(h,P,U),k?(c.Set(k[0],k[1],k[2]),a.AddImpulse(N[S],l,c)):a.AddImpulse(N[S],l)}let et=new Float32Array(y).fill(1),mt=new Float32Array(y),ft=new Float32Array(y).fill(-1),ht=new Float32Array(y*3),Nt=new Float32Array(y),oe=ai(0,1,0,Vx*qa);function ye(S,h){gn[S].zone==="thigh"&&(h=Ya(oe,h)),u.Set(h[0],h[1],h[2],h[3]),I[S].SetTargetOrientationCS(u)}let Tt=1,Jt=(S,h,P,U=0)=>Ya(Ya(ai(0,1,0,S),ai(0,0,1,h*P)),ai(1,0,0,U*P*Tt));function Rt(){for(let S=1;S<y;S++){let h=et[S]*(1-mt[S]);if(Math.abs(h-ft[S])<.02&&!(h===0&&ft[S]!==0))continue;ft[S]=h;let P=gn[S],U=I[S],k=h>.02?n.EMotorState_Position:n.EMotorState_Off,V=P.strength*h,dt=2.5+5.5*h;if(P.type==="st"){for(let yt of[U.GetSwingMotorSettings(),U.GetTwistMotorSettings()])yt.mMinTorqueLimit=-V,yt.mMaxTorqueLimit=V,yt.mSpringSettings.mFrequency=dt;U.SetSwingMotorState(k),U.SetTwistMotorState(k)}else{let yt=U.GetMotorSettings();yt.mMinTorqueLimit=-V,yt.mMaxTorqueLimit=V,yt.mSpringSettings.mFrequency=dt,U.SetMotorState(k)}}}let Ct={},bt=[],_t=[{shin:Gt.lleg_l,thigh:Gt.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,spot:[0,0],under:!1,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0},{shin:Gt.lleg_r,thigh:Gt.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,spot:[0,0],under:!1,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0}],jt={},ne=eu(1),Ne=0,Oe=bi.yard,Ee="yard",Ge=[],pn=[];function Ke(){gn.forEach((S,h)=>{c.Set(Oe.start[0]+S.c[0],Oe.start[1]+S.c[1]-.03,Oe.start[2]+S.c[2]),a.SetPositionAndRotation(N[h],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(N[h],l,l)}),et.fill(1),mt.fill(0),ft.fill(-1),ht.fill(0),Nt.fill(0),bt.length=0,T(),ne=eu(1234+77*Ne++),Object.assign(Ct,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:Oe.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(jt,{support:1,hT:Oe.start[1]+tu,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[ne()*6.28,ne()*6.28,ne()*6.28,ne()*6.28],lastCom:[Oe.start[0],Oe.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,load:0,buckleLeg:0,upT:0,rollSide:1,rollT:0,chT:0,gettingUp:!1,upStage:1,upFoot:0,stageT:0,baseT:0,lostT:0,prone:!1,flops:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let S of _t)S.swing=!1,S.hurt=0,S.broken=0,S.kneeDown=!1,S.planted=[Oe.start[0],Oe.start[2]+S.side*Xa],S.t=0;Rt()}function sn(S){Ct.alive&&(Ct.alive=!1,Ct.diedAt=Ct.time,Ct.outcome=S,pn.push({type:"dead",cause:S,pos:tt(Gt.head),time:Ct.time}))}function Dn(){Ct.ko||!Ct.alive||(Ct.ko=!0,pn.push({type:"out",pos:tt(Gt.head)}))}function Sn(S,h){let P=gn[S].zone,U=gn[S].side===1?"_l":"_r";if(P==="head")return h[0]<-.45?h[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:h[1]<-.55?[["jaw",1]]:[["skull",1]];if(S===Gt.chest){let k=h[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(h[2])>.55||h[1]>.5)&&k.push(["collarbone"+(h[2]>=0?"_l":"_r"),.9]),k}return S===Gt.pelvis?h[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:P==="arm"?gn[gn[S].parent].zone==="arm"?h[1]<-.35?[["wrist"+U,1]]:[["forearm"+U,1]]:h[1]>.5?[["humerus"+U,.8],["collarbone"+U,.8]]:[["humerus"+U,1]]:P==="thigh"?[["femur"+U,1]]:h[1]>.35?[["kneecap"+U,1]]:h[1]<-.5?[["ankle"+U,1]]:[["tibia"+U,1]]}function Cn(S,h,P,U){let k=S.split("_")[0],V=If[k];for(;h>0&&!V[h-1];)h--;let dt=Ct.bones[S]||0;if(h<=dt)return 0;Ct.bones[S]=h;let yt=S.endsWith("_l")?1:S.endsWith("_r")?-1:0;pn.push({type:"injury",bone:S,base:k,side:yt,level:h,was:dt,pos:[P[0],P[1],P[2]],cause:U});let gt=yt===1?Gt.uarm_l:Gt.uarm_r,qt=yt===1?Gt.larm_l:Gt.larm_r,zt=It=>{Ct.stun=Math.min(1.6,Ct.stun+It)};if(k==="femur"||k==="tibia"||k==="kneecap"||k==="ankle"){let It=_t[yt===1?0:1];It.hurt=Math.min(1,Math.max(It.hurt+.15,h===2?.8:h===3?1:0)),It.broken=Math.max(It.broken,h),mt[It.thigh]=Math.max(mt[It.thigh],It.hurt*.5),mt[It.shin]=Math.max(mt[It.shin],It.hurt*.6),jt.legWound=Math.max(jt.legWound,It.hurt),h>=2&&Ct.mode==="balance"&&(jt.buckle=.24,jt.buckleDip=.3)}else if(k==="humerus")h>=2&&(mt[gt]=.9,mt[qt]=Math.max(mt[qt],.6));else if(k==="forearm"||k==="wrist")h>=2&&(mt[qt]=.9);else if(k==="collarbone")h>=2&&(mt[gt]=Math.max(mt[gt],.7));else if(k==="ribs")zt([0,.08,.22,.4][h]),h===3&&bt.push({part:Gt.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(k==="nose")zt(.1),h>=2&&bt.push({part:Gt.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(k==="jaw")zt(.12*h);else if(k==="skull")h===3?sn("Skull shattered"):h===2&&(zt(.5),Dn());else if(k==="neck")h>=2?sn("Broken neck"):zt(.3);else if(k==="spine"){if(h>=2){Ct.paralysed=!0;for(let It of _t)It.hurt=1,mt[It.thigh]=1,mt[It.shin]=1}}else if(k==="pelvis"&&h>=2){Ct.cantRise=!0;for(let It of _t)It.hurt=Math.max(It.hurt,.5)}return h}function En(S,h,P,U){let k=If[S.split("_")[0]];Ct.bones[S]&&(h*=1.15),h*=.85+.3*ne();let V=k[2]&&h>=k[2]?3:h>=k[1]?2:h>=k[0]?1:0;return V?Cn(S,V,P,U):0}let Qe=()=>!Ct.paralysed&&!Ct.cantRise&&!(_t[0].broken>=3||_t[1].broken>=3)&&!(_t[0].broken>=2&&_t[1].broken>=2),G=[0,0,0,1],Fe=[0,0,0],fe=[0,0,0];function $t(S,h,P,U){if(Ct.done)return null;let k=gn[S],V=tt(Gt.chest)[1],dt=tt(Gt.head)[1],gt=k.zone==="chest"&&h[1]-V>.13||k.zone==="head"&&dt-h[1]>.06?"neck":k.zone;if(Ct.hits++,Ct.mode==="fall"&&(Ct.fallHits++,j[1]-Hn(j[0],j[2])>1.2&&Ct.airHits++),U.impulse>200)for(let[pt,ce]of[[S,.5],[Gt.chest,.3],[Gt.pelvis,.2]])rt(pt,P[0]*U.impulse*ce,P[1]*U.impulse*ce,P[2]*U.impulse*ce,pt===S?h:null);else rt(S,P[0]*U.impulse,P[1]*U.impulse,P[2]*U.impulse,h);for(let pt=0;pt<y;pt++)Nt[pt]=.45;A(S,fe),O(S,G);let qt=In(zs(G),[h[0]-fe[0],h[1]-fe[1],h[2]-fe[2]],[0,0,0]);if(U.bleed>0){let pt=U.kind==="blunt";bt.push({part:S,zone:gt,at:qt,arterial:!pt&&(gt==="neck"||gt==="thigh"),rate:pt?1.6:qx[gt]*U.bleed,left:pt?7:Yx[gt]*U.bleed})}Ct.stun=Math.min(1.6,Ct.stun+U.stun*(gt==="head"?2.2:gt==="neck"?1.4:1)),gt==="head"&&U.kind==="ballistic"?(sn("Headshot"),et.fill(0)):gt==="head"&&Ct.stun>1&&Dn();let zt=[qt[0]/k.r,qt[1]/(k.hh+k.r),qt[2]/k.r];if(U.kind==="ballistic"){let pt=U.impulse>60,ce=gt==="neck"?"neck":gt==="head"?"skull":Sn(S,zt)[0][0],v=ce.split("_")[0],[R,J]=v==="skull"?[0,1]:v==="neck"?[pt?.8:.9,0]:v==="spine"?[pt?.5:.65,0]:Xx.has(v)?pt?[.1,.6]:[.25,.25]:v==="pelvis"?pt?[.45,.2]:[.75,.05]:pt?[.2,.3]:[.45,.1],W=ne();W>=R&&Cn(ce,W>1-J?3:2,h,"shot")}else{let pt=U.blow??(U.impulse-45)/19;if(gt==="neck")En("neck",pt*.6,h,"blow");else for(let[ce,v]of Sn(S,zt))En(ce,pt*v,h,"blow")}if(gt==="thigh"||gt==="shin"){let pt=_t[k.side===1?0:1];pt.hurt=Math.min(1,pt.hurt+(U.kind==="ballistic"?.7:.45)*(U.bleed>1.5||U.impulse>150?1.4:1)),mt[pt.thigh]=Math.max(mt[pt.thigh],pt.hurt*.5),mt[pt.shin]=Math.max(mt[pt.shin],pt.hurt*.6),jt.legWound=Math.max(jt.legWound,pt.hurt)}if(gt==="arm"){mt[S]=.9;let pt=gn.findIndex(ce=>ce.parent===S);pt>0&&(mt[pt]=.9)}if(U.kind==="ballistic"){let pt=Math.hypot(P[0],P[2])||1,ce={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[gt],v=(38+34*ne())*ce*(U.impulse>60?.5:1),R=(ne()-.5)*.35,J=Ye(((h[0]-fe[0])*jt.hz+(h[2]-fe[2])*-jt.hx)/.12,-1,1)*.65,W=P[0]/pt-jt.hz*J-P[2]/pt*R,Q=P[2]/pt+jt.hx*J+P[0]/pt*R,Pt=Math.hypot(W,Q)||1;jt.reel=[W/Pt*v,Q/Pt*v],jt.reelT=.16}Ct.mode==="balance"&&(jt.buckle=.22,jt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[gt]||.04)*(U.kind==="ballistic"?1:.6)),jt.flinch=.2,jt.clutch=gt,jt.clutchEnd=U.bleed>0?1e9:Math.max(jt.clutchEnd<1e8?0:jt.clutchEnd,Ct.clock+.9+U.stun*4);let It=(h[0]-fe[0])*jt.hz+(h[2]-fe[2])*-jt.hx,ut=gt==="arm"?-k.side:gn[S].side||(It>=0?1:-1);if(mt[ut===1?Gt.uarm_l:Gt.uarm_r]>.5&&(ut=-ut),jt.clutchArm=gt==="neck"||gt==="head"?0:ut,gt==="gut"&&U.kind==="ballistic"&&U.impulse<60&&(jt.lookDown=1.1),U.kind==="ballistic"&&jt.fleeAt>1e8){jt.fleeAt=Ct.time+.7+ne()*.7+jt.lookDown;let pt=(ne()-.5)*1.3,ce=Math.hypot(P[0],P[2])||1,v=P[0]/ce,R=P[2]/ce;jt.fleeDir=[v*Math.cos(pt)-R*Math.sin(pt),v*Math.sin(pt)+R*Math.cos(pt)]}return pn.push({type:"hit",zone:gt==="thigh"||gt==="shin"?"leg":gt,part:S,pos:h,tool:U,fatal:!Ct.alive}),gt}let j=[0,0,0],He=[0,0,0],kt=[0,0,0,1],de=[0,0,0],L=[0,0,0],M=[0,0,0,1],Z=[0,0,0],Et=[0,0,0],nt=[0,0,0],at=[0,0,0],Ft=[0,0,0];function vt(S,h,P,U){l.Set(h,P,U),a.AddTorque(N[S],l,n.EActivation_Activate)}function St(S,h,P,U,k,V){O(S,G),K(S,Et);let dt=G[0],yt=G[1],gt=G[2],qt=G[3],zt=2*(dt*yt-qt*gt),It=1-2*(dt*dt+gt*gt),ut=2*(yt*gt+qt*dt),pt=Math.hypot(U,1,k),ce=U/pt,v=1/pt,R=k/pt;return V[0]=h*(It*R-ut*v)-P*Et[0],V[1]=-P*.3*Et[1],V[2]=h*(zt*v-It*ce)-P*Et[2],V}function Yt(S,h,P,U,k,V){st(S,U,k,V),st(h,-U,-k,-V,P)}function z(S,h,P,U,k,V){O(S,G),K(S,Et);let dt=G[0],yt=G[1],gt=G[2],qt=G[3],zt=2*(dt*yt-qt*gt),It=1-2*(dt*dt+gt*gt),ut=2*(yt*gt+qt*dt),pt=Math.hypot(U,1,k),ce=U/pt,v=1/pt,R=k/pt;return l.Set(h*(It*R-ut*v)-P*Et[0],(V||0)-P*.3*Et[1],h*(zt*v-It*ce)-P*Et[2]),a.AddTorque(N[S],l,n.EActivation_Activate),It}function wt(S,h){In(kt,[0,Wa,S.side*Xa],nt),at[0]=h[0]-(j[0]+nt[0]),at[1]=h[1]-(j[1]+nt[1]),at[2]=h[2]-(j[2]+nt[2]),In(zs(kt),at,Ft);let P=Math.hypot(Ft[0],Ft[1],Ft[2])||1e-6,U=Ft[0]/P,k=Ft[1]/P,V=Ft[2]/P;P=Ye(P,.24,ss+Dr-.004);let dt=Math.acos(Ye((ss*ss+P*P-Dr*Dr)/(2*ss*P),-1,1)),yt=-U,gt=-1-yt*U,qt=-yt*k,zt=-yt*V,It=Math.hypot(gt,qt,zt)||1;gt/=It,qt/=It,zt/=It;let ut=Math.cos(dt),pt=Math.sin(dt),ce=U*ut+gt*pt,v=k*ut+qt*pt,R=V*ut+zt*pt;Le(S,ce,v,R);let J=Math.PI-Math.acos(Ye((ss*ss+Dr*Dr-P*P)/(2*ss*Dr),-1,1));I[S.shin].SetTargetAngle(J)}let xt={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Mt(S,h){let P=jt,U=Ct.clock,k=.03,V=0,dt=0,yt=P.clutch?xt[P.clutch]:null;yt&&(k=yt.spine+(1-Ct.strength)*.25,V=yt.neck),P.lookDown>0&&(V=.7,k+=.1),P.flinch>0&&(k=-.22,V=-.3),Ct.mode==="down"&&(k+=.15*Math.sin(U*1.3+P.phase[0]),dt=.25*Math.sin(U*.9+P.phase[1])),ye(Gt.chest,Ya(ai(0,1,0,k),ai(1,0,0,dt))),ye(Gt.head,ai(0,1,0,V));for(let gt of[1,-1]){let qt=gt===1?Gt.uarm_l:Gt.uarm_r,zt=gt===1?Gt.larm_l:Gt.larm_r,It;if(Ct.mode==="rise"&&P.riseT<1.5)It=[.75,-.25,-.15];else if(P.flinch>0)It=[.5,-.95,-1];else if(yt&&(P.clutchArm===0||P.clutchArm===gt))It=yt.arm;else if(Ct.mode==="down"){let ut=Math.max(0,Math.sin(U*.8+P.phase[2]+gt));It=[.4+1.5*ut*Ct.strength,-.2,-.5-.6*ut]}else{let ut=Ye(.12+2.6*S,0,1.45);It=[.1+(S>.12?Math.sin(U*13+gt*1.7)*.45*Ye(S*3,0,1):0)+.6*S,-ut,-.3-.5*Ye(S*3,0,1)]}ye(qt,Jt(It[0],It[1],gt,It[3]||0)),I[zt].SetTargetAngle(It[2])}}function Lt(S){return A(S.shin,S.p),O(S.shin,M),In(M,[0,-Hx,0],at),S.p[0]+=at[0],S.p[1]+=at[1],S.p[2]+=at[2],S.p}let Ht=[0,1,0];function me(S){A(S.shin,fe),O(S.shin,M),In(M,Ht,at);let h=at[0],P=at[1],U=at[2];S.c[0]=fe[0]-.15*h,S.c[1]=fe[1]-.15*P,S.c[2]=fe[2]-.15*U,S.gap=S.c[1]-.055-Hn(S.c[0],S.c[2]),S.k[0]=fe[0]+.22*h,S.k[1]=fe[1]+.22*P,S.k[2]=fe[2]+.22*U,O(S.thigh,G),In(G,Ht,at),S.kgap=Math.min(fe[1]+.15*P-.055,S.k[1]+.07*at[1]-.07)-Hn(S.k[0],S.k[2])}function Le(S,h,P,U){let k=-P,V=-U,dt=h,yt=Math.hypot(dt,V,1+k)||1;ye(S.thigh,[0,-dt/yt,V/yt,(1+k)/yt])}function Ut(S,h){if(Ct.mode==="fall"||Ct.mode==="down")return;Ct.mode="fall",Ct.fellBecause=h||"",jt.gettingUp=!1;for(let dt of _t)dt.swing=!1;S&&rt(Gt.chest,S[0],0,S[1]);let P=jt;P.fight=Ct.alive&&!Ct.ko?Ye(.2+.95*Ct.strength,0,1):0,P.fallT=0,P.settle=0;let U=(He[0]+L[0])*.5+(S?S[0]/40:0),k=(He[2]+L[2])*.5+(S?S[1]/40:0);Math.hypot(U,k)<.3&&(U+=(de[0]-j[0])*4,k+=(de[2]-j[2])*4),Math.hypot(U,k)<.1&&(U=P.hx,k=P.hz);let V=Math.hypot(U,k);P.fallDir[0]=U/V,P.fallDir[1]=k/V,Lt(_t[0]),Lt(_t[1]),P.lead=_t[0].p[0]*P.fallDir[0]+_t[0].p[2]*P.fallDir[1]<_t[1].p[0]*P.fallDir[0]+_t[1].p[2]*P.fallDir[1]?0:1,pn.push({type:"fall",pos:tt(Gt.chest),onFeet:Ct.onFeet})}function Se(S){let h=jt,P=Ct,U=P.mode==="rise";U&&(h.riseT+=S,h.support=Math.min(1,h.riseT/.8));let k=P.mode==="kneel",V=k||U&&h.riseT<1.9,dt=Ye(P.strength,0,1),yt=Math.sqrt(Bn/.95),gt=0,qt=0,zt=0,It=0;for(let Y=0;Y<y;Y++){let he=F[Y]/w;A(Y,fe),X(Y,Fe),gt+=fe[0]*he,qt+=fe[2]*he,zt+=Fe[0]*he,It+=Fe[2]*he}let ut=_t[0],pt=_t[1];Lt(ut),Lt(pt),me(ut),me(pt),In(kt,[0,0,1],at);let ce=Math.hypot(at[0],at[2]),v=ce>.5?(at[0]*h.hz+at[2]*-h.hx)/ce:0,R=v>.8?at[0]/ce:h.hz,J=v>.8?at[2]/ce:-h.hx;if(k)for(let Y of _t)Y.planted[0]=Y.k[0]+(Y.p[0]-Y.k[0])*.33,Y.planted[1]=Y.k[2]+(Y.p[2]-Y.k[2])*.33,!Y.kneeDown&&Y.kgap<.012&&(Y.kneeDown=!0,En("kneecap"+(Y.side===1?"_l":"_r"),-He[1]*1.3,Y.k,"fall"));let W=9;for(let Y of _t)Y.swing||(W=Math.min(W,Y.gap)),V&&(W=Math.min(W,Y.kgap));h.grip+=Ye((W<.028?1:0)-h.grip,-S/.09,S/.05),h.airT=h.grip<.5?h.airT+S:0;let Q=0,Pt=0,Kt=P.hits>0,Wt=Math.hypot(gt-Oe.start[0],qt-Oe.start[2])>8.5||P.time>h.fleeAt+16;if(!V&&P.bleed>.2&&P.time>h.fleeAt&&dt>.3&&!Wt){let Y=(.2+.6*dt)*(1-.45*h.legWound),he=Math.sin(P.clock*1.1+h.phase[3])*(.25+.9*(1-dt));Q=(h.fleeDir[0]*Math.cos(he)-h.fleeDir[1]*Math.sin(he))*Y,Pt=(h.fleeDir[0]*Math.sin(he)+h.fleeDir[1]*Math.cos(he))*Y;let ue=Math.atan2(h.hz*Q-h.hx*Pt,h.hx*Q+h.hz*Pt),xe=Ye(ue,-2.2*S,2.2*S),tn=Math.cos(xe),Ae=Math.sin(xe),hn=h.hx*tn+h.hz*Ae,un=-h.hx*Ae+h.hz*tn;h.hx=hn,h.hz=un}h.walk[0]+=(Q-h.walk[0])*Math.min(1,S*2),h.walk[1]+=(Pt-h.walk[1])*Math.min(1,S*2);let Zt,ae,ge=null;ut.swing?(Zt=pt.planted[0],ae=pt.planted[1],ge=pt):pt.swing?(Zt=ut.planted[0],ae=ut.planted[1],ge=ut):(Zt=(ut.planted[0]+pt.planted[0])/2,ae=(ut.planted[1]+pt.planted[1])/2);let Ve=gt-Zt,ee=qt-ae,Ce=ge?Hn(ge.planted[0],ge.planted[1]):Math.max(Hn(ut.planted[0],ut.planted[1]),Hn(pt.planted[0],pt.planted[1])),je=gt+zt/yt,ln=qt+It/yt,Je=je-Zt,Bt=ln-ae,b=Math.hypot(Je,Bt),D=Math.min(1,b),q=P.bleed>.2||P.stun>.05,it=Kt&&q?1-dt+.35*Math.min(1,P.stun):0,Dt=P.clock,Ot=w*(.25+4.2*it)*(V?.45:1),re=Ot*(Math.sin(Dt*1.7+h.phase[0])*.55+Math.sin(Dt*.63+h.phase[1])*.45),Pe=Ot*(Math.sin(Dt*1.4+h.phase[2])*.55+Math.sin(Dt*.51+h.phase[3])*.45);h.buckle-=S,Kt&&!V&&h.buckle<-.5&&ne()<S*((q?.12:0)+1.5*it+(Math.hypot(h.walk[0],h.walk[1])>.1?.8*h.legWound:0))&&(h.buckle=.24,h.buckleDip=.1+.2*ne()+.12*it,h.buckleLeg=ge?ge.side:ne()<.5?1:-1,Ge.push({type:"buckle",pos:[j[0],j[1],j[2]]}));let _e=1,Ie=k?Ye(h.kneelT/h.kneelMax,0,1)*(1-.6*dt):0,Ze=Ce+(k?.135+ss*Math.cos(.36+.42*Ie):V?.5:tu-.1*(1-dt)),Me=!1;if(U&&h.riseT<1&&(Ze=Ce+h.riseFrom+(.5-h.riseFrom)*(h.riseT/1)),h.buckle>0&&(Ze-=h.buckleDip),ge&&ge.hurt>0&&(Ze-=.13*ge.hurt),!V){let Y=0,he=9,ue=0;for(let xe of _t){In(kt,[0,Wa,xe.side*Xa],nt);let tn=Math.hypot((xe.swing?xe.to[0]:xe.planted[0])-j[0]-nt[0],(xe.swing?xe.to[1]:xe.planted[1])-j[2]-nt[2]),Ae=Ce-Wa+Math.sqrt(Math.max(0,Qh*Qh-tn*tn));xe.swing?(he=Ae,ue=Ye((xe.t-.4)/.4,0,1)):Ae>Y&&(Y=Ae)}Y<Ze&&(Ze=Y,Me=!0),ue>0&&he<Ze&&(Ze+=(Math.max(he,Ce+.6)-Ze)*ue)}let We=h.hT;h.hT+=Ye(Ze-h.hT,-(Me?3.2:2.2)*S,1.1*S);let On=Me?Math.min(0,(h.hT-We)/S):0,Ni=dc(Je*.9,Bt*.9,.38);O(Gt.pelvis,G),In(G,[-1,0,0],at);let Mc=Math.atan2(at[2]*h.hx-at[0]*h.hz,at[0]*h.hx+at[2]*h.hz);K(Gt.pelvis,Et);let no=nn.yawK*Mc-nn.yawD*Et[1],Ws=Math.sin(Dt*1.7+h.phase[0])*.55+Math.sin(Dt*.63+h.phase[1])*.45,Xs=Math.sin(Dt*1.4+h.phase[2])*.55+Math.sin(Dt*.51+h.phase[3])*.45;{let Y=0;if(k){let Ae=[];for(let be of _t)for(let mn of[!0,!1]){let Fn=mn?be.k:be.c,Qn=mn?be.kgap:be.gap,Fi=j[0]-Fn[0],_i=j[1]-Fn[1],vu=j[2]-Fn[2],io=Math.hypot(Fi,_i,vu)||1;Ae.push({f:be,knee:mn,from:Fn,ux:Fi/io,uy:_i/io,uz:vu/io,on:Qn<.03&&_i/io>.25,w:0,Fv:0})}let hn=ut.kneeDown||pt.kneeDown,un=.01+.1*it,dn=gt+nn.kv*zt/yt+Ws*un,pe=qt+nn.kv*It/yt+Xs*un;for(let be of _t){let mn=be.c[0]-be.k[0],Fn=be.c[2]-be.k[2],Qn=mn*mn+Fn*Fn,Fi=Qn>.0025?Ye(((dn-be.k[0])*mn+(pe-be.k[2])*Fn)/Qn,.05,.95):.3;for(let _i of Ae)_i.f===be&&(_i.w=(_i.knee?1-Fi:Fi)*.5)}let $e=(hn?Ye(w*Bn+6e3*(h.hT-j[1])-900*He[1],0,w*Bn*1.3):w*Bn*.3)*h.support,an=0,Nn=be=>Ye((.95-Math.hypot(be.ux,be.uz)/be.uy)/.25,0,1);for(let be of Ae){let mn=$e*be.w,Fn=w*Bn*.6*(1-.5*be.f.hurt)*be.uy*Nn(be);if(!be.on){an+=mn;continue}be.Fv=Math.min(mn,Fn),be.cap=Fn,an+=mn-be.Fv}for(let be of Ae)if(be.on&&an>0){let mn=Math.min(an,be.cap-be.Fv);be.Fv+=mn,an-=mn}for(let be of _t)be.Fv=0,be.on=!1;for(let be of Ae)if(be.on){let mn=be.Fv/be.uy;Yt(Gt.pelvis,be.f.shin,be.from,mn*be.ux,mn*be.uy,mn*be.uz),Y+=be.Fv,be.f.Fv+=be.Fv,be.knee&&(be.f.on=!0)}}else{for(let pe of _t){let $e=pe.c,an=j[0]-$e[0],Nn=j[1]-$e[1],be=j[2]-$e[2],mn=Math.hypot(an,Nn,be)||1;pe.u[0]=an/mn,pe.u[1]=Nn/mn,pe.u[2]=be/mn,pe.on=!pe.swing&&pe.gap<.03&&pe.u[1]>.25,pe.cap=w*Bn*(1.05+.75*dt)*(1-.5*pe.hurt)*(h.buckle>0&&h.buckleLeg===pe.side?.25:1),pe.Fv=0}let Ae=ut.on?1:0,hn=pt.on?1:0;if(ut.on&&pt.on){let pe=ut.c,$e=pt.c,an=$e[0]-pe[0],Nn=$e[2]-pe[2],be=an*an+Nn*Nn,mn=.01+.16*it,Fn=(pe[0]+$e[0])/2,Qn=(pe[2]+$e[2])/2,Fi=gt+nn.kv*(zt-h.walk[0])/yt+nn.kp*(gt-Fn)+Ws*mn,_i=qt+nn.kv*(It-h.walk[1])/yt+nn.kp*(qt-Qn)+Xs*mn;hn=be>.0025?Ye(((Fi-pe[0])*an+(_i-pe[2])*Nn)/be,0,1):.5,Ae=1-hn}let un=Ye(w*Bn+12e3*(h.hT-j[1])-1400*(He[1]-On),0,w*Bn*1.9)*h.support,dn=0;_t.forEach((pe,$e)=>{let an=un*($e===0?Ae:hn);if(!pe.on){dn+=an;return}pe.Fv=Math.min(an,pe.cap*pe.u[1]),dn+=an-pe.Fv});for(let pe of _t)if(pe.on&&dn>0){let $e=Math.min(dn,pe.cap*pe.u[1]-pe.Fv);pe.Fv+=$e,dn-=$e}for(let pe of _t)if(pe.on){let $e=-(He[0]*pe.u[0]+He[1]*pe.u[1]+He[2]*pe.u[2]),an=Math.min(pe.Fv/pe.u[1]+nn.brace*(.3+.7*dt)*(1-.6*pe.hurt)*Math.max(0,$e),pe.cap*1.25);Yt(Gt.pelvis,pe.shin,pe.c,an*pe.u[0],an*pe.u[1],an*pe.u[2]),Y+=an*pe.u[1]}else if(!pe.swing&&pe.u[1]>.25){let $e=Ye(40+7e3*pe.gap,40,280)*h.support;Yt(Gt.pelvis,pe.shin,pe.c,$e*pe.u[0],$e*pe.u[1],$e*pe.u[2])}}h.load=Y;let he=0,ue=0;if(Y>0){let Ae=gt-Zt,hn=qt-ae,un=zt-h.walk[0],dn=It-h.walk[1];if(ut.on&&pt.on&&!k){let Nn=pt.c[0]-ut.c[0],be=pt.c[2]-ut.c[2],mn=Math.hypot(Nn,be)||1,Fn=-be/mn,Qn=Nn/mn,Fi=(gt-ut.c[0])*Fn+(qt-ut.c[2])*Qn,_i=un*Fn+dn*Qn;Ae=Fi*Fn,hn=Fi*Qn,un=_i*Fn,dn=_i*Qn}let pe=k?.2/.5:(ge?nn.foot1:nn.foot2)/.95,$e=w*(.25+2*it),an=dc(-1500*(Ae-h.walk[0]*.3)-330*un+Ws*$e,-1500*(hn-h.walk[1]*.3)-330*dn+Xs*$e,Y*pe*(.25+.75*dt));he=an[0],ue=an[1]}h.reelT>0&&(h.reelT-=S,he+=h.reel[0]/.16*h.grip,ue+=h.reel[1]/.16*h.grip),st(Gt.pelvis,he*.5,0,ue*.5),st(Gt.chest,he*.5,0,ue*.5);let xe=St(Gt.chest,nn.trunkK*(.5+.5*dt)*h.support,nn.trunkD*h.support,Ni[0],Ni[1],[0,0,0]),tn=_t.filter(Ae=>Ae.on);if(tn.length){let Ae=0;for(let $e of tn)Ae+=nn.hipMax*(1-.5*$e.hurt);let hn=Math.hypot(xe[0],xe[2]),un=hn>Ae?Ae/hn:1,dn=xe[0]*un,pe=xe[2]*un;vt(Gt.chest,dn*.6,0,pe*.6),vt(Gt.pelvis,dn*.4,0,pe*.4);for(let $e of tn){let an=k?$e.k:$e.c,Nn=1/tn.length,be=j[0]-an[0],mn=j[1]-an[1],Fn=j[2]-an[2],Qn=be*be+mn*mn+Fn*Fn;Yt(Gt.pelvis,$e.shin,an,mn*pe/Qn*Nn,(Fn*dn-be*pe)/Qn*Nn,-mn*dn/Qn*Nn)}}vt(Gt.pelvis,0,Ye(no,-nn.yawMax,nn.yawMax)*Math.min(1,Y/(w*Bn)),0)}h.stepCool-=S;let qs=(Y,he)=>{let ue=b>1e-4?1/b:0,xe=.02+.2*(1-dt),tn=je-Y.planted[0],Ae=ln-Y.planted[1],hn=Math.exp(yt*Math.sqrt(_e)*he*nn.stretch*(.55+.45*dt)),un=nn.over0+nn.over1*b*dt;return[Y.planted[0]+tn*hn+Je*ue*un-h.walk[0]/yt*.55+(ne()-.5)*xe,Y.planted[1]+Ae*hn+Bt*ue*un-h.walk[1]/yt*.55+(ne()-.5)*xe]},Ys=(Y,he,ue)=>{let xe=ue[0]-he.planted[0],tn=ue[1]-he.planted[1],Ae=(.36+.36*dt)*(1-.35*Y.hurt);[xe,tn]=dc(xe,tn,Ae);let hn=(xe*R+tn*J)*Y.side;hn<nn.clear&&(xe+=(nn.clear-hn)*Y.side*R,tn+=(nn.clear-hn)*Y.side*J);let un=he.planted[0]+xe,dn=he.planted[1]+tn;return[un,dn,Math.hypot(un-ue[0],dn-ue[1])]};if(V){if(!k)for(let Y of _t){let he=gt+h.hx*-.16+R*Y.side*.12,ue=qt+h.hz*-.16+J*Y.side*.12,xe=dc(he-Y.planted[0],ue-Y.planted[1],.9*S);Y.planted[0]+=xe[0],Y.planted[1]+=xe[1]}}else if(ge){let Y=ge===ut?pt:ut;if(Y.t+=S/Y.T,Y.t<nn.aimUntil&&!Y.tidy){let he=Ys(Y,ge,qs(ge,Math.max(0,nn.landAt-Y.t)*Y.T));Y.to[0]+=(he[0]-Y.to[0])*.3,Y.to[1]+=(he[1]-Y.to[1])*.3}if(Y.t>nn.land&&Y.gap<.012||Y.t>=1.4||Y.t>=1&&Hn(Y.p[0],Y.p[2])<Ce-.12){if(Y.swing=!1,Hn(Y.p[0],Y.p[2])<Ce-.12)return Ut(null,"edge");let he=Math.hypot(Y.to[0]-Y.p[0],Y.to[1]-Y.p[2]),ue=Math.hypot(zt,It);if(he>.16&&Hn(Y.to[0],Y.to[1])-Ce>.12){let xe=ue>.05?zt/ue:-h.hx,tn=ue>.05?It/ue:-h.hz;return rt(Gt.pelvis,xe*22,26,tn*22),Ut([xe*62,tn*62],"trip")}Y.planted=[Y.p[0],Y.p[2]],h.stepCool=.03+.12*(1-dt),Kt&&!Y.tidy&&P.steps++,Ge.push({type:"step",pos:[Y.p[0],Ce,Y.p[2]],hurt:Y.hurt})}}else{let Y=Math.hypot(ut.planted[0]-pt.planted[0],ut.planted[1]-pt.planted[1]),he=nn.thr-.035*(1-dt),ue=b<.06&&Math.hypot(zt,It)<.12&&Y>.36&&h.stepCool<-.35&&dt>.45;if(h.stepCool<=0&&(b>he||ue)){let xe,tn;if(ue)xe=h.lastFoot===0?1:0,tn=[_t[1-xe].planted[0]+_t[xe].side*R*.2,_t[1-xe].planted[1]+_t[xe].side*J*.2];else{let dn=[0,1].map($e=>{let an=Ys(_t[$e],_t[1-$e],qs(_t[1-$e],nn.firstAim));return{tgt:an,move:Math.hypot(an[0]-_t[$e].p[0],an[1]-_t[$e].p[2])}}),pe=$e=>$e.tgt[2]-.25*Math.min($e.move,.4)+($e.move<.08?1:0);xe=Math.abs(pe(dn[0])-pe(dn[1]))<.02?h.lastFoot===0?1:0:pe(dn[0])<pe(dn[1])?0:1,tn=[dn[xe].tgt[0],dn[xe].tgt[1]]}let Ae=_t[xe],hn=_t[1-xe];Ae.swing=!0,Ae.t=0,Ae.from=[Ae.p[0],Ae.p[1],Ae.p[2]],Ae.to=tn;let un=Math.hypot(Ae.to[0]-Ae.p[0],Ae.to[1]-Ae.p[2]);Ae.T=nn.tscale*Ye(.15+.24*un,.17,.34)*(1.3-.3*dt)*(b>.3?.75:1)*(hn.hurt>0?1-.3*hn.hurt:1),Ae.lift=Ae.hurt>.3?.035:.07+.09*ne()+.05*Math.min(1,b*2),Ae.tidy=ue,h.lastFoot=xe}}for(let Y of _t){if(X(Y.shin,Z),k){let ue=.36+.42*(Ye(h.kneelT/h.kneelMax,0,1)*(1-.6*dt))+.08*Math.sin(P.clock*.9+h.phase[Y.side===1?0:1])*(1-dt);In(zs(kt),[h.hx*Math.sin(ue)+R*Y.side*.1,-Math.cos(ue),h.hz*Math.sin(ue)+J*Y.side*.1],Ft);let xe=Math.hypot(Ft[0],Ft[1],Ft[2])||1;Le(Y,Ft[0]/xe,Ft[1]/xe,Ft[2]/xe),I[Y.shin].SetTargetAngle(ue+Math.PI/2);continue}if(Y.swing){let he=Ye(Y.t,0,1),ue=he*he*(3-2*he),xe=nn.bulge*Math.sin(Math.PI*he)*Y.side;Y.ik[0]=Y.from[0]+(Y.to[0]-Y.from[0])*ue+R*xe,Y.ik[2]=Y.from[2]+(Y.to[1]-Y.from[2])*ue+J*xe,Y.ik[1]=Ce+Math.max(Y.lift*Math.sin(Math.PI*he),he<nn.land?.035:0)-(he>nn.land?.045*(he-nn.land)/(1-nn.land):0);let tn=nn.swingK,Ae=170*Math.sqrt(nn.swingK/1900),hn=[tn*(Y.ik[0]-Y.p[0])-Ae*Z[0],tn*(Y.ik[1]-Y.p[1])-Ae*Z[1],tn*(Y.ik[2]-Y.p[2])-Ae*Z[2]],un=Math.hypot(hn[0],hn[1],hn[2]),dn=un>nn.swingMax?nn.swingMax/un:1,pe=hn[0]*dn*h.support,$e=(hn[1]*dn-(Y.t>1?160:0))*h.support,an=hn[2]*dn*h.support;st(Y.shin,pe,$e,an,Y.p);{let Nn=nn.swingHip;st(Gt.pelvis,-pe*Nn,-$e*Nn,-an*Nn,Y.p),st(Gt.chest,-pe*(1-Nn),-$e*(1-Nn),-an*(1-Nn),Y.p)}}else Y.gap<.03&&(Y.planted[0]+=(Y.p[0]-Y.planted[0])*Math.min(1,S*30),Y.planted[1]+=(Y.p[2]-Y.planted[1])*Math.min(1,S*30)),Y.ik[0]=Y.planted[0],Y.ik[1]=Ce,Y.ik[2]=Y.planted[1];wt(Y,Y.ik)}Mt(D,S),Kt&&(P.onFeet+=S,P.stumbled+=Math.hypot(gt-h.lastCom[0],qt-h.lastCom[1])),h.lastCom[0]=gt,h.lastCom[1]=qt;let Zs=Y=>Y.swing?Math.hypot(gt-Y.p[0],qt-Y.p[2]):Math.hypot(gt-Y.planted[0],qt-Y.planted[1]),$s=Math.min(Zs(ut),Zs(pt));O(Gt.chest,G);let ws=1-2*(G[0]*G[0]+G[2]*G[2]);if(!P.alive||P.ko)return Ut(null,"out");if(U){if(h.riseT>h.riseFail||dt<.3)return Ge.push({type:"gaveout",pos:[j[0],j[1],j[2]]}),Ut(null,"gave out");if(h.riseT>2.7&&j[1]-Ce>tu-.16){P.mode="balance",P.getups++,h.offT=0,h.stepCool=.2;for(let Y of _t)Y.swing=!1,Y.planted=[Y.p[0],Y.p[2]];Ge.push({type:"up",pos:[j[0],j[1],j[2]]})}else if(h.riseT>5)return Ut(null,"gave out");return}h.offT=!V&&($s>.46||ws<.8)?h.offT+S:Math.max(0,h.offT-2*S);let ot=$s>(V&&!h.gettingUp?.5:.7)?"reach":h.offT>.3?"lean":b>2.4?"capture":ws<.45&&!h.gettingUp?"tilt":j[1]-Ce<(h.gettingUp?.17:V?.3:.52)?"height":"",Be=()=>{P.mode="kneel",P.kneels++,h.kneelT=0,h.kneelMax=1.6+3.2*ne();for(let Y of _t)Y.swing=!1,Y.kneeDown=!1,Y.planted=[Y.p[0],Y.p[2]];Ge.push({type:"kneel",pos:[j[0],j[1],j[2]]})};if(ot==="height"&&!V&&Kt&&$s<.45&&Math.hypot(zt,It)<1.4&&ws>.75)return Be();if(ot)return Ut(null,ot);if(h.airT>.3)return Ut(null,"air");if(P.paralysed)return Ut(null,"spine");if(h.legT=!V&&(ut.broken>=3||pt.broken>=3)?h.legT+S:0,h.legT>.35)return Ut(null,"leg");let rn=Math.hypot(zt,It);if(k&&rn>2)return Ut(null,"thrown");if(V){if(h.kneelT+=S,k&&(h.gettingUp?h.kneelT>.7&&ws>.9&&dt>.3:h.kneelT>Math.min(h.kneelMax,1.4)&&dt>.52&&P.bleed<.5)&&h.grip>.9&&Qe()){P.mode="rise",h.riseT=1.9,h.riseFail=9,h.support=1,h.hT=j[1],h.offT=0,h.buckle=-1.5;for(let Y of _t)Y.swing=!1,Y.planted=[Y.p[0],Y.p[2]];h.gettingUp||Ge.push({type:"rise",pos:[j[0],j[1],j[2]],fromKnees:!0}),h.gettingUp=!1}else if(dt<.2||h.kneelT>h.kneelMax){let Y=ne()<.5?1:-1,he=ne()<.45;Ut(he?[R*Y*28,J*Y*28]:[h.hx*30,h.hz*30],"slump")}}else Kt&&rn<1.5&&(dt<.5||h.buckle>0&&dt<.72&&h.buckleDip>.24)&&Be()}function De(S,h){let P=jt,U=Ct;me(_t[0]),me(_t[1]);let k=Math.min(_t[0].gap,_t[0].kgap,_t[1].gap,_t[1].kgap);P.grip+=Ye((k<.03?1:0)-P.grip,-h/.09,h/.05);let V=S*Ye(1-P.fallT/(.45+.6*S),0,1);if(V>0)for(let pt of _t){let ce=pt.kgap<.03,v=pt.gap<.03;if(!ce&&!v)continue;Lt(pt);let R=ce?pt.k:pt.p,J=ce?ss+.1:Qh+.08;In(kt,[0,Wa,pt.side*Xa],nt);let W=j[0]+nt[0]-R[0],Q=j[1]+nt[1]-R[1],Pt=j[2]+nt[2]-R[2],Kt=Math.hypot(W,Q,Pt)||1;if(Kt>J||Q/Kt<.25)continue;let Wt=(He[0]*W+He[1]*Q+He[2]*Pt)/Kt,Zt=Ye(w*Bn*.3-240*Wt,0,w*Bn*.45)*V*(1-.7*pt.hurt);Yt(Gt.pelvis,pt.shin,R,Zt*W/Kt,Zt*Q/Kt,Zt*Pt/Kt)}In(zs(kt),[P.fallDir[0],0,P.fallDir[1]],Ft);let dt=Ft[0],yt=Ft[2],gt=Math.max(0,dt),qt=Ye((.42-(j[1]-Hn(j[0],j[2])))/.2,0,1);_t.forEach((pt,ce)=>{let v,R,J;ce===P.lead?(v=dt*.95,R=yt*.95+pt.side*.08,J=.95-.65*gt):(v=dt*.15-.3*(1-gt),R=pt.side*.1,J=1.65),v*=1-qt,J*=1-.75*qt;let W=Math.hypot(v,1,R);Le(pt,v/W,-1/W,R/W),I[pt.shin].SetTargetAngle(J)}),O(Gt.chest,G),In(zs(G),[P.fallDir[0],0,P.fallDir[1]],Ft);let zt=Ft[0],It=Ft[2],ut=P.grip<.3&&P.fallT>.35?1:0;if(ye(Gt.chest,ai(0,1,0,.12+.55*Math.max(0,zt))),ye(Gt.head,ai(0,1,0,zt>0?.7*zt:.5*zt)),et[Gt.head]=Math.max(et[Gt.head],.95),!(P.flinch>0))for(let pt of[1,-1]){let ce=Ye(It*pt,-1,1),v=ut*.55*Math.sin(U.clock*11+pt*1.7),R=Ye(-zt*1.25,-.8,1.3)+.15+v,J=-.25-.9*Math.max(0,ce)+.3*Math.max(0,-ce);ye(pt===1?Gt.uarm_l:Gt.uarm_r,Jt(R,J,pt)),I[pt===1?Gt.larm_l:Gt.larm_r].SetTargetAngle(-.35-.3*ut)}}let Xt=[[0,0,0],[0,0,0]],C=[[0,0,0],[0,0,0]];function _(S,h,P,U,k,V){l.Set(U,k,V),c.Set(h[0],h[1],h[2]),a.AddForce(N[P],l,c,n.EActivation_Activate),st(S,-U,-k,-V,h)}function B(S){let h=jt,P=Ct,U=Ye(P.strength,0,1);h.upT+=S,h.support=1;for(let Bt=0;Bt<y;Bt++)a.ActivateBody(N[Bt]);if(!P.alive||P.ko)return Ut(null,"out");if(h.upT>h.riseFail*2.2||U<.3||h.upT>8)return Ge.push({type:"gaveout",pos:[j[0],j[1],j[2]]}),Ut(null,"gave out");let k=_t[0],V=_t[1];Lt(k),Lt(V),me(k),me(V);let dt=Hn(j[0],j[2]);O(Gt.chest,G);let yt=In(G,[-1,0,0],[0,0,0]),gt=yt[1]<(h.prone?.25:-.45);if(Mt(0,S),[1,-1].forEach((Bt,b)=>{let D=Bt===1?Gt.uarm_l:Gt.uarm_r,q=Bt===1?Gt.larm_l:Gt.larm_r;A(q,fe),O(q,M),In(M,Ht,at),Xt[b][0]=fe[0]-.11*at[0],Xt[b][1]=fe[1]-.11*at[1],Xt[b][2]=fe[2]-.11*at[2],A(D,fe),O(D,M),In(M,Ht,at),C[b][0]=fe[0]+.15*at[0],C[b][1]=fe[1]+.15*at[1],C[b][2]=fe[2]+.15*at[2]}),h.prone&&!gt&&h.flops++,h.prone=gt,h.flops>=3)return Ge.push({type:"gaveout",pos:[j[0],j[1],j[2]]}),Ut(null,"gave out");if(!gt&&h.upStage===1&&de[1]-dt<.3){let Bt=h.rollSide,b=Bt===1?k:V,D=Bt===1?V:k,q=Ye((h.rollT-.45)/.3,0,1);{let Dt=-Math.sin(1.05),Ot=-Math.cos(1.05),re=Bt*(.15-1.1*q),Pe=Math.hypot(Dt,Ot,re);Le(b,Dt/Pe,Ot/Pe,re/Pe)}I[b.shin].SetTargetAngle(2.2-.7*q),Le(D,0,-1,-Bt*.05),I[D.shin].SetTargetAngle(.1),ye(Gt.chest,Ya(ai(0,1,0,.1),ai(1,0,0,-Bt*.4))),ye(Bt===1?Gt.uarm_l:Gt.uarm_r,Jt(1.2,.9,Bt)),I[Bt===1?Gt.larm_l:Gt.larm_r].SetTargetAngle(-.6),ye(Bt===1?Gt.uarm_r:Gt.uarm_l,Jt(1,.7,-Bt)),I[Bt===1?Gt.larm_r:Gt.larm_l].SetTargetAngle(-1.9);let it=In(kt,[-1,0,0],[0,0,0])[1];if(h.rollT>.3&&it>.2&&b.gap<.05&&Math.hypot(b.c[0]-j[0],b.c[2]-j[2])<.78){In(kt,[0,0,-Bt],at);let Dt=w*Bn*.95*(.4+.6*U)*(1-.6*b.hurt)*Ye((h.rollT-.3)/.2,0,1);_(b.shin,b.c,Gt.pelvis,at[0]*Dt*.7,Dt,at[2]*Dt*.7);let Ot=Bt===1?0:1,re=Bt===1?Gt.larm_l:Gt.larm_r;if(Xt[Ot][1]-.04-Hn(Xt[Ot][0],Xt[Ot][2])<.05&&mt[re]<.5&&Math.hypot(Xt[Ot][0]-C[Ot][0],Xt[Ot][2]-C[Ot][2])<.5){let Pe=w*Bn*.4*(.4+.6*U)*Ye((h.rollT-.3)/.2,0,1);_(re,Xt[Ot],Gt.chest,at[0]*Pe*.5,Pe,at[2]*Pe*.5)}}h.rollT+=S,h.rollT>1.3&&(h.rollSide=-h.rollSide,h.rollT=-.2),h.chT=de[1],h.hT=j[1],h.upStage=1,h.stageT=0;return}let qt=Ye((de[1]-dt-.16)/.26,0,1);for(let Bt of[1,-1])ye(Bt===1?Gt.uarm_l:Gt.uarm_r,Jt(.25+1.1*qt,-1.05+.85*qt,Bt)),I[Bt===1?Gt.larm_l:Gt.larm_r].SetTargetAngle(-2.2+1.9*qt);ye(Gt.chest,ai(0,1,0,.05)),ye(Gt.head,ai(0,1,0,-.35)),In(G,Ht,at);let zt=Math.hypot(at[0],at[2])||1,It=at[0]/zt,ut=at[2]/zt,pt=ut,ce=-It,v=(Bt,b,D,q,it,Dt,Ot,re=1)=>{X(Bt,Z);let Pe=re*700*(D-b[0])-45*Z[0],_e=q===null?0:900*(q-b[1])-45*Z[1],Ie=re*700*(it-b[2])-45*Z[2],Ze=Math.hypot(Pe,_e,Ie),Me=Ze>Ot?Ot/Ze:1;st(Bt,Pe*Me,_e*Me,Ie*Me,b),l.Set(-Pe*Me,-_e*Me,-Ie*Me),c.Set(b[0],b[1],b[2]),a.AddForce(N[Dt],l,c,n.EActivation_Activate)};[1,-1].forEach((Bt,b)=>v(Bt===1?Gt.larm_l:Gt.larm_r,Xt[b],C[b][0]+It*.03,null,C[b][2]+ut*.03,Gt.chest,160));let R=(k.k[0]+V.k[0])/2,J=(k.k[2]+V.k[2])/2,W=-((j[0]-R)*It+(j[2]-J)*ut);O(Gt.chest,G);let Q=1-2*(G[0]*G[0]+G[2]*G[2]),Pt=k.kgap<.04&&V.kgap<.04&&j[1]-dt>.4&&de[1]-dt>.33;if(h.baseT=Pt?h.baseT+S:0,h.upStage===1&&h.upT>.8&&h.baseT>.15&&(h.upStage=2,h.stageT=0),h.lostT=h.upStage>=2&&(k.kgap>.08||V.kgap>.08||j[1]-dt<.3)?h.lostT+S:0,h.lostT>.25&&(h.upStage=1,h.stageT=0,h.baseT=0,h.lostT=0,h.chT=de[1],h.hT=j[1],h.rollT=-.5),h.upStage===2&&(W>.2||h.stageT>.9)&&(h.upStage=3,h.stageT=0),h.stageT+=S,h.upStage>=2&&h.stageT>3)return Ge.push({type:"gaveout",pos:[j[0],j[1],j[2]]}),Ut(null,"gave out");for(let Bt of _t){let b=h.upStage===1?.12:.55;In(zs(kt),[It*b+pt*Bt.side*.1,-1,ut*b+ce*Bt.side*.1],Ft);let D=Math.hypot(Ft[0],Ft[1],Ft[2])||1;Le(Bt,Ft[0]/D,Ft[1]/D,Ft[2]/D),I[Bt.shin].SetTargetAngle(h.upStage===1?1.6:1.9),h.upStage===1&&(In(kt,[0,Wa,Bt.side*Xa*1.3],nt),v(Bt.shin,Bt.k,j[0]+nt[0]+It*.06,null,j[2]+nt[2]+ut*.06,Gt.pelvis,160))}h.chT=Math.min(dt+.43,h.chT+.75*S);let Kt=Ye(.5*w*Bn+5e3*(h.chT-de[1])-700*L[1],0,.8*w*Bn),Wt=[];[1,-1].forEach((Bt,b)=>{let D=Bt===1?Gt.larm_l:Gt.larm_r;Xt[b][1]-.04-Hn(Xt[b][0],Xt[b][2])>.05||Math.hypot(Xt[b][0]-C[b][0],Xt[b][2]-C[b][2])>.3||mt[D]>.5||mt[Bt===1?Gt.uarm_l:Gt.uarm_r]>.5||Wt.push([D,Xt[b]])});let Zt=h.upStage===2?260:h.upStage===3?90:0,ae=[0,1].filter(Bt=>mt[Bt===0?Gt.larm_l:Gt.larm_r]<.5&&mt[Bt===0?Gt.uarm_l:Gt.uarm_r]<.5).length,ge=Wt.length>=Math.max(1,ae)||h.upStage>1||de[1]-dt>.3;ge||(h.chT=de[1]);for(let[Bt,b]of ge?Wt:[]){let D=Math.min(Kt/Wt.length,w*Bn*.55*(.4+.6*U)),q=Math.min(Zt/Wt.length,D*.55);_(Bt,b,Gt.chest,-It*q,D,-ut*q)}h.hT=Math.min(dt+(h.upStage===1?.47:.5),h.hT+.6*S,Math.max(h.hT-1.5*S,de[1]+.03));let Ve=Ye(.6*w*Bn+5e3*(h.hT-j[1])-700*He[1],0,1*w*Bn),ee=[];for(let Bt of _t){let b=Bt.c[0]-Bt.k[0],D=Bt.c[2]-Bt.k[2],q=b*b+D*D||1,it=Ye(((j[0]-Bt.k[0])*b+(j[2]-Bt.k[2])*D)/q,0,.85),Dt=Math.hypot(Bt.k[0]-j[0],Bt.k[2]-j[2]);Bt.kgap<.05&&Dt<.56&&(h.upT<.6||Dt<.42)&&ee.push([Bt,Bt.k,1-it]),h.upStage>=2&&Bt.gap<.05&&it>.05&&ee.push([Bt,Bt.c,it])}let Ce=ee.filter(Bt=>Bt[1]===Bt[0].k).length,je=_t.filter(Bt=>Bt.broken<2).length,ln=h.upStage>1||Ce>=Math.max(1,je)||j[1]-dt>.34;ln||(h.hT=j[1]);let Je=0;for(let Bt of ee)Je+=Bt[2];if(Je>0&&ln)for(let[Bt,b,D]of ee)_(Bt.shin,b,Gt.pelvis,0,Math.min(Ve*D/Je,w*Bn*.7*(1-.5*Bt.hurt)),0);if(h.upStage>=2){let Bt=h.upStage===3&&Q>.6?.15:.27,b=-(He[0]*It+He[2]*ut),D=Ye(1800*(Bt-W)-220*b,-150,520)*(.4+.6*U),q=_t.filter(it=>it.kgap<.05);for(let it of q)Yt(Gt.pelvis,it.shin,it.k,-It*D/q.length,0,-ut*D/q.length)}if(h.upStage===3){let Bt=St(Gt.chest,520*(.5+.5*U),70,0,0,[0,0,0]),b=Math.hypot(Bt[0],Bt[2]),D=230,q=b>D?D/b:1,it=Bt[0]*q,Dt=Bt[2]*q,Ot=_t.filter(re=>re.kgap<.05);if(Ot.length){vt(Gt.chest,it*.6,0,Dt*.6),vt(Gt.pelvis,it*.4,0,Dt*.4);for(let re of Ot){let Pe=j[0]-re.k[0],_e=j[1]-re.k[1],Ie=j[2]-re.k[2],Ze=Pe*Pe+_e*_e+Ie*Ie,Me=1/Ot.length;Yt(Gt.pelvis,re.shin,re.k,_e*Dt/Ze*Me,(Ie*it-Pe*Dt)/Ze*Me,-_e*it/Ze*Me)}}}if(h.upStage===3&&Q>.8&&h.stageT>.3){h.hx=It,h.hz=ut,In(kt,[-1,0,0],at);let Bt=Math.hypot(at[0],at[2]);Bt>.5&&(h.hx=at[0]/Bt,h.hz=at[2]/Bt),P.mode="kneel",h.gettingUp=!0,h.kneelT=0,h.kneelMax=4,h.hT=j[1];for(let b of _t)b.swing=!1,b.kneeDown=!0,b.planted=[b.p[0],b.p[2]]}}function lt(S){let h=jt,P=Ct,U=P.clock;h.support=Math.max(0,h.support-S/.14);let k=P.alive&&!P.ko;k||(h.fight=0);let V=P.mode==="fall"?h.fight*Ye(1-(h.fallT-1.3)/1.2,0,1)*(h.settle>.1?.5:1):0,dt=k?.1+.32*P.strength:0;for(let yt=1;yt<y;yt++){let gt=gn[yt].zone,qt=Math.max(dt,V*(gt==="arm"?.85:gt==="thigh"||gt==="shin"?.75:.7));et[yt]+=Ye(qt-et[yt],-(P.alive?3:1.1)*S,2*S)}if(V>.12)De(V,S);else if(k){for(let yt of _t){let gt=U*(1.1+.5*P.strength)+h.phase[yt.side===1?0:1];ye(yt.thigh,ai(0,1,0,.35+.4*Math.sin(gt))),I[yt.shin].SetTargetAngle(.7+.6*Math.sin(gt+1.3))}Mt(0,S)}if(P.mode==="fall"){h.fallT=(h.fallT||0)+S;let yt=j[1]-Hn(j[0],j[2])<.45||Ct.restTimer>.7||h.fallT>4;if(h.settle=yt&&Math.hypot(He[0],He[1],He[2])<(h.fallT>4?1.2:.6)?h.settle+S:0,h.settle>.35){P.mode="down",P.downAt=P.time,h.settle=0,h.fallT=0,Ge.push({type:"down",pos:[de[0],de[1],de[2]],onFeet:P.onFeet});let gt=Hn(j[0],j[2]),qt=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([It,ut])=>Math.abs(Hn(j[0]+It,j[2]+ut)-gt)<.05)&&j[1]-gt<.5,zt=Ye((P.blood-10)/70,0,1)*(1-.3*Math.min(1,P.stun));k&&zt>.42&&h.riseTries<2&&qt&&Qe()?h.riseAt=P.time+.9+1.6*ne()+2.5*Math.max(0,P.stun-.25):(h.riseAt=0,P.spent=!0)}}else if(P.mode==="down"&&h.riseAt>0&&P.time>h.riseAt){if(h.riseAt=0,!k||P.strength<.36||!Qe()){P.spent=!0;return}O(Gt.chest,G);let yt=In(G,[-1,0,0],at)[1]>0,gt=A(Gt.head,fe),qt=gt[0]-j[0],zt=gt[2]-j[2],It=Math.hypot(qt,zt)||1,ut=yt?-1:1;h.hx=ut*qt/It,h.hz=ut*zt/It,P.mode="rise",h.riseT=0,h.riseTries++,h.support=1,h.offT=0,h.buckle=0,h.kneelT=0,h.riseFrom=Math.max(.12,j[1]-Hn(j[0],j[2])),h.hT=j[1],h.upT=0,h.rollT=0,h.chT=de[1],h.gettingUp=!1,h.upStage=1,h.stageT=0,h.baseT=0,h.lostT=0,h.prone=!1,h.flops=0,h.rollSide=ne()<.5?1:-1,h.riseFail=ne()<Ye((.75-P.strength)*1.6+.35*h.legWound,0,.9)?.9+ne()*1.2:9;for(let pt of _t)Lt(pt),pt.swing=!1,pt.planted=[pt.p[0],pt.p[2]];h.lastCom[0]=j[0],h.lastCom[1]=j[2],Ge.push({type:"rise",pos:[j[0],j[1],j[2]]})}}function At(S){for(Ge.length=0;pn.length;)Ge.push(pn.shift());let h=Ct,P=jt;h.clock+=S,h.hits>0&&(h.time+=S);let U=0;if(h.alive){for(let ut of bt){let pt=Math.min(ut.rate*S,ut.left);ut.left-=pt,h.blood-=pt,ut.left>0&&(U+=ut.rate)}h.blood=Math.max(0,h.blood),h.blood<=0&&sn("Bled out")}if(h.bleed=U,h.stun=Math.max(0,h.stun-.2*S),(!h.alive||h.ko)&&(h.spent=!0),h.strength=h.alive&&!h.ko?Ye((h.blood-10)/70,0,1)*(1-.75*Math.min(1,h.stun)):0,P.flinch-=S,P.lookDown-=S,P.clutch&&h.clock>P.clutchEnd&&(P.clutch=null),A(Gt.pelvis,j),X(Gt.pelvis,He),O(Gt.pelvis,kt),A(Gt.chest,de),X(Gt.chest,L),h.mode==="balance"||h.mode==="kneel"||h.mode==="rise"){for(let ut=1;ut<y;ut++){let ce=gn[ut].zone==="thigh"||gn[ut].zone==="shin"?.95:.35+.65*h.strength;et[ut]+=Ye(ce-et[ut],-3*S,3*S)}h.mode==="rise"&&P.riseT<1.9?B(S):Se(S)}else lt(S);Rt(),s.Step(S,1);let k=0;for(let ut=0;ut<y;ut++){X(ut,Z);let pt=Z[0]-ht[ut*3],ce=Z[1]-ht[ut*3+1]+Bn*S,v=Z[2]-ht[ut*3+2];ht[ut*3]=Z[0],ht[ut*3+1]=Z[1],ht[ut*3+2]=Z[2];let R=Math.hypot(pt,ce,v);k=Math.max(k,Math.hypot(Z[0],Z[1],Z[2])),Nt[ut]-=S;let J=h.mode==="fall"||h.mode==="down",W=Nt[ut]<=0||Nt[ut]<.33&&(A(ut,fe),fe[1]-Hn(fe[0],fe[2])<gn[ut].r+gn[ut].hh+.1);if(h.hits>0&&J&&R>2.2&&W){Nt[ut]=.18;let Q=gn[ut],Pt=R*(Q.zone==="head"?5:Q.zone==="chest"||Q.zone==="gut"?1.6:.8);h.damage+=Pt,h.impacts++;let Kt=tt(ut);Ge.push({type:"impact",part:ut,zone:Q.zone,pos:Kt,dv:R,dmg:Pt}),O(ut,G),In(zs(G),[-pt/R,-ce/R,-v/R],at);for(let[Wt,Zt]of Sn(ut,at))En(Wt,R*Zt,Kt,"fall");Q.zone==="head"&&En("neck",R*.9,Kt,"fall"),Q.zone==="head"&&(h.stun=Math.min(1.6,h.stun+R*.09),h.stun>1.15&&Dn())}}if(Ee==="window")for(let ut=0;ut<y;ut++){if(A(ut,fe),fe[1]>we.glassY+.6||fe[1]<we.glassY-.3)continue;let pt=Math.hypot(ht[ut*3],ht[ut*3+1],ht[ut*3+2]);if(pt<1.6)continue;let ce=gn[ut].r+gn[ut].hh+.06+pt*S*2;if(!(Math.abs(fe[1]-we.glassY)>ce))for(let v of f.panes)v.broken||fe[0]<v.min[0]-.1||fe[0]>v.max[0]+.1||fe[2]<v.min[1]-.1||fe[2]>v.max[1]+.1||x(v,[ht[ut*3],ht[ut*3+1],ht[ut*3+2]])}if(h.hits===0)return Ge;h.lowest=Math.min(h.lowest,j[1]),h.drop=Math.max(0,Oe.start[1]+.93-h.lowest-.85);let V=Math.max(Math.hypot(ht[0],ht[1],ht[2]),Math.hypot(ht[3],ht[4],ht[5])),dt=_t.some(ut=>ut.swing&&!ut.tidy),yt=_t.some(ut=>ut.swing&&ut.tidy),gt=h.mode==="balance"?!dt&&V<(yt?.35:.2):k<.15;h.restTimer=gt?h.restTimer+S:0;let qt=h.restTimer>1.1,zt=h.stun>.05?2.6:1.5,It=0;if(h.alive?h.bleed>.01?It=0:h.mode==="balance"?It=h.restTimer/zt:h.mode==="rise"||h.mode==="down"&&!h.spent?It=0:It=Math.max(h.restTimer/1.1,h.mode==="down"?(h.time-h.downAt)/3.5:0):It=Math.min(h.restTimer/1.1,(h.time-h.diedAt)/1.6),h.wrap=Ye(It,0,1),!h.done){let ut="";!h.alive&&qt&&h.time-h.diedAt>1.6?ut=h.outcome:h.alive&&h.bleed<=.01&&(h.mode==="fall"&&qt||h.mode==="down"&&h.spent&&(qt||h.time-h.downAt>3.5)||h.mode==="balance"&&h.restTimer>zt||h.ko&&qt)?ut=h.ko?"Out cold":h.mode==="balance"?"Still standing":"Down, alive":h.time>80&&(ut="Time"),ut&&(h.done=!0,h.outcome=ut,Ge.push({type:"done",outcome:ut}))}return Ge}function se(){let S=Ct,h=!S.alive,P=Object.values(S.bones),U=[["Stagger steps",String(S.steps),Math.min(S.steps,40)*14],["Stumbled",S.stumbled.toFixed(1)+" m",Math.round(Math.min(S.stumbled,12)*18)],["Knee drops",String(S.kneels),S.kneels*120],["Put down",S.downAt>=0?"yes":"\u2014",S.downAt>=0?90:0],["Got back up",String(S.getups),S.getups*140],["Hard landings",String(S.impacts),Math.round(S.damage*Wx)],["Bones",String(P.length),P.reduce((V,dt)=>V+nu[dt],0)],["Fell",S.drop.toFixed(1)+" m",Math.round(S.drop*65)],["Glass",S.glass+(S.glass===1?" pane":" panes"),S.glass*130],["Trick shots",String(S.fallHits),S.fallHits*150+S.airHits*250],["Out cold",S.ko?"yes":"\u2014",S.ko?150:0],[h?S.outcome:"Bled out",h?S.diedAt.toFixed(1)+" s":"\u2014",h?S.diedAt>.3?260:60:0]];return{lines:U.filter((V,dt)=>V[2]>0||dt<3),total:U.reduce((V,dt)=>V+dt[2],0)}}function Qt(S){bi[S]&&(Ee=S,Oe=bi[S],Ke())}let ie=[0,0,0,1];return Ke(),{parts:gn,state:Ct,wounds:bt,feet:_t,step:At,hit:$t,reset:Ke,payout:se,pos:tt,mass:F,totalMass:w,statics:p,setLevel:Qt,groundY:Hn,get level(){return Oe},get levelKey(){return Ee},glass:{tiles:f.tiles,panes:f.panes,transform(S,h){let P=f.tiles[S];return ct(P.id,h),H(P.id,ie),h[3]=ie[0],h[4]=ie[1],h[5]=ie[2],h[6]=ie[3],h}},transform(S,h){A(S,h);let P=a.GetRotation(N[S]);return h[3]=P.GetX(),h[4]=P.GetY(),h[5]=P.GetZ(),h[6]=P.GetW(),h},_debug:{tune:nn,joints:I,tone:et,IDX:Gt,ctl:jt,impulse:rt,armQ:Jt,setTarget:ye}}}var hu={};Mu(hu,{GOALS:()=>as,LEVEL_STARS:()=>Gs,SHOP:()=>rs,TOOL_ORDER:()=>pc,TOTAL_STARS:()=>mc,actionsPerTake:()=>Za,blocked:()=>$a,buy:()=>ru,finishTake:()=>lu,levelOpen:()=>Hs,loadSave:()=>iu,multiplier:()=>Ur,newSave:()=>Nr,nextBuy:()=>au,nextGoal:()=>ou,owns:()=>Di,stars:()=>Fr,tools:()=>su,unlockEverything:()=>cu});var pc=["poke","shove","bat","pistol","shotgun","ram"],rs=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2600,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:12e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:36e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:9e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:23e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:115e3,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:5200},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:29e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:78e3,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:7800}],Nf={"pay.1":.25,"pay.2":.3,"pay.3":.4},Gs={yard:0,stairs:1,window:6},as={yard:[{id:"y1",text:"Make him take a step",reward:30,test:n=>n.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:n=>n.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:n=>n.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:n=>n.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:n=>n.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(n,t)=>n.drop>=3&&t===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:n=>n.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:n=>n.drop>=3&&n.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:n=>n.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:n=>n.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(n,t)=>n.drop>=2.5&&t===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:n=>n.airHits>=1}]},mc=Object.values(as).reduce((n,t)=>n+t.length,0);function Nr(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1,muted:!1}}function iu(n){try{let t=JSON.parse(n);if(t&&t.v===1&&Array.isArray(t.owned)&&Array.isArray(t.goals))return Object.assign(Nr(),t)}catch{}return Nr()}var Di=(n,t)=>n.owned.includes(t),Fr=n=>n.goals.length,Hs=(n,t)=>Fr(n)>=(Gs[t]||0),su=n=>pc.filter(t=>t==="poke"||Di(n,"tool."+t)),Za=n=>1+["actions.2","actions.3","actions.4"].filter(t=>Di(n,t)).length,Ur=n=>Object.keys(Nf).reduce((t,e)=>Di(n,e)?t*(1+Nf[e]):t,1);function $a(n,t){return Di(n,t.id)?"Owned":t.needs&&!Di(n,t.needs)?"Needs "+rs.find(e=>e.id===t.needs).name:n.bank<t.price?"Not enough":""}function ru(n,t){let e=rs.find(i=>i.id===t);return!e||$a(n,e)?!1:(n.bank-=e.price,n.owned.push(t),!0)}function au(n){return rs.filter(t=>!Di(n,t.id)&&(!t.needs||Di(n,t.needs))).sort((t,e)=>t.price-e.price)[0]||null}function ou(n,t){return(as[t]||[]).find(e=>!n.goals.includes(e.id))||null}function lu(n,t,e,i){let s=Math.round(i*Ur(n)),r=(as[t]||[]).filter(u=>!n.goals.includes(u.id)&&u.test(e,e.hits)),a=r.reduce((u,p)=>u+p.reward,0),o=Object.keys(Gs).filter(u=>Hs(n,u));for(let u of r)n.goals.push(u.id);let l=Object.keys(Gs).filter(u=>Hs(n,u)&&!o.includes(u)),c=s>(n.best[t]||0);return c&&(n.best[t]=s),n.bank+=s+a,n.earned+=s+a,n.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function cu(n){for(let t of rs)Di(n,t.id)||n.owned.push(t.id);for(let t of Object.values(as).flat())n.goals.includes(t.id)||n.goals.push(t.id)}var Zx={id:"full",fluid:{particle:10096662,ground:8129810,groundOpacity:.9,soak:5967890,soakAmount:.85,mark:3998984,gauge:"#b3151c"},words:{},shop:{},injury:{levels:["","bruised","broken","shattered"],parts:{skull:"Skull",nose:"Nose",jaw:"Jaw",neck:"Neck",collarbone:"Collarbone",ribs:"Ribs",spine:"Spine",pelvis:"Pelvis",humerus:"Humerus",forearm:"Forearm",wrist:"Wrist",femur:"Femur",kneecap:"Kneecap",tibia:"Tibia",ankle:"Ankle"},special:{"neck.1":"Neck wrenched","skull.2":"Skull fractured","ribs.2":"Ribs cracked"},none:"Nothing broken"},sounds:{wound:"woundBlood",squirt:"squirtBlood",snap:"snapBone"},contentNote:"Contains blood and violence against a test dummy.",haptics:!1,ads:!1},$x={id:"sand",fluid:{particle:14861965,ground:13479276,groundOpacity:.96,soak:9666666,soakAmount:.45,mark:2826777,gauge:"#dcbb78"},words:{Blood:"Sand","Bled out":"Ran empty","Bleeding out \u25B8\u25B8":"Running empty \u25B8\u25B8","Down, bleeding out":"Down, running empty","Staggering, bleeding":"Staggering, leaking","Hit, bleeding":"Hit, leaking","shot \xB7 bleeds":"shot \xB7 leaks","shot \xB7 bleeds fast":"shot \xB7 leaks fast",Bones:"Seams","Broken neck":"Neck seam burst","Skull shattered":"Head burst"},shop:{"tool.pistol":"He springs a leak: the stagger, the hobble, the knees.","tool.shotgun":"Leaks fast, and hits hard enough to send him over an edge."},injury:{levels:["","scuffed","split","burst"],parts:{skull:"Head",nose:"Face",jaw:"Chin",neck:"Neck seam",collarbone:"Shoulder seam",ribs:"Chest panel",spine:"Back seam",pelvis:"Hip seam",humerus:"Upper arm",forearm:"Forearm",wrist:"Wrist seam",femur:"Thigh",kneecap:"Knee seam",tibia:"Shin",ankle:"Ankle seam"},special:{"neck.1":"Neck seam strained"},none:"Nothing split"},sounds:{wound:"woundSand",squirt:"squirtSand",snap:"snapSeam"},contentNote:"Slapstick violence against a sand-filled test dummy.",haptics:!0,ads:!1};function Ff(){return typeof location>"u"?new Set:new Set((location.hash.slice(1)+"&"+location.search.slice(1)).toLowerCase().split(/[-&=]/).filter(Boolean))}function Kx(n=Ff()){return n.has("sand")?$x:Zx}var Vs=Ff(),jn=Kx(Vs),mi=n=>jn.words[n]??n;function uu(n,t,e){let i=jn.injury,r=i.special[n+"."+e]||i.parts[n]+" "+i.levels[e];return t?(t===1?"Left ":"Right ")+r.charAt(0).toLowerCase()+r.slice(1):r}var gc=Math.PI*2,qi=44100;function Of(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ka=n=>Math.max(1,Math.round(n*qi));function wi(n,t,e,i=.707){let s=gc*Math.min(e,qi*.45)/qi,r=Math.cos(s),a=Math.sin(s)/(2*i),o,l,c;t==="lp"?(o=(1-r)/2,l=1-r,c=o):t==="hp"?(o=(1+r)/2,l=-(1+r),c=o):(o=a,l=0,c=-a);let u=1+a,p=-2*r,d=1-a,f=new Float32Array(n.length),x=0,T=0,g=0,m=0;for(let w=0;w<n.length;w++){let F=(o*n[w]+l*x+c*T-p*g-d*m)/u;T=x,x=n[w],m=g,g=F,f[w]=F}return f}function ke(n,t,{attack:e=.001,decay:i=.05,lp:s,hp:r,bp:a,q:o}={}){let l=new Float32Array(Ka(t));for(let c=0;c<l.length;c++)l[c]=n()*2-1;return r&&(l=wi(l,"hp",r,o)),s&&(l=wi(l,"lp",s,o)),a&&(l=wi(l,"bp",a,o||1)),kf(l,e,i)}function Mn(n,t,{f1:e=t,glide:i=.05,attack:s=.001,decay:r=.08,wave:a="sine"}={}){let o=new Float32Array(Ka(n)),l=0;for(let c=0;c<o.length;c++){let u=e+(t-e)*Math.exp(-(c/qi)/i);l+=u/qi;let p=l%1;o[c]=a==="saw"?2*p-1:a==="tri"?1-4*Math.abs(p-.5):Math.sin(gc*p)}return kf(o,s,r)}function kf(n,t,e){let i=Math.max(1,t*qi);for(let s=0;s<n.length;s++)n[s]*=Math.min(1,s/i)*Math.exp(-Math.max(0,s-i)/(e*qi));return n}function te(n,t,e=0,i=1){let s=Ka(e)-1;for(let r=0;r<t.length&&s+r<n.length;r++)n[s+r]+=t[r]*i;return n}function Tn(n,{drive:t=1,peak:e=.9,fade:i=.02,presence:s=2}={}){if(s){let o=wi(n,"hp",250);for(let l=0;l<n.length;l++)n[l]+=s*o[l]}let r=0;for(let o=0;o<n.length;o++)t!==1&&(n[o]=Math.tanh(n[o]*t)),r=Math.max(r,Math.abs(n[o]));let a=Ka(i);for(let o=0;o<n.length;o++)n[o]*=e/(r||1)*Math.min(1,(n.length-o)/a);return n}var bn=n=>new Float32Array(Ka(n));function Uf(n,t=1){let e=bn(.5),i=.9+n()*.2;return te(e,Mn(.45,100*i,{f1:46*i,glide:.05,decay:.09*t}),0,1),te(e,Mn(.2,210*i,{f1:90,glide:.03,decay:.04}),0,.6),te(e,ke(n,.25,{lp:620,decay:.045}),0,.6),te(e,ke(n,.2,{bp:480*i,q:.9,decay:.05}),0,.8),te(e,ke(n,.4,{lp:170,decay:.12*t}),0,.4),e}var _c={thud:[3,n=>Tn(Uf(n),{drive:1.4,presence:6})],limb:[3,n=>{let t=bn(.26),e=.85+n()*.3;return te(t,Mn(.2,155*e,{f1:70,glide:.03,decay:.05}),0,.7),te(t,ke(n,.12,{bp:1200*e,q:.8,decay:.025}),0,.7),te(t,ke(n,.2,{lp:500,decay:.05}),0,.4),Tn(t,{drive:1.2})}],knock:[3,n=>{let t=bn(.26),e=.9+n()*.2;return te(t,Mn(.2,320*e,{f1:240*e,glide:.02,decay:.035}),0,.8),te(t,Mn(.1,640*e,{decay:.02}),0,.3),te(t,ke(n,.06,{bp:1800,q:1.2,decay:.012}),0,.5),te(t,Mn(.22,110,{f1:60,glide:.04,decay:.06}),0,.5),Tn(t,{drive:1.3})}],step:[4,n=>{let t=bn(.14),e=.85+n()*.3;return te(t,ke(n,.1,{lp:900*e,decay:.018}),0,.8),te(t,ke(n,.1,{bp:700*e,q:1,decay:.02}),0,.7),te(t,Mn(.12,120*e,{f1:70,glide:.02,decay:.03}),0,.5),Tn(t)}],scuff:[3,n=>{let t=bn(.32);return te(t,ke(n,.3,{bp:1300+n()*500,q:.6,attack:.03,decay:.07}),0,1),te(t,ke(n,.3,{lp:400,attack:.02,decay:.06}),0,.4),Tn(t)}],knees:[2,n=>{let t=bn(.5);return te(t,_c.limb[1](n),0,1),te(t,_c.limb[1](n),.07+n()*.03,.8),te(t,ke(n,.3,{bp:1500,q:.6,attack:.02,decay:.08}),.05,.25),Tn(t,{drive:1.2})}],poke:[2,n=>{let t=bn(.1),e=.9+n()*.2;return te(t,Mn(.09,270*e,{f1:180,glide:.02,decay:.02}),0,.7),te(t,ke(n,.03,{hp:2500,decay:.004}),0,.3),Tn(t)}],shove:[2,n=>{let t=bn(.42);return te(t,ke(n,.35,{lp:520,attack:.012,decay:.07}),0,.9),te(t,Mn(.4,78,{f1:50,glide:.06,attack:.005,decay:.09}),0,.7),te(t,ke(n,.3,{bp:620,q:.8,attack:.008,decay:.06}),0,.7),te(t,ke(n,.25,{bp:3500,q:.7,attack:.01,decay:.05}),0,.12),Tn(t,{drive:1.3,presence:5})}],bat:[2,n=>{let t=bn(.55),e=.93+n()*.14;return te(t,ke(n,.05,{bp:2400*e,q:2,attack:3e-4,decay:.006}),0,1),te(t,Mn(.12,880*e,{f1:820*e,decay:.018}),0,.6),te(t,Mn(.06,1900*e,{decay:.01}),0,.3),te(t,Uf(n,1.1),.008,.9),Tn(t,{drive:1.6,presence:4})}],ram:[1,n=>{let t=bn(1.1);return te(t,Mn(1,115,{f1:36,glide:.08,decay:.28}),0,1),te(t,ke(n,.9,{lp:250,decay:.3}),0,.7),te(t,ke(n,.2,{lp:1500,decay:.03}),0,.6),te(t,Mn(.5,230,{f1:70,glide:.05,decay:.12}),0,.6),te(t,ke(n,.5,{bp:520,q:.7,decay:.14}),0,.7),Tn(t,{drive:2.2,fade:.1,presence:8})}],pistol:[2,n=>{let t=bn(1.15),e=()=>{let i=bn(.3);return te(i,ke(n,.25,{hp:900,bp:2200,q:.7,attack:2e-4,decay:.022}),0,1),te(i,Mn(.3,175,{f1:55,glide:.02,decay:.06}),0,.9),te(i,ke(n,.3,{lp:1200,decay:.18}),.01,.25),i};te(t,e(),0,1);for(let[i,s]of[[.09,.22],[.17,.12],[.31,.07]])te(t,wi(e(),"lp",1400),i,s);return te(t,ke(n,1,{lp:700,attack:.02,decay:.45}),.02,.08),Tn(t,{drive:2.5,fade:.15,presence:3.5})}],shotgun:[2,n=>{let t=bn(1.7),e=()=>{let i=bn(.6);return te(i,ke(n,.5,{bp:1100,q:.6,attack:3e-4,decay:.05}),0,1),te(i,ke(n,.1,{hp:2500,decay:.012}),0,.6),te(i,Mn(.6,115,{f1:38,glide:.03,decay:.12}),0,1),te(i,ke(n,.6,{lp:800,decay:.3}),.01,.35),i};te(t,e(),0,1);for(let[i,s]of[[.11,.25],[.23,.14],[.4,.08]])te(t,wi(e(),"lp",1e3),i,s);return te(t,ke(n,1.5,{lp:500,attack:.03,decay:.7}),.03,.1),Tn(t,{drive:3,fade:.2,presence:5})}],woundBlood:[3,n=>{let t=bn(.3);te(t,ke(n,.03,{hp:3e3,decay:.006}),0,.5),te(t,ke(n,.25,{lp:900,attack:.003,decay:.05}),0,.8),te(t,Mn(.2,145,{f1:90,glide:.03,decay:.04}),0,.4);for(let e=0;e<3;e++)te(t,ke(n,.05,{bp:1500+n()*900,q:3,decay:.01}),.03+n()*.07,.25);return Tn(t,{drive:1.3})}],woundSand:[3,n=>{let t=bn(.36);return te(t,ke(n,.3,{bp:4300+n()*600,q:.8,attack:.002,decay:.09}),0,.8),te(t,ke(n,.15,{lp:500,decay:.03}),0,.5),Tn(t)}],squirtBlood:[3,n=>{let t=bn(.3),e=.85+n()*.3;te(t,ke(n,.2,{bp:1100*e,q:1.6,attack:.012,decay:.045}),0,.9),te(t,ke(n,.14,{bp:2600*e,q:2.2,attack:.02,decay:.03}),.01,.4),te(t,Mn(.12,240*e,{f1:130,glide:.04,attack:.008,decay:.03}),0,.3);for(let i=0;i<2;i++)te(t,ke(n,.04,{lp:1800,decay:.008}),.13+n()*.09,.25);return Tn(t,{drive:1.2})}],squirtSand:[3,n=>{let t=bn(.32);return te(t,ke(n,.28,{bp:4800+n()*800,q:.9,attack:.02,decay:.07}),0,.8),te(t,ke(n,.2,{hp:7e3,attack:.03,decay:.06}),.02,.3),Tn(t)}],snapBone:[3,n=>{let t=bn(.2),e=.85+n()*.3;return te(t,ke(n,.03,{bp:2400*e,q:1.6,decay:.006}),0,1),te(t,Mn(.05,900*e,{f1:260,glide:.012,decay:.012}),0,.7),te(t,ke(n,.03,{bp:3300*e,q:1.4,decay:.005}),.028+n()*.02,.6),te(t,Mn(.12,150,{f1:80,glide:.03,decay:.03}),0,.35),Tn(t,{drive:1.5})}],snapSeam:[3,n=>{let t=bn(.3),e=.85+n()*.3;for(let i=0;i<7;i++)te(t,ke(n,.02,{bp:(1500+n()*900)*e,q:1.1,decay:.006}),i*.016+n()*.006,.5+n()*.5);return te(t,ke(n,.16,{lp:700,decay:.05}),0,.3),Tn(t,{drive:1.2})}],glass:[2,n=>{let t=bn(1.9);te(t,ke(n,.3,{hp:2500,attack:5e-4,decay:.05}),0,1),te(t,ke(n,.5,{bp:5e3,q:1,decay:.15}),0,.5);for(let e=0;e<28;e++)te(t,Mn(.5,1800+n()*7200,{decay:.02+n()*.14}),n()*.12,.05+n()*.2);for(let e=0;e<36;e++)te(t,Mn(.1,2500+n()*7500,{decay:.008+n()*.022}),.15+Math.pow(n(),1.6)*1.4,.03+n()*.09);return Tn(t,{drive:1.2,fade:.1})}],whoosh:[1,n=>{let t=bn(.6);return te(t,ke(n,.5,{lp:900,attack:.08,decay:.12}),0,.5),te(t,ke(n,.6,{lp:260,attack:.15,decay:.2}),0,.8),Tn(t,{peak:.6,fade:.1})}],grunt:[4,n=>{let t=bn(.4),e=.85+n()*.35,i=Mn(.3,128*e,{f1:84*e,glide:.12,attack:.012,decay:.07,wave:"saw"});return te(t,wi(i,"bp",520*e,4),0,1),te(t,wi(i,"bp",980*e,5),0,.5),te(t,ke(n,.3,{bp:1700,q:1,attack:.02,decay:.08}),0,.14),Tn(wi(t,"lp",2600),{drive:1.5})}],groan:[3,n=>{let t=bn(.9),e=.85+n()*.3,i=Mn(.8,112*e,{f1:62*e,glide:.35,attack:.05,decay:.3,wave:"saw"});return te(t,wi(i,"bp",480*e,4),0,1),te(t,wi(i,"bp",860*e,5),0,.4),te(t,ke(n,.8,{bp:1500,q:.8,attack:.08,decay:.3}),0,.2),Tn(wi(t,"lp",2200),{drive:1.4,fade:.1})}],click:[1,n=>{let t=bn(.04);return te(t,Mn(.03,1200,{decay:.006}),0,.7),te(t,ke(n,.01,{hp:4e3,decay:.002}),0,.4),Tn(t,{peak:.5,fade:.005})}],deny:[1,()=>{let n=bn(.16);return te(n,Mn(.15,300,{f1:220,glide:.05,decay:.05,wave:"tri"}),0,1),Tn(n,{peak:.6})}],buy:[1,n=>{let t=bn(.45);return te(t,Mn(.2,880,{decay:.07,wave:"tri"}),0,.7),te(t,Mn(.35,1320,{decay:.1,wave:"tri"}),.07,.8),te(t,ke(n,.2,{bp:7e3,q:2,decay:.05}),.07,.25),Tn(t,{peak:.6})}],goal:[1,()=>{let n=bn(.8);return[660,880,1320].forEach((t,e)=>te(n,Mn(.5,t,{decay:.16,wave:"tri"}),e*.09,.7)),Tn(n,{peak:.6,fade:.1})}],stamp:[1,n=>{let t=bn(.3);return te(t,ke(n,.1,{lp:1500,decay:.02}),0,.8),te(t,Mn(.25,140,{f1:80,glide:.03,decay:.06}),0,.9),te(t,Mn(.2,420,{f1:300,glide:.03,decay:.04}),0,.5),Tn(t,{peak:.7})}]},du=Object.keys(_c);function jx(){let n={};return du.forEach((t,e)=>{let[i,s]=_c[t],r=Of(1e3+e*77);n[t]=Array.from({length:i},()=>s(r))}),n}function Bf(){let n=jx(),t={},e={},i=null,s,r,a,o={},l=!1,c=1,u=null,p=null,d=null;function f(){if(i){i.state==="suspended"&&i.resume();return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{i=null;return}s=i.createGain(),r=i.createBiquadFilter(),r.type="lowpass",r.frequency.value=2e4;let T=i.createDynamicsCompressor();T.threshold.value=-14,T.ratio.value=6,T.attack.value=.003,T.release.value=.2,a=i.createGain(),a.gain.value=l?0:.9,s.connect(r).connect(T).connect(a).connect(i.destination);for(let E of du)o[E]=n[E].map(N=>{let I=i.createBuffer(1,N.length,qi);return I.getChannelData(0).set(N),I});let g=qi*4,m=i.createBuffer(1,g,qi),w=m.getChannelData(0),F=Of(5);for(let E=0;E<g;E++)w[E]=(F()*2-1)*(.6+.4*Math.sin(gc*E/g)*Math.sin(gc*3*E/g));for(let E=0;E<2e3;E++){let N=E/2e3;w[E]=w[E]*N+w[g-2e3+E]*(1-N)}u=i.createBufferSource(),u.buffer=m,u.loop=!0,d=i.createBiquadFilter(),d.type="lowpass",d.frequency.value=400,p=i.createGain(),p.gain.value=.035,u.connect(d).connect(p).connect(s),u.start()}function x(T,{vol:g=1,rate:m=1,pan:w=0,delay:F=0,ui:E=!1}={}){if(!i||l||!o[T]||g<=.003)return;let N=o[T];t[T]=((t[T]||0)+1)%N.length,e[T]=(e[T]||0)+1;let I=i.createBufferSource();I.buffer=N[t[T]],I.playbackRate.value=m*(E?1:.55+.45*Math.sqrt(c))*(.97+Math.random()*.06);let y=i.createGain();y.gain.value=Math.min(1,g);let A=I.connect(y);if(w&&i.createStereoPanner){let X=i.createStereoPanner();X.pan.value=Math.max(-1,Math.min(1,w)),A=A.connect(X)}A.connect(E?a:s),I.start(i.currentTime+F)}return{unlock:f,play:x,played:e,names:du,get ready(){return!!i},get muted(){return l},setMuted(T){l=!!T,a&&a.gain.setTargetAtTime(l?0:.9,i.currentTime,.02)},setSlow(T){Math.abs(T-c)<.02||(c=Math.max(.05,Math.min(1,T)),i&&(r.frequency.setTargetAtTime(c>.9?2e4:1400+9e3*c,i.currentTime,.06),u.playbackRate.setTargetAtTime(.5+.5*c,i.currentTime,.1)))},setPlace(T){i&&d.frequency.setTargetAtTime({yard:420,stairs:190,window:750}[T]||400,i.currentTime,.3)}}}var Vt=n=>document.getElementById(n),yu=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim(),oi=n=>"$"+Math.round(n).toLocaleString("en-US");async function oy(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(n){return console.warn("WASM physics unavailable, using asm.js build",n),await(await import("./vendor/jolt-physics.js")).default()}}function ly(){if(Vs.has("previous"))return"previous";if(Vs.has("current"))return"current";try{return localStorage.getItem("imhit.physics2")==="previous"?"previous":"current"}catch{return"current"}}var eo=ly(),Vf=!0,vc=!0;function cy(n,t){let e=t(n),i=Vt("view"),s=new cc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ns,s.toneMapping=Ia,s.toneMappingExposure=1.15;let r=new na,a=new qe(yu("--sky"));r.background=a,r.fog=new ea(a,14,38);let o=new ei(42,1,.1,120);r.add(new Ea(13623538,3814960,1.05));let l=new Ca(16769725,2.6);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),l.shadow.bias=-6e-4,l.shadow.normalBias=.03,r.add(l,l.target);let c=new qe(yu("--concrete")),u=new qe(yu("--hazard")),p=(Lf.half+10)*2,d=(()=>{let b=document.createElement("canvas");b.width=b.height=2048;let D=b.getContext("2d"),q=b.width/p,it=b.width/2;D.fillStyle="#"+c.clone().multiplyScalar(.62).getHexString(),D.fillRect(0,0,b.width,b.height),D.strokeStyle="rgba(0,0,0,0.13)",D.lineWidth=2;for(let Ot=-p/2;Ot<=p/2;Ot+=2)D.beginPath(),D.moveTo(it+Ot*q,0),D.lineTo(it+Ot*q,b.height),D.moveTo(0,it+Ot*q),D.lineTo(b.width,it+Ot*q),D.stroke();D.strokeStyle="rgba(241,239,233,0.42)",D.fillStyle="rgba(241,239,233,0.6)",D.lineWidth=3,D.font='700 30px "Big Shoulders Display", Impact, sans-serif',D.textAlign="center";for(let Ot=2;Ot<=12;Ot+=2)D.beginPath(),D.arc(it,it,Ot*q,0,Math.PI*2),D.stroke(),D.fillText(Ot+" m",it+Ot*q,it+34);D.strokeStyle="#"+u.getHexString(),D.lineWidth=5,D.beginPath(),D.moveTo(it-14,it-14),D.lineTo(it+14,it+14),D.moveTo(it+14,it-14),D.lineTo(it-14,it+14),D.stroke();let Dt=new ha(b);return Dt.anisotropy=8,Dt.colorSpace=ti,Dt})(),f=new Un(new gs(p,p),new Yn({map:d,roughness:.96}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,r.add(f);let x=new Un(new vi(p,3.2,.4),new Yn({color:c.clone().multiplyScalar(.5),roughness:1}));x.position.set(0,1.6,-11),r.add(x);let T=new Un(new gs(100,160),new Yn({color:c.clone().multiplyScalar(.36),roughness:1}));T.rotation.x=-Math.PI/2,T.position.set(0,-.003,105),T.receiveShadow=!0,r.add(T);let g={landing:new Yn({color:c,roughness:.95}),step:new Yn({color:c,roughness:.95}),stepAlt:new Yn({color:c.clone().multiplyScalar(.88),roughness:.95}),wall:new Yn({color:c.clone().multiplyScalar(.55),roughness:1}),building:new Yn({color:c.clone().multiplyScalar(.8),roughness:1}),sill:new Yn({color:c.clone().multiplyScalar(1.05),roughness:.9}),frame:new Yn({color:2237995,roughness:.5,metalness:.4})};e.statics.forEach((b,D)=>{let q=new Un(new vi(b.h[0]*2,b.h[1]*2,b.h[2]*2),b.kind==="step"&&D%2?g.stepAlt:g[b.kind]);q.position.set(b.c[0],b.c[1],b.c[2]),q.castShadow=!0,q.receiveShadow=!0,r.add(q)});let m=[0,1,2].map(b=>{let D=-(.7+.3*b),q=new Sr;return q.moveTo(-.2,D),q.lineTo(0,D+.16),q.lineTo(.2,D),q.lineTo(.2,D-.07),q.lineTo(0,D+.09),q.lineTo(-.2,D-.07),q.closePath(),q}),w=new Un(new ba(m),new ps({color:u,transparent:!0,opacity:.6,depthWrite:!1,side:Mi}));w.geometry.rotateX(-Math.PI/2),r.add(w);let F=e.glass.tiles,E=new xr(new vi(1,1,1),new Yn({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),F.length);E.frustumCulled=!1,r.add(E);let N=new fn,I=new ui,y=new $,A=new $,X=new Float32Array(7);function O(){for(let b=0;b<F.length;b++)e.glass.transform(b,X),N.compose(y.set(X[0],X[1],X[2]),I.set(X[3],X[4],X[5],X[6]),A.set(F[b].h[0]*2,F[b].h[1]*2,F[b].h[2]*2)),E.setMatrixAt(b,N);E.instanceMatrix.needsUpdate=!0}O();let K=new Yn({color:2303788,roughness:.6}),tt=new Yn({color:15855593,roughness:.6}),ct=jn.fluid,H=new qe(ct.ground),st=new qe(ct.soak);document.documentElement.dataset.edition=jn.id,document.documentElement.style.setProperty("--blood",ct.gauge),Vt("gauge-label").textContent=mi("Blood"),Vt("intro-note").textContent=jn.contentNote;let rt=[],et=[],mt=new Float32Array(gn.length);gn.forEach((b,D)=>{let q=new Un(new fa(b.r,b.hh*2,6,16),new Yn({color:u,roughness:.55}));q.castShadow=!0,q.receiveShadow=!0,q.userData.part=D;let it=(Dt,Ot,re,Pe,_e)=>{let Ie=new Un(Dt,Ot);return Ie.position.set(re,Pe,_e),Ie.castShadow=!0,q.add(Ie),Ie};b.parent>=0&&b.name!=="head"&&it(new Ds(b.r*(b.name==="chest"?.86:1.12),14,10),K,b.j[0]-b.c[0],b.j[1]-b.c[1],b.j[2]-b.c[2]),b.name==="head"&&(it(new vi(.05,.05,.15),K,-b.r+.01,.03,0),it(new Is(.045,.05,.1,10),K,0,-b.hh-b.r-.01,0)),b.name==="chest"&&(it(new Is(.06,.06,.012,20),tt,-b.r+.004,.05,0).rotation.z=Math.PI/2,it(new Is(.028,.028,.016,16),K,-b.r+.003,.05,0).rotation.z=Math.PI/2),b.name.startsWith("larm")&&it(new Ds(.048,12,8),K,0,-b.hh-b.r-.02,0),b.name.startsWith("lleg")&&it(new vi(.24,.07,.09),K,-.06,-b.hh-b.r+.035,0),r.add(q),rt.push(q)});let ft=new Float32Array(7);function ht(){for(let b=0;b<rt.length;b++)e.transform(b,ft),rt[b].position.set(ft[0],ft[1],ft[2]),rt[b].quaternion.set(ft[3],ft[4],ft[5],ft[6]),rt[b].updateMatrixWorld()}function Nt(b,D,q){let it=new Float32Array(b*3),Dt=new Float32Array(b*3),Ot=new Float32Array(b),re=new qn;re.setAttribute("position",new hi(it,3));let Pe=new la(re,new vr({color:D,size:q,transparent:!0,opacity:.95,depthWrite:!1}));Pe.frustumCulled=!1,r.add(Pe);let _e=0;return{emit(Ie,Ze,Me){let We=_e;_e=(_e+1)%b,it.set(Ie,We*3),Dt.set(Ze,We*3),Ot[We]=Me},step(Ie,Ze){for(let Me=0;Me<b;Me++){if(Ot[Me]<=0){it[Me*3+1]=-50;continue}Ot[Me]-=Ie,Dt[Me*3+1]-=9.8*Ie;for(let We=0;We<3;We++)it[Me*3+We]+=Dt[Me*3+We]*Ie;it[Me*3+1]<=e.groundY(it[Me*3],it[Me*3+2])+.005&&(Ze&&Ze(it[Me*3],it[Me*3+2]),Ot[Me]=0)}re.attributes.position.needsUpdate=!0}}}let oe=Nt(200,15326404,.05),ye=Nt(700,ct.particle,.06),Tt=Nt(260,14677759,.035);function Jt(b,D,q){for(let it=0;it<D;it++){let Dt=Math.random()*6.28,Ot=q*(.3+Math.random());oe.emit(b,[Math.cos(Dt)*Ot,.5+Math.random()*Ot,Math.sin(Dt)*Ot],.4+Math.random()*.5)}}let Rt=900,Ct=new xr(new pa(1,14),new ps({color:H,transparent:!0,opacity:ct.groundOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Rt);Ct.frustumCulled=!1,Ct.count=0,r.add(Ct);let bt=new fn,_t=new ui().setFromEuler(new Ci(-Math.PI/2,0,0)),jt=new $,ne=new $,Ne=0,Oe=[];function Ee(b,D,q,it){bt.compose(ne.set(D,e.groundY(D,q)+.004+b%7*4e-4,q),_t,jt.set(it,it*(.75+b%5*.08),1)),Ct.setMatrixAt(b,bt),Ct.instanceMatrix.needsUpdate=!0}function Ge(b,D,q){let it=Ne;return Ne=(Ne+1)%Rt,Ct.count=Math.max(Ct.count,it+1),Ee(it,b,D,q),it}let pn=(b,D)=>Ge(b,D,.02+Math.random()*.045),Ke=new $,sn=new $,Dn=0,Sn=0,Cn=0,En=0;function Qe(b){let D=e.state;Dn+=b*(D.alive?1.15+(100-D.blood)*.008:0);let q=Math.pow(Math.max(0,Math.sin(Dn*Math.PI*2)),6),it=Dn%1,Dt=(Sn<.12||Sn>it)&&it>=.12;if(Sn=it,Dt&&D.blood>0){Cn++;let Ot=null;for(let Pe of e.wounds)Pe.left>0&&(!Ot||(Pe.arterial?10:0)+Pe.rate>(Ot.arterial?10:0)+Ot.rate)&&(Ot=Pe);let re=performance.now();Ot&&(Ot.arterial||Cn%2===0)&&re-En>300&&(En=re,rt[Ot.part].getWorldPosition(Ke),kt.play(jn.sounds.squirt,{vol:Ot.arterial?.34:.1+Math.min(.1,Ot.rate*.02),rate:Ot.arterial?1:.85,pan:M([Ke.x,Ke.y,Ke.z])}))}e.wounds.forEach((Ot,re)=>{let Pe=Ot.left>0&&D.blood>0,_e=Pe?Ot.rate:.25,Ie=rt[Ot.part];Ke.set(Ot.at[0],Ot.at[1],Ot.at[2]),sn.copy(Ke).setY(0).normalize().transformDirection(Ie.matrixWorld),Ke.applyMatrix4(Ie.matrixWorld),mt[Ot.part]=Math.min(1,mt[Ot.part]+b*_e*.02),et[re]&&et[re].scale.setScalar(1+mt[Ot.part]*2.2);let Ze=Ot.arterial&&Pe?q:0,Me=b*_e*(Ot.arterial?8:5)+Ze*b*260;Me=Math.floor(Me)+(Math.random()<Me%1?1:0);for(let We=0;We<Me;We++){let On=Ze>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;ye.emit([Ke.x,Ke.y,Ke.z],[sn.x*On+(Math.random()-.5)*.4,sn.y*On+Math.random()*.5*On,sn.z*On+(Math.random()-.5)*.4],1.6)}if(D.mode==="down"&&Ke.y-e.groundY(Ke.x,Ke.z)<.4){let We=Oe[re];(!We||Math.hypot(We.x-Ke.x,We.z-Ke.z)>.25)&&(We=Oe[re]={i:Ge(Ke.x,Ke.z,.03),x:Ke.x,z:Ke.z,r:.03}),We.r=Math.min(.55,Math.sqrt(We.r*We.r+b*_e*.0022)),Ee(We.i,We.x,We.z,We.r)}});for(let Ot=0;Ot<rt.length;Ot++)mt[Ot]>0&&rt[Ot].material.color.copy(u).lerp(st,mt[Ot]*ct.soakAmount)}let G=new qn().setFromPoints([new $,new $]),Fe=new oa(G,new yr({color:16773577,transparent:!0,opacity:0}));Fe.frustumCulled=!1,r.add(Fe);let fe=[];function $t(b,D,q,it=.25){let Dt=fe.find(Ot=>Ot.life<=0);if(!Dt){if(fe.length>=16)return;Dt={el:document.createElement("div"),life:0,pos:new $},Vt("app").appendChild(Dt.el),fe.push(Dt)}Dt.el.className="callout"+(q?" big":""),Dt.el.textContent=b,Dt.pos.set(D[0],D[1]+it,D[2]),Dt.life=Dt.max=q?1.6:1.2}let j=new $;function He(b){for(let D of fe){if(D.life<=0){D.el.style.opacity=0;continue}D.life-=b,D.pos.y+=b*.4,j.copy(D.pos).project(o);let q=(j.x*.5+.5)*i.clientWidth,it=(-j.y*.5+.5)*i.clientHeight;D.el.style.transform=`translate(${q.toFixed(1)}px, ${it.toFixed(1)}px) translate(-50%, -50%)`,D.el.style.opacity=j.z>1?0:Math.min(1,D.life/(D.max*.4))}}let kt=Bf();function de(){let b=!kt.ready;kt.unlock(),b&&kt.ready&&kt.setPlace(e.levelKey)}let L=new $,M=b=>b?Math.max(-1,Math.min(1,L.set(b[0],b[1],b[2]).project(o).x))*.7:0,Z="poke",Et=!1,nt=0,at=1,Ft=!1,vt=!1,St=1,Yt=-1e9,z=0,wt=!1,xt=!1,Mt=Nr();try{Mt=iu(localStorage.getItem("imhit.save"))}catch{}let Lt=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(Mt))}catch{}},Ht=()=>Mt.mode==="free",me=()=>vc&&Ht(),Le=()=>me()?pc:su(Mt),Ut=b=>me()||Hs(Mt,b),Se={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},De={};function Xt(){for(let D in De)De[D].remove(),delete De[D];Vt("pick-list").innerHTML="";let b=Le();b.includes(Z)||(Z=b.at(-1));for(let D of b)for(let[q,it]of[["tools","tool-"+D],["pick-list","pick-"+D]]){let Dt=document.createElement("button");Dt.type="button",Dt.className="tool",Dt.id=it,Dt.dataset.tool=D,Dt.innerHTML=`<b>${fc[D].label}</b><i>${mi(Se[D])}</i>`,Dt.addEventListener("click",()=>{Z=D,C(),_(),de(),kt.play("click",{ui:!0,vol:.5})}),Vt(q).appendChild(Dt),q==="tools"&&(De[D]=Dt)}Vt("pick").classList.toggle("single",b.length<2),C(),Vt("slow").hidden=!(me()||Di(Mt,"slowmo")),Vt("slow").hidden&&(Et=!1,Vt("slow").setAttribute("aria-pressed","false"))}function C(){for(let b in De)De[b].setAttribute("aria-pressed",String(b===Z));for(let b of Vt("pick-list").children)b.setAttribute("aria-pressed",String(b.dataset.tool===Z));Vt("pick-name").textContent=fc[Z].label,Vt("pick-note").textContent=mi(Se[Z])}function _(){Vt("pick-list").hidden=!0,Vt("pick").setAttribute("aria-expanded","false")}Vt("pick").addEventListener("click",()=>{if(Vt("pick").classList.contains("single"))return;let b=Vt("pick-list").hidden;Vt("pick-list").hidden=!b,Vt("pick").setAttribute("aria-expanded",String(b))}),document.addEventListener("pointerdown",b=>{!Vt("pick-list").hidden&&!b.target.closest(".picker")&&_()},!0);function B(){let b=Za(Mt);Vt("pips").innerHTML=Ht()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:b},(D,q)=>`<span class="pip${q<St?" on":""}"></span>`).join("")}function lt(){let b=ou(Mt,e.levelKey);Vt("hint").hidden=!1,Vt("hint").innerHTML=Ht()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(b?`<b>Goal</b> ${b.text} <span>\u2605 +${oi(b.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(Za(Mt)>=2&&!Mt.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function At(){Vt("bank").textContent=oi(Mt.bank),Vt("stars").textContent="\u2605 "+Fr(Mt)+" / "+mc,Vt("mode-career").setAttribute("aria-pressed",String(!Ht())),Vt("mode-free").setAttribute("aria-pressed",String(Ht()));for(let D in se){let q=Ut(D);se[D].disabled=!q;let it=as[D].filter(Dt=>Mt.goals.includes(Dt.id)).length;se[D].lastChild.textContent=q?bi[D].blurb+" \u2605 "+it+"/"+as[D].length:"Opens at \u2605 "+Gs[D]+". You have "+Fr(Mt)+"."}Vt("where-level").textContent=e.level.label,Vt("where-mode").textContent=(Ht()?"Free play":"Career")+(eo==="previous"?" \xB7 previous physics":"");let b=!Ht()&&rs.some(D=>!$a(Mt,D));Vt("shop-open").classList.toggle("ready",b),Vt("shop-open").textContent=b?"Shop \u2022":"Shop"}let se={};for(let[b,D]of Object.entries(bi)){let q=document.createElement("button");q.type="button",q.className="level",q.id="level-"+b,q.innerHTML=`<b>${Object.keys(bi).indexOf(b)+1} \xB7 ${D.label}</b><i>${D.blurb}</i>`,q.addEventListener("click",()=>Qt(b)),Vt("levels").appendChild(q),se[b]=q}function Qt(b,D){if(!D&&!Ut(b))return;e.setLevel(b),Mt.level=b,Lt(),R.aim={yaw:e.level.cam.yaw,pitch:e.level.cam.pitch,dist:e.level.cam.dist},V();let q=e.level;for(let it in se)se[it].setAttribute("aria-pressed",String(it===b));Vt("menu").hidden=!0,kt.setPlace(b),R.aim={yaw:q.cam.yaw,pitch:q.cam.pitch,dist:q.cam.dist},R.swing=0,vt=!1,R.yaw=q.cam.yaw,R.pitch=q.cam.pitch,R.dist=q.cam.dist,R.target.set(q.start[0],q.start[1]+.92,q.start[2])}function ie(b){if(Mt.mode=b==="free"?"free":"career",Lt(),vc&&(Ht()&&(Z="pistol"),Xt(),!Ut(e.levelKey)))return Qt("yard",!0);V(),At()}Vt("where").addEventListener("click",()=>{Vt("menu").hidden=!1}),Vt("menu-close").addEventListener("click",()=>{Vt("menu").hidden=!0});for(let b of["menu","shop"])Vt(b).addEventListener("click",D=>{D.target===Vt(b)&&(Vt(b).hidden=!0)});if(Vt("mode-career").addEventListener("click",()=>ie("career")),Vt("mode-free").addEventListener("click",()=>ie("free")),!Vf||Vs.has("dev")){Vt("physics").hidden=!1;for(let b of["current","previous"]){let D=Vt("physics-"+b);D.setAttribute("aria-pressed",String(eo===b)),D.addEventListener("click",()=>{if(b===eo)return;try{localStorage.setItem("imhit.physics2",b)}catch{}let q=[...Vs].filter(it=>it!=="previous"&&it!=="current");location.hash=[...q,b].join("-"),location.reload()})}}function S(){Vt("shop-bank").textContent=oi(Mt.bank)+" banked \xB7 \u2605 "+Fr(Mt)+" / "+mc+(Ur(Mt)>1?" \xB7 pays \xD7"+Ur(Mt).toFixed(2):"");let b="";for(let D of[...new Set(rs.map(q=>q.group))]){b+=`<h3>${D}</h3>`;for(let q of rs.filter(it=>it.group===D)){let it=$a(Mt,q);b+=`<div class="item${it==="Owned"?" owned":""}"><div><b>${q.name}</b><p>${jn.shop[q.id]||q.does}</p></div>`+(it==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${q.id}" id="buy-${q.id.replace(".","-")}"${it?" disabled":""}>${oi(q.price)}${it&&it!=="Not enough"?`<small>${it}</small>`:""}</button>`)+"</div>"}}b+="<h3>Goals</h3>";for(let[D,q]of Object.entries(as)){let it=Hs(Mt,D);b+=`<h4>${bi[D].label}${it?"":" \xB7 opens at \u2605"+Gs[D]}</h4><ul class="goals">`+q.map(Dt=>`<li class="${Mt.goals.includes(Dt.id)?"got":""}"><span>${Mt.goals.includes(Dt.id)?"\u2605":"\u2606"}</span>${Dt.text}<em>${oi(Dt.reward)}</em></li>`).join("")+"</ul>"}Vt("shop-list").innerHTML=b}Vt("shop-list").addEventListener("click",b=>{let D=b.target.closest(".buy");!D||!ru(Mt,D.dataset.id)||(Lt(),de(),kt.play("buy",{ui:!0,vol:.55}),D.dataset.id.startsWith("tool.")&&(Z=D.dataset.id.slice(5)),Xt(),At(),S(),e.state.hits||V())});function h(){S(),Vt("shop").hidden=!1}Vt("shop-open").addEventListener("click",h),Vt("result-shop").addEventListener("click",h),Vt("shop-close").addEventListener("click",()=>{Vt("shop").hidden=!0});let P=Vs.has("dev");Vt("unlock-all").hidden=!P&&Vf,Vt("unlock-all").addEventListener("click",()=>{cu(Mt),Lt(),Xt(),At(),S(),V()});let U=0;Vt("wipe").addEventListener("click",()=>{if(performance.now()-U>3e3){U=performance.now(),Vt("wipe").textContent="Tap again to erase everything";return}Mt=Nr(),Lt(),U=0,Vt("wipe").textContent="Erase progress",Xt(),Qt("yard",!0),At(),S()}),Vt("slow").addEventListener("click",()=>{Et=!Et,Vt("slow").setAttribute("aria-pressed",String(Et))});function k(){Vt("sound").setAttribute("aria-pressed",String(!kt.muted)),Vt("sound").textContent=kt.muted?"Sound off":"Sound on"}Vt("sound").addEventListener("click",()=>{de(),kt.setMuted(!kt.muted),Mt.muted=kt.muted,Lt(),k(),kt.muted||kt.play("click",{ui:!0,vol:.5})});function V(){e.reset();for(let b of et)b.parent.remove(b);et.length=0,Oe.length=0,mt.fill(0),Ct.count=0,Ne=0;for(let b of rt)b.material.color.copy(u);Ft=!1,nt=0,wt=!1,Yt=-1e9,gt.length=0,qt(),R.target.set(e.level.start[0],e.level.start[1]+.92,e.level.start[2]),R.zoom=.8,R.swing=0,vt=!1,R.yaw=R.aim.yaw,R.pitch=R.aim.pitch,R.dist=R.aim.dist,St=Ht()?1/0:Za(Mt),O(),Vt("result").hidden=!0,B(),lt(),At(),yt()}Vt("reset").addEventListener("click",V);for(let b of["pointerdown","pointerup","pointercancel","pointerleave"])Vt("ff").addEventListener(b,D=>{xt=b==="pointerdown",Vt("ff").setAttribute("aria-pressed",String(xt)),xt&&D.preventDefault()});Vt("ff").addEventListener("contextmenu",b=>b.preventDefault()),Vt("next").addEventListener("click",V),Vt("result-go").addEventListener("click",()=>Qt(Vt("result-go").dataset.level)),window.addEventListener("keydown",b=>{b.code==="Space"&&(Et=!0,b.preventDefault()),b.code==="KeyR"&&V(),b.code==="KeyF"&&(xt=!0);let D=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(b.code),q=Le();D>=0&&q[D]&&(Z=q[D],C())}),window.addEventListener("keyup",b=>{b.code==="KeyF"&&(xt=!1),b.code==="Space"&&(Et=Vt("slow").getAttribute("aria-pressed")==="true")});function dt(){let b=e.state;return b.alive?b.ko?"Out cold":b.mode==="down"?mi(wt?"Bleeding out \u25B8\u25B8":b.bleed>.2?"Down, bleeding out":"Down"):b.mode==="fall"?"Going down":b.mode==="rise"?"Getting up":b.mode==="kneel"?"On his knees":b.hits===0?"Standing":mi(b.bleed>.2?b.strength<.75?"Staggering, bleeding":"Hit, bleeding":b.stun>.25?"Dazed":"On his feet"):mi(b.outcome)||"Dead"}function yt(){let b=e.payout(),D=e.state;return Vt("lines").innerHTML=b.lines.map(q=>`<tr><td>${mi(q[0])}</td><td>${q[1]}</td><td>${oi(q[2])}</td></tr>`).join(""),Vt("total").textContent=oi(b.total),Vt("blood-fill").style.width=D.blood.toFixed(1)+"%",Vt("blood-num").textContent=Math.round(D.blood)+"%",Vt("condition").textContent=dt(),b}yt();let gt=[];function qt(b){let D=innerWidth<=560?4:6,q=gt.slice();for(let it=q.length-1;it>=1&&q.length>D;it--)q[it].level===1&&q.splice(it,1);q.length=Math.min(q.length,D),Vt("feed").innerHTML=q.map((it,Dt)=>`<li class="l${it.level}${it.fatal?" fatal":""}${it===gt[0]&&b?" new":""}${Dt>=2?" old":""}">${uu(it.base,it.side,it.level)}<em>+${oi(nu[it.level])}</em></li>`).join("")+(gt.length>D?`<li class="more">and ${gt.length-D} more</li>`:"")}function zt(){let b=gt.slice().sort((Dt,Ot)=>Ot.level-Dt.level),D=b.filter(Dt=>Dt.level>=2),q=b.length-D.length,it=D.slice(0,5).map(Dt=>(Dt.level===3?"<b>":"")+uu(Dt.base,Dt.side,Dt.level)+(Dt.level===3?"</b>":""));return D.length>5&&it.push(D.length-5+" more "+jn.injury.levels[2]),q&&it.push(q+" "+jn.injury.levels[1]),it.join(" \xB7 ")}let It={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},ut=new $,pt=b=>{if(jn.haptics&&navigator.vibrate)try{navigator.vibrate(b)}catch{}};function ce(b,D){if(e.state.done)return;if(de(),St<=0){Vt("pips").classList.remove("nudge"),Vt("pips").offsetWidth,Vt("pips").classList.add("nudge"),kt.play("deny",{ui:!0,vol:.4});return}let q=fc[Z],it=new $().subVectors(D,o.position).normalize(),Dt=Math.hypot(it.x,it.z)||1,Ot=q.kind==="ballistic"?[it.x,it.y,it.z]:[it.x/Dt*.97,Z==="bat"?.2:.1,it.z/Dt*.97],re=[D.x,D.y,D.z],Pe=e.hit(b,re,Ot,q);if(!Pe)return;Ht()||(St--,B()),pt(q.impulse>100?35:18);let _e=new Un(new Ds(q.kind==="ballistic"?.024:.04,10,8),new ps({color:q.bleed>0?ct.mark:1314828}));if(rt[b].worldToLocal(ut.copy(D)),_e.position.copy(ut),rt[b].add(_e),et.push(_e),q.kind==="ballistic"){G.setFromPoints([o.position.clone().add(new $(.22,-.3,0).applyQuaternion(o.quaternion)),D.clone()]),Fe.material.opacity=.9,kt.play(Z==="shotgun"?"shotgun":"pistol",{vol:.95}),kt.play(jn.sounds.wound,{vol:Z==="shotgun"?.75:.55,pan:M(re),delay:.03});for(let Ze=0;Ze<(Z==="shotgun"?46:18);Ze++)ye.emit(re,[Ot[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,Ot[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else kt.play(Z,{vol:Z==="poke"?.6:.9,pan:M(re)}),Jt(re,8,1.2);let Ie=Pe==="thigh"||Pe==="shin"?"leg":Pe;$t(It[Ie]||Ie,re,!0),e.state.alive&&!e.state.ko&&(q.bleed>0||q.stun>.3)&&kt.play("grunt",{vol:.4,pan:M(re),delay:.12}),kt.play("whoosh",{vol:.45,delay:.04,ui:!0}),nt=1.1,Ht()&&(Vt("hint").hidden=!0)}function v(b){for(let D of b)if(D.type==="fall"&&e.state.alive&&!e.state.ko&&kt.play("grunt",{vol:.3,pan:M(D.pos),rate:1.15}),D.type==="impact"){let q=Math.min(1,D.dv/9);D.dv>5&&pt(12),kt.play(D.zone==="head"?"knock":D.zone==="chest"||D.zone==="gut"?"thud":"limb",{vol:.12+q*.8,rate:1.12-q*.22,pan:M(D.pos)}),Jt(D.pos,Math.min(10,2+Math.round(D.dv)),.8)}else if(D.type==="injury"){let q=gt.findIndex(Dt=>Dt.bone===D.bone);q>=0&&gt.splice(q,1);let it=D.base==="neck"&&D.level>=2||D.base==="skull"&&D.level===3;gt.unshift({bone:D.bone,base:D.base,side:D.side,level:D.level,fatal:it}),qt(!0),D.level>=2&&(kt.play(jn.sounds.snap,{vol:D.level===3?.75:.5,rate:D.level===3?.85:1.05,pan:M(D.pos),delay:D.cause==="shot"?.05:0}),pt(D.level===3?28:14)),it&&D.cause!=="shot"&&$t(mi(D.base==="neck"?"Broken neck":"Skull shattered"),D.pos,!0,.5)}else if(D.type==="step")kt.play(D.hurt>.3?"scuff":"step",{vol:D.hurt>.3?.3:.22,pan:M(D.pos)}),e.state.hits>0&&Jt(D.pos,2,.35);else if(D.type==="buckle")kt.play("scuff",{vol:.2,pan:M(D.pos)});else if(D.type==="glass"){kt.play("glass",{vol:e.state.clock-Yt>.7?.9:.4,pan:M(D.pos),rate:.9+Math.random()*.25}),pt(30);for(let q=0;q<26;q++)Tt.emit([D.pos[0]+(Math.random()-.5)*.9,D.pos[1],D.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);e.state.clock-Yt>.7&&$t("Through the glass",D.pos,!0,.5),Yt=e.state.clock}else if(D.type==="fall"&&(e.state.fellBecause==="edge"||e.state.fellBecause==="trip"))$t(e.state.fellBecause==="trip"?"Over the sill":"Lost his footing",D.pos,!0,.7);else if(D.type==="out")$t("Out cold",D.pos,!0,.55);else if(D.type==="rise")kt.play("grunt",{vol:.3,pan:M(D.pos),rate:.9}),kt.play("scuff",{vol:.3,pan:M(D.pos)});else if(D.type==="up")$t("Back on his feet",D.pos,!0,.9);else if(D.type==="gaveout")kt.play("groan",{vol:.35,pan:M(D.pos)});else if(D.type==="kneel")kt.play("knees",{vol:.6,pan:M(D.pos)}),kt.play("groan",{vol:.32,pan:M(D.pos),delay:.1}),$t("Knees",D.pos,!1,.9);else if(D.type==="down")D.onFeet>1&&$t("On his feet "+D.onFeet.toFixed(1)+" s",D.pos,!1,.6);else if(D.type==="dead"&&D.cause==="Bled out")$t(mi("Bled out")+" \xB7 "+D.time.toFixed(1)+" s",D.pos,!0,.5);else if(D.type==="done"&&!Ft){Ft=!0,z=performance.now();let q=yt(),it=e.levelKey,Dt="";if(Ht())Vt("result-label").textContent="Free play",Vt("result-total").textContent=oi(q.total),Vt("result-note").textContent=mi(D.outcome)+" \xB7 nothing is banked in free play";else{let re=lu(Mt,it,e.state,q.total),Pe=Ur(Mt);Lt(),Vt("result-label").textContent=re.record&&re.pay>0?"New best take":"Take over",Vt("result-total").textContent=oi(re.pay+re.bonus),Vt("result-note").textContent=mi(D.outcome)+(Pe>1?" \xB7 pays \xD7"+Pe.toFixed(2):"")+" \xB7 best here "+oi(Mt.best[it]||0),Dt=re.goals.map(Ie=>`<li><span>\u2605</span>${Ie.text}<em>+${oi(Ie.reward)}</em></li>`).join("")+re.opened.map(Ie=>`<li class="opened"><span>\u2192</span>New level: ${bi[Ie].label}</li>`).join("");let _e=au(Mt);_e&&(Dt+=`<li class="save-for"><span>$</span>${Mt.bank>=_e.price?"You can afford "+_e.name:oi(_e.price-Mt.bank)+" short of "+_e.name}</li>`),re.goals.length&&kt.play("goal",{ui:!0,vol:.5,delay:.25})}kt.play("stamp",{ui:!0,vol:.45}),Vt("result-goals").innerHTML=Dt,Vt("result-injuries").innerHTML=zt(),Vt("result-lines").innerHTML=q.lines.filter(re=>re[2]>0).map(re=>`<tr><td>${mi(re[0])}</td><td>${re[1]}</td><td>${oi(re[2])}</td></tr>`).join(""),Vt("result-shop").hidden=Ht();let Ot=!Ht()&&Dt.includes("New level")?Object.keys(bi).filter(re=>Hs(Mt,re)).at(-1):"";Vt("result-go").hidden=!Ot,Vt("result-go").dataset.level=Ot,Ot&&(Vt("result-go").textContent="Go to "+bi[Ot].label),At(),lt(),Vt("result").hidden=!1}}let R={yaw:-1.12,pitch:.22,dist:6.2,zoom:.8,target:new $(0,.95,0),aim:{yaw:-1.12,pitch:.22,dist:6.2},swing:0},J=new $,W=new Pa,Q=new ve,Pt=null;i.addEventListener("pointerdown",b=>{Pt={x:b.clientX,y:b.clientY,moved:!1,id:b.pointerId},i.setPointerCapture(b.pointerId)}),i.addEventListener("pointermove",b=>{if(!Pt||Pt.id!==b.pointerId)return;let D=b.clientX-Pt.x,q=b.clientY-Pt.y;!Pt.moved&&Math.hypot(D,q)<7||(Pt.moved=!0,vt=!0,R.yaw-=D*.006,R.pitch=Math.max(.03,Math.min(1.3,R.pitch+q*.005)),R.swing===0&&(R.aim.yaw=R.yaw,R.aim.pitch=R.pitch),Pt.x=b.clientX,Pt.y=b.clientY)});let Kt=b=>{if(!Pt||Pt.id!==b.pointerId)return;let D=!Pt.moved;if(Pt=null,!D||b.type==="pointercancel")return;if(e.state.done){performance.now()-z>450&&V();return}let q=i.getBoundingClientRect();Q.set((b.clientX-q.left)/q.width*2-1,-((b.clientY-q.top)/q.height)*2+1),W.setFromCamera(Q,o);let it=W.intersectObjects(rt,!1);it.length&&ce(it[0].object.userData.part,it[0].point)};i.addEventListener("pointerup",Kt),i.addEventListener("pointercancel",Kt),i.addEventListener("wheel",b=>{R.dist=Math.max(3,Math.min(16,R.dist*(1+Math.sign(b.deltaY)*.08))),R.swing===0&&(R.aim.dist=R.dist),b.preventDefault()},{passive:!1});function Wt(){let b=i.clientWidth,D=i.clientHeight;!b||!D||(s.setSize(b,D,!1),o.aspect=b/D,o.updateProjectionMatrix())}new ResizeObserver(Wt).observe(i),Wt();function Zt(b){let D=e.pos(1),q=e.state,it=e.level.cam.fall;if(J.set(D[0],Math.max(e.groundY(D[0],D[2])+.5,D[1]-.4),D[2]),R.target.lerp(J,1-Math.exp(-b*3)),R.zoom+=((q.hits===0?.8:1)-R.zoom)*Math.min(1,b*2),it&&!vt&&q.drop>.35){R.swing=Math.min(1,R.swing+b/.9);let re=R.swing*R.swing*(3-2*R.swing),Pe=it.yaw-R.aim.yaw;Pe=Math.atan2(Math.sin(Pe),Math.cos(Pe)),R.yaw=R.aim.yaw+Pe*re,R.pitch=R.aim.pitch+(it.pitch-R.aim.pitch)*re,R.dist=R.aim.dist+(it.dist-R.aim.dist)*re}let Dt=R.dist*R.zoom/Math.pow(Math.min(1,o.aspect),.75),Ot=Math.cos(R.pitch);if(o.position.set(R.target.x+Math.sin(R.yaw)*Ot*Dt,R.target.y+Math.sin(R.pitch)*Dt,R.target.z+Math.cos(R.yaw)*Ot*Dt),o.lookAt(R.target),l.position.set(R.target.x-4,R.target.y+10,R.target.z+7),l.target.position.set(R.target.x,R.target.y-1,R.target.z),w.visible=q.mode==="balance"&&!q.done&&(Ht()||St>0),w.visible){let re=e.pos(0);w.position.set(re[0],e.groundY(re[0],re[2])+.012,re[2]),w.rotation.y=Math.atan2(-(re[0]-o.position.x),-(re[2]-o.position.z))}}let ae=performance.now(),ge=0,Ve=!1,ee={n:0,sum:0,stage:0};function Ce(b){if(ee.stage>1||(++ee.n>30&&(ee.sum+=b),ee.n<150))return;let D=ee.sum/120>.03;if(ee.n=0,ee.sum=0,!D){ee.stage=2;return}ee.stage===0?(s.setPixelRatio(1),Wt()):l.castShadow=!1,ee.stage++}let je={n:0,sum:0,worst:0,phys:0};function ln(b){if(je.n++,je.sum+=b,je.worst=Math.max(je.worst,b),je.sum<.5)return;let D=l.castShadow?s.getPixelRatio()<Math.min(window.devicePixelRatio||1,2)?"reduced resolution":"full quality":"no shadows";Vt("fps").textContent=Math.round(je.n/je.sum)+" fps \xB7 worst frame "+Math.round(je.worst*1e3)+" ms \xB7 physics "+(je.phys/je.n).toFixed(1)+" ms \xB7 "+D+" \xB7 "+jn.id+" edition",je.n=0,je.sum=0,je.worst=0,je.phys=0}Vt("fps").hidden=!P;function Je(b){Ve||(P&&ln((b-ae)/1e3),Ce((b-ae)/1e3),Bt(Math.max(0,Math.min(.05,(b-ae)/1e3))),ae=b,requestAnimationFrame(Je))}function Bt(b,D=!0){nt=Math.max(0,nt-b);let q=e.state;wt=!Ht()&&q.mode==="down"&&q.spent&&q.alive&&q.bleed>.2&&nt<=0&&(St<=0||q.time-q.downAt>1.5);let it=xt&&q.hits>0&&!q.done;it&&(nt=0);let Dt=it?7:wt?6:Et?.2:nt>.45?.16:nt>0?.16+(1-nt/.45)*.84:1;at+=(Dt-at)*Math.min(1,b*(wt?3:it?8:14)),!wt&&!it&&at>1&&(at=1);let Ot=Math.min(b*at,18/120);kt.setSlow(Math.min(1,at));let re=Math.max(1,Math.ceil(Ot/(1/120))),Pe=P?performance.now():0;if(Ot>1e-5)for(let Ze=0;Ze<re;Ze++)v(e.step(Ot/re));P&&(je.phys+=performance.now()-Pe),ht(),Qe(Ot),oe.step(Ot),ye.step(Ot,pn),Tt.step(Ot),e.levelKey==="window"&&e.state.glass>0&&O(),Fe.material.opacity=Math.max(0,Fe.material.opacity-b*5),Zt(b),He(b);let _e=e.state.wrap||0,Ie=e.state.hits>0&&!e.state.done&&_e>.2;Vt("wrap").hidden===Ie&&(Vt("wrap").hidden=!Ie),Ie&&(Vt("wrap-fill").style.width=(_e*100).toFixed(0)+"%"),ge+=b,ge>.1&&!e.state.done&&(ge=0,yt()),D&&s.render(r,o)}if(kt.setMuted(!!Mt.muted),k(),P){Vt("soundboard").hidden=!1;for(let b of kt.names){let D=document.createElement("button");D.type="button",D.className="util",D.textContent=b,D.addEventListener("click",()=>{de(),kt.play(b,{vol:.9,ui:!0})}),Vt("soundboard-list").appendChild(D)}}vc&&!Mt.showcase&&(Mt.showcase=1,Mt.mode="free",Lt()),me()&&(Z="pistol",Vt("intro-list").innerHTML=`<li>Tap the dummy where you want to ${jn.id==="sand"?"hit":"shoot"} him.</li><li>Everything is unlocked: tools bottom left, levels top left.</li><li>Drag to look around.</li><li>Rather earn it? Switch to Career in the level menu.</li>`),Vt("intro").hidden=!!Mt.seenIntro,Vt("intro-start").addEventListener("click",()=>{Mt.seenIntro=!0,Lt(),Vt("intro").hidden=!0,de()}),Xt(),Qt(bi[Mt.level]&&Ut(Mt.level)?Mt.level:"yard",!0),Vt("loading").hidden=!0,ht(),requestAnimationFrame(Je),window.__imhit={sim:e,setTool(b){Z=b,C()},setMode:ie,career:hu,arrow:w,edition:jn,sfx:kt,get save(){return Mt},get actionsLeft(){return St},strikePart(b,D=0){let q=gn.findIndex(re=>re.name===b),it=rt[q],Dt=new $().setFromMatrixPosition(it.matrixWorld).add(new $(0,D,0)),Ot=o.position.clone().sub(Dt).setY(0).normalize();ce(q,Dt.addScaledVector(Ot,gn[q].r))},reset:V,setLevel:b=>Qt(b,!0),screen(b){let D=gn.findIndex(Dt=>Dt.name===b),q=new $().setFromMatrixPosition(rt[D].matrixWorld).project(o),it=i.getBoundingClientRect();return[it.left+(q.x*.5+.5)*it.width,it.top+(-q.y*.5+.5)*it.height]},cam:R,physics:eo,showcase:vc,tool:()=>Z,manual(){Ve=!0},advance:Bt}}Promise.all([oy(),eo==="previous"?Promise.resolve().then(()=>(Hf(),Gf)).then(n=>n.createSim):Df]).then(([n,t])=>cy(n,t)).catch(n=>{console.error(n),Vt("loading").textContent="Could not start the physics engine in this browser."});
