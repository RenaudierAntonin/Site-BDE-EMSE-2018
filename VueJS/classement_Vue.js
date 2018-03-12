var classement = new Vue({
	
	el : "#classement",

	data : {

		users : []
	}


});

axios.get("https://minesperium.herokuapp.com/api/users/ranking").then(function(reponse){

	console.log(reponse.data);
	classement.users = reponse.data;
});