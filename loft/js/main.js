
var tlMax = new TimelineMax();

// Type animation with GSAP


intro_Animation();


function init_typing(){

	var easingPower4 = new gsapTypeIt({
		el: document.getElementById('block1'),
		elClass: 'intro',
		cursorSign: '_',
		word: 'Hello, welcome to the Loft... ',
		delay:0,
		duration: 5,
		easing: Power4.easeInOut
	});

}

function init_rotating(){
	var last_cursor = $(".gsapCursor");
	last_cursor.remove();

	var rotating = new gsapTypeIt({
		el: document.getElementById('block2'),
		rotateWords: true,
		cursorSign: '_',
		delay:0,
		autoPlay: true,
		rotateWordsOptions : {
			wordsList : ['human', 'dude', 'my friend'],
			cycle: false,
			clear: true

		}

	});
}

function init_hovering(){
	$cont = $('#block1');
	parts = $.map($cont.text().split(''), function(v){
		return $('<span />', {text:v});
	});
	$cont.empty().append(parts);
}

function intro_Animation(){

	tlMax
	.to(['#intro_block'], 0, {opacity:1, onComplete:init_typing})
	.to(['#intro_block'], 0, {opacity:1, onComplete:init_rotating},"+=4.5")


	;

}