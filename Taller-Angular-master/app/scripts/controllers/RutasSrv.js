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

