var Bf=Object.defineProperty;var kf=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var pu=(n,t)=>{for(var e in t)Bf(n,e,{get:t[e],enumerable:!0})};var Ff={};pu(Ff,{BONES:()=>du,BONE_PAY:()=>Nf,LEVELS:()=>mc,PARTS:()=>Mn,TOOLS:()=>Zx,YARD:()=>qx,createSim:()=>Qx,groundY:()=>Vn});function Vn(n,t){if(t>Me.z-30){let e=t-Me.z;return Math.abs(e)>Me.halfWidth||n<-Me.back||n>Me.wall?0:n<0?Me.floor:Math.abs(e)<Me.open?Me.floor+Me.sill:Me.top}if(t>an.z-30){let e=t-an.z;return Math.abs(e)>an.halfWidth||n<-an.back||n>=an.length?0:n<=0?an.height:Math.max(0,an.height-(Math.floor(n/an.run)+1)*an.rise)}return 0}function ns(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function hu(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function Qn(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}function Fr(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function uu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Qx(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(ou,Dr),e.EnableCollision(Dr,Dr);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(ou,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Dr,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),h=new n.Quat(0,0,0,1),p=[];function d(_,u,R,B,G=.85){let ct=[(R[0]+B[0])/2,(R[1]+B[1])/2,(R[2]+B[2])/2],bt=[(B[0]-R[0])/2,(B[1]-R[1])/2,(B[2]-R[2])/2],gt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(bt[0],bt[1],bt[2]),Math.min(.02,bt[0]*.5,bt[1]*.5,bt[2]*.5)),new n.RVec3(ct[0],ct[1],ct[2]),o,n.EMotionType_Static,ou);gt.mFriction=G,gt.mRestitution=.03,a.AddBody(a.CreateBody(gt).GetID(),n.EActivation_DontActivate),u&&p.push({c:ct,h:bt,kind:u,level:_})}d("all",null,[-50,-1,-40],[50,0,190]);{let _=an.z-an.halfWidth,u=an.z+an.halfWidth;d("stairs","landing",[-an.back,0,_],[0,an.height,u]);for(let R=0;R<an.steps-1;R++)d("stairs","step",[R*an.run,0,_],[(R+1)*an.run,an.height-(R+1)*an.rise,u],.13);d("stairs","wall",[-an.back,0,_-.3],[an.length+3,an.height+2.6,_])}let f={tiles:[],panes:[],frame:[]};{let _=Me.z-Me.halfWidth,u=Me.z+Me.halfWidth,R=Me.floor;d("window","building",[-Me.back,0,_],[Me.wall,R,u]),d("window","wall",[0,R,_],[Me.wall,Me.top,Me.z-Me.open]),d("window","wall",[0,Me.lintel,Me.z-Me.open],[Me.wall,Me.top,Me.z+Me.open]),d("window","sill",[0,R,Me.z-Me.open],[Me.wall,R+Me.sill,Me.z+Me.open]);let B=Me.glassX,G=Me.z-Me.panes*Me.pane/2,ct=Me.glassY,bt=Me.panes*Me.pane,gt=.035;for(let $=0;$<=Me.panes;$++)d("window","frame",[B+$*Me.pane-gt,ct-.09,G-gt],[B+$*Me.pane+gt,ct-.012,G+bt+gt]),d("window","frame",[B-gt,ct-.09,G+$*Me.pane-gt],[B+bt+gt,ct-.012,G+$*Me.pane+gt]);for(let[$,Mt]of[[B,G],[B+bt,G],[B,G+bt],[B+bt,G+bt]])d("window","frame",[$-.05,0,Mt-.05],[$+.05,ct-.09,Mt+.05]);let ot=uu(99),lt=($,Mt,it,st,Gt,kt)=>{let te=it-$,xe=st-Mt;if(Gt===0||te<.3&&xe<.3){kt.push([$,Mt,it,st]);return}let Rt=.32+.36*ot();te>xe?(lt($,Mt,$+te*Rt,st,Gt-1,kt),lt($+te*Rt,Mt,it,st,Gt-1,kt)):(lt($,Mt,it,Mt+xe*Rt,Gt-1,kt),lt($,Mt+xe*Rt,it,st,Gt-1,kt))};for(let $=0;$<Me.panes;$++)for(let Mt=0;Mt<Me.panes;Mt++){let st=B+$*Me.pane+.04,Gt=G+Mt*Me.pane+.04,kt={broken:!1,min:[st-.04,Gt-.04],max:[st+Me.pane-.04,Gt+Me.pane-.04],y:ct,tiles:[]},te=[];lt(st,Gt,st+Me.pane-2*.04,Gt+Me.pane-2*.04,3,te);for(let xe of te){let Rt=[(xe[2]-xe[0])/2,.007,(xe[3]-xe[1])/2],qe=[(xe[0]+xe[2])/2,ct,(xe[1]+xe[3])/2],S=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(Rt[0],Rt[1],Rt[2]),.002),new n.RVec3(qe[0],qe[1],qe[2]),o,n.EMotionType_Static,Dr);S.mAllowDynamicOrKinematic=!0,S.mFriction=.5,S.mRestitution=.15,S.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,S.mMassPropertiesOverride.mMass=Math.max(.15,Rt[0]*Rt[2]*4*12);let k=a.CreateBody(S),rt=new n.BodyID(k.GetID().GetIndexAndSequenceNumber());a.AddBody(rt,n.EActivation_DontActivate),kt.tiles.push(f.tiles.length),f.tiles.push({id:rt,home:qe,h:Rt})}f.panes.push(kt)}}function y(_,u){_.broken=!0,nt.glass++;for(let R of _.tiles){let B=f.tiles[R];a.SetMotionType(B.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(u[0]*.45+(Jt()-.5)*2.2,u[1]*.5-Jt()*1.2,u[2]*.45+(Jt()-.5)*2.2);let G=new n.Vec3((Jt()-.5)*14,(Jt()-.5)*6,(Jt()-.5)*14);a.SetLinearAndAngularVelocity(B.id,l,G),n.destroy(G)}le.push({type:"glass",pos:[(_.min[0]+_.max[0])/2,_.y,(_.min[1]+_.max[1])/2]})}function w(){for(let _ of f.tiles)a.SetMotionType(_.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(_.home[0],_.home[1],_.home[2]),a.SetPositionAndRotation(_.id,c,o,n.EActivation_DontActivate);for(let _ of f.panes)_.broken=!1}let g=new n.Skeleton;for(let _ of Mn)g.AddJoint(new n.JPHString(_.name,_.name.length),_.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(Mn.length),Mn.forEach((_,u)=>{let R=m.mParts.at(u);if(R.SetShape(new n.CapsuleShape(_.hh,_.r)),R.mPosition=new n.RVec3(_.c[0],_.c[1],_.c[2]),R.mRotation=o,R.mMotionType=n.EMotionType_Dynamic,R.mMotionQuality=n.EMotionQuality_LinearCast,R.mObjectLayer=Dr,R.mFriction=.7,R.mRestitution=.05,R.mAngularDamping=.3,R.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,R.mMassPropertiesOverride.mMass=_.mass,_.strength=_.mass*26,!(_.parent<0))if(_.type==="st"){let B=new n.SwingTwistConstraintSettings;B.mSpace=n.EConstraintSpace_WorldSpace,B.mPosition1=B.mPosition2=new n.RVec3(_.j[0],_.j[1],_.j[2]),B.mTwistAxis1=B.mTwistAxis2=new n.Vec3(_.twist[0],_.twist[1],_.twist[2]),B.mPlaneAxis1=B.mPlaneAxis2=new n.Vec3(1,0,0),B.mNormalHalfConeAngle=B.mPlaneHalfConeAngle=_.cone*Ya,B.mTwistMinAngle=-_.tw*Ya,B.mTwistMaxAngle=_.tw*Ya,B.mMaxFrictionTorque=_.mass*.4;for(let G of[B.mSwingMotorSettings,B.mTwistMotorSettings])G.mSpringSettings.mFrequency=8,G.mSpringSettings.mDamping=1,G.mMinTorqueLimit=-_.strength,G.mMaxTorqueLimit=_.strength;R.mToParent=B}else{let B=new n.HingeConstraintSettings;B.mSpace=n.EConstraintSpace_WorldSpace,B.mPoint1=B.mPoint2=new n.RVec3(_.j[0],_.j[1],_.j[2]),B.mHingeAxis1=B.mHingeAxis2=new n.Vec3(0,0,1),B.mNormalAxis1=B.mNormalAxis2=new n.Vec3(1,0,0),B.mLimitsMin=_.min*Ya,B.mLimitsMax=_.max*Ya,B.mMaxFrictionTorque=_.mass*.4,B.mMotorSettings.mSpringSettings.mFrequency=8,B.mMotorSettings.mSpringSettings.mDamping=1,B.mMotorSettings.mMinTorqueLimit=-_.strength,B.mMotorSettings.mMaxTorqueLimit=_.strength,R.mToParent=B}});let b=0,L=Mn.map(_=>(b+=_.mass,_.mass));m.DisableParentChildCollisions(),m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let D=Mn.map((_,u)=>new n.BodyID(T.GetBodyID(u).GetIndexAndSequenceNumber())),I=Mn.map((_,u)=>{if(_.parent<0)return null;let R=T.GetConstraint(u-1);return _.type==="st"?n.castObject(R,n.SwingTwistConstraint):n.castObject(R,n.HingeConstraint)}),v=Mn.length,E=(_,u)=>{let R=a.GetPosition(D[_]);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u},H=(_,u)=>{let R=a.GetLinearVelocity(D[_]);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u},F=(_,u)=>{let R=a.GetRotation(D[_]);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u[3]=R.GetW(),u},q=(_,u)=>{let R=a.GetAngularVelocity(D[_]);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u},j=_=>E(_,[0,0,0]),pt=(_,u)=>{let R=a.GetPosition(_);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u},z=(_,u)=>{let R=a.GetRotation(_);return u[0]=R.GetX(),u[1]=R.GetY(),u[2]=R.GetZ(),u[3]=R.GetW(),u};function ut(_,u,R,B,G){l.Set(u,R,B),G?(c.Set(G[0],G[1],G[2]),a.AddForce(D[_],l,c,n.EActivation_Activate)):a.AddForce(D[_],l,n.EActivation_Activate)}function dt(_,u,R,B,G){l.Set(u,R,B),G?(c.Set(G[0],G[1],G[2]),a.AddImpulse(D[_],l,c)):a.AddImpulse(D[_],l)}let ht=new Float32Array(v).fill(1),yt=new Float32Array(v),_t=new Float32Array(v).fill(-1),mt=new Float32Array(v*3),It=new Float32Array(v);function jt(_,u){h.Set(u[0],u[1],u[2],u[3]),I[_].SetTargetOrientationCS(h)}let Ce=1,Et=(_,u,R,B=0)=>hu(hu(ns(0,1,0,_),ns(0,0,1,u*R)),ns(1,0,0,B*R*Ce));function Kt(){for(let _=1;_<v;_++){let u=ht[_]*(1-yt[_]);if(Math.abs(u-_t[_])<.02&&!(u===0&&_t[_]!==0))continue;_t[_]=u;let R=Mn[_],B=I[_],G=u>.02?n.EMotorState_Position:n.EMotorState_Off,ct=R.strength*u,bt=2.5+5.5*u;if(R.type==="st"){for(let gt of[B.GetSwingMotorSettings(),B.GetTwistMotorSettings()])gt.mMinTorqueLimit=-ct,gt.mMaxTorqueLimit=ct,gt.mSpringSettings.mFrequency=bt;B.SetSwingMotorState(G),B.SetTwistMotorState(G)}else{let gt=B.GetMotorSettings();gt.mMinTorqueLimit=-ct,gt.mMaxTorqueLimit=ct,gt.mSpringSettings.mFrequency=bt,B.SetMotorState(G)}}}let nt={},ae=[],J=[{shin:fe.lleg_l,thigh:fe.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0},{shin:fe.lleg_r,thigh:fe.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0}],Pt={},Jt=uu(1),Ee=0,me=mc.yard,Xe="yard",le=[],Ke=[];function un(){Mn.forEach((_,u)=>{c.Set(me.start[0]+_.c[0],me.start[1]+_.c[1]-.03,me.start[2]+_.c[2]),a.SetPositionAndRotation(D[u],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(D[u],l,l)}),ht.fill(1),yt.fill(0),_t.fill(-1),mt.fill(0),It.fill(0),ae.length=0,w(),Jt=uu(1234+77*Ee++),Object.assign(nt,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:me.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Pt,{support:1,hT:me.start[1]+cu,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Jt()*6.28,Jt()*6.28,Jt()*6.28,Jt()*6.28],lastCom:[me.start[0],me.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,load:0,buckleLeg:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let _ of J)_.swing=!1,_.hurt=0,_.broken=0,_.kneeDown=!1,_.planted=[me.start[0],me.start[2]+_.side*pc],_.t=0;Kt()}function ze(_){nt.alive&&(nt.alive=!1,nt.diedAt=nt.time,nt.outcome=_,Ke.push({type:"dead",cause:_,pos:j(fe.head),time:nt.time}))}function je(){nt.ko||!nt.alive||(nt.ko=!0,Ke.push({type:"out",pos:j(fe.head)}))}function En(_,u){let R=Mn[_].zone,B=Mn[_].side===1?"_l":"_r";if(R==="head")return u[0]<-.45?u[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:u[1]<-.55?[["jaw",1]]:[["skull",1]];if(_===fe.chest){let G=u[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(u[2])>.55||u[1]>.5)&&G.push(["collarbone"+(u[2]>=0?"_l":"_r"),.9]),G}return _===fe.pelvis?u[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:R==="arm"?Mn[Mn[_].parent].zone==="arm"?u[1]<-.35?[["wrist"+B,1]]:[["forearm"+B,1]]:u[1]>.5?[["humerus"+B,.8],["collarbone"+B,.8]]:[["humerus"+B,1]]:R==="thigh"?[["femur"+B,1]]:u[1]>.35?[["kneecap"+B,1]]:u[1]<-.5?[["ankle"+B,1]]:[["tibia"+B,1]]}function pn(_,u,R,B){let G=_.split("_")[0],ct=du[G];for(;u>0&&!ct[u-1];)u--;let bt=nt.bones[_]||0;if(u<=bt)return 0;nt.bones[_]=u;let gt=_.endsWith("_l")?1:_.endsWith("_r")?-1:0;Ke.push({type:"injury",bone:_,base:G,side:gt,level:u,was:bt,pos:[R[0],R[1],R[2]],cause:B});let ot=gt===1?fe.uarm_l:fe.uarm_r,lt=gt===1?fe.larm_l:fe.larm_r,$=Mt=>{nt.stun=Math.min(1.6,nt.stun+Mt)};if(G==="femur"||G==="tibia"||G==="kneecap"||G==="ankle"){let Mt=J[gt===1?0:1];Mt.hurt=Math.min(1,Math.max(Mt.hurt+.15,u===2?.8:u===3?1:0)),Mt.broken=Math.max(Mt.broken,u),yt[Mt.thigh]=Math.max(yt[Mt.thigh],Mt.hurt*.5),yt[Mt.shin]=Math.max(yt[Mt.shin],Mt.hurt*.6),Pt.legWound=Math.max(Pt.legWound,Mt.hurt),u>=2&&nt.mode==="balance"&&(Pt.buckle=.24,Pt.buckleDip=.3)}else if(G==="humerus")u>=2&&(yt[ot]=.9,yt[lt]=Math.max(yt[lt],.6));else if(G==="forearm"||G==="wrist")u>=2&&(yt[lt]=.9);else if(G==="collarbone")u>=2&&(yt[ot]=Math.max(yt[ot],.7));else if(G==="ribs")$([0,.08,.22,.4][u]),u===3&&ae.push({part:fe.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(G==="nose")$(.1),u>=2&&ae.push({part:fe.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(G==="jaw")$(.12*u);else if(G==="skull")u===3?ze("Skull shattered"):u===2&&($(.5),je());else if(G==="neck")u>=2?ze("Broken neck"):$(.3);else if(G==="spine"){if(u>=2){nt.paralysed=!0;for(let Mt of J)Mt.hurt=1,yt[Mt.thigh]=1,yt[Mt.shin]=1}}else if(G==="pelvis"&&u>=2){nt.cantRise=!0;for(let Mt of J)Mt.hurt=Math.max(Mt.hurt,.5)}return u}function xn(_,u,R,B){let G=du[_.split("_")[0]];nt.bones[_]&&(u*=1.15),u*=.85+.3*Jt();let ct=G[2]&&u>=G[2]?3:u>=G[1]?2:u>=G[0]?1:0;return ct?pn(_,ct,R,B):0}let wn=()=>!nt.paralysed&&!nt.cantRise&&!(J[0].broken>=3||J[1].broken>=3)&&!(J[0].broken>=2&&J[1].broken>=2),pe=[0,0,0,1],X=[0,0,0],ne=[0,0,0];function sn(_,u,R,B){if(nt.done)return null;let G=Mn[_],ct=j(fe.chest)[1],bt=j(fe.head)[1],ot=G.zone==="chest"&&u[1]-ct>.13||G.zone==="head"&&bt-u[1]>.06?"neck":G.zone;if(nt.hits++,nt.mode==="fall"&&(nt.fallHits++,ft[1]-Vn(ft[0],ft[2])>1.2&&nt.airHits++),B.impulse>200)for(let[st,Gt]of[[_,.5],[fe.chest,.3],[fe.pelvis,.2]])dt(st,R[0]*B.impulse*Gt,R[1]*B.impulse*Gt,R[2]*B.impulse*Gt,st===_?u:null);else dt(_,R[0]*B.impulse,R[1]*B.impulse,R[2]*B.impulse,u);for(let st=0;st<v;st++)It[st]=.12;E(_,ne),F(_,pe);let lt=Qn(Za(pe),[u[0]-ne[0],u[1]-ne[1],u[2]-ne[2]],[0,0,0]);if(B.bleed>0){let st=B.kind==="blunt";ae.push({part:_,zone:ot,at:lt,arterial:!st&&(ot==="neck"||ot==="thigh"),rate:st?1.6:jx[ot]*B.bleed,left:st?7:Jx[ot]*B.bleed})}nt.stun=Math.min(1.6,nt.stun+B.stun*(ot==="head"?2.2:ot==="neck"?1.4:1)),ot==="head"&&B.kind==="ballistic"?(ze("Headshot"),ht.fill(0)):ot==="head"&&nt.stun>1&&je();let $=[lt[0]/G.r,lt[1]/(G.hh+G.r),lt[2]/G.r];if(B.kind==="ballistic"){let st=B.impulse>60,Gt=ot==="neck"?"neck":ot==="head"?"skull":En(_,$)[0][0],kt=Gt.split("_")[0],[te,xe]=kt==="skull"?[0,1]:kt==="neck"?[st?.8:.9,0]:kt==="spine"?[st?.5:.65,0]:Kx.has(kt)?st?[.1,.6]:[.25,.25]:kt==="pelvis"?st?[.45,.2]:[.75,.05]:st?[.2,.3]:[.45,.1],Rt=Jt();Rt>=te&&pn(Gt,Rt>1-xe?3:2,u,"shot")}else{let st=(B.impulse-45)/19;if(ot==="neck")xn("neck",st*.6,u,"blow");else for(let[Gt,kt]of En(_,$))xn(Gt,st*kt,u,"blow")}if(ot==="thigh"||ot==="shin"){let st=J[G.side===1?0:1];st.hurt=Math.min(1,st.hurt+(B.kind==="ballistic"?.7:.45)*(B.bleed>1.5||B.impulse>150?1.4:1)),yt[st.thigh]=Math.max(yt[st.thigh],st.hurt*.5),yt[st.shin]=Math.max(yt[st.shin],st.hurt*.6),Pt.legWound=Math.max(Pt.legWound,st.hurt)}if(ot==="arm"){yt[_]=.9;let st=Mn.findIndex(Gt=>Gt.parent===_);st>0&&(yt[st]=.9)}if(B.kind==="ballistic"){let st=Math.hypot(R[0],R[2])||1,Gt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[ot],kt=(38+34*Jt())*Gt*(B.impulse>60?.5:1),te=(Jt()-.5)*.35,xe=tn(((u[0]-ne[0])*Pt.hz+(u[2]-ne[2])*-Pt.hx)/.12,-1,1)*.65,Rt=R[0]/st-Pt.hz*xe-R[2]/st*te,qe=R[2]/st+Pt.hx*xe+R[0]/st*te,S=Math.hypot(Rt,qe)||1;Pt.reel=[Rt/S*kt,qe/S*kt],Pt.reelT=.16}nt.mode==="balance"&&(Pt.buckle=.22,Pt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[ot]||.04)*(B.kind==="ballistic"?1:.6)),Pt.flinch=.2,Pt.clutch=ot,Pt.clutchEnd=B.bleed>0?1e9:Math.max(Pt.clutchEnd<1e8?0:Pt.clutchEnd,nt.clock+.9+B.stun*4);let Mt=(u[0]-ne[0])*Pt.hz+(u[2]-ne[2])*-Pt.hx,it=ot==="arm"?-G.side:Mn[_].side||(Mt>=0?1:-1);if(yt[it===1?fe.uarm_l:fe.uarm_r]>.5&&(it=-it),Pt.clutchArm=ot==="neck"||ot==="head"?0:it,ot==="gut"&&B.kind==="ballistic"&&B.impulse<60&&(Pt.lookDown=1.1),B.kind==="ballistic"&&Pt.fleeAt>1e8){Pt.fleeAt=nt.time+.7+Jt()*.7+Pt.lookDown;let st=(Jt()-.5)*1.3,Gt=Math.hypot(R[0],R[2])||1,kt=R[0]/Gt,te=R[2]/Gt;Pt.fleeDir=[kt*Math.cos(st)-te*Math.sin(st),kt*Math.sin(st)+te*Math.cos(st)]}return Ke.push({type:"hit",zone:ot==="thigh"||ot==="shin"?"leg":ot,part:_,pos:u,tool:B,fatal:!nt.alive}),ot}let ft=[0,0,0],Nt=[0,0,0],Je=[0,0,0,1],Ot=[0,0,0],Se=[0,0,0],P=[0,0,0,1],M=[0,0,0],Y=[0,0,0],At=[0,0,0],tt=[0,0,0],Ct=[0,0,0];function Vt(_,u,R,B){l.Set(u,R,B),a.AddTorque(D[_],l,n.EActivation_Activate)}function wt(_,u,R,B,G,ct){F(_,pe),q(_,Y);let bt=pe[0],gt=pe[1],ot=pe[2],lt=pe[3],$=2*(bt*gt-lt*ot),Mt=1-2*(bt*bt+ot*ot),it=2*(gt*ot+lt*bt),st=Math.hypot(B,1,G),Gt=B/st,kt=1/st,te=G/st;return ct[0]=u*(Mt*te-it*kt)-R*Y[0],ct[1]=-R*.3*Y[1],ct[2]=u*($*kt-Mt*Gt)-R*Y[2],ct}function St(_,u,R,B,G,ct){ut(_,B,G,ct),ut(u,-B,-G,-ct,R)}function Ht(_,u,R,B,G,ct){F(_,pe),q(_,Y);let bt=pe[0],gt=pe[1],ot=pe[2],lt=pe[3],$=2*(bt*gt-lt*ot),Mt=1-2*(bt*bt+ot*ot),it=2*(gt*ot+lt*bt),st=Math.hypot(B,1,G),Gt=B/st,kt=1/st,te=G/st;return l.Set(u*(Mt*te-it*kt)-R*Y[0],(ct||0)-R*.3*Y[1],u*($*kt-Mt*Gt)-R*Y[2]),a.AddTorque(D[_],l,n.EActivation_Activate),Mt}function O(_,u){Qn(Je,[0,fc,_.side*pc],At),tt[0]=u[0]-(ft[0]+At[0]),tt[1]=u[1]-(ft[1]+At[1]),tt[2]=u[2]-(ft[2]+At[2]),Qn(Za(Je),tt,Ct);let R=Math.hypot(Ct[0],Ct[1],Ct[2])||1e-6,B=Ct[0]/R,G=Ct[1]/R,ct=Ct[2]/R;R=tn(R,.24,bs+Nr-.004);let bt=Math.acos(tn((bs*bs+R*R-Nr*Nr)/(2*bs*R),-1,1)),gt=-B,ot=-1-gt*B,lt=-gt*G,$=-gt*ct,Mt=Math.hypot(ot,lt,$)||1;ot/=Mt,lt/=Mt,$/=Mt;let it=Math.cos(bt),st=Math.sin(bt),Gt=B*it+ot*st,kt=G*it+lt*st,te=ct*it+$*st;ue(_,Gt,kt,te);let xe=Math.PI-Math.acos(tn((bs*bs+Nr*Nr-R*R)/(2*bs*Nr),-1,1));I[_.shin].SetTargetAngle(xe)}let Tt={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function xt(_,u){let R=Pt,B=nt.clock,G=.03,ct=0,bt=0,gt=R.clutch?Tt[R.clutch]:null;gt&&(G=gt.spine+(1-nt.strength)*.25,ct=gt.neck),R.lookDown>0&&(ct=.7,G+=.1),R.flinch>0&&(G=-.22,ct=-.3),nt.mode==="down"&&(G+=.15*Math.sin(B*1.3+R.phase[0]),bt=.25*Math.sin(B*.9+R.phase[1])),jt(fe.chest,hu(ns(0,1,0,G),ns(1,0,0,bt))),jt(fe.head,ns(0,1,0,ct));for(let ot of[1,-1]){let lt=ot===1?fe.uarm_l:fe.uarm_r,$=ot===1?fe.larm_l:fe.larm_r,Mt;if(nt.mode==="rise"&&R.riseT<1.5)Mt=[.75,-.25,-.15];else if(R.flinch>0)Mt=[.5,-.95,-1];else if(gt&&(R.clutchArm===0||R.clutchArm===ot))Mt=gt.arm;else if(nt.mode==="down"){let it=Math.max(0,Math.sin(B*.8+R.phase[2]+ot));Mt=[.4+1.5*it*nt.strength,-.2,-.5-.6*it]}else{let it=tn(.12+2.6*_,0,1.45);Mt=[.1+(_>.12?Math.sin(B*13+ot*1.7)*.45*tn(_*3,0,1):0)+.6*_,-it,-.3-.5*tn(_*3,0,1)]}jt(lt,Et(Mt[0],Mt[1],ot,Mt[3]||0)),I[$].SetTargetAngle(Mt[2])}}function vt(_){return E(_.shin,_.p),F(_.shin,P),Qn(P,[0,-Yx,0],tt),_.p[0]+=tt[0],_.p[1]+=tt[1],_.p[2]+=tt[2],_.p}let Dt=[0,1,0];function Ut(_){E(_.shin,ne),F(_.shin,P),Qn(P,Dt,tt);let u=tt[0],R=tt[1],B=tt[2];_.c[0]=ne[0]-.15*u,_.c[1]=ne[1]-.15*R,_.c[2]=ne[2]-.15*B,_.gap=_.c[1]-.055-Vn(_.c[0],_.c[2]),_.k[0]=ne[0]+.22*u,_.k[1]=ne[1]+.22*R,_.k[2]=ne[2]+.22*B,F(_.thigh,pe),Qn(pe,Dt,tt),_.kgap=Math.min(ne[1]+.15*R-.055,_.k[1]+.07*tt[1]-.07)-Vn(_.k[0],_.k[2])}function ue(_,u,R,B){let G=-R,ct=-B,bt=u,gt=Math.hypot(bt,ct,1+G)||1;jt(_.thigh,[0,-bt/gt,ct/gt,(1+G)/gt])}function _e(_,u){if(nt.mode==="fall"||nt.mode==="down")return;nt.mode="fall",nt.fellBecause=u||"";for(let bt of J)bt.swing=!1;_&&dt(fe.chest,_[0],0,_[1]);let R=Pt;R.fight=nt.alive&&!nt.ko?tn(.2+.95*nt.strength,0,1):0,R.fallT=0,R.settle=0;let B=(Nt[0]+Se[0])*.5+(_?_[0]/40:0),G=(Nt[2]+Se[2])*.5+(_?_[1]/40:0);Math.hypot(B,G)<.3&&(B+=(Ot[0]-ft[0])*4,G+=(Ot[2]-ft[2])*4),Math.hypot(B,G)<.1&&(B=R.hx,G=R.hz);let ct=Math.hypot(B,G);R.fallDir[0]=B/ct,R.fallDir[1]=G/ct,vt(J[0]),vt(J[1]),R.lead=J[0].p[0]*R.fallDir[0]+J[0].p[2]*R.fallDir[1]<J[1].p[0]*R.fallDir[0]+J[1].p[2]*R.fallDir[1]?0:1,Ke.push({type:"fall",pos:j(fe.chest),onFeet:nt.onFeet})}function zt(_){let u=Pt,R=nt,B=R.mode==="rise";B&&(u.riseT+=_,u.support=Math.min(1,u.riseT/.8));let G=R.mode==="kneel",ct=G||B&&u.riseT<1.9,bt=tn(R.strength,0,1),gt=Math.sqrt(xi/.95),ot=0,lt=0,$=0,Mt=0;for(let at=0;at<v;at++){let Te=L[at]/b;E(at,ne),H(at,X),ot+=ne[0]*Te,lt+=ne[2]*Te,$+=X[0]*Te,Mt+=X[2]*Te}let it=J[0],st=J[1];vt(it),vt(st),Ut(it),Ut(st),Qn(Je,[0,0,1],tt);let Gt=Math.hypot(tt[0],tt[2]),kt=Gt>.5?tt[0]/Gt:u.hz,te=Gt>.5?tt[2]/Gt:-u.hx;if(G)for(let at of J)at.planted[0]=at.k[0]+(at.p[0]-at.k[0])*.33,at.planted[1]=at.k[2]+(at.p[2]-at.k[2])*.33,!at.kneeDown&&at.kgap<.012&&(at.kneeDown=!0,xn("kneecap"+(at.side===1?"_l":"_r"),-Nt[1]*1.3,at.k,"fall"));let xe=9;for(let at of J)at.swing||(xe=Math.min(xe,at.gap)),ct&&(xe=Math.min(xe,at.kgap));u.grip+=tn((xe<.028?1:0)-u.grip,-_/.09,_/.05),u.airT=u.grip<.5?u.airT+_:0;let Rt=0,qe=0,S=R.hits>0,k=Math.hypot(ot-me.start[0],lt-me.start[2])>8.5||R.time>u.fleeAt+16;if(!ct&&R.bleed>.2&&R.time>u.fleeAt&&bt>.3&&!k){let at=(.2+.6*bt)*(1-.45*u.legWound),Te=Math.sin(R.clock*1.1+u.phase[3])*(.25+.9*(1-bt));Rt=(u.fleeDir[0]*Math.cos(Te)-u.fleeDir[1]*Math.sin(Te))*at,qe=(u.fleeDir[0]*Math.sin(Te)+u.fleeDir[1]*Math.cos(Te))*at;let Ve=Math.atan2(u.hz*Rt-u.hx*qe,u.hx*Rt+u.hz*qe),V=tn(Ve,-2.2*_,2.2*_),ee=Math.cos(V),he=Math.sin(V),ce=u.hx*ee+u.hz*he,Fe=-u.hx*he+u.hz*ee;u.hx=ce,u.hz=Fe}u.walk[0]+=(Rt-u.walk[0])*Math.min(1,_*2),u.walk[1]+=(qe-u.walk[1])*Math.min(1,_*2);let rt,K,Q=null;it.swing?(rt=st.planted[0],K=st.planted[1],Q=st):st.swing?(rt=it.planted[0],K=it.planted[1],Q=it):(rt=(it.planted[0]+st.planted[0])/2,K=(it.planted[1]+st.planted[1])/2);let Xt=ot-rt,ie=lt-K,Bt=Q?Vn(Q.planted[0],Q.planted[1]):Math.max(Vn(it.planted[0],it.planted[1]),Vn(st.planted[0],st.planted[1])),qt=ot+$/gt,se=lt+Mt/gt,Re=qt-rt,ye=se-K,Qt=Math.hypot(Re,ye),Ge=Math.min(1,Qt),mn=R.bleed>.2||R.stun>.05,C=S&&mn?1-bt+.35*Math.min(1,R.stun):0,N=R.clock,et=b*(.25+4.2*C)*(ct?.45:1),Z=et*(Math.sin(N*1.7+u.phase[0])*.55+Math.sin(N*.63+u.phase[1])*.45),Wt=et*(Math.sin(N*1.4+u.phase[2])*.55+Math.sin(N*.51+u.phase[3])*.45);u.buckle-=_,S&&!ct&&u.buckle<-.5&&Jt()<_*((mn?.12:0)+1.5*C+(Math.hypot(u.walk[0],u.walk[1])>.1?.8*u.legWound:0))&&(u.buckle=.24,u.buckleDip=.1+.2*Jt()+.12*C,u.buckleLeg=Q?Q.side:Jt()<.5?1:-1,le.push({type:"buckle",pos:[ft[0],ft[1],ft[2]]}));let Lt=1,oe=Bt+(ct?.5:cu-.1*(1-bt)),Pe=!1;if(B&&u.riseT<1&&(oe=Bt+u.riseFrom+(.5-u.riseFrom)*(u.riseT/1)),u.buckle>0&&(oe-=u.buckleDip),Q&&Q.hurt>0&&(oe-=.13*Q.hurt),!ct){let at=0,Te=9,Ve=0;for(let V of J){Qn(Je,[0,fc,V.side*pc],At);let ee=Math.hypot((V.swing?V.to[0]:V.planted[0])-ft[0]-At[0],(V.swing?V.to[1]:V.planted[1])-ft[2]-At[2]),he=Bt-fc+Math.sqrt(Math.max(0,lu*lu-ee*ee));V.swing?(Te=he,Ve=tn((V.t-.4)/.4,0,1)):he>at&&(at=he)}at<oe&&(oe=at,Pe=!0),Ve>0&&Te<oe&&(oe+=(Math.max(Te,Bt+.6)-oe)*Ve)}let Ye=u.hT;u.hT+=tn(oe-u.hT,-(Pe?3.2:2.2)*_,1.1*_);let Ze=Pe?Math.min(0,(u.hT-Ye)/_):0,en=Fr(Re*.9,ye*.9,.38);F(fe.pelvis,pe),Qn(pe,[-1,0,0],tt);let be=Math.atan2(tt[2]*u.hx-tt[0]*u.hz,tt[0]*u.hx+tt[2]*u.hz);q(fe.pelvis,Y);let Oe=fn.yawK*be-fn.yawD*Y[1],An=Math.sin(N*1.7+u.phase[0])*.55+Math.sin(N*.63+u.phase[1])*.45,gn=Math.sin(N*1.4+u.phase[2])*.55+Math.sin(N*.51+u.phase[3])*.45,Sn=B&&u.riseT<1.9;if(Sn){let at=b*gt*gt*.35*Xt+Z,Te=b*gt*gt*.35*ie+Wt,Ve=Fr(-1500*Xt-330*$,-1500*ie-330*Mt,150*(.25+.75*bt)+120);at=(at+Ve[0])*u.support*u.grip,Te=(Te+Ve[1])*u.support*u.grip,ut(fe.pelvis,at*.5,0,Te*.5),ut(fe.chest,at*.5,0,Te*.5);let V=tn(b*xi+12e3*(u.hT-ft[1])-1400*Nt[1],0,b*xi*1.9)*u.support*u.grip;ut(fe.pelvis,0,V*.55,0),ut(fe.chest,0,V*.45,0),Ht(fe.pelvis,520*u.support,46*u.support,en[0]*.3,en[1]*.3,Oe*u.support),Ht(fe.chest,900*u.support*(.5+.5*bt),80*u.support,en[0],en[1],0),u.load=V}else{for(let Zt of J){let Ue=G?Zt.k:Zt.c,He=G?Zt.kgap:Zt.gap,Cn=ft[0]-Ue[0],Pn=ft[1]-Ue[1],Wn=ft[2]-Ue[2],hi=Math.hypot(Cn,Pn,Wn)||1;Zt.u[0]=Cn/hi,Zt.u[1]=Pn/hi,Zt.u[2]=Wn/hi,Zt.on=(G||!Zt.swing)&&He<.03&&Zt.u[1]>.25,Zt.cap=b*xi*(G?.7:1.05+.75*bt)*(1-.5*Zt.hurt)*(u.buckle>0&&u.buckleLeg===Zt.side?.25:1),Zt.Fv=0}let at=it.on?1:0,Te=st.on?1:0;if(it.on&&st.on){let Zt=G?it.k:it.c,Ue=G?st.k:st.c,He=Ue[0]-Zt[0],Cn=Ue[2]-Zt[2],Pn=He*He+Cn*Cn,Wn=.01+.16*C,hi=(Zt[0]+Ue[0])/2,is=(Zt[2]+Ue[2])/2,ss=ot+fn.kv*($-u.walk[0])/gt+fn.kp*(ot-hi)+An*Wn,zi=lt+fn.kv*(Mt-u.walk[1])/gt+fn.kp*(lt-is)+gn*Wn;Te=Pn>.0025?tn(((ss-Zt[0])*He+(zi-Zt[2])*Cn)/Pn,0,1):.5,at=1-Te}let Ve=G?tn(b*xi*.75-500*Nt[1],0,b*xi):tn(b*xi+12e3*(u.hT-ft[1])-1400*(Nt[1]-Ze),0,b*xi*1.9);Ve*=u.support,G&&(u.hT=ft[1]);let V=0;J.forEach((Zt,Ue)=>{let He=Ve*(Ue===0?at:Te);if(!Zt.on){V+=He;return}Zt.Fv=Math.min(He,Zt.cap*Zt.u[1]),V+=He-Zt.Fv});for(let Zt of J)if(Zt.on&&V>0){let Ue=Math.min(V,Zt.cap*Zt.u[1]-Zt.Fv);Zt.Fv+=Ue,V-=Ue}let ee=0;for(let Zt of J){let Ue=G?Zt.k:Zt.c;if(Zt.on){let He=Zt.Fv/Zt.u[1];St(fe.pelvis,Zt.shin,Ue,He*Zt.u[0],He*Zt.u[1],He*Zt.u[2]),ee+=Zt.Fv}else if(!G&&!Zt.swing&&Zt.u[1]>.25){let He=tn(40+7e3*Zt.gap,40,280)*u.support;St(fe.pelvis,Zt.shin,Ue,He*Zt.u[0],He*Zt.u[1],He*Zt.u[2])}}u.load=ee;let he=0,ce=0;if(ee>0){let Zt=ot-rt,Ue=lt-K,He=$-u.walk[0],Cn=Mt-u.walk[1];if(it.on&&st.on&&!G){let is=st.c[0]-it.c[0],ss=st.c[2]-it.c[2],zi=Math.hypot(is,ss)||1,rs=-ss/zi,as=is/zi,ja=(ot-it.c[0])*rs+(lt-it.c[2])*as,Ja=He*rs+Cn*as;Zt=ja*rs,Ue=ja*as,He=Ja*rs,Cn=Ja*as}let Pn=G?.2/.5:(Q?fn.foot1:fn.foot2)/.95,Wn=b*(.25+2*C),hi=Fr(-1500*(Zt-u.walk[0]*.3)-330*He+An*Wn,-1500*(Ue-u.walk[1]*.3)-330*Cn+gn*Wn,ee*Pn*(.25+.75*bt));he=hi[0],ce=hi[1]}u.reelT>0&&(u.reelT-=_,he+=u.reel[0]/.16*u.grip,ce+=u.reel[1]/.16*u.grip),ut(fe.pelvis,he*.5,0,ce*.5),ut(fe.chest,he*.5,0,ce*.5);let Fe=wt(fe.chest,900*u.support*(.5+.5*bt),80*u.support,en[0],en[1],[0,0,0]);Vt(fe.chest,Fe[0],Fe[1],Fe[2]),Vt(fe.pelvis,-Fe[0],-Fe[1],-Fe[2]);let Ae=wt(fe.pelvis,520*u.support,46*u.support,en[0]*.3,en[1]*.3,[0,0,0]);if(ee>0)for(let Zt of J){if(!Zt.on)continue;let Ue=Zt.Fv/ee,He=260*(1-.5*Zt.hurt),Cn=G?Zt.k:Zt.c,Pn=Math.hypot(Ae[0],Ae[2])*Ue,Wn=Pn>He?He/Pn:1,hi=Ae[0]*Ue*Wn,is=Ae[2]*Ue*Wn,ss=ft[0]-Cn[0],zi=ft[1]-Cn[1],rs=ft[2]-Cn[2],as=ss*ss+zi*zi+rs*rs,ja=zi*is/as,Ja=(rs*hi-ss*is)/as,Of=-zi*hi/as;Vt(fe.pelvis,hi,0,is),St(fe.pelvis,Zt.shin,Cn,ja,Ja,Of)}Vt(fe.pelvis,0,tn(Oe,-fn.yawMax,fn.yawMax)*Math.min(1,ee/(b*xi)),0)}u.stepCool-=_;let kn=(at,Te)=>{let Ve=Qt>1e-4?1/Qt:0,V=.02+.2*(1-bt),ee=qt-at.planted[0],he=se-at.planted[1],ce=Math.exp(gt*Math.sqrt(Lt)*Te*fn.stretch*(.55+.45*bt)),Fe=fn.over0+fn.over1*Qt*bt;return[at.planted[0]+ee*ce+Re*Ve*Fe-u.walk[0]/gt*.55+(Jt()-.5)*V,at.planted[1]+he*ce+ye*Ve*Fe-u.walk[1]/gt*.55+(Jt()-.5)*V]},Ri=(at,Te,Ve)=>{let V=Ve[0]-Te.planted[0],ee=Ve[1]-Te.planted[1],he=(.36+.36*bt)*(1-.35*at.hurt);[V,ee]=Fr(V,ee,he);let ce=(V*kt+ee*te)*at.side;ce<fn.clear&&(V+=(fn.clear-ce)*at.side*kt,ee+=(fn.clear-ce)*at.side*te);let Fe=Te.planted[0]+V,Ae=Te.planted[1]+ee;return[Fe,Ae,Math.hypot(Fe-Ve[0],Ae-Ve[1])]};if(ct){if(!G)for(let at of J){let Te=ot+u.hx*-.16+kt*at.side*.12,Ve=lt+u.hz*-.16+te*at.side*.12,V=Fr(Te-at.planted[0],Ve-at.planted[1],.9*_);at.planted[0]+=V[0],at.planted[1]+=V[1]}}else if(Q){let at=Q===it?st:it;if(at.t+=_/at.T,at.t<.65&&!at.tidy){let Te=Ri(at,Q,kn(Q,(1-at.t)*at.T));at.to[0]+=(Te[0]-at.to[0])*.3,at.to[1]+=(Te[1]-at.to[1])*.3}if(at.t>fn.land&&at.gap<.012||at.t>=1.4||at.t>=1&&Vn(at.p[0],at.p[2])<Bt-.12){if(at.swing=!1,Vn(at.p[0],at.p[2])<Bt-.12)return _e(null,"edge");let Te=Math.hypot(at.to[0]-at.p[0],at.to[1]-at.p[2]),Ve=Math.hypot($,Mt);if(Te>.16&&Math.abs(Vn(at.to[0],at.to[1])-Bt)>.12){let V=Ve>.05?$/Ve:-u.hx,ee=Ve>.05?Mt/Ve:-u.hz;return dt(fe.pelvis,V*22,26,ee*22),_e([V*62,ee*62],"trip")}at.planted=[at.p[0],at.p[2]],u.stepCool=.03+.12*(1-bt),S&&!at.tidy&&R.steps++,le.push({type:"step",pos:[at.p[0],Bt,at.p[2]],hurt:at.hurt})}}else{let at=Math.hypot(it.planted[0]-st.planted[0],it.planted[1]-st.planted[1]),Te=fn.thr-.035*(1-bt),Ve=Qt<.06&&Math.hypot($,Mt)<.12&&at>.36&&u.stepCool<-.35&&bt>.45;if(u.stepCool<=0&&(Qt>Te||Ve)){let V,ee;if(Ve)V=u.lastFoot===0?1:0,ee=[J[1-V].planted[0]+J[V].side*kt*.2,J[1-V].planted[1]+J[V].side*te*.2];else{let Ae=[0,1].map(Ue=>{let He=Ri(J[Ue],J[1-Ue],kn(J[1-Ue],.26));return{tgt:He,move:Math.hypot(He[0]-J[Ue].p[0],He[1]-J[Ue].p[2])}}),Zt=Ue=>Ue.tgt[2]-.25*Math.min(Ue.move,.4)+(Ue.move<.08?1:0);V=Math.abs(Zt(Ae[0])-Zt(Ae[1]))<.02?u.lastFoot===0?1:0:Zt(Ae[0])<Zt(Ae[1])?0:1,ee=[Ae[V].tgt[0],Ae[V].tgt[1]]}let he=J[V],ce=J[1-V];he.swing=!0,he.t=0,he.from=[he.p[0],he.p[1],he.p[2]],he.to=ee;let Fe=Math.hypot(he.to[0]-he.p[0],he.to[1]-he.p[2]);he.T=fn.tscale*tn(.15+.24*Fe,.17,.34)*(1.3-.3*bt)*(Qt>.3?.75:1)*(ce.hurt>0?1-.3*ce.hurt:1),he.lift=he.hurt>.3?.035:.07+.09*Jt()+.05*Math.min(1,Qt*2),he.tidy=Ve,u.lastFoot=V}}for(let at of J){if(H(at.shin,M),G){let Ve=.36+.42*(tn(u.kneelT/u.kneelMax,0,1)*(1-.6*bt))+.08*Math.sin(R.clock*.9+u.phase[at.side===1?0:1])*(1-bt);ue(at,-Math.sin(Ve),-Math.cos(Ve),at.side*.1),I[at.shin].SetTargetAngle(Ve+Math.PI/2);continue}if(at.swing){let Te=tn(at.t,0,1),Ve=Te*Te*(3-2*Te),V=fn.bulge*Math.sin(Math.PI*Te)*at.side;at.ik[0]=at.from[0]+(at.to[0]-at.from[0])*Ve+kt*V,at.ik[2]=at.from[2]+(at.to[1]-at.from[2])*Ve+te*V,at.ik[1]=Bt+Math.max(at.lift*Math.sin(Math.PI*Te),Te<fn.land?.035:0)-(Te>fn.land?.045*(Te-fn.land)/(1-fn.land):0);let ee=fn.swingK,he=170*Math.sqrt(fn.swingK/1900),ce=[ee*(at.ik[0]-at.p[0])-he*M[0],ee*(at.ik[1]-at.p[1])-he*M[1],ee*(at.ik[2]-at.p[2])-he*M[2]],Fe=Math.hypot(ce[0],ce[1],ce[2]),Ae=Fe>fn.swingMax?fn.swingMax/Fe:1,Zt=ce[0]*Ae*u.support,Ue=(ce[1]*Ae-(at.t>1?160:0))*u.support,He=ce[2]*Ae*u.support;ut(at.shin,Zt,Ue,He,at.p),Sn||ut(fe.pelvis,-Zt,-Ue,-He,at.p)}else if(Sn){at.ik[0]=at.planted[0],at.ik[1]=Bt,at.ik[2]=at.planted[1];let Te=Fr(1800*(at.planted[0]-at.p[0])-130*M[0],1800*(at.planted[1]-at.p[2])-130*M[2],480);ut(at.shin,Te[0]*u.support,-40*u.support,Te[1]*u.support,at.p)}else at.gap<.03&&(at.planted[0]+=(at.p[0]-at.planted[0])*Math.min(1,_*30),at.planted[1]+=(at.p[2]-at.planted[1])*Math.min(1,_*30)),at.ik[0]=at.planted[0],at.ik[1]=Bt,at.ik[2]=at.planted[1];O(at,at.ik)}xt(Ge,_),S&&(R.onFeet+=_,R.stumbled+=Math.hypot(ot-u.lastCom[0],lt-u.lastCom[1])),u.lastCom[0]=ot,u.lastCom[1]=lt;let Ka=at=>at.swing?Math.hypot(ot-at.p[0],lt-at.p[2]):Math.hypot(ot-at.planted[0],lt-at.planted[1]),Gs=Math.min(Ka(it),Ka(st));F(fe.chest,pe);let Hs=1-2*(pe[0]*pe[0]+pe[2]*pe[2]);if(!R.alive||R.ko)return _e(null,"out");if(B){if(u.riseT>u.riseFail||bt<.3)return le.push({type:"gaveout",pos:[ft[0],ft[1],ft[2]]}),_e(null,"gave out");if(u.riseT>2.7&&ft[1]-Bt>cu-.16){R.mode="balance",R.getups++,u.offT=0,u.stepCool=.2;for(let at of J)at.swing=!1,at.planted=[at.p[0],at.p[2]];le.push({type:"up",pos:[ft[0],ft[1],ft[2]]})}else if(u.riseT>5)return _e(null,"gave out");return}u.offT=!ct&&(Gs>.46||Hs<.8)?u.offT+_:Math.max(0,u.offT-2*_);let Vs=Gs>(ct?.5:.7)?"reach":u.offT>.3?"lean":Qt>2.4?"capture":Hs<.45?"tilt":ft[1]-Bt<(ct?.3:.52)?"height":"",Ws=()=>{R.mode="kneel",R.kneels++,u.kneelT=0,u.kneelMax=1.6+3.2*Jt();for(let at of J)at.swing=!1,at.kneeDown=!1,at.planted=[at.p[0],at.p[2]];le.push({type:"kneel",pos:[ft[0],ft[1],ft[2]]})};if(Vs==="height"&&!ct&&S&&Gs<.45&&Math.hypot($,Mt)<1.4&&Hs>.75)return Ws();if(Vs)return _e(null,Vs);if(u.airT>.3)return _e(null,"air");if(R.paralysed)return _e(null,"spine");if(u.legT=!ct&&(it.broken>=3||st.broken>=3)?u.legT+_:0,u.legT>.35)return _e(null,"leg");let Xs=Math.hypot($,Mt);if(G&&Xs>2)return _e(null,"thrown");if(ct){if(u.kneelT+=_,G&&u.kneelT>Math.min(u.kneelMax,1.4)&&bt>.52&&R.bleed<.5&&u.grip>.9&&wn()){R.mode="rise",u.riseT=1.9,u.riseFail=9,u.support=1,u.hT=ft[1],u.offT=0,u.buckle=-1.5;for(let at of J)at.swing=!1,at.planted=[at.p[0],at.p[2]];le.push({type:"rise",pos:[ft[0],ft[1],ft[2]],fromKnees:!0})}else if(bt<.2||u.kneelT>u.kneelMax){let at=Jt()<.5?1:-1,Te=Jt()<.45;_e(Te?[kt*at*28,te*at*28]:[u.hx*30,u.hz*30],"slump")}}else S&&Xs<1.5&&(bt<.5||u.buckle>0&&bt<.72&&u.buckleDip>.24)&&Ws()}function ge(_,u){let R=Pt,B=nt;Ut(J[0]),Ut(J[1]);let G=Math.min(J[0].gap,J[0].kgap,J[1].gap,J[1].kgap);R.grip+=tn((G<.03?1:0)-R.grip,-u/.09,u/.05);let ct=_*tn(1-R.fallT/(.45+.6*_),0,1);if(ct>0)for(let st of J){let Gt=st.kgap<.03,kt=st.gap<.03;if(!Gt&&!kt)continue;vt(st);let te=Gt?st.k:st.p,xe=Gt?bs+.1:lu+.08;Qn(Je,[0,fc,st.side*pc],At);let Rt=ft[0]+At[0]-te[0],qe=ft[1]+At[1]-te[1],S=ft[2]+At[2]-te[2],k=Math.hypot(Rt,qe,S)||1;if(k>xe||qe/k<.25)continue;let rt=(Nt[0]*Rt+Nt[1]*qe+Nt[2]*S)/k,K=tn(b*xi*.3-240*rt,0,b*xi*.45)*ct*(1-.7*st.hurt);St(fe.pelvis,st.shin,te,K*Rt/k,K*qe/k,K*S/k)}Qn(Za(Je),[R.fallDir[0],0,R.fallDir[1]],Ct);let bt=Ct[0],gt=Ct[2],ot=Math.max(0,bt),lt=tn((.42-(ft[1]-Vn(ft[0],ft[2])))/.2,0,1);J.forEach((st,Gt)=>{let kt,te,xe;Gt===R.lead?(kt=bt*.95,te=gt*.95+st.side*.08,xe=.95-.65*ot):(kt=bt*.15-.3*(1-ot),te=st.side*.1,xe=1.65),kt*=1-lt,xe*=1-.75*lt;let Rt=Math.hypot(kt,1,te);ue(st,kt/Rt,-1/Rt,te/Rt),I[st.shin].SetTargetAngle(xe)}),F(fe.chest,pe),Qn(Za(pe),[R.fallDir[0],0,R.fallDir[1]],Ct);let $=Ct[0],Mt=Ct[2],it=R.grip<.3&&R.fallT>.35?1:0;if(jt(fe.chest,ns(0,1,0,.12+.4*Math.max(0,$))),jt(fe.head,ns(0,1,0,.5*$)),!(R.flinch>0))for(let st of[1,-1]){let Gt=tn(Mt*st,-1,1),kt=it*.55*Math.sin(B.clock*11+st*1.7),te=tn(-$*1.25,-.8,1.3)+.15+kt,xe=-.25-.9*Math.max(0,Gt)+.3*Math.max(0,-Gt);jt(st===1?fe.uarm_l:fe.uarm_r,Et(te,xe,st)),I[st===1?fe.larm_l:fe.larm_r].SetTargetAngle(-.35-.3*it)}}function De(_){let u=Pt,R=nt,B=R.clock;u.support=Math.max(0,u.support-_/.14);let G=R.alive&&!R.ko;G||(u.fight=0);let ct=R.mode==="fall"?u.fight*tn(1-(u.fallT-1.3)/1.2,0,1)*(u.settle>.1?.5:1):0,bt=G?.1+.32*R.strength:0;for(let gt=1;gt<v;gt++){let ot=Mn[gt].zone,lt=Math.max(bt,ct*(ot==="arm"?.85:ot==="thigh"||ot==="shin"?.75:.7));ht[gt]+=tn(lt-ht[gt],-(R.alive?3:1.1)*_,2*_)}if(ct>.12)ge(ct,_);else if(G){for(let gt of J){let ot=B*(1.1+.5*R.strength)+u.phase[gt.side===1?0:1];jt(gt.thigh,ns(0,1,0,.35+.4*Math.sin(ot))),I[gt.shin].SetTargetAngle(.7+.6*Math.sin(ot+1.3))}xt(0,_)}if(R.mode==="fall"){u.fallT=(u.fallT||0)+_;let gt=ft[1]-Vn(ft[0],ft[2])<.45||nt.restTimer>.7||u.fallT>4;if(u.settle=gt&&Math.hypot(Nt[0],Nt[1],Nt[2])<(u.fallT>4?1.2:.6)?u.settle+_:0,u.settle>.35){R.mode="down",R.downAt=R.time,u.settle=0,u.fallT=0,le.push({type:"down",pos:[Ot[0],Ot[1],Ot[2]],onFeet:R.onFeet});let ot=Vn(ft[0],ft[2]),lt=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([Mt,it])=>Math.abs(Vn(ft[0]+Mt,ft[2]+it)-ot)<.05)&&ft[1]-ot<.5,$=tn((R.blood-10)/70,0,1)*(1-.3*Math.min(1,R.stun));G&&$>.42&&u.riseTries<2&&lt&&wn()?u.riseAt=R.time+.9+1.6*Jt()+2.5*Math.max(0,R.stun-.25):(u.riseAt=0,R.spent=!0)}}else if(R.mode==="down"&&u.riseAt>0&&R.time>u.riseAt){if(u.riseAt=0,!G||R.strength<.36||!wn()){R.spent=!0;return}F(fe.chest,pe);let gt=Qn(pe,[-1,0,0],tt)[1]>0,ot=E(fe.head,ne),lt=ot[0]-ft[0],$=ot[2]-ft[2],Mt=Math.hypot(lt,$)||1,it=gt?-1:1;u.hx=it*lt/Mt,u.hz=it*$/Mt,R.mode="rise",u.riseT=0,u.riseTries++,u.support=0,u.offT=0,u.buckle=0,u.kneelT=0,u.riseFrom=Math.max(.12,ft[1]-Vn(ft[0],ft[2])),u.hT=ft[1],u.riseFail=Jt()<tn((.75-R.strength)*1.6+.35*u.legWound,0,.9)?.9+Jt()*1.2:9;for(let st of J)vt(st),st.swing=!1,st.planted=[st.p[0],st.p[2]];u.lastCom[0]=ft[0],u.lastCom[1]=ft[2],le.push({type:"rise",pos:[ft[0],ft[1],ft[2]]})}}function $t(_){for(le.length=0;Ke.length;)le.push(Ke.shift());let u=nt,R=Pt;u.clock+=_,u.hits>0&&(u.time+=_);let B=0;if(u.alive){for(let it of ae){let st=Math.min(it.rate*_,it.left);it.left-=st,u.blood-=st,it.left>0&&(B+=it.rate)}u.blood=Math.max(0,u.blood),u.blood<=0&&ze("Bled out")}if(u.bleed=B,u.stun=Math.max(0,u.stun-.2*_),(!u.alive||u.ko)&&(u.spent=!0),u.strength=u.alive&&!u.ko?tn((u.blood-10)/70,0,1)*(1-.75*Math.min(1,u.stun)):0,R.flinch-=_,R.lookDown-=_,R.clutch&&u.clock>R.clutchEnd&&(R.clutch=null),E(fe.pelvis,ft),H(fe.pelvis,Nt),F(fe.pelvis,Je),E(fe.chest,Ot),H(fe.chest,Se),u.mode==="balance"||u.mode==="kneel"||u.mode==="rise"){for(let it=1;it<v;it++){let Gt=Mn[it].zone==="thigh"||Mn[it].zone==="shin"?.95:.35+.65*u.strength;ht[it]+=tn(Gt-ht[it],-3*_,3*_)}zt(_)}else De(_);Kt(),s.Step(_,1);let G=0;for(let it=0;it<v;it++){H(it,M);let st=M[0]-mt[it*3],Gt=M[1]-mt[it*3+1]+xi*_,kt=M[2]-mt[it*3+2];mt[it*3]=M[0],mt[it*3+1]=M[1],mt[it*3+2]=M[2];let te=Math.hypot(st,Gt,kt);G=Math.max(G,Math.hypot(M[0],M[1],M[2])),It[it]-=_;let xe=u.mode==="fall"||u.mode==="down";if(u.hits>0&&xe&&te>2.2&&It[it]<=0){It[it]=.18;let Rt=Mn[it],qe=te*(Rt.zone==="head"?5:Rt.zone==="chest"||Rt.zone==="gut"?1.6:.8);u.damage+=qe,u.impacts++;let S=j(it);le.push({type:"impact",part:it,zone:Rt.zone,pos:S,dv:te,dmg:qe}),F(it,pe),Qn(Za(pe),[-st/te,-Gt/te,-kt/te],tt);for(let[k,rt]of En(it,tt))xn(k,te*rt,S,"fall");Rt.zone==="head"&&xn("neck",te*.9,S,"fall"),Rt.zone==="head"&&(u.stun=Math.min(1.6,u.stun+te*.09),u.stun>1.15&&je())}}if(Xe==="window")for(let it=0;it<v;it++){if(E(it,ne),ne[1]>Me.glassY+.6||ne[1]<Me.glassY-.3)continue;let st=Math.hypot(mt[it*3],mt[it*3+1],mt[it*3+2]);if(st<1.6)continue;let Gt=Mn[it].r+Mn[it].hh+.06+st*_*2;if(!(Math.abs(ne[1]-Me.glassY)>Gt))for(let kt of f.panes)kt.broken||ne[0]<kt.min[0]-.1||ne[0]>kt.max[0]+.1||ne[2]<kt.min[1]-.1||ne[2]>kt.max[1]+.1||y(kt,[mt[it*3],mt[it*3+1],mt[it*3+2]])}if(u.hits===0)return le;u.lowest=Math.min(u.lowest,ft[1]),u.drop=Math.max(0,me.start[1]+.93-u.lowest-.85);let ct=Math.max(Math.hypot(mt[0],mt[1],mt[2]),Math.hypot(mt[3],mt[4],mt[5])),bt=J.some(it=>it.swing&&!it.tidy),gt=J.some(it=>it.swing&&it.tidy),ot=u.mode==="balance"?!bt&&ct<(gt?.35:.2):G<.15;u.restTimer=ot?u.restTimer+_:0;let lt=u.restTimer>1.1,$=u.stun>.05?2.6:1.5,Mt=0;if(u.alive?u.bleed>.01?Mt=0:u.mode==="balance"?Mt=u.restTimer/$:u.mode==="rise"||u.mode==="down"&&!u.spent?Mt=0:Mt=Math.max(u.restTimer/1.1,u.mode==="down"?(u.time-u.downAt)/3.5:0):Mt=Math.min(u.restTimer/1.1,(u.time-u.diedAt)/1.6),u.wrap=tn(Mt,0,1),!u.done){let it="";!u.alive&&lt&&u.time-u.diedAt>1.6?it=u.outcome:u.alive&&u.bleed<=.01&&(u.mode==="fall"&&lt||u.mode==="down"&&u.spent&&(lt||u.time-u.downAt>3.5)||u.mode==="balance"&&u.restTimer>$||u.ko&&lt)?it=u.ko?"Out cold":u.mode==="balance"?"Still standing":"Down, alive":u.time>80&&(it="Time"),it&&(u.done=!0,u.outcome=it,le.push({type:"done",outcome:it}))}return le}function A(){let _=nt,u=!_.alive,R=Object.values(_.bones),B=[["Stagger steps",String(_.steps),Math.min(_.steps,40)*14],["Stumbled",_.stumbled.toFixed(1)+" m",Math.round(Math.min(_.stumbled,12)*18)],["Knee drops",String(_.kneels),_.kneels*120],["Put down",_.downAt>=0?"yes":"\u2014",_.downAt>=0?90:0],["Got back up",String(_.getups),_.getups*140],["Hard landings",String(_.impacts),Math.round(_.damage*$x)],["Bones",String(R.length),R.reduce((ct,bt)=>ct+Nf[bt],0)],["Fell",_.drop.toFixed(1)+" m",Math.round(_.drop*65)],["Glass",_.glass+(_.glass===1?" pane":" panes"),_.glass*130],["Trick shots",String(_.fallHits),_.fallHits*150+_.airHits*250],["Out cold",_.ko?"yes":"\u2014",_.ko?150:0],[u?_.outcome:"Bled out",u?_.diedAt.toFixed(1)+" s":"\u2014",u?_.diedAt>.3?260:60:0]];return{lines:B.filter((ct,bt)=>ct[2]>0||bt<3),total:B.reduce((ct,bt)=>ct+bt[2],0)}}function x(_){mc[_]&&(Xe=_,me=mc[_],un())}let U=[0,0,0,1];return un(),{parts:Mn,state:nt,wounds:ae,feet:J,step:$t,hit:sn,reset:un,payout:A,pos:j,mass:L,totalMass:b,statics:p,setLevel:x,groundY:Vn,get level(){return me},get levelKey(){return Xe},glass:{tiles:f.tiles,panes:f.panes,transform(_,u){let R=f.tiles[_];return pt(R.id,u),z(R.id,U),u[3]=U[0],u[4]=U[1],u[5]=U[2],u[6]=U[3],u}},transform(_,u){E(_,u);let R=a.GetRotation(D[_]);return u[3]=R.GetX(),u[4]=R.GetY(),u[5]=R.GetZ(),u[6]=R.GetW(),u},_debug:{tune:fn,joints:I,tone:ht,IDX:fe,ctl:Pt,impulse:dt,armQ:Et,setTarget:jt}}}var Ya,xi,ou,Dr,qx,an,Me,mc,Mn,fe,bs,Nr,fc,pc,Yx,fn,lu,cu,Zx,du,$x,Nf,Kx,jx,Jx,Za,tn,Uf=kf(()=>{Ya=Math.PI/180,xi=9.81,ou=0,Dr=1,qx={half:16},an={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};an.height=an.steps*an.rise;an.length=an.steps*an.run;Me={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},mc={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,an.height,an.z],attacker:[-5.2,an.height+1.5,an.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,Me.floor,Me.z],attacker:[-6.2,Me.floor+1.5,Me.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};Mn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],fe=Object.fromEntries(Mn.map((n,t)=>[n.name,t])),bs=.44,Nr=.425,fc=-.08,pc=.1,Yx=.205,fn={stretch:1,over0:.05,over1:0,kv:1.5,kp:.7,foot1:.09,foot2:.13,thr:.115,tscale:.8,land:.8,swingK:3200,swingMax:900,clear:.16,bulge:.05,yawK:120,yawD:18,yawMax:35},lu=.85,cu=.915,Zx={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},du={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},$x=1.2,Nf=[0,5,30,80],Kx=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),jx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},Jx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};Za=n=>[-n[0],-n[1],-n[2],n[3]],tn=(n,t,e)=>Math.max(t,Math.min(e,n))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Qu=0,th=1,td=2;var Ds=1,ed=2,Mr=3,ys=0,$n=1,pi=2,Ns=0,Sr=1,eh=2,nh=3,ih=4,nd=5;var Fs=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,sh=204,rh=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,xd=213,yd=214,Co=0,Po=1,Io=2,lr=3,Lo=4,Do=5,No=6,Fo=7,ah=0,vd=1,Md=2,Ui=0,oh=1,lh=2,ch=3,Ra=4,hh=5,uh=6,dh=7;var fh=300,Us=301,br=302,pl=303,ml=304,Uo=1e3,Pi=1001,Oo=1002,Fn=1003,Sd=1004;var Ca=1005;var Yn=1006,gl=1007;var $i=1008;var Jn=1009,ph=1010,mh=1011,wr=1012,_l=1013,wi=1014,mi=1015,Ti=1016,xl=1017,yl=1018,Os=1020,gh=35902,_h=35899,xh=1021,yh=1022,Ei=1023,Yi=1026,Ki=1027,vl=1028,Ml=1029,vs=1030,Sl=1031;var bl=1033,Pa=33776,Ia=33777,La=33778,Da=33779,wl=35840,Tl=35841,El=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37488,Ll=37489,Na=37490,Dl=37491,Nl=37808,Fl=37809,Ul=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Gl=37815,Hl=37816,Vl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,$l=36494,Kl=36495,jl=36283,Jl=36284,Fa=36285,Ql=36286;var Yr=2300,Bo=2301,Ao=2302,Hc=2303,Vc=2400,Wc=2401,Xc=2402;var bd=3200;var tc=0,wd=1,ji="",Xn="srgb",Zr="srgb-linear",$r="linear",ln="srgb";var Ro=7680;var Td=519,Ed=512,Ad=513,Rd=514,vh=515,Cd=516,Pd=517,Mh=518,Sh=519,Id=35044;var bh="300 es",di=2e3,cr=2001;function zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ld(){let n=Kr("canvas");return n.style.display="block",n}var mu={},hr=null;function wh(...n){let t="THREE."+n.shift();hr?hr("log",t,...n):console.log(t,...n)}function Dd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=Dd(n);let t="THREE."+n.shift();if(hr)hr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ne(...n){n=Dd(n);let t="THREE."+n.shift();if(hr)hr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Wr(...n){let t=n.join(" ");t in mu||(mu[t]=!0,Ie(...n))}function Nd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Fd={[Co]:Co,[Io]:No,[Lo]:Lo,[lr]:Do,[Po]:Po,[No]:Io,[Fo]:Fo,[Do]:lr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,ko=180/Math.PI;function Tr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function Hf(n,t){return(n%t+t)%t}function _c(n,t,e){return(1-e)*n+e*t}function Ud(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Th(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(n,t){if(t.constructor===Float32Array)return n;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Wf(n,t){if(t.constructor===Float32Array)return n;let e=Th(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ih=class Ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;var de=Ih,si=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],d=r[a+0],f=r[a+1],y=r[a+2],w=r[a+3];if(p!==w||l!==d||c!==f||h!==y){let g=l*d+c*f+h*y+p*w;g<0&&(d=-d,f=-f,y=-y,w=-w,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),L=Math.sin(b);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L,l=l*m+d*o,c=c*m+f*o,h=h*m+y*o,p=p*m+w*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+y*o,p=p*m+w*o;let b=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=b,c*=b,h*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],d=r[a+1],f=r[a+2],y=r[a+3];return t[e]=o*y+h*p+l*f-c*d,t[e+1]=l*y+h*d+c*p-o*f,t[e+2]=c*y+h*f+o*d-l*p,t[e+3]=h*y-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),d=l(i/2),f=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*f*y,this._y=c*f*p-d*h*y,this._z=c*h*y+d*f*p,this._w=c*h*p-d*f*y;break;case"YXZ":this._x=d*h*p+c*f*y,this._y=c*f*p-d*h*y,this._z=c*h*y-d*f*p,this._w=c*h*p+d*f*y;break;case"ZXY":this._x=d*h*p-c*f*y,this._y=c*f*p+d*h*y,this._z=c*h*y+d*f*p,this._w=c*h*p-d*f*y;break;case"ZYX":this._x=d*h*p-c*f*y,this._y=c*f*p+d*h*y,this._z=c*h*y-d*f*p,this._w=c*h*p+d*f*y;break;case"YZX":this._x=d*h*p+c*f*y,this._y=c*f*p+d*h*y,this._z=c*h*y-d*f*p,this._w=c*h*p-d*f*y;break;case"XZY":this._x=d*h*p-c*f*y,this._y=c*f*p-d*h*y,this._z=c*h*y+d*f*p,this._w=c*h*p+d*f*y;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=i+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lh=class Lh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;var W=Lh,xc=new W,gu=new si,Dh=class Dh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],f=i[5],y=i[8],w=s[0],g=s[3],m=s[6],b=s[1],L=s[4],T=s[7],D=s[2],I=s[5],v=s[8];return r[0]=a*w+o*b+l*D,r[3]=a*g+o*L+l*I,r[6]=a*m+o*T+l*v,r[1]=c*w+h*b+p*D,r[4]=c*g+h*L+p*I,r[7]=c*m+h*T+p*v,r[2]=d*w+f*b+y*D,r[5]=d*g+f*L+y*I,r[8]=d*m+f*T+y*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*r,f=c*r-a*l,y=e*p+i*d+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=p*w,t[1]=(s*c-h*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=f*w,t[7]=(i*l-c*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(t,e)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var Be=Dh,yc=new Be,_u=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){let n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ln&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ln&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:t,whitePoint:i,transfer:$r,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:i,transfer:ln,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}var Qe=Xf();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qs===void 0&&(qs=Kr("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qf=0,ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Yf=0,Mc=new W,Zn=class n extends Ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=Yn,a=$i,o=Ei,l=Jn,c=n.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Tr(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uo:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uo:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=fh;Zn.DEFAULT_ANISOTROPY=1;var Nh=class Nh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],y=l[9],w=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+w)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,T=(f+1)/2,D=(m+1)/2,I=(h+d)/4,v=(p+w)/4,E=(y+g)/4;return L>T&&L>D?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=I/i,r=v/i):T>D?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=I/s,r=E/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=v/r,s=E/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-y)*(g-y)+(p-w)*(p-w)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-y)/b,this.y=(p-w)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$e(this.x,t.x,e.x),this.y=$e(this.y,t.y,e.y),this.z=$e(this.z,t.z,e.z),this.w=$e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$e(this.x,t,e),this.y=$e(this.y,t,e),this.z=$e(this.z,t,e),this.w=$e(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;var bn=Nh,Go=class extends Ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new bn(0,0,t,e),this.scissorTest=!1,this.viewport=new bn(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Zn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Go{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jr=class extends Zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ho=class extends Zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fl=class fl{constructor(t,e,i,s,r,a,o,l,c,h,p,d,f,y,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,p,d,f,y,w,g)}set(t,e,i,s,r,a,o,l,c,h,p,d,f,y,w,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=d,m[3]=f,m[7]=y,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),a=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*p,y=o*h,w=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+y*c,e[5]=d-w*c,e[9]=-o*l,e[2]=w-d*c,e[6]=y+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*p,y=c*h,w=c*p;e[0]=d+w*o,e[4]=y*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=f*o-y,e[6]=w+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*p,y=c*h,w=c*p;e[0]=d-w*o,e[4]=-a*p,e[8]=y+f*o,e[1]=f+y*o,e[5]=a*h,e[9]=w-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*p,y=o*h,w=o*p;e[0]=l*h,e[4]=y*c-f,e[8]=d*c+w,e[1]=l*p,e[5]=w*c+d,e[9]=f*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,y=o*l,w=o*c;e[0]=l*h,e[4]=w-d*p,e[8]=y*p+f,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*p+y,e[10]=d-w*p}else if(t.order==="XZY"){let d=a*l,f=a*c,y=o*l,w=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+w,e[5]=a*h,e[9]=f*p-y,e[2]=y*p-f,e[6]=o*h,e[10]=w*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,$f)}lookAt(t,e,i){let s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),os.crossVectors(i,ei),os.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),os.crossVectors(i,ei)),os.normalize(),Qa.crossVectors(ei,os),s[0]=os.x,s[4]=Qa.x,s[8]=ei.x,s[1]=os.y,s[5]=Qa.y,s[9]=ei.y,s[2]=os.z,s[6]=Qa.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],f=i[13],y=i[2],w=i[6],g=i[10],m=i[14],b=i[3],L=i[7],T=i[11],D=i[15],I=s[0],v=s[4],E=s[8],H=s[12],F=s[1],q=s[5],j=s[9],pt=s[13],z=s[2],ut=s[6],dt=s[10],ht=s[14],yt=s[3],_t=s[7],mt=s[11],It=s[15];return r[0]=a*I+o*F+l*z+c*yt,r[4]=a*v+o*q+l*ut+c*_t,r[8]=a*E+o*j+l*dt+c*mt,r[12]=a*H+o*pt+l*ht+c*It,r[1]=h*I+p*F+d*z+f*yt,r[5]=h*v+p*q+d*ut+f*_t,r[9]=h*E+p*j+d*dt+f*mt,r[13]=h*H+p*pt+d*ht+f*It,r[2]=y*I+w*F+g*z+m*yt,r[6]=y*v+w*q+g*ut+m*_t,r[10]=y*E+w*j+g*dt+m*mt,r[14]=y*H+w*pt+g*ht+m*It,r[3]=b*I+L*F+T*z+D*yt,r[7]=b*v+L*q+T*ut+D*_t,r[11]=b*E+L*j+T*dt+D*mt,r[15]=b*H+L*pt+T*ht+D*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],f=t[14],y=t[3],w=t[7],g=t[11],m=t[15],b=l*f-c*d,L=o*f-c*p,T=o*d-l*p,D=a*f-c*h,I=a*d-l*h,v=a*p-o*h;return e*(w*b-g*L+m*T)-i*(y*b-g*D+m*I)+s*(y*L-w*D+m*v)-r*(y*T-w*I+g*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],f=t[11],y=t[12],w=t[13],g=t[14],m=t[15],b=e*o-i*a,L=e*l-s*a,T=e*c-r*a,D=i*l-s*o,I=i*c-r*o,v=s*c-r*l,E=h*w-p*y,H=h*g-d*y,F=h*m-f*y,q=p*g-d*w,j=p*m-f*w,pt=d*m-f*g,z=b*pt-L*j+T*q+D*F-I*H+v*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ut=1/z;return t[0]=(o*pt-l*j+c*q)*ut,t[1]=(s*j-i*pt-r*q)*ut,t[2]=(w*v-g*I+m*D)*ut,t[3]=(d*I-p*v-f*D)*ut,t[4]=(l*F-a*pt-c*H)*ut,t[5]=(e*pt-s*F+r*H)*ut,t[6]=(g*T-y*v-m*L)*ut,t[7]=(h*v-d*T+f*L)*ut,t[8]=(a*j-o*F+c*E)*ut,t[9]=(i*F-e*j-r*E)*ut,t[10]=(y*I-w*T+m*b)*ut,t[11]=(p*T-h*I-f*b)*ut,t[12]=(o*H-a*q-l*E)*ut,t[13]=(e*q-i*H+s*E)*ut,t[14]=(w*L-y*D-g*b)*ut,t[15]=(h*D-p*L+d*b)*ut,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,d=r*c,f=r*h,y=r*p,w=a*h,g=a*p,m=o*p,b=l*c,L=l*h,T=l*p,D=i.x,I=i.y,v=i.z;return s[0]=(1-(w+m))*D,s[1]=(f+T)*D,s[2]=(y-L)*D,s[3]=0,s[4]=(f-T)*I,s[5]=(1-(d+m))*I,s[6]=(g+b)*I,s[7]=0,s[8]=(y+L)*v,s[9]=(g-b)*v,s[10]=(1-(d+w))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),l=Ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,p=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,e.setFromRotationMatrix(yi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=di,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),y,w;if(l)y=r/(a-r),w=a*r/(a-r);else if(o===di)y=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===cr)y=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=di,l=!1){let c=this.elements,h=2/(e-t),p=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),y,w;if(l)y=1/(a-r),w=a/(a-r);else if(o===di)y=-2/(a-r),w=-(a+r)/(a-r);else if(o===cr)y=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fl.prototype.isMatrix4=!0;var nn=fl,Ys=new W,yi=new nn,Zf=new W(0,0,0),$f=new W(1,1,1),os=new W,Qa=new W,ei=new W,yu=new nn,vu=new si,bi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,Mu=new W,Zs=new si,Gi=new nn,to=new W,Ur=new W,jf=new W,Jf=new si,Su=new W(1,0,0),bu=new W(0,1,0),wu=new W(0,0,1),Tu={type:"added"},Qf={type:"removed"},$s={type:"childadded",child:null},Sc={type:"childremoved",child:null},Un=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,e=new bi,i=new si,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nn},normalMatrix:{value:new Be}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ur,to,this.up):Gi.lookAt(to,Ur,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),$s.child=t,this.dispatchEvent($s),$s.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),y=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Un.DEFAULT_UP=new W(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rs=class extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}},tp={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,i),m=this._getHandJoint(c,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,y=.005;c.inputState.pinching&&d>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},eo={h:0,s:0,l:0};function bc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ke=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qe.workingColorSpace){if(t=Hf(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=bc(a,r,t+1/3),this.g=bc(a,r,t),this.b=bc(a,r,t-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(t,e=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){let i=Od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Qe.workingToColorSpace(Gn.copy(this),t),Math.round($e(Gn.r*255,0,255))*65536+Math.round($e(Gn.g*255,0,255))*256+Math.round($e(Gn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qe.workingColorSpace){Qe.workingToColorSpace(Gn.copy(this),e);let i=Gn.r,s=Gn.g,r=Gn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qe.workingColorSpace){return Qe.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Xn){Qe.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,i=Gn.g,s=Gn.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(eo);let i=_c(ls.h,eo.h,e),s=_c(ls.s,eo.s,e),r=_c(ls.l,eo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new ke;ke.NAMES=Od;var Jr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vi=new W,Hi=new W,wc=new W,Vi=new W,Ks=new W,js=new W,Eu=new W,Tc=new W,Ec=new W,Ac=new W,Rc=new bn,Cc=new bn,Pc=new bn,ds=class n{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vi.subVectors(t,e),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vi.subVectors(s,e),Hi.subVectors(i,e),wc.subVectors(t,e);let a=vi.dot(vi),o=vi.dot(Hi),l=vi.dot(wc),c=Hi.dot(Hi),h=Hi.dot(wc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-f-y,y,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Cc,r.y),a.addScaledVector(Pc,r.z),a}static isFrontFacing(t,e,i,s){return vi.subVectors(i,e),Hi.subVectors(t,e),vi.cross(Hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),vi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,i),js.subVectors(r,i),Tc.subVectors(t,i);let l=Ks.dot(Tc),c=js.dot(Tc);if(l<=0&&c<=0)return e.copy(i);Ec.subVectors(t,s);let h=Ks.dot(Ec),p=js.dot(Ec);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ks,a);Ac.subVectors(t,r);let f=Ks.dot(Ac),y=js.dot(Ac);if(y>=0&&f<=y)return e.copy(r);let w=f*c-l*y;if(w<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(i).addScaledVector(js,o);let g=h*y-f*p;if(g<=0&&p-h>=0&&f-y>=0)return Eu.subVectors(r,s),o=(p-h)/(p-h+(f-y)),e.copy(s).addScaledVector(Eu,o);let m=1/(g+w+d);return a=w*m,o=d*m,e.copy(i).addScaledVector(Ks,a).addScaledVector(js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Li=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),io.subVectors(this.max,Or),Js.subVectors(t.a,Or),Qs.subVectors(t.b,Or),tr.subVectors(t.c,Or),cs.subVectors(Qs,Js),hs.subVectors(tr,Qs),ws.subVectors(Js,tr);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-ws.z,ws.y,cs.z,0,-cs.x,hs.z,0,-hs.x,ws.z,0,-ws.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-ws.y,ws.x,0];return!Ic(e,Js,Qs,tr,io)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Js,Qs,tr,io))?!1:(so.crossVectors(cs,hs),e=[so.x,so.y,so.z],Ic(e,Js,Qs,tr,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new W,new W,new W,new W,new W,new W,new W,new W],Mi=new W,no=new Li,Js=new W,Qs=new W,tr=new W,cs=new W,hs=new W,ws=new W,Or=new W,io=new W,so=new W,Ts=new W;function Ic(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ts.fromArray(n,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var In=new W,ro=new de,ep=0,ii=class extends Ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Id,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=t!==void 0?Th(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Vf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wf(t,this.array)}};var ta=class extends ii{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ea=class extends ii{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _n=class extends ii{constructor(t,e,i){super(new Float32Array(t),e,i)}},np=new Li,Br=new W,Lc=new W,Di=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):np.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Lc)),this.expandByPoint(Br.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ip=0,ui=new nn,Dc=new Un,er=new W,ni=new Li,kr=new Li,Nn=new W,On=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nn.addVectors(ni.min,kr.min),ni.expandByPoint(Nn),Nn.addVectors(ni.max,kr.max),ni.expandByPoint(Nn)):(ni.expandByPoint(kr.min),ni.expandByPoint(kr.max))}ni.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Nn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nn.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(t,c),Nn.add(er)),s=Math.max(s,i.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let H=0;H<i.count;H++)o[H]=new W,l[H]=new W;let h=new W,p=new W,d=new W,f=new de,y=new de,w=new de,g=new W,m=new W;function b(H,F,q){c[H]=c[F]=c[q]=1,h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,F),d.fromBufferAttribute(i,q),f.fromBufferAttribute(r,H),y.fromBufferAttribute(r,F),w.fromBufferAttribute(r,q),p.sub(h),d.sub(h),y.sub(f),w.sub(f);let j=1/(y.x*w.y-w.x*y.y);isFinite(j)&&(g.copy(p).multiplyScalar(w.y).addScaledVector(d,-y.y).multiplyScalar(j),m.copy(d).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(j),o[H].add(g),o[F].add(g),o[q].add(g),l[H].add(m),l[F].add(m),l[q].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let H=0,F=L.length;H<F;++H){let q=L[H],j=q.start,pt=q.count;for(let z=j,ut=j+pt;z<ut;z+=3)b(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new W,D=new W,I=new W,v=new W;function E(H){I.fromBufferAttribute(s,H),v.copy(I);let F=o[H];T.copy(F),T.sub(I.multiplyScalar(I.dot(F))).normalize(),D.crossVectors(v,F);let j=D.dot(l[H])<0?-1:1;a.setXYZW(H,T.x,T.y,T.z,j)}for(let H=0,F=i.count;H<F;++H)c[H]&&E(H);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,p=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){let y=t.getX(d+0),w=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h),f=0,y=0;for(let w=0,g=l.length;w<g;w++){o.isInterleavedBufferAttribute?f=l[w]*o.data.stride+o.offset:f=l[w]*h;for(let m=0;m<h;m++)d[y++]=c[f++]}return new ii(d,h,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nc=new W,sp=new W,rp=new Be,Si=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nc.subVectors(i,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||rp.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ap=0,Ni=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Sr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Si().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new W,Fc=new W,ao=new W,oo=new W,Cs=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),oo.copy(this.origin).sub(Fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ao),o=oo.dot(this.direction),l=-oo.dot(ao),c=oo.lengthSq(),h=Math.abs(1-a*a),p,d,f,y;if(h>0)if(p=a*l-o,d=a*o-l,y=r*h,p>=0)if(d>=-y)if(d<=y){let w=1/h;p*=w,d*=w,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-y?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=y?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Fc).addScaledVector(ao,d),f}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,y=e.x-a.x,w=e.y-a.y,g=e.z-a.z,m=i.x-a.x,b=i.y-a.y,L=i.z-a.z,T=Math.abs(l),D=Math.abs(c),I=Math.abs(h),v,E,H,F,q,j,pt,z,ut,dt,ht,yt;if(T>=D&&T>=I?(H=l,j=p,ut=y,yt=m,l>=0?(v=c,E=h,F=d,q=f,pt=w,z=g,dt=b,ht=L):(v=h,E=c,F=f,q=d,pt=g,z=w,dt=L,ht=b)):D>=I?(H=c,j=d,ut=w,yt=b,c>=0?(v=h,E=l,F=f,q=p,pt=g,z=y,dt=L,ht=m):(v=l,E=h,F=p,q=f,pt=y,z=g,dt=m,ht=L)):(H=h,j=f,ut=g,yt=L,h>=0?(v=l,E=c,F=p,q=d,pt=y,z=w,dt=m,ht=b):(v=c,E=l,F=d,q=p,pt=w,z=y,dt=b,ht=m)),H===0)return null;let _t=v/H,mt=E/H,It=1/H,jt=F-_t*j,Ce=q-mt*j,Et=pt-_t*ut,Kt=z-mt*ut,nt=dt-_t*yt,ae=ht-mt*yt,J=nt*Kt-ae*Et,Pt=jt*ae-Ce*nt,Jt=Et*Ce-Kt*jt;if(s){if(J<0||Pt<0||Jt<0)return null}else if((J<0||Pt<0||Jt<0)&&(J>0||Pt>0||Jt>0))return null;let Ee=J+Pt+Jt;if(Ee===0)return null;let me=It*(J*j+Pt*ut+Jt*yt);return(Ee>0?me<0:me>0)?null:this.at(me/Ee,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fs=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Au=new nn,Es=new Cs,lo=new Di,Ru=new W,co=new W,ho=new W,uo=new W,Uc=new W,fo=new W,Cu=new W,po=new W,Rn=class extends Un{constructor(t=new On,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Uc.fromBufferAttribute(p,t),a?fo.addScaledVector(Uc,h):fo.addScaledVector(Uc.sub(e),h))}e.add(fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(lo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(lo,Ru)===null||Es.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),Es.copy(t.ray).applyMatrix4(Au),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,w=d.length;y<w;y++){let g=d[y],m=a[g.materialIndex],b=Math.max(g.start,f.start),L=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,D=L;T<D;T+=3){let I=o.getX(T),v=o.getX(T+1),E=o.getX(T+2);s=mo(this,m,t,i,c,h,p,I,v,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),w=Math.min(o.count,f.start+f.count);for(let g=y,m=w;g<m;g+=3){let b=o.getX(g),L=o.getX(g+1),T=o.getX(g+2);s=mo(this,a,t,i,c,h,p,b,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,w=d.length;y<w;y++){let g=d[y],m=a[g.materialIndex],b=Math.max(g.start,f.start),L=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,D=L;T<D;T+=3){let I=T,v=T+1,E=T+2;s=mo(this,m,t,i,c,h,p,I,v,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),w=Math.min(l.count,f.start+f.count);for(let g=y,m=w;g<m;g+=3){let b=g,L=g+1,T=g+2;s=mo(this,a,t,i,c,h,p,b,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function op(n,t,e,i,s,r,a,o){let l;if(t.side===$n?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ys,o),l===null)return null;po.copy(o),po.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,co),n.getVertexPosition(l,ho),n.getVertexPosition(c,uo);let h=op(n,t,e,i,co,ho,uo,Cu);if(h){let p=new W;ds.getBarycoord(Cu,co,ho,uo,p),s&&(h.uv=ds.getInterpolatedAttribute(s,o,l,c,p,new de)),r&&(h.uv1=ds.getInterpolatedAttribute(r,o,l,c,p,new de)),a&&(h.normal=ds.getInterpolatedAttribute(a,o,l,c,p,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new W,materialIndex:0};ds.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=p}return h}var na=class extends Zn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Fn,h=Fn,p,d){super(null,a,o,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends ii{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},nr=new nn,Pu=new nn,go=[],Iu=new Li,lp=new nn,zr=new Rn,Gr=new Di,pr=class extends Rn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,lp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,nr),Iu.copy(t.boundingBox).applyMatrix4(nr),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,nr),Gr.copy(t.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),Pu.multiplyMatrices(i,nr),zr.matrixWorld=Pu,zr.raycast(t,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(s*this.count),s,this.count,vl,mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Di,cp=new de(.5,.5),_o=new W,ps=class{constructor(t=new Si,e=new Si,i=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],f=r[7],y=r[8],w=r[9],g=r[10],m=r[11],b=r[12],L=r[13],T=r[14],D=r[15];if(s[0].setComponents(c-a,f-h,m-y,D-b).normalize(),s[1].setComponents(c+a,f+h,m+y,D+b).normalize(),s[2].setComponents(c+o,f+p,m+w,D+L).normalize(),s[3].setComponents(c-o,f-p,m-w,D-L).normalize(),i)s[4].setComponents(l,d,g,T).normalize(),s[5].setComponents(c-l,f-d,m-g,D-T).normalize();else if(s[4].setComponents(c-l,f-d,m-g,D-T).normalize(),e===di)s[5].setComponents(c+l,f+d,m+g,D+T).normalize();else if(e===cr)s[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=cp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lu=new nn,Vo=class n{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ps),i[s].setFromProjectionMatrix(Lu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ps),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var mr=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wo=new W,Xo=new W,Du=new nn,Hr=new Cs,xo=new Di,Oc=new W,Nu=new W,sa=class extends Un{constructor(t=new On,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Wo.fromBufferAttribute(e,s-1),Xo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new _n(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Du.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let w=f,g=y-1;w<g;w+=c){let m=h.getX(w),b=h.getX(w+1),L=yo(this,t,Hr,l,m,b,w);L&&e.push(L)}if(this.isLineLoop){let w=h.getX(y-1),g=h.getX(f),m=yo(this,t,Hr,l,w,g,y-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let w=f,g=y-1;w<g;w+=c){let m=yo(this,t,Hr,l,w,w+1,w);m&&e.push(m)}if(this.isLineLoop){let w=yo(this,t,Hr,l,y-1,f,y-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),Xo.fromBufferAttribute(o,r),e.distanceSqToSegment(Wo,Xo,Oc,Nu)>i)return;Oc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:Nu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var gr=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new nn,qc=new Cs,vo=new Di,Mo=new W,ra=class extends Un{constructor(t=new On,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Fu.copy(s).invert(),qc.copy(t.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let y=d,w=f;y<w;y++){let g=c.getX(y);Mo.fromBufferAttribute(p,g),Uu(Mo,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let y=d,w=f;y<w;y++)Mo.fromBufferAttribute(p,y),Uu(Mo,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uu(n,t,e,i,s,r,a){let o=qc.distanceSqToPoint(n);if(o<e){let l=new W;qc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var aa=class extends Zn{constructor(t=[],e=Us,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oa=class extends Zn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends Zn{constructor(t,e,i=wi,s,r,a,o=Fn,l=Fn,c,h=Yi,p=1){if(h!==Yi&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Zi{constructor(t,e=wi,i=Us,s,r,a=Fn,o=Fn,l,c=Yi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fi=class n extends On{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],d=0,f=0;y("z","y","x",-1,-1,i,e,t,a,r,0),y("z","y","x",1,-1,i,e,-t,a,r,1),y("x","z","y",1,1,t,i,e,s,a,2),y("x","z","y",1,-1,t,i,-e,s,a,3),y("x","y","z",1,-1,t,e,i,s,r,4),y("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(p,2));function y(w,g,m,b,L,T,D,I,v,E,H){let F=T/v,q=D/E,j=T/2,pt=D/2,z=I/2,ut=v+1,dt=E+1,ht=0,yt=0,_t=new W;for(let mt=0;mt<dt;mt++){let It=mt*q-pt;for(let jt=0;jt<ut;jt++){let Ce=jt*F-j;_t[w]=Ce*b,_t[g]=It*L,_t[m]=z,c.push(_t.x,_t.y,_t.z),_t[w]=0,_t[g]=0,_t[m]=I>0?1:-1,h.push(_t.x,_t.y,_t.z),p.push(jt/v),p.push(1-mt/E),ht+=1}}for(let mt=0;mt<E;mt++)for(let It=0;It<v;It++){let jt=d+It+ut*mt,Ce=d+It+ut*(mt+1),Et=d+(It+1)+ut*(mt+1),Kt=d+(It+1)+ut*mt;l.push(jt,Ce,Kt),l.push(Ce,Et,Kt),yt+=6}o.addGroup(f,yt,H),f+=yt,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ha=class n extends On{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,f=2*p+d,y=i*2+r,w=s+1,g=new W,m=new W;for(let b=0;b<=y;b++){let L=0,T=0,D=0,I=0;if(b<=i){let H=b/i,F=H*Math.PI/2;T=-h-t*Math.cos(F),D=t*Math.sin(F),I=-t*Math.cos(F),L=H*p}else if(b<=i+r){let H=(b-i)/r;T=-h+H*e,D=t,I=0,L=p+H*d}else{let H=(b-i-r)/i,F=H*Math.PI/2;T=h+t*Math.sin(F),D=t*Math.cos(F),I=t*Math.sin(F),L=p+d+H*p}let v=Math.max(0,Math.min(1,L/f)),E=0;b===0?E=.5/s:b===y&&(E=-.5/s);for(let H=0;H<=s;H++){let F=H/s,q=F*Math.PI*2,j=Math.sin(q),pt=Math.cos(q);m.x=-D*pt,m.y=T,m.z=D*j,o.push(m.x,m.y,m.z),g.set(-D*pt,I,D*j),g.normalize(),l.push(g.x,g.y,g.z),c.push(F+E,v)}if(b>0){let H=(b-1)*w;for(let F=0;F<s;F++){let q=H+F,j=H+F+1,pt=b*w+F,z=b*w+F+1;a.push(q,j,pt),a.push(j,z,pt)}}}this.setIndex(a),this.setAttribute("position",new _n(o,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ua=class n extends On{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new W,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=i+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new _n(a,3)),this.setAttribute("normal",new _n(o,3)),this.setAttribute("uv",new _n(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ps=class n extends On{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],f=[],y=0,w=[],g=i/2,m=0;b(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(f,2));function b(){let T=new W,D=new W,I=0,v=(e-t)/i;for(let E=0;E<=r;E++){let H=[],F=E/r,q=F*(e-t)+t;for(let j=0;j<=s;j++){let pt=j/s,z=pt*l+o,ut=Math.sin(z),dt=Math.cos(z);D.x=q*ut,D.y=-F*i+g,D.z=q*dt,p.push(D.x,D.y,D.z),T.set(ut,v,dt).normalize(),d.push(T.x,T.y,T.z),f.push(pt,1-F),H.push(y++)}w.push(H)}for(let E=0;E<s;E++)for(let H=0;H<r;H++){let F=w[H][E],q=w[H+1][E],j=w[H+1][E+1],pt=w[H][E+1];(t>0||H!==0)&&(h.push(F,q,pt),I+=3),(e>0||H!==r-1)&&(h.push(q,j,pt),I+=3)}c.addGroup(m,I,0),m+=I}function L(T){let D=y,I=new de,v=new W,E=0,H=T===!0?t:e,F=T===!0?1:-1;for(let j=1;j<=s;j++)p.push(0,g*F,0),d.push(0,F,0),f.push(.5,.5),y++;let q=y;for(let j=0;j<=s;j++){let z=j/s*l+o,ut=Math.cos(z),dt=Math.sin(z);v.x=H*dt,v.y=g*F,v.z=H*ut,p.push(v.x,v.y,v.z),d.push(0,F,0),I.x=ut*.5+.5,I.y=dt*.5*F+.5,f.push(I.x,I.y),y++}for(let j=0;j<s;j++){let pt=D+j,z=q+j;T===!0?h.push(z,z+1,pt):h.push(z+1,z,pt),E+=3}c.addGroup(m,E,T===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new de:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new W,s=[],r=[],a=[],o=new W,l=new nn;for(let f=0;f<=t;f++){let y=f/t;s[f]=this.getTangentAt(y,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,y))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],f*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},_r=class extends ai{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new de){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*p+this.aX,c=d*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qo=class extends _r{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+p)+(l-o)/p;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ou=new W,Bu=new W,Bc=new Eh,kc=new Eh,zc=new Eh,Yo=class extends ai{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new W){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Bu.subVectors(s[0],s[1]).add(s[0]),c=Bu);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(p),f),w=Math.pow(p.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);w<1e-4&&(w=1),y<1e-4&&(y=w),g<1e-4&&(g=w),Bc.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,y,w,g),kc.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,y,w,g),zc.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,y,w,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),kc.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),zc.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return i.set(Bc.calc(l),kc.calc(l),zc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ku(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function hp(n,t){let e=1-n;return e*e*t}function up(n,t){return 2*(1-n)*n*t}function dp(n,t){return n*n*t}function Xr(n,t,e,i){return hp(n,t)+up(n,e)+dp(n,i)}function fp(n,t){let e=1-n;return e*e*e*t}function pp(n,t){let e=1-n;return 3*e*e*n*t}function mp(n,t){return 3*(1-n)*n*n*t}function gp(n,t){return n*n*n*t}function qr(n,t,e,i,s){return fp(n,t)+pp(n,e)+mp(n,i)+gp(n,s)}var da=class extends ai{constructor(t=new de,e=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new de){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends ai{constructor(t=new W,e=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y),qr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends ai{constructor(t=new de,e=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new de){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new de){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends ai{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends ai{constructor(t=new de,e=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new de){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(t,s.x,r.x,a.x),Xr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends ai{constructor(t=new W,e=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xr(t,s.x,r.x,a.x),Xr(t,s.y,r.y,a.y),Xr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new de){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(ku(o,l.x,c.x,h.x,p.x),ku(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new de().fromArray(s))}return this}},zu=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:Yo,CubicBezierCurve:da,CubicBezierCurve3:Zo,EllipseCurve:_r,LineCurve:fa,LineCurve3:$o,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Ko,SplineCurve:ma}),jo=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new zu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ga=class extends jo{constructor(t){super(),this.type="Path",this.currentPoint=new de,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fa(this.currentPoint.clone(),new de(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new pa(this.currentPoint.clone(),new de(t,e),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new da(this.currentPoint.clone(),new de(t,e),new de(i,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ma(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new _r(t,e,i,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xr=class extends ga{constructor(t){super(t),this.uuid=Tr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ga().fromJSON(s))}return this}};function _p(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Bd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Sp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,p=l;for(let d=e;d<s;d+=e){let f=n[d],y=n[d+1];f<o&&(o=f),y<l&&(l=y),f>h&&(h=f),y>p&&(p=y)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return _a(r,a,e,o,l,c,0),a}function Bd(n,t,e,i,s){let r;if(s===Dp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Gu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Gu(a/i|0,n[a],n[a+1],r);return r&&yr(r,r.next)&&(ya(r),r=r.next),r}function Is(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(yr(e,e.next)||Tn(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _a(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Ap(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?yp(n,i,s,r):xp(n)){t.push(l.i,n.i,c.i),ya(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=vp(Is(n),t),_a(n,t,e,i,s,r,2)):a===2&&Mp(n,t,e,i,s,r):_a(Is(n),t,e,i,s,r,1);break}}}function xp(n){let t=n.prev,e=n,i=n.next;if(Tn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),y=i.next;for(;y!==t;){if(y.x>=h&&y.x<=d&&y.y>=p&&y.y<=f&&Vr(s,o,r,l,a,c,y.x,y.y)&&Tn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function yp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),y=Math.min(h,p,d),w=Math.max(o,l,c),g=Math.max(h,p,d),m=Yc(f,y,t,e,i),b=Yc(w,g,t,e,i),L=n.prevZ,T=n.nextZ;for(;L&&L.z>=m&&T&&T.z<=b;){if(L.x>=f&&L.x<=w&&L.y>=y&&L.y<=g&&L!==s&&L!==a&&Vr(o,h,l,p,c,d,L.x,L.y)&&Tn(L.prev,L,L.next)>=0||(L=L.prevZ,T.x>=f&&T.x<=w&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vr(o,h,l,p,c,d,T.x,T.y)&&Tn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;L&&L.z>=m;){if(L.x>=f&&L.x<=w&&L.y>=y&&L.y<=g&&L!==s&&L!==a&&Vr(o,h,l,p,c,d,L.x,L.y)&&Tn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;T&&T.z<=b;){if(T.x>=f&&T.x<=w&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vr(o,h,l,p,c,d,T.x,T.y)&&Tn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function vp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!yr(i,s)&&zd(i,e,e.next,s)&&xa(i,s)&&xa(s,i)&&(t.push(i.i,e.i,s.i),ya(e),ya(e.next),e=n=s),e=e.next}while(e!==n);return Is(e)}function Mp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pp(a,o)){let l=Gd(a,o);a=Is(a,a.next),l=Is(l,l.next),_a(a,t,e,i,s,r,0),_a(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Sp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Bd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Cp(c))}s.sort(bp);for(let r=0;r<s.length;r++)e=wp(s[r],e);return e}function bp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function wp(n,t){let e=Tp(n,t);if(!e)return t;let i=Gd(e,n);return Is(i,i.next),Is(e,e.next)}function Tp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(yr(n,e))return e;do{if(yr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&kd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let p=Math.abs(s-e.y)/(i-e.x);xa(e,n)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Ep(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Ep(n,t){return Tn(n.prev,n,t.prev)<0&&Tn(t.next,n,n.next)<0}function Ap(n,t,e,i){let s=n;do s.z===0&&(s.z=Yc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rp(s)}function Rp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Yc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Cp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Vr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&kd(n,t,e,i,s,r,a,o)}function Pp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ip(n,t)&&(xa(n,t)&&xa(t,n)&&Lp(n,t)&&(Tn(n.prev,n,t.prev)||Tn(n,t.prev,t))||yr(n,t)&&Tn(n.prev,n,n.next)>0&&Tn(t.prev,t,t.next)>0)}function Tn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function yr(n,t){return n.x===t.x&&n.y===t.y}function zd(n,t,e,i){let s=bo(Tn(n,t,e)),r=bo(Tn(n,t,i)),a=bo(Tn(e,i,n)),o=bo(Tn(e,i,t));return!!(s!==r&&a!==o||s===0&&So(n,e,t)||r===0&&So(n,i,t)||a===0&&So(e,n,i)||o===0&&So(e,t,i))}function So(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function bo(n){return n>0?1:n<0?-1:0}function Ip(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xa(n,t){return Tn(n.prev,n,n.next)<0?Tn(n,t,n.next)>=0&&Tn(n,n.prev,t)>=0:Tn(n,t,n.prev)<0||Tn(n,n.next,t)<0}function Lp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gd(n,t){let e=Zc(n.i,n.x,n.y),i=Zc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gu(n,t,e,i){let s=Zc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ya(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var $c=class{static triangulate(t,e,i=2){return _p(t,e,i)}},or=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Hu(t),Vu(i,t);let a=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Vu(i,e[l]);let o=$c.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ms=class n extends On{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,d=e/l,f=[],y=[],w=[],g=[];for(let m=0;m<h;m++){let b=m*d-a;for(let L=0;L<c;L++){let T=L*p-r;y.push(T,-b,0),w.push(0,0,1),g.push(L/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let L=b+c*m,T=b+c*(m+1),D=b+1+c*(m+1),I=b+1+c*m;f.push(L,T,I),f.push(T,D,I)}this.setIndex(f),this.setAttribute("position",new _n(y,3)),this.setAttribute("normal",new _n(w,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var va=class n extends On{constructor(t=new xr([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(r,3)),this.setAttribute("uv",new _n(a,2));function c(h){let p=s.length/3,d=h.extractPoints(e),f=d.shape,y=d.holes;or.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=y.length;g<m;g++){let b=y[g];or.isClockWise(b)===!0&&(y[g]=b.reverse())}let w=or.triangulateShape(f,y);for(let g=0,m=y.length;g<m;g++){let b=y[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=w.length;g<m;g++){let b=w[g],L=b[0]+p,T=b[1]+p,D=b[2]+p;i.push(L,T,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Np(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Np(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ls=class n extends On{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new W,d=new W,f=[],y=[],w=[],g=[];for(let m=0;m<=i;m++){let b=[],L=m/i,T=a+L*o,D=t*Math.cos(T),I=Math.sqrt(t*t-D*D),v=0;m===0&&a===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let H=E/e,F=s+H*r;p.x=-I*Math.cos(F),p.y=D,p.z=I*Math.sin(F),y.push(p.x,p.y,p.z),d.copy(p).normalize(),w.push(d.x,d.y,d.z),g.push(H+v,1-L),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let L=h[m][b+1],T=h[m][b],D=h[m+1][b],I=h[m+1][b+1];(m!==0||a>0)&&f.push(L,T,I),(m!==i-1||l<Math.PI)&&f.push(T,D,I)}this.setIndex(f),this.setAttribute("position",new _n(y,3)),this.setAttribute("normal",new _n(w,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Wu(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Hn(n){let t={};for(let e=0;e<n.length;e++){let i=Bs(n[e]);for(let s in i)t[s]=i[s]}return t}function Wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}var Hd={clone:Bs,merge:Hn},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new de().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new nn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jo=class extends Fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bn=class extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qo=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ir(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,o=2*e-i;break;case Xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:a=t,l=2*i-e;break;case Xc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,y=(i-e)/(s-e),w=y*y,g=w*y,m=-d*g+2*d*w-d*y,b=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*y+1,L=(-1-f)*g+(1.5+f)*w+.5*y,T=f*g-f*w;for(let D=0;D!==o;++D)r[D]=m*a[h+D]+b*a[c+D]+L*a[l+D]+T*a[p+D];return r}},nl=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),p=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*h;return r}},il=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends gs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let y=(i-e)/(s-e),w=1-y;for(let g=0;g!==o;++g)r[g]=a[c+g]*w+a[l+g]*y;return r}let d=o*2,f=t-1;for(let y=0;y!==o;++y){let w=a[c+y],g=a[l+y],m=f*d+y*2,b=p[m],L=p[m+1],T=t*d+y*2,D=h[T],I=h[T+1],v=kp(i,e,b,D,s);r[y]=Vd(v,w,L,I,g)}return r}};function Vd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Bp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function kp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Vd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Bp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var oi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ir(e,this.TimeBufferType),this.values=ir(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ir(t.times,Array),values:ir(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),wo(t.settings)&&(i.settings={inTangents:ir(t.settings.inTangents,Array),outTangents:ir(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Bo:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break;case Hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Ao;case this.InterpolantFactoryMethodBezier:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;wo(this.settings)&&(Xu(this.settings.inTangents,t),Xu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;wo(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,d=p-i,f=p+i;for(let y=0;y!==i;++y){let w=e[p+y];if(w!==e[d+y]||w!==e[f+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,wo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function qu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Bo;var _s=class extends oi{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Yr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends oi{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="color";var al=class extends oi{constructor(t,e,i,s){super(t,e,i,s)}};al.prototype.ValueTypeName="number";var ol=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)si.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ma=class extends oi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends oi{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Yr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends oi{constructor(t,e,i,s){super(t,e,i,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],y=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Un{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ba=class extends Sa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new nn,Yu=new W,Zu=new W,ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},To=new W,Eo=new si,Ci=new W,wa=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(To,Eo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(To,Eo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new W,$u=new de,Ku=new de,qn=class extends wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Ku),e.subVectors(Ku,$u)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ta=class extends wa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kc=class extends ul{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var sr=-90,rr=1,vr=class extends Un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qn(sr,rr,t,e);s.layers=this.layers,this.add(s);let r=new qn(sr,rr,t,e);r.layers=this.layers,this.add(r);let a=new qn(sr,rr,t,e);a.layers=this.layers,this.add(a);let o=new qn(sr,rr,t,e);o.layers=this.layers,this.add(o);let l=new qn(sr,rr,t,e);l.layers=this.layers,this.add(l);let c=new qn(sr,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,f),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},dl=class extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Rh="\\[\\]\\.:\\/",zp=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",Gp="[^"+Rh.replace("\\.","")+"]",Hp=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Vp=/(WCOD+)?/.source.replace("WCOD",Gp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),qp=new RegExp("^"+Hp+Vp+Wp+Xp+"$"),Yp=["material","materials","bones","map"],jc=class{constructor(t,e,i){let s=i||vn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},vn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(t){let e=qp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Yp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vn.Composite=jc;vn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vn.prototype.GetterByBindingType=[vn.prototype._getValue_direct,vn.prototype._getValue_array,vn.prototype._getValue_arrayElement,vn.prototype._getValue_toArray];vn.prototype.SetterByBindingTypeAndVersioning=[[vn.prototype._setValue_direct,vn.prototype._setValue_direct_setNeedsUpdate,vn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_array,vn.prototype._setValue_array_setNeedsUpdate,vn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_arrayElement,vn.prototype._setValue_arrayElement_setNeedsUpdate,vn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_fromArray,vn.prototype._setValue_fromArray_setNeedsUpdate,vn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ry=new Float32Array(1);var ju=new nn,Aa=class{constructor(t,e,i=0,s=1/0){this.ray=new Cs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,i=[]){return Jc(t,this,i,e),i.sort(Ju),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,i,e);return i.sort(Ju),i}};function Ju(n,t){return n.distance-t.distance}function Jc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Jc(r[a],t,e,!0)}}var Fh=class Fh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Fh.prototype.isMatrix2=!0;var Qc=Fh;function Ph(n,t,e,i){let s=Zp(i);switch(e){case xh:return n*t;case vl:return n*t/s.components*s.byteLength;case Ml:return n*t/s.components*s.byteLength;case vs:return n*t*2/s.components*s.byteLength;case Sl:return n*t*2/s.components*s.byteLength;case yh:return n*t*3/s.components*s.byteLength;case Ei:return n*t*4/s.components*s.byteLength;case bl:return n*t*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Al:return Math.max(n,16)*Math.max(t,8)/4;case wl:case El:return Math.max(n,8)*Math.max(t,8)/2;case Rl:case Cl:case Il:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Na:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zl:case $l:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jl:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fa:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zp(n){switch(n){case Jn:case ph:return{byteLength:1,components:1};case wr:case mh:case Ti:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case wi:case _l:case mi:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ff(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Kp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<p.length;f++){let y=p[d],w=p[f];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++d,p[d]=w)}p.length=d+1;for(let f=0,y=p.length;f<y;f++){let w=p[f];n.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,Zm=`uniform sampler2D dfgLUT;
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
}`,$m=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
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
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform float backgroundBlurriness;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,bg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:jp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:xm,color_vertex:ym,common:vm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Sm,displacementmap_vertex:bm,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Em,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Hm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Um,gradientmap_pars_fragment:Om,lightmap_pars_fragment:Bm,lights_lambert_fragment:km,lights_lambert_pars_fragment:zm,lights_pars_begin:Gm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Zm,lights_fragment_begin:$m,lights_fragment_maps:Km,lights_fragment_end:jm,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:T0,premultiplied_alpha_fragment:E0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:F0,skinbase_vertex:U0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:k0,specularmap_fragment:z0,specularmap_pars_fragment:G0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:Z0,worldpos_vertex:$0,background_vert:K0,background_frag:j0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distance_vert:sg,distance_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:yg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:wg,points_frag:Tg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},re={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Hn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Hn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Hn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Hn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Hn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Hn([re.points,re.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Hn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Hn([re.common,re.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Hn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Hn([re.sprite,re.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Hn([re.common,re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Hn([re.lights,re.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ec={r:0,b:0,g:0},Pg=new nn,pf=new Be;pf.set(-1,0,0,0,1,0,0,0,1);function Ig(n,t,e,i,s,r){let a=new ke(0),o=s===!0?0:1,l,c,h=null,p=0,d=null;function f(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){let T=b.backgroundBlurriness>0;L=t.get(L,T)}return L}function y(b){let L=!1,T=f(b);T===null?g(a,o):T&&T.isColor&&(g(T,1),L=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,L){let T=f(L);T&&T.isCubeTexture?(c===void 0&&(c=new Rn(new fi(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Bs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pf),c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ln,(h!==T||p!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,p=T.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Rn(new ms(2,2),new Fi({name:"BackgroundMaterial",uniforms:Bs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ln,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||p!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,p=T.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,L){b.getRGB(ec,Ah(n)),e.buffers.color.setClear(ec.r,ec.g,ec.b,L,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,L=1){a.set(b),o=L,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:y,addToRenderList:w,dispose:m}}function Lg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(q,j,pt,z,ut){let dt=!1,ht=p(q,z,pt,j);r!==ht&&(r=ht,c(r.object)),dt=f(q,z,pt,ut),dt&&y(q,z,pt,ut),ut!==null&&t.update(ut,n.ELEMENT_ARRAY_BUFFER),(dt||a)&&(a=!1,T(q,j,pt,z),ut!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function l(){return n.createVertexArray()}function c(q){return n.bindVertexArray(q)}function h(q){return n.deleteVertexArray(q)}function p(q,j,pt,z){let ut=z.wireframe===!0,dt=i[j.id];dt===void 0&&(dt={},i[j.id]=dt);let ht=q.isInstancedMesh===!0?q.id:0,yt=dt[ht];yt===void 0&&(yt={},dt[ht]=yt);let _t=yt[pt.id];_t===void 0&&(_t={},yt[pt.id]=_t);let mt=_t[ut];return mt===void 0&&(mt=d(l()),_t[ut]=mt),mt}function d(q){let j=[],pt=[],z=[];for(let ut=0;ut<e;ut++)j[ut]=0,pt[ut]=0,z[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pt,attributeDivisors:z,object:q,attributes:{},index:null}}function f(q,j,pt,z){let ut=r.attributes,dt=j.attributes,ht=0,yt=pt.getAttributes();for(let _t in yt)if(yt[_t].location>=0){let It=ut[_t],jt=dt[_t];if(jt===void 0&&(_t==="instanceMatrix"&&q.instanceMatrix&&(jt=q.instanceMatrix),_t==="instanceColor"&&q.instanceColor&&(jt=q.instanceColor)),It===void 0||It.attribute!==jt||jt&&It.data!==jt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==z}function y(q,j,pt,z){let ut={},dt=j.attributes,ht=0,yt=pt.getAttributes();for(let _t in yt)if(yt[_t].location>=0){let It=dt[_t];It===void 0&&(_t==="instanceMatrix"&&q.instanceMatrix&&(It=q.instanceMatrix),_t==="instanceColor"&&q.instanceColor&&(It=q.instanceColor));let jt={};jt.attribute=It,It&&It.data&&(jt.data=It.data),ut[_t]=jt,ht++}r.attributes=ut,r.attributesNum=ht,r.index=z}function w(){let q=r.newAttributes;for(let j=0,pt=q.length;j<pt;j++)q[j]=0}function g(q){m(q,0)}function m(q,j){let pt=r.newAttributes,z=r.enabledAttributes,ut=r.attributeDivisors;pt[q]=1,z[q]===0&&(n.enableVertexAttribArray(q),z[q]=1),ut[q]!==j&&(n.vertexAttribDivisor(q,j),ut[q]=j)}function b(){let q=r.newAttributes,j=r.enabledAttributes;for(let pt=0,z=j.length;pt<z;pt++)j[pt]!==q[pt]&&(n.disableVertexAttribArray(pt),j[pt]=0)}function L(q,j,pt,z,ut,dt,ht){ht===!0?n.vertexAttribIPointer(q,j,pt,ut,dt):n.vertexAttribPointer(q,j,pt,z,ut,dt)}function T(q,j,pt,z){w();let ut=z.attributes,dt=pt.getAttributes(),ht=j.defaultAttributeValues;for(let yt in dt){let _t=dt[yt];if(_t.location>=0){let mt=ut[yt];if(mt===void 0&&(yt==="instanceMatrix"&&q.instanceMatrix&&(mt=q.instanceMatrix),yt==="instanceColor"&&q.instanceColor&&(mt=q.instanceColor)),mt!==void 0){let It=mt.normalized,jt=mt.itemSize,Ce=t.get(mt);if(Ce===void 0)continue;let Et=Ce.buffer,Kt=Ce.type,nt=Ce.bytesPerElement,ae=Kt===n.INT||Kt===n.UNSIGNED_INT||mt.gpuType===_l;if(mt.isInterleavedBufferAttribute){let J=mt.data,Pt=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Jt=mt.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let Ee=0;Ee<_t.locationSize;Ee++)m(_t.location+Ee,J.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<_t.locationSize;Ee++)g(_t.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Ee=0;Ee<_t.locationSize;Ee++)L(_t.location+Ee,jt/_t.locationSize,Kt,It,Pt*nt,(Jt+jt/_t.locationSize*Ee)*nt,ae)}else{if(mt.isInstancedBufferAttribute){for(let J=0;J<_t.locationSize;J++)m(_t.location+J,mt.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let J=0;J<_t.locationSize;J++)g(_t.location+J);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let J=0;J<_t.locationSize;J++)L(_t.location+J,jt/_t.locationSize,Kt,It,jt*nt,jt/_t.locationSize*J*nt,ae)}}else if(ht!==void 0){let It=ht[yt];if(It!==void 0)switch(It.length){case 2:n.vertexAttrib2fv(_t.location,It);break;case 3:n.vertexAttrib3fv(_t.location,It);break;case 4:n.vertexAttrib4fv(_t.location,It);break;default:n.vertexAttrib1fv(_t.location,It)}}}}b()}function D(){H();for(let q in i){let j=i[q];for(let pt in j){let z=j[pt];for(let ut in z){let dt=z[ut];for(let ht in dt)h(dt[ht].object),delete dt[ht];delete z[ut]}}delete i[q]}}function I(q){if(i[q.id]===void 0)return;let j=i[q.id];for(let pt in j){let z=j[pt];for(let ut in z){let dt=z[ut];for(let ht in dt)h(dt[ht].object),delete dt[ht];delete z[ut]}}delete i[q.id]}function v(q){for(let j in i){let pt=i[j];for(let z in pt){let ut=pt[z];if(ut[q.id]===void 0)continue;let dt=ut[q.id];for(let ht in dt)h(dt[ht].object),delete dt[ht];delete ut[q.id]}}}function E(q){for(let j in i){let pt=i[j],z=q.isInstancedMesh===!0?q.id:0,ut=pt[z];if(ut!==void 0){for(let dt in ut){let ht=ut[dt];for(let yt in ht)h(ht[yt].object),delete ht[yt];delete ut[dt]}delete pt[z],Object.keys(pt).length===0&&delete i[j]}}}function H(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:w,enableAttribute:g,disableUnusedAttributes:b}}function Dg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ng(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Ei&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let E=v===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Jn&&v!==mi&&!E&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:T,maxSamples:D,samples:I}}function Fg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Si,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||i!==0||s;return s=d,i=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,f){let y=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let b=r?0:i,L=b*4,T=m.clippingState||null;l.value=T,T=h(y,d,L,f);for(let D=0;D!==L;++D)T[D]=e[D];m.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,d,f,y){let w=p!==null?p.length:0,g=null;if(w!==0){if(g=l.value,y!==!0||g===null){let m=f+w*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let L=0,T=f;L!==w;++L,T+=4)a.copy(p[L]).applyMatrix4(b,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Ba=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Ns});r.uniforms.tEquirect.value=e;let a=new Rn(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=Yn),new vr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Xd=256,Ug=3,Og=20,mf=256,gf=16,Bg=3,kg=new W,zg=new ke,ic=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vr(1,10,null),this._boxMesh=new Rn(new fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=kg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,y=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(zg));let g=new vr(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=y,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xd,Ud(t))}_fromTexture(t,e){t.mapping===Us||t.mapping===br?this._setSize(t.image.length===0?Xd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=qd(t,!1,!1),i=Math.log2(t)-Ug;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=qd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Us||t.mapping===br?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gg(),this._integrationMaterial=Hg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Bg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(mf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Vg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function qd(n,t,e){return new Ba(n,{minFilter:$i,generateMipmaps:t,type:Ti,colorSpace:Zr,depthBuffer:e})}function ka(n,t,e){return new Fi({name:n,uniforms:t,vertexShader:We.cube_vert,fragmentShader:e,side:$n,blending:Ns,depthTest:!1,depthWrite:!1})}function Gg(){return ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mf}u

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
	`)}function Hg(){return ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gf}},`

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
	`)}function Vg(){return ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Og}
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
	`)}function Yd(){return ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Zd(){return ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===pl||f===ml)if(t.has(d)){let y=t.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let w=new Ba(y.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",c),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,y=f===pl||f===ml,w=f===Us||f===br;if(y||w){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new ic(n)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return y&&b&&b.height>0||w&&b&&l(b)?(i===null&&(i=new ic(n)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===pl?d.mapping=Us:f===ml&&(d.mapping=br),d}function l(d){let f=0,y=6;for(let w=0;w<y;w++)d[w]!==void 0&&f++;return f===y}function c(d){let f=d.target;f.removeEventListener("dispose",c);let y=t.get(f);y!==void 0&&(t.delete(f),y.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Xg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Wr("WebGLRenderer: "+i+" extension not supported."),s}}}function qg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){l(y.target)}function l(y){y.index!==null&&t.remove(y.index);for(let g in y.attributes)t.remove(y.attributes[g]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let w=r.get(y);w&&(t.remove(w),r.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function c(y,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function h(y){let w=y.attributes;for(let g in w)t.update(w[g],n.ARRAY_BUFFER)}function p(y){let w=y.index,g=y.attributes.position,m=0;if(g===void 0)return;let b=w!==null?w.array.length:g.array.length/3-1,L=g.count>=65535?ea:ta,T=new L(Math.ceil(b/3)*6,1),D=T.array;if(w!==null){let v=w.array;m=w.version;for(let E=0,H=0;E<b;E+=3){let F=v[E+0],q=v[E+1],j=v[E+2];D[H++]=F,D[H++]=q,D[H++]=q,D[H++]=j,D[H++]=j,D[H++]=F}}else{m=g.version;for(let v=0,E=0;v<b;v+=3){let H=v+0,F=v+1,q=v+2;D[E++]=H,D[E++]=F,D[E++]=F,D[E++]=q,D[E++]=q,D[E++]=H}}T.version=m;let I=r.get(y);I&&t.remove(I),r.set(y,T)}function d(y){let w=r.get(y);if(w){let g=y.index;g!==null&&w.version<g.version&&p(y)}else p(y);return r.get(y)}function f(){for(let y in s){let w=s[y].deref();w!==void 0&&l(w)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Yg(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function c(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,p*a,f),e.update(d,i,f))}function h(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,f);let w=0;for(let g=0;g<f;g++)w+=d[g];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $g(n,t,e){let i=new WeakMap,s=new bn;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==p){let H=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],L=0;f===!0&&(L=1),y===!0&&(L=2),w===!0&&(L=3);let T=o.attributes.position.count*L,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let I=new Float32Array(T*D*4*p),v=new jr(I,T,D,p);v.type=mi,v.needsUpdate=!0;let E=L*4;for(let F=0;F<p;F++){let q=g[F],j=m[F],pt=b[F],z=T*D*4*F;for(let ut=0;ut<q.count;ut++){let dt=ut*E;f===!0&&(s.fromBufferAttribute(q,ut),I[z+dt+0]=s.x,I[z+dt+1]=s.y,I[z+dt+2]=s.z,I[z+dt+3]=0),y===!0&&(s.fromBufferAttribute(j,ut),I[z+dt+4]=s.x,I[z+dt+5]=s.y,I[z+dt+6]=s.z,I[z+dt+7]=0),w===!0&&(s.fromBufferAttribute(pt,ut),I[z+dt+8]=s.x,I[z+dt+9]=s.y,I[z+dt+10]=s.z,I[z+dt+11]=pt.itemSize===4?s.w:1)}}d={count:p,texture:v,size:new de(T,D)},i.set(o,d),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let w=0;w<c.length;w++)f+=c[w];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Kg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jg={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function Jg(n,t,e,i,s,r){let a=new ri(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new On;h.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _n([0,2,0,0,2,0],2));let p=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Rn(h,p),f=new Ta(-1,1,1,-1,0,1),y=null,w=null,g=!1,m,b=null,L=[],T=!1;this.setSize=function(D,I){a.setSize(D,I),o!==null&&o.setSize(D,I),l!==null&&l.setSize(D,I);for(let v=0;v<L.length;v++){let E=L[v];E.setSize&&E.setSize(D,I)}},this.setEffects=function(D){L=D,T=L.length>0&&L[0].isRenderPass===!0;let I=a.width,v=a.height;L.length>0&&o===null&&(o=new ri(I,v,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new ri(I,v,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&L.some(H=>H.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Zi(I,v),r===!0&&(c.format=Ki,c.type=Os)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let H=0;H<L.length;H++){let F=L[H];F.setSize&&F.setSize(I,v),E&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(D,I){if(g||D.toneMapping===Ui&&L.length===0)return!1;if(b=I,I!==null){let v=I.width,E=I.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return T===!1&&D.setRenderTarget(a),m=D.toneMapping,D.toneMapping=Ui,!0},this.hasRenderPass=function(){return T},this.end=function(D,I){D.toneMapping=m,g=!0;let v=a,E=o;for(let H=0;H<L.length;H++){let F=L[H];F.enabled!==!1&&(F.render(D,E,v,I),F.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(y!==D.outputColorSpace||w!==D.toneMapping){y=D.outputColorSpace,w=D.toneMapping,p.defines={},Qe.getTransfer(y)===ln&&(p.defines.SRGB_TRANSFER="");let H=jg[w];H&&(p.defines[H]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,D.setRenderTarget(b),D.render(d,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var _f=new Zn,xf=new Zi(1,1),yf=new la(1),vf=new jr,Mf=new Ho,Sf=new aa,$d=[],Kd=[],jd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=$d[s];if(r===void 0&&(r=new Float32Array(s),$d[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rc(n,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2fv(this.addr,t),Dn(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ln(e,t))return;n.uniform3fv(this.addr,t),Dn(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4fv(this.addr,t),Dn(e,t)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,i))return;Qd.set(i),n.uniformMatrix2fv(this.addr,!1,Qd),Dn(e,i)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),Dn(e,i)}}function r_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,i))return;jd.set(i),n.uniformMatrix4fv(this.addr,!1,jd),Dn(e,i)}}function a_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2iv(this.addr,t),Dn(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;n.uniform3iv(this.addr,t),Dn(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4iv(this.addr,t),Dn(e,t)}}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2uiv(this.addr,t),Dn(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;n.uniform3uiv(this.addr,t),Dn(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4uiv(this.addr,t),Dn(e,t)}}function ac(n){return n.version===0&&(n.compareFunction=Sh,n.needsUpdate=!0),n}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ac(xf):r=_f,e.setTexture2D(t||r,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Mf,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ac(yf):r=Sf,e.setTextureCube(t||r,s)}function __(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vf,s)}function x_(n){switch(n){case 5126:return Qg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function y_(n,t){n.uniform1fv(this.addr,t)}function v_(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function M_(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function S_(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function b_(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function w_(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function T_(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E_(n,t){n.uniform1iv(this.addr,t)}function A_(n,t){n.uniform2iv(this.addr,t)}function R_(n,t){n.uniform3iv(this.addr,t)}function C_(n,t){n.uniform4iv(this.addr,t)}function P_(n,t){n.uniform1uiv(this.addr,t)}function I_(n,t){n.uniform2uiv(this.addr,t)}function L_(n,t){n.uniform3uiv(this.addr,t)}function D_(n,t){n.uniform4uiv(this.addr,t)}function N_(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);Ln(i,r)||(n.uniform1iv(this.addr,r),Dn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ac(xf):a=_f;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function F_(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);Ln(i,r)||(n.uniform1iv(this.addr,r),Dn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mf,r[a])}function U_(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);Ln(i,r)||(n.uniform1iv(this.addr,r),Dn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ac(yf):a=Sf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function O_(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);Ln(i,r)||(n.uniform1iv(this.addr,r),Dn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vf,r[a])}function B_(n){switch(n){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return E_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}var Bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=x_(e.type)}},kh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B_(e.type)}},zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function tf(n,t){n.seq.push(t),n.map[t.id]=t}function k_(n,t,e){let i=n.name,s=i.length;for(Uh.lastIndex=0;;){let r=Uh.exec(i),a=Uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tf(e,c===void 0?new Bh(o,n,t):new kh(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new zh(o),tf(e,p)),e=p}}}var Er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);k_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function ef(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var z_=37297,G_=0;function H_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var nf=new Be;function V_(n){Qe._getMatrix(nf,Qe.workingColorSpace,n);let t=`mat3( ${nf.elements.map(e=>e.toFixed(4))} )`;switch(Qe.getTransfer(n)){case $r:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function sf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H_(n.getShaderSource(t),o)}else return r}function W_(n,t){let e=V_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var X_={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[Ra]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function q_(n,t){let e=X_[t];return e===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new W;function Y_(){Qe.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function $_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Oa(n){return n!==""}function rf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function af(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(j_,J_)}function J_(n,t){let e=We[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Gh(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(Q_,tx)}function tx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var ex={[Ds]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function nx(n){return ex[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[br]:"ENVMAP_MODE_REFRACTION"};function sx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rx={[ah]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[Md]:"ENVMAP_BLENDING_ADD"};function ax(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rx[n.combine]||"ENVMAP_BLENDING_NONE"}function ox(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=nx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sx(e),p=ax(e),d=Z_(e),f=$_(r),y=s.createProgram(),w,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Oa).join(`
`),w.length>0&&(w+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Oa).join(`
`),g.length>0&&(g+=`
`)):(w=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),g=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?We.tonemapping_pars_fragment:"",e.toneMapping!==Ui?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,W_("linearToOutputTexel",e.outputColorSpace),Y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oa).join(`
`)),a=Gh(a),a=rf(a,e),a=af(a,e),o=Gh(o),o=rf(o,e),o=af(o,e),a=of(a),o=of(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,g=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=m+w+a,L=m+g+o,T=ef(s,s.VERTEX_SHADER,b),D=ef(s,s.FRAGMENT_SHADER,L);s.attachShader(y,T),s.attachShader(y,D),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(F){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(y)||"",j=s.getShaderInfoLog(T)||"",pt=s.getShaderInfoLog(D)||"",z=q.trim(),ut=j.trim(),dt=pt.trim(),ht=!0,yt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,D);else{let _t=sf(s,T,"vertex"),mt=sf(s,D,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+_t+`
`+mt)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(ut===""||dt==="")&&(yt=!1);yt&&(F.diagnostics={runnable:ht,programLog:z,vertexShader:{log:ut,prefix:w},fragmentShader:{log:dt,prefix:g}})}s.deleteShader(T),s.deleteShader(D),v=new Er(s,y),E=K_(s,y)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(y,z_)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=D,this}var lx=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vh(t),e.set(t,i)),i}},Vh=class{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}};function cx(n){return n===vs||n===Na||n===Fa}function hx(n,t,e,i,s,r){let a=new dr,o=new Hh,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,E,H,F,q,j){let pt=F.fog,z=q.geometry,ut=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,dt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ht=t.get(v.envMap||ut,dt),yt=d[v.type],_t=i.precision;v.precision!==null&&(_t=i.getMaxPrecision(v.precision),_t!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",_t,"instead."));let mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,It=mt!==void 0?mt.length:0,jt=0;z.morphAttributes.position!==void 0&&(jt=1),z.morphAttributes.normal!==void 0&&(jt=2),z.morphAttributes.color!==void 0&&(jt=3);let Ce,Et,Kt,nt;if(yt){let $t=Bi[yt];Ce=$t.vertexShader,Et=$t.fragmentShader}else{Ce=v.vertexShader,Et=v.fragmentShader;let $t=o.getVertexShaderStage(v),A=o.getFragmentShaderStage(v);o.update(v,$t,A),Kt=$t.id,nt=A.id}let ae=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),Pt=q.isInstancedMesh===!0,Jt=q.isBatchedMesh===!0,Ee=!!v.map,me=!!v.matcap,Xe=!!ht,le=Xe&&ht.isPMREMTexture===!0,Ke=!!v.aoMap,un=!!v.lightMap,ze=!!v.bumpMap&&v.wireframe===!1,je=!!v.normalMap,En=!!v.displacementMap,pn=!!v.emissiveMap,xn=!!v.metalnessMap,wn=!!v.roughnessMap,pe=v.anisotropy>0,X=v.clearcoat>0,ne=v.diffuseRoughness>0,sn=v.dispersion>0,ft=v.retroreflectivity>0,Nt=v.iridescence>0,Je=v.sheen>0,Ot=v.transmission>0,Se=pe&&!!v.anisotropyMap,P=X&&!!v.clearcoatMap,M=X&&!!v.clearcoatNormalMap,Y=X&&!!v.clearcoatRoughnessMap,At=ne&&!!v.diffuseRoughnessMap,tt=Nt&&!!v.iridescenceMap,Ct=Nt&&!!v.iridescenceThicknessMap,Vt=Je&&!!v.sheenColorMap,wt=Je&&!!v.sheenRoughnessMap,St=!!v.specularMap,Ht=!!v.specularColorMap,O=!!v.specularIntensityMap,Tt=Ot&&!!v.transmissionMap,xt=Ot&&!!v.thicknessMap,vt=!!v.gradientMap,Dt=!!v.alphaMap,Ut=v.alphaTest>0,ue=!!v.alphaHash,_e=!!v.extensions,zt=Ui;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(zt=n.toneMapping);let ge=le?ht.isCompressedCubeTexture?ht.image[0].mipmaps:ht.mipmaps:null,De={shaderID:yt,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:Et,defines:v.defines,customVertexShaderID:Kt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_t,batching:Jt,batchingColor:Jt&&q._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&q.instanceColor!==null,instancingMorph:Pt&&q.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:me,envMap:Xe,envMapMode:Xe&&ht.mapping,envMapPMREM:le,envMapMaxLod:le?ge.length-1:null,envMapSize:le?ge[0].width:null,aoMap:Ke,lightMap:un,bumpMap:ze,normalMap:je,displacementMap:En,emissiveMap:pn,normalMapObjectSpace:je&&v.normalMapType===wd,normalMapTangentSpace:je&&v.normalMapType===tc,packedNormalMap:je&&v.normalMapType===tc&&cx(v.normalMap.format),metalnessMap:xn,roughnessMap:wn,anisotropy:pe,anisotropyMap:Se,clearcoat:X,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:Y,diffuseRoughness:ne,diffuseRoughnessMap:At,dispersion:sn,retroreflection:ft,iridescence:Nt,iridescenceMap:tt,iridescenceThicknessMap:Ct,sheen:Je,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:St,specularColorMap:Ht,specularIntensityMap:O,transmission:Ot,transmissionMap:Tt,thicknessMap:xt,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Sr&&v.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Ut,alphaHash:ue,combine:v.combine,mapUv:Ee&&f(v.map.channel),aoMapUv:Ke&&f(v.aoMap.channel),lightMapUv:un&&f(v.lightMap.channel),bumpMapUv:ze&&f(v.bumpMap.channel),normalMapUv:je&&f(v.normalMap.channel),displacementMapUv:En&&f(v.displacementMap.channel),emissiveMapUv:pn&&f(v.emissiveMap.channel),metalnessMapUv:xn&&f(v.metalnessMap.channel),roughnessMapUv:wn&&f(v.roughnessMap.channel),anisotropyMapUv:Se&&f(v.anisotropyMap.channel),clearcoatMapUv:P&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:At&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&f(v.sheenRoughnessMap.channel),specularMapUv:St&&f(v.specularMap.channel),specularColorMapUv:Ht&&f(v.specularColorMap.channel),specularIntensityMapUv:O&&f(v.specularIntensityMap.channel),transmissionMapUv:Tt&&f(v.transmissionMap.channel),thicknessMapUv:xt&&f(v.thicknessMap.channel),alphaMapUv:Dt&&f(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(je||pe),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!z.attributes.uv&&(Ee||Dt),fog:!!pt,useFog:v.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:jt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.filter($t=>$t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===ln,decodeVideoTextureEmissive:pn&&v.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(v.emissiveMap.colorSpace)===ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===$n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function w(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let H in v.defines)E.push(H),E.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(g(E,v),m(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function m(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let E=d[v.type],H;if(E){let F=Bi[E];H=Hd.clone(F.uniforms)}else H=v.uniforms;return H}function L(v,E){let H=h.get(E);return H!==void 0?++H.usedTimes:(H=new ox(n,E,v,s),c.push(H),h.set(E,H)),H}function T(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function D(v){o.remove(v)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:w,getUniforms:b,acquireProgram:L,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:I}}function ux(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function dx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,y,w,g,m){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:y,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:m},n[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=y,b.materialVariant=a(d),b.groupOrder=w,b.renderOrder=d.renderOrder,b.z=g,b.group=m),t++,b}function l(d,f,y,w,g,m,b){b.reversedDepth===!0&&(g=-g);let L=o(d,f,y,w,g,m);y.transmission>0?i.push(L):y.transparent===!0?s.push(L):e.push(L)}function c(d,f,y,w,g,m){let b=o(d,f,y,w,g,m);y.transmission>0?i.unshift(b):y.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,f){e.length>1&&e.sort(d||dx),i.length>1&&i.sort(f||cf),s.length>1&&s.sort(f||cf)}function p(){for(let d=t,f=n.length;d<f;d++){let y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function fx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new hf,n.set(i,[a])):s>=r.length?(a=new hf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function px(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ke};break;case"SpotLight":e={position:new W,direction:new W,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ke,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":e={color:new ke,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function mx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var gx=0;function _x(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xx(n){let t=new px,e=mx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new nn,a=new nn;function o(c){let h=0,p=0,d=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let f=0,y=0,w=0,g=0,m=0,b=0,L=0,T=0,D=0,I=0,v=0,E=0,H=0,F=0;c.sort(_x);for(let j=0,pt=c.length;j<pt;j++){let z=c[j],ut=z.color,dt=z.intensity,ht=z.distance,yt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===vs?yt=z.shadow.map.texture:yt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=ut.r*dt,p+=ut.g*dt,d+=ut.b*dt;else if(z.isLightProbe){for(let _t=0;_t<9;_t++)i.probe[_t].addScaledVector(z.sh.coefficients[_t],dt);F++}else if(z.isSunLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let mt=z.shadow,It=e.get(z);It.shadowIntensity=mt.intensity,It.shadowBias=mt.bias,It.shadowNormalBias=mt.normalBias,It.shadowRadius=mt.radius,It.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),i.sunShadow[y]=It,i.sunShadowMap[y]=yt;let jt=mt.getViewportCount();for(let Ce=0;Ce<jt;Ce++)i.sunShadowMatrix[w+Ce]=mt.getMatrix(Ce),i.sunShadowCascade[w+Ce]=mt._cascadeData[Ce];w+=jt,y++}i.sun[f]=_t,f++}else if(z.isDirectionalLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let mt=z.shadow,It=e.get(z);It.shadowIntensity=mt.intensity,It.shadowBias=mt.bias,It.shadowNormalBias=mt.normalBias,It.shadowRadius=mt.radius,It.shadowMapSize=mt.mapSize,i.directionalShadow[g]=It,i.directionalShadowMap[g]=yt,i.directionalShadowMatrix[g]=z.shadow.matrix,D++}i.directional[g]=_t,g++}else if(z.isSpotLight){let _t=t.get(z);_t.position.setFromMatrixPosition(z.matrixWorld),_t.color.copy(ut).multiplyScalar(dt),_t.distance=ht,_t.coneCos=Math.cos(z.angle),_t.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),_t.decay=z.decay,i.spot[b]=_t;let mt=z.shadow;if(z.map&&(i.spotLightMap[E]=z.map,E++,mt.updateMatrices(z),z.castShadow&&H++),i.spotLightMatrix[b]=mt.matrix,z.castShadow){let It=e.get(z);It.shadowIntensity=mt.intensity,It.shadowBias=mt.bias,It.shadowNormalBias=mt.normalBias,It.shadowRadius=mt.radius,It.shadowMapSize=mt.mapSize,i.spotShadow[b]=It,i.spotShadowMap[b]=yt,v++}b++}else if(z.isRectAreaLight){let _t=t.get(z);_t.color.copy(ut).multiplyScalar(dt),_t.halfWidth.set(z.width*.5,0,0),_t.halfHeight.set(0,z.height*.5,0),i.rectArea[L]=_t,L++}else if(z.isPointLight){let _t=t.get(z);if(_t.color.copy(z.color).multiplyScalar(z.intensity),_t.distance=z.distance,_t.decay=z.decay,z.castShadow){let mt=z.shadow,It=e.get(z);It.shadowIntensity=mt.intensity,It.shadowBias=mt.bias,It.shadowNormalBias=mt.normalBias,It.shadowRadius=mt.radius,It.shadowMapSize=mt.mapSize,It.shadowCameraNear=mt.camera.near,It.shadowCameraFar=mt.camera.far,i.pointShadow[m]=It,i.pointShadowMap[m]=yt,i.pointShadowMatrix[m]=z.shadow.matrix,I++}i.point[m]=_t,m++}else if(z.isHemisphereLight){let _t=t.get(z);_t.skyColor.copy(z.color).multiplyScalar(dt),_t.groundColor.copy(z.groundColor).multiplyScalar(dt),i.hemi[T]=_t,T++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;let q=i.hash;(q.sunLength!==f||q.directionalLength!==g||q.pointLength!==m||q.spotLength!==b||q.rectAreaLength!==L||q.hemiLength!==T||q.numSunShadows!==y||q.numDirectionalShadows!==D||q.numPointShadows!==I||q.numSpotShadows!==v||q.numSpotMaps!==E||q.numLightProbes!==F)&&(i.sun.length=f,i.directional.length=g,i.spot.length=b,i.rectArea.length=L,i.point.length=m,i.hemi.length=T,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.directionalShadowMatrix.length=D,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+E-H,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=F,q.sunLength=f,q.directionalLength=g,q.pointLength=m,q.spotLength=b,q.rectAreaLength=L,q.hemiLength=T,q.numSunShadows=y,q.numDirectionalShadows=D,q.numPointShadows=I,q.numSpotShadows=v,q.numSpotMaps=E,q.numLightProbes=F,i.version=gx++)}function l(c,h){let p=0,d=0,f=0,y=0,w=0,g=0,m=h.matrixWorldInverse;for(let b=0,L=c.length;b<L;b++){let T=c[b];if(T.isSunLight){let D=i.sun[p];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(m),p++}else if(T.isDirectionalLight){let D=i.directional[d];D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),d++}else if(T.isSpotLight){let D=i.spot[y];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),y++}else if(T.isRectAreaLight){let D=i.rectArea[w];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){let D=i.point[f];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let D=i.hemi[g];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function uf(n){let t=new xx(n),e=[],i=[],s=[];function r(p){h.camera=p,e.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){i.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uf(n),t.set(s,[o])):r>=a.length?(o=new uf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`,Sx=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],bx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],df=new nn,Ua=new W,Oh=new W;function wx(n,t,e){let i=new ps,s=new de,r=new de,a=new bn,o=new Qo,l=new tl,c={},h=e.maxTextureSize,p={[ys]:$n,[$n]:ys,[pi]:pi},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:vx,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new On;y.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Rn(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let m=this.type;this.render=function(I,v,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===ed&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let H=n.getRenderTarget(),F=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Ns),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let pt=m!==this.type;pt&&v.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(ut=>ut.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,ut=I.length;z<ut;z++){let dt=I[z],ht=dt.shadow;if(ht===void 0){Ie("WebGLShadowMap:",dt,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let yt=ht.getFrameExtents();s.multiply(yt),r.copy(ht.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,ht.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,ht.mapSize.y=r.y));let _t=n.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=_t,ht.map===null||pt===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===Mr){if(dt.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new ri(s.x,s.y,{format:vs,type:Ti,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),ht.map.texture.name=dt.name+".shadowMap",ht.map.depthTexture=new Zi(s.x,s.y,mi),ht.map.depthTexture.name=dt.name+".shadowMapDepth",ht.map.depthTexture.format=Yi,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Fn,ht.map.depthTexture.magFilter=Fn}else dt.isPointLight?(ht.map=new Ba(s.x),ht.map.depthTexture=new la(s.x,wi)):(ht.map=new ri(s.x,s.y),ht.map.depthTexture=new Zi(s.x,s.y,wi)),ht.map.depthTexture.name=dt.name+".shadowMap",ht.map.depthTexture.format=Yi,this.type===Ds?(ht.map.depthTexture.compareFunction=_t?Mh:vh,ht.map.depthTexture.minFilter=Yn,ht.map.depthTexture.magFilter=Yn):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Fn,ht.map.depthTexture.magFilter=Fn);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let mt=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();dt.isPointLight!==!0&&ht.updateMatrices(dt,E);let It=(ht.camera.layers.mask&4294967294)!==0?ht.camera.layers:E.layers;for(let jt=0;jt<mt;jt++){let Ce=ht.getCamera(jt);if(dt.isPointLight){let Et=ht.camera,Kt=ht.matrix,nt=dt.distance||Et.far;nt!==Et.far&&(Et.far=nt,Et.updateProjectionMatrix()),Ua.setFromMatrixPosition(dt.matrixWorld),Et.position.copy(Ua),Oh.copy(Et.position),Oh.add(Sx[jt]),Et.up.copy(bx[jt]),Et.lookAt(Oh),Et.updateMatrixWorld(),Kt.makeTranslation(-Ua.x,-Ua.y,-Ua.z),df.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(df,Et.coordinateSystem,Et.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)n.setRenderTarget(ht.map,jt),n.clear();else{jt===0&&(n.setRenderTarget(ht.map),n.clear());let Et=ht.getViewport(jt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),j.viewport(a)}i=ht.getFrustum(jt),T(v,E,Ce,dt,It,this.type)}ht.isPointLightShadow!==!0&&this.type===Mr&&b(ht,E),ht.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(H,F,q)};function b(I,v){let E=t.update(w);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null?I.mapPass=new ri(s.x,s.y,{format:vs,type:Ti}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(v,null,E,d,w,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(v,null,E,f,w,null)}function L(I,v,E,H){let F=null,q=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(q!==void 0)F=q;else if(F=E.isPointLight===!0?l:o,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let j=F.uuid,pt=v.uuid,z=c[j];z===void 0&&(z={},c[j]=z);let ut=z[pt];ut===void 0&&(ut=F.clone(),z[pt]=ut,v.addEventListener("dispose",D)),F=ut}if(F.visible=v.visible,F.wireframe=v.wireframe,H===Mr?F.side=v.shadowSide!==null?v.shadowSide:v.side:F.side=v.shadowSide!==null?v.shadowSide:p[v.side],F.alphaMap=v.alphaMap,F.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,F.map=v.map,F.clipShadows=v.clipShadows,F.clippingPlanes=v.clippingPlanes,F.clipIntersection=v.clipIntersection,F.displacementMap=v.displacementMap,F.displacementScale=v.displacementScale,F.displacementBias=v.displacementBias,F.wireframeLinewidth=v.wireframeLinewidth,F.linewidth=v.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let j=n.properties.get(F);j.light=E}return F}function T(I,v,E,H,F,q){if(I.visible===!1)return;if(I.layers.test(F)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&q===Mr)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);let z=t.update(I),ut=I.material;if(Array.isArray(ut)){let dt=z.groups;for(let ht=0,yt=dt.length;ht<yt;ht++){let _t=dt[ht],mt=ut[_t.materialIndex];if(mt&&mt.visible){let It=L(I,mt,H,q);I.onBeforeShadow(n,I,v,E,z,It,_t),n.renderBufferDirect(E,null,z,It,I,_t),I.onAfterShadow(n,I,v,E,z,It,_t)}}}else if(ut.visible){let dt=L(I,ut,H,q);I.onBeforeShadow(n,I,v,E,z,dt,null),n.renderBufferDirect(E,null,z,dt,I,null),I.onAfterShadow(n,I,v,E,z,dt,null)}}let pt=I.children;for(let z=0,ut=pt.length;z<ut;z++)T(pt[z],v,E,H,F,q)}function D(I){I.target.removeEventListener("dispose",D);for(let E in c){let H=c[E],F=I.target.uuid;F in H&&(H[F].dispose(),delete H[F])}}}function Tx(n,t){function e(){let O=!1,Tt=new bn,xt=null,vt=new bn(0,0,0,0);return{setMask:function(Dt){xt!==Dt&&!O&&(n.colorMask(Dt,Dt,Dt,Dt),xt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,Ut,ue,_e,zt){zt===!0&&(Dt*=_e,Ut*=_e,ue*=_e),Tt.set(Dt,Ut,ue,_e),vt.equals(Tt)===!1&&(n.clearColor(Dt,Ut,ue,_e),vt.copy(Tt))},reset:function(){O=!1,xt=null,vt.set(-1,0,0,0)}}}function i(){let O=!1,Tt=!1,xt=null,vt=null,Dt=null;return{setReversed:function(Ut){if(Tt!==Ut){let ue=t.get("EXT_clip_control");Ut?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),Tt=Ut;let _e=Dt;Dt=null,this.setClear(_e)}},getReversed:function(){return Tt},setTest:function(Ut){Ut?J(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(Ut){xt!==Ut&&!O&&(n.depthMask(Ut),xt=Ut)},setFunc:function(Ut){if(Tt&&(Ut=Fd[Ut]),vt!==Ut){switch(Ut){case Co:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Io:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Lo:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case No:n.depthFunc(n.GREATER);break;case Fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Ut}},setLocked:function(Ut){O=Ut},setClear:function(Ut){Dt!==Ut&&(Dt=Ut,Tt&&(Ut=1-Ut),n.clearDepth(Ut))},reset:function(){O=!1,xt=null,vt=null,Dt=null,Tt=!1}}}function s(){let O=!1,Tt=null,xt=null,vt=null,Dt=null,Ut=null,ue=null,_e=null,zt=null;return{setTest:function(ge){O||(ge?J(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ge){Tt!==ge&&!O&&(n.stencilMask(ge),Tt=ge)},setFunc:function(ge,De,$t){(xt!==ge||vt!==De||Dt!==$t)&&(n.stencilFunc(ge,De,$t),xt=ge,vt=De,Dt=$t)},setOp:function(ge,De,$t){(Ut!==ge||ue!==De||_e!==$t)&&(n.stencilOp(ge,De,$t),Ut=ge,ue=De,_e=$t)},setLocked:function(ge){O=ge},setClear:function(ge){zt!==ge&&(n.clearStencil(ge),zt=ge)},reset:function(){O=!1,Tt=null,xt=null,vt=null,Dt=null,Ut=null,ue=null,_e=null,zt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},p={},d={},f=new WeakMap,y=[],w=null,g=!1,m=null,b=null,L=null,T=null,D=null,I=null,v=null,E=new ke(0,0,0),H=0,F=!1,q=null,j=null,pt=null,z=null,ut=null,dt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,yt=0,_t=n.getParameter(n.VERSION);_t.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(_t)[1]),ht=yt>=1):_t.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),ht=yt>=2);let mt=null,It={},jt=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Et=new bn().fromArray(jt),Kt=new bn().fromArray(Ce);function nt(O,Tt,xt,vt){let Dt=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(O,Ut),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<xt;ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Tt+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Ut}let ae={};ae[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(lr),ze(!1),je(th),J(n.CULL_FACE),Ke(Ns);function J(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Pt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Jt(O,Tt){return d[O]!==Tt?(n.bindFramebuffer(O,Tt),d[O]=Tt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Ee(O,Tt){let xt=y,vt=!1;if(O){xt=f.get(Tt),xt===void 0&&(xt=[],f.set(Tt,xt));let Dt=O.textures;if(xt.length!==Dt.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,ue=Dt.length;Ut<ue;Ut++)xt[Ut]=n.COLOR_ATTACHMENT0+Ut;xt.length=Dt.length,vt=!0}}else xt[0]!==n.BACK&&(xt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(xt)}function me(O){return w!==O?(n.useProgram(O),w=O,!0):!1}let Xe={[Fs]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};Xe[rd]=n.MIN,Xe[ad]=n.MAX;let le={[od]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[sh]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[_d]:n.ONE_MINUS_CONSTANT_COLOR,[xd]:n.CONSTANT_ALPHA,[yd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(O,Tt,xt,vt,Dt,Ut,ue,_e,zt,ge){if(O===Ns){g===!0&&(Pt(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),O!==nd){if(O!==m||ge!==F){if((b!==Fs||D!==Fs)&&(n.blendEquation(n.FUNC_ADD),b=Fs,D=Fs),ge)switch(O){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",O);break}else switch(O){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nh:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",O);break}L=null,T=null,I=null,v=null,E.set(0,0,0),H=0,m=O,F=ge}return}Dt=Dt||Tt,Ut=Ut||xt,ue=ue||vt,(Tt!==b||Dt!==D)&&(n.blendEquationSeparate(Xe[Tt],Xe[Dt]),b=Tt,D=Dt),(xt!==L||vt!==T||Ut!==I||ue!==v)&&(n.blendFuncSeparate(le[xt],le[vt],le[Ut],le[ue]),L=xt,T=vt,I=Ut,v=ue),(_e.equals(E)===!1||zt!==H)&&(n.blendColor(_e.r,_e.g,_e.b,zt),E.copy(_e),H=zt),m=O,F=!1}function un(O,Tt){O.side===pi?Pt(n.CULL_FACE):J(n.CULL_FACE);let xt=O.side===$n;Tt&&(xt=!xt),ze(xt),O.blending===Sr&&O.transparent===!1?Ke(Ns):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let vt=O.stencilWrite;o.setTest(vt),vt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){q!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),q=O)}function je(O){O!==Qu?(J(n.CULL_FACE),O!==j&&(O===th?n.cullFace(n.BACK):O===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),j=O}function En(O){O!==pt&&(ht&&n.lineWidth(O),pt=O)}function pn(O,Tt,xt){O?(J(n.POLYGON_OFFSET_FILL),(z!==Tt||ut!==xt)&&(z=Tt,ut=xt,a.getReversed()&&(Tt=-Tt,xt=-xt),n.polygonOffset(Tt,xt))):Pt(n.POLYGON_OFFSET_FILL)}function xn(O){O?J(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function wn(O){O===void 0&&(O=n.TEXTURE0+dt-1),mt!==O&&(n.activeTexture(O),mt=O)}function pe(O,Tt,xt){xt===void 0&&(mt===null?xt=n.TEXTURE0+dt-1:xt=mt);let vt=It[xt];vt===void 0&&(vt={type:void 0,texture:void 0},It[xt]=vt),(vt.type!==O||vt.texture!==Tt)&&(mt!==xt&&(n.activeTexture(xt),mt=xt),n.bindTexture(O,Tt||ae[O]),vt.type=O,vt.texture=Tt)}function X(){let O=It[mt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(O){Ne("WebGLState:",O)}}function sn(){try{n.compressedTexImage3D(...arguments)}catch(O){Ne("WebGLState:",O)}}function ft(){try{n.texSubImage2D(...arguments)}catch(O){Ne("WebGLState:",O)}}function Nt(){try{n.texSubImage3D(...arguments)}catch(O){Ne("WebGLState:",O)}}function Je(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ne("WebGLState:",O)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ne("WebGLState:",O)}}function Se(){try{n.texStorage2D(...arguments)}catch(O){Ne("WebGLState:",O)}}function P(){try{n.texStorage3D(...arguments)}catch(O){Ne("WebGLState:",O)}}function M(){try{n.texImage2D(...arguments)}catch(O){Ne("WebGLState:",O)}}function Y(){try{n.texImage3D(...arguments)}catch(O){Ne("WebGLState:",O)}}function At(O){return p[O]!==void 0?p[O]:n.getParameter(O)}function tt(O,Tt){p[O]!==Tt&&(n.pixelStorei(O,Tt),p[O]=Tt)}function Ct(O){Et.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Et.copy(O))}function Vt(O){Kt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Kt.copy(O))}function wt(O,Tt){let xt=c.get(Tt);xt===void 0&&(xt=new WeakMap,c.set(Tt,xt));let vt=xt.get(O);vt===void 0&&(vt=n.getUniformBlockIndex(Tt,O.name),n.uniformBlockBinding(Tt,vt,vt),xt.set(O,vt))}function St(O,Tt,xt){let Dt=c.get(Tt).get(O);l[Dt]!==xt&&(n.bindBufferBase(n.UNIFORM_BUFFER,Dt,xt),l[Dt]=xt)}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},mt=null,It={},d={},l={},f=new WeakMap,y=[],w=null,g=!1,m=null,b=null,L=null,T=null,D=null,I=null,v=null,E=new ke(0,0,0),H=0,F=!1,q=null,j=null,pt=null,z=null,ut=null,Et.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:Pt,bindFramebuffer:Jt,drawBuffers:Ee,useProgram:me,setBlending:Ke,setMaterial:un,setFlipSided:ze,setCullFace:je,setLineWidth:En,setPolygonOffset:pn,setScissorTest:xn,activeTexture:wn,bindTexture:pe,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:sn,texImage2D:M,texImage3D:Y,pixelStorei:tt,getParameter:At,updateUBOMapping:wt,uniformBlockBinding:St,texStorage2D:Se,texStorage3D:P,texSubImage2D:ft,texSubImage3D:Nt,compressedTexSubImage2D:Je,compressedTexSubImage3D:Ot,scissor:Ct,viewport:Vt,reset:Ht}}function Ex(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,p=new Set,d,f=new WeakMap,y=new Set,w=new FinalizationRegistry(P=>y.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return g?new OffscreenCanvas(P,M):Kr("canvas")}function b(P,M,Y){let At=1,tt=Se(P);if((tt.width>Y||tt.height>Y)&&(At=Y/Math.max(tt.width,tt.height)),At<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Ct=Math.floor(At*tt.width),Vt=Math.floor(At*tt.height);d===void 0&&(d=m(Ct,Vt));let wt=M?m(Ct,Vt):d;return wt.width=Ct,wt.height=Vt,wt.getContext("2d").drawImage(P,0,0,Ct,Vt),Ie("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Ct+"x"+Vt+")."),wt}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function L(P){return P.generateMipmaps}function T(P){n.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(P,M,Y,At,tt,Ct=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Vt;At&&(Vt=t.get("EXT_texture_norm16"),Vt||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let wt=M;if(M===n.RED&&(Y===n.FLOAT&&(wt=n.R32F),Y===n.HALF_FLOAT&&(wt=n.R16F),Y===n.UNSIGNED_BYTE&&(wt=n.R8),Y===n.UNSIGNED_SHORT&&Vt&&(wt=Vt.R16_EXT),Y===n.SHORT&&Vt&&(wt=Vt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(wt=n.R8UI),Y===n.UNSIGNED_SHORT&&(wt=n.R16UI),Y===n.UNSIGNED_INT&&(wt=n.R32UI),Y===n.BYTE&&(wt=n.R8I),Y===n.SHORT&&(wt=n.R16I),Y===n.INT&&(wt=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(wt=n.RG32F),Y===n.HALF_FLOAT&&(wt=n.RG16F),Y===n.UNSIGNED_BYTE&&(wt=n.RG8),Y===n.UNSIGNED_SHORT&&Vt&&(wt=Vt.RG16_EXT),Y===n.SHORT&&Vt&&(wt=Vt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(wt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(wt=n.RG16UI),Y===n.UNSIGNED_INT&&(wt=n.RG32UI),Y===n.BYTE&&(wt=n.RG8I),Y===n.SHORT&&(wt=n.RG16I),Y===n.INT&&(wt=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(wt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(wt=n.RGB16UI),Y===n.UNSIGNED_INT&&(wt=n.RGB32UI),Y===n.BYTE&&(wt=n.RGB8I),Y===n.SHORT&&(wt=n.RGB16I),Y===n.INT&&(wt=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(wt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(wt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(wt=n.RGBA32UI),Y===n.BYTE&&(wt=n.RGBA8I),Y===n.SHORT&&(wt=n.RGBA16I),Y===n.INT&&(wt=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_SHORT&&Vt&&(wt=Vt.RGB16_EXT),Y===n.SHORT&&Vt&&(wt=Vt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(wt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(wt=n.R11F_G11F_B10F)),M===n.RGBA){let St=Ct?$r:Qe.getTransfer(tt);Y===n.FLOAT&&(wt=n.RGBA32F),Y===n.HALF_FLOAT&&(wt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(wt=St===ln?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Vt&&(wt=Vt.RGBA16_EXT),Y===n.SHORT&&Vt&&(wt=Vt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(wt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(wt=n.RGB5_A1)}return(wt===n.R16F||wt===n.R32F||wt===n.RG16F||wt===n.RG32F||wt===n.RGBA16F||wt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function v(P,M){let Y;return P?M===null||M===wi||M===Os?Y=n.DEPTH24_STENCIL8:M===mi?Y=n.DEPTH32F_STENCIL8:M===wr&&(Y=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===Os?Y=n.DEPTH_COMPONENT24:M===mi?Y=n.DEPTH_COMPONENT32F:M===wr&&(Y=n.DEPTH_COMPONENT16),Y}function E(P,M){return L(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==Yn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function H(P){let M=new WeakRef(P);i.get(P).__ref=M,y.add(M),w.register(P,M,M)}function F(P){let M=i.get(P).__ref;M!==void 0&&(y.delete(M),w.unregister(M))}function q(P){pt(P.target)}function j(P){z(P.target)}function pt(P){P.removeEventListener("dispose",q),F(P),dt(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function z(P){P.removeEventListener("dispose",j),F(P),yt(P)}function ut(){for(let P of y){let M=P.deref();M!==void 0&&(M.isRenderTarget===!0?z(M):pt(M))}y.clear(),p.clear()}function dt(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,At=f.get(Y);if(At){let tt=At[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&ht(P),Object.keys(At).length===0&&f.delete(Y)}i.remove(P)}function ht(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,At=f.get(Y);delete At[M.__cacheKey],a.memory.textures--}function yt(P){let M=i.get(P);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Y=P.depthTexture;if(Y&&Y.renderTarget===P&&pt(Y),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let Ct=0;Ct<M.__webglFramebuffer[tt].length;Ct++)n.deleteFramebuffer(M.__webglFramebuffer[tt][Ct]);else n.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[tt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let At=P.textures;for(let tt=0,Ct=At.length;tt<Ct;tt++){let Vt=i.get(At[tt]);Vt.__webglTexture&&(n.deleteTexture(Vt.__webglTexture),a.memory.textures--),i.remove(At[tt])}i.remove(P)}let _t=0;function mt(){_t=0}function It(){return _t}function jt(P){_t=P}function Ce(){let P=_t;return P>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),_t+=1,P}function Et(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Kt(P,M){let Y=i.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let At=P.image;if(At===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(At.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{un(Y,P,M);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function nt(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){un(Y,P,M);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function ae(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){un(Y,P,M);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function J(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ze(Y,P,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let Pt={[Uo]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},Jt={[Fn]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ee={[Ed]:n.NEVER,[Sh]:n.ALWAYS,[Ad]:n.LESS,[vh]:n.LEQUAL,[Rd]:n.EQUAL,[Mh]:n.GEQUAL,[Cd]:n.GREATER,[Pd]:n.NOTEQUAL};function me(P,M){if(M.type===mi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Yn||M.magFilter===gl||M.magFilter===Ca||M.magFilter===$i||M.minFilter===Yn||M.minFilter===gl||M.minFilter===Ca||M.minFilter===$i)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Pt[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Pt[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Pt[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Jt[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Jt[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==Ca&&M.minFilter!==$i||M.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",q),H(M));let At=M.source,tt=f.get(At);tt===void 0&&(tt={},f.set(At,tt));let Ct=Et(M);if(Ct!==P.__cacheKey){tt[Ct]===void 0&&(tt[Ct]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),tt[Ct].usedTimes++;let Vt=tt[P.__cacheKey];Vt!==void 0&&(tt[P.__cacheKey].usedTimes--,Vt.usedTimes===0&&ht(M)),P.__cacheKey=Ct,P.__webglTexture=tt[Ct].texture}return Y}function le(P,M,Y){return Math.floor(Math.floor(P/Y)/M)}function Ke(P,M,Y,At){let Ct=P.updateRanges;if(Ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,At,M.data);else{Ct.sort((O,Tt)=>O.start-Tt.start);let Vt=0;for(let O=1;O<Ct.length;O++){let Tt=Ct[Vt],xt=Ct[O],vt=Tt.start+Tt.count,Dt=le(xt.start,M.width,4),Ut=le(Tt.start,M.width,4);xt.start<=vt+1&&Dt===Ut&&le(xt.start+xt.count-1,M.width,4)===Dt?Tt.count=Math.max(Tt.count,xt.start+xt.count-Tt.start):(++Vt,Ct[Vt]=xt)}Ct.length=Vt+1;let wt=e.getParameter(n.UNPACK_ROW_LENGTH),St=e.getParameter(n.UNPACK_SKIP_PIXELS),Ht=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let O=0,Tt=Ct.length;O<Tt;O++){let xt=Ct[O],vt=Math.floor(xt.start/4),Dt=Math.ceil(xt.count/4),Ut=vt%M.width,ue=Math.floor(vt/M.width),_e=Dt,zt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,ue),e.texSubImage2D(n.TEXTURE_2D,0,Ut,ue,_e,zt,Y,At,M.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,wt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ht)}}function un(P,M,Y){let At=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(At=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(At=n.TEXTURE_3D);let tt=Xe(P,M),Ct=M.source;e.bindTexture(At,P.__webglTexture,n.TEXTURE0+Y);let Vt=i.get(Ct);if(Ct.version!==Vt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let zt=Qe.getPrimaries(Qe.workingColorSpace),ge=M.colorSpace===ji?null:Qe.getPrimaries(M.colorSpace),De=M.colorSpace===ji||zt===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let St=b(M.image,!1,s.maxTextureSize);St=Ot(M,St);let Ht=r.convert(M.format,M.colorSpace),O=r.convert(M.type),Tt=I(M.internalFormat,Ht,O,M.normalized,M.colorSpace,M.isVideoTexture);me(At,M);let xt,vt=M.mipmaps,Dt=M.isVideoTexture!==!0,Ut=Vt.__version===void 0||tt===!0,ue=Ct.dataReady,_e=E(M,St);if(M.isDepthTexture)Tt=v(M.format===Ki,M.type),Ut&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Tt,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,Tt,St.width,St.height,0,Ht,O,null));else if(M.isDataTexture)if(vt.length>0){Dt&&Ut&&e.texStorage2D(n.TEXTURE_2D,_e,Tt,vt[0].width,vt[0].height);for(let zt=0,ge=vt.length;zt<ge;zt++)xt=vt[zt],Dt?ue&&e.texSubImage2D(n.TEXTURE_2D,zt,0,0,xt.width,xt.height,Ht,O,xt.data):e.texImage2D(n.TEXTURE_2D,zt,Tt,xt.width,xt.height,0,Ht,O,xt.data);M.generateMipmaps=!1}else Dt?(Ut&&e.texStorage2D(n.TEXTURE_2D,_e,Tt,St.width,St.height),ue&&Ke(M,St,Ht,O)):e.texImage2D(n.TEXTURE_2D,0,Tt,St.width,St.height,0,Ht,O,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Tt,vt[0].width,vt[0].height,St.depth);for(let zt=0,ge=vt.length;zt<ge;zt++)if(xt=vt[zt],M.format!==Ei)if(Ht!==null)if(Dt){if(ue)if(M.layerUpdates.size>0){let De=Ph(xt.width,xt.height,M.format,M.type);for(let $t of M.layerUpdates){let A=xt.data.subarray($t*De/xt.data.BYTES_PER_ELEMENT,($t+1)*De/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,zt,0,0,$t,xt.width,xt.height,1,Ht,A)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,zt,0,0,0,xt.width,xt.height,St.depth,Ht,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,zt,Tt,xt.width,xt.height,St.depth,0,xt.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?ue&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,zt,0,0,0,xt.width,xt.height,St.depth,Ht,O,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,zt,Tt,xt.width,xt.height,St.depth,0,Ht,O,xt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Dt&&Ut&&e.texStorage2D(n.TEXTURE_2D,_e,Tt,vt[0].width,vt[0].height);for(let zt=0,ge=vt.length;zt<ge;zt++)xt=vt[zt],M.format!==Ei?Ht!==null?Dt?ue&&e.compressedTexSubImage2D(n.TEXTURE_2D,zt,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,zt,Tt,xt.width,xt.height,0,xt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?ue&&e.texSubImage2D(n.TEXTURE_2D,zt,0,0,xt.width,xt.height,Ht,O,xt.data):e.texImage2D(n.TEXTURE_2D,zt,Tt,xt.width,xt.height,0,Ht,O,xt.data)}else if(M.isDataArrayTexture)if(Dt){if(Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Tt,St.width,St.height,St.depth),ue)if(M.layerUpdates.size>0){let zt=Ph(St.width,St.height,M.format,M.type);for(let ge of M.layerUpdates){let De=St.data.subarray(ge*zt/St.data.BYTES_PER_ELEMENT,(ge+1)*zt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,St.width,St.height,1,Ht,O,De)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ht,O,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,St.width,St.height,St.depth,0,Ht,O,St.data);else if(M.isData3DTexture)Dt?(Ut&&e.texStorage3D(n.TEXTURE_3D,_e,Tt,St.width,St.height,St.depth),ue&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ht,O,St.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,St.width,St.height,St.depth,0,Ht,O,St.data);else if(M.isFramebufferTexture){if(Ut)if(Dt)e.texStorage2D(n.TEXTURE_2D,_e,Tt,St.width,St.height);else{let zt=St.width,ge=St.height;for(let De=0;De<_e;De++)e.texImage2D(n.TEXTURE_2D,De,Tt,zt,ge,0,Ht,O,null),zt>>=1,ge>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let zt=n.canvas;if(zt.hasAttribute("layoutsubtree")||zt.setAttribute("layoutsubtree","true"),St.parentNode!==zt){zt.appendChild(St),p.add(M),zt.onpaint=ge=>{let De=ge.changedElements;for(let $t of p)De.includes($t.image)&&($t.needsUpdate=!0)},zt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,St);else{let De=n.RGBA,$t=n.RGBA,A=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,$t,A,St)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(vt.length>0){if(Dt&&Ut){let zt=Se(vt[0]);e.texStorage2D(n.TEXTURE_2D,_e,Tt,zt.width,zt.height)}for(let zt=0,ge=vt.length;zt<ge;zt++)xt=vt[zt],Dt?ue&&e.texSubImage2D(n.TEXTURE_2D,zt,0,0,Ht,O,xt):e.texImage2D(n.TEXTURE_2D,zt,Tt,Ht,O,xt);M.generateMipmaps=!1}else if(Dt){if(Ut){let zt=Se(St);e.texStorage2D(n.TEXTURE_2D,_e,Tt,zt.width,zt.height)}ue&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,O,St)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Ht,O,St);L(M)&&M.mipmapsAutoUpdate===!0&&T(At),Vt.__version=Ct.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ze(P,M,Y){if(M.image.length!==6)return;let At=Xe(P,M),tt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let Ct=i.get(tt);if(tt.version!==Ct.__version||At===!0){e.activeTexture(n.TEXTURE0+Y);let Vt=Qe.getPrimaries(Qe.workingColorSpace),wt=M.colorSpace===ji?null:Qe.getPrimaries(M.colorSpace),St=M.colorSpace===ji||Vt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,O=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let $t=0;$t<6;$t++)!Ht&&!O?Tt[$t]=b(M.image[$t],!0,s.maxCubemapSize):Tt[$t]=O?M.image[$t].image:M.image[$t],Tt[$t]=Ot(M,Tt[$t]);let xt=Tt[0],vt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),Ut=I(M.internalFormat,vt,Dt,M.normalized,M.colorSpace),ue=M.isVideoTexture!==!0,_e=Ct.__version===void 0||At===!0,zt=tt.dataReady,ge=E(M,xt);me(n.TEXTURE_CUBE_MAP,M);let De;if(M.isDepthTexture){if(Ut=v(M.format===Ki,M.type),_e)if(ue)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ut,xt.width,xt.height);else for(let $t=0;$t<6;$t++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Ut,xt.width,xt.height,0,vt,Dt,null)}else if(Ht){ue&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ut,xt.width,xt.height);for(let $t=0;$t<6;$t++){De=Tt[$t].mipmaps;for(let A=0;A<De.length;A++){let x=De[A];M.format!==Ei?vt!==null?ue?zt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A,0,0,x.width,x.height,vt,x.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A,Ut,x.width,x.height,0,x.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?zt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A,0,0,x.width,x.height,vt,Dt,x.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A,Ut,x.width,x.height,0,vt,Dt,x.data)}}}else{if(De=M.mipmaps,ue&&_e){De.length>0&&ge++;let $t=Se(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ut,$t.width,$t.height)}for(let $t=0;$t<6;$t++)if(O){ue?zt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,Tt[$t].width,Tt[$t].height,vt,Dt,Tt[$t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Ut,Tt[$t].width,Tt[$t].height,0,vt,Dt,Tt[$t].data);for(let A=0;A<De.length;A++){let U=De[A].image[$t].image;ue?zt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A+1,0,0,U.width,U.height,vt,Dt,U.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A+1,Ut,U.width,U.height,0,vt,Dt,U.data)}}else{ue?zt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,0,0,vt,Dt,Tt[$t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0,Ut,vt,Dt,Tt[$t]);for(let A=0;A<De.length;A++){let x=De[A];ue?zt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A+1,0,0,vt,Dt,x.image[$t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$t,A+1,Ut,vt,Dt,x.image[$t])}}}L(M)&&M.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),Ct.__version=tt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function je(P,M,Y,At,tt,Ct){let Vt=r.convert(Y.format,Y.colorSpace),wt=r.convert(Y.type),St=I(Y.internalFormat,Vt,wt,Y.normalized,Y.colorSpace),Ht=i.get(M),O=i.get(Y);if(O.__renderTarget=M,!Ht.__hasExternalTextures){let Tt=Math.max(1,M.width>>Ct),xt=Math.max(1,M.height>>Ct);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Ct,St,Tt,xt,M.depth,0,Vt,wt,null):e.texImage2D(tt,Ct,St,Tt,xt,0,Vt,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,tt,O.__webglTexture,0,ft(M)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,At,tt,O.__webglTexture,Ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function En(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let At=M.depthTexture,tt=At&&At.isDepthTexture?At.type:null,Ct=v(M.stencilBuffer,tt),Vt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Nt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(M),Ct,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(M),Ct,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Vt,n.RENDERBUFFER,P)}else{let At=M.textures;for(let tt=0;tt<At.length;tt++){let Ct=At[tt],Vt=r.convert(Ct.format,Ct.colorSpace),wt=r.convert(Ct.type),St=I(Ct.internalFormat,Vt,wt,Ct.normalized,Ct.colorSpace);Nt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(M),St,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(M),St,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,St,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pn(P,M,Y){let At=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(M.depthTexture);tt.__renderTarget=M;let Ct=At?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||Ct.width!==M.width||Ct.height!==M.height)&&(Ct.width=M.width,Ct.height=M.height,M.depthTexture.needsUpdate=!0),At?J(M.depthTexture,0):Kt(M.depthTexture,0);let Vt=tt.__webglTexture,wt=ft(M),St=At?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,Ht=M.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yi)Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ht,St,Vt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Ht,St,Vt,0);else if(M.depthTexture.format===Ki)Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ht,St,Vt,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Ht,St,Vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xn(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let At=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),At){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,At.removeEventListener("dispose",tt)};At.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=At}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let At=0;At<6;At++)pn(M.__webglFramebuffer[At],P,At);else P.texture.mipmaps.length>0?pn(M.__webglFramebuffer[0],P,0):pn(M.__webglFramebuffer,P,0);else if(Y){M.__webglDepthbuffer=[];for(let At=0;At<6;At++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[At]),M.__webglDepthbuffer[At]===void 0)M.__webglDepthbuffer[At]=n.createRenderbuffer(),En(M.__webglDepthbuffer[At],P,!1);else{let tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer[At];n.bindRenderbuffer(n.RENDERBUFFER,Ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Ct)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),En(M.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function wn(P,M,Y){let At=i.get(P);M!==void 0&&je(At.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&xn(P)}function pe(P){let M=P.texture,Y=i.get(P),At=i.get(M);P.addEventListener("dispose",j),H(P);let tt=P.textures,Ct=P.isWebGLCubeRenderTarget===!0,Vt=tt.length>1;if(Vt||(At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture()),At.__version=M.version,a.memory.textures++),Ct){Y.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(M.mipmaps.length>0){Y.__webglFramebuffer[wt]=[];for(let St=0;St<M.mipmaps.length;St++)Y.__webglFramebuffer[wt][St]=n.createFramebuffer()}else Y.__webglFramebuffer[wt]=n.createFramebuffer()}else{if(M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let wt=0;wt<M.mipmaps.length;wt++)Y.__webglFramebuffer[wt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Vt)for(let wt=0,St=tt.length;wt<St;wt++){let Ht=i.get(tt[wt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Nt(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let wt=0;wt<tt.length;wt++){let St=tt[wt];Y.__webglColorRenderbuffer[wt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt]);let Ht=r.convert(St.format,St.colorSpace),O=r.convert(St.type),Tt=I(St.internalFormat,Ht,O,St.normalized,St.colorSpace,P.isXRRenderTarget===!0),xt=ft(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Tt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),En(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(n.TEXTURE_CUBE_MAP,At.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let wt=0;wt<6;wt++)if(M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)je(Y.__webglFramebuffer[wt][St],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,St);else je(Y.__webglFramebuffer[wt],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);L(M)?T(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(Vt){for(let wt=0,St=tt.length;wt<St;wt++){let Ht=tt[wt],O=i.get(Ht),Tt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Tt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,O.__webglTexture),me(Tt,Ht),je(Y.__webglFramebuffer,P,Ht,n.COLOR_ATTACHMENT0+wt,Tt,0),L(Ht)&&T(Tt)}e.unbindTexture()}else{let wt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,At.__webglTexture),me(wt,M),M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)je(Y.__webglFramebuffer[St],P,M,n.COLOR_ATTACHMENT0,wt,St);else je(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,wt,0);L(M)?T(wt):M.mipmaps.length>0&&n.texParameteri(wt,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&xn(P)}function X(P){let M=P.textures;for(let Y=0,At=M.length;Y<At;Y++){let tt=M[Y];if(L(tt)&&tt.mipmapsAutoUpdate===!0){let Ct=D(P),Vt=i.get(tt).__webglTexture;e.bindTexture(Ct,Vt),T(Ct),e.unbindTexture()}}}let ne=[];function sn(P){if(P.samples>0){if(Nt(P)===!1){let M=P.textures,Y=P.width,At=P.height,tt=n.COLOR_BUFFER_BIT,Ct=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=i.get(P),wt=M.length>1;if(wt)for(let Ht=0;Ht<M.length;Ht++)e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ht=0;Ht<M.length;Ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),wt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ht]);let O=i.get(M[Ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,Y,At,0,0,Y,At,tt,n.NEAREST),l===!0&&(ne.length=0,ne.push(n.COLOR_ATTACHMENT0+Ht),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&ne.push(Ct),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),wt)for(let Ht=0;Ht<M.length;Ht++){e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ht]);let O=i.get(M[Ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ht,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ft(P){return Math.min(s.maxSamples,P.samples)}function Nt(P){let M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Je(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Ot(P,M){let Y=P.colorSpace,At=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Zr&&Y!==ji&&(Qe.getTransfer(Y)===ln?(At!==Ei||tt!==Jn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Y)),M}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=mt,this.getTextureUnits=It,this.setTextureUnits=jt,this.setTexture2D=Kt,this.setTexture2DArray=nt,this.setTexture3D=ae,this.setTextureCube=J,this.rebindTextures=wn,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=xn,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Nt,this.dispose=ut}function Ax(n,t){function e(i,s=ji){let r,a=Qe.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===yh)return n.RGB;if(i===Ei)return n.RGBA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===vl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===vs)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===Pa||i===Ia||i===La||i===Da)if(a===ln)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===El||i===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Na||i===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Cl)return a===ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nl||i===Fl||i===Ul||i===Ol||i===Bl||i===kl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===$l||i===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return a===ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Jl||i===Fa||i===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Fi({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends Ii{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,y=null,w=typeof XRWebGLBinding<"u",g=new Wh,m={},b=e.getContextAttributes(),L=null,T=null,D=[],I=[],v=new de,E=null,H=null,F=new qn;F.viewport=new bn;let q=new qn;q.viewport=new bn;let j=[F,q],pt=new dl,z=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Et){let Kt=D[Et];return Kt===void 0&&(Kt=new fr,D[Et]=Kt),Kt.getTargetRaySpace()},this.getControllerGrip=function(Et){let Kt=D[Et];return Kt===void 0&&(Kt=new fr,D[Et]=Kt),Kt.getGripSpace()},this.getHand=function(Et){let Kt=D[Et];return Kt===void 0&&(Kt=new fr,D[Et]=Kt),Kt.getHandSpace()};function dt(Et){let Kt=I.indexOf(Et.inputSource);if(Kt===-1)return;let nt=D[Kt];nt!==void 0&&(nt.update(Et.inputSource,Et.frame,c||a),nt.dispatchEvent({type:Et.type,data:Et.inputSource}))}function ht(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",yt);for(let Et=0;Et<D.length;Et++){let Kt=I[Et];Kt!==null&&(I[Et]=null,D[Et].disconnect(Kt))}z=null,ut=null,g.reset();for(let Et in m)delete m[Et];if(t.setRenderTarget(L),f=null,d=null,p=null,s=null,T=null,Ce.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),H!==null){let Et=H.camera;Et.fov=H.fov,Et.zoom=H.zoom,Et.updateProjectionMatrix(),H=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Et){r=Et,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Et){o=Et,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Et){c=Et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Et){if(s=Et,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",yt),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ae=null,J=null;b.depth&&(J=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?Ki:Yi,ae=b.stencil?Os:wi);let Pt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ri(d.textureWidth,d.textureHeight,{format:Ei,type:Jn,depthTexture:new Zi(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let nt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ri(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function yt(Et){for(let Kt=0;Kt<Et.removed.length;Kt++){let nt=Et.removed[Kt],ae=I.indexOf(nt);ae>=0&&(I[ae]=null,D[ae].disconnect(nt))}for(let Kt=0;Kt<Et.added.length;Kt++){let nt=Et.added[Kt],ae=I.indexOf(nt);if(ae===-1){for(let Pt=0;Pt<D.length;Pt++)if(Pt>=I.length){I.push(nt),ae=Pt;break}else if(I[Pt]===null){I[Pt]=nt,ae=Pt;break}if(ae===-1)break}let J=D[ae];J&&J.connect(nt)}}function _t(Et,Kt){Kt===null?Et.matrixWorld.copy(Et.matrix):Et.matrixWorld.multiplyMatrices(Kt.matrixWorld,Et.matrix),Et.matrixWorldInverse.copy(Et.matrixWorld).invert()}this.updateCamera=function(Et){if(s===null)return;let Kt=Et.near,nt=Et.far;g.texture!==null&&(g.depthNear>0&&(Kt=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),pt.near=q.near=F.near=Kt,pt.far=q.far=F.far=nt,(z!==pt.near||ut!==pt.far)&&(s.updateRenderState({depthNear:pt.near,depthFar:pt.far}),z=pt.near,ut=pt.far),pt.layers.mask=Et.layers.mask|6,F.layers.mask=pt.layers.mask&-5,q.layers.mask=pt.layers.mask&-3;let ae=Et.parent,J=pt.cameras;_t(pt,ae);for(let Pt=0;Pt<J.length;Pt++)_t(J[Pt],ae);pt.projectionMatrix.copy(F.projectionMatrix),pt.projectionMatrixInverse.copy(F.projectionMatrixInverse),H===null&&Et.isPerspectiveCamera&&(H={camera:Et,fov:Et.fov,zoom:Et.zoom}),mt(Et,pt,ae)};function mt(Et,Kt,nt){nt===null?Et.matrix.copy(Kt.matrixWorld):(Et.matrix.copy(nt.matrixWorld),Et.matrix.invert(),Et.matrix.multiply(Kt.matrixWorld)),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.updateMatrixWorld(!0),Et.projectionMatrix.copy(Kt.projectionMatrix),Et.projectionMatrixInverse.copy(Kt.projectionMatrixInverse),Et.isPerspectiveCamera&&(Et.fov=ko*2*Math.atan(1/Et.projectionMatrix.elements[5]),Et.zoom=1)}this.getCamera=function(){return pt},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Et){l=Et,d!==null&&(d.fixedFoveation=Et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(pt)},this.getCameraTexture=function(Et){return m[Et]};let It=null;function jt(Et,Kt){if(h=Kt.getViewerPose(c||a),y=Kt,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let ae=!1;nt.length!==pt.cameras.length&&(pt.cameras.length=0,ae=!0);for(let Ee=0;Ee<nt.length;Ee++){let me=nt[Ee],Xe=null;if(f!==null)Xe=f.getViewport(me);else{let Ke=p.getViewSubImage(d,me);Xe=Ke.viewport,Ee===0&&(t.setRenderTargetTextures(T,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(T))}let le=j[Ee];le===void 0&&(le=new qn,le.layers.enable(Ee),le.viewport=new bn,j[Ee]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(pt.matrix.copy(le.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale)),ae===!0&&pt.cameras.push(le)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=i.getBinding();let Ee=p.getDepthInformation(nt[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,s.renderState)}if(J&&J.includes("camera-access")&&w){t.state.unbindTexture(),p=i.getBinding();for(let Ee=0;Ee<nt.length;Ee++){let me=nt[Ee].camera;if(me){let Xe=m[me];Xe||(Xe=new ca,m[me]=Xe);let le=p.getCameraImage(me);Xe.sourceTexture=le}}}}for(let nt=0;nt<D.length;nt++){let ae=I[nt],J=D[nt];ae!==null&&J!==void 0&&J.update(ae,Kt,c||a)}It&&It(Et,Kt),Kt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Kt}),y=null}let Ce=new ff;Ce.setAnimationLoop(jt),this.setAnimationLoop=function(Et){It=Et},this.dispose=function(){}}},Px=new nn,bf=new Be;bf.set(-1,0,0,0,1,0,0,0,1);function Ix(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ah(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,L,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),w(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,L):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),L=b.envMap,T=b.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,L){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=L*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(n,t,e,i){let s={},r={};function a(b,L){let T=L.program;i.uniformBlockBinding(b,T,s[b.id])}function o(b,L){let T=s[b.id];T===void 0&&(y(b),T=l(b),s[b.id]=T,b.addEventListener("dispose",g));let D=L.program;i.updateUBOMapping(b,D);let I=t.render.frame;r[b.id]!==I&&(c(b),r[b.id]=I)}function l(b){let L=n.createBuffer(),T=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),L}function c(b){let L=s[b.id],T=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let I=0,v=T.length;I<v;I++){let E=T[I];if(Array.isArray(E))for(let H=0,F=E.length;H<F;H++)h(E[H],I,H,D);else h(E,I,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,L,T,D){if(d(b,L,T,D)===!0){let I=b.__offset,v=b.value;if(Array.isArray(v)){let E=0;for(let H=0;H<v.length;H++){let F=v[H],q=w(F,!0);p(F,b.__data,E),E+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,b.__data)}}function p(b,L,T){typeof b=="number"||typeof b=="boolean"?L[T]=b:b.isMatrix3?(L[T]=b.elements[0],L[T+1]=b.elements[1],L[T+2]=b.elements[2],L[T+3]=0,L[T+4]=b.elements[3],L[T+5]=b.elements[4],L[T+6]=b.elements[5],L[T+7]=0,L[T+8]=b.elements[6],L[T+9]=b.elements[7],L[T+10]=b.elements[8],L[T+11]=0):ArrayBuffer.isView(b)?L.set(b.subarray(0,L.length-T),T):b.toArray(L,T)}function d(b,L,T,D){let I=b.value,v=L+"_"+T;if(Array.isArray(I)){D[v]===void 0&&(D[v]=[]);let E=D[v],H=!1;for(let F=0;F<I.length;F++)f(I[F],E,F)===!0&&(H=!0);return H}return f(I,D,v)}function f(b,L,T){if(L[T]===void 0)return typeof b=="number"||typeof b=="boolean"?L[T]=b:ArrayBuffer.isView(b)?L[T]=b.slice():L[T]=b.clone(),!0;{let D=L[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return L[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(D.equals(b)===!1)return D.copy(b),!0}}return!1}function y(b){let L=b.uniforms,T=0,D=16;for(let v=0,E=L.length;v<E;v++){let H=Array.isArray(L[v])?L[v]:[L[v]];for(let F=0,q=H.length;F<q;F++){let j=H[F],pt=Array.isArray(j.value)?j.value:[j.value],z=Array.isArray(L[v])||Array.isArray(j.value),ut=T;for(let ht=0,yt=pt.length;ht<yt;ht++){let _t=pt[ht],mt=w(_t,z),It=T%D,jt=It%mt.boundary,Ce=It+jt;T+=jt,Ce!==0&&D-Ce<mt.storage&&(T+=D-Ce),ht===0&&(ut=T),T+=mt.storage}let dt=j.type==="int"?Int32Array:j.type==="uint"?Uint32Array:Float32Array;j.__data=new dt((T-ut)/Float32Array.BYTES_PER_ELEMENT),j.__offset=ut}}let I=T%D;return I>0&&(T+=D-I),b.__size=T,b.__cache={},this}function w(b,L){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=16,T.storage=48):b.isMatrix4?(T.boundary=16,T.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),L===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function g(b){let L=b.target;L.removeEventListener("dispose",g),n.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function Nx(){return Oi===null&&(Oi=new na(Dx,16,16,vs,Ti),Oi.name="DFG_LUT",Oi.minFilter=Yn,Oi.magFilter=Yn,Oi.wrapS=Pi,Oi.wrapT=Pi,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var sc=class{constructor(t={}){let{canvas:e=Ld(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Jn}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;let w=f,g=new Set([bl,Sl,Ml]),m=new Set([Jn,wi,wr,Os,xl,yl]),b=new Uint32Array(4),L=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},D=null,I=null,v=[],E=[],H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,q=!1,j=null,pt=null,z=null,ut=null;this._outputColorSpace=Xn;let dt=0,ht=0,yt=null,_t=-1,mt=null,It=new bn,jt=new bn,Ce=null,Et=new ke(0),Kt=0,nt=e.width,ae=e.height,J=1,Pt=null,Jt=null,Ee=new bn(0,0,nt,ae),me=new bn(0,0,nt,ae),Xe=!1,le=new ps,Ke=new Vo,un=!1,ze=!1,je=new nn,En=new W,pn=new bn,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wn=!1;function pe(){return yt===null?J:1}let X=i;function ne(S,k){return e.getContext(S,k)}let sn,ft,Nt,Je,Ot,Se,P,M,Y,At,tt,Ct,Vt,wt,St,Ht,O,Tt,xt,vt,Dt,Ut,ue;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",$t,!1),X===null){let k="webgl2";if(X=ne(k,S),X===null)throw ne(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(S){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),Ne("WebGLRenderer: "+S.message),S}function _e(){sn=new Xg(X),sn.init(),Dt=new Ax(X,sn),ft=new Ng(X,sn,t,Dt),Nt=new Tx(X,sn),ft.reversedDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),pt=X.createFramebuffer(),z=X.createFramebuffer(),ut=X.createFramebuffer(),Je=new Zg(X),Ot=new ux,Se=new Ex(X,sn,Nt,Ot,ft,Dt,Je),P=new Wg(F),M=new Kp(X),Ut=new Lg(X,M),Y=new qg(X,M,Je,Ut),At=new Kg(X,Y,M,Ut,Je),Tt=new $g(X,ft,Se),St=new Fg(Ot),tt=new hx(F,P,sn,ft,Ut,St),Ct=new Ix(F,Ot),Vt=new fx,wt=new yx(sn),O=new Ig(F,P,Nt,At,y,l),Ht=new wx(F,At,ft),ue=new Lx(X,Je,ft,Nt),xt=new Dg(X,sn,Je),vt=new Yg(X,sn,Je),Je.programs=tt.programs,F.capabilities=ft,F.extensions=sn,F.properties=Ot,F.renderLists=Vt,F.shadowMap=Ht,F.state=Nt,F.info=Je}w!==Jn&&(H=new Jg(w,e.width,e.height,o,s,r));let zt=new Xh(F,X);this.xr=zt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let S=sn.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=sn.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(nt,ae,!1))},this.getSize=function(S){return S.set(nt,ae)},this.setSize=function(S,k,rt=!0){if(zt.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=S,ae=k,e.width=Math.floor(S*J),e.height=Math.floor(k*J),rt===!0&&(e.style.width=S+"px",e.style.height=k+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(nt*J,ae*J).floor()},this.setDrawingBufferSize=function(S,k,rt){nt=S,ae=k,J=rt,e.width=Math.floor(S*rt),e.height=Math.floor(k*rt),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(w===Jn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(It)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,k,rt,K){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,k,rt,K),Nt.viewport(It.copy(Ee).multiplyScalar(pe()).round())},this.getScissor=function(S){return S.copy(me)},this.setScissor=function(S,k,rt,K){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,k,rt,K),Nt.scissor(jt.copy(me).multiplyScalar(pe()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(S){Nt.setScissorTest(Xe=S)},this.setOpaqueSort=function(S){Pt=S},this.setTransparentSort=function(S){Jt=S},this.getClearColor=function(S){return S.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,rt=!0){let K=0;if(S){let Q=!1;if(yt!==null){let Xt=yt.texture.format;Q=g.has(Xt)}if(Q){let Xt=yt.texture.type,ie=m.has(Xt),Bt=O.getClearColor(),qt=O.getClearAlpha(),se=Bt.r,Re=Bt.g,ye=Bt.b;ie?(b[0]=se,b[1]=Re,b[2]=ye,b[3]=qt,X.clearBufferuiv(X.COLOR,0,b)):(L[0]=se,L[1]=Re,L[2]=ye,L[3]=qt,X.clearBufferiv(X.COLOR,0,L))}else K|=X.COLOR_BUFFER_BIT}k&&(K|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),j=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),O.dispose(),Vt.dispose(),wt.dispose(),Se.dispose(),Ot.dispose(),P.dispose(),At.dispose(),Y.dispose(),Ut.dispose(),ue.dispose(),tt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",B),zt.removeEventListener("sessionend",G),ct.stop()};function ge(S){S.preventDefault(),wh("WebGLRenderer: Context Lost."),q=!0}function De(){wh("WebGLRenderer: Context Restored."),q=!1;let S=Je.autoReset,k=Ht.enabled,rt=Ht.autoUpdate,K=Ht.needsUpdate,Q=Ht.type;_e(),Je.autoReset=S,Ht.enabled=k,Ht.autoUpdate=rt,Ht.needsUpdate=K,Ht.type=Q}function $t(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function A(S){let k=S.target;k.removeEventListener("dispose",A),x(k)}function x(S){U(S),Ot.remove(S)}function U(S){let k=Ot.get(S).programs;k!==void 0&&(k.forEach(function(rt){tt.releaseProgram(rt)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,rt,K,Q,Xt){k===null&&(k=xn);let ie=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Bt=te(S,k,rt,K,Q);Nt.setMaterial(K,ie);let qt=rt.index,se=1;if(K.wireframe===!0){if(qt=Y.getWireframeAttribute(rt),qt===void 0)return;se=2}let Re=rt.drawRange,ye=rt.attributes.position,Qt=Re.start*se,Ge=(Re.start+Re.count)*se;Xt!==null&&(Qt=Math.max(Qt,Xt.start*se),Ge=Math.min(Ge,(Xt.start+Xt.count)*se)),qt!==null?(Qt=Math.max(Qt,0),Ge=Math.min(Ge,qt.count)):ye!=null&&(Qt=Math.max(Qt,0),Ge=Math.min(Ge,ye.count));let mn=Ge-Qt;if(mn<0||mn===1/0)return;Ut.setup(Q,K,Bt,rt,qt);let C,N=xt;if(qt!==null&&(C=M.get(qt),N=vt,N.setIndex(C)),Q.isMesh)K.wireframe===!0?(Nt.setLineWidth(K.wireframeLinewidth*pe()),N.setMode(X.LINES)):N.setMode(X.TRIANGLES);else if(Q.isLine){let et=K.linewidth;et===void 0&&(et=1),Nt.setLineWidth(et*pe()),Q.isLineSegments?N.setMode(X.LINES):Q.isLineLoop?N.setMode(X.LINE_LOOP):N.setMode(X.LINE_STRIP)}else Q.isPoints?N.setMode(X.POINTS):Q.isSprite&&N.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(sn.get("WEBGL_multi_draw"))N.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let et=Q._multiDrawStarts,Z=Q._multiDrawCounts,Wt=Q._multiDrawCount,Lt=qt?M.get(qt).bytesPerElement:1,oe=Ot.get(K).currentProgram.getUniforms();for(let Pe=0;Pe<Wt;Pe++)oe.setValue(X,"_gl_DrawID",Pe),N.render(et[Pe]/Lt,Z[Pe])}else if(Q.isInstancedMesh)N.renderInstances(Qt,mn,Q.count);else if(rt.isInstancedBufferGeometry){let et=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Z=Math.min(rt.instanceCount,et);N.renderInstances(Qt,mn,Z)}else N.render(Qt,mn)};function _(S,k,rt,K){j!==null&&S.isNodeMaterial&&j.setObject(K,S),un===!0&&St.setState(S,rt,!1),S.transparent===!0&&S.side===pi&&S.forceSinglePass===!1?(S.side=$n,S.needsUpdate=!0,it(S,k,K),S.side=ys,S.needsUpdate=!0,it(S,k,K),S.side=pi):it(S,k,K)}this.compile=function(S,k,rt=null){rt===null&&(rt=S),j!==null&&j.renderStart(S,k,rt),I=wt.get(rt),I.init(k),E.push(I),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),S!==rt&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights(),j!==null&&j.updateLights(I.state.lightsArray),ze=this.localClippingEnabled,un=St.init(this.clippingPlanes,ze),un===!0&&St.setGlobalState(this.clippingPlanes,k),j!==null&&Ht.render(I.state.shadowsArray,rt,k);let K=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Xt=Q.material;if(Xt)if(Array.isArray(Xt))for(let ie=0;ie<Xt.length;ie++){let Bt=Xt[ie];_(Bt,rt,k,Q),K.add(Bt)}else _(Xt,rt,k,Q),K.add(Xt)}),I=E.pop(),j!==null&&j.renderEnd(),K},this.compileAsync=function(S,k,rt=null){let K=this.compile(S,k,rt);return new Promise(Q=>{function Xt(){if(K.forEach(function(ie){let qt=Ot.get(ie).currentProgram;(qt===void 0||qt.isReady())&&K.delete(ie)}),K.size===0){Q(S);return}setTimeout(Xt,10)}sn.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let u=null;function R(S){u&&u(S)}function B(){ct.stop()}function G(){ct.start()}let ct=new ff;ct.setAnimationLoop(R),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(S){u=S,zt.setAnimationLoop(S),S===null?ct.stop():ct.start()},zt.addEventListener("sessionstart",B),zt.addEventListener("sessionend",G),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;j!==null&&j.renderStart(S,k);let rt=zt.enabled===!0&&zt.isPresenting===!0,K=H!==null&&(yt===null||rt)&&H.begin(F,yt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(k),k=zt.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,k,yt),I=wt.get(S,E.length),I.init(k),I.state.textureUnits=Se.getTextureUnits(),E.push(I),je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Ke.setFromArrayCamera(k):le.setFromProjectionMatrix(je,di,k.reversedDepth),ze=this.localClippingEnabled,un=St.init(this.clippingPlanes,ze),D=Vt.get(S,v.length),D.init(),v.push(D),this.info.render.frame++,zt.enabled===!0&&zt.isPresenting===!0){let ie=F.xr.getDepthSensingMesh();ie!==null&&bt(ie,k,-1/0,F.sortObjects)}bt(S,k,0,F.sortObjects),D.finish(),j!==null&&j.updateLights(I.state.lightsArray),F.sortObjects===!0&&D.sort(Pt,Jt),wn=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,wn&&O.addToRenderList(D,S),this.info.autoReset===!0&&this.info.reset(),un===!0&&St.beginShadows();let Q=I.state.shadowsArray;if(Ht.render(Q,S,k),un===!0&&St.endShadows(),(K&&H.hasRenderPass())===!1){let ie=D.opaque,Bt=D.transmissive;if(I.setupLights(),k.isArrayCamera){let qt=k.cameras;if(Bt.length>0)for(let se=0,Re=qt.length;se<Re;se++){let ye=qt[se];ot(ie,Bt,S,ye)}wn&&O.render(S);for(let se=0,Re=qt.length;se<Re;se++){let ye=qt[se];gt(D,S,ye,ye.viewport)}}else Bt.length>0&&ot(ie,Bt,S,k),wn&&O.render(S),gt(D,S,k)}yt!==null&&ht===0&&(Se.updateMultisampleRenderTarget(yt),Se.updateRenderTargetMipmap(yt)),K&&H.end(F),S.isScene===!0&&S.onAfterRender(F,S,k),Ut.resetDefaultState(),_t=-1,mt=null,E.pop(),E.length>0?(I=E[E.length-1],Se.setTextureUnits(I.state.textureUnits),un===!0&&St.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,v.pop(),v.length>0?D=v[v.length-1]:D=null,j!==null&&j.renderEnd()};function bt(S,k,rt,K){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)I.pushLight(S),S.castShadow&&I.pushShadow(S);else if(S.isSprite){let ie=k.isArrayCamera?Ke:le;if(!S.frustumCulled||S.intersectsFrustum(ie)){K&&pn.setFromMatrixPosition(S.matrixWorld).applyMatrix4(je);let Bt=At.update(S),qt=S.material;qt.visible&&D.push(S,Bt,qt,rt,pn.z,null,k)}}else if(S.isMesh||S.isLine||S.isPoints){let ie=k.isArrayCamera?Ke:le;if(!S.frustumCulled||S.intersectsFrustum(ie)){let Bt=At.update(S),qt=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),pn.copy(S.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pn.copy(Bt.boundingSphere.center)),pn.applyMatrix4(S.matrixWorld).applyMatrix4(je)),Array.isArray(qt)){let se=Bt.groups;for(let Re=0,ye=se.length;Re<ye;Re++){let Qt=se[Re],Ge=qt[Qt.materialIndex];Ge&&Ge.visible&&D.push(S,Bt,Ge,rt,pn.z,Qt,k)}}else qt.visible&&D.push(S,Bt,qt,rt,pn.z,null,k)}}}let Xt=S.children;for(let ie=0,Bt=Xt.length;ie<Bt;ie++)bt(Xt[ie],k,rt,K)}function gt(S,k,rt,K){let{opaque:Q,transmissive:Xt,transparent:ie}=S;I.setupLightsView(rt),un===!0&&St.setGlobalState(F.clippingPlanes,rt),K&&Nt.viewport(It.copy(K)),Q.length>0&&lt(Q,k,rt),Xt.length>0&&lt(Xt,k,rt),ie.length>0&&lt(ie,k,rt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ot(S,k,rt,K){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[K.id]===void 0){let Qt=sn.has("EXT_color_buffer_half_float")||sn.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[K.id]=new ri(1,1,{generateMipmaps:!0,type:Qt?Ti:Jn,minFilter:$i,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let Xt=I.state.transmissionRenderTarget[K.id],ie=K.viewport||It;Xt.setSize(ie.z*F.transmissionResolutionScale,ie.w*F.transmissionResolutionScale);let Bt=F.getRenderTarget(),qt=F.getActiveCubeFace(),se=F.getActiveMipmapLevel();F.setRenderTarget(Xt),F.getClearColor(Et),Kt=F.getClearAlpha(),Kt<1&&F.setClearColor(16777215,.5),F.clear(),wn&&O.render(rt);let Re=F.toneMapping;F.toneMapping=Ui;let ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),I.setupLightsView(K),un===!0&&St.setGlobalState(F.clippingPlanes,K),lt(S,rt,K),Se.updateMultisampleRenderTarget(Xt),Se.updateRenderTargetMipmap(Xt),sn.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ge=0,mn=k.length;Ge<mn;Ge++){let C=k[Ge],{object:N,geometry:et,material:Z,group:Wt}=C;if(Z.side===pi&&N.layers.test(K.layers)){let Lt=Z.side;Z.side=$n,Z.needsUpdate=!0,$(N,rt,K,et,Z,Wt),Z.side=Lt,Z.needsUpdate=!0,Qt=!0}}Qt===!0&&(Se.updateMultisampleRenderTarget(Xt),Se.updateRenderTargetMipmap(Xt))}F.setRenderTarget(Bt,qt,se),F.setClearColor(Et,Kt),ye!==void 0&&(K.viewport=ye),F.toneMapping=Re}function lt(S,k,rt){let K=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Xt=S.length;Q<Xt;Q++){let ie=S[Q],{object:Bt,geometry:qt,group:se}=ie,Re=ie.material;Re.allowOverride===!0&&K!==null&&(Re=K),Bt.layers.test(rt.layers)&&$(Bt,k,rt,qt,Re,se)}}function $(S,k,rt,K,Q,Xt){j!==null&&Q.isNodeMaterial&&j.setObject(S,Q),S.onBeforeRender(F,k,rt,K,Q,Xt),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(F,k,rt,K,S,Xt),Q.transparent===!0&&Q.side===pi&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,F.renderBufferDirect(rt,k,K,Q,S,Xt),Q.side=ys,Q.needsUpdate=!0,F.renderBufferDirect(rt,k,K,Q,S,Xt),Q.side=pi):F.renderBufferDirect(rt,k,K,Q,S,Xt),S.onAfterRender(F,k,rt,K,Q,Xt)}function Mt(S){let k=0;for(let rt of S)rt.texture!==null&&k++;return k}function it(S,k,rt){k.isScene!==!0&&(k=xn);let K=Ot.get(S),Q=I.state.lights,Xt=I.state.shadowsArray,ie=Q.state.version,Bt=tt.getParameters(S,Q.state,Xt,k,rt,I.state.lightProbeGridArray),qt=tt.getProgramCacheKey(Bt),se=K.programs;K.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let Re=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;K.envMap=P.get(S.envMap||K.environment,Re),K.envMapRotation=K.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,se===void 0&&(S.addEventListener("dispose",A),se=new Map,K.programs=se,K.programVariants=new Map);let ye=se.get(qt);if(ye!==void 0){if(K.currentProgram===ye&&K.lightsStateVersion===ie)return kt(S,Bt),ye}else Bt.uniforms=tt.getUniforms(S),j!==null&&S.isNodeMaterial&&j.build(S,rt,Bt),S.onBeforeCompile(Bt,F),ye=tt.acquireProgram(Bt,qt),se.set(qt,ye),K.uniforms=Bt.uniforms;let Qt=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Qt.clippingPlanes=St.uniform),kt(S,Bt),K.needsLights=Rt(S),K.lightsStateVersion=ie,K.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.sunLights.value=Q.state.sun,Qt.sunLightShadows.value=Q.state.sunShadow,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Qt.sunShadowCascade.value=Q.state.sunShadowCascade,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.numLightProbeGrids=Mt(I.state.lightProbeGridArray),K.currentProgram=ye,K.uniformsList=null,ye}function st(S,k,rt,K,Q){let Xt=Ot.get(S),ie=Xt.currentProgram.id+","+K+","+Q,Bt=Xt.programVariants.get(ie);return Bt===void 0?(Bt=it(S,k,rt),Xt.programVariants.set(ie,Bt)):(Xt.currentProgram=Bt,Xt.uniformsList=null,Xt.outputColorSpace=K,Xt.toneMapping=Q),Bt}function Gt(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Er.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function kt(S,k){let rt=Ot.get(S);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.batchingColor=k.batchingColor,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.instancingMorph=k.instancingMorph,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function te(S,k,rt,K,Q){k.isScene!==!0&&(k=xn),Se.resetTextureUnits();let Xt=k.fog,ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Bt=yt===null?F.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Qe.workingColorSpace,qt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,se=P.get(K.envMap||ie,qt),Re=K.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ye=!!rt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qt=!!rt.morphAttributes.position,Ge=!!rt.morphAttributes.normal,mn=!!rt.morphAttributes.color,C=Ui;K.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(C=F.toneMapping);let N=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,et=N!==void 0?N.length:0,Z=Ot.get(K),Wt=I.state.lights;if(un===!0&&(ze===!0||S!==mt)){let gn=S===mt&&K.id===_t;St.setState(K,S,gn)}let Lt=!1,oe=!1;K.version===Z.__version?Z.needsLights&&Z.lightsStateVersion!==Wt.state.version||Q.isBatchedMesh&&Z.batching===!1||!Q.isBatchedMesh&&Z.batching===!0||Q.isBatchedMesh&&Z.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Z.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Z.instancing===!1||!Q.isInstancedMesh&&Z.instancing===!0||Q.isSkinnedMesh&&Z.skinning===!1||!Q.isSkinnedMesh&&Z.skinning===!0||Q.isInstancedMesh&&Z.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Z.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Z.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Z.instancingMorph===!1&&Q.morphTexture!==null||Z.envMap!==se||K.fog===!0&&Z.fog!==Xt||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==St.numPlanes||Z.numIntersection!==St.numIntersection)||Z.vertexAlphas!==Re||Z.vertexTangents!==ye||Z.morphTargets!==Qt||Z.morphNormals!==Ge||Z.morphColors!==mn||Z.morphTargetsCount!==et||Z.numLightProbeGrids!==Mt(I.state.lightProbeGridArray)?Lt=!0:(Z.outputColorSpace!==Bt||Z.toneMapping!==C)&&(oe=!0):(Lt=!0,Z.__version=K.version);let Pe=Z.currentProgram;(Lt===!0||oe===!0)&&(Pe=oe===!0?st(K,k,Q,Bt,C):it(K,k,Q),j&&K.isNodeMaterial&&j.onUpdateProgram(K,Pe,Z));let Ye=!1,Ze=!1,en=!1,be=Pe.getUniforms(),Oe=Z.uniforms;if(Nt.useProgram(Pe.program)&&(Ye=!0,Ze=!0,en=!0),K.id!==_t&&(_t=K.id,Ze=!0),Ye||mt!==S){Nt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),be.setValue(X,"projectionMatrix",S.projectionMatrix),be.setValue(X,"viewMatrix",S.matrixWorldInverse);let Sn=be.map.cameraPosition;Sn!==void 0&&Sn.setValue(X,En.setFromMatrixPosition(S.matrixWorld)),ft.logarithmicDepthBuffer&&be.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&be.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),mt!==S&&(mt=S,Ze=!0,en=!0)}if(Z.needsLights&&(Wt.state.sunShadowMap.length>0&&be.setValue(X,"sunShadowMap",Wt.state.sunShadowMap,Se),Wt.state.directionalShadowMap.length>0&&be.setValue(X,"directionalShadowMap",Wt.state.directionalShadowMap,Se),Wt.state.spotShadowMap.length>0&&be.setValue(X,"spotShadowMap",Wt.state.spotShadowMap,Se),Wt.state.pointShadowMap.length>0&&be.setValue(X,"pointShadowMap",Wt.state.pointShadowMap,Se)),Q.isSkinnedMesh){be.setOptional(X,Q,"bindMatrix"),be.setOptional(X,Q,"bindMatrixInverse");let gn=Q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),be.setValue(X,"boneTexture",gn.boneTexture,Se))}Q.isBatchedMesh&&(be.setOptional(X,Q,"batchingTexture"),be.setValue(X,"batchingTexture",Q._matricesTexture,Se),be.setOptional(X,Q,"batchingIdTexture"),be.setValue(X,"batchingIdTexture",Q._indirectTexture,Se),be.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&be.setValue(X,"batchingColorTexture",Q._colorsTexture,Se));let An=rt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Tt.update(Q,rt,Pe),(Ze||Z.receiveShadow!==Q.receiveShadow)&&(Z.receiveShadow=Q.receiveShadow,be.setValue(X,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Nx()),Ze){if(be.setValue(X,"toneMappingExposure",F.toneMappingExposure),Z.needsLights&&xe(Oe,en),Xt&&K.fog===!0&&Ct.refreshFogUniforms(Oe,Xt),Ct.refreshMaterialUniforms(Oe,K,J,ae,I.state.transmissionRenderTarget[S.id]),Z.needsLights&&Z.numLightProbeGrids>0){let gn=T,Sn=0;for(let kn of I.state.lightProbeGridArray)kn.texture!==null&&(gn.textures[Sn]=kn.texture,gn.min[Sn]=kn.boundingBox.min,gn.max[Sn]=kn.boundingBox.max,gn.resolution[Sn]=kn.resolution,Sn++);for(let kn in gn)gn[kn].length=Sn;Oe.probesSH.value=gn.textures,Oe.probesMin.value=gn.min,Oe.probesMax.value=gn.max,Oe.probesResolution.value=gn.resolution}Er.upload(X,Gt(Z),Oe,Se)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Er.upload(X,Gt(Z),Oe,Se),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&be.setValue(X,"center",Q.center),be.setValue(X,"modelViewMatrix",Q.modelViewMatrix),be.setValue(X,"normalMatrix",Q.normalMatrix),be.setValue(X,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let gn=K.uniformsGroups;for(let Sn=0,kn=gn.length;Sn<kn;Sn++){let Ri=gn[Sn];ue.update(Ri,Pe),ue.bind(Ri,Pe)}}return Pe}function xe(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(S,k,rt){let K=Ot.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ot.get(S.texture).__webglTexture=k,Ot.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:rt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let rt=Ot.get(S);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,rt=0){yt=S,dt=k,ht=rt;let K=null,Q=!1,Xt=!1;if(S){let Bt=Ot.get(S);if(Bt.__useDefaultFramebuffer!==void 0){Nt.bindFramebuffer(X.FRAMEBUFFER,Bt.__webglFramebuffer),It.copy(S.viewport),jt.copy(S.scissor),Ce=S.scissorTest,Nt.viewport(It),Nt.scissor(jt),Nt.setScissorTest(Ce),_t=-1;return}else if(Bt.__webglFramebuffer===void 0)Se.setupRenderTarget(S);else if(Bt.__hasExternalTextures)Se.rebindTextures(S,Ot.get(S.texture).__webglTexture,Ot.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Re=S.depthTexture;if(Bt.__boundDepthTexture!==Re){if(Re!==null&&Ot.has(Re)&&(S.width!==Re.image.width||S.height!==Re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(S)}}let qt=S.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Xt=!0);let se=Ot.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(se[k])?K=se[k][rt]:K=se[k],Q=!0):S.samples>0&&Se.useMultisampledRTT(S)===!1?K=Ot.get(S).__webglMultisampledFramebuffer:Array.isArray(se)?K=se[rt]:K=se,It.copy(S.viewport),jt.copy(S.scissor),Ce=S.scissorTest}else It.copy(Ee).multiplyScalar(J).floor(),jt.copy(me).multiplyScalar(J).floor(),Ce=Xe;if(rt!==0&&(K=pt),Nt.bindFramebuffer(X.FRAMEBUFFER,K)&&Nt.drawBuffers(S,K),Nt.viewport(It),Nt.scissor(jt),Nt.setScissorTest(Ce),Q){let Bt=Ot.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,rt)}else if(Xt){let Bt=k;for(let qt=0;qt<S.textures.length;qt++){let se=Ot.get(S.textures[qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qt,se.__webglTexture,rt,Bt)}}else if(S!==null&&rt!==0){let Bt=Ot.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Bt.__webglTexture,rt)}_t=-1};function qe(S){let k=Ot.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=ft.textureFormatReadable(S.format),k.__typeReadable=ft.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,rt,K,Q,Xt,ie,Bt=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ie!==void 0&&(qt=qt[ie],Array.isArray(qt)&&(qt=qt[0])),qt){Nt.bindFramebuffer(X.FRAMEBUFFER,qt);try{let se=S.textures[Bt],Re=se.format,ye=se.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Bt);let Qt=qe(se);if(Qt.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-K&&rt>=0&&rt<=S.height-Q&&X.readPixels(k,rt,K,Q,Dt.convert(Re),Dt.convert(ye),Xt)}finally{let se=yt!==null?Ot.get(yt).__webglFramebuffer:null;Nt.bindFramebuffer(X.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(S,k,rt,K,Q,Xt,ie,Bt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ie!==void 0&&(qt=qt[ie],Array.isArray(qt)&&(qt=qt[0])),qt)if(k>=0&&k<=S.width-K&&rt>=0&&rt<=S.height-Q){Nt.bindFramebuffer(X.FRAMEBUFFER,qt);let se=S.textures[Bt],Re=se.format,ye=se.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Bt);let Qt=qe(se);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.bufferData(X.PIXEL_PACK_BUFFER,Xt.byteLength,X.STREAM_READ),X.readPixels(k,rt,K,Q,Dt.convert(Re),Dt.convert(ye),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let mn=yt!==null?Ot.get(yt).__webglFramebuffer:null;Nt.bindFramebuffer(X.FRAMEBUFFER,mn);let C=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Nd(X,C,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Xt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ge),X.deleteSync(C),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,rt=0){let K=Math.pow(2,-rt),Q=Math.floor(S.image.width*K),Xt=Math.floor(S.image.height*K),ie=k!==null?k.x:0,Bt=k!==null?k.y:0;Se.setTexture2D(S,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,ie,Bt,Q,Xt),Nt.unbindTexture()},this.copyTextureToTexture=function(S,k,rt=null,K=null,Q=0,Xt=0){let ie,Bt,qt,se,Re,ye,Qt,Ge,mn,C=S.isCompressedTexture?S.mipmaps[Xt]:S.image;if(rt!==null)ie=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,qt=rt.isBox3?rt.max.z-rt.min.z:1,se=rt.min.x,Re=rt.min.y,ye=rt.isBox3?rt.min.z:0;else{let be=Math.pow(2,-Q);ie=Math.floor(C.width*be),Bt=Math.floor(C.height*be),S.isDataArrayTexture?qt=C.depth:S.isData3DTexture?qt=Math.floor(C.depth*be):qt=1,se=0,Re=0,ye=0}K!==null?(Qt=K.x,Ge=K.y,mn=K.z):(Qt=0,Ge=0,mn=0);let N=Dt.convert(k.format),et=Dt.convert(k.type),Z;k.isData3DTexture?(Se.setTexture3D(k,0),Z=X.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Se.setTexture2DArray(k,0),Z=X.TEXTURE_2D_ARRAY):(Se.setTexture2D(k,0),Z=X.TEXTURE_2D),Nt.activeTexture(X.TEXTURE0),Nt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,k.flipY),Nt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Nt.pixelStorei(X.UNPACK_ALIGNMENT,k.unpackAlignment);let Wt=Nt.getParameter(X.UNPACK_ROW_LENGTH),Lt=Nt.getParameter(X.UNPACK_IMAGE_HEIGHT),oe=Nt.getParameter(X.UNPACK_SKIP_PIXELS),Pe=Nt.getParameter(X.UNPACK_SKIP_ROWS),Ye=Nt.getParameter(X.UNPACK_SKIP_IMAGES);Nt.pixelStorei(X.UNPACK_ROW_LENGTH,C.width),Nt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,C.height),Nt.pixelStorei(X.UNPACK_SKIP_PIXELS,se),Nt.pixelStorei(X.UNPACK_SKIP_ROWS,Re),Nt.pixelStorei(X.UNPACK_SKIP_IMAGES,ye);let Ze=S.isDataArrayTexture||S.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let be=Ot.get(S),Oe=Ot.get(k),An=Ot.get(be.__renderTarget),gn=Ot.get(Oe.__renderTarget);Nt.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),Nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let Sn=0;Sn<qt;Sn++)Ze&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(S).__webglTexture,Q,ye+Sn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(k).__webglTexture,Xt,mn+Sn)),X.blitFramebuffer(se,Re,se+ie,Re+Bt,Qt,Ge,Qt+ie,Ge+Bt,X.DEPTH_BUFFER_BIT,X.NEAREST);Nt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||Ot.has(S)){let be=Ot.get(S),Oe=Ot.get(k);Nt.bindFramebuffer(X.READ_FRAMEBUFFER,z),Nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ut);for(let An=0;An<qt;An++)Ze?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,be.__webglTexture,Q,ye+An):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,be.__webglTexture,Q),en?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Oe.__webglTexture,Xt,mn+An):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,Xt),Q!==0?X.blitFramebuffer(se,Re,se+ie,Re+Bt,Qt,Ge,Qt+ie,Ge+Bt,X.COLOR_BUFFER_BIT,X.NEAREST):en?X.copyTexSubImage3D(Z,Xt,Qt,Ge,mn+An,se,Re,ie,Bt):X.copyTexSubImage2D(Z,Xt,Qt,Ge,se,Re,ie,Bt);Nt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else en?S.isDataTexture||S.isData3DTexture?X.texSubImage3D(Z,Xt,Qt,Ge,mn,ie,Bt,qt,N,et,C.data):k.isCompressedArrayTexture?X.compressedTexSubImage3D(Z,Xt,Qt,Ge,mn,ie,Bt,qt,N,C.data):X.texSubImage3D(Z,Xt,Qt,Ge,mn,ie,Bt,qt,N,et,C):S.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Xt,Qt,Ge,ie,Bt,N,et,C.data):S.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Xt,Qt,Ge,C.width,C.height,N,C.data):X.texSubImage2D(X.TEXTURE_2D,Xt,Qt,Ge,ie,Bt,N,et,C);Nt.pixelStorei(X.UNPACK_ROW_LENGTH,Wt),Nt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt),Nt.pixelStorei(X.UNPACK_SKIP_PIXELS,oe),Nt.pixelStorei(X.UNPACK_SKIP_ROWS,Pe),Nt.pixelStorei(X.UNPACK_SKIP_IMAGES,Ye),Xt===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&X.generateMipmap(Z),Nt.unbindTexture()},this.initRenderTarget=function(S){Ot.get(S).__webglFramebuffer===void 0&&Se.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Se.setTextureCube(S,0):S.isData3DTexture?Se.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Se.setTexture2DArray(S,0):Se.setTexture2D(S,0),Nt.unbindTexture()},this.resetState=function(){dt=0,ht=0,yt=null,Nt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qe._getUnpackColorSpace()}};var za=Math.PI/180,Ms=9.81,qh=0,Rr=1,Tf={half:16},rn={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};rn.height=rn.steps*rn.rise;rn.length=rn.steps*rn.run;var ve={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},gi={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,rn.height,rn.z],attacker:[-5.2,rn.height+1.5,rn.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,ve.floor,ve.z],attacker:[-6.2,ve.floor+1.5,ve.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};function Kn(n,t){if(t>ve.z-30){let e=t-ve.z;return Math.abs(e)>ve.halfWidth||n<-ve.back||n>ve.wall?0:n<0?ve.floor:Math.abs(e)<ve.open?ve.floor+ve.sill:ve.top}if(t>rn.z-30){let e=t-rn.z;return Math.abs(e)>rn.halfWidth||n<-rn.back||n>=rn.length?0:n<=0?rn.height:Math.max(0,rn.height-(Math.floor(n/rn.run)+1)*rn.rise)}return 0}var cn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],we=Object.fromEntries(cn.map((n,t)=>[n.name,t])),Ss=.44,Cr=.425,Ga=-.08,oc=.1,Ux=.205,Yh=.85,Ox=.35,Zh=.915,lc={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},wf={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},Bx=1.2,jh=[0,5,30,80],kx=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),zx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},Gx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function Ji(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function $h(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function li(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}var Ha=n=>[-n[0],-n[1],-n[2],n[3]],on=(n,t,e)=>Math.max(t,Math.min(e,n));function Va(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function Kh(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ef(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(qh,Rr),e.EnableCollision(Rr,Rr);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(qh,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Rr,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),h=new n.Quat(0,0,0,1),p=[];function d(A,x,U,_,u=.85){let R=[(U[0]+_[0])/2,(U[1]+_[1])/2,(U[2]+_[2])/2],B=[(_[0]-U[0])/2,(_[1]-U[1])/2,(_[2]-U[2])/2],G=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(B[0],B[1],B[2]),Math.min(.02,B[0]*.5,B[1]*.5,B[2]*.5)),new n.RVec3(R[0],R[1],R[2]),o,n.EMotionType_Static,qh);G.mFriction=u,G.mRestitution=.03,a.AddBody(a.CreateBody(G).GetID(),n.EActivation_DontActivate),x&&p.push({c:R,h:B,kind:x,level:A})}d("all",null,[-50,-1,-40],[50,0,190]);{let A=rn.z-rn.halfWidth,x=rn.z+rn.halfWidth;d("stairs","landing",[-rn.back,0,A],[0,rn.height,x]);for(let U=0;U<rn.steps-1;U++)d("stairs","step",[U*rn.run,0,A],[(U+1)*rn.run,rn.height-(U+1)*rn.rise,x],.13);d("stairs","wall",[-rn.back,0,A-.3],[rn.length+3,rn.height+2.6,A])}let f={tiles:[],panes:[],frame:[]};{let A=ve.z-ve.halfWidth,x=ve.z+ve.halfWidth,U=ve.floor;d("window","building",[-ve.back,0,A],[ve.wall,U,x]),d("window","wall",[0,U,A],[ve.wall,ve.top,ve.z-ve.open]),d("window","wall",[0,ve.lintel,ve.z-ve.open],[ve.wall,ve.top,ve.z+ve.open]),d("window","sill",[0,U,ve.z-ve.open],[ve.wall,U+ve.sill,ve.z+ve.open]);let _=ve.glassX,u=ve.z-ve.panes*ve.pane/2,R=ve.glassY,B=ve.panes*ve.pane,G=.035;for(let gt=0;gt<=ve.panes;gt++)d("window","frame",[_+gt*ve.pane-G,R-.09,u-G],[_+gt*ve.pane+G,R-.012,u+B+G]),d("window","frame",[_-G,R-.09,u+gt*ve.pane-G],[_+B+G,R-.012,u+gt*ve.pane+G]);for(let[gt,ot]of[[_,u],[_+B,u],[_,u+B],[_+B,u+B]])d("window","frame",[gt-.05,0,ot-.05],[gt+.05,R-.09,ot+.05]);let ct=Kh(99),bt=(gt,ot,lt,$,Mt,it)=>{let st=lt-gt,Gt=$-ot;if(Mt===0||st<.3&&Gt<.3){it.push([gt,ot,lt,$]);return}let kt=.32+.36*ct();st>Gt?(bt(gt,ot,gt+st*kt,$,Mt-1,it),bt(gt+st*kt,ot,lt,$,Mt-1,it)):(bt(gt,ot,lt,ot+Gt*kt,Mt-1,it),bt(gt,ot+Gt*kt,lt,$,Mt-1,it))};for(let gt=0;gt<ve.panes;gt++)for(let ot=0;ot<ve.panes;ot++){let $=_+gt*ve.pane+.04,Mt=u+ot*ve.pane+.04,it={broken:!1,min:[$-.04,Mt-.04],max:[$+ve.pane-.04,Mt+ve.pane-.04],y:R,tiles:[]},st=[];bt($,Mt,$+ve.pane-2*.04,Mt+ve.pane-2*.04,3,st);for(let Gt of st){let kt=[(Gt[2]-Gt[0])/2,.007,(Gt[3]-Gt[1])/2],te=[(Gt[0]+Gt[2])/2,R,(Gt[1]+Gt[3])/2],xe=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(kt[0],kt[1],kt[2]),.002),new n.RVec3(te[0],te[1],te[2]),o,n.EMotionType_Static,Rr);xe.mAllowDynamicOrKinematic=!0,xe.mFriction=.5,xe.mRestitution=.15,xe.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,xe.mMassPropertiesOverride.mMass=Math.max(.15,kt[0]*kt[2]*4*12);let Rt=a.CreateBody(xe),qe=new n.BodyID(Rt.GetID().GetIndexAndSequenceNumber());a.AddBody(qe,n.EActivation_DontActivate),it.tiles.push(f.tiles.length),f.tiles.push({id:qe,home:te,h:kt})}f.panes.push(it)}}function y(A,x){A.broken=!0,nt.glass++;for(let U of A.tiles){let _=f.tiles[U];a.SetMotionType(_.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(x[0]*.45+(Jt()-.5)*2.2,x[1]*.5-Jt()*1.2,x[2]*.45+(Jt()-.5)*2.2);let u=new n.Vec3((Jt()-.5)*14,(Jt()-.5)*6,(Jt()-.5)*14);a.SetLinearAndAngularVelocity(_.id,l,u),n.destroy(u)}le.push({type:"glass",pos:[(A.min[0]+A.max[0])/2,A.y,(A.min[1]+A.max[1])/2]})}function w(){for(let A of f.tiles)a.SetMotionType(A.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(A.home[0],A.home[1],A.home[2]),a.SetPositionAndRotation(A.id,c,o,n.EActivation_DontActivate);for(let A of f.panes)A.broken=!1}let g=new n.Skeleton;for(let A of cn)g.AddJoint(new n.JPHString(A.name,A.name.length),A.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(cn.length),cn.forEach((A,x)=>{let U=m.mParts.at(x);if(U.SetShape(new n.CapsuleShape(A.hh,A.r)),U.mPosition=new n.RVec3(A.c[0],A.c[1],A.c[2]),U.mRotation=o,U.mMotionType=n.EMotionType_Dynamic,U.mMotionQuality=n.EMotionQuality_LinearCast,U.mObjectLayer=Rr,U.mFriction=.7,U.mRestitution=.05,U.mAngularDamping=.3,U.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,U.mMassPropertiesOverride.mMass=A.mass,A.strength=A.mass*26,!(A.parent<0))if(A.type==="st"){let _=new n.SwingTwistConstraintSettings;_.mSpace=n.EConstraintSpace_WorldSpace,_.mPosition1=_.mPosition2=new n.RVec3(A.j[0],A.j[1],A.j[2]),_.mTwistAxis1=_.mTwistAxis2=new n.Vec3(A.twist[0],A.twist[1],A.twist[2]),_.mPlaneAxis1=_.mPlaneAxis2=new n.Vec3(1,0,0),_.mNormalHalfConeAngle=_.mPlaneHalfConeAngle=A.cone*za,_.mTwistMinAngle=-A.tw*za,_.mTwistMaxAngle=A.tw*za,_.mMaxFrictionTorque=A.mass*.4;for(let u of[_.mSwingMotorSettings,_.mTwistMotorSettings])u.mSpringSettings.mFrequency=8,u.mSpringSettings.mDamping=1,u.mMinTorqueLimit=-A.strength,u.mMaxTorqueLimit=A.strength;U.mToParent=_}else{let _=new n.HingeConstraintSettings;_.mSpace=n.EConstraintSpace_WorldSpace,_.mPoint1=_.mPoint2=new n.RVec3(A.j[0],A.j[1],A.j[2]),_.mHingeAxis1=_.mHingeAxis2=new n.Vec3(0,0,1),_.mNormalAxis1=_.mNormalAxis2=new n.Vec3(1,0,0),_.mLimitsMin=A.min*za,_.mLimitsMax=A.max*za,_.mMaxFrictionTorque=A.mass*.4,_.mMotorSettings.mSpringSettings.mFrequency=8,_.mMotorSettings.mSpringSettings.mDamping=1,_.mMotorSettings.mMinTorqueLimit=-A.strength,_.mMotorSettings.mMaxTorqueLimit=A.strength,U.mToParent=_}});let b=0,L=cn.map(A=>(b+=A.mass,A.mass));m.DisableParentChildCollisions(),m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let D=cn.map((A,x)=>new n.BodyID(T.GetBodyID(x).GetIndexAndSequenceNumber())),I=cn.map((A,x)=>{if(A.parent<0)return null;let U=T.GetConstraint(x-1);return A.type==="st"?n.castObject(U,n.SwingTwistConstraint):n.castObject(U,n.HingeConstraint)}),v=cn.length,E=(A,x)=>{let U=a.GetPosition(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},H=(A,x)=>{let U=a.GetLinearVelocity(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},F=(A,x)=>{let U=a.GetRotation(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x[3]=U.GetW(),x},q=(A,x)=>{let U=a.GetAngularVelocity(D[A]);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},j=A=>E(A,[0,0,0]),pt=(A,x)=>{let U=a.GetPosition(A);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x},z=(A,x)=>{let U=a.GetRotation(A);return x[0]=U.GetX(),x[1]=U.GetY(),x[2]=U.GetZ(),x[3]=U.GetW(),x};function ut(A,x,U,_,u){l.Set(x,U,_),u?(c.Set(u[0],u[1],u[2]),a.AddForce(D[A],l,c,n.EActivation_Activate)):a.AddForce(D[A],l,n.EActivation_Activate)}function dt(A,x,U,_,u){l.Set(x,U,_),u?(c.Set(u[0],u[1],u[2]),a.AddImpulse(D[A],l,c)):a.AddImpulse(D[A],l)}let ht=new Float32Array(v).fill(1),yt=new Float32Array(v),_t=new Float32Array(v).fill(-1),mt=new Float32Array(v*3),It=new Float32Array(v);function jt(A,x){h.Set(x[0],x[1],x[2],x[3]),I[A].SetTargetOrientationCS(h)}let Ce=1,Et=(A,x,U,_=0)=>$h($h(Ji(0,1,0,A),Ji(0,0,1,x*U)),Ji(1,0,0,_*U*Ce));function Kt(){for(let A=1;A<v;A++){let x=ht[A]*(1-yt[A]);if(Math.abs(x-_t[A])<.02&&!(x===0&&_t[A]!==0))continue;_t[A]=x;let U=cn[A],_=I[A],u=x>.02?n.EMotorState_Position:n.EMotorState_Off,R=U.strength*x,B=2.5+5.5*x;if(U.type==="st"){for(let G of[_.GetSwingMotorSettings(),_.GetTwistMotorSettings()])G.mMinTorqueLimit=-R,G.mMaxTorqueLimit=R,G.mSpringSettings.mFrequency=B;_.SetSwingMotorState(u),_.SetTwistMotorState(u)}else{let G=_.GetMotorSettings();G.mMinTorqueLimit=-R,G.mMaxTorqueLimit=R,G.mSpringSettings.mFrequency=B,_.SetMotorState(u)}}}let nt={},ae=[],J=[{shin:we.lleg_l,thigh:we.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0},{shin:we.lleg_r,thigh:we.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0}],Pt={},Jt=Kh(1),Ee=0,me=gi.yard,Xe="yard",le=[],Ke=[];function un(){cn.forEach((A,x)=>{c.Set(me.start[0]+A.c[0],me.start[1]+A.c[1]-.03,me.start[2]+A.c[2]),a.SetPositionAndRotation(D[x],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(D[x],l,l)}),ht.fill(1),yt.fill(0),_t.fill(-1),mt.fill(0),It.fill(0),ae.length=0,w(),Jt=Kh(1234+77*Ee++),Object.assign(nt,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:me.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Pt,{support:1,hT:me.start[1]+Zh,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Jt()*6.28,Jt()*6.28,Jt()*6.28,Jt()*6.28],lastCom:[me.start[0],me.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let A of J)A.swing=!1,A.hurt=0,A.broken=0,A.kneeDown=!1,A.planted=[me.start[0],me.start[2]+A.side*oc],A.t=0;Kt()}function ze(A){nt.alive&&(nt.alive=!1,nt.diedAt=nt.time,nt.outcome=A,Ke.push({type:"dead",cause:A,pos:j(we.head),time:nt.time}))}function je(){nt.ko||!nt.alive||(nt.ko=!0,Ke.push({type:"out",pos:j(we.head)}))}function En(A,x){let U=cn[A].zone,_=cn[A].side===1?"_l":"_r";if(U==="head")return x[0]<-.45?x[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:x[1]<-.55?[["jaw",1]]:[["skull",1]];if(A===we.chest){let u=x[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(x[2])>.55||x[1]>.5)&&u.push(["collarbone"+(x[2]>=0?"_l":"_r"),.9]),u}return A===we.pelvis?x[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:U==="arm"?cn[cn[A].parent].zone==="arm"?x[1]<-.35?[["wrist"+_,1]]:[["forearm"+_,1]]:x[1]>.5?[["humerus"+_,.8],["collarbone"+_,.8]]:[["humerus"+_,1]]:U==="thigh"?[["femur"+_,1]]:x[1]>.35?[["kneecap"+_,1]]:x[1]<-.5?[["ankle"+_,1]]:[["tibia"+_,1]]}function pn(A,x,U,_){let u=A.split("_")[0],R=wf[u];for(;x>0&&!R[x-1];)x--;let B=nt.bones[A]||0;if(x<=B)return 0;nt.bones[A]=x;let G=A.endsWith("_l")?1:A.endsWith("_r")?-1:0;Ke.push({type:"injury",bone:A,base:u,side:G,level:x,was:B,pos:[U[0],U[1],U[2]],cause:_});let ct=G===1?we.uarm_l:we.uarm_r,bt=G===1?we.larm_l:we.larm_r,gt=ot=>{nt.stun=Math.min(1.6,nt.stun+ot)};if(u==="femur"||u==="tibia"||u==="kneecap"||u==="ankle"){let ot=J[G===1?0:1];ot.hurt=Math.min(1,Math.max(ot.hurt+.15,x===2?.8:x===3?1:0)),ot.broken=Math.max(ot.broken,x),yt[ot.thigh]=Math.max(yt[ot.thigh],ot.hurt*.5),yt[ot.shin]=Math.max(yt[ot.shin],ot.hurt*.6),Pt.legWound=Math.max(Pt.legWound,ot.hurt),x>=2&&nt.mode==="balance"&&(Pt.buckle=.24,Pt.buckleDip=.3)}else if(u==="humerus")x>=2&&(yt[ct]=.9,yt[bt]=Math.max(yt[bt],.6));else if(u==="forearm"||u==="wrist")x>=2&&(yt[bt]=.9);else if(u==="collarbone")x>=2&&(yt[ct]=Math.max(yt[ct],.7));else if(u==="ribs")gt([0,.08,.22,.4][x]),x===3&&ae.push({part:we.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(u==="nose")gt(.1),x>=2&&ae.push({part:we.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(u==="jaw")gt(.12*x);else if(u==="skull")x===3?ze("Skull shattered"):x===2&&(gt(.5),je());else if(u==="neck")x>=2?ze("Broken neck"):gt(.3);else if(u==="spine"){if(x>=2){nt.paralysed=!0;for(let ot of J)ot.hurt=1,yt[ot.thigh]=1,yt[ot.shin]=1}}else if(u==="pelvis"&&x>=2){nt.cantRise=!0;for(let ot of J)ot.hurt=Math.max(ot.hurt,.5)}return x}function xn(A,x,U,_){let u=wf[A.split("_")[0]];nt.bones[A]&&(x*=1.15),x*=.85+.3*Jt();let R=u[2]&&x>=u[2]?3:x>=u[1]?2:x>=u[0]?1:0;return R?pn(A,R,U,_):0}let wn=()=>!nt.paralysed&&!nt.cantRise&&!(J[0].broken>=3||J[1].broken>=3)&&!(J[0].broken>=2&&J[1].broken>=2),pe=[0,0,0,1],X=[0,0,0],ne=[0,0,0];function sn(A,x,U,_){if(nt.done)return null;let u=cn[A],R=j(we.chest)[1],B=j(we.head)[1],ct=u.zone==="chest"&&x[1]-R>.13||u.zone==="head"&&B-x[1]>.06?"neck":u.zone;if(nt.hits++,nt.mode==="fall"&&(nt.fallHits++,ft[1]-Kn(ft[0],ft[2])>1.2&&nt.airHits++),_.impulse>200)for(let[$,Mt]of[[A,.5],[we.chest,.3],[we.pelvis,.2]])dt($,U[0]*_.impulse*Mt,U[1]*_.impulse*Mt,U[2]*_.impulse*Mt,$===A?x:null);else dt(A,U[0]*_.impulse,U[1]*_.impulse,U[2]*_.impulse,x);for(let $=0;$<v;$++)It[$]=.12;E(A,ne),F(A,pe);let bt=li(Ha(pe),[x[0]-ne[0],x[1]-ne[1],x[2]-ne[2]],[0,0,0]);if(_.bleed>0){let $=_.kind==="blunt";ae.push({part:A,zone:ct,at:bt,arterial:!$&&(ct==="neck"||ct==="thigh"),rate:$?1.6:zx[ct]*_.bleed,left:$?7:Gx[ct]*_.bleed})}nt.stun=Math.min(1.6,nt.stun+_.stun*(ct==="head"?2.2:ct==="neck"?1.4:1)),ct==="head"&&_.kind==="ballistic"?(ze("Headshot"),ht.fill(0)):ct==="head"&&nt.stun>1&&je();let gt=[bt[0]/u.r,bt[1]/(u.hh+u.r),bt[2]/u.r];if(_.kind==="ballistic"){let $=_.impulse>60,Mt=ct==="neck"?"neck":ct==="head"?"skull":En(A,gt)[0][0],it=Mt.split("_")[0],[st,Gt]=it==="skull"?[0,1]:it==="neck"?[$?.8:.9,0]:it==="spine"?[$?.5:.65,0]:kx.has(it)?$?[.1,.6]:[.25,.25]:it==="pelvis"?$?[.45,.2]:[.75,.05]:$?[.2,.3]:[.45,.1],kt=Jt();kt>=st&&pn(Mt,kt>1-Gt?3:2,x,"shot")}else{let $=(_.impulse-45)/19;if(ct==="neck")xn("neck",$*.6,x,"blow");else for(let[Mt,it]of En(A,gt))xn(Mt,$*it,x,"blow")}if(ct==="thigh"||ct==="shin"){let $=J[u.side===1?0:1];$.hurt=Math.min(1,$.hurt+(_.kind==="ballistic"?.7:.45)*(_.bleed>1.5||_.impulse>150?1.4:1)),yt[$.thigh]=Math.max(yt[$.thigh],$.hurt*.5),yt[$.shin]=Math.max(yt[$.shin],$.hurt*.6),Pt.legWound=Math.max(Pt.legWound,$.hurt)}if(ct==="arm"){yt[A]=.9;let $=cn.findIndex(Mt=>Mt.parent===A);$>0&&(yt[$]=.9)}if(_.kind==="ballistic"){let $=Math.hypot(U[0],U[2])||1,Mt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[ct],it=(38+34*Jt())*Mt*(_.impulse>60?.5:1),st=(Jt()-.5)*.35,Gt=on(((x[0]-ne[0])*Pt.hz+(x[2]-ne[2])*-Pt.hx)/.12,-1,1)*.65,kt=U[0]/$-Pt.hz*Gt-U[2]/$*st,te=U[2]/$+Pt.hx*Gt+U[0]/$*st,xe=Math.hypot(kt,te)||1;Pt.reel=[kt/xe*it,te/xe*it],Pt.reelT=.16}nt.mode==="balance"&&(Pt.buckle=.22,Pt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[ct]||.04)*(_.kind==="ballistic"?1:.6)),Pt.flinch=.2,Pt.clutch=ct,Pt.clutchEnd=_.bleed>0?1e9:Math.max(Pt.clutchEnd<1e8?0:Pt.clutchEnd,nt.clock+.9+_.stun*4);let ot=(x[0]-ne[0])*Pt.hz+(x[2]-ne[2])*-Pt.hx,lt=ct==="arm"?-u.side:cn[A].side||(ot>=0?1:-1);if(yt[lt===1?we.uarm_l:we.uarm_r]>.5&&(lt=-lt),Pt.clutchArm=ct==="neck"||ct==="head"?0:lt,ct==="gut"&&_.kind==="ballistic"&&_.impulse<60&&(Pt.lookDown=1.1),_.kind==="ballistic"&&Pt.fleeAt>1e8){Pt.fleeAt=nt.time+.7+Jt()*.7+Pt.lookDown;let $=(Jt()-.5)*1.3,Mt=Math.hypot(U[0],U[2])||1,it=U[0]/Mt,st=U[2]/Mt;Pt.fleeDir=[it*Math.cos($)-st*Math.sin($),it*Math.sin($)+st*Math.cos($)]}return Ke.push({type:"hit",zone:ct==="thigh"||ct==="shin"?"leg":ct,part:A,pos:x,tool:_,fatal:!nt.alive}),ct}let ft=[0,0,0],Nt=[0,0,0],Je=[0,0,0,1],Ot=[0,0,0],Se=[0,0,0],P=[0,0,0,1],M=[0,0,0],Y=[0,0,0],At=[0,0,0],tt=[0,0,0],Ct=[0,0,0];function Vt(A,x,U,_,u,R){F(A,pe),q(A,Y);let B=pe[0],G=pe[1],ct=pe[2],bt=pe[3],gt=2*(B*G-bt*ct),ot=1-2*(B*B+ct*ct),lt=2*(G*ct+bt*B),$=Math.hypot(_,1,u),Mt=_/$,it=1/$,st=u/$;return l.Set(x*(ot*st-lt*it)-U*Y[0],(R||0)-U*.3*Y[1],x*(gt*it-ot*Mt)-U*Y[2]),a.AddTorque(D[A],l,n.EActivation_Activate),ot}function wt(A,x){li(Je,[0,Ga,A.side*oc],At),tt[0]=x[0]-(ft[0]+At[0]),tt[1]=x[1]-(ft[1]+At[1]),tt[2]=x[2]-(ft[2]+At[2]),li(Ha(Je),tt,Ct);let U=Math.hypot(Ct[0],Ct[1],Ct[2])||1e-6,_=Ct[0]/U,u=Ct[1]/U,R=Ct[2]/U;U=on(U,.24,Ss+Cr-.004);let B=Math.acos(on((Ss*Ss+U*U-Cr*Cr)/(2*Ss*U),-1,1)),G=-_,ct=-1-G*_,bt=-G*u,gt=-G*R,ot=Math.hypot(ct,bt,gt)||1;ct/=ot,bt/=ot,gt/=ot;let lt=Math.cos(B),$=Math.sin(B),Mt=_*lt+ct*$,it=u*lt+bt*$,st=R*lt+gt*$;vt(A,Mt,it,st);let Gt=Math.PI-Math.acos(on((Ss*Ss+Cr*Cr-U*U)/(2*Ss*Cr),-1,1));I[A.shin].SetTargetAngle(Gt)}let St={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Ht(A,x){let U=Pt,_=nt.clock,u=.03,R=0,B=0,G=U.clutch?St[U.clutch]:null;G&&(u=G.spine+(1-nt.strength)*.25,R=G.neck),U.lookDown>0&&(R=.7,u+=.1),U.flinch>0&&(u=-.22,R=-.3),nt.mode==="down"&&(u+=.15*Math.sin(_*1.3+U.phase[0]),B=.25*Math.sin(_*.9+U.phase[1])),jt(we.chest,$h(Ji(0,1,0,u),Ji(1,0,0,B))),jt(we.head,Ji(0,1,0,R));for(let ct of[1,-1]){let bt=ct===1?we.uarm_l:we.uarm_r,gt=ct===1?we.larm_l:we.larm_r,ot;if(nt.mode==="rise"&&U.riseT<1.5)ot=[.75,-.25,-.15];else if(U.flinch>0)ot=[.5,-.95,-1];else if(G&&(U.clutchArm===0||U.clutchArm===ct))ot=G.arm;else if(nt.mode==="down"){let lt=Math.max(0,Math.sin(_*.8+U.phase[2]+ct));ot=[.4+1.5*lt*nt.strength,-.2,-.5-.6*lt]}else{let lt=on(.12+2.6*A,0,1.45);ot=[.1+(A>.12?Math.sin(_*13+ct*1.7)*.45*on(A*3,0,1):0)+.6*A,-lt,-.3-.5*on(A*3,0,1)]}jt(bt,Et(ot[0],ot[1],ct,ot[3]||0)),I[gt].SetTargetAngle(ot[2])}}function O(A){return E(A.shin,A.p),F(A.shin,P),li(P,[0,-Ux,0],tt),A.p[0]+=tt[0],A.p[1]+=tt[1],A.p[2]+=tt[2],A.p}let Tt=[0,1,0];function xt(A){E(A.shin,ne),F(A.shin,P),li(P,Tt,tt);let x=tt[0],U=tt[1],_=tt[2];A.gap=ne[1]-.15*U-.055-Kn(ne[0]-.15*x,ne[2]-.15*_),A.k[0]=ne[0]+.22*x,A.k[1]=ne[1]+.22*U,A.k[2]=ne[2]+.22*_,F(A.thigh,pe),li(pe,Tt,tt),A.kgap=Math.min(ne[1]+.15*U-.055,A.k[1]+.07*tt[1]-.07)-Kn(A.k[0],A.k[2])}function vt(A,x,U,_){let u=-U,R=-_,B=x,G=Math.hypot(B,R,1+u)||1;jt(A.thigh,[0,-B/G,R/G,(1+u)/G])}function Dt(A,x){if(nt.mode==="fall"||nt.mode==="down")return;nt.mode="fall",nt.fellBecause=x||"";for(let B of J)B.swing=!1;A&&dt(we.chest,A[0],0,A[1]);let U=Pt;U.fight=nt.alive&&!nt.ko?on(.2+.95*nt.strength,0,1):0,U.fallT=0,U.settle=0;let _=(Nt[0]+Se[0])*.5+(A?A[0]/40:0),u=(Nt[2]+Se[2])*.5+(A?A[1]/40:0);Math.hypot(_,u)<.3&&(_+=(Ot[0]-ft[0])*4,u+=(Ot[2]-ft[2])*4),Math.hypot(_,u)<.1&&(_=U.hx,u=U.hz);let R=Math.hypot(_,u);U.fallDir[0]=_/R,U.fallDir[1]=u/R,O(J[0]),O(J[1]),U.lead=J[0].p[0]*U.fallDir[0]+J[0].p[2]*U.fallDir[1]<J[1].p[0]*U.fallDir[0]+J[1].p[2]*U.fallDir[1]?0:1,Ke.push({type:"fall",pos:j(we.chest),onFeet:nt.onFeet})}function Ut(A){let x=Pt,U=nt,_=U.mode==="rise";_&&(x.riseT+=A,x.support=Math.min(1,x.riseT/.8));let u=U.mode==="kneel",R=u||_&&x.riseT<1.9,B=on(U.strength,0,1),G=Math.sqrt(Ms/.95),ct=0,bt=0,gt=0,ot=0;for(let V=0;V<v;V++){let ee=L[V]/b;E(V,ne),H(V,X),ct+=ne[0]*ee,bt+=ne[2]*ee,gt+=X[0]*ee,ot+=X[2]*ee}let lt=J[0],$=J[1];O(lt),O($),xt(lt),xt($);let Mt=x.hz,it=-x.hx;if(u)for(let V of J)V.planted[0]=V.k[0]+(V.p[0]-V.k[0])*.33,V.planted[1]=V.k[2]+(V.p[2]-V.k[2])*.33,!V.kneeDown&&V.kgap<.012&&(V.kneeDown=!0,xn("kneecap"+(V.side===1?"_l":"_r"),-Nt[1]*1.3,V.k,"fall"));let st=9;for(let V of J)V.swing||(st=Math.min(st,V.gap)),R&&(st=Math.min(st,V.kgap));x.grip+=on((st<.028?1:0)-x.grip,-A/.09,A/.05),x.airT=x.grip<.5?x.airT+A:0;let Gt=0,kt=0,te=U.hits>0,xe=Math.hypot(ct-me.start[0],bt-me.start[2])>8.5||U.time>x.fleeAt+16;if(!R&&U.bleed>.2&&U.time>x.fleeAt&&B>.3&&!xe){let V=(.2+.6*B)*(1-.45*x.legWound),ee=Math.sin(U.clock*1.1+x.phase[3])*(.25+.9*(1-B));Gt=(x.fleeDir[0]*Math.cos(ee)-x.fleeDir[1]*Math.sin(ee))*V,kt=(x.fleeDir[0]*Math.sin(ee)+x.fleeDir[1]*Math.cos(ee))*V;let he=Math.atan2(x.hz*Gt-x.hx*kt,x.hx*Gt+x.hz*kt),ce=on(he,-2.2*A,2.2*A),Fe=Math.cos(ce),Ae=Math.sin(ce),Zt=x.hx*Fe+x.hz*Ae,Ue=-x.hx*Ae+x.hz*Fe;x.hx=Zt,x.hz=Ue}x.walk[0]+=(Gt-x.walk[0])*Math.min(1,A*2),x.walk[1]+=(kt-x.walk[1])*Math.min(1,A*2);let Rt,qe,S=null;lt.swing?(Rt=$.planted[0],qe=$.planted[1],S=$):$.swing?(Rt=lt.planted[0],qe=lt.planted[1],S=lt):(Rt=(lt.planted[0]+$.planted[0])/2,qe=(lt.planted[1]+$.planted[1])/2);let k=ct-Rt,rt=bt-qe,K=S?Kn(S.planted[0],S.planted[1]):Math.max(Kn(lt.planted[0],lt.planted[1]),Kn($.planted[0],$.planted[1])),Q=ct+gt/G,Xt=bt+ot/G,ie=Q-Rt,Bt=Xt-qe,qt=Math.hypot(ie,Bt),se=Math.min(1,qt),Re=U.bleed>.2||U.stun>.05,ye=te&&Re?1-B+.35*Math.min(1,U.stun):0,Qt=U.clock,Ge=b*(.25+4.2*ye)*(R?.45:1),mn=Ge*(Math.sin(Qt*1.7+x.phase[0])*.55+Math.sin(Qt*.63+x.phase[1])*.45),C=Ge*(Math.sin(Qt*1.4+x.phase[2])*.55+Math.sin(Qt*.51+x.phase[3])*.45);if(x.buckle-=A,te&&!R&&x.buckle<-.5&&Jt()<A*((Re?.12:0)+1.5*ye+(Math.hypot(x.walk[0],x.walk[1])>.1?.8*x.legWound:0))){x.buckle=.24,x.buckleDip=.1+.2*Jt()+.12*ye;let V=Jt()*6.28,ee=(18+30*Jt())*(.6+ye);dt(we.pelvis,Math.cos(V)*ee,0,Math.sin(V)*ee),le.push({type:"buckle",pos:[ft[0],ft[1],ft[2]]})}let N=u?0:R?.35:.8+.5*(S?S.hurt:0),et=b*G*G*N*k+mn,Z=b*G*G*N*rt+C,Wt=x.walk[0]*.3,Lt=x.walk[1]*.3,oe=(S?50:150)*(.25+.75*B)+(R?120:0),Pe=Va(-1500*(k-Wt)-330*(gt-x.walk[0]),-1500*(rt-Lt)-330*(ot-x.walk[1]),oe);et+=Pe[0],Z+=Pe[1],x.reelT>0&&(x.reelT-=A,et+=x.reel[0]/.16,Z+=x.reel[1]/.16),et*=x.support*x.grip,Z*=x.support*x.grip,ut(we.pelvis,et*.5,0,Z*.5),ut(we.chest,et*.5,0,Z*.5);let Ye=K+(R?.5:Zh-.1*(1-B)),Ze=0,en=!1;if(_&&x.riseT<1&&(Ye=K+x.riseFrom+(.5-x.riseFrom)*(x.riseT/1)),x.buckle>0&&(Ye-=x.buckleDip),S&&S.hurt>0&&(Ye-=.13*S.hurt),!R){let V=0,ee=9,he=0;for(let ce of J){li(Je,[0,Ga,ce.side*oc],At);let Fe=Math.hypot((ce.swing?ce.to[0]:ce.planted[0])-ft[0]-At[0],(ce.swing?ce.to[1]:ce.planted[1])-ft[2]-At[2]),Ae=K-Ga+Math.sqrt(Math.max(0,Yh*Yh-Fe*Fe));ce.swing?(ee=Ae,he=on((ce.t-.4)/.4,0,1)):Ae>V&&(V=Ae,Ze=Fe)}V<Ye&&(Ye=V,en=!0),he>0&&ee<Ye&&(Ye+=(Math.max(ee,K+.6)-Ye)*he)}let be=x.hT;x.hT+=on(Ye-x.hT,-(en?3.2:2.2)*A,1.1*A);let Oe=en?Math.min(0,(x.hT-be)/A):0,An=Math.max(.05,ft[1]+Ga-K),gn=R?1:An/Math.hypot(An,Ze),Sn=(1.05+.75*B)*(S?1-.5*S.hurt:1-.25*(lt.hurt+$.hurt)),kn=on(b*Ms+12e3*(x.hT-ft[1])-1400*(Nt[1]-Oe),0,b*Ms*Math.max(.3,Sn*gn))*x.support*x.grip;u&&(x.hT=ft[1],kn=on(b*Ms*Ox-500*Nt[1],0,b*Ms*.8)*x.support*x.grip),ut(we.pelvis,0,kn*.55,0),ut(we.chest,0,kn*.45,0);let Ri=Va(ie*.9,Bt*.9,.38);F(we.pelvis,pe),li(pe,[-1,0,0],tt);let Ka=Math.atan2(tt[2]*x.hx-tt[0]*x.hz,tt[0]*x.hx+tt[2]*x.hz);q(we.pelvis,Y),Vt(we.pelvis,520*x.support,46*x.support,Ri[0]*.3,Ri[1]*.3,(70*Ka-7*Y[1])*x.support),Vt(we.chest,900*x.support*(.5+.5*B),80*x.support,Ri[0],Ri[1],0),x.stepCool-=A;let Gs=(V,ee)=>{let he=qt>1e-4?1/qt:0,ce=.02+.2*(1-B),Fe=Q-V.planted[0],Ae=Xt-V.planted[1],Zt=Math.exp(G*Math.sqrt(N)*ee*(.55+.45*B));return[V.planted[0]+Fe*Zt+ie*he*.05-x.walk[0]/G*.55+(Jt()-.5)*ce,V.planted[1]+Ae*Zt+Bt*he*.05-x.walk[1]/G*.55+(Jt()-.5)*ce]},Hs=(V,ee,he)=>{let ce=he[0]-ee.planted[0],Fe=he[1]-ee.planted[1],Ae=(.36+.36*B)*(1-.35*V.hurt);[ce,Fe]=Va(ce,Fe,Ae);let Zt=(ce*Mt+Fe*it)*V.side;Zt<.1&&(ce+=(.1-Zt)*V.side*Mt,Fe+=(.1-Zt)*V.side*it);let Ue=ee.planted[0]+ce,He=ee.planted[1]+Fe;return[Ue,He,Math.hypot(Ue-he[0],He-he[1])]};if(R){if(!u)for(let V of J){let ee=ct+x.hx*-.16+Mt*V.side*.12,he=bt+x.hz*-.16+it*V.side*.12,ce=Va(ee-V.planted[0],he-V.planted[1],.9*A);V.planted[0]+=ce[0],V.planted[1]+=ce[1]}}else if(S){let V=S===lt?$:lt;if(V.t+=A/V.T,V.t<.65&&!V.tidy){let ee=Hs(V,S,Gs(S,(1-V.t)*V.T));V.to[0]+=(ee[0]-V.to[0])*.3,V.to[1]+=(ee[1]-V.to[1])*.3}if(V.t>.55&&V.gap<.012||V.t>=1.4||V.t>=1&&Kn(V.p[0],V.p[2])<K-.12){if(V.swing=!1,Kn(V.p[0],V.p[2])<K-.12)return Dt(null,"edge");let ee=Math.hypot(V.to[0]-V.p[0],V.to[1]-V.p[2]),he=Math.hypot(gt,ot);if(ee>.16&&Math.abs(Kn(V.to[0],V.to[1])-K)>.12){let Ae=he>.05?gt/he:-x.hx,Zt=he>.05?ot/he:-x.hz;return dt(we.pelvis,Ae*22,26,Zt*22),Dt([Ae*62,Zt*62],"trip")}V.planted=[V.p[0],V.p[2]],x.stepCool=.03+.12*(1-B);let ce=Math.hypot(gt,ot),Fe=Math.min(b*ce*.38,55*B*(1-.6*V.hurt));ce>.05&&(dt(we.chest,-gt/ce*Fe*.6,0,-ot/ce*Fe*.6),dt(we.pelvis,-gt/ce*Fe*.4,0,-ot/ce*Fe*.4)),te&&!V.tidy&&U.steps++,le.push({type:"step",pos:[V.p[0],K,V.p[2]],hurt:V.hurt})}}else{let V=Math.hypot(lt.planted[0]-$.planted[0],lt.planted[1]-$.planted[1]),ee=.115-.035*(1-B),he=qt<.06&&Math.hypot(gt,ot)<.12&&V>.36&&x.stepCool<-.35&&B>.45;if(x.stepCool<=0&&(qt>ee||he)){let ce,Fe;if(he)ce=x.lastFoot===0?1:0,Fe=[J[1-ce].planted[0]+J[ce].side*Mt*.2,J[1-ce].planted[1]+J[ce].side*it*.2];else{let He=[0,1].map(Pn=>{let Wn=Hs(J[Pn],J[1-Pn],Gs(J[1-Pn],.26));return{tgt:Wn,move:Math.hypot(Wn[0]-J[Pn].p[0],Wn[1]-J[Pn].p[2])}}),Cn=Pn=>Pn.tgt[2]-.25*Math.min(Pn.move,.4)+(Pn.move<.08?1:0);ce=Math.abs(Cn(He[0])-Cn(He[1]))<.02?x.lastFoot===0?1:0:Cn(He[0])<Cn(He[1])?0:1,Fe=[He[ce].tgt[0],He[ce].tgt[1]]}let Ae=J[ce],Zt=J[1-ce];Ae.swing=!0,Ae.t=0,Ae.from=[Ae.p[0],Ae.p[1],Ae.p[2]],Ae.to=Fe;let Ue=Math.hypot(Ae.to[0]-Ae.p[0],Ae.to[1]-Ae.p[2]);Ae.T=on(.15+.24*Ue,.17,.34)*(1.3-.3*B)*(qt>.3?.75:1)*(Zt.hurt>0?1-.3*Zt.hurt:1),Ae.lift=Ae.hurt>.3?.035:.07+.09*Jt()+.05*Math.min(1,qt*2),Ae.tidy=he,x.lastFoot=ce}}for(let V of J){if(H(V.shin,M),u){let he=.36+.42*(on(x.kneelT/x.kneelMax,0,1)*(1-.6*B))+.08*Math.sin(U.clock*.9+x.phase[V.side===1?0:1])*(1-B);vt(V,-Math.sin(he),-Math.cos(he),V.side*.1),I[V.shin].SetTargetAngle(he+Math.PI/2);continue}if(V.swing){let ee=on(V.t,0,1),he=ee*ee*(3-2*ee);V.ik[0]=V.from[0]+(V.to[0]-V.from[0])*he,V.ik[2]=V.from[2]+(V.to[1]-V.from[2])*he,V.ik[1]=K+V.lift*Math.sin(Math.PI*ee)-(ee>.5?.09*(ee-.5):0);let ce=1900,Fe=170,Ae=[ce*(V.ik[0]-V.p[0])-Fe*M[0],ce*(V.ik[1]-V.p[1])-Fe*M[1],ce*(V.ik[2]-V.p[2])-Fe*M[2]],Zt=Math.hypot(Ae[0],Ae[1],Ae[2]),Ue=Zt>650?650/Zt:1;ut(V.shin,Ae[0]*Ue*x.support,(Ae[1]*Ue-(V.t>1?160:0))*x.support,Ae[2]*Ue*x.support,V.p)}else{V.ik[0]=V.planted[0],V.ik[1]=K,V.ik[2]=V.planted[1];let ee=Va(1800*(V.planted[0]-V.p[0])-130*M[0],1800*(V.planted[1]-V.p[2])-130*M[2],480),he=on(40+7e3*V.gap,40,280)*x.support;ut(V.shin,ee[0]*x.support,-he,ee[1]*x.support,V.p),ut(we.pelvis,0,he-40*x.support,0)}wt(V,V.ik)}Ht(se,A),te&&(U.onFeet+=A,U.stumbled+=Math.hypot(ct-x.lastCom[0],bt-x.lastCom[1])),x.lastCom[0]=ct,x.lastCom[1]=bt;let Vs=V=>V.swing?Math.hypot(ct-V.p[0],bt-V.p[2]):Math.hypot(ct-V.planted[0],bt-V.planted[1]),Ws=Math.min(Vs(lt),Vs($));F(we.chest,pe);let Xs=1-2*(pe[0]*pe[0]+pe[2]*pe[2]);if(!U.alive||U.ko)return Dt(null,"out");if(_){if(x.riseT>x.riseFail||B<.3)return le.push({type:"gaveout",pos:[ft[0],ft[1],ft[2]]}),Dt(null,"gave out");if(x.riseT>2.7&&ft[1]-K>Zh-.16){U.mode="balance",U.getups++,x.offT=0,x.stepCool=.2;for(let V of J)V.swing=!1,V.planted=[V.p[0],V.p[2]];le.push({type:"up",pos:[ft[0],ft[1],ft[2]]})}else if(x.riseT>5)return Dt(null,"gave out");return}x.offT=!R&&(Ws>.46||Xs<.8)?x.offT+A:Math.max(0,x.offT-2*A);let at=Ws>(R?.5:.7)?"reach":x.offT>.3?"lean":qt>2.4?"capture":Xs<.45?"tilt":ft[1]-K<(R?.3:.52)?"height":"",Te=()=>{U.mode="kneel",U.kneels++,x.kneelT=0,x.kneelMax=1.6+3.2*Jt();for(let V of J)V.swing=!1,V.kneeDown=!1,V.planted=[V.p[0],V.p[2]];le.push({type:"kneel",pos:[ft[0],ft[1],ft[2]]})};if(at==="height"&&!R&&te&&Ws<.45&&Math.hypot(gt,ot)<1.4&&Xs>.75)return Te();if(at)return Dt(null,at);if(x.airT>.3)return Dt(null,"air");if(U.paralysed)return Dt(null,"spine");if(x.legT=!R&&(lt.broken>=3||$.broken>=3)?x.legT+A:0,x.legT>.35)return Dt(null,"leg");let Ve=Math.hypot(gt,ot);if(u&&Ve>2)return Dt(null,"thrown");if(R){if(x.kneelT+=A,u&&x.kneelT>Math.min(x.kneelMax,1.4)&&B>.52&&U.bleed<.5&&x.grip>.9&&wn()){U.mode="rise",x.riseT=1.9,x.riseFail=9,x.support=1,x.hT=ft[1],x.offT=0,x.buckle=-1.5;for(let V of J)V.swing=!1,V.planted=[V.p[0],V.p[2]];le.push({type:"rise",pos:[ft[0],ft[1],ft[2]],fromKnees:!0})}else if(B<.2||x.kneelT>x.kneelMax){let V=Jt()<.5?1:-1,ee=Jt()<.45;Dt(ee?[Mt*V*28,it*V*28]:[x.hx*30,x.hz*30],"slump")}}else te&&Ve<1.5&&(B<.5||x.buckle>0&&B<.72&&x.buckleDip>.24)&&Te()}function ue(A,x){let U=Pt,_=nt;xt(J[0]),xt(J[1]);let u=Math.min(J[0].gap,J[0].kgap,J[1].gap,J[1].kgap);U.grip+=on((u<.03?1:0)-U.grip,-x/.09,x/.05);let R=A*on(1-U.fallT/(.45+.6*A),0,1);if(R>0)for(let $ of J){let Mt=$.kgap<.03,it=$.gap<.03;if(!Mt&&!it)continue;O($);let st=Mt?$.k:$.p,Gt=Mt?Ss+.1:Yh+.08;li(Je,[0,Ga,$.side*oc],At);let kt=ft[0]+At[0]-st[0],te=ft[1]+At[1]-st[1],xe=ft[2]+At[2]-st[2],Rt=Math.hypot(kt,te,xe)||1;if(Rt>Gt||te/Rt<.25)continue;let qe=(Nt[0]*kt+Nt[1]*te+Nt[2]*xe)/Rt,S=on(b*Ms*.3-240*qe,0,b*Ms*.45)*R*(1-.7*$.hurt);ut(we.pelvis,S*kt/Rt,S*te/Rt,S*xe/Rt)}li(Ha(Je),[U.fallDir[0],0,U.fallDir[1]],Ct);let B=Ct[0],G=Ct[2],ct=Math.max(0,B),bt=on((.42-(ft[1]-Kn(ft[0],ft[2])))/.2,0,1);J.forEach(($,Mt)=>{let it,st,Gt;Mt===U.lead?(it=B*.95,st=G*.95+$.side*.08,Gt=.95-.65*ct):(it=B*.15-.3*(1-ct),st=$.side*.1,Gt=1.65),it*=1-bt,Gt*=1-.75*bt;let kt=Math.hypot(it,1,st);vt($,it/kt,-1/kt,st/kt),I[$.shin].SetTargetAngle(Gt)}),F(we.chest,pe),li(Ha(pe),[U.fallDir[0],0,U.fallDir[1]],Ct);let gt=Ct[0],ot=Ct[2],lt=U.grip<.3&&U.fallT>.35?1:0;if(jt(we.chest,Ji(0,1,0,.12+.4*Math.max(0,gt))),jt(we.head,Ji(0,1,0,.5*gt)),!(U.flinch>0))for(let $ of[1,-1]){let Mt=on(ot*$,-1,1),it=lt*.55*Math.sin(_.clock*11+$*1.7),st=on(-gt*1.25,-.8,1.3)+.15+it,Gt=-.25-.9*Math.max(0,Mt)+.3*Math.max(0,-Mt);jt($===1?we.uarm_l:we.uarm_r,Et(st,Gt,$)),I[$===1?we.larm_l:we.larm_r].SetTargetAngle(-.35-.3*lt)}}function _e(A){let x=Pt,U=nt,_=U.clock;x.support=Math.max(0,x.support-A/.14);let u=U.alive&&!U.ko;u||(x.fight=0);let R=U.mode==="fall"?x.fight*on(1-(x.fallT-1.3)/1.2,0,1)*(x.settle>.1?.5:1):0,B=u?.1+.32*U.strength:0;for(let G=1;G<v;G++){let ct=cn[G].zone,bt=Math.max(B,R*(ct==="arm"?.85:ct==="thigh"||ct==="shin"?.75:.7));ht[G]+=on(bt-ht[G],-(U.alive?3:1.1)*A,2*A)}if(R>.12)ue(R,A);else if(u){for(let G of J){let ct=_*(1.1+.5*U.strength)+x.phase[G.side===1?0:1];jt(G.thigh,Ji(0,1,0,.35+.4*Math.sin(ct))),I[G.shin].SetTargetAngle(.7+.6*Math.sin(ct+1.3))}Ht(0,A)}if(U.mode==="fall"){x.fallT=(x.fallT||0)+A;let G=ft[1]-Kn(ft[0],ft[2])<.45||nt.restTimer>.7||x.fallT>4;if(x.settle=G&&Math.hypot(Nt[0],Nt[1],Nt[2])<(x.fallT>4?1.2:.6)?x.settle+A:0,x.settle>.35){U.mode="down",U.downAt=U.time,x.settle=0,x.fallT=0,le.push({type:"down",pos:[Ot[0],Ot[1],Ot[2]],onFeet:U.onFeet});let ct=Kn(ft[0],ft[2]),bt=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([ot,lt])=>Math.abs(Kn(ft[0]+ot,ft[2]+lt)-ct)<.05)&&ft[1]-ct<.5,gt=on((U.blood-10)/70,0,1)*(1-.3*Math.min(1,U.stun));u&&gt>.42&&x.riseTries<2&&bt&&wn()?x.riseAt=U.time+.9+1.6*Jt()+2.5*Math.max(0,U.stun-.25):(x.riseAt=0,U.spent=!0)}}else if(U.mode==="down"&&x.riseAt>0&&U.time>x.riseAt){if(x.riseAt=0,!u||U.strength<.36||!wn()){U.spent=!0;return}F(we.chest,pe);let G=li(pe,[-1,0,0],tt)[1]>0,ct=E(we.head,ne),bt=ct[0]-ft[0],gt=ct[2]-ft[2],ot=Math.hypot(bt,gt)||1,lt=G?-1:1;x.hx=lt*bt/ot,x.hz=lt*gt/ot,U.mode="rise",x.riseT=0,x.riseTries++,x.support=0,x.offT=0,x.buckle=0,x.kneelT=0,x.riseFrom=Math.max(.12,ft[1]-Kn(ft[0],ft[2])),x.hT=ft[1],x.riseFail=Jt()<on((.75-U.strength)*1.6+.35*x.legWound,0,.9)?.9+Jt()*1.2:9;for(let $ of J)O($),$.swing=!1,$.planted=[$.p[0],$.p[2]];x.lastCom[0]=ft[0],x.lastCom[1]=ft[2],le.push({type:"rise",pos:[ft[0],ft[1],ft[2]]})}}function zt(A){for(le.length=0;Ke.length;)le.push(Ke.shift());let x=nt,U=Pt;x.clock+=A,x.hits>0&&(x.time+=A);let _=0;if(x.alive){for(let lt of ae){let $=Math.min(lt.rate*A,lt.left);lt.left-=$,x.blood-=$,lt.left>0&&(_+=lt.rate)}x.blood=Math.max(0,x.blood),x.blood<=0&&ze("Bled out")}if(x.bleed=_,x.stun=Math.max(0,x.stun-.2*A),(!x.alive||x.ko)&&(x.spent=!0),x.strength=x.alive&&!x.ko?on((x.blood-10)/70,0,1)*(1-.75*Math.min(1,x.stun)):0,U.flinch-=A,U.lookDown-=A,U.clutch&&x.clock>U.clutchEnd&&(U.clutch=null),E(we.pelvis,ft),H(we.pelvis,Nt),F(we.pelvis,Je),E(we.chest,Ot),H(we.chest,Se),x.mode==="balance"||x.mode==="kneel"||x.mode==="rise"){for(let lt=1;lt<v;lt++){let Mt=cn[lt].zone==="thigh"||cn[lt].zone==="shin"?.95:.35+.65*x.strength;ht[lt]+=on(Mt-ht[lt],-3*A,3*A)}Ut(A)}else _e(A);Kt(),s.Step(A,1);let u=0;for(let lt=0;lt<v;lt++){H(lt,M);let $=M[0]-mt[lt*3],Mt=M[1]-mt[lt*3+1]+Ms*A,it=M[2]-mt[lt*3+2];mt[lt*3]=M[0],mt[lt*3+1]=M[1],mt[lt*3+2]=M[2];let st=Math.hypot($,Mt,it);u=Math.max(u,Math.hypot(M[0],M[1],M[2])),It[lt]-=A;let Gt=x.mode==="fall"||x.mode==="down";if(x.hits>0&&Gt&&st>2.2&&It[lt]<=0){It[lt]=.18;let kt=cn[lt],te=st*(kt.zone==="head"?5:kt.zone==="chest"||kt.zone==="gut"?1.6:.8);x.damage+=te,x.impacts++;let xe=j(lt);le.push({type:"impact",part:lt,zone:kt.zone,pos:xe,dv:st,dmg:te}),F(lt,pe),li(Ha(pe),[-$/st,-Mt/st,-it/st],tt);for(let[Rt,qe]of En(lt,tt))xn(Rt,st*qe,xe,"fall");kt.zone==="head"&&xn("neck",st*.9,xe,"fall"),kt.zone==="head"&&(x.stun=Math.min(1.6,x.stun+st*.09),x.stun>1.15&&je())}}if(Xe==="window")for(let lt=0;lt<v;lt++){if(E(lt,ne),ne[1]>ve.glassY+.6||ne[1]<ve.glassY-.3)continue;let $=Math.hypot(mt[lt*3],mt[lt*3+1],mt[lt*3+2]);if($<1.6)continue;let Mt=cn[lt].r+cn[lt].hh+.06+$*A*2;if(!(Math.abs(ne[1]-ve.glassY)>Mt))for(let it of f.panes)it.broken||ne[0]<it.min[0]-.1||ne[0]>it.max[0]+.1||ne[2]<it.min[1]-.1||ne[2]>it.max[1]+.1||y(it,[mt[lt*3],mt[lt*3+1],mt[lt*3+2]])}if(x.hits===0)return le;x.lowest=Math.min(x.lowest,ft[1]),x.drop=Math.max(0,me.start[1]+.93-x.lowest-.85);let R=Math.max(Math.hypot(mt[0],mt[1],mt[2]),Math.hypot(mt[3],mt[4],mt[5])),B=J.some(lt=>lt.swing&&!lt.tidy),G=J.some(lt=>lt.swing&&lt.tidy),ct=x.mode==="balance"?!B&&R<(G?.35:.2):u<.15;x.restTimer=ct?x.restTimer+A:0;let bt=x.restTimer>1.1,gt=x.stun>.05?2.6:1.5,ot=0;if(x.alive?x.bleed>.01?ot=0:x.mode==="balance"?ot=x.restTimer/gt:x.mode==="rise"||x.mode==="down"&&!x.spent?ot=0:ot=Math.max(x.restTimer/1.1,x.mode==="down"?(x.time-x.downAt)/3.5:0):ot=Math.min(x.restTimer/1.1,(x.time-x.diedAt)/1.6),x.wrap=on(ot,0,1),!x.done){let lt="";!x.alive&&bt&&x.time-x.diedAt>1.6?lt=x.outcome:x.alive&&x.bleed<=.01&&(x.mode==="fall"&&bt||x.mode==="down"&&x.spent&&(bt||x.time-x.downAt>3.5)||x.mode==="balance"&&x.restTimer>gt||x.ko&&bt)?lt=x.ko?"Out cold":x.mode==="balance"?"Still standing":"Down, alive":x.time>80&&(lt="Time"),lt&&(x.done=!0,x.outcome=lt,le.push({type:"done",outcome:lt}))}return le}function ge(){let A=nt,x=!A.alive,U=Object.values(A.bones),_=[["Stagger steps",String(A.steps),Math.min(A.steps,40)*14],["Stumbled",A.stumbled.toFixed(1)+" m",Math.round(Math.min(A.stumbled,12)*18)],["Knee drops",String(A.kneels),A.kneels*120],["Put down",A.downAt>=0?"yes":"\u2014",A.downAt>=0?90:0],["Got back up",String(A.getups),A.getups*140],["Hard landings",String(A.impacts),Math.round(A.damage*Bx)],["Bones",String(U.length),U.reduce((R,B)=>R+jh[B],0)],["Fell",A.drop.toFixed(1)+" m",Math.round(A.drop*65)],["Glass",A.glass+(A.glass===1?" pane":" panes"),A.glass*130],["Trick shots",String(A.fallHits),A.fallHits*150+A.airHits*250],["Out cold",A.ko?"yes":"\u2014",A.ko?150:0],[x?A.outcome:"Bled out",x?A.diedAt.toFixed(1)+" s":"\u2014",x?A.diedAt>.3?260:60:0]];return{lines:_.filter((R,B)=>R[2]>0||B<3),total:_.reduce((R,B)=>R+B[2],0)}}function De(A){gi[A]&&(Xe=A,me=gi[A],un())}let $t=[0,0,0,1];return un(),{parts:cn,state:nt,wounds:ae,feet:J,step:zt,hit:sn,reset:un,payout:ge,pos:j,mass:L,totalMass:b,statics:p,setLevel:De,groundY:Kn,get level(){return me},get levelKey(){return Xe},glass:{tiles:f.tiles,panes:f.panes,transform(A,x){let U=f.tiles[A];return pt(U.id,x),z(U.id,$t),x[3]=$t[0],x[4]=$t[1],x[5]=$t[2],x[6]=$t[3],x}},transform(A,x){E(A,x);let U=a.GetRotation(D[A]);return x[3]=U.GetX(),x[4]=U.GetY(),x[5]=U.GetZ(),x[6]=U.GetW(),x},_debug:{joints:I,tone:ht,IDX:we,ctl:Pt,impulse:dt,armQ:Et,setTarget:jt}}}var su={};pu(su,{GOALS:()=>es,LEVEL_STARS:()=>ks,SHOP:()=>ts,TOOL_ORDER:()=>Rf,TOTAL_STARS:()=>cc,actionsPerTake:()=>Wa,blocked:()=>Xa,buy:()=>Qh,finishTake:()=>nu,levelOpen:()=>Qi,loadSave:()=>Jh,multiplier:()=>Lr,newSave:()=>Pr,nextBuy:()=>tu,nextGoal:()=>eu,owns:()=>Ai,stars:()=>Ir,tools:()=>hc,unlockEverything:()=>iu});var Rf=["poke","shove","bat","pistol","shotgun","ram"],ts=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2e3,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:9e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:28e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:7e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:18e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:9e4,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:4e3},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:22e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:6e4,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:6e3}],Af={"pay.1":.25,"pay.2":.3,"pay.3":.4},ks={yard:0,stairs:1,window:4},es={yard:[{id:"y1",text:"Make him take a step",reward:30,test:n=>n.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:n=>n.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:n=>n.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:n=>n.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:n=>n.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(n,t)=>n.drop>=3&&t===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:n=>n.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:n=>n.drop>=3&&n.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:n=>n.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:n=>n.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(n,t)=>n.drop>=2.5&&t===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:n=>n.airHits>=1}]},cc=Object.values(es).reduce((n,t)=>n+t.length,0);function Pr(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1,muted:!1}}function Jh(n){try{let t=JSON.parse(n);if(t&&t.v===1&&Array.isArray(t.owned)&&Array.isArray(t.goals))return Object.assign(Pr(),t)}catch{}return Pr()}var Ai=(n,t)=>n.owned.includes(t),Ir=n=>n.goals.length,Qi=(n,t)=>Ir(n)>=(ks[t]||0),hc=n=>Rf.filter(t=>t==="poke"||Ai(n,"tool."+t)),Wa=n=>1+["actions.2","actions.3","actions.4"].filter(t=>Ai(n,t)).length,Lr=n=>Object.keys(Af).reduce((t,e)=>Ai(n,e)?t*(1+Af[e]):t,1);function Xa(n,t){return Ai(n,t.id)?"Owned":t.needs&&!Ai(n,t.needs)?"Needs "+ts.find(e=>e.id===t.needs).name:n.bank<t.price?"Not enough":""}function Qh(n,t){let e=ts.find(i=>i.id===t);return!e||Xa(n,e)?!1:(n.bank-=e.price,n.owned.push(t),!0)}function tu(n){return ts.filter(t=>!Ai(n,t.id)&&(!t.needs||Ai(n,t.needs))).sort((t,e)=>t.price-e.price)[0]||null}function eu(n,t){return(es[t]||[]).find(e=>!n.goals.includes(e.id))||null}function nu(n,t,e,i){let s=Math.round(i*Lr(n)),r=(es[t]||[]).filter(h=>!n.goals.includes(h.id)&&h.test(e,e.hits)),a=r.reduce((h,p)=>h+p.reward,0),o=Object.keys(ks).filter(h=>Qi(n,h));for(let h of r)n.goals.push(h.id);let l=Object.keys(ks).filter(h=>Qi(n,h)&&!o.includes(h)),c=s>(n.best[t]||0);return c&&(n.best[t]=s),n.bank+=s+a,n.earned+=s+a,n.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function iu(n){for(let t of ts)Ai(n,t.id)||n.owned.push(t.id);for(let t of Object.values(es).flat())n.goals.includes(t.id)||n.goals.push(t.id)}var Hx={id:"full",fluid:{particle:10096662,ground:8129810,groundOpacity:.9,soak:5967890,soakAmount:.85,mark:3998984,gauge:"#b3151c"},words:{},shop:{},injury:{levels:["","bruised","broken","shattered"],parts:{skull:"Skull",nose:"Nose",jaw:"Jaw",neck:"Neck",collarbone:"Collarbone",ribs:"Ribs",spine:"Spine",pelvis:"Pelvis",humerus:"Humerus",forearm:"Forearm",wrist:"Wrist",femur:"Femur",kneecap:"Kneecap",tibia:"Tibia",ankle:"Ankle"},special:{"neck.1":"Neck wrenched","skull.2":"Skull fractured","ribs.2":"Ribs cracked"},none:"Nothing broken"},sounds:{wound:"woundBlood",squirt:"squirtBlood",snap:"snapBone"},contentNote:"Contains blood and violence against a test dummy.",haptics:!1,ads:!1},Vx={id:"sand",fluid:{particle:14861965,ground:13479276,groundOpacity:.96,soak:9666666,soakAmount:.45,mark:2826777,gauge:"#dcbb78"},words:{Blood:"Sand","Bled out":"Ran empty","Bleeding out \u25B8\u25B8":"Running empty \u25B8\u25B8","Down, bleeding out":"Down, running empty","Staggering, bleeding":"Staggering, leaking","Hit, bleeding":"Hit, leaking","shot \xB7 bleeds":"shot \xB7 leaks","shot \xB7 bleeds fast":"shot \xB7 leaks fast",Bones:"Seams","Broken neck":"Neck seam burst","Skull shattered":"Head burst"},shop:{"tool.pistol":"He springs a leak: the stagger, the hobble, the knees.","tool.shotgun":"Leaks fast, and hits hard enough to send him over an edge."},injury:{levels:["","scuffed","split","burst"],parts:{skull:"Head",nose:"Face",jaw:"Chin",neck:"Neck seam",collarbone:"Shoulder seam",ribs:"Chest panel",spine:"Back seam",pelvis:"Hip seam",humerus:"Upper arm",forearm:"Forearm",wrist:"Wrist seam",femur:"Thigh",kneecap:"Knee seam",tibia:"Shin",ankle:"Ankle seam"},special:{"neck.1":"Neck seam strained"},none:"Nothing split"},sounds:{wound:"woundSand",squirt:"squirtSand",snap:"snapSeam"},contentNote:"Slapstick violence against a sand-filled test dummy.",haptics:!0,ads:!1};function Cf(){return typeof location>"u"?new Set:new Set((location.hash.slice(1)+"&"+location.search.slice(1)).toLowerCase().split(/[-&=]/).filter(Boolean))}function Wx(n=Cf()){return n.has("sand")?Vx:Hx}var zs=Cf(),jn=Wx(zs),ci=n=>jn.words[n]??n;function ru(n,t,e){let i=jn.injury,r=i.special[n+"."+e]||i.parts[n]+" "+i.levels[e];return t?(t===1?"Left ":"Right ")+r.charAt(0).toLowerCase()+r.slice(1):r}var uc=Math.PI*2,ki=44100;function If(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var qa=n=>Math.max(1,Math.round(n*ki));function _i(n,t,e,i=.707){let s=uc*Math.min(e,ki*.45)/ki,r=Math.cos(s),a=Math.sin(s)/(2*i),o,l,c;t==="lp"?(o=(1-r)/2,l=1-r,c=o):t==="hp"?(o=(1+r)/2,l=-(1+r),c=o):(o=a,l=0,c=-a);let h=1+a,p=-2*r,d=1-a,f=new Float32Array(n.length),y=0,w=0,g=0,m=0;for(let b=0;b<n.length;b++){let L=(o*n[b]+l*y+c*w-p*g-d*m)/h;w=y,y=n[b],m=g,g=L,f[b]=L}return f}function Le(n,t,{attack:e=.001,decay:i=.05,lp:s,hp:r,bp:a,q:o}={}){let l=new Float32Array(qa(t));for(let c=0;c<l.length;c++)l[c]=n()*2-1;return r&&(l=_i(l,"hp",r,o)),s&&(l=_i(l,"lp",s,o)),a&&(l=_i(l,"bp",a,o||1)),Lf(l,e,i)}function hn(n,t,{f1:e=t,glide:i=.05,attack:s=.001,decay:r=.08,wave:a="sine"}={}){let o=new Float32Array(qa(n)),l=0;for(let c=0;c<o.length;c++){let h=e+(t-e)*Math.exp(-(c/ki)/i);l+=h/ki;let p=l%1;o[c]=a==="saw"?2*p-1:a==="tri"?1-4*Math.abs(p-.5):Math.sin(uc*p)}return Lf(o,s,r)}function Lf(n,t,e){let i=Math.max(1,t*ki);for(let s=0;s<n.length;s++)n[s]*=Math.min(1,s/i)*Math.exp(-Math.max(0,s-i)/(e*ki));return n}function Yt(n,t,e=0,i=1){let s=qa(e)-1;for(let r=0;r<t.length&&s+r<n.length;r++)n[s+r]+=t[r]*i;return n}function yn(n,{drive:t=1,peak:e=.9,fade:i=.02,presence:s=2}={}){if(s){let o=_i(n,"hp",250);for(let l=0;l<n.length;l++)n[l]+=s*o[l]}let r=0;for(let o=0;o<n.length;o++)t!==1&&(n[o]=Math.tanh(n[o]*t)),r=Math.max(r,Math.abs(n[o]));let a=qa(i);for(let o=0;o<n.length;o++)n[o]*=e/(r||1)*Math.min(1,(n.length-o)/a);return n}var dn=n=>new Float32Array(qa(n));function Pf(n,t=1){let e=dn(.5),i=.9+n()*.2;return Yt(e,hn(.45,100*i,{f1:46*i,glide:.05,decay:.09*t}),0,1),Yt(e,hn(.2,210*i,{f1:90,glide:.03,decay:.04}),0,.6),Yt(e,Le(n,.25,{lp:620,decay:.045}),0,.6),Yt(e,Le(n,.2,{bp:480*i,q:.9,decay:.05}),0,.8),Yt(e,Le(n,.4,{lp:170,decay:.12*t}),0,.4),e}var dc={thud:[3,n=>yn(Pf(n),{drive:1.4,presence:6})],limb:[3,n=>{let t=dn(.26),e=.85+n()*.3;return Yt(t,hn(.2,155*e,{f1:70,glide:.03,decay:.05}),0,.7),Yt(t,Le(n,.12,{bp:1200*e,q:.8,decay:.025}),0,.7),Yt(t,Le(n,.2,{lp:500,decay:.05}),0,.4),yn(t,{drive:1.2})}],knock:[3,n=>{let t=dn(.26),e=.9+n()*.2;return Yt(t,hn(.2,320*e,{f1:240*e,glide:.02,decay:.035}),0,.8),Yt(t,hn(.1,640*e,{decay:.02}),0,.3),Yt(t,Le(n,.06,{bp:1800,q:1.2,decay:.012}),0,.5),Yt(t,hn(.22,110,{f1:60,glide:.04,decay:.06}),0,.5),yn(t,{drive:1.3})}],step:[4,n=>{let t=dn(.14),e=.85+n()*.3;return Yt(t,Le(n,.1,{lp:900*e,decay:.018}),0,.8),Yt(t,Le(n,.1,{bp:700*e,q:1,decay:.02}),0,.7),Yt(t,hn(.12,120*e,{f1:70,glide:.02,decay:.03}),0,.5),yn(t)}],scuff:[3,n=>{let t=dn(.32);return Yt(t,Le(n,.3,{bp:1300+n()*500,q:.6,attack:.03,decay:.07}),0,1),Yt(t,Le(n,.3,{lp:400,attack:.02,decay:.06}),0,.4),yn(t)}],knees:[2,n=>{let t=dn(.5);return Yt(t,dc.limb[1](n),0,1),Yt(t,dc.limb[1](n),.07+n()*.03,.8),Yt(t,Le(n,.3,{bp:1500,q:.6,attack:.02,decay:.08}),.05,.25),yn(t,{drive:1.2})}],poke:[2,n=>{let t=dn(.1),e=.9+n()*.2;return Yt(t,hn(.09,270*e,{f1:180,glide:.02,decay:.02}),0,.7),Yt(t,Le(n,.03,{hp:2500,decay:.004}),0,.3),yn(t)}],shove:[2,n=>{let t=dn(.42);return Yt(t,Le(n,.35,{lp:520,attack:.012,decay:.07}),0,.9),Yt(t,hn(.4,78,{f1:50,glide:.06,attack:.005,decay:.09}),0,.7),Yt(t,Le(n,.3,{bp:620,q:.8,attack:.008,decay:.06}),0,.7),Yt(t,Le(n,.25,{bp:3500,q:.7,attack:.01,decay:.05}),0,.12),yn(t,{drive:1.3,presence:5})}],bat:[2,n=>{let t=dn(.55),e=.93+n()*.14;return Yt(t,Le(n,.05,{bp:2400*e,q:2,attack:3e-4,decay:.006}),0,1),Yt(t,hn(.12,880*e,{f1:820*e,decay:.018}),0,.6),Yt(t,hn(.06,1900*e,{decay:.01}),0,.3),Yt(t,Pf(n,1.1),.008,.9),yn(t,{drive:1.6,presence:4})}],ram:[1,n=>{let t=dn(1.1);return Yt(t,hn(1,115,{f1:36,glide:.08,decay:.28}),0,1),Yt(t,Le(n,.9,{lp:250,decay:.3}),0,.7),Yt(t,Le(n,.2,{lp:1500,decay:.03}),0,.6),Yt(t,hn(.5,230,{f1:70,glide:.05,decay:.12}),0,.6),Yt(t,Le(n,.5,{bp:520,q:.7,decay:.14}),0,.7),yn(t,{drive:2.2,fade:.1,presence:8})}],pistol:[2,n=>{let t=dn(1.15),e=()=>{let i=dn(.3);return Yt(i,Le(n,.25,{hp:900,bp:2200,q:.7,attack:2e-4,decay:.022}),0,1),Yt(i,hn(.3,175,{f1:55,glide:.02,decay:.06}),0,.9),Yt(i,Le(n,.3,{lp:1200,decay:.18}),.01,.25),i};Yt(t,e(),0,1);for(let[i,s]of[[.09,.22],[.17,.12],[.31,.07]])Yt(t,_i(e(),"lp",1400),i,s);return Yt(t,Le(n,1,{lp:700,attack:.02,decay:.45}),.02,.08),yn(t,{drive:2.5,fade:.15,presence:3.5})}],shotgun:[2,n=>{let t=dn(1.7),e=()=>{let i=dn(.6);return Yt(i,Le(n,.5,{bp:1100,q:.6,attack:3e-4,decay:.05}),0,1),Yt(i,Le(n,.1,{hp:2500,decay:.012}),0,.6),Yt(i,hn(.6,115,{f1:38,glide:.03,decay:.12}),0,1),Yt(i,Le(n,.6,{lp:800,decay:.3}),.01,.35),i};Yt(t,e(),0,1);for(let[i,s]of[[.11,.25],[.23,.14],[.4,.08]])Yt(t,_i(e(),"lp",1e3),i,s);return Yt(t,Le(n,1.5,{lp:500,attack:.03,decay:.7}),.03,.1),yn(t,{drive:3,fade:.2,presence:5})}],woundBlood:[3,n=>{let t=dn(.3);Yt(t,Le(n,.03,{hp:3e3,decay:.006}),0,.5),Yt(t,Le(n,.25,{lp:900,attack:.003,decay:.05}),0,.8),Yt(t,hn(.2,145,{f1:90,glide:.03,decay:.04}),0,.4);for(let e=0;e<3;e++)Yt(t,Le(n,.05,{bp:1500+n()*900,q:3,decay:.01}),.03+n()*.07,.25);return yn(t,{drive:1.3})}],woundSand:[3,n=>{let t=dn(.36);return Yt(t,Le(n,.3,{bp:4300+n()*600,q:.8,attack:.002,decay:.09}),0,.8),Yt(t,Le(n,.15,{lp:500,decay:.03}),0,.5),yn(t)}],squirtBlood:[3,n=>{let t=dn(.3),e=.85+n()*.3;Yt(t,Le(n,.2,{bp:1100*e,q:1.6,attack:.012,decay:.045}),0,.9),Yt(t,Le(n,.14,{bp:2600*e,q:2.2,attack:.02,decay:.03}),.01,.4),Yt(t,hn(.12,240*e,{f1:130,glide:.04,attack:.008,decay:.03}),0,.3);for(let i=0;i<2;i++)Yt(t,Le(n,.04,{lp:1800,decay:.008}),.13+n()*.09,.25);return yn(t,{drive:1.2})}],squirtSand:[3,n=>{let t=dn(.32);return Yt(t,Le(n,.28,{bp:4800+n()*800,q:.9,attack:.02,decay:.07}),0,.8),Yt(t,Le(n,.2,{hp:7e3,attack:.03,decay:.06}),.02,.3),yn(t)}],snapBone:[3,n=>{let t=dn(.2),e=.85+n()*.3;return Yt(t,Le(n,.03,{bp:2400*e,q:1.6,decay:.006}),0,1),Yt(t,hn(.05,900*e,{f1:260,glide:.012,decay:.012}),0,.7),Yt(t,Le(n,.03,{bp:3300*e,q:1.4,decay:.005}),.028+n()*.02,.6),Yt(t,hn(.12,150,{f1:80,glide:.03,decay:.03}),0,.35),yn(t,{drive:1.5})}],snapSeam:[3,n=>{let t=dn(.3),e=.85+n()*.3;for(let i=0;i<7;i++)Yt(t,Le(n,.02,{bp:(1500+n()*900)*e,q:1.1,decay:.006}),i*.016+n()*.006,.5+n()*.5);return Yt(t,Le(n,.16,{lp:700,decay:.05}),0,.3),yn(t,{drive:1.2})}],glass:[2,n=>{let t=dn(1.9);Yt(t,Le(n,.3,{hp:2500,attack:5e-4,decay:.05}),0,1),Yt(t,Le(n,.5,{bp:5e3,q:1,decay:.15}),0,.5);for(let e=0;e<28;e++)Yt(t,hn(.5,1800+n()*7200,{decay:.02+n()*.14}),n()*.12,.05+n()*.2);for(let e=0;e<36;e++)Yt(t,hn(.1,2500+n()*7500,{decay:.008+n()*.022}),.15+Math.pow(n(),1.6)*1.4,.03+n()*.09);return yn(t,{drive:1.2,fade:.1})}],whoosh:[1,n=>{let t=dn(.6);return Yt(t,Le(n,.5,{lp:900,attack:.08,decay:.12}),0,.5),Yt(t,Le(n,.6,{lp:260,attack:.15,decay:.2}),0,.8),yn(t,{peak:.6,fade:.1})}],grunt:[4,n=>{let t=dn(.4),e=.85+n()*.35,i=hn(.3,128*e,{f1:84*e,glide:.12,attack:.012,decay:.07,wave:"saw"});return Yt(t,_i(i,"bp",520*e,4),0,1),Yt(t,_i(i,"bp",980*e,5),0,.5),Yt(t,Le(n,.3,{bp:1700,q:1,attack:.02,decay:.08}),0,.14),yn(_i(t,"lp",2600),{drive:1.5})}],groan:[3,n=>{let t=dn(.9),e=.85+n()*.3,i=hn(.8,112*e,{f1:62*e,glide:.35,attack:.05,decay:.3,wave:"saw"});return Yt(t,_i(i,"bp",480*e,4),0,1),Yt(t,_i(i,"bp",860*e,5),0,.4),Yt(t,Le(n,.8,{bp:1500,q:.8,attack:.08,decay:.3}),0,.2),yn(_i(t,"lp",2200),{drive:1.4,fade:.1})}],click:[1,n=>{let t=dn(.04);return Yt(t,hn(.03,1200,{decay:.006}),0,.7),Yt(t,Le(n,.01,{hp:4e3,decay:.002}),0,.4),yn(t,{peak:.5,fade:.005})}],deny:[1,()=>{let n=dn(.16);return Yt(n,hn(.15,300,{f1:220,glide:.05,decay:.05,wave:"tri"}),0,1),yn(n,{peak:.6})}],buy:[1,n=>{let t=dn(.45);return Yt(t,hn(.2,880,{decay:.07,wave:"tri"}),0,.7),Yt(t,hn(.35,1320,{decay:.1,wave:"tri"}),.07,.8),Yt(t,Le(n,.2,{bp:7e3,q:2,decay:.05}),.07,.25),yn(t,{peak:.6})}],goal:[1,()=>{let n=dn(.8);return[660,880,1320].forEach((t,e)=>Yt(n,hn(.5,t,{decay:.16,wave:"tri"}),e*.09,.7)),yn(n,{peak:.6,fade:.1})}],stamp:[1,n=>{let t=dn(.3);return Yt(t,Le(n,.1,{lp:1500,decay:.02}),0,.8),Yt(t,hn(.25,140,{f1:80,glide:.03,decay:.06}),0,.9),Yt(t,hn(.2,420,{f1:300,glide:.03,decay:.04}),0,.5),yn(t,{peak:.7})}]},au=Object.keys(dc);function Xx(){let n={};return au.forEach((t,e)=>{let[i,s]=dc[t],r=If(1e3+e*77);n[t]=Array.from({length:i},()=>s(r))}),n}function Df(){let n=Xx(),t={},e={},i=null,s,r,a,o={},l=!1,c=1,h=null,p=null,d=null;function f(){if(i){i.state==="suspended"&&i.resume();return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{i=null;return}s=i.createGain(),r=i.createBiquadFilter(),r.type="lowpass",r.frequency.value=2e4;let w=i.createDynamicsCompressor();w.threshold.value=-14,w.ratio.value=6,w.attack.value=.003,w.release.value=.2,a=i.createGain(),a.gain.value=l?0:.9,s.connect(r).connect(w).connect(a).connect(i.destination);for(let T of au)o[T]=n[T].map(D=>{let I=i.createBuffer(1,D.length,ki);return I.getChannelData(0).set(D),I});let g=ki*4,m=i.createBuffer(1,g,ki),b=m.getChannelData(0),L=If(5);for(let T=0;T<g;T++)b[T]=(L()*2-1)*(.6+.4*Math.sin(uc*T/g)*Math.sin(uc*3*T/g));for(let T=0;T<2e3;T++){let D=T/2e3;b[T]=b[T]*D+b[g-2e3+T]*(1-D)}h=i.createBufferSource(),h.buffer=m,h.loop=!0,d=i.createBiquadFilter(),d.type="lowpass",d.frequency.value=400,p=i.createGain(),p.gain.value=.035,h.connect(d).connect(p).connect(s),h.start()}function y(w,{vol:g=1,rate:m=1,pan:b=0,delay:L=0,ui:T=!1}={}){if(!i||l||!o[w]||g<=.003)return;let D=o[w];t[w]=((t[w]||0)+1)%D.length,e[w]=(e[w]||0)+1;let I=i.createBufferSource();I.buffer=D[t[w]],I.playbackRate.value=m*(T?1:.55+.45*Math.sqrt(c))*(.97+Math.random()*.06);let v=i.createGain();v.gain.value=Math.min(1,g);let E=I.connect(v);if(b&&i.createStereoPanner){let H=i.createStereoPanner();H.pan.value=Math.max(-1,Math.min(1,b)),E=E.connect(H)}E.connect(T?a:s),I.start(i.currentTime+L)}return{unlock:f,play:y,played:e,names:au,get ready(){return!!i},get muted(){return l},setMuted(w){l=!!w,a&&a.gain.setTargetAtTime(l?0:.9,i.currentTime,.02)},setSlow(w){Math.abs(w-c)<.02||(c=Math.max(.05,Math.min(1,w)),i&&(r.frequency.setTargetAtTime(c>.9?2e4:1400+9e3*c,i.currentTime,.06),h.playbackRate.setTargetAtTime(.5+.5*c,i.currentTime,.1)))},setPlace(w){i&&d.frequency.setTargetAtTime({yard:420,stairs:190,window:750}[w]||400,i.currentTime,.3)}}}var Ft=n=>document.getElementById(n),fu=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim(),ti=n=>"$"+Math.round(n).toLocaleString("en-US");async function ty(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(n){return console.warn("WASM physics unavailable, using asm.js build",n),await(await import("./vendor/jolt-physics.js")).default()}}function ey(){if(zs.has("grounded"))return"grounded";if(zs.has("shipped"))return"shipped";try{return localStorage.getItem("imhit.physics")==="grounded"?"grounded":"shipped"}catch{return"shipped"}}var $a=ey(),ny=!0;function iy(n,t){let e=t(n),i=Ft("view"),s=new sc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ds,s.toneMapping=Ra,s.toneMappingExposure=1.15;let r=new Qr,a=new ke(fu("--sky"));r.background=a,r.fog=new Jr(a,14,38);let o=new qn(42,1,.1,120);r.add(new ba(13623538,3814960,1.05));let l=new Ea(16769725,2.6);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),l.shadow.bias=-6e-4,l.shadow.normalBias=.03,r.add(l,l.target);let c=new ke(fu("--concrete")),h=new ke(fu("--hazard")),p=(Tf.half+10)*2,d=(()=>{let C=document.createElement("canvas");C.width=C.height=2048;let N=C.getContext("2d"),et=C.width/p,Z=C.width/2;N.fillStyle="#"+c.clone().multiplyScalar(.62).getHexString(),N.fillRect(0,0,C.width,C.height),N.strokeStyle="rgba(0,0,0,0.13)",N.lineWidth=2;for(let Lt=-p/2;Lt<=p/2;Lt+=2)N.beginPath(),N.moveTo(Z+Lt*et,0),N.lineTo(Z+Lt*et,C.height),N.moveTo(0,Z+Lt*et),N.lineTo(C.width,Z+Lt*et),N.stroke();N.strokeStyle="rgba(241,239,233,0.42)",N.fillStyle="rgba(241,239,233,0.6)",N.lineWidth=3,N.font='700 30px "Big Shoulders Display", Impact, sans-serif',N.textAlign="center";for(let Lt=2;Lt<=12;Lt+=2)N.beginPath(),N.arc(Z,Z,Lt*et,0,Math.PI*2),N.stroke(),N.fillText(Lt+" m",Z+Lt*et,Z+34);N.strokeStyle="#"+h.getHexString(),N.lineWidth=5,N.beginPath(),N.moveTo(Z-14,Z-14),N.lineTo(Z+14,Z+14),N.moveTo(Z+14,Z-14),N.lineTo(Z-14,Z+14),N.stroke();let Wt=new oa(C);return Wt.anisotropy=8,Wt.colorSpace=Xn,Wt})(),f=new Rn(new ms(p,p),new Bn({map:d,roughness:.96}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,r.add(f);let y=new Rn(new fi(p,3.2,.4),new Bn({color:c.clone().multiplyScalar(.5),roughness:1}));y.position.set(0,1.6,-11),r.add(y);let w=new Rn(new ms(100,160),new Bn({color:c.clone().multiplyScalar(.36),roughness:1}));w.rotation.x=-Math.PI/2,w.position.set(0,-.003,105),w.receiveShadow=!0,r.add(w);let g={landing:new Bn({color:c,roughness:.95}),step:new Bn({color:c,roughness:.95}),stepAlt:new Bn({color:c.clone().multiplyScalar(.88),roughness:.95}),wall:new Bn({color:c.clone().multiplyScalar(.55),roughness:1}),building:new Bn({color:c.clone().multiplyScalar(.8),roughness:1}),sill:new Bn({color:c.clone().multiplyScalar(1.05),roughness:.9}),frame:new Bn({color:2237995,roughness:.5,metalness:.4})};e.statics.forEach((C,N)=>{let et=new Rn(new fi(C.h[0]*2,C.h[1]*2,C.h[2]*2),C.kind==="step"&&N%2?g.stepAlt:g[C.kind]);et.position.set(C.c[0],C.c[1],C.c[2]),et.castShadow=!0,et.receiveShadow=!0,r.add(et)});let m=[0,1,2].map(C=>{let N=-(.7+.3*C),et=new xr;return et.moveTo(-.2,N),et.lineTo(0,N+.16),et.lineTo(.2,N),et.lineTo(.2,N-.07),et.lineTo(0,N+.09),et.lineTo(-.2,N-.07),et.closePath(),et}),b=new Rn(new va(m),new fs({color:h,transparent:!0,opacity:.6,depthWrite:!1,side:pi}));b.geometry.rotateX(-Math.PI/2),r.add(b);let L=e.glass.tiles,T=new pr(new fi(1,1,1),new Bn({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),L.length);T.frustumCulled=!1,r.add(T);let D=new nn,I=new si,v=new W,E=new W,H=new Float32Array(7);function F(){for(let C=0;C<L.length;C++)e.glass.transform(C,H),D.compose(v.set(H[0],H[1],H[2]),I.set(H[3],H[4],H[5],H[6]),E.set(L[C].h[0]*2,L[C].h[1]*2,L[C].h[2]*2)),T.setMatrixAt(C,D);T.instanceMatrix.needsUpdate=!0}F();let q=new Bn({color:2303788,roughness:.6}),j=new Bn({color:15855593,roughness:.6}),pt=jn.fluid,z=new ke(pt.ground),ut=new ke(pt.soak);document.documentElement.dataset.edition=jn.id,document.documentElement.style.setProperty("--blood",pt.gauge),Ft("gauge-label").textContent=ci("Blood"),Ft("intro-note").textContent=jn.contentNote;let dt=[],ht=[],yt=new Float32Array(cn.length);cn.forEach((C,N)=>{let et=new Rn(new ha(C.r,C.hh*2,6,16),new Bn({color:h,roughness:.55}));et.castShadow=!0,et.receiveShadow=!0,et.userData.part=N;let Z=(Wt,Lt,oe,Pe,Ye)=>{let Ze=new Rn(Wt,Lt);return Ze.position.set(oe,Pe,Ye),Ze.castShadow=!0,et.add(Ze),Ze};C.parent>=0&&C.name!=="head"&&Z(new Ls(C.r*(C.name==="chest"?.86:1.12),14,10),q,C.j[0]-C.c[0],C.j[1]-C.c[1],C.j[2]-C.c[2]),C.name==="head"&&(Z(new fi(.05,.05,.15),q,-C.r+.01,.03,0),Z(new Ps(.045,.05,.1,10),q,0,-C.hh-C.r-.01,0)),C.name==="chest"&&(Z(new Ps(.06,.06,.012,20),j,-C.r+.004,.05,0).rotation.z=Math.PI/2,Z(new Ps(.028,.028,.016,16),q,-C.r+.003,.05,0).rotation.z=Math.PI/2),C.name.startsWith("larm")&&Z(new Ls(.048,12,8),q,0,-C.hh-C.r-.02,0),C.name.startsWith("lleg")&&Z(new fi(.24,.07,.09),q,-.06,-C.hh-C.r+.035,0),r.add(et),dt.push(et)});let _t=new Float32Array(7);function mt(){for(let C=0;C<dt.length;C++)e.transform(C,_t),dt[C].position.set(_t[0],_t[1],_t[2]),dt[C].quaternion.set(_t[3],_t[4],_t[5],_t[6]),dt[C].updateMatrixWorld()}function It(C,N,et){let Z=new Float32Array(C*3),Wt=new Float32Array(C*3),Lt=new Float32Array(C),oe=new On;oe.setAttribute("position",new ii(Z,3));let Pe=new ra(oe,new gr({color:N,size:et,transparent:!0,opacity:.95,depthWrite:!1}));Pe.frustumCulled=!1,r.add(Pe);let Ye=0;return{emit(Ze,en,be){let Oe=Ye;Ye=(Ye+1)%C,Z.set(Ze,Oe*3),Wt.set(en,Oe*3),Lt[Oe]=be},step(Ze,en){for(let be=0;be<C;be++){if(Lt[be]<=0){Z[be*3+1]=-50;continue}Lt[be]-=Ze,Wt[be*3+1]-=9.8*Ze;for(let Oe=0;Oe<3;Oe++)Z[be*3+Oe]+=Wt[be*3+Oe]*Ze;Z[be*3+1]<=e.groundY(Z[be*3],Z[be*3+2])+.005&&(en&&en(Z[be*3],Z[be*3+2]),Lt[be]=0)}oe.attributes.position.needsUpdate=!0}}}let jt=It(200,15326404,.05),Ce=It(700,pt.particle,.06),Et=It(260,14677759,.035);function Kt(C,N,et){for(let Z=0;Z<N;Z++){let Wt=Math.random()*6.28,Lt=et*(.3+Math.random());jt.emit(C,[Math.cos(Wt)*Lt,.5+Math.random()*Lt,Math.sin(Wt)*Lt],.4+Math.random()*.5)}}let nt=900,ae=new pr(new ua(1,14),new fs({color:z,transparent:!0,opacity:pt.groundOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),nt);ae.frustumCulled=!1,ae.count=0,r.add(ae);let J=new nn,Pt=new si().setFromEuler(new bi(-Math.PI/2,0,0)),Jt=new W,Ee=new W,me=0,Xe=[];function le(C,N,et,Z){J.compose(Ee.set(N,e.groundY(N,et)+.004+C%7*4e-4,et),Pt,Jt.set(Z,Z*(.75+C%5*.08),1)),ae.setMatrixAt(C,J),ae.instanceMatrix.needsUpdate=!0}function Ke(C,N,et){let Z=me;return me=(me+1)%nt,ae.count=Math.max(ae.count,Z+1),le(Z,C,N,et),Z}let un=(C,N)=>Ke(C,N,.02+Math.random()*.045),ze=new W,je=new W,En=0,pn=0,xn=0,wn=0;function pe(C){let N=e.state;En+=C*(N.alive?1.15+(100-N.blood)*.008:0);let et=Math.pow(Math.max(0,Math.sin(En*Math.PI*2)),6),Z=En%1,Wt=(pn<.12||pn>Z)&&Z>=.12;if(pn=Z,Wt&&N.blood>0){xn++;let Lt=null;for(let Pe of e.wounds)Pe.left>0&&(!Lt||(Pe.arterial?10:0)+Pe.rate>(Lt.arterial?10:0)+Lt.rate)&&(Lt=Pe);let oe=performance.now();Lt&&(Lt.arterial||xn%2===0)&&oe-wn>300&&(wn=oe,dt[Lt.part].getWorldPosition(ze),Ot.play(jn.sounds.squirt,{vol:Lt.arterial?.34:.1+Math.min(.1,Lt.rate*.02),rate:Lt.arterial?1:.85,pan:M([ze.x,ze.y,ze.z])}))}e.wounds.forEach((Lt,oe)=>{let Pe=Lt.left>0&&N.blood>0,Ye=Pe?Lt.rate:.25,Ze=dt[Lt.part];ze.set(Lt.at[0],Lt.at[1],Lt.at[2]),je.copy(ze).setY(0).normalize().transformDirection(Ze.matrixWorld),ze.applyMatrix4(Ze.matrixWorld),yt[Lt.part]=Math.min(1,yt[Lt.part]+C*Ye*.02),ht[oe]&&ht[oe].scale.setScalar(1+yt[Lt.part]*2.2);let en=Lt.arterial&&Pe?et:0,be=C*Ye*(Lt.arterial?8:5)+en*C*260;be=Math.floor(be)+(Math.random()<be%1?1:0);for(let Oe=0;Oe<be;Oe++){let An=en>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;Ce.emit([ze.x,ze.y,ze.z],[je.x*An+(Math.random()-.5)*.4,je.y*An+Math.random()*.5*An,je.z*An+(Math.random()-.5)*.4],1.6)}if(N.mode==="down"&&ze.y-e.groundY(ze.x,ze.z)<.4){let Oe=Xe[oe];(!Oe||Math.hypot(Oe.x-ze.x,Oe.z-ze.z)>.25)&&(Oe=Xe[oe]={i:Ke(ze.x,ze.z,.03),x:ze.x,z:ze.z,r:.03}),Oe.r=Math.min(.55,Math.sqrt(Oe.r*Oe.r+C*Ye*.0022)),le(Oe.i,Oe.x,Oe.z,Oe.r)}});for(let Lt=0;Lt<dt.length;Lt++)yt[Lt]>0&&dt[Lt].material.color.copy(h).lerp(ut,yt[Lt]*pt.soakAmount)}let X=new On().setFromPoints([new W,new W]),ne=new sa(X,new mr({color:16773577,transparent:!0,opacity:0}));ne.frustumCulled=!1,r.add(ne);let sn=[];function ft(C,N,et,Z=.25){let Wt=sn.find(Lt=>Lt.life<=0);if(!Wt){if(sn.length>=16)return;Wt={el:document.createElement("div"),life:0,pos:new W},Ft("app").appendChild(Wt.el),sn.push(Wt)}Wt.el.className="callout"+(et?" big":""),Wt.el.textContent=C,Wt.pos.set(N[0],N[1]+Z,N[2]),Wt.life=Wt.max=et?1.6:1.2}let Nt=new W;function Je(C){for(let N of sn){if(N.life<=0){N.el.style.opacity=0;continue}N.life-=C,N.pos.y+=C*.4,Nt.copy(N.pos).project(o);let et=(Nt.x*.5+.5)*i.clientWidth,Z=(-Nt.y*.5+.5)*i.clientHeight;N.el.style.transform=`translate(${et.toFixed(1)}px, ${Z.toFixed(1)}px) translate(-50%, -50%)`,N.el.style.opacity=Nt.z>1?0:Math.min(1,N.life/(N.max*.4))}}let Ot=Df();function Se(){let C=!Ot.ready;Ot.unlock(),C&&Ot.ready&&Ot.setPlace(e.levelKey)}let P=new W,M=C=>C?Math.max(-1,Math.min(1,P.set(C[0],C[1],C[2]).project(o).x))*.7:0,Y="poke",At=!1,tt=0,Ct=1,Vt=!1,wt=!1,St=1,Ht=-1e9,O=0,Tt=!1,xt=!1,vt=Pr();try{vt=Jh(localStorage.getItem("imhit.save"))}catch{}let Dt=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(vt))}catch{}},Ut=()=>vt.mode==="free",ue={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},_e={};function zt(){for(let N in _e)_e[N].remove(),delete _e[N];Ft("pick-list").innerHTML="";let C=hc(vt);C.includes(Y)||(Y=C.at(-1));for(let N of C)for(let[et,Z]of[["tools","tool-"+N],["pick-list","pick-"+N]]){let Wt=document.createElement("button");Wt.type="button",Wt.className="tool",Wt.id=Z,Wt.dataset.tool=N,Wt.innerHTML=`<b>${lc[N].label}</b><i>${ci(ue[N])}</i>`,Wt.addEventListener("click",()=>{Y=N,ge(),De(),Se(),Ot.play("click",{ui:!0,vol:.5})}),Ft(et).appendChild(Wt),et==="tools"&&(_e[N]=Wt)}Ft("pick").classList.toggle("single",C.length<2),ge(),Ft("slow").hidden=!Ai(vt,"slowmo"),Ft("slow").hidden&&(At=!1,Ft("slow").setAttribute("aria-pressed","false"))}function ge(){for(let C in _e)_e[C].setAttribute("aria-pressed",String(C===Y));for(let C of Ft("pick-list").children)C.setAttribute("aria-pressed",String(C.dataset.tool===Y));Ft("pick-name").textContent=lc[Y].label,Ft("pick-note").textContent=ci(ue[Y])}function De(){Ft("pick-list").hidden=!0,Ft("pick").setAttribute("aria-expanded","false")}Ft("pick").addEventListener("click",()=>{if(Ft("pick").classList.contains("single"))return;let C=Ft("pick-list").hidden;Ft("pick-list").hidden=!C,Ft("pick").setAttribute("aria-expanded",String(C))}),document.addEventListener("pointerdown",C=>{!Ft("pick-list").hidden&&!C.target.closest(".picker")&&De()},!0);function $t(){let C=Wa(vt);Ft("pips").innerHTML=Ut()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:C},(N,et)=>`<span class="pip${et<St?" on":""}"></span>`).join("")}function A(){let C=eu(vt,e.levelKey);Ft("hint").hidden=!1,Ft("hint").innerHTML=Ut()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(C?`<b>Goal</b> ${C.text} <span>\u2605 +${ti(C.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(Wa(vt)>=2&&!vt.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function x(){Ft("bank").textContent=ti(vt.bank),Ft("stars").textContent="\u2605 "+Ir(vt)+" / "+cc,Ft("mode-career").setAttribute("aria-pressed",String(!Ut())),Ft("mode-free").setAttribute("aria-pressed",String(Ut()));for(let N in U){let et=Qi(vt,N);U[N].disabled=!et;let Z=es[N].filter(Wt=>vt.goals.includes(Wt.id)).length;U[N].lastChild.textContent=et?gi[N].blurb+" \u2605 "+Z+"/"+es[N].length:"Opens at \u2605 "+ks[N]+". You have "+Ir(vt)+"."}Ft("where-level").textContent=e.level.label,Ft("where-mode").textContent=(Ut()?"Free play":"Career")+($a==="grounded"?" \xB7 experiment":"");let C=!Ut()&&ts.some(N=>!Xa(vt,N));Ft("shop-open").classList.toggle("ready",C),Ft("shop-open").textContent=C?"Shop \u2022":"Shop"}let U={};for(let[C,N]of Object.entries(gi)){let et=document.createElement("button");et.type="button",et.className="level",et.id="level-"+C,et.innerHTML=`<b>${Object.keys(gi).indexOf(C)+1} \xB7 ${N.label}</b><i>${N.blurb}</i>`,et.addEventListener("click",()=>_(C)),Ft("levels").appendChild(et),U[C]=et}function _(C,N){if(!N&&!Qi(vt,C))return;e.setLevel(C),vt.level=C,Dt(),Rt.aim={yaw:e.level.cam.yaw,pitch:e.level.cam.pitch,dist:e.level.cam.dist},gt();let et=e.level;for(let Z in U)U[Z].setAttribute("aria-pressed",String(Z===C));Ft("menu").hidden=!0,Ot.setPlace(C),Rt.aim={yaw:et.cam.yaw,pitch:et.cam.pitch,dist:et.cam.dist},Rt.swing=0,wt=!1,Rt.yaw=et.cam.yaw,Rt.pitch=et.cam.pitch,Rt.dist=et.cam.dist,Rt.target.set(et.start[0],et.start[1]+.92,et.start[2])}function u(C){vt.mode=C==="free"?"free":"career",Dt(),gt(),x()}Ft("where").addEventListener("click",()=>{Ft("menu").hidden=!1}),Ft("menu-close").addEventListener("click",()=>{Ft("menu").hidden=!0});for(let C of["menu","shop"])Ft(C).addEventListener("click",N=>{N.target===Ft(C)&&(Ft(C).hidden=!0)});if(Ft("mode-career").addEventListener("click",()=>u("career")),Ft("mode-free").addEventListener("click",()=>u("free")),!ny||zs.has("dev")){Ft("physics").hidden=!1;for(let C of["shipped","grounded"]){let N=Ft("physics-"+C);N.setAttribute("aria-pressed",String($a===C)),N.addEventListener("click",()=>{if(C===$a)return;try{localStorage.setItem("imhit.physics",C)}catch{}let et=[...zs].filter(Z=>Z!=="grounded"&&Z!=="shipped");location.hash=[...et,C].join("-"),location.reload()})}}function R(){Ft("shop-bank").textContent=ti(vt.bank)+" banked \xB7 \u2605 "+Ir(vt)+" / "+cc+(Lr(vt)>1?" \xB7 pays \xD7"+Lr(vt).toFixed(2):"");let C="";for(let N of[...new Set(ts.map(et=>et.group))]){C+=`<h3>${N}</h3>`;for(let et of ts.filter(Z=>Z.group===N)){let Z=Xa(vt,et);C+=`<div class="item${Z==="Owned"?" owned":""}"><div><b>${et.name}</b><p>${jn.shop[et.id]||et.does}</p></div>`+(Z==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${et.id}" id="buy-${et.id.replace(".","-")}"${Z?" disabled":""}>${ti(et.price)}${Z&&Z!=="Not enough"?`<small>${Z}</small>`:""}</button>`)+"</div>"}}C+="<h3>Goals</h3>";for(let[N,et]of Object.entries(es)){let Z=Qi(vt,N);C+=`<h4>${gi[N].label}${Z?"":" \xB7 opens at \u2605"+ks[N]}</h4><ul class="goals">`+et.map(Wt=>`<li class="${vt.goals.includes(Wt.id)?"got":""}"><span>${vt.goals.includes(Wt.id)?"\u2605":"\u2606"}</span>${Wt.text}<em>${ti(Wt.reward)}</em></li>`).join("")+"</ul>"}Ft("shop-list").innerHTML=C}Ft("shop-list").addEventListener("click",C=>{let N=C.target.closest(".buy");!N||!Qh(vt,N.dataset.id)||(Dt(),Se(),Ot.play("buy",{ui:!0,vol:.55}),N.dataset.id.startsWith("tool.")&&(Y=N.dataset.id.slice(5)),zt(),x(),R(),e.state.hits||gt())});function B(){R(),Ft("shop").hidden=!1}Ft("shop-open").addEventListener("click",B),Ft("result-shop").addEventListener("click",B),Ft("shop-close").addEventListener("click",()=>{Ft("shop").hidden=!0});let G=zs.has("dev");Ft("unlock-all").hidden=!G,Ft("unlock-all").addEventListener("click",()=>{iu(vt),Dt(),zt(),x(),R(),gt()});let ct=0;Ft("wipe").addEventListener("click",()=>{if(performance.now()-ct>3e3){ct=performance.now(),Ft("wipe").textContent="Tap again to erase everything";return}vt=Pr(),Dt(),ct=0,Ft("wipe").textContent="Erase progress",zt(),_("yard",!0),x(),R()}),Ft("slow").addEventListener("click",()=>{At=!At,Ft("slow").setAttribute("aria-pressed",String(At))});function bt(){Ft("sound").setAttribute("aria-pressed",String(!Ot.muted)),Ft("sound").textContent=Ot.muted?"Sound off":"Sound on"}Ft("sound").addEventListener("click",()=>{Se(),Ot.setMuted(!Ot.muted),vt.muted=Ot.muted,Dt(),bt(),Ot.muted||Ot.play("click",{ui:!0,vol:.5})});function gt(){e.reset();for(let C of ht)C.parent.remove(C);ht.length=0,Xe.length=0,yt.fill(0),ae.count=0,me=0;for(let C of dt)C.material.color.copy(h);Vt=!1,tt=0,Tt=!1,Ht=-1e9,$.length=0,Mt(),Rt.target.set(e.level.start[0],e.level.start[1]+.92,e.level.start[2]),Rt.zoom=.8,Rt.swing=0,wt=!1,Rt.yaw=Rt.aim.yaw,Rt.pitch=Rt.aim.pitch,Rt.dist=Rt.aim.dist,St=Ut()?1/0:Wa(vt),F(),Ft("result").hidden=!0,$t(),A(),x(),lt()}Ft("reset").addEventListener("click",gt);for(let C of["pointerdown","pointerup","pointercancel","pointerleave"])Ft("ff").addEventListener(C,N=>{xt=C==="pointerdown",Ft("ff").setAttribute("aria-pressed",String(xt)),xt&&N.preventDefault()});Ft("ff").addEventListener("contextmenu",C=>C.preventDefault()),Ft("next").addEventListener("click",gt),Ft("result-go").addEventListener("click",()=>_(Ft("result-go").dataset.level)),window.addEventListener("keydown",C=>{C.code==="Space"&&(At=!0,C.preventDefault()),C.code==="KeyR"&&gt(),C.code==="KeyF"&&(xt=!0);let N=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(C.code),et=hc(vt);N>=0&&et[N]&&(Y=et[N],ge())}),window.addEventListener("keyup",C=>{C.code==="KeyF"&&(xt=!1),C.code==="Space"&&(At=Ft("slow").getAttribute("aria-pressed")==="true")});function ot(){let C=e.state;return C.alive?C.ko?"Out cold":C.mode==="down"?ci(Tt?"Bleeding out \u25B8\u25B8":C.bleed>.2?"Down, bleeding out":"Down"):C.mode==="fall"?"Going down":C.mode==="rise"?"Getting up":C.mode==="kneel"?"On his knees":C.hits===0?"Standing":ci(C.bleed>.2?C.strength<.75?"Staggering, bleeding":"Hit, bleeding":C.stun>.25?"Dazed":"On his feet"):ci(C.outcome)||"Dead"}function lt(){let C=e.payout(),N=e.state;return Ft("lines").innerHTML=C.lines.map(et=>`<tr><td>${ci(et[0])}</td><td>${et[1]}</td><td>${ti(et[2])}</td></tr>`).join(""),Ft("total").textContent=ti(C.total),Ft("blood-fill").style.width=N.blood.toFixed(1)+"%",Ft("blood-num").textContent=Math.round(N.blood)+"%",Ft("condition").textContent=ot(),C}lt();let $=[];function Mt(C){let N=innerWidth<=560?4:6,et=$.slice();for(let Z=et.length-1;Z>=1&&et.length>N;Z--)et[Z].level===1&&et.splice(Z,1);et.length=Math.min(et.length,N),Ft("feed").innerHTML=et.map((Z,Wt)=>`<li class="l${Z.level}${Z.fatal?" fatal":""}${Z===$[0]&&C?" new":""}${Wt>=2?" old":""}">${ru(Z.base,Z.side,Z.level)}<em>+${ti(jh[Z.level])}</em></li>`).join("")+($.length>N?`<li class="more">and ${$.length-N} more</li>`:"")}function it(){let C=$.slice().sort((Wt,Lt)=>Lt.level-Wt.level),N=C.filter(Wt=>Wt.level>=2),et=C.length-N.length,Z=N.slice(0,5).map(Wt=>(Wt.level===3?"<b>":"")+ru(Wt.base,Wt.side,Wt.level)+(Wt.level===3?"</b>":""));return N.length>5&&Z.push(N.length-5+" more "+jn.injury.levels[2]),et&&Z.push(et+" "+jn.injury.levels[1]),Z.join(" \xB7 ")}let st={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},Gt=new W,kt=C=>{if(jn.haptics&&navigator.vibrate)try{navigator.vibrate(C)}catch{}};function te(C,N){if(e.state.done)return;if(Se(),St<=0){Ft("pips").classList.remove("nudge"),Ft("pips").offsetWidth,Ft("pips").classList.add("nudge"),Ot.play("deny",{ui:!0,vol:.4});return}let et=lc[Y],Z=new W().subVectors(N,o.position).normalize(),Wt=Math.hypot(Z.x,Z.z)||1,Lt=et.kind==="ballistic"?[Z.x,Z.y,Z.z]:[Z.x/Wt*.97,Y==="bat"?.2:.1,Z.z/Wt*.97],oe=[N.x,N.y,N.z],Pe=e.hit(C,oe,Lt,et);if(!Pe)return;Ut()||(St--,$t()),kt(et.impulse>100?35:18);let Ye=new Rn(new Ls(et.kind==="ballistic"?.024:.04,10,8),new fs({color:et.bleed>0?pt.mark:1314828}));if(dt[C].worldToLocal(Gt.copy(N)),Ye.position.copy(Gt),dt[C].add(Ye),ht.push(Ye),et.kind==="ballistic"){X.setFromPoints([o.position.clone().add(new W(.22,-.3,0).applyQuaternion(o.quaternion)),N.clone()]),ne.material.opacity=.9,Ot.play(Y==="shotgun"?"shotgun":"pistol",{vol:.95}),Ot.play(jn.sounds.wound,{vol:Y==="shotgun"?.75:.55,pan:M(oe),delay:.03});for(let en=0;en<(Y==="shotgun"?46:18);en++)Ce.emit(oe,[Lt[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,Lt[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else Ot.play(Y,{vol:Y==="poke"?.6:.9,pan:M(oe)}),Kt(oe,8,1.2);let Ze=Pe==="thigh"||Pe==="shin"?"leg":Pe;ft(st[Ze]||Ze,oe,!0),e.state.alive&&!e.state.ko&&(et.bleed>0||et.stun>.3)&&Ot.play("grunt",{vol:.4,pan:M(oe),delay:.12}),Ot.play("whoosh",{vol:.45,delay:.04,ui:!0}),tt=1.1,Ut()&&(Ft("hint").hidden=!0)}function xe(C){for(let N of C)if(N.type==="fall"&&e.state.alive&&!e.state.ko&&Ot.play("grunt",{vol:.3,pan:M(N.pos),rate:1.15}),N.type==="impact"){let et=Math.min(1,N.dv/9);N.dv>5&&kt(12),Ot.play(N.zone==="head"?"knock":N.zone==="chest"||N.zone==="gut"?"thud":"limb",{vol:.12+et*.8,rate:1.12-et*.22,pan:M(N.pos)}),Kt(N.pos,Math.min(10,2+Math.round(N.dv)),.8)}else if(N.type==="injury"){let et=$.findIndex(Wt=>Wt.bone===N.bone);et>=0&&$.splice(et,1);let Z=N.base==="neck"&&N.level>=2||N.base==="skull"&&N.level===3;$.unshift({bone:N.bone,base:N.base,side:N.side,level:N.level,fatal:Z}),Mt(!0),N.level>=2&&(Ot.play(jn.sounds.snap,{vol:N.level===3?.75:.5,rate:N.level===3?.85:1.05,pan:M(N.pos),delay:N.cause==="shot"?.05:0}),kt(N.level===3?28:14)),Z&&N.cause!=="shot"&&ft(ci(N.base==="neck"?"Broken neck":"Skull shattered"),N.pos,!0,.5)}else if(N.type==="step")Ot.play(N.hurt>.3?"scuff":"step",{vol:N.hurt>.3?.3:.22,pan:M(N.pos)}),e.state.hits>0&&Kt(N.pos,2,.35);else if(N.type==="buckle")Ot.play("scuff",{vol:.2,pan:M(N.pos)});else if(N.type==="glass"){Ot.play("glass",{vol:e.state.clock-Ht>.7?.9:.4,pan:M(N.pos),rate:.9+Math.random()*.25}),kt(30);for(let et=0;et<26;et++)Et.emit([N.pos[0]+(Math.random()-.5)*.9,N.pos[1],N.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);e.state.clock-Ht>.7&&ft("Through the glass",N.pos,!0,.5),Ht=e.state.clock}else if(N.type==="fall"&&(e.state.fellBecause==="edge"||e.state.fellBecause==="trip"))ft(e.state.fellBecause==="trip"?"Over the sill":"Lost his footing",N.pos,!0,.7);else if(N.type==="out")ft("Out cold",N.pos,!0,.55);else if(N.type==="rise")Ot.play("grunt",{vol:.3,pan:M(N.pos),rate:.9}),Ot.play("scuff",{vol:.3,pan:M(N.pos)});else if(N.type==="up")ft("Back on his feet",N.pos,!0,.9);else if(N.type==="gaveout")Ot.play("groan",{vol:.35,pan:M(N.pos)});else if(N.type==="kneel")Ot.play("knees",{vol:.6,pan:M(N.pos)}),Ot.play("groan",{vol:.32,pan:M(N.pos),delay:.1}),ft("Knees",N.pos,!1,.9);else if(N.type==="down")N.onFeet>1&&ft("On his feet "+N.onFeet.toFixed(1)+" s",N.pos,!1,.6);else if(N.type==="dead"&&N.cause==="Bled out")ft(ci("Bled out")+" \xB7 "+N.time.toFixed(1)+" s",N.pos,!0,.5);else if(N.type==="done"&&!Vt){Vt=!0,O=performance.now();let et=lt(),Z=e.levelKey,Wt="";if(Ut())Ft("result-label").textContent="Free play",Ft("result-total").textContent=ti(et.total),Ft("result-note").textContent=ci(N.outcome)+" \xB7 nothing is banked in free play";else{let oe=nu(vt,Z,e.state,et.total),Pe=Lr(vt);Dt(),Ft("result-label").textContent=oe.record&&oe.pay>0?"New best take":"Take over",Ft("result-total").textContent=ti(oe.pay+oe.bonus),Ft("result-note").textContent=ci(N.outcome)+(Pe>1?" \xB7 pays \xD7"+Pe.toFixed(2):"")+" \xB7 best here "+ti(vt.best[Z]||0),Wt=oe.goals.map(Ze=>`<li><span>\u2605</span>${Ze.text}<em>+${ti(Ze.reward)}</em></li>`).join("")+oe.opened.map(Ze=>`<li class="opened"><span>\u2192</span>New level: ${gi[Ze].label}</li>`).join("");let Ye=tu(vt);Ye&&(Wt+=`<li class="save-for"><span>$</span>${vt.bank>=Ye.price?"You can afford "+Ye.name:ti(Ye.price-vt.bank)+" short of "+Ye.name}</li>`),oe.goals.length&&Ot.play("goal",{ui:!0,vol:.5,delay:.25})}Ot.play("stamp",{ui:!0,vol:.45}),Ft("result-goals").innerHTML=Wt,Ft("result-injuries").innerHTML=it(),Ft("result-lines").innerHTML=et.lines.filter(oe=>oe[2]>0).map(oe=>`<tr><td>${ci(oe[0])}</td><td>${oe[1]}</td><td>${ti(oe[2])}</td></tr>`).join(""),Ft("result-shop").hidden=Ut();let Lt=!Ut()&&Wt.includes("New level")?Object.keys(gi).filter(oe=>Qi(vt,oe)).at(-1):"";Ft("result-go").hidden=!Lt,Ft("result-go").dataset.level=Lt,Lt&&(Ft("result-go").textContent="Go to "+gi[Lt].label),x(),A(),Ft("result").hidden=!1}}let Rt={yaw:-1.12,pitch:.22,dist:6.2,zoom:.8,target:new W(0,.95,0),aim:{yaw:-1.12,pitch:.22,dist:6.2},swing:0},qe=new W,S=new Aa,k=new de,rt=null;i.addEventListener("pointerdown",C=>{rt={x:C.clientX,y:C.clientY,moved:!1,id:C.pointerId},i.setPointerCapture(C.pointerId)}),i.addEventListener("pointermove",C=>{if(!rt||rt.id!==C.pointerId)return;let N=C.clientX-rt.x,et=C.clientY-rt.y;!rt.moved&&Math.hypot(N,et)<7||(rt.moved=!0,wt=!0,Rt.yaw-=N*.006,Rt.pitch=Math.max(.03,Math.min(1.3,Rt.pitch+et*.005)),Rt.swing===0&&(Rt.aim.yaw=Rt.yaw,Rt.aim.pitch=Rt.pitch),rt.x=C.clientX,rt.y=C.clientY)});let K=C=>{if(!rt||rt.id!==C.pointerId)return;let N=!rt.moved;if(rt=null,!N||C.type==="pointercancel")return;if(e.state.done){performance.now()-O>450&&gt();return}let et=i.getBoundingClientRect();k.set((C.clientX-et.left)/et.width*2-1,-((C.clientY-et.top)/et.height)*2+1),S.setFromCamera(k,o);let Z=S.intersectObjects(dt,!1);Z.length&&te(Z[0].object.userData.part,Z[0].point)};i.addEventListener("pointerup",K),i.addEventListener("pointercancel",K),i.addEventListener("wheel",C=>{Rt.dist=Math.max(3,Math.min(16,Rt.dist*(1+Math.sign(C.deltaY)*.08))),Rt.swing===0&&(Rt.aim.dist=Rt.dist),C.preventDefault()},{passive:!1});function Q(){let C=i.clientWidth,N=i.clientHeight;!C||!N||(s.setSize(C,N,!1),o.aspect=C/N,o.updateProjectionMatrix())}new ResizeObserver(Q).observe(i),Q();function Xt(C){let N=e.pos(1),et=e.state,Z=e.level.cam.fall;if(qe.set(N[0],Math.max(e.groundY(N[0],N[2])+.5,N[1]-.4),N[2]),Rt.target.lerp(qe,1-Math.exp(-C*3)),Rt.zoom+=((et.hits===0?.8:1)-Rt.zoom)*Math.min(1,C*2),Z&&!wt&&et.drop>.35){Rt.swing=Math.min(1,Rt.swing+C/.9);let oe=Rt.swing*Rt.swing*(3-2*Rt.swing),Pe=Z.yaw-Rt.aim.yaw;Pe=Math.atan2(Math.sin(Pe),Math.cos(Pe)),Rt.yaw=Rt.aim.yaw+Pe*oe,Rt.pitch=Rt.aim.pitch+(Z.pitch-Rt.aim.pitch)*oe,Rt.dist=Rt.aim.dist+(Z.dist-Rt.aim.dist)*oe}let Wt=Rt.dist*Rt.zoom/Math.pow(Math.min(1,o.aspect),.75),Lt=Math.cos(Rt.pitch);if(o.position.set(Rt.target.x+Math.sin(Rt.yaw)*Lt*Wt,Rt.target.y+Math.sin(Rt.pitch)*Wt,Rt.target.z+Math.cos(Rt.yaw)*Lt*Wt),o.lookAt(Rt.target),l.position.set(Rt.target.x-4,Rt.target.y+10,Rt.target.z+7),l.target.position.set(Rt.target.x,Rt.target.y-1,Rt.target.z),b.visible=et.mode==="balance"&&!et.done&&(Ut()||St>0),b.visible){let oe=e.pos(0);b.position.set(oe[0],e.groundY(oe[0],oe[2])+.012,oe[2]),b.rotation.y=Math.atan2(-(oe[0]-o.position.x),-(oe[2]-o.position.z))}}let ie=performance.now(),Bt=0,qt=!1,se={n:0,sum:0,stage:0};function Re(C){if(se.stage>1||(++se.n>30&&(se.sum+=C),se.n<150))return;let N=se.sum/120>.03;if(se.n=0,se.sum=0,!N){se.stage=2;return}se.stage===0?(s.setPixelRatio(1),Q()):l.castShadow=!1,se.stage++}let ye={n:0,sum:0,worst:0,phys:0};function Qt(C){if(ye.n++,ye.sum+=C,ye.worst=Math.max(ye.worst,C),ye.sum<.5)return;let N=l.castShadow?s.getPixelRatio()<Math.min(window.devicePixelRatio||1,2)?"reduced resolution":"full quality":"no shadows";Ft("fps").textContent=Math.round(ye.n/ye.sum)+" fps \xB7 worst frame "+Math.round(ye.worst*1e3)+" ms \xB7 physics "+(ye.phys/ye.n).toFixed(1)+" ms \xB7 "+N+" \xB7 "+jn.id+" edition",ye.n=0,ye.sum=0,ye.worst=0,ye.phys=0}Ft("fps").hidden=!G;function Ge(C){qt||(G&&Qt((C-ie)/1e3),Re((C-ie)/1e3),mn(Math.max(0,Math.min(.05,(C-ie)/1e3))),ie=C,requestAnimationFrame(Ge))}function mn(C,N=!0){tt=Math.max(0,tt-C);let et=e.state;Tt=!Ut()&&et.mode==="down"&&et.spent&&et.alive&&et.bleed>.2&&tt<=0&&(St<=0||et.time-et.downAt>1.5);let Z=xt&&et.hits>0&&!et.done;Z&&(tt=0);let Wt=Z?7:Tt?6:At?.2:tt>.45?.16:tt>0?.16+(1-tt/.45)*.84:1;Ct+=(Wt-Ct)*Math.min(1,C*(Tt?3:Z?8:14)),!Tt&&!Z&&Ct>1&&(Ct=1);let Lt=Math.min(C*Ct,18/120);Ot.setSlow(Math.min(1,Ct));let oe=Math.max(1,Math.ceil(Lt/(1/120))),Pe=G?performance.now():0;if(Lt>1e-5)for(let en=0;en<oe;en++)xe(e.step(Lt/oe));G&&(ye.phys+=performance.now()-Pe),mt(),pe(Lt),jt.step(Lt),Ce.step(Lt,un),Et.step(Lt),e.levelKey==="window"&&e.state.glass>0&&F(),ne.material.opacity=Math.max(0,ne.material.opacity-C*5),Xt(C),Je(C);let Ye=e.state.wrap||0,Ze=e.state.hits>0&&!e.state.done&&Ye>.2;Ft("wrap").hidden===Ze&&(Ft("wrap").hidden=!Ze),Ze&&(Ft("wrap-fill").style.width=(Ye*100).toFixed(0)+"%"),Bt+=C,Bt>.1&&!e.state.done&&(Bt=0,lt()),N&&s.render(r,o)}if(Ot.setMuted(!!vt.muted),bt(),G){Ft("soundboard").hidden=!1;for(let C of Ot.names){let N=document.createElement("button");N.type="button",N.className="util",N.textContent=C,N.addEventListener("click",()=>{Se(),Ot.play(C,{vol:.9,ui:!0})}),Ft("soundboard-list").appendChild(N)}}Ft("intro").hidden=!!vt.seenIntro,Ft("intro-start").addEventListener("click",()=>{vt.seenIntro=!0,Dt(),Ft("intro").hidden=!0,Se()}),zt(),_(gi[vt.level]&&Qi(vt,vt.level)?vt.level:"yard",!0),Ft("loading").hidden=!0,mt(),requestAnimationFrame(Ge),window.__imhit={sim:e,setTool(C){Y=C,ge()},setMode:u,career:su,arrow:b,edition:jn,sfx:Ot,get save(){return vt},get actionsLeft(){return St},strikePart(C,N=0){let et=cn.findIndex(oe=>oe.name===C),Z=dt[et],Wt=new W().setFromMatrixPosition(Z.matrixWorld).add(new W(0,N,0)),Lt=o.position.clone().sub(Wt).setY(0).normalize();te(et,Wt.addScaledVector(Lt,cn[et].r))},reset:gt,setLevel:C=>_(C,!0),screen(C){let N=cn.findIndex(Wt=>Wt.name===C),et=new W().setFromMatrixPosition(dt[N].matrixWorld).project(o),Z=i.getBoundingClientRect();return[Z.left+(et.x*.5+.5)*Z.width,Z.top+(-et.y*.5+.5)*Z.height]},cam:Rt,physics:$a,manual(){qt=!0},advance:mn}}Promise.all([ty(),$a==="grounded"?Promise.resolve().then(()=>(Uf(),Ff)).then(n=>n.createSim):Ef]).then(([n,t])=>iy(n,t)).catch(n=>{console.error(n),Ft("loading").textContent="Could not start the physics engine in this browser."});
