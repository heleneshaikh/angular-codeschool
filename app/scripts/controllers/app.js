'use strict';

(function () {

  var app = angular.module('store', ['directives']);

  app.controller('StoreController', function ($http) {
    var _this = this;
    _this.product = [];

    $http.get('/data/package.json').success(function (data) {
      _this.product = data;
    });
  });


})();
