window.onload = Tower_defense_script;

// penser a creer un super pouvoir, qui genere une tete de edme parcourant le chemin a lenvert pour buter tout les monstres, ou les viking qui glacent, les romain qui brulent

// transformer les boutons des tourelle, ajouter des jauges au lieu de chiffres

function Tower_defense_script(){


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Money = document.getElementById("money");
	Vie = document.getElementById("vie");
	Score = document.getElementById("score");
	Niveau = document.getElementById("niveau");
	bouton_play = document.getElementById("Play_Pause");

	herbe = new Image();
    herbe.src = 'graphisme/terrain/herbe.jpg';


	
	lvlMax = 10;
	souris = { x : 0, y : 0}; // position de la souris
	

	FPS = 20;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.45 * Taille_Cases;
	time = Math.floor(1000/FPS);

	chemin = new Image();
    chemin.src = 'graphisme/terrain/chemin.jpg';

    chemin.onload = function(){

    	chemin.width = Taille_Cases;
    	chemin.height = Taille_Cases;
    }


	tourelleSelectionnee = false;

	initialisationJeu();
	initialisationTerrain();



	Tourelles = [
		{frequenceTir: 100, vitesse: 10, force: 50, aire: 100, prix: 20, couleur : "#33FF00"},
		{frequenceTir: 200, vitesse: 20, force: 20, aire: 100, prix: 50, couleur : "red"},
		{frequenceTir: 70, vitesse: 10, force: 250, aire: 100, prix: 50, couleur : "blue"},
		{frequenceTir: 150, vitesse: 20, force: 200, aire: 100, prix: 200, couleur : "#ffd60c"}
	];

	var tourelles = new Vue({

	el:"#tourelles",

	data: {Tourelles : Tourelles}
});

	alert('Attention ! Des mages noirs tentent de pénétrer la ME, même sous leur airs fragiles et innocents ils sont très dangeureux... Cliquez sur les tourelles de Mines\'perium pour les placer sur le terrain et defendez nous de cette attaque');



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

	canvas.addEventListener('mousemove', sourisPos, false); 

	bouton_play.addEventListener('click',play_pause);
}
