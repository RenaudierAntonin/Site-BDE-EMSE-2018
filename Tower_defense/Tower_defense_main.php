<!DOCTYPE html>

<html>

	<head>
		<meta charset="utf-8" />
		<title>Tower defense</title>
		<style>
		.right {
 			float:right;
		}
		.canvas {
			float:left;
 			margin-right: 10px;
		}
		.tower {
 			display:inline-block;
 			padding: 5px;
 			border: 1px solid;
		}
		</style>
	</head>
	<?php session_start();?>
	
	<body>

		<script type='text/javascript'> login = '' </script>

		<?php if (isset($_SESSION['login'])){

		echo '<script type=\'text/javascript\'> login = "'.$_SESSION['login'].'" </script>';

	}

	?>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
		<script src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>
		
		<canvas id="canvas" class='canvas' width="1000" height="600" style="border: 1px solid black;"></canvas>

		<div id="tourelles">

			<div v-for="Tourelle in Tourelles" >
				<button class='tower' v-bind:style="{backgroundColor: Tourelle.couleur}" v-on:click='selectionnerTourelle(Tourelles.indexOf(Tourelle));'>
					
					{{Tourelle.nom}}
					<br>
					Portée: {{Tourelle.aire}}
					<br>
					Puissance:  {{Tourelle.force}}
					<br>
					Cadence:  {{Tourelle.frequenceTir}}
					<br>
					Prix:  {{Tourelle.prix}}
				</button>
			<br>
			</div>

			

		</div>

		<br>

		<div> 
			Vie :  <span id = "vie"> 100 </span>
			<br>
			Score :  <span id = "score"> 0 </span>
			<br>
			Argent :  <span id = "money"> 0 </span>
			<br>
			Niveau : <span id = "niveau"> 0 </span>

		</div>
		<br>

		<button id="Play_Pause">Play</button>

		<br>

		Meilleur Score : <span id = "MeilleurScore"> 0 </span>

		<script src="Tower_defense_classes.js"></script>
		<script src="Tower_defense_fonctions.js"></script>
		<script src="Tower_defense_script.js"></script>
		<script src="Tower_defense_init.js"></script>
	</body>
	
</html>