function initialisation(){

	terrain  = new Terrain();

	switch (lvl){

		case 1: // chaque case represente un niveau, avec un nouveau terrain a chaque niveau

			proba = 0.05; // probabilité d'appartition d'un monstre : plus elle est petite, plus ils seront espacés
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']); // construction du chemin avec son point de départ et ce qui suit : "h" pour haut et etc...
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 15, vitesse : 3, force : 1, vie : 100, valeurXP : 100, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Amaury Francou" , attenteVague : 50 },
						 { nb : 5, vitesse : 10, force : 1, vie : 200, valeurXP : 100, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 400, valeurXP : 100, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Antoine Perrin", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 400, valeurXP : 100, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Axel Roc", attenteVague : 200 },
						 { nb : 1, vitesse : 2, force : 5, vie : 10000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ]; // tableau des monstres, chaque ligne corespond à une vague
// attenteVague est le nb de frame entre la fin de la vague precedente et le debut de celle ci

		break;

		case 2: 
			proba = 0.05;
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d','b','b','b','b','b','b','b','b','d','d','d','d','d','d','h','h','h','g','g','g','g','h','h','h','d','d','d','d','d','d','b','b','b','b','b','b','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 15, vitesse : 3, force : 1, vie : 150, valeurXP : 200, valeurMoney : 2, coordonnees : {x : depart.x, y : depart.y}, nom : "Gabriel Chiche" , attenteVague : 50 },
						 { nb : 20, vitesse : 13, force : 1, vie : 300, valeurXP : 100, valeurMoney : 3, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 600, valeurXP : 100, valeurMoney : 5, coordonnees : {x : depart.x, y : depart.y}, nom : "Antoine Perrin", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 400, valeurXP : 100, valeurMoney : 5, coordonnees : {x : depart.x, y : depart.y}, nom : "Axel Roc", attenteVague : 200 },
						 { nb : 1, vitesse : 2, force : 1, vie : 10000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ];
		break;
	}	
	
	terrain.dessiner();
}
