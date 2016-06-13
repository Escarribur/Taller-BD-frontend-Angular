angular.module('angularSpa')
    .controller('logoutCtrl', function($scope,$cookies){
    	function logout(){
    		$cookies.remove('sesion');	
    		$location.url("/home");
            window.location.reload();
    	}//logout();

    	

    });