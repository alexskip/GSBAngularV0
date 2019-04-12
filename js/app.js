var app = angular.module("gsbRapports",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
            .when('/',{
                templateUrl :'vues/connexion.html',
                controller :'connexionController'
            })
			.when('/accueil',{
                templateUrl :'vues/accueil.html',
                controller :'accueilController'
            })
			.when('/test',{
                templateUrl :'vues/test.html',
                controller :'testController'
            })
			 .when('/medecins',{
                templateUrl :'vues/medecins.html',
                controller :'medecinsController'
            })
            .when('/rapports',{
                templateUrl :'vues/rapports.html',
                controller :'rapportsController'
            })
			
            .otherwise({redirectTo: '/'});
});


