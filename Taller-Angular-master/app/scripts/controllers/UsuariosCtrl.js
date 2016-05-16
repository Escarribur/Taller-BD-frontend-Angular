angular.module('angularSpa')
    .controller('UsuariosCtrl', function($scope, usuariosService){
        $scope.usuarios =[];
        function getUsuarios(){
            usuariosService.getUsuarios()
            .success(function(data){
                $scope.usuarios = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });
        }
        getUsuarios();
    });




    