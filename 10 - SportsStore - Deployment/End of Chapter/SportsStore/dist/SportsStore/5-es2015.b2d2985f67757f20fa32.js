(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),b=n("3Pt+"),o=n("tyNb"),c=n("fXoL"),i=n("hO0c");function a(t,e){if(1&t&&(c.Mb(0,"div",11),c.hc(1),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.jc(" ",t.errorMessage," ")}}let d=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}authenticate(t){t.valid?this.auth.authenticate(this.username,this.password).subscribe(t=>{t&&this.router.navigateByUrl("/admin/main"),this.errorMessage="Authentication Failed"}):this.errorMessage="Form Data Invalid"}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(o.b),c.Jb(i.a))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:20,vars:3,consts:[[1,"bg-info","p-2","text-center","text-white"],["class","bg-danger mt-2 p-2 text-center text-white",4,"ngIf"],[1,"p-2"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["name","username","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["routerLink","/",1,"btn","btn-secondary","m-1"],["type","submit",1,"btn","btn-primary","m-1"],[1,"bg-danger","mt-2","p-2","text-center","text-white"]],template:function(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",0),c.Mb(1,"h3"),c.hc(2,"SportsStore Admin"),c.Lb(),c.Lb(),c.gc(3,a,2,1,"div",1),c.Mb(4,"div",2),c.Mb(5,"form",3,4),c.Ub("ngSubmit",(function(n){c.dc(t);const r=c.cc(6);return e.authenticate(r)})),c.Mb(7,"div",5),c.Mb(8,"label"),c.hc(9,"Name"),c.Lb(),c.Mb(10,"input",6),c.Ub("ngModelChange",(function(t){return e.username=t})),c.Lb(),c.Lb(),c.Mb(11,"div",5),c.Mb(12,"label"),c.hc(13,"Password"),c.Lb(),c.Mb(14,"input",7),c.Ub("ngModelChange",(function(t){return e.password=t})),c.Lb(),c.Lb(),c.Mb(15,"div",8),c.Mb(16,"button",9),c.hc(17,"Go back"),c.Lb(),c.Mb(18,"button",10),c.hc(19,"Log In"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}2&t&&(c.zb(3),c.Zb("ngIf",null!=e.errorMessage),c.zb(7),c.Zb("ngModel",e.username),c.zb(4),c.Zb("ngModel",e.password))},directives:[r.j,b.k,b.e,b.f,b.b,b.i,b.d,b.g,o.c],encapsulation:2}),t})(),s=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}logout(){this.auth.clear(),this.router.navigateByUrl("/")}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(i.a),c.Jb(o.b))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:15,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col","bg-dark","text-white"],[1,"navbar-brand"],[1,"row","mt-2"],[1,"col-3"],["routerLink","/admin/main/products","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],["routerLink","/admin/main/orders","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],[1,"btn","btn-outline-danger","btn-block",3,"click"],[1,"col-9"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.Mb(3,"a",3),c.hc(4,"SPORTS STORE"),c.Lb(),c.Lb(),c.Lb(),c.Mb(5,"div",4),c.Mb(6,"div",5),c.Mb(7,"button",6),c.hc(8," Products "),c.Lb(),c.Mb(9,"button",7),c.hc(10," Orders "),c.Lb(),c.Mb(11,"button",8),c.Ub("click",(function(t){return e.logout()})),c.hc(12," Logout "),c.Lb(),c.Lb(),c.Mb(13,"div",9),c.Kb(14,"router-outlet"),c.Lb(),c.Lb(),c.Lb())},directives:[o.c,o.d,o.f],encapsulation:2}),t})(),u=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(t,e){return!!this.auth.authenticated||(this.router.navigateByUrl("/admin/auth"),!1)}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(o.b),c.Qb(i.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac}),t})();var h=n("jU2X");const p=function(t){return["/admin/main/products/edit",t]};function l(t,e){if(1&t){const t=c.Nb();c.Mb(0,"tr"),c.Mb(1,"td"),c.hc(2),c.Lb(),c.Mb(3,"td"),c.hc(4),c.Lb(),c.Mb(5,"td"),c.hc(6),c.Lb(),c.Mb(7,"td"),c.hc(8),c.Xb(9,"currency"),c.Lb(),c.Mb(10,"td"),c.Mb(11,"button",3),c.hc(12," Edit "),c.Lb(),c.Mb(13,"button",4),c.Ub("click",(function(n){c.dc(t);const r=e.$implicit;return c.Wb().deleteProduct(r.id)})),c.hc(14," Delete "),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(2),c.ic(t.id),c.zb(2),c.ic(t.name),c.zb(2),c.ic(t.category),c.zb(2),c.ic(c.Yb(9,5,t.price,"USD","symbol","2.2-2")),c.zb(3),c.Zb("routerLink",c.ac(10,p,t.id))}}let g=(()=>{class t{constructor(t){this.repository=t}getProducts(){return this.repository.getProducts()}deleteProduct(t){this.repository.deleteProduct(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(h.a))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:16,vars:1,consts:[[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],["routerLink","/admin/main/products/create",1,"btn","btn-primary"],[1,"btn","btn-sm","btn-warning","m-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"table",0),c.Mb(1,"thead"),c.Mb(2,"tr"),c.Mb(3,"th"),c.hc(4,"ID"),c.Lb(),c.Mb(5,"th"),c.hc(6,"Name"),c.Lb(),c.Mb(7,"th"),c.hc(8,"Category"),c.Lb(),c.Mb(9,"th"),c.hc(10,"Price"),c.Lb(),c.Kb(11,"th"),c.Lb(),c.Lb(),c.Mb(12,"tbody"),c.gc(13,l,15,12,"tr",1),c.Lb(),c.Lb(),c.Mb(14,"button",2),c.hc(15," Create New Product\n"),c.Lb()),2&t&&(c.zb(13),c.Zb("ngForOf",e.getProducts()))},directives:[r.i,o.c],pipes:[r.c],encapsulation:2}),t})();var m=n("4Sfc");let M=(()=>{class t{constructor(t,e,n){this.repository=t,this.router=e,this.editing=!1,this.product=new m.a,this.editing="edit"==n.snapshot.params.mode,this.editing&&Object.assign(this.product,t.getProduct(n.snapshot.params.id))}save(t){this.repository.saveProduct(this.product),this.router.navigateByUrl("/admin/main/products")}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(h.a),c.Jb(o.b),c.Jb(o.a))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:26,vars:12,consts:[[1,"bg-primary","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","category",1,"form-control",3,"ngModel","ngModelChange"],["name","description",1,"form-control",3,"ngModel","ngModelChange"],["name","price",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","m-1"],["type","reset","routerLink","/admin/main/products",1,"btn","btn-secondary"]],template:function(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",0),c.Mb(1,"h5"),c.hc(2),c.Lb(),c.Lb(),c.Mb(3,"form",1,2),c.Ub("ngSubmit",(function(n){c.dc(t);const r=c.cc(4);return e.save(r)})),c.Mb(5,"div",3),c.Mb(6,"label"),c.hc(7,"Name"),c.Lb(),c.Mb(8,"input",4),c.Ub("ngModelChange",(function(t){return e.product.name=t})),c.Lb(),c.Lb(),c.Mb(9,"div",3),c.Mb(10,"label"),c.hc(11,"Category"),c.Lb(),c.Mb(12,"input",5),c.Ub("ngModelChange",(function(t){return e.product.category=t})),c.Lb(),c.Lb(),c.Mb(13,"div",3),c.Mb(14,"label"),c.hc(15,"Description"),c.Lb(),c.Mb(16,"textarea",6),c.Ub("ngModelChange",(function(t){return e.product.description=t})),c.hc(17,"        "),c.Lb(),c.Lb(),c.Mb(18,"div",3),c.Mb(19,"label"),c.hc(20,"Price"),c.Lb(),c.Mb(21,"input",7),c.Ub("ngModelChange",(function(t){return e.product.price=t})),c.Lb(),c.Lb(),c.Mb(22,"button",8),c.hc(23),c.Lb(),c.Mb(24,"button",9),c.hc(25," Cancel "),c.Lb(),c.Lb()}2&t&&(c.Bb("bg-warning",e.editing)("text-dark",e.editing),c.zb(2),c.jc("",e.editing?"Edit":"Create"," Product"),c.zb(6),c.Zb("ngModel",e.product.name),c.zb(4),c.Zb("ngModel",e.product.category),c.zb(4),c.Zb("ngModel",e.product.description),c.zb(5),c.Zb("ngModel",e.product.price),c.zb(1),c.Bb("btn-warning",e.editing),c.zb(1),c.jc(" ",e.editing?"Save":"Create"," "))},directives:[b.k,b.e,b.f,b.b,b.d,b.g,o.c],encapsulation:2}),t})();var L=n("hf/X");function f(t,e){1&t&&(c.Mb(0,"tr"),c.Mb(1,"td",7),c.hc(2,"There are no orders"),c.Lb(),c.Lb())}function v(t,e){if(1&t&&(c.Mb(0,"tr"),c.Kb(1,"td",4),c.Mb(2,"td"),c.hc(3),c.Lb(),c.Mb(4,"td"),c.hc(5),c.Lb(),c.Lb()),2&t){const t=e.$implicit;c.zb(3),c.ic(t.product.name),c.zb(2),c.ic(t.quantity)}}function y(t,e){if(1&t){const t=c.Nb();c.Mb(0,"tr"),c.Mb(1,"td"),c.hc(2),c.Lb(),c.Mb(3,"td"),c.hc(4),c.Lb(),c.Mb(5,"th"),c.hc(6,"Product"),c.Lb(),c.Mb(7,"th"),c.hc(8,"Quantity"),c.Lb(),c.Mb(9,"td"),c.Mb(10,"button",8),c.Ub("click",(function(n){c.dc(t);const r=e.$implicit;return c.Wb().markShipped(r)})),c.hc(11," Ship "),c.Lb(),c.Mb(12,"button",9),c.Ub("click",(function(n){c.dc(t);const r=e.$implicit;return c.Wb().delete(r.id)})),c.hc(13," Delete "),c.Lb(),c.Lb(),c.Lb(),c.gc(14,v,6,2,"tr",10)}if(2&t){const t=e.$implicit;c.zb(2),c.ic(t.name),c.zb(2),c.ic(t.zip),c.zb(10),c.Zb("ngForOf",t.cart.lines)}}let k=(()=>{class t{constructor(t){this.repository=t,this.includeShipped=!1}getOrders(){return this.repository.getOrders().filter(t=>this.includeShipped||!t.shipped)}markShipped(t){t.shipped=!0,this.repository.updateOrder(t)}delete(t){this.repository.deleteOrder(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(L.a))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:17,vars:3,consts:[[1,"form-check"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"table","table-sm"],["colspan","2"],[4,"ngIf"],["ngFor","",3,"ngForOf"],["colspan","5"],[1,"btn","btn-warning","m-1",3,"click"],[1,"btn","btn-danger",3,"click"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"label",1),c.Mb(2,"input",2),c.Ub("ngModelChange",(function(t){return e.includeShipped=t})),c.Lb(),c.hc(3," Display Shipped Orders "),c.Lb(),c.Lb(),c.Mb(4,"table",3),c.Mb(5,"thead"),c.Mb(6,"tr"),c.Mb(7,"th"),c.hc(8,"Name"),c.Lb(),c.Mb(9,"th"),c.hc(10,"Zip"),c.Lb(),c.Mb(11,"th",4),c.hc(12,"Cart"),c.Lb(),c.Kb(13,"th"),c.Lb(),c.Lb(),c.Mb(14,"tbody"),c.gc(15,f,3,0,"tr",5),c.gc(16,y,15,3,"ng-template",6),c.Lb(),c.Lb()),2&t&&(c.zb(2),c.Zb("ngModel",e.includeShipped),c.zb(13),c.Zb("ngIf",0==e.getOrders().length),c.zb(1),c.Zb("ngForOf",e.getOrders()))},directives:[b.a,b.d,b.g,r.j,r.i],encapsulation:2}),t})();n.d(e,"AdminModule",(function(){return z}));let w=o.e.forChild([{path:"auth",component:d},{path:"main",component:s,canActivate:[u],children:[{path:"products/:mode/:id",component:M},{path:"products/:mode",component:M},{path:"products",component:g},{path:"orders",component:k},{path:"**",redirectTo:"products"}]},{path:"**",redirectTo:"auth"}]),z=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},providers:[u],imports:[[r.b,b.c,w]]}),t})()}}]);