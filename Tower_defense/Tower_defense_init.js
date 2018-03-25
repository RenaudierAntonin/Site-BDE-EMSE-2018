function initialisationTerrain(){

	terrain  = new Terrain();
	type = 0;
	compteur = 0;



	switch (lvl){

		case 1: // chaque case represente un niveau, avec un nouveau terrain a chaque niveau

			proba = 0.05; // probabilité d'appartition d'un monstre : plus elle est petite, plus ils seront espacés
			terrain.chemin = new Chemin({i : 1, j : 0}, ['b','b','b','d','d','b','b','b','d','d','d','h','h','h','d','d','d','b','b','b','b','d','d','d','b','b','b','b','b']); // construction du chemin avec son point de départ et ce qui suit : "h" pour haut et etc...
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 15, vitesse : 4, force : 1, vie : 70, valeurXP : 1, valeurMoney : 8, coordonnees : {x : depart.x, y : depart.y}, nom : "Amaury Francou" , attenteVague : 50 },
						 { nb : 5, vitesse : 10, force : 1, vie : 100, valeurXP : 2, valeurMoney : 12, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 10, vitesse : 3, force : 1, vie : 300, valeurXP : 2, valeurMoney : 10, coordonnees : {x : depart.x, y : depart.y}, nom : "Antoine Perrin", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 300, valeurXP : 2, valeurMoney : 10, coordonnees : {x : depart.x, y : depart.y}, nom : "Axel Roc", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 500, valeurXP : 3, valeurMoney : 15, coordonnees : {x : depart.x, y : depart.y}, nom : "Mathilde Bonnichon", attenteVague : 200 },
						 { nb : 1, vitesse : 2, force : 5, vie : 10000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ]; // tableau des monstres, chaque ligne corespond à une vague
// attenteVague est le nb de frame entre la fin de la vague precedente et le debut de celle ci

		break;

		case 2: 

			joueur.money += 50;
			joueur.vie += 5;
			Money.innerText = joueur.money;
			proba = 0.03;
			terrain.chemin = new Chemin({i : 1, j: 0}, ['b','b','b','b','b','d','d','d','d','d','b','b','d','d','d','d','d','d','b','b','d','d','d','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 10, vitesse : 3, force : 1, vie : 150, valeurXP : 1, valeurMoney : 9, coordonnees : {x : depart.x, y : depart.y}, nom : "Gabriel Chiche" , attenteVague : 50 },
						 { nb : 10, vitesse : 10, force : 1, vie : 120, valeurXP : 2, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 3, vitesse : 3, force : 3, vie : 1000, valeurXP : 10, valeurMoney : 20, coordonnees : {x : depart.x, y : depart.y}, nom : "Isabelle De Monteil", attenteVague : 200 },
						 { nb : 10, vitesse : 4, force : 1, vie : 400, valeurXP : 3, valeurMoney : 15, coordonnees : {x : depart.x, y : depart.y}, nom : "Jean Manuel Cabrillana", attenteVague : 50 },
						 { nb : 2, vitesse : 2, force : 5, vie : 10000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ];

		break;

		case 3: 

			joueur.money += 100;
			joueur.vie += 5;
			Money.innerText = joueur.money;
			proba = 0.07;
			terrain.chemin = new Chemin({i : 1, j: 0}, ['b','b','b','b','b','b','b','b','b','d','d','d','d','d','d','d','d','h','h','h','g','g','g','g','h','h','h','d','d','d','d','d','d','d','d','d','b','b','b','b','b','b','b','b','b']);
			depart = {x : (terrain.chemin.debut.i - terrain.chemin.parselles[0].x + 0.5) * Taille_Cases, y : (terrain.chemin.debut.j - terrain.chemin.parselles[0].y + 0.5) * Taille_Cases}; 
			Monstres = [ { nb : 25, vitesse : 3, force : 1, vie : 150, valeurXP : 1, valeurMoney : 9, coordonnees : {x : depart.x, y : depart.y}, nom : "Gabriel Chiche" , attenteVague : 50 },
						 { nb : 10, vitesse : 9, force : 1, vie : 150, valeurXP : 2, valeurMoney : 7, coordonnees : {x : depart.x, y : depart.y}, nom : "Etienne Saby", attenteVague : 200 },
						 { nb : 3, vitesse : 3, force : 3, vie : 1000, valeurXP : 10, valeurMoney : 20, coordonnees : {x : depart.x, y : depart.y}, nom : "Isabelle De Monteil", attenteVague : 200 },
						 { nb : 20, vitesse : 4, force : 1, vie : 450, valeurXP : 3, valeurMoney : 15, coordonnees : {x : depart.x, y : depart.y}, nom : "Jean Manuel Cabrillana", attenteVague : 200 },
						 { nb : 3, vitesse : 2, force : 5, vie : 10000, valeurXP : 300, valeurMoney : 200, coordonnees : {x : depart.x, y : depart.y}, nom : "Francois Herve", attenteVague : 200 } ];
		break;
		
		default: 

			alert('Ce niveau n\'a pas encore été créé, revenez plus tard pour améliorer votre score');
	}	

	for(var i = 0; i < Monstres.length; i++){

		var M = Monstres[i]
		var lienImg = M.nom.split(' ').join('_') + ".png";
		M.image = new Image();
		M.image.src = "graphisme/monstre/" + lienImg;
		
	}

	monstre = Monstres[0];
	Message.innerText = "Attention ! Une vague de " + Monstres[type].nom + " en approche ! ";
	terrain.dessiner();

			
}

function initialisationJeu(){

	jeu = false;
	lvl = 1; // niveau actuel
	joueur = {vie : 5, money : 40, score : 0, meilleurScore: 0, rang : 0};

	if (login){

		axios.get("https://minesperium.herokuapp.com/api/users/ranking/game/171").then(function(reponse){

			users = reponse.data;
			var i = 0;
			var user;

			while (i < users.length && (joueur.rang == 0)){

				user = users[i];

				if (user.pseudo == login){

					joueur.meilleurScore = user.value;
					joueur.rang = i+1;
				}

				i++;

			}
			id = user.id;
			pseudo = user.pseudo;
			MeilleurScore.innerText = joueur.meilleurScore;
			Rang.innerText = joueur.rang;
		})
	}
	
	Vie.innerText = joueur.vie;
	Money.innerText = joueur.money;
	Score.innerText = joueur.score;
	Niveau.innerText = lvl;
}