var canvas, ctx, stage, player1, player2;
var countDownInterval, staminaUpdateInterval;
var countdownElement;
var playerHpElement, enemyHpElement, playerStaminaElement, enemyStaminaElement, consoleElement;
var countDown = 3;
var gameState;
var enableControls;
var moveExecuting;
var moveQueue = [];
var FPS = 16;
var pct;

function move(playerNumber, player, moveId, damage, index) {
	return {
		playerNumber: playerNumber,
		player: player,
		moveId: moveId,
		damage: damage,
		index: index
	};
}

var playerAttributes = {
	index: 1,
	maxHp: 100,
	hp: 100,
	stamina: 20,
	maxStamina: 20,
	rechargeRate: 1, //recharges x stamina per second
	moves:	[	"aba",	"abba",	"acbd",	"ddcc"	],
	damage:	[	10,		20,		30,		40		],
	cost:	[	1,		3,		5,		7		],
	active: true,
	takeDamage: function(damage) {
		this.hp -= damage;
		if(this.hp <= 0) {
			this.hp = 0;
			this.active = false;
		}
		pct = playerAttributes.hp / playerAttributes.maxHp * 100;
		$("#playerhp").animate({ 'background-size': pct + "%"}, 100);
	},
	takeStamina: function(stamina) {
		this.stamina -= stamina;
		if(this.stamina <= 0)
			this.stamina = 0;
	},
	animatingStamina: false,
	rechargeStamina: function() {
		this.stamina += this.rechargeRate / FPS;
		if(this.stamina > this.maxStamina)
			this.stamina = this.maxStamina;
		if(!this.animatingStamina) {
			this.animatingStamina = true;
			pct = Math.floor(playerAttributes.stamina) / playerAttributes.maxStamina * 100;
			$("#playerstamina").animate({ 'background-size': pct + "%"}, 1000 / FPS, "swing", function() { playerAttributes.animatingStamina = false; });
		}
	}
};

var enemyAttributes = {
	index: 2,
	hp: 100,
	maxHp: 100,
	maxStamina: 20,
	stamina: 20,
	rechargeRate: 1, //recharges x stamina per second
	moves:	[	"aba",	"abba",	"acbd",	"ddcc"	],
	damage:	[	10,		20,		30,		40		],
	cost:	[	1,		3,		5,		7		],
	active: true,
	takeDamage: function(damage) {
		this.hp -= damage;
		if (this.hp <= 0) {
			this.hp = 0;
			this.active = false;
		}
		pct = enemyAttributes.hp / enemyAttributes.maxHp * 100;
		$("#enemyhp").animate({ 'background-size': pct + "%"}, 100);
	},
	takeStamina: function(stamina) {
		this.stamina -= stamina;
		if(this.stamina <= 0)
			this.stamina = 0;
	},
	rechargeStamina: function() {
		this.stamina += this.rechargeRate / FPS;
		if(this.stamina > this.maxStamina)
			this.stamina = this.maxStamina;
	}
};

var GS = {
	CountDown: 0,
	Fight: 1,
	End: 2
};

var Keys = {
	LEFT: 37,
	RIGHT: 39,
	UP: 38, 
	DOWN: 40,
	A: 65,
	D: 68,
	ZERO: 48,
	ONE: 49,
	TWO: 50,
	THREE: 51,
	FOUR: 52,
	FIVE: 53,
	SIX: 54,
	SEVEN: 55,
	EIGHT: 56,
	NINE: 57
};

var MoveList = {
	PUNCH_L: "a",
	PUNCH_R: "b",
	KICK_L: "c",
	KICK_R: "d"
};

