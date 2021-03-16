var MAX_ITER = 250;

// https://en.wikipedia.org/wiki/Mandelbrot_set#Formal_definition

function mandelbrotSet(input_complex){ // Returns how many iterations we needed
  let counter = 0;
  let loop_complex = new Complex(0, 0);
  while(loop_complex.mag() <= 2 && counter != MAX_ITER){
    loop_complex = loop_complex.square();
    loop_complex.add(input_complex);
    ++counter;
  }
  //print(counter)
  return counter;
}