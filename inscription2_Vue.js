var inscription2 = new Vue({
	el : "#inscription2",

	data : {

		pseudo : { 
				entree : '', 
				message : "Ce pseudo existe deja, veuillez en choisir un autre",
				displayMessage : false,
				valide : false

		},

		civilisations : [{name: 'Gauloise'}, {name: 'Viking'}, {name: 'Romaine'}, {name: 'Egyptienne'}],

		civilisation : '',

		envoi : false

},

	methods : {
		pseudo_Verif : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/check/" + this.pseudo.entree).then(function(reponse){

				this.pseudo.displayMessage = reponse.id;
				this.pseudo.valide = !(this.pseudo.displayMessage) && (this.pseudo.entree !='');
			}) 
		},
		envoiDonnee : function(){

			axios.post("https://minesperium.herokuapp.com/api/users/").then(function(reponse){

				this.envoi = true;
			})
			
		}
	}
})