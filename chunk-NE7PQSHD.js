import{b as x}from"./chunk-FPYNLXU6.js";import"./chunk-TSPWCSKW.js";import{a as $}from"./chunk-77C6YCJC.js";import{i as q}from"./chunk-7OHPCI65.js";import"./chunk-YFG7EHDS.js";import{Xb as O}from"./chunk-W54547W7.js";import{Pb as M,bc as k,cc as B,ce as S,dc as w,fe as l,kb as _,kc as z,pb as L,qb as P,xb as I}from"./chunk-NN6536SS.js";var W=-Date.now();function N(r){let i=new Date().toString(),e=r?.getAttribute("add_date");return e?new Date(Number(e)*1e3).toString():i}var b=r=>r.textContent||"",H=r=>r.getAttribute("href")||"",R=r=>r.getAttribute("icon")||"",A=N();function E(r){let i=[];return Array.from(r.children).forEach(e=>{if(e.nodeName==="DT"){let n=e.firstElementChild;n?.nodeName==="A"&&i.push({name:b(n),createdAt:N(n),icon:R(n),url:H(n),tags:[],desc:"",rate:5,id:W+=1,breadcrumb:[]})}}),i}function F(r){let i=JSON.parse(JSON.stringify(S)),e=[],n=document.createElement("div");n.innerHTML=r;let u=n.querySelector("dl dl");if(!u)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};try{let m=function(s,a){Array.from(s.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("a");o&&a.nav.push({name:b(o),createdAt:N(o),url:H(o),desc:"",tags:[],rate:5,top:!1,icon:R(o),id:W+=1,breadcrumb:[]})}})},v=function(s,a){Array.from(s.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let c={title:b(o),createdAt:N(o),nav:[],icon:""};a.nav.push(c);let y=t.querySelector("dl");y&&m(y,c)}}})},h=function(s,a){Array.from(s.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=b(o),c={title:d,createdAt:N(o),icon:"",nav:[]};a.nav.push(c);let y=t.querySelector("dl");if(y){let C=E(y);C.length>0&&c.nav.push({createdAt:A,title:d,nav:C}),v(y,c)}}}})};var D=m,g=v,J=h;Array.from(u.children).forEach(s=>{if(s.nodeName==="DT"){let a=s.querySelector("h3");if(a){let t=b(a),o={title:t,createdAt:N(a),icon:"",nav:[]};e.push(o);let d=s.querySelector("dl");if(d){let c=E(d);c.length>0&&o.nav.push({createdAt:A,title:t,nav:[{title:t,nav:c}]}),h(d,o)}}}});let f=E(u);f.length>0&&e.push({title:l("_uncategorized"),createdAt:A,nav:[{createdAt:A,title:l("_uncategorized"),nav:[{title:l("_uncategorized"),nav:f}]}]})}catch(m){throw console.log(m),m}function p(m,v){for(let h=0;h<m.length;h++){let f=m[h],s=f.title||f.url,a=v.findIndex(t=>(t.title||t.url)===s);a!==-1?Array.isArray(f.nav)&&p(f.nav,v[a].nav):v.push(f)}}return p(e,i),i}var T=class r{constructor(i,e){this.message=i;this.notification=e}$t=l;websiteList=S;ngOnInit(){}onBookChange(i){let e=this,{files:n}=i.target;if(n.length<=0)return;let u=n[0],p=new FileReader;p.readAsText(u),p.onload=function(){let D=this.result;try{let g=F(D);Array.isArray(g)?(e.message.success(l("_importSuccess")),e.websiteList=g,x(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(l("_errorBookTip"),`${g?.message??""}`)}catch(g){e.notification.error(l("_errorBookTip"),`${g.message}`)}}}static \u0275fac=function(e){return new(e||r)(P(O),P($))};static \u0275cmp=I({type:r,selectors:[["system-bookmark"]],decls:5,vars:1,consts:[[1,"book-wrapper"],[3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,n){e&1&&(k(0,"div",0),w(1,"div",1),k(2,"label",2),w(3,"img",3),k(4,"input",4),z("change",function(p){return n.onBookChange(p)}),B()()()),e&2&&(L(),M("innerHTML",n.$t("_importEnter"),_))},dependencies:[q],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{T as default};
