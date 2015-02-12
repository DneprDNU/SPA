"use strict";angular.module("dnuApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","restAuth","ui.bootstrap","angularFileUpload","restFacultyResource","restCategoryResource","restDepartmentResource","restSpecialityResource","restSearchResource","restSubjectResource","restTeacherResource","restResourceResource","restFreeResourceResource","dnuApp.directives"]).run(["$rootScope",function(a){a.serviceIp="80.240.139.45"}]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/faculties",{templateUrl:"views/faculties.html",controller:"FacultiesCtrl"}).when("/faculty/:id",{templateUrl:"views/faculty.html",controller:"FacultyCtrl"}).when("/departments",{templateUrl:"views/departments.html",controller:"DepartmentsCtrl"}).when("/faculty/:facultyId/department/:id",{templateUrl:"views/department.html",controller:"DepartmentCtrl"}).when("/subjects",{templateUrl:"views/subjects.html",controller:"SubjectsCtrl"}).when("/teachers",{templateUrl:"views/teachers.html",controller:"TeachersCtrl"}).when("/free-resources",{templateUrl:"views/free-resources.html"}).when("/free-resources",{templateUrl:"views/free-resources.html",controller:"ResourcesCtrl"}).when("/resource/:id",{templateUrl:"views/resource.html",controller:"ResourcesCtrl"}).when("/specialities",{templateUrl:"views/specialities.html",controller:"SpecialitiesCtrl"}).when("/faculty/:facultyId/speciality/:id",{templateUrl:"views/speciality.html",controller:"SpecialityCtrl"}).when("/admin",{templateUrl:"views/admin_menu.html",controller:"AdminMenuCtrl"}).when("/admin/faculties",{templateUrl:"views/admin/faculty/faculties.html",controller:"FacultyAdminListCtrl"}).when("/admin/faculty",{templateUrl:"views/admin/faculty/faculty.html",controller:"FacultyAdminCreateCtrl"}).when("/admin/faculty/:id",{templateUrl:"views/admin/faculty/faculty.html",controller:"FacultyAdminEditCtrl"}).when("/admin/categories",{templateUrl:"views/admin/category/categories.html",controller:"CategoryAdminListCtrl"}).when("/admin/category",{templateUrl:"views/admin/category/category.html",controller:"CategoryAdminCreateCtrl"}).when("/admin/category/:id",{templateUrl:"views/admin/category/category.html",controller:"CategoryAdminEditCtrl"}).when("/admin/resources",{templateUrl:"views/admin/resource/resources.html",controller:"ResourceAdminListCtrl"}).when("/admin/resource",{templateUrl:"views/admin/resource/resource.html",controller:"ResourceAdminCreateCtrl"}).when("/admin/resource/:id",{templateUrl:"views/admin/resource/resource.html",controller:"ResourceAdminEditCtrl"}).when("/admin/free-resources",{templateUrl:"views/admin/free-resource/free-resources.html",controller:"FreeResourceAdminListCtrl"}).when("/admin/free-resource",{templateUrl:"views/admin/free-resource/free-resource.html",controller:"FreeResourceAdminCreateCtrl"}).when("/admin/free-resource/:id",{templateUrl:"views/admin/free-resource/free-resource.html",controller:"FreeResourceAdminEditCtrl"}).when("/admin/teachers",{templateUrl:"views/admin/teacher/teachers.html",controller:"TeacherAdminListCtrl"}).when("/admin/teacher",{templateUrl:"views/admin/teacher/teacher.html",controller:"TeacherAdminCreateCtrl"}).when("/admin/teacher/:id",{templateUrl:"views/admin/teacher/teacher.html",controller:"TeacherAdminEditCtrl"}).when("/admin/subjects",{templateUrl:"views/admin/subject/subjects.html",controller:"SubjectAdminListCtrl"}).when("/admin/subject",{templateUrl:"views/admin/subject/subject.html",controller:"SubjectAdminCreateCtrl"}).when("/admin/subject/:id",{templateUrl:"views/admin/subject/subject.html",controller:"SubjectAdminEditCtrl"}).when("/admin/specialities",{templateUrl:"views/admin/speciality/specialities.html",controller:"SpecialityAdminListCtrl"}).when("/admin/speciality",{templateUrl:"views/admin/speciality/speciality.html",controller:"SpecialityAdminCreateCtrl"}).when("/admin/speciality/:id",{templateUrl:"views/admin/speciality/speciality.html",controller:"SpecialityAdminEditCtrl"}).when("/admin/departments",{templateUrl:"views/admin/department/departments.html",controller:"DepartmentAdminListCtrl"}).when("/admin/department",{templateUrl:"views/admin/department/department.html",controller:"DepartmentAdminCreateCtrl"}).when("/admin/department/:id",{templateUrl:"views/admin/department/department.html",controller:"DepartmentAdminEditCtrl"}).otherwise({redirectTo:"/"}),c.defaults.useXDomain=!0,delete c.defaults.headers.common["X-Requested-With"],c.interceptors.push(["$q","$rootScope","$location",function(a,b,c){return{responseError:function(d){var e=d.status,f=d.config,g=f.method,h=f.url;return 401==e?c.path("/login"):b.error=g+" on "+h+" failed with status "+e,a.reject(d)}}}]),c.interceptors.push(["$q","$rootScope","$location",function(a,b){return{request:function(c){if(angular.isDefined(b.authToken)){var d=b.authToken;c.headers["X-Auth-Token"]=d}return c||a.when(c)}}}])}]).run(["$rootScope","$location","$cookieStore","restAuthentication",function(a,b,c,d){a.$on("$viewContentLoaded",function(){delete a.error}),a.hasRole=function(b){return void 0===a.user?!1:void 0===a.user.roles.indexOf(b)?!1:!0},a.logout=function(){delete a.user,delete a.authToken,c.remove("authToken"),b.path("/login")};var e=b.path();b.path("/login");var f=c.get("authToken");void 0!==f&&(a.authToken=f,d.get(function(c){a.user=c,b.path(e)})),a.userMenuActions=[{name:"menu.login",href:"#/login",roles:[]},{name:"menu.logout",href:"#/logout",roles:["READ_ONLY","ADMIN"]},{name:"menu.foo",href:"#/foo",roles:["READ_ONLY","ADMIN"]},{name:"menu.adminArea",href:"#/adminArea",roles:["ADMIN"]}],a.serviceIp="80.240.139.45",a.initialized=!0}]),angular.module("dnuApp").controller("MainCtrl",["$scope",function(){}]),angular.module("dnuApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("dnuApp").controller("ContactCtrl",["$scope",function(){}]),angular.module("dnuApp").controller("CategoriesListCtrl",["$scope","$routeParams","restResources","restCategories",function(a,b,c,d){a.categories=d.list(),a.categoryResourcesAmount=[],angular.forEach(a.categories,function(b,d){console.log(b),console.log(d),a.categoryResourcesAmount[b.id]=c.list({categoryId:b.id})}),console.log(a)}]),angular.module("dnuApp").controller("LoginCtrl",["$scope","$rootScope","$location","$cookieStore","restAuthentication",function(a,b,c,d,e){a.rememberMe=!1,a.login=function(){e.authenticate($.param({username:a.username,password:a.password}),function(f){var g=f.token;console.log(f),b.authToken=g,a.rememberMe&&d.put("authToken",g),e.get(function(a){b.user=a,c.path("/")})})}}]),angular.module("dnuApp").controller("ResourcesCtrl",["$scope","$routeParams","restSearch","restResources",function(a,b,c,d){a.resources=void 0!==b.search?c.search({searchKey:b.search}):d.list()}]),angular.module("dnuApp").controller("LastResourcesCtrl",["$scope","restResources",function(a,b){a.resources=b.list(),console.log(a)}]),angular.module("dnuApp").controller("ResourceCtrl",["$scope","$routeParams","restResource",function(a,b,c){a.resource=c.get({id:b.id})}]),angular.module("dnuApp").controller("FacultiesCtrl",["$scope","$timeout","restFaculties",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Faculty",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("FacultyCtrl",["$scope","$timeout","$routeParams","restFaculty","restSpecialities",function(a,b,c,d,e){a.faculty=d.get({id:c.id}),a.departments=a.faculty.departments,a.specialities=e.list({facultyId:c.id})}]),angular.module("dnuApp").controller("SpecialitiesCtrl",["$scope","$timeout","restSpecialities",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Speciality",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("SpecialityCtrl",["$scope","$routeParams","restSpeciality","restFaculty",function(a,b,c,d){a.speciality=c.get({id:b.id,facultyId:b.facultyId}),a.faculty=d.get({id:b.facultyId}),a.subjects=[],a.teachers=a.speciality.supervisors}]),angular.module("dnuApp").controller("DepartmentsCtrl",["$scope","$timeout","restTeachers",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Department",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("DepartmentCtrl",["$scope","$timeout","$routeParams","restDepartment","restSubjects","restTeachers","restFaculty",function(a,b,c,d,e,f,g){a.department=d.get({id:c.id}),a.faculty=g.get({id:c.facultyId}),a.subjects=e({departmentId:c.id}),a.specialities=a.department.specialities,a.teachers=a.department.employees,console.log(a)}]),angular.module("dnuApp").controller("TeachersCtrl",["$scope","$timeout","restTeachers",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Teacher",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("TeacherCtrl",["$scope","$timeout","restTeacher",function(a,b,c){a.teacher=c.get({id:$routeParams.id}),a.resources=[]}]),angular.module("dnuApp").controller("SubjectsCtrl",["$scope","$timeout","restSubjects",function(a,b,c){a.collection=[],a.update=function(){c.list({},function(b){a.collection=b}),b(a.update,1e4)},a.update(),a.addOne=function(){a.collection.push({id:1,title:"Subject",src:"http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"})}}]),angular.module("dnuApp").controller("SubjectCtrl",["$scope","$routeParams","restSubject",function(a,b,c){a.subject=c.get({id:b.id})}]),angular.module("dnuApp").controller("SearchCtrl",["$scope","$location",function(a,b){a.searchKey="",a.search=function(){b.path("/resources").search({search:a.searchKey})}}]),angular.module("dnuApp").controller("AdminMenuCtrl",["$scope","$rootScope","$location",function(a,b,c){b.hasRole("ROLE_ADMIN")||c.path("/login")}]),angular.module("dnuApp").controller("FacultyAdminListCtrl",["$scope","$location","restFaculty","restFaculties",function(a,b,c,d){a.editFaculty=function(a){b.path("/admin/faculty/"+a)},a.deleteFaculty=function(b){c["delete"]({id:b}),a.faculties=d.list()},a.createNewFaculty=function(){b.path("/admin/faculty")},a.faculties=d.list()}]),angular.module("dnuApp").controller("FacultyAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restFaculty","restDepartments",function(a,b,c,d,e,f,g){a.save=function(){if(void 0!==a.faculty.image){var e=[],f=[];void 0!==a.faculty.image[0]&&(e.push(a.faculty.image[0]),f.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/faculty/",method:"POST",data:{resource:a.faculty},file:e,fileFormDataName:["image"]})}else restFaculties.create(a.faculty);c.path("/admin/faculties")},a.cancel=function(){c.path("/admin/faculties")},a.faculty=f.get({id:e.id}),a.departments=g.list(),a.createNewFaculty=function(){c.path("/admin/faculty")}}]),angular.module("dnuApp").controller("FacultyAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restFaculties","restDepartments",function(a,b,c,d,e,f,g){a.save=function(){if(void 0!==a.faculty.image){var e=[],g=[];void 0!==a.faculty.image[0]&&(e.push(a.faculty.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/faculty/",method:"POST",data:{resource:a.faculty},file:e,fileFormDataName:["image"]})}else f.create(a.faculty);c.path("/admin/faculties")},a.departments=g.list(),a.cancel=function(){c.path("/admin/faculties")}}]),angular.module("dnuApp").controller("ResourceAdminListCtrl",["$scope","$location","restResources","restResource",function(a,b,c,d){a.editResource=function(a){b.path("/admin/resource/"+a)},a.deleteResource=function(b){d["delete"]({id:b}),a.resources=c.list()},a.createNewResource=function(){b.path("/admin/resource")},a.resources=c.list()}]),angular.module("dnuApp").controller("ResourceAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restResource","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.resource.image||void 0!==a.resource.file){var d=[],g=[];void 0!==a.resource.image[0]&&(d.push(a.resource.image[0]),g.push("image")),void 0!==a.resource.file[0]&&(d.push(a.resource.file[0]),g.push("file")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/resource/",method:"PUT",data:{resource:a.resource},file:d,fileFormDataName:["image","file"]})}else f.update(a.resource);c.path("/admin/resources")},a.cancel=function(){c.path("/admin/resources")},a.resource=f.get({id:d.id}),a.categories=g.list(),a.subjects=h.list(),a.createNewResource=function(){c.path("/admin/resource")}}]),angular.module("dnuApp").controller("ResourceAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restResources","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.resource.image||void 0!==a.resource.file){var d=[],g=[];void 0!==a.resource.image[0]&&(d.push(a.resource.image[0]),g.push("image")),void 0!==a.resource.file[0]&&(d.push(a.resource.file[0]),g.push("file")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/resource/",method:"POST",data:{resource:a.resource},file:d,fileFormDataName:["image","file"]})}else f.create(a.resource);c.path("/admin/resources")},a.categories=g.list(),a.subjects=h.list(),a.cancel=function(){c.path("/admin/resources")}}]),angular.module("dnuApp").controller("FreeResourceAdminListCtrl",["$scope","$location","restFreeResources","restResource",function(a,b,c,d){a.editResource=function(a){b.path("/admin/free-resource/"+a)},a.deleteResource=function(b){d["delete"]({id:b}),a.freeResources=c.list()},a.createNewResource=function(){b.path("/admin/free-resource")},a.freeResources=c.list()}]),angular.module("dnuApp").controller("FreeResourceAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restFreeResource","restCategories","restSubjects",function(a,b,c,d,e,f,g,h){a.save=function(){f.update(a.freeResource),c.path("/admin/free-resources")},a.cancel=function(){c.path("/admin/free-resources")},a.freeResource=f.get({id:d.id}),a.categories=g.list(),a.subjects=h.list(),a.createNewResource=function(){c.path("/admin/free-resource")}}]),angular.module("dnuApp").controller("FreeResourceAdminCreateCtrl",["$scope","$location","$routeParams","restFreeResources","restCategories","restSubjects",function(a,b,c,d,e,f){a.save=function(){d.create(a.resource),b.path("/admin/free-resources")},a.categories=e.list(),a.subjects=f.list(),a.cancel=function(){b.path("/admin/free-resources")}}]),angular.module("dnuApp").controller("CategoryAdminListCtrl",["$scope","$location","restFaculty","restCategories",function(a,b,c,d){a.editCategory=function(a){b.path("/admin/category/"+a)},a.deleteCategory=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewCategory=function(){b.path("/admin/category")},a.categories=d.list()}]),angular.module("dnuApp").controller("CategoryAdminEditCtrl",["$scope","$location","$routeParams","restCategorie",function(a,b,c,d){a.save=function(){d.update(a.category),b.path("/admin/categories")},a.cancel=function(){b.path("/admin/categories")},a.category=d.get({id:c.id}),a.createNewCategory=function(){b.path("/admin/categories")}}]),angular.module("dnuApp").controller("CategoryAdminCreateCtrl",["$scope","$location","$routeParams","restCategories",function(a,b,c,d){a.save=function(){d.create(a.category),b.path("/admin/categories")},a.cancel=function(){b.path("/admin/categories")}}]),angular.module("dnuApp").controller("TeacherAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restTeacher",function(a,b,c,d,e,f){a.save=function(){if(void 0!==a.teacher.image){var e=[],g=[];void 0!==a.teacher.image[0]&&(e.push(a.teacher.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/",method:"POST",data:{resource:a.teacher},file:e,fileFormDataName:["image"]})}else f.update(a.teacher);c.path("/admin/teachers")},a.cancel=function(){c.path("/admin/teachers")},a.teacher=restTeachers.get({id:e.id}),a.createNewTeacher=function(){c.path("/admin/teachers")}}]),angular.module("dnuApp").controller("TeacherAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restTeachers",function(a,b,c,d,e,f){a.save=function(){f.create(a.teacher),c.path("/admin/teachers")},a.cancel=function(){c.path("/admin/teachers")}}]),angular.module("dnuApp").controller("TeacherAdminListCtrl",["$scope","$location","restFaculty","restTeachers",function(a,b,c,d){a.editTeacher=function(a){b.path("/admin/teacher/"+a)},a.deleteTeacher=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewTeacher=function(){b.path("/admin/teacher")},a.teachers=d.list()}]),angular.module("dnuApp").controller("SubjectAdminEditCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restSubject","restTeachers",function(a,b,c,d,e,f,g){a.save=function(){if(void 0!==a.subject.image){var e=[],g=[];void 0!==a.subject.image[0]&&(e.push(a.subject.image[0]),g.push("image")),a.upload=d.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/",method:"POST",data:{resource:a.subject},file:e,fileFormDataName:["image"]})}else f.update(a.subject);c.path("/admin/subjects")},a.cancel=function(){c.path("/admin/subjects")},a.subject=f.get({id:e.id}),a.supervisors=g.list(),a.createNewSubject=function(){c.path("/admin/subjects")}}]),angular.module("dnuApp").controller("SubjectAdminCreateCtrl",["$scope","$rootScope","$location","$upload","$routeParams","restSubjects","restTeachers",function(a,b,c,d,e,f,g){a.save=function(){f.create(a.subject),c.path("/admin/subjects")},a.supervisors=g.list(),a.cancel=function(){c.path("/admin/subjects")}}]),angular.module("dnuApp").controller("SubjectAdminListCtrl",["$scope","$location","restFaculty","restSubjects",function(a,b,c,d){a.editSubject=function(a){b.path("/admin/subject/"+a)},a.deleteSubject=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewSubject=function(){b.path("/admin/subject")},a.subjects=d.list()}]),angular.module("dnuApp").controller("SpecialityAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","restSpeciality","restTeachers",function(a,b,c,d,e,f){a.save=function(){e.update(a.speciality),c.path("/admin/specialities")},a.cancel=function(){c.path("/admin/specialities")},a.speciality=e.get({id:d.id}),a.supervisors=f.list(),a.createNewSpeciality=function(){c.path("/admin/specialities")}}]),angular.module("dnuApp").controller("SpecialityAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","restSpecialities","restTeachers",function(a,b,c,d,e,f){a.save=function(){e.create(a.speciality),c.path("/admin/specialities")},a.supervisors=f.list(),a.cancel=function(){c.path("/admin/specialities")}}]),angular.module("dnuApp").controller("SpecialityAdminListCtrl",["$scope","$location","restFaculty","restSpecialities",function(a,b,c,d){a.editSpeciality=function(a){b.path("/admin/speciality/"+a)},a.deleteSpeciality=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewSpeciality=function(){b.path("/admin/speciality")},a.specialities=d.list()}]),angular.module("dnuApp").controller("DepartmentAdminEditCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restDepartment","restSpecialities","restTeachers",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.department.image){var d=[],g=[];void 0!==a.department.image[0]&&(d.push(a.department.image[0]),g.push("image")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/",method:"POST",data:{resource:a.department},file:d,fileFormDataName:["image"]})}else f.create(a.department);c.path("/admin/departments")},a.cancel=function(){c.path("/admin/departments")},a.department=f.get({id:d.id}),a.specialities=g.list(),a.employees=h.list(),a.createNewDepartment=function(){c.path("/admin/departments")}}]),angular.module("dnuApp").controller("DepartmentAdminCreateCtrl",["$scope","$rootScope","$location","$routeParams","$upload","restDepartments","restSpecialities","restTeachers",function(a,b,c,d,e,f,g,h){a.save=function(){if(void 0!==a.department.image){var d=[],g=[];void 0!==a.faculty.image[0]&&(d.push(a.faculty.image[0]),g.push("image")),a.upload=e.upload({url:"http://"+b.serviceIp+":8080/filestorage/rest/department/",method:"POST",data:{resource:a.department},file:d,fileFormDataName:["image"]})}else f.create(a.department);c.path("/admin/departments")},a.specialities=g.list(),a.employees=h.list(),a.cancel=function(){c.path("/admin/departments")}}]),angular.module("dnuApp").controller("DepartmentAdminListCtrl",["$scope","$location","restFaculty","restDepartments",function(a,b,c,d){a.editDepartment=function(a){b.path("/admin/department/"+a)},a.deleteDepartment=function(b){d["delete"]({id:b}),a.faculties=d.list()},a.createNewDepartment=function(){b.path("/admin/department")},a.departments=d.list()}]),angular.module("restAuth",["ngResource"]).factory("restAuthentication",["$rootScope","$resource",function(a,b){return b("http://"+a.serviceIp+":8080/filestorage/login",{},{authenticate:{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}})}]),angular.module("restFacultyResource",["ngResource"]).factory("restFaculty",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/faculty/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restFaculties",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/faculty",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restFreeResourceResource",["ngResource"]).factory("restFreeResource",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/free_resource/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restFreeResources",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/free_resource",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restResourceResource",["ngResource"]).factory("restResource",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/resource/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"},headers:{"Content-Type":void 0}},"delete":{method:"DELETE"}})}]).factory("restResources",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/resource",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restCategoryResource",["ngResource"]).factory("restCategory",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/category/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restCategories",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/category",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restSearchResource",["ngResource"]).factory("restSearch",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/search",{},{search:{method:"GET",params:{searchKey:"@search"},isArray:!0}})}]),angular.module("restDepartmentResource",["ngResource"]).factory("restDepartment",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/department/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restDepartments",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/department",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restSpecialityResource",["ngResource"]).factory("restSpeciality",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/speciality/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restSpecialities",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/speciality",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restSubjectResource",["ngResource"]).factory("restSubject",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/subject/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restSubjects",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/subject",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("restTeacherResource",["ngResource"]).factory("restTeacher",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/teacher/:id",{},{get:{method:"GET"},update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE"}})}]).factory("restTeachers",["$resource","$rootScope",function(a,b){return a("http://"+b.serviceIp+":8080/filestorage/rest/teacher",{},{list:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("dnuApp.directives",[]),angular.module("dnuApp.directives").directive("isotopeDnuContainer",function(){return{link:function(a,b){return a.$on("LastElem",function(){console.log("#"+b.get(0).id);new Isotope("#"+b.get(0).id,{itemSelector:".isotope-item",layoutMode:"masonry"})}),b}}}).directive("isotopeDnuItem",function(){return function(a,b){return a.$last&&a.$emit("LastElem"),b}}),angular.module("dnuApp.directives").directive("bootstrapSelect",function(){return{link:function(a,b){setTimeout(function(){return $(b).selectpicker()},2e3)}}});