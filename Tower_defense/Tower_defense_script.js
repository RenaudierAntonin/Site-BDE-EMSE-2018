// transformer les boutons des tourelle, ajouter des jauges au lieu de chiffres


window.onload = Tower_defense_script;
	

function Tower_defense_script(){


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Money = document.getElementById("money");
	Vie = document.getElementById("vie");
	Score = document.getElementById("score");
	MeilleurScore = document.getElementById("MeilleurScore");
	Niveau = document.getElementById("niveau");
	bouton_play = document.getElementById("Play_Pause");
	bouton_vitesse = document.getElementById("Accelerer_Ralentir");
	bouton_edmoune = document.getElementById("Edmoune");
	Rang = document.getElementById("rang");
	Message = document.getElementById("Message");

	
	lvlMax = 3;
	souris = { x : 0, y : 0}; // position de la souris


	FPS = 20;
	vitesseJeu = 1;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.45 * Taille_Cases;
	time = Math.floor(1000/FPS);
	compteurEdmouneInit = 60  * FPS;

	herbe = new Image();
    herbe.src = 'graphisme/terrain/herbe.jpg';

	chemin = new Image();
    chemin.src = 'graphisme/terrain/chemin.jpg';

    Edme = new Image();
    Edme.src = 'graphisme/monstre/Edmoune.png';

    var TourelleGauloise = new Image();
    TourelleGauloise.src = 'graphisme/tourelles/gauloise.png';

    var TourelleRomaine = new Image();
    TourelleRomaine.src = 'graphisme/tourelles/romaine.png';

    var TourelleViking = new Image();
    TourelleViking.src = 'graphisme/tourelles/viking.png';

    var TourelleEgyptienne = new Image();
    TourelleEgyptienne.src = 'graphisme/tourelles/egyptienne.png';

   /* chemin.onload = function(){

    	chemin.width = Taille_Cases;
    	chemin.height = Taille_Cases;  //pk ca fait rien ?
    }
*/ 

	tourelleSelectionnee = false;
	SuperEdmoune = false;

	initialisationJeu();
	initialisationTerrain();


	Tourelles = [
		{frequenceTir: 2000, vitesse: 200, force: 40, aire: 100, prix: 20, image : TourelleGauloise, couleur : "#33FF00", nom : "Menhir Gaulois"},
		{frequenceTir: 3600, vitesse: 400, force: 25, aire: 200, prix: 70, image : TourelleRomaine, couleur : "red", nom : "Tour Romaine"},
		{frequenceTir: 1400, vitesse: 200, force: 125, aire: 100, prix: 100, image : TourelleViking, couleur : "blue", nom : "Drakar Viking"},
		{frequenceTir: 3000, vitesse: 400, force: 250, aire: 200, prix: 500, image : TourelleEgyptienne, couleur : "#ffd60c", nom : "Pyramide Egyptienne"}
	];

	var tourelles = new Vue({

	el:"#tourelles",

	data: {Tourelles : Tourelles}
});

	alert('Attention ! Des mages noirs tentent de pénétrer la ME, malgré leurs airs fragiles et innocents ils sont très dangeureux... Cliquez sur les tourelles de Mines\'perium pour les placer sur le terrain et defendez nous de cette attaque');

	EdmeVue = new Vue({

		el : "#Edmoune",

		data : { afficheBouton : false,
				 compteurEdmoune : compteurEdmouneInit,
				 EdmouneActivated : false
				}
	})


	canvas.addEventListener('click', function() {

		if (tourelleSelectionnee){

			if(joueur.money < tourelleSelectionnee.prix){

				alert('Fonds insuffisants ! ');
			}

			else{
				
				if(tourelleSelectionnee.emplacement.disponible) {

    				terrain.tourelles.push(tourelleSelectionnee.copie());
    				joueur.money -= tourelleSelectionnee.prix;
    				Money.innerText = joueur.money;
    				tourelleSelectionnee.emplacement.disponible = false; 
    				tourelleSelectionnee = false;

  				}
			}
		}
});

	canvas.addEventListener('mousemove', sourisPos); 

	bouton_play.addEventListener('click',play_pause, false);
	bouton_vitesse.addEventListener('click', changeVitesse); 

}