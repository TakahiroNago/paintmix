// set language for first visitor
function langSetting(){
	//get the browser language
	var language = (navigator.language) ? navigator.language : navigator.userLanguage;
	
	//when language is Japanese, change language to Japanese
	if(language.toLowerCase().indexOf("ja") !== -1){
		langJa();
	}else{
		langEn();
	}
}
if(!localStorage.getItem("visited")){
	localStorage.setItem("visited", true);
	localStorage.setItem("touched", 'false');
	localStorage.setItem("touchedR", 'false');
	localStorage.setItem("touchedM", 'false');
	localStorage.setItem("nameDisp", 'true');
	langSetting();
}else{
	var language = localStorage.getItem("lang");
}

//initiation of variables
if(localStorage.getItem("touched") == 'true'){
	var touch = true;
}else{
	var touch = false;
}

if(localStorage.getItem("touchedR") == 'true'){
	var touchR = true;
}else{
	var touchR = false;
}

if(localStorage.getItem("nameDisp") == 'true'){
	var colorName = true;
}else{
	var colorName = false;
}

var t1 = 0.5;  // mix ratio for colors 1 to 2
var t2 = 0.5;  // mix ratio for colors 3 to 4
var t3 = 0.5;  // mix ratio for colors 1 and 2 to 3 and 4
var tw = 0.5;  // mix ratio for colors 1-4 to 5
var r1 = 25; // radius for result circle 1
var r2 = 25; // radius for result circle 2
var r3 = 25; // radius for result circle 3
var r4 = 25; // radius for result circle 4

//set text colors
color1.style.color = textColor(rgb1);
color2.style.color = textColor(rgb2);
color3.style.color = textColor(rgb3);
color4.style.color = textColor(rgb4);
color5.style.color = textColor(rgb5);

//color mix function from https://scrtwpns.com/mixbox/
var mixed1 = mixbox.lerp(rgb1, rgb2, t1);
var mixed2 = mixbox.lerp(rgb3, rgb4, t2);
var mixed  = mixbox.lerp(mixed1, mixed2, t3);
var mixedw = mixbox.lerp(mixed, rgb5, tw);

//break down on/off
var breakDown = false; //off

//display first colors
color1.style.background = rgb1;
color2.style.background = rgb2;
color3.style.background = rgb3;
color4.style.background = rgb4;
color5.style.background = rgb5;
result1.style.background = rgb1;
result2.style.background = rgb2;
result3.style.background = rgb3;
result4.style.background = rgb4;
resultCircle.style.background = mixed;
resultw.style.background = mixedw;

//change language to Japanese if language is ja
if(language === 'ja'){
	langJa();
}

//set color name display
if(colorName){
	showName();
}else{
	hideName();
}

//show finger icon on color modal when not touched
if(!touch){
	window.setTimeout(showFinger, 3000);
}
function showFinger(){
	if(!touch){
		finger.innerHTML = '<img src="img/finger.gif" class="mt-3 z-9 finger" onclick="touched()">';
	} 
}

//show finger icon on range input when range is not touched and color modal is touched
if(!touch && touch){
	setTimeout(showFingerR, 3000);
}
function showFingerR(){
	if(!touchR){
		fingerR.innerHTML = '<img src="img/fingerR.gif" class="mt-4 z-9 fingerR" onclick="touchedR()">';
	}
}

//check if color modal is touched
function touched(){
	touch = true;
	localStorage.setItem("touched", 'true');
	finger.innerHTML = '';
	if(!touchR){
		setTimeout(showFingerR, 3000);
	}
}

//check if range input is touched
function touchedR(){
	touchR = true;
	localStorage.setItem("touchedR", 'true');
	fingerR.innerHTML = '';
}

