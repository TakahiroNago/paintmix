<!-- modals for mixed color -->
<?php
// result from calc.php
$mixed_colors = ['rgb(253,223,0)','rgb(255,165,9)','rgb(255,117,28)','rgb(192,93,37)','rgb(147,100,38)','rgb(59,123,50)','rgb(48,149,61)','rgb(40,141,54)','rgb(58,157,46)','rgb(96,180,23)','rgb(176,196,3)','rgb(181,140,20)','rgb(229,197,3)','rgb(98,126,26)','rgb(255,152,9)','rgb(255,103,27)','rgb(190,80,35)','rgb(142,86,36)','rgb(52,105,47)','rgb(41,130,57)','rgb(32,121,51)','rgb(51,137,45)','rgb(89,162,24)','rgb(172,181,5)','rgb(177,125,21)','rgb(227,184,4)','rgb(91,109,26)','rgb(255,67,4)','rgb(184,50,10)','rgb(144,55,12)','rgb(70,67,29)','rgb(63,83,42)','rgb(55,78,35)','rgb(73,92,28)','rgb(108,114,11)','rgb(184,127,2)','rgb(179,88,0)','rgb(233,129,6)','rgb(104,70,6)','rgb(184,26,12)','rgb(149,31,16)','rgb(89,39,41)','rgb(85,47,58)','rgb(80,47,48)','rgb(98,61,34)','rgb(132,79,15)','rgb(201,86,10)','rgb(186,59,0)','rgb(244,84,17)','rgb(120,41,8)','rgb(101,2,56)','rgb(59,1,89)','rgb(55,4,110)','rgb(54,9,92)','rgb(67,28,64)','rgb(91,50,33)','rgb(139,61,20)','rgb(129,37,17)','rgb(170,62,24)','rgb(79,12,36)','rgb(44,0,93)','rgb(38,3,114)','rgb(38,7,93)','rgb(46,26,67)','rgb(62,50,37)','rgb(99,64,23)','rgb(99,38,23)','rgb(126,67,26)','rgb(55,11,43)','rgb(14,14,110)','rgb(20,12,79)','rgb(16,31,63)','rgb(14,56,40)','rgb(28,74,32)','rgb(49,42,45)','rgb(43,80,38)','rgb(18,12,54)','rgb(7,32,100)','rgb(4,52,81)','rgb(4,79,55)','rgb(18,97,44)','rgb(43,53,63)','rgb(34,102,48)','rgb(10,27,72)','rgb(6,44,57)','rgb(1,69,39)','rgb(10,87,35)','rgb(39,51,49)','rgb(25,93,42)','rgb(10,23,53)','rgb(0,84,36)','rgb(19,103,32)','rgb(49,67,36)','rgb(40,109,38)','rgb(10,40,41)','rgb(44,128,16)','rgb(71,89,16)','rgb(75,134,20)','rgb(18,64,21)','rgb(122,102,8)','rgb(152,153,5)','rgb(51,80,14)','rgb(158,104,12)','rgb(67,49,12)','rgb(77,85,18)','rgb(250,242,86)','rgb(250,230,79)','rgb(250,174,82)','rgb(255,126,112)','rgb(201,78,155)','rgb(166,78,165)','rgb(86,114,216)','rgb(69,141,241)','rgb(68,149,223)','rgb(97,178,173)','rgb(134,207,118)','rgb(196,214,79)','rgb(194,142,111)','rgb(232,207,76)','rgb(128,130,137)',];
$num_of_base_colors = 15;
?>

<div class="modal fade" id="mixedModal" tabindex="-1" aria-labelledby="mixedModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content modal-mix-palette">
			<div class="modal-body">
				<span class="fw-bold" id="modalTextMixed">Select from Mixed Color</span>
				<hr>
				<div class="text-start">
					<?php
					$count = 0;
					for($i=0; $i<$num_of_base_colors; $i++){
						for($j=$i+1; $j<$num_of_base_colors; $j++){
					?>
							<input type="button" onclick="changeColorMixed('<?=$colors[$i]['color'];?>', '<?=$colors[$i]['name'];?>', '<?=$colors[$i]['name_ja'];?>', '<?=$colors[$j]['color'];?>', '<?=$colors[$j]['name'];?>', '<?=$colors[$j]['name_ja'];?>')" class="border border-secondary rounded ps-2 pe-3 mx-0" style="background: <?=$mixed_colors[$count];?>;" data-bs-dismiss="modal">
					<?php
							$count++;
						}
					?>
					<?php
					}
					?>
					<hr>
					<?php
					for($i=0; $i<$num_of_base_colors; $i++){
					?>
						<input type="button" onclick="changeColorMixed('<?=$colors[$i]['color'];?>', '<?=$colors[$i]['name'];?>', '<?=$colors[$i]['name_ja'];?>', '<?=$colors[15]['color'];?>', '<?=$colors[15]['name'];?>', '<?=$colors[15]['name_ja'];?>')" class="border border-secondary rounded ps-2 pe-3 mx-0" style="background: <?=$mixed_colors[$count];?>;" data-bs-dismiss="modal">
					<?php
						$count++;
					}
					?>
		
				</div>
			</div>
		</div>
	</div>
</div>
