'use strict';

angular.module('$strap.directives')

    .directive('bsNavbar', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'A',
            link: function postLink($scope, element, attrs, controller) {
                $rootScope.$on('$locationChangeSuccess', function () {
                    element.find('li[data-match-route]').each(function (k, li) {
                        var $li = angular.element(li),
                            pattern = $li.attr('data-match-route'),
                            regexp = new RegExp('^' + pattern + '$', ["i"]);
                        if (regexp.test($location.path())) {
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
var app = angular.module('orchestrapp', ['$strap.directives', 'spotify'])
    .config(function ($routeProvider, SpotifyProvider, $httpProvider) {
        $routeProvider
            .when('/main', {templateUrl: 'template.tpl', controller: 'MainCtrl'})
            .when('/overview', {templateUrl: 'template.tpl', controller: 'OverviewCtrl'})
            .when('/group', {templateUrl: 'template2.tpl', controller: 'GroupCtrl'})
            .when('/playlist', {templateUrl: 'playlist.tpl', controller: 'PlaylistCtrl'})
            .when('/profile', {templateUrl: 'template.tpl', controller: 'QuestionCtrl'})
            .when('/start', {templateUrl: 'template.tpl', controller: 'StartCtrl'})
            .otherwise({redirectTo: "/main"});
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        SpotifyProvider.setClientId('edb5ae47ae7747ee9af856a8a66769a7');
        SpotifyProvider.setRedirectUri('http://orchestrapp.herokuapp.com/callback.html');
        SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    });
//####################################################
//######injecting the dependencies####################
var dependencies = ['$scope', 'Spotify'];
controllers.MainCtrl.$inject = dependencies;
controllers.OverviewCtrl.$inject = dependencies;
controllers.GroupCtrl.$inject = dependencies;
controllers.PlaylistCtrl.$inject = dependencies;
controllers.QuestionCtrl.$inject = dependencies;
controllers.StartCtrl.$inject = dependencies;
//controllers.CustomCtrl.$inject    = dependencies;
//####################################################
//######assigning the controllers to the application##
app.controller(controllers);
//####################################################
