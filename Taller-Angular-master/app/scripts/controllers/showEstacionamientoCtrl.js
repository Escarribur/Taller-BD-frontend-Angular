angular.module('angularSpa')
    .controller('showEstacionamientoCtrl', function($scope,$route ,$routeParams, showEstacionamientoSrv, estacionamientosService){
        $scope.estacionamiento =[];
        //$scope.actor = $routeParams.actorId;
        function getEstacionamiento(){
            showEstacionamientoSrv.getEstacionamiento($routeParams.idestacionamiento)
            .success(function(data){
                $scope.estacionamiento = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        /*esta en map */
        function getEstacionamientos(){
            estacionamientosService.getEstacionamientos()
            .success(function(data){
                $scope.estacionamientos = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por estacionamientos';
            });
        }

        $scope.actualizarDisponibles = function (){
                
            estacionamientosService.putDisponiEstacionmiento($scope.estacionamiento.idestacionamiento,
                    $scope.estacionamiento.capacidad, 
                    $scope.estacionamiento.nombreEstacionamiento,
                    $scope.form.ocupados,
                    $scope.estacionamiento.ubi_x,
                    $scope.estacionamiento.ubi_y)
            .success(function(data){
                $scope.usuarios = data;
                console.log(data);
                $route.reload();
            })
            .error(function(error){
                $scope.usuarios = 'Error al consultar por usuarios';
            });
                $scope.form.capacidad="";
                $scope.form.nombreEstacionamiento="";
                $scope.form.ocupados="";
                $scope.form.ubi_x="";
                $scope.form.ubi_y="";
        }

        getEstacionamientos();  

        console.log("Parametros"+$routeParams.id);
        getEstacionamiento(); 

             
    });
