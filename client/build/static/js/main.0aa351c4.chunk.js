(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},41:function(e,t,a){e.exports=a(94)},47:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.9d9393e3.png"},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),l=a.n(o),c=(a(47),a(97)),s=a(96),i=a(20),m=a(13),u=a(14),d=a(16),p=a(15),h=a(17),g=a(2),f=a(95);a(24);var E=function(e){return r.a.createElement("div",{className:"homepageToggleBar"},r.a.createElement("button",{onClick:function(){return e.togglepagestate()},className:"pageToggleButton"},"Toggle Login Page/ Sign-Up Page"))};var v=function(e){return r.a.createElement("form",{className:"sign-up-form"},r.a.createElement("div",{className:"signupform-input"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.firstname,name:"firstname",type:"text",className:"form-control",placeholder:"First Name",id:"firstname"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.lastname,name:"lastname",type:"text",className:"form-control",placeholder:"Last Name",id:"lastname"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.password,name:"password",type:"text",className:"form-control",placeholder:"password",id:"password"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.email,name:"email",type:"text",className:"form-control",placeholder:"email",id:"email"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.location,name:"location",type:"text",className:"form-control",placeholder:"Location",id:"location"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.confirmpassword,name:"confirmpassword",type:"text",className:"form-control",placeholder:"Confirm Password",id:"confirmpassword"}),r.a.createElement("button",{onClick:e.handleNewUserFormSubmit,className:"submitButton"},"Register")))};var b=function(e){return r.a.createElement("form",{className:"sign-up-form"},r.a.createElement("div",{className:"signupform-input"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.email,name:"email",type:"text",className:"form-control",placeholder:"email",id:"email"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.password,name:"password",type:"text",className:"form-control",placeholder:"password",id:"password"}),r.a.createElement("button",{onClick:e.handleLoginFormSubmit,className:"submitButton"},"Login")))},N=a(23),w=a.n(N),C={loginUser:function(e){return w.a.get("/api/user",e)},getPosts:function(e,t){return w.a.get("/api/post"+e+t)},savePost:function(e){return w.a.post("/api/post",e)},saveUser:function(e){return w.a.post("/api/user",e)}},y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).togglepagestate=function(){var e=!a.state.currentPage;a.setState({currentPage:e})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;console.log(n),a.setState(Object(i.a)({},t,n))},a.handleNewUserFormSubmit=function(e){if(a.state.password===a.state.confirmpassword){var t={firstname:a.state.firstname,lastname:a.state.lastname,password:a.state.password,email:a.state.email,location:a.state.location};e.preventDefault(),a.setState({userCheck:t}),a.submitNewUser(t)}else alert("passwords do not match"),a.setState({password:"",confirmpassword:""})},a.handleLoginFormSubmit=function(e){var t={email:a.state.email,password:a.state.password,confirmpassword:a.state.confirmpassword};e.preventDefault(),a.setState({userCheck:t}),a.checkUserLogin()},a.submitNewUser=function(e){C.saveUser(e).then(function(t){console.log("newUser ",e),console.log("res",t)}).catch(function(e){return console.log(e)}),a.resetform()},a.resetform=function(){a.setState({firstname:"",lastname:"",email:"",location:"",password:"",confirmpassword:"",userCheck:{}})},a.checkUserLogin=function(){console.log("checkUserLogin ",a.state.userCheck)},a.renderPage=function(){return console.log(a.state),!1===a.state.currentPage?r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"landingBar"},r.a.createElement("p",null,r.a.createElement("strong",{className:"landingTitle"},"Sign Up Now!")))),r.a.createElement("div",{className:"App-body"},r.a.createElement(E,{togglepagestate:a.togglepagestate}),r.a.createElement(b,{email:a.state.email,password:a.state.password,handleNewUserFormSubmit:a.handleLoginFormSubmit,handleInputChange:a.handleInputChange}),r.a.createElement(f.a,{to:"/landing"},"  Go To Logged-In Page  "))):r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"landingBar"},r.a.createElement("p",null,r.a.createElement("strong",{className:"landingTitle"},"Sign Up Now!")))),r.a.createElement("div",{className:"App-body"},r.a.createElement(E,{togglepagestate:a.togglepagestate}),r.a.createElement(v,{firstname:a.state.firstname,lastname:a.state.lastname,password:a.state.password,email:a.state.email,location:a.state.location,confirmpassword:a.state.confirmpassword,handleNewUserFormSubmit:a.handleNewUserFormSubmit,handleInputChange:a.handleInputChange}),r.a.createElement(f.a,{to:"/landing"},"  Go To Logged-In Page  ")))},a.state={firstname:"",lastname:"",email:"",location:"",password:"",confirmpassword:"",currentPage:!1,userCheck:{}},a.resetform=a.resetform.bind(Object(g.a)(Object(g.a)(a))),a.togglepagestate=a.togglepagestate.bind(Object(g.a)(Object(g.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.handleNewUserFormSubmit=a.handleNewUserFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a.handleLoginFormSubmit=a.handleLoginFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signupSpacer"},this.renderPage())}}]),t}(n.Component),S=(a(71),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).renderComponent=function(){var e=window.location.href.split("/")[3];return console.log(e),"searchpost"===e?r.a.createElement("div",{className:"pageSwitchBar"},r.a.createElement(f.a,{onClick:a.togglewhichpage,className:"pageToggle",to:"/makepost"},"Go To Create New Post Page")):r.a.createElement("div",{className:"pageSwitchBar"},r.a.createElement(f.a,{onClick:a.togglewhichpage,className:"pageToggle",to:"/searchpost"},"Go To Search Page"))},a.state={currentUserID:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){""!==this.state.currentUserID&&alert("Please log in")}},{key:"render",value:function(){return this.renderComponent()}}]),t}(n.Component));var I=function(){return r.a.createElement("div",{className:"App-footer"},r.a.createElement("strong",null,"Lemonaide Stand"))},j=(a(72),a(26)),k=a.n(j),O=a(4),L=a.n(O),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(i.a)({},t,n))},a.handleNewPostsFormSubmit=function(e){var t;e.preventDefault(),console.log();t={category:a.state.category,location:a.state.location,description:a.state.description,contactNo:a.state.contactNo,price:a.state.price,expiryDate:a.state.expiryDate,userId:"5c89b8c935a71203a483b6f4"},console.log(t),C.savePost(t).then(function(e){if("error"===e.data.status)throw new Error(e.data.message);console.log("Post Saved successfully:"),console.log(e.data)})},a.state={userId:{type:String},category:{type:String},location:{type:String},description:{type:[String]},contactNo:{type:String},price:{type:Number,default:"0"},expiryDate:{type:Date}},a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.handleNewPostsFormSubmit=a.handleNewPostsFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement(S,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement("div",{className:"makePostPageBox"},r.a.createElement(L.a,{className:"clearfix"},r.a.createElement("h2",null,"Post New Item"),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Control,{id:"userId",onChange:this.handleInputChange,name:"userId",type:"text",value:this.state.userId,className:"hiddenValue"})),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Label,{className:"formLabel"},"Categorey"),r.a.createElement(L.a.Control,{as:"select",id:"category",onChange:this.handleInputChange,name:"category",type:"text"},r.a.createElement("option",{defaultValue:"food"},"Food"),r.a.createElement("option",{value:"services"},"Services"),r.a.createElement("option",{value:"handywork"},"Handywork"),r.a.createElement("option",{value:"babysitting"},"Babysitting"))),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Label,{className:"formLabel"},"Location"),r.a.createElement(L.a.Control,{as:"select",id:"location",onChange:this.handleInputChange,name:"location",type:"text"},r.a.createElement("option",{defaultValue:"stclair"},"St Clair Station"),r.a.createElement("option",{value:"yandbloor"},"Yonge and Bloor"),r.a.createElement("option",{value:"bathurst"},"Bathurst Station"),r.a.createElement("option",{value:"coxwell"},"Coxwell Station"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"descriptionBox"},r.a.createElement(L.a.Label,{className:"formLabel"},"Description"),r.a.createElement(L.a.Control,{as:"textarea",rows:"5",id:"description",onChange:this.handleInputChange,value:this.description,name:"description",placeholder:"description"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Control,{id:"contactNo",type:"text",onChange:this.handleInputChange,value:this.contactNo,name:"contactNo",placeholder:"contactNo"})),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Control,{type:"number",id:"price",onChange:this.handleInputChange,value:this.price,name:"price",placeholder:"price"})),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Control,{type:"date",id:"expiryDate",onChange:this.handleInputChange,value:this.expiryDate,name:"expiryDate",placeholder:"expiryDate"})),r.a.createElement("div",{className:"formItem"},r.a.createElement(k.a,{variant:"primary",className:"submitNewPost",onClick:this.handleNewPostsFormSubmit},"Create New Post"))))),r.a.createElement(I,null))}}]),t}(n.Component);a(87);var P=function(e){return r.a.createElement("span",{className:"buy-btn",role:"button",tabIndex:"0"},r.a.createElement("button",{className:"buyLink",onClick:function(){return e.savebook(e.title,e.author,e.link)}}))};function U(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}a(88);function F(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function B(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).loadItems=function(){console.log(a.state.results)},a.buyItem=function(e){console.log(e)},a.state={results:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this;return r.a.createElement("span",{className:"searchResultsBox"},r.a.createElement(U,{fluid:!0},r.a.createElement("span",null,r.a.createElement("h2",null,"Current Items")),this.state.results.length?r.a.createElement(F,null,this.state.results.map(function(t){return r.a.createElement(B,{key:t._id},r.a.createElement("a",{href:"/books"+t._id},r.a.createElement("strong",null,t.title," by ",t.author)),r.a.createElement(P,{onClick:function(){return e.buyItem(t._id)}}))})):r.a.createElement("h3",null,"No Results to Display")))}}]),t}(r.a.Component),A=(a(89),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(i.a)({},t,n)),console.log(a.state.results)},a.handleSearchPostsFormSubmit=function(e){e.preventDefault(),console.log("category "+a.state.category),a.newresults()},a.newresults=function(){var e=a.state.category,t=a.state.location;C.getPosts(e,t).then(function(e){return a.setState({results:[e.data]})}).catch(function(e){return console.log(e)})},a.state={category:"",location:"",results:[]},a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSearchPostsFormSubmit=a.handleSearchPostsFormSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement(S,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(L.a,null,r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Label,{className:"formLabel"},"Categorey"),r.a.createElement(L.a.Control,Object(i.a)({as:"select",id:"category",onChange:this.handleInputChange,name:"category",type:"text"},"id","category"),r.a.createElement("option",{defaultValue:"food"},"Food"),r.a.createElement("option",{value:"services"},"Services"),r.a.createElement("option",{value:"handywork"},"Handywork"),r.a.createElement("option",{value:"babysitting"},"Babysitting"))),r.a.createElement("div",{className:"formItem"},r.a.createElement(L.a.Label,{className:"formLabel"},"Location"),r.a.createElement(L.a.Control,Object(i.a)({as:"select",id:"location",onChange:this.handleInputChange,name:"location",type:"text"},"id","location"),r.a.createElement("option",{defaultValue:"stclair"},"St Clair Station"),r.a.createElement("option",{value:"yandbloor"},"Yonge and Bloor"),r.a.createElement("option",{value:"bathurst"},"Bathurst Station"),r.a.createElement("option",{value:"coxwell"},"Coxwell Station"))),r.a.createElement("div",{className:"formItem"},r.a.createElement(k.a,{variant:"primary",onClick:this.handleSearchPostsFormSubmit},"Search Stuff"))),r.a.createElement("br",null),r.a.createElement("hr",{className:"pageSplit"}),r.a.createElement("br",null),r.a.createElement("p",null,"Search Results Go Here"),r.a.createElement(D,null),r.a.createElement(I,null)))}}]),t}(n.Component));a(25);var T=function(){return r.a.createElement("li",{className:"App-logo"},r.a.createElement(f.a,{to:"/",className:"logo"},r.a.createElement("img",{className:"logo",alt:"homelink",src:a(90)})))};var G=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(f.a,{to:"/",className:"menuLink"},r.a.createElement("strong",null,"Login / Sign-Up")))};var R=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(f.a,{to:"/contact",className:"menuLink"},r.a.createElement("strong",null,"Contact")))};var V=function(){return r.a.createElement("ul",{className:"nav App-navbar"},r.a.createElement(T,null),r.a.createElement(G,null),r.a.createElement(R,null))};var W=function(){return r.a.createElement("div",{className:"App-body"},r.a.createElement("h1",{className:"siteTitle"},"Contact Us"),"This will be our contact information",r.a.createElement(I,null))};a(91);var H=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"landingBar"},r.a.createElement("strong",{className:"landingTitle"},"The Landing Page!"))),r.a.createElement("div",{className:"App-body"},r.a.createElement(f.a,{to:"/searchpost"},"Search Items"),r.a.createElement("strong",null,"   Choose what to do first   "),r.a.createElement(f.a,{to:"/makepost"},"Create Post")),r.a.createElement(I,null))};a(92);var _=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{path:"/landing",component:H}),r.a.createElement(s.a,{path:"/makepost",component:x}),r.a.createElement(s.a,{path:"/searchpost",component:A}),r.a.createElement(s.a,{path:"/contact",component:W})))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");J?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):M(e)})}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.0aa351c4.chunk.js.map