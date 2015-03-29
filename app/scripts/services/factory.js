/**
 * Created by Royston on 3/28/2015.
 */
var zyringApp = angular.module('zyringApp');

//TODO rename
zyringApp.factory('apartmentFactory',['$resource',
    //myObj will be created by calling this function
    //and capturing its return value
    function($resource){
        return $resource("http://spidey.zyring.com/cities/:cityName");
    }]);