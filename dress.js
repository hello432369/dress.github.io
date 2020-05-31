var ss;
var ccs = [];
var ggs = [];

//第二步：定制UI界面
var t, c1, c2;
var funseason, funscene, funcollar;
var x, y;

//第一步：设置UI参数
var settings = {
    season: 'Spring', //初始化：季节
    scene: 'Home', //初始化：场景
}

window.onload = function () {
    gui = new dat.GUI(); //声明GUI

    var f1 = gui.addFolder('dress.中国'); //组件名称
    f1.open(); //折叠

    funseason = f1.add(settings, 'season', {
        '春·万物复苏': 'Spring',
        '夏·鸟语花香': 'Summer',
        '秋·五谷丰登': 'Autumn',
        '冬·银装素裹': 'Winter'
    }).name('季节');
    funseason.onChange(draw);

    funscene = f1.add(settings, 'scene', {
        '家·休闲自由': 'Home',
        '商·干练简洁': 'Business',
        '逛·活跃展现': 'Shopping',
        '聚·得体大方': 'Party',
        '私·情趣性感': 'Tryst',
        '节·闪耀夺目': 'Festival'
    }).name('场景');
    funscene.onChange(draw);

};

//全屏设置画图区域
function setup() {
    createCanvas(windowWidth, windowHeight);

    ss = new SceneManager();
    ss.addScene(s001); //dress
    // ss.addScene ( s01 ); //启动页
    ss.showScene(s001); //从第一个场景开始
}

//画图动画
function draw() {
    ss.draw();
}

