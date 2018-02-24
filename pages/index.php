<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="../style/style.css">
	<meta charset="utf-8">
</head>

<body>
	
	<?php include("menu.php"); ?>

	<div class="texte">
		<h1>L'invasion commence !</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
	<div class="formulaire">
	<form name="formulaire" action="affiche-donnees.php" method="POST" enctype="multipart/form-data">
      <li><label for="numero">Pour avoir nos infos par sms :</label>
        <input type="text" id="numero" name="numero"></li>
      <li><input type="submit" value="Je veux recevoir des informations par SMS"></li>
    </ul>
	</form>
	</div>

	<?php include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>