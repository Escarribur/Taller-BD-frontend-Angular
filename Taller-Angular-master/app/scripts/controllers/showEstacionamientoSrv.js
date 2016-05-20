angular.module('angularSpa')
    .service('showEstacionamientoSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/estacionamientos/';
        this.getEstacionamiento = function(estacionamientoId){
            return $http.get(urlBase+estacionamientoId);
        };
    });
