// defining variables
var delayed = 0;
var loopCounter = 0;
var tlMax = new TimelineMax();
var stage = document.getElementById("stage");
var clickthrough = document.getElementById("clickthrough");

var preloader = document.getElementById("preloader");
var cta = document.querySelector(".ctaCover");

var tlMaxCar = new TimelineMax();
var tlMaxWheel = new TimelineMax();

TweenMax.to("#div_disclaimer", 0.0, { alpha: 0 });

var svg1 = document.getElementById("")

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


// Check if the enabler has been initialised
// if (Enabler.isInitialized()) {
//     enablerInitHandler();
// } else {
//     Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
// }

// settign up init functions
// function enablerInitHandler() {
//  console.log('Enabler initialized');
//   setup_disclaimer();
//   definingClickthroughs();
//   // checkDynamicSet(dynamicContent, setDynamics);
//   animate();
// }

setup_disclaimer();
animate();

function stage_hover() {
    stage.onmouseover = function() {
        TweenMax.to([".ctaHover"], 0, { opacity: 1 });
    };

    stage.onmouseout = function() {
        TweenMax.to([".ctaHover"], 0, { opacity: 0 });
    };
}

// definng clickthroughs
function definingClickthroughs() {
    addEvent("click", stage, onExit);
}

// add in same logic for polite load (test for isLoaded, if not, listen for polite load event)
function onExit(e) {
    Enabler.exit("*** BANNER CLICKTHROUGH ***");
}

function setup_disclaimer() {
    // Setup the disclaimer
    var disclaimerButton = document.getElementById("disclaimerButton");
    var closeButton = document.getElementById("closeBTN");


    if (window.mobileAndTabletcheck()) {
        console.log(document.getElementById('disclaimerBtnText').innerHTML);
        // document.getElementById('disclaimerBtnText').innerHTML = 'Terms & conditions apply';
        console.log(document.getElementById('disclaimerBtnText').innerHTML);

    } else {

        disclaimerButton.onmouseover = function() {
            TweenMax.to(["#div_disclaimer"], 0.0, { alpha: 1 });
        };

        disclaimerButton.onmouseout = function() {
            TweenMax.to(["#div_disclaimer"], 0.0, { alpha: 0 });
        };
    }
}

function restartTL() {

    tlMax.restart();

}

function restartAnimation() {
    var tl = new TimelineMax();
    setTimeout(function() {

        if (loopCounter < 1) {
            loopCounter++;

            tl
                .to([".copy1", ".copy2", '.bg', ".cta", ".ribbon1", ".ribbon2", '.disclaimerButton'], 1, { opacity: 0, onComplete: restartTL })

        }
    }, 3000);
}

function restartTL() {

    tlMax.restart();

}



function animate() {
    console.log("====| animate called |====");

    tlMax

        .to([".preloader"], 0.5, { alpha: 0 }, "-=0.5")

        .to(["#mask_image2"], 0, { scale: .001 })
        .to(["#mask_image3"], 0, { scale: .001, onComplete: spinThatTrackHomie })

        .to(".trax", 1.3, { x: 550, ease: Power0.easeNone, onComplete: stopCar })

        .to([".copy1"], .75, { opacity: 1 }, "+=1")
        .to([".copy2"], .75, { opacity: 1 })

        .to(["#mask_image2"], 4.5, { x: 970, z: 0.1, rotationZ: 0.01 })
        .to(["#mask_image3"], 4.5, { scale: 10, z: 0.1, rotationZ: 0.01 }, "-=3.5")

        .to([".disclaimerButton"], 0, { display: "block" }, "-=3")
        .to([".copy1", ".cta", ".disclaimerButton"], .75, { opacity: 1 }, "-=3")

        .to([".copy2"], .75, { opacity: 0 }, "-=1.5")
        .to([".copy3"], .75, { opacity: 1 }, "-=0.75");

    console.log(document.getElementById("frame2").getAttribute('src'));

    setTimeout(function() {
        preloader.style.display = "none";
        console.log("Preloader Style", preloader.style.display);
    }, 2000);
    console.log(tlMax.duration());
}

function spinThatTrackHomie() {
    tlMaxCar
        .to([".wheel_back", ".wheel_front"], 1.1, { transformOrigin: "top top", rotation: 360, repeat: -1, ease: Linear.easeNone });
}

function stopWheel() {
    tlMaxWheel
        .to([".wheel_back", ".wheel_front"], 1.6, { transformOrigin: "top top", rotation: 180, ease: Power3.easeOut });
}

function stopCar() {
    stopWheel();
    TweenMax.to(".trax", 1.3, { x: 685, delay: 0, ease: Power3.easeOut });
}


function addEvent(evnt, elem, func) {
    if (elem.addEventListener) // W3C DOM
        elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) { // IE DOM
        elem.attachEvent("on" + evnt, func);
    } else { // No much to do
        elem[evnt] = func;
    }
}