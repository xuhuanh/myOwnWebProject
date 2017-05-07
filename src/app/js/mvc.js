/**
 * Created by xuhuanhuan on 2017/5/6.
 */
var myModule = angular.module('pratice',[]);
myModule.controller("helloAngular",helloAngular);
myModule.controller("helloAngular1",helloAngular1);
myModule.controller("helloAngular2",helloAngular2);
myModule.controller("listCtrl",listCtrl);
myModule.controller("eventController",eventController);

function helloAngular($scope) {
    $scope.commonFn = function () {
        alert("这里是通用功能！");
    };
}

function helloAngular1($scope) {
    $scope.greeting = {
        text:'Hello2'
    };
    $scope.test1 = function () {
        alert("test1");
    };
}


function helloAngular2($scope) {
    $scope.greeting = {
        text:'Hello2'
    };
    $scope.test2 = function () {
        alert("test2");
    };
}

function listCtrl($scope,$rootScope) {
    $rootScope.department = 'Angular';
    $scope.names = ['ime','misko','hallen'];
}

function eventController($scope) {
    $scope.count=0;
    $scope.$on('MyEvent',function () {
        $scope.count++;
    });
}