//重置全屏设置画图区域
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//连衣裙
function s001() {
    this.setup = function () {
        colorMode(HSB, 360, 100, 100);
        x = width / 2 + 200;
        y = height / 2;
    }

    this.draw = function () {
        background(0, 0, 12);

        if (settings.season == "Spring") {
            c1 = color(150, 90, 90);
            t = "春";
            c2 = color(150, 90, 60);
        } else if (settings.season == "Summer") {
            c1 = color(60, 90, 90);
            t = "夏";
            c2 = color(60, 90, 60);
        } else if (settings.season == "Autumn") {
            c1 = color(30, 90, 90);

            t = "秋";
            c2 = color(30, 90, 60);
        } else if (settings.season == "Winter") {
            c1 = color(0, 0, 90);

            t = "冬";
            c2 = color(0, 0, 60);
        }
        fill(c1);
        rectMode(CENTER);
        rect(width / 2, height / 2, 900, 600, 30);

        fill(c2);
        textAlign(CENTER);
        textSize(90);
        text(t, width / 2 - 369, height / 2 - 180);

        this.people();
        this.dress2();
    }

    this.people = function () {
        push();
        translate(width / 2 +200, height / 2);
        noStroke();
        fill(5, 20, 77);
        beginShape();
        //后腿
        vertex(-64, -50);
        bezierVertex(-71, -23, -97, 9, -57, 149);
        bezierVertex(-51, 227, -47, 279, -23, 341); //膝盖1
        bezierVertex(-28, 350, 0, 339, -4, 335); //脚环0
        bezierVertex(-11, 213, -6, 280, -12, 168); //膝盖2
        bezierVertex(-4, 111, -15, 63, -19, 44); //底部

        bezierVertex(-45, 119, -30, 81, -49, 163); //底部
        bezierVertex(-53, 213, -65, 280, -78, 336); //膝盖2
        bezierVertex(-80, 328, -75, 349, -58, 346); //脚环0
        bezierVertex(-5, 227, -22, 279, 1, 168); //膝盖1
        bezierVertex(66, 35, 62, 26, 47, -49); //膝盖1

        endShape(); //可不写CLOSE
        beginShape();
        stroke(0);
        noFill();
        bezier(-19, 44, -45, 119, -30, 81, -49, 163);
        bezier(-49, 163, -53, 213, -65, 280, -78, 336);
        endShape(); //可不写CLOSE
        pop();


        push();
        translate(width / 2+200, height / 2);
        noStroke();
        fill(5, 20, 77);
        beginShape();
        vertex(-79, 335);
        bezierVertex(-91, 366, -132, 449, -75, 421);
        bezierVertex(-65, 416, -74, 419, -57, 345);
        endShape(); //可不写CLOSE
        beginShape();
        vertex(-23, 344);
        bezierVertex(-23, 366, -14, 374, -10, 414);
        bezierVertex(49, 428, 22, 412, -1, 337);
        endShape(); //可不写CLOSE
        pop();


        push();
        translate(width / 2+200, height / 2);
        noStroke();
        fill(5, 20, 77);
        beginShape();
        //左侧
        vertex(-20, -210);
        bezierVertex(-37, -217, -45, -230, -82, -297);
        bezierVertex(-61, -253, -60, -284, -20, -251); //膝盖1
        bezierVertex(-1, -256, -12, -259, -3, -265); //脚环0
        bezierVertex(-62, -300, -97, -327, -107, -312); //膝盖2
        bezierVertex(-109, -256, -70, -223, -63, -189); //底部
        bezierVertex(-56, -105, -48, -121, -64, -50);
        bezierVertex(-49, -37, 63, -51, 47, -47);
        bezierVertex(18, -115, 74, -169, 75, -171);
        bezierVertex(134, -214, 165, -245, 145, -256);
        bezierVertex(49, -295, 45, -277, 34, -285);
        bezierVertex(22, -280, 26, -259, 37, -251);
        bezierVertex(62, -275, 76, -248, 113, -240);
        bezierVertex(52, -200, 103, -221, 39, -202);

        endShape(); //可不写CLOSE
        pop();


        push();
        translate(width / 2+200, height / 2);
        noStroke();
        fill(5, 20, 77);
        beginShape();
        //左侧
        vertex(-20, -210);
        bezierVertex(-13, -215, -14, -218, -12, -230);
        bezierVertex(-44, -240, -28, -305, -5, -311); //膝盖1
        bezierVertex(16, -326, 43, -288, 35, -288); //脚环0
        bezierVertex(47, -263, 5, -242, 36, -202); //膝盖2
        bezierVertex(15, -184, -12, -176, -20, -215); //底部
        endShape(); //可不写CLOSE
        pop();


        push();
        translate(width / 2+200, height / 2);
        //noStroke();
        fill(0);
        beginShape();
        //左侧
        vertex(-13, -309);
        bezierVertex(60, -349, 63, -225, 40, -202);
        bezierVertex(17, -193, 39, -246, -12, -310); //膝盖1

        endShape(); //可不写CLOSE
        pop();

    }

    var d2r,d2g,d2b;
    this.dress2 = function () {
        noStroke();
        fill(d2r,d2g,d2b);

        push();
        translate(width / 2+200, height / 2);
        beginShape();
        //上身
        vertex(-63, -168); //右侧腋窝
        if (settings.scene == "Home") {
            d2r =0,d2g =0 ,d2b =90;    //极白
            bezierVertex(-29,-159, -27,-199,-22,-210);  //右袖
            bezierVertex(-2, -148, 44, -198, 37, -201); //领口:圆领
        } else if (settings.scene == "Business") {
            d2r =0,d2g =15 ,d2b =9;  //极黑
            bezierVertex(-29,-159, -27,-199,-22,-210);  //右袖
            vertex(5,-171);  //v领口
            bezierVertex(5,-171, 37,-201,37,-201);    //领口:v领
        } else if (settings.scene == "Shopping") {
            d2r =42, d2g =100 ,d2b =90;  //故宫黄
            bezierVertex(-29,-159, -27,-199,-22,-210);  //右袖
            bezierVertex(-25,-165, -40,-162,-2,-160);    //领口:一领
            bezierVertex(37,-156, 34,-153,35,-201);    //领口:一领
        } else if (settings.scene == "Party") {
            d2r =234, d2g =100 ,d2b =75;  //故宫蓝
            bezierVertex(-29,-159, -27,-199,-22,-210);  //右袖
            bezierVertex(-10,-92, 39,-183,37,-201);    //领口:大圆领
        } else if (settings.scene == "Tryst") {
            d2r =0, d2g =100 ,d2b =60;  //故宫红
            bezierVertex(-29,-159, -27,-199,-22,-210);  //右袖
            vertex(-4,-132);  //领口:深v领
            bezierVertex(-4,-132, 37,-201,37,-201);    //领口:深v领
        } else if (settings.scene == "Festival") {
            d2r =297, d2g =100 ,d2b =36;  //故宫紫
            bezierVertex(-29,-164, -27,-164,-22,-164);  //右袖
        }
        bezierVertex(42,-155, 43,-157,62,-153);    //左袖
        bezierVertex(52,-147, 33,-89,41,-69);      //左侧
        bezierVertex(40, -55, -57, -62, -59, -78); //底部
        bezierVertex(-52, -95, -61, -181, -63, -168); //右侧  
        endShape();
        pop();


        //下身
        push();
        translate(width / 2+200, height / 2);
        beginShape();
        //上身
        vertex(-58, -78); //左侧腰部
        bezierVertex(-57, -78, 39, -69, 40, -69); //右侧腰部
        bezierVertex(53, -37, 64, 21, 50, 53); //右侧臀部
        bezierVertex(50, 73, -77, 23, -79, 43); //底部
        bezierVertex(-81, -48, -66, -25, -59, -78); //左侧臀部
        endShape();
        pop();

    }

}


