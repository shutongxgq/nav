import{a as H,b as X}from"./chunk-76JXUFGZ.js";import"./chunk-TT4WLZKN.js";import{d as Q}from"./chunk-OEGKSEIZ.js";import"./chunk-TXHE24RZ.js";import{d as Y,e as Z,f as ee,g as te,h as ie,i as ne,j as ae,k as re,l as oe}from"./chunk-SLLWOYA5.js";import"./chunk-CRTVTUF4.js";import"./chunk-W27Z7WDT.js";import"./chunk-CDTCGRT6.js";import{F as z}from"./chunk-IPH56MTX.js";import{a as W,b as R,c as j}from"./chunk-YTJOT4QW.js";import"./chunk-YBC6Q4TC.js";import{a as J,b as q}from"./chunk-O7UJYN3H.js";import{b as U}from"./chunk-UH5OWYPE.js";import{$ as b,Hb as G,Jb as K,Mb as I,Wb as v}from"./chunk-XKHSPAJZ.js";import{Ca as u,Cb as w,Cd as $,Da as h,Gc as N,Ib as f,Nd as B,Ob as l,Pd as V,Wd as A,ac as n,bc as a,cc as k,ee as F,g as T,gc as x,ge as P,jc as _,je as m,lc as p,nb as D,nd as O,od as L,qb as i,vb as S,wd as M,xc as r,yc as d,zc as g}from"./chunk-PNZA5NSP.js";function de(o,t){if(o&1){let e=x();n(0,"button",13),_("click",function(){u(e);let c=p(2);return h(c.handleSubmit())}),r(1),a()}if(o&2){let e=p(2);l("nzLoading",e.submitting),i(),g(" ",e.$t("_save")," ")}}function se(o,t){o&1&&(n(0,"div",14),r(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),a())}function ce(o,t){if(o&1&&k(0,"tag-list",20),o&2){let e=p().$implicit;l("data",e.tags)}}function me(o,t){if(o&1){let e=x();n(0,"tr")(1,"td",8),_("nzCheckedChange",function(c){let C=u(e).$implicit,y=p(2);return h(y.onItemChecked(C.extra.uuid,c))}),a(),n(2,"td")(3,"a",15),_("click",function(){let c=u(e),C=c.$implicit,y=c.index,le=p(2);return h(le.handleClick(C,y))}),r(4),a()(),n(5,"td"),r(6),a(),n(7,"td"),r(8),a(),n(9,"td"),k(10,"app-logo",16),a(),n(11,"td")(12,"a",17),r(13),a()(),n(14,"td"),f(15,ce,1,1,"tag-list",18),a(),n(16,"td")(17,"pre",19),r(18),a()(),n(19,"td",11),r(20),a(),n(21,"td"),r(22),a()()}if(o&2){let e=t.$implicit,s=p(2);i(),l("nzChecked",s.setOfCheckedId.has(e.extra.uuid)),i(3),d(s.$t("_handle")),i(2),d(s.typeMap[e.extra.type]),i(2),d(e.id),i(2),l("src",e.icon)("name",e.name),i(2),l("href",e.url,D),i(),d(e.name),i(2),l("ngIf",e.tags),i(3),d(e.desc),i(2),g(" ",e.breadcrumb," "),i(2),d(e.createdAt)}}function pe(o,t){if(o&1){let e=x();n(0,"div"),f(1,de,2,2,"button",3),n(2,"button",4),_("click",function(){u(e);let c=p();return h(c.getUserCollect())}),r(3),a(),n(4,"button",5),_("click",function(){u(e);let c=p();return h(c.batchDelete())}),r(5),a(),f(6,se,2,0,"div",6),n(7,"nz-table",7,0)(9,"thead")(10,"tr")(11,"th",8),_("nzCheckedChange",function(c){u(e);let C=p();return h(C.onAllChecked(c))}),a(),n(12,"th",9),r(13),a(),n(14,"th",9),r(15),a(),n(16,"th",9),r(17,"ID"),a(),n(18,"th",9),r(19),a(),n(20,"th",10),r(21),a(),n(22,"th",10),r(23),a(),n(24,"th",11),r(25),a(),n(26,"th",11),r(27),a(),n(28,"th"),r(29),a()()(),n(30,"tbody"),f(31,me,23,12,"tr",12),a()()()}if(o&2){let e=p();i(),l("ngIf",!e.isSelfDevelop),i(),l("nzLoading",e.submitting),i(),g(" ",e.$t("_refresh")," "),i(),l("nzLoading",e.submitting),i(),g(" ",e.$t("_del")," "),i(),l("ngIf",!e.isSelfDevelop),i(),l("nzData",e.dataList)("nzShowPagination",!1),i(4),l("nzChecked",e.checked),i(2),d(e.$t("_action")),i(2),d(e.$t("_type")),i(4),d(e.$t("_icon")),i(2),d(e.$t("_webName")),i(2),d(e.$t("_associatedLabels")),i(2),d(e.$t("_webDesc")),i(2),d(e.$t("_webTag")),i(2),d(e.$t("_createAt")),i(2),l("ngForOf",e.dataList)("ngForTrackBy",e.trackByItem)}}var E=class o{constructor(t,e){this.message=t;this.modal=e}$t=m;isSelfDevelop=A;submitting=!1;isPermission=!!B();dataList=[];authCode="";tagMap=F;typeMap={1:m("_add"),2:m("_edit"),3:m("_del")};setOfCheckedId=new Set;checked=!1;ngOnInit(){this.getUserCollect()}onAllChecked(t){this.dataList.forEach(e=>{t?this.setOfCheckedId.add(e.extra.uuid):this.setOfCheckedId.delete(e.extra.uuid)})}onItemChecked(t,e){e?this.setOfCheckedId.add(t):this.setOfCheckedId.delete(t)}batchDelete(){this.submitting||!this.setOfCheckedId.size||this.modal.info({nzTitle:m("_confirmDel"),nzOnOk:()=>{this.submitting=!0,I({data:this.dataList.filter(t=>this.setOfCheckedId.has(t.extra.uuid))}).then(t=>{this.checked=!1,this.setOfCheckedId.clear(),this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}})}handleDelete(t){this.submitting=!0,I({data:[this.dataList[t]]}).then(e=>{this.dataList=e.data?.data||[]}).finally(()=>{this.submitting=!1})}getUserCollect(){this.submitting=!0,K().then(t=>{this.isPermission=!0,this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||(V(this.authCode),this.getUserCollect())}handleCreate(t,e){let s=this;b.emit("CREATE_WEB",{parentId:t.parentId,detail:t,isMove:!0}),b.emit("SET_CREATE_WEB",{detail:null,callback(){s.handleDelete(e)}})}handleDeleteWeb(t,e){this.modal.info({nzTitle:m("_confirmDel"),nzOnOk:()=>T(this,null,function*(){(yield Q([t.id]))&&this.message.success(m("_delSuccess")),this.handleDelete(e)})})}handleUpdateWeb(t){b.emit("CREATE_WEB",{detail:t})}handleClick(t,e){t.extra.type===1?this.handleCreate(t,e):t.extra.type===3?this.handleDeleteWeb(t,e):t.extra.type===2&&this.handleUpdateWeb(t)}handleSubmit(){this.submitting||this.modal.info({nzTitle:m("_syncDataOut"),nzOkText:m("_confirmSync"),nzContent:m("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,G({message:"update db",content:JSON.stringify(P),path:$}).then(()=>{this.message.success(m("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(t,e){return e.id}static \u0275fac=function(e){return new(e||o)(S(v),S(z))};static \u0275cmp=w({type:o,selectors:[["user-collect"]],features:[N([v,z])],decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["nz-button","","nzType","primary","style","margin-right: 20px",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 color-red font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],[3,"nzCheckedChange","nzChecked"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",2,"margin-right","20px",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","color-red","font-bold"],[3,"click"],[3,"src","name"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],[3,"data"]],template:function(e,s){e&1&&(n(0,"nz-spin",1),f(1,pe,32,19,"div",2),a()),e&2&&(l("nzSpinning",s.submitting),i(),l("ngIf",s.isPermission))},dependencies:[M,O,L,q,J,j,R,W,U,oe,ne,Y,ee,Z,re,ie,ae,te,H,X],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{E as default};
