

// penser a creer un super pouvoir, qui genere une tete de edme parcourant le chemin a lenvert pour buter tout les monstres, ou les viking qui glacent, les romains qui brulent

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
	Rang = document.getElementById("rang");
	Message = document.getElementById("Message");
	
	lvlMax = 3;
	souris = { x : 0, y : 0}; // position de la souris

	FPS = 20;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.45 * Taille_Cases;
	time = Math.floor(1000/FPS);

	herbe = new Image();
    herbe.src = 'graphisme/terrain/herbe.jpg';

	chemin = new Image();
    chemin.src = 'graphisme/terrain/chemin.jpg';

    var TourelleGauloise = new Image();
    TourelleGauloise.src = 'graphisme/tourelles/gauloise.png';

    var TourelleRomaine = new Image();
    TourelleRomaine.src = 'graphisme/tourelles/romaine.png';

    var TourelleViking = new Image();
    TourelleViking.src = 'graphisme/tourelles/viking.png';

    var TourelleEgyptienne = new Image();
    TourelleEgyptienne.src = 'graphisme/tourelles/egyptienne.png';

    chemin.onload = function(){

    	chemin.width = Taille_Cases;
    	chemin.height = Taille_Cases;
    }


	tourelleSelectionnee = false;

	initialisationJeu();
	initialisationTerrain();


	Tourelles = [
		{frequenceTir: 100, vitesse: 10, force: 40, aire: 100, prix: 20, image : TourelleGauloise, couleur : "#33FF00", nom : "Menhir Gaulois"},
		{frequenceTir: 180, vitesse: 20, force: 25, aire: 200, prix: 70, image : TourelleRomaine, couleur : "red", nom : "Tour Romaine"},
		{frequenceTir: 70, vitesse: 10, force: 125, aire: 100, prix: 100, image : TourelleViking, couleur : "blue", nom : "Drakar Viking"},
		{frequenceTir: 150, vitesse: 20, force: 250, aire: 200, prix: 500, image : TourelleEgyptienne, couleur : "#ffd60c", nom : "Pyramide Egyptienne"}
	];

	var tourelles = new Vue({

	el:"#tourelles",

	data: {Tourelles : Tourelles}
});

	alert('Attention ! Des mages noirs tentent de pénétrer la ME, malgré leurs airs fragiles et innocents ils sont très dangeureux... Cliquez sur les tourelles de Mines\'perium pour les placer sur le terrain et defendez nous de cette attaque');



	canvas.addEventListener('mousedown', function() {

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

}