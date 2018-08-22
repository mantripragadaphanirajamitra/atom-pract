(function () {
'use strict'

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'LovesFilter'];
function MsgController($scope, lovesFilter) {
	$scope.stateOfBeing = "hungry";
	$scope.sayMessage = function () {
		var msg = "phani likes to eat healthy snaks";
		return msg;
	};

	$scope.sayLovesMessage = function () {
		var msg = "phani likes to eat healthy snaks at night";
		msg = lovesFilter(msg)
        return msg;
	};

    $scope.feedphani = function () {
    	$scope.stateOfBeing = "fed";

    };
  }
  function LovesFilter() {
  	return function (input) {
  		input = input || "";
  		input = input.replace("likes", "loves");
  		return input;
  	};
  }

  function TruthFilter() {
  	return function (input, target, replace) {
  		input = input || "";
  		input = input.replace(target, replace);
  		return input;


  	}
  }


}) ();
