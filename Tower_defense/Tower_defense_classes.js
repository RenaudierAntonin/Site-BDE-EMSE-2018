
function Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, image, couleur){
	
	var comptInit = 1000 / frequenceTir; // a modifier lorsqu'on modifiera la frequence de tir
	this.compteur = 0; // frequence est le nb de tir par sec
	this.vitesse  = vitesse; // vitesse absolue des balles
	this.force = force;
	this.cible = false; // le monstre cible
	this.emplacement = emplacement; // c'est sa case
	this.niveau = 1;
	this.xp = 0;
	this.aire = aire; // aire de détéction de la tourelle, elle ne peut rien viser au dela
	this.direction = {x: 1, y: 0};
	this.coordonnees = this.emplacement.coordonnees;
	this.prix = prix;
	this.image = image
	this.couleur = couleur;

	this.cibler = function(){

		var distance = Infinity;

		for (var i = 0; i<terrain.monstres.length; i++){ // on parcour tout les monstres et on cible le plus proche si il est dans la zone de détéction

			var monstre = terrain.monstres[i];
			var d = Norme(this.coordonnees, monstre.coordonnees);		

			if (d < distance && d < this.aire){
		
				this.cible = monstre;
				distance = d;
			}
		}
	}

	this.tirer = function(){
 		
 		var d = Norme(this.coordonnees, this.cible.coordonnees); // c'est simplement la distance entre la tourelle et la cible
		this.direction.x = (this.cible.coordonnees.x - this.coordonnees.x)/ d;
		this.direction.y = (this.cible.coordonnees.y - this.coordonnees.y)/ d;

		
 		if (this.compteur <= 0){

 			var vitesseProjectile = {x: this.vitesse * this.direction.x, y : this.vitesse * this.direction.y};// calcul des coordonnées de vitesse pour la balle en fonction de la position du monstre
			terrain.projectiles.push(new Projectile(this, vitesseProjectile, this.cible));
			this.compteur = comptInit;
 		}

		this.compteur--;

		if (d > this.aire){ // on verifie que le monstre est bien dans la zone de tir avant le prochain tir

			this.cible = false;
		}
	} 

	
	this.setXP = function(xp){

		this.xp += xp;
		
		if (this.xp > this.niveau.xp){ //lorsqu'on dépasse la valeur seuil du passage de niveau de la tourelle

			this.niveau.next();
			this.evoluer(this.niveau.force, this.niveau.vitesse, this.niveau.frequence);
		}
	}

	this.evoluer = function(forceGagnee, vitesseGagnee, frequenceGagnee){ // fait évoluer la tourelle lorsqu'elle a assez de xp pour le niveau suivant

		this.niveau++;
		this.xp = 0;
		this.force += forceGagnee;
		this.vitesse += vitesseGagnee;
		this.frequence += frequenceGagnee;
		
	}

	this.dessiner = function(){
		
		context.drawImage(this.image, this.emplacement.coordonnees.x - Taille_Monstres, this.emplacement.coordonnees.y - Taille_Monstres, 2 * Taille_Monstres, 2 * Taille_Monstres);
		context.beginPath();
		context.arc(this.emplacement.coordonnees.x, this.emplacement.coordonnees.y, this.aire, 0, Math.PI*2, false);
		context.strokeStyle  = "black";
		context.stroke();
		context.closePath();
		
	}

	this.supprimer = function(){

		var i = terrain.tourelles.indexOf(this);
		terrain.tourelles.splice(i,1);
		delete (this);
	}
	
	this.copie = function(){
	
	var vitesse = this.vitesse; // vitesse absolue des balles
	var force = this.force;
	var emplacement = findCase({ x : this.emplacement.coordonnees.x, y : this.emplacement.coordonnees.y});
	var aire = this.aire; 
	var prix = this.prix;
	var image = this.image;
	var couleur = this.couleur
	return (new Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, image, couleur));
	}
};



