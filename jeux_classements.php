<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<meta charset="utf-8">
</head>

<body>

	<?php include("menu.php"); ?>

	<div class="game-container">
		<!--<div class="jeu"><a  href="Tower_defense/Tower_defense_main.html" ><img class="logo" src="img/logo_minesperium_transparent.png">Tower Defense</a>
		</div>
		<div><a class="jeu" href=""><img class="logo" src="img/logo_minesperium_transparent.png">Jeu 2</a></div> -->	
	</div>
	<table id="classementJoueurs">
		<tr>
			<td >Pseudo</td>
			<td>Score</td>	
			<td>Rang</td>
		</tr>
		<tr v-for="user in users" v-bind:style="{ backgroundColor: user.couleur}" >
			<td>{{user.pseudo}}</td> 
			<td>{{user.value}}</td>
			<td>{{user.rang}}</td>
		</tr>
	</table>

	<table id="classementCivilisations">
		<tr>
			<td >Civilisation</td>
			<td>Score</td>	
			<td>Rang</td>
		</tr>

		<tr v-for="Civilisation in Civilisations" v-bind:style="{ backgroundColor: Civilisation.couleur}" >
			<td>{{Civilisation.name}}</td> 
			<td>{{Civilisation.score}}</td>
			<td>{{Civilisation.rang}}</td>
		</tr>
	</table>
	<script src="VueJS/classement_Vue.js"></script>
	
	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>

</html>