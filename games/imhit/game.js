var Vf=Object.defineProperty;var Wf=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var yu=(n,t)=>{for(var e in t)Vf(n,e,{get:t[e],enumerable:!0})};var zf={};yu(zf,{BONES:()=>gu,BONE_PAY:()=>Bf,LEVELS:()=>yc,PARTS:()=>An,TOOLS:()=>ty,YARD:()=>jx,createSim:()=>ry,groundY:()=>Kn});function Kn(n,t){if(t>we.z-30){let e=t-we.z;return Math.abs(e)>we.halfWidth||n<-we.back||n>we.wall?0:n<0?we.floor:Math.abs(e)<we.open?we.floor+we.sill:we.top}if(t>gn.z-30){let e=t-gn.z;return Math.abs(e)>gn.halfWidth||n<-gn.back||n>=gn.length?0:n<=0?gn.height:Math.max(0,gn.height-(Math.floor(n/gn.run)+1)*gn.rise)}return 0}function ls(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function pu(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function gi(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}function to(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function mu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ry(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(uu,Or),e.EnableCollision(Or,Or);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(uu,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Or,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(A,_,G,ct,Pt=.85){let se=[(G[0]+ct[0])/2,(G[1]+ct[1])/2,(G[2]+ct[2])/2],ne=[(ct[0]-G[0])/2,(ct[1]-G[1])/2,(ct[2]-G[2])/2],te=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(ne[0],ne[1],ne[2]),Math.min(.02,ne[0]*.5,ne[1]*.5,ne[2]*.5)),new n.RVec3(se[0],se[1],se[2]),o,n.EMotionType_Static,uu);te.mFriction=Pt,te.mRestitution=.03,a.AddBody(a.CreateBody(te).GetID(),n.EActivation_DontActivate),_&&p.push({c:se,h:ne,kind:_,level:A})}d("all",null,[-50,-1,-40],[50,0,190]);{let A=gn.z-gn.halfWidth,_=gn.z+gn.halfWidth;d("stairs","landing",[-gn.back,0,A],[0,gn.height,_]);for(let G=0;G<gn.steps-1;G++)d("stairs","step",[G*gn.run,0,A],[(G+1)*gn.run,gn.height-(G+1)*gn.rise,_],.13);d("stairs","wall",[-gn.back,0,A-.3],[gn.length+3,gn.height+2.6,A])}let f={tiles:[],panes:[],frame:[]};{let A=we.z-we.halfWidth,_=we.z+we.halfWidth,G=we.floor;d("window","building",[-we.back,0,A],[we.wall,G,_]),d("window","wall",[0,G,A],[we.wall,we.top,we.z-we.open]),d("window","wall",[0,we.lintel,we.z-we.open],[we.wall,we.top,we.z+we.open]),d("window","sill",[0,G,we.z-we.open],[we.wall,G+we.sill,we.z+we.open]);let ct=we.glassX,Pt=we.z-we.panes*we.pane/2,se=we.glassY,ne=we.panes*we.pane,te=.035;for(let R=0;R<=we.panes;R++)d("window","frame",[ct+R*we.pane-te,se-.09,Pt-te],[ct+R*we.pane+te,se-.012,Pt+ne+te]),d("window","frame",[ct-te,se-.09,Pt+R*we.pane-te],[ct+ne+te,se-.012,Pt+R*we.pane+te]);for(let[R,k]of[[ct,Pt],[ct+ne,Pt],[ct,Pt+ne],[ct+ne,Pt+ne]])d("window","frame",[R-.05,0,k-.05],[R+.05,se-.09,k+.05]);let S=mu(99),h=(R,k,z,X,dt,Mt)=>{let xt=z-R,Wt=X-k;if(dt===0||xt<.3&&Wt<.3){Mt.push([R,k,z,X]);return}let Ot=.32+.36*S();xt>Wt?(h(R,k,R+xt*Ot,X,dt-1,Mt),h(R+xt*Ot,k,z,X,dt-1,Mt)):(h(R,k,z,k+Wt*Ot,dt-1,Mt),h(R,k+Wt*Ot,z,X,dt-1,Mt))};for(let R=0;R<we.panes;R++)for(let k=0;k<we.panes;k++){let X=ct+R*we.pane+.04,dt=Pt+k*we.pane+.04,Mt={broken:!1,min:[X-.04,dt-.04],max:[X+we.pane-.04,dt+we.pane-.04],y:se,tiles:[]},xt=[];h(X,dt,X+we.pane-2*.04,dt+we.pane-2*.04,3,xt);for(let Wt of xt){let Ot=[(Wt[2]-Wt[0])/2,.007,(Wt[3]-Wt[1])/2],Lt=[(Wt[0]+Wt[2])/2,se,(Wt[1]+Wt[3])/2],ft=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(Ot[0],Ot[1],Ot[2]),.002),new n.RVec3(Lt[0],Lt[1],Lt[2]),o,n.EMotionType_Static,Or);ft.mAllowDynamicOrKinematic=!0,ft.mFriction=.5,ft.mRestitution=.15,ft.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,ft.mMassPropertiesOverride.mMass=Math.max(.15,Ot[0]*Ot[2]*4*12);let Z=a.CreateBody(ft),le=new n.BodyID(Z.GetID().GetIndexAndSequenceNumber());a.AddBody(le,n.EActivation_DontActivate),Mt.tiles.push(f.tiles.length),f.tiles.push({id:le,home:Lt,h:Ot})}f.panes.push(Mt)}}function x(A,_){A.broken=!0,Rt.glass++;for(let G of A.tiles){let ct=f.tiles[G];a.SetMotionType(ct.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(_[0]*.45+(Kt()-.5)*2.2,_[1]*.5-Kt()*1.2,_[2]*.45+(Kt()-.5)*2.2);let Pt=new n.Vec3((Kt()-.5)*14,(Kt()-.5)*6,(Kt()-.5)*14);a.SetLinearAndAngularVelocity(ct.id,l,Pt),n.destroy(Pt)}Ee.push({type:"glass",pos:[(A.min[0]+A.max[0])/2,A.y,(A.min[1]+A.max[1])/2]})}function w(){for(let A of f.tiles)a.SetMotionType(A.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(A.home[0],A.home[1],A.home[2]),a.SetPositionAndRotation(A.id,c,o,n.EActivation_DontActivate);for(let A of f.panes)A.broken=!1}let g=new n.Skeleton;for(let A of An)g.AddJoint(new n.JPHString(A.name,A.name.length),A.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(An.length),An.forEach((A,_)=>{let G=m.mParts.at(_);if(G.SetShape(new n.CapsuleShape(A.hh,A.r)),G.mPosition=new n.RVec3(A.c[0],A.c[1],A.c[2]),G.mRotation=o,G.mMotionType=n.EMotionType_Dynamic,G.mMotionQuality=n.EMotionQuality_LinearCast,G.mObjectLayer=Or,G.mFriction=.7,G.mRestitution=.05,G.mAngularDamping=.3,G.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,G.mMassPropertiesOverride.mMass=A.mass,A.strength=A.mass*26,!(A.parent<0))if(A.type==="st"){let ct=new n.SwingTwistConstraintSettings;ct.mSpace=n.EConstraintSpace_WorldSpace,ct.mPosition1=ct.mPosition2=new n.RVec3(A.j[0],A.j[1],A.j[2]),ct.mTwistAxis1=ct.mTwistAxis2=new n.Vec3(A.twist[0],A.twist[1],A.twist[2]),ct.mPlaneAxis1=ct.mPlaneAxis2=new n.Vec3(1,0,0),ct.mNormalHalfConeAngle=ct.mPlaneHalfConeAngle=A.cone*ja,ct.mTwistMinAngle=-A.tw*ja,ct.mTwistMaxAngle=A.tw*ja,ct.mMaxFrictionTorque=A.mass*.4;for(let Pt of[ct.mSwingMotorSettings,ct.mTwistMotorSettings])Pt.mSpringSettings.mFrequency=8,Pt.mSpringSettings.mDamping=1,Pt.mMinTorqueLimit=-A.strength,Pt.mMaxTorqueLimit=A.strength;G.mToParent=ct}else{let ct=new n.HingeConstraintSettings;ct.mSpace=n.EConstraintSpace_WorldSpace,ct.mPoint1=ct.mPoint2=new n.RVec3(A.j[0],A.j[1],A.j[2]),ct.mHingeAxis1=ct.mHingeAxis2=new n.Vec3(0,0,1),ct.mNormalAxis1=ct.mNormalAxis2=new n.Vec3(1,0,0),ct.mLimitsMin=A.min*ja,ct.mLimitsMax=A.max*ja,ct.mMaxFrictionTorque=A.mass*.4,ct.mMotorSettings.mSpringSettings.mFrequency=8,ct.mMotorSettings.mSpringSettings.mDamping=1,ct.mMotorSettings.mMinTorqueLimit=-A.strength,ct.mMotorSettings.mMaxTorqueLimit=A.strength,G.mToParent=ct}});let b=0,D=An.map(A=>(b+=A.mass,A.mass));m.DisableParentChildCollisions(),m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let L=An.map((A,_)=>new n.BodyID(T.GetBodyID(_).GetIndexAndSequenceNumber())),C=An.map((A,_)=>{if(A.parent<0)return null;let G=T.GetConstraint(_-1);return A.type==="st"?n.castObject(G,n.SwingTwistConstraint):n.castObject(G,n.HingeConstraint)}),y=An.length,E=(A,_)=>{let G=a.GetPosition(L[A]);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_},Y=(A,_)=>{let G=a.GetLinearVelocity(L[A]);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_},B=(A,_)=>{let G=a.GetRotation(L[A]);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_[3]=G.GetW(),_},Q=(A,_)=>{let G=a.GetAngularVelocity(L[A]);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_},nt=A=>E(A,[0,0,0]),ht=(A,_)=>{let G=a.GetPosition(A);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_},W=(A,_)=>{let G=a.GetRotation(A);return _[0]=G.GetX(),_[1]=G.GetY(),_[2]=G.GetZ(),_[3]=G.GetW(),_};function rt(A,_,G,ct,Pt){l.Set(_,G,ct),Pt?(c.Set(Pt[0],Pt[1],Pt[2]),a.AddForce(L[A],l,c,n.EActivation_Activate)):a.AddForce(L[A],l,n.EActivation_Activate)}function at(A,_,G,ct,Pt){l.Set(_,G,ct),Pt?(c.Set(Pt[0],Pt[1],Pt[2]),a.AddImpulse(L[A],l,c)):a.AddImpulse(L[A],l)}let it=new Float32Array(y).fill(1),mt=new Float32Array(y),pt=new Float32Array(y).fill(-1),ut=new Float32Array(y*3),Nt=new Float32Array(y);function ae(A,_){u.Set(_[0],_[1],_[2],_[3]),C[A].SetTargetOrientationCS(u)}let ye=1,Et=(A,_,G,ct=0)=>pu(pu(ls(0,1,0,A),ls(0,0,1,_*G)),ls(1,0,0,ct*G*ye));function jt(){for(let A=1;A<y;A++){let _=it[A]*(1-mt[A]);if(Math.abs(_-pt[A])<.02&&!(_===0&&pt[A]!==0))continue;pt[A]=_;let G=An[A],ct=C[A],Pt=_>.02?n.EMotorState_Position:n.EMotorState_Off,se=G.strength*_,ne=2.5+5.5*_;if(G.type==="st"){for(let te of[ct.GetSwingMotorSettings(),ct.GetTwistMotorSettings()])te.mMinTorqueLimit=-se,te.mMaxTorqueLimit=se,te.mSpringSettings.mFrequency=ne;ct.SetSwingMotorState(Pt),ct.SetTwistMotorState(Pt)}else{let te=ct.GetMotorSettings();te.mMinTorqueLimit=-se,te.mMaxTorqueLimit=se,te.mSpringSettings.mFrequency=ne,ct.SetMotorState(Pt)}}}let Rt={},Ct=[],wt=[{shin:Ce.lleg_l,thigh:Ce.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0},{shin:Ce.lleg_r,thigh:Ce.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0}],gt={},Kt=mu(1),ee=0,Ne=yc.yard,Oe="yard",Ee=[],He=[];function dn(){An.forEach((A,_)=>{c.Set(Ne.start[0]+A.c[0],Ne.start[1]+A.c[1]-.03,Ne.start[2]+A.c[2]),a.SetPositionAndRotation(L[_],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(L[_],l,l)}),it.fill(1),mt.fill(0),pt.fill(-1),ut.fill(0),Nt.fill(0),Ct.length=0,w(),Kt=mu(1234+77*ee++),Object.assign(Rt,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:Ne.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(gt,{support:1,hT:Ne.start[1]+fu,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[Kt()*6.28,Kt()*6.28,Kt()*6.28,Kt()*6.28],lastCom:[Ne.start[0],Ne.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let A of wt)A.swing=!1,A.hurt=0,A.broken=0,A.kneeDown=!1,A.planted=[Ne.start[0],Ne.start[2]+A.side*xc],A.t=0;jt()}function Ze(A){Rt.alive&&(Rt.alive=!1,Rt.diedAt=Rt.time,Rt.outcome=A,He.push({type:"dead",cause:A,pos:nt(Ce.head),time:Rt.time}))}function en(){Rt.ko||!Rt.alive||(Rt.ko=!0,He.push({type:"out",pos:nt(Ce.head)}))}function Ln(A,_){let G=An[A].zone,ct=An[A].side===1?"_l":"_r";if(G==="head")return _[0]<-.45?_[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:_[1]<-.55?[["jaw",1]]:[["skull",1]];if(A===Ce.chest){let Pt=_[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(_[2])>.55||_[1]>.5)&&Pt.push(["collarbone"+(_[2]>=0?"_l":"_r"),.9]),Pt}return A===Ce.pelvis?_[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:G==="arm"?An[An[A].parent].zone==="arm"?_[1]<-.35?[["wrist"+ct,1]]:[["forearm"+ct,1]]:_[1]>.5?[["humerus"+ct,.8],["collarbone"+ct,.8]]:[["humerus"+ct,1]]:G==="thigh"?[["femur"+ct,1]]:_[1]>.35?[["kneecap"+ct,1]]:_[1]<-.5?[["ankle"+ct,1]]:[["tibia"+ct,1]]}function Mn(A,_,G,ct){let Pt=A.split("_")[0],se=gu[Pt];for(;_>0&&!se[_-1];)_--;let ne=Rt.bones[A]||0;if(_<=ne)return 0;Rt.bones[A]=_;let te=A.endsWith("_l")?1:A.endsWith("_r")?-1:0;He.push({type:"injury",bone:A,base:Pt,side:te,level:_,was:ne,pos:[G[0],G[1],G[2]],cause:ct});let S=te===1?Ce.uarm_l:Ce.uarm_r,h=te===1?Ce.larm_l:Ce.larm_r,R=k=>{Rt.stun=Math.min(1.6,Rt.stun+k)};if(Pt==="femur"||Pt==="tibia"||Pt==="kneecap"||Pt==="ankle"){let k=wt[te===1?0:1];k.hurt=Math.min(1,Math.max(k.hurt+.15,_===2?.8:_===3?1:0)),k.broken=Math.max(k.broken,_),mt[k.thigh]=Math.max(mt[k.thigh],k.hurt*.5),mt[k.shin]=Math.max(mt[k.shin],k.hurt*.6),gt.legWound=Math.max(gt.legWound,k.hurt),_>=2&&Rt.mode==="balance"&&(gt.buckle=.24,gt.buckleDip=.3)}else if(Pt==="humerus")_>=2&&(mt[S]=.9,mt[h]=Math.max(mt[h],.6));else if(Pt==="forearm"||Pt==="wrist")_>=2&&(mt[h]=.9);else if(Pt==="collarbone")_>=2&&(mt[S]=Math.max(mt[S],.7));else if(Pt==="ribs")R([0,.08,.22,.4][_]),_===3&&Ct.push({part:Ce.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(Pt==="nose")R(.1),_>=2&&Ct.push({part:Ce.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(Pt==="jaw")R(.12*_);else if(Pt==="skull")_===3?Ze("Skull shattered"):_===2&&(R(.5),en());else if(Pt==="neck")_>=2?Ze("Broken neck"):R(.3);else if(Pt==="spine"){if(_>=2){Rt.paralysed=!0;for(let k of wt)k.hurt=1,mt[k.thigh]=1,mt[k.shin]=1}}else if(Pt==="pelvis"&&_>=2){Rt.cantRise=!0;for(let k of wt)k.hurt=Math.max(k.hurt,.5)}return _}function Rn(A,_,G,ct){let Pt=gu[A.split("_")[0]];Rt.bones[A]&&(_*=1.15),_*=.85+.3*Kt();let se=Pt[2]&&_>=Pt[2]?3:_>=Pt[1]?2:_>=Pt[0]?1:0;return se?Mn(A,se,G,ct):0}let Tn=()=>!Rt.paralysed&&!Rt.cantRise&&!(wt[0].broken>=3||wt[1].broken>=3)&&!(wt[0].broken>=2&&wt[1].broken>=2),Ke=[0,0,0,1],V=[0,0,0],Fe=[0,0,0];function fe(A,_,G,ct){if(Rt.done)return null;let Pt=An[A],se=nt(Ce.chest)[1],ne=nt(Ce.head)[1],S=Pt.zone==="chest"&&_[1]-se>.13||Pt.zone==="head"&&ne-_[1]>.06?"neck":Pt.zone;if(Rt.hits++,Rt.mode==="fall"&&(Rt.fallHits++,Zt[1]-Kn(Zt[0],Zt[2])>1.2&&Rt.airHits++),ct.impulse>200)for(let[X,dt]of[[A,.5],[Ce.chest,.3],[Ce.pelvis,.2]])at(X,G[0]*ct.impulse*dt,G[1]*ct.impulse*dt,G[2]*ct.impulse*dt,X===A?_:null);else at(A,G[0]*ct.impulse,G[1]*ct.impulse,G[2]*ct.impulse,_);for(let X=0;X<y;X++)Nt[X]=.12;E(A,Fe),B(A,Ke);let h=gi(Qa(Ke),[_[0]-Fe[0],_[1]-Fe[1],_[2]-Fe[2]],[0,0,0]);if(ct.bleed>0){let X=ct.kind==="blunt";Ct.push({part:A,zone:S,at:h,arterial:!X&&(S==="neck"||S==="thigh"),rate:X?1.6:iy[S]*ct.bleed,left:X?7:sy[S]*ct.bleed})}Rt.stun=Math.min(1.6,Rt.stun+ct.stun*(S==="head"?2.2:S==="neck"?1.4:1)),S==="head"&&ct.kind==="ballistic"?(Ze("Headshot"),it.fill(0)):S==="head"&&Rt.stun>1&&en();let R=[h[0]/Pt.r,h[1]/(Pt.hh+Pt.r),h[2]/Pt.r];if(ct.kind==="ballistic"){let X=ct.impulse>60,dt=S==="neck"?"neck":S==="head"?"skull":Ln(A,R)[0][0],Mt=dt.split("_")[0],[xt,Wt]=Mt==="skull"?[0,1]:Mt==="neck"?[X?.8:.9,0]:Mt==="spine"?[X?.5:.65,0]:ny.has(Mt)?X?[.1,.6]:[.25,.25]:Mt==="pelvis"?X?[.45,.2]:[.75,.05]:X?[.2,.3]:[.45,.1],Ot=Kt();Ot>=xt&&Mn(dt,Ot>1-Wt?3:2,_,"shot")}else{let X=(ct.impulse-45)/19;if(S==="neck")Rn("neck",X*.6,_,"blow");else for(let[dt,Mt]of Ln(A,R))Rn(dt,X*Mt,_,"blow")}if(S==="thigh"||S==="shin"){let X=wt[Pt.side===1?0:1];X.hurt=Math.min(1,X.hurt+(ct.kind==="ballistic"?.7:.45)*(ct.bleed>1.5||ct.impulse>150?1.4:1)),mt[X.thigh]=Math.max(mt[X.thigh],X.hurt*.5),mt[X.shin]=Math.max(mt[X.shin],X.hurt*.6),gt.legWound=Math.max(gt.legWound,X.hurt)}if(S==="arm"){mt[A]=.9;let X=An.findIndex(dt=>dt.parent===A);X>0&&(mt[X]=.9)}if(ct.kind==="ballistic"){let X=Math.hypot(G[0],G[2])||1,dt={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[S],Mt=(38+34*Kt())*dt*(ct.impulse>60?.5:1),xt=(Kt()-.5)*.35,Wt=_n(((_[0]-Fe[0])*gt.hz+(_[2]-Fe[2])*-gt.hx)/.12,-1,1)*.65,Ot=G[0]/X-gt.hz*Wt-G[2]/X*xt,Lt=G[2]/X+gt.hx*Wt+G[0]/X*xt,ft=Math.hypot(Ot,Lt)||1;gt.reel=[Ot/ft*Mt,Lt/ft*Mt],gt.reelT=.16}Rt.mode==="balance"&&(gt.buckle=.22,gt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[S]||.04)*(ct.kind==="ballistic"?1:.6)),gt.flinch=.2,gt.clutch=S,gt.clutchEnd=ct.bleed>0?1e9:Math.max(gt.clutchEnd<1e8?0:gt.clutchEnd,Rt.clock+.9+ct.stun*4);let k=(_[0]-Fe[0])*gt.hz+(_[2]-Fe[2])*-gt.hx,z=S==="arm"?-Pt.side:An[A].side||(k>=0?1:-1);if(mt[z===1?Ce.uarm_l:Ce.uarm_r]>.5&&(z=-z),gt.clutchArm=S==="neck"||S==="head"?0:z,S==="gut"&&ct.kind==="ballistic"&&ct.impulse<60&&(gt.lookDown=1.1),ct.kind==="ballistic"&&gt.fleeAt>1e8){gt.fleeAt=Rt.time+.7+Kt()*.7+gt.lookDown;let X=(Kt()-.5)*1.3,dt=Math.hypot(G[0],G[2])||1,Mt=G[0]/dt,xt=G[2]/dt;gt.fleeDir=[Mt*Math.cos(X)-xt*Math.sin(X),Mt*Math.sin(X)+xt*Math.cos(X)]}return He.push({type:"hit",zone:S==="thigh"||S==="shin"?"leg":S,part:A,pos:_,tool:ct,fatal:!Rt.alive}),S}let Zt=[0,0,0],tt=[0,0,0],Ve=[0,0,0,1],kt=[0,0,0],ue=[0,0,0],I=[0,0,0,1],M=[0,0,0],K=[0,0,0],At=[0,0,0],st=[0,0,0],ot=[0,0,0];function Ft(A,_,G,ct,Pt,se){B(A,Ke),Q(A,K);let ne=Ke[0],te=Ke[1],S=Ke[2],h=Ke[3],R=2*(ne*te-h*S),k=1-2*(ne*ne+S*S),z=2*(te*S+h*ne),X=Math.hypot(ct,1,Pt),dt=ct/X,Mt=1/X,xt=Pt/X;return l.Set(_*(k*xt-z*Mt)-G*K[0],(se||0)-G*.3*K[1],_*(R*Mt-k*dt)-G*K[2]),a.AddTorque(L[A],l,n.EActivation_Activate),k}function yt(A,_){gi(Ve,[0,Ja,A.side*xc],At),st[0]=_[0]-(Zt[0]+At[0]),st[1]=_[1]-(Zt[1]+At[1]),st[2]=_[2]-(Zt[2]+At[2]),gi(Qa(Ve),st,ot);let G=Math.hypot(ot[0],ot[1],ot[2])||1e-6,ct=ot[0]/G,Pt=ot[1]/G,se=ot[2]/G;G=_n(G,.24,ws+kr-.004);let ne=Math.acos(_n((ws*ws+G*G-kr*kr)/(2*ws*G),-1,1)),te=-ct,S=-1-te*ct,h=-te*Pt,R=-te*se,k=Math.hypot(S,h,R)||1;S/=k,h/=k,R/=k;let z=Math.cos(ne),X=Math.sin(ne),dt=ct*z+S*X,Mt=Pt*z+h*X,xt=se*z+R*X;vt(A,dt,Mt,xt);let Wt=Math.PI-Math.acos(_n((ws*ws+kr*kr-G*G)/(2*ws*kr),-1,1));C[A.shin].SetTargetAngle(Wt)}let St={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function Yt(A,_){let G=gt,ct=Rt.clock,Pt=.03,se=0,ne=0,te=G.clutch?St[G.clutch]:null;te&&(Pt=te.spine+(1-Rt.strength)*.25,se=te.neck),G.lookDown>0&&(se=.7,Pt+=.1),G.flinch>0&&(Pt=-.22,se=-.3),Rt.mode==="down"&&(Pt+=.15*Math.sin(ct*1.3+G.phase[0]),ne=.25*Math.sin(ct*.9+G.phase[1])),ae(Ce.chest,pu(ls(0,1,0,Pt),ls(1,0,0,ne))),ae(Ce.head,ls(0,1,0,se));for(let S of[1,-1]){let h=S===1?Ce.uarm_l:Ce.uarm_r,R=S===1?Ce.larm_l:Ce.larm_r,k;if(Rt.mode==="rise"&&G.riseT<1.5)k=[.75,-.25,-.15];else if(G.flinch>0)k=[.5,-.95,-1];else if(te&&(G.clutchArm===0||G.clutchArm===S))k=te.arm;else if(Rt.mode==="down"){let z=Math.max(0,Math.sin(ct*.8+G.phase[2]+S));k=[.4+1.5*z*Rt.strength,-.2,-.5-.6*z]}else{let z=_n(.12+2.6*A,0,1.45);k=[.1+(A>.12?Math.sin(ct*13+S*1.7)*.45*_n(A*3,0,1):0)+.6*A,-z,-.3-.5*_n(A*3,0,1)]}ae(h,Et(k[0],k[1],S,k[3]||0)),C[R].SetTargetAngle(k[2])}}function H(A){return E(A.shin,A.p),B(A.shin,I),gi(I,[0,-Jx,0],st),A.p[0]+=st[0],A.p[1]+=st[1],A.p[2]+=st[2],A.p}let Tt=[0,1,0];function _t(A){E(A.shin,Fe),B(A.shin,I),gi(I,Tt,st);let _=st[0],G=st[1],ct=st[2];A.gap=Fe[1]-.15*G-.055-Kn(Fe[0]-.15*_,Fe[2]-.15*ct),A.k[0]=Fe[0]+.22*_,A.k[1]=Fe[1]+.22*G,A.k[2]=Fe[2]+.22*ct,B(A.thigh,Ke),gi(Ke,Tt,st),A.kgap=Math.min(Fe[1]+.15*G-.055,A.k[1]+.07*st[1]-.07)-Kn(A.k[0],A.k[2])}function vt(A,_,G,ct){let Pt=-G,se=-ct,ne=_,te=Math.hypot(ne,se,1+Pt)||1;ae(A.thigh,[0,-ne/te,se/te,(1+Pt)/te])}function Dt(A,_){if(Rt.mode==="fall"||Rt.mode==="down")return;Rt.mode="fall",Rt.fellBecause=_||"";for(let ne of wt)ne.swing=!1;A&&at(Ce.chest,A[0],0,A[1]);let G=gt;G.fight=Rt.alive&&!Rt.ko?_n(.2+.95*Rt.strength,0,1):0,G.fallT=0,G.settle=0;let ct=(tt[0]+ue[0])*.5+(A?A[0]/40:0),Pt=(tt[2]+ue[2])*.5+(A?A[1]/40:0);Math.hypot(ct,Pt)<.3&&(ct+=(kt[0]-Zt[0])*4,Pt+=(kt[2]-Zt[2])*4),Math.hypot(ct,Pt)<.1&&(ct=G.hx,Pt=G.hz);let se=Math.hypot(ct,Pt);G.fallDir[0]=ct/se,G.fallDir[1]=Pt/se,H(wt[0]),H(wt[1]),G.lead=wt[0].p[0]*G.fallDir[0]+wt[0].p[2]*G.fallDir[1]<wt[1].p[0]*G.fallDir[0]+wt[1].p[2]*G.fallDir[1]?0:1,He.push({type:"fall",pos:nt(Ce.chest),onFeet:Rt.onFeet})}function Ht(A){let _=gt,G=Rt,ct=G.mode==="rise";ct&&(_.riseT+=A,_.support=Math.min(1,_.riseT/.8));let Pt=G.mode==="kneel",se=Pt||ct&&_.riseT<1.9,ne=_n(G.strength,0,1),te=Math.sqrt(bs/.95),S=0,h=0,R=0,k=0;for(let lt=0;lt<y;lt++){let ze=D[lt]/b;E(lt,Fe),Y(lt,V),S+=Fe[0]*ze,h+=Fe[2]*ze,R+=V[0]*ze,k+=V[2]*ze}let z=wt[0],X=wt[1];H(z),H(X),_t(z),_t(X);let dt=_.hz,Mt=-_.hx;if(Pt)for(let lt of wt)lt.planted[0]=lt.k[0]+(lt.p[0]-lt.k[0])*.33,lt.planted[1]=lt.k[2]+(lt.p[2]-lt.k[2])*.33,!lt.kneeDown&&lt.kgap<.012&&(lt.kneeDown=!0,Rn("kneecap"+(lt.side===1?"_l":"_r"),-tt[1]*1.3,lt.k,"fall"));let xt=9;for(let lt of wt)lt.swing||(xt=Math.min(xt,lt.gap)),se&&(xt=Math.min(xt,lt.kgap));_.grip+=_n((xt<.028?1:0)-_.grip,-A/.09,A/.05),_.airT=_.grip<.5?_.airT+A:0;let Wt=0,Ot=0,Lt=G.hits>0,ft=Math.hypot(S-Ne.start[0],h-Ne.start[2])>8.5||G.time>_.fleeAt+16;if(!se&&G.bleed>.2&&G.time>_.fleeAt&&ne>.3&&!ft){let lt=(.2+.6*ne)*(1-.45*_.legWound),ze=Math.sin(G.clock*1.1+_.phase[3])*(.25+.9*(1-ne));Wt=(_.fleeDir[0]*Math.cos(ze)-_.fleeDir[1]*Math.sin(ze))*lt,Ot=(_.fleeDir[0]*Math.sin(ze)+_.fleeDir[1]*Math.cos(ze))*lt;let nn=Math.atan2(_.hz*Wt-_.hx*Ot,_.hx*Wt+_.hz*Ot),$=_n(nn,-2.2*A,2.2*A),ce=Math.cos($),he=Math.sin($),ge=_.hx*ce+_.hz*he,Je=-_.hx*he+_.hz*ce;_.hx=ge,_.hz=Je}_.walk[0]+=(Wt-_.walk[0])*Math.min(1,A*2),_.walk[1]+=(Ot-_.walk[1])*Math.min(1,A*2);let Z,le,v=null;z.swing?(Z=X.planted[0],le=X.planted[1],v=X):X.swing?(Z=z.planted[0],le=z.planted[1],v=z):(Z=(z.planted[0]+X.planted[0])/2,le=(z.planted[1]+X.planted[1])/2);let F=S-Z,j=h-le,q=v?Kn(v.planted[0],v.planted[1]):Math.max(Kn(z.planted[0],z.planted[1]),Kn(X.planted[0],X.planted[1])),et=S+R/te,Bt=h+k/te,$t=et-Z,Vt=Bt-le,qt=Math.hypot($t,Vt),ie=Math.min(1,qt),_e=G.bleed>.2||G.stun>.05,Te=Lt&&_e?1-ne+.35*Math.min(1,G.stun):0,re=G.clock,Pe=b*(.25+4.2*Te)*(se?.45:1),xn=Pe*(Math.sin(re*1.7+_.phase[0])*.55+Math.sin(re*.63+_.phase[1])*.45),P=Pe*(Math.sin(re*1.4+_.phase[2])*.55+Math.sin(re*.51+_.phase[3])*.45);if(_.buckle-=A,Lt&&!se&&_.buckle<-.5&&Kt()<A*((_e?.12:0)+1.5*Te+(Math.hypot(_.walk[0],_.walk[1])>.1?.8*_.legWound:0))){_.buckle=.24,_.buckleDip=.1+.2*Kt()+.12*Te;let lt=Kt()*6.28,ze=(18+30*Kt())*(.6+Te);at(Ce.pelvis,Math.cos(lt)*ze,0,Math.sin(lt)*ze),Ee.push({type:"buckle",pos:[Zt[0],Zt[1],Zt[2]]})}let N=Pt?0:se?.35:.8+.5*(v?v.hurt:0),O=b*te*te*N*F+xn,U=b*te*te*N*j+P,It=_.walk[0]*.3,bt=_.walk[1]*.3,Jt=(v?50:150)*(.25+.75*ne)+(se?120:0),de=to(-1500*(F-It)-330*(R-_.walk[0]),-1500*(j-bt)-330*(k-_.walk[1]),Jt);O+=de[0],U+=de[1],_.reelT>0&&(_.reelT-=A,O+=_.reel[0]/.16,U+=_.reel[1]/.16),O*=_.support*_.grip,U*=_.support*_.grip,rt(Ce.pelvis,O*.5,0,U*.5),rt(Ce.chest,O*.5,0,U*.5);let Ae=q+(se?.5:fu-.1*(1-ne)),Le=0,$e=!1;if(ct&&_.riseT<1&&(Ae=q+_.riseFrom+(.5-_.riseFrom)*(_.riseT/1)),_.buckle>0&&(Ae-=_.buckleDip),v&&v.hurt>0&&(Ae-=.13*v.hurt),!se){let lt=0,ze=9,nn=0;for(let $ of wt){gi(Ve,[0,Ja,$.side*xc],At);let ce=Math.hypot(($.swing?$.to[0]:$.planted[0])-Zt[0]-At[0],($.swing?$.to[1]:$.planted[1])-Zt[2]-At[2]),he=q-Ja+Math.sqrt(Math.max(0,du*du-ce*ce));$.swing?(ze=he,nn=_n(($.t-.4)/.4,0,1)):he>lt&&(lt=he,Le=ce)}lt<Ae&&(Ae=lt,$e=!0),nn>0&&ze<Ae&&(Ae+=(Math.max(ze,q+.6)-Ae)*nn)}let xe=_.hT;_.hT+=_n(Ae-_.hT,-($e?3.2:2.2)*A,1.1*A);let De=$e?Math.min(0,(_.hT-xe)/A):0,an=Math.max(.05,Zt[1]+Ja-q),je=se?1:an/Math.hypot(an,Le),Dn=(1.05+.75*ne)*(v?1-.5*v.hurt:1-.25*(z.hurt+X.hurt)),jn=_n(b*bs+12e3*(_.hT-Zt[1])-1400*(tt[1]-De),0,b*bs*Math.max(.3,Dn*je))*_.support*_.grip;Pt&&(_.hT=Zt[1],jn=_n(b*bs*Qx-500*tt[1],0,b*bs*.8)*_.support*_.grip),rt(Ce.pelvis,0,jn*.55,0),rt(Ce.chest,0,jn*.45,0);let Ni=to($t*.9,Vt*.9,.38);B(Ce.pelvis,Ke),gi(Ke,[-1,0,0],st);let vc=Math.atan2(st[2]*_.hx-st[0]*_.hz,st[0]*_.hx+st[2]*_.hz);Q(Ce.pelvis,K),Ft(Ce.pelvis,520*_.support,46*_.support,Ni[0]*.3,Ni[1]*.3,(70*vc-7*K[1])*_.support),Ft(Ce.chest,900*_.support*(.5+.5*ne),80*_.support,Ni[0],Ni[1],0),_.stepCool-=A;let no=(lt,ze)=>{let nn=qt>1e-4?1/qt:0,$=.02+.2*(1-ne),ce=et-lt.planted[0],he=Bt-lt.planted[1],ge=Math.exp(te*Math.sqrt(N)*ze*(.55+.45*ne));return[lt.planted[0]+ce*ge+$t*nn*.05-_.walk[0]/te*.55+(Kt()-.5)*$,lt.planted[1]+he*ge+Vt*nn*.05-_.walk[1]/te*.55+(Kt()-.5)*$]},Ws=(lt,ze,nn)=>{let $=nn[0]-ze.planted[0],ce=nn[1]-ze.planted[1],he=(.36+.36*ne)*(1-.35*lt.hurt);[$,ce]=to($,ce,he);let ge=($*dt+ce*Mt)*lt.side;ge<.1&&($+=(.1-ge)*lt.side*dt,ce+=(.1-ge)*lt.side*Mt);let Je=ze.planted[0]+$,Re=ze.planted[1]+ce;return[Je,Re,Math.hypot(Je-nn[0],Re-nn[1])]};if(se){if(!Pt)for(let lt of wt){let ze=S+_.hx*-.16+dt*lt.side*.12,nn=h+_.hz*-.16+Mt*lt.side*.12,$=to(ze-lt.planted[0],nn-lt.planted[1],.9*A);lt.planted[0]+=$[0],lt.planted[1]+=$[1]}}else if(v){let lt=v===z?X:z;if(lt.t+=A/lt.T,lt.t<.65&&!lt.tidy){let ze=Ws(lt,v,no(v,(1-lt.t)*lt.T));lt.to[0]+=(ze[0]-lt.to[0])*.3,lt.to[1]+=(ze[1]-lt.to[1])*.3}if(lt.t>.55&&lt.gap<.012||lt.t>=1.4||lt.t>=1&&Kn(lt.p[0],lt.p[2])<q-.12){if(lt.swing=!1,Kn(lt.p[0],lt.p[2])<q-.12)return Dt(null,"edge");let ze=Math.hypot(lt.to[0]-lt.p[0],lt.to[1]-lt.p[2]),nn=Math.hypot(R,k);if(ze>.16&&Math.abs(Kn(lt.to[0],lt.to[1])-q)>.12){let he=nn>.05?R/nn:-_.hx,ge=nn>.05?k/nn:-_.hz;return at(Ce.pelvis,he*22,26,ge*22),Dt([he*62,ge*62],"trip")}lt.planted=[lt.p[0],lt.p[2]],_.stepCool=.03+.12*(1-ne);let $=Math.hypot(R,k),ce=Math.min(b*$*.38,55*ne*(1-.6*lt.hurt));$>.05&&(at(Ce.chest,-R/$*ce*.6,0,-k/$*ce*.6),at(Ce.pelvis,-R/$*ce*.4,0,-k/$*ce*.4)),Lt&&!lt.tidy&&G.steps++,Ee.push({type:"step",pos:[lt.p[0],q,lt.p[2]],hurt:lt.hurt})}}else{let lt=Math.hypot(z.planted[0]-X.planted[0],z.planted[1]-X.planted[1]),ze=.115-.035*(1-ne),nn=qt<.06&&Math.hypot(R,k)<.12&&lt>.36&&_.stepCool<-.35&&ne>.45;if(_.stepCool<=0&&(qt>ze||nn)){let $,ce;if(nn)$=_.lastFoot===0?1:0,ce=[wt[1-$].planted[0]+wt[$].side*dt*.2,wt[1-$].planted[1]+wt[$].side*Mt*.2];else{let Re=[0,1].map(cn=>{let hn=Ws(wt[cn],wt[1-cn],no(wt[1-cn],.26));return{tgt:hn,move:Math.hypot(hn[0]-wt[cn].p[0],hn[1]-wt[cn].p[2])}}),ln=cn=>cn.tgt[2]-.25*Math.min(cn.move,.4)+(cn.move<.08?1:0);$=Math.abs(ln(Re[0])-ln(Re[1]))<.02?_.lastFoot===0?1:0:ln(Re[0])<ln(Re[1])?0:1,ce=[Re[$].tgt[0],Re[$].tgt[1]]}let he=wt[$],ge=wt[1-$];he.swing=!0,he.t=0,he.from=[he.p[0],he.p[1],he.p[2]],he.to=ce;let Je=Math.hypot(he.to[0]-he.p[0],he.to[1]-he.p[2]);he.T=_n(.15+.24*Je,.17,.34)*(1.3-.3*ne)*(qt>.3?.75:1)*(ge.hurt>0?1-.3*ge.hurt:1),he.lift=he.hurt>.3?.035:.07+.09*Kt()+.05*Math.min(1,qt*2),he.tidy=nn,_.lastFoot=$}}for(let lt of wt){if(Y(lt.shin,M),Pt){let nn=.36+.42*(_n(_.kneelT/_.kneelMax,0,1)*(1-.6*ne))+.08*Math.sin(G.clock*.9+_.phase[lt.side===1?0:1])*(1-ne);vt(lt,-Math.sin(nn),-Math.cos(nn),lt.side*.1),C[lt.shin].SetTargetAngle(nn+Math.PI/2);continue}if(lt.swing){let ze=_n(lt.t,0,1),nn=ze*ze*(3-2*ze);lt.ik[0]=lt.from[0]+(lt.to[0]-lt.from[0])*nn,lt.ik[2]=lt.from[2]+(lt.to[1]-lt.from[2])*nn,lt.ik[1]=q+lt.lift*Math.sin(Math.PI*ze)-(ze>.5?.09*(ze-.5):0);let $=1900,ce=170,he=[$*(lt.ik[0]-lt.p[0])-ce*M[0],$*(lt.ik[1]-lt.p[1])-ce*M[1],$*(lt.ik[2]-lt.p[2])-ce*M[2]],ge=Math.hypot(he[0],he[1],he[2]),Je=ge>650?650/ge:1;rt(lt.shin,he[0]*Je*_.support,(he[1]*Je-(lt.t>1?160:0))*_.support,he[2]*Je*_.support,lt.p)}else{lt.ik[0]=lt.planted[0],lt.ik[1]=q,lt.ik[2]=lt.planted[1];let ze=to(1800*(lt.planted[0]-lt.p[0])-130*M[0],1800*(lt.planted[1]-lt.p[2])-130*M[2],480),nn=_n(40+7e3*lt.gap,40,280)*_.support;rt(lt.shin,ze[0]*_.support,-nn,ze[1]*_.support,lt.p),rt(Ce.pelvis,0,nn-40*_.support,0)}yt(lt,lt.ik)}Yt(ie,A),Lt&&(G.onFeet+=A,G.stumbled+=Math.hypot(S-_.lastCom[0],h-_.lastCom[1])),_.lastCom[0]=S,_.lastCom[1]=h;let Xs=lt=>lt.swing?Math.hypot(S-lt.p[0],h-lt.p[2]):Math.hypot(S-lt.planted[0],h-lt.planted[1]),qs=Math.min(Xs(z),Xs(X));B(Ce.chest,Ke);let Ys=1-2*(Ke[0]*Ke[0]+Ke[2]*Ke[2]);if(!G.alive||G.ko)return Dt(null,"out");if(ct){if(_.riseT>_.riseFail||ne<.3)return Ee.push({type:"gaveout",pos:[Zt[0],Zt[1],Zt[2]]}),Dt(null,"gave out");if(_.riseT>2.7&&Zt[1]-q>fu-.16){G.mode="balance",G.getups++,_.offT=0,_.stepCool=.2;for(let lt of wt)lt.swing=!1,lt.planted=[lt.p[0],lt.p[2]];Ee.push({type:"up",pos:[Zt[0],Zt[1],Zt[2]]})}else if(_.riseT>5)return Dt(null,"gave out");return}_.offT=!se&&(qs>.46||Ys<.8)?_.offT+A:Math.max(0,_.offT-2*A);let Zs=qs>(se?.5:.7)?"reach":_.offT>.3?"lean":qt>2.4?"capture":Ys<.45?"tilt":Zt[1]-q<(se?.3:.52)?"height":"",$s=()=>{G.mode="kneel",G.kneels++,_.kneelT=0,_.kneelMax=1.6+3.2*Kt();for(let lt of wt)lt.swing=!1,lt.kneeDown=!1,lt.planted=[lt.p[0],lt.p[2]];Ee.push({type:"kneel",pos:[Zt[0],Zt[1],Zt[2]]})};if(Zs==="height"&&!se&&Lt&&qs<.45&&Math.hypot(R,k)<1.4&&Ys>.75)return $s();if(Zs)return Dt(null,Zs);if(_.airT>.3)return Dt(null,"air");if(G.paralysed)return Dt(null,"spine");if(_.legT=!se&&(z.broken>=3||X.broken>=3)?_.legT+A:0,_.legT>.35)return Dt(null,"leg");let Ts=Math.hypot(R,k);if(Pt&&Ts>2)return Dt(null,"thrown");if(se){if(_.kneelT+=A,Pt&&_.kneelT>Math.min(_.kneelMax,1.4)&&ne>.52&&G.bleed<.5&&_.grip>.9&&Tn()){G.mode="rise",_.riseT=1.9,_.riseFail=9,_.support=1,_.hT=Zt[1],_.offT=0,_.buckle=-1.5;for(let lt of wt)lt.swing=!1,lt.planted=[lt.p[0],lt.p[2]];Ee.push({type:"rise",pos:[Zt[0],Zt[1],Zt[2]],fromKnees:!0})}else if(ne<.2||_.kneelT>_.kneelMax){let lt=Kt()<.5?1:-1,ze=Kt()<.45;Dt(ze?[dt*lt*28,Mt*lt*28]:[_.hx*30,_.hz*30],"slump")}}else Lt&&Ts<1.5&&(ne<.5||_.buckle>0&&ne<.72&&_.buckleDip>.24)&&$s()}function me(A,_){let G=gt,ct=Rt;_t(wt[0]),_t(wt[1]);let Pt=Math.min(wt[0].gap,wt[0].kgap,wt[1].gap,wt[1].kgap);G.grip+=_n((Pt<.03?1:0)-G.grip,-_/.09,_/.05);let se=A*_n(1-G.fallT/(.45+.6*A),0,1);if(se>0)for(let X of wt){let dt=X.kgap<.03,Mt=X.gap<.03;if(!dt&&!Mt)continue;H(X);let xt=dt?X.k:X.p,Wt=dt?ws+.1:du+.08;gi(Ve,[0,Ja,X.side*xc],At);let Ot=Zt[0]+At[0]-xt[0],Lt=Zt[1]+At[1]-xt[1],ft=Zt[2]+At[2]-xt[2],Z=Math.hypot(Ot,Lt,ft)||1;if(Z>Wt||Lt/Z<.25)continue;let le=(tt[0]*Ot+tt[1]*Lt+tt[2]*ft)/Z,v=_n(b*bs*.3-240*le,0,b*bs*.45)*se*(1-.7*X.hurt);rt(Ce.pelvis,v*Ot/Z,v*Lt/Z,v*ft/Z)}gi(Qa(Ve),[G.fallDir[0],0,G.fallDir[1]],ot);let ne=ot[0],te=ot[2],S=Math.max(0,ne),h=_n((.42-(Zt[1]-Kn(Zt[0],Zt[2])))/.2,0,1);wt.forEach((X,dt)=>{let Mt,xt,Wt;dt===G.lead?(Mt=ne*.95,xt=te*.95+X.side*.08,Wt=.95-.65*S):(Mt=ne*.15-.3*(1-S),xt=X.side*.1,Wt=1.65),Mt*=1-h,Wt*=1-.75*h;let Ot=Math.hypot(Mt,1,xt);vt(X,Mt/Ot,-1/Ot,xt/Ot),C[X.shin].SetTargetAngle(Wt)}),B(Ce.chest,Ke),gi(Qa(Ke),[G.fallDir[0],0,G.fallDir[1]],ot);let R=ot[0],k=ot[2],z=G.grip<.3&&G.fallT>.35?1:0;if(ae(Ce.chest,ls(0,1,0,.12+.4*Math.max(0,R))),ae(Ce.head,ls(0,1,0,.5*R)),!(G.flinch>0))for(let X of[1,-1]){let dt=_n(k*X,-1,1),Mt=z*.55*Math.sin(ct.clock*11+X*1.7),xt=_n(-R*1.25,-.8,1.3)+.15+Mt,Wt=-.25-.9*Math.max(0,dt)+.3*Math.max(0,-dt);ae(X===1?Ce.uarm_l:Ce.uarm_r,Et(xt,Wt,X)),C[X===1?Ce.larm_l:Ce.larm_r].SetTargetAngle(-.35-.3*z)}}function Ie(A){let _=gt,G=Rt,ct=G.clock;_.support=Math.max(0,_.support-A/.14);let Pt=G.alive&&!G.ko;Pt||(_.fight=0);let se=G.mode==="fall"?_.fight*_n(1-(_.fallT-1.3)/1.2,0,1)*(_.settle>.1?.5:1):0,ne=Pt?.1+.32*G.strength:0;for(let te=1;te<y;te++){let S=An[te].zone,h=Math.max(ne,se*(S==="arm"?.85:S==="thigh"||S==="shin"?.75:.7));it[te]+=_n(h-it[te],-(G.alive?3:1.1)*A,2*A)}if(se>.12)me(se,A);else if(Pt){for(let te of wt){let S=ct*(1.1+.5*G.strength)+_.phase[te.side===1?0:1];ae(te.thigh,ls(0,1,0,.35+.4*Math.sin(S))),C[te.shin].SetTargetAngle(.7+.6*Math.sin(S+1.3))}Yt(0,A)}if(G.mode==="fall"){_.fallT=(_.fallT||0)+A;let te=Zt[1]-Kn(Zt[0],Zt[2])<.45||Rt.restTimer>.7||_.fallT>4;if(_.settle=te&&Math.hypot(tt[0],tt[1],tt[2])<(_.fallT>4?1.2:.6)?_.settle+A:0,_.settle>.35){G.mode="down",G.downAt=G.time,_.settle=0,_.fallT=0,Ee.push({type:"down",pos:[kt[0],kt[1],kt[2]],onFeet:G.onFeet});let S=Kn(Zt[0],Zt[2]),h=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([k,z])=>Math.abs(Kn(Zt[0]+k,Zt[2]+z)-S)<.05)&&Zt[1]-S<.5,R=_n((G.blood-10)/70,0,1)*(1-.3*Math.min(1,G.stun));Pt&&R>.42&&_.riseTries<2&&h&&Tn()?_.riseAt=G.time+.9+1.6*Kt()+2.5*Math.max(0,G.stun-.25):(_.riseAt=0,G.spent=!0)}}else if(G.mode==="down"&&_.riseAt>0&&G.time>_.riseAt){if(_.riseAt=0,!Pt||G.strength<.36||!Tn()){G.spent=!0;return}B(Ce.chest,Ke);let te=gi(Ke,[-1,0,0],st)[1]>0,S=E(Ce.head,Fe),h=S[0]-Zt[0],R=S[2]-Zt[2],k=Math.hypot(h,R)||1,z=te?-1:1;_.hx=z*h/k,_.hz=z*R/k,G.mode="rise",_.riseT=0,_.riseTries++,_.support=0,_.offT=0,_.buckle=0,_.kneelT=0,_.riseFrom=Math.max(.12,Zt[1]-Kn(Zt[0],Zt[2])),_.hT=Zt[1],_.riseFail=Kt()<_n((.75-G.strength)*1.6+.35*_.legWound,0,.9)?.9+Kt()*1.2:9;for(let X of wt)H(X),X.swing=!1,X.planted=[X.p[0],X.p[2]];_.lastCom[0]=Zt[0],_.lastCom[1]=Zt[2],Ee.push({type:"rise",pos:[Zt[0],Zt[1],Zt[2]]})}}function Ut(A){for(Ee.length=0;He.length;)Ee.push(He.shift());let _=Rt,G=gt;_.clock+=A,_.hits>0&&(_.time+=A);let ct=0;if(_.alive){for(let z of Ct){let X=Math.min(z.rate*A,z.left);z.left-=X,_.blood-=X,z.left>0&&(ct+=z.rate)}_.blood=Math.max(0,_.blood),_.blood<=0&&Ze("Bled out")}if(_.bleed=ct,_.stun=Math.max(0,_.stun-.2*A),(!_.alive||_.ko)&&(_.spent=!0),_.strength=_.alive&&!_.ko?_n((_.blood-10)/70,0,1)*(1-.75*Math.min(1,_.stun)):0,G.flinch-=A,G.lookDown-=A,G.clutch&&_.clock>G.clutchEnd&&(G.clutch=null),E(Ce.pelvis,Zt),Y(Ce.pelvis,tt),B(Ce.pelvis,Ve),E(Ce.chest,kt),Y(Ce.chest,ue),_.mode==="balance"||_.mode==="kneel"||_.mode==="rise"){for(let z=1;z<y;z++){let dt=An[z].zone==="thigh"||An[z].zone==="shin"?.95:.35+.65*_.strength;it[z]+=_n(dt-it[z],-3*A,3*A)}Ht(A)}else Ie(A);jt(),s.Step(A,1);let Pt=0;for(let z=0;z<y;z++){Y(z,M);let X=M[0]-ut[z*3],dt=M[1]-ut[z*3+1]+bs*A,Mt=M[2]-ut[z*3+2];ut[z*3]=M[0],ut[z*3+1]=M[1],ut[z*3+2]=M[2];let xt=Math.hypot(X,dt,Mt);Pt=Math.max(Pt,Math.hypot(M[0],M[1],M[2])),Nt[z]-=A;let Wt=_.mode==="fall"||_.mode==="down";if(_.hits>0&&Wt&&xt>2.2&&Nt[z]<=0){Nt[z]=.18;let Ot=An[z],Lt=xt*(Ot.zone==="head"?5:Ot.zone==="chest"||Ot.zone==="gut"?1.6:.8);_.damage+=Lt,_.impacts++;let ft=nt(z);Ee.push({type:"impact",part:z,zone:Ot.zone,pos:ft,dv:xt,dmg:Lt}),B(z,Ke),gi(Qa(Ke),[-X/xt,-dt/xt,-Mt/xt],st);for(let[Z,le]of Ln(z,st))Rn(Z,xt*le,ft,"fall");Ot.zone==="head"&&Rn("neck",xt*.9,ft,"fall"),Ot.zone==="head"&&(_.stun=Math.min(1.6,_.stun+xt*.09),_.stun>1.15&&en())}}if(Oe==="window")for(let z=0;z<y;z++){if(E(z,Fe),Fe[1]>we.glassY+.6||Fe[1]<we.glassY-.3)continue;let X=Math.hypot(ut[z*3],ut[z*3+1],ut[z*3+2]);if(X<1.6)continue;let dt=An[z].r+An[z].hh+.06+X*A*2;if(!(Math.abs(Fe[1]-we.glassY)>dt))for(let Mt of f.panes)Mt.broken||Fe[0]<Mt.min[0]-.1||Fe[0]>Mt.max[0]+.1||Fe[2]<Mt.min[1]-.1||Fe[2]>Mt.max[1]+.1||x(Mt,[ut[z*3],ut[z*3+1],ut[z*3+2]])}if(_.hits===0)return Ee;_.lowest=Math.min(_.lowest,Zt[1]),_.drop=Math.max(0,Ne.start[1]+.93-_.lowest-.85);let se=Math.max(Math.hypot(ut[0],ut[1],ut[2]),Math.hypot(ut[3],ut[4],ut[5])),ne=wt.some(z=>z.swing&&!z.tidy),te=wt.some(z=>z.swing&&z.tidy),S=_.mode==="balance"?!ne&&se<(te?.35:.2):Pt<.15;_.restTimer=S?_.restTimer+A:0;let h=_.restTimer>1.1,R=_.stun>.05?2.6:1.5,k=0;if(_.alive?_.bleed>.01?k=0:_.mode==="balance"?k=_.restTimer/R:_.mode==="rise"||_.mode==="down"&&!_.spent?k=0:k=Math.max(_.restTimer/1.1,_.mode==="down"?(_.time-_.downAt)/3.5:0):k=Math.min(_.restTimer/1.1,(_.time-_.diedAt)/1.6),_.wrap=_n(k,0,1),!_.done){let z="";!_.alive&&h&&_.time-_.diedAt>1.6?z=_.outcome:_.alive&&_.bleed<=.01&&(_.mode==="fall"&&h||_.mode==="down"&&_.spent&&(h||_.time-_.downAt>3.5)||_.mode==="balance"&&_.restTimer>R||_.ko&&h)?z=_.ko?"Out cold":_.mode==="balance"?"Still standing":"Down, alive":_.time>80&&(z="Time"),z&&(_.done=!0,_.outcome=z,Ee.push({type:"done",outcome:z}))}return Ee}function Me(){let A=Rt,_=!A.alive,G=Object.values(A.bones),ct=[["Stagger steps",String(A.steps),Math.min(A.steps,40)*14],["Stumbled",A.stumbled.toFixed(1)+" m",Math.round(Math.min(A.stumbled,12)*18)],["Knee drops",String(A.kneels),A.kneels*120],["Put down",A.downAt>=0?"yes":"\u2014",A.downAt>=0?90:0],["Got back up",String(A.getups),A.getups*140],["Hard landings",String(A.impacts),Math.round(A.damage*ey)],["Bones",String(G.length),G.reduce((se,ne)=>se+Bf[ne],0)],["Fell",A.drop.toFixed(1)+" m",Math.round(A.drop*65)],["Glass",A.glass+(A.glass===1?" pane":" panes"),A.glass*130],["Trick shots",String(A.fallHits),A.fallHits*150+A.airHits*250],["Out cold",A.ko?"yes":"\u2014",A.ko?150:0],[_?A.outcome:"Bled out",_?A.diedAt.toFixed(1)+" s":"\u2014",_?A.diedAt>.3?260:60:0]];return{lines:ct.filter((se,ne)=>se[2]>0||ne<3),total:ct.reduce((se,ne)=>se+ne[2],0)}}function Be(A){yc[A]&&(Oe=A,Ne=yc[A],dn())}let Xt=[0,0,0,1];return dn(),{parts:An,state:Rt,wounds:Ct,feet:wt,step:Ut,hit:fe,reset:dn,payout:Me,pos:nt,mass:D,totalMass:b,statics:p,setLevel:Be,groundY:Kn,get level(){return Ne},get levelKey(){return Oe},glass:{tiles:f.tiles,panes:f.panes,transform(A,_){let G=f.tiles[A];return ht(G.id,_),W(G.id,Xt),_[3]=Xt[0],_[4]=Xt[1],_[5]=Xt[2],_[6]=Xt[3],_}},transform(A,_){E(A,_);let G=a.GetRotation(L[A]);return _[3]=G.GetX(),_[4]=G.GetY(),_[5]=G.GetZ(),_[6]=G.GetW(),_},_debug:{joints:C,tone:it,IDX:Ce,ctl:gt,impulse:at,armQ:Et,setTarget:ae}}}var ja,bs,uu,Or,jx,gn,we,yc,An,Ce,ws,kr,Ja,xc,Jx,du,Qx,fu,ty,gu,ey,Bf,ny,iy,sy,Qa,_n,Gf=Wf(()=>{ja=Math.PI/180,bs=9.81,uu=0,Or=1,jx={half:16},gn={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};gn.height=gn.steps*gn.rise;gn.length=gn.steps*gn.run;we={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},yc={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-.8,gn.height,gn.z],attacker:[-5.2,gn.height+1.5,gn.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,we.floor,we.z],attacker:[-6.2,we.floor+1.5,we.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};An=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],Ce=Object.fromEntries(An.map((n,t)=>[n.name,t])),ws=.44,kr=.425,Ja=-.08,xc=.1,Jx=.205,du=.85,Qx=.35,fu=.915,ty={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:165,stun:.55,bleed:.35},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},gu={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},ey=1.2,Bf=[0,5,30,80],ny=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),iy={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},sy={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};Qa=n=>[-n[0],-n[1],-n[2],n[3]],_n=(n,t,e)=>Math.max(t,Math.min(e,n))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var sd=0,rh=1,rd=2;var Fs=1,ad=2,Tr=3,Ms=0,ii=1,Mi=2,Us=0,Er=1,ah=2,oh=3,lh=4,od=5;var Os=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,ch=204,hh=205,gd=206,_d=207,xd=208,yd=209,vd=210,Md=211,Sd=212,bd=213,wd=214,No=0,Fo=1,Uo=2,dr=3,Oo=4,ko=5,Bo=6,zo=7,uh=0,Td=1,Ed=2,Vi=0,dh=1,fh=2,ph=3,Ia=4,mh=5,gh=6,_h=7;var xh=300,ks=301,Ar=302,yl=303,vl=304,Go=1e3,Oi=1001,Ho=1002,Vn=1003,Ad=1004;var La=1005;var ei=1006,Ml=1007;var es=1008;var ri=1009,yh=1010,vh=1011,Rr=1012,Sl=1013,Pi=1014,Si=1015,Ii=1016,bl=1017,wl=1018,Bs=1020,Mh=35902,Sh=35899,bh=1021,wh=1022,Li=1023,Qi=1026,ns=1027,Tl=1028,El=1029,Ss=1030,Al=1031;var Rl=1033,Da=33776,Na=33777,Fa=33778,Ua=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Fl=37496,Ul=37488,Ol=37489,Oa=37490,kl=37491,Bl=37808,zl=37809,Gl=37810,Hl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,$l=37818,Kl=37819,jl=37820,Jl=37821,Ql=36492,tc=36494,ec=36495,nc=36283,ic=36284,ka=36285,sc=36286;var Kr=2300,Vo=2301,Lo=2302,Yc=2303,Zc=2400,$c=2401,Kc=2402;var Rd=3200;var rc=0,Cd=1,is="",Qn="srgb",jr="srgb-linear",Jr="linear",yn="srgb";var Do=7680;var Pd=519,Id=512,Ld=513,Dd=514,Th=515,Nd=516,Fd=517,Eh=518,Ah=519,Ud=35044;var Rh="300 es",yi=2e3,fr=2001;function Xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Od(){let n=Qr("canvas");return n.style.display="block",n}var vu={},pr=null;function Ch(...n){let t="THREE."+n.shift();pr?pr("log",t,...n):console.log(t,...n)}function kd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=kd(n);let t="THREE."+n.shift();if(pr)pr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ge(...n){n=kd(n);let t="THREE."+n.shift();if(pr)pr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Yr(...n){let t=n.join(" ");t in vu||(vu[t]=!0,Ue(...n))}function Bd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var zd={[No]:No,[Uo]:Bo,[Oo]:Oo,[dr]:ko,[Fo]:Fo,[Bo]:Uo,[zo]:zo,[ko]:dr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Wo=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[e&63|128]+Yn[e>>8&255]+"-"+Yn[e>>16&255]+Yn[e>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function Yf(n,t){return(n%t+t)%t}function Sc(n,t,e){return(1-e)*n+e*t}function Gd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ph(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zf(n,t){if(t.constructor===Float32Array)return n;let e=Ph(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function $f(n,t){if(t.constructor===Float32Array)return n;let e=Ph(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Uh=class Uh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=rn(this.x,t.x,e.x),this.y=rn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=rn(this.x,t,e),this.y=rn(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;var ve=Uh,ui=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],d=r[a+0],f=r[a+1],x=r[a+2],w=r[a+3];if(p!==w||l!==d||c!==f||u!==x){let g=l*d+c*f+u*x+p*w;g<0&&(d=-d,f=-f,x=-x,w=-w,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),D=Math.sin(b);m=Math.sin(m*b)/D,o=Math.sin(o*b)/D,l=l*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+w*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+x*o,p=p*m+w*o;let b=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=b,c*=b,u*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+u*p+l*f-c*d,t[e+1]=l*x+u*d+c*p-o*f,t[e+2]=c*x+u*f+o*d-l*p,t[e+3]=u*x-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),p=o(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"YXZ":this._x=d*u*p+c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"ZXY":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p-d*f*x;break;case"ZYX":this._x=d*u*p-c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p+d*f*x;break;case"YZX":this._x=d*u*p+c*f*x,this._y=c*f*p+d*u*x,this._z=c*u*x-d*f*p,this._w=c*u*p-d*f*x;break;case"XZY":this._x=d*u*p-c*f*x,this._y=c*f*p-d*u*x,this._z=c*u*x+d*f*p,this._w=c*u*p+d*f*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=i+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Oh=class Oh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*u,this.y=i+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=rn(this.x,t.x,e.x),this.y=rn(this.y,t.y,e.y),this.z=rn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=rn(this.x,t,e),this.y=rn(this.y,t,e),this.z=rn(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oh.prototype.isVector3=!0;var J=Oh,bc=new J,Mu=new ui,kh=class kh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],f=i[5],x=i[8],w=s[0],g=s[3],m=s[6],b=s[1],D=s[4],T=s[7],L=s[2],C=s[5],y=s[8];return r[0]=a*w+o*b+l*L,r[3]=a*g+o*D+l*C,r[6]=a*m+o*T+l*y,r[1]=c*w+u*b+p*L,r[4]=c*g+u*D+p*C,r[7]=c*m+u*T+p*y,r[2]=d*w+f*b+x*L,r[5]=d*g+f*D+x*C,r[8]=d*m+f*T+x*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,x=e*p+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=p*w,t[1]=(s*c-u*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(u*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=f*w,t[7]=(i*l-c*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(t,e)),this}rotate(t){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;var We=kh,wc=new We,Su=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let n={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yn&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yn&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jr]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:i,transfer:yn,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),n}var on=Kf();function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ks===void 0&&(Ks=Qr("canvas")),Ks.width=t.width,Ks.height=t.height;let s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ks}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Jf=0,Ec=new J,ni=class n extends ki{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Oi,s=Oi,r=ei,a=es,o=Li,l=ri,c=n.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Cr(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ue(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=xh;ni.DEFAULT_ANISOTROPY=1;var Bh=class Bh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],x=l[9],w=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-w)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+w)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,T=(f+1)/2,L=(m+1)/2,C=(u+d)/4,y=(p+w)/4,E=(x+g)/4;return D>T&&D>L?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=C/i,r=y/i):T>L?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=E/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=y/r,s=E/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-x)*(g-x)+(p-w)*(p-w)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(p-w)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=rn(this.x,t.x,e.x),this.y=rn(this.y,t.y,e.y),this.z=rn(this.z,t.z,e.z),this.w=rn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=rn(this.x,t,e),this.y=rn(this.y,t,e),this.z=rn(this.z,t,e),this.w=rn(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;var Cn=Bh,qo=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Cn(0,0,t,e),this.scissorTest=!1,this.viewport=new Cn(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ni({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends qo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ta=class extends ni{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends ni{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xl=class xl{constructor(t,e,i,s,r,a,o,l,c,u,p,d,f,x,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,p,d,f,x,w,g)}set(t,e,i,s,r,a,o,l,c,u,p,d,f,x,w,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=f,m[7]=x,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),a=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,x=o*u,w=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+x*c,e[5]=d-w*c,e[9]=-o*l,e[2]=w-d*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,x=c*u,w=c*p;e[0]=d+w*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-x,e[6]=w+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,x=c*u,w=c*p;e[0]=d-w*o,e[4]=-a*p,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*u,e[9]=w-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,x=o*u,w=o*p;e[0]=l*u,e[4]=x*c-f,e[8]=d*c+w,e[1]=l*p,e[5]=w*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,x=o*l,w=o*c;e[0]=l*u,e[4]=w-d*p,e[8]=x*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+x,e[10]=d-w*p}else if(t.order==="XZY"){let d=a*l,f=a*c,x=o*l,w=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+w,e[5]=a*u,e[9]=f*p-x,e[2]=x*p-f,e[6]=o*u,e[10]=w*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,i){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),cs.crossVectors(i,li),cs.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),cs.crossVectors(i,li)),cs.normalize(),so.crossVectors(li,cs),s[0]=cs.x,s[4]=so.x,s[8]=li.x,s[1]=cs.y,s[5]=so.y,s[9]=li.y,s[2]=cs.z,s[6]=so.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],f=i[13],x=i[2],w=i[6],g=i[10],m=i[14],b=i[3],D=i[7],T=i[11],L=i[15],C=s[0],y=s[4],E=s[8],Y=s[12],B=s[1],Q=s[5],nt=s[9],ht=s[13],W=s[2],rt=s[6],at=s[10],it=s[14],mt=s[3],pt=s[7],ut=s[11],Nt=s[15];return r[0]=a*C+o*B+l*W+c*mt,r[4]=a*y+o*Q+l*rt+c*pt,r[8]=a*E+o*nt+l*at+c*ut,r[12]=a*Y+o*ht+l*it+c*Nt,r[1]=u*C+p*B+d*W+f*mt,r[5]=u*y+p*Q+d*rt+f*pt,r[9]=u*E+p*nt+d*at+f*ut,r[13]=u*Y+p*ht+d*it+f*Nt,r[2]=x*C+w*B+g*W+m*mt,r[6]=x*y+w*Q+g*rt+m*pt,r[10]=x*E+w*nt+g*at+m*ut,r[14]=x*Y+w*ht+g*it+m*Nt,r[3]=b*C+D*B+T*W+L*mt,r[7]=b*y+D*Q+T*rt+L*pt,r[11]=b*E+D*nt+T*at+L*ut,r[15]=b*Y+D*ht+T*it+L*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],x=t[3],w=t[7],g=t[11],m=t[15],b=l*f-c*d,D=o*f-c*p,T=o*d-l*p,L=a*f-c*u,C=a*d-l*u,y=a*p-o*u;return e*(w*b-g*D+m*T)-i*(x*b-g*L+m*C)+s*(x*D-w*L+m*y)-r*(x*T-w*C+g*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],x=t[12],w=t[13],g=t[14],m=t[15],b=e*o-i*a,D=e*l-s*a,T=e*c-r*a,L=i*l-s*o,C=i*c-r*o,y=s*c-r*l,E=u*w-p*x,Y=u*g-d*x,B=u*m-f*x,Q=p*g-d*w,nt=p*m-f*w,ht=d*m-f*g,W=b*ht-D*nt+T*Q+L*B-C*Y+y*E;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let rt=1/W;return t[0]=(o*ht-l*nt+c*Q)*rt,t[1]=(s*nt-i*ht-r*Q)*rt,t[2]=(w*y-g*C+m*L)*rt,t[3]=(d*C-p*y-f*L)*rt,t[4]=(l*B-a*ht-c*Y)*rt,t[5]=(e*ht-s*B+r*Y)*rt,t[6]=(g*T-x*y-m*D)*rt,t[7]=(u*y-d*T+f*D)*rt,t[8]=(a*nt-o*B+c*E)*rt,t[9]=(i*B-e*nt-r*E)*rt,t[10]=(x*C-w*T+m*b)*rt,t[11]=(p*T-u*C-f*b)*rt,t[12]=(o*Y-a*Q-l*E)*rt,t[13]=(e*Q-i*Y+s*E)*rt,t[14]=(w*D-x*L-g*b)*rt,t[15]=(u*L-p*D+d*b)*rt,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,x=r*p,w=a*u,g=a*p,m=o*p,b=l*c,D=l*u,T=l*p,L=i.x,C=i.y,y=i.z;return s[0]=(1-(w+m))*L,s[1]=(f+T)*L,s[2]=(x-D)*L,s[3]=0,s[4]=(f-T)*C,s[5]=(1-(d+m))*C,s[6]=(g+b)*C,s[7]=0,s[8]=(x+D)*y,s[9]=(g-b)*y,s[10]=(1-(d+w))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ti.copy(this);let c=1/a,u=1/o,p=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=p,Ti.elements[9]*=p,Ti.elements[10]*=p,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=yi,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),x,w;if(l)x=r/(a-r),w=a*r/(a-r);else if(o===yi)x=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===fr)x=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=yi,l=!1){let c=this.elements,u=2/(e-t),p=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),x,w;if(l)x=1/(a-r),w=a/(a-r);else if(o===yi)x=-2/(a-r),w=-(a+r)/(a-r);else if(o===fr)x=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};xl.prototype.isMatrix4=!0;var un=xl,js=new J,Ti=new un,Qf=new J(0,0,0),tp=new J(1,1,1),cs=new J,so=new J,li=new J,wu=new un,Tu=new ui,Ci=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ep=0,Eu=new J,Js=new ui,Yi=new un,ro=new J,Br=new J,np=new J,ip=new ui,Au=new J(1,0,0),Ru=new J(0,1,0),Cu=new J(0,0,1),Pu={type:"added"},sp={type:"removed"},Qs={type:"childadded",child:null},Ac={type:"childremoved",child:null},Wn=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Ci,i=new ui,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new un},normalMatrix:{value:new We}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Br,ro,this.up):Yi.lookAt(ro,Br,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Yi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wn.DEFAULT_UP=new J(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ps=class extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},rp={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,i),m=this._getHandJoint(c,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,on.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=on.workingColorSpace){return this.r=t,this.g=e,this.b=i,on.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=on.workingColorSpace){if(t=Yf(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Rc(a,r,t+1/3),this.g=Rc(a,r,t),this.b=Rc(a,r,t-1/3)}return on.colorSpaceToWorking(this,s),this}setStyle(t,e=Qn){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qn){let i=Hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return on.workingToColorSpace(Zn.copy(this),t),Math.round(rn(Zn.r*255,0,255))*65536+Math.round(rn(Zn.g*255,0,255))*256+Math.round(rn(Zn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=on.workingColorSpace){on.workingToColorSpace(Zn.copy(this),e);let i=Zn.r,s=Zn.g,r=Zn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=on.workingColorSpace){return on.workingToColorSpace(Zn.copy(this),e),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Qn){on.workingToColorSpace(Zn.copy(this),t);let e=Zn.r,i=Zn.g,s=Zn.b;return t!==Qn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(ao);let i=Sc(hs.h,ao.h,e),s=Sc(hs.s,ao.s,e),r=Sc(hs.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new Xe;Xe.NAMES=Hd;var ea=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new J,Zi=new J,Cc=new J,$i=new J,tr=new J,er=new J,Iu=new J,Pc=new J,Ic=new J,Lc=new J,Dc=new Cn,Nc=new Cn,Fc=new Cn,ps=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ei.subVectors(s,e),Zi.subVectors(i,e),Cc.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(Zi),l=Ei.dot(Cc),c=Zi.dot(Zi),u=Zi.dot(Cc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,x=(a*u-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Fc.setScalar(0),Dc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,i),Fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(t,e,i,s){return Ei.subVectors(i,e),Zi.subVectors(t,e),Ei.cross(Zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;tr.subVectors(s,i),er.subVectors(r,i),Pc.subVectors(t,i);let l=tr.dot(Pc),c=er.dot(Pc);if(l<=0&&c<=0)return e.copy(i);Ic.subVectors(t,s);let u=tr.dot(Ic),p=er.dot(Ic);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(tr,a);Lc.subVectors(t,r);let f=tr.dot(Lc),x=er.dot(Lc);if(x>=0&&f<=x)return e.copy(r);let w=f*c-l*x;if(w<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(er,o);let g=u*x-f*p;if(g<=0&&p-u>=0&&f-x>=0)return Iu.subVectors(r,s),o=(p-u)/(p-u+(f-x)),e.copy(s).addScaledVector(Iu,o);let m=1/(g+w+d);return a=w*m,o=d*m,e.copy(i).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),lo.subVectors(this.max,zr),nr.subVectors(t.a,zr),ir.subVectors(t.b,zr),sr.subVectors(t.c,zr),us.subVectors(ir,nr),ds.subVectors(sr,ir),Es.subVectors(nr,sr);let e=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Es.z,Es.y,us.z,0,-us.x,ds.z,0,-ds.x,Es.z,0,-Es.x,-us.y,us.x,0,-ds.y,ds.x,0,-Es.y,Es.x,0];return!Uc(e,nr,ir,sr,lo)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,nr,ir,sr,lo))?!1:(co.crossVectors(us,ds),e=[co.x,co.y,co.z],Uc(e,nr,ir,sr,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,oo=new Bi,nr=new J,ir=new J,sr=new J,us=new J,ds=new J,Es=new J,zr=new J,lo=new J,co=new J,As=new J;function Uc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){As.fromArray(n,r);let o=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=t.dot(As),c=e.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var On=new J,ho=new ve,ap=0,hi=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ud,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=t!==void 0?Ph(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix3(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Zf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):$f(t,this.array)}};var ia=class extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var sa=class extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var bn=class extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}},op=new Bi,Gr=new J,Oc=new J,zi=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):op.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(Oc)),this.expandByPoint(Gr.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lp=0,xi=new un,kc=new Wn,rr=new J,ci=new Bi,Hr=new Bi,Hn=new J,Xn=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?sa:ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Hn.addVectors(ci.min,Hr.min),ci.expandByPoint(Hn),Hn.addVectors(ci.max,Hr.max),ci.expandByPoint(Hn)):(ci.expandByPoint(Hr.min),ci.expandByPoint(Hr.max))}ci.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Hn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Hn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),Hn.add(rr)),s=Math.max(s,i.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let Y=0;Y<i.count;Y++)o[Y]=new J,l[Y]=new J;let u=new J,p=new J,d=new J,f=new ve,x=new ve,w=new ve,g=new J,m=new J;function b(Y,B,Q){c[Y]=c[B]=c[Q]=1,u.fromBufferAttribute(i,Y),p.fromBufferAttribute(i,B),d.fromBufferAttribute(i,Q),f.fromBufferAttribute(r,Y),x.fromBufferAttribute(r,B),w.fromBufferAttribute(r,Q),p.sub(u),d.sub(u),x.sub(f),w.sub(f);let nt=1/(x.x*w.y-w.x*x.y);isFinite(nt)&&(g.copy(p).multiplyScalar(w.y).addScaledVector(d,-x.y).multiplyScalar(nt),m.copy(d).multiplyScalar(x.x).addScaledVector(p,-w.x).multiplyScalar(nt),o[Y].add(g),o[B].add(g),o[Q].add(g),l[Y].add(m),l[B].add(m),l[Q].add(m))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Y=0,B=D.length;Y<B;++Y){let Q=D[Y],nt=Q.start,ht=Q.count;for(let W=nt,rt=nt+ht;W<rt;W+=3)b(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let T=new J,L=new J,C=new J,y=new J;function E(Y){C.fromBufferAttribute(s,Y),y.copy(C);let B=o[Y];T.copy(B),T.sub(C.multiplyScalar(C.dot(B))).normalize(),L.crossVectors(y,B);let nt=L.dot(l[Y])<0?-1:1;a.setXYZW(Y,T.x,T.y,T.z,nt)}for(let Y=0,B=i.count;Y<B;++Y)c[Y]&&E(Y);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new J,r=new J,a=new J,o=new J,l=new J,c=new J,u=new J,p=new J;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),w=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Hn.fromBufferAttribute(t,e),Hn.normalize(),t.setXYZ(e,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,x=0;for(let w=0,g=l.length;w<g;w++){o.isInterleavedBufferAttribute?f=l[w]*o.data.stride+o.offset:f=l[w]*u;for(let m=0;m<u;m++)d[x++]=c[f++]}return new hi(d,u,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bc=new J,cp=new J,hp=new We,Ri=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bc.subVectors(i,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||hp.getNormalMatrix(t),s=this.coplanarPoint(Bc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},up=0,Gi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Er,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ue(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new J,zc=new J,uo=new J,fo=new J,Is=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zc.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),u=Math.abs(1-a*a),p,d,f,x;if(u>0)if(p=a*l-o,d=a*o-l,x=r*u,p>=0)if(d>=-x)if(d<=x){let w=1/u;p*=w,d*=w,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zc).addScaledVector(uo,d),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,x=e.x-a.x,w=e.y-a.y,g=e.z-a.z,m=i.x-a.x,b=i.y-a.y,D=i.z-a.z,T=Math.abs(l),L=Math.abs(c),C=Math.abs(u),y,E,Y,B,Q,nt,ht,W,rt,at,it,mt;if(T>=L&&T>=C?(Y=l,nt=p,rt=x,mt=m,l>=0?(y=c,E=u,B=d,Q=f,ht=w,W=g,at=b,it=D):(y=u,E=c,B=f,Q=d,ht=g,W=w,at=D,it=b)):L>=C?(Y=c,nt=d,rt=w,mt=b,c>=0?(y=u,E=l,B=f,Q=p,ht=g,W=x,at=D,it=m):(y=l,E=u,B=p,Q=f,ht=x,W=g,at=m,it=D)):(Y=u,nt=f,rt=g,mt=D,u>=0?(y=l,E=c,B=p,Q=d,ht=x,W=w,at=m,it=b):(y=c,E=l,B=d,Q=p,ht=w,W=x,at=b,it=m)),Y===0)return null;let pt=y/Y,ut=E/Y,Nt=1/Y,ae=B-pt*nt,ye=Q-ut*nt,Et=ht-pt*rt,jt=W-ut*rt,Rt=at-pt*mt,Ct=it-ut*mt,wt=Rt*jt-Ct*Et,gt=ae*Ct-ye*Rt,Kt=Et*ye-jt*ae;if(s){if(wt<0||gt<0||Kt<0)return null}else if((wt<0||gt<0||Kt<0)&&(wt>0||gt>0||Kt>0))return null;let ee=wt+gt+Kt;if(ee===0)return null;let Ne=Nt*(wt*nt+gt*rt+Kt*mt);return(ee>0?Ne<0:Ne>0)?null:this.at(Ne/ee,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ms=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lu=new un,Rs=new Is,po=new zi,Du=new J,mo=new J,go=new J,_o=new J,Gc=new J,xo=new J,Nu=new J,yo=new J,Un=class extends Wn{constructor(t=new Xn,e=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Gc.fromBufferAttribute(p,t),a?xo.addScaledVector(Gc,u):xo.addScaledVector(Gc.sub(e),u))}e.add(xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(po.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(po,Du)===null||Rs.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,w=d.length;x<w;x++){let g=d[x],m=a[g.materialIndex],b=Math.max(g.start,f.start),D=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,L=D;T<L;T+=3){let C=o.getX(T),y=o.getX(T+1),E=o.getX(T+2);s=vo(this,m,t,i,c,u,p,C,y,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),w=Math.min(o.count,f.start+f.count);for(let g=x,m=w;g<m;g+=3){let b=o.getX(g),D=o.getX(g+1),T=o.getX(g+2);s=vo(this,a,t,i,c,u,p,b,D,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,w=d.length;x<w;x++){let g=d[x],m=a[g.materialIndex],b=Math.max(g.start,f.start),D=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=b,L=D;T<L;T+=3){let C=T,y=T+1,E=T+2;s=vo(this,m,t,i,c,u,p,C,y,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),w=Math.min(l.count,f.start+f.count);for(let g=x,m=w;g<m;g+=3){let b=g,D=g+1,T=g+2;s=vo(this,a,t,i,c,u,p,b,D,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function dp(n,t,e,i,s,r,a,o){let l;if(t.side===ii?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ms,o),l===null)return null;yo.copy(o),yo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:n}}function vo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,_o);let u=dp(n,t,e,i,mo,go,_o,Nu);if(u){let p=new J;ps.getBarycoord(Nu,mo,go,_o,p),s&&(u.uv=ps.getInterpolatedAttribute(s,o,l,c,p,new ve)),r&&(u.uv1=ps.getInterpolatedAttribute(r,o,l,c,p,new ve)),a&&(u.normal=ps.getInterpolatedAttribute(a,o,l,c,p,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new J,materialIndex:0};ps.getNormal(mo,go,_o,d.normal),u.face=d,u.barycoord=p}return u}var ra=class extends ni{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Vn,u=Vn,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var aa=class extends hi{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new un,Fu=new un,Mo=[],Uu=new Bi,fp=new un,Vr=new Un,Wr=new zi,xr=class extends Un{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,fp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),Uu.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ar),Wr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Fu.multiplyMatrices(i,ar),Vr.matrixWorld=Fu,Vr.raycast(t,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(s*this.count),s,this.count,Tl,Si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new zi,pp=new ve(.5,.5),So=new J,gs=class{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],x=r[8],w=r[9],g=r[10],m=r[11],b=r[12],D=r[13],T=r[14],L=r[15];if(s[0].setComponents(c-a,f-u,m-x,L-b).normalize(),s[1].setComponents(c+a,f+u,m+x,L+b).normalize(),s[2].setComponents(c+o,f+p,m+w,L+D).normalize(),s[3].setComponents(c-o,f-p,m-w,L-D).normalize(),i)s[4].setComponents(l,d,g,T).normalize(),s[5].setComponents(c-l,f-d,m-g,L-T).normalize();else if(s[4].setComponents(c-l,f-d,m-g,L-T).normalize(),e===yi)s[5].setComponents(c+l,f+d,m+g,L+T).normalize();else if(e===fr)s[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=pp.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ou=new un,Zo=class n{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new gs),i[s].setFromProjectionMatrix(Ou,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new gs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var yr=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$o=new J,Ko=new J,ku=new un,Xr=new Is,bo=new zi,Hc=new J,Bu=new J,oa=class extends Wn{constructor(t=new Xn,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)$o.fromBufferAttribute(e,s-1),Ko.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=$o.distanceTo(Ko);t.setAttribute("lineDistance",new bn(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;ku.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let w=f,g=x-1;w<g;w+=c){let m=u.getX(w),b=u.getX(w+1),D=wo(this,t,Xr,l,m,b,w);D&&e.push(D)}if(this.isLineLoop){let w=u.getX(x-1),g=u.getX(f),m=wo(this,t,Xr,l,w,g,x-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let w=f,g=x-1;w<g;w+=c){let m=wo(this,t,Xr,l,w,w+1,w);m&&e.push(m)}if(this.isLineLoop){let w=wo(this,t,Xr,l,x-1,f,x-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if($o.fromBufferAttribute(o,s),Ko.fromBufferAttribute(o,r),e.distanceSqToSegment($o,Ko,Hc,Bu)>i)return;Hc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Hc);if(!(c<t.near||c>t.far))return{distance:c,point:Bu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var vr=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new un,jc=new Is,To=new zi,Eo=new J,la=class extends Wn{constructor(t=new Xn,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;zu.copy(s).invert(),jc.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,w=f;x<w;x++){let g=c.getX(x);Eo.fromBufferAttribute(p,g),Gu(Eo,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=d,w=f;x<w;x++)Eo.fromBufferAttribute(p,x),Gu(Eo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(n,t,e,i,s,r,a){let o=jc.distanceSqToPoint(n);if(o<e){let l=new J;jc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends ni{constructor(t=[],e=ks,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ha=class extends ni{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends ni{constructor(t,e,i=Pi,s,r,a,o=Vn,l=Vn,c,u=Qi,p=1){if(u!==Qi&&u!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ua=class extends ts{constructor(t,e=Pi,i=ks,s,r,a=Vn,o=Vn,l,c=Qi){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},da=class extends ni{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vi=class n extends Xn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(p,2));function x(w,g,m,b,D,T,L,C,y,E,Y){let B=T/y,Q=L/E,nt=T/2,ht=L/2,W=C/2,rt=y+1,at=E+1,it=0,mt=0,pt=new J;for(let ut=0;ut<at;ut++){let Nt=ut*Q-ht;for(let ae=0;ae<rt;ae++){let ye=ae*B-nt;pt[w]=ye*b,pt[g]=Nt*D,pt[m]=W,c.push(pt.x,pt.y,pt.z),pt[w]=0,pt[g]=0,pt[m]=C>0?1:-1,u.push(pt.x,pt.y,pt.z),p.push(ae/y),p.push(1-ut/E),it+=1}}for(let ut=0;ut<E;ut++)for(let Nt=0;Nt<y;Nt++){let ae=d+Nt+rt*ut,ye=d+Nt+rt*(ut+1),Et=d+(Nt+1)+rt*(ut+1),jt=d+(Nt+1)+rt*ut;l.push(ae,ye,jt),l.push(ye,Et,jt),mt+=6}o.addGroup(f,mt,Y),f+=mt,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},fa=class n extends Xn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,p=Math.PI/2*t,d=e,f=2*p+d,x=i*2+r,w=s+1,g=new J,m=new J;for(let b=0;b<=x;b++){let D=0,T=0,L=0,C=0;if(b<=i){let Y=b/i,B=Y*Math.PI/2;T=-u-t*Math.cos(B),L=t*Math.sin(B),C=-t*Math.cos(B),D=Y*p}else if(b<=i+r){let Y=(b-i)/r;T=-u+Y*e,L=t,C=0,D=p+Y*d}else{let Y=(b-i-r)/i,B=Y*Math.PI/2;T=u+t*Math.sin(B),L=t*Math.cos(B),C=t*Math.sin(B),D=p+d+Y*p}let y=Math.max(0,Math.min(1,D/f)),E=0;b===0?E=.5/s:b===x&&(E=-.5/s);for(let Y=0;Y<=s;Y++){let B=Y/s,Q=B*Math.PI*2,nt=Math.sin(Q),ht=Math.cos(Q);m.x=-L*ht,m.y=T,m.z=L*nt,o.push(m.x,m.y,m.z),g.set(-L*ht,C,L*nt),g.normalize(),l.push(g.x,g.y,g.z),c.push(B+E,y)}if(b>0){let Y=(b-1)*w;for(let B=0;B<s;B++){let Q=Y+B,nt=Y+B+1,ht=b*w+B,W=b*w+B+1;a.push(Q,nt,ht),a.push(nt,W,ht)}}}this.setIndex(a),this.setAttribute("position",new bn(o,3)),this.setAttribute("normal",new bn(l,3)),this.setAttribute("uv",new bn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},pa=class n extends Xn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new J,u=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=i+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new bn(a,3)),this.setAttribute("normal",new bn(o,3)),this.setAttribute("uv",new bn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ls=class n extends Xn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],x=0,w=[],g=i/2,m=0;b(),a===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(f,2));function b(){let T=new J,L=new J,C=0,y=(e-t)/i;for(let E=0;E<=r;E++){let Y=[],B=E/r,Q=B*(e-t)+t;for(let nt=0;nt<=s;nt++){let ht=nt/s,W=ht*l+o,rt=Math.sin(W),at=Math.cos(W);L.x=Q*rt,L.y=-B*i+g,L.z=Q*at,p.push(L.x,L.y,L.z),T.set(rt,y,at).normalize(),d.push(T.x,T.y,T.z),f.push(ht,1-B),Y.push(x++)}w.push(Y)}for(let E=0;E<s;E++)for(let Y=0;Y<r;Y++){let B=w[Y][E],Q=w[Y+1][E],nt=w[Y+1][E+1],ht=w[Y][E+1];(t>0||Y!==0)&&(u.push(B,Q,ht),C+=3),(e>0||Y!==r-1)&&(u.push(Q,nt,ht),C+=3)}c.addGroup(m,C,0),m+=C}function D(T){let L=x,C=new ve,y=new J,E=0,Y=T===!0?t:e,B=T===!0?1:-1;for(let nt=1;nt<=s;nt++)p.push(0,g*B,0),d.push(0,B,0),f.push(.5,.5),x++;let Q=x;for(let nt=0;nt<=s;nt++){let W=nt/s*l+o,rt=Math.cos(W),at=Math.sin(W);y.x=Y*at,y.y=g*B,y.z=Y*rt,p.push(y.x,y.y,y.z),d.push(0,B,0),C.x=rt*.5+.5,C.y=at*.5*B+.5,f.push(C.x,C.y),x++}for(let nt=0;nt<s;nt++){let ht=L+nt,W=Q+nt;T===!0?u.push(W,W+1,ht):u.push(W+1,W,ht),E+=3}c.addGroup(m,E,T===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ve:new J);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new J,s=[],r=[],a=[],o=new J,l=new un;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new J)}r[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(rn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(rn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends fi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ve){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends Mr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Hu=new J,Vu=new J,Vc=new Ih,Wc=new Ih,Xc=new Ih,Jo=class extends fi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new J){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Vu.subVectors(s[0],s[1]).add(s[0]),c=Vu);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),w=Math.pow(p.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);w<1e-4&&(w=1),x<1e-4&&(x=w),g<1e-4&&(g=w),Vc.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,x,w,g),Wc.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,x,w,g),Xc.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,x,w,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Wc.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),Xc.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return i.set(Vc.calc(l),Wc.calc(l),Xc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function mp(n,t){let e=1-n;return e*e*t}function gp(n,t){return 2*(1-n)*n*t}function _p(n,t){return n*n*t}function Zr(n,t,e,i){return mp(n,t)+gp(n,e)+_p(n,i)}function xp(n,t){let e=1-n;return e*e*e*t}function yp(n,t){let e=1-n;return 3*e*e*n*t}function vp(n,t){return 3*(1-n)*n*n*t}function Mp(n,t){return n*n*n*t}function $r(n,t,e,i,s){return xp(n,t)+yp(n,e)+vp(n,i)+Mp(n,s)}var ma=class extends fi{constructor(t=new ve,e=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ve){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(t,s.x,r.x,a.x,o.x),$r(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends fi{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($r(t,s.x,r.x,a.x,o.x),$r(t,s.y,r.y,a.y,o.y),$r(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends fi{constructor(t=new ve,e=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ve){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ve){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends fi{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends fi{constructor(t=new ve,e=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ve){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(t,s.x,r.x,a.x),Zr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends fi{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zr(t,s.x,r.x,a.x),Zr(t,s.y,r.y,a.y),Zr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ve){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Wu(o,l.x,c.x,u.x,p.x),Wu(o,l.y,c.y,u.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ve().fromArray(s))}return this}},Xu=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Jo,CubicBezierCurve:ma,CubicBezierCurve3:Qo,EllipseCurve:Mr,LineCurve:ga,LineCurve3:tl,QuadraticBezierCurve:_a,QuadraticBezierCurve3:el,SplineCurve:xa}),nl=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Xu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ya=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new ve,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ga(this.currentPoint.clone(),new ve(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new _a(this.currentPoint.clone(),new ve(t,e),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ma(this.currentPoint.clone(),new ve(t,e),new ve(i,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new xa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Mr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sr=class extends ya{constructor(t){super(t),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ya().fromJSON(s))}return this}};function Sp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Vd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Ap(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=n[d],x=n[d+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>p&&(p=x)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return va(r,a,e,o,l,c,0),a}function Vd(n,t,e,i,s){let r;if(s===kp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=qu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=qu(a/i|0,n[a],n[a+1],r);return r&&br(r,r.next)&&(Sa(r),r=r.next),r}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(br(e,e.next)||In(e.prev,e,e.next)===0)){if(Sa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function va(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Lp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?wp(n,i,s,r):bp(n)){t.push(l.i,n.i,c.i),Sa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Tp(Ds(n),t),va(n,t,e,i,s,r,2)):a===2&&Ep(n,t,e,i,s,r):va(Ds(n),t,e,i,s,r,1);break}}}function bp(n){let t=n.prev,e=n,i=n.next;if(In(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),x=i.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=p&&x.y<=f&&qr(s,o,r,l,a,c,x.x,x.y)&&In(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function wp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(In(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),x=Math.min(u,p,d),w=Math.max(o,l,c),g=Math.max(u,p,d),m=Jc(f,x,t,e,i),b=Jc(w,g,t,e,i),D=n.prevZ,T=n.nextZ;for(;D&&D.z>=m&&T&&T.z<=b;){if(D.x>=f&&D.x<=w&&D.y>=x&&D.y<=g&&D!==s&&D!==a&&qr(o,u,l,p,c,d,D.x,D.y)&&In(D.prev,D,D.next)>=0||(D=D.prevZ,T.x>=f&&T.x<=w&&T.y>=x&&T.y<=g&&T!==s&&T!==a&&qr(o,u,l,p,c,d,T.x,T.y)&&In(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;D&&D.z>=m;){if(D.x>=f&&D.x<=w&&D.y>=x&&D.y<=g&&D!==s&&D!==a&&qr(o,u,l,p,c,d,D.x,D.y)&&In(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;T&&T.z<=b;){if(T.x>=f&&T.x<=w&&T.y>=x&&T.y<=g&&T!==s&&T!==a&&qr(o,u,l,p,c,d,T.x,T.y)&&In(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Tp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!br(i,s)&&Xd(i,e,e.next,s)&&Ma(i,s)&&Ma(s,i)&&(t.push(i.i,e.i,s.i),Sa(e),Sa(e.next),e=n=s),e=e.next}while(e!==n);return Ds(e)}function Ep(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fp(a,o)){let l=qd(a,o);a=Ds(a,a.next),l=Ds(l,l.next),va(a,t,e,i,s,r,0),va(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ap(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Vd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Np(c))}s.sort(Rp);for(let r=0;r<s.length;r++)e=Cp(s[r],e);return e}function Rp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Cp(n,t){let e=Pp(n,t);if(!e)return t;let i=qd(e,n);return Ds(i,i.next),Ds(e,e.next)}function Pp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(br(n,e))return e;do{if(br(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Wd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let p=Math.abs(s-e.y)/(i-e.x);Ma(e,n)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&Ip(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function Ip(n,t){return In(n.prev,n,t.prev)<0&&In(t.next,n,n.next)<0}function Lp(n,t,e,i){let s=n;do s.z===0&&(s.z=Jc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Jc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Np(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Wd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function qr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Wd(n,t,e,i,s,r,a,o)}function Fp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Up(n,t)&&(Ma(n,t)&&Ma(t,n)&&Op(n,t)&&(In(n.prev,n,t.prev)||In(n,t.prev,t))||br(n,t)&&In(n.prev,n,n.next)>0&&In(t.prev,t,t.next)>0)}function In(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function br(n,t){return n.x===t.x&&n.y===t.y}function Xd(n,t,e,i){let s=Ro(In(n,t,e)),r=Ro(In(n,t,i)),a=Ro(In(e,i,n)),o=Ro(In(e,i,t));return!!(s!==r&&a!==o||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||a===0&&Ao(e,n,i)||o===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function Up(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Xd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ma(n,t){return In(n.prev,n,n.next)<0?In(n,t,n.next)>=0&&In(n,n.prev,t)>=0:In(n,t,n.prev)<0||In(n,n.next,t)<0}function Op(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function qd(n,t){let e=Qc(n.i,n.x,n.y),i=Qc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function qu(n,t,e,i){let s=Qc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var th=class{static triangulate(t,e,i=2){return Sp(t,e,i)}},ur=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Yu(t),Zu(i,t);let a=t.length;e.forEach(Yu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Zu(i,e[l]);let o=th.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Zu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var _s=class n extends Xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],x=[],w=[],g=[];for(let m=0;m<u;m++){let b=m*d-a;for(let D=0;D<c;D++){let T=D*p-r;x.push(T,-b,0),w.push(0,0,1),g.push(D/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let D=b+c*m,T=b+c*(m+1),L=b+1+c*(m+1),C=b+1+c*m;f.push(D,T,C),f.push(T,L,C)}this.setIndex(f),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(w,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ba=class n extends Xn{constructor(t=new Sr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new bn(s,3)),this.setAttribute("normal",new bn(r,3)),this.setAttribute("uv",new bn(a,2));function c(u){let p=s.length/3,d=u.extractPoints(e),f=d.shape,x=d.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=x.length;g<m;g++){let b=x[g];ur.isClockWise(b)===!0&&(x[g]=b.reverse())}let w=ur.triangulateShape(f,x);for(let g=0,m=x.length;g<m;g++){let b=x[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=w.length;g<m;g++){let b=w[g],D=b[0]+p,T=b[1]+p,L=b[2]+p;i.push(D,T,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Bp(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function Bp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ns=class n extends Xn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new J,d=new J,f=[],x=[],w=[],g=[];for(let m=0;m<=i;m++){let b=[],D=m/i,T=a+D*o,L=t*Math.cos(T),C=Math.sqrt(t*t-L*L),y=0;m===0&&a===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let Y=E/e,B=s+Y*r;p.x=-C*Math.cos(B),p.y=L,p.z=C*Math.sin(B),x.push(p.x,p.y,p.z),d.copy(p).normalize(),w.push(d.x,d.y,d.z),g.push(Y+y,1-D),b.push(c++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let D=u[m][b+1],T=u[m][b],L=u[m+1][b],C=u[m+1][b+1];(m!==0||a>0)&&f.push(D,T,C),(m!==i-1||l<Math.PI)&&f.push(T,L,C)}this.setIndex(f),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(w,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function zs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if($u(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function $n(n){let t={};for(let e=0;e<n.length;e++){let i=zs(n[e]);for(let s in i)t[s]=i[s]}return t}function $u(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:on.workingColorSpace}var Yd={clone:zs,merge:$n},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Cn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new un().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Co(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends xs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=t,o=2*e-i;break;case Kc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=t,l=2*i-e;break;case Kc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-e)/(s-e),w=x*x,g=w*x,m=-d*g+2*d*w-d*x,b=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*x+1,D=(-1-f)*g+(1.5+f)*w+.5*x,T=f*g-f*w;for(let L=0;L!==o;++L)r[L]=m*a[u+L]+b*a[c+L]+D*a[l+L]+T*a[p+L];return r}},ol=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},ll=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends xs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(i-e)/(s-e),w=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*w+a[l+g]*x;return r}let d=o*2,f=t-1;for(let x=0;x!==o;++x){let w=a[c+x],g=a[l+x],m=f*d+x*2,b=p[m],D=p[m+1],T=t*d+x*2,L=u[T],C=u[T+1],y=Wp(i,e,b,L,s);r[x]=Zd(y,w,D,C,g)}return r}};function Zd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Vp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Wp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Zd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Vp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Co(t.settings)&&(i.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Co(this.settings)&&(Ku(this.settings.inTangents,t),Ku(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Co(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,d=p-i,f=p+i;for(let x=0;x!==i;++x){let w=e[p+x];if(w!==e[d+x]||w!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ku(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function ju(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Vo;var ys=class extends pi{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Kr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="color";var ul=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};ul.prototype.ValueTypeName="number";var dl=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends pi{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Kr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$d=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:$d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends Wn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ea=class extends Ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qc=new un,Ju=new J,Qu=new J,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new J,Io=new ui,Ui=new J,Aa=class extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new J,td=new ve,ed=new ve,ti=class extends Aa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ra=class extends Aa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eh=class extends gl{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lr=-90,cr=1,wr=class extends Wn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new ti(lr,cr,t,e);r.layers=this.layers,this.add(r);let a=new ti(lr,cr,t,e);a.layers=this.layers,this.add(a);let o=new ti(lr,cr,t,e);o.layers=this.layers,this.add(o);let l=new ti(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new ti(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},_l=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Dh="\\[\\]\\.:\\/",Xp=new RegExp("["+Dh+"]","g"),Nh="[^"+Dh+"]",qp="[^"+Dh.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Zp=/(WCOD+)?/.source.replace("WCOD",qp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),jp=new RegExp("^"+Yp+Zp+$p+Kp+"$"),Jp=["material","materials","bones","map"],nh=class{constructor(t,e,i){let s=i||En.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},En=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(t){let e=jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=nh;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hy=new Float32Array(1);var nd=new un,Pa=class{constructor(t,e,i=0,s=1/0){this.ray=new Is(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(t,e=!0,i=[]){return ih(t,this,i,e),i.sort(id),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ih(t[s],this,i,e);return i.sort(id),i}};function id(n,t){return n.distance-t.distance}function ih(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)ih(r[a],t,e,!0)}}var zh=class zh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};zh.prototype.isMatrix2=!0;var sh=zh;function Fh(n,t,e,i){let s=Qp(i);switch(e){case bh:return n*t;case Tl:return n*t/s.components*s.byteLength;case El:return n*t/s.components*s.byteLength;case Ss:return n*t*2/s.components*s.byteLength;case Al:return n*t*2/s.components*s.byteLength;case wh:return n*t*3/s.components*s.byteLength;case Li:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Nl:case Ul:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fl:case Oa:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ql:case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ka:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(n){switch(n){case ri:case yh:return{byteLength:1,components:1};case Rr:case vh:case Ii:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Pi:case Sl:case Si:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function e0(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let u=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,u);else{p.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<p.length;f++){let x=p[d],w=p[f];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++d,p[d]=w)}p.length=d+1;for(let f=0,x=p.length;f<x;f++){let w=p[f];n.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,Q0=`uniform sampler2D dfgLUT;
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
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
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform float backgroundBlurriness;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:a0,alphatest_pars_fragment:o0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:v0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:w0,common:T0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:P0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:Y0,envmap_vertex:O0,fog_vertex:k0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:G0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:$0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:ym,normal_fragment_maps:vm,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:bm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Km,uv_pars_fragment:jm,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distance_vert:cg,distance_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Eg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xi={basic:{uniforms:$n([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:$n([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:$n([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:$n([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:$n([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:$n([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:$n([oe.points,oe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:$n([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:$n([oe.common,oe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:$n([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:$n([oe.sprite,oe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:$n([oe.common,oe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:$n([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Xi.physical={uniforms:$n([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var ac={r:0,b:0,g:0},Fg=new un,yf=new We;yf.set(-1,0,0,0,1,0,0,0,1);function Ug(n,t,e,i,s,r){let a=new Xe(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){let T=b.backgroundBlurriness>0;D=t.get(D,T)}return D}function x(b){let D=!1,T=f(b);T===null?g(a,o):T&&T.isColor&&(g(T,1),D=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,D){let T=f(D);T&&T.isCubeTexture?(c===void 0&&(c=new Un(new vi(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:zs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(D.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=on.getTransfer(T.colorSpace)!==yn,(u!==T||p!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Un(new _s(2,2),new Hi({name:"BackgroundMaterial",uniforms:zs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=on.getTransfer(T.colorSpace)!==yn,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,p=T.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,D){b.getRGB(ac,Lh(n)),e.buffers.color.setClear(ac.r,ac.g,ac.b,D,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,D=1){a.set(b),o=D,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:x,addToRenderList:w,dispose:m}}function Og(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(Q,nt,ht,W,rt){let at=!1,it=p(Q,W,ht,nt);r!==it&&(r=it,c(r.object)),at=f(Q,W,ht,rt),at&&x(Q,W,ht,rt),rt!==null&&t.update(rt,n.ELEMENT_ARRAY_BUFFER),(at||a)&&(a=!1,T(Q,nt,ht,W),rt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return n.createVertexArray()}function c(Q){return n.bindVertexArray(Q)}function u(Q){return n.deleteVertexArray(Q)}function p(Q,nt,ht,W){let rt=W.wireframe===!0,at=i[nt.id];at===void 0&&(at={},i[nt.id]=at);let it=Q.isInstancedMesh===!0?Q.id:0,mt=at[it];mt===void 0&&(mt={},at[it]=mt);let pt=mt[ht.id];pt===void 0&&(pt={},mt[ht.id]=pt);let ut=pt[rt];return ut===void 0&&(ut=d(l()),pt[rt]=ut),ut}function d(Q){let nt=[],ht=[],W=[];for(let rt=0;rt<e;rt++)nt[rt]=0,ht[rt]=0,W[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:ht,attributeDivisors:W,object:Q,attributes:{},index:null}}function f(Q,nt,ht,W){let rt=r.attributes,at=nt.attributes,it=0,mt=ht.getAttributes();for(let pt in mt)if(mt[pt].location>=0){let Nt=rt[pt],ae=at[pt];if(ae===void 0&&(pt==="instanceMatrix"&&Q.instanceMatrix&&(ae=Q.instanceMatrix),pt==="instanceColor"&&Q.instanceColor&&(ae=Q.instanceColor)),Nt===void 0||Nt.attribute!==ae||ae&&Nt.data!==ae.data)return!0;it++}return r.attributesNum!==it||r.index!==W}function x(Q,nt,ht,W){let rt={},at=nt.attributes,it=0,mt=ht.getAttributes();for(let pt in mt)if(mt[pt].location>=0){let Nt=at[pt];Nt===void 0&&(pt==="instanceMatrix"&&Q.instanceMatrix&&(Nt=Q.instanceMatrix),pt==="instanceColor"&&Q.instanceColor&&(Nt=Q.instanceColor));let ae={};ae.attribute=Nt,Nt&&Nt.data&&(ae.data=Nt.data),rt[pt]=ae,it++}r.attributes=rt,r.attributesNum=it,r.index=W}function w(){let Q=r.newAttributes;for(let nt=0,ht=Q.length;nt<ht;nt++)Q[nt]=0}function g(Q){m(Q,0)}function m(Q,nt){let ht=r.newAttributes,W=r.enabledAttributes,rt=r.attributeDivisors;ht[Q]=1,W[Q]===0&&(n.enableVertexAttribArray(Q),W[Q]=1),rt[Q]!==nt&&(n.vertexAttribDivisor(Q,nt),rt[Q]=nt)}function b(){let Q=r.newAttributes,nt=r.enabledAttributes;for(let ht=0,W=nt.length;ht<W;ht++)nt[ht]!==Q[ht]&&(n.disableVertexAttribArray(ht),nt[ht]=0)}function D(Q,nt,ht,W,rt,at,it){it===!0?n.vertexAttribIPointer(Q,nt,ht,rt,at):n.vertexAttribPointer(Q,nt,ht,W,rt,at)}function T(Q,nt,ht,W){w();let rt=W.attributes,at=ht.getAttributes(),it=nt.defaultAttributeValues;for(let mt in at){let pt=at[mt];if(pt.location>=0){let ut=rt[mt];if(ut===void 0&&(mt==="instanceMatrix"&&Q.instanceMatrix&&(ut=Q.instanceMatrix),mt==="instanceColor"&&Q.instanceColor&&(ut=Q.instanceColor)),ut!==void 0){let Nt=ut.normalized,ae=ut.itemSize,ye=t.get(ut);if(ye===void 0)continue;let Et=ye.buffer,jt=ye.type,Rt=ye.bytesPerElement,Ct=jt===n.INT||jt===n.UNSIGNED_INT||ut.gpuType===Sl;if(ut.isInterleavedBufferAttribute){let wt=ut.data,gt=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,Kt=ut.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let ee=0;ee<pt.locationSize;ee++)m(pt.location+ee,wt.meshPerAttribute);Q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ee=0;ee<pt.locationSize;ee++)g(pt.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let ee=0;ee<pt.locationSize;ee++)D(pt.location+ee,ae/pt.locationSize,jt,Nt,gt*Rt,(Kt+ae/pt.locationSize*ee)*Rt,Ct)}else{if(ut.isInstancedBufferAttribute){for(let wt=0;wt<pt.locationSize;wt++)m(pt.location+wt,ut.meshPerAttribute);Q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let wt=0;wt<pt.locationSize;wt++)g(pt.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let wt=0;wt<pt.locationSize;wt++)D(pt.location+wt,ae/pt.locationSize,jt,Nt,ae*Rt,ae/pt.locationSize*wt*Rt,Ct)}}else if(it!==void 0){let Nt=it[mt];if(Nt!==void 0)switch(Nt.length){case 2:n.vertexAttrib2fv(pt.location,Nt);break;case 3:n.vertexAttrib3fv(pt.location,Nt);break;case 4:n.vertexAttrib4fv(pt.location,Nt);break;default:n.vertexAttrib1fv(pt.location,Nt)}}}}b()}function L(){Y();for(let Q in i){let nt=i[Q];for(let ht in nt){let W=nt[ht];for(let rt in W){let at=W[rt];for(let it in at)u(at[it].object),delete at[it];delete W[rt]}}delete i[Q]}}function C(Q){if(i[Q.id]===void 0)return;let nt=i[Q.id];for(let ht in nt){let W=nt[ht];for(let rt in W){let at=W[rt];for(let it in at)u(at[it].object),delete at[it];delete W[rt]}}delete i[Q.id]}function y(Q){for(let nt in i){let ht=i[nt];for(let W in ht){let rt=ht[W];if(rt[Q.id]===void 0)continue;let at=rt[Q.id];for(let it in at)u(at[it].object),delete at[it];delete rt[Q.id]}}}function E(Q){for(let nt in i){let ht=i[nt],W=Q.isInstancedMesh===!0?Q.id:0,rt=ht[W];if(rt!==void 0){for(let at in rt){let it=rt[at];for(let mt in it)u(it[mt].object),delete it[mt];delete rt[at]}delete ht[W],Object.keys(ht).length===0&&delete i[nt]}}}function Y(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:Y,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:g,disableUnusedAttributes:b}}function kg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Li&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let E=y===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ri&&y!==Si&&!E&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:T,maxSamples:L,samples:C}}function zg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Ri,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||i!==0||s;return s=d,i=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let x=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,D=b*4,T=m.clippingState||null;l.value=T,T=u(x,d,D,f);for(let L=0;L!==D;++L)T[L]=e[L];m.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(p,d,f,x){let w=p!==null?p.length:0,g=null;if(w!==0){if(g=l.value,x!==!0||g===null){let m=f+w*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let D=0,T=f;D!==w;++D,T+=4)a.copy(p[D]).applyMatrix4(b,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Ga=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Us});r.uniforms.tEquirect.value=e;let a=new Un(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=ei),new wr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Kd=256,Gg=3,Hg=20,vf=256,Mf=16,Vg=3,Wg=new J,Xg=new Xe,lc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new Un(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Wg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(Xg));let g=new wr(i,s,u);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=x,t.background=w,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Kd,Gd(t))}_fromTexture(t,e){t.mapping===ks||t.mapping===Ar?this._setSize(t.image.length===0?Kd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=jd(t,!1,!1),i=Math.log2(t)-Gg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=jd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ks||t.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=qg(),this._integrationMaterial=Yg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Mf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Vg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(vf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Zg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function jd(n,t,e){return new Ga(n,{minFilter:es,generateMipmaps:t,type:Ii,colorSpace:jr,depthBuffer:e})}function Ha(n,t,e){return new Hi({name:n,uniforms:t,vertexShader:Qe.cube_vert,fragmentShader:e,side:ii,blending:Us,depthTest:!1,depthWrite:!1})}function qg(){return Ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vf}u

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
	`)}function Yg(){return Ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mf}},`

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
	`)}function Zg(){return Ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hg}
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
	`)}function Jd(){return Ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qd(){return Ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $g(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yl||f===vl)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let w=new Ga(x.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",c),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,x=f===yl||f===vl,w=f===ks||f===Ar;if(x||w){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new lc(n)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return x&&b&&b.height>0||w&&b&&l(b)?(i===null&&(i=new lc(n)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===yl?d.mapping=ks:f===vl&&(d.mapping=Ar),d}function l(d){let f=0,x=6;for(let w=0;w<x;w++)d[w]!==void 0&&f++;return f===x}function c(d){let f=d.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Kg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Yr("WebGLRenderer: "+i+" extension not supported."),s}}}function jg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let w=r.get(x);w&&(t.remove(w),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function u(x){let w=x.attributes;for(let g in w)t.update(w[g],n.ARRAY_BUFFER)}function p(x){let w=x.index,g=x.attributes.position,m=0;if(g===void 0)return;let b=w!==null?w.array.length:g.array.length/3-1,D=g.count>=65535?sa:ia,T=new D(Math.ceil(b/3)*6,1),L=T.array;if(w!==null){let y=w.array;m=w.version;for(let E=0,Y=0;E<b;E+=3){let B=y[E+0],Q=y[E+1],nt=y[E+2];L[Y++]=B,L[Y++]=Q,L[Y++]=Q,L[Y++]=nt,L[Y++]=nt,L[Y++]=B}}else{m=g.version;for(let y=0,E=0;y<b;y+=3){let Y=y+0,B=y+1,Q=y+2;L[E++]=Y,L[E++]=B,L[E++]=B,L[E++]=Q,L[E++]=Q,L[E++]=Y}}T.version=m;let C=r.get(x);C&&t.remove(C),r.set(x,T)}function d(x){let w=r.get(x);if(w){let g=x.index;g!==null&&w.version<g.version&&p(x)}else p(x);return r.get(x)}function f(){for(let x in s){let w=s[x].deref();w!==void 0&&l(w)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Jg(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),e.update(d,i,1)}function c(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,p*a,f),e.update(d,i,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,f);let w=0;for(let g=0;g<f;g++)w+=d[g];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function t_(n,t,e){let i=new WeakMap,s=new Cn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==p){let Y=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],D=0;f===!0&&(D=1),x===!0&&(D=2),w===!0&&(D=3);let T=o.attributes.position.count*D,L=1;T>t.maxTextureSize&&(L=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*L*4*p),y=new ta(C,T,L,p);y.type=Si,y.needsUpdate=!0;let E=D*4;for(let B=0;B<p;B++){let Q=g[B],nt=m[B],ht=b[B],W=T*L*4*B;for(let rt=0;rt<Q.count;rt++){let at=rt*E;f===!0&&(s.fromBufferAttribute(Q,rt),C[W+at+0]=s.x,C[W+at+1]=s.y,C[W+at+2]=s.z,C[W+at+3]=0),x===!0&&(s.fromBufferAttribute(nt,rt),C[W+at+4]=s.x,C[W+at+5]=s.y,C[W+at+6]=s.z,C[W+at+7]=0),w===!0&&(s.fromBufferAttribute(ht,rt),C[W+at+8]=s.x,C[W+at+9]=s.y,C[W+at+10]=s.z,C[W+at+11]=ht.itemSize===4?s.w:1)}}d={count:p,texture:y,size:new ve(T,L)},i.set(o,d),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let w=0;w<c.length;w++)f+=c[w];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function e_(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var n_={[dh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[Ia]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[_h]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function i_(n,t,e,i,s,r){let a=new di(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Xn;u.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new bn([0,2,0,0,2,0],2));let p=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Un(u,p),f=new Ra(-1,1,1,-1,0,1),x=null,w=null,g=!1,m,b=null,D=[],T=!1;this.setSize=function(L,C){a.setSize(L,C),o!==null&&o.setSize(L,C),l!==null&&l.setSize(L,C);for(let y=0;y<D.length;y++){let E=D[y];E.setSize&&E.setSize(L,C)}},this.setEffects=function(L){D=L,T=D.length>0&&D[0].isRenderPass===!0;let C=a.width,y=a.height;D.length>0&&o===null&&(o=new di(C,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new di(C,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&D.some(Y=>Y.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new ts(C,y),r===!0&&(c.format=ns,c.type=Bs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let Y=0;Y<D.length;Y++){let B=D[Y];B.setSize&&B.setSize(C,y),E&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(c)}},this.begin=function(L,C){if(g||L.toneMapping===Vi&&D.length===0)return!1;if(b=C,C!==null){let y=C.width,E=C.height;(a.width!==y||a.height!==E)&&this.setSize(y,E)}return T===!1&&L.setRenderTarget(a),m=L.toneMapping,L.toneMapping=Vi,!0},this.hasRenderPass=function(){return T},this.end=function(L,C){L.toneMapping=m,g=!0;let y=a,E=o;for(let Y=0;Y<D.length;Y++){let B=D[Y];B.enabled!==!1&&(B.render(L,E,y,C),B.needsSwap!==!1&&(y=E,E=E===o?l:o))}if(x!==L.outputColorSpace||w!==L.toneMapping){x=L.outputColorSpace,w=L.toneMapping,p.defines={},on.getTransfer(x)===yn&&(p.defines.SRGB_TRANSFER="");let Y=n_[w];Y&&(p.defines[Y]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,L.setRenderTarget(b),L.render(d,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var Sf=new ni,bf=new ts(1,1),wf=new ua(1),Tf=new ta,Ef=new Yo,Af=new ca,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Ir(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Bn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function zn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hc(n,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function s_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2fv(this.addr,t),zn(e,t)}}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Bn(e,t))return;n.uniform3fv(this.addr,t),zn(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4fv(this.addr,t),zn(e,t)}}function l_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),zn(e,i)}}function c_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),zn(e,i)}}function h_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Bn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),zn(e,t)}else{if(Bn(e,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),zn(e,i)}}function u_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2iv(this.addr,t),zn(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;n.uniform3iv(this.addr,t),zn(e,t)}}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4iv(this.addr,t),zn(e,t)}}function m_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Bn(e,t))return;n.uniform2uiv(this.addr,t),zn(e,t)}}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Bn(e,t))return;n.uniform3uiv(this.addr,t),zn(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Bn(e,t))return;n.uniform4uiv(this.addr,t),zn(e,t)}}function uc(n){return n.version===0&&(n.compareFunction=Ah,n.needsUpdate=!0),n}function y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=uc(bf):r=Sf,e.setTexture2D(t||r,s)}function v_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ef,s)}function M_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=uc(wf):r=Af,e.setTextureCube(t||r,s)}function S_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tf,s)}function b_(n){switch(n){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function w_(n,t){n.uniform1fv(this.addr,t)}function T_(n,t){let e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function E_(n,t){let e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function A_(n,t){let e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function R_(n,t){let e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function C_(n,t){let e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function P_(n,t){let e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function I_(n,t){n.uniform1iv(this.addr,t)}function L_(n,t){n.uniform2iv(this.addr,t)}function D_(n,t){n.uniform3iv(this.addr,t)}function N_(n,t){n.uniform4iv(this.addr,t)}function F_(n,t){n.uniform1uiv(this.addr,t)}function U_(n,t){n.uniform2uiv(this.addr,t)}function O_(n,t){n.uniform3uiv(this.addr,t)}function k_(n,t){n.uniform4uiv(this.addr,t)}function B_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),zn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=uc(bf):a=Sf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function z_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),zn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ef,r[a])}function G_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),zn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=uc(wf):a=Af;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function H_(n,t,e){let i=this.cache,s=t.length,r=hc(e,s);Bn(i,r)||(n.uniform1iv(this.addr,r),zn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tf,r[a])}function V_(n){switch(n){case 5126:return w_;case 35664:return T_;case 35665:return E_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return F_;case 36294:return U_;case 36295:return O_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}var Vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=b_(e.type)}},Wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V_(e.type)}},Xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function af(n,t){n.seq.push(t),n.map[t.id]=t}function W_(n,t,e){let i=n.name,s=i.length;for(Gh.lastIndex=0;;){let r=Gh.exec(i),a=Gh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){af(e,c===void 0?new Vh(o,n,t):new Wh(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Xh(o),af(e,p)),e=p}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);W_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function of(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var X_=37297,q_=0;function Y_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var lf=new We;function Z_(n){on._getMatrix(lf,on.workingColorSpace,n);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(on.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case yn:return[t,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y_(n.getShaderSource(t),o)}else return r}function $_(n,t){let e=Z_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var K_={[dh]:"Linear",[fh]:"Reinhard",[ph]:"Cineon",[Ia]:"ACESFilmic",[gh]:"AgX",[_h]:"Neutral",[mh]:"Custom"};function j_(n,t){let e=K_[t];return e===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new J;function J_(){on.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function tx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function za(n){return n!==""}function hf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(n){return n.replace(nx,ix)}function ix(n,t){let e=Qe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qh(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(sx,rx)}function rx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var ax={[Fs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function ox(n){return ax[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lx={[Ar]:"ENVMAP_MODE_REFRACTION"};function cx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[Ed]:"ENVMAP_BLENDING_ADD"};function ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hx[n.combine]||"ENVMAP_BLENDING_NONE"}function dx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ox(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=cx(e),p=ux(e),d=Q_(e),f=tx(r),x=s.createProgram(),w,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(za).join(`
`),w.length>0&&(w+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(za).join(`
`),g.length>0&&(g+=`
`)):(w=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),g=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Qe.tonemapping_pars_fragment:"",e.toneMapping!==Vi?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),J_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(za).join(`
`)),a=qh(a),a=hf(a,e),a=uf(a,e),o=qh(o),o=hf(o,e),o=uf(o,e),a=df(a),o=df(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,g=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=m+w+a,D=m+g+o,T=of(s,s.VERTEX_SHADER,b),L=of(s,s.FRAGMENT_SHADER,D);s.attachShader(x,T),s.attachShader(x,L),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(B){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(x)||"",nt=s.getShaderInfoLog(T)||"",ht=s.getShaderInfoLog(L)||"",W=Q.trim(),rt=nt.trim(),at=ht.trim(),it=!0,mt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,L);else{let pt=cf(s,T,"vertex"),ut=cf(s,L,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+pt+`
`+ut)}else W!==""?Ue("WebGLProgram: Program Info Log:",W):(rt===""||at==="")&&(mt=!1);mt&&(B.diagnostics={runnable:it,programLog:W,vertexShader:{log:rt,prefix:w},fragmentShader:{log:at,prefix:g}})}s.deleteShader(T),s.deleteShader(L),y=new Pr(s,x),E=ex(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(x,X_)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=L,this}var fx=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zh(t),e.set(t,i)),i}},Zh=class{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}};function px(n){return n===Ss||n===Oa||n===ka}function mx(n,t,e,i,s,r){let a=new gr,o=new Yh,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,Y,B,Q,nt){let ht=B.fog,W=Q.geometry,rt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,at=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||rt,at),mt=d[y.type],pt=i.precision;y.precision!==null&&(pt=i.getMaxPrecision(y.precision),pt!==y.precision&&Ue("WebGLProgram.getParameters:",y.precision,"not supported, using",pt,"instead."));let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=ut!==void 0?ut.length:0,ae=0;W.morphAttributes.position!==void 0&&(ae=1),W.morphAttributes.normal!==void 0&&(ae=2),W.morphAttributes.color!==void 0&&(ae=3);let ye,Et,jt,Rt;if(mt){let Xt=Xi[mt];ye=Xt.vertexShader,Et=Xt.fragmentShader}else{ye=y.vertexShader,Et=y.fragmentShader;let Xt=o.getVertexShaderStage(y),A=o.getFragmentShaderStage(y);o.update(y,Xt,A),jt=Xt.id,Rt=A.id}let Ct=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),gt=Q.isInstancedMesh===!0,Kt=Q.isBatchedMesh===!0,ee=!!y.map,Ne=!!y.matcap,Oe=!!it,Ee=Oe&&it.isPMREMTexture===!0,He=!!y.aoMap,dn=!!y.lightMap,Ze=!!y.bumpMap&&y.wireframe===!1,en=!!y.normalMap,Ln=!!y.displacementMap,Mn=!!y.emissiveMap,Rn=!!y.metalnessMap,Tn=!!y.roughnessMap,Ke=y.anisotropy>0,V=y.clearcoat>0,Fe=y.diffuseRoughness>0,fe=y.dispersion>0,Zt=y.retroreflectivity>0,tt=y.iridescence>0,Ve=y.sheen>0,kt=y.transmission>0,ue=Ke&&!!y.anisotropyMap,I=V&&!!y.clearcoatMap,M=V&&!!y.clearcoatNormalMap,K=V&&!!y.clearcoatRoughnessMap,At=Fe&&!!y.diffuseRoughnessMap,st=tt&&!!y.iridescenceMap,ot=tt&&!!y.iridescenceThicknessMap,Ft=Ve&&!!y.sheenColorMap,yt=Ve&&!!y.sheenRoughnessMap,St=!!y.specularMap,Yt=!!y.specularColorMap,H=!!y.specularIntensityMap,Tt=kt&&!!y.transmissionMap,_t=kt&&!!y.thicknessMap,vt=!!y.gradientMap,Dt=!!y.alphaMap,Ht=y.alphaTest>0,me=!!y.alphaHash,Ie=!!y.extensions,Ut=Vi;y.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Me=Ee?it.isCompressedCubeTexture?it.image[0].mipmaps:it.mipmaps:null,Be={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:Et,defines:y.defines,customVertexShaderID:jt,customFragmentShaderID:Rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:pt,batching:Kt,batchingColor:Kt&&Q._colorsTexture!==null,instancing:gt,instancingColor:gt&&Q.instanceColor!==null,instancingMorph:gt&&Q.morphTexture!==null,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:on.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:Ne,envMap:Oe,envMapMode:Oe&&it.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?Me.length-1:null,envMapSize:Ee?Me[0].width:null,aoMap:He,lightMap:dn,bumpMap:Ze,normalMap:en,displacementMap:Ln,emissiveMap:Mn,normalMapObjectSpace:en&&y.normalMapType===Cd,normalMapTangentSpace:en&&y.normalMapType===rc,packedNormalMap:en&&y.normalMapType===rc&&px(y.normalMap.format),metalnessMap:Rn,roughnessMap:Tn,anisotropy:Ke,anisotropyMap:ue,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:M,clearcoatRoughnessMap:K,diffuseRoughness:Fe,diffuseRoughnessMap:At,dispersion:fe,retroreflection:Zt,iridescence:tt,iridescenceMap:st,iridescenceThicknessMap:ot,sheen:Ve,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:St,specularColorMap:Yt,specularIntensityMap:H,transmission:kt,transmissionMap:Tt,thicknessMap:_t,gradientMap:vt,opaque:y.transparent===!1&&y.blending===Er&&y.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Ht,alphaHash:me,combine:y.combine,mapUv:ee&&f(y.map.channel),aoMapUv:He&&f(y.aoMap.channel),lightMapUv:dn&&f(y.lightMap.channel),bumpMapUv:Ze&&f(y.bumpMap.channel),normalMapUv:en&&f(y.normalMap.channel),displacementMapUv:Ln&&f(y.displacementMap.channel),emissiveMapUv:Mn&&f(y.emissiveMap.channel),metalnessMapUv:Rn&&f(y.metalnessMap.channel),roughnessMapUv:Tn&&f(y.roughnessMap.channel),anisotropyMapUv:ue&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:At&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:st&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&f(y.sheenRoughnessMap.channel),specularMapUv:St&&f(y.specularMap.channel),specularColorMapUv:Yt&&f(y.specularColorMap.channel),specularIntensityMapUv:H&&f(y.specularIntensityMap.channel),transmissionMapUv:Tt&&f(y.transmissionMap.channel),thicknessMapUv:_t&&f(y.thicknessMap.channel),alphaMapUv:Dt&&f(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(en||Ke),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(ee||Dt),fog:!!ht,useFog:y.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&en===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:wt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:nt.filter(Xt=>Xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&on.getTransfer(y.map.colorSpace)===yn,decodeVideoTextureEmissive:Mn&&y.emissiveMap.isVideoTexture===!0&&on.getTransfer(y.emissiveMap.colorSpace)===yn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===ii,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function w(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let Y in y.defines)E.push(Y),E.push(y.defines[Y]);return y.isRawShaderMaterial===!1&&(g(E,y),m(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function m(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let E=d[y.type],Y;if(E){let B=Xi[E];Y=Yd.clone(B.uniforms)}else Y=y.uniforms;return Y}function D(y,E){let Y=u.get(E);return Y!==void 0?++Y.usedTimes:(Y=new dx(n,E,y,s),c.push(Y),u.set(E,Y)),Y}function T(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function L(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:w,getUniforms:b,acquireProgram:D,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:C}}function gx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _x(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function pf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,w,g,m){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:m},n[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=x,b.materialVariant=a(d),b.groupOrder=w,b.renderOrder=d.renderOrder,b.z=g,b.group=m),t++,b}function l(d,f,x,w,g,m,b){b.reversedDepth===!0&&(g=-g);let D=o(d,f,x,w,g,m);x.transmission>0?i.push(D):x.transparent===!0?s.push(D):e.push(D)}function c(d,f,x,w,g,m){let b=o(d,f,x,w,g,m);x.transmission>0?i.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function u(d,f){e.length>1&&e.sort(d||_x),i.length>1&&i.sort(f||pf),s.length>1&&s.sort(f||pf)}function p(){for(let d=t,f=n.length;d<f;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function xx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new mf,n.set(i,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function yx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Xe};break;case"SpotLight":e={position:new J,direction:new J,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":e={color:new Xe,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Mx=0;function Sx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bx(n){let t=new yx,e=vx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let s=new J,r=new un,a=new un;function o(c){let u=0,p=0,d=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let f=0,x=0,w=0,g=0,m=0,b=0,D=0,T=0,L=0,C=0,y=0,E=0,Y=0,B=0;c.sort(Sx);for(let nt=0,ht=c.length;nt<ht;nt++){let W=c[nt],rt=W.color,at=W.intensity,it=W.distance,mt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Ss?mt=W.shadow.map.texture:mt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)u+=rt.r*at,p+=rt.g*at,d+=rt.b*at;else if(W.isLightProbe){for(let pt=0;pt<9;pt++)i.probe[pt].addScaledVector(W.sh.coefficients[pt],at);B++}else if(W.isSunLight){let pt=t.get(W);if(pt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ut=W.shadow,Nt=e.get(W);Nt.shadowIntensity=ut.intensity,Nt.shadowBias=ut.bias,Nt.shadowNormalBias=ut.normalBias,Nt.shadowRadius=ut.radius,Nt.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),i.sunShadow[x]=Nt,i.sunShadowMap[x]=mt;let ae=ut.getViewportCount();for(let ye=0;ye<ae;ye++)i.sunShadowMatrix[w+ye]=ut.getMatrix(ye),i.sunShadowCascade[w+ye]=ut._cascadeData[ye];w+=ae,x++}i.sun[f]=pt,f++}else if(W.isDirectionalLight){let pt=t.get(W);if(pt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ut=W.shadow,Nt=e.get(W);Nt.shadowIntensity=ut.intensity,Nt.shadowBias=ut.bias,Nt.shadowNormalBias=ut.normalBias,Nt.shadowRadius=ut.radius,Nt.shadowMapSize=ut.mapSize,i.directionalShadow[g]=Nt,i.directionalShadowMap[g]=mt,i.directionalShadowMatrix[g]=W.shadow.matrix,L++}i.directional[g]=pt,g++}else if(W.isSpotLight){let pt=t.get(W);pt.position.setFromMatrixPosition(W.matrixWorld),pt.color.copy(rt).multiplyScalar(at),pt.distance=it,pt.coneCos=Math.cos(W.angle),pt.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),pt.decay=W.decay,i.spot[b]=pt;let ut=W.shadow;if(W.map&&(i.spotLightMap[E]=W.map,E++,ut.updateMatrices(W),W.castShadow&&Y++),i.spotLightMatrix[b]=ut.matrix,W.castShadow){let Nt=e.get(W);Nt.shadowIntensity=ut.intensity,Nt.shadowBias=ut.bias,Nt.shadowNormalBias=ut.normalBias,Nt.shadowRadius=ut.radius,Nt.shadowMapSize=ut.mapSize,i.spotShadow[b]=Nt,i.spotShadowMap[b]=mt,y++}b++}else if(W.isRectAreaLight){let pt=t.get(W);pt.color.copy(rt).multiplyScalar(at),pt.halfWidth.set(W.width*.5,0,0),pt.halfHeight.set(0,W.height*.5,0),i.rectArea[D]=pt,D++}else if(W.isPointLight){let pt=t.get(W);if(pt.color.copy(W.color).multiplyScalar(W.intensity),pt.distance=W.distance,pt.decay=W.decay,W.castShadow){let ut=W.shadow,Nt=e.get(W);Nt.shadowIntensity=ut.intensity,Nt.shadowBias=ut.bias,Nt.shadowNormalBias=ut.normalBias,Nt.shadowRadius=ut.radius,Nt.shadowMapSize=ut.mapSize,Nt.shadowCameraNear=ut.camera.near,Nt.shadowCameraFar=ut.camera.far,i.pointShadow[m]=Nt,i.pointShadowMap[m]=mt,i.pointShadowMatrix[m]=W.shadow.matrix,C++}i.point[m]=pt,m++}else if(W.isHemisphereLight){let pt=t.get(W);pt.skyColor.copy(W.color).multiplyScalar(at),pt.groundColor.copy(W.groundColor).multiplyScalar(at),i.hemi[T]=pt,T++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;let Q=i.hash;(Q.sunLength!==f||Q.directionalLength!==g||Q.pointLength!==m||Q.spotLength!==b||Q.rectAreaLength!==D||Q.hemiLength!==T||Q.numSunShadows!==x||Q.numDirectionalShadows!==L||Q.numPointShadows!==C||Q.numSpotShadows!==y||Q.numSpotMaps!==E||Q.numLightProbes!==B)&&(i.sun.length=f,i.directional.length=g,i.spot.length=b,i.rectArea.length=D,i.point.length=m,i.hemi.length=T,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-Y,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=Y,i.numLightProbes=B,Q.sunLength=f,Q.directionalLength=g,Q.pointLength=m,Q.spotLength=b,Q.rectAreaLength=D,Q.hemiLength=T,Q.numSunShadows=x,Q.numDirectionalShadows=L,Q.numPointShadows=C,Q.numSpotShadows=y,Q.numSpotMaps=E,Q.numLightProbes=B,i.version=Mx++)}function l(c,u){let p=0,d=0,f=0,x=0,w=0,g=0,m=u.matrixWorldInverse;for(let b=0,D=c.length;b<D;b++){let T=c[b];if(T.isSunLight){let L=i.sun[p];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(m),p++}else if(T.isDirectionalLight){let L=i.directional[d];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),d++}else if(T.isSpotLight){let L=i.spot[x];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),x++}else if(T.isRectAreaLight){let L=i.rectArea[w];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){let L=i.point[f];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let L=i.hemi[g];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function gf(n){let t=new bx(n),e=[],i=[],s=[];function r(p){u.camera=p,e.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){i.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gf(n),t.set(s,[o])):r>=a.length?(o=new gf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`,Ax=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Rx=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],_f=new un,Ba=new J,Hh=new J;function Cx(n,t,e){let i=new gs,s=new ve,r=new ve,a=new Cn,o=new sl,l=new rl,c={},u=e.maxTextureSize,p={[Ms]:ii,[ii]:Ms,[Mi]:Mi},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Tx,fragmentShader:Ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new Xn;x.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Un(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let m=this.type;this.render=function(C,y,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===ad&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let Y=n.getRenderTarget(),B=n.getActiveCubeFace(),Q=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(Us),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let ht=m!==this.type;ht&&y.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(rt=>rt.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,rt=C.length;W<rt;W++){let at=C[W],it=at.shadow;if(it===void 0){Ue("WebGLShadowMap:",at,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let mt=it.getFrameExtents();s.multiply(mt),r.copy(it.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,it.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,it.mapSize.y=r.y));let pt=n.state.buffers.depth.getReversed();if(it.camera._reversedDepth=pt,it.map===null||ht===!0){if(it.map!==null&&(it.map.depthTexture!==null&&(it.map.depthTexture.dispose(),it.map.depthTexture=null),it.map.dispose()),this.type===Tr){if(at.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}it.map=new di(s.x,s.y,{format:Ss,type:Ii,minFilter:ei,magFilter:ei,generateMipmaps:!1}),it.map.texture.name=at.name+".shadowMap",it.map.depthTexture=new ts(s.x,s.y,Si),it.map.depthTexture.name=at.name+".shadowMapDepth",it.map.depthTexture.format=Qi,it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Vn,it.map.depthTexture.magFilter=Vn}else at.isPointLight?(it.map=new Ga(s.x),it.map.depthTexture=new ua(s.x,Pi)):(it.map=new di(s.x,s.y),it.map.depthTexture=new ts(s.x,s.y,Pi)),it.map.depthTexture.name=at.name+".shadowMap",it.map.depthTexture.format=Qi,this.type===Fs?(it.map.depthTexture.compareFunction=pt?Eh:Th,it.map.depthTexture.minFilter=ei,it.map.depthTexture.magFilter=ei):(it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Vn,it.map.depthTexture.magFilter=Vn);it.camera.updateProjectionMatrix()}it.map.isWebGLCubeRenderTarget!==!0&&(it.map.width!==s.x||it.map.height!==s.y)&&it.map.setSize(s.x,s.y);let ut=it.map.isWebGLCubeRenderTarget?6:it.getViewportCount();at.isPointLight!==!0&&it.updateMatrices(at,E);let Nt=(it.camera.layers.mask&4294967294)!==0?it.camera.layers:E.layers;for(let ae=0;ae<ut;ae++){let ye=it.getCamera(ae);if(at.isPointLight){let Et=it.camera,jt=it.matrix,Rt=at.distance||Et.far;Rt!==Et.far&&(Et.far=Rt,Et.updateProjectionMatrix()),Ba.setFromMatrixPosition(at.matrixWorld),Et.position.copy(Ba),Hh.copy(Et.position),Hh.add(Ax[ae]),Et.up.copy(Rx[ae]),Et.lookAt(Hh),Et.updateMatrixWorld(),jt.makeTranslation(-Ba.x,-Ba.y,-Ba.z),_f.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),it._frustum.setFromProjectionMatrix(_f,Et.coordinateSystem,Et.reversedDepth)}if(it.map.isWebGLCubeRenderTarget)n.setRenderTarget(it.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(it.map),n.clear());let Et=it.getViewport(ae);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),nt.viewport(a)}i=it.getFrustum(ae),T(y,E,ye,at,Nt,this.type)}it.isPointLightShadow!==!0&&this.type===Tr&&b(it,E),it.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(Y,B,Q)};function b(C,y){let E=t.update(w);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new di(s.x,s.y,{format:Ss,type:Ii}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(y,null,E,d,w,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(y,null,E,f,w,null)}function D(C,y,E,Y){let B=null,Q=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Q!==void 0)B=Q;else if(B=E.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let nt=B.uuid,ht=y.uuid,W=c[nt];W===void 0&&(W={},c[nt]=W);let rt=W[ht];rt===void 0&&(rt=B.clone(),W[ht]=rt,y.addEventListener("dispose",L)),B=rt}if(B.visible=y.visible,B.wireframe=y.wireframe,Y===Tr?B.side=y.shadowSide!==null?y.shadowSide:y.side:B.side=y.shadowSide!==null?y.shadowSide:p[y.side],B.alphaMap=y.alphaMap,B.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,B.map=y.map,B.clipShadows=y.clipShadows,B.clippingPlanes=y.clippingPlanes,B.clipIntersection=y.clipIntersection,B.displacementMap=y.displacementMap,B.displacementScale=y.displacementScale,B.displacementBias=y.displacementBias,B.wireframeLinewidth=y.wireframeLinewidth,B.linewidth=y.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let nt=n.properties.get(B);nt.light=E}return B}function T(C,y,E,Y,B,Q){if(C.visible===!1)return;if(C.layers.test(B)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&Q===Tr)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let W=t.update(C),rt=C.material;if(Array.isArray(rt)){let at=W.groups;for(let it=0,mt=at.length;it<mt;it++){let pt=at[it],ut=rt[pt.materialIndex];if(ut&&ut.visible){let Nt=D(C,ut,Y,Q);C.onBeforeShadow(n,C,y,E,W,Nt,pt),n.renderBufferDirect(E,null,W,Nt,C,pt),C.onAfterShadow(n,C,y,E,W,Nt,pt)}}}else if(rt.visible){let at=D(C,rt,Y,Q);C.onBeforeShadow(n,C,y,E,W,at,null),n.renderBufferDirect(E,null,W,at,C,null),C.onAfterShadow(n,C,y,E,W,at,null)}}let ht=C.children;for(let W=0,rt=ht.length;W<rt;W++)T(ht[W],y,E,Y,B,Q)}function L(C){C.target.removeEventListener("dispose",L);for(let E in c){let Y=c[E],B=C.target.uuid;B in Y&&(Y[B].dispose(),delete Y[B])}}}function Px(n,t){function e(){let H=!1,Tt=new Cn,_t=null,vt=new Cn(0,0,0,0);return{setMask:function(Dt){_t!==Dt&&!H&&(n.colorMask(Dt,Dt,Dt,Dt),_t=Dt)},setLocked:function(Dt){H=Dt},setClear:function(Dt,Ht,me,Ie,Ut){Ut===!0&&(Dt*=Ie,Ht*=Ie,me*=Ie),Tt.set(Dt,Ht,me,Ie),vt.equals(Tt)===!1&&(n.clearColor(Dt,Ht,me,Ie),vt.copy(Tt))},reset:function(){H=!1,_t=null,vt.set(-1,0,0,0)}}}function i(){let H=!1,Tt=!1,_t=null,vt=null,Dt=null;return{setReversed:function(Ht){if(Tt!==Ht){let me=t.get("EXT_clip_control");Ht?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),Tt=Ht;let Ie=Dt;Dt=null,this.setClear(Ie)}},getReversed:function(){return Tt},setTest:function(Ht){Ht?wt(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Ht){_t!==Ht&&!H&&(n.depthMask(Ht),_t=Ht)},setFunc:function(Ht){if(Tt&&(Ht=zd[Ht]),vt!==Ht){switch(Ht){case No:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Ht}},setLocked:function(Ht){H=Ht},setClear:function(Ht){Dt!==Ht&&(Dt=Ht,Tt&&(Ht=1-Ht),n.clearDepth(Ht))},reset:function(){H=!1,_t=null,vt=null,Dt=null,Tt=!1}}}function s(){let H=!1,Tt=null,_t=null,vt=null,Dt=null,Ht=null,me=null,Ie=null,Ut=null;return{setTest:function(Me){H||(Me?wt(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!H&&(n.stencilMask(Me),Tt=Me)},setFunc:function(Me,Be,Xt){(_t!==Me||vt!==Be||Dt!==Xt)&&(n.stencilFunc(Me,Be,Xt),_t=Me,vt=Be,Dt=Xt)},setOp:function(Me,Be,Xt){(Ht!==Me||me!==Be||Ie!==Xt)&&(n.stencilOp(Me,Be,Xt),Ht=Me,me=Be,Ie=Xt)},setLocked:function(Me){H=Me},setClear:function(Me){Ut!==Me&&(n.clearStencil(Me),Ut=Me)},reset:function(){H=!1,Tt=null,_t=null,vt=null,Dt=null,Ht=null,me=null,Ie=null,Ut=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,x=[],w=null,g=!1,m=null,b=null,D=null,T=null,L=null,C=null,y=null,E=new Xe(0,0,0),Y=0,B=!1,Q=null,nt=null,ht=null,W=null,rt=null,at=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,mt=0,pt=n.getParameter(n.VERSION);pt.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),it=mt>=1):pt.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),it=mt>=2);let ut=null,Nt={},ae=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Et=new Cn().fromArray(ae),jt=new Cn().fromArray(ye);function Rt(H,Tt,_t,vt){let Dt=new Uint8Array(4),Ht=n.createTexture();n.bindTexture(H,Ht),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<_t;me++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Tt+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Ht}let Ct={};Ct[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),wt(n.DEPTH_TEST),a.setFunc(dr),Ze(!1),en(rh),wt(n.CULL_FACE),He(Us);function wt(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function gt(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Kt(H,Tt){return d[H]!==Tt?(n.bindFramebuffer(H,Tt),d[H]=Tt,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ee(H,Tt){let _t=x,vt=!1;if(H){_t=f.get(Tt),_t===void 0&&(_t=[],f.set(Tt,_t));let Dt=H.textures;if(_t.length!==Dt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let Ht=0,me=Dt.length;Ht<me;Ht++)_t[Ht]=n.COLOR_ATTACHMENT0+Ht;_t.length=Dt.length,vt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,vt=!0);vt&&n.drawBuffers(_t)}function Ne(H){return w!==H?(n.useProgram(H),w=H,!0):!1}let Oe={[Os]:n.FUNC_ADD,[ld]:n.FUNC_SUBTRACT,[cd]:n.FUNC_REVERSE_SUBTRACT};Oe[hd]=n.MIN,Oe[ud]=n.MAX;let Ee={[dd]:n.ZERO,[fd]:n.ONE,[pd]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[vd]:n.SRC_ALPHA_SATURATE,[xd]:n.DST_COLOR,[gd]:n.DST_ALPHA,[md]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[yd]:n.ONE_MINUS_DST_COLOR,[_d]:n.ONE_MINUS_DST_ALPHA,[Md]:n.CONSTANT_COLOR,[Sd]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[wd]:n.ONE_MINUS_CONSTANT_ALPHA};function He(H,Tt,_t,vt,Dt,Ht,me,Ie,Ut,Me){if(H===Us){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(wt(n.BLEND),g=!0),H!==od){if(H!==m||Me!==B){if((b!==Os||L!==Os)&&(n.blendEquation(n.FUNC_ADD),b=Os,L=Os),Me)switch(H){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",H);break}else switch(H){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",H);break}D=null,T=null,C=null,y=null,E.set(0,0,0),Y=0,m=H,B=Me}return}Dt=Dt||Tt,Ht=Ht||_t,me=me||vt,(Tt!==b||Dt!==L)&&(n.blendEquationSeparate(Oe[Tt],Oe[Dt]),b=Tt,L=Dt),(_t!==D||vt!==T||Ht!==C||me!==y)&&(n.blendFuncSeparate(Ee[_t],Ee[vt],Ee[Ht],Ee[me]),D=_t,T=vt,C=Ht,y=me),(Ie.equals(E)===!1||Ut!==Y)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Ut),E.copy(Ie),Y=Ut),m=H,B=!1}function dn(H,Tt){H.side===Mi?gt(n.CULL_FACE):wt(n.CULL_FACE);let _t=H.side===ii;Tt&&(_t=!_t),Ze(_t),H.blending===Er&&H.transparent===!1?He(Us):He(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let vt=H.stencilWrite;o.setTest(vt),vt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Mn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){Q!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),Q=H)}function en(H){H!==sd?(wt(n.CULL_FACE),H!==nt&&(H===rh?n.cullFace(n.BACK):H===rd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),nt=H}function Ln(H){H!==ht&&(it&&n.lineWidth(H),ht=H)}function Mn(H,Tt,_t){H?(wt(n.POLYGON_OFFSET_FILL),(W!==Tt||rt!==_t)&&(W=Tt,rt=_t,a.getReversed()&&(Tt=-Tt,_t=-_t),n.polygonOffset(Tt,_t))):gt(n.POLYGON_OFFSET_FILL)}function Rn(H){H?wt(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Tn(H){H===void 0&&(H=n.TEXTURE0+at-1),ut!==H&&(n.activeTexture(H),ut=H)}function Ke(H,Tt,_t){_t===void 0&&(ut===null?_t=n.TEXTURE0+at-1:_t=ut);let vt=Nt[_t];vt===void 0&&(vt={type:void 0,texture:void 0},Nt[_t]=vt),(vt.type!==H||vt.texture!==Tt)&&(ut!==_t&&(n.activeTexture(_t),ut=_t),n.bindTexture(H,Tt||Ct[H]),vt.type=H,vt.texture=Tt)}function V(){let H=Nt[ut];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Fe(){try{n.compressedTexImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function fe(){try{n.compressedTexImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function Zt(){try{n.texSubImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function tt(){try{n.texSubImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function Ve(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function kt(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function ue(){try{n.texStorage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function I(){try{n.texStorage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function M(){try{n.texImage2D(...arguments)}catch(H){Ge("WebGLState:",H)}}function K(){try{n.texImage3D(...arguments)}catch(H){Ge("WebGLState:",H)}}function At(H){return p[H]!==void 0?p[H]:n.getParameter(H)}function st(H,Tt){p[H]!==Tt&&(n.pixelStorei(H,Tt),p[H]=Tt)}function ot(H){Et.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Et.copy(H))}function Ft(H){jt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),jt.copy(H))}function yt(H,Tt){let _t=c.get(Tt);_t===void 0&&(_t=new WeakMap,c.set(Tt,_t));let vt=_t.get(H);vt===void 0&&(vt=n.getUniformBlockIndex(Tt,H.name),n.uniformBlockBinding(Tt,vt,vt),_t.set(H,vt))}function St(H,Tt,_t){let Dt=c.get(Tt).get(H);l[Dt]!==_t&&(n.bindBufferBase(n.UNIFORM_BUFFER,Dt,_t),l[Dt]=_t)}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},ut=null,Nt={},d={},l={},f=new WeakMap,x=[],w=null,g=!1,m=null,b=null,D=null,T=null,L=null,C=null,y=null,E=new Xe(0,0,0),Y=0,B=!1,Q=null,nt=null,ht=null,W=null,rt=null,Et.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:wt,disable:gt,bindFramebuffer:Kt,drawBuffers:ee,useProgram:Ne,setBlending:He,setMaterial:dn,setFlipSided:Ze,setCullFace:en,setLineWidth:Ln,setPolygonOffset:Mn,setScissorTest:Rn,activeTexture:Tn,bindTexture:Ke,unbindTexture:V,compressedTexImage2D:Fe,compressedTexImage3D:fe,texImage2D:M,texImage3D:K,pixelStorei:st,getParameter:At,updateUBOMapping:yt,uniformBlockBinding:St,texStorage2D:ue,texStorage3D:I,texSubImage2D:Zt,texSubImage3D:tt,compressedTexSubImage2D:Ve,compressedTexSubImage3D:kt,scissor:ot,viewport:Ft,reset:Yt}}function Ix(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,p=new Set,d,f=new WeakMap,x=new Set,w=new FinalizationRegistry(I=>x.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,M){return g?new OffscreenCanvas(I,M):Qr("canvas")}function b(I,M,K){let At=1,st=ue(I);if((st.width>K||st.height>K)&&(At=K/Math.max(st.width,st.height)),At<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ot=Math.floor(At*st.width),Ft=Math.floor(At*st.height);d===void 0&&(d=m(ot,Ft));let yt=M?m(ot,Ft):d;return yt.width=ot,yt.height=Ft,yt.getContext("2d").drawImage(I,0,0,ot,Ft),Ue("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ot+"x"+Ft+")."),yt}else return"data"in I&&Ue("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function D(I){return I.generateMipmaps}function T(I){n.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(I,M,K,At,st,ot=!1){if(I!==null){if(n[I]!==void 0)return n[I];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ft;At&&(Ft=t.get("EXT_texture_norm16"),Ft||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let yt=M;if(M===n.RED&&(K===n.FLOAT&&(yt=n.R32F),K===n.HALF_FLOAT&&(yt=n.R16F),K===n.UNSIGNED_BYTE&&(yt=n.R8),K===n.UNSIGNED_SHORT&&Ft&&(yt=Ft.R16_EXT),K===n.SHORT&&Ft&&(yt=Ft.R16_SNORM_EXT)),M===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(yt=n.R8UI),K===n.UNSIGNED_SHORT&&(yt=n.R16UI),K===n.UNSIGNED_INT&&(yt=n.R32UI),K===n.BYTE&&(yt=n.R8I),K===n.SHORT&&(yt=n.R16I),K===n.INT&&(yt=n.R32I)),M===n.RG&&(K===n.FLOAT&&(yt=n.RG32F),K===n.HALF_FLOAT&&(yt=n.RG16F),K===n.UNSIGNED_BYTE&&(yt=n.RG8),K===n.UNSIGNED_SHORT&&Ft&&(yt=Ft.RG16_EXT),K===n.SHORT&&Ft&&(yt=Ft.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(yt=n.RG8UI),K===n.UNSIGNED_SHORT&&(yt=n.RG16UI),K===n.UNSIGNED_INT&&(yt=n.RG32UI),K===n.BYTE&&(yt=n.RG8I),K===n.SHORT&&(yt=n.RG16I),K===n.INT&&(yt=n.RG32I)),M===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(yt=n.RGB8UI),K===n.UNSIGNED_SHORT&&(yt=n.RGB16UI),K===n.UNSIGNED_INT&&(yt=n.RGB32UI),K===n.BYTE&&(yt=n.RGB8I),K===n.SHORT&&(yt=n.RGB16I),K===n.INT&&(yt=n.RGB32I)),M===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(yt=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(yt=n.RGBA16UI),K===n.UNSIGNED_INT&&(yt=n.RGBA32UI),K===n.BYTE&&(yt=n.RGBA8I),K===n.SHORT&&(yt=n.RGBA16I),K===n.INT&&(yt=n.RGBA32I)),M===n.RGB&&(K===n.UNSIGNED_SHORT&&Ft&&(yt=Ft.RGB16_EXT),K===n.SHORT&&Ft&&(yt=Ft.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(yt=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(yt=n.R11F_G11F_B10F)),M===n.RGBA){let St=ot?Jr:on.getTransfer(st);K===n.FLOAT&&(yt=n.RGBA32F),K===n.HALF_FLOAT&&(yt=n.RGBA16F),K===n.UNSIGNED_BYTE&&(yt=St===yn?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Ft&&(yt=Ft.RGBA16_EXT),K===n.SHORT&&Ft&&(yt=Ft.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(yt=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(yt=n.RGB5_A1)}return(yt===n.R16F||yt===n.R32F||yt===n.RG16F||yt===n.RG32F||yt===n.RGBA16F||yt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function y(I,M){let K;return I?M===null||M===Pi||M===Bs?K=n.DEPTH24_STENCIL8:M===Si?K=n.DEPTH32F_STENCIL8:M===Rr&&(K=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===Bs?K=n.DEPTH_COMPONENT24:M===Si?K=n.DEPTH_COMPONENT32F:M===Rr&&(K=n.DEPTH_COMPONENT16),K}function E(I,M){return D(I)===!0||I.isFramebufferTexture&&I.minFilter!==Vn&&I.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function Y(I){let M=new WeakRef(I);i.get(I).__ref=M,x.add(M),w.register(I,M,M)}function B(I){let M=i.get(I).__ref;M!==void 0&&(x.delete(M),w.unregister(M))}function Q(I){ht(I.target)}function nt(I){W(I.target)}function ht(I){I.removeEventListener("dispose",Q),B(I),at(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&p.delete(I)}function W(I){I.removeEventListener("dispose",nt),B(I),mt(I)}function rt(){for(let I of x){let M=I.deref();M!==void 0&&(M.isRenderTarget===!0?W(M):ht(M))}x.clear(),p.clear()}function at(I){let M=i.get(I);if(M.__webglInit===void 0)return;let K=I.source,At=f.get(K);if(At){let st=At[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&it(I),Object.keys(At).length===0&&f.delete(K)}i.remove(I)}function it(I){let M=i.get(I);n.deleteTexture(M.__webglTexture);let K=I.source,At=f.get(K);delete At[M.__cacheKey],a.memory.textures--}function mt(I){let M=i.get(I);M.__depthDisposeCallback&&M.__depthDisposeCallback();let K=I.depthTexture;if(K&&K.renderTarget===I&&ht(K),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(M.__webglFramebuffer[st]))for(let ot=0;ot<M.__webglFramebuffer[st].length;ot++)n.deleteFramebuffer(M.__webglFramebuffer[st][ot]);else n.deleteFramebuffer(M.__webglFramebuffer[st]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[st])}else{if(Array.isArray(M.__webglFramebuffer))for(let st=0;st<M.__webglFramebuffer.length;st++)n.deleteFramebuffer(M.__webglFramebuffer[st]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let st=0;st<M.__webglColorRenderbuffer.length;st++)M.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[st]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let At=I.textures;for(let st=0,ot=At.length;st<ot;st++){let Ft=i.get(At[st]);Ft.__webglTexture&&(n.deleteTexture(Ft.__webglTexture),a.memory.textures--),i.remove(At[st])}i.remove(I)}let pt=0;function ut(){pt=0}function Nt(){return pt}function ae(I){pt=I}function ye(){let I=pt;return I>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),pt+=1,I}function Et(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.mipmapsAutoUpdate),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function jt(I,M){let K=i.get(I);if(I.isVideoTexture&&Ve(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){let At=I.image;if(At===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(At.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{dn(K,I,M);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+M)}function Rt(I,M){let K=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){dn(K,I,M);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+M)}function Ct(I,M){let K=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){dn(K,I,M);return}e.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+M)}function wt(I,M){let K=i.get(I);if(I.version>0&&K.__version!==I.version){Ze(K,I,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+M)}let gt={[Go]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},Kt={[Vn]:n.NEAREST,[Ad]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ee={[Id]:n.NEVER,[Ah]:n.ALWAYS,[Ld]:n.LESS,[Th]:n.LEQUAL,[Dd]:n.EQUAL,[Eh]:n.GEQUAL,[Nd]:n.GREATER,[Fd]:n.NOTEQUAL};function Ne(I,M){if(M.type===Si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===Ml||M.magFilter===La||M.magFilter===es||M.minFilter===ei||M.minFilter===Ml||M.minFilter===La||M.minFilter===es)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,gt[M.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,gt[M.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,gt[M.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Kt[M.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Kt[M.minFilter]),M.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vn||M.minFilter!==La&&M.minFilter!==es||M.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(I,M){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",Q),Y(M));let At=M.source,st=f.get(At);st===void 0&&(st={},f.set(At,st));let ot=Et(M);if(ot!==I.__cacheKey){st[ot]===void 0&&(st[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),st[ot].usedTimes++;let Ft=st[I.__cacheKey];Ft!==void 0&&(st[I.__cacheKey].usedTimes--,Ft.usedTimes===0&&it(M)),I.__cacheKey=ot,I.__webglTexture=st[ot].texture}return K}function Ee(I,M,K){return Math.floor(Math.floor(I/K)/M)}function He(I,M,K,At){let ot=I.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,K,At,M.data);else{ot.sort((H,Tt)=>H.start-Tt.start);let Ft=0;for(let H=1;H<ot.length;H++){let Tt=ot[Ft],_t=ot[H],vt=Tt.start+Tt.count,Dt=Ee(_t.start,M.width,4),Ht=Ee(Tt.start,M.width,4);_t.start<=vt+1&&Dt===Ht&&Ee(_t.start+_t.count-1,M.width,4)===Dt?Tt.count=Math.max(Tt.count,_t.start+_t.count-Tt.start):(++Ft,ot[Ft]=_t)}ot.length=Ft+1;let yt=e.getParameter(n.UNPACK_ROW_LENGTH),St=e.getParameter(n.UNPACK_SKIP_PIXELS),Yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let H=0,Tt=ot.length;H<Tt;H++){let _t=ot[H],vt=Math.floor(_t.start/4),Dt=Math.ceil(_t.count/4),Ht=vt%M.width,me=Math.floor(vt/M.width),Ie=Dt,Ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,me),e.texSubImage2D(n.TEXTURE_2D,0,Ht,me,Ie,Ut,K,At,M.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,yt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,St),e.pixelStorei(n.UNPACK_SKIP_ROWS,Yt)}}function dn(I,M,K){let At=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(At=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(At=n.TEXTURE_3D);let st=Oe(I,M),ot=M.source;e.bindTexture(At,I.__webglTexture,n.TEXTURE0+K);let Ft=i.get(ot);if(ot.version!==Ft.__version||st===!0){if(e.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Ut=on.getPrimaries(on.workingColorSpace),Me=M.colorSpace===is?null:on.getPrimaries(M.colorSpace),Be=M.colorSpace===is||Ut===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let St=b(M.image,!1,s.maxTextureSize);St=kt(M,St);let Yt=r.convert(M.format,M.colorSpace),H=r.convert(M.type),Tt=C(M.internalFormat,Yt,H,M.normalized,M.colorSpace,M.isVideoTexture);Ne(At,M);let _t,vt=M.mipmaps,Dt=M.isVideoTexture!==!0,Ht=Ft.__version===void 0||st===!0,me=ot.dataReady,Ie=E(M,St);if(M.isDepthTexture)Tt=y(M.format===ns,M.type),Ht&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Tt,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,Tt,St.width,St.height,0,Yt,H,null));else if(M.isDataTexture)if(vt.length>0){Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,Ie,Tt,vt[0].width,vt[0].height);for(let Ut=0,Me=vt.length;Ut<Me;Ut++)_t=vt[Ut],Dt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,_t.width,_t.height,Yt,H,_t.data):e.texImage2D(n.TEXTURE_2D,Ut,Tt,_t.width,_t.height,0,Yt,H,_t.data);M.generateMipmaps=!1}else Dt?(Ht&&e.texStorage2D(n.TEXTURE_2D,Ie,Tt,St.width,St.height),me&&He(M,St,Yt,H)):e.texImage2D(n.TEXTURE_2D,0,Tt,St.width,St.height,0,Yt,H,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Tt,vt[0].width,vt[0].height,St.depth);for(let Ut=0,Me=vt.length;Ut<Me;Ut++)if(_t=vt[Ut],M.format!==Li)if(Yt!==null)if(Dt){if(me)if(M.layerUpdates.size>0){let Be=Fh(_t.width,_t.height,M.format,M.type);for(let Xt of M.layerUpdates){let A=_t.data.subarray(Xt*Be/_t.data.BYTES_PER_ELEMENT,(Xt+1)*Be/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,Xt,_t.width,_t.height,1,Yt,A)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,_t.width,_t.height,St.depth,Yt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ut,Tt,_t.width,_t.height,St.depth,0,_t.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?me&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,_t.width,_t.height,St.depth,Yt,H,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ut,Tt,_t.width,_t.height,St.depth,0,Yt,H,_t.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Dt&&Ht&&e.texStorage2D(n.TEXTURE_2D,Ie,Tt,vt[0].width,vt[0].height);for(let Ut=0,Me=vt.length;Ut<Me;Ut++)_t=vt[Ut],M.format!==Li?Yt!==null?Dt?me&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ut,0,0,_t.width,_t.height,Yt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,Ut,Tt,_t.width,_t.height,0,_t.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,_t.width,_t.height,Yt,H,_t.data):e.texImage2D(n.TEXTURE_2D,Ut,Tt,_t.width,_t.height,0,Yt,H,_t.data)}else if(M.isDataArrayTexture)if(Dt){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Tt,St.width,St.height,St.depth),me)if(M.layerUpdates.size>0){let Ut=Fh(St.width,St.height,M.format,M.type);for(let Me of M.layerUpdates){let Be=St.data.subarray(Me*Ut/St.data.BYTES_PER_ELEMENT,(Me+1)*Ut/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,St.width,St.height,1,Yt,H,Be)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Yt,H,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,St.width,St.height,St.depth,0,Yt,H,St.data);else if(M.isData3DTexture)Dt?(Ht&&e.texStorage3D(n.TEXTURE_3D,Ie,Tt,St.width,St.height,St.depth),me&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Yt,H,St.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,St.width,St.height,St.depth,0,Yt,H,St.data);else if(M.isFramebufferTexture){if(Ht)if(Dt)e.texStorage2D(n.TEXTURE_2D,Ie,Tt,St.width,St.height);else{let Ut=St.width,Me=St.height;for(let Be=0;Be<Ie;Be++)e.texImage2D(n.TEXTURE_2D,Be,Tt,Ut,Me,0,Yt,H,null),Ut>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let Ut=n.canvas;if(Ut.hasAttribute("layoutsubtree")||Ut.setAttribute("layoutsubtree","true"),St.parentNode!==Ut){Ut.appendChild(St),p.add(M),Ut.onpaint=Me=>{let Be=Me.changedElements;for(let Xt of p)Be.includes(Xt.image)&&(Xt.needsUpdate=!0)},Ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,St);else{let Be=n.RGBA,Xt=n.RGBA,A=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,Xt,A,St)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(vt.length>0){if(Dt&&Ht){let Ut=ue(vt[0]);e.texStorage2D(n.TEXTURE_2D,Ie,Tt,Ut.width,Ut.height)}for(let Ut=0,Me=vt.length;Ut<Me;Ut++)_t=vt[Ut],Dt?me&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,Yt,H,_t):e.texImage2D(n.TEXTURE_2D,Ut,Tt,Yt,H,_t);M.generateMipmaps=!1}else if(Dt){if(Ht){let Ut=ue(St);e.texStorage2D(n.TEXTURE_2D,Ie,Tt,Ut.width,Ut.height)}me&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,H,St)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Yt,H,St);D(M)&&M.mipmapsAutoUpdate===!0&&T(At),Ft.__version=ot.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Ze(I,M,K){if(M.image.length!==6)return;let At=Oe(I,M),st=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+K);let ot=i.get(st);if(st.version!==ot.__version||At===!0){e.activeTexture(n.TEXTURE0+K);let Ft=on.getPrimaries(on.workingColorSpace),yt=M.colorSpace===is?null:on.getPrimaries(M.colorSpace),St=M.colorSpace===is||Ft===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,H=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let Xt=0;Xt<6;Xt++)!Yt&&!H?Tt[Xt]=b(M.image[Xt],!0,s.maxCubemapSize):Tt[Xt]=H?M.image[Xt].image:M.image[Xt],Tt[Xt]=kt(M,Tt[Xt]);let _t=Tt[0],vt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),Ht=C(M.internalFormat,vt,Dt,M.normalized,M.colorSpace),me=M.isVideoTexture!==!0,Ie=ot.__version===void 0||At===!0,Ut=st.dataReady,Me=E(M,_t);Ne(n.TEXTURE_CUBE_MAP,M);let Be;if(M.isDepthTexture){if(Ht=y(M.format===ns,M.type),Ie)if(me)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ht,_t.width,_t.height);else for(let Xt=0;Xt<6;Xt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,_t.width,_t.height,0,vt,Dt,null)}else if(Yt){me&&Ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ht,_t.width,_t.height);for(let Xt=0;Xt<6;Xt++){Be=Tt[Xt].mipmaps;for(let A=0;A<Be.length;A++){let _=Be[A];M.format!==Li?vt!==null?me?Ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A,0,0,_.width,_.height,vt,_.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A,Ht,_.width,_.height,0,_.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A,0,0,_.width,_.height,vt,Dt,_.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A,Ht,_.width,_.height,0,vt,Dt,_.data)}}}else{if(Be=M.mipmaps,me&&Ie){Be.length>0&&Me++;let Xt=ue(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ht,Xt.width,Xt.height)}for(let Xt=0;Xt<6;Xt++)if(H){me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,Tt[Xt].width,Tt[Xt].height,vt,Dt,Tt[Xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,Tt[Xt].width,Tt[Xt].height,0,vt,Dt,Tt[Xt].data);for(let A=0;A<Be.length;A++){let G=Be[A].image[Xt].image;me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A+1,0,0,G.width,G.height,vt,Dt,G.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A+1,Ht,G.width,G.height,0,vt,Dt,G.data)}}else{me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,0,0,vt,Dt,Tt[Xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Ht,vt,Dt,Tt[Xt]);for(let A=0;A<Be.length;A++){let _=Be[A];me?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A+1,0,0,vt,Dt,_.image[Xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,A+1,Ht,vt,Dt,_.image[Xt])}}}D(M)&&M.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),ot.__version=st.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function en(I,M,K,At,st,ot){let Ft=r.convert(K.format,K.colorSpace),yt=r.convert(K.type),St=C(K.internalFormat,Ft,yt,K.normalized,K.colorSpace),Yt=i.get(M),H=i.get(K);if(H.__renderTarget=M,!Yt.__hasExternalTextures){let Tt=Math.max(1,M.width>>ot),_t=Math.max(1,M.height>>ot);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,St,Tt,_t,M.depth,0,Ft,yt,null):e.texImage2D(st,ot,St,Tt,_t,0,Ft,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,st,H.__webglTexture,0,Zt(M)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,At,st,H.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ln(I,M,K){if(n.bindRenderbuffer(n.RENDERBUFFER,I),M.depthBuffer){let At=M.depthTexture,st=At&&At.isDepthTexture?At.type:null,ot=y(M.stencilBuffer,st),Ft=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(M),ot,M.width,M.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(M),ot,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,I)}else{let At=M.textures;for(let st=0;st<At.length;st++){let ot=At[st],Ft=r.convert(ot.format,ot.colorSpace),yt=r.convert(ot.type),St=C(ot.internalFormat,Ft,yt,ot.normalized,ot.colorSpace);tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(M),St,M.width,M.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(M),St,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,St,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Mn(I,M,K){let At=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(M.depthTexture);st.__renderTarget=M;let ot=At?M.depthTexture.image[0]:M.depthTexture.image;(!st.__webglTexture||ot.width!==M.width||ot.height!==M.height)&&(ot.width=M.width,ot.height=M.height,M.depthTexture.needsUpdate=!0),At?wt(M.depthTexture,0):jt(M.depthTexture,0);let Ft=st.__webglTexture,yt=Zt(M),St=At?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,Yt=M.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Qi)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Yt,St,Ft,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,Yt,St,Ft,0);else if(M.depthTexture.format===ns)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Yt,St,Ft,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,Yt,St,Ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rn(I){let M=i.get(I),K=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let At=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),At){let st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,At.removeEventListener("dispose",st)};At.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=At}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let At=0;At<6;At++)Mn(M.__webglFramebuffer[At],I,At);else I.texture.mipmaps.length>0?Mn(M.__webglFramebuffer[0],I,0):Mn(M.__webglFramebuffer,I,0);else if(K){M.__webglDepthbuffer=[];for(let At=0;At<6;At++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[At]),M.__webglDepthbuffer[At]===void 0)M.__webglDepthbuffer[At]=n.createRenderbuffer(),Ln(M.__webglDepthbuffer[At],I,!1);else{let st=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[At];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ot)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ln(M.__webglDepthbuffer,I,!1);else{let st=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tn(I,M,K){let At=i.get(I);M!==void 0&&en(At.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Rn(I)}function Ke(I){let M=I.texture,K=i.get(I),At=i.get(M);I.addEventListener("dispose",nt),Y(I);let st=I.textures,ot=I.isWebGLCubeRenderTarget===!0,Ft=st.length>1;if(Ft||(At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture()),At.__version=M.version,a.memory.textures++),ot){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(M.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let St=0;St<M.mipmaps.length;St++)K.__webglFramebuffer[yt][St]=n.createFramebuffer()}else K.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(M.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<M.mipmaps.length;yt++)K.__webglFramebuffer[yt]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let yt=0,St=st.length;yt<St;yt++){let Yt=i.get(st[yt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&tt(I)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<st.length;yt++){let St=st[yt];K.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);let Yt=r.convert(St.format,St.colorSpace),H=r.convert(St.type),Tt=C(St.internalFormat,Yt,H,St.normalized,St.colorSpace,I.isXRRenderTarget===!0),_t=Zt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,Tt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Ln(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,At.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M);for(let yt=0;yt<6;yt++)if(M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)en(K.__webglFramebuffer[yt][St],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else en(K.__webglFramebuffer[yt],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);D(M)?T(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(Ft){for(let yt=0,St=st.length;yt<St;yt++){let Yt=st[yt],H=i.get(Yt),Tt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,H.__webglTexture),Ne(Tt,Yt),en(K.__webglFramebuffer,I,Yt,n.COLOR_ATTACHMENT0+yt,Tt,0),D(Yt)&&T(Tt)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,At.__webglTexture),Ne(yt,M),M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)en(K.__webglFramebuffer[St],I,M,n.COLOR_ATTACHMENT0,yt,St);else en(K.__webglFramebuffer,I,M,n.COLOR_ATTACHMENT0,yt,0);D(M)?T(yt):M.mipmaps.length>0&&n.texParameteri(yt,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&Rn(I)}function V(I){let M=I.textures;for(let K=0,At=M.length;K<At;K++){let st=M[K];if(D(st)&&st.mipmapsAutoUpdate===!0){let ot=L(I),Ft=i.get(st).__webglTexture;e.bindTexture(ot,Ft),T(ot),e.unbindTexture()}}}let Fe=[];function fe(I){if(I.samples>0){if(tt(I)===!1){let M=I.textures,K=I.width,At=I.height,st=n.COLOR_BUFFER_BIT,ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(I),yt=M.length>1;if(yt)for(let Yt=0;Yt<M.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Yt=0;Yt<M.length;Yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);let H=i.get(M[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,K,At,0,0,K,At,st,n.NEAREST),l===!0&&(Fe.length=0,Fe.push(n.COLOR_ATTACHMENT0+Yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Fe.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Yt=0;Yt<M.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);let H=i.get(M[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,H,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let M=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Zt(I){return Math.min(s.maxSamples,I.samples)}function tt(I){let M=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ve(I){let M=a.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function kt(I,M){let K=I.colorSpace,At=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==jr&&K!==is&&(on.getTransfer(K)===yn?(At!==Li||st!==ri)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",K)),M}function ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ye,this.resetTextureUnits=ut,this.getTextureUnits=Nt,this.setTextureUnits=ae,this.setTexture2D=jt,this.setTexture2DArray=Rt,this.setTexture3D=Ct,this.setTextureCube=wt,this.rebindTextures=Tn,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Rn,this.setupFrameBufferTexture=en,this.useMultisampledRTT=tt,this.dispose=rt}function Lx(n,t){function e(i,s=is){let r,a=on.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yh)return n.BYTE;if(i===vh)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===wh)return n.RGB;if(i===Li)return n.RGBA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Tl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Da||i===Na||i===Fa||i===Ua)if(a===yn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Il||i===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Nl||i===Fl||i===Ul||i===Ol||i===Oa||i===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Nl)return a===yn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Kl||i===jl||i===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===tc||i===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===yn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===ka||i===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new da(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Hi({vertexShader:Dx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new _s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends ki{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,x=null,w=typeof XRWebGLBinding<"u",g=new $h,m={},b=e.getContextAttributes(),D=null,T=null,L=[],C=[],y=new ve,E=null,Y=null,B=new ti;B.viewport=new Cn;let Q=new ti;Q.viewport=new Cn;let nt=[B,Q],ht=new _l,W=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Et){let jt=L[Et];return jt===void 0&&(jt=new _r,L[Et]=jt),jt.getTargetRaySpace()},this.getControllerGrip=function(Et){let jt=L[Et];return jt===void 0&&(jt=new _r,L[Et]=jt),jt.getGripSpace()},this.getHand=function(Et){let jt=L[Et];return jt===void 0&&(jt=new _r,L[Et]=jt),jt.getHandSpace()};function at(Et){let jt=C.indexOf(Et.inputSource);if(jt===-1)return;let Rt=L[jt];Rt!==void 0&&(Rt.update(Et.inputSource,Et.frame,c||a),Rt.dispatchEvent({type:Et.type,data:Et.inputSource}))}function it(){s.removeEventListener("select",at),s.removeEventListener("selectstart",at),s.removeEventListener("selectend",at),s.removeEventListener("squeeze",at),s.removeEventListener("squeezestart",at),s.removeEventListener("squeezeend",at),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",mt);for(let Et=0;Et<L.length;Et++){let jt=C[Et];jt!==null&&(C[Et]=null,L[Et].disconnect(jt))}W=null,rt=null,g.reset();for(let Et in m)delete m[Et];if(t.setRenderTarget(D),f=null,d=null,p=null,s=null,T=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),Y!==null){let Et=Y.camera;Et.fov=Y.fov,Et.zoom=Y.zoom,Et.updateProjectionMatrix(),Y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Et){r=Et,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Et){o=Et,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Et){c=Et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Et){if(s=Et,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",at),s.addEventListener("selectstart",at),s.addEventListener("selectend",at),s.addEventListener("squeeze",at),s.addEventListener("squeezestart",at),s.addEventListener("squeezeend",at),s.addEventListener("end",it),s.addEventListener("inputsourceschange",mt),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ct=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=b.stencil?ns:Qi,Ct=b.stencil?Bs:Pi);let gt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new di(d.textureWidth,d.textureHeight,{format:Li,type:ri,depthTexture:new ts(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new di(f.framebufferWidth,f.framebufferHeight,{format:Li,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function mt(Et){for(let jt=0;jt<Et.removed.length;jt++){let Rt=Et.removed[jt],Ct=C.indexOf(Rt);Ct>=0&&(C[Ct]=null,L[Ct].disconnect(Rt))}for(let jt=0;jt<Et.added.length;jt++){let Rt=Et.added[jt],Ct=C.indexOf(Rt);if(Ct===-1){for(let gt=0;gt<L.length;gt++)if(gt>=C.length){C.push(Rt),Ct=gt;break}else if(C[gt]===null){C[gt]=Rt,Ct=gt;break}if(Ct===-1)break}let wt=L[Ct];wt&&wt.connect(Rt)}}function pt(Et,jt){jt===null?Et.matrixWorld.copy(Et.matrix):Et.matrixWorld.multiplyMatrices(jt.matrixWorld,Et.matrix),Et.matrixWorldInverse.copy(Et.matrixWorld).invert()}this.updateCamera=function(Et){if(s===null)return;let jt=Et.near,Rt=Et.far;g.texture!==null&&(g.depthNear>0&&(jt=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),ht.near=Q.near=B.near=jt,ht.far=Q.far=B.far=Rt,(W!==ht.near||rt!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),W=ht.near,rt=ht.far),ht.layers.mask=Et.layers.mask|6,B.layers.mask=ht.layers.mask&-5,Q.layers.mask=ht.layers.mask&-3;let Ct=Et.parent,wt=ht.cameras;pt(ht,Ct);for(let gt=0;gt<wt.length;gt++)pt(wt[gt],Ct);ht.projectionMatrix.copy(B.projectionMatrix),ht.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y===null&&Et.isPerspectiveCamera&&(Y={camera:Et,fov:Et.fov,zoom:Et.zoom}),ut(Et,ht,Ct)};function ut(Et,jt,Rt){Rt===null?Et.matrix.copy(jt.matrixWorld):(Et.matrix.copy(Rt.matrixWorld),Et.matrix.invert(),Et.matrix.multiply(jt.matrixWorld)),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.updateMatrixWorld(!0),Et.projectionMatrix.copy(jt.projectionMatrix),Et.projectionMatrixInverse.copy(jt.projectionMatrixInverse),Et.isPerspectiveCamera&&(Et.fov=Wo*2*Math.atan(1/Et.projectionMatrix.elements[5]),Et.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Et){l=Et,d!==null&&(d.fixedFoveation=Et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ht)},this.getCameraTexture=function(Et){return m[Et]};let Nt=null;function ae(Et,jt){if(u=jt.getViewerPose(c||a),x=jt,u!==null){let Rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let Ct=!1;Rt.length!==ht.cameras.length&&(ht.cameras.length=0,Ct=!0);for(let ee=0;ee<Rt.length;ee++){let Ne=Rt[ee],Oe=null;if(f!==null)Oe=f.getViewport(Ne);else{let He=p.getViewSubImage(d,Ne);Oe=He.viewport,ee===0&&(t.setRenderTargetTextures(T,He.colorTexture,He.depthStencilTexture),t.setRenderTarget(T))}let Ee=nt[ee];Ee===void 0&&(Ee=new ti,Ee.layers.enable(ee),Ee.viewport=new Cn,nt[ee]=Ee),Ee.matrix.fromArray(Ne.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ne.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ee===0&&(ht.matrix.copy(Ee.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),Ct===!0&&ht.cameras.push(Ee)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=i.getBinding();let ee=p.getDepthInformation(Rt[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(wt&&wt.includes("camera-access")&&w){t.state.unbindTexture(),p=i.getBinding();for(let ee=0;ee<Rt.length;ee++){let Ne=Rt[ee].camera;if(Ne){let Oe=m[Ne];Oe||(Oe=new da,m[Ne]=Oe);let Ee=p.getCameraImage(Ne);Oe.sourceTexture=Ee}}}}for(let Rt=0;Rt<L.length;Rt++){let Ct=C[Rt],wt=L[Rt];Ct!==null&&wt!==void 0&&wt.update(Ct,jt,c||a)}Nt&&Nt(Et,jt),jt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:jt}),x=null}let ye=new xf;ye.setAnimationLoop(ae),this.setAnimationLoop=function(Et){Nt=Et},this.dispose=function(){}}},Fx=new un,Rf=new We;Rf.set(-1,0,0,0,1,0,0,0,1);function Ux(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Lh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,D,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),w(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,D):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ii&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ii&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),D=b.envMap,T=b.envMapRotation;D&&(g.envMap.value=D,g.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(T)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,D){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=D*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ii&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ox(n,t,e,i){let s={},r={};function a(b,D){let T=D.program;i.uniformBlockBinding(b,T,s[b.id])}function o(b,D){let T=s[b.id];T===void 0&&(x(b),T=l(b),s[b.id]=T,b.addEventListener("dispose",g));let L=D.program;i.updateUBOMapping(b,L);let C=t.render.frame;r[b.id]!==C&&(c(b),r[b.id]=C)}function l(b){let D=n.createBuffer(),T=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,T,L),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function c(b){let D=s[b.id],T=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let C=0,y=T.length;C<y;C++){let E=T[C];if(Array.isArray(E))for(let Y=0,B=E.length;Y<B;Y++)u(E[Y],C,Y,L);else u(E,C,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,D,T,L){if(d(b,D,T,L)===!0){let C=b.__offset,y=b.value;if(Array.isArray(y)){let E=0;for(let Y=0;Y<y.length;Y++){let B=y[Y],Q=w(B,!0);p(B,b.__data,E),E+=Q.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,b.__data)}}function p(b,D,T){typeof b=="number"||typeof b=="boolean"?D[T]=b:b.isMatrix3?(D[T]=b.elements[0],D[T+1]=b.elements[1],D[T+2]=b.elements[2],D[T+3]=0,D[T+4]=b.elements[3],D[T+5]=b.elements[4],D[T+6]=b.elements[5],D[T+7]=0,D[T+8]=b.elements[6],D[T+9]=b.elements[7],D[T+10]=b.elements[8],D[T+11]=0):ArrayBuffer.isView(b)?D.set(b.subarray(0,D.length-T),T):b.toArray(D,T)}function d(b,D,T,L){let C=b.value,y=D+"_"+T;if(Array.isArray(C)){L[y]===void 0&&(L[y]=[]);let E=L[y],Y=!1;for(let B=0;B<C.length;B++)f(C[B],E,B)===!0&&(Y=!0);return Y}return f(C,L,y)}function f(b,D,T){if(D[T]===void 0)return typeof b=="number"||typeof b=="boolean"?D[T]=b:ArrayBuffer.isView(b)?D[T]=b.slice():D[T]=b.clone(),!0;{let L=D[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return D[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(L.equals(b)===!1)return L.copy(b),!0}}return!1}function x(b){let D=b.uniforms,T=0,L=16;for(let y=0,E=D.length;y<E;y++){let Y=Array.isArray(D[y])?D[y]:[D[y]];for(let B=0,Q=Y.length;B<Q;B++){let nt=Y[B],ht=Array.isArray(nt.value)?nt.value:[nt.value],W=Array.isArray(D[y])||Array.isArray(nt.value),rt=T;for(let it=0,mt=ht.length;it<mt;it++){let pt=ht[it],ut=w(pt,W),Nt=T%L,ae=Nt%ut.boundary,ye=Nt+ae;T+=ae,ye!==0&&L-ye<ut.storage&&(T+=L-ye),it===0&&(rt=T),T+=ut.storage}let at=nt.type==="int"?Int32Array:nt.type==="uint"?Uint32Array:Float32Array;nt.__data=new at((T-rt)/Float32Array.BYTES_PER_ELEMENT),nt.__offset=rt}}let C=T%L;return C>0&&(T+=L-C),b.__size=T,b.__cache={},this}function w(b,D){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=16,T.storage=48):b.isMatrix4?(T.boundary=16,T.storage=64):b.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",b),D===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function g(b){let D=b.target;D.removeEventListener("dispose",g),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function Bx(){return Wi===null&&(Wi=new ra(kx,16,16,Ss,Ii),Wi.name="DFG_LUT",Wi.minFilter=ei,Wi.magFilter=ei,Wi.wrapS=Oi,Wi.wrapT=Oi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var cc=class{constructor(t={}){let{canvas:e=Od(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ri}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let w=f,g=new Set([Rl,Al,El]),m=new Set([ri,Pi,Rr,Bs,bl,wl]),b=new Uint32Array(4),D=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},L=null,C=null,y=[],E=[],Y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,Q=!1,nt=null,ht=null,W=null,rt=null;this._outputColorSpace=Qn;let at=0,it=0,mt=null,pt=-1,ut=null,Nt=new Cn,ae=new Cn,ye=null,Et=new Xe(0),jt=0,Rt=e.width,Ct=e.height,wt=1,gt=null,Kt=null,ee=new Cn(0,0,Rt,Ct),Ne=new Cn(0,0,Rt,Ct),Oe=!1,Ee=new gs,He=new Zo,dn=!1,Ze=!1,en=new un,Ln=new J,Mn=new Cn,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tn=!1;function Ke(){return mt===null?wt:1}let V=i;function Fe(v,F){return e.getContext(v,F)}let fe,Zt,tt,Ve,kt,ue,I,M,K,At,st,ot,Ft,yt,St,Yt,H,Tt,_t,vt,Dt,Ht,me;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),V===null){let F="webgl2";if(V=Fe(F,v),V===null)throw Fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(v){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),Ge("WebGLRenderer: "+v.message),v}function Ie(){fe=new Kg(V),fe.init(),Dt=new Lx(V,fe),Zt=new Bg(V,fe,t,Dt),tt=new Px(V,fe),Zt.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),ht=V.createFramebuffer(),W=V.createFramebuffer(),rt=V.createFramebuffer(),Ve=new Qg(V),kt=new gx,ue=new Ix(V,fe,tt,kt,Zt,Dt,Ve),I=new $g(B),M=new e0(V),Ht=new Og(V,M),K=new jg(V,M,Ve,Ht),At=new e_(V,K,M,Ht,Ve),Tt=new t_(V,Zt,ue),St=new zg(kt),st=new mx(B,I,fe,Zt,Ht,St),ot=new Ux(B,kt),Ft=new xx,yt=new wx(fe),H=new Ug(B,I,tt,At,x,l),Yt=new Cx(B,At,Zt),me=new Ox(V,Ve,Zt,tt),_t=new kg(V,fe,Ve),vt=new Jg(V,fe,Ve),Ve.programs=st.programs,B.capabilities=Zt,B.extensions=fe,B.properties=kt,B.renderLists=Ft,B.shadowMap=Yt,B.state=tt,B.info=Ve}w!==ri&&(Y=new i_(w,e.width,e.height,o,s,r));let Ut=new Kh(B,V);this.xr=Ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let v=fe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=fe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(v){v!==void 0&&(wt=v,this.setSize(Rt,Ct,!1))},this.getSize=function(v){return v.set(Rt,Ct)},this.setSize=function(v,F,j=!0){if(Ut.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=v,Ct=F,e.width=Math.floor(v*wt),e.height=Math.floor(F*wt),j===!0&&(e.style.width=v+"px",e.style.height=F+"px"),Y!==null&&Y.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Rt*wt,Ct*wt).floor()},this.setDrawingBufferSize=function(v,F,j){Rt=v,Ct=F,wt=j,e.width=Math.floor(v*j),e.height=Math.floor(F*j),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(w===ri){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Nt)},this.getViewport=function(v){return v.copy(ee)},this.setViewport=function(v,F,j,q){v.isVector4?ee.set(v.x,v.y,v.z,v.w):ee.set(v,F,j,q),tt.viewport(Nt.copy(ee).multiplyScalar(Ke()).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,F,j,q){v.isVector4?Ne.set(v.x,v.y,v.z,v.w):Ne.set(v,F,j,q),tt.scissor(ae.copy(Ne).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(v){tt.setScissorTest(Oe=v)},this.setOpaqueSort=function(v){gt=v},this.setTransparentSort=function(v){Kt=v},this.getClearColor=function(v){return v.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,j=!0){let q=0;if(v){let et=!1;if(mt!==null){let Bt=mt.texture.format;et=g.has(Bt)}if(et){let Bt=mt.texture.type,$t=m.has(Bt),Vt=H.getClearColor(),qt=H.getClearAlpha(),ie=Vt.r,_e=Vt.g,Te=Vt.b;$t?(b[0]=ie,b[1]=_e,b[2]=Te,b[3]=qt,V.clearBufferuiv(V.COLOR,0,b)):(D[0]=ie,D[1]=_e,D[2]=Te,D[3]=qt,V.clearBufferiv(V.COLOR,0,D))}else q|=V.COLOR_BUFFER_BIT}F&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),nt=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),H.dispose(),Ft.dispose(),yt.dispose(),ue.dispose(),kt.dispose(),I.dispose(),At.dispose(),K.dispose(),Ht.dispose(),me.dispose(),st.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",ne),Ut.removeEventListener("sessionend",te),S.stop()};function Me(v){v.preventDefault(),Ch("WebGLRenderer: Context Lost."),Q=!0}function Be(){Ch("WebGLRenderer: Context Restored."),Q=!1;let v=Ve.autoReset,F=Yt.enabled,j=Yt.autoUpdate,q=Yt.needsUpdate,et=Yt.type;Ie(),Ve.autoReset=v,Yt.enabled=F,Yt.autoUpdate=j,Yt.needsUpdate=q,Yt.type=et}function Xt(v){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function A(v){let F=v.target;F.removeEventListener("dispose",A),_(F)}function _(v){G(v),kt.remove(v)}function G(v){let F=kt.get(v).programs;F!==void 0&&(F.forEach(function(j){st.releaseProgram(j)}),v.isShaderMaterial&&st.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,j,q,et,Bt){F===null&&(F=Rn);let $t=et.isMesh&&et.matrixWorld.determinantAffine()<0,Vt=Lt(v,F,j,q,et);tt.setMaterial(q,$t);let qt=j.index,ie=1;if(q.wireframe===!0){if(qt=K.getWireframeAttribute(j),qt===void 0)return;ie=2}let _e=j.drawRange,Te=j.attributes.position,re=_e.start*ie,Pe=(_e.start+_e.count)*ie;Bt!==null&&(re=Math.max(re,Bt.start*ie),Pe=Math.min(Pe,(Bt.start+Bt.count)*ie)),qt!==null?(re=Math.max(re,0),Pe=Math.min(Pe,qt.count)):Te!=null&&(re=Math.max(re,0),Pe=Math.min(Pe,Te.count));let xn=Pe-re;if(xn<0||xn===1/0)return;Ht.setup(et,q,Vt,j,qt);let P,N=_t;if(qt!==null&&(P=M.get(qt),N=vt,N.setIndex(P)),et.isMesh)q.wireframe===!0?(tt.setLineWidth(q.wireframeLinewidth*Ke()),N.setMode(V.LINES)):N.setMode(V.TRIANGLES);else if(et.isLine){let O=q.linewidth;O===void 0&&(O=1),tt.setLineWidth(O*Ke()),et.isLineSegments?N.setMode(V.LINES):et.isLineLoop?N.setMode(V.LINE_LOOP):N.setMode(V.LINE_STRIP)}else et.isPoints?N.setMode(V.POINTS):et.isSprite&&N.setMode(V.TRIANGLES);if(et.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))N.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let O=et._multiDrawStarts,U=et._multiDrawCounts,It=et._multiDrawCount,bt=qt?M.get(qt).bytesPerElement:1,Jt=kt.get(q).currentProgram.getUniforms();for(let de=0;de<It;de++)Jt.setValue(V,"_gl_DrawID",de),N.render(O[de]/bt,U[de])}else if(et.isInstancedMesh)N.renderInstances(re,xn,et.count);else if(j.isInstancedBufferGeometry){let O=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,U=Math.min(j.instanceCount,O);N.renderInstances(re,xn,U)}else N.render(re,xn)};function ct(v,F,j,q){nt!==null&&v.isNodeMaterial&&nt.setObject(q,v),dn===!0&&St.setState(v,j,!1),v.transparent===!0&&v.side===Mi&&v.forceSinglePass===!1?(v.side=ii,v.needsUpdate=!0,Mt(v,F,q),v.side=Ms,v.needsUpdate=!0,Mt(v,F,q),v.side=Mi):Mt(v,F,q)}this.compile=function(v,F,j=null){j===null&&(j=v),nt!==null&&nt.renderStart(v,F,j),C=yt.get(j),C.init(F),E.push(C),j.traverseVisible(function(et){et.isLight&&et.layers.test(F.layers)&&(C.pushLight(et),et.castShadow&&C.pushShadow(et))}),v!==j&&v.traverseVisible(function(et){et.isLight&&et.layers.test(F.layers)&&(C.pushLight(et),et.castShadow&&C.pushShadow(et))}),C.setupLights(),nt!==null&&nt.updateLights(C.state.lightsArray),Ze=this.localClippingEnabled,dn=St.init(this.clippingPlanes,Ze),dn===!0&&St.setGlobalState(this.clippingPlanes,F),nt!==null&&Yt.render(C.state.shadowsArray,j,F);let q=new Set;return v.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Bt=et.material;if(Bt)if(Array.isArray(Bt))for(let $t=0;$t<Bt.length;$t++){let Vt=Bt[$t];ct(Vt,j,F,et),q.add(Vt)}else ct(Bt,j,F,et),q.add(Bt)}),C=E.pop(),nt!==null&&nt.renderEnd(),q},this.compileAsync=function(v,F,j=null){let q=this.compile(v,F,j);return new Promise(et=>{function Bt(){if(q.forEach(function($t){let qt=kt.get($t).currentProgram;(qt===void 0||qt.isReady())&&q.delete($t)}),q.size===0){et(v);return}setTimeout(Bt,10)}fe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Pt=null;function se(v){Pt&&Pt(v)}function ne(){S.stop()}function te(){S.start()}let S=new xf;S.setAnimationLoop(se),typeof self<"u"&&S.setContext(self),this.setAnimationLoop=function(v){Pt=v,Ut.setAnimationLoop(v),v===null?S.stop():S.start()},Ut.addEventListener("sessionstart",ne),Ut.addEventListener("sessionend",te),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;nt!==null&&nt.renderStart(v,F);let j=Ut.enabled===!0&&Ut.isPresenting===!0,q=Y!==null&&(mt===null||j)&&Y.begin(B,mt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),v.isScene===!0&&v.onBeforeRender(B,v,F,mt),C=yt.get(v,E.length),C.init(F),C.state.textureUnits=ue.getTextureUnits(),E.push(C),en.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?He.setFromArrayCamera(F):Ee.setFromProjectionMatrix(en,yi,F.reversedDepth),Ze=this.localClippingEnabled,dn=St.init(this.clippingPlanes,Ze),L=Ft.get(v,y.length),L.init(),y.push(L),this.info.render.frame++,Ut.enabled===!0&&Ut.isPresenting===!0){let $t=B.xr.getDepthSensingMesh();$t!==null&&h($t,F,-1/0,B.sortObjects)}h(v,F,0,B.sortObjects),L.finish(),nt!==null&&nt.updateLights(C.state.lightsArray),B.sortObjects===!0&&L.sort(gt,Kt),Tn=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Tn&&H.addToRenderList(L,v),this.info.autoReset===!0&&this.info.reset(),dn===!0&&St.beginShadows();let et=C.state.shadowsArray;if(Yt.render(et,v,F),dn===!0&&St.endShadows(),(q&&Y.hasRenderPass())===!1){let $t=L.opaque,Vt=L.transmissive;if(C.setupLights(),F.isArrayCamera){let qt=F.cameras;if(Vt.length>0)for(let ie=0,_e=qt.length;ie<_e;ie++){let Te=qt[ie];k($t,Vt,v,Te)}Tn&&H.render(v);for(let ie=0,_e=qt.length;ie<_e;ie++){let Te=qt[ie];R(L,v,Te,Te.viewport)}}else Vt.length>0&&k($t,Vt,v,F),Tn&&H.render(v),R(L,v,F)}mt!==null&&it===0&&(ue.updateMultisampleRenderTarget(mt),ue.updateRenderTargetMipmap(mt)),q&&Y.end(B),v.isScene===!0&&v.onAfterRender(B,v,F),Ht.resetDefaultState(),pt=-1,ut=null,E.pop(),E.length>0?(C=E[E.length-1],ue.setTextureUnits(C.state.textureUnits),dn===!0&&St.setGlobalState(B.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?L=y[y.length-1]:L=null,nt!==null&&nt.renderEnd()};function h(v,F,j,q){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)j=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)C.pushLight(v),v.castShadow&&C.pushShadow(v);else if(v.isSprite){let $t=F.isArrayCamera?He:Ee;if(!v.frustumCulled||v.intersectsFrustum($t)){q&&Mn.setFromMatrixPosition(v.matrixWorld).applyMatrix4(en);let Vt=At.update(v),qt=v.material;qt.visible&&L.push(v,Vt,qt,j,Mn.z,null,F)}}else if(v.isMesh||v.isLine||v.isPoints){let $t=F.isArrayCamera?He:Ee;if(!v.frustumCulled||v.intersectsFrustum($t)){let Vt=At.update(v),qt=v.material;if(q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Mn.copy(v.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Mn.copy(Vt.boundingSphere.center)),Mn.applyMatrix4(v.matrixWorld).applyMatrix4(en)),Array.isArray(qt)){let ie=Vt.groups;for(let _e=0,Te=ie.length;_e<Te;_e++){let re=ie[_e],Pe=qt[re.materialIndex];Pe&&Pe.visible&&L.push(v,Vt,Pe,j,Mn.z,re,F)}}else qt.visible&&L.push(v,Vt,qt,j,Mn.z,null,F)}}}let Bt=v.children;for(let $t=0,Vt=Bt.length;$t<Vt;$t++)h(Bt[$t],F,j,q)}function R(v,F,j,q){let{opaque:et,transmissive:Bt,transparent:$t}=v;C.setupLightsView(j),dn===!0&&St.setGlobalState(B.clippingPlanes,j),q&&tt.viewport(Nt.copy(q)),et.length>0&&z(et,F,j),Bt.length>0&&z(Bt,F,j),$t.length>0&&z($t,F,j),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function k(v,F,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[q.id]===void 0){let re=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[q.id]=new di(1,1,{generateMipmaps:!0,type:re?Ii:ri,minFilter:es,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:on.workingColorSpace})}let Bt=C.state.transmissionRenderTarget[q.id],$t=q.viewport||Nt;Bt.setSize($t.z*B.transmissionResolutionScale,$t.w*B.transmissionResolutionScale);let Vt=B.getRenderTarget(),qt=B.getActiveCubeFace(),ie=B.getActiveMipmapLevel();B.setRenderTarget(Bt),B.getClearColor(Et),jt=B.getClearAlpha(),jt<1&&B.setClearColor(16777215,.5),B.clear(),Tn&&H.render(j);let _e=B.toneMapping;B.toneMapping=Vi;let Te=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),C.setupLightsView(q),dn===!0&&St.setGlobalState(B.clippingPlanes,q),z(v,j,q),ue.updateMultisampleRenderTarget(Bt),ue.updateRenderTargetMipmap(Bt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Pe=0,xn=F.length;Pe<xn;Pe++){let P=F[Pe],{object:N,geometry:O,material:U,group:It}=P;if(U.side===Mi&&N.layers.test(q.layers)){let bt=U.side;U.side=ii,U.needsUpdate=!0,X(N,j,q,O,U,It),U.side=bt,U.needsUpdate=!0,re=!0}}re===!0&&(ue.updateMultisampleRenderTarget(Bt),ue.updateRenderTargetMipmap(Bt))}B.setRenderTarget(Vt,qt,ie),B.setClearColor(Et,jt),Te!==void 0&&(q.viewport=Te),B.toneMapping=_e}function z(v,F,j){let q=F.isScene===!0?F.overrideMaterial:null;for(let et=0,Bt=v.length;et<Bt;et++){let $t=v[et],{object:Vt,geometry:qt,group:ie}=$t,_e=$t.material;_e.allowOverride===!0&&q!==null&&(_e=q),Vt.layers.test(j.layers)&&X(Vt,F,j,qt,_e,ie)}}function X(v,F,j,q,et,Bt){nt!==null&&et.isNodeMaterial&&nt.setObject(v,et),v.onBeforeRender(B,F,j,q,et,Bt),v.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),et.onBeforeRender(B,F,j,q,v,Bt),et.transparent===!0&&et.side===Mi&&et.forceSinglePass===!1?(et.side=ii,et.needsUpdate=!0,B.renderBufferDirect(j,F,q,et,v,Bt),et.side=Ms,et.needsUpdate=!0,B.renderBufferDirect(j,F,q,et,v,Bt),et.side=Mi):B.renderBufferDirect(j,F,q,et,v,Bt),v.onAfterRender(B,F,j,q,et,Bt)}function dt(v){let F=0;for(let j of v)j.texture!==null&&F++;return F}function Mt(v,F,j){F.isScene!==!0&&(F=Rn);let q=kt.get(v),et=C.state.lights,Bt=C.state.shadowsArray,$t=et.state.version,Vt=st.getParameters(v,et.state,Bt,F,j,C.state.lightProbeGridArray),qt=st.getProgramCacheKey(Vt),ie=q.programs;q.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let _e=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;q.envMap=I.get(v.envMap||q.environment,_e),q.envMapRotation=q.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,ie===void 0&&(v.addEventListener("dispose",A),ie=new Map,q.programs=ie,q.programVariants=new Map);let Te=ie.get(qt);if(Te!==void 0){if(q.currentProgram===Te&&q.lightsStateVersion===$t)return Ot(v,Vt),Te}else Vt.uniforms=st.getUniforms(v),nt!==null&&v.isNodeMaterial&&nt.build(v,j,Vt),v.onBeforeCompile(Vt,B),Te=st.acquireProgram(Vt,qt),ie.set(qt,Te),q.uniforms=Vt.uniforms;let re=q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(re.clippingPlanes=St.uniform),Ot(v,Vt),q.needsLights=Z(v),q.lightsStateVersion=$t,q.needsLights&&(re.ambientLightColor.value=et.state.ambient,re.lightProbe.value=et.state.probe,re.sunLights.value=et.state.sun,re.sunLightShadows.value=et.state.sunShadow,re.directionalLights.value=et.state.directional,re.directionalLightShadows.value=et.state.directionalShadow,re.spotLights.value=et.state.spot,re.spotLightShadows.value=et.state.spotShadow,re.rectAreaLights.value=et.state.rectArea,re.ltc_1.value=et.state.rectAreaLTC1,re.ltc_2.value=et.state.rectAreaLTC2,re.pointLights.value=et.state.point,re.pointLightShadows.value=et.state.pointShadow,re.hemisphereLights.value=et.state.hemi,re.sunShadowMatrix.value=et.state.sunShadowMatrix,re.sunShadowCascade.value=et.state.sunShadowCascade,re.directionalShadowMatrix.value=et.state.directionalShadowMatrix,re.spotLightMatrix.value=et.state.spotLightMatrix,re.spotLightMap.value=et.state.spotLightMap,re.pointShadowMatrix.value=et.state.pointShadowMatrix),q.numLightProbeGrids=dt(C.state.lightProbeGridArray),q.currentProgram=Te,q.uniformsList=null,Te}function xt(v,F,j,q,et){let Bt=kt.get(v),$t=Bt.currentProgram.id+","+q+","+et,Vt=Bt.programVariants.get($t);return Vt===void 0?(Vt=Mt(v,F,j),Bt.programVariants.set($t,Vt)):(Bt.currentProgram=Vt,Bt.uniformsList=null,Bt.outputColorSpace=q,Bt.toneMapping=et),Vt}function Wt(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=Pr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Ot(v,F){let j=kt.get(v);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Lt(v,F,j,q,et){F.isScene!==!0&&(F=Rn),ue.resetTextureUnits();let Bt=F.fog,$t=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,Vt=mt===null?B.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:on.workingColorSpace,qt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ie=I.get(q.envMap||$t,qt),_e=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Te=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),re=!!j.morphAttributes.position,Pe=!!j.morphAttributes.normal,xn=!!j.morphAttributes.color,P=Vi;q.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(P=B.toneMapping);let N=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,O=N!==void 0?N.length:0,U=kt.get(q),It=C.state.lights;if(dn===!0&&(Ze===!0||v!==ut)){let je=v===ut&&q.id===pt;St.setState(q,v,je)}let bt=!1,Jt=!1;q.version===U.__version?U.needsLights&&U.lightsStateVersion!==It.state.version||et.isBatchedMesh&&U.batching===!1||!et.isBatchedMesh&&U.batching===!0||et.isBatchedMesh&&U.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&U.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&U.instancing===!1||!et.isInstancedMesh&&U.instancing===!0||et.isSkinnedMesh&&U.skinning===!1||!et.isSkinnedMesh&&U.skinning===!0||et.isInstancedMesh&&U.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&U.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&U.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&U.instancingMorph===!1&&et.morphTexture!==null||U.envMap!==ie||q.fog===!0&&U.fog!==Bt||U.numClippingPlanes!==void 0&&(U.numClippingPlanes!==St.numPlanes||U.numIntersection!==St.numIntersection)||U.vertexAlphas!==_e||U.vertexTangents!==Te||U.morphTargets!==re||U.morphNormals!==Pe||U.morphColors!==xn||U.morphTargetsCount!==O||U.numLightProbeGrids!==dt(C.state.lightProbeGridArray)?bt=!0:(U.outputColorSpace!==Vt||U.toneMapping!==P)&&(Jt=!0):(bt=!0,U.__version=q.version);let de=U.currentProgram;(bt===!0||Jt===!0)&&(de=Jt===!0?xt(q,F,et,Vt,P):Mt(q,F,et),nt&&q.isNodeMaterial&&nt.onUpdateProgram(q,de,U));let Ae=!1,Le=!1,$e=!1,xe=de.getUniforms(),De=U.uniforms;if(tt.useProgram(de.program)&&(Ae=!0,Le=!0,$e=!0),q.id!==pt&&(pt=q.id,Le=!0),Ae||ut!==v){tt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",v.projectionMatrix),xe.setValue(V,"viewMatrix",v.matrixWorldInverse);let Dn=xe.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,Ln.setFromMatrixPosition(v.matrixWorld)),Zt.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),ut!==v&&(ut=v,Le=!0,$e=!0)}if(U.needsLights&&(It.state.sunShadowMap.length>0&&xe.setValue(V,"sunShadowMap",It.state.sunShadowMap,ue),It.state.directionalShadowMap.length>0&&xe.setValue(V,"directionalShadowMap",It.state.directionalShadowMap,ue),It.state.spotShadowMap.length>0&&xe.setValue(V,"spotShadowMap",It.state.spotShadowMap,ue),It.state.pointShadowMap.length>0&&xe.setValue(V,"pointShadowMap",It.state.pointShadowMap,ue)),et.isSkinnedMesh){xe.setOptional(V,et,"bindMatrix"),xe.setOptional(V,et,"bindMatrixInverse");let je=et.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),xe.setValue(V,"boneTexture",je.boneTexture,ue))}et.isBatchedMesh&&(xe.setOptional(V,et,"batchingTexture"),xe.setValue(V,"batchingTexture",et._matricesTexture,ue),xe.setOptional(V,et,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",et._indirectTexture,ue),xe.setOptional(V,et,"batchingColorTexture"),et._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",et._colorsTexture,ue));let an=j.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Tt.update(et,j,de),(Le||U.receiveShadow!==et.receiveShadow)&&(U.receiveShadow=et.receiveShadow,xe.setValue(V,"receiveShadow",et.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Bx()),Le){if(xe.setValue(V,"toneMappingExposure",B.toneMappingExposure),U.needsLights&&ft(De,$e),Bt&&q.fog===!0&&ot.refreshFogUniforms(De,Bt),ot.refreshMaterialUniforms(De,q,wt,Ct,C.state.transmissionRenderTarget[v.id]),U.needsLights&&U.numLightProbeGrids>0){let je=T,Dn=0;for(let jn of C.state.lightProbeGridArray)jn.texture!==null&&(je.textures[Dn]=jn.texture,je.min[Dn]=jn.boundingBox.min,je.max[Dn]=jn.boundingBox.max,je.resolution[Dn]=jn.resolution,Dn++);for(let jn in je)je[jn].length=Dn;De.probesSH.value=je.textures,De.probesMin.value=je.min,De.probesMax.value=je.max,De.probesResolution.value=je.resolution}Pr.upload(V,Wt(U),De,ue)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pr.upload(V,Wt(U),De,ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(V,"center",et.center),xe.setValue(V,"modelViewMatrix",et.modelViewMatrix),xe.setValue(V,"normalMatrix",et.normalMatrix),xe.setValue(V,"modelMatrix",et.matrixWorld),q.uniformsGroups!==void 0){let je=q.uniformsGroups;for(let Dn=0,jn=je.length;Dn<jn;Dn++){let Ni=je[Dn];me.update(Ni,de),me.bind(Ni,de)}}return de}function ft(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Z(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(v,F,j){let q=kt.get(v);q.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),kt.get(v.texture).__webglTexture=F,kt.get(v.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let j=kt.get(v);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,j=0){mt=v,at=F,it=j;let q=null,et=!1,Bt=!1;if(v){let Vt=kt.get(v);if(Vt.__useDefaultFramebuffer!==void 0){tt.bindFramebuffer(V.FRAMEBUFFER,Vt.__webglFramebuffer),Nt.copy(v.viewport),ae.copy(v.scissor),ye=v.scissorTest,tt.viewport(Nt),tt.scissor(ae),tt.setScissorTest(ye),pt=-1;return}else if(Vt.__webglFramebuffer===void 0)ue.setupRenderTarget(v);else if(Vt.__hasExternalTextures)ue.rebindTextures(v,kt.get(v.texture).__webglTexture,kt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let _e=v.depthTexture;if(Vt.__boundDepthTexture!==_e){if(_e!==null&&kt.has(_e)&&(v.width!==_e.image.width||v.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(v)}}let qt=v.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Bt=!0);let ie=kt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ie[F])?q=ie[F][j]:q=ie[F],et=!0):v.samples>0&&ue.useMultisampledRTT(v)===!1?q=kt.get(v).__webglMultisampledFramebuffer:Array.isArray(ie)?q=ie[j]:q=ie,Nt.copy(v.viewport),ae.copy(v.scissor),ye=v.scissorTest}else Nt.copy(ee).multiplyScalar(wt).floor(),ae.copy(Ne).multiplyScalar(wt).floor(),ye=Oe;if(j!==0&&(q=ht),tt.bindFramebuffer(V.FRAMEBUFFER,q)&&tt.drawBuffers(v,q),tt.viewport(Nt),tt.scissor(ae),tt.setScissorTest(ye),et){let Vt=kt.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Vt.__webglTexture,j)}else if(Bt){let Vt=F;for(let qt=0;qt<v.textures.length;qt++){let ie=kt.get(v.textures[qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qt,ie.__webglTexture,j,Vt)}}else if(v!==null&&j!==0){let Vt=kt.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vt.__webglTexture,j)}pt=-1};function le(v){let F=kt.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=Zt.textureFormatReadable(v.format),F.__typeReadable=Zt.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,j,q,et,Bt,$t,Vt=0){if(!(v&&v.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&$t!==void 0&&(qt=qt[$t],Array.isArray(qt)&&(qt=qt[0])),qt){tt.bindFramebuffer(V.FRAMEBUFFER,qt);try{let ie=v.textures[Vt],_e=ie.format,Te=ie.type;v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Vt);let re=le(ie);if(re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-q&&j>=0&&j<=v.height-et&&V.readPixels(F,j,q,et,Dt.convert(_e),Dt.convert(Te),Bt)}finally{let ie=mt!==null?kt.get(mt).__webglFramebuffer:null;tt.bindFramebuffer(V.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(v,F,j,q,et,Bt,$t,Vt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=kt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&$t!==void 0&&(qt=qt[$t],Array.isArray(qt)&&(qt=qt[0])),qt)if(F>=0&&F<=v.width-q&&j>=0&&j<=v.height-et){tt.bindFramebuffer(V.FRAMEBUFFER,qt);let ie=v.textures[Vt],_e=ie.format,Te=ie.type;v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Vt);let re=le(ie);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Pe),V.bufferData(V.PIXEL_PACK_BUFFER,Bt.byteLength,V.STREAM_READ),V.readPixels(F,j,q,et,Dt.convert(_e),Dt.convert(Te),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let xn=mt!==null?kt.get(mt).__webglFramebuffer:null;tt.bindFramebuffer(V.FRAMEBUFFER,xn);let P=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Bd(V,P,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Bt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Pe),V.deleteSync(P),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,j=0){let q=Math.pow(2,-j),et=Math.floor(v.image.width*q),Bt=Math.floor(v.image.height*q),$t=F!==null?F.x:0,Vt=F!==null?F.y:0;ue.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,$t,Vt,et,Bt),tt.unbindTexture()},this.copyTextureToTexture=function(v,F,j=null,q=null,et=0,Bt=0){let $t,Vt,qt,ie,_e,Te,re,Pe,xn,P=v.isCompressedTexture?v.mipmaps[Bt]:v.image;if(j!==null)$t=j.max.x-j.min.x,Vt=j.max.y-j.min.y,qt=j.isBox3?j.max.z-j.min.z:1,ie=j.min.x,_e=j.min.y,Te=j.isBox3?j.min.z:0;else{let xe=Math.pow(2,-et);$t=Math.floor(P.width*xe),Vt=Math.floor(P.height*xe),v.isDataArrayTexture?qt=P.depth:v.isData3DTexture?qt=Math.floor(P.depth*xe):qt=1,ie=0,_e=0,Te=0}q!==null?(re=q.x,Pe=q.y,xn=q.z):(re=0,Pe=0,xn=0);let N=Dt.convert(F.format),O=Dt.convert(F.type),U;F.isData3DTexture?(ue.setTexture3D(F,0),U=V.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ue.setTexture2DArray(F,0),U=V.TEXTURE_2D_ARRAY):(ue.setTexture2D(F,0),U=V.TEXTURE_2D),tt.activeTexture(V.TEXTURE0),tt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),tt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),tt.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);let It=tt.getParameter(V.UNPACK_ROW_LENGTH),bt=tt.getParameter(V.UNPACK_IMAGE_HEIGHT),Jt=tt.getParameter(V.UNPACK_SKIP_PIXELS),de=tt.getParameter(V.UNPACK_SKIP_ROWS),Ae=tt.getParameter(V.UNPACK_SKIP_IMAGES);tt.pixelStorei(V.UNPACK_ROW_LENGTH,P.width),tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,P.height),tt.pixelStorei(V.UNPACK_SKIP_PIXELS,ie),tt.pixelStorei(V.UNPACK_SKIP_ROWS,_e),tt.pixelStorei(V.UNPACK_SKIP_IMAGES,Te);let Le=v.isDataArrayTexture||v.isData3DTexture,$e=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let xe=kt.get(v),De=kt.get(F),an=kt.get(xe.__renderTarget),je=kt.get(De.__renderTarget);tt.bindFramebuffer(V.READ_FRAMEBUFFER,an.__webglFramebuffer),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Dn=0;Dn<qt;Dn++)Le&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(v).__webglTexture,et,Te+Dn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(F).__webglTexture,Bt,xn+Dn)),V.blitFramebuffer(ie,_e,ie+$t,_e+Vt,re,Pe,re+$t,Pe+Vt,V.DEPTH_BUFFER_BIT,V.NEAREST);tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(et!==0||v.isRenderTargetTexture||kt.has(v)){let xe=kt.get(v),De=kt.get(F);tt.bindFramebuffer(V.READ_FRAMEBUFFER,W),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,rt);for(let an=0;an<qt;an++)Le?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xe.__webglTexture,et,Te+an):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xe.__webglTexture,et),$e?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,De.__webglTexture,Bt,xn+an):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,Bt),et!==0?V.blitFramebuffer(ie,_e,ie+$t,_e+Vt,re,Pe,re+$t,Pe+Vt,V.COLOR_BUFFER_BIT,V.NEAREST):$e?V.copyTexSubImage3D(U,Bt,re,Pe,xn+an,ie,_e,$t,Vt):V.copyTexSubImage2D(U,Bt,re,Pe,ie,_e,$t,Vt);tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else $e?v.isDataTexture||v.isData3DTexture?V.texSubImage3D(U,Bt,re,Pe,xn,$t,Vt,qt,N,O,P.data):F.isCompressedArrayTexture?V.compressedTexSubImage3D(U,Bt,re,Pe,xn,$t,Vt,qt,N,P.data):V.texSubImage3D(U,Bt,re,Pe,xn,$t,Vt,qt,N,O,P):v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Bt,re,Pe,$t,Vt,N,O,P.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Bt,re,Pe,P.width,P.height,N,P.data):V.texSubImage2D(V.TEXTURE_2D,Bt,re,Pe,$t,Vt,N,O,P);tt.pixelStorei(V.UNPACK_ROW_LENGTH,It),tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bt),tt.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),tt.pixelStorei(V.UNPACK_SKIP_ROWS,de),tt.pixelStorei(V.UNPACK_SKIP_IMAGES,Ae),Bt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&V.generateMipmap(U),tt.unbindTexture()},this.initRenderTarget=function(v){kt.get(v).__webglFramebuffer===void 0&&ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ue.setTextureCube(v,0):v.isData3DTexture?ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ue.setTexture2DArray(v,0):ue.setTexture2D(v,0),tt.unbindTexture()},this.resetState=function(){at=0,it=0,mt=null,tt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=on._getDrawingBufferColorSpace(t),e.unpackColorSpace=on._getUnpackColorSpace()}};var Va=Math.PI/180,kn=9.81,jh=0,Lr=1,Pf={half:16},mn={z:60,steps:24,rise:.2,run:.24,halfWidth:1.7,back:6};mn.height=mn.steps*mn.rise;mn.length=mn.steps*mn.run;var be={z:120,floor:6,back:8,halfWidth:2.6,wall:.25,open:1.1,sill:.38,top:9,lintel:8.3,glassY:2.8,glassX:.7,panes:4,pane:1},bi={yard:{label:"Yard",blurb:"Flat ground. Nothing helps, so it pays the least.",start:[0,0,0],attacker:[-4.6,1.5,0],cam:{yaw:-1.12,pitch:.22,dist:6.2}},stairs:{label:"Stairs",blurb:"Twenty-four steps behind him. Pays for the fall.",start:[-1.15,mn.height,mn.z],attacker:[-5.2,mn.height+1.5,mn.z],cam:{yaw:-1.07,pitch:.36,dist:7.6,fall:{yaw:.62,pitch:.2,dist:8.6}}},window:{label:"Window",blurb:"An open window with a glass roof below. Pays the most.",start:[-1.25,be.floor,be.z],attacker:[-6.2,be.floor+1.5,be.z],cam:{yaw:-1.27,pitch:.22,dist:7.6,fall:{yaw:.2,pitch:.14,dist:8.4}}}};function Gn(n,t){if(t>be.z-30){let e=t-be.z;return Math.abs(e)>be.halfWidth||n<-be.back||n>be.wall?0:n<0?be.floor:Math.abs(e)<be.open?be.floor+be.sill:be.top}if(t>mn.z-30){let e=t-mn.z;return Math.abs(e)>mn.halfWidth||n<-mn.back||n>=mn.length?0:n<=0?mn.height:Math.max(0,mn.height-(Math.floor(n/mn.run)+1)*mn.rise)}return 0}var pn=[{name:"pelvis",zone:"gut",parent:-1,c:[0,1,0],hh:.05,r:.125,mass:11},{name:"chest",zone:"chest",parent:0,c:[0,1.32,0],hh:.1,r:.145,mass:24,j:[0,1.13,0],type:"st",twist:[0,1,0],cone:32,tw:25},{name:"head",zone:"head",parent:1,c:[0,1.69,0],hh:.03,r:.1,mass:5,j:[0,1.56,0],type:"st",twist:[0,1,0],cone:42,tw:45},{name:"uarm_l",zone:"arm",parent:1,c:[0,1.31,.24],hh:.11,r:.045,mass:2,j:[0,1.46,.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:1},{name:"larm_l",zone:"arm",parent:3,c:[0,1.01,.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,.24],type:"hinge",min:-145,max:0,side:1},{name:"uarm_r",zone:"arm",parent:1,c:[0,1.31,-.24],hh:.11,r:.045,mass:2,j:[0,1.46,-.24],type:"st",twist:[0,-1,0],cone:100,tw:50,side:-1},{name:"larm_r",zone:"arm",parent:5,c:[0,1.01,-.24],hh:.11,r:.04,mass:1.6,j:[0,1.16,-.24],type:"hinge",min:-145,max:0,side:-1},{name:"uleg_l",zone:"thigh",parent:0,c:[0,.7,.1],hh:.15,r:.07,mass:9,j:[0,.92,.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:1},{name:"lleg_l",zone:"shin",parent:7,c:[0,.26,.1],hh:.15,r:.055,mass:5,j:[0,.48,.1],type:"hinge",min:0,max:145,side:1},{name:"uleg_r",zone:"thigh",parent:0,c:[0,.7,-.1],hh:.15,r:.07,mass:9,j:[0,.92,-.1],type:"st",twist:[0,-1,0],cone:75,tw:25,side:-1},{name:"lleg_r",zone:"shin",parent:9,c:[0,.26,-.1],hh:.15,r:.055,mass:5,j:[0,.48,-.1],type:"hinge",min:0,max:145,side:-1}],zt=Object.fromEntries(pn.map((n,t)=>[n.name,t])),ss=.44,Dr=.425,Wa=-.08,Xa=.1,Gx=.205,tn={stretch:1,over0:.05,over1:0,kv:1.5,kp:.7,foot1:.09,foot2:.13,thr:.115,tscale:.8,land:.8,swingK:3200,swingMax:900,clear:.1,bulge:.02,yawK:120,yawD:18,yawMax:35,swingHip:.3,trunkK:1400,trunkD:126,hipMax:400,aimUntil:.85,landAt:1.25,firstAim:.32,brace:0},qa=30*Math.PI/180,Hx=-1,Jh=.85;var Qh=.915,fc={poke:{label:"Poke",kind:"blunt",impulse:39,stun:.03,bleed:0},shove:{label:"Shove",kind:"blunt",impulse:75,stun:.12,bleed:0},bat:{label:"Bat",kind:"blunt",impulse:130,stun:.55,bleed:.35,blow:6.3},pistol:{label:"Pistol",kind:"ballistic",impulse:30,stun:.22,bleed:1},shotgun:{label:"Shotgun",kind:"ballistic",impulse:115,stun:.5,bleed:2.1},ram:{label:"Ram",kind:"blunt",impulse:400,stun:.9,bleed:.5}},Cf={skull:[3.6,6.4,8.6],nose:[2.7,4,0],jaw:[3.4,5.4,7.8],neck:[4.6,7.4,0],collarbone:[3.2,5,7.5],ribs:[2.9,4.8,7.2],spine:[4.2,7.6,0],pelvis:[3.2,5.6,8],humerus:[3.4,5.4,8],forearm:[3.2,5,7.5],wrist:[2.9,4.4,6.5],femur:[3.8,6.4,8.6],kneecap:[3,4.8,7],tibia:[3.4,5.4,7.8],ankle:[3,4.6,6.8]},Vx=1.2,eu=[0,5,30,80],Wx=new Set(["femur","tibia","kneecap","ankle","humerus","forearm","wrist"]),Xx={neck:11,chest:5,gut:4,thigh:6,shin:2.4,arm:2,head:8},qx={neck:999,chest:999,gut:999,thigh:999,shin:26,arm:22,head:999};function ai(n,t,e,i){let s=Math.sin(i/2);return[n*s,t*s,e*s,Math.cos(i/2)]}function Ya(n,t){return[n[3]*t[0]+n[0]*t[3]+n[1]*t[2]-n[2]*t[1],n[3]*t[1]-n[0]*t[2]+n[1]*t[3]+n[2]*t[0],n[3]*t[2]+n[0]*t[1]-n[1]*t[0]+n[2]*t[3],n[3]*t[3]-n[0]*t[0]-n[1]*t[1]-n[2]*t[2]]}function Pn(n,t,e){let i=n[0],s=n[1],r=n[2],a=n[3],o=2*(s*t[2]-r*t[1]),l=2*(r*t[0]-i*t[2]),c=2*(i*t[1]-s*t[0]);return e[0]=t[0]+a*o+(s*c-r*l),e[1]=t[1]+a*l+(r*o-i*c),e[2]=t[2]+a*c+(i*l-s*o),e}var Gs=n=>[-n[0],-n[1],-n[2],n[3]],qe=(n,t,e)=>Math.max(t,Math.min(e,n));function dc(n,t,e){let i=Math.hypot(n,t);return i>e?[n*e/i,t*e/i]:[n,t]}function tu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function If(n){let t=new n.JoltSettings,e=new n.ObjectLayerPairFilterTable(2);e.EnableCollision(jh,Lr),e.EnableCollision(Lr,Lr);let i=new n.BroadPhaseLayerInterfaceTable(2,2);i.MapObjectToBroadPhaseLayer(jh,new n.BroadPhaseLayer(0)),i.MapObjectToBroadPhaseLayer(Lr,new n.BroadPhaseLayer(1)),t.mObjectLayerPairFilter=e,t.mBroadPhaseLayerInterface=i,t.mObjectVsBroadPhaseLayerFilter=new n.ObjectVsBroadPhaseLayerFilterTable(i,2,e,2);let s=new n.JoltInterface(t),r=s.GetPhysicsSystem(),a=r.GetBodyInterface(),o=new n.Quat(0,0,0,1),l=new n.Vec3(0,0,0),c=new n.RVec3(0,0,0),u=new n.Quat(0,0,0,1),p=[];function d(S,h,R,k,z=.85){let X=[(R[0]+k[0])/2,(R[1]+k[1])/2,(R[2]+k[2])/2],dt=[(k[0]-R[0])/2,(k[1]-R[1])/2,(k[2]-R[2])/2],Mt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(dt[0],dt[1],dt[2]),Math.min(.02,dt[0]*.5,dt[1]*.5,dt[2]*.5)),new n.RVec3(X[0],X[1],X[2]),o,n.EMotionType_Static,jh);Mt.mFriction=z,Mt.mRestitution=.03,a.AddBody(a.CreateBody(Mt).GetID(),n.EActivation_DontActivate),h&&p.push({c:X,h:dt,kind:h,level:S})}d("all",null,[-50,-1,-40],[50,0,190]);{let S=mn.z-mn.halfWidth,h=mn.z+mn.halfWidth;d("stairs","landing",[-mn.back,0,S],[0,mn.height,h]);for(let R=0;R<mn.steps-1;R++)d("stairs","step",[R*mn.run,0,S],[(R+1)*mn.run,mn.height-(R+1)*mn.rise,h],.13);d("stairs","wall",[-mn.back,0,S-.3],[mn.length+3,mn.height+2.6,S])}let f={tiles:[],panes:[],frame:[]};{let S=be.z-be.halfWidth,h=be.z+be.halfWidth,R=be.floor;d("window","building",[-be.back,0,S],[be.wall,R,h]),d("window","wall",[0,R,S],[be.wall,be.top,be.z-be.open]),d("window","wall",[0,be.lintel,be.z-be.open],[be.wall,be.top,be.z+be.open]),d("window","sill",[0,R,be.z-be.open],[be.wall,R+be.sill,be.z+be.open]);let k=be.glassX,z=be.z-be.panes*be.pane/2,X=be.glassY,dt=be.panes*be.pane,Mt=.035;for(let Ot=0;Ot<=be.panes;Ot++)d("window","frame",[k+Ot*be.pane-Mt,X-.09,z-Mt],[k+Ot*be.pane+Mt,X-.012,z+dt+Mt]),d("window","frame",[k-Mt,X-.09,z+Ot*be.pane-Mt],[k+dt+Mt,X-.012,z+Ot*be.pane+Mt]);for(let[Ot,Lt]of[[k,z],[k+dt,z],[k,z+dt],[k+dt,z+dt]])d("window","frame",[Ot-.05,0,Lt-.05],[Ot+.05,X-.09,Lt+.05]);let xt=tu(99),Wt=(Ot,Lt,ft,Z,le,v)=>{let F=ft-Ot,j=Z-Lt;if(le===0||F<.3&&j<.3){v.push([Ot,Lt,ft,Z]);return}let q=.32+.36*xt();F>j?(Wt(Ot,Lt,Ot+F*q,Z,le-1,v),Wt(Ot+F*q,Lt,ft,Z,le-1,v)):(Wt(Ot,Lt,ft,Lt+j*q,le-1,v),Wt(Ot,Lt+j*q,ft,Z,le-1,v))};for(let Ot=0;Ot<be.panes;Ot++)for(let Lt=0;Lt<be.panes;Lt++){let Z=k+Ot*be.pane+.04,le=z+Lt*be.pane+.04,v={broken:!1,min:[Z-.04,le-.04],max:[Z+be.pane-.04,le+be.pane-.04],y:X,tiles:[]},F=[];Wt(Z,le,Z+be.pane-2*.04,le+be.pane-2*.04,3,F);for(let j of F){let q=[(j[2]-j[0])/2,.007,(j[3]-j[1])/2],et=[(j[0]+j[2])/2,X,(j[1]+j[3])/2],Bt=new n.BodyCreationSettings(new n.BoxShape(new n.Vec3(q[0],q[1],q[2]),.002),new n.RVec3(et[0],et[1],et[2]),o,n.EMotionType_Static,Lr);Bt.mAllowDynamicOrKinematic=!0,Bt.mFriction=.5,Bt.mRestitution=.15,Bt.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,Bt.mMassPropertiesOverride.mMass=Math.max(.15,q[0]*q[2]*4*12);let $t=a.CreateBody(Bt),Vt=new n.BodyID($t.GetID().GetIndexAndSequenceNumber());a.AddBody(Vt,n.EActivation_DontActivate),v.tiles.push(f.tiles.length),f.tiles.push({id:Vt,home:et,h:q})}f.panes.push(v)}}function x(S,h){S.broken=!0,Ct.glass++;for(let R of S.tiles){let k=f.tiles[R];a.SetMotionType(k.id,n.EMotionType_Dynamic,n.EActivation_Activate),l.Set(h[0]*.45+(ee()-.5)*2.2,h[1]*.5-ee()*1.2,h[2]*.45+(ee()-.5)*2.2);let z=new n.Vec3((ee()-.5)*14,(ee()-.5)*6,(ee()-.5)*14);a.SetLinearAndAngularVelocity(k.id,l,z),n.destroy(z)}He.push({type:"glass",pos:[(S.min[0]+S.max[0])/2,S.y,(S.min[1]+S.max[1])/2]})}function w(){for(let S of f.tiles)a.SetMotionType(S.id,n.EMotionType_Static,n.EActivation_DontActivate),c.Set(S.home[0],S.home[1],S.home[2]),a.SetPositionAndRotation(S.id,c,o,n.EActivation_DontActivate);for(let S of f.panes)S.broken=!1}let g=new n.Skeleton;for(let S of pn)g.AddJoint(new n.JPHString(S.name,S.name.length),S.parent);let m=new n.RagdollSettings;m.mSkeleton=g,m.mParts.resize(pn.length),pn.forEach((S,h)=>{let R=m.mParts.at(h);if(R.SetShape(new n.CapsuleShape(S.hh,S.r)),R.mPosition=new n.RVec3(S.c[0],S.c[1],S.c[2]),R.mRotation=o,R.mMotionType=n.EMotionType_Dynamic,R.mMotionQuality=n.EMotionQuality_LinearCast,R.mObjectLayer=Lr,R.mFriction=.7,R.mRestitution=.05,R.mAngularDamping=.3,R.mOverrideMassProperties=n.EOverrideMassProperties_CalculateInertia,R.mMassPropertiesOverride.mMass=S.mass,S.strength=S.mass*26,!(S.parent<0))if(S.type==="st"){let k=new n.SwingTwistConstraintSettings;k.mSpace=n.EConstraintSpace_WorldSpace,k.mPosition1=k.mPosition2=new n.RVec3(S.j[0],S.j[1],S.j[2]),k.mTwistAxis1=k.mTwistAxis2=new n.Vec3(S.twist[0],S.twist[1],S.twist[2]),k.mPlaneAxis1=k.mPlaneAxis2=new n.Vec3(1,0,0),S.zone==="thigh"&&(k.mTwistAxis1=new n.Vec3(-Math.sin(qa),-Math.cos(qa),0),k.mPlaneAxis1=new n.Vec3(Math.cos(qa),-Math.sin(qa),0)),k.mNormalHalfConeAngle=k.mPlaneHalfConeAngle=S.cone*Va,k.mTwistMinAngle=-S.tw*Va,k.mTwistMaxAngle=S.tw*Va,k.mMaxFrictionTorque=S.mass*.4;for(let z of[k.mSwingMotorSettings,k.mTwistMotorSettings])z.mSpringSettings.mFrequency=8,z.mSpringSettings.mDamping=1,z.mMinTorqueLimit=-S.strength,z.mMaxTorqueLimit=S.strength;R.mToParent=k}else{let k=new n.HingeConstraintSettings;k.mSpace=n.EConstraintSpace_WorldSpace,k.mPoint1=k.mPoint2=new n.RVec3(S.j[0],S.j[1],S.j[2]),k.mHingeAxis1=k.mHingeAxis2=new n.Vec3(0,0,1),k.mNormalAxis1=k.mNormalAxis2=new n.Vec3(1,0,0),k.mLimitsMin=S.min*Va,k.mLimitsMax=S.max*Va,k.mMaxFrictionTorque=S.mass*.4,k.mMotorSettings.mSpringSettings.mFrequency=8,k.mMotorSettings.mSpringSettings.mDamping=1,k.mMotorSettings.mMinTorqueLimit=-S.strength,k.mMotorSettings.mMaxTorqueLimit=S.strength,R.mToParent=k}});let b=0,D=pn.map(S=>(b+=S.mass,S.mass));m.DisableParentChildCollisions();{let S=n.castObject(m.mParts.at(0).mCollisionGroup.GetGroupFilter(),n.GroupFilterTable);for(let h of[zt.uleg_l,zt.lleg_l])for(let R of[zt.uleg_r,zt.lleg_r])S.DisableCollision(h,R)}m.CalculateBodyIndexToConstraintIndex();let T=m.CreateRagdoll(0,0,r);T.AddToPhysicsSystem(n.EActivation_Activate);let L=pn.map((S,h)=>new n.BodyID(T.GetBodyID(h).GetIndexAndSequenceNumber())),C=pn.map((S,h)=>{if(S.parent<0)return null;let R=T.GetConstraint(h-1);return S.type==="st"?n.castObject(R,n.SwingTwistConstraint):n.castObject(R,n.HingeConstraint)}),y=pn.length,E=(S,h)=>{let R=a.GetPosition(L[S]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},Y=(S,h)=>{let R=a.GetLinearVelocity(L[S]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},B=(S,h)=>{let R=a.GetRotation(L[S]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h[3]=R.GetW(),h},Q=(S,h)=>{let R=a.GetAngularVelocity(L[S]);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},nt=S=>E(S,[0,0,0]),ht=(S,h)=>{let R=a.GetPosition(S);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h},W=(S,h)=>{let R=a.GetRotation(S);return h[0]=R.GetX(),h[1]=R.GetY(),h[2]=R.GetZ(),h[3]=R.GetW(),h};function rt(S,h,R,k,z){l.Set(h,R,k),z?(c.Set(z[0],z[1],z[2]),a.AddForce(L[S],l,c,n.EActivation_Activate)):a.AddForce(L[S],l,n.EActivation_Activate)}function at(S,h,R,k,z){l.Set(h,R,k),z?(c.Set(z[0],z[1],z[2]),a.AddImpulse(L[S],l,c)):a.AddImpulse(L[S],l)}let it=new Float32Array(y).fill(1),mt=new Float32Array(y),pt=new Float32Array(y).fill(-1),ut=new Float32Array(y*3),Nt=new Float32Array(y),ae=ai(0,1,0,Hx*qa);function ye(S,h){pn[S].zone==="thigh"&&(h=Ya(ae,h)),u.Set(h[0],h[1],h[2],h[3]),C[S].SetTargetOrientationCS(u)}let Et=1,jt=(S,h,R,k=0)=>Ya(Ya(ai(0,1,0,S),ai(0,0,1,h*R)),ai(1,0,0,k*R*Et));function Rt(){for(let S=1;S<y;S++){let h=it[S]*(1-mt[S]);if(Math.abs(h-pt[S])<.02&&!(h===0&&pt[S]!==0))continue;pt[S]=h;let R=pn[S],k=C[S],z=h>.02?n.EMotorState_Position:n.EMotorState_Off,X=R.strength*h,dt=2.5+5.5*h;if(R.type==="st"){for(let Mt of[k.GetSwingMotorSettings(),k.GetTwistMotorSettings()])Mt.mMinTorqueLimit=-X,Mt.mMaxTorqueLimit=X,Mt.mSpringSettings.mFrequency=dt;k.SetSwingMotorState(z),k.SetTwistMotorState(z)}else{let Mt=k.GetMotorSettings();Mt.mMinTorqueLimit=-X,Mt.mMaxTorqueLimit=X,Mt.mSpringSettings.mFrequency=dt,k.SetMotorState(z)}}}let Ct={},wt=[],gt=[{shin:zt.lleg_l,thigh:zt.uleg_l,side:1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,spot:[0,0],under:!1,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0},{shin:zt.lleg_r,thigh:zt.uleg_r,side:-1,p:[0,0,0],planted:[0,0],swing:!1,t:0,T:.3,from:[0,0,0],to:[0,0],lift:.1,hurt:0,ik:[0,0,0],k:[0,0,0],gap:0,kgap:0,spot:[0,0],under:!1,c:[0,0,0],u:[0,1,0],on:!1,cap:0,Fv:0}],Kt={},ee=tu(1),Ne=0,Oe=bi.yard,Ee="yard",He=[],dn=[];function Ze(){pn.forEach((S,h)=>{c.Set(Oe.start[0]+S.c[0],Oe.start[1]+S.c[1]-.03,Oe.start[2]+S.c[2]),a.SetPositionAndRotation(L[h],c,o,n.EActivation_Activate),l.Set(0,0,0),a.SetLinearAndAngularVelocity(L[h],l,l)}),it.fill(1),mt.fill(0),pt.fill(-1),ut.fill(0),Nt.fill(0),wt.length=0,w(),ee=tu(1234+77*Ne++),Object.assign(Ct,{time:0,clock:0,hits:0,alive:!0,ko:!1,blood:100,bleed:0,stun:0,strength:1,mode:"balance",steps:0,kneels:0,onFeet:0,stumbled:0,impacts:0,damage:0,diedAt:-1,downAt:-1,restTimer:0,wrap:0,done:!1,outcome:"",spent:!1,getups:0,fallHits:0,airHits:0,glass:0,lowest:Oe.start[1]+.93,drop:0,bones:{},paralysed:!1,cantRise:!1}),Object.assign(Kt,{support:1,hT:Oe.start[1]+Qh,hx:-1,hz:0,stepCool:0,lastFoot:-1,buckle:0,buckleDip:0,kneelT:0,kneelMax:3,reel:[0,0],reelT:0,walk:[0,0],fleeAt:1e9,fleeDir:[1,0],flinch:0,lookDown:0,clutch:null,clutchEnd:0,clutchArm:0,phase:[ee()*6.28,ee()*6.28,ee()*6.28,ee()*6.28],lastCom:[Oe.start[0],Oe.start[2]],settle:0,fallT:0,legWound:0,offT:0,grip:1,airT:0,legT:0,load:0,buckleLeg:0,upT:0,rollSide:1,rollT:0,chT:0,gettingUp:!1,upStage:1,upFoot:0,stageT:0,baseT:0,lostT:0,prone:!1,flops:0,fight:0,fallDir:[0,0],lead:0,riseAt:0,riseT:0,riseTries:0,riseFrom:0,riseFail:9});for(let S of gt)S.swing=!1,S.hurt=0,S.broken=0,S.kneeDown=!1,S.planted=[Oe.start[0],Oe.start[2]+S.side*Xa],S.t=0;Rt()}function en(S){Ct.alive&&(Ct.alive=!1,Ct.diedAt=Ct.time,Ct.outcome=S,dn.push({type:"dead",cause:S,pos:nt(zt.head),time:Ct.time}))}function Ln(){Ct.ko||!Ct.alive||(Ct.ko=!0,dn.push({type:"out",pos:nt(zt.head)}))}function Mn(S,h){let R=pn[S].zone,k=pn[S].side===1?"_l":"_r";if(R==="head")return h[0]<-.45?h[1]<-.25?[["jaw",1],["nose",.5]]:[["nose",1],["jaw",.6]]:h[1]<-.55?[["jaw",1]]:[["skull",1]];if(S===zt.chest){let z=h[0]>.45?[["spine",.85],["ribs",.7]]:[["ribs",1]];return(Math.abs(h[2])>.55||h[1]>.5)&&z.push(["collarbone"+(h[2]>=0?"_l":"_r"),.9]),z}return S===zt.pelvis?h[0]>.5?[["pelvis",1],["spine",.6]]:[["pelvis",1]]:R==="arm"?pn[pn[S].parent].zone==="arm"?h[1]<-.35?[["wrist"+k,1]]:[["forearm"+k,1]]:h[1]>.5?[["humerus"+k,.8],["collarbone"+k,.8]]:[["humerus"+k,1]]:R==="thigh"?[["femur"+k,1]]:h[1]>.35?[["kneecap"+k,1]]:h[1]<-.5?[["ankle"+k,1]]:[["tibia"+k,1]]}function Rn(S,h,R,k){let z=S.split("_")[0],X=Cf[z];for(;h>0&&!X[h-1];)h--;let dt=Ct.bones[S]||0;if(h<=dt)return 0;Ct.bones[S]=h;let Mt=S.endsWith("_l")?1:S.endsWith("_r")?-1:0;dn.push({type:"injury",bone:S,base:z,side:Mt,level:h,was:dt,pos:[R[0],R[1],R[2]],cause:k});let xt=Mt===1?zt.uarm_l:zt.uarm_r,Wt=Mt===1?zt.larm_l:zt.larm_r,Ot=Lt=>{Ct.stun=Math.min(1.6,Ct.stun+Lt)};if(z==="femur"||z==="tibia"||z==="kneecap"||z==="ankle"){let Lt=gt[Mt===1?0:1];Lt.hurt=Math.min(1,Math.max(Lt.hurt+.15,h===2?.8:h===3?1:0)),Lt.broken=Math.max(Lt.broken,h),mt[Lt.thigh]=Math.max(mt[Lt.thigh],Lt.hurt*.5),mt[Lt.shin]=Math.max(mt[Lt.shin],Lt.hurt*.6),Kt.legWound=Math.max(Kt.legWound,Lt.hurt),h>=2&&Ct.mode==="balance"&&(Kt.buckle=.24,Kt.buckleDip=.3)}else if(z==="humerus")h>=2&&(mt[xt]=.9,mt[Wt]=Math.max(mt[Wt],.6));else if(z==="forearm"||z==="wrist")h>=2&&(mt[Wt]=.9);else if(z==="collarbone")h>=2&&(mt[xt]=Math.max(mt[xt],.7));else if(z==="ribs")Ot([0,.08,.22,.4][h]),h===3&&wt.push({part:zt.chest,zone:"chest",at:[-.1,0,.05],arterial:!1,rate:1.2,left:12});else if(z==="nose")Ot(.1),h>=2&&wt.push({part:zt.head,zone:"head",at:[-.1,-.02,0],arterial:!1,rate:.5,left:3});else if(z==="jaw")Ot(.12*h);else if(z==="skull")h===3?en("Skull shattered"):h===2&&(Ot(.5),Ln());else if(z==="neck")h>=2?en("Broken neck"):Ot(.3);else if(z==="spine"){if(h>=2){Ct.paralysed=!0;for(let Lt of gt)Lt.hurt=1,mt[Lt.thigh]=1,mt[Lt.shin]=1}}else if(z==="pelvis"&&h>=2){Ct.cantRise=!0;for(let Lt of gt)Lt.hurt=Math.max(Lt.hurt,.5)}return h}function Tn(S,h,R,k){let z=Cf[S.split("_")[0]];Ct.bones[S]&&(h*=1.15),h*=.85+.3*ee();let X=z[2]&&h>=z[2]?3:h>=z[1]?2:h>=z[0]?1:0;return X?Rn(S,X,R,k):0}let Ke=()=>!Ct.paralysed&&!Ct.cantRise&&!(gt[0].broken>=3||gt[1].broken>=3)&&!(gt[0].broken>=2&&gt[1].broken>=2),V=[0,0,0,1],Fe=[0,0,0],fe=[0,0,0];function Zt(S,h,R,k){if(Ct.done)return null;let z=pn[S],X=nt(zt.chest)[1],dt=nt(zt.head)[1],xt=z.zone==="chest"&&h[1]-X>.13||z.zone==="head"&&dt-h[1]>.06?"neck":z.zone;if(Ct.hits++,Ct.mode==="fall"&&(Ct.fallHits++,tt[1]-Gn(tt[0],tt[2])>1.2&&Ct.airHits++),k.impulse>200)for(let[Z,le]of[[S,.5],[zt.chest,.3],[zt.pelvis,.2]])at(Z,R[0]*k.impulse*le,R[1]*k.impulse*le,R[2]*k.impulse*le,Z===S?h:null);else at(S,R[0]*k.impulse,R[1]*k.impulse,R[2]*k.impulse,h);for(let Z=0;Z<y;Z++)Nt[Z]=.45;E(S,fe),B(S,V);let Wt=Pn(Gs(V),[h[0]-fe[0],h[1]-fe[1],h[2]-fe[2]],[0,0,0]);if(k.bleed>0){let Z=k.kind==="blunt";wt.push({part:S,zone:xt,at:Wt,arterial:!Z&&(xt==="neck"||xt==="thigh"),rate:Z?1.6:Xx[xt]*k.bleed,left:Z?7:qx[xt]*k.bleed})}Ct.stun=Math.min(1.6,Ct.stun+k.stun*(xt==="head"?2.2:xt==="neck"?1.4:1)),xt==="head"&&k.kind==="ballistic"?(en("Headshot"),it.fill(0)):xt==="head"&&Ct.stun>1&&Ln();let Ot=[Wt[0]/z.r,Wt[1]/(z.hh+z.r),Wt[2]/z.r];if(k.kind==="ballistic"){let Z=k.impulse>60,le=xt==="neck"?"neck":xt==="head"?"skull":Mn(S,Ot)[0][0],v=le.split("_")[0],[F,j]=v==="skull"?[0,1]:v==="neck"?[Z?.8:.9,0]:v==="spine"?[Z?.5:.65,0]:Wx.has(v)?Z?[.1,.6]:[.25,.25]:v==="pelvis"?Z?[.45,.2]:[.75,.05]:Z?[.2,.3]:[.45,.1],q=ee();q>=F&&Rn(le,q>1-j?3:2,h,"shot")}else{let Z=k.blow??(k.impulse-45)/19;if(xt==="neck")Tn("neck",Z*.6,h,"blow");else for(let[le,v]of Mn(S,Ot))Tn(le,Z*v,h,"blow")}if(xt==="thigh"||xt==="shin"){let Z=gt[z.side===1?0:1];Z.hurt=Math.min(1,Z.hurt+(k.kind==="ballistic"?.7:.45)*(k.bleed>1.5||k.impulse>150?1.4:1)),mt[Z.thigh]=Math.max(mt[Z.thigh],Z.hurt*.5),mt[Z.shin]=Math.max(mt[Z.shin],Z.hurt*.6),Kt.legWound=Math.max(Kt.legWound,Z.hurt)}if(xt==="arm"){mt[S]=.9;let Z=pn.findIndex(le=>le.parent===S);Z>0&&(mt[Z]=.9)}if(k.kind==="ballistic"){let Z=Math.hypot(R[0],R[2])||1,le={neck:1.15,chest:1,gut:1,head:0,arm:.6,thigh:.55,shin:.45}[xt],v=(38+34*ee())*le*(k.impulse>60?.5:1),F=(ee()-.5)*.35,j=qe(((h[0]-fe[0])*Kt.hz+(h[2]-fe[2])*-Kt.hx)/.12,-1,1)*.65,q=R[0]/Z-Kt.hz*j-R[2]/Z*F,et=R[2]/Z+Kt.hx*j+R[0]/Z*F,Bt=Math.hypot(q,et)||1;Kt.reel=[q/Bt*v,et/Bt*v],Kt.reelT=.16}Ct.mode==="balance"&&(Kt.buckle=.22,Kt.buckleDip=({gut:.17,thigh:.24,shin:.22,chest:.09,neck:.07}[xt]||.04)*(k.kind==="ballistic"?1:.6)),Kt.flinch=.2,Kt.clutch=xt,Kt.clutchEnd=k.bleed>0?1e9:Math.max(Kt.clutchEnd<1e8?0:Kt.clutchEnd,Ct.clock+.9+k.stun*4);let Lt=(h[0]-fe[0])*Kt.hz+(h[2]-fe[2])*-Kt.hx,ft=xt==="arm"?-z.side:pn[S].side||(Lt>=0?1:-1);if(mt[ft===1?zt.uarm_l:zt.uarm_r]>.5&&(ft=-ft),Kt.clutchArm=xt==="neck"||xt==="head"?0:ft,xt==="gut"&&k.kind==="ballistic"&&k.impulse<60&&(Kt.lookDown=1.1),k.kind==="ballistic"&&Kt.fleeAt>1e8){Kt.fleeAt=Ct.time+.7+ee()*.7+Kt.lookDown;let Z=(ee()-.5)*1.3,le=Math.hypot(R[0],R[2])||1,v=R[0]/le,F=R[2]/le;Kt.fleeDir=[v*Math.cos(Z)-F*Math.sin(Z),v*Math.sin(Z)+F*Math.cos(Z)]}return dn.push({type:"hit",zone:xt==="thigh"||xt==="shin"?"leg":xt,part:S,pos:h,tool:k,fatal:!Ct.alive}),xt}let tt=[0,0,0],Ve=[0,0,0],kt=[0,0,0,1],ue=[0,0,0],I=[0,0,0],M=[0,0,0,1],K=[0,0,0],At=[0,0,0],st=[0,0,0],ot=[0,0,0],Ft=[0,0,0];function yt(S,h,R,k){l.Set(h,R,k),a.AddTorque(L[S],l,n.EActivation_Activate)}function St(S,h,R,k,z,X){B(S,V),Q(S,At);let dt=V[0],Mt=V[1],xt=V[2],Wt=V[3],Ot=2*(dt*Mt-Wt*xt),Lt=1-2*(dt*dt+xt*xt),ft=2*(Mt*xt+Wt*dt),Z=Math.hypot(k,1,z),le=k/Z,v=1/Z,F=z/Z;return X[0]=h*(Lt*F-ft*v)-R*At[0],X[1]=-R*.3*At[1],X[2]=h*(Ot*v-Lt*le)-R*At[2],X}function Yt(S,h,R,k,z,X){rt(S,k,z,X),rt(h,-k,-z,-X,R)}function H(S,h,R,k,z,X){B(S,V),Q(S,At);let dt=V[0],Mt=V[1],xt=V[2],Wt=V[3],Ot=2*(dt*Mt-Wt*xt),Lt=1-2*(dt*dt+xt*xt),ft=2*(Mt*xt+Wt*dt),Z=Math.hypot(k,1,z),le=k/Z,v=1/Z,F=z/Z;return l.Set(h*(Lt*F-ft*v)-R*At[0],(X||0)-R*.3*At[1],h*(Ot*v-Lt*le)-R*At[2]),a.AddTorque(L[S],l,n.EActivation_Activate),Lt}function Tt(S,h){Pn(kt,[0,Wa,S.side*Xa],st),ot[0]=h[0]-(tt[0]+st[0]),ot[1]=h[1]-(tt[1]+st[1]),ot[2]=h[2]-(tt[2]+st[2]),Pn(Gs(kt),ot,Ft);let R=Math.hypot(Ft[0],Ft[1],Ft[2])||1e-6,k=Ft[0]/R,z=Ft[1]/R,X=Ft[2]/R;R=qe(R,.24,ss+Dr-.004);let dt=Math.acos(qe((ss*ss+R*R-Dr*Dr)/(2*ss*R),-1,1)),Mt=-k,xt=-1-Mt*k,Wt=-Mt*z,Ot=-Mt*X,Lt=Math.hypot(xt,Wt,Ot)||1;xt/=Lt,Wt/=Lt,Ot/=Lt;let ft=Math.cos(dt),Z=Math.sin(dt),le=k*ft+xt*Z,v=z*ft+Wt*Z,F=X*ft+Ot*Z;Ie(S,le,v,F);let j=Math.PI-Math.acos(qe((ss*ss+Dr*Dr-R*R)/(2*ss*Dr),-1,1));C[S.shin].SetTargetAngle(j)}let _t={head:{arm:[1.5,.3,-2.45,.6],spine:.15,neck:.3},neck:{arm:[1,.25,-2.45,.85],spine:.25,neck:.4},chest:{arm:[.6,.2,-2.2,.85],spine:.38,neck:.35},gut:{arm:[.05,.15,-1.45,.85],spine:.6,neck:.4},arm:{arm:[.5,.5,-1.9,.85],spine:.25,neck:.25},thigh:{arm:[.15,0,-.3,.3],spine:.6,neck:.2},shin:{arm:[.25,0,-.2,.3],spine:.7,neck:.15}};function vt(S,h){let R=Kt,k=Ct.clock,z=.03,X=0,dt=0,Mt=R.clutch?_t[R.clutch]:null;Mt&&(z=Mt.spine+(1-Ct.strength)*.25,X=Mt.neck),R.lookDown>0&&(X=.7,z+=.1),R.flinch>0&&(z=-.22,X=-.3),Ct.mode==="down"&&(z+=.15*Math.sin(k*1.3+R.phase[0]),dt=.25*Math.sin(k*.9+R.phase[1])),ye(zt.chest,Ya(ai(0,1,0,z),ai(1,0,0,dt))),ye(zt.head,ai(0,1,0,X));for(let xt of[1,-1]){let Wt=xt===1?zt.uarm_l:zt.uarm_r,Ot=xt===1?zt.larm_l:zt.larm_r,Lt;if(Ct.mode==="rise"&&R.riseT<1.5)Lt=[.75,-.25,-.15];else if(R.flinch>0)Lt=[.5,-.95,-1];else if(Mt&&(R.clutchArm===0||R.clutchArm===xt))Lt=Mt.arm;else if(Ct.mode==="down"){let ft=Math.max(0,Math.sin(k*.8+R.phase[2]+xt));Lt=[.4+1.5*ft*Ct.strength,-.2,-.5-.6*ft]}else{let ft=qe(.12+2.6*S,0,1.45);Lt=[.1+(S>.12?Math.sin(k*13+xt*1.7)*.45*qe(S*3,0,1):0)+.6*S,-ft,-.3-.5*qe(S*3,0,1)]}ye(Wt,jt(Lt[0],Lt[1],xt,Lt[3]||0)),C[Ot].SetTargetAngle(Lt[2])}}function Dt(S){return E(S.shin,S.p),B(S.shin,M),Pn(M,[0,-Gx,0],ot),S.p[0]+=ot[0],S.p[1]+=ot[1],S.p[2]+=ot[2],S.p}let Ht=[0,1,0];function me(S){E(S.shin,fe),B(S.shin,M),Pn(M,Ht,ot);let h=ot[0],R=ot[1],k=ot[2];S.c[0]=fe[0]-.15*h,S.c[1]=fe[1]-.15*R,S.c[2]=fe[2]-.15*k,S.gap=S.c[1]-.055-Gn(S.c[0],S.c[2]),S.k[0]=fe[0]+.22*h,S.k[1]=fe[1]+.22*R,S.k[2]=fe[2]+.22*k,B(S.thigh,V),Pn(V,Ht,ot),S.kgap=Math.min(fe[1]+.15*R-.055,S.k[1]+.07*ot[1]-.07)-Gn(S.k[0],S.k[2])}function Ie(S,h,R,k){let z=-R,X=-k,dt=h,Mt=Math.hypot(dt,X,1+z)||1;ye(S.thigh,[0,-dt/Mt,X/Mt,(1+z)/Mt])}function Ut(S,h){if(Ct.mode==="fall"||Ct.mode==="down")return;Ct.mode="fall",Ct.fellBecause=h||"",Kt.gettingUp=!1;for(let dt of gt)dt.swing=!1;S&&at(zt.chest,S[0],0,S[1]);let R=Kt;R.fight=Ct.alive&&!Ct.ko?qe(.2+.95*Ct.strength,0,1):0,R.fallT=0,R.settle=0;let k=(Ve[0]+I[0])*.5+(S?S[0]/40:0),z=(Ve[2]+I[2])*.5+(S?S[1]/40:0);Math.hypot(k,z)<.3&&(k+=(ue[0]-tt[0])*4,z+=(ue[2]-tt[2])*4),Math.hypot(k,z)<.1&&(k=R.hx,z=R.hz);let X=Math.hypot(k,z);R.fallDir[0]=k/X,R.fallDir[1]=z/X,Dt(gt[0]),Dt(gt[1]),R.lead=gt[0].p[0]*R.fallDir[0]+gt[0].p[2]*R.fallDir[1]<gt[1].p[0]*R.fallDir[0]+gt[1].p[2]*R.fallDir[1]?0:1,dn.push({type:"fall",pos:nt(zt.chest),onFeet:Ct.onFeet})}function Me(S){let h=Kt,R=Ct,k=R.mode==="rise";k&&(h.riseT+=S,h.support=Math.min(1,h.riseT/.8));let z=R.mode==="kneel",X=z||k&&h.riseT<1.9,dt=qe(R.strength,0,1),Mt=Math.sqrt(kn/.95),xt=0,Wt=0,Ot=0,Lt=0;for(let $=0;$<y;$++){let ce=D[$]/b;E($,fe),Y($,Fe),xt+=fe[0]*ce,Wt+=fe[2]*ce,Ot+=Fe[0]*ce,Lt+=Fe[2]*ce}let ft=gt[0],Z=gt[1];Dt(ft),Dt(Z),me(ft),me(Z),Pn(kt,[0,0,1],ot);let le=Math.hypot(ot[0],ot[2]),v=le>.5?(ot[0]*h.hz+ot[2]*-h.hx)/le:0,F=v>.8?ot[0]/le:h.hz,j=v>.8?ot[2]/le:-h.hx;if(z)for(let $ of gt)$.planted[0]=$.k[0]+($.p[0]-$.k[0])*.33,$.planted[1]=$.k[2]+($.p[2]-$.k[2])*.33,!$.kneeDown&&$.kgap<.012&&($.kneeDown=!0,Tn("kneecap"+($.side===1?"_l":"_r"),-Ve[1]*1.3,$.k,"fall"));let q=9;for(let $ of gt)$.swing||(q=Math.min(q,$.gap)),X&&(q=Math.min(q,$.kgap));h.grip+=qe((q<.028?1:0)-h.grip,-S/.09,S/.05),h.airT=h.grip<.5?h.airT+S:0;let et=0,Bt=0,$t=R.hits>0,Vt=Math.hypot(xt-Oe.start[0],Wt-Oe.start[2])>8.5||R.time>h.fleeAt+16;if(!X&&R.bleed>.2&&R.time>h.fleeAt&&dt>.3&&!Vt){let $=(.2+.6*dt)*(1-.45*h.legWound),ce=Math.sin(R.clock*1.1+h.phase[3])*(.25+.9*(1-dt));et=(h.fleeDir[0]*Math.cos(ce)-h.fleeDir[1]*Math.sin(ce))*$,Bt=(h.fleeDir[0]*Math.sin(ce)+h.fleeDir[1]*Math.cos(ce))*$;let he=Math.atan2(h.hz*et-h.hx*Bt,h.hx*et+h.hz*Bt),ge=qe(he,-2.2*S,2.2*S),Je=Math.cos(ge),Re=Math.sin(ge),ln=h.hx*Je+h.hz*Re,cn=-h.hx*Re+h.hz*Je;h.hx=ln,h.hz=cn}h.walk[0]+=(et-h.walk[0])*Math.min(1,S*2),h.walk[1]+=(Bt-h.walk[1])*Math.min(1,S*2);let qt,ie,_e=null;ft.swing?(qt=Z.planted[0],ie=Z.planted[1],_e=Z):Z.swing?(qt=ft.planted[0],ie=ft.planted[1],_e=ft):(qt=(ft.planted[0]+Z.planted[0])/2,ie=(ft.planted[1]+Z.planted[1])/2);let Te=xt-qt,re=Wt-ie,Pe=_e?Gn(_e.planted[0],_e.planted[1]):Math.max(Gn(ft.planted[0],ft.planted[1]),Gn(Z.planted[0],Z.planted[1])),xn=xt+Ot/Mt,P=Wt+Lt/Mt,N=xn-qt,O=P-ie,U=Math.hypot(N,O),It=Math.min(1,U),bt=R.bleed>.2||R.stun>.05,Jt=$t&&bt?1-dt+.35*Math.min(1,R.stun):0,de=R.clock,Ae=b*(.25+4.2*Jt)*(X?.45:1),Le=Ae*(Math.sin(de*1.7+h.phase[0])*.55+Math.sin(de*.63+h.phase[1])*.45),$e=Ae*(Math.sin(de*1.4+h.phase[2])*.55+Math.sin(de*.51+h.phase[3])*.45);h.buckle-=S,$t&&!X&&h.buckle<-.5&&ee()<S*((bt?.12:0)+1.5*Jt+(Math.hypot(h.walk[0],h.walk[1])>.1?.8*h.legWound:0))&&(h.buckle=.24,h.buckleDip=.1+.2*ee()+.12*Jt,h.buckleLeg=_e?_e.side:ee()<.5?1:-1,He.push({type:"buckle",pos:[tt[0],tt[1],tt[2]]}));let xe=1,De=z?qe(h.kneelT/h.kneelMax,0,1)*(1-.6*dt):0,an=Pe+(z?.135+ss*Math.cos(.36+.42*De):X?.5:Qh-.1*(1-dt)),je=!1;if(k&&h.riseT<1&&(an=Pe+h.riseFrom+(.5-h.riseFrom)*(h.riseT/1)),h.buckle>0&&(an-=h.buckleDip),_e&&_e.hurt>0&&(an-=.13*_e.hurt),!X){let $=0,ce=9,he=0;for(let ge of gt){Pn(kt,[0,Wa,ge.side*Xa],st);let Je=Math.hypot((ge.swing?ge.to[0]:ge.planted[0])-tt[0]-st[0],(ge.swing?ge.to[1]:ge.planted[1])-tt[2]-st[2]),Re=Pe-Wa+Math.sqrt(Math.max(0,Jh*Jh-Je*Je));ge.swing?(ce=Re,he=qe((ge.t-.4)/.4,0,1)):Re>$&&($=Re)}$<an&&(an=$,je=!0),he>0&&ce<an&&(an+=(Math.max(ce,Pe+.6)-an)*he)}let Dn=h.hT;h.hT+=qe(an-h.hT,-(je?3.2:2.2)*S,1.1*S);let jn=je?Math.min(0,(h.hT-Dn)/S):0,Ni=dc(N*.9,O*.9,.38);B(zt.pelvis,V),Pn(V,[-1,0,0],ot);let vc=Math.atan2(ot[2]*h.hx-ot[0]*h.hz,ot[0]*h.hx+ot[2]*h.hz);Q(zt.pelvis,At);let no=tn.yawK*vc-tn.yawD*At[1],Ws=Math.sin(de*1.7+h.phase[0])*.55+Math.sin(de*.63+h.phase[1])*.45,Xs=Math.sin(de*1.4+h.phase[2])*.55+Math.sin(de*.51+h.phase[3])*.45;{let $=0;if(z){let Re=[];for(let Se of gt)for(let fn of[!0,!1]){let Fn=fn?Se.k:Se.c,Jn=fn?Se.kgap:Se.gap,Fi=tt[0]-Fn[0],_i=tt[1]-Fn[1],xu=tt[2]-Fn[2],io=Math.hypot(Fi,_i,xu)||1;Re.push({f:Se,knee:fn,from:Fn,ux:Fi/io,uy:_i/io,uz:xu/io,on:Jn<.03&&_i/io>.25,w:0,Fv:0})}let ln=ft.kneeDown||Z.kneeDown,cn=.01+.1*Jt,hn=xt+tn.kv*Ot/Mt+Ws*cn,pe=Wt+tn.kv*Lt/Mt+Xs*cn;for(let Se of gt){let fn=Se.c[0]-Se.k[0],Fn=Se.c[2]-Se.k[2],Jn=fn*fn+Fn*Fn,Fi=Jn>.0025?qe(((hn-Se.k[0])*fn+(pe-Se.k[2])*Fn)/Jn,.05,.95):.3;for(let _i of Re)_i.f===Se&&(_i.w=(_i.knee?1-Fi:Fi)*.5)}let Ye=(ln?qe(b*kn+6e3*(h.hT-tt[1])-900*Ve[1],0,b*kn*1.3):b*kn*.3)*h.support,sn=0,Nn=Se=>qe((.95-Math.hypot(Se.ux,Se.uz)/Se.uy)/.25,0,1);for(let Se of Re){let fn=Ye*Se.w,Fn=b*kn*.6*(1-.5*Se.f.hurt)*Se.uy*Nn(Se);if(!Se.on){sn+=fn;continue}Se.Fv=Math.min(fn,Fn),Se.cap=Fn,sn+=fn-Se.Fv}for(let Se of Re)if(Se.on&&sn>0){let fn=Math.min(sn,Se.cap-Se.Fv);Se.Fv+=fn,sn-=fn}for(let Se of gt)Se.Fv=0,Se.on=!1;for(let Se of Re)if(Se.on){let fn=Se.Fv/Se.uy;Yt(zt.pelvis,Se.f.shin,Se.from,fn*Se.ux,fn*Se.uy,fn*Se.uz),$+=Se.Fv,Se.f.Fv+=Se.Fv,Se.knee&&(Se.f.on=!0)}}else{for(let pe of gt){let Ye=pe.c,sn=tt[0]-Ye[0],Nn=tt[1]-Ye[1],Se=tt[2]-Ye[2],fn=Math.hypot(sn,Nn,Se)||1;pe.u[0]=sn/fn,pe.u[1]=Nn/fn,pe.u[2]=Se/fn,pe.on=!pe.swing&&pe.gap<.03&&pe.u[1]>.25,pe.cap=b*kn*(1.05+.75*dt)*(1-.5*pe.hurt)*(h.buckle>0&&h.buckleLeg===pe.side?.25:1),pe.Fv=0}let Re=ft.on?1:0,ln=Z.on?1:0;if(ft.on&&Z.on){let pe=ft.c,Ye=Z.c,sn=Ye[0]-pe[0],Nn=Ye[2]-pe[2],Se=sn*sn+Nn*Nn,fn=.01+.16*Jt,Fn=(pe[0]+Ye[0])/2,Jn=(pe[2]+Ye[2])/2,Fi=xt+tn.kv*(Ot-h.walk[0])/Mt+tn.kp*(xt-Fn)+Ws*fn,_i=Wt+tn.kv*(Lt-h.walk[1])/Mt+tn.kp*(Wt-Jn)+Xs*fn;ln=Se>.0025?qe(((Fi-pe[0])*sn+(_i-pe[2])*Nn)/Se,0,1):.5,Re=1-ln}let cn=qe(b*kn+12e3*(h.hT-tt[1])-1400*(Ve[1]-jn),0,b*kn*1.9)*h.support,hn=0;gt.forEach((pe,Ye)=>{let sn=cn*(Ye===0?Re:ln);if(!pe.on){hn+=sn;return}pe.Fv=Math.min(sn,pe.cap*pe.u[1]),hn+=sn-pe.Fv});for(let pe of gt)if(pe.on&&hn>0){let Ye=Math.min(hn,pe.cap*pe.u[1]-pe.Fv);pe.Fv+=Ye,hn-=Ye}for(let pe of gt)if(pe.on){let Ye=-(Ve[0]*pe.u[0]+Ve[1]*pe.u[1]+Ve[2]*pe.u[2]),sn=Math.min(pe.Fv/pe.u[1]+tn.brace*(.3+.7*dt)*(1-.6*pe.hurt)*Math.max(0,Ye),pe.cap*1.25);Yt(zt.pelvis,pe.shin,pe.c,sn*pe.u[0],sn*pe.u[1],sn*pe.u[2]),$+=sn*pe.u[1]}else if(!pe.swing&&pe.u[1]>.25){let Ye=qe(40+7e3*pe.gap,40,280)*h.support;Yt(zt.pelvis,pe.shin,pe.c,Ye*pe.u[0],Ye*pe.u[1],Ye*pe.u[2])}}h.load=$;let ce=0,he=0;if($>0){let Re=xt-qt,ln=Wt-ie,cn=Ot-h.walk[0],hn=Lt-h.walk[1];if(ft.on&&Z.on&&!z){let Nn=Z.c[0]-ft.c[0],Se=Z.c[2]-ft.c[2],fn=Math.hypot(Nn,Se)||1,Fn=-Se/fn,Jn=Nn/fn,Fi=(xt-ft.c[0])*Fn+(Wt-ft.c[2])*Jn,_i=cn*Fn+hn*Jn;Re=Fi*Fn,ln=Fi*Jn,cn=_i*Fn,hn=_i*Jn}let pe=z?.2/.5:(_e?tn.foot1:tn.foot2)/.95,Ye=b*(.25+2*Jt),sn=dc(-1500*(Re-h.walk[0]*.3)-330*cn+Ws*Ye,-1500*(ln-h.walk[1]*.3)-330*hn+Xs*Ye,$*pe*(.25+.75*dt));ce=sn[0],he=sn[1]}h.reelT>0&&(h.reelT-=S,ce+=h.reel[0]/.16*h.grip,he+=h.reel[1]/.16*h.grip),rt(zt.pelvis,ce*.5,0,he*.5),rt(zt.chest,ce*.5,0,he*.5);let ge=St(zt.chest,tn.trunkK*(.5+.5*dt)*h.support,tn.trunkD*h.support,Ni[0],Ni[1],[0,0,0]),Je=gt.filter(Re=>Re.on);if(Je.length){let Re=0;for(let Ye of Je)Re+=tn.hipMax*(1-.5*Ye.hurt);let ln=Math.hypot(ge[0],ge[2]),cn=ln>Re?Re/ln:1,hn=ge[0]*cn,pe=ge[2]*cn;yt(zt.chest,hn*.6,0,pe*.6),yt(zt.pelvis,hn*.4,0,pe*.4);for(let Ye of Je){let sn=z?Ye.k:Ye.c,Nn=1/Je.length,Se=tt[0]-sn[0],fn=tt[1]-sn[1],Fn=tt[2]-sn[2],Jn=Se*Se+fn*fn+Fn*Fn;Yt(zt.pelvis,Ye.shin,sn,fn*pe/Jn*Nn,(Fn*hn-Se*pe)/Jn*Nn,-fn*hn/Jn*Nn)}}yt(zt.pelvis,0,qe(no,-tn.yawMax,tn.yawMax)*Math.min(1,$/(b*kn)),0)}h.stepCool-=S;let qs=($,ce)=>{let he=U>1e-4?1/U:0,ge=.02+.2*(1-dt),Je=xn-$.planted[0],Re=P-$.planted[1],ln=Math.exp(Mt*Math.sqrt(xe)*ce*tn.stretch*(.55+.45*dt)),cn=tn.over0+tn.over1*U*dt;return[$.planted[0]+Je*ln+N*he*cn-h.walk[0]/Mt*.55+(ee()-.5)*ge,$.planted[1]+Re*ln+O*he*cn-h.walk[1]/Mt*.55+(ee()-.5)*ge]},Ys=($,ce,he)=>{let ge=he[0]-ce.planted[0],Je=he[1]-ce.planted[1],Re=(.36+.36*dt)*(1-.35*$.hurt);[ge,Je]=dc(ge,Je,Re);let ln=(ge*F+Je*j)*$.side;ln<tn.clear&&(ge+=(tn.clear-ln)*$.side*F,Je+=(tn.clear-ln)*$.side*j);let cn=ce.planted[0]+ge,hn=ce.planted[1]+Je;return[cn,hn,Math.hypot(cn-he[0],hn-he[1])]};if(X){if(!z)for(let $ of gt){let ce=xt+h.hx*-.16+F*$.side*.12,he=Wt+h.hz*-.16+j*$.side*.12,ge=dc(ce-$.planted[0],he-$.planted[1],.9*S);$.planted[0]+=ge[0],$.planted[1]+=ge[1]}}else if(_e){let $=_e===ft?Z:ft;if($.t+=S/$.T,$.t<tn.aimUntil&&!$.tidy){let ce=Ys($,_e,qs(_e,Math.max(0,tn.landAt-$.t)*$.T));$.to[0]+=(ce[0]-$.to[0])*.3,$.to[1]+=(ce[1]-$.to[1])*.3}if($.t>tn.land&&$.gap<.012||$.t>=1.4||$.t>=1&&Gn($.p[0],$.p[2])<Pe-.12){if($.swing=!1,Gn($.p[0],$.p[2])<Pe-.12)return Ut(null,"edge");let ce=Math.hypot($.to[0]-$.p[0],$.to[1]-$.p[2]),he=Math.hypot(Ot,Lt);if(ce>.16&&Gn($.to[0],$.to[1])-Pe>.12){let ge=he>.05?Ot/he:-h.hx,Je=he>.05?Lt/he:-h.hz;return at(zt.pelvis,ge*22,26,Je*22),Ut([ge*62,Je*62],"trip")}$.planted=[$.p[0],$.p[2]],h.stepCool=.03+.12*(1-dt),$t&&!$.tidy&&R.steps++,He.push({type:"step",pos:[$.p[0],Pe,$.p[2]],hurt:$.hurt})}}else{let $=Math.hypot(ft.planted[0]-Z.planted[0],ft.planted[1]-Z.planted[1]),ce=tn.thr-.035*(1-dt),he=U<.06&&Math.hypot(Ot,Lt)<.12&&$>.36&&h.stepCool<-.35&&dt>.45;if(h.stepCool<=0&&(U>ce||he)){let ge,Je;if(he)ge=h.lastFoot===0?1:0,Je=[gt[1-ge].planted[0]+gt[ge].side*F*.2,gt[1-ge].planted[1]+gt[ge].side*j*.2];else{let hn=[0,1].map(Ye=>{let sn=Ys(gt[Ye],gt[1-Ye],qs(gt[1-Ye],tn.firstAim));return{tgt:sn,move:Math.hypot(sn[0]-gt[Ye].p[0],sn[1]-gt[Ye].p[2])}}),pe=Ye=>Ye.tgt[2]-.25*Math.min(Ye.move,.4)+(Ye.move<.08?1:0);ge=Math.abs(pe(hn[0])-pe(hn[1]))<.02?h.lastFoot===0?1:0:pe(hn[0])<pe(hn[1])?0:1,Je=[hn[ge].tgt[0],hn[ge].tgt[1]]}let Re=gt[ge],ln=gt[1-ge];Re.swing=!0,Re.t=0,Re.from=[Re.p[0],Re.p[1],Re.p[2]],Re.to=Je;let cn=Math.hypot(Re.to[0]-Re.p[0],Re.to[1]-Re.p[2]);Re.T=tn.tscale*qe(.15+.24*cn,.17,.34)*(1.3-.3*dt)*(U>.3?.75:1)*(ln.hurt>0?1-.3*ln.hurt:1),Re.lift=Re.hurt>.3?.035:.07+.09*ee()+.05*Math.min(1,U*2),Re.tidy=he,h.lastFoot=ge}}for(let $ of gt){if(Y($.shin,K),z){let he=.36+.42*(qe(h.kneelT/h.kneelMax,0,1)*(1-.6*dt))+.08*Math.sin(R.clock*.9+h.phase[$.side===1?0:1])*(1-dt);Pn(Gs(kt),[h.hx*Math.sin(he)+F*$.side*.1,-Math.cos(he),h.hz*Math.sin(he)+j*$.side*.1],Ft);let ge=Math.hypot(Ft[0],Ft[1],Ft[2])||1;Ie($,Ft[0]/ge,Ft[1]/ge,Ft[2]/ge),C[$.shin].SetTargetAngle(he+Math.PI/2);continue}if($.swing){let ce=qe($.t,0,1),he=ce*ce*(3-2*ce),ge=tn.bulge*Math.sin(Math.PI*ce)*$.side;$.ik[0]=$.from[0]+($.to[0]-$.from[0])*he+F*ge,$.ik[2]=$.from[2]+($.to[1]-$.from[2])*he+j*ge,$.ik[1]=Pe+Math.max($.lift*Math.sin(Math.PI*ce),ce<tn.land?.035:0)-(ce>tn.land?.045*(ce-tn.land)/(1-tn.land):0);let Je=tn.swingK,Re=170*Math.sqrt(tn.swingK/1900),ln=[Je*($.ik[0]-$.p[0])-Re*K[0],Je*($.ik[1]-$.p[1])-Re*K[1],Je*($.ik[2]-$.p[2])-Re*K[2]],cn=Math.hypot(ln[0],ln[1],ln[2]),hn=cn>tn.swingMax?tn.swingMax/cn:1,pe=ln[0]*hn*h.support,Ye=(ln[1]*hn-($.t>1?160:0))*h.support,sn=ln[2]*hn*h.support;rt($.shin,pe,Ye,sn,$.p);{let Nn=tn.swingHip;rt(zt.pelvis,-pe*Nn,-Ye*Nn,-sn*Nn,$.p),rt(zt.chest,-pe*(1-Nn),-Ye*(1-Nn),-sn*(1-Nn),$.p)}}else $.gap<.03&&($.planted[0]+=($.p[0]-$.planted[0])*Math.min(1,S*30),$.planted[1]+=($.p[2]-$.planted[1])*Math.min(1,S*30)),$.ik[0]=$.planted[0],$.ik[1]=Pe,$.ik[2]=$.planted[1];Tt($,$.ik)}vt(It,S),$t&&(R.onFeet+=S,R.stumbled+=Math.hypot(xt-h.lastCom[0],Wt-h.lastCom[1])),h.lastCom[0]=xt,h.lastCom[1]=Wt;let Zs=$=>$.swing?Math.hypot(xt-$.p[0],Wt-$.p[2]):Math.hypot(xt-$.planted[0],Wt-$.planted[1]),$s=Math.min(Zs(ft),Zs(Z));B(zt.chest,V);let Ts=1-2*(V[0]*V[0]+V[2]*V[2]);if(!R.alive||R.ko)return Ut(null,"out");if(k){if(h.riseT>h.riseFail||dt<.3)return He.push({type:"gaveout",pos:[tt[0],tt[1],tt[2]]}),Ut(null,"gave out");if(h.riseT>2.7&&tt[1]-Pe>Qh-.16){R.mode="balance",R.getups++,h.offT=0,h.stepCool=.2;for(let $ of gt)$.swing=!1,$.planted=[$.p[0],$.p[2]];He.push({type:"up",pos:[tt[0],tt[1],tt[2]]})}else if(h.riseT>5)return Ut(null,"gave out");return}h.offT=!X&&($s>.46||Ts<.8)?h.offT+S:Math.max(0,h.offT-2*S);let lt=$s>(X&&!h.gettingUp?.5:.7)?"reach":h.offT>.3?"lean":U>2.4?"capture":Ts<.45&&!h.gettingUp?"tilt":tt[1]-Pe<(h.gettingUp?.17:X?.3:.52)?"height":"",ze=()=>{R.mode="kneel",R.kneels++,h.kneelT=0,h.kneelMax=1.6+3.2*ee();for(let $ of gt)$.swing=!1,$.kneeDown=!1,$.planted=[$.p[0],$.p[2]];He.push({type:"kneel",pos:[tt[0],tt[1],tt[2]]})};if(lt==="height"&&!X&&$t&&$s<.45&&Math.hypot(Ot,Lt)<1.4&&Ts>.75)return ze();if(lt)return Ut(null,lt);if(h.airT>.3)return Ut(null,"air");if(R.paralysed)return Ut(null,"spine");if(h.legT=!X&&(ft.broken>=3||Z.broken>=3)?h.legT+S:0,h.legT>.35)return Ut(null,"leg");let nn=Math.hypot(Ot,Lt);if(z&&nn>2)return Ut(null,"thrown");if(X){if(h.kneelT+=S,z&&(h.gettingUp?h.kneelT>.7&&Ts>.9&&dt>.3:h.kneelT>Math.min(h.kneelMax,1.4)&&dt>.52&&R.bleed<.5)&&h.grip>.9&&Ke()){R.mode="rise",h.riseT=1.9,h.riseFail=9,h.support=1,h.hT=tt[1],h.offT=0,h.buckle=-1.5;for(let $ of gt)$.swing=!1,$.planted=[$.p[0],$.p[2]];h.gettingUp||He.push({type:"rise",pos:[tt[0],tt[1],tt[2]],fromKnees:!0}),h.gettingUp=!1}else if(dt<.2||h.kneelT>h.kneelMax){let $=ee()<.5?1:-1,ce=ee()<.45;Ut(ce?[F*$*28,j*$*28]:[h.hx*30,h.hz*30],"slump")}}else $t&&nn<1.5&&(dt<.5||h.buckle>0&&dt<.72&&h.buckleDip>.24)&&ze()}function Be(S,h){let R=Kt,k=Ct;me(gt[0]),me(gt[1]);let z=Math.min(gt[0].gap,gt[0].kgap,gt[1].gap,gt[1].kgap);R.grip+=qe((z<.03?1:0)-R.grip,-h/.09,h/.05);let X=S*qe(1-R.fallT/(.45+.6*S),0,1);if(X>0)for(let Z of gt){let le=Z.kgap<.03,v=Z.gap<.03;if(!le&&!v)continue;Dt(Z);let F=le?Z.k:Z.p,j=le?ss+.1:Jh+.08;Pn(kt,[0,Wa,Z.side*Xa],st);let q=tt[0]+st[0]-F[0],et=tt[1]+st[1]-F[1],Bt=tt[2]+st[2]-F[2],$t=Math.hypot(q,et,Bt)||1;if($t>j||et/$t<.25)continue;let Vt=(Ve[0]*q+Ve[1]*et+Ve[2]*Bt)/$t,qt=qe(b*kn*.3-240*Vt,0,b*kn*.45)*X*(1-.7*Z.hurt);Yt(zt.pelvis,Z.shin,F,qt*q/$t,qt*et/$t,qt*Bt/$t)}Pn(Gs(kt),[R.fallDir[0],0,R.fallDir[1]],Ft);let dt=Ft[0],Mt=Ft[2],xt=Math.max(0,dt),Wt=qe((.42-(tt[1]-Gn(tt[0],tt[2])))/.2,0,1);gt.forEach((Z,le)=>{let v,F,j;le===R.lead?(v=dt*.95,F=Mt*.95+Z.side*.08,j=.95-.65*xt):(v=dt*.15-.3*(1-xt),F=Z.side*.1,j=1.65),v*=1-Wt,j*=1-.75*Wt;let q=Math.hypot(v,1,F);Ie(Z,v/q,-1/q,F/q),C[Z.shin].SetTargetAngle(j)}),B(zt.chest,V),Pn(Gs(V),[R.fallDir[0],0,R.fallDir[1]],Ft);let Ot=Ft[0],Lt=Ft[2],ft=R.grip<.3&&R.fallT>.35?1:0;if(ye(zt.chest,ai(0,1,0,.12+.55*Math.max(0,Ot))),ye(zt.head,ai(0,1,0,Ot>0?.7*Ot:.5*Ot)),it[zt.head]=Math.max(it[zt.head],.95),!(R.flinch>0))for(let Z of[1,-1]){let le=qe(Lt*Z,-1,1),v=ft*.55*Math.sin(k.clock*11+Z*1.7),F=qe(-Ot*1.25,-.8,1.3)+.15+v,j=-.25-.9*Math.max(0,le)+.3*Math.max(0,-le);ye(Z===1?zt.uarm_l:zt.uarm_r,jt(F,j,Z)),C[Z===1?zt.larm_l:zt.larm_r].SetTargetAngle(-.35-.3*ft)}}let Xt=[[0,0,0],[0,0,0]],A=[[0,0,0],[0,0,0]];function _(S,h,R,k,z,X){l.Set(k,z,X),c.Set(h[0],h[1],h[2]),a.AddForce(L[R],l,c,n.EActivation_Activate),rt(S,-k,-z,-X,h)}function G(S){let h=Kt,R=Ct,k=qe(R.strength,0,1);h.upT+=S,h.support=1;for(let O=0;O<y;O++)a.ActivateBody(L[O]);if(!R.alive||R.ko)return Ut(null,"out");if(h.upT>h.riseFail*2.2||k<.3||h.upT>8)return He.push({type:"gaveout",pos:[tt[0],tt[1],tt[2]]}),Ut(null,"gave out");let z=gt[0],X=gt[1];Dt(z),Dt(X),me(z),me(X);let dt=Gn(tt[0],tt[2]);B(zt.chest,V);let Mt=Pn(V,[-1,0,0],[0,0,0]),xt=Mt[1]<(h.prone?.25:-.45);if(vt(0,S),[1,-1].forEach((O,U)=>{let It=O===1?zt.uarm_l:zt.uarm_r,bt=O===1?zt.larm_l:zt.larm_r;E(bt,fe),B(bt,M),Pn(M,Ht,ot),Xt[U][0]=fe[0]-.11*ot[0],Xt[U][1]=fe[1]-.11*ot[1],Xt[U][2]=fe[2]-.11*ot[2],E(It,fe),B(It,M),Pn(M,Ht,ot),A[U][0]=fe[0]+.15*ot[0],A[U][1]=fe[1]+.15*ot[1],A[U][2]=fe[2]+.15*ot[2]}),h.prone&&!xt&&h.flops++,h.prone=xt,h.flops>=3)return He.push({type:"gaveout",pos:[tt[0],tt[1],tt[2]]}),Ut(null,"gave out");if(!xt&&h.upStage===1&&ue[1]-dt<.3){let O=h.rollSide,U=O===1?z:X,It=O===1?X:z,bt=qe((h.rollT-.45)/.3,0,1);{let de=-Math.sin(1.05),Ae=-Math.cos(1.05),Le=O*(.15-1.1*bt),$e=Math.hypot(de,Ae,Le);Ie(U,de/$e,Ae/$e,Le/$e)}C[U.shin].SetTargetAngle(2.2-.7*bt),Ie(It,0,-1,-O*.05),C[It.shin].SetTargetAngle(.1),ye(zt.chest,Ya(ai(0,1,0,.1),ai(1,0,0,-O*.4))),ye(O===1?zt.uarm_l:zt.uarm_r,jt(1.2,.9,O)),C[O===1?zt.larm_l:zt.larm_r].SetTargetAngle(-.6),ye(O===1?zt.uarm_r:zt.uarm_l,jt(1,.7,-O)),C[O===1?zt.larm_r:zt.larm_l].SetTargetAngle(-1.9);let Jt=Pn(kt,[-1,0,0],[0,0,0])[1];if(h.rollT>.3&&Jt>.2&&U.gap<.05&&Math.hypot(U.c[0]-tt[0],U.c[2]-tt[2])<.78){Pn(kt,[0,0,-O],ot);let de=b*kn*.95*(.4+.6*k)*(1-.6*U.hurt)*qe((h.rollT-.3)/.2,0,1);_(U.shin,U.c,zt.pelvis,ot[0]*de*.7,de,ot[2]*de*.7);let Ae=O===1?0:1,Le=O===1?zt.larm_l:zt.larm_r;if(Xt[Ae][1]-.04-Gn(Xt[Ae][0],Xt[Ae][2])<.05&&mt[Le]<.5&&Math.hypot(Xt[Ae][0]-A[Ae][0],Xt[Ae][2]-A[Ae][2])<.5){let $e=b*kn*.4*(.4+.6*k)*qe((h.rollT-.3)/.2,0,1);_(Le,Xt[Ae],zt.chest,ot[0]*$e*.5,$e,ot[2]*$e*.5)}}h.rollT+=S,h.rollT>1.3&&(h.rollSide=-h.rollSide,h.rollT=-.2),h.chT=ue[1],h.hT=tt[1],h.upStage=1,h.stageT=0;return}let Wt=qe((ue[1]-dt-.16)/.26,0,1);for(let O of[1,-1])ye(O===1?zt.uarm_l:zt.uarm_r,jt(.25+1.1*Wt,-1.05+.85*Wt,O)),C[O===1?zt.larm_l:zt.larm_r].SetTargetAngle(-2.2+1.9*Wt);ye(zt.chest,ai(0,1,0,.05)),ye(zt.head,ai(0,1,0,-.35)),Pn(V,Ht,ot);let Ot=Math.hypot(ot[0],ot[2])||1,Lt=ot[0]/Ot,ft=ot[2]/Ot,Z=ft,le=-Lt,v=(O,U,It,bt,Jt,de,Ae,Le=1)=>{Y(O,K);let $e=Le*700*(It-U[0])-45*K[0],xe=bt===null?0:900*(bt-U[1])-45*K[1],De=Le*700*(Jt-U[2])-45*K[2],an=Math.hypot($e,xe,De),je=an>Ae?Ae/an:1;rt(O,$e*je,xe*je,De*je,U),l.Set(-$e*je,-xe*je,-De*je),c.Set(U[0],U[1],U[2]),a.AddForce(L[de],l,c,n.EActivation_Activate)};[1,-1].forEach((O,U)=>v(O===1?zt.larm_l:zt.larm_r,Xt[U],A[U][0]+Lt*.03,null,A[U][2]+ft*.03,zt.chest,160));let F=(z.k[0]+X.k[0])/2,j=(z.k[2]+X.k[2])/2,q=-((tt[0]-F)*Lt+(tt[2]-j)*ft);B(zt.chest,V);let et=1-2*(V[0]*V[0]+V[2]*V[2]),Bt=z.kgap<.04&&X.kgap<.04&&tt[1]-dt>.4&&ue[1]-dt>.33;if(h.baseT=Bt?h.baseT+S:0,h.upStage===1&&h.upT>.8&&h.baseT>.15&&(h.upStage=2,h.stageT=0),h.lostT=h.upStage>=2&&(z.kgap>.08||X.kgap>.08||tt[1]-dt<.3)?h.lostT+S:0,h.lostT>.25&&(h.upStage=1,h.stageT=0,h.baseT=0,h.lostT=0,h.chT=ue[1],h.hT=tt[1],h.rollT=-.5),h.upStage===2&&(q>.2||h.stageT>.9)&&(h.upStage=3,h.stageT=0),h.stageT+=S,h.upStage>=2&&h.stageT>3)return He.push({type:"gaveout",pos:[tt[0],tt[1],tt[2]]}),Ut(null,"gave out");for(let O of gt){let U=h.upStage===1?.12:.55;Pn(Gs(kt),[Lt*U+Z*O.side*.1,-1,ft*U+le*O.side*.1],Ft);let It=Math.hypot(Ft[0],Ft[1],Ft[2])||1;Ie(O,Ft[0]/It,Ft[1]/It,Ft[2]/It),C[O.shin].SetTargetAngle(h.upStage===1?1.6:1.9),h.upStage===1&&(Pn(kt,[0,Wa,O.side*Xa*1.3],st),v(O.shin,O.k,tt[0]+st[0]+Lt*.06,null,tt[2]+st[2]+ft*.06,zt.pelvis,160))}h.chT=Math.min(dt+.43,h.chT+.75*S);let $t=qe(.5*b*kn+5e3*(h.chT-ue[1])-700*I[1],0,.8*b*kn),Vt=[];[1,-1].forEach((O,U)=>{let It=O===1?zt.larm_l:zt.larm_r;Xt[U][1]-.04-Gn(Xt[U][0],Xt[U][2])>.05||Math.hypot(Xt[U][0]-A[U][0],Xt[U][2]-A[U][2])>.3||mt[It]>.5||mt[O===1?zt.uarm_l:zt.uarm_r]>.5||Vt.push([It,Xt[U]])});let qt=h.upStage===2?260:h.upStage===3?90:0,ie=[0,1].filter(O=>mt[O===0?zt.larm_l:zt.larm_r]<.5&&mt[O===0?zt.uarm_l:zt.uarm_r]<.5).length,_e=Vt.length>=Math.max(1,ie)||h.upStage>1||ue[1]-dt>.3;_e||(h.chT=ue[1]);for(let[O,U]of _e?Vt:[]){let It=Math.min($t/Vt.length,b*kn*.55*(.4+.6*k)),bt=Math.min(qt/Vt.length,It*.55);_(O,U,zt.chest,-Lt*bt,It,-ft*bt)}h.hT=Math.min(dt+(h.upStage===1?.47:.5),h.hT+.6*S,Math.max(h.hT-1.5*S,ue[1]+.03));let Te=qe(.6*b*kn+5e3*(h.hT-tt[1])-700*Ve[1],0,1*b*kn),re=[];for(let O of gt){let U=O.c[0]-O.k[0],It=O.c[2]-O.k[2],bt=U*U+It*It||1,Jt=qe(((tt[0]-O.k[0])*U+(tt[2]-O.k[2])*It)/bt,0,.85),de=Math.hypot(O.k[0]-tt[0],O.k[2]-tt[2]);O.kgap<.05&&de<.56&&(h.upT<.6||de<.42)&&re.push([O,O.k,1-Jt]),h.upStage>=2&&O.gap<.05&&Jt>.05&&re.push([O,O.c,Jt])}let Pe=re.filter(O=>O[1]===O[0].k).length,xn=gt.filter(O=>O.broken<2).length,P=h.upStage>1||Pe>=Math.max(1,xn)||tt[1]-dt>.34;P||(h.hT=tt[1]);let N=0;for(let O of re)N+=O[2];if(N>0&&P)for(let[O,U,It]of re)_(O.shin,U,zt.pelvis,0,Math.min(Te*It/N,b*kn*.7*(1-.5*O.hurt)),0);if(h.upStage>=2){let O=h.upStage===3&&et>.6?.15:.27,U=-(Ve[0]*Lt+Ve[2]*ft),It=qe(1800*(O-q)-220*U,-150,520)*(.4+.6*k),bt=gt.filter(Jt=>Jt.kgap<.05);for(let Jt of bt)Yt(zt.pelvis,Jt.shin,Jt.k,-Lt*It/bt.length,0,-ft*It/bt.length)}if(h.upStage===3){let O=St(zt.chest,520*(.5+.5*k),70,0,0,[0,0,0]),U=Math.hypot(O[0],O[2]),It=230,bt=U>It?It/U:1,Jt=O[0]*bt,de=O[2]*bt,Ae=gt.filter(Le=>Le.kgap<.05);if(Ae.length){yt(zt.chest,Jt*.6,0,de*.6),yt(zt.pelvis,Jt*.4,0,de*.4);for(let Le of Ae){let $e=tt[0]-Le.k[0],xe=tt[1]-Le.k[1],De=tt[2]-Le.k[2],an=$e*$e+xe*xe+De*De,je=1/Ae.length;Yt(zt.pelvis,Le.shin,Le.k,xe*de/an*je,(De*Jt-$e*de)/an*je,-xe*Jt/an*je)}}}if(h.upStage===3&&et>.8&&h.stageT>.3){h.hx=Lt,h.hz=ft,Pn(kt,[-1,0,0],ot);let O=Math.hypot(ot[0],ot[2]);O>.5&&(h.hx=ot[0]/O,h.hz=ot[2]/O),R.mode="kneel",h.gettingUp=!0,h.kneelT=0,h.kneelMax=4,h.hT=tt[1];for(let U of gt)U.swing=!1,U.kneeDown=!0,U.planted=[U.p[0],U.p[2]]}}function ct(S){let h=Kt,R=Ct,k=R.clock;h.support=Math.max(0,h.support-S/.14);let z=R.alive&&!R.ko;z||(h.fight=0);let X=R.mode==="fall"?h.fight*qe(1-(h.fallT-1.3)/1.2,0,1)*(h.settle>.1?.5:1):0,dt=z?.1+.32*R.strength:0;for(let Mt=1;Mt<y;Mt++){let xt=pn[Mt].zone,Wt=Math.max(dt,X*(xt==="arm"?.85:xt==="thigh"||xt==="shin"?.75:.7));it[Mt]+=qe(Wt-it[Mt],-(R.alive?3:1.1)*S,2*S)}if(X>.12)Be(X,S);else if(z){for(let Mt of gt){let xt=k*(1.1+.5*R.strength)+h.phase[Mt.side===1?0:1];ye(Mt.thigh,ai(0,1,0,.35+.4*Math.sin(xt))),C[Mt.shin].SetTargetAngle(.7+.6*Math.sin(xt+1.3))}vt(0,S)}if(R.mode==="fall"){h.fallT=(h.fallT||0)+S;let Mt=tt[1]-Gn(tt[0],tt[2])<.45||Ct.restTimer>.7||h.fallT>4;if(h.settle=Mt&&Math.hypot(Ve[0],Ve[1],Ve[2])<(h.fallT>4?1.2:.6)?h.settle+S:0,h.settle>.35){R.mode="down",R.downAt=R.time,h.settle=0,h.fallT=0,He.push({type:"down",pos:[ue[0],ue[1],ue[2]],onFeet:R.onFeet});let xt=Gn(tt[0],tt[2]),Wt=[[.45,0],[-.45,0],[0,.45],[0,-.45]].every(([Lt,ft])=>Math.abs(Gn(tt[0]+Lt,tt[2]+ft)-xt)<.05)&&tt[1]-xt<.5,Ot=qe((R.blood-10)/70,0,1)*(1-.3*Math.min(1,R.stun));z&&Ot>.42&&h.riseTries<2&&Wt&&Ke()?h.riseAt=R.time+.9+1.6*ee()+2.5*Math.max(0,R.stun-.25):(h.riseAt=0,R.spent=!0)}}else if(R.mode==="down"&&h.riseAt>0&&R.time>h.riseAt){if(h.riseAt=0,!z||R.strength<.36||!Ke()){R.spent=!0;return}B(zt.chest,V);let Mt=Pn(V,[-1,0,0],ot)[1]>0,xt=E(zt.head,fe),Wt=xt[0]-tt[0],Ot=xt[2]-tt[2],Lt=Math.hypot(Wt,Ot)||1,ft=Mt?-1:1;h.hx=ft*Wt/Lt,h.hz=ft*Ot/Lt,R.mode="rise",h.riseT=0,h.riseTries++,h.support=1,h.offT=0,h.buckle=0,h.kneelT=0,h.riseFrom=Math.max(.12,tt[1]-Gn(tt[0],tt[2])),h.hT=tt[1],h.upT=0,h.rollT=0,h.chT=ue[1],h.gettingUp=!1,h.upStage=1,h.stageT=0,h.baseT=0,h.lostT=0,h.prone=!1,h.flops=0,h.rollSide=ee()<.5?1:-1,h.riseFail=ee()<qe((.75-R.strength)*1.6+.35*h.legWound,0,.9)?.9+ee()*1.2:9;for(let Z of gt)Dt(Z),Z.swing=!1,Z.planted=[Z.p[0],Z.p[2]];h.lastCom[0]=tt[0],h.lastCom[1]=tt[2],He.push({type:"rise",pos:[tt[0],tt[1],tt[2]]})}}function Pt(S){for(He.length=0;dn.length;)He.push(dn.shift());let h=Ct,R=Kt;h.clock+=S,h.hits>0&&(h.time+=S);let k=0;if(h.alive){for(let ft of wt){let Z=Math.min(ft.rate*S,ft.left);ft.left-=Z,h.blood-=Z,ft.left>0&&(k+=ft.rate)}h.blood=Math.max(0,h.blood),h.blood<=0&&en("Bled out")}if(h.bleed=k,h.stun=Math.max(0,h.stun-.2*S),(!h.alive||h.ko)&&(h.spent=!0),h.strength=h.alive&&!h.ko?qe((h.blood-10)/70,0,1)*(1-.75*Math.min(1,h.stun)):0,R.flinch-=S,R.lookDown-=S,R.clutch&&h.clock>R.clutchEnd&&(R.clutch=null),E(zt.pelvis,tt),Y(zt.pelvis,Ve),B(zt.pelvis,kt),E(zt.chest,ue),Y(zt.chest,I),h.mode==="balance"||h.mode==="kneel"||h.mode==="rise"){for(let ft=1;ft<y;ft++){let le=pn[ft].zone==="thigh"||pn[ft].zone==="shin"?.95:.35+.65*h.strength;it[ft]+=qe(le-it[ft],-3*S,3*S)}h.mode==="rise"&&R.riseT<1.9?G(S):Me(S)}else ct(S);Rt(),s.Step(S,1);let z=0;for(let ft=0;ft<y;ft++){Y(ft,K);let Z=K[0]-ut[ft*3],le=K[1]-ut[ft*3+1]+kn*S,v=K[2]-ut[ft*3+2];ut[ft*3]=K[0],ut[ft*3+1]=K[1],ut[ft*3+2]=K[2];let F=Math.hypot(Z,le,v);z=Math.max(z,Math.hypot(K[0],K[1],K[2])),Nt[ft]-=S;let j=h.mode==="fall"||h.mode==="down",q=Nt[ft]<=0||Nt[ft]<.33&&(E(ft,fe),fe[1]-Gn(fe[0],fe[2])<pn[ft].r+pn[ft].hh+.1);if(h.hits>0&&j&&F>2.2&&q){Nt[ft]=.18;let et=pn[ft],Bt=F*(et.zone==="head"?5:et.zone==="chest"||et.zone==="gut"?1.6:.8);h.damage+=Bt,h.impacts++;let $t=nt(ft);He.push({type:"impact",part:ft,zone:et.zone,pos:$t,dv:F,dmg:Bt}),B(ft,V),Pn(Gs(V),[-Z/F,-le/F,-v/F],ot);for(let[Vt,qt]of Mn(ft,ot))Tn(Vt,F*qt,$t,"fall");et.zone==="head"&&Tn("neck",F*.9,$t,"fall"),et.zone==="head"&&(h.stun=Math.min(1.6,h.stun+F*.09),h.stun>1.15&&Ln())}}if(Ee==="window")for(let ft=0;ft<y;ft++){if(E(ft,fe),fe[1]>be.glassY+.6||fe[1]<be.glassY-.3)continue;let Z=Math.hypot(ut[ft*3],ut[ft*3+1],ut[ft*3+2]);if(Z<1.6)continue;let le=pn[ft].r+pn[ft].hh+.06+Z*S*2;if(!(Math.abs(fe[1]-be.glassY)>le))for(let v of f.panes)v.broken||fe[0]<v.min[0]-.1||fe[0]>v.max[0]+.1||fe[2]<v.min[1]-.1||fe[2]>v.max[1]+.1||x(v,[ut[ft*3],ut[ft*3+1],ut[ft*3+2]])}if(h.hits===0)return He;h.lowest=Math.min(h.lowest,tt[1]),h.drop=Math.max(0,Oe.start[1]+.93-h.lowest-.85);let X=Math.max(Math.hypot(ut[0],ut[1],ut[2]),Math.hypot(ut[3],ut[4],ut[5])),dt=gt.some(ft=>ft.swing&&!ft.tidy),Mt=gt.some(ft=>ft.swing&&ft.tidy),xt=h.mode==="balance"?!dt&&X<(Mt?.35:.2):z<.15;h.restTimer=xt?h.restTimer+S:0;let Wt=h.restTimer>1.1,Ot=h.stun>.05?2.6:1.5,Lt=0;if(h.alive?h.bleed>.01?Lt=0:h.mode==="balance"?Lt=h.restTimer/Ot:h.mode==="rise"||h.mode==="down"&&!h.spent?Lt=0:Lt=Math.max(h.restTimer/1.1,h.mode==="down"?(h.time-h.downAt)/3.5:0):Lt=Math.min(h.restTimer/1.1,(h.time-h.diedAt)/1.6),h.wrap=qe(Lt,0,1),!h.done){let ft="";!h.alive&&Wt&&h.time-h.diedAt>1.6?ft=h.outcome:h.alive&&h.bleed<=.01&&(h.mode==="fall"&&Wt||h.mode==="down"&&h.spent&&(Wt||h.time-h.downAt>3.5)||h.mode==="balance"&&h.restTimer>Ot||h.ko&&Wt)?ft=h.ko?"Out cold":h.mode==="balance"?"Still standing":"Down, alive":h.time>80&&(ft="Time"),ft&&(h.done=!0,h.outcome=ft,He.push({type:"done",outcome:ft}))}return He}function se(){let S=Ct,h=!S.alive,R=Object.values(S.bones),k=[["Stagger steps",String(S.steps),Math.min(S.steps,40)*14],["Stumbled",S.stumbled.toFixed(1)+" m",Math.round(Math.min(S.stumbled,12)*18)],["Knee drops",String(S.kneels),S.kneels*120],["Put down",S.downAt>=0?"yes":"\u2014",S.downAt>=0?90:0],["Got back up",String(S.getups),S.getups*140],["Hard landings",String(S.impacts),Math.round(S.damage*Vx)],["Bones",String(R.length),R.reduce((X,dt)=>X+eu[dt],0)],["Fell",S.drop.toFixed(1)+" m",Math.round(S.drop*65)],["Glass",S.glass+(S.glass===1?" pane":" panes"),S.glass*130],["Trick shots",String(S.fallHits),S.fallHits*150+S.airHits*250],["Out cold",S.ko?"yes":"\u2014",S.ko?150:0],[h?S.outcome:"Bled out",h?S.diedAt.toFixed(1)+" s":"\u2014",h?S.diedAt>.3?260:60:0]];return{lines:k.filter((X,dt)=>X[2]>0||dt<3),total:k.reduce((X,dt)=>X+dt[2],0)}}function ne(S){bi[S]&&(Ee=S,Oe=bi[S],Ze())}let te=[0,0,0,1];return Ze(),{parts:pn,state:Ct,wounds:wt,feet:gt,step:Pt,hit:Zt,reset:Ze,payout:se,pos:nt,mass:D,totalMass:b,statics:p,setLevel:ne,groundY:Gn,get level(){return Oe},get levelKey(){return Ee},glass:{tiles:f.tiles,panes:f.panes,transform(S,h){let R=f.tiles[S];return ht(R.id,h),W(R.id,te),h[3]=te[0],h[4]=te[1],h[5]=te[2],h[6]=te[3],h}},transform(S,h){E(S,h);let R=a.GetRotation(L[S]);return h[3]=R.GetX(),h[4]=R.GetY(),h[5]=R.GetZ(),h[6]=R.GetW(),h},_debug:{tune:tn,joints:C,tone:it,IDX:zt,ctl:Kt,impulse:at,armQ:jt,setTarget:ye}}}var lu={};yu(lu,{GOALS:()=>os,LEVEL_STARS:()=>Hs,SHOP:()=>as,TOOL_ORDER:()=>Df,TOTAL_STARS:()=>pc,actionsPerTake:()=>Za,blocked:()=>$a,buy:()=>iu,finishTake:()=>au,levelOpen:()=>rs,loadSave:()=>nu,multiplier:()=>Ur,newSave:()=>Nr,nextBuy:()=>su,nextGoal:()=>ru,owns:()=>Di,stars:()=>Fr,tools:()=>mc,unlockEverything:()=>ou});var Df=["poke","shove","bat","pistol","shotgun","ram"],as=[{id:"tool.shove",group:"Tools",name:"Shove",does:"A two-handed push. Staggers him a few steps.",price:75},{id:"tool.bat",group:"Tools",name:"Bat",does:"Knocks him off his feet. A head hit puts him out.",price:2600,needs:"tool.shove"},{id:"tool.pistol",group:"Tools",name:"Pistol",does:"He bleeds: the stagger, the hobble, the knees.",price:12e3,needs:"tool.bat"},{id:"tool.shotgun",group:"Tools",name:"Shotgun",does:"Bleeds fast, and hits hard enough to send him over an edge.",price:36e3,needs:"tool.pistol"},{id:"tool.ram",group:"Tools",name:"Ram",does:"Moves all of him at once.",price:9e4,needs:"tool.shotgun"},{id:"actions.2",group:"Actions",name:"Second action",does:"Two hits per take. When the second one lands is everything.",price:180,needs:"tool.shove"},{id:"actions.3",group:"Actions",name:"Third action",does:"Three hits per take.",price:23e3,needs:"actions.2"},{id:"actions.4",group:"Actions",name:"Fourth action",does:"Four hits per take.",price:115e3,needs:"actions.3"},{id:"pay.1",group:"Payout",name:"Better rate",does:"Every take pays 25% more.",price:5200},{id:"pay.2",group:"Payout",name:"Better rate II",does:"Another 30%.",price:29e3,needs:"pay.1"},{id:"pay.3",group:"Payout",name:"Better rate III",does:"Another 40%.",price:78e3,needs:"pay.2"},{id:"slowmo",group:"Time",name:"Slow-mo",does:"A switch that slows everything, for lining up the next hit.",price:7800}],Lf={"pay.1":.25,"pay.2":.3,"pay.3":.4},Hs={yard:0,stairs:1,window:6},os={yard:[{id:"y1",text:"Make him take a step",reward:30,test:n=>n.steps>=1},{id:"y2",text:"Four steps in one take",reward:60,test:n=>n.steps>=4},{id:"y3",text:"Put him on the ground",reward:200,test:n=>n.downAt>=0},{id:"y4",text:"Drop him to his knees",reward:800,test:n=>n.kneels>=1}],stairs:[{id:"s1",text:"Send him down the stairs",reward:250,test:n=>n.drop>=3},{id:"s2",text:"Down the stairs with one action",reward:600,test:(n,t)=>n.drop>=3&&t===1},{id:"s3",text:"Twenty hard landings in one take",reward:500,test:n=>n.impacts>=20},{id:"s4",text:"Hit him again on the way down",reward:1500,test:n=>n.drop>=3&&n.fallHits>=1}],window:[{id:"w1",text:"Out of the window",reward:600,test:n=>n.drop>=2.5},{id:"w2",text:"Through four panes in one take",reward:1200,test:n=>n.glass>=4},{id:"w3",text:"Out of the window with one action",reward:2e3,test:(n,t)=>n.drop>=2.5&&t===1},{id:"w4",text:"Hit him in mid-air",reward:3e3,test:n=>n.airHits>=1}]},pc=Object.values(os).reduce((n,t)=>n+t.length,0);function Nr(){return{v:1,bank:0,earned:0,takes:0,owned:[],goals:[],best:{},level:"yard",mode:"career",seenIntro:!1,muted:!1}}function nu(n){try{let t=JSON.parse(n);if(t&&t.v===1&&Array.isArray(t.owned)&&Array.isArray(t.goals))return Object.assign(Nr(),t)}catch{}return Nr()}var Di=(n,t)=>n.owned.includes(t),Fr=n=>n.goals.length,rs=(n,t)=>Fr(n)>=(Hs[t]||0),mc=n=>Df.filter(t=>t==="poke"||Di(n,"tool."+t)),Za=n=>1+["actions.2","actions.3","actions.4"].filter(t=>Di(n,t)).length,Ur=n=>Object.keys(Lf).reduce((t,e)=>Di(n,e)?t*(1+Lf[e]):t,1);function $a(n,t){return Di(n,t.id)?"Owned":t.needs&&!Di(n,t.needs)?"Needs "+as.find(e=>e.id===t.needs).name:n.bank<t.price?"Not enough":""}function iu(n,t){let e=as.find(i=>i.id===t);return!e||$a(n,e)?!1:(n.bank-=e.price,n.owned.push(t),!0)}function su(n){return as.filter(t=>!Di(n,t.id)&&(!t.needs||Di(n,t.needs))).sort((t,e)=>t.price-e.price)[0]||null}function ru(n,t){return(os[t]||[]).find(e=>!n.goals.includes(e.id))||null}function au(n,t,e,i){let s=Math.round(i*Ur(n)),r=(os[t]||[]).filter(u=>!n.goals.includes(u.id)&&u.test(e,e.hits)),a=r.reduce((u,p)=>u+p.reward,0),o=Object.keys(Hs).filter(u=>rs(n,u));for(let u of r)n.goals.push(u.id);let l=Object.keys(Hs).filter(u=>rs(n,u)&&!o.includes(u)),c=s>(n.best[t]||0);return c&&(n.best[t]=s),n.bank+=s+a,n.earned+=s+a,n.takes++,{pay:s,bonus:a,goals:r,opened:l,record:c}}function ou(n){for(let t of as)Di(n,t.id)||n.owned.push(t.id);for(let t of Object.values(os).flat())n.goals.includes(t.id)||n.goals.push(t.id)}var Yx={id:"full",fluid:{particle:10096662,ground:8129810,groundOpacity:.9,soak:5967890,soakAmount:.85,mark:3998984,gauge:"#b3151c"},words:{},shop:{},injury:{levels:["","bruised","broken","shattered"],parts:{skull:"Skull",nose:"Nose",jaw:"Jaw",neck:"Neck",collarbone:"Collarbone",ribs:"Ribs",spine:"Spine",pelvis:"Pelvis",humerus:"Humerus",forearm:"Forearm",wrist:"Wrist",femur:"Femur",kneecap:"Kneecap",tibia:"Tibia",ankle:"Ankle"},special:{"neck.1":"Neck wrenched","skull.2":"Skull fractured","ribs.2":"Ribs cracked"},none:"Nothing broken"},sounds:{wound:"woundBlood",squirt:"squirtBlood",snap:"snapBone"},contentNote:"Contains blood and violence against a test dummy.",haptics:!1,ads:!1},Zx={id:"sand",fluid:{particle:14861965,ground:13479276,groundOpacity:.96,soak:9666666,soakAmount:.45,mark:2826777,gauge:"#dcbb78"},words:{Blood:"Sand","Bled out":"Ran empty","Bleeding out \u25B8\u25B8":"Running empty \u25B8\u25B8","Down, bleeding out":"Down, running empty","Staggering, bleeding":"Staggering, leaking","Hit, bleeding":"Hit, leaking","shot \xB7 bleeds":"shot \xB7 leaks","shot \xB7 bleeds fast":"shot \xB7 leaks fast",Bones:"Seams","Broken neck":"Neck seam burst","Skull shattered":"Head burst"},shop:{"tool.pistol":"He springs a leak: the stagger, the hobble, the knees.","tool.shotgun":"Leaks fast, and hits hard enough to send him over an edge."},injury:{levels:["","scuffed","split","burst"],parts:{skull:"Head",nose:"Face",jaw:"Chin",neck:"Neck seam",collarbone:"Shoulder seam",ribs:"Chest panel",spine:"Back seam",pelvis:"Hip seam",humerus:"Upper arm",forearm:"Forearm",wrist:"Wrist seam",femur:"Thigh",kneecap:"Knee seam",tibia:"Shin",ankle:"Ankle seam"},special:{"neck.1":"Neck seam strained"},none:"Nothing split"},sounds:{wound:"woundSand",squirt:"squirtSand",snap:"snapSeam"},contentNote:"Slapstick violence against a sand-filled test dummy.",haptics:!0,ads:!1};function Nf(){return typeof location>"u"?new Set:new Set((location.hash.slice(1)+"&"+location.search.slice(1)).toLowerCase().split(/[-&=]/).filter(Boolean))}function $x(n=Nf()){return n.has("sand")?Zx:Yx}var Vs=Nf(),si=$x(Vs),mi=n=>si.words[n]??n;function cu(n,t,e){let i=si.injury,r=i.special[n+"."+e]||i.parts[n]+" "+i.levels[e];return t?(t===1?"Left ":"Right ")+r.charAt(0).toLowerCase()+r.slice(1):r}var gc=Math.PI*2,qi=44100;function Uf(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ka=n=>Math.max(1,Math.round(n*qi));function wi(n,t,e,i=.707){let s=gc*Math.min(e,qi*.45)/qi,r=Math.cos(s),a=Math.sin(s)/(2*i),o,l,c;t==="lp"?(o=(1-r)/2,l=1-r,c=o):t==="hp"?(o=(1+r)/2,l=-(1+r),c=o):(o=a,l=0,c=-a);let u=1+a,p=-2*r,d=1-a,f=new Float32Array(n.length),x=0,w=0,g=0,m=0;for(let b=0;b<n.length;b++){let D=(o*n[b]+l*x+c*w-p*g-d*m)/u;w=x,x=n[b],m=g,g=D,f[b]=D}return f}function ke(n,t,{attack:e=.001,decay:i=.05,lp:s,hp:r,bp:a,q:o}={}){let l=new Float32Array(Ka(t));for(let c=0;c<l.length;c++)l[c]=n()*2-1;return r&&(l=wi(l,"hp",r,o)),s&&(l=wi(l,"lp",s,o)),a&&(l=wi(l,"bp",a,o||1)),Of(l,e,i)}function vn(n,t,{f1:e=t,glide:i=.05,attack:s=.001,decay:r=.08,wave:a="sine"}={}){let o=new Float32Array(Ka(n)),l=0;for(let c=0;c<o.length;c++){let u=e+(t-e)*Math.exp(-(c/qi)/i);l+=u/qi;let p=l%1;o[c]=a==="saw"?2*p-1:a==="tri"?1-4*Math.abs(p-.5):Math.sin(gc*p)}return Of(o,s,r)}function Of(n,t,e){let i=Math.max(1,t*qi);for(let s=0;s<n.length;s++)n[s]*=Math.min(1,s/i)*Math.exp(-Math.max(0,s-i)/(e*qi));return n}function Qt(n,t,e=0,i=1){let s=Ka(e)-1;for(let r=0;r<t.length&&s+r<n.length;r++)n[s+r]+=t[r]*i;return n}function wn(n,{drive:t=1,peak:e=.9,fade:i=.02,presence:s=2}={}){if(s){let o=wi(n,"hp",250);for(let l=0;l<n.length;l++)n[l]+=s*o[l]}let r=0;for(let o=0;o<n.length;o++)t!==1&&(n[o]=Math.tanh(n[o]*t)),r=Math.max(r,Math.abs(n[o]));let a=Ka(i);for(let o=0;o<n.length;o++)n[o]*=e/(r||1)*Math.min(1,(n.length-o)/a);return n}var Sn=n=>new Float32Array(Ka(n));function Ff(n,t=1){let e=Sn(.5),i=.9+n()*.2;return Qt(e,vn(.45,100*i,{f1:46*i,glide:.05,decay:.09*t}),0,1),Qt(e,vn(.2,210*i,{f1:90,glide:.03,decay:.04}),0,.6),Qt(e,ke(n,.25,{lp:620,decay:.045}),0,.6),Qt(e,ke(n,.2,{bp:480*i,q:.9,decay:.05}),0,.8),Qt(e,ke(n,.4,{lp:170,decay:.12*t}),0,.4),e}var _c={thud:[3,n=>wn(Ff(n),{drive:1.4,presence:6})],limb:[3,n=>{let t=Sn(.26),e=.85+n()*.3;return Qt(t,vn(.2,155*e,{f1:70,glide:.03,decay:.05}),0,.7),Qt(t,ke(n,.12,{bp:1200*e,q:.8,decay:.025}),0,.7),Qt(t,ke(n,.2,{lp:500,decay:.05}),0,.4),wn(t,{drive:1.2})}],knock:[3,n=>{let t=Sn(.26),e=.9+n()*.2;return Qt(t,vn(.2,320*e,{f1:240*e,glide:.02,decay:.035}),0,.8),Qt(t,vn(.1,640*e,{decay:.02}),0,.3),Qt(t,ke(n,.06,{bp:1800,q:1.2,decay:.012}),0,.5),Qt(t,vn(.22,110,{f1:60,glide:.04,decay:.06}),0,.5),wn(t,{drive:1.3})}],step:[4,n=>{let t=Sn(.14),e=.85+n()*.3;return Qt(t,ke(n,.1,{lp:900*e,decay:.018}),0,.8),Qt(t,ke(n,.1,{bp:700*e,q:1,decay:.02}),0,.7),Qt(t,vn(.12,120*e,{f1:70,glide:.02,decay:.03}),0,.5),wn(t)}],scuff:[3,n=>{let t=Sn(.32);return Qt(t,ke(n,.3,{bp:1300+n()*500,q:.6,attack:.03,decay:.07}),0,1),Qt(t,ke(n,.3,{lp:400,attack:.02,decay:.06}),0,.4),wn(t)}],knees:[2,n=>{let t=Sn(.5);return Qt(t,_c.limb[1](n),0,1),Qt(t,_c.limb[1](n),.07+n()*.03,.8),Qt(t,ke(n,.3,{bp:1500,q:.6,attack:.02,decay:.08}),.05,.25),wn(t,{drive:1.2})}],poke:[2,n=>{let t=Sn(.1),e=.9+n()*.2;return Qt(t,vn(.09,270*e,{f1:180,glide:.02,decay:.02}),0,.7),Qt(t,ke(n,.03,{hp:2500,decay:.004}),0,.3),wn(t)}],shove:[2,n=>{let t=Sn(.42);return Qt(t,ke(n,.35,{lp:520,attack:.012,decay:.07}),0,.9),Qt(t,vn(.4,78,{f1:50,glide:.06,attack:.005,decay:.09}),0,.7),Qt(t,ke(n,.3,{bp:620,q:.8,attack:.008,decay:.06}),0,.7),Qt(t,ke(n,.25,{bp:3500,q:.7,attack:.01,decay:.05}),0,.12),wn(t,{drive:1.3,presence:5})}],bat:[2,n=>{let t=Sn(.55),e=.93+n()*.14;return Qt(t,ke(n,.05,{bp:2400*e,q:2,attack:3e-4,decay:.006}),0,1),Qt(t,vn(.12,880*e,{f1:820*e,decay:.018}),0,.6),Qt(t,vn(.06,1900*e,{decay:.01}),0,.3),Qt(t,Ff(n,1.1),.008,.9),wn(t,{drive:1.6,presence:4})}],ram:[1,n=>{let t=Sn(1.1);return Qt(t,vn(1,115,{f1:36,glide:.08,decay:.28}),0,1),Qt(t,ke(n,.9,{lp:250,decay:.3}),0,.7),Qt(t,ke(n,.2,{lp:1500,decay:.03}),0,.6),Qt(t,vn(.5,230,{f1:70,glide:.05,decay:.12}),0,.6),Qt(t,ke(n,.5,{bp:520,q:.7,decay:.14}),0,.7),wn(t,{drive:2.2,fade:.1,presence:8})}],pistol:[2,n=>{let t=Sn(1.15),e=()=>{let i=Sn(.3);return Qt(i,ke(n,.25,{hp:900,bp:2200,q:.7,attack:2e-4,decay:.022}),0,1),Qt(i,vn(.3,175,{f1:55,glide:.02,decay:.06}),0,.9),Qt(i,ke(n,.3,{lp:1200,decay:.18}),.01,.25),i};Qt(t,e(),0,1);for(let[i,s]of[[.09,.22],[.17,.12],[.31,.07]])Qt(t,wi(e(),"lp",1400),i,s);return Qt(t,ke(n,1,{lp:700,attack:.02,decay:.45}),.02,.08),wn(t,{drive:2.5,fade:.15,presence:3.5})}],shotgun:[2,n=>{let t=Sn(1.7),e=()=>{let i=Sn(.6);return Qt(i,ke(n,.5,{bp:1100,q:.6,attack:3e-4,decay:.05}),0,1),Qt(i,ke(n,.1,{hp:2500,decay:.012}),0,.6),Qt(i,vn(.6,115,{f1:38,glide:.03,decay:.12}),0,1),Qt(i,ke(n,.6,{lp:800,decay:.3}),.01,.35),i};Qt(t,e(),0,1);for(let[i,s]of[[.11,.25],[.23,.14],[.4,.08]])Qt(t,wi(e(),"lp",1e3),i,s);return Qt(t,ke(n,1.5,{lp:500,attack:.03,decay:.7}),.03,.1),wn(t,{drive:3,fade:.2,presence:5})}],woundBlood:[3,n=>{let t=Sn(.3);Qt(t,ke(n,.03,{hp:3e3,decay:.006}),0,.5),Qt(t,ke(n,.25,{lp:900,attack:.003,decay:.05}),0,.8),Qt(t,vn(.2,145,{f1:90,glide:.03,decay:.04}),0,.4);for(let e=0;e<3;e++)Qt(t,ke(n,.05,{bp:1500+n()*900,q:3,decay:.01}),.03+n()*.07,.25);return wn(t,{drive:1.3})}],woundSand:[3,n=>{let t=Sn(.36);return Qt(t,ke(n,.3,{bp:4300+n()*600,q:.8,attack:.002,decay:.09}),0,.8),Qt(t,ke(n,.15,{lp:500,decay:.03}),0,.5),wn(t)}],squirtBlood:[3,n=>{let t=Sn(.3),e=.85+n()*.3;Qt(t,ke(n,.2,{bp:1100*e,q:1.6,attack:.012,decay:.045}),0,.9),Qt(t,ke(n,.14,{bp:2600*e,q:2.2,attack:.02,decay:.03}),.01,.4),Qt(t,vn(.12,240*e,{f1:130,glide:.04,attack:.008,decay:.03}),0,.3);for(let i=0;i<2;i++)Qt(t,ke(n,.04,{lp:1800,decay:.008}),.13+n()*.09,.25);return wn(t,{drive:1.2})}],squirtSand:[3,n=>{let t=Sn(.32);return Qt(t,ke(n,.28,{bp:4800+n()*800,q:.9,attack:.02,decay:.07}),0,.8),Qt(t,ke(n,.2,{hp:7e3,attack:.03,decay:.06}),.02,.3),wn(t)}],snapBone:[3,n=>{let t=Sn(.2),e=.85+n()*.3;return Qt(t,ke(n,.03,{bp:2400*e,q:1.6,decay:.006}),0,1),Qt(t,vn(.05,900*e,{f1:260,glide:.012,decay:.012}),0,.7),Qt(t,ke(n,.03,{bp:3300*e,q:1.4,decay:.005}),.028+n()*.02,.6),Qt(t,vn(.12,150,{f1:80,glide:.03,decay:.03}),0,.35),wn(t,{drive:1.5})}],snapSeam:[3,n=>{let t=Sn(.3),e=.85+n()*.3;for(let i=0;i<7;i++)Qt(t,ke(n,.02,{bp:(1500+n()*900)*e,q:1.1,decay:.006}),i*.016+n()*.006,.5+n()*.5);return Qt(t,ke(n,.16,{lp:700,decay:.05}),0,.3),wn(t,{drive:1.2})}],glass:[2,n=>{let t=Sn(1.9);Qt(t,ke(n,.3,{hp:2500,attack:5e-4,decay:.05}),0,1),Qt(t,ke(n,.5,{bp:5e3,q:1,decay:.15}),0,.5);for(let e=0;e<28;e++)Qt(t,vn(.5,1800+n()*7200,{decay:.02+n()*.14}),n()*.12,.05+n()*.2);for(let e=0;e<36;e++)Qt(t,vn(.1,2500+n()*7500,{decay:.008+n()*.022}),.15+Math.pow(n(),1.6)*1.4,.03+n()*.09);return wn(t,{drive:1.2,fade:.1})}],whoosh:[1,n=>{let t=Sn(.6);return Qt(t,ke(n,.5,{lp:900,attack:.08,decay:.12}),0,.5),Qt(t,ke(n,.6,{lp:260,attack:.15,decay:.2}),0,.8),wn(t,{peak:.6,fade:.1})}],grunt:[4,n=>{let t=Sn(.4),e=.85+n()*.35,i=vn(.3,128*e,{f1:84*e,glide:.12,attack:.012,decay:.07,wave:"saw"});return Qt(t,wi(i,"bp",520*e,4),0,1),Qt(t,wi(i,"bp",980*e,5),0,.5),Qt(t,ke(n,.3,{bp:1700,q:1,attack:.02,decay:.08}),0,.14),wn(wi(t,"lp",2600),{drive:1.5})}],groan:[3,n=>{let t=Sn(.9),e=.85+n()*.3,i=vn(.8,112*e,{f1:62*e,glide:.35,attack:.05,decay:.3,wave:"saw"});return Qt(t,wi(i,"bp",480*e,4),0,1),Qt(t,wi(i,"bp",860*e,5),0,.4),Qt(t,ke(n,.8,{bp:1500,q:.8,attack:.08,decay:.3}),0,.2),wn(wi(t,"lp",2200),{drive:1.4,fade:.1})}],click:[1,n=>{let t=Sn(.04);return Qt(t,vn(.03,1200,{decay:.006}),0,.7),Qt(t,ke(n,.01,{hp:4e3,decay:.002}),0,.4),wn(t,{peak:.5,fade:.005})}],deny:[1,()=>{let n=Sn(.16);return Qt(n,vn(.15,300,{f1:220,glide:.05,decay:.05,wave:"tri"}),0,1),wn(n,{peak:.6})}],buy:[1,n=>{let t=Sn(.45);return Qt(t,vn(.2,880,{decay:.07,wave:"tri"}),0,.7),Qt(t,vn(.35,1320,{decay:.1,wave:"tri"}),.07,.8),Qt(t,ke(n,.2,{bp:7e3,q:2,decay:.05}),.07,.25),wn(t,{peak:.6})}],goal:[1,()=>{let n=Sn(.8);return[660,880,1320].forEach((t,e)=>Qt(n,vn(.5,t,{decay:.16,wave:"tri"}),e*.09,.7)),wn(n,{peak:.6,fade:.1})}],stamp:[1,n=>{let t=Sn(.3);return Qt(t,ke(n,.1,{lp:1500,decay:.02}),0,.8),Qt(t,vn(.25,140,{f1:80,glide:.03,decay:.06}),0,.9),Qt(t,vn(.2,420,{f1:300,glide:.03,decay:.04}),0,.5),wn(t,{peak:.7})}]},hu=Object.keys(_c);function Kx(){let n={};return hu.forEach((t,e)=>{let[i,s]=_c[t],r=Uf(1e3+e*77);n[t]=Array.from({length:i},()=>s(r))}),n}function kf(){let n=Kx(),t={},e={},i=null,s,r,a,o={},l=!1,c=1,u=null,p=null,d=null;function f(){if(i){i.state==="suspended"&&i.resume();return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{i=null;return}s=i.createGain(),r=i.createBiquadFilter(),r.type="lowpass",r.frequency.value=2e4;let w=i.createDynamicsCompressor();w.threshold.value=-14,w.ratio.value=6,w.attack.value=.003,w.release.value=.2,a=i.createGain(),a.gain.value=l?0:.9,s.connect(r).connect(w).connect(a).connect(i.destination);for(let T of hu)o[T]=n[T].map(L=>{let C=i.createBuffer(1,L.length,qi);return C.getChannelData(0).set(L),C});let g=qi*4,m=i.createBuffer(1,g,qi),b=m.getChannelData(0),D=Uf(5);for(let T=0;T<g;T++)b[T]=(D()*2-1)*(.6+.4*Math.sin(gc*T/g)*Math.sin(gc*3*T/g));for(let T=0;T<2e3;T++){let L=T/2e3;b[T]=b[T]*L+b[g-2e3+T]*(1-L)}u=i.createBufferSource(),u.buffer=m,u.loop=!0,d=i.createBiquadFilter(),d.type="lowpass",d.frequency.value=400,p=i.createGain(),p.gain.value=.035,u.connect(d).connect(p).connect(s),u.start()}function x(w,{vol:g=1,rate:m=1,pan:b=0,delay:D=0,ui:T=!1}={}){if(!i||l||!o[w]||g<=.003)return;let L=o[w];t[w]=((t[w]||0)+1)%L.length,e[w]=(e[w]||0)+1;let C=i.createBufferSource();C.buffer=L[t[w]],C.playbackRate.value=m*(T?1:.55+.45*Math.sqrt(c))*(.97+Math.random()*.06);let y=i.createGain();y.gain.value=Math.min(1,g);let E=C.connect(y);if(b&&i.createStereoPanner){let Y=i.createStereoPanner();Y.pan.value=Math.max(-1,Math.min(1,b)),E=E.connect(Y)}E.connect(T?a:s),C.start(i.currentTime+D)}return{unlock:f,play:x,played:e,names:hu,get ready(){return!!i},get muted(){return l},setMuted(w){l=!!w,a&&a.gain.setTargetAtTime(l?0:.9,i.currentTime,.02)},setSlow(w){Math.abs(w-c)<.02||(c=Math.max(.05,Math.min(1,w)),i&&(r.frequency.setTargetAtTime(c>.9?2e4:1400+9e3*c,i.currentTime,.06),u.playbackRate.setTargetAtTime(.5+.5*c,i.currentTime,.1)))},setPlace(w){i&&d.frequency.setTargetAtTime({yard:420,stairs:190,window:750}[w]||400,i.currentTime,.3)}}}var Gt=n=>document.getElementById(n),_u=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim(),oi=n=>"$"+Math.round(n).toLocaleString("en-US");async function ay(){try{return await(await import("./vendor/jolt-physics.wasm.js")).default()}catch(n){return console.warn("WASM physics unavailable, using asm.js build",n),await(await import("./vendor/jolt-physics.js")).default()}}function oy(){if(Vs.has("previous"))return"previous";if(Vs.has("current"))return"current";try{return localStorage.getItem("imhit.physics2")==="previous"?"previous":"current"}catch{return"current"}}var eo=oy(),Hf=!0;function ly(n,t){let e=t(n),i=Gt("view"),s=new cc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Fs,s.toneMapping=Ia,s.toneMappingExposure=1.15;let r=new na,a=new Xe(_u("--sky"));r.background=a,r.fog=new ea(a,14,38);let o=new ti(42,1,.1,120);r.add(new Ea(13623538,3814960,1.05));let l=new Ca(16769725,2.6);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),l.shadow.bias=-6e-4,l.shadow.normalBias=.03,r.add(l,l.target);let c=new Xe(_u("--concrete")),u=new Xe(_u("--hazard")),p=(Pf.half+10)*2,d=(()=>{let P=document.createElement("canvas");P.width=P.height=2048;let N=P.getContext("2d"),O=P.width/p,U=P.width/2;N.fillStyle="#"+c.clone().multiplyScalar(.62).getHexString(),N.fillRect(0,0,P.width,P.height),N.strokeStyle="rgba(0,0,0,0.13)",N.lineWidth=2;for(let bt=-p/2;bt<=p/2;bt+=2)N.beginPath(),N.moveTo(U+bt*O,0),N.lineTo(U+bt*O,P.height),N.moveTo(0,U+bt*O),N.lineTo(P.width,U+bt*O),N.stroke();N.strokeStyle="rgba(241,239,233,0.42)",N.fillStyle="rgba(241,239,233,0.6)",N.lineWidth=3,N.font='700 30px "Big Shoulders Display", Impact, sans-serif',N.textAlign="center";for(let bt=2;bt<=12;bt+=2)N.beginPath(),N.arc(U,U,bt*O,0,Math.PI*2),N.stroke(),N.fillText(bt+" m",U+bt*O,U+34);N.strokeStyle="#"+u.getHexString(),N.lineWidth=5,N.beginPath(),N.moveTo(U-14,U-14),N.lineTo(U+14,U+14),N.moveTo(U+14,U-14),N.lineTo(U-14,U+14),N.stroke();let It=new ha(P);return It.anisotropy=8,It.colorSpace=Qn,It})(),f=new Un(new _s(p,p),new qn({map:d,roughness:.96}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,r.add(f);let x=new Un(new vi(p,3.2,.4),new qn({color:c.clone().multiplyScalar(.5),roughness:1}));x.position.set(0,1.6,-11),r.add(x);let w=new Un(new _s(100,160),new qn({color:c.clone().multiplyScalar(.36),roughness:1}));w.rotation.x=-Math.PI/2,w.position.set(0,-.003,105),w.receiveShadow=!0,r.add(w);let g={landing:new qn({color:c,roughness:.95}),step:new qn({color:c,roughness:.95}),stepAlt:new qn({color:c.clone().multiplyScalar(.88),roughness:.95}),wall:new qn({color:c.clone().multiplyScalar(.55),roughness:1}),building:new qn({color:c.clone().multiplyScalar(.8),roughness:1}),sill:new qn({color:c.clone().multiplyScalar(1.05),roughness:.9}),frame:new qn({color:2237995,roughness:.5,metalness:.4})};e.statics.forEach((P,N)=>{let O=new Un(new vi(P.h[0]*2,P.h[1]*2,P.h[2]*2),P.kind==="step"&&N%2?g.stepAlt:g[P.kind]);O.position.set(P.c[0],P.c[1],P.c[2]),O.castShadow=!0,O.receiveShadow=!0,r.add(O)});let m=[0,1,2].map(P=>{let N=-(.7+.3*P),O=new Sr;return O.moveTo(-.2,N),O.lineTo(0,N+.16),O.lineTo(.2,N),O.lineTo(.2,N-.07),O.lineTo(0,N+.09),O.lineTo(-.2,N-.07),O.closePath(),O}),b=new Un(new ba(m),new ms({color:u,transparent:!0,opacity:.6,depthWrite:!1,side:Mi}));b.geometry.rotateX(-Math.PI/2),r.add(b);let D=e.glass.tiles,T=new xr(new vi(1,1,1),new qn({color:11131878,transparent:!0,opacity:.34,roughness:.08,metalness:.1,depthWrite:!1}),D.length);T.frustumCulled=!1,r.add(T);let L=new un,C=new ui,y=new J,E=new J,Y=new Float32Array(7);function B(){for(let P=0;P<D.length;P++)e.glass.transform(P,Y),L.compose(y.set(Y[0],Y[1],Y[2]),C.set(Y[3],Y[4],Y[5],Y[6]),E.set(D[P].h[0]*2,D[P].h[1]*2,D[P].h[2]*2)),T.setMatrixAt(P,L);T.instanceMatrix.needsUpdate=!0}B();let Q=new qn({color:2303788,roughness:.6}),nt=new qn({color:15855593,roughness:.6}),ht=si.fluid,W=new Xe(ht.ground),rt=new Xe(ht.soak);document.documentElement.dataset.edition=si.id,document.documentElement.style.setProperty("--blood",ht.gauge),Gt("gauge-label").textContent=mi("Blood"),Gt("intro-note").textContent=si.contentNote;let at=[],it=[],mt=new Float32Array(pn.length);pn.forEach((P,N)=>{let O=new Un(new fa(P.r,P.hh*2,6,16),new qn({color:u,roughness:.55}));O.castShadow=!0,O.receiveShadow=!0,O.userData.part=N;let U=(It,bt,Jt,de,Ae)=>{let Le=new Un(It,bt);return Le.position.set(Jt,de,Ae),Le.castShadow=!0,O.add(Le),Le};P.parent>=0&&P.name!=="head"&&U(new Ns(P.r*(P.name==="chest"?.86:1.12),14,10),Q,P.j[0]-P.c[0],P.j[1]-P.c[1],P.j[2]-P.c[2]),P.name==="head"&&(U(new vi(.05,.05,.15),Q,-P.r+.01,.03,0),U(new Ls(.045,.05,.1,10),Q,0,-P.hh-P.r-.01,0)),P.name==="chest"&&(U(new Ls(.06,.06,.012,20),nt,-P.r+.004,.05,0).rotation.z=Math.PI/2,U(new Ls(.028,.028,.016,16),Q,-P.r+.003,.05,0).rotation.z=Math.PI/2),P.name.startsWith("larm")&&U(new Ns(.048,12,8),Q,0,-P.hh-P.r-.02,0),P.name.startsWith("lleg")&&U(new vi(.24,.07,.09),Q,-.06,-P.hh-P.r+.035,0),r.add(O),at.push(O)});let pt=new Float32Array(7);function ut(){for(let P=0;P<at.length;P++)e.transform(P,pt),at[P].position.set(pt[0],pt[1],pt[2]),at[P].quaternion.set(pt[3],pt[4],pt[5],pt[6]),at[P].updateMatrixWorld()}function Nt(P,N,O){let U=new Float32Array(P*3),It=new Float32Array(P*3),bt=new Float32Array(P),Jt=new Xn;Jt.setAttribute("position",new hi(U,3));let de=new la(Jt,new vr({color:N,size:O,transparent:!0,opacity:.95,depthWrite:!1}));de.frustumCulled=!1,r.add(de);let Ae=0;return{emit(Le,$e,xe){let De=Ae;Ae=(Ae+1)%P,U.set(Le,De*3),It.set($e,De*3),bt[De]=xe},step(Le,$e){for(let xe=0;xe<P;xe++){if(bt[xe]<=0){U[xe*3+1]=-50;continue}bt[xe]-=Le,It[xe*3+1]-=9.8*Le;for(let De=0;De<3;De++)U[xe*3+De]+=It[xe*3+De]*Le;U[xe*3+1]<=e.groundY(U[xe*3],U[xe*3+2])+.005&&($e&&$e(U[xe*3],U[xe*3+2]),bt[xe]=0)}Jt.attributes.position.needsUpdate=!0}}}let ae=Nt(200,15326404,.05),ye=Nt(700,ht.particle,.06),Et=Nt(260,14677759,.035);function jt(P,N,O){for(let U=0;U<N;U++){let It=Math.random()*6.28,bt=O*(.3+Math.random());ae.emit(P,[Math.cos(It)*bt,.5+Math.random()*bt,Math.sin(It)*bt],.4+Math.random()*.5)}}let Rt=900,Ct=new xr(new pa(1,14),new ms({color:W,transparent:!0,opacity:ht.groundOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Rt);Ct.frustumCulled=!1,Ct.count=0,r.add(Ct);let wt=new un,gt=new ui().setFromEuler(new Ci(-Math.PI/2,0,0)),Kt=new J,ee=new J,Ne=0,Oe=[];function Ee(P,N,O,U){wt.compose(ee.set(N,e.groundY(N,O)+.004+P%7*4e-4,O),gt,Kt.set(U,U*(.75+P%5*.08),1)),Ct.setMatrixAt(P,wt),Ct.instanceMatrix.needsUpdate=!0}function He(P,N,O){let U=Ne;return Ne=(Ne+1)%Rt,Ct.count=Math.max(Ct.count,U+1),Ee(U,P,N,O),U}let dn=(P,N)=>He(P,N,.02+Math.random()*.045),Ze=new J,en=new J,Ln=0,Mn=0,Rn=0,Tn=0;function Ke(P){let N=e.state;Ln+=P*(N.alive?1.15+(100-N.blood)*.008:0);let O=Math.pow(Math.max(0,Math.sin(Ln*Math.PI*2)),6),U=Ln%1,It=(Mn<.12||Mn>U)&&U>=.12;if(Mn=U,It&&N.blood>0){Rn++;let bt=null;for(let de of e.wounds)de.left>0&&(!bt||(de.arterial?10:0)+de.rate>(bt.arterial?10:0)+bt.rate)&&(bt=de);let Jt=performance.now();bt&&(bt.arterial||Rn%2===0)&&Jt-Tn>300&&(Tn=Jt,at[bt.part].getWorldPosition(Ze),kt.play(si.sounds.squirt,{vol:bt.arterial?.34:.1+Math.min(.1,bt.rate*.02),rate:bt.arterial?1:.85,pan:M([Ze.x,Ze.y,Ze.z])}))}e.wounds.forEach((bt,Jt)=>{let de=bt.left>0&&N.blood>0,Ae=de?bt.rate:.25,Le=at[bt.part];Ze.set(bt.at[0],bt.at[1],bt.at[2]),en.copy(Ze).setY(0).normalize().transformDirection(Le.matrixWorld),Ze.applyMatrix4(Le.matrixWorld),mt[bt.part]=Math.min(1,mt[bt.part]+P*Ae*.02),it[Jt]&&it[Jt].scale.setScalar(1+mt[bt.part]*2.2);let $e=bt.arterial&&de?O:0,xe=P*Ae*(bt.arterial?8:5)+$e*P*260;xe=Math.floor(xe)+(Math.random()<xe%1?1:0);for(let De=0;De<xe;De++){let an=$e>.2?1.6+Math.random()*1.6:.2+Math.random()*.5;ye.emit([Ze.x,Ze.y,Ze.z],[en.x*an+(Math.random()-.5)*.4,en.y*an+Math.random()*.5*an,en.z*an+(Math.random()-.5)*.4],1.6)}if(N.mode==="down"&&Ze.y-e.groundY(Ze.x,Ze.z)<.4){let De=Oe[Jt];(!De||Math.hypot(De.x-Ze.x,De.z-Ze.z)>.25)&&(De=Oe[Jt]={i:He(Ze.x,Ze.z,.03),x:Ze.x,z:Ze.z,r:.03}),De.r=Math.min(.55,Math.sqrt(De.r*De.r+P*Ae*.0022)),Ee(De.i,De.x,De.z,De.r)}});for(let bt=0;bt<at.length;bt++)mt[bt]>0&&at[bt].material.color.copy(u).lerp(rt,mt[bt]*ht.soakAmount)}let V=new Xn().setFromPoints([new J,new J]),Fe=new oa(V,new yr({color:16773577,transparent:!0,opacity:0}));Fe.frustumCulled=!1,r.add(Fe);let fe=[];function Zt(P,N,O,U=.25){let It=fe.find(bt=>bt.life<=0);if(!It){if(fe.length>=16)return;It={el:document.createElement("div"),life:0,pos:new J},Gt("app").appendChild(It.el),fe.push(It)}It.el.className="callout"+(O?" big":""),It.el.textContent=P,It.pos.set(N[0],N[1]+U,N[2]),It.life=It.max=O?1.6:1.2}let tt=new J;function Ve(P){for(let N of fe){if(N.life<=0){N.el.style.opacity=0;continue}N.life-=P,N.pos.y+=P*.4,tt.copy(N.pos).project(o);let O=(tt.x*.5+.5)*i.clientWidth,U=(-tt.y*.5+.5)*i.clientHeight;N.el.style.transform=`translate(${O.toFixed(1)}px, ${U.toFixed(1)}px) translate(-50%, -50%)`,N.el.style.opacity=tt.z>1?0:Math.min(1,N.life/(N.max*.4))}}let kt=kf();function ue(){let P=!kt.ready;kt.unlock(),P&&kt.ready&&kt.setPlace(e.levelKey)}let I=new J,M=P=>P?Math.max(-1,Math.min(1,I.set(P[0],P[1],P[2]).project(o).x))*.7:0,K="poke",At=!1,st=0,ot=1,Ft=!1,yt=!1,St=1,Yt=-1e9,H=0,Tt=!1,_t=!1,vt=Nr();try{vt=nu(localStorage.getItem("imhit.save"))}catch{}let Dt=()=>{try{localStorage.setItem("imhit.save",JSON.stringify(vt))}catch{}},Ht=()=>vt.mode==="free",me={poke:"one finger",shove:"push \xB7 no wound",bat:"blunt \xB7 stuns",pistol:"shot \xB7 bleeds",shotgun:"shot \xB7 bleeds fast",ram:"moves all of him"},Ie={};function Ut(){for(let N in Ie)Ie[N].remove(),delete Ie[N];Gt("pick-list").innerHTML="";let P=mc(vt);P.includes(K)||(K=P.at(-1));for(let N of P)for(let[O,U]of[["tools","tool-"+N],["pick-list","pick-"+N]]){let It=document.createElement("button");It.type="button",It.className="tool",It.id=U,It.dataset.tool=N,It.innerHTML=`<b>${fc[N].label}</b><i>${mi(me[N])}</i>`,It.addEventListener("click",()=>{K=N,Me(),Be(),ue(),kt.play("click",{ui:!0,vol:.5})}),Gt(O).appendChild(It),O==="tools"&&(Ie[N]=It)}Gt("pick").classList.toggle("single",P.length<2),Me(),Gt("slow").hidden=!Di(vt,"slowmo"),Gt("slow").hidden&&(At=!1,Gt("slow").setAttribute("aria-pressed","false"))}function Me(){for(let P in Ie)Ie[P].setAttribute("aria-pressed",String(P===K));for(let P of Gt("pick-list").children)P.setAttribute("aria-pressed",String(P.dataset.tool===K));Gt("pick-name").textContent=fc[K].label,Gt("pick-note").textContent=mi(me[K])}function Be(){Gt("pick-list").hidden=!0,Gt("pick").setAttribute("aria-expanded","false")}Gt("pick").addEventListener("click",()=>{if(Gt("pick").classList.contains("single"))return;let P=Gt("pick-list").hidden;Gt("pick-list").hidden=!P,Gt("pick").setAttribute("aria-expanded",String(P))}),document.addEventListener("pointerdown",P=>{!Gt("pick-list").hidden&&!P.target.closest(".picker")&&Be()},!0);function Xt(){let P=Za(vt);Gt("pips").innerHTML=Ht()?'<span class="pip-label free">No limit</span>':'<span class="pip-label">Actions</span>'+Array.from({length:P},(N,O)=>`<span class="pip${O<St?" on":""}"></span>`).join("")}function A(){let P=ru(vt,e.levelKey);Gt("hint").hidden=!1,Gt("hint").innerHTML=Ht()?"Free play: tap him anywhere, as often as you like. Drag to look around.":(P?`<b>Goal</b> ${P.text} <span>\u2605 +${oi(P.reward)}</span>`:"Every goal here is done. Play for cash, or try another level.")+(Za(vt)>=2&&!vt.goals.includes("s1")?"<small>Tip: hit him again during the slow motion, while he is still off balance.</small>":"")}function _(){Gt("bank").textContent=oi(vt.bank),Gt("stars").textContent="\u2605 "+Fr(vt)+" / "+pc,Gt("mode-career").setAttribute("aria-pressed",String(!Ht())),Gt("mode-free").setAttribute("aria-pressed",String(Ht()));for(let N in G){let O=rs(vt,N);G[N].disabled=!O;let U=os[N].filter(It=>vt.goals.includes(It.id)).length;G[N].lastChild.textContent=O?bi[N].blurb+" \u2605 "+U+"/"+os[N].length:"Opens at \u2605 "+Hs[N]+". You have "+Fr(vt)+"."}Gt("where-level").textContent=e.level.label,Gt("where-mode").textContent=(Ht()?"Free play":"Career")+(eo==="previous"?" \xB7 previous physics":"");let P=!Ht()&&as.some(N=>!$a(vt,N));Gt("shop-open").classList.toggle("ready",P),Gt("shop-open").textContent=P?"Shop \u2022":"Shop"}let G={};for(let[P,N]of Object.entries(bi)){let O=document.createElement("button");O.type="button",O.className="level",O.id="level-"+P,O.innerHTML=`<b>${Object.keys(bi).indexOf(P)+1} \xB7 ${N.label}</b><i>${N.blurb}</i>`,O.addEventListener("click",()=>ct(P)),Gt("levels").appendChild(O),G[P]=O}function ct(P,N){if(!N&&!rs(vt,P))return;e.setLevel(P),vt.level=P,Dt(),Z.aim={yaw:e.level.cam.yaw,pitch:e.level.cam.pitch,dist:e.level.cam.dist},R();let O=e.level;for(let U in G)G[U].setAttribute("aria-pressed",String(U===P));Gt("menu").hidden=!0,kt.setPlace(P),Z.aim={yaw:O.cam.yaw,pitch:O.cam.pitch,dist:O.cam.dist},Z.swing=0,yt=!1,Z.yaw=O.cam.yaw,Z.pitch=O.cam.pitch,Z.dist=O.cam.dist,Z.target.set(O.start[0],O.start[1]+.92,O.start[2])}function Pt(P){vt.mode=P==="free"?"free":"career",Dt(),R(),_()}Gt("where").addEventListener("click",()=>{Gt("menu").hidden=!1}),Gt("menu-close").addEventListener("click",()=>{Gt("menu").hidden=!0});for(let P of["menu","shop"])Gt(P).addEventListener("click",N=>{N.target===Gt(P)&&(Gt(P).hidden=!0)});if(Gt("mode-career").addEventListener("click",()=>Pt("career")),Gt("mode-free").addEventListener("click",()=>Pt("free")),!Hf||Vs.has("dev")){Gt("physics").hidden=!1;for(let P of["current","previous"]){let N=Gt("physics-"+P);N.setAttribute("aria-pressed",String(eo===P)),N.addEventListener("click",()=>{if(P===eo)return;try{localStorage.setItem("imhit.physics2",P)}catch{}let O=[...Vs].filter(U=>U!=="previous"&&U!=="current");location.hash=[...O,P].join("-"),location.reload()})}}function se(){Gt("shop-bank").textContent=oi(vt.bank)+" banked \xB7 \u2605 "+Fr(vt)+" / "+pc+(Ur(vt)>1?" \xB7 pays \xD7"+Ur(vt).toFixed(2):"");let P="";for(let N of[...new Set(as.map(O=>O.group))]){P+=`<h3>${N}</h3>`;for(let O of as.filter(U=>U.group===N)){let U=$a(vt,O);P+=`<div class="item${U==="Owned"?" owned":""}"><div><b>${O.name}</b><p>${si.shop[O.id]||O.does}</p></div>`+(U==="Owned"?'<span class="tag">Owned</span>':`<button type="button" class="buy" data-id="${O.id}" id="buy-${O.id.replace(".","-")}"${U?" disabled":""}>${oi(O.price)}${U&&U!=="Not enough"?`<small>${U}</small>`:""}</button>`)+"</div>"}}P+="<h3>Goals</h3>";for(let[N,O]of Object.entries(os)){let U=rs(vt,N);P+=`<h4>${bi[N].label}${U?"":" \xB7 opens at \u2605"+Hs[N]}</h4><ul class="goals">`+O.map(It=>`<li class="${vt.goals.includes(It.id)?"got":""}"><span>${vt.goals.includes(It.id)?"\u2605":"\u2606"}</span>${It.text}<em>${oi(It.reward)}</em></li>`).join("")+"</ul>"}Gt("shop-list").innerHTML=P}Gt("shop-list").addEventListener("click",P=>{let N=P.target.closest(".buy");!N||!iu(vt,N.dataset.id)||(Dt(),ue(),kt.play("buy",{ui:!0,vol:.55}),N.dataset.id.startsWith("tool.")&&(K=N.dataset.id.slice(5)),Ut(),_(),se(),e.state.hits||R())});function ne(){se(),Gt("shop").hidden=!1}Gt("shop-open").addEventListener("click",ne),Gt("result-shop").addEventListener("click",ne),Gt("shop-close").addEventListener("click",()=>{Gt("shop").hidden=!0});let te=Vs.has("dev");Gt("unlock-all").hidden=!te&&Hf,Gt("unlock-all").addEventListener("click",()=>{ou(vt),Dt(),Ut(),_(),se(),R()});let S=0;Gt("wipe").addEventListener("click",()=>{if(performance.now()-S>3e3){S=performance.now(),Gt("wipe").textContent="Tap again to erase everything";return}vt=Nr(),Dt(),S=0,Gt("wipe").textContent="Erase progress",Ut(),ct("yard",!0),_(),se()}),Gt("slow").addEventListener("click",()=>{At=!At,Gt("slow").setAttribute("aria-pressed",String(At))});function h(){Gt("sound").setAttribute("aria-pressed",String(!kt.muted)),Gt("sound").textContent=kt.muted?"Sound off":"Sound on"}Gt("sound").addEventListener("click",()=>{ue(),kt.setMuted(!kt.muted),vt.muted=kt.muted,Dt(),h(),kt.muted||kt.play("click",{ui:!0,vol:.5})});function R(){e.reset();for(let P of it)P.parent.remove(P);it.length=0,Oe.length=0,mt.fill(0),Ct.count=0,Ne=0;for(let P of at)P.material.color.copy(u);Ft=!1,st=0,Tt=!1,Yt=-1e9,X.length=0,dt(),Z.target.set(e.level.start[0],e.level.start[1]+.92,e.level.start[2]),Z.zoom=.8,Z.swing=0,yt=!1,Z.yaw=Z.aim.yaw,Z.pitch=Z.aim.pitch,Z.dist=Z.aim.dist,St=Ht()?1/0:Za(vt),B(),Gt("result").hidden=!0,Xt(),A(),_(),z()}Gt("reset").addEventListener("click",R);for(let P of["pointerdown","pointerup","pointercancel","pointerleave"])Gt("ff").addEventListener(P,N=>{_t=P==="pointerdown",Gt("ff").setAttribute("aria-pressed",String(_t)),_t&&N.preventDefault()});Gt("ff").addEventListener("contextmenu",P=>P.preventDefault()),Gt("next").addEventListener("click",R),Gt("result-go").addEventListener("click",()=>ct(Gt("result-go").dataset.level)),window.addEventListener("keydown",P=>{P.code==="Space"&&(At=!0,P.preventDefault()),P.code==="KeyR"&&R(),P.code==="KeyF"&&(_t=!0);let N=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(P.code),O=mc(vt);N>=0&&O[N]&&(K=O[N],Me())}),window.addEventListener("keyup",P=>{P.code==="KeyF"&&(_t=!1),P.code==="Space"&&(At=Gt("slow").getAttribute("aria-pressed")==="true")});function k(){let P=e.state;return P.alive?P.ko?"Out cold":P.mode==="down"?mi(Tt?"Bleeding out \u25B8\u25B8":P.bleed>.2?"Down, bleeding out":"Down"):P.mode==="fall"?"Going down":P.mode==="rise"?"Getting up":P.mode==="kneel"?"On his knees":P.hits===0?"Standing":mi(P.bleed>.2?P.strength<.75?"Staggering, bleeding":"Hit, bleeding":P.stun>.25?"Dazed":"On his feet"):mi(P.outcome)||"Dead"}function z(){let P=e.payout(),N=e.state;return Gt("lines").innerHTML=P.lines.map(O=>`<tr><td>${mi(O[0])}</td><td>${O[1]}</td><td>${oi(O[2])}</td></tr>`).join(""),Gt("total").textContent=oi(P.total),Gt("blood-fill").style.width=N.blood.toFixed(1)+"%",Gt("blood-num").textContent=Math.round(N.blood)+"%",Gt("condition").textContent=k(),P}z();let X=[];function dt(P){let N=innerWidth<=560?4:6,O=X.slice();for(let U=O.length-1;U>=1&&O.length>N;U--)O[U].level===1&&O.splice(U,1);O.length=Math.min(O.length,N),Gt("feed").innerHTML=O.map((U,It)=>`<li class="l${U.level}${U.fatal?" fatal":""}${U===X[0]&&P?" new":""}${It>=2?" old":""}">${cu(U.base,U.side,U.level)}<em>+${oi(eu[U.level])}</em></li>`).join("")+(X.length>N?`<li class="more">and ${X.length-N} more</li>`:"")}function Mt(){let P=X.slice().sort((It,bt)=>bt.level-It.level),N=P.filter(It=>It.level>=2),O=P.length-N.length,U=N.slice(0,5).map(It=>(It.level===3?"<b>":"")+cu(It.base,It.side,It.level)+(It.level===3?"</b>":""));return N.length>5&&U.push(N.length-5+" more "+si.injury.levels[2]),O&&U.push(O+" "+si.injury.levels[1]),U.join(" \xB7 ")}let xt={head:"Head",neck:"Neck",chest:"Chest",gut:"Gut",arm:"Arm",leg:"Leg"},Wt=new J,Ot=P=>{if(si.haptics&&navigator.vibrate)try{navigator.vibrate(P)}catch{}};function Lt(P,N){if(e.state.done)return;if(ue(),St<=0){Gt("pips").classList.remove("nudge"),Gt("pips").offsetWidth,Gt("pips").classList.add("nudge"),kt.play("deny",{ui:!0,vol:.4});return}let O=fc[K],U=new J().subVectors(N,o.position).normalize(),It=Math.hypot(U.x,U.z)||1,bt=O.kind==="ballistic"?[U.x,U.y,U.z]:[U.x/It*.97,K==="bat"?.2:.1,U.z/It*.97],Jt=[N.x,N.y,N.z],de=e.hit(P,Jt,bt,O);if(!de)return;Ht()||(St--,Xt()),Ot(O.impulse>100?35:18);let Ae=new Un(new Ns(O.kind==="ballistic"?.024:.04,10,8),new ms({color:O.bleed>0?ht.mark:1314828}));if(at[P].worldToLocal(Wt.copy(N)),Ae.position.copy(Wt),at[P].add(Ae),it.push(Ae),O.kind==="ballistic"){V.setFromPoints([o.position.clone().add(new J(.22,-.3,0).applyQuaternion(o.quaternion)),N.clone()]),Fe.material.opacity=.9,kt.play(K==="shotgun"?"shotgun":"pistol",{vol:.95}),kt.play(si.sounds.wound,{vol:K==="shotgun"?.75:.55,pan:M(Jt),delay:.03});for(let $e=0;$e<(K==="shotgun"?46:18);$e++)ye.emit(Jt,[bt[0]*(1+Math.random()*3)+(Math.random()-.5)*1.2,.3+Math.random()*1.6,bt[2]*(1+Math.random()*3)+(Math.random()-.5)*1.2],1.5)}else kt.play(K,{vol:K==="poke"?.6:.9,pan:M(Jt)}),jt(Jt,8,1.2);let Le=de==="thigh"||de==="shin"?"leg":de;Zt(xt[Le]||Le,Jt,!0),e.state.alive&&!e.state.ko&&(O.bleed>0||O.stun>.3)&&kt.play("grunt",{vol:.4,pan:M(Jt),delay:.12}),kt.play("whoosh",{vol:.45,delay:.04,ui:!0}),st=1.1,Ht()&&(Gt("hint").hidden=!0)}function ft(P){for(let N of P)if(N.type==="fall"&&e.state.alive&&!e.state.ko&&kt.play("grunt",{vol:.3,pan:M(N.pos),rate:1.15}),N.type==="impact"){let O=Math.min(1,N.dv/9);N.dv>5&&Ot(12),kt.play(N.zone==="head"?"knock":N.zone==="chest"||N.zone==="gut"?"thud":"limb",{vol:.12+O*.8,rate:1.12-O*.22,pan:M(N.pos)}),jt(N.pos,Math.min(10,2+Math.round(N.dv)),.8)}else if(N.type==="injury"){let O=X.findIndex(It=>It.bone===N.bone);O>=0&&X.splice(O,1);let U=N.base==="neck"&&N.level>=2||N.base==="skull"&&N.level===3;X.unshift({bone:N.bone,base:N.base,side:N.side,level:N.level,fatal:U}),dt(!0),N.level>=2&&(kt.play(si.sounds.snap,{vol:N.level===3?.75:.5,rate:N.level===3?.85:1.05,pan:M(N.pos),delay:N.cause==="shot"?.05:0}),Ot(N.level===3?28:14)),U&&N.cause!=="shot"&&Zt(mi(N.base==="neck"?"Broken neck":"Skull shattered"),N.pos,!0,.5)}else if(N.type==="step")kt.play(N.hurt>.3?"scuff":"step",{vol:N.hurt>.3?.3:.22,pan:M(N.pos)}),e.state.hits>0&&jt(N.pos,2,.35);else if(N.type==="buckle")kt.play("scuff",{vol:.2,pan:M(N.pos)});else if(N.type==="glass"){kt.play("glass",{vol:e.state.clock-Yt>.7?.9:.4,pan:M(N.pos),rate:.9+Math.random()*.25}),Ot(30);for(let O=0;O<26;O++)Et.emit([N.pos[0]+(Math.random()-.5)*.9,N.pos[1],N.pos[2]+(Math.random()-.5)*.9],[(Math.random()-.5)*3,-Math.random()*2,(Math.random()-.5)*3],.9+Math.random()*.6);e.state.clock-Yt>.7&&Zt("Through the glass",N.pos,!0,.5),Yt=e.state.clock}else if(N.type==="fall"&&(e.state.fellBecause==="edge"||e.state.fellBecause==="trip"))Zt(e.state.fellBecause==="trip"?"Over the sill":"Lost his footing",N.pos,!0,.7);else if(N.type==="out")Zt("Out cold",N.pos,!0,.55);else if(N.type==="rise")kt.play("grunt",{vol:.3,pan:M(N.pos),rate:.9}),kt.play("scuff",{vol:.3,pan:M(N.pos)});else if(N.type==="up")Zt("Back on his feet",N.pos,!0,.9);else if(N.type==="gaveout")kt.play("groan",{vol:.35,pan:M(N.pos)});else if(N.type==="kneel")kt.play("knees",{vol:.6,pan:M(N.pos)}),kt.play("groan",{vol:.32,pan:M(N.pos),delay:.1}),Zt("Knees",N.pos,!1,.9);else if(N.type==="down")N.onFeet>1&&Zt("On his feet "+N.onFeet.toFixed(1)+" s",N.pos,!1,.6);else if(N.type==="dead"&&N.cause==="Bled out")Zt(mi("Bled out")+" \xB7 "+N.time.toFixed(1)+" s",N.pos,!0,.5);else if(N.type==="done"&&!Ft){Ft=!0,H=performance.now();let O=z(),U=e.levelKey,It="";if(Ht())Gt("result-label").textContent="Free play",Gt("result-total").textContent=oi(O.total),Gt("result-note").textContent=mi(N.outcome)+" \xB7 nothing is banked in free play";else{let Jt=au(vt,U,e.state,O.total),de=Ur(vt);Dt(),Gt("result-label").textContent=Jt.record&&Jt.pay>0?"New best take":"Take over",Gt("result-total").textContent=oi(Jt.pay+Jt.bonus),Gt("result-note").textContent=mi(N.outcome)+(de>1?" \xB7 pays \xD7"+de.toFixed(2):"")+" \xB7 best here "+oi(vt.best[U]||0),It=Jt.goals.map(Le=>`<li><span>\u2605</span>${Le.text}<em>+${oi(Le.reward)}</em></li>`).join("")+Jt.opened.map(Le=>`<li class="opened"><span>\u2192</span>New level: ${bi[Le].label}</li>`).join("");let Ae=su(vt);Ae&&(It+=`<li class="save-for"><span>$</span>${vt.bank>=Ae.price?"You can afford "+Ae.name:oi(Ae.price-vt.bank)+" short of "+Ae.name}</li>`),Jt.goals.length&&kt.play("goal",{ui:!0,vol:.5,delay:.25})}kt.play("stamp",{ui:!0,vol:.45}),Gt("result-goals").innerHTML=It,Gt("result-injuries").innerHTML=Mt(),Gt("result-lines").innerHTML=O.lines.filter(Jt=>Jt[2]>0).map(Jt=>`<tr><td>${mi(Jt[0])}</td><td>${Jt[1]}</td><td>${oi(Jt[2])}</td></tr>`).join(""),Gt("result-shop").hidden=Ht();let bt=!Ht()&&It.includes("New level")?Object.keys(bi).filter(Jt=>rs(vt,Jt)).at(-1):"";Gt("result-go").hidden=!bt,Gt("result-go").dataset.level=bt,bt&&(Gt("result-go").textContent="Go to "+bi[bt].label),_(),A(),Gt("result").hidden=!1}}let Z={yaw:-1.12,pitch:.22,dist:6.2,zoom:.8,target:new J(0,.95,0),aim:{yaw:-1.12,pitch:.22,dist:6.2},swing:0},le=new J,v=new Pa,F=new ve,j=null;i.addEventListener("pointerdown",P=>{j={x:P.clientX,y:P.clientY,moved:!1,id:P.pointerId},i.setPointerCapture(P.pointerId)}),i.addEventListener("pointermove",P=>{if(!j||j.id!==P.pointerId)return;let N=P.clientX-j.x,O=P.clientY-j.y;!j.moved&&Math.hypot(N,O)<7||(j.moved=!0,yt=!0,Z.yaw-=N*.006,Z.pitch=Math.max(.03,Math.min(1.3,Z.pitch+O*.005)),Z.swing===0&&(Z.aim.yaw=Z.yaw,Z.aim.pitch=Z.pitch),j.x=P.clientX,j.y=P.clientY)});let q=P=>{if(!j||j.id!==P.pointerId)return;let N=!j.moved;if(j=null,!N||P.type==="pointercancel")return;if(e.state.done){performance.now()-H>450&&R();return}let O=i.getBoundingClientRect();F.set((P.clientX-O.left)/O.width*2-1,-((P.clientY-O.top)/O.height)*2+1),v.setFromCamera(F,o);let U=v.intersectObjects(at,!1);U.length&&Lt(U[0].object.userData.part,U[0].point)};i.addEventListener("pointerup",q),i.addEventListener("pointercancel",q),i.addEventListener("wheel",P=>{Z.dist=Math.max(3,Math.min(16,Z.dist*(1+Math.sign(P.deltaY)*.08))),Z.swing===0&&(Z.aim.dist=Z.dist),P.preventDefault()},{passive:!1});function et(){let P=i.clientWidth,N=i.clientHeight;!P||!N||(s.setSize(P,N,!1),o.aspect=P/N,o.updateProjectionMatrix())}new ResizeObserver(et).observe(i),et();function Bt(P){let N=e.pos(1),O=e.state,U=e.level.cam.fall;if(le.set(N[0],Math.max(e.groundY(N[0],N[2])+.5,N[1]-.4),N[2]),Z.target.lerp(le,1-Math.exp(-P*3)),Z.zoom+=((O.hits===0?.8:1)-Z.zoom)*Math.min(1,P*2),U&&!yt&&O.drop>.35){Z.swing=Math.min(1,Z.swing+P/.9);let Jt=Z.swing*Z.swing*(3-2*Z.swing),de=U.yaw-Z.aim.yaw;de=Math.atan2(Math.sin(de),Math.cos(de)),Z.yaw=Z.aim.yaw+de*Jt,Z.pitch=Z.aim.pitch+(U.pitch-Z.aim.pitch)*Jt,Z.dist=Z.aim.dist+(U.dist-Z.aim.dist)*Jt}let It=Z.dist*Z.zoom/Math.pow(Math.min(1,o.aspect),.75),bt=Math.cos(Z.pitch);if(o.position.set(Z.target.x+Math.sin(Z.yaw)*bt*It,Z.target.y+Math.sin(Z.pitch)*It,Z.target.z+Math.cos(Z.yaw)*bt*It),o.lookAt(Z.target),l.position.set(Z.target.x-4,Z.target.y+10,Z.target.z+7),l.target.position.set(Z.target.x,Z.target.y-1,Z.target.z),b.visible=O.mode==="balance"&&!O.done&&(Ht()||St>0),b.visible){let Jt=e.pos(0);b.position.set(Jt[0],e.groundY(Jt[0],Jt[2])+.012,Jt[2]),b.rotation.y=Math.atan2(-(Jt[0]-o.position.x),-(Jt[2]-o.position.z))}}let $t=performance.now(),Vt=0,qt=!1,ie={n:0,sum:0,stage:0};function _e(P){if(ie.stage>1||(++ie.n>30&&(ie.sum+=P),ie.n<150))return;let N=ie.sum/120>.03;if(ie.n=0,ie.sum=0,!N){ie.stage=2;return}ie.stage===0?(s.setPixelRatio(1),et()):l.castShadow=!1,ie.stage++}let Te={n:0,sum:0,worst:0,phys:0};function re(P){if(Te.n++,Te.sum+=P,Te.worst=Math.max(Te.worst,P),Te.sum<.5)return;let N=l.castShadow?s.getPixelRatio()<Math.min(window.devicePixelRatio||1,2)?"reduced resolution":"full quality":"no shadows";Gt("fps").textContent=Math.round(Te.n/Te.sum)+" fps \xB7 worst frame "+Math.round(Te.worst*1e3)+" ms \xB7 physics "+(Te.phys/Te.n).toFixed(1)+" ms \xB7 "+N+" \xB7 "+si.id+" edition",Te.n=0,Te.sum=0,Te.worst=0,Te.phys=0}Gt("fps").hidden=!te;function Pe(P){qt||(te&&re((P-$t)/1e3),_e((P-$t)/1e3),xn(Math.max(0,Math.min(.05,(P-$t)/1e3))),$t=P,requestAnimationFrame(Pe))}function xn(P,N=!0){st=Math.max(0,st-P);let O=e.state;Tt=!Ht()&&O.mode==="down"&&O.spent&&O.alive&&O.bleed>.2&&st<=0&&(St<=0||O.time-O.downAt>1.5);let U=_t&&O.hits>0&&!O.done;U&&(st=0);let It=U?7:Tt?6:At?.2:st>.45?.16:st>0?.16+(1-st/.45)*.84:1;ot+=(It-ot)*Math.min(1,P*(Tt?3:U?8:14)),!Tt&&!U&&ot>1&&(ot=1);let bt=Math.min(P*ot,18/120);kt.setSlow(Math.min(1,ot));let Jt=Math.max(1,Math.ceil(bt/(1/120))),de=te?performance.now():0;if(bt>1e-5)for(let $e=0;$e<Jt;$e++)ft(e.step(bt/Jt));te&&(Te.phys+=performance.now()-de),ut(),Ke(bt),ae.step(bt),ye.step(bt,dn),Et.step(bt),e.levelKey==="window"&&e.state.glass>0&&B(),Fe.material.opacity=Math.max(0,Fe.material.opacity-P*5),Bt(P),Ve(P);let Ae=e.state.wrap||0,Le=e.state.hits>0&&!e.state.done&&Ae>.2;Gt("wrap").hidden===Le&&(Gt("wrap").hidden=!Le),Le&&(Gt("wrap-fill").style.width=(Ae*100).toFixed(0)+"%"),Vt+=P,Vt>.1&&!e.state.done&&(Vt=0,z()),N&&s.render(r,o)}if(kt.setMuted(!!vt.muted),h(),te){Gt("soundboard").hidden=!1;for(let P of kt.names){let N=document.createElement("button");N.type="button",N.className="util",N.textContent=P,N.addEventListener("click",()=>{ue(),kt.play(P,{vol:.9,ui:!0})}),Gt("soundboard-list").appendChild(N)}}Gt("intro").hidden=!!vt.seenIntro,Gt("intro-start").addEventListener("click",()=>{vt.seenIntro=!0,Dt(),Gt("intro").hidden=!0,ue()}),Ut(),ct(bi[vt.level]&&rs(vt,vt.level)?vt.level:"yard",!0),Gt("loading").hidden=!0,ut(),requestAnimationFrame(Pe),window.__imhit={sim:e,setTool(P){K=P,Me()},setMode:Pt,career:lu,arrow:b,edition:si,sfx:kt,get save(){return vt},get actionsLeft(){return St},strikePart(P,N=0){let O=pn.findIndex(Jt=>Jt.name===P),U=at[O],It=new J().setFromMatrixPosition(U.matrixWorld).add(new J(0,N,0)),bt=o.position.clone().sub(It).setY(0).normalize();Lt(O,It.addScaledVector(bt,pn[O].r))},reset:R,setLevel:P=>ct(P,!0),screen(P){let N=pn.findIndex(It=>It.name===P),O=new J().setFromMatrixPosition(at[N].matrixWorld).project(o),U=i.getBoundingClientRect();return[U.left+(O.x*.5+.5)*U.width,U.top+(-O.y*.5+.5)*U.height]},cam:Z,physics:eo,manual(){qt=!0},advance:xn}}Promise.all([ay(),eo==="previous"?Promise.resolve().then(()=>(Gf(),zf)).then(n=>n.createSim):If]).then(([n,t])=>ly(n,t)).catch(n=>{console.error(n),Gt("loading").textContent="Could not start the physics engine in this browser."});
