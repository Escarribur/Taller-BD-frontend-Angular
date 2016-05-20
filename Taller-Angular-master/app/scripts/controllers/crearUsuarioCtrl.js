(function(){
    angular.module('angularSpa')
    .controller('crearUsuarioCtrl', function($scope, $http,crearUsuarioSrv){   
        $scope.crearUsuario = function (){
            crearUsuarioSrv.crearUsuario($scope.form.nombre, $scope.form.apellido,$scope.form.email,
                    $scope.form.nickname,
                    $scope.form.password,
                    $scope.form.direccion,
                    $scope.form.sexo,
                    $scope.form.telefono,
                    $scope.form.fechanacimiento,
                    $scope.form.estacionamiento_idestacionamiento)
            .success(function(data){
                $scope.usuarios = data;
                console.log(data);
            })
            .error(function(error){
                $scope.usuarios = 'Error al consultar por usuarios';
            });
                $scope.form.nombre="";
                $scope.form.apellido="";

                $scope.form.email="";
                $scope.form.nickname="";
                $scope.form.password="";
                $scope.form.direccion="";
                $scope.form.sexo="";
                $scope.form.telefono="";
                $scope.form.fechanacimiento="";
                $scope.form.estacionamiento_idestacionamiento="";
        }
    });
    
})();