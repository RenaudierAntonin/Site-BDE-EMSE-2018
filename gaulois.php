<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="stylesheet" type="text/css" href="style/style_membres.css">
	<meta charset="utf-8">
</head>

<body>
	
	<?php include("menu.php"); ?>
	<div class="presentations">
		<img class="respo" src="img/membres/0valm1.jpg">
		<img src="img/membres/0valm2.png">

	<?php for($i = 3; $i < 9; $i++){

		echo "<img src='img/membres/0valm".$i.".jpg'>";
	}?>
	</div>

	
	<?php include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>