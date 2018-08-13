var tlMax = new TimelineMax();

// Type animation with GSAP
// 

// $("#frame").attr("src", "http://ajf.resource-server.com/ajf0702_ajf_website/WP/");

// intro_Animation();
console.log('(@@) (  ) (@)  ( )  @@    ()    @     O     @' +
    '(   )'
);

function insert_directory(id) {
    $("<br><span class='directory shadow'>~/loft/home/</span>").insertBefore("#" + id);
}

function init_typing() {

    var easingPower4 = new gsapTypeIt({
        el: document.getElementById('block1'),
        elClass: 'intro',
        cursorSign: '_',
        word: 'Hello,welcome to <a class="homepage" href="https://www.isaacguan.com" target="_blank">[Loft]</a>',
        delay: 0,
        duration: 1,
        easing: Power1.easeIn
    });

}

function fallback_typing() {

    var easingPower4 = new gsapTypeIt({
        el: document.getElementById('block1'),
        elClass: 'intro',
        cursorSign: '_',
        word: 'Hello, welcome to Loft..<br>A place for my code<br>Please turn off the adblocker before continuing browsing this site',
        delay: 0,
        duration: 2,
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
        charterPerSecond: 18,
        cursorSign: '',
        word: ' What\'s the code?',

        delay: .5,

    });

}

function close_intro() {
    var tlMax = new TimelineMax();
    tlMax
        .to(['#intro_block'], 1, { height: 0 });
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
            if (value === "bupa") {
                // close_intro();
                appendBannerHTML("masthead", "./asset/banner/bupa_Bodymovin_mh/index.html");
                appendBannerHTML("halfpage", "./asset/banner/bupa_Bodymovin_hp/index.html");
                content_block_opening();
            }
        }
    });
}

function show_animated_banners(client) {
    $("#default_ascii").hide();
    $(".banners").html("");



    if (client == "bupa") {
        appendBannerHTML("masthead", "./asset/banner/bupa_Bodymovin_mh/index.html");
        appendBannerHTML("masthead", "./asset/banner/bupa_Bodymovin_mh2/index.html");
        appendBannerHTML("halfpage", "./asset/banner/bupa_Bodymovin_hp/index.html");
        appendBannerHTML("halfpage", "./asset/banner/bupa_Bodymovin_hp2/index.html");
        appendBannerHTML("mrec", "./asset/banner/bupa_CC_mrec/index.html");


        
    }
    if (client == "holden") {
        appendBannerHTML("masthead", "./asset/banner/holden_3dom_mh/index.html");
        appendBannerHTML("masthead", "./asset/banner/holden_4ds_mh/index.html");
        appendBannerHTML("halfpage", "./asset/banner/holden_4ds_hp/index.html");
        appendBannerHTML("widesky", "./asset/banner/holden_eofy_ws/index.html");
        appendBannerHTML("mrec", "./asset/banner/holden_video_mrec/index.html");


        
    }



}



function init_hovering() {
    $cont = $('#block1');
    parts = $.map($cont.text().split(''), function(v) {
        return $('<span />', { text: v });
    });
    $cont.empty().append(parts);
}

function fallback_Animation() {
    tlMax
        .to(['#intro_block'], 0, { opacity: 1, onComplete: fallback_typing });



    ;
}

function intro_Animation() {

    tlMax
        .to(['#intro_block'], 0, { opacity: 1, onComplete: init_typing })
        .to(['#intro_block'], 0, { opacity: 1, onComplete: init_input }, "+=2")
        .to(['#intro_block'], 0, { opacity: 1, onComplete: show_input }, "+=3")


    ;

}
// ./asset/banner/bupa_Bodymovin/index.html
function appendBannerHTML(size, path) {
    var size = size;
    var path = path;
    const Item = ({ size, path }) =>
        `<div class="${size}"><object type="text/html" class="${size}_object" data="${path}"></object></div>`;

    $(".content_block .banners").append([{
        size: size,
        path: path
    }].map(Item));
}

function content_block_opening() {
    var tlMax = new TimelineMax();
    tlMax
        .to([".content_block"], 1, { opacity: 1, scaleY: 1, ease: Power3.easeInOut });
}



function typingAnimation_reference() {
    console.log("This typing animation is posted on this discussion forum<br>");
    console.log("https://greensock.com/forums/topic/11361-typewriter-effect/");
    console.log("Of course this is not the only way to animate things like this..");
    console.log("But it's a great extension to the official gsap packages.");
    console.beer();
    console.beer();


}