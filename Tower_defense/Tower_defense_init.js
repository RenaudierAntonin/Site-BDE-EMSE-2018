function initialisation(){

	terrain  = new Terrain();
	type = 0;
	compteur = 0;


	switch (lvl){

		case 1: // chaque case represente un niveau, avec un nouveau terrain a chaque niveau

			proba = 0.05; // probabilité d'appartition d'un monstre : plus elle est petite, plus ils seront espacés
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']); // construction du chemin avec son point de départ et ce qui suit : "h" pour haut et etc...
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 15, vitesse : 3, force : 1, vie : 100, valeurXP : 1, valeurMoney : 8, coordonnees : {x : depart.x, y : depart.y}, nom : "Amaury Francou" , attenteVague : 50 },
						 { nb : 5, vitesse : 10, force : 1, vie : 120, valeurXP : 2, valeurMoney : 8, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 300, valeurXP : 2, valeurMoney : 8, coordonnees : {x : depart.x, y : depart.y}, nom : "Antoine Perrin", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 300, valeurXP : 2, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Axel Roc", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 800, valeurXP : 3, valeurMoney : 10, coordonnees : {x : depart.x, y : depart.y}, nom : "Mathilde Bonnichon", attenteVague : 200 },
						 { nb : 1, vitesse : 2, force : 5, vie : 12000, valeurXP : 300, valeurMoney : 100, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ]; // tableau des monstres, chaque ligne corespond à une vague
// attenteVague est le nb de frame entre la fin de la vague precedente et le debut de celle ci

		break;

		case 2: 

			proba = 0.03;
			terrain.chemin = new Chemin({i : 1, j: 0}, ['b','b','b','b','b','d','d','d','d','d','b','b','d','d','d','d','d','d','b','b','d','d','d','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 10, vitesse : 3, force : 1, vie : 150, valeurXP : 1, valeurMoney : 9, coordonnees : {x : depart.x, y : depart.y}, nom : "Gabriel Chiche" , attenteVague : 50 },
						 { nb : 10, vitesse : 10, force : 1, vie : 120, valeurXP : 2, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 3, vitesse : 3, force : 3, vie : 1000, valeurXP : 10, valeurMoney : 20, coordonnees : {x : depart.x, y : depart.y}, nom : "Isabelle De Monteil", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 400, valeurXP : 3, valeurMoney : 5, coordonnees : {x : depart.x, y : depart.y}, nom : "Jean Manuel Cabrillana", attenteVague : 50 },
						 { nb : 1, vitesse : 2, force : 5, vie : 8000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ];

		break;

		case 3: 

			proba = 0.07;
			terrain.chemin = new Chemin({i : 1, j: 0}, ['b','b','b','b','b','b','b','b','b','d','d','d','d','d','d','d','d','h','h','h','g','g','g','g','h','h','h','d','d','d','d','d','d','d','d','d','b','b','b','b','b','b','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 25, vitesse : 3, force : 1, vie : 150, valeurXP : 1, valeurMoney : 9, coordonnees : {x : depart.x, y : depart.y}, nom : "Gabriel Chiche" , attenteVague : 50 },
						 { nb : 10, vitesse : 9, force : 1, vie : 150, valeurXP : 2, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 3, vitesse : 3, force : 3, vie : 1000, valeurXP : 10, valeurMoney : 20, coordonnees : {x : depart.x, y : depart.y}, nom : "Isabelle De Monteil", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 450, valeurXP : 3, valeurMoney : 5, coordonnees : {x : depart.x, y : depart.y}, nom : "Jean Manuel Cabrillana", attenteVague : 200 },
						 { nb : 2, vitesse : 2, force : 5, vie : 12000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ];
		break;
			
	}	


	monstre = Monstres[type];
	var lienImg = monstre.nom.split(' ').join('_') + ".png";
	monstre.image = new Image();
	monstre.image.src = "graphisme/monstre/" + lienImg;
	terrain.dessiner();
}