//场景1
//启动页
function s01() {
    this.setup = function () {
        colorMode(HSB, 360, 100, 100);

        ccs[0] = new cc(0, "开始划船", width / 2, height / 2, 2);
        ccs[1] = new cc(0, "关于我们", width / 2, height / 2 + 60, 3);
    }

    this.draw = function () {
        ccs[0].backani();
        ccs[0].menu();
        ccs[1].menu();
        ccs[0].number();
    }
}

//场景2
//关卡页
function s02() {

    this.setup = function () {
        colorMode(HSB, 360, 100, 100);

        ccs[2] = new cc(0, "返回首页", width / 12, height / 12, 1);
        ccs[3] = new cc(0, "触礁沉船", width / 2, height / 2 + 210, 11);
    }

    this.draw = function () {
        ccs[2].backani();
        ccs[2].menu();
        ccs[3].menu();
        ccs[2].number();
    }

}

//场景3
//关于我们
function s03() {
    this.setup = function () {
        colorMode(HSB, 360, 100, 100, 1);

        ccs[2] = new cc(0, "返回首页", width / 12, height / 12, 1);
    }

    this.draw = function () {
        background(0, 0, 0);

        ccs[2].backani();
        ccs[2].menu();
        ccs[2].about();
        ccs[2].number();
    }
}

//场景4
//关卡1-1
function s11() {
    this.setup = function () {
        colorMode(HSB, 360, 100, 100, 1);
        ggs[0] = new gg();
    }

    this.draw = function () {
        ggs[0].sea();
        ggs[0].boss();
        ggs[0].play();
        ggs[0].how();
        ggs[0].over();
        ggs[0].score();
    }
}

class cc {
    constructor(s3rw1, s3t, s3x, s3y, s3s) {
        //菜单参数
        this.s3rw1 = s3rw1; //粉色倒计时
        this.s3t = s3t; //按钮内容
        this.s3x = s3x; //按钮x坐标
        this.s3y = s3y; //按钮y坐标
        this.s3s = s3s; //场景序号

        //动画
        this.theta = 0.0
        this.m = 0;

        //关于我们
        this.s3tx = width / 2;
        this.s3ty = height / 3;
    }