//change colors by modal
function changeColor1(color, name, nameJa){
	rgb1 = color;
	name1 = name;
	nameJa1 = nameJa;
	color1.style.background = rgb1;
	color1.style.color = textColor(color);
	if(colorName){
		if(language === 'en'){
			color1.innerHTML = name;
		}else{
			color1.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result1.style.background = rgb1;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
}

function changeColor2(color, name, nameJa){
	rgb2 = color;
	name2 = name;
	nameJa2 = nameJa;
	color2.style.background = rgb2;
	color2.style.color = textColor(color);
	if(colorName){
		if(language === 'en'){
			color2.innerHTML = name;
		}else{
			color2.innerHTML = nameJa;
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result2.style.background = rgb2;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
}

function changeColor3(color, name, nameJa){
	rgb3 = color;
	name3 = name;
	nameJa3 = nameJa;
	color3.style.background = rgb3;
	color3.style.color = textColor(color);
	if(colorName){
		if(language === 'en'){
			color3.innerHTML = name;
		}else{
			color3.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result3.style.background = rgb3;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
}

function changeColor4(color, name, nameJa){
	rgb4 = color;
	name4 = name;
	nameJa4 = nameJa;
	color4.style.background = rgb4;
	color4.style.color = textColor(color);
	if(colorName){
		if(language === 'en'){
			color4.innerHTML = name;
		}else{
			color4.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result4.style.background = rgb4;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
}

function changeColor5(color, name, nameJa){
	rgb5 = color;
	name5 = name;
	nameJa5 = nameJa;
	color5.style.background = rgb5;
	color5.style.color = textColor(color);
	if(colorName){
		if(language === 'en'){
			color5.innerHTML = name;
		}else{
			color5.innerHTML = nameJa;
		}
	}
	
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		resultw.style.background = mixedw;
	}else{
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
		resultw.style.background = mixedw;
	}
}

// change color by input type="range"
let ratio1 = document.getElementById('ratio1');
let ratio2 = document.getElementById('ratio2');
let ratio3 = document.getElementById('ratio3');
let ratio4 = document.getElementById('ratio4');
let ratio5 = document.getElementById('ratio5');

ratio1.addEventListener('input', function(){
	ratio1 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		t1 = ratio2 / (ratio1 + ratio2);
		t3 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		tw = ratio5 / 20;
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
	}else{
		mixed  = "#999999"; // gray
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
	}
	//calculate sizes of small result circles based on the ratio amount
	r1 = cirRadi(ratio1);
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result1.style.width  = r1 + 'px';
		result1.style.height = r1 + 'px';
		result1.style.background = rgb1;
		if(r1 === 0){
			result1.style.border = '0px';
		}else{
			result1.style.border = '1px solid rgba(221,221,221,.5)';
		}
		showHidePlus();
		showHideEqual();
	}
	resultCircle.style.background = mixed;
	resultw.style.background = mixedw;
	touchedR();
});

ratio2.addEventListener('input', function(){
	ratio2 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		t1 = ratio2 / (ratio1 + ratio2);
		t3 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		tw = ratio5 / 20;
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
	}else{
		mixed  = "#999999"; // gray
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
	}
	//calculate sizes of small result circles based on the ratio amount
	r2 = cirRadi(ratio2);
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result2.style.width  = r2 + 'px';
		result2.style.height = r2 + 'px';
		result2.style.background = rgb2;
		if(r2 === 0){
			result2.style.border = '0px';
		}else{
			result2.style.border = '1px solid rgba(221,221,221,.5)';
		}
		showHidePlus();
		showHideEqual();
	}
	resultCircle.style.background = mixed;
	resultw.style.background = mixedw;
	touchedR();
});

ratio3.addEventListener('input', function(){
	ratio3 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		t2 = ratio4 / (ratio3 + ratio4);
		t3 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		tw = ratio5 / 20;
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
	}else{
		mixed  = "#999999"; // gray
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
	}
	//calculate sizes of small result circles based on the ratio amount
	r3 = cirRadi(ratio3);
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result3.style.width  = r3 + 'px';
		result3.style.height = r3 + 'px';
		result3.style.background = rgb3;
		if(r3 === 0){
			result3.style.border = '0px';
		}else{
			result3.style.border = '1px solid rgba(221,221,221,.5)';
		}
		showHidePlus();
		showHideEqual();
	}
	resultCircle.style.background = mixed;
	resultw.style.background = mixedw;
	touchedR();
});

ratio4.addEventListener('input', function(){
	ratio4 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		t2 = ratio4 / (ratio3 + ratio4);
		t3 = (ratio3 + ratio4) / (ratio1 + ratio2 + ratio3 + ratio4);
		tw = ratio5 / 20;
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
	}else{
		mixed  = "#999999"; // gray
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
	}
	//calculate sizes of small result circles based on the ratio amount
	r4 = cirRadi(ratio4);
	if(breakDown){
		brkOn();
		showHideEqual();
	}else{
		result4.style.width  = r4 + 'px';
		result4.style.height = r4 + 'px';
		result4.style.background = rgb4;
		if(r4 === 0){
			result4.style.border = '0px';
		}else{
			result4.style.border = '1px solid rgba(221,221,221,.5)';
		}
		showHidePlus();
		showHideEqual();
	}
	resultCircle.style.background = mixed;
	resultw.style.background = mixedw;
	touchedR();
});

