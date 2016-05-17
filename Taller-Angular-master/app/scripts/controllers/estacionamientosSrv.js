angular.module('angularSpa')
    .service('estacionamientosService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/estacionamientos';
        this.getEstacionamientos = function(){
            return $http.get(urlBase);
        };
    });