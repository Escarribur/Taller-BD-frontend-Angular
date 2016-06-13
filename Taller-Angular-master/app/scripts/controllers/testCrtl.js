
angular.module('angularSpa')
    .controller('testCtrl', function($scope, $cookies){
    	$scope.idUser = $cookies.getObject('sesion');
    	//alert($scope.idUser);
    	$scope.logout =function(){
    		$cookies.remove('sesion');	
    		$location.url("/home");
            window.location.reload();
    	}
    });