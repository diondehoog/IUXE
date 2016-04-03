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
};
//###################END HomeCtrl#####################
//####################################################
//###################START CustomCtrl#################
controllers.PlaylistCtrl = function($scope){
  $scope.title   = "playlist page";
  $scope.content = "playlist page content";
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