function Projectile(tourelle, vitesse, cible){

	this.coordonnees = { x : tourelle.coordonnees.x, y : tourelle.coordonnees.y };
	this.vitesse = vitesse; // objet avec 2 propriétés : x et y
	this.v = tourelle.vitesse;
	this.degat = tourelle.force;
	this.tourelle = tourelle;
	this.cible = cible;

	this.avancer = function(){

		if (terrain.monstres.indexOf(this.cible) != -1){ // c'est gitan mais ça permet de regler un probleme incompris de suppression de monstre non désire

			var d = Norme(this.coordonnees, this.cible.coordonnees); // c'est simplement la distance entre la tourelle et la cible
			var dx = (this.cible.coordonnees.x - this.coordonnees.x)/ d;
			var dy = (this.cible.coordonnees.y - this.coordonnees.y)/ d;
			this.vitesse.x =  this.v * dx
			this.vitesse.y = this.v * dy;// calcul des coordonnées de vitesse pour la balle en fonction de la position du monstre
		}

		this.coordonnees.x += vitesse.x; // on ajoute directement les coordonnées de vitesse
		this.coordonnees.y += vitesse.y; // il faut imaginer que c'est en fait Vx*t commen en physique, mais on à pas de temps ici, ce sera des boucles d'execution donc dans notre monde dt est un entier vala
	
		if (this.coordonnees.x > canvas.width || this.coordonnees.x < 0 || this.coordonnees.y > canvas.height || this.coordonnees.y < 0){// il faut l'effacer lorsqu'il touche un monstre ou sort du canvas, et blesser le monstre
		
			this.supprimer();
		}
		else if (d < Taille_Monstres){

			this.cible.blesser(this);
			this.supprimer();
		}
	}

	this.dessiner = function(){

		context.beginPath();
		context.arc(this.coordonnees.x, this.coordonnees.y, 5, 0, Math.PI*2, false);
		context.fillStyle  = tourelle.couleur;
		context.fill();
	}

	this.supprimer = function(){

		var i = terrain.projectiles.indexOf(this);
		terrain.projectiles.splice(i,1); // PROBLEME ! le for dans l'update risque de buger
		delete (this);
	}
};




function Monstre(vitesse, force, type, vie, valeurXP, valeurMoney, coordonnees, image){

	this.vitesse = vitesse;
	this.force = force;
	this.coordonnees = coordonnees;
	this.type = type;
	this.vie = vie;
	this.direction = terrain.chemin.parselles[0];
	this.avancement = {parselle : 0, av : 0}; // le numéro de parselle et l'avancement en pixel sur celle ci

	this.avancer = function(){ // le monstre avance sur la parselle sur laqelle il se trouve avec une certaine vitesse, disjonction de cas selon le sens de la parselle
				
		this.coordonnees.x += vitesse * this.direction.x;
		this.coordonnees.y += vitesse * this.direction.y;
		this.avancement.av += vitesse;

		if (this.avancement.av > Taille_Cases){

			this.avancement.parselle++;

			if (this.avancement.parselle >= terrain.chemin.parselles.length){ // si le chemin est terminé, on réduit la vie du joueur

					joueur.vie -= this.force;
					Vie.innerText = joueur.vie;

					if (joueur.vie <= 0){

						Perdre();
					}

					this.supprimer();

			}
			else{ 

				this.avancement.av -= Taille_Cases;
				this.direction = terrain.chemin.parselles[this.avancement.parselle];
			}
		}	
	}

	this.blesser = function(projectile){

		this.vie -= projectile.degat; 

		if (this.vie <= 0){ // quand le monstre n'a plus de vie

			projectile.tourelle.setXP(valeurXP); // et on donne ses xp à la tourelle qui l'a tué

			Gain(valeurXP, valeurMoney);
			
			projectile.tourelle.cible = false;
			this.supprimer();// on le tue c'est à dire on le supprime du tableau des monstres, PROBLEME ! le for dans l'update risque de buger

		}
	}

	this.dessiner = function(){


		context.drawImage(image, this.coordonnees.x - Taille_Monstres, this.coordonnees.y - Taille_Monstres, 2 * Taille_Monstres, 2 * Taille_Monstres);
		context.beginPath(); // dessin du monstre
		context.fillStyle = "#33FF00"; // dessin de la jauge de vie
		context.fillRect(this.coordonnees.x - Taille_Monstres, this.coordonnees.y + Taille_Monstres + 4, 2 * Taille_Monstres * (this.vie/vie), 4); 
		context.fillStyle = "red";
		context.fillRect(this.coordonnees.x + Taille_Monstres, this.coordonnees.y + Taille_Monstres + 4, 2 * Taille_Monstres * ((this.vie/vie)-1),4);
		context.closePath();

		// ajouter une fonction qui rajoute la barre de vie
	}

	this.supprimer = function(){

		for(var k = 0; k< terrain.tourelles.length; k++){

			if(this === terrain.tourelles[k].cible){

				terrain.tourelles[k].cible = false;
			}
		}
		var i = terrain.monstres.indexOf(this);

		terrain.monstres.splice(i,1);
		delete (this);
	}
};



