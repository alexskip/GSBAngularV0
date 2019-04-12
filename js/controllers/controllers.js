app.controller('connexionController',function($scope,$location){
	
	$scope.lblLogin = "Login"; //Permet de d'afficher le mot login lors de l'appel de {{::lblLogin}} (dans connexion.html)
	$scope.lblMdp = "Mot de passe";
	$scope.lblBtn = "Valider";
	$scope.lblMessage = "mot de passe ou login incorrect"
	
	$scope.valider = function () //Fonction qui permet de tester les champs et afficher les message d'erreur si besoin
	{
		if($scope.login == "test" || $scope.mdp == "12345")
		 {
			$scope.msgErreur = false;
            $location.url("accueil");
		 }
		 else
		 {
			 $scope.msgErreur = true;
		 }
	};
	
});
	
	
app.controller('accueilController',function($scope){ //Controller dans la page ./js/app.js
    $scope.titre = "Gestion des rapports de visite";
});

	
	
app.controller('testController',function($scope){ //Controller dans la page ./js/app.js
    $scope.titre = "Gestion des rapports de test";
});

app.controller('medecinsController',function($scope){ //Controller dans la page ./js/app.js
    $scope.titre = "Gestion des médecins";
});
app.controller('rapportsController',function($scope){ //Controller dans la page ./js/app.js
    $scope.titre = "Gestion des rapports";
});
	



