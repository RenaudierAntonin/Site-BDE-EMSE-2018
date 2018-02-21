function initialisation(){

	terrain  = new Terrain();

	switch (lvl){

		case 1:
			proba = 0.05;
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; // changer la couleur des different monstres
			Monstres = [ { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, couleur : "black" },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, couleur : "blue" },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, couleur : "red" } ];

		break;

		case 2: 
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d']);
		break;
	}	
}