//initiation of variables
var t1 = 0.5;  // mix ratio for colors 1 to 2
var t2 = 0.5;  // mix ratio for colors 3 to 4
var t3 = 0.5;  // mix ratio for colors 5 to 6
var t4 = 0.5;  // mix ratio for colors 1 and 2 to 3 and 4
var t5 = 0.33; // mix ratio for colors 1,2,3 and 4 to 5 and 6
var r1 = 30;   // radius for result circle 1
var r2 = 30;   // radius for result circle 2
var r3 = 30;   // radius for result circle 3

//set text colors
color1.style.color = textColor(rgb1);
color2.style.color = textColor(rgb2);
color3.style.color = textColor(rgb3);
color4.style.color = textColor(rgb4);
color5.style.color = textColor(rgb5);
color6.style.color = textColor(rgb6);

//color mix function from https://scrtwpns.com/mixbox/
var mixed1 = mixbox.lerp(rgb1, rgb2, t1);
var mixed2 = mixbox.lerp(rgb3, rgb4, t2);
var mixed3 = mixbox.lerp(rgb5, rgb6, t3);
var mixed4 = mixbox.lerp(mixed1, mixed2, t4);
var mixed  = mixbox.lerp(mixed4, mixed3, t5);

//break down on/off
var breakDown = false; //off

//display first colors
color1.style.background = rgb1;
color2.style.background = rgb2;
color3.style.background = rgb3;
color4.style.background = rgb4;
color5.style.background = rgb5;
color6.style.background = rgb6;
result1.style.background = mixed1;
result1B.style.background = mixed1;
result2.style.background = mixed2;
result2B.style.background = mixed2;
result3.style.background = mixed3;
result3B.style.background = mixed3;
resultm.style.background = mixed;

//change language
if(language === 'ja'){
	langJa();
}

//color name text off when colorName is false
if(colorName === 'true'){
	showName();
}

//show finger icon on color modal when not touched
if(touch === 'false'){
	window.setTimeout(showFinger, 3000);
}else{
	touchPhp.innerHTML = '<input type="hidden" name="touch_php" value="true">'; 
	touchPhp2.innerHTML = '<input type="hidden" name="touch_php" value="true">'; 
}
function showFinger(){
	if(touch === 'false'){
		finger.innerHTML = '<img src="img/finger.gif" class="mt-3 z-9 finger" onclick="touched()">';
	} 
}

//show finger icon on range input when range is not touched and color modal is touched
if(touchR === 'false' && touch === 'true'){
	setTimeout(showFingerR, 3000);
}else if(touchR === 'true'){
	touchRPhp.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
	touchRPhp2.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
}
function showFingerR(){
	if(touchR === 'false'){
		fingerR.innerHTML = '<img src="img/fingerR.gif" class="mt-4 z-9 fingerR" onclick="touchedR()">';
	}
}

//show finger icon on mix color moda when not touched and color modal and range are touched
if(touchM === 'false' && touch === 'true' && touchR === 'true'){
	setTimeout(showFingerM, 3000);
}else if(touchM === 'true'){
	touchMPhp.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
	touchMPhp2.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
}
function showFingerM(){
	if(touchM === 'false'){
		fingerM.innerHTML = '<img src="img/finger.gif" class="mt-3 z-9" onclick="touchedM()">';
	}
}

//check if color modal is touched
function touched(){
	touch = 'true';
	finger.innerHTML = '';
	touchPhp.innerHTML = '<input type="hidden" name="touch_php" value="true">';
	touchPhp2.innerHTML = '<input type="hidden" name="touch_php" value="true">';
	if(touchR === 'false'){
		setTimeout(showFingerR, 3000);
	}
	if(touchM === 'false' && touchR === 'true'){
		setTimeout(showFingerM, 3000);
	}
}

//check if range input is touched
function touchedR(){
	touchR = 'true';
	fingerR.innerHTML = '';
	touchRPhp.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
	touchRPhp2.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
	if(touchM === 'false' && touch === 'true'){
		setTimeout(showFingerM, 3000);
	}
}

//check if range input is touched
function touchedM(){
	touchM = 'true';
	fingerM.innerHTML = '';
	touchMPhp.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
	touchMPhp2.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
}

