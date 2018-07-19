var tlMax = new TimelineMax();

// Type animation with GSAP


// intro_Animation();

function insert_directory(id){
    $("<br><span class='directory shadow'>~/loft/home/</span>").insertBefore("#"+id);
}
function init_typing() {

    var easingPower4 = new gsapTypeIt({
        el: document.getElementById('block1'),
        elClass: 'intro',
        cursorSign: '_',
        word: 'Hello, welcome to Loft..<br>A place for my code',
        delay: 0,
        duration: 5,
        easing: Power1.easeIn
    });

}

function init_rotating() {
    var last_cursor = $(".gsapCursor");
    last_cursor.remove();

    var rotating = new gsapTypeIt({
        el: document.getElementById('block2'),
        rotateWords: true,
        cursorSign: '_',
        delay: 2,
        autoPlay: true,
        rotateWordsOptions: {
            wordsList: ['frontend tricks', 'server side configuration', 'or more...<br>'],
            cycle: false,
            clear: true

        }

    });
}

function init_showCase() {

    var last_cursor = $(".gsapCursor");
    last_cursor.remove();

    var easingPower4 = new gsapTypeIt({


        el: document.getElementById('block3'),
        charterPerSecond: 8,
        cursorSign: '_',
        word: 'I prefer color contrast and keep things simple..',
        delay: 0,

    });

}

function init_input() {
    insert_directory("block4");
    var last_cursor = $(".gsapCursor");
    last_cursor.remove();

    var easingPower4 = new gsapTypeIt({


        el: document.getElementById('block4'),
        charterPerSecond: 8,
        cursorSign: '',
        word: ' Continue browsing? [yes/no]',

        delay: 1,

    });

}

function close_intro(){
var tlMax = new TimelineMax();
    tlMax
	.to(['#intro_block'], 1, {height:0,y:-50});
}

function show_input() {
    insert_directory("question");
    $(".question").css("display", "inline-block");
    var input = document.getElementById("question_input");
    var value;

    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
        	value = input.value.toLowerCase().trim();
        	if(value === "yes"){
        		close_intro();
        	}
        }
    });
}



function init_hovering() {
    $cont = $('#block1');
    parts = $.map($cont.text().split(''), function(v) {
        return $('<span />', { text: v });
    });
    $cont.empty().append(parts);
}

function intro_Animation() {

    tlMax
        .to(['#intro_block'], 0, { opacity: 1, onComplete: init_typing })
        .to(['#intro_block'], 0, { opacity: 1, onComplete: init_input }, "+=5")
        .to(['#intro_block'], 0, { opacity: 1, onComplete: show_input }, "+=5")


    ;

}



function typingAnimation_reference() {
    console.log("This typing animation is posted on this discussion forum<br>");
    console.log("https://greensock.com/forums/topic/11361-typewriter-effect/");
    console.log("Of course this is not the only way to animate things like this..");
    console.log("But it's a great extension to the official gsap packages.");
    console.beer();
    console.beer();


}