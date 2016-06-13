angular.module('angularSpa')
    .controller('CercanosCtrl', function($scope,$cookies, usuariosSrv){
		
		$scope.cercanos = [];
        //alert($cookies.get('sesion'));
        function getCercanos(){
            usuariosSrv.getCercanos($cookies.get('sesion'))  // cambiar 1 por id usuario logueado
            .success(function(data){
                $scope.cercanos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por cercanos';
            });
        }getCercanos();

    });