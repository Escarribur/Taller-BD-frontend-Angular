angular.module('angularSpa')
    .service('usuariosSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/usuarios';
        this.getUsuarios = function(){
            return $http.get(urlBase);
        };
    });