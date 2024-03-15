"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{7294:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,i,a,s,c,d,u,p,x,l,m,f=t(2791),h=t(4420),b=t(1325),g=t(5705),j=t(8007),v=t(2564),Z=t(3634),w=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},P=t(168),C=t(7924),L=(0,C.ZP)(g.l0)(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),q=C.ZP.label(o||(o=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),_=(0,C.ZP)(g.gN)(i||(i=(0,P.Z)(["\n  padding: 4px 4px 4px 8px;\n  width: 300px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  background-color: ",";\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);\n"])),(function(n){return n.theme.colors.white})),S=(0,C.ZP)(g.Bc)(a||(a=(0,P.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.red})),z=C.ZP.button(s||(s=(0,P.Z)(["\n  display: block;\n  padding: 8px;\n  min-width: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 14px;\n  border: 1px solid ",";\n  background: transparent;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out,\n    color 250ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 0px 10px 0px ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.green})),A=t(184),I=j.Ry().shape({name:j.Z_().min(2,"Too Short!").required("Required"),number:j.Z_().min(6,"Too Short!").required("Required")}),F=function(){var n=(0,h.v9)(w),e=(0,h.I0)();return(0,A.jsx)("div",{children:(0,A.jsx)(g.J9,{initialValues:{name:"",number:""},validationSchema:I,onSubmit:function(t,r){var o=t.name.toLowerCase();if(n.find((function(n){return n.name.toLowerCase()===o})))return v.Am.info("Contact ".concat(o," in the list"));e((0,Z.uK)(t)),v.Am.info("Contact ".concat(o," added to list")),r.resetForm()},children:(0,A.jsxs)(L,{autoComplete:"off",children:[(0,A.jsxs)(q,{children:["Name",(0,A.jsx)(_,{id:"name",type:"text",name:"name",required:!0}),(0,A.jsx)(S,{name:"name",component:"span"})]}),(0,A.jsxs)(q,{children:["Phone",(0,A.jsx)(_,{id:"number",type:"text",name:"number",required:!0}),(0,A.jsx)(S,{name:"number",component:"span"})]}),(0,A.jsx)(z,{type:"submit",children:"Add contact"})]})})})},R=C.ZP.input(c||(c=(0,P.Z)(["\n  width: 240px;\n  padding: 4px 4px 4px 8px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);\n\n  &:focus {\n    box-shadow: 1px 1px 4px 0px ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),K=t(1273),N=t(3553),T=function(n){return n.filter},B=(0,N.P1)([w,T],(function(n,e){return n.filter((function(n){var t=n.name.toLowerCase().trim(),r=e.toLowerCase().trim();return t.includes(r)}))})),D=function(){var n=(0,h.v9)(T),e=(0,h.I0)();return(0,A.jsx)("div",{children:(0,A.jsx)(R,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,K.x)(n.target.value))},placeholder:"Find contact by name"})})},E=C.ZP.li(d||(d=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 5px;\n  transition: transform 250ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),G=C.ZP.button(u||(u=(0,P.Z)(["\n  min-width: 40px;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  background: transparent;\n  border-radius: 18px;\n  font-size: 14px;\n  text-align: center;\n\n  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 0px 10px 0px ",";\n  }\n"])),(function(n){return n.theme.colors.tomato})),J=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,i=(0,h.I0)();return(0,A.jsxs)(E,{children:[(0,A.jsxs)("span",{children:[r,":"]}),(0,A.jsx)("span",{children:o}),(0,A.jsx)(G,{type:"button",onClick:function(){return function(n,e){i((0,Z.GK)(n)),v.Am.info("Contact ".concat(e," deleted from list"))}(t,r)},children:"Delete"})]})},V=C.ZP.ul(p||(p=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  border-radius: 4px;\n  list-style: none;\n"]))),H=function(){var n=(0,h.v9)(B);return(0,A.jsx)("div",{children:(0,A.jsx)(V,{children:n.map((function(n){return(0,A.jsx)(J,{contact:n},n.id)}))})})},M=t.p+"static/media/bg.2b5b2c9cf875cb2e40b7.jpg",O=C.ZP.div(x||(x=(0,P.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 700px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 10px;\n  margin-top: 25px;\n  border-radius: 8px;\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),M),Q=C.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 40px;\n"]))),U=C.ZP.h2(m||(m=(0,P.Z)(["\n  display: block;\n  font-weight: 700;\n  font-size: 24px;\n  margin-top: 60px;\n  margin-bottom: 12px;\n"]))),W=function(){var n={contacts:(0,h.v9)(w),isLoading:(0,h.v9)(y),error:(0,h.v9)(k)},e=n.contacts,t=n.isLoading,r=(0,h.I0)();return(0,f.useEffect)((function(){r((0,Z.yF)())}),[r]),(0,A.jsxs)(O,{children:[(0,A.jsx)(U,{children:"Phonebook"}),(0,A.jsx)(Q,{children:(0,A.jsx)(b.Z,{color:"#5febf9",loading:t,size:40,"aria-label":"Loading Spinner","data-testid":"loader"})}),(0,A.jsx)(F,{}),e.length>0&&(0,A.jsxs)(Q,{children:[(0,A.jsx)(U,{children:"Contacts"}),(0,A.jsx)(D,{}),(0,A.jsx)(H,{})]})]})}}}]);
//# sourceMappingURL=200.1d279f35.chunk.js.map