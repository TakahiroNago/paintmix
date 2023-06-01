<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PaintMix</title>
	
	<!-- color mix function from https://scrtwpns.com/mixbox/ -->
	<script src="https://scrtwpns.com/mixbox.js"></script>

</head>
<body>
	<?php
	// set base colors
	$colors = ['#feec00', '#fcd300', '#ff6900', '#ff2702', '#80022e', '#4e0042', '#190059', '#002185', '#0d1b44', '#003c32', '#076d16', '#6b9404', '#7b4800', '#cb9d06', '#161617', '#f3f4f7'];

	?>

	<div id="calcs"></div>

	<script>
		//calculations for reverse color finding
		var string = '';
		<?php
			// declare javascript variables
			for($i=0; $i<count($colors); $i++){
				echo 'var rgb'.$i.'="'.$colors[$i].'"; ';
			}
			// mix colors exept white(the last color)
			for($i=0; $i<count($colors)-1; $i++){
				for($j=$i+1; $j<count($colors)-1; $j++){
		      echo "string = string + mixbox.lerp(rgb".$i.", rgb".$j.", 0.5) + ','".";";
				}
			}
			// mix colors with white
			for($i=0; $i<count($colors)-1; $i++){
				echo "string = string + mixbox.lerp(rgb".$i.", rgb15, 0.5) + ','".";";
			}
		?>
		document.getElementById("calcs").innerHTML = string;

	</script>

</body>
</html>