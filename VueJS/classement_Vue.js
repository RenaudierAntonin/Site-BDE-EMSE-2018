var classementJoueurs = new Vue({
	
	el : "#classementJoueurs",

	data : {

		users : []
	}

});

axios.get("https://minesperium.herokuapp.com/api/users/ranking").then(function(reponse){

	var users = reponse.data;

	for(var i=0; i < users.length; i++){
		users[i].rang = i+1;
		switch(users[i].civilisation){

			case "Romaine":
				users[i].couleur = "#ce0404";
			break;

			case "Egyptienne":
				users[i].couleur = "#ffd60c";
			break;

			case "Gauloise":
				users[i].couleur = "#299b15";
			break;

			case "Viking":
<<<<<<< HEAD
				users[i].couleur = "#5e97f2";
=======
				users[i].couleur = "#007fff";
>>>>>>> 5d82c7b6559c91788cf0a02865f0e5d79664327c
			break;
			case "Minesperium" :
			case "Mine'sperium":
				users[i].couleur = "#ff8402";
			break;


		}
	}

	classementJoueurs.users = users;

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
<<<<<<< HEAD
				Civilisations[i].couleur = "#5e97f2";
=======
				Civilisations[i].couleur = "#007fff";
>>>>>>> 5d82c7b6559c91788cf0a02865f0e5d79664327c
			break;
			case "Minesperium" :
				Civilisations[i].couleur = "#ff8402";
			break;

		}
	}

	classementCivilisations.Civilisations = Civilisations;
});