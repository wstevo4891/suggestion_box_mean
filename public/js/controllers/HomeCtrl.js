angular.module('HomeCtrl', []).controller('HomeController', [
  '$scope', 
  'Suggestion', 
  function($scope, Suggestion) {
    
  $scope.posts = Suggestion.posts;

  $scope.addSuggestion = function() {
  	if (!$scope.title || $scope.title === "") {
  	  return;
  	}
  	$scope.posts.push({
  		title: $scope.title,
  		upvotes: 0,
  		comments: []
  	});
  	$scope.title = '';
  };

  $scope.upVote = function(index) {
  	$scope.posts[index].upvotes += 1;
  };
}]);
