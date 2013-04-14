var canvas, ctx, stage, player1, player2;
var countDownInterval;
var countdownElement;
var playerHpElement, enemyHpElement, playerStaminaElement, enemyStaminaElement, consoleElement, console_rElement;
var countDown = 3;
var gameState;
var enableControls;
var moveExecuting;
var moveQueue = [];
var FPS = 16;
var pct;
var currentMove, currentMoveIcon;
var icons = [];

function move(moveNumber, playerNumber, player, moveId, damage, index) {
	return {
		moveNumber: moveNumber,
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
	stamina: 0,
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
		this.animatingStamina = true;
		pct = Math.floor(playerAttributes.stamina) / playerAttributes.maxStamina * 100;		
		$("#playerstamina").animate({ 'background-size': pct + "%"}, 250, "swing", function() { playerAttributes.animatingStamina = false; } );
	},
	animatingStamina: false,
	rechargeStamina: function() {
		if(!moveExecuting) {
			this.stamina += this.rechargeRate / FPS;
			if(this.stamina > this.maxStamina)
				this.stamina = this.maxStamina;
			if(!this.animatingStamina) {
				this.animatingStamina = true;
				pct = Math.floor(playerAttributes.stamina) / playerAttributes.maxStamina * 100;
				$("#playerstamina").animate({ 'background-size': pct + "%"}, 1000 / FPS, "swing", function() { playerAttributes.animatingStamina = false; });
			}
		}
	}
};

