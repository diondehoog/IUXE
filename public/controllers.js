//###################Creating the controllers object to hold all the controlles###################
var controllers = {};
//####################################################
//###################START MainCtrl###################
controllers.MainCtrl = function($scope){
    $scope.nav_items = [
        {text: "Overview",        href: "overview"},
        {text: "Age Group",       href: "group"},
        {text: "Playlist(s)", href: "playlist"},
        {text: "Question Profile(s)", href: "profile"},
        {text: "Start", href: "start"}
    ];
};
//###################END MainCtrl#####################
//####################################################
//###################START AboutCtrl##################
controllers.OverviewCtrl = function($scope){
  $scope.title   = "overview page";
  $scope.content = "overview page content";
};
//###################END AboutCtrl####################
//####################################################
//###################START HomeCtrl###################
controllers.GroupCtrl = function($scope){
  $scope.title   = "group page";
  $scope.content = "group page content";
  
      $scope.master = {};

      $scope.update = function(ageGrp) {
        $scope.master = angular.copy(ageGrp);
      };

      $scope.reset = function() {
        $scope.ageGrp = angular.copy($scope.master);
      };

      $scope.reset();
};
//###################END HomeCtrl#####################
//####################################################
//###################START CustomCtrl#################
controllers.PlaylistCtrl = function($scope, Spotify){
  $scope.title   = "playlist page";
  $scope.content = "playlist page content";
    $scope.login = function () {
        Spotify.login();
        $scope.updateInfo
    };

    $scope.updateInfo = function() {
      Spotify.getCurrentUser().then(function (data) {
        $scope.getUserPlaylists(data.id);
      }, function(error) {
        $scope.login();
      });
    };

    $scope.getUserPlaylists = function(userid) {
      Spotify.getUserPlaylists(userid).then(function (data) {
        $scope.playlists = data.items;
      });
    };

    angular.element(document).ready(function () {
      var storedToken = window.localStorage.getItem('spotify-token');
      if (storedToken !== null) {
        Spotify.setAuthToken(storedToken);
        $scope.updateInfo();
      } else {
        $scope.login();
      }
    });

    $scope.select = function(playlist) {
        $scope.selected = playlist;
    };

    $scope.getNewReleases = function() {
        Spotify.getNewReleases({ country: "NL" }).then(function (data) {
        console.log(data);
    });
    };



};
//###################END CustomCtrl###################
//####################################################
controllers.QuestionCtrl = function($scope){
  $scope.title   = "profile page";
  $scope.content = "profile page content";
};

controllers.StartCtrl = function($scope){
  $scope.title   = "start page";
  $scope.content = "This is a pointless question with pointless answers?";
  $scope.answer1 = "Stroopwafel";
  $scope.answer2 = "Potato";
  $scope.answer3 = "Turtle";
  $scope.answer4 = "Train";
};
