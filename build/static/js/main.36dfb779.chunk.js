(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){},14:function(e,t,n){"use strict";t.a="/react-redux-base"},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=(n(80),n(18)),l=n(42),i=n.n(l),u=n(61),s=n.n(u),m=n(11),d=n(62),f=n(63),h=n(35),E={user:{},isLoggingIn:!1,isAuthenticated:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOGGING_IN":return Object(h.a)({},e,{isLoggingIn:!0});case"DONE_LOGGING_IN":return Object(h.a)({},e,{isLoggingIn:!1});case"SET_USER":return Object(h.a)({},e,{user:t.payload,isAuthenticated:!0});default:return e}},b=Object(m.combineReducers)({auth:p}),v=(n(105),[Object(f.createLogger)(),d.a]),g=m.applyMiddleware.apply(void 0,v),w=Object(m.createStore)(b,{},g),O=function(e){return function(t){t({type:"SET_USER",payload:e})}},j=n(23),y=n(12),S=n(43),N=n.n(S),k=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{type:"Oval",color:"black",width:"56",height:"56"}))},A=n(19),x=n(30),I=n(31),U=n(33),z=n(32),L=n(34),R=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(U.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,error:""},n}return Object(L.a)(t,e),Object(I.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Something went wrong. Unable to render this part.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(a.Component),D=n(14),T=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"navigation-div"},r.a.createElement("div",{id:"branding"},r.a.createElement("a",{id:"brand-name",href:D.a},r.a.createElement("h1",null,"Branding"))),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"navigation-items"},r.a.createElement("li",null,r.a.createElement("a",{className:"home",href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"about",href:"/about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},r.a.createElement("button",{id:"sign_in",className:"button"},"Login")))))))},_=Object(c.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,n=e.auth,a=Object(A.a)(e,["component","auth"]);return r.a.createElement(y.b,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(R,null,r.a.createElement(T,null),r.a.createElement("main",{className:"container",id:"private-route-layout"},r.a.createElement(t,e))):r.a.createElement(y.a,{to:"/login"})}}))}),C=Object(c.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,n=e.auth,a=Object(A.a)(e,["component","auth"]);return r.a.createElement(y.b,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(y.a,{to:"/"}):r.a.createElement("main",{className:"container",id:"auth-route-layout"},r.a.createElement(R,null,r.a.createElement(t,e)))}}))}),G=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return r.a.createElement(y.b,Object.assign({},n,{render:function(e){return r.a.createElement(R,null,r.a.createElement(T,null),r.a.createElement("main",{className:"container",id:"public-route-layout"},r.a.createElement(t,e)))}}))},W=function(e){var t=e.location;return r.a.createElement("section",{className:"container",id:"error404"},r.a.createElement("h1",null,"Error: 404"),r.a.createElement("p",null,"The requested url ",r.a.createElement("span",{id:"address404"},t.pathname)," was not found on the server."))},B=n(54),J=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,151))}),P=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,152))}),q=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,153))}),F=function(){return r.a.createElement(j.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(k,null)},r.a.createElement(B.a,{ref:function(e){return window.alertRef=e}}),r.a.createElement(y.d,null,r.a.createElement(C,{exact:!0,path:D.a,component:P}),r.a.createElement(C,{exact:!0,path:"".concat(D.a,"/login"),component:P}),r.a.createElement(_,{exact:!0,path:"".concat(D.a,"/home"),component:J}),r.a.createElement(G,{exact:!0,path:"".concat(D.a,"/about"),component:q}),r.a.createElement(y.b,{component:W}))))};if(localStorage.jwt){i.a.defaults.headers.common.Authorization=w.getState().auth.user.token,i.a.defaults.headers.common.Authorization=localStorage.jwt;var H=s()(localStorage.jwt);localStorage.user&&w.dispatch(O(JSON.parse(localStorage.user)));var M=Date.now()/1e3;H.exp<M&&w.dispatch(function(e){e({type:"LOGOUT_USER"})})}var $=function(){return r.a.createElement(c.a,{store:w},r.a.createElement(F,null))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}Object(o.render)(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-redux-base",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-redux-base","/service-worker.js");K?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Q(t,e)})}}()},54:function(e,t,n){"use strict";n.d(t,"a",function(){return U}),n.d(t,"b",function(){return z});var a=n(30),r=n(31),o=n(33),c=n(32),l=n(34),i=n(46),u=n.n(i),s=n(65),m=n(74),d=n(0),f=n.n(d),h=n(66),E=n.n(h),p=(n(129),n(47)),b=n.n(p),v=n(67),g=n.n(v),w=n(71),O=n.n(w),j=n(72),y=n.n(j),S=n(73),N=n.n(S),k=n(48),A=n.n(k),x=b()(),I=function(e){var t=e.alert,n=e.removeAlert,a=Object(d.useState)("slideInUp"),r=Object(m.a)(a,2),o=r[0],c=r[1];Object(d.useEffect)(function(){setTimeout(Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("fadeOutDown");case 2:l(x);case 3:case"end":return e.stop()}},e)})),3e3)});var l=function(e){c("fadeOutDown"),setTimeout(function(){return n(e)},500)};return f.a.createElement("li",{className:E()("alert-item animated faster",{slideInUp:"slideInUp"===o,fadeOutDown:"fadeOutDown"===o})},f.a.createElement("div",{className:"icon"},function(e){switch(e){case"success":return f.a.createElement(g.a,{fontSize:"30px",color:"#27ae60"});case"error":return f.a.createElement(y.a,{fontSize:"30px",color:"#e74c3c"});case"warning":return f.a.createElement(N.a,{fontSize:"26px",color:"orange"});case"info":default:return f.a.createElement(A.a,{fontSize:"30px",color:"#69f"})}}(t.type)),f.a.createElement("div",{className:"alert-content"},f.a.createElement("span",{style:{color:"#ccc"}},t.message)),f.a.createElement("div",{className:"close",onClick:function(){return l(t.id)}},f.a.createElement(O.a,{fontSize:"16px",color:"grey"})))},U=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).doAlert=function(e,t){n.setState({alerts:[{message:e,type:t,id:x}]})},n.removeAlert=function(e){var t=n.state.alerts.filter(function(t){return t.id!==e});n.setState({alerts:t})},n.state={alerts:[]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("ul",{className:"alert-container",style:{}},this.state.alerts.map(function(t,n){return f.a.createElement(I,{alert:t,key:b()(),index:n,removeAlert:e.removeAlert})}))}}]),t}(f.a.Component),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";window.alertRef?window.alertRef.doAlert(e,t):console.log("no container found")}},75:function(e,t,n){e.exports=n(150)},80:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.36dfb779.chunk.js.map