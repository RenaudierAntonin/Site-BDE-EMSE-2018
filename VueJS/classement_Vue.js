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
				users[i].couleur = "red";
			break;

			case "Egyptienne":
				users[i].couleur = "yellow";
			break;

			case "Gauloise":
				users[i].couleur = "green";
			break;

			case "Viking":
				users[i].couleur = "blue";
			break;
			case "Minesperium" :
				users[i].couleur = "#ff8402";
			break;

		}
	}

	classement.users = users;
});


