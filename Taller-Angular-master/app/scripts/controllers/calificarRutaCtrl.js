(function(){
    angular.module('angularSpa')

.controller('calificarRutaCtrl', function($scope,$cookies,$route, $http, RutasSrv){

	$scope.rutas =[];  
        function getRutas(){
            RutasSrv.getRutas()
            .success(function(data){
                $scope.rutas = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por entradas';
            });
            
        }
        getRutas();

    $scope.ruta =[];
        function getRuta(id){
            RutasSrv.getRuta(id)
            .success(function(data){
                $scope.ruta = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por entradas';
            });
        }

        $scope.update = function(){
            var e = document.getElementById("end");
            //alert(e.options[e.selectedIndex].value);
            getRuta(e.options[e.selectedIndex].value);
        }
        
        
        

        $scope.editarCalificacion = function (){
            if($scope.ruta.calificacion==0){
                $scope.ruta.calificacion = $scope.form.calificacion;
            }else
                $scope.form.calificacion = (parseFloat($scope.ruta.calificacion)+parseFloat($scope.form.calificacion) )/2;
            RutasSrv.editarCalificacion(
                $scope.ruta.idRuta,
                $scope.ruta.nombreRuta,
                $scope.form.calificacion,
                $scope.ruta.inicio_ubi_x,
                $scope.ruta.inicio_ubi_y,
                $scope.ruta.fin_ubi_x,
                $scope.ruta.fin_ubi_y)
            .success(function(data){
                $scope.resultado = data;
                console.log(data);
                location.assign("http://localhost:9000/#/home");
            })
            .error(function(error){
                $scope.resultado = 'Error al consultar por usuarios';
            });
                $scope.form.nombreRuta="";
                $scope.form.calificacion="";
                $scope.form.inicio_ubi_x="";
                $scope.form.inicio_ubi_y="";
                $scope.form.fin_ubi_x="";
                $scope.form.fin_ubi_y="";
        }

	});
})();
