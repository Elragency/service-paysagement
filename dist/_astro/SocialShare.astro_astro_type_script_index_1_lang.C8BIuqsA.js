var Jt={exports:{}};(function(Rt,Qt){(function(lt,Me){Rt.exports=Me()})(self,()=>(()=>{var lt={170:(K,d,$)=>{$.r(d),$.d(d,{afterMain:()=>He,afterRead:()=>Z,afterWrite:()=>ft,applyStyles:()=>Ue,arrow:()=>gt,auto:()=>b,basePlacements:()=>C,beforeMain:()=>N,beforeRead:()=>h,beforeWrite:()=>ct,bottom:()=>A,clippingParents:()=>ne,computeStyles:()=>Ze,createPopper:()=>Ft,createPopperBase:()=>zt,createPopperLite:()=>Xt,detectOverflow:()=>xe,end:()=>z,eventListeners:()=>Ge,flip:()=>St,hide:()=>At,left:()=>w,main:()=>ge,modifierPhases:()=>dt,offset:()=>It,placements:()=>p,popper:()=>v,popperGenerator:()=>Re,popperOffsets:()=>nt,preventOverflow:()=>Pt,read:()=>k,reference:()=>r,right:()=>f,start:()=>_,top:()=>D,variationPlacements:()=>s,viewport:()=>R,write:()=>ut});var D="top",A="bottom",f="right",w="left",b="auto",C=[D,A,f,w],_="start",z="end",ne="clippingParents",R="viewport",v="popper",r="reference",s=C.reduce(function(t,e){return t.concat([e+"-"+_,e+"-"+z])},[]),p=[].concat(C,[b]).reduce(function(t,e){return t.concat([e,e+"-"+_,e+"-"+z])},[]),h="beforeRead",k="read",Z="afterRead",N="beforeMain",ge="main",He="afterMain",ct="beforeWrite",ut="write",ft="afterWrite",dt=[h,k,Z,N,ge,He,ct,ut,ft];function oe(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof F(t).Element||t instanceof Element}function X(t){return t instanceof F(t).HTMLElement||t instanceof HTMLElement}function Ke(t){return typeof ShadowRoot<"u"&&(t instanceof F(t).ShadowRoot||t instanceof ShadowRoot)}const Ue={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var o=e.styles[n]||{},c=e.attributes[n]||{},i=e.elements[n];X(i)&&oe(i)&&(Object.assign(i.style,o),Object.keys(c).forEach(function(u){var a=c[u];a===!1?i.removeAttribute(u):i.setAttribute(u,a===!0?"":a)}))})},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(o){var c=e.elements[o],i=e.attributes[o]||{},u=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:n[o]).reduce(function(a,l){return a[l]="",a},{});X(c)&&oe(c)&&(Object.assign(c.style,u),Object.keys(i).forEach(function(a){c.removeAttribute(a)}))})}},requires:["computeStyles"]};function re(t){return t.split("-")[0]}var he=Math.max,je=Math.min,we=Math.round;function ze(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function pt(){return!/^((?!chrome|android).)*safari/i.test(ze())}function be(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var o=t.getBoundingClientRect(),c=1,i=1;e&&X(t)&&(c=t.offsetWidth>0&&we(o.width)/t.offsetWidth||1,i=t.offsetHeight>0&&we(o.height)/t.offsetHeight||1);var u=(pe(t)?F(t):window).visualViewport,a=!pt()&&n,l=(o.left+(a&&u?u.offsetLeft:0))/c,g=(o.top+(a&&u?u.offsetTop:0))/i,y=o.width/c,m=o.height/i;return{width:y,height:m,top:g,right:l+y,bottom:g+m,left:l,x:l,y:g}}function Fe(t){var e=be(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function ht(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Ke(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ae(t){return F(t).getComputedStyle(t)}function Wt(t){return["table","td","th"].indexOf(oe(t))>=0}function ce(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Be(t){return oe(t)==="html"?t:t.assignedSlot||t.parentNode||(Ke(t)?t.host:null)||ce(t)}function mt(t){return X(t)&&ae(t).position!=="fixed"?t.offsetParent:null}function Pe(t){for(var e=F(t),n=mt(t);n&&Wt(n)&&ae(n).position==="static";)n=mt(n);return n&&(oe(n)==="html"||oe(n)==="body"&&ae(n).position==="static")?e:n||function(o){var c=/firefox/i.test(ze());if(/Trident/i.test(ze())&&X(o)&&ae(o).position==="fixed")return null;var i=Be(o);for(Ke(i)&&(i=i.host);X(i)&&["html","body"].indexOf(oe(i))<0;){var u=ae(i);if(u.transform!=="none"||u.perspective!=="none"||u.contain==="paint"||["transform","perspective"].indexOf(u.willChange)!==-1||c&&u.willChange==="filter"||c&&u.filter&&u.filter!=="none")return i;i=i.parentNode}return null}(t)||e}function Xe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Te(t,e,n){return he(t,je(e,n))}function vt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function yt(t,e){return e.reduce(function(n,o){return n[o]=t,n},{})}const gt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,c=t.options,i=n.elements.arrow,u=n.modifiersData.popperOffsets,a=re(n.placement),l=Xe(a),g=[w,f].indexOf(a)>=0?"height":"width";if(i&&u){var y=function(H,T){return vt(typeof(H=typeof H=="function"?H(Object.assign({},T.rects,{placement:T.placement})):H)!="number"?H:yt(H,C))}(c.padding,n),m=Fe(i),j=l==="y"?D:w,O=l==="y"?A:f,B=n.rects.reference[g]+n.rects.reference[l]-u[l]-n.rects.popper[g],M=u[l]-n.rects.reference[l],x=Pe(i),W=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0,q=B/2-M/2,L=y[j],I=W-m[g]-y[O],E=W/2-m[g]/2+q,S=Te(L,E,I),P=l;n.modifiersData[o]=((e={})[P]=S,e.centerOffset=S-E,e)}},effect:function(t){var e=t.state,n=t.options.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o!="string"||(o=e.elements.popper.querySelector(o)))&&ht(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(t){return t.split("-")[1]}var $t={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wt(t){var e,n=t.popper,o=t.popperRect,c=t.placement,i=t.variation,u=t.offsets,a=t.position,l=t.gpuAcceleration,g=t.adaptive,y=t.roundOffsets,m=t.isFixed,j=u.x,O=j===void 0?0:j,B=u.y,M=B===void 0?0:B,x=typeof y=="function"?y({x:O,y:M}):{x:O,y:M};O=x.x,M=x.y;var W=u.hasOwnProperty("x"),q=u.hasOwnProperty("y"),L=w,I=D,E=window;if(g){var S=Pe(n),P="clientHeight",H="clientWidth";S===F(n)&&ae(S=ce(n)).position!=="static"&&a==="absolute"&&(P="scrollHeight",H="scrollWidth"),(c===D||(c===w||c===f)&&i===z)&&(I=A,M-=(m&&S===E&&E.visualViewport?E.visualViewport.height:S[P])-o.height,M*=l?1:-1),(c===w||(c===D||c===A)&&i===z)&&(L=f,O-=(m&&S===E&&E.visualViewport?E.visualViewport.width:S[H])-o.width,O*=l?1:-1)}var T,V=Object.assign({position:a},g&&$t),U=y===!0?function(G,J){var le=G.x,ie=G.y,Y=J.devicePixelRatio||1;return{x:we(le*Y)/Y||0,y:we(ie*Y)/Y||0}}({x:O,y:M},F(n)):{x:O,y:M};return O=U.x,M=U.y,l?Object.assign({},V,((T={})[I]=q?"0":"",T[L]=W?"0":"",T.transform=(E.devicePixelRatio||1)<=1?"translate("+O+"px, "+M+"px)":"translate3d("+O+"px, "+M+"px, 0)",T)):Object.assign({},V,((e={})[I]=q?M+"px":"",e[L]=W?O+"px":"",e.transform="",e))}const Ze={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,c=o===void 0||o,i=n.adaptive,u=i===void 0||i,a=n.roundOffsets,l=a===void 0||a,g={placement:re(e.placement),variation:Ee(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:c,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,wt(Object.assign({},g,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,wt(Object.assign({},g,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ke={passive:!0};const Ge={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,c=o.scroll,i=c===void 0||c,u=o.resize,a=u===void 0||u,l=F(e.elements.popper),g=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&g.forEach(function(y){y.addEventListener("scroll",n.update,ke)}),a&&l.addEventListener("resize",n.update,ke),function(){i&&g.forEach(function(y){y.removeEventListener("scroll",n.update,ke)}),a&&l.removeEventListener("resize",n.update,ke)}},data:{}};var Vt={left:"right",right:"left",bottom:"top",top:"bottom"};function qe(t){return t.replace(/left|right|bottom|top/g,function(e){return Vt[e]})}var Yt={start:"end",end:"start"};function bt(t){return t.replace(/start|end/g,function(e){return Yt[e]})}function Je(t){var e=F(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Qe(t){return be(ce(t)).left+Je(t).scrollLeft}function et(t){var e=ae(t),n=e.overflow,o=e.overflowX,c=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+c+o)}function Et(t){return["html","body","#document"].indexOf(oe(t))>=0?t.ownerDocument.body:X(t)&&et(t)?t:Et(Be(t))}function De(t,e){var n;e===void 0&&(e=[]);var o=Et(t),c=o===((n=t.ownerDocument)==null?void 0:n.body),i=F(o),u=c?[i].concat(i.visualViewport||[],et(o)?o:[]):o,a=e.concat(u);return c?a:a.concat(De(Be(u)))}function tt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xt(t,e,n){return e===R?tt(function(o,c){var i=F(o),u=ce(o),a=i.visualViewport,l=u.clientWidth,g=u.clientHeight,y=0,m=0;if(a){l=a.width,g=a.height;var j=pt();(j||!j&&c==="fixed")&&(y=a.offsetLeft,m=a.offsetTop)}return{width:l,height:g,x:y+Qe(o),y:m}}(t,n)):pe(e)?function(o,c){var i=be(o,!1,c==="fixed");return i.top=i.top+o.clientTop,i.left=i.left+o.clientLeft,i.bottom=i.top+o.clientHeight,i.right=i.left+o.clientWidth,i.width=o.clientWidth,i.height=o.clientHeight,i.x=i.left,i.y=i.top,i}(e,n):tt(function(o){var c,i=ce(o),u=Je(o),a=(c=o.ownerDocument)==null?void 0:c.body,l=he(i.scrollWidth,i.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),g=he(i.scrollHeight,i.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),y=-u.scrollLeft+Qe(o),m=-u.scrollTop;return ae(a||i).direction==="rtl"&&(y+=he(i.clientWidth,a?a.clientWidth:0)-l),{width:l,height:g,x:y,y:m}}(ce(t)))}function Nt(t,e,n,o){var c=e==="clippingParents"?function(l){var g=De(Be(l)),y=["absolute","fixed"].indexOf(ae(l).position)>=0&&X(l)?Pe(l):l;return pe(y)?g.filter(function(m){return pe(m)&&ht(m,y)&&oe(m)!=="body"}):[]}(t):[].concat(e),i=[].concat(c,[n]),u=i[0],a=i.reduce(function(l,g){var y=xt(t,g,o);return l.top=he(y.top,l.top),l.right=je(y.right,l.right),l.bottom=je(y.bottom,l.bottom),l.left=he(y.left,l.left),l},xt(t,u,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ot(t){var e,n=t.reference,o=t.element,c=t.placement,i=c?re(c):null,u=c?Ee(c):null,a=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(i){case D:e={x:a,y:n.y-o.height};break;case A:e={x:a,y:n.y+n.height};break;case f:e={x:n.x+n.width,y:l};break;case w:e={x:n.x-o.width,y:l};break;default:e={x:n.x,y:n.y}}var g=i?Xe(i):null;if(g!=null){var y=g==="y"?"height":"width";switch(u){case _:e[g]=e[g]-(n[y]/2-o[y]/2);break;case z:e[g]=e[g]+(n[y]/2-o[y]/2)}}return e}function xe(t,e){e===void 0&&(e={});var n=e,o=n.placement,c=o===void 0?t.placement:o,i=n.strategy,u=i===void 0?t.strategy:i,a=n.boundary,l=a===void 0?ne:a,g=n.rootBoundary,y=g===void 0?R:g,m=n.elementContext,j=m===void 0?v:m,O=n.altBoundary,B=O!==void 0&&O,M=n.padding,x=M===void 0?0:M,W=vt(typeof x!="number"?x:yt(x,C)),q=j===v?r:v,L=t.rects.popper,I=t.elements[B?q:j],E=Nt(pe(I)?I:I.contextElement||ce(t.elements.popper),l,y,u),S=be(t.elements.reference),P=Ot({reference:S,element:L,strategy:"absolute",placement:c}),H=tt(Object.assign({},L,P)),T=j===v?H:S,V={top:E.top-T.top+W.top,bottom:T.bottom-E.bottom+W.bottom,left:E.left-T.left+W.left,right:T.right-E.right+W.right},U=t.modifiersData.offset;if(j===v&&U){var G=U[c];Object.keys(V).forEach(function(J){var le=[f,A].indexOf(J)>=0?1:-1,ie=[D,A].indexOf(J)>=0?"y":"x";V[J]+=G[ie]*le})}return V}const St={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var c=n.mainAxis,i=c===void 0||c,u=n.altAxis,a=u===void 0||u,l=n.fallbackPlacements,g=n.padding,y=n.boundary,m=n.rootBoundary,j=n.altBoundary,O=n.flipVariations,B=O===void 0||O,M=n.allowedAutoPlacements,x=e.options.placement,W=re(x),q=l||(W===x||!B?[qe(x)]:function(Q){if(re(Q)===b)return[];var ee=qe(Q);return[bt(Q),ee,bt(ee)]}(x)),L=[x].concat(q).reduce(function(Q,ee){return Q.concat(re(ee)===b?function(Se,fe){fe===void 0&&(fe={});var te=fe,$e=te.placement,Ve=te.boundary,Ce=te.rootBoundary,ot=te.padding,rt=te.flipVariations,Le=te.allowedAutoPlacements,it=Le===void 0?p:Le,_e=Ee($e),Ye=_e?rt?s:s.filter(function(se){return Ee(se)===_e}):C,Ae=Ye.filter(function(se){return it.indexOf(se)>=0});Ae.length===0&&(Ae=Ye);var Ie=Ae.reduce(function(se,ve){return se[ve]=xe(Se,{placement:ve,boundary:Ve,rootBoundary:Ce,padding:ot})[re(ve)],se},{});return Object.keys(Ie).sort(function(se,ve){return Ie[se]-Ie[ve]})}(e,{placement:ee,boundary:y,rootBoundary:m,padding:g,flipVariations:B,allowedAutoPlacements:M}):ee)},[]),I=e.rects.reference,E=e.rects.popper,S=new Map,P=!0,H=L[0],T=0;T<L.length;T++){var V=L[T],U=re(V),G=Ee(V)===_,J=[D,A].indexOf(U)>=0,le=J?"width":"height",ie=xe(e,{placement:V,boundary:y,rootBoundary:m,altBoundary:j,padding:g}),Y=J?G?f:w:G?A:D;I[le]>E[le]&&(Y=qe(Y));var ue=qe(Y),me=[];if(i&&me.push(ie[U]<=0),a&&me.push(ie[Y]<=0,ie[ue]<=0),me.every(function(Q){return Q})){H=V,P=!1;break}S.set(V,me)}if(P)for(var We=function(Q){var ee=L.find(function(Se){var fe=S.get(Se);if(fe)return fe.slice(0,Q).every(function(te){return te})});if(ee)return H=ee,"break"},Oe=B?3:1;Oe>0&&We(Oe)!=="break";Oe--);e.placement!==H&&(e.modifiersData[o]._skip=!0,e.placement=H,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ct(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Lt(t){return[D,f,A,w].some(function(e){return t[e]>=0})}const At={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,c=e.rects.popper,i=e.modifiersData.preventOverflow,u=xe(e,{elementContext:"reference"}),a=xe(e,{altBoundary:!0}),l=Ct(u,o),g=Ct(a,c,i),y=Lt(l),m=Lt(g);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:g,isReferenceHidden:y,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":y,"data-popper-escaped":m})}},It={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,c=n.offset,i=c===void 0?[0,0]:c,u=p.reduce(function(y,m){return y[m]=function(j,O,B){var M=re(j),x=[w,D].indexOf(M)>=0?-1:1,W=typeof B=="function"?B(Object.assign({},O,{placement:j})):B,q=W[0],L=W[1];return q=q||0,L=(L||0)*x,[w,f].indexOf(M)>=0?{x:L,y:q}:{x:q,y:L}}(m,e.rects,i),y},{}),a=u[e.placement],l=a.x,g=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=g),e.modifiersData[o]=u}},nt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Ot({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Pt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,c=n.mainAxis,i=c===void 0||c,u=n.altAxis,a=u!==void 0&&u,l=n.boundary,g=n.rootBoundary,y=n.altBoundary,m=n.padding,j=n.tether,O=j===void 0||j,B=n.tetherOffset,M=B===void 0?0:B,x=xe(e,{boundary:l,rootBoundary:g,padding:m,altBoundary:y}),W=re(e.placement),q=Ee(e.placement),L=!q,I=Xe(W),E=I==="x"?"y":"x",S=e.modifiersData.popperOffsets,P=e.rects.reference,H=e.rects.popper,T=typeof M=="function"?M(Object.assign({},e.rects,{placement:e.placement})):M,V=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),U=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,G={x:0,y:0};if(S){if(i){var J,le=I==="y"?D:w,ie=I==="y"?A:f,Y=I==="y"?"height":"width",ue=S[I],me=ue+x[le],We=ue-x[ie],Oe=O?-H[Y]/2:0,Q=q===_?P[Y]:H[Y],ee=q===_?-H[Y]:-P[Y],Se=e.elements.arrow,fe=O&&Se?Fe(Se):{width:0,height:0},te=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},$e=te[le],Ve=te[ie],Ce=Te(0,P[Y],fe[Y]),ot=L?P[Y]/2-Oe-Ce-$e-V.mainAxis:Q-Ce-$e-V.mainAxis,rt=L?-P[Y]/2+Oe+Ce+Ve+V.mainAxis:ee+Ce+Ve+V.mainAxis,Le=e.elements.arrow&&Pe(e.elements.arrow),it=Le?I==="y"?Le.clientTop||0:Le.clientLeft||0:0,_e=(J=U?.[I])!=null?J:0,Ye=ue+rt-_e,Ae=Te(O?je(me,ue+ot-_e-it):me,ue,O?he(We,Ye):We);S[I]=Ae,G[I]=Ae-ue}if(a){var Ie,se=I==="x"?D:w,ve=I==="x"?A:f,ye=S[E],Ne=E==="y"?"height":"width",_t=ye+x[se],Mt=ye-x[ve],st=[D,w].indexOf(W)!==-1,Ht=(Ie=U?.[E])!=null?Ie:0,jt=st?_t:ye-P[Ne]-H[Ne]-Ht+V.altAxis,Bt=st?ye+P[Ne]+H[Ne]-Ht-V.altAxis:Mt,kt=O&&st?function(Zt,Gt,at){var qt=Te(Zt,Gt,at);return qt>at?at:qt}(jt,ye,Bt):Te(O?jt:_t,ye,O?Bt:Mt);S[E]=kt,G[E]=kt-ye}e.modifiersData[o]=G}},requiresIfExists:["offset"]};function Kt(t,e,n){n===void 0&&(n=!1);var o,c,i=X(e),u=X(e)&&function(m){var j=m.getBoundingClientRect(),O=we(j.width)/m.offsetWidth||1,B=we(j.height)/m.offsetHeight||1;return O!==1||B!==1}(e),a=ce(e),l=be(t,u,n),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(i||!i&&!n)&&((oe(e)!=="body"||et(a))&&(g=(o=e)!==F(o)&&X(o)?{scrollLeft:(c=o).scrollLeft,scrollTop:c.scrollTop}:Je(o)),X(e)?((y=be(e,!0)).x+=e.clientLeft,y.y+=e.clientTop):a&&(y.x=Qe(a))),{x:l.left+g.scrollLeft-y.x,y:l.top+g.scrollTop-y.y,width:l.width,height:l.height}}function Ut(t){var e=new Map,n=new Set,o=[];function c(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach(function(u){if(!n.has(u)){var a=e.get(u);a&&c(a)}}),o.push(i)}return t.forEach(function(i){e.set(i.name,i)}),t.forEach(function(i){n.has(i.name)||c(i)}),o}var Tt={placement:"bottom",modifiers:[],strategy:"absolute"};function Dt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Re(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,o=n===void 0?[]:n,c=e.defaultOptions,i=c===void 0?Tt:c;return function(u,a,l){l===void 0&&(l=i);var g,y,m={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tt,i),modifiersData:{},elements:{reference:u,popper:a},attributes:{},styles:{}},j=[],O=!1,B={state:m,setOptions:function(x){var W=typeof x=="function"?x(m.options):x;M(),m.options=Object.assign({},i,m.options,W),m.scrollParents={reference:pe(u)?De(u):u.contextElement?De(u.contextElement):[],popper:De(a)};var q,L,I=function(E){var S=Ut(E);return dt.reduce(function(P,H){return P.concat(S.filter(function(T){return T.phase===H}))},[])}((q=[].concat(o,m.options.modifiers),L=q.reduce(function(E,S){var P=E[S.name];return E[S.name]=P?Object.assign({},P,S,{options:Object.assign({},P.options,S.options),data:Object.assign({},P.data,S.data)}):S,E},{}),Object.keys(L).map(function(E){return L[E]})));return m.orderedModifiers=I.filter(function(E){return E.enabled}),m.orderedModifiers.forEach(function(E){var S=E.name,P=E.options,H=P===void 0?{}:P,T=E.effect;if(typeof T=="function"){var V=T({state:m,name:S,instance:B,options:H}),U=function(){};j.push(V||U)}}),B.update()},forceUpdate:function(){if(!O){var x=m.elements,W=x.reference,q=x.popper;if(Dt(W,q)){m.rects={reference:Kt(W,Pe(q),m.options.strategy==="fixed"),popper:Fe(q)},m.reset=!1,m.placement=m.options.placement,m.orderedModifiers.forEach(function(T){return m.modifiersData[T.name]=Object.assign({},T.data)});for(var L=0;L<m.orderedModifiers.length;L++)if(m.reset!==!0){var I=m.orderedModifiers[L],E=I.fn,S=I.options,P=S===void 0?{}:S,H=I.name;typeof E=="function"&&(m=E({state:m,options:P,name:H,instance:B})||m)}else m.reset=!1,L=-1}}},update:(g=function(){return new Promise(function(x){B.forceUpdate(),x(m)})},function(){return y||(y=new Promise(function(x){Promise.resolve().then(function(){y=void 0,x(g())})})),y}),destroy:function(){M(),O=!0}};if(!Dt(u,a))return B;function M(){j.forEach(function(x){return x()}),j=[]}return B.setOptions(l).then(function(x){!O&&l.onFirstUpdate&&l.onFirstUpdate(x)}),B}}var zt=Re(),Ft=Re({defaultModifiers:[Ge,nt,Ze,Ue,It,St,Pt,gt,At]}),Xt=Re({defaultModifiers:[Ge,nt,Ze,Ue]})},223:(K,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.BREAKPOINTS=d.COMBO_BOX_ACCESSIBILITY_KEY_SET=d.SELECT_ACCESSIBILITY_KEY_SET=d.TABS_ACCESSIBILITY_KEY_SET=d.OVERLAY_ACCESSIBILITY_KEY_SET=d.DROPDOWN_ACCESSIBILITY_KEY_SET=d.POSITIONS=void 0,d.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},d.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],d.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],d.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],d.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],d.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],d.BREAKPOINTS={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},961:(K,d)=>{/*
 * HSBasePlugin
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */Object.defineProperty(d,"__esModule",{value:!0});var $=function(){function D(A,f,w){this.el=A,this.options=f,this.events=w,this.el=A,this.options=f,this.events={}}return D.prototype.createCollection=function(A,f){var w;A.push({id:((w=f?.el)===null||w===void 0?void 0:w.id)||A.length+1,element:f})},D.prototype.fireEvent=function(A,f){if(f===void 0&&(f=null),this.events.hasOwnProperty(A))return this.events[A](f)},D.prototype.on=function(A,f){this.events[A]=f},D}();d.default=$},891:function(K,d,$){/*
 * HSDropdown
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */var D,A=this&&this.__extends||(D=function(R,v){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(r[p]=s[p])},D(R,v)},function(R,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function r(){this.constructor=R}D(R,v),R.prototype=v===null?Object.create(v):(r.prototype=v.prototype,new r)}),f=this&&this.__spreadArray||function(R,v,r){if(r||arguments.length===2)for(var s,p=0,h=v.length;p<h;p++)!s&&p in v||(s||(s=Array.prototype.slice.call(v,0,p)),s[p]=v[p]);return R.concat(s||Array.prototype.slice.call(v))},w=this&&this.__importDefault||function(R){return R&&R.__esModule?R:{default:R}};Object.defineProperty(d,"__esModule",{value:!0});var b=$(292),C=$(170),_=w($(961)),z=$(223),ne=function(R){function v(r,s,p){var h=R.call(this,r,s,p)||this;return h.toggle=h.el.querySelector(":scope > .hs-dropdown-toggle")||h.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||h.el.children[0],h.closers=Array.from(h.el.querySelectorAll(":scope .hs-dropdown-close"))||null,h.menu=h.el.querySelector(":scope > .hs-dropdown-menu"),h.eventMode=(0,b.getClassProperty)(h.el,"--trigger","click"),h.closeMode=(0,b.getClassProperty)(h.el,"--auto-close","true"),h.animationInProcess=!1,h.toggle&&h.menu&&h.init(),h}return A(v,R),v.prototype.init=function(){var r=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle&&this.buildToggle(),this.menu&&this.buildMenu(),this.closers&&this.buildClosers(),(0,b.isIOS)()||(0,b.isIpadOS)()||(this.el.addEventListener("mouseenter",function(){return r.onMouseEnterHandler()}),this.el.addEventListener("mouseleave",function(){return r.onMouseLeaveHandler()}))},v.prototype.resizeHandler=function(){this.eventMode=(0,b.getClassProperty)(this.el,"--trigger","click"),this.closeMode=(0,b.getClassProperty)(this.el,"--auto-close","true")},v.prototype.buildToggle=function(){var r,s=this;!((r=this==null?void 0:this.toggle)===null||r===void 0)&&r.ariaExpanded&&(this.el.classList.contains("open")?this.toggle.ariaExpanded="true":this.toggle.ariaExpanded="false"),this.toggle.addEventListener("click",function(p){return s.onClickHandler(p)})},v.prototype.buildMenu=function(){this.menu.role="menu"},v.prototype.buildClosers=function(){var r=this;this.closers.forEach(function(s){s.addEventListener("click",function(){return r.close()})})},v.prototype.onClickHandler=function(r){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},v.prototype.onMouseEnterHandler=function(){if(this.eventMode!=="hover")return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},v.prototype.onMouseLeaveHandler=function(){if(this.eventMode!=="hover")return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},v.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},v.prototype.absoluteStrategyModifiers=function(){var r=this;return[{name:"applyStyles",fn:function(s){var p=(window.getComputedStyle(r.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),h=(window.getComputedStyle(r.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");s.state.elements.popper.style.position=p,s.state.elements.popper.style.transform=h==="adaptive"?s.state.styles.popper.transform:null,s.state.elements.popper.style.top=null,s.state.elements.popper.style.bottom=null,s.state.elements.popper.style.left=null,s.state.elements.popper.style.right=null,s.state.elements.popper.style.margin=0}}]},v.prototype.open=function(){var r=this;if(this.el.classList.contains("open")||this.animationInProcess)return!1;this.animationInProcess=!0;var s=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),p=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),h=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),k=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ","")),Z=(window.getComputedStyle(this.el).getPropertyValue("--gpu-acceleration")||"true").replace(" ","");h!=="static"&&(this.el._popper=(0,C.createPopper)(this.el,this.menu,{placement:z.POSITIONS[s]||"bottom-start",strategy:h,modifiers:f(f([],h!=="fixed"?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:p==="true"},{name:"offset",options:{offset:[0,k]}},{name:"computeStyles",options:{adaptive:h==="fixed",gpuAcceleration:Z==="true"}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout(function(){var N;!((N=r?.toggle)===null||N===void 0)&&N.ariaExpanded&&(r.toggle.ariaExpanded="true"),r.el.classList.add("open"),r.animationInProcess=!1}),this.fireEvent("open",this.el),(0,b.dispatch)("open.hs.dropdown",this.el,this.el)},v.prototype.close=function(r){var s=this;if(r===void 0&&(r=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;var p;if(this.animationInProcess=!0,r){var h=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,b.afterTransition)(h,function(){return s.destroyPopper()})}else this.destroyPopper();s.menu.style.margin=null,!((p=s?.toggle)===null||p===void 0)&&p.ariaExpanded&&(s.toggle.ariaExpanded="false"),s.el.classList.remove("open"),s.fireEvent("close",s.el),(0,b.dispatch)("close.hs.dropdown",s.el,s.el)},v.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},v.getInstance=function(r,s){var p=window.$hsDropdownCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});return p?s?p:p.element.el:null},v.autoInit=function(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach(function(s){window.$hsDropdownCollection.find(function(p){var h;return((h=p?.element)===null||h===void 0?void 0:h.el)===s})||new v(s)}),window.$hsDropdownCollection){document.addEventListener("keydown",function(s){return v.accessibility(s)}),window.addEventListener("click",function(s){var p=s.target;v.closeCurrentlyOpened(p)});var r=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==r&&(r=innerWidth,v.closeCurrentlyOpened(null,!1))})}},v.open=function(r){var s=window.$hsDropdownCollection.find(function(p){return p.element.el===(typeof r=="string"?document.querySelector(r):r)});s&&s.element.menu.classList.contains("hidden")&&s.element.open()},v.close=function(r){var s=window.$hsDropdownCollection.find(function(p){return p.element.el===(typeof r=="string"?document.querySelector(r):r)});s&&!s.element.menu.classList.contains("hidden")&&s.element.close()},v.accessibility=function(r){this.history=b.menuSearchHistory;var s=window.$hsDropdownCollection.find(function(p){return p.element.el.classList.contains("open")});if(s&&(z.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(r.code)||r.code.length===4&&r.code[r.code.length-1].match(/^[A-Z]*$/))&&!r.metaKey&&!s.element.menu.querySelector("input:focus")&&!s.element.menu.querySelector("textarea:focus"))switch(r.code){case"Escape":s.element.menu.querySelector(".hs-select.active")||(r.preventDefault(),this.onEscape(r));break;case"Enter":s.element.menu.querySelector(".hs-select button:focus")||s.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(r);break;case"ArrowUp":r.preventDefault(),r.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":r.preventDefault(),r.stopImmediatePropagation(),this.onArrow(!1);break;case"Home":r.preventDefault(),r.stopImmediatePropagation(),this.onStartEnd();break;case"End":r.preventDefault(),r.stopImmediatePropagation(),this.onStartEnd(!1);break;default:r.preventDefault(),this.onFirstLetter(r.key)}},v.onEscape=function(r){var s=r.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find(function(h){return h.element.el===s})){var p=window.$hsDropdownCollection.find(function(h){return h.element.el===s});p&&(p.element.close(),p.element.toggle.focus())}else this.closeCurrentlyOpened()},v.onEnter=function(r){var s=r.target.parentElement;if(window.$hsDropdownCollection.find(function(h){return h.element.el===s})){r.preventDefault();var p=window.$hsDropdownCollection.find(function(h){return h.element.el===s});p&&p.element.open()}},v.onArrow=function(r){r===void 0&&(r=!0);var s=window.$hsDropdownCollection.find(function(N){return N.element.el.classList.contains("open")});if(s){var p=s.element.menu;if(!p)return!1;var h=(r?Array.from(p.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(p.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter(function(N){return!N.classList.contains("disabled")}),k=p.querySelector("a:focus, button:focus"),Z=h.findIndex(function(N){return N===k});Z+1<h.length&&Z++,h[Z].focus()}},v.onStartEnd=function(r){r===void 0&&(r=!0);var s=window.$hsDropdownCollection.find(function(k){return k.element.el.classList.contains("open")});if(s){var p=s.element.menu;if(!p)return!1;var h=(r?Array.from(p.querySelectorAll("a")):Array.from(p.querySelectorAll("a")).reverse()).filter(function(k){return!k.classList.contains("disabled")});h.length&&h[0].focus()}},v.onFirstLetter=function(r){var s=this,p=window.$hsDropdownCollection.find(function(ge){return ge.element.el.classList.contains("open")});if(p){var h=p.element.menu;if(!h)return!1;var k=Array.from(h.querySelectorAll("a")),Z=function(){return k.findIndex(function(ge,He){return ge.innerText.toLowerCase().charAt(0)===r.toLowerCase()&&s.history.existsInHistory(He)})},N=Z();N===-1&&(this.history.clearHistory(),N=Z()),N!==-1&&(k[N].focus(),this.history.addHistory(N))}},v.closeCurrentlyOpened=function(r,s){r===void 0&&(r=null),s===void 0&&(s=!0);var p=r&&r.closest(".hs-dropdown")&&r.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?r.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,h=p?window.$hsDropdownCollection.filter(function(k){return k.element.el.classList.contains("open")&&k.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===p}):window.$hsDropdownCollection.filter(function(k){return k.element.el.classList.contains("open")});r&&r.closest(".hs-dropdown")&&(0,b.getClassPropertyAlt)(r.closest(".hs-dropdown"),"--auto-close")==="inside"&&(h=h.filter(function(k){return k.element.el!==r.closest(".hs-dropdown")})),h&&h.forEach(function(k){if(k.element.closeMode==="false"||k.element.closeMode==="outside")return!1;k.element.close(s)})},v.on=function(r,s,p){var h=window.$hsDropdownCollection.find(function(k){return k.element.el===(typeof s=="string"?document.querySelector(s):s)});h&&(h.element.events[r]=p)},v}(_.default);window.addEventListener("load",function(){ne.autoInit()}),window.addEventListener("resize",function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach(function(R){return R.element.resizeHandler()})}),typeof window<"u"&&(window.HSDropdown=ne),d.default=ne},292:function(K,d){var $=this;Object.defineProperty(d,"__esModule",{value:!0}),d.menuSearchHistory=d.classToClassList=d.htmlToElement=d.afterTransition=d.dispatch=d.debounce=d.isFormElement=d.isParentOrElementHidden=d.isEnoughSpace=d.isIpadOS=d.isIOS=d.getZIndex=d.getClassPropertyAlt=d.getClassProperty=d.stringToBoolean=void 0,d.getHighestZIndex=function(f){var w=Number.NEGATIVE_INFINITY;return f.forEach(function(b){var C=D(b);C!=="auto"&&(C=parseInt(C,10))>w&&(w=C)}),w},d.stringToBoolean=function(f){return f==="true"},d.getClassProperty=function(f,w,b){return b===void 0&&(b=""),(window.getComputedStyle(f).getPropertyValue(w)||b).replace(" ","")},d.getClassPropertyAlt=function(f,w,b){b===void 0&&(b="");var C="";return f.classList.forEach(function(_){_.includes(w)&&(C=_)}),C.match(/:(.*)]/)?C.match(/:(.*)]/)[1]:b};var D=function(f){return window.getComputedStyle(f).getPropertyValue("z-index")};d.getZIndex=D,d.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},d.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},d.isEnoughSpace=function(f,w,b,C,_){b===void 0&&(b="auto"),C===void 0&&(C=10),_===void 0&&(_=null);var z=w.getBoundingClientRect(),ne=_?_.getBoundingClientRect():null,R=window.innerHeight,v=ne?z.top-ne.top:z.top,r=(_?ne.bottom:R)-z.bottom,s=f.clientHeight+C;return b==="bottom"?r>=s:b==="top"?v>=s:v>=s||r>=s},d.isFormElement=function(f){return f instanceof HTMLInputElement||f instanceof HTMLTextAreaElement||f instanceof HTMLSelectElement};var A=function(f){return!!f&&(window.getComputedStyle(f).display==="none"||A(f.parentElement))};d.isParentOrElementHidden=A,d.debounce=function(f,w){var b;return w===void 0&&(w=200),function(){for(var C=[],_=0;_<arguments.length;_++)C[_]=arguments[_];clearTimeout(b),b=setTimeout(function(){f.apply($,C)},w)}},d.dispatch=function(f,w,b){b===void 0&&(b=null);var C=new CustomEvent(f,{detail:{payload:b},bubbles:!0,cancelable:!0,composed:!1});w.dispatchEvent(C)},d.afterTransition=function(f,w){var b=function(){w(),f.removeEventListener("transitionend",b,!0)},C=window.getComputedStyle(f),_=C.getPropertyValue("transition-duration");C.getPropertyValue("transition-property")!=="none"&&parseFloat(_)>0?f.addEventListener("transitionend",b,!0):w()},d.htmlToElement=function(f){var w=document.createElement("template");return f=f.trim(),w.innerHTML=f,w.content.firstChild},d.classToClassList=function(f,w,b,C){b===void 0&&(b=" "),C===void 0&&(C="add"),f.split(b).forEach(function(_){return C==="add"?w.classList.add(_):w.classList.remove(_)})},d.menuSearchHistory={historyIndex:-1,addHistory:function(f){this.historyIndex=f},existsInHistory:function(f){return f>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},Me={};function de(K){var d=Me[K];if(d!==void 0)return d.exports;var $=Me[K]={exports:{}};return lt[K].call($.exports,$,$.exports,de),$.exports}return de.d=(K,d)=>{for(var $ in d)de.o(d,$)&&!de.o(K,$)&&Object.defineProperty(K,$,{enumerable:!0,get:d[$]})},de.o=(K,d)=>Object.prototype.hasOwnProperty.call(K,d),de.r=K=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(K,"__esModule",{value:!0})},de(891)})())})(Jt);
