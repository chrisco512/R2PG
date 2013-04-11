var canvas, stage, player1, player2;

var playerAttributes = {
	hp: 100,
	stamina: 20,
	moves: [ "a", "b", "c", "d", "aba" ]
};
var enemyAttributes = {
	hp: 100,
	stamina: 20,
	moves: [ "a", "b", "c", "d", "aba" ]
};

//var GameStates = [ "CountDown", "Fight", "EndMatch" ];
var GS = {
	CountDown: 0,
	Fight: 1,
	EndMatch: 2
};
var gameState;



function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var manifest = [
		{src:"images/arm.png", id:"arm"},
		{src:"images/fist_l.png", id:"fist_l"},
		{src:"images/fist_r.png", id:"fist_r"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/forearm.png", id:"forearm"},
		{src:"images/head.png", id:"head"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/pelvis.png", id:"pelvis"},
		{src:"images/shin.png", id:"shin"},
		{src:"images/torso.png", id:"torso"}
	];

	var loader = new createjs.PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
	
	gameState = GS.CountDown;
}

function handleFileLoad(o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

function handleComplete() {
	player1 = new lib.robot_frame();
	player2 = new lib.robot_frame();
	
	player1.regX = 550 / 2;
	player1.regY = 400 / 2;
	player2.regX = 550 / 2;
	player2.regY = 400 / 2;
	
	player1.x = 550 / 2 - 65;
	player1.y = 400 / 2;
	player2.x = 550 / 2 + 65;
	player2.y = 400 / 2;
	
	player2.scaleX = -1;

	stage = new createjs.Stage(canvas);
	stage.addChild(player1);
	stage.addChild(player2);
	
	$("body").keydown(function(e) {
		console.log(e.which);
		if(e.which == 65)
			player1.gotoAndPlay("punch_l");
		else if(e.which == 68)
			player1.gotoAndPlay("punch_r");
		else if(e.which == 37)
			player2.gotoAndPlay("punch_r");
		else if(e.which == 39)
			player2.gotoAndPlay("punch_l");
	});
	
	stage.update();
	
	createjs.Ticker.setFPS(16);
	createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(update);
}

function update() {
	console.log("Update");
}
