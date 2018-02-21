function run(){

	terrain.update();
	terrain.dessiner();

	if (tourelleSelectionnee){

		tourelleSelectionnee.dessiner(); 
	}

	finGeneration = genererMonstre();

	if (finGeneration && (terrain.monstres.length == 0)){

		lvl++;

		if (lvl < lvlMax){
 
			if (confirm("Niveau terminé, voulez vous allez au niveau suivant")){
			
				Niveau.innerText = lvl;
				initialisation();
				play_pause();
				//transformer l'image du bouton jeu
			} 
		}
		else {

			alert("Bravo ! Vous avez terminé le jeu épique de Mines'perium, vous pouvez passer au survival pour ameliorer votre score");
		}
		
	}
}

function Norme(coordonnee1,coordonnee2){ // calcule la norme d'une coordonnée, si l'argument facultatif coordonnee2 est ecrit : calule la distance entre les 2

	var dx;
	var dy;

	if (!coordonnee2){

		dx = coordonnee1.x;
		dy = coordonnee1.y;
	}

	else{

		dx = coordonnee1.x - coordonnee2.x;
		dy = coordonnee1.y - coordonnee2.y;
	}

	var d = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
	
	return d;
}

function Convertir_chemin(chemin){ // renvoie un tableau de coordonnées correspondant à l'avancement coefficienté des parselles de chemin

	var Cx;
	var Cy;
	var convert = [];

	for (var i = 0; i < chemin.length; i++){

		switch(chemin[i]){

				case 'h':
					Cx = 0;
					Cy = -1;
				break;

				case 'b':
					Cx = 0;
					Cy = 1;
				break;

				case 'd':
					Cx = 1;
					Cy = 0;
				break;

				case 'g':
					Cx = -1;
					Cy = 0;
				break;

				default:
					alert('formation chemin impossible');
				}

		convert.push({x: Cx, y: Cy});
	}

	return(convert);
}

function findCase(coordonnees){ // retourne la case correspondant au coordonnées (on peut utiliser la matrice terrain.cases en trouvant d'abord les coordonées dans cette matrice)
		
		var i = Math.floor(coordonnees.x / Taille_Cases);
		var j = Math.floor(coordonnees.y / Taille_Cases);
		 
		return(terrain.cases[i][j]);
}

function sourisPos(e) {
  var rect = canvas.getBoundingClientRect();
  souris = {
    x : e.clientX - rect.left,
    y : e.clientY - rect.top
  };

  if (tourelleSelectionnee){

  	tourelleSelectionnee.emplacement = findCase(souris);
  }
} 

function selectionnerTourelle(n){

	switch (n){ // changer les couleurs pour les differentes tourelles

		case 1:

			var frequenceTir = 100;
 			var vitesse = 10;
			var force = 100;
			var emplacement = findCase(souris);
			var aire = 100;
			var prix = 10;
			tourelleSelectionnee = new Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, "#33FF00");

		break;

		case 2:

			var frequenceTir = 100;
 			var vitesse = 10;
			var force = 100;
			var emplacement = findCase(souris);
			var aire = 100;
			var prix = 10;
			tourelleSelectionnee = new Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, "red");
	
		break;

		case 3:

			var frequenceTir = 50;
 			var vitesse = 10;
			var force = 100;
			var emplacement = findCase(souris);
			var aire = 100;
			var prix = 10;
			tourelleSelectionnee = new Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, "blue");

		break;

		case 4: 
			
			var frequenceTir = 50;
 			var vitesse = 10;
			var force = 100;
			var emplacement = findCase(souris);
			var aire = 100;
			var prix = 10;
			tourelleSelectionnee = new Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, "#660099");

		break;
	}
}

function genererMonstre(){

	var r = Math.random();

	if (type < Monstres.length){

		if (Monstres[type].nb <= 0){
			
			type++;
		}
		if (r < proba){

			var monstre = Monstres[type];
			terrain.monstres.push(new Monstre(monstre.vitesse, monstre.force, monstre.type, monstre.vie, monstre.valeurXP, monstre.valeurMoney, {x : monstre.coordonnees.x, y : monstre.coordonnees.y}, monstre.couleur));
			monstre.nb--;
		}
		return(false);
	}
	return(true);
}

function play_pause(){

	if (jeu){
			
		bouton_play.innerText = "Play";	
		//transformer l'image du bouton play
		clearInterval(jeu);
		jeu = false;
	}

	else{

		bouton_play.innerText = "Pause";	
		//transformer l'image du bouton play
		jeu = setInterval(run, time, terrain);
	}
}
