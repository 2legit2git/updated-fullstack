'use strict';

angular.module('updatedFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: '../y/create/create.html',
        controller: 'CreateCtrl'
      });
  });