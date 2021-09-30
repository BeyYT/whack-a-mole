gdjs.multiCode = {};
gdjs.multiCode.GDNewObjectObjects1= [];
gdjs.multiCode.GDNewObjectObjects2= [];
gdjs.multiCode.GDcharacterObjects1= [];
gdjs.multiCode.GDcharacterObjects2= [];
gdjs.multiCode.GDNewObject23Objects1= [];
gdjs.multiCode.GDNewObject23Objects2= [];
gdjs.multiCode.GDNewObject2Objects1= [];
gdjs.multiCode.GDNewObject2Objects2= [];
gdjs.multiCode.GDNewObject3Objects1= [];
gdjs.multiCode.GDNewObject3Objects2= [];

gdjs.multiCode.conditionTrue_0 = {val:false};
gdjs.multiCode.condition0IsTrue_0 = {val:false};
gdjs.multiCode.condition1IsTrue_0 = {val:false};
gdjs.multiCode.condition2IsTrue_0 = {val:false};
gdjs.multiCode.condition3IsTrue_0 = {val:false};
gdjs.multiCode.condition4IsTrue_0 = {val:false};
gdjs.multiCode.conditionTrue_1 = {val:false};
gdjs.multiCode.condition0IsTrue_1 = {val:false};
gdjs.multiCode.condition1IsTrue_1 = {val:false};
gdjs.multiCode.condition2IsTrue_1 = {val:false};
gdjs.multiCode.condition3IsTrue_1 = {val:false};
gdjs.multiCode.condition4IsTrue_1 = {val:false};


gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.multiCode.GDcharacterObjects1});gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.multiCode.GDcharacterObjects1});gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.multiCode.GDcharacterObjects1});gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.multiCode.GDNewObject3Objects1});gdjs.multiCode.eventsList0 = function(runtimeScene) {

{


gdjs.multiCode.condition0IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timespwan")), "p");
}if (gdjs.multiCode.condition0IsTrue_0.val) {
gdjs.multiCode.GDcharacterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects, gdjs.randomInRange(150, 900), gdjs.randomInRange(400, 650), "");
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].setAnimationSpeedScale(1 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p");
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].resetTimer("timetohit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.multiCode.GDcharacterObjects1);

gdjs.multiCode.condition0IsTrue_0.val = false;
gdjs.multiCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.multiCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.multiCode.GDcharacterObjects1[i].getAnimation() == 3 ) {
        gdjs.multiCode.condition0IsTrue_0.val = true;
        gdjs.multiCode.GDcharacterObjects1[k] = gdjs.multiCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.multiCode.GDcharacterObjects1.length = k;}if ( gdjs.multiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.multiCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.multiCode.GDcharacterObjects1[i].hasAnimationEnded() ) {
        gdjs.multiCode.condition1IsTrue_0.val = true;
        gdjs.multiCode.GDcharacterObjects1[k] = gdjs.multiCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.multiCode.GDcharacterObjects1.length = k;}}
