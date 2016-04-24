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

    $scope.artist = Spotify.getArtist('spotify:artist:6jOz2B9qeID4dLP1o8bFGf');

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




};
//###################END CustomCtrl###################
//####################################################
controllers.QuestionCtrl = function($scope){
  $scope.title   = "profile page";
  $scope.content = "profile page content";
};

controllers.StartCtrl = function($scope){
  $scope.title   = "start page";
  $scope.content = "start page content";
};