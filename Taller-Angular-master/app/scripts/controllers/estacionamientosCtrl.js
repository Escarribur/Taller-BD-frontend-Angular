angular.module('angularSpa')
    .controller('EstacionamientosCtrl', function($scope, estacionamientosSrv){
        $scope.estacionamientos =[];
        function getEstacionamientos(){
            estacionamientosSrv.getEstacionamientos()
            .success(function(data){
                $scope.estacionamientos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por estacionamientos';
            });
        }
        getEstacionamientos();
    });




    