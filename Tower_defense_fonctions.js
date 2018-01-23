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