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
	switch(name) {
		case MoveList.PUNCH_L.id:
			src = "images/punch_left.png";
			break;
		case MoveList.PUNCH_R.id:
			src = "images/punch_right.png";
			break;
		case MoveList.KICK_L.id:
			src = "images/kick_left.png";
			break;
		case MoveList.KICK_R.id:
			src = "images/kick_right.png";
			break;
		case MoveList.KICK_FLIP.id:
			src = "images/kick_left.png";
			break;
		case MoveList.HEADBUTT.id:
			src = "images/head.png";
			break;
	}

	return { move: name, source: src };
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
	
	self.options = [new Move("p"),new Move("P"),new Move("k"),new Move("K"),new Move("h"),new Move("f")];
	self.addMoveToOne = function(obj,e,ui) {
		if(ui.item.hasClass("ui-draggable")) {
			obj.cancelDrop = true;
			self.moveOne.push(new Move(obj.item.move));
		}
	};
};
