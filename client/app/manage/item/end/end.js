'use strict';

angular.module('updatedFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage.item.end', {
        url: '/end',
        templateUrl: 'app/manage/item/end/end.html',
        controller: 'ManageItemEndCtrl'
      });
  });