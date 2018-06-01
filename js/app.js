var App = angular.module("App", []);

App.controller('indexCtrl', ['$scope', 
    function($scope){
        $scope.list = [
            {id: 1, name: 'honey',age: 26, gender: 'F', mobile: '13700013700', address: 'guangzhou',interest: 'like football'},
            {id: 2, name: 'honpp',age: 29, gender: 'F', mobile: '18500013700', address: 'shenzhen',interest: 'like programming'},
            {id: 3, name: 'hxxxx',age: 28, gender: 'F', mobile: '11111111111', address: 'suzhou', interest: '脱脂奶粉22%,  浓缩乳清蛋白20%, 植物油19%, 乳糖 18%, 玉米糖浆固体13%, 膳食纤维5.5%, 矿物质 0.9%, 其他 1.6%'}
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
            $scope.$broadcast('$eCancel',{index:$index});
        }
    }])
App.controller("FirstCtrl", function($scope){
    $scope.data = {
      message : "Hello"
    };
});
