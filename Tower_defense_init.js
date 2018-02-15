function initialisation(){
	switch (lvl){

		case 1:
			proba = 0.05;
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']);
			depart = {x : 1.5 * Taille_Cases, y : -0.5 * Taille_Cases};
			Monstres = [ { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y} },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}  },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 100, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}  } ];

		break;

		case 2: 
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d']);
		break;
	}	
}