if (gdjs.multiCode.condition1IsTrue_0.val) {
/* Reuse gdjs.multiCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.multiCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject23"), gdjs.multiCode.GDNewObject23Objects1);
{runtimeScene.getVariables().get("speed").setNumber(1 + 0.3);
}{runtimeScene.getVariables().get("timespwan").setNumber(1.5 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{runtimeScene.getVariables().get("timedie").setNumber(6 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{for(var i = 0, len = gdjs.multiCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.multiCode.GDNewObject2Objects1[i].setString("score:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("score")));
}
}{for(var i = 0, len = gdjs.multiCode.GDNewObject23Objects1.length ;i < len;++i) {
    gdjs.multiCode.GDNewObject23Objects1[i].setString("enemy's score" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("scorev2")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.multiCode.GDcharacterObjects1);

gdjs.multiCode.condition0IsTrue_0.val = false;
gdjs.multiCode.condition1IsTrue_0.val = false;
gdjs.multiCode.condition2IsTrue_0.val = false;
gdjs.multiCode.condition3IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.multiCode.condition0IsTrue_0.val ) {
{
gdjs.multiCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.multiCode.condition1IsTrue_0.val ) {
{
gdjs.multiCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player")) == 1;
}if ( gdjs.multiCode.condition2IsTrue_0.val ) {
{
{gdjs.multiCode.conditionTrue_1 = gdjs.multiCode.condition3IsTrue_0;
gdjs.multiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8231412);
}
}}
}
}
if (gdjs.multiCode.condition3IsTrue_0.val) {
/* Reuse gdjs.multiCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.p2p.sendVariableToAll("score", runtimeScene.getVariables().get("score"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.multiCode.GDcharacterObjects1);

gdjs.multiCode.condition0IsTrue_0.val = false;
gdjs.multiCode.condition1IsTrue_0.val = false;
gdjs.multiCode.condition2IsTrue_0.val = false;
gdjs.multiCode.condition3IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDcharacterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.multiCode.condition0IsTrue_0.val ) {
{
gdjs.multiCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.multiCode.condition1IsTrue_0.val ) {
{
gdjs.multiCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player")) == 2;
}if ( gdjs.multiCode.condition2IsTrue_0.val ) {
{
{gdjs.multiCode.conditionTrue_1 = gdjs.multiCode.condition3IsTrue_0;
gdjs.multiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8233764);
}
}}
}
}
if (gdjs.multiCode.condition3IsTrue_0.val) {
/* Reuse gdjs.multiCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.p2p.sendVariableToAll("score2", runtimeScene.getVariables().get("score"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.multiCode.GDcharacterObjects1);

gdjs.multiCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.multiCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.multiCode.GDcharacterObjects1[i].timerElapsedTime("timetohit", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timedie"))) ) {
        gdjs.multiCode.condition0IsTrue_0.val = true;
        gdjs.multiCode.GDcharacterObjects1[k] = gdjs.multiCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.multiCode.GDcharacterObjects1.length = k;}if (gdjs.multiCode.condition0IsTrue_0.val) {
/* Reuse gdjs.multiCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.multiCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.multiCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.multiCode.GDNewObject3Objects1);

gdjs.multiCode.condition0IsTrue_0.val = false;
gdjs.multiCode.condition1IsTrue_0.val = false;
gdjs.multiCode.condition2IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.multiCode.mapOfGDgdjs_46multiCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.multiCode.condition0IsTrue_0.val ) {
{
gdjs.multiCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.multiCode.condition1IsTrue_0.val ) {
{
{gdjs.multiCode.conditionTrue_1 = gdjs.multiCode.condition2IsTrue_0;
gdjs.multiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8236628);
}
}}
}
if (gdjs.multiCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "whacK  a amcoxce", false);
}}

}


{


gdjs.multiCode.condition0IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("score", false);
}if (gdjs.multiCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("scorev2").setString(gdjs.evtTools.p2p.getEventData("score"));
}}

}


{


gdjs.multiCode.condition0IsTrue_0.val = false;
{
gdjs.multiCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("score2", false);
}if (gdjs.multiCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("scorev2").setString(gdjs.evtTools.p2p.getEventData("score2"));
}}

}


};

gdjs.multiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.multiCode.GDNewObjectObjects1.length = 0;
gdjs.multiCode.GDNewObjectObjects2.length = 0;
gdjs.multiCode.GDcharacterObjects1.length = 0;
gdjs.multiCode.GDcharacterObjects2.length = 0;
gdjs.multiCode.GDNewObject23Objects1.length = 0;
gdjs.multiCode.GDNewObject23Objects2.length = 0;
gdjs.multiCode.GDNewObject2Objects1.length = 0;
gdjs.multiCode.GDNewObject2Objects2.length = 0;
gdjs.multiCode.GDNewObject3Objects1.length = 0;
gdjs.multiCode.GDNewObject3Objects2.length = 0;

gdjs.multiCode.eventsList0(runtimeScene);
return;

}

gdjs['multiCode'] = gdjs.multiCode;
