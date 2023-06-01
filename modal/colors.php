<!-- modals for each color -->
<?php
for($i = 1; $i <= $number_of_colors; $i++){
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
				<div class="modal-body">
					<span class="fw-bold" id="modalText<?= $i; ?>">
						<?= 'Select Color '. $i;?>
					</span>
					
					<div class="float-end">
						<input type="color" id="palette<?= $i; ?>">
					</div>
					<hr>
					<div class="text-start">
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
			</div>
		</div>
	</div>
<?php
}
?>
