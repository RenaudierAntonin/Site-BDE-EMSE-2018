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

				inscription2.pseudo.displayMessage = reponse.id;
				inscription2.pseudo.valide = !(inscription2.pseudo.displayMessage) && (inscription2.pseudo.entree !='');
			}) 
		},
		envoiDonnees : function(){

			axios.post("https://minesperium.herokuapp.com/api/users/new", { ??? }).then(function(reponse){

				inscription2.envoi = true;
			})
			
		}
	}
})