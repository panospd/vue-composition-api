(function(t){function e(e){for(var s,a,o=e[0],i=e[1],u=e[2],d=0,b=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},c=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-composition-api/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1c43":function(t,e,n){},"1c8f":function(t,e,n){},"32ed":function(t,e,n){"use strict";n("8aaf")},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./uk":"ada2","./uk.js":"ada2","./uz":"2e8c","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=c,t.exports=r,r.id="4678"},"70cf":function(t,e,n){"use strict";n("1c43")},"8aaf":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var s=n("9ab4"),r=n("7a23");const c=Object(r["i"])("div",{class:"modal-background"},null,-1),a=Object(r["i"])("div",{class:"modal-content"},[Object(r["i"])("div",{id:"modal"})],-1),o={class:"section"},i={class:"container"};function u(t,e,n,s,u,l){const d=Object(r["F"])("Navbar"),b=Object(r["F"])("router-view");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",{class:"modal",style:Object(r["s"])(t.style)},[c,a,Object(r["i"])("button",{onClick:e[0]||(e[0]=(...e)=>t.hide&&t.hide(...e)),class:"modal-close is-large"})],4),Object(r["i"])("section",o,[Object(r["i"])("div",i,[Object(r["k"])(d),Object(r["k"])(b)])])],64)}const l={class:"field"},d=["name"],b={class:"control"},j=["type","id","value"],f={class:"is-danger help"};function p(t,e,n,s,c,a){return Object(r["x"])(),Object(r["h"])("div",l,[Object(r["i"])("label",{class:"label",name:t.name},Object(r["I"])(t.name),9,d),Object(r["i"])("div",b,[Object(r["i"])("input",{type:t.type,id:t.name,class:"input",value:t.modelValue,onInput:e[0]||(e[0]=(...e)=>t.handleInput&&t.handleInput(...e))},null,40,j)]),Object(r["i"])("p",f,Object(r["I"])(t.error),1)])}var O=Object(r["l"])({props:{name:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},error:{type:String}},setup:function(t,e){var n=function(t){e.emit("update:modelValue",t.target.value)};return{handleInput:n}}});O.render=p;var v=O;const h={class:"navbar"},m={class:"navbar-end"},g={key:0,class:"buttons"},y=Object(r["j"])(" New Post "),w={key:1,class:"buttons"};function k(t,e,n,s,c,a){const o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",h,[Object(r["i"])("div",m,[t.auth?(Object(r["x"])(),Object(r["h"])("div",g,[Object(r["k"])(o,{to:"/posts/new",class:"button"},{default:Object(r["M"])(()=>[y]),_:1}),Object(r["i"])("button",{class:"button",onClick:e[0]||(e[0]=(...e)=>t.signOut&&t.signOut(...e))},"Sign Out")])):(Object(r["x"])(),Object(r["h"])("div",w,[Object(r["i"])("button",{"data-test":"sign-up",class:"button",onClick:e[1]||(e[1]=(...e)=>t.signUp&&t.signUp(...e))},"Sign Up"),Object(r["i"])("button",{class:"button",onClick:e[2]||(e[2]=(...e)=>t.signIn&&t.signIn(...e))},"Sign In")]))])]),(Object(r["x"])(),Object(r["f"])(r["c"],{to:"#modal"},[(Object(r["x"])(),Object(r["f"])(Object(r["G"])(t.component)))]))],64)}var S=n("bc3a"),P=n.n(S),x=Symbol("store"),I=function(){function t(t){this.state=Object(r["B"])(t)}return t.prototype.install=function(t){t.provide(x,this)},t.prototype.getState=function(){return Object(r["C"])(this.state)},t.prototype.createPost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,P.a.post("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),this.state.posts.ids.push(e.data.id),[2]}}))}))},t.prototype.updatePost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,P.a.put("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),[2]}}))}))},t.prototype.createUser=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,P.a.post("/users",t)];case 1:return e=n.sent(),this.state.authors.all.set(e.data.id,e.data),this.state.authors.ids.push(e.data.id),this.state.authors.currentUserId=e.data.id,console.log(this.state.authors),[2]}}))}))},t.prototype.fetchPosts=function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,c;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,P.a.get("/posts")];case 1:for(t=s.sent(),e={ids:[],all:new Map,loaded:!0},n=0,r=t.data;n<r.length;n++)c=r[n],e.ids.push(c.id),e.all.set(c.id,c);return this.state.posts=e,[2]}}))}))},t}(),M=new I({posts:{all:new Map,ids:[],loaded:!1},authors:{all:new Map,ids:[],loaded:!1,currentUserId:void 0}}),T=function(){var t=Object(r["o"])(x);if(!t)throw Error("Did you forgot to call provide?");return t},E=Object(r["D"])(!1),U=Object(r["D"])();function F(){return{component:U,show:E,showModal:function(){return E.value=!0},hideModal:function(){return E.value=!1}}}Object(r["A"])("data-v-0362c2d2");const z=["disabled"];function _(t,e,n,s,c,a){const o=Object(r["F"])("FormInput");return Object(r["x"])(),Object(r["h"])("form",{onSubmit:e[2]||(e[2]=Object(r["O"])((...e)=>t.submit&&t.submit(...e),["prevent"]))},[Object(r["k"])(o,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=e=>t.username=e),name:"Username",type:"text",error:t.userNameStatus.message},null,8,["modelValue","error"]),Object(r["k"])(o,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=e=>t.password=e),name:"Password",type:"password",error:t.passwordStatus.message},null,8,["modelValue","error"]),Object(r["i"])("button",{class:"button is-primary",disabled:!t.userNameStatus.valid||!t.passwordStatus.valid}," Submit ",8,z)],32)}function q(){return{type:"required"}}function D(t){return{type:"length",options:t}}function V(t,e){for(var n=0,s=e;n<s.length;n++){var r=s[n];if("required"===r.type&&(!t||!t.length))return{valid:!1,message:"This value is required"};if("length"===r.type){var c=r.options,a=c.min,o=c.max;if(t.length<a||t.length>o)return{valid:!1,message:"The value must be between "+a+" and "+o}}}return{valid:!0}}Object(r["y"])();var N=Object(r["l"])({components:{FormInput:v},setup:function(){var t=this,e=Object(r["D"])("username"),n=Object(r["d"])((function(){return V(e.value,[q(),D({min:5,max:10})])})),c=Object(r["D"])("password"),a=Object(r["d"])((function(){return V(c.value,[q(),D({min:10,max:40})])})),o=T(),i=F(),u=function(r){return Object(s["b"])(t,void 0,void 0,(function(){var t;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return n.value.valid&&a.value.valid?(t={id:"-1",username:e.value,password:c.value},[4,o.createUser(t)]):[2];case 1:return s.sent(),i.hideModal(),[2]}}))}))};return{username:e,userNameStatus:n,password:c,passwordStatus:a,submit:u}}});n("f982");N.render=_,N.__scopeId="data-v-0362c2d2";var A=N,C=Object(r["l"])({components:{Signup:A},setup:function(){var t=F(),e=T(),n=Object(r["d"])((function(){return!!e.getState().authors.currentUserId})),s=function(){},c=function(){t.component.value=Object(r["p"])(A),t.showModal()},a=function(){};return{component:t.component,signIn:s,signUp:c,signOut:a,auth:n,show:function(){return t.showModal()}}}});C.render=k;var L=C,W=Object(r["l"])({name:"App",components:{Navbar:L,FormInput:v},setup:function(){var t=F(),e=Object(r["d"])((function(){return{display:t.show.value?"block":"none"}}));return{style:e,hide:function(){return t.hideModal()}}}});n("32ed");W.render=u;var H=W,J=n("c1df"),B=n.n(J),G={id:"1",title:"Today",created:B()().subtract(1,"second"),authorId:"1"},K={id:"2",title:"This Week",created:B()().subtract(2,"days"),authorId:"1"},$={id:"3",title:"This Month",created:B()().subtract(12,"days"),authorId:"1"},Q=n("6c02");function R(t,e,n,s,c,a){const o=Object(r["F"])("Timeline"),i=Object(r["F"])("Spinner");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])(()=>[Object(r["k"])(o)]),fallback:Object(r["M"])(()=>[Object(r["k"])(i)]),_:1})}const X={class:"message is-primary is-marginless"},Y={class:"message-header"},Z={class:"is-primary panel"},tt={class:"panel-tabs"},et=["data-test","onClick"];function nt(t,e,n,s,c,a){const o=Object(r["F"])("TimelinePost");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",X,[Object(r["i"])("div",Y,[Object(r["i"])("div",null,"Posts for "+Object(r["I"])(t.currentPeriod.toLowerCase()),1)])]),Object(r["i"])("nav",Z,[Object(r["i"])("span",tt,[(Object(r["x"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(t.periods,e=>(Object(r["x"])(),Object(r["h"])("a",{key:e,class:Object(r["r"])({"is-active":t.currentPeriod===e}),"data-test":e,onClick:n=>t.setPeriod(e)},Object(r["I"])(e),11,et))),128))]),(Object(r["x"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(t.posts,t=>(Object(r["x"])(),Object(r["f"])(o,{key:t.id,class:"panel-block",post:t},null,8,["post"]))),128))])],64)}const st={class:"is-flex is-flex-direction-column is-align-items-flex-start"};function rt(t,e,n,s,c,a){const o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["f"])(o,{key:t.post.id,class:"panel-block",to:t.to},{default:Object(r["M"])(()=>[Object(r["i"])("div",st,[Object(r["i"])("a",null,Object(r["I"])(t.post.title),1),Object(r["i"])("div",null,Object(r["I"])(t.post.created.format("Do MMM")),1)])]),_:1},8,["to"])}var ct=Object(r["l"])({name:"TimelinePost",props:{post:{type:Object,required:!0}},setup:function(t){return{to:"/posts/"+t.post.id}}});ct.render=rt;var at=ct,ot=Object(r["l"])({name:"Timeline",components:{TimelinePost:at},setup:function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,c,a,o;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=["Today","This Week","This Month"],e=Object(r["D"])(t[0]),n=T(),n.getState().posts.loaded?[3,2]:[4,n.fetchPosts()];case 1:s.sent(),s.label=2;case 2:return c=n.getState().posts.ids.reduce((function(t,e){var s=n.getState().posts.all.get(e);if(!s)throw Error("This post was not found");return t.concat(s)}),[]),a=Object(r["d"])((function(){return c.filter((function(t){return"Today"===e.value?t.created.isAfter(B()().subtract(1,"day")):"This Week"===e.value?t.created.isAfter(B()().subtract(1,"week")):"This Month"===e.value&&t.created.isAfter(B()().subtract(1,"month"))}))})),o=function(t){e.value=t},[2,{periods:t,currentPeriod:e,setPeriod:o,posts:a}]}}))}))}});ot.render=nt;var it=ot;const ut={class:"progress is-primary is-small"};function lt(t,e){return Object(r["x"])(),Object(r["h"])("progress",ut)}const dt={};dt.render=lt;var bt=dt,jt=Object(r["l"])({name:"Home",components:{Timeline:it,Spinner:bt}});jt.render=R;var ft=jt;function pt(t,e,n,s,c,a){const o=Object(r["F"])("post-writer");return Object(r["x"])(),Object(r["f"])(o,{post:t.newPost,onSave:t.save},null,8,["post","onSave"])}const Ot={class:"columns"},vt={class:"column"},ht={class:"field"},mt=Object(r["i"])("div",{class:"label"},"New Post",-1),gt={class:"columns"},yt={class:"column"},wt=["innerHTML"],kt={class:"columns"},St={class:"column"};function Pt(t,e,n,s,c,a){return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",Ot,[Object(r["i"])("div",vt,[Object(r["i"])("div",ht,[mt,Object(r["N"])(Object(r["i"])("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.title=e),type:"text",class:"input","data-test":"title"},null,512),[[r["K"],t.title]])])])]),Object(r["i"])("div",gt,[Object(r["i"])("div",yt,[Object(r["i"])("div",{contenteditable:"",ref:"contentEditable",onInput:e[1]||(e[1]=(...e)=>t.handleInput&&t.handleInput(...e)),"data-test":"content"},null,544)]),Object(r["i"])("div",{innerHTML:t.html,class:"column"},null,8,wt)]),Object(r["i"])("div",kt,[Object(r["i"])("div",St,[Object(r["i"])("button",{class:"button is-primary is-pulled-right",onClick:e[2]||(e[2]=(...e)=>t.save&&t.save(...e)),"data-test":"submit"}," Submit ")])])],64)}var xt=n("0e54"),It=n("1487"),Mt=n.n(It),Tt=n("b047"),Et=n.n(Tt),Ut=Object(r["l"])({name:"PostWriter",props:{post:{type:Object,required:!0}},emits:{save:function(t){return!0}},setup:function(t,e){var n=Object(r["D"])(t.post.title),c=Object(r["D"])(t.post.markdown||""),a=Object(r["D"])(""),o=function(t){a.value=Object(xt["parse"])(t,{gfm:!0,breaks:!0,highlight:function(t){return Mt.a.highlightAuto(t).value}})};Object(r["L"])(c,Et()((function(t){o(t)}),250),{immediate:!0});var i=Object(r["D"])(null),u=function(){if(!i.value)throw Error("This should never happen");c.value=i.value.innerText||""};Object(r["v"])((function(){if(!i.value)throw Error("This should never happen");i.value.innerText=c.value}));var l=function(){e.emit("save",Object(s["a"])(Object(s["a"])({},t.post),{title:n.value,html:a.value,markdown:c.value}))};return{title:n,content:c,contentEditable:i,handleInput:u,html:a,save:l}}});n("70cf");Ut.render=Pt;var Ft=Ut,zt=Object(r["l"])({name:"NewPost",components:{PostWriter:Ft},setup:function(){var t=this,e=T(),n=Object(Q["d"])(),r=e.getState().authors.currentUserId;if(!r)throw Error("currentUserId was not found.");var c={id:"-1",title:"Enter your title...",created:B()().subtract(1,"second"),authorId:r},a=function(r){return Object(s["b"])(t,void 0,void 0,(function(){return Object(s["c"])(this,(function(t){switch(t.label){case 0:return[4,e.createPost(r)];case 1:return t.sent(),n.push("/"),[2]}}))}))};return{newPost:c,save:a}}});zt.render=pt;var _t=zt;function qt(t,e,n,s,c,a){const o=Object(r["F"])("PostViewer"),i=Object(r["F"])("Spinner");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])(()=>[Object(r["k"])(o)]),fallback:Object(r["M"])(()=>[Object(r["k"])(i)]),_:1})}const Dt={class:"columns"},Vt=Object(r["i"])("div",{class:"column"},null,-1),Nt={class:"column is-two-thirds"},At=Object(r["j"])(" Edit "),Ct=["innerHTML"],Lt=Object(r["i"])("div",{class:"column"},null,-1);function Wt(t,e,n,s,c,a){const o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["h"])("div",Dt,[Vt,Object(r["i"])("div",Nt,[t.canEdit?(Object(r["x"])(),Object(r["f"])(o,{key:0,to:`/posts/${t.post.id}/edit`,class:"button is-link is-rounded","data-test":"can-edit"},{default:Object(r["M"])(()=>[At]),_:1},8,["to"])):Object(r["g"])("",!0),Object(r["i"])("h1",null,Object(r["I"])(t.post.title),1),Object(r["i"])("div",{innerHTML:t.post.html},null,8,Ct)]),Lt])}var Ht=Object(r["l"])({setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,c;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=T(),e=Object(Q["d"])(),n=Object(Q["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:s.sent(),s.label=2;case 2:if(r=t.getState().posts.all.get(n),!r)throw e.push("/"),Error("Post was not found");return c=r.authorId===t.getState().authors.currentUserId,[2,{post:r,canEdit:c}]}}))}))}});Ht.render=Wt;var Jt=Ht,Bt=Object(r["l"])({components:{PostViewer:Jt,Spinner:bt}});Bt.render=qt;var Gt=Bt;function Kt(t,e,n,s,c,a){const o=Object(r["F"])("PostEditor"),i=Object(r["F"])("Spinner");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])(()=>[Object(r["k"])(o)]),fallback:Object(r["M"])(()=>[Object(r["k"])(i)]),_:1})}function $t(t,e,n,s,c,a){const o=Object(r["F"])("post-writer");return Object(r["x"])(),Object(r["f"])(o,{post:t.post,onSave:t.save},null,8,["post","onSave"])}var Qt=Object(r["l"])({components:{PostWriter:Ft},setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,c,a=this;return Object(s["c"])(this,(function(o){switch(o.label){case 0:return t=T(),e=Object(Q["d"])(),n=Object(Q["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:o.sent(),o.label=2;case 2:if(r=t.getState().posts.all.get(n),!r)throw Error("Post was not found");return r.authorId!==t.getState().authors.currentUserId&&e.push("/"),c=function(n){return Object(s["b"])(a,void 0,void 0,(function(){return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,t.updatePost(n)];case 1:return s.sent(),e.push("/"),[2]}}))}))},[2,{post:r,save:c}]}}))}))}});Qt.render=$t;var Rt=Qt,Xt=Object(r["l"])({components:{PostEditor:Rt,Spinner:bt}});Xt.render=Kt;var Yt=Xt;function Zt(t){var e=Object(Q["a"])({history:Object(Q["b"])("/vue-composition-api"),routes:[{path:"/",component:ft},{path:"/posts/:id",component:Gt},{path:"/posts/:id/edit",component:Yt,meta:{requiresAuth:!0}},{path:"/posts/new",component:_t,meta:{requiresAuth:!0}}]});return e.beforeEach((function(e,n,s){var r=!!t.getState().authors.currentUserId;e.meta.requiresAuth?e.meta.requiresAuth&&r?s():s({path:"/"}):s()})),e}var te=n("0f40"),ee=n.n(te);n("9f21");function ne(){return new Promise((function(t){setTimeout(t,500)}))}P.a.get=function(t){return Object(s["b"])(void 0,void 0,void 0,(function(){return Object(s["c"])(this,(function(e){switch(e.label){case 0:return"/posts"!==t?[3,2]:[4,ne()];case 1:return e.sent(),[2,Promise.resolve({data:[G,K,$]})];case 2:return[2]}}))}))},P.a.post=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n,r,c;return Object(s["c"])(this,(function(a){switch(a.label){case 0:return"/posts"!==t?[3,2]:(r=ee()(100,1e4),n=Object(s["a"])(Object(s["a"])({},e),{id:r.toString(),title:e.title,created:e.created,authorId:e.authorId}),[4,ne()]);case 1:return a.sent(),[2,Promise.resolve({data:n})];case 2:return"/users"!==t?[3,4]:(r=ee()(100,1e4),[4,ne()]);case 3:return a.sent(),c={id:r.toString(),username:e.username},[2,Promise.resolve({data:c})];case 4:return[2]}}))}))},P.a.put=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n,r,c;return Object(s["c"])(this,(function(a){switch(a.label){case 0:return"/posts"!==t?[3,2]:(n=Object(s["a"])(Object(s["a"])({},e),{title:e.title,created:e.created,authorId:e.authorId}),[4,ne()]);case 1:return a.sent(),[2,Promise.resolve({data:n})];case 2:return"/users"!==t?[3,4]:(r=ee()(100,1e4),[4,ne()]);case 3:return a.sent(),c={id:r.toString(),username:e.username},[2,Promise.resolve({data:c})];case 4:return[2]}}))}))};var se=Object(r["e"])(H);se.use(Zt(M)),se.use(M),se.mount("#app")},f982:function(t,e,n){"use strict";n("1c8f")}});
//# sourceMappingURL=app.438b7c61.js.map