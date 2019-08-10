let img; // Declare variable 'img'.
function preload(){ 
  //加载图片文件 
  img=loadImage("https://cdn.nlark.com/yuque/0/2019/png/286022/1565396188837-assets/web-upload/865d2e14-4af0-4ce2-9db7-fb9280b0f685.png"); 
 } 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0,2100 *0.3,3150 *0.3);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height / 2, img.width / 2, img.height / 2);
  rect(50,50,50,50);
}

//重置全屏设置画图区域
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
