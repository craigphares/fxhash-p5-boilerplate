import p5 from 'p5';

console.log(fxhash);

new p5((P5) => {   
  window.p5 = p5;
  window.P5 = P5;

  let seed = P5.int(fxrand() * 100000000);
  P5.randomSeed(seed);
  P5.noiseSeed(seed);

  let DEFAULT_SIZE = 1000;
  let WIDTH;
  let HEIGHT;
  let DIM;
  let M;

  window.$fxhashFeatures = {

  };

  P5.setup = () => {
    setupSize();
    P5.createCanvas(WIDTH, HEIGHT);
  }


  P5.draw = () => {
    
  }

  P5.windowResized = () => {
    setupSize();
    P5.resizeCanvas(WIDTH, HEIGHT);
    P5.redraw();
  }

  let setupSize = () => {
    WIDTH = P5.windowWidth;
    HEIGHT = P5.windowHeight;
    DIM = P5.min(WIDTH, HEIGHT);
    M = DIM / DEFAULT_SIZE;
  }

});

console.log($fxhashFeatures);