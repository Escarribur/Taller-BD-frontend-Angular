angular.module('angularSpa')
    .service('RutasSrv', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/rutas';
        this.getRutas = function(){
            return $http.get(urlBase);
        };

        var urlBase1 = 'http://localhost:8080/sakila-backend-master/rutas/';
        this.getRuta = function(id){
            return $http.get(urlBase1+id);
        };

        var urlBase2 = 'http://localhost:8080/sakila-backend-master/rutasusuarios/de/';
        this.getRutasUser = function(id){
            return $http.get(urlBase2+1);
        };

        this.postRutaUser = function (idruta, iduser, pertenencia,nombreRuta1,calificacion1, x1, y1, x2, y2,nombre1,apellido1,email1,nickname1,password1,direccion1,sexo1,telefono1,fechaNacimiento1,idestacionamiento, x, y){
            var request = $http({
                method:"POST",
                url: "http://localhost:8080/sakila-backend-master/rutasusuarios",
                data: {
                    pertenencia: pertenencia,
                    ruta: {idRuta: idruta1,
                        nombreRuta: nombreRuta1,                     
                        calificacion: calificacion1,
                        inicio_ubi_x: x1,
                        inicio_ubi_y: y1,
                        fin_ubi_x: x2,
                        fin_ubi_y: y2,},

                    usuario: {
                        idusuario: iduser,
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
                     
                },
                headers: {'Content-Type': 'application/json'}
            });
            return(request);
        }

        this.editarCalificacion = function(idruta,nombreRuta1,calificacion1, x1, y1, x2, y2){
            var request = $http({
            method: "PUT",
            url: "http://localhost:8080/sakila-backend-master/rutas/"+idruta,
            data: {
                        nombreRuta: nombreRuta1,                     
                        calificacion: calificacion1,
                        inicio_ubi_x: x1,
                        inicio_ubi_y: y1,
                        fin_ubi_x: x2,
                        fin_ubi_y: y2,
                        
                    },

            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };
    });

