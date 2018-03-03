var inscription = new Vue({

	el : '#inscription',

	data : {
		mail : {entree : ''},
		mdp1 : { entree : '', 
				 message : "Entrez un mot de passe valide",
				 displayMessage : false
			},
		mdp2 : { entree : '', 
				 message : "La confirmation doit correspondre au premier mot de passe",
				 displayMessage : false
			},
		number : { entree : '', 
				 message : "Entrer un numéro de telephone valide",
				 displayMessage : false
			}
	},

	methods : {
		mdp1_Verif : function(){
			this.mdp1.displayMessage = (this.mdp1.entree == '');
		},
		mdp2_Verif : function(){
			this.mdp2.displayMessage = (this.mdp1.entree != this.mdp2.entree);
			console.log(this.mdp1.entree == this.mdp2.entree);
		}
	}
})