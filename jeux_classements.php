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
	<table id="classement">
		<tr>
			<td >Pseudo</td>
			<td>Rang</td>
			<td>Score</td>
		</tr>
		<tr v-for="user in users" v-bind:style="{ backgroundColor: user.couleur}" ><!--Adapter la couleur à la civilisation-->
			<td>{{user.pseudo}}</td> 
			<td>{{user.rang}}</td>
			<td>{{user.score}}</td>
		</tr>
	</table>
	<script src="VueJS/classement_Vue.js"></script>
	
	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
<?php
	//  echo "<script type=\"text/javascript\">var id_user=".$_SESSION["id_user"]."</script>";
?>

</html>