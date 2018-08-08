// defining variables
var delayed = 0;
var counter = 0;
var stage = document.getElementById("stage");


var cta_final_width = 140;
var cta_text_container_diff = 129;
var cta_arrow_after_position = cta_final_width * 0.5 * 0.7;

var tl = new TimelineMax();
var tl_CTA = new TimelineMax();

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// Check if the enabler has been initialised
// if (Enabler.isInitialized()) {
//   init();
// } else {
//   Enabler.addEventListener(studio.events.StudioEvent.INIT,init);
// }

// JS Polite load.
// function init() {
//   if (Enabler.isPageLoaded()) {
//     loadItem();
//   } else {
//     Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadItem);
//   }
// };


// // setting up init functions
// function loadItem() {
// 	console.log('Enabler initialized');
//   definingClickthroughs();
//   animate();
// }
  animate();

// definng clickthroughs
function definingClickthroughs () {
  addEvent("click", stage, onExit);
}

// add in same logic for polite load (test for isLoaded, if not, listen for polite load event)
function onExit(e) {
	Enabler.exit("*** BANNER CLICKTHROUGH ***");
}


function frame1_animation(){
  var frame1 = document.getElementById("frame1");
  frame1.src = "./animations/frame1/frame1.html";
}

function frame2_animation(){
  var frame2 = document.getElementById("frame2");
  frame2.src = "./animations/frame2/frame2.html";
}


function cta_Animation(){
  tl_CTA

  .to(['#endframe_cta',"#endframe_cta_arrow","#endframe_text_container"], 0, {opacity:1})

  .to(['#endframe_cta'], 0.1, {opacity:0})
  .to(['#endframe_cta'], 0.1, {opacity:1})
  .to(['#endframe_cta'], 0.1, {opacity:0})
  .to(['#endframe_cta'], 0.1, {opacity:1})
  .to(['#endframe_cta'], 0.1, {opacity:0})
  .to(['#endframe_cta'], 0.1, {opacity:1})
  .to(['#endframe_cta'], 0.1, {opacity:0})
  .to(['#endframe_cta'], 0.1, {opacity:1})


  .to(['#endframe_cta'], .75, {width:cta_final_width, ease: Power2.easeInOut},'-=0.2')
  .to(['#endframe_cta_arrow'], .75, {x:cta_arrow_after_position, ease: Power2.easeInOut},"-=.75")
  .to(['#endframe_text_container'], .75, {x:cta_text_container_diff,ease: Power2.easeInOut},'-=.765')



  // .to(['#endframe_cta_text'], 0.1, {opacity:1},'-=1')

}

function checkPath(){
  console.log("iframe3: ",frame3.src);

}

function animate(){
	console.log("====| animate called |====");
  tl
  .to(['.frame1_ani'],0.5, {opacity:1,onComplete:frame1_animation})
  .to(['.copy1'],0.5, {opacity:1,x:5})

  .to([".frame1_ani",".copy1"],0.75, {opacity:0},"+=5")

  .to(['.frame2_ani'],0.5, {opacity:1,onComplete:frame2_animation})
  .to(['.copy2'],0.5, {opacity:1,x:5})

  .to(['.copy1',".block",".frame2_ani",'.footer'],0.75, {opacity:0},"+=5")

  .to(['.end_frame_logo'],0.5, {opacity:1},"-=.25")

  .to(['.copy3'],0.5, {opacity:1,x:5,onComplete:cta_Animation})

  .to(['.copy3'],0.5, {opacity:1,onComplete:checkRestart});

  console.log("Animation length: ", tl.duration());
// console.log(tlMax.duration());
}

function checkRestart(){
  var tlLoop = new TimelineMax();

  if(counter>-1){
    tlLoop
    .to(['.copy3','.end_frame_logo','.endframe_cta','.endframe_text_container'],0.75, {opacity:0,onComplete:restartAnimation},'+=3');
    counter++;
  }else{
    console.log('end');
  }

}

function restartAnimation(){
  resetCTA_ani();
  tl.restart();

  function resetCTA_ani(){

    tl_CTA.progress(0);
    tl_CTA.clear();
    tl_CTA.to(['#endframe_cta',"#endframe_cta_arrow","#endframe_text_container"], 0, {opacity:0});

  }
}

function addEvent(evnt, elem, func) {
  if (elem.addEventListener)  // W3C DOM
   elem.addEventListener(evnt,func,false);
  else if (elem.attachEvent) { // IE DOM
   elem.attachEvent("on"+evnt, func);
 }
  else { // No much to do
   elem[evnt] = func;
 }
}
