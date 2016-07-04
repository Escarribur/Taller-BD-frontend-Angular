(function(){
    angular.module('angularSpa')

.controller('recomendarRutaCtrl', function($scope,$cookies , RutasSrv,usuariosSrv){

	//obtener rutas
	 
	$scope.rutasUser =[];
    
        function getRutasUser(){
            RutasSrv.getRutasUser($cookies.get('sesion'))
            .success(function(data){
                $scope.rutasUser = data;
            })
            .error(function(error){
                alert('Error al consultar por rutas');
            });
        }
        getRutasUser();

        

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

        $scope.ruta =[];
        function getRuta(id){
            RutasSrv.getRuta(id)
            .success(function(data){
                $scope.ruta = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por entradas';
            });
        }

        $scope.usuario=[];
        function getUsuario(id){
            usuariosSrv.getUsuario(id)
            .success(function(data){
                $scope.usuario = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        } 
        

        $scope.recomendar = function(){
            var e = document.getElementById("end");
            var rutaElegida= e.options[e.selectedIndex].value;
            var a = document.getElementById("user");
            var userElegido= a.options[a.selectedIndex].value;

            getRuta(rutaElegida);
            getUsuario(userElegido);  
            
            RutasSrv.postRutaUser(rutaElegida, userElegido, 0,
                $scope.ruta.nombreRuta,
                $scope.ruta.calificacion,
                $scope.ruta.inicio_ubi_x,
                $scope.ruta.inicio_ubi_y,
                $scope.ruta.fin_ubi_x,
                $scope.ruta.fin_ubi_y,
                $scope.usuario.nombre, 
                $scope.usuario.apellido,
                $scope.usuario.email,
                $scope.usuario.nickname,
                $scope.usuario.password,
                $scope.usuario.direccion,
                $scope.usuario.sexo,
                $scope.usuario.telefono,
                $scope.usuario.fechaNacimiento,
                $scope.usuario.estacionamiento_idestacionamiento,
                $scope.usuario.ubi_xUsuario,
                $scope.usuario.ubi_yUsuario)
            .success(function(data){
                alert("funciona")
            })
            .error(function(error){
                alert('Error post');
            });

        }
	});
})();