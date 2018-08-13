// defining variables
var delayed = 0;
var loopCounter = 0;
var tlMax = new TimelineMax();


var stage = document.getElementById("stage");
var preloader = document.getElementById("preloader");
var cta = document.querySelector(".ctaCover");


window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


// Check if the enabler has been initialised
// if (Enabler.isInitialized()) {
//   enablerInitHandler();
// } else {
//   Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);
// }

// // settign up init functions
// function enablerInitHandler() {
//  console.log('Enabler initialized');
//   setup_disclaimer();
//   definingClickthroughs();
//   checkDynamicSet(dynamicContent, setDynamics);
//   animate();
// }

setup_disclaimer();
animate();

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
    TweenMax.to("#div_disclaimer", 0.0, { alpha: 0 });

    if (window.mobileAndTabletcheck()) {
        console.log(document.getElementById('disclaimerBtnText').innerHTML);
        document.getElementById('disclaimerBtnText').innerHTML = 'Terms & conditions apply';
        console.log(document.getElementById('disclaimerBtnText').innerHTML);

    } else {

        disclaimerButton.onmouseover = function() {
            TweenMax.to("#div_disclaimer", 0.0, { alpha: 1 });
        };

        disclaimerButton.onmouseout = function() {
            TweenMax.to("#div_disclaimer", 0.0, { alpha: 0 });
        };
    }
}

var counter = 0;

function animate() {
    console.log("====| animate called |====");

        tlMax
            .to([".preloader"], 0.75, { alpha: 0 })
            .to([".ribbon1", ".ribbon2"], 0, { alpha: 1 })

            .to([".cover1", ".frame1"], 1, {
                ease: SteppedEase.config(30),
                x: "0%",
                y: "0%"
            })

            .to([".body", ".head"], .25, { opacity: 1 }, "-=.35")

            .to([".body"], 1, { y: -6, ease: Power2.easeInOut }, "-=.35")
            .to([".head"], 1, { rotation: 0, ease: Power2.easeInOut }, "-=.85")
            .to([".body"], .5, { y: -3, ease: Power2.easeInOut }, "-=.1")
            .to([".head"], .5, { rotation: 2, ease: Power2.easeInOut }, "-=.5")

            .to([".frame1", ".body", ".head"], 0.5, { opacity: 0 }, "+=2")

            .to([".cal"], 0.25, { opacity: 1, scale: 1 })
            .to([".four"], 0.25, { opacity: 1, scale: 1 })
            .to([".face", ".eyes"], 0.25, { opacity: 1, scale: 1 })

            .to([".eyes"], 0.2, { scale: 1.35, ease: Power2.easeInOut })
            .to([".eyes"], 0.2, { scale: 1.25, ease: Power2.easeInOut })
            .to([".eyes"], 0.2, { scale: 1.35, ease: Power2.easeInOut })



            .to([".eyes"], 0.25, { scale: 1, ease: Power2.easeInOut }, "+=.5")

            .to([".ribbon-container1", ".ribbon1"], 0.5, { x: "0%", y: "0%" })
            .to([".ribbon-container2", ".ribbon2"], 0.9, { x: "0%", y: "0%" }, "-=0.65")


            .to([".cta"], 0.5, { opacity: 1 })
            .to([".ctaHover"], 0, { display: "block" }, "-=0.5")
            .to([".disclaimerButton"], 0, { display: "block" }, "-=0.5")
            .to([".disclaimerButton"], 0.5, { opacity: 1 }, "-=0.5")

            .to([".face", ".eyes", ".cal"], 0.5, { opacity: 0 }, "+=.5")
            .to([".four"], 0.5, { top: 41 })

            .to([".endframe", ".end_copy1"], 0.5, { opacity: 1 })

            .to([".end_copy1"], 0.5, { opacity: 0 }, "+=1.5")
            .to([".end_copy2"], 0.5, { opacity: 1 })



        ;
  

    setTimeout(function() {
        preloader.style.display = "none";
        console.log("Preloader Style", preloader.style.display);
    }, 2000);
    console.log(tlMax.duration());
}


function animationRestart() {
    var tlRepeat = new TimelineMax();
    if (counter > -1) {
        counter += 1;
        console.log(counter + "asa");
        tlRepeat.to([".last_frame", ".last_frame_copy", ".cta", ".ribbon1", ".ribbon2"], 0.75, { opacity: 0, onComplete: test }, "+=2");
    }
}

function test() {
    tlMax.restart();
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