angular.module('angularSpa')
    .service('usuariosSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/usuarios';
        this.getUsuarios = function(){
            return $http.get(urlBase);
        };

        this.getCercanos = function(id){

        	return $http.get(urlBase+'/'+id+'/cercanos');
        };

        this.editarUsuario = function(idusuario,nombre1,apellido1,email1,nickname1,password1,direccion1,sexo1,telefono1,fechaNacimiento1,idestacionamiento, x, y){
            var request = $http({
            method: "PUT",
            url: "http://localhost:8080/sakila-backend-master/usuarios/"+idusuario,
            data: {
                        nombre: nombre1,                     
                        apellido: apellido1,
                        email: email1,
                        nickname:nickname1,
                        password: password1,
                        direccion: direccion1,
                        sexo: sexo1,
                        telefono: telefono1,
                        fechaNacimiento: fechaNacimiento1, 
                        estacionamiento_idestacionamiento: idestacionamiento,
                        ubi_xUsuario: x,
                        ubi_yUsuario: y,
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