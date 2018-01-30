window.onload = Tower_defense_script;


function Tower_defense_script(){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	var nbCasesLargeur = 20;
	var Taille_Cases = canvas.width / nbCasesLargeur;
	var time = 100 ;
	var jeu = lancerJeu(time, terrain);

	


	bouton_play = document.getElementById("Play_Pause");

	bouton_play.addEventListener('click',function(){

		if (jeu){
			//transformer l'image du bouton play
			clearInterval(jeu);
		}

		else{
			//transformer l'image du bouton play
			lancerJeu(time, terrain);
		}
		

	});




}