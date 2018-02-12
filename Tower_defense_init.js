function initialisation(terrain, lvl){
	switch (lvl){

		case 1:
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b'] , terrain);
			terrain.monstres = [new Monstre(3, 1, 1, 300, terrain, 100, {x : 1.5 * Taille_Cases, y : -0.5 * Taille_Cases}), new Monstre(2, 1, 1, 1000, terrain, 100, {x : 1.5 * Taille_Cases, y : -0.5 * Taille_Cases})];
			terrain.tourelles = [new Tourelle(100, 20, 20, terrain, terrain.cases[4][4], 120), new Tourelle(100, 20, 20, terrain, terrain.cases[3][6], 120)];
		break;

		case 2: 
			terrain.chemin = new Chemin({i : 1, j: 0}, ['d','d'], terrain);
		break;
	}	
}