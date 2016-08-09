angular.module('taryngabbert')
.directive("topNav", function(){
	return {
		templateUrl: 'src/directives/topNav/topNav.html',
		controller: topNavController
	}
})
