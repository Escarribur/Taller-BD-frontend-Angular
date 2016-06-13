
angular.module('angularSpa')
    .controller('loginCtrl', function($scope,$location, $cookies,loginSrv){
        // Inicia una session
        $scope.login = function(nicknameSesion,passwordSesion){
              loginSrv.getSesion($scope.nickname,$scope.password)
            .success(function(data){
                $scope.SessionOnly = data;
                
                //alert($scope.SessionOnly.usuarioId);
                if ($scope.SessionOnly.INFO=='Loggeado'){
                    $cookies.put('sesion',$scope.SessionOnly.usuarioId);
                    //alert($cookies.get('sesion'));
                    //console.log( $cookieStore.get('sesion').usuarioId);
                    $location.url("/home");
                    window.location.reload();
                } else {
                    alert($scope.SessionOnly.INFO);
                }
                 
            });
           

        };

        ///////////////////////////////// testing
        function getSesion(nicknameSesion,passwordSesion){

            loginSrv.getSesion($scope.nickname,$scope.password)
            .success(function(data){
                $scope.SessionOnly = data;
                console.log( $scope.SessionOnly.nickname);
                alert($scope.SessionOnly.nickname);
            });
        }
        

       
});

