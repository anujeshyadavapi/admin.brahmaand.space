(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2358:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),l=t(16),r=t(15),c=t(0),i=t.n(c),m=t(1145),d=t(1146),o=t(1143),u=t(1144),E=t(1147),f=t(172),h=t(1150),v=(t(27),t(874),t(562),t(169)),p=(t(41),t(56)),N=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getone_reslist/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(o.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/users/usersList",tag:"a"},"User List"),i.a.createElement(u.a,{active:!0},"View Users "))))),i.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Users")),i.a.createElement(d.a,null,i.a.createElement(p.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/users/usersList")}},"Back")}}))),i.a.createElement(h.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Users Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.firstname," ",this.state.data.lastname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.mobile))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Date Of Birth"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.dob))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Gender"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.gender))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.status))))))))))}}]),t}(i.a.Component);a.default=N},874:function(e,a,t){}}]);
//# sourceMappingURL=192.ec90fccd.chunk.js.map