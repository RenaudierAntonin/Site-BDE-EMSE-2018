window.onload = Tower_defense_script;

// penser a creer un super pouvoir, qui genere une tete de edme parcourant le chemin a lenvert pour buter tout les monstres, ou les viking qui glacent, les romain qui brulent
// trouver un moyen de focus sur le canvas (avec une image play au depart et un addEventListener sur le focus de l'écran qui dessine le canvas et fait play)

function Tower_defense_script(){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Money = document.getElementById("money");
	Vie = document.getElementById("vie");
	Score = document.getElementById("score");
	Niveau = document.getElementById("niveau");

	herbe = new Image();
    herbe.src = 'graphisme/terrain/herbe.jpg';


	jeu = false;
	lvl = 1; // niveau actuel
	lvlMax = 10;
	souris = { x : 0, y : 0}; // position de la souris
	

	FPS = 20;
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	Taille_Monstres = 0.45 * Taille_Cases;
	time = Math.floor(1000/FPS);

	chemin = new Image();
    chemin.src = 'graphisme/terrain/chemin.jpg';
    console.log(chemin.width);
    console.log(chemin.height);
    chemin.onload = function(){

    	chemin.width = Taille_Cases;
    	chemin.height = Taille_Cases;
    }
    
    console.log(chemin.width);
    console.log(chemin.height);

	

	joueur = {vie : 20, money : 50, score : 0};

	Vie.innerText = joueur.vie;
	Money.innerText = joueur.money;
	Score.innerText = joueur.score;
	Niveau.innerText = lvl;

	tourelleSelectionnee = false;

	initialisation();
	
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
		
  	

  	canvas.addEventListener('mousemove', sourisPos, false); 


});
	bouton_play = document.getElementById("Play_Pause");

	bouton_play.addEventListener('click',play_pause);
}
