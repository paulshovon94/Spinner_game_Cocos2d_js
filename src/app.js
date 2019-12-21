var INITIALIZED = false;
var HelloWorldLayer = cc.Layer.extend({
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
        

        var menuItem1 = new cc.MenuItemFont("Spin", play);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);

        return true;
    },

    show: function () {
        console.log("hello");
    },

});


var play = function () {
    var scene = new HelloWorldScene2();
    cc.director.pushScene(scene);
};

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        if (INITIALIZED == false) {
            INITIALIZED = true;

            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});


// //Mouse click
        // var spiner = this;
        // if (cc.sys.capabilities.hasOwnProperty('mouse'))
        // {
        // 	cc.eventManager.addListener(
        // 	{
        // 		event: cc.EventListener.MOUSE,

        // 		onMouseDown: function(event)
        // 		{
        // 			if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
        // 			{
        //                 console.log("hello");
        // 				//spin.show();
        // 			}
        // 		}
        // 	}, this);
        // }




        // var sprite = new cc.Sprite.create(res.wheel_png);
        // sprite.setAnchorPoint(cc.p(0.5, 0.5));
        // sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        // this.addChild(sprite, 0);
        // //rotate
        // var times = Math.floor(Math.random()*7) + 0;
        // var angel = times * 51;
        // var repeat_action = cc.RotateBy.create(2,angel).easing(cc.easeOut(3.0));
        // sprite.runAction(repeat_action);
        // // //play button
        // // var sprite = new cc.Sprite.create(res.play_png);
        // // sprite.setAnchorPoint(cc.p(0.5, 0.5));
        // // sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        // // this.addChild(sprite, 0);
        // //curser
        // var sprite = new cc.Sprite.create(res.pointer_png);
        // sprite.setAnchorPoint(cc.p(0.5, 0.5));
        // sprite.setPosition(cc.p(size.width / 2, size.height*3.60 / 4));
        // this.addChild(sprite, 0);
        // //label
        // var label = new cc.LabelTTF(times%7,"Areal");
        // label.setFontSize(40);
        // label.setPosition(cc.p(size.width/6,size.height/2));
        // label.setColor(cc.color(255,0,0));
        // this.addChild(label);

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
