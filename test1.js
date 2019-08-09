let img; 

function preload(){ 
  img=loadImage("https://cdn.nlark.com/yuque/0/2019/jpeg/286022/1565393967740-assets/web-upload/fcbe5158-90d4-4d21-b9f4-ca954669cd53.jpeg"); 
 } 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0,800,600);
  rect(50,50,50,50);
}

//重置全屏设置画图区域
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
