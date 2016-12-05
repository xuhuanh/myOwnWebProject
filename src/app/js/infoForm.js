/**
 * Created by xuhuanhuan on 2016/12/5.
 */
angular.module('InfoForm',[]);
angular.module('InfoForm').controller("infoFormCtrl",infoFormCtrl);
function infoFormCtrl($scope,$log) {
    $scope.user= [];
   console.log($scope.user.firstName);
}