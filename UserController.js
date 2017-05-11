(function () {

  var app = angular.module('gitHubViewer', []);

  var MainCtrl = function (
    $scope, github, $interval,
    $log, $anchorScroll, $location) {

    $scope.message = "GitHub Profile Viewer";

    $scope.search = function (username) {
      if (username === undefined) {
        return onError();
      }

      $log.info("Searching for: " + username);
      github.getUser(username)
        .then(onUserComplete, onError);

      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
    };

    var onUserComplete = function (data) {
      $scope.user = data;

      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onRepos = function (data) {
      $scope.repos = data;
      $location.hash('userDetails');
      $anchorScroll();
    };

    var decrementCountdown = function () {
      $scope.countdown -= 1;

      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data.";
    };

    var countdownInterval = null;
    var startCountdown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.username = "angular";
    $scope.repoSortOrder = '-stargazers_count';
    $scope.countdown = 5;
    startCountdown();

  };


  app.controller('MainCtrl', MainCtrl);



}());