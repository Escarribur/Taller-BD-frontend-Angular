(function(){
    angular.module('angularSpa')
    .controller('editarPerfilCtrl', function($scope,$cookies,$route, $http,usuariosSrv){
        $scope.usuario =[];
        //alert($cookies.get('sesion'))
        function getUsuario(){
            usuariosSrv.getUsuario($cookies.get('sesion'))
            .success(function(data){
                $scope.usuario = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        } 
        getUsuario();  

        $scope.editarUsuario = function (){
            usuariosSrv.editarUsuario($scope.usuario.idusuario,
                    $scope.form.nombre, 
                    $scope.form.apellido,
                    $scope.form.email,
                    $scope.form.nickname,
                    $scope.form.password,
                    $scope.form.direccion,
                    $scope.form.sexo,
                    $scope.form.telefono,
                    $scope.form.fechanacimiento,
                    $scope.form.estacionamiento_idestacionamiento,
                    $scope.usuario.ubi_xUsuario,
                    $scope.usuario.ubi_yUsuario
                    
                    )
            .success(function(data){
                $scope.resulta = data;
                console.log(data);
                location.assign("http://localhost:9000/#/home");
            })
            .error(function(error){
                $scope.resulta = 'Error al consultar por usuarios';
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