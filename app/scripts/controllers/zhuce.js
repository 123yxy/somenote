angular.module('cookieApp')
  .controller('zhuce',['$scope','$http','$state','$cookies',function ($scope,$http,$state,$cookies) {
    $scope.zhuce=function(){
      $http({
        url:"http://www.somenote.cn:1510/users",
        method:"POST",
        data:$scope.updata
      }).success(function(e){

        $cookies.put('username',$scope.updata.username);
        alert("ok!")
				//debugger
        $state.go("denglu")
      }).error(function(){
        alert("注册失败")
      })
    }
  }])


