ajout_score =new Vue({
	
	el: "#score",

	data:{
		pseudo : {
			entree :'',
			message:"Le pseudo entré n'existe pas",
			displayMessage: false,
			valide : false
		},

		jeu : {
			entree :'',
			message:"Le jeu entré n'existe pas",
			displayMessage: false,
			valide : false
		},
		score : {
			entree :'',
			message:"Il faut entrer un score",
			displayMessage: false,
			valide : false
		},

		scoreAjoute : false,
		ajout : false

	},

	methods :{

		pseudo_Verif : function(){

			axios.get("https://minesperium.herokuapp.com/api/users/check/" + this.pseudo.entree).then(function(reponse){

				ajout_score.pseudo.displayMessage = !(reponse.data.id);
				ajout_score.pseudo.valide = !(ajout_score.pseudo.displayMessage) && (ajout_score.pseudo.entree !='');
			})
			.catch(function (error) {
    			//console.log(error);
 
		})
		},

		score_Verif : function(){

			ajout_score.score.displayMessage = (ajout_score.score.entree ==''); //penser à utiliser les expressions regulières
			ajout_score.score.valide = !(ajout_score.score.displayMessage); 

		},

		jeu_Verif : function(){


		},

		envoiDonnees : function(){

			axios({

            	method: 'post',

                url: 'https://minesperium.herokuapp.com/api/scores/add',

				data: { id_user : ajout_score.pseudo.entree, id_game : ajout_score.civilisation, value : ajout_score.score.entree}

            });

			ajout_score.pseudo.entree='';
			ajout_score.score.entree='';
			ajout_score.ajout = true;
			
		}
	}
})

ajout_Jeu = new Vue({

	el:"#ajout_Jeu",

	data : {

		jeu :{

			entree : '',
			message : 'ce nom de jeu existe déjà, il faut choisir un autre nom',
			displayMessage : false

		},
		
		ajout : false,
		jeuAjoute : false
	},

	methods : {

		envoiJeu : function(){

			axios({

				method: 'post',

				url : 'https://minesperium.herokuapp.com/api/games/new',

				data : {name : ajout_Jeu.jeu.entree}
			});

			ajout_Jeu.jeuAjoute = true;
			ajout_Jeu.entree ='';
		},

		jeu_Verif : function(){


		}
	}
})
