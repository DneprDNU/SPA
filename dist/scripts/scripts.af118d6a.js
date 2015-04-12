"use strict";angular.module("dnuApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","restAuth","ui.bootstrap","angularFileUpload","restFacultyResource","restCategoryResource","restDepartmentResource","restSpecialityResource","restSearchResource","restSubjectResource","restLinkResource","restTeacherResource","restResourceResource","restUserResource","restFreeResourceResource","dnuApp.directives"]).run(["$rootScope",function(a){a.serviceIp="212.3.125.102"}]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/auth",{templateUrl:"views/auth.html",controller:"AuthCtrl"}).when("/faculties",{templateUrl:"views/faculties.html",controller:"FacultiesCtrl"}).when("/faculty/:id",{templateUrl:"views/faculty.html",controller:"FacultyCtrl"}).when("/departments",{templateUrl:"views/departments.html",controller:"DepartmentsCtrl"}).when("/faculty/:facultyId/department/:id",{templateUrl:"views/department.html",controller:"DepartmentCtrl"}).when("/subjects",{templateUrl:"views/subjects.html",controller:"SubjectsCtrl"}).when("/teachers",{templateUrl:"views/teachers.html",controller:"TeachersCtrl"}).when("/free-resources",{templateUrl:"views/free-resources.html",controller:"FreeResourcesCtrl"}).when("/resource/:id",{templateUrl:"views/resource.html",controller:"ResourceCtrl"}).when("/resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/specialities",{templateUrl:"views/specialities.html",controller:"SpecialitiesCtrl"}).when("/faculty/:facultyId/speciality/:id",{templateUrl:"views/speciality.html",controller:"SpecialityCtrl"}).when("/faculty/:facultyId/speciality/:specId/subject/:id",{templateUrl:"views/subject.html",controller:"SubjectCtrl"}).when("/faculty/:facultyId/speciality/:specId/teacher/:id",{templateUrl:"views/teacher.html",controller:"TeacherCtrl"}).when("/faculty/:facultyId/department/:departmentId/subject/:id",{templateUrl:"views/subject.html",controller:"SubjectCtrl"}).when("/faculty/:facultyId/department/:departmentId/teacher/:id",{templateUrl:"views/teacher.html",controller:"TeacherCtrl"}).when("/admin",{templateUrl:"views/admin_menu.html",controller:"AdminMenuCtrl"}).when("/admin/faculties",{templateUrl:"views/admin/faculty/faculties.html",controller:"FacultyAdminListCtrl"}).when("/admin/faculty",{templateUrl:"views/admin/faculty/faculty.html",controller:"FacultyAdminCreateCtrl"}).when("/admin/faculty/:id",{templateUrl:"views/admin/faculty/faculty.html",controller:"FacultyAdminEditCtrl"}).when("/admin/categories",{templateUrl:"views/admin/category/categories.html",controller:"CategoryAdminListCtrl"}).when("/admin/category",{templateUrl:"views/admin/category/category.html",controller:"CategoryAdminCreateCtrl"}).when("/admin/category/:id",{templateUrl:"views/admin/category/category.html",controller:"CategoryAdminEditCtrl"}).when("/admin/resources",{templateUrl:"views/admin/resource/resources.html",controller:"ResourceAdminListCtrl"}).when("/admin/resource",{templateUrl:"views/admin/resource/resource.html",controller:"ResourceAdminCreateCtrl"}).when("/admin/resource/:id",{templateUrl:"views/admin/resource/resource.html",controller:"ResourceAdminEditCtrl"}).when("/admin/free-resources",{templateUrl:"views/admin/free-resource/free-resources.html",controller:"FreeResourceAdminListCtrl"}).when("/admin/free-resource",{templateUrl:"views/admin/free-resource/free-resource.html",controller:"FreeResourceAdminCreateCtrl"}).when("/admin/free-resource/:id",{templateUrl:"views/admin/free-resource/free-resource.html",controller:"FreeResourceAdminEditCtrl"}).when("/admin/teachers",{templateUrl:"views/admin/teacher/teachers.html",controller:"TeacherAdminListCtrl"}).when("/admin/teacher",{templateUrl:"views/admin/teacher/teacher.html",controller:"TeacherAdminCreateCtrl"}).when("/admin/teacher/:id",{templateUrl:"views/admin/teacher/teacher.html",controller:"TeacherAdminEditCtrl"}).when("/admin/links",{templateUrl:"views/admin/links/links.html",controller:"LinkAdminListCtrl"}).when("/admin/link",{templateUrl:"views/admin/links/link.html",controller:"LinkAdminCreateCtrl"}).when("/admin/link/:id",{templateUrl:"views/admin/links/link.html",controller:"LinkAdminEditCtrl"}).when("/admin/subjects",{templateUrl:"views/admin/subject/subjects.html",controller:"SubjectAdminListCtrl"}).when("/admin/subject",{templateUrl:"views/admin/subject/subject.html",controller:"SubjectAdminCreateCtrl"}).when("/admin/subject/:id",{templateUrl:"views/admin/subject/subject.html",controller:"SubjectAdminEditCtrl"}).when("/admin/users",{templateUrl:"views/admin/user/users.html",controller:"UserAdminListCtrl"}).when("/admin/user",{templateUrl:"views/admin/user/user.html",controller:"UserAdminCreateCtrl"}).when("/admin/user/:id",{templateUrl:"views/admin/user/user.html",controller:"UserAdminEditCtrl"}).when("/admin/specialities",{templateUrl:"views/admin/speciality/specialities.html",controller:"SpecialityAdminListCtrl"}).when("/admin/speciality",{templateUrl:"views/admin/speciality/speciality.html",controller:"SpecialityAdminCreateCtrl"}).when("/admin/speciality/:id",{templateUrl:"views/admin/speciality/speciality.html",controller:"SpecialityAdminEditCtrl"}).when("/admin/departments",{templateUrl:"views/admin/department/departments.html",controller:"DepartmentAdminListCtrl"}).when("/admin/department",{templateUrl:"views/admin/department/department.html",controller:"DepartmentAdminCreateCtrl"}).when("/admin/department/:id",{templateUrl:"views/admin/department/department.html",controller:"DepartmentAdminEditCtrl"}).otherwise({redirectTo:"/"}),c.defaults.useXDomain=!0,delete c.defaults.headers.common["X-Requested-With"],c.interceptors.push(["$q","$rootScope","$location",function(a,b,c){return{responseError:function(d){var e=d.status,f=d.config,g=f.method,h=f.url;return 401==e?c.path("/login"):b.error=g+" on "+h+" failed with status "+e,a.reject(d)}}}]),c.interceptors.push(["$q","$rootScope","$location",function(a,b){return{request:function(c){if(angular.isDefined(b.authToken)){var d=b.authToken;c.headers["X-Auth-Token"]=d}return c||a.when(c)}}}])}]).run(["$rootScope","$location","$cookieStore","$timeout","restAuthentication",function(a,b,c,d,e){a.$on("$viewContentLoaded",function(){delete a.error}),a.hasRole=function(b){return void 0===a.user||void 0===a.user.roles?!1:-1!==a.user.roles.indexOf(b)},a.logout=function(){delete a.user,delete a.authToken,c.remove("authToken"),a.loggedIn=!0};var f=c.get("authToken");void 0!==f&&(a.authToken=f,e.get(function(b){a.user=b,a.initialized=!0,a.loggedIn=void 0===b})),a.loggedIn=void 0===f,a.userMenuActions=[{name:"menu.login",href:"#/login",roles:[]},{name:"menu.logout",href:"#/logout",roles:["READ_ONLY","ADMIN"]},{name:"menu.foo",href:"#/foo",roles:["READ_ONLY","ADMIN"]},{name:"menu.adminArea",href:"#/adminArea",roles:["ADMIN"]}],a.serviceIp="212.3.125.102",a.updateIsotope=function(){window.dispatchEvent(new Event("resize"))}}]),angular.module("dnuApp").controller("MainCtrl",["$scope","$rootScope",function(){}]),angular.module("dnuApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("dnuApp").controller("ContactCtrl",["$scope",function(){}]),angular.module("dnuApp").controller("CategoriesListCtrl",["$scope","$routeParams","restResources","restCategories",function(a,b,c,d){a.categories=d.list(),a.categoryResourcesAmount=[],a.categoriesWithContent=[],angular.forEach(a.categories,function(b,c){a.categoriesWithContent[c]=b}),a.filterCategories=function(a){return a.resourceCount>0}}]),angular.module("dnuApp").controller("LoginCtrl",["$scope","$rootScope","$location","$cookieStore","restAuthentication",function(a,b,c,d,e){a.rememberMe=!1,a.login=function(){e.authenticate($.param({username:a.username,password:a.password}),function(a){var f=a.token;b.authToken=f,void 0!==f&&(d.put("authToken",f),b.loggedIn=!1),e.get(function(a){b.user=a,c.path("/admin")})})}}]),angular.module("dnuApp").controller("AuthCtrl",["$scope","$rootScope","$location","$cookieStore","restAuthentication",function(a,b,c,d,e){a.rememberMe=!1,a.login=function(){e.authenticate($.param({username:a.username,password:a.password}),function(a){var f=a.token;b.authToken=f,void 0!==f&&(d.put("authToken",f),b.loggedIn=!1),e.get(function(a){b.user=a,c.path("/")})})}}]),angular.module("dnuApp").controller("FreeResourcesCtrl",["$scope","$routeParams","restSearch","restFreeResources",function(a,b,c,d){a.freeResources=void 0!==b.search?c.search({searchKey:b.search}):d.list(),console.log(a)}]),angular.module("dnuApp").controller("FreeLastResourcesCtrl",["$scope","restResources",function(a,b){a.resources=b.list(),console.log(a)}]),angular.module("dnuApp").controller("FreeResourceCtrl",["$scope","$routeParams","restFreeResource",function(a,b,c){a.freeResource=c.get({id:b.id})}]),angular.module("dnuApp").controller("FacultiesCtrl",["$scope","$timeout","restFaculties",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Faculty",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("FacultyCtrl",["$scope","$timeout","$routeParams","restFaculty","restSpecialities",function(a,b,c,d,e){a.faculty=d.get({id:c.id}),a.departments=a.faculty.departments,a.specialities=e.list({facultyId:c.id})}]),angular.module("dnuApp").controller("SpecialitiesCtrl",["$scope","$timeout","restSpecialities",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Speciality",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("SpecialityCtrl",["$scope","$routeParams","restSpeciality","restFaculty","restSubjects","restTeachers",function(a,b,c,d,e){a.speciality=c.get({id:b.id,facultyId:b.facultyId}),a.faculty=d.get({id:b.facultyId}),a.subjects=e.list({departmentId:b.id}),a.teachers=a.speciality.supervisors,console.log(a.speciality.supervisors)}]),angular.module("dnuApp").controller("DepartmentsCtrl",["$scope","$timeout","restTeachers",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Department",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("DepartmentCtrl",["$scope","$timeout","$routeParams","restDepartment","restSubjects","restTeachers","restFaculty",function(a,b,c,d,e,f,g){a.department=d.get({id:c.id}),a.faculty=g.get({id:c.facultyId}),a.subjects=e.list({departmentId:c.id}),a.specialities=a.department.specialities,a.teachers=a.department.employees}]),angular.module("dnuApp").controller("TeachersCtrl",["$scope","$timeout","restTeachers",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Teacher",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("TeacherCtrl",["$scope","$routeParams","restResources",function(a,b,c){a.resources=c.list({teacherId:b.id})}]),angular.module("dnuApp").controller("ResourcesCtrl",["$scope","$routeParams","restSearch","restResources",function(a,b,c,d){a.resources=void 0!==b.search?c.search({searchKey:b.search}):void 0!==b.categoryId?d.list({categoryId:b.categoryId}):d.list()}]),angular.module("dnuApp").controller("LastResourcesCtrl",["$scope","restResources",function(a,b){a.resources=b.list()}]),angular.module("dnuApp").controller("ResourceCtrl",["$scope","$rootScope","$routeParams","restResource","restAuthentication",function(a,b,c,d,e){e.get(function(e){b.user=e,a.isLoggedIn=void 0!==b.user.roles,a.resource=d.get({id:c.id})})}]),angular.module("dnuApp").controller("SubjectsCtrl",["$scope","$timeout","restSubjects",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Subject",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("SubjectCtrl",["$scope","$routeParams","restSubject",function(a,b,c){a.subject=c.get({id:b.id})}]),angular.module("dnuApp").controller("SearchCtrl",["$scope","$location",function(a,b){a.searchKey="",a.search=function(){b.path("/resources").search({search:a.searchKey})}}]),angular.module("dnuApp").controller("AdminMenuCtrl",["$scope","$rootScope","$location","restAuthentication",function(a,b,c,d){d.get(function(d){b.user=d,b.hasRole("ROLE_ADMIN")||b.hasRole("ROLE_SUPERADMIN")||c.path("/login"),a.isSuperAdmin=b.hasRole("ROLE_SUPERADMIN"),a.isAdmin=b.hasRole("ROLE_ADMIN")||b.hasRole("ROLE_SUPERADMIN")})}]),angular.module("dnuApp").controller("MainMenuCtrl",["$scope","$rootScope",function(a,b){a.isAdmin=b.hasRole("ROLE_ADMIN")||b.hasRole("ROLE_SUPERADMIN"),a.loggedIn=void 0!==b.user,a.logout=b.logout}]),angular.module("dnuApp").controller("FacultyAdminListCtrl",["$scope","$routeParams","$location","restFaculty","restFaculties",function(a,b,c,d,e){if(a.editFaculty=function(a){c.path("/admin/faculty/"+a)},a.deleteFaculty=function(b){d["delete"]({id:b},function(){a.faculties=e.list()})},a.createNewFaculty=function(){c.path("/admin/faculty")},a.pager={current:1,items:[],count:1},e.count(function(c){a.pager.count=c.count;for(var d=0;a.pager.count/10>=d;d++){var e=d+1;a.pager.items.push({active:e==(void 0!==b.page?b.page:1),number:e,url:"#/admin/faculties?page="+e})}}),a.pager.current=void 0!==b.page?b.page:1,a.pager.items=[],void 0!==b.page){var f=10*(b.page-1),g=10*b.page;a.faculties=e.list({adminMode:1,from:f,to:g})}else a.faculties=e.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("FacultyAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restFaculty","restDepartments",function(a,b,c,d,e,f,g){a.save=function(){if(void 0!==a.faculty.image){var e=[],f=[];void 0!==a.faculty.image[0]&&(e.push(a.faculty.image[0]),f.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/faculty/"+a.faculty.id,method:"PUT",data:{resource:a.faculty},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/faculties")})}else restFaculties.create(a.faculty,function(){c.path("/admin/faculties")})},a.cancel=function(){c.path("/admin/faculties")},a.faculty=f.get({id:e.id}),a.departments=g.list(),a.createNewFaculty=function(){c.path("/admin/faculty")}}]),angular.module("dnuApp").controller("FacultyAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restFaculties","restDepartments",function(a,b,c,d,e,f,g){a.save=function(){if(void 0!==a.faculty.image){var e=[],g=[];void 0!==a.faculty.image[0]&&(e.push(a.faculty.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/faculty/",method:"POST",data:{resource:a.faculty},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/faculties")})}else f.create(a.faculty,function(){c.path("/admin/faculties")})},a.departments=g.list(),a.cancel=function(){c.path("/admin/faculties")}}]),angular.module("dnuApp").controller("ResourceAdminListCtrl",["$scope","$location","$routeParams","restResources","restResource",function(a,b,c,d,e){if(a.editResource=function(a){b.path("/admin/resource/"+a)},a.deleteResource=function(b){e["delete"]({id:b},function(){a.resources=d.list()})},a.createNewResource=function(){b.path("/admin/resource")},a.pager={current:1,items:[],count:1},d.count(function(b){a.pager.count=b.count;for(var d=0;a.pager.count/10>=d;d++){var e=d+1;a.pager.items.push({active:e==(void 0!==c.page?c.page:1),number:e,url:"#/admin/resources?page="+e})}}),a.pager.current=void 0!==c.page?c.page:1,a.pager.items=[],void 0!==c.page){var f=10*(c.page-1),g=10*c.page;a.resources=d.list({adminMode:1,from:f,to:g})}else a.resources=d.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("ResourceAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restResource","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.resource.image||void 0!==a.resource.file){var d=[],g=[];void 0!==a.resource.image&&void 0!==a.resource.image[0]&&(d.push(a.resource.image[0]),g.push("image")),void 0!==a.resource.file&&void 0!==a.resource.file[0]&&(d.push(a.resource.file[0]),g.push("file")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/resource/"+a.resource.id,method:"PUT",data:{resource:a.resource},file:d,fileFormDataName:g}).success(function(){c.path("/admin/resources")})}else f.update(a.resource,function(){c.path("/admin/resources")});c.path("/admin/resources")},a.cancel=function(){c.path("/admin/resources")},a.resource=f.get({id:d.id}),a.categories=g.list(),a.subjects=h.list(),a.createNewResource=function(){c.path("/admin/resource")}}]),angular.module("dnuApp").controller("ResourceAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restResources","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.resource.image||void 0!==a.resource.file){var d=[],g=[];void 0!==a.resource.image&&void 0!==a.resource.image[0]&&(d.push(a.resource.image[0]),g.push("image")),void 0!==a.resource.file&&void 0!==a.resource.file[0]&&(d.push(a.resource.file[0]),g.push("file")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/resource/",method:"POST",data:{resource:a.resource},file:d,fileFormDataName:["image","file"]}).success(function(){c.path("/admin/resources")})}else f.create(a.resource,function(){})},a.categories=g.list(),a.subjects=h.list(),a.cancel=function(){c.path("/admin/resources")}}]),angular.module("dnuApp").controller("FreeResourceAdminListCtrl",["$scope","$location","restFreeResources","restResource","$routeParams",function(a,b,c,d,e){if(a.editResource=function(a){b.path("/admin/free-resource/"+a)},a.deleteResource=function(b){d["delete"]({id:b}),a.freeResources=c.list()},a.createNewResource=function(){b.path("/admin/free-resource")},a.pager={current:1,items:[],count:1},c.count(function(b){a.pager.count=b.count;for(var c=0;a.pager.count/10>=c;c++){var d=c+1;a.pager.items.push({active:d==(void 0!==e.page?e.page:1),number:d,url:"#/admin/free-resources?page="+d})}}),a.pager.current=void 0!==e.page?e.page:1,a.pager.items=[],void 0!==e.page){var f=10*(e.page-1),g=10*e.page;a.freeResources=c.list({adminMode:1,from:f,to:g})}else a.freeResources=c.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("FreeResourceAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restFreeResource","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){f.update(a.freeResource),c.path("/admin/free-resources")},a.cancel=function(){c.path("/admin/free-resources")},a.freeResource=f.get({id:d.id}),a.categories=g.list(),a.subjects=h.list(),a.createNewResource=function(){c.path("/admin/free-resource")}}]),angular.module("dnuApp").controller("FreeResourceAdminCreateCtrl",["$scope","$location","$routeParams","restFreeResources","restCategories","restSubjects",function(a,b,c,d,e,f){a.save=function(){d.create(a.freeResource),b.path("/admin/free-resources")},a.categories=e.list(),a.subjects=f.list(),a.cancel=function(){b.path("/admin/free-resources")}}]),angular.module("dnuApp").controller("CategoryAdminListCtrl",["$scope","$location","restFaculty","restCategories","$routeParams",function(a,b,c,d,e){if(a.editCategory=function(a){b.path("/admin/category/"+a)},a.deleteCategory=function(b){d["delete"]({id:b},function(){a.faculties=d.list()})},a.createNewCategory=function(){b.path("/admin/category")},a.pager={current:1,items:[],count:1},d.count(function(b){a.pager.count=b.count;for(var c=0;a.pager.count/10>=c;c++){var d=c+1;a.pager.items.push({active:d==(void 0!==e.page?e.page:1),number:d,url:"#/admin/categories?page="+d})}}),a.pager.current=void 0!==e.page?e.page:1,a.pager.items=[],void 0!==e.page){var f=10*(e.page-1),g=10*e.page;a.categories=d.list({adminMode:1,from:f,to:g})}else a.categories=d.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("CategoryAdminEditCtrl",["$scope","$location","$routeParams","restCategorie",function(a,b,c,d){a.save=function(){d.update(a.category,function(){b.path("/admin/categories")})},a.cancel=function(){b.path("/admin/categories")},a.category=d.get({id:c.id}),a.createNewCategory=function(){b.path("/admin/categories")}}]),angular.module("dnuApp").controller("CategoryAdminCreateCtrl",["$scope","$location","$routeParams","restCategories",function(a,b,c,d){a.save=function(){d.create(a.category,function(){b.path("/admin/categories")})},a.cancel=function(){b.path("/admin/categories")}}]),angular.module("dnuApp").controller("TeacherAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restTeacher",function(a,b,c,d,e,f){a.save=function(){if(void 0!==a.teacher.image){var e=[],g=[];void 0!==a.teacher.image[0]&&(e.push(a.teacher.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/teacher/"+a.teacher.id,method:"PUT",data:{resource:a.teacher},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/teachers")})}else f.update(a.teacher,function(){c.path("/admin/teachers")})},a.cancel=function(){c.path("/admin/teachers")},a.teacher=f.get({id:e.id}),a.createNewTeacher=function(){c.path("/admin/teachers")}}]),angular.module("dnuApp").controller("TeacherAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restTeachers",function(a,b,c,d,e,f){console.log(a),a.save=function(){if(void 0!==a.teacher.image){var e=[],g=[];void 0!==a.teacher.image[0]&&(e.push(a.teacher.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/teacher/",method:"POST",data:{resource:a.teacher},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/teachers")})}else f.create(a.teacher,function(){c.path("/admin/teachers")})},a.cancel=function(){c.path("/admin/teachers")}}]),angular.module("dnuApp").controller("TeacherAdminListCtrl",["$scope","$location","restFaculty","restTeachers","restTeacher","$routeParams",function(a,b,c,d,e,f){if(a.editTeacher=function(a){b.path("/admin/teacher/"+a)},a.deleteTeacher=function(b){e["delete"]({id:b},function(){a.teachers=d.list()})},a.createNewTeacher=function(){b.path("/admin/teacher")},a.pager={current:1,items:[],count:1},d.count(function(b){a.pager.count=b.count;for(var c=0;a.pager.count/10>=c;c++){var d=c+1;a.pager.items.push({active:d==(void 0!==f.page?f.page:1),number:d,url:"#/admin/teachers?page="+d})}}),a.pager.current=void 0!==f.page?f.page:1,a.pager.items=[],void 0!==f.page){var g=10*(f.page-1),h=10*f.page;a.teachers=d.list({adminMode:1,from:g,to:h})}else a.teachers=d.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("LinkAdminEditCtrl",["$scope","restSpecialities","restSubjects","restTeachers","$location","$routeParams","restLink",function(a,b,c,d,e,f,g){a.save=function(){d.update(a.link),e.path("/admin/links")},a.cancel=function(){e.path("/admin/links")},a.link=g.get({id:f.id}),a.specialities=b.list(),a.subjects=c.list(),a.teachers=d.list(),a.createNewLink=function(){e.path("/admin/links")}}]),angular.module("dnuApp").controller("LinkAdminCreateCtrl",["$scope","$location","restSpecialities","restSubjects","restTeachers","$routeParams","restLinks",function(a,b,c,d,e,f,g){a.save=function(){g.create(a.link),b.path("/admin/links")},a.specialities=c.list(),a.subjects=d.list(),a.teachers=e.list(),a.cancel=function(){b.path("/admin/links")},console.log(a)}]),angular.module("dnuApp").controller("LinkAdminListCtrl",["$scope","$location","$routeParams","restFaculty","restLinks",function(a,b,c,d,e){if(a.editLink=function(a){b.path("/admin/link/"+a)},a.deleteLink=function(b){e["delete"]({id:b}),a.faculties=e.list()},a.createNewLink=function(){b.path("/admin/link")},a.pager={current:1,items:[],count:1},e.count(function(b){a.pager.count=b.count;for(var d=0;a.pager.count/10>=d;d++){var e=d+1;a.pager.items.push({active:e==(void 0!==c.page?c.page:1),number:e,url:"#/admin/links?page="+e})}}),a.pager.current=void 0!==c.page?c.page:1,a.pager.items=[],void 0!==c.page){var f=10*(c.page-1),g=10*c.page;a.links=e.list({adminMode:1,from:f,to:g})}else a.links=e.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("SubjectAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restSubject","restTeachers","restResources",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.subject.image){var e=[],g=[];void 0!==a.subject.image[0]&&(e.push(a.subject.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/subject/"+a.subject.id,method:"PUT",data:{resource:a.subject},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/subjects")})}else f.update(a.subject,function(){c.path("/admin/subjects")})},a.cancel=function(){c.path("/admin/subjects")},a.subject=f.get({id:e.id}),a.supervisors=g.list(),a.resources=h.list(),a.createNewSubject=function(){c.path("/admin/subjects")}}]),angular.module("dnuApp").controller("SubjectAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restSubjects","restTeachers","restResources",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.subject.image){var e=[],g=[];void 0!==a.subject.image[0]&&(e.push(a.subject.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/subject/",method:"POST",data:{resource:a.subject},file:e,fileFormDataName:["image"]}).success(function(){c.path("/admin/subjects")})}else f.create(a.subject,function(){c.path("/admin/subjects")})},a.subject={},a.resources=h.list(),a.supervisors=g.list(),a.cancel=function(){c.path("/admin/subjects")}}]),angular.module("dnuApp").controller("SubjectAdminListCtrl",["$scope","$location","restFaculty","restSubjects","$routeParams",function(a,b,c,d,e){if(a.editSubject=function(a){b.path("/admin/subject/"+a)},a.deleteSubject=function(b){d["delete"]({id:b},function(){a.faculties=d.list()})},a.createNewSubject=function(){b.path("/admin/subject")},a.pager={current:1,items:[],count:1},d.count(function(b){a.pager.count=b.count;for(var c=0;a.pager.count/10>=c;c++){var d=c+1;a.pager.items.push({active:d==(void 0!==e.page?e.page:1),number:d,url:"#/admin/subjects?page="+d})}}),a.pager.current=void 0!==e.page?e.page:1,a.pager.items=[],void 0!==e.page){var f=10*(e.page-1),g=10*e.page;a.subjects=d.list({adminMode:1,from:f,to:g})}else a.subjects=d.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("SpecialityAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","restSpeciality","restTeachers",function(a,b,c,d,e,f){a.save=function(){e.update(a.speciality),c.path("/admin/specialities")},a.cancel=function(){c.path("/admin/specialities")},a.speciality=e.get({id:d.id}),a.supervisors=f.list(),a.createNewSpeciality=function(){c.path("/admin/specialities")}}]),angular.module("dnuApp").controller("SpecialityAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","restSpecialities","restTeachers",function(a,b,c,d,e,f){a.save=function(){e.create(a.speciality,function(){c.path("/admin/specialities")})},a.supervisors=f.list(),a.cancel=function(){c.path("/admin/specialities")}}]),angular.module("dnuApp").controller("SpecialityAdminListCtrl",["$scope","$location","restFaculty","restSpecialities","$routeParams",function(a,b,c,d,e){if(a.editSpeciality=function(a){b.path("/admin/speciality/"+a)},a.deleteSpeciality=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewSpeciality=function(){b.path("/admin/speciality")},a.pager={current:1,items:[],count:1},d.count(function(b){a.pager.count=b.count;for(var c=0;a.pager.count/10>=c;c++){var d=c+1;a.pager.items.push({active:d==(void 0!==e.page?e.page:1),number:d,url:"#/admin/specialities?page="+d})}}),a.pager.current=void 0!==e.page?e.page:1,a.pager.items=[],void 0!==e.page){var f=10*(e.page-1),g=10*e.page;a.specialities=d.list({adminMode:1,from:f,to:g})}else a.specialities=d.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("DepartmentAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restDepartment","restSpecialities","restTeachers",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.department.image){var d=[],g=[];void 0!==a.department.image[0]&&(d.push(a.department.image[0]),g.push("image")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/"+a.department.id,method:"PUT",data:{resource:a.department},file:d,fileFormDataName:["image"]}).success(function(){c.path("/admin/departments")})}else f.create(a.department,function(){c.path("/admin/departments")})},a.cancel=function(){c.path("/admin/departments")},a.department=f.get({id:d.id}),console.log(a.department),a.specialitiess=g.list(),a.employeess=h.list(),console.log(a),a.createNewDepartment=function(){c.path("/admin/departments")}}]),angular.module("dnuApp").controller("DepartmentAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restDepartments","restSpecialities","restTeachers",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.department.image){var d=[],g=[];void 0!==a.department.image[0]&&(d.push(a.department.image[0]),g.push("image")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/",method:"POST",data:{resource:a.department},file:d,fileFormDataName:["image"]}).success(function(){c.path("/admin/departments")})}else f.create(a.department,function(){c.path("/admin/departments")})},a.department={},a.specialitiess=g.list(),a.employeess=h.list(),a.cancel=function(){c.path("/admin/departments")}}]),angular.module("dnuApp").controller("DepartmentAdminListCtrl",["$scope","$location","$routeParams","restFaculty","restDepartments","restDepartment",function(a,b,c,d,e,f){if(a.editDepartment=function(a){b.path("/admin/department/"+a)},console.log(c),a.deleteDepartment=function(b){f["delete"]({id:b},function(){a.departments=e.list({adminMode:1})})},a.createNewDepartment=function(){b.path("/admin/department")},a.pager={current:1,items:[],count:1},e.count(function(b){a.pager.count=b.count;for(var d=0;a.pager.count/10>=d;d++){var e=d+1;a.pager.items.push({active:e==(void 0!==c.page?c.page:1),number:e,url:"#/admin/departments?page="+e})}}),a.pager.current=void 0!==c.page?c.page:1,a.pager.items=[],void 0!==c.page){var g=10*(c.page-1),h=10*c.page;a.departments=e.list({adminMode:1,from:g,to:h})}else a.departments=e.list({adminMode:1,from:0,to:10})}]),angular.module("dnuApp").controller("UserAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restUser","restFaculties",function(a,b,c,d,e,f,g){a.save=function(){f.update(a.userr),c.path("/admin/users")},a.cancel=function(){c.path("/admin/users")},a.userr=f.get({id:e.id}),a.faculties=g.list(),a.createNewUser=function(){c.path("/admin/users")}}]),angular.module("dnuApp").controller("UserAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restUsers","restFaculties",function(a,b,c,d,e,f,g){a.save=function(){f.create(a.userr),c.path("/admin/users")},a.faculties=g.list(),a.cancel=function(){c.path("/admin/users")}}]),angular.module("dnuApp").controller("UserAdminListCtrl",["$scope","$location","restFaculty","restUsers",function(a,b,c,d){a.editUser=function(a){b.path("/admin/user/"+a)},a.deleteUser=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewUser=function(){b.path("/admin/user")
},a.users=d.list({adminMode:1})}]),angular.module("restAuth",["ngResource"]).factory("restAuthentication",["$rootScope","$resource",function(a,b){return b("http://"+a.serviceIp+":8080/filestorage/login",{},{authenticate:{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}})}]),angular.module("restFacultyResource",["ngResource"]).factory("restFaculty",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/faculty/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restFaculties",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/faculty",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/faculty/count",method:"GET"}})}]),angular.module("restFreeResourceResource",["ngResource"]).factory("restFreeResource",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/free_resource/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restFreeResources",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/free_resource",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/free_resource/count",method:"GET"}})}]),angular.module("restResourceResource",["ngResource"]).factory("restResource",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/resource/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"},headers:{"Content-Type":void 0}},"delete":{method:"DELETE"}})}]).factory("restResources",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/resource",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/resource/count",method:"GET"}})}]),angular.module("restCategoryResource",["ngResource"]).factory("restCategory",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/category/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restCategories",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/category",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/category/count",method:"GET"}})}]),angular.module("restSearchResource",["ngResource"]).factory("restSearch",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/search",{},{search:{method:"GET",params:{searchKey:"@search"},isArray:!0}})}]),angular.module("restDepartmentResource",["ngResource"]).factory("restDepartment",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/department/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restDepartments",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/department",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/department/count",method:"GET"}})}]),angular.module("restSpecialityResource",["ngResource"]).factory("restSpeciality",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/speciality/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restSpecialities",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/speciality",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/speciality/count",method:"GET"}})}]),angular.module("restLinkResource",["ngResource"]).factory("restLink",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/links/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restLinks",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/links",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/links/count",method:"GET"}})}]),angular.module("restSubjectResource",["ngResource"]).factory("restSubject",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/subject/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restSubjects",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/subject",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/subject/count",method:"GET"}})}]),angular.module("restUserResource",["ngResource"]).factory("restUser",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/user/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restUsers",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/user",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/user/count",method:"GET"}})}]),angular.module("restTeacherResource",["ngResource"]).factory("restTeacher",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/teacher/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restTeachers",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/teacher",{},{list:{method:"GET",isArray:!0},create:{method:"POST"},count:{url:"http://"+b.serviceIp+":8080/filestorage/rest/teacher/count",method:"GET"}})}]),angular.module("dnuApp.directives",[]),angular.module("dnuApp.directives").directive("isotopeDnuContainer",function(){return{link:function(a,b){return a.$on("LastElem",function(){console.log("#"+b.get(0).id);new Isotope("#"+b.get(0).id,{itemSelector:".isotope-item",layoutMode:"masonry"})}),b}}}).directive("isotopeDnuItem",function(){return function(a,b){return a.$last&&a.$emit("LastElem"),b}}),angular.module("dnuApp.directives").directive("dnuPager",function(){return{templateUrl:"views/dnu-pager.html"}}).directive("activeLink",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=d.ngHref;f=f.substring(1),b.location=a,b.$watch("location.url()",function(a){f===a?c.addClass(e):c.removeClass(e)})}}}]),angular.module("dnuApp.directives").directive("bootstrapSelect",function(){return{link:function(a,b){setTimeout(function(){return $(b).selectpicker()},2e3)}}});