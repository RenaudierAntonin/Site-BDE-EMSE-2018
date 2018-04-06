
function Tourelle(frequenceTir, vitesse, force, emplacement, aire, prix, image, couleur){
	
	var comptInit = (1000*FPS) / frequenceTir; // a modifier lorsqu'on modifiera la frequence de tir
	this.compteur = 0; // frequence est le nb de tir par sec
	this.vitesse  = vitesse / FPS; // vitesse absolue des balles
	this.force = force;
	this.cible = false; // le monstre cible
	this.emplacement = emplacement; // c'est sa case
	this.xp = 0;
	this.aire = aire; // aire de détéction de la tourelle, elle ne peut rien viser au dela
	this.direction = {x: 1, y: 0};
	this.coordonnees = this.emplacement.coordonnees;
	this.prix = prix;
	this.image = image
	this.couleur = couleur;
	this.active = false;

	this.cibler = function(){

		var distance = Infinity;

		for (var i = 0; i<terrain.monstres.length; i++){ // on parcour tout les monstres et on cible le plus proche si il est dans la zone de détéction

			var monstre = terrain.monstres[i];
			var d = Norme(this.coordonnees, monstre.coordonnees);		

			if (d < distance && d < this.aire){
		
				this.cible = monstre;
				monstre.tourelles.push(this);
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

		this.compteur-= vitesseJeu;

		if (d > this.aire){ // on verifie que le monstre est bien dans la zone de tir avant le prochain tir

			this.cible = false;
		}
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
	
	var emplacement = findCase({ x : this.emplacement.coordonnees.x, y : this.emplacement.coordonnees.y});

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
			this.vitesse.x =  this.v * dx; 
			this.vitesse.y = this.v * dy;// calcul des coordonnées de vitesse pour la balle en fonction de la position du monstre
		}

		this.coordonnees.x += vitesseJeu * this.vitesse.x; // on ajoute directement les coordonnées de vitesse
		this.coordonnees.y += vitesseJeu * this.vitesse.y; // il faut imaginer que c'est en fait Vx*t commen en physique, mais on à pas de temps ici, ce sera des boucles d'execution donc dans notre monde dt est un entier vala
	
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
		context.closePath();
	}

	this.supprimer = function(){

		var i = terrain.projectiles.indexOf(this);
		terrain.projectiles.splice(i,1); // PROBLEME ! le for dans l'update risque de buger
		delete (this);
	}
};




function Monstre(vitesse, force, vie, valeurXP, valeurMoney, coordonnees, image){

	this.vitesse = vitesse / FPS;
	this.force = force;
	this.coordonnees = {x : coordonnees.x, y : coordonnees.y};
	this.vie = vie;
	this.direction = terrain.chemin.parselles[0];
	this.avancement = {parselle : 0, av : 0}; // le numéro de parselle et l'avancement en pixel sur celle ci
	this.compteurFeu = null;
	this.compteurGlace = null;
	this.tourelles = [];


	this.avancer = function(){ // le monstre avance sur la parselle sur laqelle il se trouve avec une certaine vitesse, disjonction de cas selon le sens de la parselle
				
		this.coordonnees.x += vitesseJeu * this.vitesse * this.direction.x;
		this.coordonnees.y += vitesseJeu * this.vitesse * this.direction.y;
		this.avancement.av += vitesseJeu * this.vitesse;

		if (this.avancement.av > Taille_Cases){
		
			this.avancement.parselle++;

			if (this.avancement.parselle >= terrain.chemin.parselles.length){ // si le chemin est terminé, on réduit la vie du joueur

				joueur.vie -= this.force;
				Vie.innerText = joueur.vie;
				this.supprimer();

				if (joueur.vie <= 0){

					Perdre();
				}

			}
			else{ 

				this.avancement.av -= Taille_Cases; // si on fait = 0 on ne prend pas en compte l'avance effectué lors du depassement
				this.direction = terrain.chemin.parselles[this.avancement.parselle];

			}
		}	
	}

	this.blesser = function(projectile){

		this.vie -= projectile.degat; 

		if(projectile.tourelle.couleur == "red" && lvl > 3){

			this.compteurFeu = 5 * FPS; // en secondes
		}
		else if(projectile.tourelle.couleur == "blue" && lvl > 3){

			this.compteurGlace = 5 * FPS;
			this.vitesse = vitesse / 2;
		}

		if (this.vie <= 0){ // quand le monstre n'a plus de vie

			Gain(valeurXP, valeurMoney);
			
			this.supprimer();// on le tue c'est à dire on le supprime du tableau des monstres, PROBLEME ! le for dans l'update risque de buger

		}
	}

	this.bruler = function(degat){

		this.vie -= degat;

		if (this.vie <= 0){ // quand le monstre n'a plus de vie

			Gain(valeurXP, valeurMoney);
			
			this.supprimer();// on le tue c'est à dire on le supprime du tableau des monstres, PROBLEME ! le for dans l'update risque de buger

		}
	}

	this.deglacer =function(){

		this.vitesse = vitesse;
		this.compteurGlace = null;
	}

	this.dessiner = function(){

		context.drawImage(image, this.coordonnees.x - Taille_Monstres, this.coordonnees.y - Taille_Monstres, 2 * Taille_Monstres, 2 * Taille_Monstres);
		context.beginPath(); // dessin du monstre
		context.fillStyle = "#33FF00"; // dessin de la jauge de vie
		context.fillRect(this.coordonnees.x - Taille_Monstres, this.coordonnees.y + Taille_Monstres + 4, 2 * Taille_Monstres * (this.vie/vie), 4); 
		context.fillStyle = "red";
		context.fillRect(this.coordonnees.x + Taille_Monstres, this.coordonnees.y + Taille_Monstres + 4, 2 * Taille_Monstres * ((this.vie/vie)-1),4);
		context.closePath();
	}

	this.supprimer = function(){

		for(var k = 0; k< this.tourelles.length; k++){

				this.tourelles[k].cible = false;
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
	this.Edmoune = null;

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
		var monstre;

		for(var i = 0; i<this.monstres.length; i++){
			
			monstre = this.monstres[i];
			monstre.avancer();
			
			if(monstre.compteurFeu && monstre.compteurGlace > 0){

				monstre.bruler(Tourelles[1].force/FPS);
				monstre.compteurFeu-= vitesseJeu;
			}

			if(monstre.compteurGlace){

				monstre.compteurGlace-= vitesseJeu;

				if(monstre.compteurGlace <= 0){
					
					monstre.deglacer();
				}

			}
		}


		for(var i = 0; i<this.projectiles.length; i++){

			this.projectiles[i].avancer();
		}

	}
};


function Case(coordonnees){ // on découpe le plan en carrés de taille egale sur lequel on peut placer nos objets

	this.coordonnees = coordonnees;
	this.disponible = true; //booléen qui indique si on peut y placer une tourelle ou non

	this.dessiner = function(image){

		context.beginPath();
		var pattern = context.createPattern(image, 'repeat');
        context.fillStyle = pattern;
		context.fillRect(Math.floor(this.coordonnees.x - (Taille_Cases/2)), Math.floor(this.coordonnees.y - (Taille_Cases/2)), Taille_Cases, Taille_Cases);
		context.closePath();
	}

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
	this.fin = { i : debut.i, j : debut.j};

	this.dessiner = function(){

		for(var k = 0; k < this.cases.length; k++){

			this.cases[k].dessiner(chemin);
		}
	}
};

function Edmoune(coordonnees){

	this.base = Monstre;
	this.base(-150, 500, 0, 0, 0, coordonnees, Edme);
	this.avancement.parselle = terrain.chemin.parselles.length - 1;

	this.avancer = function(){ // le monstre avance sur la parselle sur laqelle il se trouve avec une certaine vitesse, disjonction de cas selon le sens de la parselle
				
		this.coordonnees.x += vitesseJeu * this.vitesse * this.direction.x;
		this.coordonnees.y += vitesseJeu * this.vitesse * this.direction.y;
		this.avancement.av += vitesseJeu * this.vitesse;
		this.attaquer();

		if ( - this.avancement.av > Taille_Cases){

			this.avancement.parselle--;

			if (this.avancement.parselle < 0 ){ // si le chemin est terminé, on réduit la vie du joueur

				terrain.Edmoune = false;

			}
			else{ 

				this.avancement.av += Taille_Cases; // si on fait = 0 on ne prend pas en compte l'avance effectué lors du depassement
				this.direction = terrain.chemin.parselles[this.avancement.parselle];
			}
		}	
	}

	this.attaquer = function(){

		for(var i= 0; i < terrain.monstres.length; i++){

			var monstre = terrain.monstres[i];

			if(Norme(monstre.coordonnees,this.coordonnees)< Taille_Cases){

				terrain.monstres[i].bruler(this.force * vitesseJeu);
			}
		} 
	}
};

Edmoune.prototype = new Monstre;
