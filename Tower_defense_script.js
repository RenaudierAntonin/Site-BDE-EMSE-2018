window.onload = Tower_defense_script;
// utiliser des images, et tetes du bureau en boss

function Tower_defense_script(){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Money = document.getElementById("money");
	Vie = document.getElementById("vie");
	Score = document.getElementById("score");
	
	lvl = 1; // niveau actuel
	souris = { x : 0, y : 0}; // position de la souris
	type = 0; // type de monstre utilise dans la fonction generer
	
	FPS = 20;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.3 * Taille_Cases;
	time = Math.floor(1000/FPS) ;
	terrain  = new Terrain();
	joueur = {vie : 100, money : 1000, score : 0};
	tourelleSelectionnee = false;

	initialisation(terrain);

	var jeu = setInterval(run, time);

	canvas.addEventListener('mousedown', function() {

  		if(tourelleSelectionnee && tourelleSelectionnee.emplacement.disponible) {

    		terrain.tourelles.push(tourelleSelectionnee.copie());
    		joueur.money -= tourelleSelectionnee.prix;
    		tourelleSelectionnee.emplacement.libre = false;
    		tourelleSelectionnee = false;

  	}

  	canvas.addEventListener('mousemove', sourisPos, false); 


});
	/*var bouton_play = document.getElementById("Play_Pause");

	bouton_play.addEventListener('click',function(){

		if (jeu){
			//transformer l'image du bouton play
			clearInterval(jeu);
			jeu = false;
		}

		else{
			//transformer l'image du bouton play
			jeu = setInterval(run, time, terrain);
		}
		

	});*/




}