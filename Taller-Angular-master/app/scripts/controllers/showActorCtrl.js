angular.module('angularSpa')
    .controller('showActorCtrl', function($scope, $routeParams, showActorSrv){
        $scope.actors =[];
        //$scope.actor = $routeParams.actorId;
        function getActor(){
            showActorSrv.getActor($routeParams.actorId)
            .success(function(data){
                $scope.actors = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        console.log("Parametros"+$routeParams.id);
        getActor();        
    });
