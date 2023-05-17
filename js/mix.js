if(firstVisit === 'true'){
	//get the browser language
	var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
	
	//if language is undefined, set language English
	if(lang === undefined)
		lang = 'en';
	
	//when language is Japanese, change language to Japanese
	if(lang.toLowerCase().indexOf("ja") !== -1){
		langJa();
	}
}

//initiation of variables
var t  = 0.5;         // mixing ratio
var tw = 0.5;         // white ratio
var rgbw = "#f3f4f7"; // white color rgb: titanium white

//set text colors
color1.style.color = textColor(rgb1);
color2.style.color = textColor(rgb2);

//color mix function from https://scrtwpns.com/mixbox/
var mixed  = mixbox.lerp(rgb1, rgb2, t); //returning array [r, g, b]
var mixedw = mixbox.lerp(mixed, rgbw, tw);
var mixed25  = mixbox.lerp(rgb1, rgb2, t/2);
var mixed75  = mixbox.lerp(rgb1, rgb2, t/2 + 1/2);
var mixedw25  = mixbox.lerp(mixed, rgbw, tw/2);
var mixedw75  = mixbox.lerp(mixed, rgbw, tw/2 + 1/2);

//gradient on/off
var gradient = false; //off

//display first colors
color1.style.background = rgb1;
color2.style.background = rgb2;
result.style.background = mixed;
resultw.style.background = mixedw;

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
	//change value for post method
	touchPhp.innerHTML = '<input type="hidden" name="touch_php" value="true">';
	touchPhp2.innerHTML = '<input type="hidden" name="touch_php" value="true">';
}
function showFinger(){
	if(touch === 'false'){
		finger.innerHTML = '<img src="img/finger.gif" onclick="touched()" class="mt-3 z-9 finger">';
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
		fingerR.innerHTML = '<img src="img/fingerR.gif" onclick="touchedR()" class="mt-3 z-9 fingerR">';
	}
}

//pass the value to post method link
if(touchM === 'true'){
	touchMPhp.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
	touchMPhp2.innerHTML = '<input type="hidden" name="touchM_php" value="true">'; 
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
}

//check if range input is touched
function touchedR(){
	touchR = 'true';
	fingerR.innerHTML = '';
	touchRPhp.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
	touchRPhp2.innerHTML = '<input type="hidden" name="touchR_php" value="true">'; 
}

//change color by modal
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

	if(gradient){
		calcAndShowGrad();
		calcAndShowGradW();
	}else{
		calcAndShow();
		calcAndShowW();
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

	if(gradient){
		calcAndShowGrad();
		calcAndShowGradW();
	}else{
		calcAndShow();
		calcAndShowW();
	}
}

//change color by range input
let ratio = document.getElementById('ratio');
ratio.addEventListener('input', function(){
	ratio = this.value;
	t = ratio / 20;
	
	if(gradient){
		calcAndShowGrad();
		calcAndShowGradW();
	}else{
		calcAndShow();
		calcAndShowW();
	}
	touchedR();
});

//change color (mix white) by range input
let white = document.getElementById('white');
white.addEventListener('input', function(){
	white = this.value;
	tw = white / 20;
	
	if(gradient){
		calcAndShowGradW();
	}else{
		calcAndShowW();
	}
	touchedR();
});

//change color by color input
let palette1 = document.getElementById('palette1');
palette1.value = "#ffffff"; //white
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

	if(gradient){
		calcAndShowGrad();
		calcAndShowGradW();
	}else{
		calcAndShow();
		calcAndShowW();
	}
});

let palette2 = document.getElementById('palette2');
palette2.value = "#ffffff"; //white
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
	
	if(gradient){
		calcAndShowGrad();
		calcAndShowGradW();
	}else{
		calcAndShow();
		calcAndShowW();
	}
});

//gradient on/off
function grad(){
	if(gradient){
		result.style.background = mixed;
		resultw.style.background = mixedw
		gradient = false;
		if(language === 'en'){
			gradBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="grad()" id="gradText">Gradient</button>';
		}else{
			gradBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm" onclick="grad()" id="gradText">グラデーション</button>';
		}
	}else{
		calcAndShowGrad();
		calcAndShowGradW();
		gradient = true;
		if(language === 'en'){
			gradBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="grad()" id="gradText">Gradient</button>';
		}else{
			gradBtn.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="grad()" id="gradText">グラデーション</button>';
		}
	}
}

//calculate and display result for mix color
function calcAndShow(){
	mixed  = mixbox.lerp(rgb1, rgb2, t);
	result.style.background = mixed;
}

//calculate and display result for white mix color
function calcAndShowW(){
	mixedw  = mixbox.lerp(mixed, rgbw, tw);
	resultw.style.background = mixedw;
}

