(function(){

    angular.module('angularSpa', ['ngRoute','ngCookies','ngResource'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/editarPerfil', {
            templateUrl: 'views/editarPerfil.html',
            controller: 'editarPerfilCtrl'
          })
        
        .when('/ruta', {
            templateUrl: 'views/ruta.html',
            controller: 'RutaCtrl'
          })
        .when('/cercanos', {
            templateUrl: 'views/cercanos.html',
            controller: 'CercanosCtrl'
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
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
          })
        .when('/estacionamientos/:idestacionamiento', {
            templateUrl: 'views/showEstacionamiento.html',
            controller: 'showEstacionamientoCtrl'
          })


        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
          })

        .otherwise({
            redirectTo: '/home'
          });
    });

})();


