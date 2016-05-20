(function(){
    angular.module('angularSpa')

.controller('MapCtrl', function($scope, estacionamientosService){
    
/* Obtener estacionamientos*/

    $scope.estacionamientos =[];
    
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

        
/*  configuracion mapa*/
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
                title: info.nombreEstacionamiento,
                id: info.idestacionamiento
            });
            var disponi = info.capacidad -info.ocupados;
            marker.content = '<div class="infoWindowContent">Capacidad del Estacionamiento: '+info.capacidad+'<br/>Estacionamientos disponibles:' + disponi + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }




});


})();
