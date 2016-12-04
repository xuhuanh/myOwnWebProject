/**
 * Created by xuhuanhuan on 2016/12/1.
 */
angular.module('myOwn',[]);
angular.module('myOwn').controller("helloAngulars",helloAngulars);
function helloAngulars($scope) {
    $scope.greeting = {
        text:'hello'
    };
}