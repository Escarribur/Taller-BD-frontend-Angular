(function(){
    angular.module('angularSpa')

.controller('recomendarRutaCtrl', function($scope, RutasSrv,usuariosSrv){

	//obtener entradas
	
	$scope.rutas =[];
    
        function getRutas(){
            RutasSrv.getRutas()
            .success(function(data){
                $scope.rutas = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por entradas';
            });
        }
        getRutas();

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
})();