class Complex extends p5.Vector{
  
  constructor(real, img){
    super(real, img);
  }
  
  square(){
    return new Complex(pow(this.x, 2) - pow(this.y, 2), 2*this.x*this.y);
  }
  

}