ratio5.addEventListener('input', function(){
	ratio5 = Number(this.value);
	//initialize ratio values
	initRat();
	//calculation of mixed color
	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		tw = ratio5 / 20;
		mixedw  = mixbox.lerp(mixed, rgb5, tw);
	}else{
		if(ratio5 !== 0){
			mixedw = rgb5;
		}else{
			mixedw  = "#999999"; // gray
		}
	}
	resultCircle.style.background = mixed;
	resultw.style.background = mixedw;
	touchedR();
});

//Calculate circle radius in pixels
function cirRadi(ratio){
	return parseInt((62.5 * (ratio)) ** .5, 10);
}

//show and hide "+" symbols
function showHidePlus(){
	if(r4 === 0 || (r4 !== 0 && r1 === 0 && r2 === 0 && r3 === 0)){
		plus3.innerHTML = '';
	}else{
		plus3.innerHTML = '<i class="fa-solid fa-plus mx-1"></i>';
	}

	if(r3 === 0 || (r3 !== 0 && r1 === 0 && r2 === 0)){
		plus2.innerHTML = '';
	}else{
		plus2.innerHTML = '<i class="fa-solid fa-plus mx-1"></i>';
	}

	if(r2 === 0 || (r2 !== 0 && r1 === 0)){
		plus1.innerHTML = '';
	}else{
		plus1.innerHTML = '<i class="fa-solid fa-plus mx-1"></i>';
	}
}

