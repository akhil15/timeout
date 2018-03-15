var myApp=angular.module('app', ['ui.grid'])
  myApp.controller("CompanyCtrl", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {


var k=[];
$scope.loadData=function(){

   $http.get('https://swapi.co/api/people')
        .then(function1, err) ;
    function function1 (response)
    {    
      $scope.result = response.data.results;
      console.log($scope.result)
      var count=0;

      for(var i in $scope.result){
        $scope.film= $scope.result[i].films;
        console.log($scope.result[i].films)
        console.log(",")
       

        for( var j in $scope.film){

          $http.get($scope.film[j])
          .then(function2,err);
          function function2(response1){


           
          
             // k[j]= response1.data.title;
            k[count]=response1.data.title;
            count++;
            
            
             // console.log($scope.film[j])

           
           
          }

          

          // console.log($scope.result[i])

          // function err( reason){
          //   $scope.err=" Something went wrong"
          // }
          // $scope.result[i].films= k;

        }
       

     
   
      }
$('.loader').show();
      console.log($scope.result)
            $scope.gridOptions.data=$scope.result;

 $timeout( function(){
        
            
            var count=0;
            for(var x in $scope.result){
              $scope.films_length= $scope.result[x].films.length;
              console.log($scope.films_length)
              for(var y=0;y<$scope.films_length;y++){
                $scope.result[x].films[y]=k[count];
                count++;
              }
            }

            $('.loader').hide();


        }, 10000 );








            
           
           
    }

  
    }
    function err (reason)
    {
      $scope.err = "Something went wrong";
    }





$scope.gridOptions={};
  
  $scope.gridOptions = {
    
    columnDefs:[{field:'name',displayName:'Name'},
                  {field:'gender',displayName:'Gender'},
                  {field:'birth_year',displayName:'BirthYear'},
                  {field:'films',displayName:'Film Title'}],
                  enableFiltering: true,
                  enableSorting:false,
                    enableColumnMenus: false
    
                 
  }

   $scope.gridOptions.onRegisterApi = function(gridApi){
      
        $scope.gridApi = gridApi;
      }
  $scope.loadData();

}]);

