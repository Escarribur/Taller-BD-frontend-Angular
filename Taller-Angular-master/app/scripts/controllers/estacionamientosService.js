angular.module('angularSpa')
    .service('estacionamientosService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/estacionamientos';
        this.getEstacionamientos = function(){
            return $http.get(urlBase);
        };

        this.putDisponiEstacionmiento = function(estacionamientoId,capacidad1,nombre, ocupados1,x,y){
              var request = $http({
            method: "PUT",
            url: "http://localhost:8080/sakila-backend-master/estacionamientos/"+estacionamientoId,
            data: {
                        capacidad: capacidad1,
                        nombreEstacionamiento: nombre,
                        ocupados:ocupados1,
                        ubi_x : x,
                        ubi_y: y,
                    },

            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

        var urlBase1 = 'http://localhost:8080/sakila-backend-master/estacionamientos/';
        this.getEstacionamiento = function(estacionamientoId){
            return $http.get(urlBase1+estacionamientoId);
        };

    });