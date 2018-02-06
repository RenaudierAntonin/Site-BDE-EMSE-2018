  

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
		dy = coordonnee2.y - coordonnee2.y;
	}

	var d = Math.sqrt(pow(dx,2) + pow(dy,2));
	return d;
}

function Convertir_chemin(chemin){ // renvoie un tableau de coordonnées correspondant à l'avancement coefficienté des parselles de chemin

	var x;
	var y;
	var convert = [];

	for (var i = 0; i < chemin.length; i++){

		switch(chemin[i]){

				case 'haut':
					x = 0;
					y = 1;
				break;

				case 'bas':
					x = 0;
					y = -1;
				break;

				case 'doite':
					x = 1;
					y = 0;
				break;

				case 'gauche':
					x = -1;
					y = 0;
				break;

				default:
					alert('formation chemin impossible');
				}

		convert.push(new Coordonnees(x,y, terrain));
	}

	return(convert);
}

