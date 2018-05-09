var App = angular.module("App", []);

App.controller('indexCtrl', ['$scope', 
    function($scope){
        $scope.list = [
            {id: 1, name: 'honey',age: 26, desc: 'like football'},
            {id: 2, name: 'honpp',age: 29, desc: 'like programming'}
        ]
        
        $scope.backupList = []
        $scope.backup = function($index) {
            if(!$scope.backupList[$index]) {
                $scope.backupList[$index] = angular.copy($scope.list[$index])
            }
            
        }
        $scope.cancel = function($index) {
            $scope.$broadcast('$eCancel',{index:$index});
            if($scope.backupList[$index]) {
                $scope.list[$index] = angular.copy($scope.backupList[$index])
            }
            $scope.backupList[$index] = null
        }
        $scope.save = function($index) {
            console.log($scope.list[$index])
            // and then remove backupList[$index]
        }
    }])
App.controller("FirstCtrl", function($scope){
    $scope.data = {
      message : "Hello"
    };
});
