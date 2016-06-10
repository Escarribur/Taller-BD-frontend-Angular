angular.module('angularSpa')
    .service('entradasService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/entradas';
        this.getEntradas = function(){
            return $http.get(urlBase);
        };

    });