//change colors by modal
function changeColor1(color, name, nameJa){
	rgb1 = color;
	name1 = name;
	nameJa1 = nameJa;
	color1.style.background = rgb1;
	color1.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color1.innerHTML = name;
		}else{
			color1.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
}

function changeColor2(color, name, nameJa){
	rgb2 = color;
	name2 = name;
	nameJa2 = nameJa;
	color2.style.background = rgb2;
	color2.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color2.innerHTML = name;
		}else{
			color2.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
}

function changeColor3(color, name, nameJa){
	rgb3 = color;
	name3 = name;
	nameJa3 = nameJa;
	color3.style.background = rgb3;
	color3.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color3.innerHTML = name;
		}else{
			color3.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
}

function changeColor4(color, name, nameJa){
	rgb4 = color;
	name4 = name;
	nameJa4 = nameJa;
	color4.style.background = rgb4;
	color4.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color4.innerHTML = name;
		}else{
			color4.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
}

function changeColor5(color, name, nameJa){
	rgb5 = color;
	name5 = name;
	nameJa5 = nameJa;
	color5.style.background = rgb5;
	color5.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color5.innerHTML = name;
		}else{
			color5.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
}

function changeColor6(color, name, nameJa){
	rgb6 = color;
	name6 = name;
	nameJa6 = nameJa;
	color6.style.background = rgb6;
	color6.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color6.innerHTML = name;
		}else{
			color6.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
}

function changeColor7(color, name, nameJa){
	rgb1 = color;
	rgb2 = color;
	mixed1 = color;
	name1 = name;
	name2 = name;
	nameJa1 = nameJa;
	nameJa2 = nameJa;
	color1.style.background = rgb1;
	color1.style.color = textColor(color);
	color2.style.background = rgb2;
	color2.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color1.innerHTML = name;
			color2.innerHTML = name;
		}else{
			color1.innerHTML = nameJa;
			color2.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
}

function changeColor8(color, name, nameJa){
	rgb3 = color;
	rgb4 = color;
	mixed2 = color;
	name3 = name;
	name4 = name;
	nameJa3 = nameJa;
	nameJa4 = nameJa;
	color3.style.background = rgb3;
	color3.style.color = textColor(color);
	color4.style.background = rgb4
	color4.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color3.innerHTML = name;
			color4.innerHTML = name;
		}else{
			color3.innerHTML = nameJa;
			color4.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
}

