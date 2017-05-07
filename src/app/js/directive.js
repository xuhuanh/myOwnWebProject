/**
 * Created by xuhuanhuan on 2017/5/6.
 */

// var myModule = angular.module('pratice',[]);

myModule.directive("hello",function () {
    return {
        restrict:'E',
        template:'<div>Hi everyone!</div>',
        replace:true
    }
});

