/**
 * Created by gfrethem on 10/6/15.
 */
var memeApp = angular.module('memeApp', []);

memeApp.controller('TaskController', ['$scope', '$http', function($scope, $http) {

    $scope.memeList = [];
    $scope.memeText = [];
    //$scope.editMemeText = true;

    $http.get('/memes/fetch').then(function (response) {
        $scope.memeList = response.data;
        console.log(response.data);
    });

    $http.get('/memes/fetchText').then(function (response) {
        $scope.memeText = response.data;
        console.log(response.data);
        for (i = 0; i < $scope.memeList.length; i++) {
            $scope.memeList[i].text = $scope.memeText[i].text;
        }
        console.log($scope.memeList);
    });

    $scope.newFunction = function(image){
        image.editMemeText = true;
    };

    $scope.myFunct = function(image, keyEvent) {
        if (keyEvent.which === 13)
            image.editMemeText = false;
            console.log(image);

    };








}]);