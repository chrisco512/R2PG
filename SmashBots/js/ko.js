ko.bindingHandlers.droppable = {
    init: function(element, valueAccessor) {
        var dropHandler = valueAccessor() || {};
        
        $(element).droppable({
            drop: function(event, ui) {
               var item = ko.utils.domData.get(ui.draggable[0], "ko_dragItem");
                
                if (item) {
                    item = item.clone ? item.clone() : item;
                    dropHandler.call(this, item, event, ui);
                }
            }
        });
    }
};

//control visibility, give element focus, and select the contents (in order)
ko.bindingHandlers.visibleAndSelect = {
    update: function(element, valueAccessor) {
        ko.bindingHandlers.visible.update(element, valueAccessor);
        if (valueAccessor()) {
            setTimeout(function() {
                $(element).find("input").focus().select();
            }, 0); //new tasks are not in DOM yet
        }
    }
};

var Move = function(name) {
	var src = "";
	var st;
	switch(name) {
		case MoveList.PUNCH_L.id:
			src = "images/punch_left.png";
			st = MoveList.PUNCH_L.stamina;
			break;
		case MoveList.PUNCH_R.id:
			src = "images/punch_right.png";
			st = MoveList.PUNCH_R.stamina;
			break;
		case MoveList.KICK_L.id:
			src = "images/kick_left.png";
			st = MoveList.KICK_L.stamina;
			break;
		case MoveList.KICK_R.id:
			src = "images/kick_right.png";
			st = MoveList.KICK_R.stamina;
			break;
		case MoveList.KICK_FLIP.id:
			src = "images/kick_flip.png";
			st = MoveList.KICK_FLIP.stamina;
			break;
		case MoveList.HEADBUTT.id:
			src = "images/head_butt.png";
			st = MoveList.HEADBUTT.stamina;
			break;
	}

	return { move: name, source: src, stamina: st };
};
	
Move.prototype.clone = function () {
	return new Task(this.name());
};

var vm = function() {
	var self = this;
	self.moveOne = new ko.observableArray([new Move("p"),new Move("P"),new Move("k"),new Move("K")]);
	self.moveTwo = new ko.observableArray([]);
	self.moveThree = new ko.observableArray([]);
	self.moveFour = new ko.observableArray([]);
	
	self.moveOne2 = new ko.observableArray([new Move("p"),new Move("P"),new Move("k"),new Move("K")]);
	self.moveTwo2 = new ko.observableArray([]);
	self.moveThree2 = new ko.observableArray([]);
	self.moveFour2 = new ko.observableArray([]);
	
	self.clearMove = function(number) {
		switch(number) {
			case 1:
				self.moveOne([]);
				break;
			case 2:
				self.moveTwo([]);
				break;
			case 3:
				self.moveThree([]);
				break;
			case 4:
				self.moveFour([]);
				break;
			case 5:
				self.moveOne2([]);
				break;
			case 6:
				self.moveTwo2([]);
				break;
			case 7:
				self.moveThree2([]);
				break;
			case 8:
				self.moveFour2([]);
				break;
				
		}
	}
	
	self.totalStamina = function(moves) {
		var idx, sum = 0;
		for(idx = 0; idx < moves.length; idx++) {
			sum += moves[idx].stamina;
		}
		return sum;
	};
	
	self.options = [new Move("p"),new Move("P"),new Move("k"),new Move("K"),new Move("h"),new Move("f")];

	self.addMoveToOne = function($data) {
		self.moveOne.push(new Move($data.move));
		if(self.totalStamina(self.moveOne()) > 2) {
			self.moveOne.pop();
		}
	};
	self.addMoveToTwo = function($data) {
		self.moveTwo.push(new Move($data.move));
		if(self.totalStamina(self.moveTwo()) > 5) {
			self.moveTwo.pop();
		}
	};
	self.addMoveToThree = function($data) {
		self.moveThree.push(new Move($data.move));
		if(self.totalStamina(self.moveThree()) > 10) {
			self.moveThree.pop();
		}
	};
	self.addMoveToFour = function($data) {
		self.moveFour.push(new Move($data.move));
		if(self.totalStamina(self.moveFour()) > 18) {
			self.moveFour.pop();
		}
	};
	
	self.addMoveToOne2 = function($data) {
		self.moveOne2.push(new Move($data.move));
		if(self.totalStamina(self.moveOne2()) > 2) {
			self.moveOne2.pop();
		}
	};
	self.addMoveToTwo2 = function($data) {
		self.moveTwo2.push(new Move($data.move));
		if(self.totalStamina(self.moveTwo2()) > 5) {
			self.moveTwo2.pop();
		}
	};
	self.addMoveToThree2 = function($data) {
		self.moveThree2.push(new Move($data.move));
		if(self.totalStamina(self.moveThree2()) > 10) {
			self.moveThree2.pop();
		}
	};
	self.addMoveToFour2 = function($data) {
		self.moveFour2.push(new Move($data.move));
		if(self.totalStamina(self.moveFour2()) > 18) {
			self.moveFour2.pop();
		}
	};
};
