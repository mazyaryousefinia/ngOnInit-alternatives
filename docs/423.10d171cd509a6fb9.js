"use strict";(self.webpackChunkng_oninit_alternatives=self.webpackChunkng_oninit_alternatives||[]).push([[423],{5423:(U,s,i)=>{i.r(s),i.d(s,{ViewModelModule:()=>w});var c=i(9808),l=i(9903),d=i(5121),a=i(4004),e=i(1223),p=i(3372),u=i(2340),m=i(520);let v=(()=>{class o{constructor(t){this.http=t}getTodos(){return this.http.get(`${u.N.baseURL}/todos`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),f=(()=>{class o{constructor(t){this.http=t}getComments(){return this.http.get(`${u.N.baseURL}/posts/1/comments`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function g(o,n){if(1&o&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.name)}}function h(o,n){if(1&o&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.title)}}function M(o,n){if(1&o&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.body)}}function C(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"h4"),e._uU(2,"Users"),e.qZA(),e.YNc(3,g,3,1,"ul",1),e.TgZ(4,"h4"),e._uU(5,"Todos"),e.qZA(),e.YNc(6,h,3,1,"ul",1),e.ALo(7,"slice"),e.TgZ(8,"h4"),e._uU(9,"Comments"),e.qZA(),e.YNc(10,M,3,1,"ul",1),e.BQk()),2&o){const t=n.ngIf;e.xp6(3),e.Q6J("ngForOf",t.user),e.xp6(3),e.Q6J("ngForOf",e.Dn7(7,3,t.todo,0,5)),e.xp6(4),e.Q6J("ngForOf",t.comment)}}const T=[{path:"",component:(()=>{class o{constructor(t,r,S){this.userService=t,this.todoService=r,this.commentService=S,this.vm$=(0,d.a)([this.userService.getUsers(),this.todoService.getTodos(),this.commentService.getComments()]).pipe((0,a.U)(([y,Z,F])=>({user:y,todo:Z,comment:F})))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.K),e.Y36(v),e.Y36(f))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-model"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(e.YNc(0,C,11,7,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.vm$))},directives:[c.O5,c.sg],pipes:[c.Ov,c.OU],encapsulation:2}),o})()}];let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(T)],l.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,V]]}),o})()}}]);