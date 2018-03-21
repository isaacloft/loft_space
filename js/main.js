
var tlMax = new TimelineMax();

// Type animation with GSAP


intro_Animation();


function init_typing(){

	var easingPower4 = new gsapTypeIt({
		el: document.getElementById('block1'),
		elClass: 'intro',
		cursorSign: '_',
		word: 'Hello, welcome to the Loft...',
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
			wordsList : ['humans', 'dudes', 'my friends...<br>'],
			cycle: false,
			clear: true

		}

	});
}

function init_showCase(){

	var last_cursor = $(".gsapCursor");
	last_cursor.remove();

	var easingPower4 = new gsapTypeIt({


		el: document.getElementById('block3'),
		charterPerSecond: 8,
		cursorSign: '_',
		word: 'You are watching demos of front end animation, and the reference can be found in the console..',
		delay:0,
		
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
	.to(['#intro_block'], 0, {opacity:1, onComplete:init_rotating},"+=5.5")
	.to(['#intro_block'], 0, {opacity:1, onComplete:init_showCase},"+=12")
	.to(['#intro_block'], 0, {opacity:1, onComplete:typingAnimation_reference},"+=1")




	;

}



function typingAnimation_reference(){
	console.log("This typing animation is posted on this discussion forum<br>"); 
	console.log("https://greensock.com/forums/topic/11361-typewriter-effect/"); 
	console.log("Of course this is not the only way to animate things like this.."); 
	console.log("But it's a great extension to the official gsap packages."); 
	console.beer();
	console.beer();


}