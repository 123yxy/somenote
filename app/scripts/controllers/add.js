angular.module('cookieApp')
  .controller('add',['$scope','$http','$state','$cookieStore',function ($scope,$http,$state,$cookieStore) {
    $scope.back=function(){
      $state.go("riji")

    }
    $scope.add=function(){
      $scope.updata.uid=$cookieStore.get('uid')

      //alert($scope.updata.title)
      $http({
        url:'http://www.somenote.cn:1510/item',
        method:'post',
        data:$scope.updata
      }).success(function(e){
        alert(1)
        //$scope.data.push($scope.updata)
        $state.go("riji")
      })
    }
  }])
