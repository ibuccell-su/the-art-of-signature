// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;

// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    options: {
      wireframes: false,
      showAngleIndicator: false,
      background: 'transparent',
      height: window.innerHeight,
      width: window.innerWidth
    }
  }
});

// create variables for 100% height/width
var height = window.innerHeight;
var width = window.innerWidth;


world = engine.world;

// gravity init                Common.random(-.1, .1) , Common.random(-1, 1)
engine.world.gravity.x = 0;
engine.world.gravity.y = 0;


//add a mouse-controlled constraint
var mouseConstraint = MouseConstraint.create(engine, { 
    constraint: { 
      render: { 
        visible: false 
      } 
    }
 });

// create variable "offset"
var offset = 10,
    options = {
        isStatic: true
    };

// add bodies to world
world.bodies = [];

// add boundaries to the world
World.add(world, [
    Bodies.rectangle(width/2, -offset, width + 2 * offset, 20, options),
    Bodies.rectangle(width/2, height + offset, width + 2 * offset, 20, options),
    Bodies.rectangle(width + offset, height/2, 20, height + 2 * offset, options),
    Bodies.rectangle(-offset, height/2, 20, height + 2 * offset, options)
]);


World.add(engine.world, mouseConstraint);


// create objects
var pig = Composites.stack(100, 50, 3, 5, 60, 10, function(x, y, column, row) {
  return Bodies.rectangle(Common.random(0,width), Common.random(300,height), 65, 120, {
    density: 0.6,
    friction: Common.random(0.05, .1),
    // frictionAir: Common.random(0.05, .1),
    restitution: 0.3,
      render: {
        sprite: {
          texture: 'img/Pig.png',
          xScale: 1,
          yScale: 1
        }
      }
    });});
var sharky = Composites.stack(100, 50, 3, 5, 60, 10, function(x, y, column, row) {
  return Bodies.rectangle(Common.random(0,width), Common.random(400,height), 65, 120, {
    density: 0.1,
    friction: Common.random(0.05, .1),
    restitution: 0.3,
      render: {
        sprite: {
          texture: 'img/Sharky.png',
          xScale: 1,
          yScale: 1
        }
      }
    });});
var uni = Composites.stack(100, 50, 5, 3, 60, 10, function(x, y, column, row) {
  return Bodies.rectangle(Common.random(0,width), Common.random(500,height), 60, 120, {
    density: 0.2,
    friction: Common.random(0.05, .1),
    restitution: 0.3,
      render: {
        sprite: {
          texture: 'img/Unicorn.png',
          xScale: 1,
          yScale: 1
        }
      }
      });});

// add all of the bodies to the world
  World.add(engine.world, pig);
  World.add(engine.world, sharky);
  World.add(engine.world, uni);

// run the engine
Engine.run(engine);



// color pallette
  // tan: #CCA379
  // orange: #F08E41
  // blue: #6492C9
  // magenta: #E4747A
  // purple: #C28C9F