var enemyAttributes = {
	index: 2,
	hp: 100,
	maxHp: 100,
	maxStamina: 20,
	stamina: 0,
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
	animatingStamina: false,
	takeStamina: function(stamina) {
		this.stamina -= stamina;
		if(this.stamina <= 0)
			this.stamina = 0;
		pct = Math.floor(enemyAttributes.stamina) / enemyAttributes.maxStamina * 100;		
		$("#enemystamina").animate({ 'background-size': pct + "%"}, 250, "swing", function() { enemyAttributes.animatingStamina = false; } );
	},
	rechargeStamina: function() {
		if(!moveExecuting) {
			this.stamina += this.rechargeRate / FPS;
			if(this.stamina > this.maxStamina)
				this.stamina = this.maxStamina;
			if(!this.animatingStamina) {
				this.animatingStamina = true;
				pct = Math.floor(enemyAttributes.stamina) / enemyAttributes.maxStamina * 100;
				$("#enemystamina").animate({ 'background-size': pct + "%"}, 1000 / FPS, "swing", function() { enemyAttributes.animatingStamina = false; });
			}
		}
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
	Q: 81,
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
	if(move.index >= move.moveId.length) {
		moveExecuting = false;
		removeMoveDisplay();
		return;
	}
	moveExecuting = true;
	updateIcons(move.index + 1);
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
	setTimeout(function() { executeMove(move); }, time);
}

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
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
	
	$console_r = $("#console_r").get(0);
	console_rElement = new createjs.DOMElement($console_r);
	console_rElement.regX = 0;
	console_rElement.regY = 0;
	console_rElement.x = $($console_r.parentElement).width() / 2 + canvas.width / 2 - $($console_r).width();
	console_rElement.y = 0;
	stage.addChild(console_rElement);
	
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
	playerStaminaElement.y = 10 + $($playerhp).height();
	stage.addChild(playerStaminaElement);
	
	$enemystamina = $("#enemystamina").get(0);
	enemyStaminaElement = new createjs.DOMElement($enemystamina);
	enemyStaminaElement.regX = $($enemyhp).width();
	enemyStaminaElement.regY = 0;
	enemyStaminaElement.x = ($($playerhp.parentElement).width() - canvas.width) / 2 + canvas.width - 10;
	enemyStaminaElement.y = 10 + $($enemyhp).height();
	stage.addChild(enemyStaminaElement);
	
	//animate the setup
	createjs.Tween.get(consoleElement).to({ alpha: 1, x: $($console.parentElement).width() / 2 - canvas.width / 2, y: 0, rotation: 0 }, 1500, createjs.Ease.quadIn);
	createjs.Tween.get(console_rElement).to({ alpha: 1, x: $($console.parentElement).width() / 2 + canvas.width / 2, y: 0, rotation: 0 }, 1500, createjs.Ease.quadIn);
	

	$("body").keydown(function(e) {
		if(enableControls) {
			console.log(e.which);
			if(e.which == Keys.ONE) {
				if(playerAttributes.stamina >= playerAttributes.cost[0]) {
					playerAttributes.takeStamina(playerAttributes.cost[0]);
					moveQueue.push(new move(1, 1, player1, playerAttributes.moves[0], playerAttributes.damage[0], 0));
					addMoveToConsole(1);
				}
			}
			else if(e.which == Keys.TWO) {
				if(playerAttributes.stamina >= playerAttributes.cost[1]) {
					playerAttributes.takeStamina(playerAttributes.cost[1]);
					moveQueue.push(new move(2, 1, player1, playerAttributes.moves[1], playerAttributes.damage[1], 0));
					addMoveToConsole(2);
				}
			}
			else if(e.which == Keys.THREE) {
				if(playerAttributes.stamina >= playerAttributes.cost[2]) {
					playerAttributes.takeStamina(playerAttributes.cost[2]);
					moveQueue.push(new move(3, 1, player1, playerAttributes.moves[2], playerAttributes.damage[2], 0));
					addMoveToConsole(3);
				}
			}
			else if(e.which == Keys.FOUR) {
				if(playerAttributes.stamina >= playerAttributes.cost[3]) {
					playerAttributes.takeStamina(playerAttributes.cost[3]);
					moveQueue.push(new move(4, 1, player1, playerAttributes.moves[3], playerAttributes.damage[3], 0));
					addMoveToConsole(4);
				}
			}
			if(e.which == Keys.SEVEN) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[0]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[0]);
					moveQueue.push(new move(1, 2, player2, enemyAttributes.moves[0], enemyAttributes.damage[0], 0));
					addMoveToConsole(5);
				}
			}
			else if(e.which == Keys.EIGHT) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[1]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[1]);
					moveQueue.push(new move(2, 2, player2, enemyAttributes.moves[1], enemyAttributes.damage[1], 0));
					addMoveToConsole(6);
				}
			}
			else if(e.which == Keys.NINE) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[2]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[2]);
					moveQueue.push(new move(3, 2, player2, enemyAttributes.moves[2], enemyAttributes.damage[2], 0));
					addMoveToConsole(7);
				}
			}
			else if(e.which == Keys.ZERO) {
				if(enemyAttributes.stamina >= enemyAttributes.cost[3]) {
					enemyAttributes.takeStamina(enemyAttributes.cost[3]);
					moveQueue.push(new move(4, 2, player2, enemyAttributes.moves[3], enemyAttributes.damage[3], 0));
					addMoveToConsole(8);
				}
			}
			if(e.which == Keys.Q) {
				playerAttributes.stamina = playerAttributes.maxStamina;
			}
		}
	});
	
	stage.update();

	createjs.Ticker.setFPS(FPS);
	createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(update);
}

var moveImgHtml = "<div class='moveQImg'></div>";

function addMoveToConsole(moveNum) {
	moveNum = moveNum || 1;
	$(moveImgHtml).prependTo("#console_r").css({ "background-image" : "url('images/button" + moveNum + ".png')" });	
	animateMoveConsole();
}

