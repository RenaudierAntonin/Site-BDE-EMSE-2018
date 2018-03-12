

MaxCivilisation = 80;



var inscription2 = new Vue({
	el : "#inscription2",

	data : {

		pseudo : { 
				entree : '', 
				message : "Ce pseudo existe deja, veuillez en choisir un autre",
				displayMessage : false,
				valide : false

		},

		civilisations : [{name: 'Gauloise', nb : 0}, {name: 'Viking', nb : 0}, {name: 'Romaine', nb : 0}, {name: 'Egyptienne', nb : 0}],

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
	},
	 mounted : function(){
	 	axios.get("https://minesperium.herokuapp.com/api/users").then(function(reponse){

	for(var i = 0; i < reponse.length; i++ ){

		switch (reponse.data.civilisation){

			case "Romaine":
				inscription2.civilisations.Romaines.nb++;
			break;

			case "Viking":
				inscription2.civilisations.Viking.nb++;
			break;

			case "Gauloise":
				inscription2.civilisations.Gauloise.nb++;
			break;

			case "Egyptienne":
				inscription2.civilisations.Egyptienne.nb++;
			break;
		}
	for(civ in civilisations ){

	if(civ.nb > 80){
		delete civilisations[civ]; 
	}
}
	}
});
	 }
});

