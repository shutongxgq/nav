import{b as z}from"./chunk-VV6V5R7W.js";import"./chunk-FGKPKYUZ.js";import{a as x}from"./chunk-D4CLXS3E.js";import{i as B}from"./chunk-DWZQPLZF.js";import"./chunk-WWEFKW7A.js";import{Wb as q}from"./chunk-SAJXSEG5.js";import{Cb as C,Ob as I,ac as b,bc as M,cc as S,ee as k,he as l,jc as A,mb as L,qb as _,vb as P}from"./chunk-77TSNZTP.js";var O=-Date.now(),N=r=>r.textContent||"",$=r=>r.getAttribute("href")||"",W=r=>r.getAttribute("icon")||"";function E(r){let s=[];return Array.from(r.children).forEach(e=>{if(e.nodeName==="DT"){let n=e.firstElementChild;n?.nodeName==="A"&&s.push({name:N(n),icon:W(n),url:$(n),tags:[],desc:"",rate:5,id:O+=1,breadcrumb:[]})}}),s}function H(r){let s=JSON.parse(JSON.stringify(k)),e=[],n=document.createElement("div");n.innerHTML=r;let u=n.querySelector("dl dl");if(!u)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};try{let m=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("a");o&&a.nav.push({name:N(o),url:$(o),desc:"",tags:[],rate:5,top:!1,icon:W(o),id:O+=1,breadcrumb:[]})}})},v=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let c={title:N(o),nav:[],icon:""};a.nav.push(c);let y=t.querySelector("dl");y&&m(y,c)}}})},h=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=N(o),c={title:d,icon:"",nav:[]};a.nav.push(c);let y=t.querySelector("dl");if(y){let D=E(y);D.length>0&&c.nav.push({title:d,nav:D}),v(y,c)}}}})};var w=m,g=v,R=h;Array.from(u.children).forEach(i=>{if(i.nodeName==="DT"){let a=i.querySelector("h3");if(a){let t=N(a),o={title:t,icon:"",nav:[]};e.push(o);let d=i.querySelector("dl");if(d){let c=E(d);c.length>0&&o.nav.push({title:t,nav:[{title:t,nav:c}]}),h(d,o)}}}});let f=E(u);f.length>0&&e.push({title:l("_uncategorized"),nav:[{title:l("_uncategorized"),nav:[{title:l("_uncategorized"),nav:f}]}]})}catch(m){throw console.log(m),m}function p(m,v){for(let h=0;h<m.length;h++){let f=m[h],i=f.title||f.url,a=v.findIndex(t=>(t.title||t.url)===i);a!==-1?Array.isArray(f.nav)&&p(f.nav,v[a].nav):v.push(f)}}return p(e,s),s}var T=class r{constructor(s,e){this.message=s;this.notification=e}$t=l;websiteList=k;ngOnInit(){}onBookChange(s){let e=this,{files:n}=s.target;if(n.length<=0)return;let u=n[0],p=new FileReader;p.readAsText(u),p.onload=function(){let w=this.result;try{let g=H(w);Array.isArray(g)?(e.message.success(l("_importSuccess")),e.websiteList=g,z(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(l("_errorBookTip"),`${g?.message??""}`)}catch(g){e.notification.error(l("_errorBookTip"),`${g.message}`)}}}static \u0275fac=function(e){return new(e||r)(P(q),P(x))};static \u0275cmp=C({type:r,selectors:[["system-bookmark"]],decls:5,vars:1,consts:[[1,"book-wrapper"],[3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,n){e&1&&(b(0,"div",0),S(1,"div",1),b(2,"label",2),S(3,"img",3),b(4,"input",4),A("change",function(p){return n.onBookChange(p)}),M()()()),e&2&&(_(),I("innerHTML",n.$t("_importEnter"),L))},dependencies:[B],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{T as default};
