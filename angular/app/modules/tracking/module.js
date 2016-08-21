var tracking = angular.module('Tracking', [
	'Tracking.controllers',
	'Tracking.services',
	'Tracking.directives'
]);

/**
	$stateProvider
	.state('dashboard.table', {
		'abstract': true,
		'views': {
			'layout@dashboard': {
				'templateUrl': 'app/modules/dashboard/views/view-layout-table.html'
			}
		}
	})
	.state('dashboard.table.details', {
		'url': '/details',
		'views': {
			 'nav@dashboard.quad': {
			 	'templateUrl': 'app/modules/tracking/views/view-summary-nav.html',
			 	'controller': 'SummaryNavController'
			 },
			'one@dashboard.table': {
				'templateUrl': 'app/modules/tracking/views/view-details-table.html',
				'controller': 'TableController'
			},
			'two@dashboard.table': {
				'template': '<chart type="pie" layout="table"></chart>'
			},
			'three@dashboard.table': {
				'template': '<chart type="spline" range="5"></chart>'
			}
		}
	});
}]);**/