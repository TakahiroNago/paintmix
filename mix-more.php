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
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet">

	<!-- stylesheet -->
	<link href="css/style.css" rel="stylesheet">

</head>
<body>
	<?php
	// receiving values from mix-more.php
	if(isset($_POST['touch_php'])){
		$touch = $_POST['touch_php'];
	}else{
		$touch = 'false';
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
		$color_name = 'false';
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
		['color' => '#f3f4f7', 'name' => 'Titanium White', 'name_ja' => 'チタニウム<br>ホワイト'], // 15
	];

	// set first colors(put array number)
	$color1 = 0;  // cadmium yellow
	$color2 = 15; // titanium white
	$color3 = 8;  // phthalo blue
	$color4 = 11; // sap green
	$color5 = 7;  // cobalt blue
	$color6 = 6;  // ultramarine blue
	?>

	<div class="container mt-3 whole-display">
		<div class="row mx-auto">
			<div class="col">
				<div class="float-start">
					<form action="index.php" method="post">
						<button type="submit" class="text-decoration-none bg-transparent border-0">
							<h1 class="text-muted text-center display-5 fw-bold"><span class="text-info">P</span>aint<span class="text-danger">M</span>ix<i class="fa-solid fa-palette"></i></h1>
							<span id="langPhp"><input type="hidden" name="language_php" value="en"></span>
							<span id="touchPhp"><input type="hidden" name="touch_php" value="false"></span>
							<span id="touchRPhp"><input type="hidden" name="touchR_php" value="false"></span>
							<span id="touchMPhp"><input type="hidden" name="touchM_php" value="false"></span>
							<span id="colorNamePhp"><input type="hidden" name="color_name_php" value="false"></span>
						</button>
					</form>
				</div>

				<!-- option menu button-->
				<button class="btn border float-end" type="button"  data-bs-toggle="modal" data-bs-target="#menuModal">
					<i class="fa-solid fa-bars"></i>
				</button>

				<!-- option menu modal -->
				<?php
				$index = false;
				include 'modal/menu.php';
				?>

			</div>
		</div>

		<div class="row">

			<div class="col">				
				<div class="container border px-3 rounded">
					<div class="row">
						<div class="col">
							<div class="row mt-3">

								<!-- Color 1 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text1">
										Color1
									</span>
									<div class="finger-space">
										<span id="finger"></span>
									</div>
									<div class="rounded color1 fw-bold d-flex align-items-center justify-content-center small" id="color1" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal1"></div>
									<div class="finger-space">
										<span id="fingerR"></span>
									</div>
									<input type="range" value="10" min="0" max="20" id="ratio1" class="mt-2 form-range z-2">
								</div>
								
								<!-- mix of Color 1 and Color 2 (Color 7) -->
								<div class="col-2 mt-2">
									<div class="mt-4 result1" id="result1" onclick="touchedM()" data-bs-toggle="modal" data-bs-target="#colorModal7">
										<span id="fingerM"></span>
									</div>
								</div>

								<!-- Color 2 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text2">
										Color2
									</span>
									<div class="finger-space"></div>
									<div class="rounded color2 fw-bold d-flex align-items-center justify-content-center small" id="color2" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal2"></div>
									<div class="finger-space"></div>
									<input type="range" value="10" min="0" max="20" id="ratio2" class="mt-2 form-range z-2">
								</div>

								<!-- Color 3 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text3">
										Color3
									</span>
									<div class="finger-space"></div>
									<div class="rounded color3 fw-bold d-flex align-items-center justify-content-center small" id="color3" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal3"></div>
									<div class="finger-space"></div>
									<input type="range" value="10" min="0" max="20" id="ratio3" class="mt-2 form-range z-2">
								</div>
								
								<!-- mix of Color 3 and Color 4 (Color 8) -->
								<div class="col-2 mt-2">
									<div class="mt-4 result2" id="result2" onclick="touchedM()" data-bs-toggle="modal" data-bs-target="#colorModal8"></div>
								</div>

								<!-- Color 4 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text4">
										Color4
									</span>
									<div class="finger-space"></div>
									<div class="rounded color4 fw-bold d-flex align-items-center justify-content-center small" id="color4" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal4"></div>
									<div class="finger-space"></div>
									<input type="range" value="10" min="0" max="20" id="ratio4" class="mt-2 form-range z-2">
								</div>

								<!-- Color 5 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text5">
										Color5
									</span>
									<div class="finger-space"></div>
									<div class="rounded color5 fw-bold d-flex align-items-center justify-content-center small" id="color5" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal5"></div>
									<div class="finger-space"></div>
									<input type="range" value="10" min="0" max="20" id="ratio5" class="mt-2 form-range z-2">
								</div>
								
								<!-- mix of Color 5 and Color 6 (Color 9) -->
								<div class="col-2 mt-2">
									<div class="mt-4 result3" id="result3" onclick="touchedM()" data-bs-toggle="modal" data-bs-target="#colorModal9"></div>
								</div>

								<!-- Color 6 -->
								<div class="col-5 text-center mb-2">
									<span class="fw-bold text-muted" id="text6">
										Color6
									</span>
									<div class="finger-space"></div>
									<div class="rounded color6 fw-bold d-flex align-items-center justify-content-center small" id="color6" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal6"></div>
									<div class="finger-space"></div>
									<input type="range" value="10" min="0" max="20" id="ratio6" class="mt-2 form-range z-2">
								</div>

							</div>
							
							<!-- color palette modals -->
							<?php
							$number_of_colors = 6;
							$number_of_mix = 3;
							include 'modal/colors.php';
							?>
							
							<!-- color mix result -->
							<div class="row mt-3 mx-auto">
								<div class="d-flex justify-content-center align-items-center">
									<!-- result1 -->
									<div class="result1B" id="result1B"></div>
									<!-- plus1 -->
									<div class="fw-bold text-muted" id="plus1">
										<i class="fa-solid fa-plus mx-2"></i>
									</div>
									<!-- result2 -->
									<div class="result2B" id="result2B"></div>
									<!-- plus2 -->
									<div class="fw-bold text-muted" id="plus2">
										<i class="fa-solid fa-plus mx-2"></i>
									</div>
									<!-- result3 -->
									<div class="result3B" id="result3B"></div>
									<!-- equals -->
									<div class="fw-bold text-muted" id="equals">
										<i class="fa-solid fa-equals mx-2"></i>
									</div>
									<!-- final result -->
									<div class="resultm" id="resultm"></div>
								</div>
							</div>
							
							<!-- link to index.php -->
							<div class="row mt-3 mb-3">
								<div class="col">
									<form action="index.php" method="post">
										<button type="submit" class="btn btn-outline-secondary form-control">
											<i class="fa-solid fa-arrow-left"></i> <span id="text7">go back</span>
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
		var rgb3 = '<?= $colors[$color3]['color']; ?>';
		var rgb4 = '<?= $colors[$color4]['color']; ?>';
		var rgb5 = '<?= $colors[$color5]['color']; ?>';
		var rgb6 = '<?= $colors[$color6]['color']; ?>';
		var name1 = '<?= $colors[$color1]['name']; ?>';
		var name2 = '<?= $colors[$color2]['name']; ?>';
		var name3 = '<?= $colors[$color3]['name']; ?>';
		var name4 = '<?= $colors[$color4]['name']; ?>';
		var name5 = '<?= $colors[$color5]['name']; ?>';
		var name6 = '<?= $colors[$color6]['name']; ?>';
		var nameJa1 = '<?= $colors[$color1]['name_ja']; ?>';
		var nameJa2 = '<?= $colors[$color2]['name_ja']; ?>';
		var nameJa3 = '<?= $colors[$color3]['name_ja']; ?>';
		var nameJa4 = '<?= $colors[$color4]['name_ja']; ?>';
		var nameJa5 = '<?= $colors[$color5]['name_ja']; ?>';
		var nameJa6 = '<?= $colors[$color6]['name_ja']; ?>';

		//if touched
		var touch = '<?=$touch;?>';
		var touchR = '<?=$touchR;?>';
		var touchM = '<?=$touchM;?>';

		//language
		var language = '<?=$language;?>';
		
		//color name text on/off
		var colorName = '<?=$color_name;?>';
	</script>

	<script src="js/mix-more.js"></script>

</body>
</html>