function executeMove(move) {
	moveExecuting = true;
	// var self = this;
	// self.moveId = moveId;
	// self.index = index;
	var time = 0;
	var moveString = move.moveId[move.index];
	switch(moveString) {
		case MoveList.PUNCH_L:
			move.player.gotoAndPlay("punch_l");
			if(move.playerNumber === 1)
				enemyAttributes.takeDamage(5);
			else
				playerAttributes.takeDamage(5);
			time = 300;
			break;
		case MoveList.PUNCH_R:
			move.player.gotoAndPlay("punch_r");
			if(move.playerNumber === 1)
				enemyAttributes.takeDamage(5);
			else
				playerAttributes.takeDamage(5);
			time = 300;
			break;
		case MoveList.KICK_L:
			move.player.gotoAndPlay("kick_l");
			if(move.playerNumber === 1)
				enemyAttributes.takeDamage(10);
			else
				playerAttributes.takeDamage(10);
			time = 600;
			break;
		case MoveList.KICK_R:
			move.player.gotoAndPlay("kick_r");
			if(move.playerNumber === 1)
				enemyAttributes.takeDamage(10);
			else
				playerAttributes.takeDamage(10);
			time = 600;
			break;
	}
	move.index++;
	if(move.index < move.moveId.length)
		setTimeout(function() { executeMove(move); }, time);
	else {
		moveExecuting = false;
	}
}

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	// bg_img = document.getElementById("futuristic_bg");
	// ctx.drawImage(bg_img, 0, 0);
	
	resize();
	
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
	
	//setTimeout(decCount, 1000);
	
	gameState = GS.CountDown;
	
	countDownInterval = setInterval(decCount, 1000);
	
	enableControls = false;
	
	moveExecuting = false;
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
	
	player1.x = canvas.width / 2 - 65;
	player1.y = canvas.height / 2;
	player2.x = canvas.width / 2 + 65;
	player2.y = canvas.height / 2;
	
	player2.scaleX = -1;

	stage = new createjs.Stage(canvas);
	stage.addChild(player1);
	stage.addChild(player2);
	
	$countdown = $("#countdown").get(0);
	countdownElement = new createjs.DOMElement($countdown);
	countdownElement.regX = $($countdown).width() / 2;
	countdownElement.regY = $($countdown).height() / 2;
	countdownElement.x = $($countdown.parentElement).width() / 2;
	countdownElement.y = canvas.height / 2;
	stage.addChild(countdownElement);
	
	$console = $("#console").get(0);
	consoleElement = new createjs.DOMElement($console);
	consoleElement.regX = $($console).width();
	consoleElement.regY = 0;
	consoleElement.x = $($console.parentElement).width() / 2 - canvas.width / 2 + $($console).width();
	consoleElement.y = 0;
	stage.addChild(consoleElement);
	
	$playerhp = $("#playerhp").get(0);
	playerHpElement = new createjs.DOMElement($playerhp);
	playerHpElement.regX = 0;
	playerHpElement.regY = 0;
	playerHpElement.x = $($playerhp.parentElement).width() / 2 - canvas.width / 2 + 10;
	playerHpElement.y = 10;
	stage.addChild(playerHpElement);
	
	$enemyhp = $("#enemyhp").get(0);
	enemyHpElement = new createjs.DOMElement($enemyhp);
	enemyHpElement.regX = $($enemyhp).width();
	enemyHpElement.regY = 0;
	enemyHpElement.x = ($($playerhp.parentElement).width() - canvas.width) / 2 + canvas.width - 10;
	enemyHpElement.y = 10;
	stage.addChild(enemyHpElement);
	
	$playerstamina = $("#playerstamina").get(0);
	playerStaminaElement = new createjs.DOMElement($playerstamina);
	playerStaminaElement.regX = 0;
	playerStaminaElement.regY = 0;
	playerStaminaElement.x = $($playerhp.parentElement).width() / 2 - canvas.width / 2 + 10;
	playerStaminaElement.y = 10 + $($playerstamina).height();
	stage.addChild(playerStaminaElement);
	
	$enemystamina = $("#enemystamina").get(0);
	enemyStaminaElement = new createjs.DOMElement($enemystamina);
	enemyStaminaElement.regX = $($enemyhp).width();
	enemyStaminaElement.regY = 0;
	enemyStaminaElement.x = ($($playerhp.parentElement).width() - canvas.width) / 2 + canvas.width - 10;
	enemyStaminaElement.y = 10 + $($playerstamina).height();
	stage.addChild(enemyStaminaElement);
	
	
	//animate the setup
	createjs.Tween.get(consoleElement).to({ alpha: 1, x: $($console.parentElement).width() / 2 - canvas.width / 2, y: 0, rotation: 0 }, 1000, createjs.Ease.quadIn);
	

	$("body").keydown(function(e) {
		if(enableControls) {
			console.log(e.which);
			if(e.which == Keys.ONE) {
				if(playerAttributes.stamina >= playerAttributes.cost[0]) {
					playerAttributes.takeStamina(playerAttributes.cost[0]);
					moveQueue.push(new move(1, player1, playerAttributes.moves[0], playerAttributes.damage[0], 0));
				}
			}
			else if(e.which == Keys.TWO) {
				if(playerAttributes.stamina >= playerAttributes.cost[1]) {
					playerAttributes.takeStamina(playerAttributes.cost[1]);
					moveQueue.push(new move(1, player1, playerAttributes.moves[1], playerAttributes.damage[1], 0));
				}
			}
			else if(e.which == Keys.THREE) {
				if(playerAttributes.stamina >= playerAttributes.cost[2]) {
					playerAttributes.takeStamina(playerAttributes.cost[2]);
					moveQueue.push(new move(1, player1, playerAttributes.moves[2], playerAttributes.damage[2], 0));
				}
			}
			else if(e.which == Keys.FOUR) {
				if(playerAttributes.stamina >= playerAttributes.cost[3]) {
					playerAttributes.takeStamina(playerAttributes.cost[3]);
					moveQueue.push(new move(1, player1, playerAttributes.moves[3], playerAttributes.damage[3], 0));
				}
			}
			if(e.which == Keys.SEVEN) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[0]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[0]);
					moveQueue.push(new move(2, player2, enemyAttributes.moves[0], enemyAttributes.damage[0], 0));
				}
			}
			else if(e.which == Keys.EIGHT) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[1]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[1]);
					moveQueue.push(new move(2, player2, enemyAttributes.moves[1], enemyAttributes.damage[1], 0));
				}
			}
			else if(e.which == Keys.NINE) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[2]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[2]);
					moveQueue.push(new move(2, player2, enemyAttributes.moves[2], enemyAttributes.damage[2], 0));
				}
			}
			else if(e.which == Keys.ZERO) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[3]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[3]);
					moveQueue.push(new move(2, player2, enemyAttributes.moves[3], enemyAttributes.damage[3], 0));
				}
			}
		}
	});
	
	staminaUpdateInterval = setInterval(updateStamina, 1000);
	
	stage.update();

	createjs.Ticker.setFPS(FPS);
	createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(update);
}

