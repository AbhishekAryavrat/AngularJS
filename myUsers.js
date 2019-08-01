angular.module('myApp', []).controller('userCtrl', function($scope){
	$scope.fName='';
	$scope.lName='';
	$scope.passw1='';
	$scope.passw2='';
	$scope.users=[
	{id:1, fName:'John', lName:"Wick"},
	{id:2, fName:'Kim', lName:"Pim"},
	{id:3, fName:'Sal', lName:"Smith"},
	{id:4, fName:'Jack', lName:"Doe"},
	{id:5, fName:'Peter', lName:"Jones"}
	];

	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false;
	$scope.hideform = true;
	$scope.editUser = function(id) {
		$scope.hideform = false;
		if (id == 'new') {
			$scope.edit= true;
			$scope.incomplete = true;
			$scope.fName = '';
			$scope.lName = '';
		}
		else {
			$scope.edit = false;
			$scope.fName = $scope.users[id-1].fName;
			$scope.lName = $scope.users[id-1].lName;
		}
	};

	$scope.$watch('passw1', function() {$scope.test();});
	$scope.$watch('passw2', function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});

	$scope.test = function() {
		if($scope.passw1 != $scope.passw2){
			$scope.error = true ;
		}
		else{
			$scope.error = false;
		}
		$scope.incomplete = false;
		if($scope.edit && (!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length))
		{
			$scope.incomplete = true ;
		}
	};
});