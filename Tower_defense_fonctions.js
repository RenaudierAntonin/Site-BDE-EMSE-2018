  

function run(terrain){

	terrain.update();
	terrain.dessiner(context);
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