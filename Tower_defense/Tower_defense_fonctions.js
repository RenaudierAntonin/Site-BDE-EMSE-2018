function run(){

	terrain.update();
	terrain.dessiner();

	if (tourelleSelectionnee){

		tourelleSelectionnee.dessiner(); 
	}

	var finGeneration = genererMonstre();

	if (finGeneration && (terrain.monstres.length == 0)){
		
		play_pause();

		axios.post("https://minesperium.herokuapp.com/api/scores/addscore/" + id + "/TowerDefense/" + joueur.score);

		if (lvl < lvlMax){

			alert("Bravo, vous passez au niveau suivant");
 			lvl++;
			Niveau.innerText = lvl;
			initialisationTerrain();

		 
		}
		else {

			alert("Bravo ! Vous avez terminé le jeu épique de Mines'perium, repassez une prochaine fois pour plus de niveaux")

				bouton_play.innerText = "Recommencer";
				initialisationJeu();
				initialisationTerrain();
		}
		
	}
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
		dy = coordonnee1.y - coordonnee2.y;
	}

	var d = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
	
	return d;
}

function Convertir_chemin(chemin){ // renvoie un tableau de coordonnées correspondant à l'avancement coefficienté des parselles de chemin

	var Cx;
	var Cy;
	var convert = [];

	for (var i = 0; i < chemin.length; i++){

		switch(chemin[i]){

				case 'h':
					Cx = 0;
					Cy = -1;
				break;

				case 'b':
					Cx = 0;
					Cy = 1;
				break;

				case 'd':
					Cx = 1;
					Cy = 0;
				break;

				case 'g':
					Cx = -1;
					Cy = 0;
				break;

				default:
					alert('formation chemin impossible');
				}

		convert.push({x: Cx, y: Cy});
	}

	return(convert);
}

function findCase(coordonnees){ // retourne la case correspondant au coordonnées (on peut utiliser la matrice terrain.cases en trouvant d'abord les coordonées dans cette matrice)
		
		var i = Math.floor(coordonnees.x / Taille_Cases);
		var j = Math.floor(coordonnees.y / Taille_Cases);
		 
		return(terrain.cases[i][j]);
}

function sourisPos(e) {
  var rect = canvas.getBoundingClientRect();
  souris = {
    x : e.clientX - rect.left,
    y : e.clientY - rect.top
  };

  if (tourelleSelectionnee){

  	tourelleSelectionnee.emplacement = findCase(souris);
  }
} 

function selectionnerTourelle(n){

	if (jeu){

		var t = Tourelles[n];
		var emplacement = findCase(souris);
		tourelleSelectionnee = new Tourelle(t.frequenceTir,
											t.vitesse, 
											t.force, 
											emplacement, 
											t.aire, 
											t.prix, 
											t.image,
											t.couleur);
	}
}

function genererMonstre(){


	if (type < Monstres.length){ 

		compteur--;

		if (Monstres[type].nb <= 0){
			
			type++;
			Message.innerText = "Attention ! Une vague de " + Monstres[type].nom + " en approche ! ";
			monstre = Monstres[type];
			compteur = monstre.attenteVague;	
		}

		if (compteur < 0){

			var r = Math.random();

			if (r < proba){

				compteur = Taille_Cases / (4 * monstre.vitesse); // permet de definir le compteur de façon à ne pas produire un monstre avant que le dernier sorti ai parcouru une case
				terrain.monstres.push(new Monstre(monstre.vitesse, monstre.force, monstre.type, monstre.vie, monstre.valeurXP, monstre.valeurMoney, {x : monstre.coordonnees.x, y : monstre.coordonnees.y}, monstre.image));
				monstre.nb--;
			}

		}
		return(false);	
	}
	return(true);
}

function play_pause(e,nextLvl){

	if (jeu){
			
		bouton_play.innerText = "Play";	
		clearInterval(jeu);
		jeu = false;
	}

	else{

		bouton_play.innerText = "Pause";	

		jeu = setInterval(run, time);
	}
	if(nextLvl){

		bouton_play.innerText = "Niveau suivant";
	}
}

function Perdre(){
	
	play_pause();
	axios.post("https://minesperium.herokuapp.com/api/scores/addscore/" + id + "/TowerDefense/" + joueur.score);

	alert("Perdu ! Expelliar'mines vous a tué");

	initialisationJeu();
	initialisationTerrain();
}
function Gain(valeurXP, valeurMoney){

			joueur.money += valeurMoney;
			joueur.score += valeurXP;
			Money.innerText = joueur.money;
			Score.innerText = joueur.score;

			if(joueur.score > joueur.meilleurScore){

				joueur.meilleurScore = joueur.score;
				MeilleurScore.innerText = joueur.meilleurScore;
			}
}