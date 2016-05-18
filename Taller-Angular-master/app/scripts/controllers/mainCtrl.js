(function(){
    angular.module('angularSpa')

.controller('MainCtrl', function($scope, estacionamientosService){
	

    $scope.estacionamientos =[];
    $scope.wololo = [];
        function getEstacionamientos(){
            estacionamientosService.getEstacionamientos()
            .success(function(data){
                $scope.estacionamientos = data;
                for (i = 0; i < $scope.estacionamientos.length; i++){
		            createMarker($scope.estacionamientos[i]);
		        }
            })
            .error(function(error){
                $scope.status = 'Error al consultar por estacionamientos';
            });
        }
        getEstacionamientos();

        

        



	var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(-33.450178, -70.686327),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

    $scope.markers = [];
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.ubi_x, info.ubi_y),
                title: info.nombreEstacionamiento
            });
            var disponi = info.capacidad -info.ocupados;
            marker.content = '<div class="infoWindowContent">Capacidad del Estacionamiento: '+info.capacidad+'<br/>Estacionamientos disponibles:' + disponi + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }


        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }


        $scope.crearUsuario = function (){
            crearUsuarioSrv.crearUsuario($scope.form.nombre, $scope.form.apellido,$scope.form.email,
                    $scope.form.nickname,
                    $scope.form.password,
                    $scope.form.direccion,
                    $scope.form.sexo,
                    $scope.form.telefono,
                    $scope.form.fechanacimiento)
            .success(function(data){
                $scope.usuarios = data;
                console.log(data);
            })
            .error(function(error){
                $scope.usuarios = 'Error al consultar por usuarios';
            });
                $scope.form.nombre="";
                $scope.form.apellido="";

                $scope.form.email="";
                $scope.form.nickname="";
                $scope.form.password="";
                $scope.form.direccion="";
                $scope.form.sexo="";
                $scope.form.telefono="";
                $scope.form.fechanacimiento="";
        }



});


})();
