var canvas, ctx, stage, player1, player2;
var countDownInterval, aiInterval, fallBackInterval;
var countdownElement;
var playerHpElement, enemyHpElement, playerStaminaElement, enemyStaminaElement, consoleElement, console_rElement;
var countDown;
var gameState;
var enableControls;
var moveExecuting;
var moveQueue = [];
var FPS = 16;
var pct;
var currentMove, currentMoveIcon;
var icons = [];
var enableBlock;
var blockPenalty;
var previousMoves = [];
// var playerX = canvas.width / 2 - 65;
// var opponentX = canvas.width / 2 + 65;
var fallBackCounter;
var maxNGrams = 3;
var icon_width = 50;
var TWO_PLAYER = false;

var GS = {
	CountDown: 0,
	Fight: 1,
	GameOver: 2,
	End: 3
};

var Keys = {
	LEFT: 37,
	RIGHT: 39,
	UP: 38, 
	DOWN: 40,
	A: 65,
	D: 68,
	I: 73,
	Q: 81,
	W: 87,
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
	PUNCH_L: { id: "p", damage: 2, stamina: 1, animation: "punch_l", time: 300 },
	PUNCH_R: { id: "P", damage: 2, stamina: 1, animation: "punch_r", time: 300 },
	KICK_L: { id: "k", damage: 4, stamina: 2, animation: "kick_l", time: 600 },
	KICK_R: { id: "K", damage: 4, stamina: 2, animation: "kick_r", time: 600 },
	KICK_FLIP: { id: "f", damage: 8, stamina: 4, animation: "kick_flip", time: 600 },
	HEADBUTT: { id: "h", damage: 8, stamina: 4, animation: "headbutt", time: 600 }
};

function move(moveNumber, playerNumber, player, moveId, damage, index, blockPercentage) {
	return {
		moveNumber: moveNumber,
		playerNumber: playerNumber,
		player: player,
		moveId: moveId,
		damage: damage,
		index: index,
		blockPercentage: blockPercentage
	};
}

function startFight() {
	var move1 = $("#move1").val();
	var move2 = $("#move1").val();
	var move3 = $("#move1").val();
	var move4 = $("#move1").val();
	var head = $("#head").val();
	var chest = $("#Chest").val();
	var legs = $("#Legs").val();
	var arm = $("#Arm").val();
	
	if(move1 !== "")
		playerAttributes.moves[0] = move1;
	if(move2 !== "")
		playerAttributes.moves[1] = move2;
	if(move3 !== "")
		playerAttributes.moves[2] = move3;
	if(move4 !== "")
		playerAttributes.moves[3] = move4;
		
	$("#setup").hide();
};

