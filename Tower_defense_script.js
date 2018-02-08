window.onload = Tower_defense_script;
// utiliser des images, et tetes du bureau en boss

function Tower_defense_script(){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	nbCasesLargeur = 20;
	Taille_Cases = canvas.width / nbCasesLargeur; 
	var time = 50 ;
	var terrain  = new Terrain(context);

	initialisation(terrain, 1);


	var jeu = setInterval(run, time, terrain);

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