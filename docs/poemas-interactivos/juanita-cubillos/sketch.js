let x1= 50
let y1=100
let x2= 50
let y2=250

let b=20
let c=300
let d=200
let e=380

let vel1 = 1;
let dir1 = 1;
let vel2 = 1;
let dir2 = 1;
let colCirc1=0;
let colCirc2=0;

function setup() {
  createCanvas(400, 350)
  colorCirc1= 254;//PARA HACER QUE ENTIENDA QUE EL COLOR ES UNA VARIABLE
  colorCirc2= 40;
}

function draw() {
  background(0);
  stroke(500)
  line(b,b,b,c)
  line (d,b,d,c)
  line(e,b,e,c)
 
  noStroke()
  fill (colorCirc1)
  ellipse(x1,y1,50,50)
  fill (colorCirc2)
  ellipse(x2,y2,50,50)
 
  //circulo uno primero
  x1=x1+((vel1+1)*dir1)
  y1=y1+(vel1*dir1)
  
  if(x1>width){
    dir1=-1
  }
  if(x1<0){
    dir1=1
  }
 
   //circulo dos
  x2=x2+((vel2+1)*dir2)
  y2=y2+(vel2*-dir2)
  if(x2>width){
    dir2=-1
  }
  if(x2<0){
    dir2=1
  }
// cambio de color circulo arriba
if(dist(x1,y1,x2,y2)<10){

  if (colorCirc1!=colorCirc2){
    colorCirc1 -= 1;
    colorCirc2 += 1;
  }
}

console.log(colorCirc1 + " " + colorCirc2);

}