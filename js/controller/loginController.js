app.controller("loginController", ['$scope', '$http',function($scope, $http) {
   var ctrl = this;

   $scope.login = function() {
        $http.post("/login", {
            username: $scope.username,
            password: $scope.password
        }).then(onLogin, failedLogin);
   }

   function onLogin() {
    $scope.isLoggedIn = true;
    $scope.failedLoginAttempt = false;
   }

   function failedLogin() {
    $scope.isLoggedIn = false;
    $scope.failedLoginAttempt = true;
   }


}]);