    //按钮
    menu() {
        //菜单按钮1
        strokeWeight(1);
        noStroke();
        fill(0, 51, 96);
        rectMode(CENTER);
        rect(this.s3x, this.s3y, this.s3rw1, 40);

        fill(0, 3, 99);
        textAlign(CENTER);
        textSize(30);
        text(this.s3t, this.s3x, this.s3y + 10);

        stroke(0, 3, 99);
        noFill();
        rectMode(CENTER);
        rect(this.s3x, this.s3y, 150, 40);

        if (this.s3x - 75 <= mouseX && mouseX <= this.s3x + 75 && this.s3y - 20 <= mouseY && mouseY <= this.s3y + 20) {
            noStroke();
            fill(0, 51, 96);
            ellipse(this.s3x + 75 + 30, this.s3y, 20, 20);

            this.s3rw1++;
            if (this.s3rw1 == 150) {
                if (this.s3s == 1) {
                    ss.showScene(s01);
                }
                if (this.s3s == 2) {
                    ss.showScene(s02);
                }
                if (this.s3s == 3) {
                    ss.showScene(s03);
                }
                if (this.s3s == 11) {
                    ss.showScene(s11);
                }
            }
        } else {
            this.s3rw1 = 0;
        }

    }

    //鼠标数字
    number() {
        //class内部的变量要有this.
        this.a3x = map(mouseX, 0, width, 0, 6);
        this.a3c = map(mouseY, 0, height, 0, 360);
        this.a3s = map(mouseY, 0, height, 54, 45);
        this.a3b = map(mouseY, 0, height, 91, 81);
        this.a3t = int(map(mouseY, 0, height, 0, 9));

        push();
        translate(mouseX, mouseY);
        for (var i = 0; i < 2 * this.a3x; i++) {
            push();
            textSize(36);
            textAlign(LEFT);
            rotate(PI * i / this.a3x);
            noStroke();
            fill(this.a3c, this.a3s, this.a3b);
            text(this.a3t, 0, 0);
            pop();
        }
        pop();
    }

    //背景动画
    backani() {
        background(0, 0, 0);

        //月亮
        for (var i = 1; i <= 25; i++) {
            fill(60, 100, 81, 0.7);
            stroke(60, 100, 81, 0.1);
            strokeWeight(i); //月亮轮廓发光算法 = 通过叠加轮廓实现 
            ellipse(width / 2, 0, width / 2, width / 2);
        }
        noStroke();
        fill(0);
        ellipse(this.m, 0, width / 2, width / 2);
        this.m += 0.3;


        noStroke();
        this.theta += TAU / 360;
        let y = this.theta;

        fill(240, 90, 30);
        beginShape();
        vertex(0, height);
        for (var x = 0 - width; x < width; x += 12) {
            vertex(x + 6, height / 2 + 150 + sin(y) * 60);
            y += TAU / 360 * 1.2;
        }
        vertex(width, height);
        endShape();

        fill(240, 90, 51);
        beginShape();
        vertex(0, height);
        for (var x = 0 - width; x < width; x += 12) {
            vertex(x + 6, height / 2 + 180 + sin(y) * 60);
            y += TAU / 360 * 0.8;
        }
        vertex(width, height);
        endShape();

        fill(240, 90, 72);
        beginShape();
        vertex(0, height);
        for (var x = 0 - width; x < width; x += 12) {
            vertex(x + 6, height / 2 + 190 + sin(y) * 60);
            y += TAU / 360 * 0.6;
        }
        vertex(width, height);
        endShape();

        fill(240, 90, 99);
        beginShape();
        vertex(0, height);
        for (var x = 0 - width; x < width; x += 12) {
            vertex(x + 6, height / 2 + 270 + sin(y) * 30);
            y += TAU / 360 * 0.3;
        }
        vertex(width, height);
        endShape();
    }

    //关于我们
    about() {

        fill(0, 0, 99);
        textSize(30);
        text("作者：能吃两个西瓜", this.s3tx, this.s3ty + 150);
        text("工具：p5.js", this.s3tx, this.s3ty + 60 + 180);
    }

}

class gg {
    constructor() {
        //sea
        this.xx = random(width / 2 - 30, width / 2 + 30);
        this.x = 0;
        this.y = 0;
        this.yy = -30;

        //boss
        this.bx = random(width);
        this.bh = random(360);
        this.bw = random(90, width * 3 / 4);
        this.by = -this.bw;

        this.bx1 = random(width);
        this.bh1 = random(360);
        this.bw1 = random(60, width / 2);
        this.by1 = -this.bw1;

        this.bx2 = random(width);
        this.bw2 = random(30, width / 6);
        this.by2 = -this.bw2;


        //how
        this.hx = width;
        this.str = [];
        this.str[0] = "夜深了，小船随时可能触礁沉海，请使用鼠标为桨，生存到日出";
        this.str[1] = "海里的深色小鱼不会撞到小船";
        this.str[2] = "暗礁的颜色亮度跟小船一样很容易识别";
        this.hr = 0;

        //得分
        this.scorex = 0;
    }

