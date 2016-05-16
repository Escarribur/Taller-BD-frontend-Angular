
angular.module('angularSpa')
    .service('crearActorSrv', function($http,$routeParams){
        this.getActor = function(){
            var urlBase = 'http://localhost:8080/sakila-backend-master/actors/';
            return $http.get(urlBase);
        };

        this.crearActor = function(nombre,apellido){
              var request = $http({
            method: "post",
            url: "http://localhost:8080/sakila-backend-master/actors",
            data: {
                    firstName: nombre,
                    lastName: apellido,
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

    });