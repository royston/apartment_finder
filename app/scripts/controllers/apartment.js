'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('ApartmentCtrl', ['$scope', '$routeParams', 'apartmentFactory', function ($scope, $routeParams, apartmentFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.cityName = $routeParams.cityName;
        $scope.cityData = [];
        var info = apartmentFactory.query({cityName : $routeParams.cityName});

        //Backend doesnt support paging so have to retrieve everything and page on front end

        $scope.itemsPerPage = 10;
        var totalItems = info.length;
        var totalPages = totalItems / $scope.itemsPerPage;

        $scope.cityData = info;

  }]);
