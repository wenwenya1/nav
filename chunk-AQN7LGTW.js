import{f as O,i as B}from"./chunk-GZPUEDWK.js";import{a as V,b as k,c as D}from"./chunk-UZST43R7.js";import"./chunk-Q77DWWMF.js";import{a as $,b as F}from"./chunk-A5GZDOBZ.js";import{b as P}from"./chunk-EMKIXV4H.js";import{Cb as U,Tb as j,Ub as q,_b as G,mb as L,pb as E,sb as W}from"./chunk-NCMGB2NZ.js";import{Ca as l,Cb as b,Da as d,Dc as _,Ec as C,Fc as x,Ib as z,Ob as r,Sd as A,Td as I,Ud as N,ac as a,bc as s,g as y,gc as f,jc as h,lc as m,pe as T,qb as i,qd as M,vb as w,xc as c,yd as S,zc as g}from"./chunk-VEYQFNW6.js";function H(n,u){if(n&1){let t=f();a(0,"div",3)(1,"input",4),x("ngModelChange",function(e){l(t);let p=m();return C(p.authCode,e)||(p.authCode=e),d(e)}),s(),a(2,"div",5)(3,"button",6),h("click",function(){l(t);let e=m();return d(e.handleSubmitAuthCode())}),c(4),s()()()}if(n&2){let t=m();i(),r("placeholder",t.$t("_inputAuthCode")),_("ngModel",t.authCode),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," ")}}function J(n,u){if(n&1){let t=f();a(0,"div")(1,"div",7),c(2),s(),a(3,"input",8),x("ngModelChange",function(e){l(t);let p=m();return C(p.url,e)||(p.url=e),d(e)}),s(),a(4,"div",9)(5,"button",10),h("click",function(){l(t);let e=m();return d(e.handleSave())}),c(6),s(),a(7,"button",11),h("click",function(){l(t);let e=m();return d(e.logoutAuthCode())}),c(8),s()()()}if(n&2){let t=m();i(2),g(" ",t.$t("_bindDomain")," "),i(),_("ngModel",t.url),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," "),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_logoutAuthCode")," ")}}var v=class n{constructor(u){this.message=u}$t=T;submitting=!1;isPermission=!!A();authCode="";url="";ngOnInit(){this.getUserInfo()}getUserInfo(u){return y(this,null,function*(){return this.submitting=!0,j(u).then(t=>(typeof t.data?.data?.url=="string"&&(this.isPermission=!0,this.url=t.data.data.url),t)).finally(()=>{this.submitting=!1})})}handleSubmitAuthCode(){this.submitting||!this.authCode||this.getUserInfo({code:this.authCode}).then(()=>{N(this.authCode),window.location.reload()})}handleSave(){this.submitting=!0,q({url:this.url}).then(()=>{this.getUserInfo(),this.message.success(this.$t("_saveSuccess"))}).finally(()=>{this.submitting=!1})}logoutAuthCode(){I(),window.location.reload()}static \u0275fac=function(t){return new(t||n)(w(G))};static \u0275cmp=b({type:n,selectors:[["auth"]],decls:3,vars:3,consts:[["nzTip","Loading...",3,"nzSpinning"],["class","text-center",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["nz-input","","autofocus","",3,"ngModelChange","placeholder","ngModel"],[1,"text-left"],["nz-button","","nzType","primary",1,"mt-2.5",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5"],["nz-input","","placeholder","example.cn,example.com",3,"ngModelChange","ngModel"],[1,"mt-2.5"],["nz-button","","nzType","primary",3,"click","nzLoading"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click","nzLoading"]],template:function(t,o){t&1&&(a(0,"nz-spin",0),z(1,H,5,4,"div",1)(2,J,9,6,"div",2),s()),t&2&&(r("nzSpinning",o.submitting),i(),r("ngIf",!o.isPermission),i(),r("ngIf",o.isPermission))},dependencies:[S,M,U,L,E,W,B,O,D,k,V,P,F,$],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.poster[_ngcontent-%COMP%]{width:1000px;max-width:100%;border-radius:12px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{v as default};
