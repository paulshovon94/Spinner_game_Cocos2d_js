var INITIALIZED_2 = false;

var HelloWorldLayer2 = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size

        var size = cc.winSize;

        // //Mouse click
        // //var spiner = this;
        // if (cc.sys.capabilities.hasOwnProperty('mouse')) {
        //     cc.eventManager.addListener(
        //         {
        //             event: cc.EventListener.MOUSE,

        //             onMouseDown: function (event) {
        //                 if (event.getButton() == cc.EventMouse.BUTTON_LEFT) {
        //                     //console.log("hello");
        //                 }
        //             }
        //         }, this);
        // }

        //spinner
        var sprite = new cc.Sprite.create(res.wheel_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);
        //rotate
        var times = Math.floor(Math.random() * 30) + 10;
        var angel = times * 51;
        var repeat_action = cc.RotateBy.create(5, angel).easing(cc.easeExponentialOut(2.35));
        sprite.runAction(repeat_action);

        //pointer
        var sprite = new cc.Sprite.create(res.pointer_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height * 3.55 / 4));
        this.addChild(sprite, 0);

        //var seq = cc.repeat(cc.sequence(cc.RotateBy.create(1, 20), cc.RotateBy.create(1,-40)), 5);
        var action = cc.speed(cc.sequence(cc.RotateBy.create(1, -20), cc.RotateBy.create(1, 40),
            cc.RotateBy.create(1, -40), cc.RotateBy.create(.8, 40), cc.RotateBy.create(.5, -40),
            cc.RotateBy.create(.5, 40), cc.RotateBy.create(.5, -20)), 1);
        sprite.runAction(action);

        var sprite_action = cc.TintBy.create(2, 153, 255, 179);
        var repeat_action = cc.Repeat.create(sprite_action, 3);
        sprite.runAction(repeat_action);

        //rotate 
        // var sprite_action = cc.RotateBy.create(5, -1);
        // var repeat_action = cc.Repeat.create(sprite_action, 5).easing(cc.easeBounceOut());
        // sprite.runAction(repeat_action);
        // var sprite_action1 = cc.RotateBy.create(5, -25).easing(cc.easeBounceOut());
        // cc.cardinalSplineTo
        // sprite.runAction(sprite_action1);

        //label
        var label = new cc.LabelTTF("Number", "Areal");
        label.setFontSize(40);
        label.setPosition(cc.p(size.width / 6, size.height * .8 / 2));
        label.setColor(cc.color(255, 255, 255));
        this.addChild(label);


        var component = this;
        component.scheduleOnce(function () {
            if (times % 7 == 0) {
                var label = new cc.LabelTTF("0", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 255, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);
            } else if (times % 7 == 1) {
                var label = new cc.LabelTTF("1", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(153, 255, 153));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);

            } else if (times % 7 == 2) {
                var label = new cc.LabelTTF("2", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 102, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);

            } else if (times % 7 == 3) {
                var label = new cc.LabelTTF("3", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 178, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);

            } else if (times % 7 == 4) {
                var label = new cc.LabelTTF("4", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 255, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);

            } else if (times % 7 == 5) {
                var label = new cc.LabelTTF("5", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 102, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);

            } else if (times % 7 == 6) {
                var label = new cc.LabelTTF("6", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 178, 102));
                this.addChild(label);
                //fade in 
                label.setOpacity(0);
                var sprite_action = cc.FadeIn.create(3);
                label.runAction(sprite_action);
            } else {
                var label = new cc.LabelTTF("Erro 404", "Areal");
                label.setFontSize(60);
                label.setPosition(cc.p(size.width / 6, size.height / 2));
                label.setColor(cc.color(255, 255, 255));
                this.addChild(label);
            }
        }, 5);

        //Menu
        var menuItem1 = new cc.MenuItemFont("Spin Again", pop);
        var menu = new cc.Menu(menuItem1);
        menu.setPosition(cc.p(size.width * 5 / 6, size.height / 2));
        this.addChild(menu);

        return true;
    },

    update: function (dt) {
        cc.log("Update is called : " + dt);

    },

    print: function (dt) {
        cc.log("Print is called : " + dt);

    },


});

