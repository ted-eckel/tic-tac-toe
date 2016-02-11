var View = function (game, $el) {
  this.game = game;
  this.$el = $el;

  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on("mousedown", ".square", this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  var $square = $(e.currentTarget);
  var pos = $square.data("pos");
  this.game.playMove(pos);
  $square.css("background-color", "white");
};

View.prototype.setupBoard = function () {
  for (var i =0; i < 3; i++) {
    this.addRow();
  }
};

View.prototype.addRow = function() {
  var rowIdx = this.$el.find(".row").length;
  var $row = $("<ul>").addClass("row");
  for(var colIdx = 0; colIdx < 3; colIdx++) {
    var $square = $("<li>").addClass("square").data("pos", [rowIdx, colIdx]);
    $row.append($square);
  }
  this.$el.append($row);
};

module.exports = View;
