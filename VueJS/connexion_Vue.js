var connexion = new Vue({

	el : "#connexion",

	data :{

		login :{

			entree : '',
			message : 'Pseudo inexistant, vous pouvez essayez votre adresse mail',
			displayMessage : false,
			valide : false
		},

		mdp :{

			entree : '',
			message : 'mot de passe incorrect',
			displayMessage : false,
			valide : false
		}

	},

	methods :{

		autentification : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/check/" + this.login.entree).then(function(reponse){

				connexion.login.displayMessage = !(reponse.data.id);
				connexion.login.valide = !(!(reponse.data.id)) && (connexion.login.entree !='');

			})
			.catch(function (error) {
    			//console.log(error);
 
		})
		},

		verification : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/identification/" + this.login.entree + "/" + this.mdp.entree).then(function(reponse){

				connexion.mdp.displayMessage = !(reponse.data.id);
				connexion.mdp.valide = !(!reponse.data.id);

			})
			.catch(function (error) {
    			//console.log(error);
 
		}) 
		}
	}
})