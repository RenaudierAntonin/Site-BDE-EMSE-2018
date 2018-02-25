<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="stylesheet" type="text/css" href="style/style_inscription.css">
	<meta charset="utf-8">
</head>

<body>
	
	<?php include("menu.php"); ?>

	<form class="inscription" action = "index.php" method = "post">
		<p>E-mail</p><input placeholder="E-mail" type="email" name="mail">
		<p>Mot de passe</p><input placeholder="Mot de passe" type="password" name="mdp">
		<p>Confirmation du mot de passe</p><input placeholder="Confirmation du mot de passe" type="password" name="mdp">
		<p>Numéro de téléphone</p><input placeholder="Numéro de téléphone" type="tel" name="numero_mobile"> <!-- utiliser un type specifique au numero de tel -->
		<p></p><input type="submit">
	</form>
	
	<?php include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>