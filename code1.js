gdjs.gameCode = {};
gdjs.gameCode.GDNewObjectObjects1= [];
gdjs.gameCode.GDNewObjectObjects2= [];
gdjs.gameCode.GDcharacterObjects1= [];
gdjs.gameCode.GDcharacterObjects2= [];
gdjs.gameCode.GDNewObject2Objects1= [];
gdjs.gameCode.GDNewObject2Objects2= [];
gdjs.gameCode.GDNewObject3Objects1= [];
gdjs.gameCode.GDNewObject3Objects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.condition3IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};
gdjs.gameCode.condition3IsTrue_1 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.gameCode.GDNewObject3Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.gameCode.GDNewObject3Objects1});gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timespwan")), "p");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDcharacterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, gdjs.randomInRange(150, 900), gdjs.randomInRange(400, 650), "");
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setAnimationSpeedScale(1 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "p");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p");
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].resetTimer("timetohit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].getAnimation() == 3 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].hasAnimationEnded() ) {
        gdjs.gameCode.condition1IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.gameCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);
{runtimeScene.getVariables().get("timespwan").setNumber(1.5 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{runtimeScene.getVariables().get("timedie").setNumber(6 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{for(var i = 0, len = gdjs.gameCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewObject2Objects1[i].setString("score:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("score")));
}
}{runtimeScene.getVariables().get("speed").add(0.001);
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setScale(1.27);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
gdjs.gameCode.condition2IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition1IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition2IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8201108);
}
}}
}
if (gdjs.gameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("score").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].timerElapsedTime("timetohit", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timedie"))) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setAnimationName("down");
}
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].pauseAnimation();
}
}{runtimeScene.getVariables().get("die").setNumber(1);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("die")) == 1;
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("die")) == 1;
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8204660);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.gameCode.GDNewObjectObjects1);
gdjs.gameCode.GDNewObject3Objects1.length = 0;

{for(var i = 0, len = gdjs.gameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 250, false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject3Objects1Objects, 554, 324, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.gameCode.GDNewObject3Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
gdjs.gameCode.condition2IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition1IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition2IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8206100);
}
}}
}
if (gdjs.gameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("speed").setNumber(1 + 0.3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].hasAnimationEnded() ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].isCurrentAnimationName("down") ) {
        gdjs.gameCode.condition1IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDNewObjectObjects1.length = 0;
gdjs.gameCode.GDNewObjectObjects2.length = 0;
gdjs.gameCode.GDcharacterObjects1.length = 0;
gdjs.gameCode.GDcharacterObjects2.length = 0;
gdjs.gameCode.GDNewObject2Objects1.length = 0;
gdjs.gameCode.GDNewObject2Objects2.length = 0;
gdjs.gameCode.GDNewObject3Objects1.length = 0;
gdjs.gameCode.GDNewObject3Objects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
