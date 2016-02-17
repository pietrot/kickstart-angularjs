app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/src/app/component/home/view/home.html',
        controller: 'HomeController'
    });
    
    // Use the HTML5 History API.
    $locationProvider.html5Mode(true);
}]);
