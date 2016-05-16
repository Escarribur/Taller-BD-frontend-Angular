(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/actors', {
            templateUrl: 'views/actors.html',
            controller: 'ActorsCtrl'
          })
        .when('/usuarios', {
            templateUrl: 'views/usuarios.html',
            controller: 'UsuariosCtrl'
          })

        .when('/actors/:actorId', {
            templateUrl: 'views/showActor.html',
            controller: 'showActorCtrl'
          })
        .when('/crearactors', {
            templateUrl: 'views/crearActor.html',
            controller: 'crearActorCtrl'
          })
        .when('/crearusuarios', {
            templateUrl: 'views/crearUsuario.html',
            controller: 'crearUsuarioCtrl'
          })
        .when('/mapa', {
            templateUrl: 'views/mapa.html',
            controller: 'MapaCtrl'
          })

        .otherwise({
            redirectTo: '/home'
          });
    });

})();