    sea() {
        background(240, 90, 15, 0.6); //深海

        //太阳鱼
        stroke(60, 51, 30, 0.6);
        fill(0, 0, 30, 0.6);
        strokeWeight(sin(TAU / 360 * this.x) * 6);
        ellipse(this.xx + cos(TAU / 360 * this.x) * 51, this.yy, 9, 9);
        this.x += 0.6;
        this.yy += 0.72;
        if (this.yy >= height) {
            this.yy = 0;
        }

        //水星鱼
        stroke(240, 51, 30, 0.6);
        strokeWeight(sin(TAU / 360 * this.x) * 9);
        ellipse(this.xx + cos(TAU / 360 * this.x) * 120, this.y, 3, 3);
        this.x += 0.6;
        this.y += 0.6;
        if (this.y >= height) {
            this.y = 0;
        }
    }

    play() {
        noStroke();
        fill(0, 30, 30);
        rectMode(CENTER);
        rect(mouseX, mouseY, 15, 30);
    }

    boss() {
        //boss1
        noStroke();
        fill(0, 0, 60);
        ellipse(this.bx, this.by, this.bw, this.bw);
        fill(0, 0, 21);
        textAlign(CENTER);
        textSize(this.bw / 3);
        text("冰川", this.bx, this.by);
        this.by += 0.6;
        if (this.by > height + this.bw) {
            this.by = -this.bw;
            this.bx = random(width);
            this.bh = random(360);
            this.scorex++;
        }

        //boos2
        noStroke();
        fill(this.bh1, 30, 30);
        ellipse(this.bx1, this.by1, this.bw1, this.bw1);
        fill(0, 0, 60);
        textAlign(CENTER);
        textSize(this.bw1 / 3);
        text("暗礁", this.bx1, this.by1);
        this.by1 += 1.5;
        if (this.by1 > height + this.bw1) {
            this.by1 = -this.bw1;
            this.bx1 = random(width);
            this.bh1 = random(360);
            this.scorex++;
        }

        //boos3
        noStroke();
        fill(0, 0, 15);
        ellipse(this.bx2, this.by2, this.bw2, this.bw2);
        fill(0, 0, 60);
        textAlign(CENTER);
        textSize(this.bw2 / 3);
        text("未知", this.bx2, this.by2);
        this.by2 += 4.2;
        if (this.by2 > height + this.bw2) {
            this.by2 = -this.bw2;
            this.bx2 = random(width);
            this.scorex++;
        }
    }

    how() {
        noStroke();
        fill(0, 0, 0, 0.5);
        rectMode(CENTER)
        rect(width / 2, height - 10, width, 21);

        noStroke();
        strokeWeight(1);
        fill(0, 0, 99);
        textSize(15);
        text(this.str[this.hr], this.hx, height - 3);
        this.hx -= 1;
        this.htw = textWidth(this.str[this.hr]);
        if (this.hx < -this.htw) {
            this.hx = width;
            this.hr = int(random(3));
        }
    }

    over() {
        if (dist(mouseX, mouseY, this.bx, this.by) < this.bw / 2 ||
            dist(mouseX, mouseY, this.bx1, this.by1) < this.bw1 / 2 ||
            dist(mouseX, mouseY, this.bx2, this.by2) < this.bw2 / 2
        ) {
            this.by = 0;
            this.by1 = 0;
            this.by2 = 0;
            this.scorex = 0;
            ss.showScene(s02);
            this.scorex = 0;
        }
    }

    score() {
        noStroke();
        fill(0, 0, 90);
        text("躲避：" + this.scorex + " 次", width / 12, height / 12);
    }
}
