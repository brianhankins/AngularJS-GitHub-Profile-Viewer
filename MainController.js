(function () {

  var app = angular.module('gitHubViewer');

  var MainController = function ($scope, $interval, $location) {

    var decrementCountdown = function () {
      $scope.countdown -= 1;

      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function (username) {
      if (username === undefined) {
        return onError();
      }

      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
    };

    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();

  };

  app.controller('MainController', MainController);

}());