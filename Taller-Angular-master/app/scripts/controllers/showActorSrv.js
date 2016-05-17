angular.module('angularSpa')
    .service('showActorSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/actors/';
        this.getActor = function(actorId){
            return $http.get(urlBase+actorId);
        };
    });
