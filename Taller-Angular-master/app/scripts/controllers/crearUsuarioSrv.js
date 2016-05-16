
angular.module('angularSpa')
    .service('crearUsuarioSrv', function($http,$routeParams){
        this.getUsuario = function(){
            var urlBase = 'http://localhost:8080/sakila-backend-master/usuarios/';
            return $http.get(urlBase);
        };

        this.crearUsuario = function(nombre1,apellido1,email1,nickname1,password1,direccion1,sexo1,telefono1,fechanacimiento1){
              var request = $http({
            method: "post",
            url: "http://localhost:8080/sakila-backend-master/usuarios",
            data: {
                        apellido: apellido1,
                        direccion: direccion1,
                        email: email1,
                        fechaNacimiento: fechanacimiento1, 
                        nickname:nickname1,
                        nombre: nombre1,
                        password: password1,
                        sexo: sexo1,
                        telefono: telefono1
                    },

            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

    });