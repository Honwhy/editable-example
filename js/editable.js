App.directive("editable",function(){
        return {
            restrict:"E",
            template: '<span ng-hide="eEditing">{{eModel}}</span>' +
                      '<input ng-show="eEditing && eType != \'textarea\'" type="{{ePattern}}" ng-model="eModel" ng-blur="doneEditing(item)" autofocus />'+
                      '<textarea ng-model="eModel"  ng-show="eEditing && eType==\'textarea\'" rows="2" style="width:100%;height:100%" ng-blur="doneEditing(item)" autofocus ></textarea>',
            scope:{
                eModel:"=",
                eType:'@',
                ePattern:'@',
                eIndex:'@'
            },
            link: function (scope, element, attributes, controller) {
                angular.element(element).on('dblclick',function(){
                    scope.eEditing = true
                    scope.$apply()
                })
            },
            controller:function($scope){
                //$scope.eEditing = false;
                //$scope.doneEditing = function() {
                //    $scope.eEditing = false
                //}
                $scope.$on('$eCancel', function(event,data){
                    if($scope.eIndex == data.index) {
                        $scope.eEditing = false
                    }
                    return false
                })
            }
        }
    });    