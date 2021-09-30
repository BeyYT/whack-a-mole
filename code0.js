gdjs.mainCode = {};
gdjs.mainCode.GDmainObjects1= [];
gdjs.mainCode.GDmainObjects2= [];
gdjs.mainCode.GDNewObjectObjects1= [];
gdjs.mainCode.GDNewObjectObjects2= [];
gdjs.mainCode.GDNewObject2Objects1= [];
gdjs.mainCode.GDNewObject2Objects2= [];
gdjs.mainCode.GDNewObject3Objects1= [];
gdjs.mainCode.GDNewObject3Objects2= [];
gdjs.mainCode.GDNewObjec5Objects1= [];
gdjs.mainCode.GDNewObjec5Objects2= [];
gdjs.mainCode.GDNewObject4Objects1= [];
gdjs.mainCode.GDNewObject4Objects2= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};
gdjs.mainCode.condition3IsTrue_0 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.mainCode.GDNewObject4Objects1});gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewObjec5Objects1Objects = Hashtable.newFrom({"NewObjec5": gdjs.mainCode.GDNewObjec5Objects1});gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.mainCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.mainCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.mainCode.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.mainCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject2Objects1[i].setOpacity(35);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject2Objects1[i].addForce(30, 0, 1);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject3Objects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeInOutQuad", 450, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject4Objects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeInOutQuad", 450, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.mainCode.GDNewObject4Objects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.mainCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.mainCode.GDNewObject3Objects1);
/* Reuse gdjs.mainCode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject3Objects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 350, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewObject4Objects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 350, false);
}
}{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObjec5"), gdjs.mainCode.GDNewObjec5Objects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDNewObjec5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "vs", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.mainCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.mainCode.GDNewObject4Objects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
gdjs.mainCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDNewObject3Objects1[i].getOpacity() == 0 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDNewObject3Objects1[k] = gdjs.mainCode.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDNewObject3Objects1.length = k;}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDNewObject4Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDNewObject4Objects1[i].getOpacity() == 0 ) {
        gdjs.mainCode.condition1IsTrue_0.val = true;
        gdjs.mainCode.GDNewObject4Objects1[k] = gdjs.mainCode.GDNewObject4Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDNewObject4Objects1.length = k;}if ( gdjs.mainCode.condition1IsTrue_0.val ) {
{
gdjs.mainCode.condition2IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}}
}
if (gdjs.mainCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDmainObjects1.length = 0;
gdjs.mainCode.GDmainObjects2.length = 0;
gdjs.mainCode.GDNewObjectObjects1.length = 0;
gdjs.mainCode.GDNewObjectObjects2.length = 0;
gdjs.mainCode.GDNewObject2Objects1.length = 0;
gdjs.mainCode.GDNewObject2Objects2.length = 0;
gdjs.mainCode.GDNewObject3Objects1.length = 0;
gdjs.mainCode.GDNewObject3Objects2.length = 0;
gdjs.mainCode.GDNewObjec5Objects1.length = 0;
gdjs.mainCode.GDNewObjec5Objects2.length = 0;
gdjs.mainCode.GDNewObject4Objects1.length = 0;
gdjs.mainCode.GDNewObject4Objects2.length = 0;

gdjs.mainCode.eventsList0(runtimeScene);
return;

}

gdjs['mainCode'] = gdjs.mainCode;
