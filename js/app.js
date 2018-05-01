var App = angular.module("App", []);

App.controller('indexCtrl', ['$scope', 
    function($scope){
        $scope.list = [
            {id: 1, name: 'honey',age: 26, desc: 'like football'},
            {id: 2, name: 'honpp',age: 29, desc: 'like programming'}
        ]
        var backup = []
        $scope.backup = function($index) {
            if(!backup[$index]) {
                backup[$index] = angular.copy($scope.list[$index])
            }
            
        }
        $scope.cancel = function($index) {
            $scope.$broadcast('$eCancel',{index:$index});
            if(backup[$index]) {
                $scope.list[$index] = angular.copy(backup[$index])
            }
            backup[$index] = null
        }
        $scope.save = function($index) {
            console.log($scope.list[$index])
        }
    }])
App.controller("FirstCtrl", function($scope){
    $scope.data = {
      message : "Hello"
    };
});
