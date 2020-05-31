var ss;

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
        translate(x, y);
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
        translate(x, y);
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
        translate(x, y);
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
        translate(x, y);
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
        translate(x, y);
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
        translate(x, y);
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
        translate(x, y);
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
