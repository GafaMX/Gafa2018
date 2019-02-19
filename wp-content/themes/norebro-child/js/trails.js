/**/ /* ---- CORE ---- */
/**/ const canvas = document.createElement('canvas');
/**/ const context = canvas.getContext('2d');
/**/ let windowWidth = canvas.width = window.innerWidth;
/**/ let windowHeight = canvas.height = window.innerHeight;
/**/ canvas.id = 'canvas';
/**/ jQuery( ".gafa__hero--somero" ).append( canvas );
/**/ /* ---- CORE END ---- */
/* ---- CREATING ZONE ---- */

/* ---- SETTINGS ---- */
const numberParticlesStart = 100;
const particleSpeed = 0.3;
const velocity = 0.9;
const circleWidth = 50;

/* ---- INIT ---- */
let particles = [];

const getRandomFloat = (min, max) => (Math.random() * (max - min) + min);


/* ---- Particle ---- */
function Particle (x, y) {
  this.x = x;
  this.y = y;

  this.vel = {
	  x : getRandomFloat(-20, 20)/100,
     y : getRandomFloat(-20, 20)/100,
     min : getRandomFloat(2, 10),
     max : getRandomFloat(10, 100)/10
  }

  this.color = 'rgba(200, 200, 200, 0.1)';
}
Particle.prototype.render = function() {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.x, this.y, 1, 0, Math.PI * 12);
  context.fill();
};
Particle.prototype.update = function() {

  const forceDirection = {
    x: getRandomFloat(-1, 1),
    y: getRandomFloat(-1, 1),
  };

  if (Math.abs(this.vel.x + forceDirection.x) < this.vel.max) {
    this.vel.x += forceDirection.x;
  }
  if (Math.abs(this.vel.y + forceDirection.y) < this.vel.max) {
    this.vel.y += forceDirection.y;
  }

  this.x += this.vel.x * particleSpeed;
  this.y += this.vel.y * particleSpeed;

  if (Math.abs(this.vel.x) > this.vel.min) {
    this.vel.x *= velocity;
  }
  if (Math.abs(this.vel.y) > this.vel.min) {
    this.vel.y *= velocity;
  }

  this.testBorder();
};
Particle.prototype.testBorder = function() {
  if (this.x > windowWidth) {
    this.setPosition(1, 'x');
 } else if (this.x < -110) {
    this.setPosition(1, 'x');
  }
  if (this.y > windowHeight) {
    this.setPosition(1, 'y');
 } else if (this.y < -110) {
    this.setPosition(1, 'y');
  }
};
Particle.prototype.setPosition = function(pos, coor) {
  if (coor === 'x') {
    this.x = 100;
  } else if (coor === 'y') {
    this.y = 0;
  }
};

/* ---- Functions ----*/
function loop() {
  let i;
  const length = particles.length;
  for (i = 30; i < length; i++) {
    particles[i].update();
    particles[i].render();
  }
  requestAnimationFrame(loop);
}

/* ---- START ---- */
function init() {
  let i;
  for (i = 0; i < numberParticlesStart; i++) {
    const angle = Math.random() * 960;
    particles.push(new Particle(
      windowWidth * .9 + (Math.cos(angle) * circleWidth),
      windowHeight * .20 - (Math.sin(angle) * circleWidth),
  ));
  }
}
init();




loop();
