let osc = []
let inp = []
let oscvals = []
let amp = .5;
let howmany = 10;
let playing = false;
let sliders = []

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  background(160);
  for (let i = 0; i < howmany; i++) {
    osc.push(new p5.Oscillator('sine'));
    oscvals.push(0);
    inp.push(createInput(''));
    inp[i].position(windowWidth/2, (i+1) * windowHeight/(howmany+4))
    inp[i].size(100);
    inp[i].input(myInputEvent);
    // sliders[i] = createSlider(0,8000,0);
    // sliders[i].position(windowWidth/2 - windowWidth/2.5, (i+1)* windowHeight/10 - 10)
    // sliders[i].style('width','80vw')
  }
  button = createButton('play');
  button.position(windowWidth/2, windowHeight-100);
  button.mousePressed(playOsc);
  c1 = color(200);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  text("joe eats ass", 100, 100)
}

function draw() {
  if (playing) {
    for (let t = 0; t < howmany; t++) {
      let frequency = parseFloat(inp[t].value())
      if (!frequency) {
        frequency = 0;
      }
      osc[t].freq(frequency, .1);
    }
  }
  
}



function playOsc() {
  if (playing ==false) {
    for (let x = 0; x < howmany; x++) {
      osc[x].start();
    }
    playing = true;   
  }
  else{
    for (let x = 0; x < howmany; x++) {
      osc[x].stop();
    }
    playing = false;
    
  }
   
}


function myInputEvent() {
  console.log(this.value())
}