var playerAttributes = {
	maxHp: 100,
	hp: 100,
	maxStamina: 20,
	stamina: 20 / 2,
	rechargeRate: 1, //recharges x stamina per second
	moves:	[	MoveList.PUNCH_L.id + MoveList.PUNCH_R.id,
				MoveList.HEADBUTT.id,
				MoveList.PUNCH_L.id + MoveList.KICK_R.id + MoveList.PUNCH_R.id + MoveList.KICK_L.id,
				MoveList.KICK_L.id + MoveList.KICK_R.id + MoveList.KICK_FLIP.id	],
	cost: function(moveNumber) {
		var sum = 0;
		for(var i = 0; i < this.moves[moveNumber].length; i++)
			sum += moveCost(this.moves[moveNumber][i]);
		return sum;
	},
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
	maxHp: 100,
	hp: 100,
	maxStamina: 20,
	stamina: 20 / 2,
	rechargeRate: 1, //recharges x stamina per second
	moves:	[	MoveList.PUNCH_L.id + MoveList.PUNCH_R.id,
				MoveList.HEADBUTT.id,
				MoveList.PUNCH_L.id + MoveList.KICK_R.id + MoveList.PUNCH_R.id + MoveList.KICK_L.id,
				MoveList.KICK_L.id + MoveList.KICK_R.id + MoveList.KICK_FLIP.id	],
	cost: function(moveNumber) {
		var sum = 0;
		for(var i = 0; i < this.moves[moveNumber].length; i++)
			sum += moveCost(this.moves[moveNumber][i]);
		return sum;
	},
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

function buttonPressed(number) {
	if(enableControls) {
		if(playerAttributes.stamina >= playerAttributes.cost(number-1)) {
			playerAttributes.takeStamina(playerAttributes.cost(number-1));
			moveQueue.push(new move(number, 1, player1, playerAttributes.moves[number-1], 0, 0, 0));
			addMoveToConsole(number);
		}
	}
}

function executeMove(move) {
	console.log(move.blockPercentage);
	if(move.index > move.moveId.length || gameState !== GS.Fight) {
		// if(move.moveNumber === 4) {
			// //big move, have character fall back
			// fallBackCounter = 16;
			// if(move.playerNumber === 1) {
				// fallBackInterval = setInterval(fallBackPlayer, 1000 / FPS);
			// } else {
				// fallBackInterval = setInterval(fallBackOpponent, 1000 / FPS);
			// }
		// } else {
			// moveExecuting = false;
			// removeMoveDisplay();
			// return;
		// }
		moveExecuting = false;
		removeMoveDisplay();
		return;
	}
	
	moveExecuting = true;
	
	if(move.index === move.moveId.length) {
		moveExecuting = false;
		removeMoveDisplay();
		return;
	}
	
	var time = 0;
	switch(move.moveId[move.index]) {
		case MoveList.PUNCH_L.id:
			//createjs.Sound.play("sounds/whir.wav");
			move.player.gotoAndPlay(MoveList.PUNCH_L.animation);
			move.damage = MoveList.PUNCH_L.damage;
			time = MoveList.PUNCH_L.time;
			break;
		case MoveList.PUNCH_R.id:
			//createjs.Sound.play("sounds/whir.wav");
			move.player.gotoAndPlay(MoveList.PUNCH_R.animation);
			move.damage = MoveList.PUNCH_R.damage;
			time = MoveList.PUNCH_R.time;
			break;
		case MoveList.KICK_L.id:
			move.player.gotoAndPlay(MoveList.KICK_L.animation);
			move.damage = MoveList.KICK_L.damage;
			time = MoveList.KICK_L.time;
			break;
		case MoveList.KICK_R.id:
			move.player.gotoAndPlay(MoveList.KICK_R.animation);
			move.damage = MoveList.KICK_R.damage;
			time = MoveList.KICK_R.time;
			break;
		case MoveList.KICK_FLIP.id:
			move.player.gotoAndPlay(MoveList.KICK_FLIP.animation);
			move.damage = MoveList.KICK_FLIP.damage;
			time = MoveList.KICK_FLIP.time;
			break;
		case MoveList.HEADBUTT.id:
			move.player.gotoAndPlay(MoveList.HEADBUTT.animation);
			move.damage = MoveList.HEADBUTT.damage;
			time = MoveList.HEADBUTT.time;
			break;
	}
	move.index++;
	setTimeout(function() { executeMove(move); }, time);
	
	//enable blocking
	//the player can block for the middle third of the total animation time
	setTimeout(function() {
		//after 1/3 of the animation time, start the block period
		
		enableBlock = true;
		
		setTimeout(function() {
			//the block period is over, so play either the 'hit' or 'block' animation and take damage
			
			enableBlock = false;
			
			if(move.index > 0) {
				var randomNumber = Math.floor(Math.random()*(99 + 1)); //produces a random number between 0 and 99
				if(move.playerNumber === 1) {
					if(randomNumber < move.blockPercentage) {
						console.log("AI blocked!");
						createjs.Sound.play("sounds/swords_collide.mp3");
						if(move.moveId[move.index-1] === MoveList.PUNCH_L.id || move.moveId[move.index-1] === MoveList.PUNCH_R.id || move.moveId[move.index-1] === MoveList.HEADBUTT.id) {
							player2.gotoAndPlay("block_upper");
						} else {
							player2.gotoAndPlay("block_lower");
						}
						enemyAttributes.takeDamage(move.damage / 2);
					}
					else {
						if(move.moveId[move.index-1] === MoveList.PUNCH_L.id || move.moveId[move.index-1] === MoveList.PUNCH_R.id || move.moveId[move.index-1] === MoveList.HEADBUTT.id) {
							player2.gotoAndPlay("takehit_upper");
						} else {
							player2.gotoAndPlay("takehit_lower");
						}
						enemyAttributes.takeDamage(move.damage);
					}
				} else {
					if(randomNumber < move.blockPercentage) {
						console.log("You blocked!");
						createjs.Sound.play("sounds/swords_collide.mp3");
						if(move.moveId[move.index-1] === MoveList.PUNCH_L.id || move.moveId[move.index-1] === MoveList.PUNCH_R.id || move.moveId[move.index-1] === MoveList.HEADBUTT.id) {
							player1.gotoAndPlay("block_upper");
						} else {
							player1.gotoAndPlay("block_lower");
						}
						playerAttributes.takeDamage(move.damage / 2);
						move.blockPercentage = 0;
					}
					else {
						if(move.moveId[move.index-1] === MoveList.PUNCH_L.id || move.moveId[move.index-1] === MoveList.PUNCH_R.id || move.moveId[move.index-1] === MoveList.HEADBUTT.id) {
							player1.gotoAndPlay("takehit_upper");
						} else {
							player1.gotoAndPlay("takehit_lower");
						}
						playerAttributes.takeDamage(move.damage);
					}
				}
				
				blockPenalty = false;
				
				updateIcons(move.index);
				
			}
			
		}, time * 3 / 5);
	}, time / 5);
}

function fallBackPlayer() {
	if(fallBackCounter == 0)
		return;
	
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
		{src:"images/torso.png", id:"torso"},
		{src:"images/head2.png", id:"head2"}
	];

	var loader = new createjs.PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
	
	gameState = GS.CountDown;
	
	countDownInterval = setInterval(decCount, 1000);
	
	enableControls = false;
	moveExecuting = false;
	enableBlock = false;
	blockPenalty = false;
	
	fallBackCounter = 0;
	
	countDown = 3;
	
	currentMove = move(1, 1, player1, "a", 0, 0, 0);
}

