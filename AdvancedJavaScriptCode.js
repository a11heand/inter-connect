// Filename: AdvancedJavaScriptCode.js

/*
This code is an advanced JavaScript implementation
that demonstrates a complex and creative solution.
It focuses on optimizing computational processes
and simulating a virtual world using object-oriented
programming concepts.
*/

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class representing a virtual particle
class Particle {
  constructor(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  move() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Class representing a virtual world with particles
class VirtualWorld {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particles = [];
  }

  addParticle(particle) {
    this.particles.push(particle);
  }

  removeParticle(particle) {
    const index = this.particles.indexOf(particle);
    if (index > -1) {
      this.particles.splice(index, 1);
    }
  }

  runSimulation() {
    // Main simulation loop
    for (let i = 0; i < 1000; i++) {
      for (const particle of this.particles) {
        particle.move();

        // Check for particle collision with boundaries
        if (particle.x < 0 || particle.x >= this.width ||
            particle.y < 0 || particle.y >= this.height) {
          this.removeParticle(particle);
        }
      }
    }
  }
}

// Create a virtual world
const world = new VirtualWorld(800, 600);

// Generate 100 particles and add them to the world
for (let i = 0; i < 100; i++) {
  const x = getRandomNumber(0, world.width);
  const y = getRandomNumber(0, world.height);
  const velocity = {
    x: getRandomNumber(-1, 1),
    y: getRandomNumber(-1, 1)
  };
  const particle = new Particle(x, y, velocity);
  world.addParticle(particle);
}

// Run the simulation
world.runSimulation();

// Print the final number of particles in the world
console.log(`Final number of particles: ${world.particles.length}`);