//calculate and display gradient result for mix color
function calcAndShowGrad(){
	mixed  = mixbox.lerp(rgb1, rgb2, t);
	mixed25  = mixbox.lerp(rgb1, rgb2, t/2);
	mixed75  = mixbox.lerp(rgb1, rgb2, t/2 + 1/2);
	dispGrad();
}

//display gradient for mix color
function dispGrad(){
	result.style.background = '-moz-linear-gradient(left,'
		+ rgb1 + ', '
		+ mixed25 + ' ' + (20*t) + '%, '
		+ mixed + ' ' + (40*t) + '%, '
		+ mixed + ' ' + (40*t + 60) + '%, '
		+ mixed75 + ' ' + (20*t + 80) + '%, '
		+ rgb2 + ')';
	result.style.background = '-webkit-linear-gradient(left,'
		+ rgb1 + ', '
		+ mixed25 + ' ' + (20*t) + '%, '
		+ mixed + ' ' + (40*t) + '%, '
		+ mixed + ' ' + (40*t + 60) + '%, '
		+ mixed75 + ' ' + (20*t + 80) + '%, '
		+ rgb2 + ')';
	result.style.background = 'linear-gradient(left,'
		+ rgb1 + ', '
		+ mixed25 + ' ' + (20*t) + '%, '
		+ mixed + ' ' + (40*t) + '%, '
		+ mixed + ' ' + (40*t + 60) + '%, '
		+ mixed75 + ' ' + (20*t + 80) + '%, '
		+ rgb2 + ')';
}

//calculate and display gradient result for white mix color
function calcAndShowGradW(){
	mixedw = mixbox.lerp(mixed, rgbw, tw);
	mixedw25  = mixbox.lerp(mixed, rgbw, tw/2);
	mixedw75  = mixbox.lerp(mixed, rgbw, tw/2 + 1/2);
	dispGradW();
}

//display gradient for white mix color
function dispGradW(){
	resultw.style.background = '-moz-linear-gradient(left,'
		+ mixed + ', '
		+ mixedw25 + ' ' + (20*tw) + '%, '
		+ mixedw + ' ' + (40*tw) + '%, '
		+ mixedw + ' ' + (40*tw + 60) + '%, '
		+ mixedw75 + ' ' + (20*tw + 80) + '%, '
		+ rgbw + ')';
	resultw.style.background = '-webkit-linear-gradient(left,'
		+ mixed + ', '
		+ mixedw25 + ' ' + (20*tw) + '%, '
		+ mixedw + ' ' + (40*tw) + '%, '
		+ mixedw + ' ' + (40*tw + 60) + '%, '
		+ mixedw75 + ' ' + (20*tw + 80) + '%, '
		+ rgbw + ')';
	resultw.style.background = 'linear-gradient(left,'
		+ mixed + ', '
		+ mixedw25 + ' ' + (20*tw) + '%, '
		+ mixedw + ' ' + (40*tw) + '%, '
		+ mixedw + ' ' + (40*tw + 60) + '%, '
		+ mixedw75 + ' ' + (20*tw + 80) + '%, '
		+ rgbw + ')';
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
	}else{
		color1.innerHTML = nameJa1;
		color2.innerHTML = nameJa2;
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
	text3.innerHTML = 'Mix Ratio';
	text4.innerHTML = 'Mix with White';
	text5.innerHTML = 'Mix More Color';
	modalText1.innerHTML = 'Color 1';
	modalText2.innerHTML = 'Color 2';

	//post method codes
	langPhp.innerHTML = '<input type="hidden" name="language_php" value="en">';
	langPhp2.innerHTML = '<input type="hidden" name="language_php" value="en">';

	//language buttons
	enBtn.innerHTML = '<button class="btn btn-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>';
	jaBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>';

	//option menu modal text
	menuHd.innerHTML = 'Options';
	gradText.innerHTML = 'Gradient';
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
	}

	//change language
	language = 'en';
}

function langJa(){
	//basic text
	text1.innerHTML = '色1';
	text2.innerHTML = '色2';
	text3.innerHTML = '混ぜ比率';
	text4.innerHTML = '白を混ぜる';
	text5.innerHTML = 'もっと色を混ぜる';
	modalText1.innerHTML = '色1';
	modalText2.innerHTML = '色2';

	//post method codes
	langPhp.innerHTML = '<input type="hidden" name="language_php" value="ja">';
	langPhp2.innerHTML = '<input type="hidden" name="language_php" value="ja">';

	//language buttons
	enBtn.innerHTML = '<button class="btn btn-outline-secondary btn-sm float-end mt-2" onclick="langEn()">English</button>';
	jaBtn.innerHTML = '<button class="btn btn-secondary btn-sm float-end mt-2 me-2" onclick="langJa()">日本語</button>';
	
	//option menu modal text
	menuHd.innerHTML = 'オプション';
	gradText.innerHTML = 'グラデーション';
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
		return "#fff"; //white
	}else{
		return "#6c757d"; //gray (secondary in Bootstrap 5.2.3)
	}
}