var classementJoueurs = new Vue({
	
	el : "#classementJoueurs",

	data : {

		users : [],

	}

});

axios.get("https://minesperium.herokuapp.com/api/users/ranking").then(function(reponse){

	var users = reponse.data;
	var k = 0;
	var user;

	for(var i=0; i < users.length; i++){

		user = users[i];

		if(user.civilisation != "Minesperium"){

			k++;

			switch(user.civilisation){

				case "Romaine":
					user.couleur = "#ce0404";
				break;

				case "Egyptienne":
					user.couleur = "#ffd60c";
				break;

				case "Gauloise":
					user.couleur = "#299b15";
				break;

				case "Viking":
					user.couleur = "#5e97f2";
				break;

				case "Minesperium" :
					user.couleur = "#ff8402";
				break;

			}
			
			user.rang = k;
			classementJoueurs.users.push(user);
		}
		
	}

	

});

var classementCivilisations = new Vue({

	el: "#classementCivilisations",

	data : {

		Civilisations : []
	},


});

axios.get("https://minesperium.herokuapp.com/api/users/civilisationranking").then(function(reponse){

	var Civilisations = reponse.data;

	for(var i=0; i < Civilisations.length; i++){

		Civilisations[i].rang = i+1;

		switch(Civilisations[i].name){

			case "Romaine":
				Civilisations[i].couleur = "#ce0404";
			break;

			case "Egyptienne":
				Civilisations[i].couleur = "#ffd60c";
			break;

			case "Gauloise":
				Civilisations[i].couleur = "#299b15";
			break;

			case "Viking":
				Civilisations[i].couleur = "#5e97f2";
			break;
			
			case "Minesperium" :
				Civilisations[i].couleur = "#ff8402";
			break;

		}
	}

	classementCivilisations.Civilisations = Civilisations;
});