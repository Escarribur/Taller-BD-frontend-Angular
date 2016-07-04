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

        $scope.recomendar = function(){
            var e = document.getElementById("end");
            var rutaElegida= e.options[e.selectedIndex].value;
            var a = document.getElementById("user");
            var userElegido= a.options[a.selectedIndex].value;
            
            RutasSrv.postRutaUser(rutaElegida, userElegido, 0)
            .success(function(data){
                alert("funciona")
            })
            .error(function(error){
                alert('Error post');
            });

        }
	});
})();