function update() {
	console.log("Update");
	
	if(gameState === GS.Fight) {
		enableControls = true;
		
		playerAttributes.rechargeStamina();
		//pct = Math.floor(playerAttributes.stamina) / playerAttributes.maxStamina * 100;
		//$("#playerstamina").animate({ 'background-size': pct + "%"}, 1000 / FPS);
		
		enemyAttributes.rechargeStamina();
		pct = Math.floor(enemyAttributes.stamina) / enemyAttributes.maxStamina * 100;
		$("#enemystamina").animate({ 'background-size': pct + "%"}, 1000 / FPS);
		
		if(!moveExecuting) {
			if(moveQueue.length > 0)
				executeMove(moveQueue.shift());
		}
		
		if(!playerAttributes.active || !enemyAttributes.active) {
			gameState = GS.End;
		}
		
	} else if(gameState === GS.End) {
		enableControls = false;
		ctx.font = "30px Arial";
		if(!enemyAttributes.active)
			ctx.fillText("YOU WIN", canvas.width / 2, canvas.height / 2);
		else
			ctx.fillText("YOU LOSE", canvas.width / 2, canvas.height / 2);
	}
	
	draw();
}

function draw() {
	
	$("#countdown").text(countDown);
	
	//update bars
	$("#playerhp").text("HP: " + playerAttributes.hp + " / " + playerAttributes.maxHp);
	$("#playerstamina").text("STA: " + Math.floor(playerAttributes.stamina) + " / " + playerAttributes.maxStamina);
	$("#enemyhp").text("HP: " + enemyAttributes.hp + " / " + enemyAttributes.maxHp);
	$("#enemystamina").text("STA: " + Math.floor(enemyAttributes.stamina) + " / " + enemyAttributes.maxStamina);
	
	
	
}

function decCount() {
	console.log("dec cnt");
	if(countDown > 1) {
		countDown -= 1;
	} else {
		countDown = "FIGHT!";
		$("#countdown").fadeOut();
		clearInterval(countDownInterval);
		gameState = GS.Fight;
	}
}

function resize() {
	ctx.canvas.width = 800;
	ctx.canvas.height = 600;
}

function updateStamina() {
	
}
