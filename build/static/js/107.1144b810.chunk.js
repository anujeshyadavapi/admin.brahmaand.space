(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{2384:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(813),l=a(51),s=a(13),r=a(14),o=a(16),c=a(15),i=a(0),m=a.n(i),u=a(1145),d=a(1146),p=a(1143),f=a(1144),g=a(1147),b=a(172),h=a(1150),y=a(795),v=a(792),E=a(793),O=a(779),j=a(169),N=a(56),x=a(796),R=a.n(x),S=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files}),r.setState({selectedName:e.target.files.name}),console.log(e.target.files)},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=r.props.match.params.id,a=new FormData;a.append("blog_title",r.state.blog_title),a.append("posted_by",r.state.posted_by),a.append("desc",r.state.desc),a.append("blog_type",r.state.blog_type),a.append("status",r.state.status);var l,s=Object(n.a)(r.state.selectedFile);try{for(s.s();!(l=s.n()).done;){var o=l.value;null!==r.state.selectedFile&&a.append("blogImg",o,o.name)}}catch(f){s.e(f)}finally{s.f()}var c,i=Object(n.a)(a.values());try{for(i.s();!(c=i.n()).done;){var m=c.value;console.log(m)}}catch(f){i.e(f)}finally{i.f()}var u,d=Object(n.a)(a.keys());try{for(d.s();!(u=d.n()).done;){var p=u.value;console.log(p)}}catch(f){d.e(f)}finally{d.f()}j.a.post("/admin/editBlog/".concat(t),a).then((function(e){console.log(e),R()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/brahmaand/blogs/blogList")})).catch((function(e){console.log(e)}))},r.state={blog_title:"",blogImg:"",posted_by:"",desc:"",blog_type:"",selectedFile:null,selectedName:"",status:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;j.a.get("/admin/viewoneBlog/".concat(t),{}).then((function(t){console.log(t),e.setState({blog_title:t.data.data.blog_title,posted_by:t.data.data.posted_by,desc:t.data.data.desc,blog_type:t.data.data.blog_type,blogImg:t.data.data.blogImg,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(p.a,{listTag:"div"},m.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(f.a,{href:"/app/brahmaand/blogs/blogList",tag:"a"},"Blog List"),m.a.createElement(f.a,{active:!0},"Edit Blog "))))),m.a.createElement(g.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Blog")),m.a.createElement(d.a,null,m.a.createElement(N.b,{render:function(e){var t=e.history;return m.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/brahmaand/blogs/blogList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Title"),m.a.createElement(E.a,{required:!0,type:"text",name:"blog_title",placeholder:"",value:this.state.blog_title,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Posted By"),m.a.createElement(E.a,{required:!0,type:"text",name:"posted_by",placeholder:"Enter Name",value:this.state.posted_by,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Descripiton"),m.a.createElement(E.a,{required:!0,type:"text",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Thumnail Image"),m.a.createElement(O.a,{type:"file",onChange:this.onChangeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,{for:"exampleSelect"}," Blog Type"),m.a.createElement(E.a,{name:"blog_type",type:"select",value:this.state.blog_type,onChange:this.changeHandler},m.a.createElement("option",null,"Select Type"),m.a.createElement("option",{value:"Recommended"},"Recommended"),m.a.createElement("option",{value:"Popular"},"Popular")))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(v.a,{className:"mb-1"},m.a.createElement("h4",null,"Status")),m.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(i.Component)},792:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(0),r=a.n(s),o=a(1),c=a.n(o),i=a(4),m=a.n(i),u=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,g=Object(l.a)(e,d),b=[];o.forEach((function(t,n){var l=e[t];if(delete g[t],l||""===l){var s,r=!n;if(Object(u.isObject)(l)){var o,c=r?"-":"-"+t+"-";s=h(r,t,l.size),b.push(Object(u.mapToCssModules)(m()(((o={})[s]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),a)}else s=h(r,t,l),b.push(s)}}));var y=Object(u.mapToCssModules)(m()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:f},g,{className:y}))};y.propTypes=g,y.defaultProps=b,t.a=y},793:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(11),r=a(12),o=a(0),c=a.n(o),i=a(1),m=a.n(i),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,g=e.plaintext,b=e.innerRef,h=Object(l.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=m||("select"===s||"textarea"===s?s:"input"),O="form-control";g?(O+="-plaintext",E=m||"input"):"file"===s?O+="-file":"range"===s?O+="-range":y&&(O=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var j=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===E||m&&"function"===typeof m)&&(h.type=s),h.children&&!g&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=g,b.defaultProps={type:"text"},t.a=b},795:function(e,t,a){"use strict";var n=a(5),l=a(9),s=a(11),r=a(12),o=a(0),c=a.n(o),i=a(1),m=a.n(i),u=a(4),d=a.n(u),p=a(3),f=["className","cssModule","inline","tag","innerRef"],g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,i=Object(l.a)(e,f),m=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:m}))},t}(o.Component);b.propTypes=g,b.defaultProps={tag:"form"},t.a=b},813:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(90);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s,r=!0,o=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){o=!0,s=e},f:function(){try{r||null==l.return||l.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=107.1144b810.chunk.js.map