function animateMoveConsole(removing) {
	var moveConsoleMoves = $("#console_r").children();
	var i, moveDiv;
	var size = moveConsoleMoves.length < 5 ? moveConsoleMoves.length : 5;
	for(i = 0; i < size; i++) {
		moveDiv = moveConsoleMoves[moveConsoleMoves.length - 1 - i];
		switch(i) {
			case 0: 
				$(moveDiv).animate({ 'right' : '100px' }).animate({ 'bottom' : '40px' });
				break;
			case 1:
				if(!removing && size < 5)
					$(moveDiv).animate({ 'right' : '0px' }).animate({ 'bottom' : '40px' });
				else
					$(moveDiv).animate({ 'bottom' : '40px' });
				break;
			case 2: 
				if(!removing && size < 5)
					$(moveDiv).animate({ 'right' : '0px' }).animate({ 'bottom' : '180px' });
				else
					$(moveDiv).animate({ 'bottom' : '180px' });
				break;
			case 3:
				if(!removing && size < 5)
					$(moveDiv).animate({ 'right' : '0px' }).animate({ 'bottom' : '320px' });
				else
					$(moveDiv).animate({ 'bottom' : '320px' });
				break;
			case 4:
				$(moveDiv).animate({ 'right' : '0px' }).animate({ 'bottom' : '460px' });
				break;
		}
		
	}
}

function removeMoveFromConsole() {
	$("#console_r").children().last().remove();
	animateMoveConsole(true);
}

function update() {
	console.log("Update");
	
	if(gameState === GS.Fight) {
		enableControls = true;
		
		playerAttributes.rechargeStamina();
		enemyAttributes.rechargeStamina();
		
		if(!moveExecuting) {
			if(moveQueue.length > 0) {
				currentMove = moveQueue.shift();
				removeMoveFromConsole();
				displayMove(currentMove);
				executeMove(currentMove);
				
			}
		}
		
		if(!playerAttributes.active || !enemyAttributes.active) {
			gameState = GS.End;
		}
		
	} else if(gameState === GS.End) {
		enableControls = false;
		ctx.font = "30px Arial";
		if(!enemyAttributes.active)
			ctx.fillText("YOU WIN", canvas.width / 2 - 70, canvas.height / 2);
		else
			ctx.fillText("YOU LOSE", canvas.width / 2 - 80, canvas.height / 2);
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

function displayMove(move) {
	var x, y;
	y = 510;
	if((move.moveId.length + 1) % 2 === 0)
		x = canvas.width / 2 - (43 + 20) * (move.moveId.length + 1) / 2 + 20 - 20 / 2;
	else
		x = canvas.width / 2 - (43 + 20) * move.moveId.length / 2 - 43 / 2;
	switch(move.moveNumber) {
		case 1:
			icons[0] = new createjs.Bitmap("images/button_1.jpg");
			break;
		case 2:
			icons[0] = new createjs.Bitmap("images/button_2.jpg");
			break;
		case 3:
			icons[0] = new createjs.Bitmap("images/button_3.jpg");
			break;
		case 4:
			icons[0] = new createjs.Bitmap("images/button_4.jpg");
			break;
	}
	icons[0].x = x;
	icons[0].y = y;
	stage.addChild(icons[0]);
	x += 43 + 20;
	for(var i = 0; i < move.moveId.length; i++) {
		switch(move.moveId[i]) {
			case MoveList.PUNCH_L:
				icons[i+1] = new createjs.Bitmap("images/dummy_icon_1.png");
				break;
			case MoveList.PUNCH_R:
				icons[i+1] = new createjs.Bitmap("images/dummy_icon_2.png");
				break;
			case MoveList.KICK_L:
				icons[i+1] = new createjs.Bitmap("images/dummy_icon_3.png");
				break;
			case MoveList.KICK_R:
				icons[i+1] = new createjs.Bitmap("images/dummy_icon_4.png");
				break;
		}
		icons[i+1].x = x;
		icons[i+1].y = y;
		stage.addChild(icons[i+1]);
		x += 43 + 20;
	}
}

function updateIcons(index) {
	//move leftmost icon down off of the screen
	createjs.Tween.get(icons[index]).to({y:600}, 100, createjs.Ease.linear);
	
	//move the rest of the icons left
	for(var i = index + 1; i < icons.length; i++)
		createjs.Tween.get(icons[i]).to({x:(icons[i].x - 43 - 20)}, 100, createjs.Ease.linear);
}

function removeMoveDisplay() {
	for(var i = 0; i < icons.length; i++) {
		stage.removeChild(icons[i]);
	}
	icons.length = 0;
}