function Terrain(){ // l'objet qui contient tous les autres, le plan quoi

	this.tourelles = []; // tableau listant tous les objets tourelles
	this.monstres = []; // etc...
	this.chemin;
	this.cases = [] ;
	this.projectiles = [];

	var n = nbCasesLargeur;
	var m = (n * canvas.width) / canvas.height;
	var x0;
	var y0;

	for(var i = 0; i < n; i++){

		this.cases.push([]);
		x0 = Math.floor((i * Taille_Cases) + (Taille_Cases / 2));

		for(var j = 0; j < m; j++){ 

			y0 = Math.floor((j * Taille_Cases) + (Taille_Cases / 2));
			this.cases[i].push(new Case({x : x0, y: y0}));
		}
	}

	this.dessiner = function(){ // on dessine chaque élément, l'ordre est important ! on ne va pas dessiner le chemin par dessus le monstre par exemple
		
		context.beginPath();
		
		var pattern = context.createPattern(herbe, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
		context.closePath();
		

		this.chemin.dessiner();

		for(var i = 0; i<this.tourelles.length; i++){

			this.tourelles[i].dessiner();
		}

		for(var i = 0; i<this.monstres.length; i++){

			this.monstres[i].dessiner();
		}

		for(var i = 0; i<this.projectiles.length; i++){

			this.projectiles[i].dessiner();
		}
	}

	this.update = function(){ // fait avancer les monstres, les projectiles, tirer ou cibler les tourelles
		
		var tourelle; // evite de la déclarer à chaque passage de boucle

		for(var i = 0; i<this.tourelles.length; i++){

			tourelle = this.tourelles[i];

			if (tourelle.cible){

				tourelle.tirer() 
			}

			else{ 

				tourelle.cibler() 
			}
		}

		for(var i = 0; i<this.monstres.length; i++){

			this.monstres[i].avancer();
		}

		for(var i = 0; i<this.projectiles.length; i++){

			this.projectiles[i].avancer();

			/*if(projectil.colision){
				projectiles.splice(i,1).supprimer
				i--
				j--
			} */
		}

	}
};


function Case(coordonnees){ // on découpe le plan en carrés de taille egale sur lequel on peut placer nos objets

	this.coordonnees = coordonnees;
	this.disponible = true; //booléen qui indique si on peut y placer une tourelle ou non
	this.type; // pour le dessin de la case, herbe, roche, eau, parselle ...

	this.dessiner = function(image){

		context.beginPath();
		var pattern = context.createPattern(image, 'repeat');
        context.fillStyle = pattern;
		context.fillRect(Math.floor(this.coordonnees.x - (Taille_Cases/2)), Math.floor(this.coordonnees.y - (Taille_Cases/2)), Taille_Cases, Taille_Cases);
		context.closePath();
	}

};



function Niveau(){

};

function Chemin(debut, construction){ // c'est le chemin sur lequel vont avancer les monstres

	this.parselles = Convertir_chemin(construction); // on va essayer de contruire un chemin assez simplement avec une suite d'instructions : va à droite en au en bas...
	this.cases = [terrain.cases[debut.i][debut.j]];
	this.debut = { i : debut.i, j : debut.j };

	for(var k = 1; k<this.parselles.length; k++){// on marque la case actuelle et on calcule la suivante
			
		debut.i += this.parselles[k].x;
		debut.j += this.parselles[k].y;
		this.cases.push(terrain.cases[debut.i][debut.j]);	
		terrain.cases[debut.i][debut.j].disponible = false;
				
		}

	this.dessiner = function(){

		for(var k = 0; k < this.cases.length; k++){

			this.cases[k].dessiner(chemin);
		}
	}
};
