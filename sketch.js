let frame = new p5.Vector(2500,2500);
let origin = p5.Vector.div(frame, 2);
let scale_factor = 2 / frame.x;
let colors = [
  '#D8F3DC', 
  '#B7E4C7',
  '#95D5B2', 
  '#74C69D',
  '#52B788', 
  '#40916C',
  '#2D6A4F', 
  '#1B4332',
  '#081C15',
]

let color_counter = 0;

function pixelsToCoords(i, j){
  let vec = new p5.Vector();
  vec.x = (origin.x - (frame.x - i)) * scale_factor;
  vec.y = (-origin.y + (frame.x - j)) * scale_factor;
  return vec;
}

function chooseColor(n){
  
  if(n!=MAX_ITER){ 
    let remainder = n % colors.length;
    return colors[remainder];
  }else{
    return 0;}
}

function setup() {
  
  createCanvas(frame.x, frame.y);
  for(let i = 0; i <= frame.x; ++i){
    for(let j = 0; j < frame.y; ++j){
      let coords = pixelsToCoords(i, j);
      let complex = new Complex(coords.x, coords.y);
      let n = (mandelbrotSet(complex));
      let colorset = chooseColor(n);
      ++color_counter;
      noStroke();
      fill(colorset);
      square(i, j, 1);
    }
  }
}
