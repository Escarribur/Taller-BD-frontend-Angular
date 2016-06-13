angular.module('angularSpa')
    .controller('CercanosCtrl', function($scope, usuariosSrv){
		
		$scope.cercanos = [];
        function getCercanos(){
            usuariosSrv.getCercanos(1)  // cambiar 1 por id usuario logueado
            .success(function(data){
                $scope.cercanos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por cercanos';
            });
        }getCercanos();

    });