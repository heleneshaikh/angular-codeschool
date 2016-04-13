'use strict';

(function () {

  var app = angular.module('directives', []);

  app.directive('productName', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/product_name.html'
    };
  });

  app.directive('productTabs', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/product_tabs.html',
      controller: function ($scope) {
        $scope.tab = 1;
        $scope.setTab = function (tab) {
          this.tab = tab;
        };
        $scope.isSet = function (tab) {
          return tab === this.tab;
        };
      }
    };
  });

  app.directive('productReview', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/product-review.html',
      controller: function($scope) {
        $scope.review = {};
        $scope.addReview = function(product) {
          product.reviews.push(this.review);
          this.review = {};
        };
      }};
  });


})();
