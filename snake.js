export function Snake() {
  this.x = 0;
  this.y = 0;
  this.dx = 1;
  this.dy = 0;
  this.width = 10;
  this.height = 10;

  this.updateSnake = function() {
    this.x = this.x + this.width * this.dx;
    this.y = this.y + this.height * this.dy;
  };

  this.showSnake = function(canvas) {
    canvas.fillStyle = 'white';
    canvas.fillRect(this.x, this.y, this.width, this.height);
  };
}
