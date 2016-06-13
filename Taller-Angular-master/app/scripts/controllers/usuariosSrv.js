angular.module('angularSpa')
    .service('usuariosSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/usuarios';
        this.getUsuarios = function(){
            return $http.get(urlBase);
        };

        this.getCercanos = function(id){

        	return $http.get(urlBase+'/'+id+'/cercanos');
        };

        this.editarUsuario = function(id,nombre1,apellido1,email1,nickname1,password1,direccion1,sexo1,telefono1,fechanacimiento1,idestacionamiento, ubix, ubiy){
            var request = $http({
            method: "PUT",
            url: "http://localhost:8080/sakila-backend-master/usuarios/"+id,
            data: {
                        apellido: apellido1,
                        direccion: direccion1,
                        email: email1,
                        fechaNacimiento: fechanacimiento1, 
                        nickname:nickname1,
                        nombre: nombre1,
                        password: password1,
                        sexo: sexo1,
                        telefono: telefono1,
                        estacionamiento_idestacionamiento: idestacionamiento,
                        ubi_xUsuario: ubix,
                        ubi_yUsuario: ubiy,
                    },

            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

        var urlBase1 = 'http://localhost:8080/sakila-backend-master/usuarios/';
        this.getUsuario = function(idusuario){
            return $http.get(urlBase1+idusuario);
        };

    });