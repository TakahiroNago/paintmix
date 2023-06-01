<!-- modal for option menu -->
<div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content modal-menu float-end">
			<div class="modal-body">
				<h2 class="h6" id="menuHd">Options</h2>
				<hr>

				<!-- gradient on/off button-->
				<div>
					<?php	if($index){ ?>
						<span id="gradBtn">
							<button class="btn btn-outline-secondary btn-sm" onclick="grad()" id="gradText">Gradient</button>
						</span>
					<?php }else{ ?>
						<span id="breakBtn">
							<button class="btn btn-outline-secondary btn-sm" onclick="brkDown()" id="breakText">Break Down</button>
						</span>
					<?php } ?>
				</div>

				<!-- color name on/off button-->
				<div class="mt-2">
					<span id="colNameBtn">
						<button class="btn btn-outline-secondary btn-sm" onclick="colName()" id="colNameText">Color Name</button>
					</span>
				</div>

			</div>
		</div>
	</div>
</div>
