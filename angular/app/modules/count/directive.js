var directives = angular.module('Count.directives',[])

.directive('customButton', function(){

	return {
		restrict: 'E',
		template: '<button>{{text}}</button>',
		controller:['$scope', '$element', function($scope, $element){

				$scope.text = 'Custom Button from $scope';

				console.log($element);

				$scope.destruct = function(){
					//Kill element
					angular.element()

					this.delete()

				};

		}],
		link: function($scope, element, attrs){
			scope.text ="Custom Button from $scope";


		}
		
	}

});
