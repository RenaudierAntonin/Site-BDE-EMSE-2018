function initialisation(terrain, lvl){
	switch (lvl){

		case 1:
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b'] , terrain);
			terrain.monstres = [new Monstre(5, 1, 1, 100, terrain, 100, new Coordonnees(1.5 * Taille_Cases, -0.5 * Taille_Cases,terrain))]
		break;

		case 2: 
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d'], terrain);
		break;
	}	
}