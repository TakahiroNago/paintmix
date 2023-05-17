<!-- modals for each color -->
<?php
for($i = 1; $i <= $number_of_colors + $number_of_mix; $i++){
?>
	<div class="modal fade" id="colorModal<?= $i; ?>" tabindex="-1" aria-labelledby="colorModal<?= $i; ?>Label" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content modal-palette
			<?php if($i % 2 === 0 && $i <= $number_of_colors){ // change the modal position based on the position of color displays
				echo ' float-end';
			}else{
				echo ' float-start';
			}
			?> 
			">
				<div class="modal-header">
					<span class="fw-bold" id="modalText<?= $i; ?>">
						<?php
						// name for each colors
						if($i <= $number_of_colors){
							if(isset($language)){
								if($language == 'en'){
									echo 'Color '. $i;
								}else{
									echo '色'. $i;
								}
							}else{
								echo 'Color '. $i;
							}
						// name for each mix
						}else{
							if(isset($language)){
								if($language == 'en'){
									echo 'Color '. (2 * ($i - $number_of_colors) - 1). '/Color '. (2 * ($i - $number_of_colors));
								}else{
									echo '色'. (2 * ($i - $number_of_colors) - 1). '/色'. (2 * ($i - $number_of_colors));
								}
							}else{
								echo 'Color '. (2 * ($i - $number_of_colors) - 1). '/Color '. (2 * ($i - $number_of_colors));
							}
						}
						?>
					</span>
				</div>
				<div class="modal-body">
					<div class="text-center">
						<?php
						foreach($colors as $color){
						?>
							<span>
								<input type="button" onclick="changeColor<?= $i; ?>('<?= $color['color']; ?>', '<?= $color['name']; ?>', '<?= $color['name_ja']; ?>')" class="border border-secondary rounded ps-2 pe-3 mx-0" style="background: <?= $color['color'] ; ?>;" data-bs-dismiss="modal">
						  </span>
						<?php
						}
						?>
					</div>
				</div>
				<div class="modal-footer">
					<div class="col">
						<input type="color" id="palette<?= $i; ?>" class="float-end">
					</div>
				</div>
			</div>
		</div>
	</div>
<?php
}
?>
