(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{2391:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(51),r=t(13),s=t(14),l=t(16),c=t(15),i=t(0),o=t.n(i),m=t(1145),d=t(1146),u=t(1143),p=t(1144),f=t(1147),h=t(172),b=t(1150),g=t(795),v=t(792),E=t(793),y=t(169),O=t(56),j=t(796),N=t.n(j),x=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;y.a.post("/editScript/".concat(a),s.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),N()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/brahmaand/leaderboard/leaderBoardList")})).catch((function(e){console.log(e)}))},s.state={script_type:"",script_name:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/getone_script/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({script_type:a.data.data.script_type,script_name:a.data.data.script_name})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(u.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/brahmaand/leaderboard/leaderBoardList",tag:"a"},"Leader Board List"),o.a.createElement(p.a,{active:!0},"Edit Leader"))))),o.a.createElement(f.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Leader")),o.a.createElement(d.a,null,o.a.createElement(O.b,{render:function(e){var a=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/leaderboard/leaderBoardList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Name"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Current Point"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null," Total Point"),o.a.createElement(E.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null," Upload Image"),o.a.createElement(E.a,{required:!0,type:"file",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler}))),o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(i.Component)},792:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),i=t.n(c),o=t(4),m=t.n(o),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,i=e.tag,o=e.check,p=e.size,f=e.for,h=Object(r.a)(e,u),b=[];c.forEach((function(a,n){var r=e[a];if(delete h[a],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var c,i=l?"-":"-"+a+"-";s=g(l,a,r.size),b.push(Object(d.mapToCssModules)(m()(((c={})[s]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),t)}else s=g(l,a,r),b.push(s)}}));var v=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},793:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",y=m||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},795:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,o=Object(r.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:c,className:m}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=139.f26d9ebc.chunk.js.map