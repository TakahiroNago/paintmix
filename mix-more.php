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

	<!-- favicon -->
	<link rel=”icon” href=“/img/favicon.ico”>
	
	<!-- stylesheet -->
	<link href="css/style.css" rel="stylesheet">

</head>
<body>
	<?php
	// set colors
	$colors = [
		['color' => '#feec00', 'name' => 'Cadmium Yellow', 'name_ja' => 'カドミウム<br>イエロー'], // 0
		['color' => '#fcd300', 'name' => 'Hansa Yellow', 'name_ja' => 'ハンザイエロー'], // 1
		['color' => '#ff6900', 'name' => 'Cadmium Orange', 'name_ja' => 'カドミウム<br>オレンジ'], // 2
		['color' => '#ff2702', 'name' => 'Cadmium Red', 'name_ja' => 'カドミウム<br>レッド'], // 3
		['color' => '#80022e', 'name' => 'Quinacridone Magenta', 'name_ja' => 'キナクリドン<br>マゼンタ'], // 4
		['color' => '#4e0042', 'name' => 'Cobalt Violet', 'name_ja' => 'コバルト<br>バイオレット'], // 5
		['color' => '#190059', 'name' => 'Ultramarine Blue', 'name_ja' => 'ウルトラマリン<br>ブルー'], // 6
		['color' => '#002185', 'name' => 'Cobalt Blue', 'name_ja' => 'コバルトブルー'], // 7
		['color' => '#0d1b44', 'name' => 'Phthalo Blue', 'name_ja' => 'フタロブルー'], // 8
		['color' => '#003c32', 'name' => 'Phthalo Green', 'name_ja' => 'フタログリーン'], // 9
		['color' => '#076d16', 'name' => 'Permanent Green', 'name_ja' => 'パーマネント<br>グリーン'], // 10
		['color' => '#6b9404', 'name' => 'Sap Green', 'name_ja' => 'サップグリーン'], // 11
		['color' => '#7b4800', 'name' => 'Burnt Sienna', 'name_ja' => 'バーント<br>シェンナ'], // 12
		['color' => '#cb9d06', 'name' => 'Yellow Ochre', 'name_ja' => 'イエロー<br>オーカー'], // 13
		['color' => '#161617', 'name' => 'Mars Black', 'name_ja' => 'マルスブラック'], // 14
		['color' => '#f3f4f7', 'name' => 'Titanium White', 'name_ja' => 'チタニウム<br>ホワイト'], // 15
	];

	// set first colors(put array number)
	$color1 = 0; // cadmium yellow
	$color2 = 11; // sap green
	$color3 = 9; // phthalo green
	$color4 = 7; // cobalt blue
	$color5 = 15; // titanium white
	?>

	<div class="container mt-2 whole-display">

		<div class="row mx-auto">
			<div class="col">
				<a href="index.php">
					<button type="submit" class="text-decoration-none bg-transparent border-0">
						<h1 class="text-muted text-center display-6 fw-bold"><span class="text-info">P</span>aint<span class="text-danger">M</span>ix<i class="fa-solid fa-palette"></i></h1>
					</button>
				</a>
			</div>

			<div class="col-auto">
				<!-- option menu button-->
				<button class="btn border float-end" type="button"  data-bs-toggle="modal" data-bs-target="#menuModal">
					<i class="fa-solid fa-bars"></i>
				</button>
			</div>

			<!-- option menu modal -->
			<?php
			$index = false;
			include 'modal/menu.php';
			?>
		</div>
		
		<div class="container border px-3 rounded">
			<div class="row mt-1">

				<!-- Color 1 -->
				<div class="col-6 text-center">
					<span class="fw-bold text-muted" id="text1">
						Color1
					</span>
					<div class="finger-space">
						<span id="finger"></span>
					</div>
					<div class="rounded color-select fw-bold d-flex align-items-center justify-content-center small" id="color1" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal1"></div>
					<div class="finger-space">
						<span id="fingerR"></span>
					</div>
					<input type="range" value="10" min="0" max="20" id="ratio1" class="form-range z-2">
				</div>

				<!-- Color 2 -->
				<div class="col-6 text-center">
					<span class="fw-bold text-muted" id="text2">
						Color2
					</span>
					<div class="finger-space"></div>
					<div class="rounded color-select fw-bold d-flex align-items-center justify-content-center small" id="color2" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal2"></div>
					<div class="finger-space"></div>
					<input type="range" value="10" min="0" max="20" id="ratio2" class="form-range z-2">
				</div>

				<!-- Color 3 -->
				<div class="col-6 text-center">
					<span class="fw-bold text-muted" id="text3">
						Color3
					</span>
					<div class="finger-space"></div>
					<div class="rounded color-select fw-bold d-flex align-items-center justify-content-center small" id="color3" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal3"></div>
					<div class="finger-space"></div>
					<input type="range" value="10" min="0" max="20" id="ratio3" class="form-range z-2">
				</div>
				
				<!-- Color 4 -->
				<div class="col-6 text-center">
					<span class="fw-bold text-muted" id="text4">
						Color4
					</span>
					<div class="finger-space"></div>
					<div class="rounded color-select fw-bold d-flex align-items-center justify-content-center small" id="color4" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal4"></div>
					<div class="finger-space"></div>
					<input type="range" value="10" min="0" max="20" id="ratio4" class="form-range z-2">
				</div>

			</div>
			
			<!-- color palette modals -->
			<?php
			$number_of_colors = 5;
			include 'modal/colors.php';
			?>
			
			<!-- color mix result -->
			<div class="row mt-1 no-space">
				<div class="d-flex justify-content-center align-items-center no-space">
					<!-- result1 -->
					<span class="result-c" id="result1"></span>
					<!-- plus1 -->
					<span class="fw-bold text-muted" id="plus1">
						<i class="fa-solid fa-plus mx-1"></i>
					</span>
					<!-- result2 -->
					<span class="result-c" id="result2"></span>
					<!-- plus2 -->
					<span class="fw-bold text-muted" id="plus2">
						<i class="fa-solid fa-plus mx-1"></i>
					</span>
					<!-- result3 -->
					<span class="result-c" id="result3"></span>
					<!-- plus3 -->
					<span class="fw-bold text-muted" id="plus3">
						<i class="fa-solid fa-plus mx-1"></i>
					</span>
					<!-- result4 -->
					<span class="result-c" id="result4"></span>
					<!-- equals -->
					<span class="fw-bold text-muted" id="equals">
						<i class="fa-solid fa-equals mx-2"></i>
					</span>
					<!-- final result -->
					<span class="result-final" id="resultCircle"></span>
				</div>
			</div>

			<hr>

			
			<!-- color5 -->
			<div class="row mt-1">
				<div class="col-auto d-flex align-items-center justify-content-center no-space">
					<i class="fa-solid fa-plus mx-1"></i>
				</div>
				<div class="col text-center no-space">
					<div class="rounded color-select fw-bold d-flex align-items-center justify-content-center small" id="color5" onclick="touched()" data-bs-toggle="modal" data-bs-target="#colorModal5"></div>
				</div>

				<!-- mix result -->
				<div class="col-auto d-flex align-items-center justify-content-center no-space">
					<i class="fa-solid fa-equals mx-2"></i>
				</div>
				<div class="col text-center no-space me-3">
					<div class="finger-space"></div>
					<div class="rounded color-result fw-bold d-flex align-items-center justify-content-center small" id="resultw"></div>
				</div>
			</div>

			<!-- input range -->
			<div class="row">
				<div class="col-6 text-center">
					<div class="finger-space"></div>
					<input type="range" value="10" min="0" max="20" id="ratio5" class="form-range z-2 ms-1">
				</div>
			</div>

			<!-- link to index.php -->
			<div class="row my-2">
				<div class="col">
					<a href="index.php">
						<button type="submit" class="btn btn-sm btn-outline-secondary form-control">
							<i class="fa-solid fa-arrow-left"></i> <span id="text7">go back</span>
						</button>
					</a>
				</div>
			</div>
			
		</div> <!-- end of container -->
		
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

	<!-- pass variables from php to javascript -->
	<script>
		//first colors
		var rgb1 = '<?= $colors[$color1]['color']; ?>';
		var rgb2 = '<?= $colors[$color2]['color']; ?>';
		var rgb3 = '<?= $colors[$color3]['color']; ?>';
		var rgb4 = '<?= $colors[$color4]['color']; ?>';
		var rgb5 = '<?= $colors[$color5]['color']; ?>';
		var name1 = '<?= $colors[$color1]['name']; ?>';
		var name2 = '<?= $colors[$color2]['name']; ?>';
		var name3 = '<?= $colors[$color3]['name']; ?>';
		var name4 = '<?= $colors[$color4]['name']; ?>';
		var name5 = '<?= $colors[$color5]['name']; ?>';
		var nameJa1 = '<?= $colors[$color1]['name_ja']; ?>';
		var nameJa2 = '<?= $colors[$color2]['name_ja']; ?>';
		var nameJa3 = '<?= $colors[$color3]['name_ja']; ?>';
		var nameJa4 = '<?= $colors[$color4]['name_ja']; ?>';
		var nameJa5 = '<?= $colors[$color5]['name_ja']; ?>';
	</script>

	<script src="js/mix-more.js"></script>

</body>
</html>