(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c.n(n),s=c(30),j=c.n(s),a=(c(38),c(20)),b=(c(39),c(17)),i=c(9),o=c(19),u=c(15),l=c(27);l.a.initializeApp({apiKey:"AIzaSyCw_nFjxtWvJ_mv9BrYljIt-YSNwg6Wk7Q",authDomain:"react-app-9336c.firebaseapp.com",databaseURL:"https://react-app-9336c-default-rtdb.firebaseio.com",projectId:"react-app-9336c",storageBucket:"react-app-9336c.appspot.com",messagingSenderId:"782715162088",appId:"1:782715162088:web:2b24e1829504fa1dfba85d"});l.a.firestore();var O=c(3),p=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(a.a)(e,2),c=t[0],r=t[1],s=function(e){var t=e.target,n=t.name,s=t.value;r(Object(u.a)(Object(u.a)({},c),{},Object(o.a)({},n,s)))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Login "}),Object(O.jsxs)("form",{autoComplete:"off",onSubmit:function(){alert("Login success!")},children:[Object(O.jsx)("label",{htmlFor:"username",children:"User Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{value:c.username,name:"username",onChange:s,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",value:c.password,name:"password",required:!0,onChange:s}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Log In"})]})]})},d=Object(n.createContext)(null),x=Object(i.g)((function(e){var t=e.history,c=Object(n.useContext)(d),r=c.isAuth,s=c.setIsAuth,j={username:"",password:""},b=Object(n.useState)(j),i=Object(a.a)(b,2),l=i[0],x=i[1],h=function(e){var t=e.target,c=t.name,n=t.value;x(Object(u.a)(Object(u.a)({},l),{},Object(o.a)({},c,n)))};return Object(O.jsx)(O.Fragment,{children:r?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Welcome, User"}),Object(O.jsx)("button",{onClick:function(){return s(!r)},children:"Logout"})]}):Object(O.jsxs)("div",{className:"signin__wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Register "}),Object(O.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),x(j),s((function(){return t.push("/profile"),!0}))},children:[Object(O.jsx)("label",{htmlFor:"username",children:"User Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{value:l.username,name:"username",onChange:h,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",value:l.password,name:"password",required:!0,onChange:h}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Register"})]})]}),Object(O.jsx)(p,{})]})})})),h=c(33),m=function(e){var t=e.component,c=Object(h.a)(e,["component"]),r=Object(n.useContext)(d).isAuth;return Object(O.jsx)(i.d,{children:Object(O.jsx)(i.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return r?Object(O.jsx)(t,{}):Object(O.jsx)(i.a,{to:"/"})}}))})},f=function(){return Object(O.jsx)("div",{children:"Welcome to profile"})},g=function(){return Object(O.jsx)("div",{children:"Hello from ABout Us Page"})};var v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useMemo)((function(){return{isAuth:c,setIsAuth:r}}),[c,r]);return Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/",children:"Register"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/profile",children:"Profile"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/about",children:"About"})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(d.Provider,{value:s,children:[Object(O.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(O.jsx)(m,{path:"/about",component:g}),Object(O.jsx)(m,{path:"/profile",component:f})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),s(e),j(e)}))};j.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.f06dee90.chunk.js.map