
angular.module('cookieApp')
  .controller('denglu',['$scope','$http','$state','$cookieStore','$cookies',function ($scope,$http,$state,$cookieStore,$cookies) {
    var al = $cookies.get("username")
    $scope.updata={
      username:al
  }
    $scope.denglu=function(){
      if($scope.check==true){
      $http({
        url:"http://www.somenote.cn:1510/users/login",
        method:"POST",
        data:$scope.updata
      }).success(function(e){
        alert("成功")
        var adate = new Date();
        adate.setDate(adate.getDate() + 7);
        // Setting a cookie
        $cookies.put('username',$scope.updata.username,{'expires': adate});
        $cookies.put('password',$scope.updata.password,{'expires': adate});
        $state.go("zhuce")
      }).error(function(){
        alert("用户名或密码错误")
      })
    }
    }
  }])
