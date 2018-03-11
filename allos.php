<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="stylesheet" type="text/css" href="style/style_allos.css">	
	<meta charset="utf-8">
</head>

<body>
	<?php include("menu.php"); 
		
	
			$allos = array (
    			'film' => '',
   				'car' => 'pages_allos/allo_car.html',
   				'laleuleu' => 'pages_allos/allo_laleuleu.html',
    			'capotes' => 'pages_allos/allo_capotes.html',
    			'binouze' => 'pages_allos/allo_binouze.html',
    			'clopes' => 'pages_allos/allo_clopes.html',
    			'victime' => 'pages_allos/allo_victime.html',
    			'liaison' => 'pages_allos/allo_liaison.html',
    			'lecture' => 'pages_allos/allo_lecture.html',
    			'compagnie' => 'pages_allos/allo_compagnie.html',
    			'dodo' => 'pages_allos/allo_dodo.html',
    			'blackout' => 'pages_allos/allo_blackout.html',
    			'reveil' => 'pages_allos/allo_reveil.html',
    			'coiffure' => 'pages_allos/allo_coiffure.html',
    			'massage' => 'pages_allos/allo_massage.html',
    		);
	if(!isset($_SESSION['login'])){	

		 foreach ($allos as $key => $value) {

			$allos[$key] = '';

			}

	}?>

	<div class="grid-container">

		<?php foreach ($allos as $key => $value) {

			echo '<a href="'.$value.'" class="grid-element" target="_blank"><div class="allo allo_'.$key.'"></div></a>';

		} ?>

	</div>
	<?php include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>