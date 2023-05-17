<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PaintMix</title>
	
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<!-- Popper min js -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js" integrity="sha512-6UofPqm0QupIL0kzS/UIzekR73/luZdC6i/kXDbWnLOJoqwklBK6519iUnShaYceJ0y4FaiPtX/hRnV/X/xlUQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

	<!-- bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	
	<!-- color mix function from https://scrtwpns.com/mixbox/ -->
	<script src="https://scrtwpns.com/mixbox.js"></script>

	<!-- google font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet">

	<!-- stylesheet -->
	<link href="css/style.css" rel="stylesheet">

</head>
<body>
	<?php
	// receive values from mix-more.php
	if(isset($_POST['touch_php'])){
		$touch = $_POST['touch_php'];
		$first_visit = 'false';
	}else{
		$touch = 'false';
		$first_visit = 'true';
	}
	if(isset($_POST['touchR_php'])){
		$touchR = $_POST['touchR_php'];
	}else{
		$touchR = 'false';
	}
	if(isset($_POST['touchM_php'])){
		$touchM = $_POST['touchM_php'];
	}else{
		$touchM = 'false';
	}
	if(isset($_POST['language_php'])){
		$language = $_POST['language_php'];
	}else{
		$language = 'en';
	}
	if(isset($_POST['color_name_php'])){
		$color_name = $_POST['color_name_php'];
	}else{
		$color_name = 'true';
	}

	// set colors
	$colors = [
		['color' => '#feec00', 'name' => 'Cadmium Yellow', 'name_ja' => 'カドミウム<br>イエロー'], // 0
		['color' => '#fcd300', 'name' => 'Hansa Yellow', 'name_ja' => 'ハンザイエロー'], // 1
		['color' => '#ff6900', 'name' => 'Cadmium Orange', 'name_ja' => 'カドミウム<br>オレンジ'], // 2
		['color' => '#ff2702', 'name' => 'Cadmium Red', 'name_ja' => 'カドミウムレッド'], // 3
		['color' => '#80022e', 'name' => 'Quinacridone Magenta', 'name_ja' => 'キナクリドン<br>マゼンタ'], // 4
		['color' => '#4e0042', 'name' => 'Cobalt Violet', 'name_ja' => 'コバルト<br>バイオレット'], // 5
		['color' => '#190059', 'name' => 'Ultramarine Blue', 'name_ja' => 'ウルトラマリン<br>ブルー'], // 6
		['color' => '#002185', 'name' => 'Cobalt Blue', 'name_ja' => 'コバルトブルー'], // 7
		['color' => '#0d1b44', 'name' => 'Phthalo Blue', 'name_ja' => 'フタロブルー'], // 8
		['color' => '#003c32', 'name' => 'Phthalo Green', 'name_ja' => 'フタログリーン'], // 9
		['color' => '#076d16', 'name' => 'Permanent Green', 'name_ja' => 'パーマネント<br>グリーン'], // 10
		['color' => '#6b9404', 'name' => 'Sap Green', 'name_ja' => 'サップグリーン'], // 11
		['color' => '#7b4800', 'name' => 'Burnt Sienna', 'name_ja' => 'バーントシェンナ'], // 12
		['color' => '#cb9d06', 'name' => 'Yellow Ochre', 'name_ja' => 'イエローオーカー'], // 13
		['color' => '#161617', 'name' => 'Mars Black', 'name_ja' => 'マルスブラック'], // 14
	];

	// set first colors(put array number)
	$color1 = 0;  // cadmium yellow
	$color2 = 8;  // phthalo blue
	?>

	<div class="container mt-3 whole-display">
		<div class="row mx-auto">
			<div class="col">
				<div class="row">

					<div class="col">
						<form action="index.php" method="post">
							<button type="submit" class="text-decoration-none bg-transparent border-0">
								<h1 class="text-muted text-center display-6 fw-bold"><span class="text-info">P</span>aint<span class="text-danger">M</span>ix<i class="fa-solid fa-palette"></i></h1>
								<span id="langPhp"><input type="hidden" name="language_php" value="en"></span>
								<span id="touchPhp"><input type="hidden" name="touch_php" value="false"></span>
								<span id="touchRPhp"><input type="hidden" name="touchR_php" value="false"></span>
								<span id="touchMPhp"><input type="hidden" name="touchM_php" value="false"></span>
								<span id="colorNamePhp"><input type="hidden" name="color_name_php" value="false"></span>
							</button>
						</form>
					</div>

					<div class="col-auto">
						<!-- option menu button-->
						<button class="btn border float-end" type="button"  data-bs-toggle="modal" data-bs-target="#menuModal">
							<i class="fa-solid fa-bars"></i>
						</button>
					</div>

				</div>


				<!-- option menu modal -->
				<?php
				$index = true;
				include 'modal/menu.php';
				?>

			</div>

		</div>

		<div class="row">

			<div class="col">	
				<div class="container border px-3 rounded">
					<div class="row">
						<div class="col">
							<div class="row mt-2">

								<!-- color 1 -->
								<div class="col text-center">
									<span class="fw-bold text-muted" id="text1">Color 1</span>
									<div class="finger-space">
										<span id="finger"></span>
									</div>
									<div class="rounded color-1 fw-bold d-flex align-items-center justify-content-center small" id="color1" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal1">
									</div>
								</div>

								<!-- color 2 -->
								<div class="col text-center">
									<span class="fw-bold text-muted" id="text2">Color 2</span>
									<div class="finger-space"></div>
									<div class="rounded color-2 fw-bold d-flex align-items-center justify-content-center small" id="color2" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal2">
									</div>
								</div>

							</div>

							<!-- color palette modals -->
							<?php
							$number_of_colors = 2;
							$number_of_mix = 0;
							include 'modal/colors.php';
							?>
				
							<!-- input range for color ratio -->
							<div class="row mt-3">
								<div class="col text-center">
									<label for="ratio" class="fw-bold text-muted" id="text3">Mix Ratio</label>
									<div class="finger-space">
										<span id="fingerR"></span>
									</div>
									<div class="w-50 mx-auto">
										<input type="range" value="10" min="0" max="20" id="ratio" class="form-range z-2">
									</div>
								</div>
							</div>
							
							<!-- color mix result -->
							<div class="row mt-1">
								<div class="col">
									<div class="rounded result" id="result">
									</div>
								</div>
							</div>

							<!-- input range to mix white -->
							<div class="row mt-3">
								<div class="col text-center">
									<label for="ratio" class="fw-bold text-muted" id="text4">Mix with White</label>
									<div class="rounded finger-space"></div>
									<div class="d-flex align-items-center justify-content-center fw-bold text-muted">
										<i class="fa-solid fa-minus mb-1"></i>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="w-50">
											<input type="range" value="10" min="0" max="20" id="white" class="form-range">
										</span>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<i class="fa-solid fa-plus mb-1"></i>
									</div>
								</div>
							</div>

							<!-- add white result -->
							<div class="row mt-1">
								<div class="col">
									<div class="rounded resultw" id="resultw">
									</div>
								</div>
							</div>

							<!-- link to add more color -->
							<div class="row mt-4 mb-3">
								<div class="col">
									<form action="mix-more.php" method="post">
										<button type="submit" class="btn btn-outline-secondary form-control">
											<i class="fa-solid fa-plus"></i> <span id="text5">Mix More Color</span>
											<span id="langPhp2"><input type="hidden" name="language_php" value="en"></span>
											<span id="touchPhp2"><input type="hidden" name="touch_php" value="false"></span>
											<span id="touchRPhp2"><input type="hidden" name="touchR_php" value="false"></span>
											<span id="touchMPhp2"><input type="hidden" name="touchM_php" value="false"></span>
											<span id="colorNamePhp2"><input type="hidden" name="color_name_php" value="false"></span>
										</button>
									</form>
									
								</div>
							</div>
							
						</div>
					</div>
				</div> 
				<!-- end of container -->

				<!-- license and change language buttons-->
				<div class="row">
					<div class="col">
						<button class="btn btn-outline-secondary btn-sm float-start mt-2" data-bs-toggle="modal" data-bs-target="#licenseModal">
							<span id="lcsBtn">License</span>
						</button>
						<span id="enBtn">
							<button class="btn btn-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>
						</span>
						<span id="jaBtn">
							<button class="btn btn-outline-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>
						</span>
					</div>
				</div>

				<!-- license modals -->
				<?php
				include 'modal/license.php';
				?>

			</div>
		</div>
	</div>

	<!-- pass variables from php to javascript -->
	<script>
		//first colors
		var rgb1 = '<?= $colors[$color1]['color']; ?>';
		var rgb2 = '<?= $colors[$color2]['color']; ?>';
		var name1 = '<?= $colors[$color1]['name']; ?>';
		var name2 = '<?= $colors[$color2]['name']; ?>';
		var nameJa1 = '<?= $colors[$color1]['name_ja']; ?>';
		var nameJa2 = '<?= $colors[$color2]['name_ja']; ?>';

		//if touched
		var touch = '<?=$touch;?>';
		var touchR = '<?=$touchR;?>';
		var touchM = '<?=$touchM;?>';

		//language
		var language = '<?=$language;?>';

		//color name text on/off
		var colorName = '<?=$color_name;?>';

		//check if first visit
		var firstVisit = '<?=$first_visit;?>'
	</script>

	<script src="js/mix.js"></script>

</body>
</html>