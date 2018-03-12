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
    			'film' => ' href = "pages_allos/allo_film.html" ',
   				'car' => 'href = "pages_allos/allo_car.html"',
   				'laleuleu' => 'href = "pages_allos/allo_laleuleu.html"',
    			'capotes' => 'href = "pages_allos/allo_capotes.html"',
    			'binouze' => 'href = "pages_allos/allo_binouze.html"',
    			'clopes' => 'href = "pages_allos/allo_clopes.html"',
    			'victime' => 'href = "pages_allos/allo_victime.html"',
    			'liaison' => 'href = "pages_allos/allo_liaison.html"',
    			'lecture' => 'href = "pages_allos/allo_lecture.html"',
    			'compagnie' => 'href = "pages_allos/allo_compagnie.html"',
    			'dodo' => 'href = "pages_allos/allo_dodo.html"',
    			'blackout' => 'href = "pages_allos/allo_blackout.html"',
    			'reveil' => 'href = "pages_allos/allo_reveil.html"',
    			'coiffure' => 'href = "pages_allos/allo_coiffure.html"',
    			'massage' => 'href = "pages_allos/allo_massage.html"',
    		);

    		$eventOnClick = 'target="_blank"';


	if(!isset($_SESSION['login'])){	

		foreach ($allos as $key => $value) {

			$allos[$key] = '';

			}
			
		$eventOnClick = "onclick = 'alert(\"Vous devez être connecté pour beneficier des allos\")';"; 

	}

	?>

	<div class="grid-container">

		<?php foreach ($allos as $key => $value) {

			echo '<a '.$value.' class="grid-element " '.$eventOnClick.'><div class="allo allo_'.$key.'"></div></a>';

		} ?>

	</div>
	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>