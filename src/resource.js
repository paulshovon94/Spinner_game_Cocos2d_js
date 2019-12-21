var folder = "";

if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    pointer_png : folder+ "pointer.png",
    wheel_png : folder+ "wheel.png",
    play_png : folder+ "play.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}