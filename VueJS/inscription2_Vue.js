var inscription2 = new Vue({
	el : "#inscription2",

	data : {

		pseudo : { 
				entree : '', 
				message : "Ce pseudo existe deja, veuillez en choisir un autre",
				displayMessage : false,
				valide : false

		},

		civilisations : [{name: 'Gauloise'}, {name: 'Viking'}, {name: 'Romaine'}, {name: 'Egyptienne'}, {name : 'Minesperium'}],

		civilisation : '',

		envoi : false

},

	methods : {
		pseudo_Verif : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/check/" + this.pseudo.entree).then(function(reponse){

				inscription2.pseudo.displayMessage = reponse.data.id;
				inscription2.pseudo.valide = !(inscription2.pseudo.displayMessage) && (inscription2.pseudo.entree !='');
			}) 
		},
		envoiDonnees : function(){

			numberEntre  = !(!(number));

			axios({

            	method: 'post',

                url: 'https://minesperium.herokuapp.com/api/users/new',

				data: { pseudo : inscription2.pseudo.entree, civilisation : inscription2.civilisation, mail : mail, password : mdp, phonenumber : number, activated : numberEntre}

            });

				inscription2.envoi = true;
			
		}
	}
})