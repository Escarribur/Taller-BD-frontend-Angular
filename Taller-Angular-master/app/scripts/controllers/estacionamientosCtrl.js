angular.module('angularSpa')
    .controller('EstacionamientosCtrl', function($scope, estacionamientosService){
        $scope.estacionamientos =[];
        function getEstacionamientos(){
            estacionamientosService.getEstacionamientos()
            .success(function(data){
                $scope.estacionamientos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por estacionamientos';
            });
        }
        getEstacionamientos();
    });




    