//show and hide "=" symbol
function showHideEqual(){
	if(ratio1 + ratio2 + ratio3 + ratio4 == 0){
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
}

//change color by input type="color"
let palette1 = document.getElementById('palette1');
palette1.value = "#eeeeee";
palette1.addEventListener('change', function(){
	rgb1 = this.value;
	name1 = 'Palette 1';
	nameJa1 = 'パレット1';
	color1.style.background = rgb1;
	color1.style.color = textColor(rgb1);
	if(colorName){
		if(language === 'en'){
			color1.innerHTML = 'Palette 1';
		}else{
			color1.innerHTML = 'パレット1';
		}
	}

	if(ratio1 + ratio2 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result1.style.background = rgb1;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
});

let palette2 = document.getElementById('palette2');
palette2.value = "#eeeeee";
palette2.addEventListener('change', function(){
	rgb2 = this.value;
	name2 = 'Palette 2';
	nameJa2 = 'パレット2';
	color2.style.background = rgb2;
	color2.style.color = textColor(rgb2);
	if(colorName){
		if(language === 'en'){
			color2.innerHTML = 'Palette 2';
		}else{
			color2.innerHTML = 'パレット2';
		}
	}

	if(ratio1 + ratio2 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed1 = mixbox.lerp(rgb1, rgb2, t1);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result2.style.background = rgb2;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
});

let palette3 = document.getElementById('palette3');
palette3.value = "#eeeeee";
palette3.addEventListener('change', function(){
	rgb3 = this.value;
	name3 = 'Palette 3';
	nameJa3 = 'パレット3';
	color3.style.background = rgb3;
	color3.style.color = textColor(rgb3);
	if(colorName){
		if(language === 'en'){
			color3.innerHTML = 'Palette 3';
		}else{
			color3.innerHTML = 'パレット3';
		}
	}

	if(ratio3 + ratio4 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result3.style.background = rgb3;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
});

let palette4 = document.getElementById('palette4');
palette4.value = "#eeeeee";
palette4.addEventListener('change', function(){
	rgb4 = this.value;
	name4 = 'Palette 4';
	nameJa4 = 'パレット4';
	color4.style.background = rgb4;
	color4.style.color = textColor(rgb4);
	if(colorName){
		if(language === 'en'){
			color4.innerHTML = 'Palette 4';
		}else{
			color4.innerHTML = 'パレット4';
		}
	}

	if(ratio3 + ratio4 !== 0 && ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixed2 = mixbox.lerp(rgb3, rgb4, t2);
		mixed  = mixbox.lerp(mixed1, mixed2, t3);
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		if(breakDown){
			brkOn();
		}else{
			result4.style.background = rgb4;
		}
		resultCircle.style.background = mixed;
		resultw.style.background = mixedw;
	}
});

let palette5 = document.getElementById('palette5');
palette5.value = "#eeeeee";
palette5.addEventListener('change', function(){
	rgb5 = this.value;
	name5 = 'Palette 5';
	nameJa5 = 'パレット5';
	color5.style.background = rgb5;
	color5.style.color = textColor(rgb5);
	if(colorName){
		if(language === 'en'){
			color5.innerHTML = 'Palette 5';
		}else{
			color5.innerHTML = 'パレット5';
		}
	}

	if(ratio1 + ratio2 + ratio3 + ratio4 !== 0){
		mixedw = mixbox.lerp(mixed, rgb5, tw);
		resultw.style.background = mixedw;
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
			breakBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="brkDown()" id="breakText">分解表示</button>';
		}
	}else{
		brkOn();
		result1.style.background  = '#fff';
		result1.style.width  = '210px';
		result1.style.border = '0px';
		result2.style.background  = '#fff';
		result2.style.width  = '0px';
		result2.style.height = '0px';
		result2.style.border = '0px';
		result3.style.background  = '#fff';
		result3.style.width  = '0px';
		result3.style.height = '0px';
		result3.style.border = '0px';
		result4.style.background  = '#fff';
		result4.style.width  = '0px';
		result4.style.height = '0px';
		result4.style.border = '0px';
		plus1.innerHTML = '';
		plus2.innerHTML = '';
		plus3.innerHTML = '';
		breakDown = true;
		if(language === 'en'){
			breakBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="brkDown()" id="breakText">Break Down</button>';
		}else{
			breakBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="brkDown()" id="breakText">分解表示</button>';
		}
	}
}

function brkOff(){
	result1.innerHTML = '';
	result1.style.width  = r1 + 'px';
	result1.style.height = r1 + 'px';
	result1.style.background = rgb1;
	if(r1 === 0){
		result1.style.border = '0px';
	}else{
		result1.style.border = '1px solid rgba(221,221,221,.5)';
	}
	result2.style.width  = r2 + 'px';
	result2.style.height = r2 + 'px';
	result2.style.background = rgb2;
	if(r2 === 0){
		result2.style.border = '0px';
	}else{
		result2.style.border = '1px solid rgba(221,221,221,.5)';
	}
	result3.style.width  = r3 + 'px';
	result3.style.height = r3 + 'px';
	result3.style.background = rgb3;
	if(r3 === 0){
		result3.style.border = '0px';
	}else{
		result3.style.border = '1px solid rgba(221,221,221,.5)';
	}
	result4.style.width  = r4 + 'px';
	result4.style.height = r4 + 'px';
	result4.style.background = rgb4;
	if(r4 === 0){
		result4.style.border = '0px';
	}else{
		result4.style.border = '1px solid rgba(221,221,221,.5)';
	}
	showHidePlus();
	showHideEqual();
}

function brkOn(){
	initRat();
	var breaks = '';
	var count = 0;
	for (let i = 0; i < ratio1; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb1 + '; margin: 1px;"></div>';
		count++;
	}
	for (let i = 0; i < ratio2; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb2 + '; margin: 1px;"></div>';
		count++;
	}
	for (let i = 0; i < ratio3; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb3 + '; margin: 1px;"></div>';
		count++;
	}
	for (let i = 0; i < ratio4; i++) {
		breaks += '<div class="break-down float-start" style="background: ' + rgb4 + '; margin: 1px;"></div>';
		count++;
	}
	result1.innerHTML = breaks;
	if (count <= 20){
		result1.style.height = '10px';
	}else if (count <= 40){
		result1.style.height = '20px';
	}else if (count <= 60){
		result1.style.height = '30px';
	}else{
		result1.style.height = '40px';
	}
}

//color name text on/off
function colName(){
	if(colorName){
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
	colorName = false;
	localStorage.setItem("nameDisp", 'false');
	if(language === 'en'){
		colNameBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="colName()" id="colNameText">Color Name</button>';
	}else{
		colNameBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="colName()" id="colNameText">色名</button>';
	}
}

function showName(){
	if(language === 'en'){
		color1.innerHTML = name1;
		color2.innerHTML = name2;
		color3.innerHTML = name3;
		color4.innerHTML = name4;
		color5.innerHTML = name5;
	}else{
		color1.innerHTML = nameJa1;
		color2.innerHTML = nameJa2;
		color3.innerHTML = nameJa3;
		color4.innerHTML = nameJa4;
		color5.innerHTML = nameJa5;
	}
	colorName = true;
	localStorage.setItem("nameDisp", 'true');
	if(language === 'en'){
		colNameBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="colName()" id="colNameText">Color Name</button>';
	}else{
		colNameBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="colName()" id="colNameText">色名</button>';
	}
}

function langEn(){
	//basic text
	text1.innerHTML = 'Color 1';
	text2.innerHTML = 'Color 2';
	text3.innerHTML = 'Color 3';
	text4.innerHTML = 'Color 4';
	text7.innerHTML = 'go back';
	modalText1.innerHTML = 'Select Color 1';
	modalText2.innerHTML = 'Select Color 2';
	modalText3.innerHTML = 'Select Color 3';
	modalText4.innerHTML = 'Select Color 4';

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
	if(colorName){
		color1.innerHTML = name1;
		color2.innerHTML = name2;
		color3.innerHTML = name3;
		color4.innerHTML = name4;
		color5.innerHTML = name5;
	}

	//change language
	language = 'en';
	localStorage.setItem("lang", 'en');
}

function langJa(){
	//basic text
	text1.innerHTML = '色1';
	text2.innerHTML = '色2';
	text3.innerHTML = '色3';
	text4.innerHTML = '色4';
	text7.innerHTML = '戻る';
	modalText1.innerHTML = '色1を選択';
	modalText2.innerHTML = '色2を選択';
	modalText3.innerHTML = '色3を選択';
	modalText4.innerHTML = '色4を選択';
	
	//language buttons
	enBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>';
	jaBtn.innerHTML = '<button class="btn btn-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>';
	
	//option menu modal text
	menuHd.innerHTML = 'オプション';
	breakText.innerHTML = '分解表示';
	colNameText.innerHTML = '色名';

	//license modal text
	lcsBtn.innerHTML = 'ライセンス';
	lcsHd.innerHTML = 'ライセンス';
	lcsText1.innerHTML = 'Mixboxサイトに掲載されている、絵具を混ぜたときの色をRGBで再現する関数を使用しています。';
	lcsText2.innerHTML = 'Mixboxは CC BY-NC 4.0 ライセンスにより非営利目的のみで提供されています。';
	
	//color name text
	if(colorName){
		color1.innerHTML = nameJa1;
		color2.innerHTML = nameJa2;
		color3.innerHTML = nameJa3;
		color4.innerHTML = nameJa4;
		color5.innerHTML = nameJa5;
	}

	//change language
	language = 'ja';
	localStorage.setItem("lang", 'ja');
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