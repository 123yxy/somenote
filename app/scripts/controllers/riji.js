angular.module('cookieApp')
  .controller('riji',['$scope','$http','$state','$cookieStore',function ($scope,$http,$state,$cookieStore) {
    //$http({
    //  url:'http://www.somenote.cn:1510/item',
    //  method:'get'
    //}).success(function(e){
    //  $scope.data=e
    //})
    var num=0;
    $http({
      url:'http://www.somenote.cn:1510/item',
      method:"GET",
      params:{"$skip":num,"$limit":3,"uid":$cookieStore.get('uid')}

    }).success(function(e){
      $scope.data=e
    });
    $scope.next=function(){
      num+=3;
      $http({
        url:'http://www.somenote.cn:1510/item',
        method:"GET",
        params:{"$skip":num,"$limit":3,"uid":$cookieStore.get('uid')}
      }).success(function(e){
        //$scope.data=e
        if(e!=""){
          $scope.data=e
        }else{
          alert("已经是最后一页了!")
          num-=3;
        }


      })
    }
    $scope.shang=function(){
      if(num<=0){
        alert("已经是第一页了!")
        return false;
      }else {

        num -= 3;
        $http({
          url: 'http://www.somenote.cn:1510/item',
          method: "GET",
          params: {"$skip": num, "$limit": 3, "uid": $cookieStore.get('uid')}

        }).success(function (e) {
          $scope.data = e
        })
      }
    }
    $scope.del=function(e){
      $http({
        url:'http://www.somenote.cn:1510/item/'+e.id,
        method:"delete"
      }).success(function(){
        $scope.data.splice($scope.data.indexOf(e),1)
      })
    }


    $scope.edit=function(e){
      $scope.editData=e
      $state.go("zx")
    }
  }])
