var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $window) {


    $scope.appointment = function(url) {
        console.log('names:', angular.element('#name').text());
        console.log('heading:', angular.element('#heading').text());

        $scope.names = angular.element('#name').text();
        $scope.heading = angular.element('#heading').text();
        // alert($scope.names)
        if ($scope.names == undefined || $scope.names == '' || $scope.names == null) {
            $window.localStorage.setItem('names', 'Select category');
            // alert('i am here')
        } else {
            $window.localStorage.setItem('names', $scope.names);
        }
        if ($scope.heading == undefined || $scope.heading == undefined || $scope.heading == null) {
            $window.localStorage.setItem('heading', 'Select department');

        } else {
            $window.localStorage.setItem('heading', $scope.heading);
        }
        $window.location.href = url;
    };


});
