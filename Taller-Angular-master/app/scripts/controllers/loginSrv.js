angular.module('angularSpa')
    .service('loginSrv', function($http,$routeParams,$resource){
        this.getSesion = function(nicknameSesion, passwordSesion){
              var request = $http({
            method: "POST",
            url: "http://localhost:8080/sakila-backend-master/usuarios/login/",
            data: {
                        nickname: nicknameSesion,
                        password: passwordSesion
                    },

            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

    });