function changeColor9(color, name, nameJa){
	rgb5 = color;
	rgb6 = color;
	mixed3 = color;
	name5 = name;
	name6 = name;
	nameJa5 = nameJa;
	nameJa6 = nameJa;
	color5.style.background = rgb5;
	color5.style.color = textColor(color);
	color6.style.background = rgb6;
	color6.style.color = textColor(color);
	if(colorName === 'true'){
		if(language === 'en'){
			color5.innerHTML = name;
			color6.innerHTML = name;
		}else{
			color5.innerHTML = nameJa;
			color6.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
}

// change color by input type="range"
let ratio1 = document.getElementById('ratio1');
let ratio2 = document.getElementById('ratio2');
let ratio3 = document.getElementById('ratio3');
let ratio4 = document.getElementById('ratio4');
let ratio5 = document.getElementById('ratio5');
let ratio6 = document.getElementById('ratio6');
var r1 = '35px';
var r2 = '35px';
var r3 = '35px';

ratio1.addEventListener('input', function(){
	ratio1 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t1 = ratio2 / (ratio1 + ratio2);
		t4 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
	
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio1 + ratio2 === 0){
		mixed1 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r1 = cirRadi(ratio1, ratio2);
	//give result values to css
	result1.style.background  = mixed1;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result1B.style.background = mixed1;
		result1B.style.width  = r1;
		result1B.style.height = r1;
		showHidePlusEqual();
		if(r1 === '0px'){
			result1B.style.border = '0px';
		}else{
			result1B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});

ratio2.addEventListener('input', function(){
	ratio2 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t1 = ratio2 / (ratio1 + ratio2);
		t4 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio1 + ratio2 === 0){
		mixed1 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r1 = cirRadi(ratio1, ratio2);
	//give result values to css
	result1.style.background =  mixed1;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result1B.style.background = mixed1;
		result1B.style.width  = r1;
		result1B.style.height = r1;
		showHidePlusEqual();
		if(r1 === '0px'){
			result1B.style.border = '0px';
		}else{
			result1B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});

ratio3.addEventListener('input', function(){
	ratio3 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t2 = ratio4 / (ratio3 + ratio4);
		t4 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio3 + ratio4 === 0){
		mixed2 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r2 = cirRadi(ratio3, ratio4);
	//give result values to css
	result2.style.background =  mixed2;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result2B.style.background = mixed2;
		result2B.style.width  = r2;
		result2B.style.height = r2;
		showHidePlusEqual();
		if(r2 === '0px'){
			result2B.style.border = '0px';
		}else{
			result2B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});

ratio4.addEventListener('input', function(){
	ratio4 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t2 = ratio4 / (ratio3 + ratio4);
		t4 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio3 + ratio4 === 0){
		mixed2 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r2 = cirRadi(ratio3, ratio4);
	//give result values to css
	result2.style.background  = mixed2;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result2B.style.background = mixed2;
		result2B.style.width  = r2;
		result2B.style.height = r2;
		showHidePlusEqual();
		if(r2 === '0px'){
			result2B.style.border = '0px';
		}else{
			result2B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});

ratio5.addEventListener('input', function(){
	ratio5 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t3 = ratio6 / (ratio5 + ratio6);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio5 + ratio6 === 0){
		mixed3 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r3 = cirRadi(ratio5, ratio6);
	//give result values to css
	result3.style.background  = mixed3;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result3B.style.background = mixed3;
		result3B.style.width  = r3;
		result3B.style.height = r3;
		showHidePlusEqual();
		if(r3 === '0px'){
			result3B.style.border = '0px';
		}else{
			result3B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});

ratio6.addEventListener('input', function(){
	ratio6 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		t3 = ratio6 / (ratio5 + ratio6);
		t5 = (ratio5 + ratio6) / (ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6);
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
	}else{
		mixed  = "#999999"; // gray
	}
	if(ratio5 + ratio6 === 0){
		mixed3 = "#999999"; // gray
	}
	//calculate sizes of small result circles based on the ratio amount
	r3 = cirRadi(ratio5, ratio6);
	//give result values to css
	result3.style.background  = mixed3;
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result3B.style.background = mixed3;
		result3B.style.width  = r3;
		result3B.style.height = r3;
		showHidePlusEqual();
		if(r3 === '0px'){
			result3B.style.border = '0px';
		}else{
			result3B.style.border = '1px solid rgba(221,221,221,.5)';
		}
	}
	resultm.style.background = mixed;
	touchedR();
});


//Calculate circle radius in pixels
function cirRadi(ratio1, ratio2){
	return String(parseInt((45 * (ratio1 + ratio2)) ** .5, 10)) + 'px';
}

//show and hide "+" and "=" symbols
function showHidePlusEqual(){
	if(r1 === '0px' && r2 !== '0px' && r3 !== '0px'){
		plus1.innerHTML = '';
		plus2.innerHTML = '<i class="fa-solid fa-plus mx-2"></i>';
		equals.innerHTML = '<i class="fa-solid fa-equals mx-2"></i>';
	}else if((r1 !== '0px' && r2 === '0px' && r3 !== '0px') ||
	(r1 !== '0px' && r2 !== '0px' && r3 === '0px')){
		plus2.innerHTML = '';
		plus1.innerHTML = '<i class="fa-solid fa-plus mx-2"></i>';
		equals.innerHTML = '<i class="fa-solid fa-equals mx-2"></i>';
	}else if((r1 === '0px' && r2 === '0px' && r3 !== '0px') ||
	(r1 === '0px' && r2 !== '0px' && r3 === '0px') ||
	(r1 !== '0px' && r2 === '0px' && r3 === '0px')){
		plus1.innerHTML = '';
		plus2.innerHTML = '';
		equals.innerHTML = '<i class="fa-solid fa-equals mx-2"></i>';
	}else if(r1 === '0px' && r2 === '0px' && r3 === '0px'){
		plus1.innerHTML = '';
		plus2.innerHTML = '';
		equals.innerHTML = '';
	}else{
		plus1.innerHTML = '<i class="fa-solid fa-plus mx-2"></i>';
		plus2.innerHTML = '<i class="fa-solid fa-plus mx-2"></i>';
		equals.innerHTML = '<i class="fa-solid fa-equals mx-2"></i>';
	}
}

//show and hide "=" symbol
function showHideEqual(){
	if(ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 == 0){
		equals.innerHTML = '';
	}else{
		equals.innerHTML = '<i class="fa-solid fa-equals mx-2"></i>';
	}
}

//initialize ratio values
function initRat(){
	if(isNaN(ratio1)){
		ratio1 = 10;
	}
	if(isNaN(ratio2)){
		ratio2 = 10;
	}
	if(isNaN(ratio3)){
		ratio3 = 10;
	}
	if(isNaN(ratio4)){
		ratio4 = 10;
	}
	if(isNaN(ratio5)){
		ratio5 = 10;
	}
	if(isNaN(ratio6)){
		ratio6 = 10;
	}
}

//change color by input type="color"
let palette1 = document.getElementById('palette1');
palette1.value = "#ffffff";
palette1.addEventListener('change', function(){
	rgb1 = this.value;
	name1 = 'Palette 1';
	nameJa1 = 'パレット1';
	color1.style.background = rgb1;
	color1.style.color = textColor(rgb1);
	if(colorName === 'true'){
		if(language === 'en'){
			color1.innerHTML = 'Palette 1';
		}else{
			color1.innerHTML = 'パレット1';
		}
	}

	if(ratio1 + ratio2 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
});

let palette2 = document.getElementById('palette2');
palette2.value = "#ffffff";
palette2.addEventListener('change', function(){
	rgb2 = this.value;
	name2 = 'Palette 2';
	nameJa2 = 'パレット2';
	color2.style.background = rgb2;
	color2.style.color = textColor(rgb2);
	if(colorName === 'true'){
		if(language === 'en'){
			color2.innerHTML = 'Palette 2';
		}else{
			color2.innerHTML = 'パレット2';
		}
	}

	if(ratio1 + ratio2 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
			showHideEqual();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
});

let palette3 = document.getElementById('palette3');
palette3.value = "#ffffff";
palette3.addEventListener('change', function(){
	rgb3 = this.value;
	name3 = 'Palette 3';
	nameJa3 = 'パレット3';
	color3.style.background = rgb3;
	color3.style.color = textColor(rgb3);
	if(colorName === 'true'){
		if(language === 'en'){
			color3.innerHTML = 'Palette 3';
		}else{
			color3.innerHTML = 'パレット3';
		}
	}

	if(ratio3 + ratio4 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
});

let palette4 = document.getElementById('palette4');
palette4.value = "#ffffff";
palette4.addEventListener('change', function(){
	rgb4 = this.value;
	name4 = 'Palette 4';
	nameJa4 = 'パレット4';
	color4.style.background = rgb4;
	color4.style.color = textColor(rgb4);
	if(colorName === 'true'){
		if(language === 'en'){
			color4.innerHTML = 'Palette 4';
		}else{
			color4.innerHTML = 'パレット4';
		}
	}

	if(ratio3 + ratio4 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
});

let palette5 = document.getElementById('palette5');
palette5.value = "#ffffff";
palette5.addEventListener('change', function(){
	rgb5 = this.value;
	name5 = 'Palette 5';
	nameJa5 = 'パレット5';
	color5.style.background = rgb5;
	color5.style.color = textColor(rgb5);
	if(colorName === 'true'){
		if(language === 'en'){
			color5.innerHTML = 'Palette 5';
		}else{
			color5.innerHTML = 'パレット5';
		}
	}

	if(ratio5 + ratio6 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
});

let palette6 = document.getElementById('palette6');
palette6.value = "#ffffff";
palette6.addEventListener('change', function(){
	rgb6 = this.value;
	name6 = 'Palette 6';
	nameJa6 = 'パレット6';
	color6.style.background = rgb6;
	color6.style.color = textColor(rgb6);
	if(colorName === 'true'){
		if(language === 'en'){
			color6.innerHTML = 'Palette 6';
		}else{
			color6.innerHTML = 'パレット6';
		}
	}

	if(ratio5 + ratio6 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed3 = mixbox.lerp(rgb5, rgb6, t3);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
});

let palette7 = document.getElementById('palette7');
palette7.value = "#ffffff";
palette7.addEventListener('change', function(){
	mixed1 = this.value;
	rgb1 = mixed1;
	rgb2 = mixed1;
	name1 = 'Palette7';
	nameJa1 = 'パレット7';
	name2 = 'Palette7';
	nameJa2 = 'パレット7';
	color1.style.background = mixed1;
	color2.style.background = mixed1;
	color1.style.color = textColor(mixed1);
	color2.style.color = textColor(mixed1);
	if(colorName === 'true'){
		if(language === 'en'){
			color1.innerHTML = 'Palette 7';
			color2.innerHTML = 'Palette 7';
		}else{
			color1.innerHTML = 'パレット7';
			color2.innerHTML = 'パレット7';
		}
	}

	if(ratio1 + ratio2 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result1.style.background = mixed1;
		if(breakDown){
			brkOn();
		}else{
			result1B.style.background = mixed1;
		}
		resultm.style.background = mixed;
	}
});

let palette8 = document.getElementById('palette8');
palette8.value = "#ffffff";
palette8.addEventListener('change', function(){
	mixed2 = this.value;
	rgb3 = mixed2;
	rgb4 = mixed2;
	name3 = 'Palette8';
	nameJa3 = 'パレット8';
	name4 = 'Palette8';
	nameJa4 = 'パレット8';
	color3.style.background = mixed2;
	color4.style.background = mixed2;
	color3.style.color = textColor(mixed2);
	color4.style.color = textColor(mixed2);
	if(colorName === 'true'){
		if(language === 'en'){
			color3.innerHTML = 'Palette 8';
			color4.innerHTML = 'Palette 8';
		}else{
			color3.innerHTML = 'パレット8';
			color4.innerHTML = 'パレット8';
		}
	}

	if(ratio3 + ratio4 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed4 = mixbox.lerp(mixed1, mixed2, t4);
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result2.style.background = mixed2;
		if(breakDown){
			brkOn();
		}else{
			result2B.style.background = mixed2;
		}
		resultm.style.background = mixed;
	}
});

let palette9 = document.getElementById('palette9');
palette9.value = "#ffffff";
palette9.addEventListener('change', function(){
	mixed3 = this.value;
	rgb5 = mixed3;
	rgb6 = mixed3;
	name5 = 'Palette9';
	nameJa5 = 'パレット9';
	name6 = 'Palette9';
	nameJa6 = 'パレット9';
	color5.style.background = mixed3;
	color6.style.background = mixed3;
	color5.style.color = textColor(mixed3);
	color6.style.color = textColor(mixed3);
	if(colorName === 'true'){
		if(language === 'en'){
			color5.innerHTML = 'Palette 9';
			color6.innerHTML = 'Palette 9';
		}else{
			color5.innerHTML = 'パレット9';
			color6.innerHTML = 'パレット9';
		}
	}

	if(ratio5 + ratio6 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6 !== 0){
		mixed  = mixbox.lerp(mixed4, mixed3, t5);
		result3.style.background = mixed3;
		if(breakDown){
			brkOn();
		}else{
			result3B.style.background = mixed3;
		}
		resultm.style.background = mixed;
	}
});

//breakdown on/off
function brkDown(){
	if(breakDown){
		brkOff();
		breakDown = false;
		if(language === 'en'){
			breakBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="brkDown()" id="breakText">Break Down</button>';
		}else{
			breakBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="brkDown()" id="breakText">色彩分解</button>';
		}
	}else{
		brkOn();
		result1B.style.background  = '#fff';
		result1B.style.width  = '210px';
		result1B.style.border = '0px';
		result2B.style.background  = '#fff';
		result2B.style.width  = '0px';
		result2B.style.height = '0px';
		result2B.style.border = '0px';
		result3B.style.background  = '#fff';
		result3B.style.width  = '0px';
		result3B.style.height = '0px';
		result3B.style.border = '0px';
		plus1.innerHTML = '';
		plus2.innerHTML = '';
		breakDown = true;
		if(language === 'en'){
			breakBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="brkDown()" id="breakText">Break Down</button>';
		}else{
			breakBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="brkDown()" id="breakText">色彩分解</button>';
		}
	}
}

function brkOff(){
	result1B.innerHTML = '';
	result1B.style.background  = mixed1;
	result1B.style.width  = r1;
	result1B.style.height = r1;
	if(r1 !== '0px'){
		result1B.style.border = '1px solid rgba(221,221,221,.5)';
	}
	result2B.style.background  = mixed2;
	result2B.style.width  = r2;
	result2B.style.height = r2;
	if(r2 !== '0px'){
		result2B.style.border = '1px solid rgba(221,221,221,.5)';
	}
	result3B.style.background  = mixed3;
	result3B.style.width  = r3;
	result3B.style.height = r3;
	if(r3 !== '0px'){
		result3B.style.border = '1px solid rgba(221,221,221,.5)';
	}
	showHidePlusEqual();
}

function brkOn(){
	initRat();
	var amount = ratio1 + ratio2 + ratio3 + ratio4 + ratio5 + ratio6;
	if(amount <= 20){
		result1B.style.height = '10px';
	}else if(amount <= 40){
		result1B.style.height = '20px';
	}else if(amount <= 60){
		result1B.style.height = '30px';
	}else if(amount <= 80){
		result1B.style.height = '40px';
	}else if(amount <= 100){
		result1B.style.height = '50px';
	}else{
		result1B.style.height = '60px';
	}

	var breaks = '';
	for (let i = 0; i < ratio1; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb1 + '; margin: 1px;"></div>';
	}
	for (let i = 0; i < ratio2; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb2 + '; margin: 1px;"></div>';
	}
	for (let i = 0; i < ratio3; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb3 + '; margin: 1px;"></div>';
	}
	for (let i = 0; i < ratio4; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb4 + '; margin: 1px;"></div>';
	}
	for (let i = 0; i < ratio5; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb5 + '; margin: 1px;"></div>';
	}
	for (let i = 0; i < ratio6; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb6 + '; margin: 1px;"></div>';
	}
	result1B.innerHTML = breaks;
}

//color name text on/off
function colName(){
	if(colorName === 'true'){
		hideName();
	}else{
		showName();
	}
}

function hideName(){
	color1.innerHTML = '';
	color2.innerHTML = '';
	color3.innerHTML = '';
	color4.innerHTML = '';
	color5.innerHTML = '';
	color6.innerHTML = '';
	colorName = 'false';
	if(language === 'en'){
		colNameBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="colName()" id="colNameText">Color Name</button>';
	}else{
		colNameBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="colName()" id="colNameText">色名</button>';
	}
	//post method codes
	colorNamePhp.innerHTML = '<input type="hidden" name="color_name_php" value="false">';
	colorNamePhp2.innerHTML = '<input type="hidden" name="color_name_php" value="false">';
}

function showName(){
	if(language === 'en'){
		color1.innerHTML = name1;
		color2.innerHTML = name2;
		color3.innerHTML = name3;
		color4.innerHTML = name4;
		color5.innerHTML = name5;
		color6.innerHTML = name6;
	}else{
		color1.innerHTML = nameJa1;
		color2.innerHTML = nameJa2;
		color3.innerHTML = nameJa3;
		color4.innerHTML = nameJa4;
		color5.innerHTML = nameJa5;
		color6.innerHTML = nameJa6;
	}
	colorName = 'true';
	if(language === 'en'){
		colNameBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="colName()" id="colNameText">Color Name</button>';
	}else{
		colNameBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="colName()" id="colNameText">色名</button>';
	}
	//post method codes
	colorNamePhp.innerHTML = '<input type="hidden" name="color_name_php" value="true">';
	colorNamePhp2.innerHTML = '<input type="hidden" name="color_name_php" value="true">';
}

function langEn(){
	//basic text
	text1.innerHTML = 'Color 1';
	text2.innerHTML = 'Color 2';
	text3.innerHTML = 'Color 3';
	text4.innerHTML = 'Color 4';
	text5.innerHTML = 'Color 5';
	text6.innerHTML = 'Color 6';
	text7.innerHTML = 'go back';
	modalText1.innerHTML = 'Color 1';
	modalText2.innerHTML = 'Color 2';
	modalText3.innerHTML = 'Color 3';
	modalText4.innerHTML = 'Color 4';
	modalText5.innerHTML = 'Color 5';
	modalText6.innerHTML = 'Color 6';
	modalText7.innerHTML = 'Color 1/Color 2';
	modalText8.innerHTML = 'Color 3/Color 4';
	modalText9.innerHTML = 'Color 5/Color 6';
	
	//post method codes
	langPhp.innerHTML = '<input type="hidden" name="language_php" value="en">';
	langPhp2.innerHTML = '<input type="hidden" name="language_php" value="en">';

	//language buttons
	enBtn.innerHTML = '<button class="btn btn-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>';
	jaBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>';

	//option menu modal text
	menuHd.innerHTML = 'Options';
	breakText.innerHTML = 'Break Down';
	colNameText.innerHTML = 'Color Name';

	//license modal text
	lcsBtn.innerHTML = 'License';
	lcsHd.innerHTML = 'License';
	lcsText1.innerHTML = 'Using the method to reproduce the color made by mixing real paints in RGB provided at Mixbox website.';
	lcsText2.innerHTML = 'Mixbox is provided under the CC BY-NC 4.0 license for non-commercial use only.';
	
	//color name text
	if(colorName === 'true'){
		color1.innerHTML = name1;
		color2.innerHTML = name2;
		color3.innerHTML = name3;
		color4.innerHTML = name4;
		color5.innerHTML = name5;
		color6.innerHTML = name6;
	}

	//change language
	language = 'en';
}

function langJa(){
	//basic text
	text1.innerHTML = '色1';
	text2.innerHTML = '色2';
	text3.innerHTML = '色3';
	text4.innerHTML = '色4';
	text5.innerHTML = '色5';
	text6.innerHTML = '色6';
	text7.innerHTML = '戻る';
	modalText1.innerHTML = '色1';
	modalText2.innerHTML = '色2';
	modalText3.innerHTML = '色3';
	modalText4.innerHTML = '色4';
	modalText5.innerHTML = '色5';
	modalText6.innerHTML = '色6';
	modalText7.innerHTML = '色1/色2';
	modalText8.innerHTML = '色3/色4';
	modalText9.innerHTML = '色5/色6';

	//post method codes
	langPhp.innerHTML = '<input type="hidden" name="language_php" value="ja">';
	langPhp2.innerHTML = '<input type="hidden" name="language_php" value="ja">';
	
	//language buttons
	enBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>';
	jaBtn.innerHTML = '<button class="btn btn-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>';
	
	//option menu modal text
	menuHd.innerHTML = 'オプション';
	breakText.innerHTML = '色彩分解';
	colNameText.innerHTML = '色名';

	//license modal text
	lcsBtn.innerHTML = 'ライセンス';
	lcsHd.innerHTML = 'ライセンス';
	lcsText1.innerHTML = 'Mixboxサイトに掲載されている、絵具を混ぜたときの色をRGBで再現する関数を使用しています。';
	lcsText2.innerHTML = 'Mixboxは CC BY-NC 4.0 ライセンスにより非営利目的のみで提供されています。';
	
	//color name text
	if(colorName === 'true'){
		color1.innerHTML = nameJa1;
		color2.innerHTML = nameJa2;
		color3.innerHTML = nameJa3;
		color4.innerHTML = nameJa4;
		color5.innerHTML = nameJa5;
		color6.innerHTML = nameJa6;
	}

	//change language
	language = 'ja';
}

//change text color based on background color
function textColor(rgb){
	var r = parseInt(rgb.substr(1, 2), 16);
	var g = parseInt(rgb.substr(3, 2), 16);
	var b = parseInt(rgb.substr(5, 2), 16);
	if(r + 1.4 * g + .8 * b < 450){
		return "#fff"; // white
	}else{
		return "#6c757d"; // gray (secondary in Bootstrap 5.2.3)
	}
}