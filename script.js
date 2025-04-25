 // Tutorial 1: Game Gravity - https://www.w3schools.com/graphics/game_gravity.asp
    // Tutorial 2: Forces Example - https://p5js.org/examples/math-and-physics-forces.html

    let ballX = 300;
    let ballY = 50;
    let velocity = 0;
    let gravity = 0.5;
    let drag = 0.05;

    function setup() {
      createCanvas(900, 700);
    }

    function draw() {
      background(240);

      // draw the "liquid" area (bottom half blue thing)
      fill(100, 150, 255, 150);
      rect(0, height / 2, width, height / 2);

      // apply gravity
      velocity += gravity;

      // when the ball hits the blue area thats like "liquid" add drag
      if (ballY > height / 2) {
        velocity *= 1 - drag; // simple drag
      }

      // update position
      ballY += velocity;

      // check for ground
      if (ballY > height - 25) {
        ballY = height - 25;
        velocity *= -0.7; // bounce effect
      }

      // make ball
      fill(255, 100, 100);
      ellipse(ballX, ballY, 50, 50);
    }

    function mousePressed() {
      // reset ball aftter click
      ballY = 50;
      velocity = 0;
    }