var show = function () {
    console.log("hello");
};

var pop = function () {
    // //Go to menu
    // INITIALIZED_2 = false;
    // cc.director.popScene();
    var scene = new HelloWorldScene2();
    INITIALIZED_2 = false;
    cc.director.pushScene(scene);
};


var HelloWorldScene2 = cc.Scene.extend({
    onEnter: function () {
        this._super();

        if (INITIALIZED_2 == false) {
            INITIALIZED_2 = true;

            var layer = new HelloWorldLayer2();
            this.addChild(layer);
        }

    }
});

// // Fade In
        // label.setOpacity(0);
        // var sprite_action = cc.FadeIn.create(2);
        // label.runAction(sprite_action);

        // //schedule
        //this.scheduleUpdate();
        //this.schedule(this.print, 3);

/*
        var angle = spinNumber * 51;
        var spinNumber = Math.floor((Math.random()*360) + 0);
        var angle = spinNumber * 51;
        var action = cc.RotateBy(18, angle).easing(cc.easeOut(3.0));
        sprite.runAction(action);*/
/*var sprite_action = cc.RotateBy.create(2,50);
var times = Math.floor(Math.random()*7)+1;
var repeat_action = cc.Repeat.create(sprite_action, times).easing(cc.easeOut(3.0));
sprite.runAction(repeat_action);
*/

        //play button

        //scale to
        //var sprite_action =cc.ScaleTo.create(3,.5,.8);
        //sprite.runAction(sprite_action);
        //sequence
        //var sprite_action1 = cc.MoveBy.create(1,cc.p(50,100));
        //var sprite_action2 = cc.FadeTo.create(2.0,0);
        //sequence
        //var sprite_action1 = cc.MoveBy.create(1,cc.p(50,100));
        //var sprite_action2 = cc.FadeTo.create(2.0,0);
        //var sequence_action = cc.Sequence.create(sprite_action1,sprite_action2);
        //sprite.runAction(sequence_action);
        //this will run at the same time
        //sprite.runAction(sprite_action);
        //sprite.runAction(sprite_action2);
        //rotateBy
        //var sprite_action = cc.RotateBy.create(2,45);
        //var repeat_action = cc.Repeat.create(sprite_action, 3);
        //sprite.runAction(repeat_action);
        //rotate
        //var sprite_action = cc.RotateTo.create(2,45);
        //sprite.runAction(sprite_action);
        //repeatforever
        //var sprite_action = cc.RepeatForever.create(cc.MoveTo.create(0.5,cc.p(5,10)));
        //sprite.runAction(sprite_action);
        //repeat
        //var sprite_action = cc.Repeat.create(cc.MoveBy.create(0.5, cc.p(50, 60)), 5);
        //sprite.runAction(sprite_action); 
        //position
        //var sprite_action= cc.Place.create(cc.p(200,150));
        //sprite.runAction(sprite_action); 
        //BezierBy
        //var bezier = [cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(100,100)];
        //var sprite_action = cc.BezierBy.create(3,bezier);
        //sprite.runAction(sprite_action);
        //BezierTo
        //var bezier = [cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(100,100)];
        //var sprite_action = cc.BezierTo.create(3,bezier);
        //sprite.runAction(sprite_action);
        //JumpBy
        //var sprite_action = cc.JumpBy.create(2,cc.p(100,200),50,4);
        //sprite.runAction(sprite_action);
        //Jump by
        //var sprite_action = cc.JumpTo.create(2,cc.p(500,200),50,4);
        //sprite.runAction(sprite_action);
        //move by
        //var sprite_action = cc.MoveBy.create(1,cc.p(50,100));
        //sprite.runAction(sprite_action);
        //move to
        //var sprite_action = cc.MoveTo.create(2,cc.p(50,100));
        //sprite.runAction(sprite_action);