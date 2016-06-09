angular.module('angularSpa')
    .controller('showEstacionamientoCtrl', function($scope,$route ,$routeParams, showEstacionamientoSrv, estacionamientosService){
        $scope.estacionamiento =[];
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

        $scope.estacionar = function (){
            var estacionar = 1;
            var totalOcupados = $scope.estacionamiento.ocupados + estacionar;
            if(totalOcupados<=$scope.estacionamiento.capacidad){
                totalOcupados=totalOcupados;
            }
            else{
                totalOcupados=$scope.estacionamiento.capacidad;
            }    
            estacionamientosService.putDisponiEstacionmiento($scope.estacionamiento.idestacionamiento,
                    $scope.estacionamiento.capacidad, 
                    $scope.estacionamiento.nombreEstacionamiento,
                    totalOcupados,
                    $scope.estacionamiento.ubi_x,
                    $scope.estacionamiento.ubi_y)
            .success(function(data){
                $scope.usuarios = data;
                console.log(data);
                /*$route.reload();*/
                location.assign("http://localhost:9000/#/mapa");
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


        $scope.desocupar= function (){
            var desocupar = -1;
            var totalOcupados = $scope.estacionamiento.ocupados + desocupar;
            if(totalOcupados<0){
                totalOcupados=0;
            }
            else{
                totalOcupados=totalOcupados;
            }    
            estacionamientosService.putDisponiEstacionmiento($scope.estacionamiento.idestacionamiento,
                    $scope.estacionamiento.capacidad, 
                    $scope.estacionamiento.nombreEstacionamiento,
                    totalOcupados,
                    $scope.estacionamiento.ubi_x,
                    $scope.estacionamiento.ubi_y)
            .success(function(data){
                $scope.usuarios = data;
                console.log(data);
                /*$route.reload();*/
                location.assign("http://localhost:9000/#/mapa");
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
