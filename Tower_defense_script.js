window.onload = Tower_defense_script;
// utiliser des images, et tetes du bureau en boss

// penser a creer un super pouvoir, qui genere une tete de edme parcourant le chemin a lenvert pour buter tout les monstres

function Tower_defense_script(){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Money = document.getElementById("money");
	Vie = document.getElementById("vie");
	Score = document.getElementById("score");
	Niveau = document.getElementById("niveau");

	lvl = 1; // niveau actuel
	lvlMax = 10;
	souris = { x : 0, y : 0}; // position de la souris
	type = 0; // type de monstre utilise dans la fonction generer
	
	FPS = 20;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.3 * Taille_Cases;
	time = Math.floor(1000/FPS);

	joueur = {vie : 2, money : 10, score : 0};

	Vie.innerText = joueur.vie;
	Money.innerText = joueur.money;
	Score.innerText = joueur.score;
	Niveau.innerText = lvl;

	tourelleSelectionnee = false;

	initialisation();

	jeu = false;

	canvas.addEventListener('mousedown', function() {

  		if(tourelleSelectionnee && tourelleSelectionnee.emplacement.disponible && joueur.money >= tourelleSelectionnee.prix) {

    		terrain.tourelles.push(tourelleSelectionnee.copie());
    		joueur.money -= tourelleSelectionnee.prix;
    		Money.innerText = joueur.money;
    		tourelleSelectionnee.emplacement.disponible = false; 
    		tourelleSelectionnee = false;

  	}

  	canvas.addEventListener('mousemove', sourisPos, false); 


});
	bouton_play = document.getElementById("Play_Pause");

	bouton_play.addEventListener('click',play_pause);
}