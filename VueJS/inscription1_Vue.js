var inscription1 = new Vue({

	el : '#inscription1',

	data : {
		mail : {
				entree : '',
				message : 'Entrez votre adresse emse !',
				displayMessage : false,
				valide : false
			},
		mdp1 : { 
				entree : '', 
				message : "Entrez un mot de passe valide",
				displayMessage : false,
				valide : false
			},
		mdp2 : { 
				entree : '', 
				message : "La confirmation doit correspondre au premier mot de passe",
				displayMessage : false,
				valide : false
			},
		number : { 
				entree : '', 
				message : "Entrer un numéro de telephone valide",
				displayMessage : false,
				valide : true
			}
	},

	methods : {

		mdp1_Verif : function(){ // on peut utiliser un vm.$watch('nom' function (newValue, oldValue){ ... })

			this.mdp1.displayMessage = (this.mdp1.entree == '');
			this.mdp1.valide = !(this.mdp1.displayMessage);
		},
		mdp2_Verif : function(){

			this.mdp2.displayMessage = (this.mdp1.entree != this.mdp2.entree);
			this.mdp2.valide = !(this.mdp2.displayMessage);
		},
		mail_Verif : function(){

			this.mail.displayMessage = (this.mail.entree =='');
			this.mail.valide = !(this.mail.displayMessage);
		}
	}
})
