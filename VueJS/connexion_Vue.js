var connexion = new Vue({

	el : "#connexion",

	data :{

		login :{

			entree : '',
			message : 'Pseudo inexistant',
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
				connexion.login.valide = !(connexion.login.displayMessage) && (connexion.login.entree !='');
			})
			.catch(function (error) {
    			//console.log(error);
 
		})
		},

		verification : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/identification/" + this.login.entree + "/" + this.mdp.entree).then(function(reponse){

				connexion.mdp.displayMessage = !(reponse.data.id);
				connexion.mdp.valide = !(connexion.mdp.displayMessage) && (connexion.mdp.entree !='');
				console.log(connexion.mdp);
			})
			.catch(function (error) {
    			//console.log(error);
 
		}) 
		}
	}
})