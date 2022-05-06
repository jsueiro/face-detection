(this["webpackJsonpface-detection"]=this["webpackJsonpface-detection"]||[]).push([[0],{242:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(38),r=n.n(i),c=(n(47),n(6)),o=n(7),l=n(9),d=n(8),h=n(0),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{onClick:function(){return t("SignOut")},className:"f5 link dim gray pa3 pointer",children:"Sign Out"})}):Object(h.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{onClick:function(){return t("SignIn")},className:"f5 link dim gray pa3 pointer",children:"Sign In"}),Object(h.jsx)("p",{onClick:function(){return t("Register")},className:"f5 link dim gray pa3 pointer",children:"Register"})]})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://pure-garden-82302.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props;return Object(h.jsx)("article",{className:"br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw-6 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Sign In"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",autoComplete:"username",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",autoComplete:"current-password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(h.jsx)("div",{className:"lh-copy mt3",children:Object(h.jsx)("p",{onClick:function(){return e("Register")},className:"f6 pointer link dim black db",children:"Register"})})]})})})}}]),n}(s.a.Component),p=(n(49),function(e){var t=e.imageUrl,n=e.box;return Object(h.jsx)("div",{className:"center ma",children:Object(h.jsxs)("div",{className:"absolute mt4",children:[Object(h.jsx)("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),b=(n(50),function(){return Object(h.jsx)("div",{className:"ma4 mt3",children:Object(h.jsx)("div",{className:"Logo",style:{height:"64px",width:"64px"},children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGGklEQVR4nN3baYydZRUH8N/cgUrpUCrIQJFqjWXpAi0iKGUxNRBqlYgRiCAmiguEhCASNXwA1DQmEIHEaWJYFFzCB6PRqhQCiYBsDluI2KkUhIKEZVqWRloKXYYP5725d+7cO/Nud+7t/JOTm5n3Oec553mf5TznnLdHOZiJY3Ec5mMuPpL8v4J9k3bvYFvyuwmv4gUM4d94HG+WpFPbMRPfwV14DyMl0A4MYiWOmjxTsuEgXIfNyjF6PHoUF+ADk2LZBNgDl5kcwxtpA76O3jbb2BIH4u4mik02DeKwNts6BkvEZtVp46v0Ns4vy7hmU2oRluMEHI3f4UNldVgCpuGLQvd7yhT8cdyv8284C/0CPWUYfwhe7gKD8tBVZQzA6i4wJC/tFMs1NxZiVxcYUoQezGt8BWcqaR11EEtxfB7GCj5Tri4dw9l5GYd1fgqXQWvzGN+TME8F7BQXtK1ZmCrt0aUj6MVHszJNpQEg7iyZMNUGYHpWhoqpswfkQkW4wFMFW7IyVLCuDYp0CpuyMlRwa/l6dAy5A6pniehsp52ZorR/3gGAv3aBAUVpr6xG1x+DG7IydxleFzmHTKgfgKHydOkI/peHqX4AdvfT4Ok8TFNpBhQegGFsbHi+WSQkusVZ2oof45Emz54po4PGqPBDyf/7cKVwNDqxu2/FKhG8hZubtDmxjAEYbBB6c8PzPnxXBB8mw/D/4gpjb3k/bNL2C4Wtx4sNQr83TttP4xqx9so0ej1+hpO0jlV+qQnfN7ObW8MMMcW3NwhdnpJ/Dr6Ca3Gn8CneaaJkPW0SJ8+f8VN8GbNT9reoibzV+FhK/jH4Swsl5+QVmGC6MGo+jsEC9Cue5Z0uQmAjRr+0jaI4IxOOTpifwDKx0fwEr+jucPkG/F1kiz+LAWHH9VmE9ODbuBGX4Od1z2bhrYb2M8Ra+6R4s9vEqP9H+BFDYh/ZkbL/XhyRyFogkjTzk7/3w2timawyNhF6gjilRpK/+5P29+PklP2DixIh30jR9gm1qbYWz4ojqnHppM3U3NTA954YxDX4Pe4QV9xdmDeBrN5ExmDKvhFVH9URTHOT+pWYerfX8fWIdbdQvMXZ4mqdBtfjMeGErU9oe0ObWTglhcy+5Hdnyr4RA1AVPD/5nSf2gHObtF+V/PaIwom5YqoOC0/sb1k6V1s2vWIv+qqoRdiRyHw0kfuHFvwDon5hsE7/9VkU2EOUphHrmig+GG8NnykGolkI+gWxp9ydQYcDRIlcf4vnD2md/d0iUmKDwi+Bf2XoW0VsHOtFjd8cvGT8o2RaotRFRjtKr+Mp2Su63sZvhf9QxZ/ERvZ9cUS3wly1a/AZye8dGfsHl4s1/SMxK9JmWo9UO4/HUzQNTlVL01+SkucTwieYJ2Zt7htt9Uh7U/bsyqn4gYLxuARL5MtW3yIG7sIina9MhDws6oU6VpOXESvEzHlWjphgPaaJstfqmbxNvJFuxQrhuG0T/kOhMpkqpon94EkxCAMF5VXEKbNKrNcrxIab9tLTCvvhXaHjW9Jf2lJjXzGyryi+FAaMrkFao3jt73mJrN/ggwVltUS1cmxZCbIWC1d7aQmyesWROSKjz58V56jdEnPfs+uwj1hiRTBLzfhhcWS3DX3CSRnBGzg9Jd+e+LwIctwjHJXG4Miw8BavUfNAJ8Lh4tZZlXFDSr5C+GVdh7twtdajPjN5/prRxqahaiyiFU4TPko9zyn5zUqPTxmr7H34cEO7k8QtsUgscAcubqLDpcmzxhnU1ulfj3uNVXYjviVc5pXK+2Sm6lIfL67XN7ZokynqUxRLcxhRpQfEtz+X4o+4TSRaFuP5nDLfVcsPTBp+nVPZe7F3E3n9eC6nzKvLNCxt0LNPbFSH5ujj/6L24GmxbhcLzy3PkTgkosuZ0+BlYJHOpcaqG1+eF1AqjjH2OJoM2iw+zOwKHGq0Q9JuelnEC7sK+4uUVruN/4cO7PhZ8DX5PL+JaIuIMu0WQZl9RNFCGXvDdpF7aPQ0dwvMEB9T/1MtUJqWnhdffx082Uq3K/k5G58TO/cSsY4PEBeqLeKGuE74FnfK+bVHGXgfUhyQ3tzzF5AAAAAASUVORK5CYII=",alt:"bearded man logo",style:{paddingTop:"1px"}})})})}),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onSubmitSignIn=function(){fetch("https://pure-garden-82302.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):console.log("user already exists")}))},a.state={email:"",password:"",name:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("article",{className:"br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw-6 center",children:Object(h.jsx)("main",{className:"pa4 black-80",children:Object(h.jsxs)("div",{className:"measure",children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Register"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Name"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),g=function(e){var t=e.name,n=e.entries;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"f3",children:"Hi ".concat(t,"! your current entry count is")}),Object(h.jsx)("div",{className:"f1",children:n})]})},f=function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:"f5",children:["The app will detect a face in a picture.",Object(h.jsx)("br",{}),"Enter a picture URL, and give it a try!"]}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"pa4 br3 shadow-5 center",children:[Object(h.jsx)("input",{type:"text",className:"f4 pa2 w-70 center",onChange:t,required:!0}),Object(h.jsx)("button",{className:"w-15 f4 link ph3 pv2 dib white bg-dark-green",onClick:n,children:"Detect"})]})})]})},x=(n(51),n(52),{input:"",imageUrl:"",box:{},route:"SignIn",isSignedIn:!1,user:{email:"",id:"",name:"",entries:0,joined:""}}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{email:t.email,id:t.id,name:t.name,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://pure-garden-82302.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://pure-garden-82302.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"SignOut"===t?e.setState(x):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=x,e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{}),Object(h.jsx)(g,{name:this.state.user.name,entries:this.state.user.entries}),Object(h.jsx)(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(p,{box:s,imageUrl:n})]}):"SignIn"===a||"SignOut"===a?Object(h.jsx)(m,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(h.jsx)(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(s.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};n(241);r.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})})),w()},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){}},[[242,1,2]]]);
//# sourceMappingURL=main.8fa7e886.chunk.js.map