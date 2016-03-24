angular.module('SuggestionCtrl', []).controller('SuggestionController', [
	'$scope', 
	'$routeParams', 
	'Suggestion', 
	function($scope, $routeParams, Suggestion) {

	$scope.post = Suggestion.posts[$routeParams.id];

	$scope.addComment = function() {
		if(!$scope.body || $scope.body === "") {
			return;
		}
		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		});
		$scope.body = '';
	};

	$scope.upVoteComment = function(comment) {
		comment.upvotes += 1; 
	};
}]);
