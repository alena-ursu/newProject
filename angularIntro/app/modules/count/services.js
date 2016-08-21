var services = angular.module('Count.services', [])

.factory('CountService', [function(){
	//to create for return smth
	return {
		increment: function(value, increment){
			return value += increment;
		}
	}
}]);