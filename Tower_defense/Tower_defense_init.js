function initialisation(){

	terrain  = new Terrain();

	switch (lvl){

		case 1: // chaque case represente un niveau, avec un nouveau terrain a chaque niveau


			proba = 0.05; // probabilité d'appartition d'un monstre : plus elle est petite, plus ils seront espacés
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']); // construction du chemin avec son point de départ et ce qui suit : "h" pour haut et etc...
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, image : "Amaury_Francou.png" , attenteVague : 0 },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, image : "Francois_Herve.png", attenteVague : 0 },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, image : "Antoine_Perrin.png", attenteVague : 0 } ]; // tableau des monstres, chaque ligne corespond à une vague
// attenteVague est le nb de frame entre la fin de la vague precedente et le debut de celle ci

		break;

		case 2: 
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d']);
		break;
	}	
	
	terrain.dessiner();
}