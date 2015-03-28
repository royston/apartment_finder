'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('ApartmentsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.cities = [
            {
                name : 'Seattle',
                img : 'seattle.jpg'
            },
            {
                name : 'Redmond',
                img : 'redmond.jpg'
            },
            {
                name : 'Bellevue',
                img : 'bellevue.jpg'
            },
            {
                name : 'Kirkland',
                img : 'kirkland.jpg'
            },
            {
                name : 'Tacoma',
                img : 'tacoma.jpg'
            },
            {
                name : 'Olympia',
                img : 'olympia.jpg'
            }
        ];



  });
