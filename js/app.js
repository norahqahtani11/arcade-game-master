// Enemies our player must avoid

var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt;
    if (this.x >= 400) {
        this.x = 0;
    }
    
    if (
    player.y + 120 >= this.y + 80 &&
    player.x + 20 <= this.x + 90 &&
    player.y + 85 <= this.y + 145 &&
    player.x + 70 >= this.x + 40) {
        player.x = 200;
        player.y = 340;
        alert("OOPS");
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed) {
    //define a player
    this.sprite = 'images/char-pink-girl.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};


Player.prototype.update = function () {
    if (this.y > 370) {
        this.y = 370;
    }
    if (this.x > 410) {
        this.x = 410;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y < 10) {
        this.y = 10;
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (char) {
    if (char === "up") {
        this.y -= 100;
    } else if (char === "left") {
        this.x -= 90;
    } else if (char === "right") {
        this.x += 90;
    } else if (char === "down") {
        this.y += 100;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Enemy1 = new Enemy(0, 80, 190);
var Enemy2 = new Enemy(400, 20, 80);
var Enemy3 = new Enemy(220, 166, 40);
var Enemy4 = new Enemy(160, 90, 30);
var allEnemies =[Enemy1, Enemy2, Enemy3, Enemy4];

var player = new Player(110, 330, 50);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    
    player.handleInput(allowedKeys[e.keyCode]);
});