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
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 808" >
		<image width="100%" height="100%" xlink:href="img/organigramme.jpg" usemap="#membermap">
		</image>
		<a href="vikings.html"><rect x="20" y="200" fill="transparent" width="360" height="250"/></a>
		<a href="guests.html"><rect x="800" y="30" fill="transparent" width="360" height="150"/></a>
		<a href="gaulois.html"><rect x="30" y="480" fill="transparent" width="360" height="250"/></a>
		<a href="bureau.html"><rect x="480" y="590" fill="transparent" width="330" height="200" /></a>
		<a href="romains.html"><rect x="900" y="230" fill="transparent" width="290" height="220"/></a>
		<a href="egyptiens.html"><rect x="890" y="470" fill="transparent" width="300" height="320"/></a>
	</svg>

	<map name="membermap">
		<area shape="rect" coords="20,200 380,450" href="vikings.html">
	</map>
	
	<?php include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>