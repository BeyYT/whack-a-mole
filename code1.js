gdjs.whacK_32_32a_32amcoxceCode = {};
gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects1= [];
gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects2= [];
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1= [];
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects2= [];
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects1= [];
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects2= [];
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1= [];
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects2= [];

gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_0 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition3IsTrue_0 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_1 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_1 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_1 = {val:false};
gdjs.whacK_32_32a_32amcoxceCode.condition3IsTrue_1 = {val:false};


gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1});gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1});gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1});gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1});gdjs.whacK_32_32a_32amcoxceCode.eventsList0 = function(runtimeScene) {

{


gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
{
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timespwan")), "p");
}if (gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val) {
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDcharacterObjects1Objects, gdjs.randomInRange(150, 900), gdjs.randomInRange(400, 650), "");
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].setAnimationSpeedScale(1 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p");
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].resetTimer("timetohit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1);

gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].getAnimation() == 3 ) {
        gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = true;
        gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[k] = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length = k;}if ( gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].hasAnimationEnded() ) {
        gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = true;
        gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[k] = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length = k;}}
if (gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val) {
/* Reuse gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects1);
{runtimeScene.getVariables().get("speed").setNumber(1 + 0.3);
}{runtimeScene.getVariables().get("timespwan").setNumber(1.5 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{runtimeScene.getVariables().get("timedie").setNumber(6 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("speed")));
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects1[i].setString("score:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1);

gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0.val = false;
{
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDcharacterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val ) {
{
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val ) {
{
{gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1 = gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0;
gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7236780);
}
}}
}
if (gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0.val) {
/* Reuse gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1);

gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].timerElapsedTime("timetohit", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timedie"))) ) {
        gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = true;
        gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[k] = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length = k;}if (gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val) {
/* Reuse gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1 */
{runtimeScene.getVariables().get("die").setNumber(1);
}{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
{
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("die")) == 1;
}if (gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1);
{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = false;
{
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("die")) == 1;
}if ( gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val ) {
{
{gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1 = gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0;
gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7289660);
}
}}
if (gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects1);
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1.length = 0;

{for(var i = 0, len = gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeInOutQuad", 250, false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDNewObject3Objects1Objects, 554, 324, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1);

gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = false;
gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0.val = false;
{
gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.whacK_32_32a_32amcoxceCode.mapOfGDgdjs_46whacK_9532_9532a_9532amcoxceCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.whacK_32_32a_32amcoxceCode.condition0IsTrue_0.val ) {
{
gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.whacK_32_32a_32amcoxceCode.condition1IsTrue_0.val ) {
{
{gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1 = gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0;
gdjs.whacK_32_32a_32amcoxceCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7534684);
}
}}
}
if (gdjs.whacK_32_32a_32amcoxceCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "whacK  a amcoxce", false);
}}

}


};

gdjs.whacK_32_32a_32amcoxceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects1.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDNewObjectObjects2.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects1.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDcharacterObjects2.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects1.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject2Objects2.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects1.length = 0;
gdjs.whacK_32_32a_32amcoxceCode.GDNewObject3Objects2.length = 0;

gdjs.whacK_32_32a_32amcoxceCode.eventsList0(runtimeScene);
return;

}

gdjs['whacK_32_32a_32amcoxceCode'] = gdjs.whacK_32_32a_32amcoxceCode;
