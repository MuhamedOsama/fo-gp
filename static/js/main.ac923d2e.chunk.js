(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(29),n=a.n(r),i=(a(67),a(14)),o=a(52),l=a(9),d=a(7),j=a.n(d),m=a(10),b=a(45),u=a.n(b),O=a(33),h=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),n=Object(l.a)(r,2),i=n[0],o=n[1],d=Object(O.b)(),b=Object(s.useRef)(1);Object(s.useEffect)((function(){return b.current=1,function(){b.current=0}}));return{isLoading:a,error:i,sendRequest:Object(s.useCallback)(function(){var e=Object(m.a)(j.a.mark((function e(t,a,s,r,n){var i,l,m;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.a.CancelToken.source(),c(!0),e.prev=2,e.next=5,u()({method:a,url:"".concat("https://endexel.eu-central-1.elasticbeanstalk.com","/").concat(t),data:s,headers:r});case 5:if(l=e.sent,m=l.data,!b.current){e.next=11;break}""!==n&&d(n(m)),e.next=14;break;case 11:return i.cancel(),c(!1),e.abrupt("return",!1);case 14:return c(!1),e.abrupt("return",m.result);case 18:throw e.prev=18,e.t0=e.catch(2),e.t0.response?o(e.t0.response.data.message):o("Opps something wrong happened"),c(!1),e.t0;case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,a,s,c,r){return e.apply(this,arguments)}}(),[]),clearError:function(){o(!1)}}},x=(a(113),a(34)),p=a(26),f=a(24),g=a.n(f),v=document.getElementById("alert-hook"),N=function(e){var t=e.children,a=document.createElement("div");return Object(s.useEffect)((function(){return v&&a&&v.appendChild(a),function(){v&&a&&v.removeChild(a)}}),[a]),a?Object(r.createPortal)(t,a):null};N.propTypes={children:g.a.node.isRequired};var w=N,y=a(1),S=function(e){var t=Object(s.useState)(!0),a=Object(l.a)(t,2),c=a[0],r=a[1],n=Object(p.useSpring)({from:{x:0},x:c?1:0,config:{mass:5,tension:50,friction:25,clamp:!0,duration:700}}).x;return Object(y.jsx)("div",{children:Object(y.jsx)(w,{className:"backdrop",children:Object(y.jsx)(p.animated.div,{style:{transform:n.interpolate({range:[0,.25,.5,.75,1],output:[-800,50,10,25,5]}).interpolate((function(e){return"translateX(".concat(e,"px)")}))},className:"alert-card ",children:Object(y.jsxs)("div",{className:"alert alert-".concat(e.variant," alert-dismissible fade show m-0"),role:"alert",children:[e.error,Object(y.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){r(!1),setTimeout((function(){e.close()}),2e3)},children:Object(y.jsx)("span",{"aria-hidden":"true",children:Object(y.jsx)(x.IconX,{})})})]})})})})},k=function(){var e=h(),t=e.sendRequest,a=e.error,r=e.clearError,n=Object(s.useState)(!1),i=Object(l.a)(n,2),o=i[0],d=i[1],b=function(){var e=Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.parse(localStorage.getItem("token"))),e.prev=1,e.next=4,t("account/resend","GET",null,{authorization:JSON.parse(localStorage.getItem("token"))},"");case 4:d(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(c.a.Fragment,{children:[a&&Object(y.jsx)(S,{error:a,variant:"error",close:r}),o&&Object(y.jsx)(S,{error:"an email was sent successfully",variant:"success",close:r}),!o&&Object(y.jsx)("button",{className:"btn ml-2 link",onClick:b,children:"Resend"})]})},C=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){localStorage.getItem("user")&&c(JSON.parse(localStorage.getItem("user")).account)}),[]),a&&!a.verified?Object(y.jsxs)("div",{className:"text-white bg-dark row  justify-content-center transitionSlow verficationBar",children:[Object(y.jsx)("h6",{className:"h6 pt-2 transitionSlow",children:"Your account is not Verified yet, verify it to get all Endexel features"}),Object(y.jsx)(k,{})]}):Object(y.jsx)(y.Fragment,{})},L=function(){return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsxs)(o.a,{fluid:!0,className:"mt-5 ",children:[Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("h1",{className:"display-1",children:"Endexel"})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("h1",{children:"Home"})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("h1",{className:"ar",children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0647"})}),Object(y.jsx)("div",{className:"row justify-content-center m-3",children:localStorage.getItem("token")?Object(y.jsx)("h1",{className:"text-info bold",children:"Welcome ".concat(JSON.parse(localStorage.getItem("user")).profile.firstName,"  ").concat(JSON.parse(localStorage.getItem("user")).profile.lastName)}):Object(y.jsx)("h1",{className:"text-info bold",children:"You Can Login or Register"})})]})]})},E=a(125),I=a(123),P=a(53),T=a(37),q=a(18),F=a(22),_=Object(F.a)(),R="SIGN_UP",J="SIGN_IN",A="SIGN_OUT",V=function(e){return function(){var t=Object(m.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),a({type:R,payload:e}),alert("Signed Up Successfully"),_.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(m.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:J,payload:e}),alert("Signed in Successfully"),_.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=a(121),G=(a(115),c.a.forwardRef((function(e,t){var a=Object(s.useState)(e.type),c=Object(l.a)(a,2),r=c[0],n=c[1];return Object(y.jsxs)(I.a.Group,{controlId:e.id,className:"inputFiled",children:[Object(y.jsx)(I.a.Label,{className:"formLabel",children:e.label}),Object(y.jsxs)(B.a,{children:[Object(y.jsx)(I.a.Control,{type:r,placeholder:e.placeholder,ref:t,name:e.name,className:"shadow inputControl ".concat(e.inValid?"is-invalid":""," ").concat(e.addon&&"border-right-0"),onChange:e.handleChange}),e.addon&&Object(y.jsx)(B.a.Append,{className:"border-left-0 ",onClick:function(){n("password"===r?"text":"password")},children:Object(y.jsx)(B.a.Text,{className:"addon",children:"password"===r?Object(y.jsx)(x.IconEyeOff,{className:"transition pointer"}):Object(y.jsx)(x.IconEye,{className:"transition pointer"})})})]})]})}))),M=function(e){return Object(y.jsx)(c.a.Fragment,{children:e.error&&e.error.type===e.type&&Object(y.jsx)("p",{className:"text-danger",children:e.message})})},D=a.p+"static/media/Group 599.be0b065e.svg",H=a.p+"static/media/linkedin-svgrepo-com.258d0f42.svg",W=a.p+"static/media/facebook.dac0ec34.svg",X=a.p+"static/media/Group 618.996dc8c0.svg",Y=(a(117),function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]}),$=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")},z=function(e){var t=Object(p.useSpring)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(l.a)(t,2),s=a[0],c=a[1];return Object(y.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(y.jsx)(p.animated.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return c({xys:Y(t,a)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:s.xys.interpolate($)},className:"p-5  w-100 ",children:Object(y.jsx)("img",{src:X,alt:"endexl logo",className:"w-100"})})})},K=function(){var e=Object(T.a)(),t=e.handleSubmit,a=e.register,s=e.errors,c=h(),r=c.sendRequest,n=c.isLoading,i=c.error,o=c.clearError,l=function(){var e=Object(m.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("hi"),e.next=4,r("login","POST",t,{"Content-Type":"application/json"},U);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"mt-3",children:[Object(y.jsx)("div",{className:"alert-container",children:i&&Object(y.jsx)(S,{error:i,variant:"danger",close:o})}),Object(y.jsxs)(I.a,{onSubmit:t(l),noValidate:!0,children:[n&&Object(y.jsx)(z,{asOverlay:!0}),Object(y.jsxs)("div",{className:"mb-3 ",children:[Object(y.jsx)(G,{id:"formBasicEmail",type:"email",placeholder:"Email",name:"email",label:"Enter email",ref:a({required:!0,pattern:/^\S+@\S+$/i}),inValid:s.email}),Object(y.jsx)(M,{error:s.email,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:s.email,type:"pattern",message:"This Email is not valid"})]}),Object(y.jsxs)("div",{className:"mb-2 ",children:[Object(y.jsx)(G,{id:"formBasicPassword",type:"password",placeholder:"Password",name:"password",ref:a({required:!0,minLength:5}),label:"Password",inValid:s.password,addon:!0}),Object(y.jsx)(M,{error:s.password,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:s.password,type:"minLength",message:"Password Minimum Length is 5 characters"})]}),Object(y.jsxs)("h6",{className:"mb-4 pointer",children:["Forgot Password ?",Object(y.jsx)("strong",{className:"ml-2",children:Object(y.jsx)(q.a,{className:"link",to:"/forgotpassword",children:"Click here"})})]}),Object(y.jsx)(P.a,{variant:"successes",type:"submit",className:"submitBtn w-100 mt-3",children:"Submit"}),Object(y.jsx)("div",{className:"pt-4 pb-3",children:Object(y.jsx)("h5",{className:"surroundingLine",children:Object(y.jsx)("span",{children:"Or"})})}),Object(y.jsxs)("div",{className:"row justify-content-center social-btns ",children:[Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",children:Object(y.jsx)("img",{src:H,alt:"linked in icon"})})}),Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",children:Object(y.jsx)("img",{src:D,alt:"google icon"})})}),Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",children:Object(y.jsx)("img",{src:W,alt:"facebook Icon"})})})]}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("p",{className:"terms text-center",children:"Terms of Services applied."})})]})]})},Q=a(30),Z=function(){var e=Object(T.a)(),t=e.handleSubmit,a=e.watch,r=e.register,n=e.errors,i=Object(s.useRef)();i.current=a("password");var o=Object(O.b)(),l=h(),d=l.sendRequest,b=l.isLoading,x=l.error,p=l.clearError,f=function(){var e=Object(m.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password!==t.password_confirm){e.next=11;break}return t.password_confirm,a=Object(Q.a)(t,["password_confirm"]),e.prev=2,e.next=5,d("signupseeker","POST",a,{"Content-Type":"application/json"},V);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:e.next=12;break;case 11:console.log("password does not match");case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)("div",{className:"alert-container",children:x&&Object(y.jsx)(S,{error:x,variant:"danger",close:p})}),Object(y.jsxs)(I.a,{onSubmit:t(f),noValidate:!0,children:[b&&Object(y.jsx)(z,{asOverlay:!0}),Object(y.jsxs)("div",{className:"row justify-content-center social-btns",children:[Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",children:Object(y.jsx)("img",{src:H,alt:"linked in icon"})})}),Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",onClick:function(){o(function(){var e=Object(m.a)(j.a.mark((function e(t){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("http://endexel-backend.eu-central-1.elasticbeanstalk.com/auth/google");case 3:a=e.sent,s=a.data,console.log(s),t({type:R,payload:s}),"success"===s.status&&(alert("Signed Up Successfully"),console.log(_),_.push("/")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.message),alert(e.t0.response.data.message?e.t0.response.data.message:"Oops something went wrong ");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},children:Object(y.jsx)("img",{src:D,alt:"google icon"})})}),Object(y.jsx)("div",{className:"col-4 p-1",children:Object(y.jsx)(P.a,{className:"social-btn w-100",children:Object(y.jsx)("img",{src:W,alt:"facebook Icon"})})})]}),Object(y.jsx)("div",{className:"pt-4 pb-3",children:Object(y.jsx)("h5",{className:"surroundingLine",children:Object(y.jsx)("span",{children:"Or"})})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(y.jsx)(G,{id:"formFirstName",type:"text",placeholder:"First Name",name:"firstName",label:"First Name",ref:r({required:!0,minLength:2}),inValid:n.firstName}),Object(y.jsx)(M,{error:n.firstName,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:n.firstName,type:"minLength",message:"First Name Minimum Length is 2 characters"})]}),Object(y.jsxs)("div",{className:"col-sm-6 mb-3",children:[Object(y.jsx)(G,{id:"formLastName",type:"text",placeholder:"Last Name",name:"lastName",label:"Last name",ref:r({required:!0,minLength:2}),inValid:n.lastName}),Object(y.jsx)(M,{error:n.lastName,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:n.lastName,type:"minLength",message:"Full-Name Minimum Length is 2 characters"})]})]}),Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)(G,{id:"formBasicEmail",type:"email",placeholder:"Email",name:"email",label:"Enter email",ref:r({required:!0,pattern:/^\S+@\S+$/i}),inValid:n.email}),Object(y.jsx)(M,{error:n.email,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:n.email,type:"pattern",message:"This Email is not valid"})]}),Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)(G,{id:"formBasicPassword",type:"password",placeholder:"Password",name:"password",ref:r({required:!0,minLength:5}),label:"Enter Password",inValid:n.password,addon:!0}),Object(y.jsx)(M,{error:n.password,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:n.password,type:"minLength",message:"Password Minimum Length is 5 characters"})]}),Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)(G,{id:"formConfirmPassword",name:"password_confirm",type:"password",placeholder:"Password",ref:r({required:!0,validate:function(e){return e===i.current}}),label:"Confirm Password",inValid:n.password_confirm}),Object(y.jsx)(M,{error:n.password_confirm,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:n.password_confirm,type:"validate",message:"Passwords doesn't match"})]}),Object(y.jsx)(P.a,{variant:"secondary",type:"submit",className:"submitBtn mb-2 w-100 mt-2",children:"Submit"}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsxs)("p",{className:"terms text-center",children:["By creating an account, you agree to the",Object(y.jsx)(q.a,{className:"text-info ",to:"#",children:"Terms of Service."})]})})]})]})},ee=(a(62),a.p+"static/media/Group 600.21f00ffd.svg"),te=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(!1),i=Object(l.a)(n,2),d=i[0],b=i[1],u=function(){b(!0),r(!a)},O=Object(p.useSpring)({config:{mass:1,tension:170,friction:26,duration:150},to:function(){var e=Object(m.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:d?0:1,transform:d?"scale(0.5)":"scale(1)"});case 2:return e.next=4,t({opacity:1,transform:"scale(1)"});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),from:{opacity:1,transform:"scale(1)"}});return Object(y.jsx)("div",{className:"authContainer",children:Object(y.jsx)(o.a,{className:"h-100",children:Object(y.jsxs)("div",{className:"row  w-100 h-100 m-0 p-0 justify-content-center",children:[Object(y.jsx)("div",{className:"d-none d-lg-block col-lg-7 align-self-center",children:Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)("img",{src:ee,alt:"endexel logo",className:"mr-2"}),Object(y.jsx)("h1",{className:"h3 text-white m-0",children:"Sign in or create an account"})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-8 col-lg-5 align-self-center ",children:Object(y.jsx)(p.animated.div,{style:O,children:Object(y.jsxs)(E.a,{className:"cardAnim authCard",children:[Object(y.jsx)("div",{className:"row d-xs-block d-lg-none",children:Object(y.jsx)("img",{src:X,alt:"endexel logo",className:"mb-3"})}),a?Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)("h1",{children:"Login"}),Object(y.jsxs)("p",{children:["new user ?"," ",Object(y.jsx)("span",{onClick:u,className:"link pointer bold",children:"create new account"})]})]}):Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)("h1",{children:"Register"}),Object(y.jsxs)("p",{children:["already have an account ?"," ",Object(y.jsx)("span",{onClick:u,className:"text-info pointer bold",children:"sign in"})]})]}),a?Object(y.jsx)(K,{}):Object(y.jsx)(Z,{}),Object(y.jsxs)("div",{className:"d-flex ar",children:[Object(y.jsx)(x.IconWorld,{}),Object(y.jsx)("p",{className:"mb-0",children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0647"})]})]})})})]})})})},ae=function(){return Object(y.jsxs)(o.a,{children:[Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("h1",{children:"Track List"})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)(q.a,{to:"/",children:Object(y.jsx)(P.a,{variant:"error",className:"m-2",children:"Home"})})})]})},se=function(){return Object(y.jsxs)(o.a,{children:[Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("h1",{children:"Courses List"})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)(q.a,{to:"/",children:Object(y.jsx)(P.a,{variant:"error",className:"m-2",children:"Home"})})})]})},ce=function(){var e=JSON.parse(localStorage.getItem("user"));return console.log(e),Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(C,{}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:e.account.email}),Object(y.jsx)("li",{children:"".concat(e.profile.firstName," ").concat(e.profile.lastName)})]})})]})},re=function(e){var t=Object(T.a)(),a=t.handleSubmit,s=t.register,r=t.errors,n=h(),i=n.error,o=n.isLoading,l=n.sendRequest,d=n.clearError,b=function(){var t=Object(m.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("account/forgotPassword","POST",a,{authorization:JSON.parse(localStorage.getItem("token")),"Content-Type":"application/json"},"");case 3:e.next(),e.handleEmail(a.email),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(c.a.Fragment,{children:[i&&Object(y.jsx)(S,{error:i,variant:"danger",close:d}),Object(y.jsxs)(I.a,{onSubmit:a(b),noValidate:!0,children:[o&&Object(y.jsx)(z,{asOverlay:!0}),Object(y.jsx)("h1",{children:"Change Password"}),Object(y.jsx)("p",{className:"h6 mb-5",children:"In order to change password please enter your email"}),Object(y.jsx)(G,{id:"FormEmail",name:"email",type:"email",placeholder:"Email",ref:s({required:!0,pattern:/^\S+@\S+$/i}),label:"Enter Email",inValid:r.email}),Object(y.jsx)(M,{error:r.email,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:r.email,type:"pattern",message:"This Email is not valid"}),Object(y.jsx)(P.a,{variant:"secondary",type:"submit",className:"submitBtn mb-3 w-100 mt-4",children:"Continue"})]})]})},ne=a.p+"static/media/Group 678.1d491d59.svg",ie=function(e){return Object(y.jsxs)("div",{className:"",children:[Object(y.jsx)("div",{className:"row justify-content-center mb-5",children:Object(y.jsx)("img",{src:ne,alt:"success indicator"})}),Object(y.jsx)("div",{className:"row justify-content-center mb-1",children:Object(y.jsx)("h5",{className:"h5",children:"A Link Have been sent to"})}),Object(y.jsx)("div",{className:"row justify-content-center mb-0",children:Object(y.jsx)("h5",{className:"h5 text-info bold",children:e.email})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)(P.a,{variant:"secondary",className:"button-light",onClick:function(){e.cancel()},children:"Use another mail"})}),Object(y.jsx)("div",{className:"row justify-content-center mb-3 mt-4",children:Object(y.jsx)("h6",{className:"h6",children:"Click on the link to change password"})})]})},oe=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),n=Object(l.a)(r,2),i=n[0],d=n[1],j=Object(p.useSpring)({opacity:a?1:0,transform:"perspective(600px) rotateX(".concat(a?180:0,"deg)"),config:{mass:5,tension:300,friction:80}}),m=j.transform,b=j.opacity;return Object(y.jsx)("div",{className:"authContainer",children:Object(y.jsx)(o.a,{className:"h-100",children:Object(y.jsxs)("div",{className:"row  w-100 h-100 m-0 p-0 justify-content-center",children:[Object(y.jsx)("div",{className:"d-none d-lg-block col-lg-7 align-self-center",children:Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)("img",{src:ee,alt:"endexel logo",className:"mr-2"}),Object(y.jsx)("h1",{className:"h3 text-white m-0",children:"Sign in or create an account"})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-8 col-lg-5 align-self-center ",children:a?Object(y.jsx)(p.animated.div,{style:{opacity:b,transform:m.interpolate((function(e){return"".concat(e," rotateX(180deg)")}))},children:Object(y.jsxs)("div",{className:"card cardAnim authCard",children:[Object(y.jsx)("div",{className:"row d-xs-block d-lg-none align-self-center mt-0",children:Object(y.jsx)("img",{src:X,alt:"endexel logo",className:"mb-3"})}),Object(y.jsx)(ie,{cancel:function(){!0===a&&c(!1)},email:i}),Object(y.jsxs)("div",{className:"d-flex ar mt-4",children:[Object(y.jsx)(x.IconWorld,{}),Object(y.jsx)("p",{className:"mb-0",children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0647"})]})]})}):Object(y.jsx)(p.animated.div,{style:{opacity:b.interpolate((function(e){return 1-e})),transform:m},children:Object(y.jsxs)("div",{className:"card cardAnim authCard",children:[Object(y.jsx)("div",{className:"row d-xs-block d-lg-none ",children:Object(y.jsx)("img",{src:X,alt:"endexel logo",className:"mb-3"})}),Object(y.jsx)(re,{next:function(){!1===a&&c(!0)},handleEmail:function(e){d(e)}}),Object(y.jsxs)("div",{className:"d-flex ar mt-4",children:[Object(y.jsx)(x.IconWorld,{}),Object(y.jsx)("p",{className:"mb-0",children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0647"})]})]})})})]})})})},le=function(e){var t=h(),a=t.error,r=t.isLoading,n=t.sendRequest,i=t.clearError,o=Object(T.a)(),d=o.handleSubmit,b=o.watch,u=o.register,O=o.errors,x=Object(s.useState)(!1),p=Object(l.a)(x,2),f=p[0],g=p[1],v=Object(s.useRef)();v.current=b("password");var N=function(){var t=Object(m.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("account/reset?token=".concat(e.query),"POST",{password:a.password},{},"");case 3:g(!0),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){i(),g(!1),_.push("/")};return Object(y.jsxs)(c.a.Fragment,{children:[a&&Object(y.jsx)(S,{error:a,variant:"danger",close:w}),f&&Object(y.jsx)(S,{error:"Your Password was changed successfully",variant:"success",close:w}),Object(y.jsxs)(I.a,{onSubmit:d(N),noValidate:!0,children:[r&&Object(y.jsx)(z,{asOverlay:!0}),Object(y.jsx)("h1",{children:"Reset Password"}),Object(y.jsx)("p",{className:"h6 mb-5   ",children:"Please enter a new password"}),Object(y.jsx)(G,{id:"formBasicPassword",type:"password",placeholder:"Password",name:"password",ref:u({required:!0,minLength:5}),label:"New Password",inValid:O.password,addon:!0}),Object(y.jsx)(M,{error:O.password,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:O.password,type:"minLength",message:"Password Minimum Length is 5 characters"}),Object(y.jsx)(G,{id:"formConfirmPassword",name:"password_confirm",type:"password",placeholder:"Password",ref:u({required:!0,validate:function(e){return e===v.current}}),label:"Confirm Password",inValid:O.password_confirm}),Object(y.jsx)(M,{error:O.password_confirm,type:"required",message:"This Filed is required"}),Object(y.jsx)(M,{error:O.password_confirm,type:"validate",message:"Passwords doesn't match"}),f||a?Object(y.jsx)(P.a,{variant:"secondary",type:"submit",className:"submitBtn mb-3 w-100 mt-4 ",disabled:!0,children:"Submit"}):Object(y.jsx)(P.a,{variant:"secondary",type:"submit",className:"submitBtn mb-3 w-100 mt-4",children:"Submit"})]})]})},de=function(){var e=new URLSearchParams(window.location.search).get("token");return Object(s.useEffect)((function(){console.log(e),e||_.push("/")}),[e]),Object(y.jsx)("div",{className:"authContainer",children:Object(y.jsx)(o.a,{className:"h-100",children:Object(y.jsxs)("div",{className:"row  w-100 h-100 m-0 p-0 justify-content-center",children:[Object(y.jsx)("div",{className:"d-none d-lg-block col-lg-7 align-self-center",children:Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)("img",{src:ee,alt:"endexel logo",className:"mr-2"}),Object(y.jsx)("h1",{className:"h3 text-white m-0",children:"Sign in or create an account"})]})}),Object(y.jsx)("div",{className:"col-sm-12 col-md-8 col-lg-5 align-self-center ",children:Object(y.jsxs)("div",{className:"card cardAnim authCard",children:[Object(y.jsx)("div",{className:"row d-xs-block d-lg-none ",children:Object(y.jsx)("img",{src:X,alt:"endexel logo",className:"mb-3"})}),Object(y.jsx)(le,{query:e})]})})]})})})},je=a(122),me=a(124),be=a(81),ue=function(){var e=Object(O.c)((function(e){return e.userState})),t=Object(O.b)();e&&(e=e.user);return Object(y.jsxs)(je.a,{expand:"lg",children:[Object(y.jsx)(je.a.Brand,{children:Object(y.jsx)("img",{src:X,alt:"endexel logo",className:"mb-1"})}),Object(y.jsx)(je.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(y.jsxs)(je.a.Collapse,{id:"basic-navbar-nav",children:[Object(y.jsxs)(me.a,{className:"mr-auto",children:[Object(y.jsx)(me.a.Link,{children:Object(y.jsx)(q.a,{to:"/",children:"Home"})}),Object(y.jsx)(me.a.Link,{children:Object(y.jsx)(q.a,{to:"/courses",children:"Courses"})}),Object(y.jsx)(me.a.Link,{children:Object(y.jsx)(q.a,{to:"/tracks",children:"Tracks"})}),e&&e.account?Object(y.jsxs)(me.a.Link,{children:[" ",Object(y.jsx)(q.a,{to:"/learner/profile",children:"Profile"})]}):Object(y.jsx)(me.a.Link,{children:Object(y.jsx)(q.a,{to:"/authentication",children:"Authentication"})}),e&&e.account&&Object(y.jsx)(me.a.Link,{className:" text-danger ",onClick:function(){t((function(e,t){console.log("in signout"),e({type:A,payload:""}),window.location.reload()}))},children:"Sign Out"})]}),Object(y.jsxs)(I.a,{inline:!0,children:[Object(y.jsx)(be.a,{type:"text",placeholder:"Search",className:"mr-2 m-2"}),Object(y.jsx)(P.a,{variant:"outline-primary",className:"m-2",children:"Search"})]})]})]})};var Oe=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(i.c,{history:_,children:[Object(y.jsx)(ue,{}),localStorage.getItem("token")?Object(y.jsx)(c.a.Fragment,{children:Object(y.jsxs)(i.d,{children:[Object(y.jsx)(i.b,{path:"/",component:L,exact:!0}),Object(y.jsx)(i.b,{path:"/tracks",component:ae,exact:!0}),Object(y.jsx)(i.b,{path:"/courses",component:se,exact:!0}),Object(y.jsx)(i.b,{path:"/learner/profile",component:ce,exact:!0}),Object(y.jsx)(i.a,{to:"/"})]})}):Object(y.jsxs)(i.d,{children:[Object(y.jsx)(i.b,{path:"/",component:L,exact:!0}),Object(y.jsx)(i.b,{path:"/authentication",component:te,exact:!0}),Object(y.jsx)(i.b,{path:"/forgotpassword",component:oe,exact:!0}),Object(y.jsx)(i.b,{path:"/tracks",component:ae,exact:!0}),Object(y.jsx)(i.b,{path:"/courses",component:se,exact:!0}),Object(y.jsx)(i.b,{path:"/resetPassword",component:de,exact:!0}),Object(y.jsx)(i.a,{to:"/authentication"})]})]})})},he=a(36),xe=a(5),pe="UPLOADER_SIGN_UP",fe="UPLOADER_SIGN_IN",ge="UPLOADER_SIGN_OUT",ve="GET_UPLOADER",Ne="GET_ALL_COURSES",we="PARTICULAR_COURSE",ye="CREATE_COURSE",Se="ADD_VIDEOS",ke={uploader:"",uploadedCourses:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case pe:var c=JSON.stringify(s.data.accessToken);return localStorage.setItem("user",JSON.stringify("uploader")),localStorage.setItem("token",c),Object(xe.a)(Object(xe.a)({},e),{},{uploader:s.data});case fe:var r=JSON.stringify(s.data.accessToken);return localStorage.setItem("user",JSON.stringify("uploader")),localStorage.setItem("token",r),Object(xe.a)(Object(xe.a)({},e),{},{uploader:s.data});case ge:return localStorage.clear(),Object(xe.a)(Object(xe.a)({},e),{},{uploader:""});case ve:return Object(xe.a)(Object(xe.a)({},e),{},{uploader:s.data});case ye:case Se:return Object(xe.a)(Object(xe.a)({},e),{},{uploadedCourses:s.data});default:return e}},Le={courses:"",particularCourse:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case Ne:return Object(xe.a)(Object(xe.a)({},e),{},{courses:s.data});case we:return Object(xe.a)(Object(xe.a)({},e),{},{particularCourse:s.data});default:return e}},Ie={user:JSON.parse(localStorage.getItem("user"))},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case R:var c=JSON.stringify(s.data.accessToken);return localStorage.setItem("user",JSON.stringify(s.data)),localStorage.setItem("token",c),Object(xe.a)(Object(xe.a)({},e),{},{user:s.data});case J:var r=JSON.stringify(s.data.accessToken);return localStorage.setItem("user",JSON.stringify(s.data)),localStorage.setItem("token",r),Object(xe.a)(Object(xe.a)({},e),{},{user:s.data});case A:try{localStorage.clear(),console.log("in signout")}catch(n){console.log(n)}return Object(xe.a)(Object(xe.a)({},e),{},{user:""});default:return e}},Te=Object(he.combineReducers)({userState:Pe,uploaderState:Ce,coursesState:Ee}),qe=a(84),Fe=a(85),_e=Object(he.createStore)(Te,Object(Fe.composeWithDevTools)(Object(he.applyMiddleware)(qe.a)));n.a.render(Object(y.jsx)(O.a,{store:_e,children:Object(y.jsx)(Oe,{})}),document.getElementById("root"))},62:function(e,t,a){},67:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.ac923d2e.chunk.js.map