angular.module('angularSpa')
    .controller('UsuariosCtrl', function($scope, usuariosSrv){
        $scope.usuarios =[];
        function getUsuarios(){
            usuariosSrv.getUsuarios()
            .success(function(data){
                $scope.usuarios = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });
        }
        getUsuarios();
    });




    