(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),o=t(12),i=t.n(o),u=(t(24),t(17)),s=t(4),l=t(5),b=t(8),d=t(7),j=t(2),f=t(13),m=t(3);function h(){var n=Object(j.a)(["\ndisplay:block;"]);return h=function(){return n},n}function v(){var n=Object(j.a)(["\nmargin: 0 auto;\nborder: 1px solid black;\npadding-left: 20px;\nwidth: 300px;\n"]);return v=function(){return n},n}function O(){var n=Object(j.a)(["\n&:hover{\n  background-color: #3197fd;\n};\nborder-radius:5px;\noutline:none;\nborder:none;\nbackground-color:teal;"]);return O=function(){return n},n}var p=m.a.button(O()),x=m.a.form(v()),g=m.a.input(h()),y=function(n){Object(b.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(f.a)({},r,a))},n.getUserById=function(n,e){return n.find((function(n){return n.name===e||n.number===e}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.name,r=n.state.number,a=n.props.contacts;n.getUserById(a,t)||n.getUserById(a,r)?alert("".concat(t," is alredy in contacts.")):n.props.onAddContact(n.state.name,n.state.number)},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(x,{onSubmit:this.handleSubmit,children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name"}),Object(r.jsx)(g,{type:"text",onChange:this.handleChange,id:"name",name:"name"}),Object(r.jsx)("label",{htmlFor:"number",children:"Number"}),Object(r.jsx)(g,{type:"text",onChange:this.handleChange,id:"number",name:"number"}),Object(r.jsx)(p,{type:"submit",children:"Add contact"})]})})}}]),t}(a.Component),C=t(28);function k(){var n=Object(j.a)(["\ndisplay:block;\nmargin: 0 auto;"]);return k=function(){return n},n}var F=m.a.input(k()),w=function(n){var e=n.value,t=n.onChangeFilter;return Object(r.jsx)("div",{children:Object(r.jsx)(F,{type:"text",value:e,onChange:function(n){return t(n.target.value)}})})};function S(){var n=Object(j.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n"]);return S=function(){return n},n}function A(){var n=Object(j.a)(["\n&:hover{\n  background-color: #3197fd;\n};\nborder-radius:5px;\noutline:none;\nborder:none;\nbackground-color:teal;"]);return A=function(){return n},n}var N=m.a.button(A()),R=m.a.li(S()),B=function(n){var e=n.id,t=n.name,a=n.number,c=n.onRemove;return Object(r.jsxs)(R,{children:[Object(r.jsxs)("p",{children:[t,":"]}),Object(r.jsx)("span",{children:a}),Object(r.jsx)(N,{type:"button",onClick:function(){return c(e)},children:"Delete"})]})};function I(){var n=Object(j.a)(["\nlist-style:none;\nwidth: 300px;\nmargin: 0 auto;\n"]);return I=function(){return n},n}var L=m.a.ul(I()),U=function(n){var e=n.filterFN,t=n.onRemove;return Object(r.jsx)(L,{children:e().map((function(n){var e=n.id,a=n.name,c=n.number;return Object(r.jsx)(B,{id:e,name:a,number:c,onRemove:t},Object(C.a)())}))})};function D(){var n=Object(j.a)(["\ndisplay:block;\ntext-align:center;"]);return D=function(){return n},n}function E(){var n=Object(j.a)(["\n  text-align: center;\n"]);return E=function(){return n},n}var J=m.a.h2(E()),H=m.a.p(D()),K=function(n){Object(b.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(e,t){var r={id:Object(C.a)(),name:e,number:t};n.setState((function(n){return{contacts:[].concat(Object(u.a)(n.contacts),[r])}}))},n.filterFN=function(){var e=n.state,t=e.contacts,r=e.filter;return t.filter((function(n){return n.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())}))},n.changeFilter=function(e){n.setState({filter:e})},n.removeContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this.state,e=n.filter,t=n.contacts;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{children:"Phonebook"}),Object(r.jsx)(y,{onAddContact:this.addContact,contacts:t}),Object(r.jsx)(J,{children:"Contacts"}),Object(r.jsx)(H,{children:"Find contact by name"}),Object(r.jsx)(w,{value:e,onChangeFilter:this.changeFilter}),Object(r.jsx)(U,{filterFN:this.filterFN,onRemove:this.removeContact})]})}}]),t}(a.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fefa183f.chunk.js.map