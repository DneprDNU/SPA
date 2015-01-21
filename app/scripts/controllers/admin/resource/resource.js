'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminEditCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restResource, restCategories, restSubjects) {
    $scope.save = function() {
      restResource.update($scope.resource);
      $location.path('/admin/resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };

    $scope.resource = restResource.get({id: $routeParams.id});

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/resource');
    };

    $scope.$watch('resource.image', function() {
      if ($scope.resource.image) {
        for (var i = 0; i < $scope.resource.image.length; i++) {
          var file = $scope.resource.image[i];
          console.log(file);
          $scope.upload = $upload.upload({
            url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id, // upload.php script, node.js route, or servlet url
            method: 'PUT',
            //headers: {'Authorization': 'xxx'}, // only for html5
            //withCredentials: true,
            data: {resource: $scope.resource},
            file: file // single file or a list of files. list is only for html5
            //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
            //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
            // could be a list of names for multiple files (html5). Default is 'file'
            //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData.
            // See #40#issuecomment-28612000 for sample code

          }).progress(function(evt) {
            console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
          }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
          });
          //.error(...)
          //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
          //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to
          //the underlying XMLHttpRequest
        }
      }
    });
    $scope.$watch('resource.file', function() {
      if ($scope.resource.file) {
        for (var i = 0; i < $scope.resource.file.length; i++) {
          var file = $scope.resource.file[i];
          console.log(file);
          $scope.upload = $upload.upload({
            url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id, // upload.php script, node.js route, or servlet url
            method: 'PUT',
            //headers: {'Authorization': 'xxx'}, // only for html5
            //withCredentials: true,
            data: {resource: $scope.resource},
            file: file // single file or a list of files. list is only for html5
            //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
            //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
            // could be a list of names for multiple files (html5). Default is 'file'
            //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData.
            // See #40#issuecomment-28612000 for sample code

          }).progress(function(evt) {
            console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
          }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
          });
          //.error(...)
          //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
          //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to
          //the underlying XMLHttpRequest
        }
      }
    });
  });

angular.module('dnuApp')
  .controller('ResourceAdminCreateCtrl', function ($scope, $location, $routeParams, restResources, restCategories, restSubjects) {
    $scope.save = function() {
      restResources.create($scope.resource);
      $location.path('/admin/resources');
    };

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };

    $scope.$watch('resource.image', function() {
      if ($scope.resource.image) {
        for (var i = 0; i < $scope.resource.image.length; i++) {
          var file = $scope.resource.image[i];
          console.log(file);
          $scope.upload = $upload.upload({
            url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id, // upload.php script, node.js route, or servlet url
            method: 'PUT',
            //headers: {'Authorization': 'xxx'}, // only for html5
            //withCredentials: true,
            data: {resource: $scope.resource},
            file: file // single file or a list of files. list is only for html5
            //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
            //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
            // could be a list of names for multiple files (html5). Default is 'file'
            //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData.
            // See #40#issuecomment-28612000 for sample code

          }).progress(function(evt) {
            console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
          }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
          });
          //.error(...)
          //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
          //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to
          //the underlying XMLHttpRequest
        }
      }
    });
    $scope.$watch('resource.file', function() {
      if ($scope.resource.file) {
        for (var i = 0; i < $scope.resource.file.length; i++) {
          var file = $scope.resource.file[i];
          console.log(file);
          $scope.upload = $upload.upload({
            url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id, // upload.php script, node.js route, or servlet url
            method: 'PUT',
            //headers: {'Authorization': 'xxx'}, // only for html5
            //withCredentials: true,
            data: {resource: $scope.resource},
            file: file // single file or a list of files. list is only for html5
            //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
            //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
            // could be a list of names for multiple files (html5). Default is 'file'
            //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData.
            // See #40#issuecomment-28612000 for sample code

          }).progress(function(evt) {
            console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
          }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
          });
          //.error(...)
          //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
          //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to
          //the underlying XMLHttpRequest
        }
      }
    });

  });
