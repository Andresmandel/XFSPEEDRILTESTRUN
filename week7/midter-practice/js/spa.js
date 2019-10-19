var app = angular.module('customersApp',['ngRoute']);
             app.config(function($routeProvider) {
               $routeProvider.when('/',
                 {
                   controller:'CustomersController',
                   templateUrl: 'app/views/home.html'
                 })
               .when('/contact',
                 {
                   controller: 'ExperienceController',
                   templateUrl: 'app/views/contact.html'
                 })
                 .when('/news',
                   {
                     controller: 'RequestController',
                     templateUrl: 'app/views/news.html'
                   })
                .when('/works',
                   {
                     controller: 'DealerController',
                     templateUrl: 'app/views/works.html'
                   })
                .when('/story',
                   {
                     controller: 'StoryController',
                     templateUrl: 'app/views/story.html'
                   })
               .when('/adam',
                  {
                    controller: 'AdamController',
                    templateUrl: 'app/views/adam.html'
                  })
             });
             app.controller('ExperienceController', function($scope){
               $scope.customerID = 5;
             });
             app.controller('RequestController', function($scope){
               $scope.customerID = 5;
             });
             app.controller('StoryController', function($scope){
               $scope.customerID = 5;
             });
             app.controller('DealerController', function($scope){
               $scope.customerID = 5;
             });
             app.controller('AdamController', function($scope){
               $scope.customerID = 5;
             });
             app.controller('CustomersController', function($scope) {
               $scope.customers = [
                   {"id": 1, "name":"Ted", "total": 5.996},
                   {"id": 2, "name":"Michelle", "total": 10.994},
                   {"id": 3, "name":"Zed", "total": 10.99},
                   {"id": 4, "name":"Tina", "total": 15.994}
                 ];
               });
