angular.element(document).ready(function() {
	var list = document.getElementsByClassName('ng-example');
	
    angular.bootstrap(list);
});

function ccCtrl($scope) {
	var cc = this;
	
	cc.ex1message="Campers";
	cc.ex2message="Angular";
	
}

function MyController($scope) {
    $scope.username = 'World';
 
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };
}