gdjs.vsCode = {};
gdjs.vsCode.GDNewObjectObjects1= [];
gdjs.vsCode.GDNewObjectObjects2= [];
gdjs.vsCode.GDNewObject2Objects1= [];
gdjs.vsCode.GDNewObject2Objects2= [];
gdjs.vsCode.GDNewObject3Objects1= [];
gdjs.vsCode.GDNewObject3Objects2= [];
gdjs.vsCode.GDNewObject4Objects1= [];
gdjs.vsCode.GDNewObject4Objects2= [];
gdjs.vsCode.GDNewObject5Objects1= [];
gdjs.vsCode.GDNewObject5Objects2= [];

gdjs.vsCode.conditionTrue_0 = {val:false};
gdjs.vsCode.condition0IsTrue_0 = {val:false};
gdjs.vsCode.condition1IsTrue_0 = {val:false};
gdjs.vsCode.condition2IsTrue_0 = {val:false};


gdjs.vsCode.mapOfGDgdjs_46vsCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.vsCode.GDNewObject5Objects1});gdjs.vsCode.eventsList0 = function(runtimeScene) {

{


gdjs.vsCode.condition0IsTrue_0.val = false;
{
gdjs.vsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.vsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.vsCode.GDNewObject4Objects1);
{gdjs.evtTools.p2p.overrideId(gdjs.evtTools.common.toString(gdjs.randomInRange(10000, 99999)));
}{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{for(var i = 0, len = gdjs.vsCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.vsCode.GDNewObject4Objects1[i].setString("Your Game ID: " + gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.vsCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.vsCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.vsCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.vsCode.GDNewObject2Objects1[i].setString("join game with id: " + (( gdjs.vsCode.GDNewObject3Objects1.length === 0 ) ? "" :gdjs.vsCode.GDNewObject3Objects1[0].getString()));
}
}}

}


{


gdjs.vsCode.condition0IsTrue_0.val = false;
{
gdjs.vsCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("con", false);
}if (gdjs.vsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("player").setNumber(1);
}{gdjs.evtTools.p2p.sendDataToAll("nextsc", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "multi", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.vsCode.GDNewObject5Objects1);

gdjs.vsCode.condition0IsTrue_0.val = false;
gdjs.vsCode.condition1IsTrue_0.val = false;
{
gdjs.vsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.vsCode.mapOfGDgdjs_46vsCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.vsCode.condition0IsTrue_0.val ) {
{
gdjs.vsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.vsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.vsCode.GDNewObject3Objects1);
{runtimeScene.getGame().getVariables().get("player").setNumber(2);
}{gdjs.evtTools.p2p.connect((( gdjs.vsCode.GDNewObject3Objects1.length === 0 ) ? "" :gdjs.vsCode.GDNewObject3Objects1[0].getString()));
}{gdjs.evtTools.p2p.sendDataToAll("con", "");
}}

}


{


gdjs.vsCode.condition0IsTrue_0.val = false;
{
gdjs.vsCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("nextsc", false);
}if (gdjs.vsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "multi", false);
}}

}


};

gdjs.vsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.vsCode.GDNewObjectObjects1.length = 0;
gdjs.vsCode.GDNewObjectObjects2.length = 0;
gdjs.vsCode.GDNewObject2Objects1.length = 0;
gdjs.vsCode.GDNewObject2Objects2.length = 0;
gdjs.vsCode.GDNewObject3Objects1.length = 0;
gdjs.vsCode.GDNewObject3Objects2.length = 0;
gdjs.vsCode.GDNewObject4Objects1.length = 0;
gdjs.vsCode.GDNewObject4Objects2.length = 0;
gdjs.vsCode.GDNewObject5Objects1.length = 0;
gdjs.vsCode.GDNewObject5Objects2.length = 0;

gdjs.vsCode.eventsList0(runtimeScene);
return;

}

gdjs['vsCode'] = gdjs.vsCode;
