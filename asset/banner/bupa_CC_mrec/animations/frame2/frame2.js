(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#0079B8",
	opacity: 0.00,
	manifest: [
		{src:"./dummy_texture.png?1475455191961", id:"dummy_texture"},
		{src:"./stalk_texture.png?1475455191961", id:"stalk_texture"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.dummy_texture = function() {
	this.initialize(img.dummy_texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.stalk_texture = function() {
	this.initialize(img.stalk_texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.stalk_eye_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape.setTransform(0,0,3.197,3.197);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.2,16.5,16.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJBeQgZgLgKgZQgKgcAJgaIACgHQAGgRgHgRQgGgRgTgEIgJgBIBggnIgFAHQgMAPAHARQAGARARAKIAIAEQAZAOALAZQAKAZgLAYQgKAYgZAKIgBAAQgNAFgMAAQgMAAgKgFg");
	mask.setTransform(50.4,23.3);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86C566").s().p("AgQAbQAJgMgFgOQgFgJAFgKQAFgMAJgDIAAgBIAVAzIgtASg");
	this.shape.setTransform(-9.8,-13.8,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86C566").s().p("AgnAcQAJgMgFgNQgFgJAFgLQAFgLALgEIABgBQALgEAIAFQALAEAFALQAEAOAPADIAKAAIhbAkg");
	this.shape_1.setTransform(-2.8,-14.2,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDDCA6").s().p("AguAgQgGgDgDgGIAAAAQgCgGACgGQADgGAGgDIBbgiIAMAdIhbAjIgGABQgDAAgDgBg");
	this.shape_2.setTransform(-16.4,1.4,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDDCA6").s().p("AhhAzQgGgDgDgGIAAAAQgCgGACgGQADgGAGgDIC4hHQAFgCAHACQAGADACAGQADAGgDAGQgDAHgGACIi3BHIgGABQgDAAgDgBg");
	this.shape_3.setTransform(-1,-4.3,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// highlight
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAPQgHgDgCgGQgDgGADgFQADgHAGgCQAFgDAGADQAHADACAGQACAFgCAGQgDAHgGACIgGABIgFgBg");
	this.shape_4.setTransform(24.1,38.7,3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// dummy_texture
	this.instance = new lib.dummy_texture();
	this.instance.parent = this;
	this.instance.setTransform(-34,-17.5,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dummy
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.2,67.5,3,3,0,0,0,33.5,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F39CBB").s().p("AgJBeQgZgLgKgZQgKgcAJgaIACgHQAGgRgHgRQgGgRgTgEIgJgBIBggnIgFAHQgMAPAHARQAGARARAKIAIAEQAZAOALAZQAKAZgLAYQgKAYgZAKIgBAAQgNAFgMAAQgMAAgKgFg");
	this.shape_5.setTransform(9.6,23.4,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACxAAQAABJg1A0Qg0A0hIAAQhIAAg0g0Qg0g0AAhJQAAhIA0g0QA0g0BIAAQBIAAA0A0QA1A0AABIg");
	this.shape_6.setTransform(-13.1,-33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,-53.6,195.7,124.1);


(lib.stalk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance = new lib.stalk_eye_mc();
	this.instance.parent = this;
	this.instance.setTransform(-9.1,-180.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleY:0.03},3,cjs.Ease.get(1)).to({scaleY:1},3,cjs.Ease.get(1)).wait(3).to({scaleY:0.03},3,cjs.Ease.get(1)).to({scaleY:1},3,cjs.Ease.get(1)).wait(44));

	// stalk_texture
	this.instance_1 = new lib.stalk_texture();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-178,-256.9,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72));

	// stalk
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBAwQgIg5AGgnQAIg1AjgZQAngbA4ASQgdAdgZAmQgbAtgTA3QgSA3gFA4g");
	this.shape.setTransform(21.9,-92.4,3.197,3.197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhqCyQALgdgEgbQgDgWgLgOQgjgogHg2QgHg0AWgtQAXguAtgWQA8geBHAXQA2AQAZAsQAXAogEA1QgFAxgdAsQgdAugtAVQhbArgLAEQgeALgNAAQgPAAAFgNg");
	this.shape_1.setTransform(22.2,-176.2,3.197,3.197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292525").s().p("AgbASQgLgMgBgPQAAgKAGgKQgDAHAAAHQAAAPAMAMQANAMAOAAQAZAAALgVQgDAMgMAIQgKAHgNAAQgQAAgMgMg");
	this.shape_2.setTransform(26.6,-190,3.197,3.197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EAOFAjcQgbg9glicQgqiqiogrQiHgjlgAZQlZAamAjzQlkjjjZlUQhQiCgghuQhvkOgBk7QgVlbBLniQBbpDC7mGQguAGglgJQghg1g0hpQg3htgdgyQBjjEBGhLQBdhjCjg3QDDg+ClB+QCpCCAADvQgDDdiICRQgoAshlBjQheBjhIBuQiWDpg4EwQg4EwBBDgQAIAbCXg6QC8hJA7gHQGyhIHPCDQHsCLDdEhQD+FOBQHjQBIGmhDH4QgMBUgoAgQhriPgNgwQAABMgUBNQgoCIhiBeQgbAbgYAAQgqAAgkhOg");
	this.shape_3.setTransform(107.4,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-256.9,520,520);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-52.9,88,124.1);


(lib.dummy_twist_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-52.9,88,124.1);


(lib.dummy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beak_top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E682BD").s().p("AuZBQIbdjCIBWCuI8zA3g");
	this.shape.setTransform(70.5,-43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC459D").s().p("AuZAQIAAgVIczg2IgpB3g");
	this.shape_1.setTransform(70.5,-31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	// dummy
	this.instance = new lib.dummy_twist_mc();
	this.instance.parent = this;
	this.instance.setTransform(-20,-40,1,1,0,0,0,-20,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-50.9,rotation:45},24,cjs.Ease.get(1)).to({regY:-51,rotation:0},25,cjs.Ease.get(1)).wait(1));

	// beak
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E682BD").s().p("AFIglIAbA1IrFAWg");
	this.shape_2.setTransform(49.1,-42.8,3.197,3.197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC459D").s().p("AlhACILDgUIgNAkg");
	this.shape_3.setTransform(49.4,-31.3,3.197,3.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,-55,304.5,137.2);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stalk
	this.instance = new lib.stalk_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(289.3,303.1,1.07,1.07);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// dummy
	this.instance_1 = new lib.dummy_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.6,224.8,1.07,1.07,0,0,0,-41.1,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218,228.2,712.2,556.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;