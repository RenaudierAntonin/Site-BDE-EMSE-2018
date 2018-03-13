var classement = new Vue({
	
	el : "#classement",

	data : {

		users : []
	}

});

axios.get("https://minesperium.herokuapp.com/api/users/ranking").then(function(reponse){

	var users = reponse.data;

	for(var i=0; i < users.length; i++){

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
				users[i].couleur = "#0e136d";
			break;
			case "Minesperium" :
				users[i].couleur = "#ff8402";
			break;

		}
	}

	classement.users = users;
});


