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

				if (connexion.mdp.valide){

					connexion.login.entree = reponse.data.pseudo;

					setTimeout(function(){document.forms["connexionForm"].submit()}, 100);
				}

			})
			.catch(function (error) {
    			//console.log(error);
 
		}) 
		}
	}
});

var infoConnect = new Vue({

	el:"#infoConnect",

	data : {
		pseudo : '',
		rang : '',
		score : '',
		civilisation : ''
	},

	mounted : function(){

		axios.get("https://minesperium.herokuapp.com/api/users/check/" + login).then(function(reponse){

			infoConnect.pseudo = reponse.data.pseudo; 
		});

		axios.get("https://minesperium.herokuapp.com/api/users/ranking").then(function(reponse){

			var i = 0;
			while (i < reponse.data.length && (infoConnect.rang == 0)){

				var user = reponse.data[i];

				if (user.pseudo.toLowerCase() == infoConnect.pseudo.toLowerCase()){
					infoConnect.rang = i+1;
					infoConnect.score = user.value;
					infoConnect.civilisation = user.civilisation;
				}
				i++;
				
			}
		})
	}
});
