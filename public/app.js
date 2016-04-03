'use strict';

angular.module('$strap.directives')

.directive('bsNavbar', ['$location', '$rootScope', function($location, $rootScope) {
  return {
		restrict: 'A',
		link: function postLink($scope, element, attrs, controller) {
		  $rootScope.$on('$locationChangeSuccess', function() {
		    element.find('li[data-match-route]').each(function(k, li) {
					var $li = angular.element(li),
						pattern = $li.attr('data-match-route'),
						regexp = new RegExp('^' + pattern + '$', ["i"]);
					if(regexp.test($location.path())) {
						$li.addClass('active');
					} else {
						$li.removeClass('active');
					}
				});
		  });
		}
	};
}]);
//####################################################
var app = angular.module('navbar_test', ['$strap.directives'])
                 .config(function($routeProvider){
                    $routeProvider
                                    .when('/main',         {templateUrl: 'template.tpl', controller: 'MainCtrl'})
                                    .when('/overview',         {templateUrl: 'template.tpl', controller: 'OverviewCtrl'})
                                    .when('/group',   {templateUrl: 'template.tpl', controller: 'GroupCtrl'})
                                    .when('/playlist',          {templateUrl: 'template.tpl', controller: 'PlaylistCtrl'})
                                    .when('/profile',          {templateUrl: 'template.tpl', controller: 'QuestionCtrl'})
                                    .when('/start',          {templateUrl: 'template.tpl', controller: 'StartCtrl'})
                                    .otherwise({redirectTo: "/main"});
                 });
//####################################################
//######injecting the dependencies####################
var dependencies = ['$scope'];
controllers.MainCtrl.$inject      = dependencies;
controllers.OverviewCtrl.$inject      = dependencies;
controllers.GroupCtrl.$inject      = dependencies;
controllers.PlaylistCtrl.$inject     = dependencies;
controllers.QuestionCtrl.$inject     = dependencies;
controllers.StartCtrl.$inject     = dependencies;
//controllers.CustomCtrl.$inject    = dependencies;
//####################################################
//######assigning the controllers to the application##
app.controller(controllers);
//####################################################