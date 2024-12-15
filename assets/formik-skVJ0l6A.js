import{d as or}from"./deepmerge-DhIoniG1.js";import{c as W,i as Fr,t as kr,a as Ir}from"./lodash-es-dVqQl90_.js";import{r as f}from"./react-Dg5t6M8f.js";import{i as U}from"./react-fast-compare-BEmwAo5I.js";import{h as Kr}from"./hoist-non-react-statics-CuYXql3D.js";function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var u=arguments[t];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a])}return e},y.apply(this,arguments)}function _r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function N(e,t){if(e==null)return{};var u={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(u[r]=e[r]);return u}function Rr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var q=f.createContext(void 0);q.displayName="FormikContext";var Yr=q.Provider,qr=q.Consumer;function Mr(){var e=f.useContext(q);return e}var br=function(t){return Array.isArray(t)&&t.length===0},R=function(t){return typeof t=="function"},$=function(t){return t!==null&&typeof t=="object"},Jr=function(t){return String(Math.floor(Number(t)))===t},ir=function(t){return Object.prototype.toString.call(t)==="[object String]"},Lr=function(t){return f.Children.count(t)===0},ar=function(t){return $(t)&&R(t.then)};function A(e,t,u,a){a===void 0&&(a=0);for(var r=kr(t);e&&a<r.length;)e=e[r[a++]];return a!==r.length&&!e||e===void 0?u:e}function O(e,t,u){for(var a=Ir(e),r=a,i=0,o=kr(t);i<o.length-1;i++){var c=o[i],h=A(e,o.slice(0,i+1));if(h&&($(h)||Array.isArray(h)))r=r[c]=Ir(h);else{var T=o[i+1];r=r[c]=Jr(T)&&Number(T)>=0?[]:{}}}return(i===0?e:r)[o[i]]===u?e:(u===void 0?delete r[o[i]]:r[o[i]]=u,i===0&&u===void 0&&delete a[o[i]],a)}function wr(e,t,u,a){u===void 0&&(u=new WeakMap),a===void 0&&(a={});for(var r=0,i=Object.keys(e);r<i.length;r++){var o=i[r],c=e[o];$(c)?u.get(c)||(u.set(c,!0),a[o]=Array.isArray(c)?[]:{},wr(c,t,u,a[o])):a[o]=t}return a}function Qr(e,t){switch(t.type){case"SET_VALUES":return y({},e,{values:t.payload});case"SET_TOUCHED":return y({},e,{touched:t.payload});case"SET_ERRORS":return U(e.errors,t.payload)?e:y({},e,{errors:t.payload});case"SET_STATUS":return y({},e,{status:t.payload});case"SET_ISSUBMITTING":return y({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return y({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return y({},e,{values:O(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return y({},e,{touched:O(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return y({},e,{errors:O(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return y({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return y({},e,{touched:wr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return y({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return y({},e,{isSubmitting:!1});default:return e}}var B={},Y={};function Xr(e){var t=e.validateOnChange,u=t===void 0?!0:t,a=e.validateOnBlur,r=a===void 0?!0:a,i=e.validateOnMount,o=i===void 0?!1:i,c=e.isInitialValid,h=e.enableReinitialize,T=h===void 0?!1:h,b=e.onSubmit,F=N(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),s=y({validateOnChange:u,validateOnBlur:r,validateOnMount:o,onSubmit:b},F),g=f.useRef(s.initialValues),_=f.useRef(s.initialErrors||B),C=f.useRef(s.initialTouched||Y),M=f.useRef(s.initialStatus),k=f.useRef(!1),L=f.useRef({});f.useEffect(function(){return k.current=!0,function(){k.current=!1}},[]);var J=f.useState(0),Q=J[1],z=f.useRef({values:W(s.initialValues),errors:W(s.initialErrors)||B,touched:W(s.initialTouched)||Y,status:W(s.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),S=z.current,E=f.useCallback(function(n){var l=z.current;z.current=Qr(l,n),l!==z.current&&Q(function(d){return d+1})},[]),cr=f.useCallback(function(n,l){return new Promise(function(d,v){var p=s.validate(n,l);p==null?d(B):ar(p)?p.then(function(m){d(m||B)},function(m){v(m)}):d(p)})},[s.validate]),X=f.useCallback(function(n,l){var d=s.validationSchema,v=R(d)?d(l):d,p=l&&v.validateAt?v.validateAt(l,n):xr(n,v);return new Promise(function(m,I){p.then(function(){m(B)},function(D){D.name==="ValidationError"?m(Zr(D)):I(D)})})},[s.validationSchema]),sr=f.useCallback(function(n,l){return new Promise(function(d){return d(L.current[n].validate(l))})},[]),fr=f.useCallback(function(n){var l=Object.keys(L.current).filter(function(v){return R(L.current[v].validate)}),d=l.length>0?l.map(function(v){return sr(v,A(n,v))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(d).then(function(v){return v.reduce(function(p,m,I){return m==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||m&&(p=O(p,l[I],m)),p},{})})},[sr]),Vr=f.useCallback(function(n){return Promise.all([fr(n),s.validationSchema?X(n):{},s.validate?cr(n):{}]).then(function(l){var d=l[0],v=l[1],p=l[2],m=or.all([d,v,p],{arrayMerge:re});return m})},[s.validate,s.validationSchema,fr,cr,X]),V=w(function(n){return n===void 0&&(n=S.values),E({type:"SET_ISVALIDATING",payload:!0}),Vr(n).then(function(l){return k.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:l})),l})});f.useEffect(function(){o&&k.current===!0&&U(g.current,s.initialValues)&&V(g.current)},[o,V]);var G=f.useCallback(function(n){var l=n&&n.values?n.values:g.current,d=n&&n.errors?n.errors:_.current?_.current:s.initialErrors||{},v=n&&n.touched?n.touched:C.current?C.current:s.initialTouched||{},p=n&&n.status?n.status:M.current?M.current:s.initialStatus;g.current=l,_.current=d,C.current=v,M.current=p;var m=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!n&&!!n.isSubmitting,errors:d,touched:v,status:p,values:l,isValidating:!!n&&!!n.isValidating,submitCount:n&&n.submitCount&&typeof n.submitCount=="number"?n.submitCount:0}})};if(s.onReset){var I=s.onReset(S.values,Ar);ar(I)?I.then(m):m()}else m()},[s.initialErrors,s.initialStatus,s.initialTouched,s.onReset]);f.useEffect(function(){k.current===!0&&!U(g.current,s.initialValues)&&T&&(g.current=s.initialValues,G(),o&&V(g.current))},[T,s.initialValues,G,o,V]),f.useEffect(function(){T&&k.current===!0&&!U(_.current,s.initialErrors)&&(_.current=s.initialErrors||B,E({type:"SET_ERRORS",payload:s.initialErrors||B}))},[T,s.initialErrors]),f.useEffect(function(){T&&k.current===!0&&!U(C.current,s.initialTouched)&&(C.current=s.initialTouched||Y,E({type:"SET_TOUCHED",payload:s.initialTouched||Y}))},[T,s.initialTouched]),f.useEffect(function(){T&&k.current===!0&&!U(M.current,s.initialStatus)&&(M.current=s.initialStatus,E({type:"SET_STATUS",payload:s.initialStatus}))},[T,s.initialStatus,s.initialTouched]);var dr=w(function(n){if(L.current[n]&&R(L.current[n].validate)){var l=A(S.values,n),d=L.current[n].validate(l);return ar(d)?(E({type:"SET_ISVALIDATING",payload:!0}),d.then(function(v){return v}).then(function(v){E({type:"SET_FIELD_ERROR",payload:{field:n,value:v}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:n,value:d}}),Promise.resolve(d))}else if(s.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),X(S.values,n).then(function(v){return v}).then(function(v){E({type:"SET_FIELD_ERROR",payload:{field:n,value:A(v,n)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Or=f.useCallback(function(n,l){var d=l.validate;L.current[n]={validate:d}},[]),Dr=f.useCallback(function(n){delete L.current[n]},[]),vr=w(function(n,l){E({type:"SET_TOUCHED",payload:n});var d=l===void 0?r:l;return d?V(S.values):Promise.resolve()}),pr=f.useCallback(function(n){E({type:"SET_ERRORS",payload:n})},[]),hr=w(function(n,l){var d=R(n)?n(S.values):n;E({type:"SET_VALUES",payload:d});var v=l===void 0?u:l;return v?V(d):Promise.resolve()}),K=f.useCallback(function(n,l){E({type:"SET_FIELD_ERROR",payload:{field:n,value:l}})},[]),H=w(function(n,l,d){E({type:"SET_FIELD_VALUE",payload:{field:n,value:l}});var v=d===void 0?u:d;return v?V(O(S.values,n,l)):Promise.resolve()}),mr=f.useCallback(function(n,l){var d=l,v=n,p;if(!ir(n)){n.persist&&n.persist();var m=n.target?n.target:n.currentTarget,I=m.type,D=m.name,nr=m.id,tr=m.value,$r=m.checked,fe=m.outerHTML,gr=m.options,zr=m.multiple;d=l||D||nr,v=/number|range/.test(I)?(p=parseFloat(tr),isNaN(p)?"":p):/checkbox/.test(I)?ne(A(S.values,d),$r,tr):gr&&zr?ee(gr):tr}d&&H(d,v)},[H,S.values]),Z=w(function(n){if(ir(n))return function(l){return mr(l,n)};mr(n)}),j=w(function(n,l,d){l===void 0&&(l=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:n,value:l}});var v=d===void 0?r:d;return v?V(S.values):Promise.resolve()}),yr=f.useCallback(function(n,l){n.persist&&n.persist();var d=n.target,v=d.name,p=d.id,m=d.outerHTML,I=l||v||p;j(I,!0)},[j]),x=w(function(n){if(ir(n))return function(l){return yr(l,n)};yr(n)}),Er=f.useCallback(function(n){R(n)?E({type:"SET_FORMIK_STATE",payload:n}):E({type:"SET_FORMIK_STATE",payload:function(){return n}})},[]),Sr=f.useCallback(function(n){E({type:"SET_STATUS",payload:n})},[]),Tr=f.useCallback(function(n){E({type:"SET_ISSUBMITTING",payload:n})},[]),rr=w(function(){return E({type:"SUBMIT_ATTEMPT"}),V().then(function(n){var l=n instanceof Error,d=!l&&Object.keys(n).length===0;if(d){var v;try{if(v=Nr(),v===void 0)return}catch(p){throw p}return Promise.resolve(v).then(function(p){return k.current&&E({type:"SUBMIT_SUCCESS"}),p}).catch(function(p){if(k.current)throw E({type:"SUBMIT_FAILURE"}),p})}else if(k.current&&(E({type:"SUBMIT_FAILURE"}),l))throw n})}),Ur=w(function(n){n&&n.preventDefault&&R(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&R(n.stopPropagation)&&n.stopPropagation(),rr().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),Ar={resetForm:G,validateForm:V,validateField:dr,setErrors:pr,setFieldError:K,setFieldTouched:j,setFieldValue:H,setStatus:Sr,setSubmitting:Tr,setTouched:vr,setValues:hr,setFormikState:Er,submitForm:rr},Nr=w(function(){return b(S.values,Ar)}),Br=w(function(n){n&&n.preventDefault&&R(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&R(n.stopPropagation)&&n.stopPropagation(),G()}),Pr=f.useCallback(function(n){return{value:A(S.values,n),error:A(S.errors,n),touched:!!A(S.touched,n),initialValue:A(g.current,n),initialTouched:!!A(C.current,n),initialError:A(_.current,n)}},[S.errors,S.touched,S.values]),Hr=f.useCallback(function(n){return{setValue:function(d,v){return H(n,d,v)},setTouched:function(d,v){return j(n,d,v)},setError:function(d){return K(n,d)}}},[H,j,K]),jr=f.useCallback(function(n){var l=$(n),d=l?n.name:n,v=A(S.values,d),p={name:d,value:v,onChange:Z,onBlur:x};if(l){var m=n.type,I=n.value,D=n.as,nr=n.multiple;m==="checkbox"?I===void 0?p.checked=!!v:(p.checked=!!(Array.isArray(v)&&~v.indexOf(I)),p.value=I):m==="radio"?(p.checked=v===I,p.value=I):D==="select"&&nr&&(p.value=p.value||[],p.multiple=!0)}return p},[x,Z,S.values]),er=f.useMemo(function(){return!U(g.current,S.values)},[g.current,S.values]),Gr=f.useMemo(function(){return typeof c<"u"?er?S.errors&&Object.keys(S.errors).length===0:c!==!1&&R(c)?c(s):c:S.errors&&Object.keys(S.errors).length===0},[c,er,S.errors,s]),Wr=y({},S,{initialValues:g.current,initialErrors:_.current,initialTouched:C.current,initialStatus:M.current,handleBlur:x,handleChange:Z,handleReset:Br,handleSubmit:Ur,resetForm:G,setErrors:pr,setFormikState:Er,setFieldTouched:j,setFieldValue:H,setFieldError:K,setStatus:Sr,setSubmitting:Tr,setTouched:vr,setValues:hr,submitForm:rr,validateForm:V,validateField:dr,isValid:Gr,dirty:er,unregisterField:Dr,registerField:Or,getFieldProps:jr,getFieldMeta:Pr,getFieldHelpers:Hr,validateOnBlur:r,validateOnChange:u,validateOnMount:o});return Wr}function ye(e){var t=Xr(e),u=e.component,a=e.children,r=e.render,i=e.innerRef;return f.useImperativeHandle(i,function(){return t}),f.createElement(Yr,{value:t},u?f.createElement(u,t):r?r(t):a?R(a)?a(t):Lr(a)?null:f.Children.only(a):null)}function Zr(e){var t={};if(e.inner){if(e.inner.length===0)return O(t,e.path,e.message);for(var r=e.inner,u=Array.isArray(r),a=0,r=u?r:r[Symbol.iterator]();;){var i;if(u){if(a>=r.length)break;i=r[a++]}else{if(a=r.next(),a.done)break;i=a.value}var o=i;A(t,o.path)||(t=O(t,o.path,o.message))}}return t}function xr(e,t,u,a){u===void 0&&(u=!1);var r=lr(e);return t[u?"validateSync":"validate"](r,{abortEarly:!1,context:r})}function lr(e){var t=Array.isArray(e)?[]:{};for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=String(u);Array.isArray(e[a])===!0?t[a]=e[a].map(function(r){return Array.isArray(r)===!0||Fr(r)?lr(r):r!==""?r:void 0}):Fr(e[a])?t[a]=lr(e[a]):t[a]=e[a]!==""?e[a]:void 0}return t}function re(e,t,u){var a=e.slice();return t.forEach(function(i,o){if(typeof a[o]>"u"){var c=u.clone!==!1,h=c&&u.isMergeableObject(i);a[o]=h?or(Array.isArray(i)?[]:{},i,u):i}else u.isMergeableObject(i)?a[o]=or(e[o],i,u):e.indexOf(i)===-1&&a.push(i)}),a}function ee(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function ne(e,t,u){if(typeof e=="boolean")return!!t;var a=[],r=!1,i=-1;if(Array.isArray(e))a=e,i=e.indexOf(u),r=i>=0;else if(!u||u=="true"||u=="false")return!!t;return t&&u&&!r?a.concat(u):r?a.slice(0,i).concat(a.slice(i+1)):a}var te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function w(e){var t=f.useRef(e);return te(function(){t.current=e}),f.useCallback(function(){for(var u=arguments.length,a=new Array(u),r=0;r<u;r++)a[r]=arguments[r];return t.current.apply(void 0,a)},[])}function Ee(e){var t=e.validate,u=e.name,a=e.render,r=e.children,i=e.as,o=e.component,c=e.className,h=N(e,["validate","name","render","children","as","component","className"]),T=Mr(),b=N(T,["validate","validationSchema"]),F=b.registerField,s=b.unregisterField;f.useEffect(function(){return F(u,{validate:t}),function(){s(u)}},[F,s,u,t]);var g=b.getFieldProps(y({name:u},h)),_=b.getFieldMeta(u),C={field:g,form:b};if(a)return a(y({},C,{meta:_}));if(R(r))return r(y({},C,{meta:_}));if(o){if(typeof o=="string"){var M=h.innerRef,k=N(h,["innerRef"]);return f.createElement(o,y({ref:M},g,k,{className:c}),r)}return f.createElement(o,y({field:g,form:b},h,{className:c}),r)}var L=i||"input";if(typeof L=="string"){var J=h.innerRef,Q=N(h,["innerRef"]);return f.createElement(L,y({ref:J},g,Q,{className:c}),r)}return f.createElement(L,y({},g,h,{className:c}),r)}var ie=f.forwardRef(function(e,t){var u=e.action,a=N(e,["action"]),r=u??"#",i=Mr(),o=i.handleReset,c=i.handleSubmit;return f.createElement("form",y({onSubmit:c,ref:t,onReset:o,action:r},a))});ie.displayName="Form";function ae(e){var t=function(r){return f.createElement(qr,null,function(i){return f.createElement(e,y({},r,{formik:i}))})},u=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+u+")",Kr(t,e)}var ue=function(t,u,a){var r=P(t),i=r[u];return r.splice(u,1),r.splice(a,0,i),r},oe=function(t,u,a){var r=P(t),i=r[u];return r[u]=r[a],r[a]=i,r},ur=function(t,u,a){var r=P(t);return r.splice(u,0,a),r},le=function(t,u,a){var r=P(t);return r[u]=a,r},P=function(t){if(t){if(Array.isArray(t))return[].concat(t);var u=Object.keys(t).map(function(a){return parseInt(a)}).reduce(function(a,r){return r>a?r:a},0);return Array.from(y({},t,{length:u+1}))}else return[]},Cr=function(t,u){var a=typeof t=="function"?t:u;return function(r){if(Array.isArray(r)||$(r)){var i=P(r);return a(i)}return r}},ce=function(e){_r(t,e);function t(a){var r;return r=e.call(this,a)||this,r.updateArrayField=function(i,o,c){var h=r.props,T=h.name,b=h.formik.setFormikState;b(function(F){var s=Cr(c,i),g=Cr(o,i),_=O(F.values,T,i(A(F.values,T))),C=c?s(A(F.errors,T)):void 0,M=o?g(A(F.touched,T)):void 0;return br(C)&&(C=void 0),br(M)&&(M=void 0),y({},F,{values:_,errors:c?O(F.errors,T,C):F.errors,touched:o?O(F.touched,T,M):F.touched})})},r.push=function(i){return r.updateArrayField(function(o){return[].concat(P(o),[W(i)])},!1,!1)},r.handlePush=function(i){return function(){return r.push(i)}},r.swap=function(i,o){return r.updateArrayField(function(c){return oe(c,i,o)},!0,!0)},r.handleSwap=function(i,o){return function(){return r.swap(i,o)}},r.move=function(i,o){return r.updateArrayField(function(c){return ue(c,i,o)},!0,!0)},r.handleMove=function(i,o){return function(){return r.move(i,o)}},r.insert=function(i,o){return r.updateArrayField(function(c){return ur(c,i,o)},function(c){return ur(c,i,null)},function(c){return ur(c,i,null)})},r.handleInsert=function(i,o){return function(){return r.insert(i,o)}},r.replace=function(i,o){return r.updateArrayField(function(c){return le(c,i,o)},!1,!1)},r.handleReplace=function(i,o){return function(){return r.replace(i,o)}},r.unshift=function(i){var o=-1;return r.updateArrayField(function(c){var h=c?[i].concat(c):[i];return o=h.length,h},function(c){return c?[null].concat(c):[null]},function(c){return c?[null].concat(c):[null]}),o},r.handleUnshift=function(i){return function(){return r.unshift(i)}},r.handleRemove=function(i){return function(){return r.remove(i)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(Rr(r)),r.pop=r.pop.bind(Rr(r)),r}var u=t.prototype;return u.componentDidUpdate=function(r){this.props.validateOnChange&&this.props.formik.validateOnChange&&!U(A(r.formik.values,r.name),A(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},u.remove=function(r){var i;return this.updateArrayField(function(o){var c=o?P(o):[];return i||(i=c[r]),R(c.splice)&&c.splice(r,1),R(c.every)&&c.every(function(h){return h===void 0})?[]:c},!0,!0),i},u.pop=function(){var r;return this.updateArrayField(function(i){var o=i.slice();return r||(r=o&&o.pop&&o.pop()),o},!0,!0),r},u.render=function(){var r={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,o=i.component,c=i.render,h=i.children,T=i.name,b=i.formik,F=N(b,["validate","validationSchema"]),s=y({},r,{form:F,name:T});return o?f.createElement(o,s):c?c(s):h?typeof h=="function"?h(s):Lr(h)?null:f.Children.only(h):null},t}(f.Component);ce.defaultProps={validateOnChange:!0};var se=function(e){_r(t,e);function t(){return e.apply(this,arguments)||this}var u=t.prototype;return u.shouldComponentUpdate=function(r){return A(this.props.formik.errors,this.props.name)!==A(r.formik.errors,this.props.name)||A(this.props.formik.touched,this.props.name)!==A(r.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(r).length},u.render=function(){var r=this.props,i=r.component,o=r.formik,c=r.render,h=r.children,T=r.name,b=N(r,["component","formik","render","children","name"]),F=A(o.touched,T),s=A(o.errors,T);return F&&s?c?R(c)?c(s):null:h?R(h)?h(s):null:i?f.createElement(i,b,s):s:null},t}(f.Component),Se=ae(se);export{Se as E,ye as F,ie as a,Ee as b};