var playerImages = {
		arm: "arm",
		fist_l: "fist_l",
		fist_r: "fist_r",
		foot: "foot",
		forearm: "forearm",
		head: "head",
		leg: "leg",
		pelvis: "pelvis",
		shin: "shin",
		torso: "torso"
	};
	
	
var enemyImages = {
		arm: "arm",
		fist_l: "fist_l",
		fist_r: "fist_r",
		foot: "foot",
		forearm: "forearm",
		head: "head",
		leg: "leg",
		pelvis: "pelvis",
		shin: "shin",
		torso: "torso"
	};

function handleFileLoad(o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

function handleComplete() {
	
	$console = $("#console").get(0);
	$console_r = $("#console_r").get(0);
	var container = document.getElementById("container");
	
	container.removeChild(canvas);
	container.appendChild($console);
	container.appendChild($console_r);
	container.appendChild(canvas);
	
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
	
	consoleElement = new createjs.DOMElement($console);
	consoleElement.regX = $($console).width();
	consoleElement.regY = 0;
	consoleElement.x = $($console.parentElement).width() / 2 - canvas.width / 2 + $($console).width();
	consoleElement.y = 0;
	stage.addChild(consoleElement);
	
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
	
	// $end_screen = $("#end_screen").get(0);
	// endscreenElement = new createjs.DOMElement($end_screen);
	// endscreenElement.regX = $($end_screen).width() / 2;
	// endscreenElement.regY = $($end_screen).height() / 2;
	// endscreenElement.x = $($end_screen.parentElement).width() / 2;
	// endscreenElement.y = canvas.height / 2;
	// stage.addChild(endscreenElement);
	
	//animate the setup
	createjs.Tween.get(consoleElement).to({ alpha: 1, x: $($console.parentElement).width() / 2 - canvas.width / 2, y: 0, rotation: 0 }, 1500, createjs.Ease.quadIn);
	createjs.Tween.get(console_rElement).to({ alpha: 1, x: $($console.parentElement).width() / 2 + canvas.width / 2, y: 0, rotation: 0 }, 1500, createjs.Ease.quadIn);
	

	$("body").keydown(function(e) {
		if(enableControls) {
			if(e.which == Keys.ONE) {
				if(playerAttributes.stamina >= playerAttributes.cost(0)) {
					playerAttributes.takeStamina(playerAttributes.cost(0));
					moveQueue.push(new move(1, 1, player1, playerAttributes.moves[0], 0, 0, 0));
					addMoveToConsole(1);
				}
			}
			else if(e.which == Keys.TWO) {
				if(playerAttributes.stamina >= playerAttributes.cost(1)) {
					playerAttributes.takeStamina(playerAttributes.cost(1));
					moveQueue.push(new move(2, 1, player1, playerAttributes.moves[1], 0, 0, 0));
					addMoveToConsole(2);
				}
			}
			else if(e.which == Keys.THREE) {
				if(playerAttributes.stamina >= playerAttributes.cost(2)) {
					playerAttributes.takeStamina(playerAttributes.cost(2));
					moveQueue.push(new move(3, 1, player1, playerAttributes.moves[2], 0, 0, 0));
					addMoveToConsole(3);
				}
			}
			else if(e.which == Keys.FOUR) {
				if(playerAttributes.stamina >= playerAttributes.cost(3)) {
					playerAttributes.takeStamina(playerAttributes.cost(3));
					moveQueue.push(new move(4, 1, player1, playerAttributes.moves[3], 0, 0, 0));
					addMoveToConsole(4);
				}
			}
			if(e.which == Keys.SEVEN) {
				if(TWO_PLAYER && enemyAttributes.stamina >= enemyAttributes.cost(0)) {
					enemyAttributes.takeStamina(enemyAttributes.cost(0));
					moveQueue.push(new move(1, 2, player2, enemyAttributes.moves[0], 0, 0, 0));
					addMoveToConsole(5);
				}
			}
			else if(e.which == Keys.EIGHT) {
				if(TWO_PLAYER && enemyAttributes.stamina >= enemyAttributes.cost(1)) {
					enemyAttributes.takeStamina(enemyAttributes.cost(1));
					moveQueue.push(new move(2, 2, player2, enemyAttributes.moves[1], 0, 0, 0));
					addMoveToConsole(6);
				}
			}
			else if(e.which == Keys.NINE) {
				if(TWO_PLAYER && enemyAttributes.stamina >= enemyAttributes.cost(2)) {
					enemyAttributes.takeStamina(enemyAttributes.cost(2));
					moveQueue.push(new move(3, 2, player2, enemyAttributes.moves[2], 0, 0, 0));
					addMoveToConsole(7);
				}
			}
			else if(e.which == Keys.ZERO) {
				if(TWO_PLAYER && enemyAttributes.stamina >= enemyAttributes.cost(3)) {
					enemyAttributes.takeStamina(enemyAttributes.cost(3));
					moveQueue.push(new move(4, 2, player2, enemyAttributes.moves[3], 0, 0, 0));
					addMoveToConsole(8);
				}
			}
			if(e.which == Keys.Q) {
				playerAttributes.stamina = playerAttributes.maxStamina;
			}
			if(e.which == Keys.W) {
				if(moveExecuting && !blockPenalty && currentMove.playerNumber === 2) {
					if(enableBlock) {
						currentMove.blockPercentage = 100; //player blocked the attack
					} else {
						blockPenalty = true;
					}
				}
			}
			if(e.which == Keys.I) {
				if(moveExecuting && !blockPenalty && TWO_PLAYER && currentMove.playerNumber === 1) {
					if(enableBlock) {
						currentMove.blockPercentage = 100; //player 2 blocked the attack
					} else {
						blockPenalty = true;
					}
				}
			}
			
		}
	});
	
	stage.update();

	createjs.Ticker.setFPS(FPS);
	createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(update);
	
	window.vm = new vm();
	ko.applyBindings(window.vm);
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
	
	if(gameState === GS.Fight) {
		enableControls = true;
		
		playerAttributes.rechargeStamina();
		enemyAttributes.rechargeStamina();
		
		if(!moveExecuting) {
			if(moveQueue.length > 0) {
				currentMove = moveQueue.shift();
				removeMoveFromConsole();
				displayMove(currentMove);
				if(!TWO_PLAYER && currentMove.playerNumber === 1) {
					currentMove.blockPercentage = blockPercentageAI(currentMove);
					previousMoves.push(currentMove.moveId);
					if(previousMoves.length > maxNGrams)
						previousMoves.shift();
				}
				executeMove(currentMove);
			}
		}
		
		if(!playerAttributes.active || !enemyAttributes.active) {
			gameState = GS.GameOver;
			if(!TWO_PLAYER)
				clearInterval(aiInterval);
			if(!playerAttributes.active)
				player1.gotoAndPlay("falldown");
			else
				player2.gotoAndPlay("falldown");
		}
		
	} else if(gameState === GS.GameOver) {
		enableControls = false;
		ctx.font = "50px Impact";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		if(!TWO_PLAYER) {
			if(!enemyAttributes.active)
				ctx.fillText("YOU WIN", canvas.width / 2, canvas.height / 2);
			else
				ctx.fillText("YOU LOSE", canvas.width / 2, canvas.height / 2);
		} else {
			if(!enemyAttributes.active)
				ctx.fillText("PLAYER 1 WINS", canvas.width / 2, canvas.height / 2);
			else
				ctx.fillText("PLAYER 2 WINS", canvas.width / 2, canvas.height / 2);
		}
	} else if(gameState === GS.End) {
		
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
	if(countDown > 1) {
		countDown -= 1;
	} else {
		countDown = "FIGHT!";
		$("#countdown").fadeOut();
		clearInterval(countDownInterval);
		if(!TWO_PLAYER)
			aiInterval = setInterval(pickMoveAI, 1000);
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
		x = canvas.width / 2 - (icon_width + 20) * (move.moveId.length + 1) / 2 + 20 - 20 / 2;
	else
		x = canvas.width / 2 - (icon_width + 20) * move.moveId.length / 2 - icon_width / 2;
	switch(move.moveNumber) {
		case 1:
			icons[0] = new createjs.Bitmap("images/button_1.png");
			break;
		case 2:
			icons[0] = new createjs.Bitmap("images/button_2.png");
			break;
		case 3:
			icons[0] = new createjs.Bitmap("images/button_3.png");
			break;
		case 4:
			icons[0] = new createjs.Bitmap("images/button_4.png");
			break;
	}
	icons[0].x = x;
	icons[0].y = y;
	stage.addChild(icons[0]);
	x += icon_width + 20;
	for(var i = 0; i < move.moveId.length; i++) {
		switch(move.moveId[i]) {
			case MoveList.PUNCH_L.id:
				icons[i+1] = new createjs.Bitmap("images/punch_left.png");
				break;
			case MoveList.PUNCH_R.id:
				icons[i+1] = new createjs.Bitmap("images/punch_right.png");
				break;
			case MoveList.KICK_L.id:
				icons[i+1] = new createjs.Bitmap("images/kick_left.png");
				break;
			case MoveList.KICK_R.id:
				icons[i+1] = new createjs.Bitmap("images/kick_right.png");
				break;
			case MoveList.KICK_FLIP.id:
				icons[i+1] = new createjs.Bitmap("images/kick_flip.png");
				break;
			case MoveList.HEADBUTT.id:
				icons[i+1] = new createjs.Bitmap("images/head_butt.png");
				break;
		}
		icons[i+1].x = x;
		icons[i+1].y = y;
		stage.addChild(icons[i+1]);
		x += icon_width + 20;
	}
}

function updateIcons(index) {
	//move leftmost icon down off of the screen
	createjs.Tween.get(icons[index]).to({y:canvas.height}, 100, createjs.Ease.linear);
	
	//move the rest of the icons left
	for(var i = index + 1; i < icons.length; i++)
		createjs.Tween.get(icons[i]).to({x:(icons[i].x - icon_width - 20)}, 100, createjs.Ease.linear);
}

function removeMoveDisplay() {
	for(var i = 0; i < icons.length; i++) {
		stage.removeChild(icons[i]);
	}
	icons.length = 0;
}

function pickMoveAI() {
	
	var probability = [];	//probability[i] means the probability of doing move number i
							//sum of probability is 100%
	if(playerAttributes.hp / playerAttributes.maxHp >= 0.70) {
		probability = [ 10, 20, 20, 50 ]; //very healthy
	} else if(playerAttributes.hp / playerAttributes.maxHp >= 0.40) {
		probability = [ 15, 15, 40, 30 ]; //healthy
	} else if(playerAttributes.hp / playerAttributes.maxHp >= 0.10) {
		probability = [ 25, 35, 25, 15 ]; //not healthy
	} else {
		probability = [ 70, 15, 10, 5 ]; //almost dead
	}
	
	var moveNumber = 1;
	var randomNumber = Math.floor(Math.random()*(99 + 1)); //produces a random number between 0 and 99
	for(var i = 0; i < probability.length; i++) {
		if(randomNumber <= probability[i])
			moveNumber = i + 1;
		else
			randomNumber -= probability[i];
	}
	
	if(enemyAttributes.stamina >= enemyAttributes.cost(moveNumber-1)) {
		enemyAttributes.takeStamina(enemyAttributes.cost(moveNumber-1));
		moveQueue.push(new move(moveNumber, 2, player2, enemyAttributes.moves[moveNumber-1], 0, 0));
		addMoveToConsole(moveNumber + 4);
	}
	
}

function runThis() {
	console.log("ran taht");
}

function blockPercentageAI(move) {
	var previousTimes = 0;
	for(var i = 0; i < previousMoves.length; i++) {
		console.log(previousMoves[i])
		if(previousMoves[i] == move.moveId)
			previousTimes++;
	}
	return (20 + previousTimes * 10);
}

function moveCost(ID) {
	switch(ID) {
		case MoveList.PUNCH_L.id:
			return MoveList.PUNCH_L.stamina;
		case MoveList.PUNCH_R.id:
			return MoveList.PUNCH_R.stamina;
		case MoveList.KICK_L.id:
			return MoveList.KICK_L.stamina;
		case MoveList.KICK_R.id:
			return MoveList.KICK_R.stamina;
		case MoveList.KICK_FLIP.id:
			return MoveList.KICK_FLIP.stamina;
		case MoveList.HEADBUTT.id:
			return MoveList.HEADBUTT.stamina;
	}
}
