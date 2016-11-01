angular.module('cookieApp')
  .controller('zx',['$scope','$http','$state','$stateParams',function ($scope,$http,$state,$stateParams) {

    $scope.back=function(){
      $state.go("riji")
    }
    $scope.updata=$stateParams;
    $scope.save=function(){
      $http({
        url:'http://www.somenote.cn:1510/item/'+$scope.updata.id,
        method:"PUT",
        data:$scope.updata
      }).success(function(){
          alert(1)
          $state.go("riji")
      })
    }

  }])
