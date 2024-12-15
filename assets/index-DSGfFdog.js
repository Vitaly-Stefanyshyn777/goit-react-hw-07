import{j as a,R as N,r as F}from"./react-Dg5t6M8f.js";import{c as q}from"./react-dom-CiFXIj8w.js";import{F as L,a as E,b as y,E as g}from"./formik-skVJ0l6A.js";import{c as v,a as _}from"./yup-CcIpZKtL.js";import{u as p,a as B,P as $}from"./react-redux-DxWLRpZB.js";import{c as h,a as S,i as x,b as P}from"./@reduxjs-DF9IRoxF.js";import{a as d}from"./axios-CCb-kr4I.js";import{c as w}from"./reselect-NCCDNIWx.js";import"./hoist-non-react-statics-CuYXql3D.js";import"./react-is-8JwjhRSi.js";import"./scheduler-CzFDRTuY.js";import"./deepmerge-DhIoniG1.js";import"./lodash-es-dVqQl90_.js";import"./react-fast-compare-BEmwAo5I.js";import"./property-expr-DEi1ZLzV.js";import"./tiny-case-BJ7jYKNY.js";import"./toposort-BhSZ4xpk.js";import"./use-sync-external-store-BWyuoZKe.js";import"./redux-DITMfSWq.js";import"./immer-DqxjFn0G.js";import"./redux-thunk-ClJT1hhx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();d.defaults.baseURL="https://6709628baf1a3998baa15a26.mockapi.io";const i=h("contacts/fetchContacts",async(e,t)=>{try{const{data:r}=await d.get("/contacts");return r}catch(r){return t.rejectWithValue(r.message)}}),l=h("contacts/addContact",async(e,t)=>{try{const{data:r}=await d.post("/contacts",e);return r}catch(r){return t.rejectWithValue(r.message)}}),m=h("contacts/deleteContact",async(e,t)=>{try{return await d.delete(`/contacts/${e}`),e}catch(r){return t.rejectWithValue(r.message)}}),u=h("contacts/updateContact",async({contactId:e,updatedData:t},r)=>{try{const{data:c}=await d.put(`/contacts/${e}`,t);return c}catch(c){return r.rejectWithValue(c.message)}}),R="_contactForm_hqqho_1",T="_formBtn_hqqho_15",W="_inputErr_hqqho_31",M="_formInput_hqqho_35",o={contactForm:R,formBtn:T,inputErr:W,formInput:M},O=v({name:_().min(3,"Minimum 3 characters").max(50,"Maximum 50 characters").required("Name is required"),number:_().matches(/^\+?[1-9]\d{1,14}$/,"Invalid phone number").required("Phone number is required")}),A=()=>{const e=p(),t=(r,{resetForm:c})=>{e(l({name:r.name.trim(),number:r.number.trim()})),c()};return a.jsx(L,{initialValues:{name:"",number:""},validationSchema:O,onSubmit:t,children:a.jsxs(E,{className:o.contactForm,children:[a.jsxs("label",{htmlFor:"name",className:o.label,children:["Name",a.jsx(y,{id:"name",name:"name",className:o.formInput,placeholder:"Enter name"}),a.jsx(g,{name:"name",component:"p",className:o.inputError})]}),a.jsxs("label",{htmlFor:"number",className:o.label,children:["Phone Number",a.jsx(y,{id:"number",name:"number",className:o.formInput,placeholder:"Enter phone number"}),a.jsx(g,{name:"number",component:"p",className:o.inputError})]}),a.jsx("button",{type:"submit",className:o.formBtn,children:"Add Contact"})]})})},V="_contactItem_vo0vp_1",U="_contactList_vo0vp_13",C={contactItem:V,contactList:U},k="_contactText_165ki_1",z="_contactBtn_165ki_9",b={contactText:k,contactBtn:z},D=({user:e})=>{const t=p(),r=()=>{t(m(e.id))};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("p",{className:b.contactText,children:["Name: ",e.name.charAt(0).toUpperCase()+e.name.slice(1)]}),a.jsxs("p",{className:b.contactText,children:["Phone: ",e.number]})]}),a.jsx("button",{className:b.contactBtn,type:"button",onClick:r,children:"Delete"})]})},K={name:""},I=S({name:"filters",initialState:K,reducers:{changeFilter:(e,t)=>{e.name=t.payload}}}),G=e=>e.filters.name,H=I.reducer,{changeFilter:J}=I.actions,Q={items:[],loading:!1,error:null},X=S({name:"contacts",initialState:Q,extraReducers:e=>{e.addCase(i.fulfilled,(t,r)=>{t.items=r.payload}).addCase(l.fulfilled,(t,r)=>{t.items.push(r.payload)}).addCase(m.fulfilled,(t,r)=>{t.items=t.items.filter(c=>c.id!==r.payload)}).addCase(u.fulfilled,(t,r)=>{const c=t.items.findIndex(n=>n.id===r.payload.id);c!==-1&&(t.items[c]=r.payload)}).addMatcher(x(i.pending,l.pending,m.pending,u.pending),t=>{t.loading=!0,t.error=null}).addMatcher(x(i.rejected,l.rejected,m.rejected,u.rejected),(t,r)=>{t.loading=!1,t.error=r.payload}).addMatcher(x(i.fulfilled,l.fulfilled,m.fulfilled,u.fulfilled),t=>{t.loading=!1})}}),Y=X.reducer,Z=e=>e.contacts.items,tt=w([Z,G],(e,t)=>{const r=t.trim().toLowerCase();return e.filter(c=>c.name.toLowerCase().includes(r))}),et=()=>{const e=B(tt);return e.length?a.jsx("ul",{className:C.contactList,children:e.map(t=>a.jsx("li",{className:C.contactItem,children:a.jsx(D,{user:t})},t.id))}):null},rt=N.memo(et),at="_serchWrap_1qrzc_1",ct="_serchInput_1qrzc_18",j={serchWrap:at,serchInput:ct},nt=()=>{const e=p(),t=F.useCallback(r=>{const c=r.target.value.trim().toLowerCase();e(J(c))},[e]);return a.jsxs("div",{className:j.serchWrap,children:[a.jsx("label",{htmlFor:"search",className:j.label,children:"Find contact by name"}),a.jsx("input",{id:"search",className:j.serchInput,type:"text",placeholder:"Type to search...",onChange:t,"aria-label":"Search contacts"})]})},st=N.memo(nt);function ot(){const e=p();return F.useEffect(()=>{e(i())},[e]),a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"pageTitle",children:"Phonebook"}),a.jsx(A,{}),a.jsx(st,{}),a.jsx(rt,{})]})}const it=P({reducer:{contacts:Y,filters:H}});q(document.getElementById("root")).render(a.jsx($,{store:it,children:a.jsx(ot,{})}));